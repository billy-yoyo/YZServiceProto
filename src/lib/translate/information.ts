import type { ArticleIds } from "./articles";
import type { InformationSections } from "./data";

export interface SubSectionArticles {
    articles: ArticleIds[];
}

const SUB_SECTION_TITLES = {
    "cn": {
        preparation: "Preparation",
        studyInUk: "Study in the UK",
        livingInUk: "Living in the UK",
        travelInUk: "Travel in the UK",
        setUp: "Set Up",
        academic: "Academic",
        wellbeing: "Wellbeing",
        languageSupport: "Language Support",
        immigrationAdvice: "Immigration Advice",
        employability: "Employability support services",
        financial: "Financial and funding support",
        social: "Social Support",
        dailyLiving: "Daily Living Support",
        cultural: "Cultural Training"
    },
    "en": {
        preparation: "Preparation",
        studyInUk: "Study in the UK",
        livingInUk: "Living in the UK",
        travelInUk: "Travel in the UK",
        setUp: "Set Up",
        academic: "Academic",
        wellbeing: "Wellbeing",
        languageSupport: "Language Support",
        immigrationAdvice: "Immigration Advice",
        employability: "Employability support services",
        financial: "Financial and funding support",
        social: "Social Support",
        dailyLiving: "Daily Living Support",
        cultural: "Cultural Training"
    }
}

type SubSections = keyof typeof SUB_SECTION_TITLES["cn"];

const SUB_SECTION_ARTICLES: { [key in SubSections]: ArticleIds[] } = {
    preparation: [
        "an-article",
        "something",
        "how-to-do",
        "another-example"
    ],
    studyInUk: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    livingInUk: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    travelInUk: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    setUp: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    academic: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    wellbeing: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    languageSupport: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    immigrationAdvice: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    employability: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    financial: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    social: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    dailyLiving: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ],
    cultural: [
        "an-article",
        "something",
        "how-to-do",
        "another-example",
        "are-you-worried",
        "something-to-read",
        "hello-world"
    ]
};

type SubSectionTranslations = {
    [key in "cn" | "en"]: {
        [key in SubSections]: {
            title: string,
            articles: ArticleIds[]
        }
    }
}

const SUB_SECTIONS: SubSectionTranslations = Object.fromEntries(
    Object.entries(SUB_SECTION_TITLES).map(([lang, subSectionTitles]) => {
        return [lang, Object.fromEntries(
            Object.entries(subSectionTitles).map(([subSection, title]) => {
                return [subSection, {
                    title,
                    articles: SUB_SECTION_ARTICLES[subSection as SubSections]
                }]
            })
        )]
    })
) as SubSectionTranslations;

export const INFORMATION = {
    "cn": {
        sections: {
            preArrival: {
                title: "Information for Pre-Arrival",
                label: "Pre-Arrival",
                subSections: [
                    SUB_SECTIONS["cn"].preparation,
                    SUB_SECTIONS["cn"].studyInUk,
                    SUB_SECTIONS["cn"].livingInUk,
                ]
            },
            settleDown: {
                title: "Information for Settle Down",
                label: "Settle Down",
                subSections: [
                    SUB_SECTIONS["cn"].setUp,
                    SUB_SECTIONS["cn"].livingInUk,
                    SUB_SECTIONS["cn"].studyInUk,
                    SUB_SECTIONS["cn"].travelInUk
                ]
            },
            onCampus: {
                title: "Information for On Campus",
                label: "On Campus",
                subSections: [
                    SUB_SECTIONS["cn"].academic,
                    SUB_SECTIONS["cn"].wellbeing,
                    SUB_SECTIONS["cn"].languageSupport,
                    SUB_SECTIONS["cn"].immigrationAdvice,
                    SUB_SECTIONS["cn"].employability,
                    SUB_SECTIONS["cn"].financial,
                ]
            },
            offCampus: {
                title: "Information for Off Campus",
                label: "Off Campus",
                subSections: [
                    SUB_SECTIONS["cn"].social,
                    SUB_SECTIONS["cn"].dailyLiving,
                    SUB_SECTIONS["cn"].cultural
                ]
            }
        }
    },
    "en": {
        sections: {
            preArrival: {
                title: "Information for Pre-Arrival",
                label: "Pre-Arrival",
                subSections: [
                    SUB_SECTIONS["cn"].preparation,
                    SUB_SECTIONS["cn"].studyInUk,
                    SUB_SECTIONS["cn"].livingInUk,
                ]
            },
            settleDown: {
                title: "Information for Settle Down",
                label: "Settle Down",
                subSections: [
                    SUB_SECTIONS["cn"].setUp,
                    SUB_SECTIONS["cn"].livingInUk,
                    SUB_SECTIONS["cn"].studyInUk,
                    SUB_SECTIONS["cn"].travelInUk
                ]
            },
            onCampus: {
                title: "Information for On Campus",
                label: "On Campus",
                subSections: [
                    SUB_SECTIONS["cn"].academic,
                    SUB_SECTIONS["cn"].wellbeing,
                    SUB_SECTIONS["cn"].languageSupport,
                    SUB_SECTIONS["cn"].immigrationAdvice,
                    SUB_SECTIONS["cn"].employability,
                    SUB_SECTIONS["cn"].financial,
                ]
            },
            offCampus: {
                title: "Information for Off Campus",
                label: "Off Campus",
                subSections: [
                    SUB_SECTIONS["cn"].social,
                    SUB_SECTIONS["cn"].dailyLiving,
                    SUB_SECTIONS["cn"].cultural
                ]
            }
        }
    }
} as const;