import { CommandHandler, DailyCommandClass, SetDayCommandClass, ListClass } from './classes'
import { dailyCommandInfo } from './daily'

const makeBedHandler = new DailyCommandClass(
    dailyCommandInfo.makeBed.invocation, 
    dailyCommandInfo.makeBed.points, 
    dailyCommandInfo.makeBed.responder
)

const affirmationHandler = new DailyCommandClass(
    dailyCommandInfo.affirmation.invocation, 
    dailyCommandInfo.affirmation.points, 
    dailyCommandInfo.affirmation.responder
)

const coldShowerHandler = new DailyCommandClass(
    dailyCommandInfo.coldShower.invocation, 
    dailyCommandInfo.coldShower.points, 
    dailyCommandInfo.coldShower.responder
)

const meditationHandler = new DailyCommandClass(
    dailyCommandInfo.meditation.invocation, 
    dailyCommandInfo.meditation.points, 
    dailyCommandInfo.meditation.responder
)

const workoutHandler = new DailyCommandClass(
    dailyCommandInfo.workout.invocation, 
    dailyCommandInfo.workout.points, 
    dailyCommandInfo.workout.responder
)

const gratefulnessHandler = new DailyCommandClass(
    dailyCommandInfo.gratefulness.invocation, 
    dailyCommandInfo.gratefulness.points, 
    dailyCommandInfo.gratefulness.responder
)

const journalHandler = new DailyCommandClass(
    dailyCommandInfo.journal.invocation, 
    dailyCommandInfo.journal.points, 
    dailyCommandInfo.journal.responder
)

const setdayHandler = new SetDayCommandClass(
    dailyCommandInfo.setday.invocation, 
    dailyCommandInfo.setday.points, 
    dailyCommandInfo.setday.responder
)

const listHandler = new ListClass()

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