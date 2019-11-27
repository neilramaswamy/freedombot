import { DailyDisciplineHandler, SetDayHandler, ListHandler, AdminViewHandler } from './classes/definitions'

import { CommandHandler } from './classes/abstract'
import { dailyCommandData } from './data/daily'
import { infoCommandData } from './data/info'
import { adminCommandData } from './data/admins';

/**
 * 8 Daily Disciplines
 */
const makeBedHandler = new DailyDisciplineHandler(
    dailyCommandData.makeBed.invocation, 
    dailyCommandData.makeBed.points, 
    dailyCommandData.makeBed.responder
)

const affirmationHandler = new DailyDisciplineHandler(
    dailyCommandData.affirmation.invocation, 
    dailyCommandData.affirmation.points, 
    dailyCommandData.affirmation.responder
)

const coldShowerHandler = new DailyDisciplineHandler(
    dailyCommandData.coldShower.invocation, 
    dailyCommandData.coldShower.points, 
    dailyCommandData.coldShower.responder
)

const meditationHandler = new DailyDisciplineHandler(
    dailyCommandData.meditation.invocation, 
    dailyCommandData.meditation.points, 
    dailyCommandData.meditation.responder
)

const workoutHandler = new DailyDisciplineHandler(
    dailyCommandData.workout.invocation, 
    dailyCommandData.workout.points, 
    dailyCommandData.workout.responder
)

const gratefulnessHandler = new DailyDisciplineHandler(
    dailyCommandData.gratefulness.invocation, 
    dailyCommandData.gratefulness.points, 
    dailyCommandData.gratefulness.responder
)

const journalHandler = new DailyDisciplineHandler(
    dailyCommandData.journal.invocation, 
    dailyCommandData.journal.points, 
    dailyCommandData.journal.responder
)

const setdayHandler = new SetDayHandler(
    dailyCommandData.setday.invocation, 
    dailyCommandData.setday.points, 
    dailyCommandData.setday.responder
)

export const dailyCommandLegend: {[key: string]: CommandHandler} = {
    [dailyCommandData.affirmation.invocation]: affirmationHandler,
    [dailyCommandData.coldShower.invocation]: coldShowerHandler,
    [dailyCommandData.gratefulness.invocation]: gratefulnessHandler,
    [dailyCommandData.journal.invocation]: journalHandler,
    [dailyCommandData.makeBed.invocation]: makeBedHandler,
    [dailyCommandData.meditation.invocation]: meditationHandler,
    [dailyCommandData.setday.invocation]: setdayHandler,
    [dailyCommandData.workout.invocation]: workoutHandler,
}

/**
 * Information commands
 */
const listHandler = new ListHandler()

export const infoCommandLegend: {[key: string]: CommandHandler} = {
    [infoCommandData.list.invocation]: listHandler
}

/**
 * Admin-only commands
 */
const adminViewScoreHandler = new AdminViewHandler("score")
const adminViewStreakHandler = new AdminViewHandler("streak")

export const adminCommandLegend: {[key: string]: CommandHandler} = {
    [adminCommandData.viewScore.invocation]: adminViewScoreHandler,
    [adminCommandData.viewStreak.invocation]: adminViewStreakHandler
}

export const legend: {[key: string]: CommandHandler} = 
    {...dailyCommandLegend, ...infoCommandLegend, ...adminCommandLegend}