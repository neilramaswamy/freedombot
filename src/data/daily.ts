/**
 * This file stores data pertaining to the 8 Daily Discipline commands.
 * 
 * Logic beyond response creation (`responder` functions) should not be put 
 * in here. This should be acting like a database of sorts, storing command
 * metadata.
 */

export type DailyCommand = {
    name: string
    invocation: string
    points: number
    description: string
    responder: (...args: any[]) => string
}

export const dailyCommandData: {[key: string]: DailyCommand} = {
    makeBed: {
        name: "Making your bed",
        invocation: "make_bed",
        points: 0.15,
        description: `Record if you made your bed first thing in the morning.`,
        responder: () => `I've recorded that you made your bed today!`
    },
    affirmation: {
        name: "Affirmations",
        invocation: "affirmation",
        points: 0.5,
        description: "Record if you wrote and said three affirmations in a given day.",
        responder: () => "today's daily affirmation has been recorded."
    },
    coldShower: {
        name: "Cold showers",
        invocation: "cold_shower",
        points: 0.2,
        description: "Record whether you took a cold-shower in the morning.",
        responder: () => "today's cold shower has been recorded."
    },
    meditation: {
        name: "Meditation and mindfulness",
        invocation: "meditation",
        points: 0.5,
        description: "Assess your present state using the meditative style you prefer for a minimum of 10 minutes.",
        responder: () => "today's meditation session has been recorded."
    },
    workout: {
        name: "Physical fitness",
        invocation: "workout",
        points: 0.5,
        description: "30 minutes of intense cardio, heavy weight-lifting session, 10,000 steps, etc.",
        responder: () => "today's workout has been noted."
    },
    gratefulness: {
        name: "Gratefulness",
        invocation: "gratefulness",
        points: 0.15,
        description: "Record whether you noted three things for which you are grateful today.",
        responder: () => "good job being grateful; I've recorded that."
    },
    journal: {
        name: "Daily journaling",
        invocation: "journal",
        points: 1,
        description: "Record whether you posted a journal entry in the journals channel.",
        responder: () => "your journal entry for today has been accounted for."
    },
    setday: {
        name: "En Eff",
        invocation: "setday",
        points: 1,
        description: "Set your current streak by typing **!setday <day>**.",
        responder: (newDay: number) => `roger that. You're now on day ${newDay}.` 
    }
}