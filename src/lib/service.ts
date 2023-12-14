
export interface QuestionRange {
    readonly type: 'range';
    readonly options: readonly string[];
}

export interface QuestionFreeText {
    readonly type: 'free-text';
}

export interface Question {
    readonly title: string;
    readonly body: QuestionRange | QuestionFreeText;
}

export interface Survey {
    readonly title: string;
    readonly questions: readonly Question[];
}

export interface Service {
    readonly id: number,
    readonly title: string,
    readonly body: string[],
    readonly survey: Survey
}
