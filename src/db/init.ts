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
        type: S.BIGINT,
        allowNull: false,
        unique: true
    },
    score: {
        type: S.FLOAT,
        defaultValue: 0
    },
    streak: {
        type: S.INTEGER,
        defaultValue: 0
    },
    // These store the date at which the associated command was last run.
    make_bed: { type: S.DATE},
    affirmation: { type: S.DATE },
    cold_shower: { type: S.DATE },
    meditation: { type: S.DATE },
    workout: { type: S.DATE },
    gratefulness: { type: S.DATE },
    journal: { type: S.DATE }
})


// sequelize.sync({force: true})