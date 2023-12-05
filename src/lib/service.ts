
export interface QuestionRange {
    type: 'range';
    options: string[];
}

export interface QuestionFreeText {
    type: 'free-text';
}

export interface Question {
    title: string;
    body: QuestionRange | QuestionFreeText;
}

export interface Survey {
    title: string;
    questions: Question[];
}

export interface Service {
    id: number,
    title: string,
    body: string[],
    survey: Survey
}
