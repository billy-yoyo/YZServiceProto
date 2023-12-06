import { getConsent } from "./consent";
import { services } from "./data";

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

    const serviceData = Object.fromEntries(services.map(service => 
        [service.id, service.survey.questions.map((question, index) =>
            localStorage.getItem(`survey:${service.id}:question:${index}`)
        )]
    ));

    const data = {
      serviceData,
      dataVersion: DATA_VERSION,
      consentTime: consent.time
    };

    submitToDb(consent.id, data);

    localStorage.setItem("submitted", "true");
    return true;
};
