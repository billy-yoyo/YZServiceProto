
const USEFULNESS = {
    "cn": {
        body: {
            "type": "range" as const,
            "options": ["绝对没用", "可能没用", "不确定是否有用", "可能有用", "绝对有用"]
        }
    },
    "en": {
        body: {
            "type": "range" as const,
            "options": ["Definitely not useful", "Probably not useful", "Not sure it useful or not", "Probably useful", "Definitely useful"]
        }
    }
} as const;

const WILLINGNESS = {
    "cn": {
        body: {
            "type": "range" as const,
            "options": ["肯定不愿意", "可能不愿意", "不确定是否愿意", "可能愿意", "肯定愿意"]
        }
    },
    "en": {
        body: {
            "type": "range" as const,
            "options": ["Definitely not willing to", "Probably not willing to", "Not sure if willing or not", "Probably willing to", "Definitely willing to"]
        }
    }
}

export const SERVICES = {
    "cn": [
        {
            id: 1,
            path: '/service/information',
            title: 'Service Prototype 1',
            body: [
                'This is an example service prototype body description',
                'We could write various information.'
            ],
            survey: {
                title: 'Service Prototype 1 Survey',
                questions: [
                    {
                        title: '在您来英国之前，您认为这种全面的信息支持服务对于增加您对当地学习，生活和文化的了解有多大作用？',
                        ...USEFULNESS["cn"],
                    },
                    {
                        title: '这种服务对您在英国最初三个月的适应生活有帮助吗？',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '这种服务在为您提供校外支持方面有多大作用',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '这种服务对你清楚地了解学术要求和评估体系方面有多大帮助？',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '这种服务在帮助您更好地了解学校的服务体系以及服务资源方面有多大作用？',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '您愿意使用这种服务吗？',
                        ...WILLINGNESS["cn"]
                    },
                    {
                        title: '这种服务在为您提供所需的持续支持方面有多大作用？',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '这种服务对减轻您在学习或日常生活中的压力或其他负面情绪有多大作用？',
                        ...USEFULNESS["cn"]
                    }
                ]
            }
        },
        {
            id: 2,
            path: '/service/2',
            title: 'Service Prototype 2',
            body: [
                'This is an example service prototype body description',
                'We could write various information.'
            ],
            survey: {
                title: 'Service Prototype 1 Survey',
                questions: [
                    {
                        title: '您愿意使用这种服务吗？',
                        ...WILLINGNESS["cn"]
                    },
                    {
                        title: '这种服务在为您提供所需的持续支持方面有多大作用？',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '这种服务对快速处理您的请求或问题有用吗？',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '这种服务对于快速提供适当的解决方案有多大作用？',
                        ...USEFULNESS["cn"]
                    }
                ]
            }
        },
        {
            id: 3,
            path: '/service/3',
            title: 'Service Prototype 3',
            body: [
                'This is an example service prototype body description',
                'We could write various information.'
            ],
            survey: {
                title: 'Service Prototype 1 Survey',
                questions: [
                    {
                        title: '您认为这种服务在为您提供与中国学生和其他文化背景的学生交流的机会方面有多大作用？',
                        ...USEFULNESS["cn"]
                    },
                    {
                        title: '您愿意使用这种服务吗？',
                        ...WILLINGNESS["cn"]
                    },
                    {
                        title: '这种服务对减轻您在学习或日常生活中的压力或其他负面情绪有多大作用？',
                        ...USEFULNESS["cn"]
                    },
                ]
            }
        }
    ],
    "en": [
        {
            id: 1,
            path: '/service/information',
            title: 'Service Prototype 1',
            body: [
                'This is an example service prototype body description',
                'We could write various information.'
            ],
            survey: {
                title: 'Service Prototype 1 Survey',
                questions: [
                    {
                        title: 'How useful do you think this type of comprehensive information support service would be for increasing your knowledge about living, studying and culture in the UK before you arrive?',
                        ...USEFULNESS["en"],
                    },
                    {
                        title: 'How useful do you think this type of service would be for helping you settle in during your first three months in the UK?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for providing you with off-campus support?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for helping you to understand the academic requirements and assessment system?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for helping you to better understand the service system or services available at your university?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How willing would you be to use this type of service?',
                        ...WILLINGNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for providing you with the ongoing support you need?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for reducing stress or other negative emotions in your studies or daily life?',
                        ...USEFULNESS["en"]
                    }
                ]
            }
        },
        {
            id: 2,
            path: '/service/2',
            title: 'Service Prototype 2',
            body: [
                'This is an example service prototype body description',
                'We could write various information.'
            ],
            survey: {
                title: 'Service Prototype 1 Survey',
                questions: [
                    {
                        title: 'How willing would you be to use this type of service?',
                        ...WILLINGNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for providing you with the ongoing support you need?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for dealing with your requests or questions quickly?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for providing appropriate solutions quickly?',
                        ...USEFULNESS["en"]
                    }
                ]
            }
        },
        {
            id: 3,
            path: '/service/3',
            title: 'Service Prototype 3',
            body: [
                'This is an example service prototype body description',
                'We could write various information.'
            ],
            survey: {
                title: 'Service Prototype 1 Survey',
                questions: [
                    {
                        title: 'How useful do you think this type of service is for providing you with opportunities to interact with both Chinese students and students from other cultural backgrounds?',
                        ...USEFULNESS["en"]
                    },
                    {
                        title: 'How willing would you be to use this type of service?',
                        ...WILLINGNESS["en"]
                    },
                    {
                        title: 'How useful do you think this type of service is for reducing stress or other negative emotions in your studies or daily life?',
                        ...USEFULNESS["en"]
                    },
                ]
            }
        }
    ]
} as const;
