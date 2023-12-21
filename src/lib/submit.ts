import { getConsent } from "./consent";
import { TRANSLATIONS } from "./translate/data";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    authDomain: "yzserviceproto.firebaseapp.com",
    projectId: "yzserviceproto",
    databaseURL: "https://yzserviceproto-default-rtdb.europe-west1.firebasedatabase.app",
    messagingSenderId: "233893436528",
    appId: "1:233893436528:web:8a9b81037546435896e8b5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const DATA_VERSION = 1;

const submitToDb = (id: string, data: any): Promise<boolean> => {
    return set(ref(database, `responses/${id}`), data)
        .then(() => {
            console.log("submitted!");
            localStorage.setItem("submitted", "true");
            return true;
        }).catch((e) => {
            console.error(`encountered error when submitting`, e);
            return false;
        })
};

export const submit = (): Promise<boolean> => {
    const submitted = localStorage.getItem("submitted");

    if (submitted) {
        return Promise.resolve(false);
    }

    const consent = getConsent();

    if (!consent) {
        return Promise.resolve(true);
    }

    const serviceData = Object.fromEntries(TRANSLATIONS.cn.services.map(service => 
        [`service_${service.id}`, service.survey.questions.map((question, index) =>
            localStorage.getItem(`survey:${service.id}:question:${index}`)
        )]
    ));

    const data = {
      serviceData,
      dataVersion: DATA_VERSION,
      consentTime: consent.time,
      name: consent.name,
      email: consent.email
    };

    console.log("submitting...");
    return submitToDb(consent.id, data)
};
