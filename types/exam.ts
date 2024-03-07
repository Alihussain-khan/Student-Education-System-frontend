// exam.ts

export interface Exam {
    examName: string;
    questions: Question[];
}

export interface Question {
    questionText: string;
    options: string[];
    correctOptionIndex: number;
}

export const myExam: Exam = {
    examName: "Sample Exam",
    questions: [
        {
            questionText: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Rome"],
            correctOptionIndex: 1
        },
        {
            questionText: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Cell membrane"],
            correctOptionIndex: 2
        },
        {
            questionText: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Mercury"],
            correctOptionIndex: 0
        },
        {
            questionText: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            correctOptionIndex: 0
        },
        {
            questionText: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correctOptionIndex: 0
        },
        {
            questionText: "What is the largest mammal?",
            options: ["Elephant", "Blue whale", "Giraffe", "Polar bear"],
            correctOptionIndex: 1
        },
            {
                "questionText": "The term 'data' came from the Latin root term-",
                "options": ["Detem", "Datam", "Datum", "Data"],
                "correctOptionIndex": 3
            },
            {
                "questionText": "Two types of research data include-",
                "options": ["Recognised and unrecognised data", "Structured and unstructured data", "Qualitative and quantitative data", "Organised and processed data"],
                "correctOptionIndex": 2
            },
            {
                "questionText": "Which one is the true example of primary data from the following options?",
                "options": ["Journal", "Book", "Census Report", "Newspaper"],
                "correctOptionIndex": 2
            },
            {
                "questionText": "What is it called when the data is sourced from the place of origin?",
                "options": ["Secondary", "Primary", "Secondary and primary", "All of the above"],
                "correctOptionIndex": 1
            },
            {
                "questionText": "What is it called when the data source is gathered and compiled with others?",
                "options": ["Primary Data", "Quantitative data", "Secondary data", "None of the above"],
                "correctOptionIndex": 2
            },
            {
                "questionText": "Information of research is called –",
                "options": ["Qualitative", "Quantitative", "Qualitative and Quantitative both", "None of the above"],
                "correctOptionIndex": 2
            },
            {
                "questionText": "The method of collecting primary data is called –",
                "options": ["Questionnaire and schedule method", "Observation and Interview method", "None of the above", "All of the above"],
                "correctOptionIndex": 3
            },
            {
                "questionText": "Structured observation is a part of –",
                "options": ["Descriptive study", "Experimental study", "Fundamental study", "All of the above"],
                "correctOptionIndex": 0
            },
            {
                "questionText": "Data that are collected or sourced from the internet is called –",
                "options": ["Documentary sources of data", "Internal secondary sources of data", "External secondary sources of data", "All of the above"],
                "correctOptionIndex": 2
            },
            {
                "questionText": "Which statement is not true or incorrect from the following",
                "options": ["The identity is known of the respondent in the case of the questionnaire.", "The scheduling method is expensive and complicated in comparison to the questionnaire method.", "The informants or respondents generally fill up the schedule.", "All of the above."],
                "correctOptionIndex": 0
            },
            {
                "questionText": "Which one is incorrect among the following statements?",
                "options": ["The investigator meets the informants directly and collects information, in the case of a direct personal interview.", "The investigator meets and collects information from the informants directly, in the case of an indirect interview.", "The researcher primarily collects data by observing, in the case of the observation method.", "All of the above"],
                "correctOptionIndex": 1
            }
        ]
};
