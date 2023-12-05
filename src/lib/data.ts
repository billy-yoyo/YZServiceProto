import type { Service } from "./service";

export const services: Service[] = [
    {
        id: 1,
        title: 'Service Prototype 1',
        body: [
            'This is an example service prototype body description',
            'We could write various information.'
        ],
        survey: {
            title: 'Service Prototype 1 Survey',
            questions: [
                {
                    title: 'A Question',
                    body: {
                        type: 'range',
                        options: ['Very-High', 'High', 'Middle', 'Low', 'Very-Low']
                    }
                },
                {
                    title: 'Another Question',
                    body: {
                        type: 'free-text'
                    }
                }
            ]
        }
    },
    {
        id: 2,
        title: 'Service Prototype 2',
        body: [
            'This is an example service prototype body description',
            'We could write various information.'
        ],
        survey: {
            title: 'Service Prototype 1 Survey',
            questions: []
        }
    },
    {
        id: 3,
        title: 'Service Prototype 3',
        body: [
            'This is an example service prototype body description',
            'We could write various information.'
        ],
        survey: {
            title: 'Service Prototype 1 Survey',
            questions: []
        }
    }
];

export const getService = (id: number): Service | undefined => {
    return services.find(service => service.id === id);
};



