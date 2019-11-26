import { DailyDisciplineHandler, SetDayHandler, ListHandler } from './classes/definitions'

import { CommandHandler } from './classes/abstract'
import { dailyCommandInfo } from './data/daily'

const makeBedHandler = new DailyDisciplineHandler(
    dailyCommandInfo.makeBed.invocation, 
    dailyCommandInfo.makeBed.points, 
    dailyCommandInfo.makeBed.responder
)

const affirmationHandler = new DailyDisciplineHandler(
    dailyCommandInfo.affirmation.invocation, 
    dailyCommandInfo.affirmation.points, 
    dailyCommandInfo.affirmation.responder
)

const coldShowerHandler = new DailyDisciplineHandler(
    dailyCommandInfo.coldShower.invocation, 
    dailyCommandInfo.coldShower.points, 
    dailyCommandInfo.coldShower.responder
)

const meditationHandler = new DailyDisciplineHandler(
    dailyCommandInfo.meditation.invocation, 
    dailyCommandInfo.meditation.points, 
    dailyCommandInfo.meditation.responder
)

const workoutHandler = new DailyDisciplineHandler(
    dailyCommandInfo.workout.invocation, 
    dailyCommandInfo.workout.points, 
    dailyCommandInfo.workout.responder
)

const gratefulnessHandler = new DailyDisciplineHandler(
    dailyCommandInfo.gratefulness.invocation, 
    dailyCommandInfo.gratefulness.points, 
    dailyCommandInfo.gratefulness.responder
)

const journalHandler = new DailyDisciplineHandler(
    dailyCommandInfo.journal.invocation, 
    dailyCommandInfo.journal.points, 
    dailyCommandInfo.journal.responder
)

const setdayHandler = new SetDayHandler(
    dailyCommandInfo.setday.invocation, 
    dailyCommandInfo.setday.points, 
    dailyCommandInfo.setday.responder
)

const listHandler = new ListHandler()

export const legend: {[key: string]: CommandHandler} = {
    [dailyCommandInfo.affirmation.invocation]: affirmationHandler,
    [dailyCommandInfo.coldShower.invocation]: coldShowerHandler,
    [dailyCommandInfo.gratefulness.invocation]: gratefulnessHandler,
    [dailyCommandInfo.journal.invocation]: journalHandler,
    [dailyCommandInfo.makeBed.invocation]: makeBedHandler,
    [dailyCommandInfo.meditation.invocation]: meditationHandler,
    [dailyCommandInfo.setday.invocation]: setdayHandler,
    [dailyCommandInfo.workout.invocation]: workoutHandler,
    "list": listHandler
}