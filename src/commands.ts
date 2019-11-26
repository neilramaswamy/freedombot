import { DailyDisciplineHandler, SetDayHandler, ListHandler } from './classes/definitions'

import { CommandHandler } from './classes/abstract'
import { dailyCommandData } from './data/daily'

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

const listHandler = new ListHandler()

export const legend: {[key: string]: CommandHandler} = {
    [dailyCommandData.affirmation.invocation]: affirmationHandler,
    [dailyCommandData.coldShower.invocation]: coldShowerHandler,
    [dailyCommandData.gratefulness.invocation]: gratefulnessHandler,
    [dailyCommandData.journal.invocation]: journalHandler,
    [dailyCommandData.makeBed.invocation]: makeBedHandler,
    [dailyCommandData.meditation.invocation]: meditationHandler,
    [dailyCommandData.setday.invocation]: setdayHandler,
    [dailyCommandData.workout.invocation]: workoutHandler,
    "list": listHandler
}