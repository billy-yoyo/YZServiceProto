import { getConsent } from "./consent";
import { TRANSLATIONS } from "./translate/data";

const DATA_VERSION = 1;

const submitToDb = (id: string, data: any) => {

};

export const submit = () => {
    const submitted = localStorage.getItem("submitted");

    if (submitted) {
        return false;
    }

    const consent = getConsent();

    if (!consent) {
        return false;
    }

    const serviceData = Object.fromEntries(TRANSLATIONS.cn.services.map(service => 
        [service.id, service.survey.questions.map((question, index) =>
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

    submitToDb(consent.id, data);

    localStorage.setItem("submitted", "true");
    return true;
};
