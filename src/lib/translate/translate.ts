import { derived, writable } from "svelte/store";
import { TRANSLATIONS, type Language, type TranslationObject } from "./data";

export const t = (lang: Language): TranslationObject => TRANSLATIONS[lang];

const LANGUAGE_KEY = "lang";

const getLang = (): Language => {
    const lang = typeof window !== 'undefined' && localStorage.getItem(LANGUAGE_KEY);
    if (lang === "en" || lang === "cn") {
        return lang;
    } else {
        return "cn";
    }
}

export const language = writable<Language>(getLang());
language.subscribe((lang) => localStorage.setItem(LANGUAGE_KEY, lang));

export const translation = derived(language, lang => TRANSLATIONS[lang]);

export const useService = (sid: number) => derived(translation, t => t.services.find(s => s.id === sid));
