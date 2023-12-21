import { CONSENT_FORM } from "./consentForm";
import { INFORMATION } from "./information";
import { SERVICES } from "./services";

export const TRANSLATIONS = {
    cn: {
        consentForm: CONSENT_FORM["cn"],
        infoTitle: "参与者信息表",
        pleaseAnswerHere: "请在此处填写。。。",
        buttons: {
            ok: "好的",
            agree: "同意",
            start: "开始",
            continue: "继续",
            submit: "提交",
            gotoSurvey: "Go to survey"
        },
        labels: {
            done: "完成"
        },
        information: INFORMATION["cn"],
       services: SERVICES["cn"]
    },
    en: {
        consentForm: CONSENT_FORM["en"],
        infoTitle: "PARTICIPANT INFORMATION SHEET",
        pleaseAnswerHere: "Please answer here...",
        buttons: {
            ok: "Ok",
            agree: "Agree",
            start: "Start",
            continue: "Continue",
            submit: "Submit",
            gotoSurvey: "Go to survey"
        },
        labels: {
            done: "Done"
        },
        information: INFORMATION["cn"],
        services: SERVICES["en"]
    }
} as const;

export type Language = keyof (typeof TRANSLATIONS)
export type TranslationObject = (typeof TRANSLATIONS)[Language]

export type InformationSections = keyof typeof TRANSLATIONS.cn.information.sections;
