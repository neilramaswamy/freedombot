import * as S from 'sequelize'
import C from '../config/config'

const sequelize = new S.Sequelize(C.auth.db.name, C.auth.db.username, C.auth.db.password, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Successfully established connection to database!')
}).catch(e => {
    console.log(`Error connecting to database: ${e}`)
})

export const User = sequelize.define('user', {
    discord_id: {
        type: S.STRING,
        allowNull: false,
        unique: true
    },
    score: {
        type: S.FLOAT
    },
    streak: {
        type: S.INTEGER,
    },
    // These store the date at which the associated command was last run.
    // They should align with the invocations of the intended command
    make_bed: { type: S.DATE},
    affirmation: { type: S.DATE },
    cold_shower: { type: S.DATE },
    meditation: { type: S.DATE },
    workout: { type: S.DATE },
    gratefulness: { type: S.DATE },
    journal: { type: S.DATE }
})

export interface UserSchema {
    discord_id: string
    score?: number
    streak?: number
    make_bed?: Date
    affirmation?: Date
    cold_shower?: Date
    meditation?: Date
    workout?: Date
    gratefulness?: Date
    journal?: Date
}

// const KNOW_WHAT_THE_HELL_YOURE_DOING = false
// sequelize.sync({force: KNOW_WHAT_THE_HELL_YOURE_DOING})