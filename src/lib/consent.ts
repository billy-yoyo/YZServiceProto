
const CONSENT_KEY = 'consent';

export interface Consent {
    time: string
}

export const ensure_consent = (): void => {
    const consent = get_consent()
    if (!consent) {
        window.location.pathname = '/consent-form'
    }
};

export const get_consent = (): Consent | undefined => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (consent) {
        return JSON.parse(consent);
    }
};

export const give_consent = () => {
    const consent: Consent = {
        time: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
};
