
export const ARTICLES = {
    'an-article': {
        id: 'an-article',
        data: {
            cn: {
                title: "An Article"
            },
            en: {
                title: "An Article"
            }
        }
    },
    'something': {
        id: 'something',
        data: {
            cn: {
                title: "Something"
            },
            en: {
                title: "Something"
            }
        }
    },
    'how-to-do': {
        id: 'how-to-do',
        data: {
            cn: {
                title: "How to do"
            },
            en: {
                title: "How to do"
            }
        }
    },
    'another-example': {
        id: 'another-example',
        data: {
            cn: {
                title: "Another Example"
            },
            en: {
                title: "Another Example"
            }
        }
    },
    'are-you-worried': {
        id: 'are-you-worried',
        data: {
            cn: {
                title: "Are you worried?"
            },
            en: {
                title: "Are you worried?"
            }
        }
    },
    'something-to-read': {
        id: 'something-to-read',
        data: {
            cn: {
                title: "Something to read"
            },
            en: {
                title: "Something to read"
            }
        }
    },
    'hello-world': {
        id: 'hello-world',
        data: {
            cn: {
                title: "Hello world, this article has a longer name!"
            },
            en: {
                title: "Hello world, this article has a longer name!"
            }
        }
    },


} as const;

export type ArticleIds = keyof typeof ARTICLES;
