import { goto } from "./config";

const CONSENT_KEY = 'consent';

export interface Consent {
    time: string,
    id: string,
    name: string,
    email: string
}

export const ensureConsent = (): void => {
    const consent = getConsent()
    if (!consent) {
        goto('/info');
    }
};

export const ensureNoConsent = (): void => {
    const consent = getConsent();
    if (consent) {
        goto("/home");
    }
}

export const getConsent = (): Consent | undefined => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (consent) {
        return JSON.parse(consent);
    }
};

export const giveConsent = (name: string, email: string) => {
    const consent: Consent = {
        time: new Date().toISOString(),
        id: crypto.randomUUID(),
        name,
        email
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
};
