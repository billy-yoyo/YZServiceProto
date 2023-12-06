
const CONSENT_KEY = 'consent';

export interface Consent {
    time: string,
    id: string
}

export const ensureConsent = (): void => {
    const consent = getConsent()
    if (!consent) {
        window.location.pathname = '/consent-form'
    }
};

export const getConsent = (): Consent | undefined => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (consent) {
        return JSON.parse(consent);
    }
};

export const giveConsent = () => {
    const consent: Consent = {
        time: new Date().toISOString(),
        id: crypto.randomUUID()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
};
