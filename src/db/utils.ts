import { User, UserSchema } from './init'

// TODO: This code is mostly hacky crap, so you probably should rewrite it.

export async function createUser(d_id: string): Promise<void> {
    const userData: UserSchema = {discord_id: d_id}
    //@ts-ignore TypeScript seems to be triggered by our User model. 
    await User.create(userData)
}

export async function deleteUser(d_id: string): Promise<number> {
    //@ts-ignore
    return await User.destroy({
        where: {
            discord_id: d_id
        }
    })
}

export async function fetchField(d_id: string, field: string): Promise<any> {
    //@ts-ignore
    const res = await User.findOne({
        attributes: [field],
        where: {
            discord_id: d_id
        },
        raw: true
    })

    return res[field]
}

export async function updateField(d_id: string, field: string, newPoints: number): Promise<any> {
    //@ts-ignore
    await User.update( // Update the date
        {[field]: new Date()},
        {where: {discord_id: d_id}}
    )

    // Update their score
    const oldScore = await fetchField(d_id, "score")
    //@ts-ignore
    await User.update(
        {"score": oldScore + newPoints},
        {where: {discord_id: d_id}}
    )
}