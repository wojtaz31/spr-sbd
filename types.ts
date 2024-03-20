export interface ProgressStatus {
    'iloscPoprawnych': number;
    'iloscUdzielonych': number;
    'przerobione': any;
}

export interface Question {
    "a": string,
    "q": {
        "header": string,
        "id": string,
        "loadA": string,
        "obrazek"?: string,
        "odpA": string,
        "odpB": string,
        "odpC": string,
        "odpD": string,
        "ord": string,
        "script": string,
        "tresc": string
    }
}