import { CommandRequest, LayerError } from "./types";

export function defaultValidator(cmd: CommandRequest): CommandRequest | LayerError {
    // Ensure that the person calling the command hasn't done so in the past 
    // 24 hours
    console.log('TODO: Default should check 24 hour thresh.')
    return cmd
}

export function adminValidator(cmd: CommandRequest): CommandRequest | LayerError {
    // Ensure that only admins are calling this command
    return new LayerError("Only admins can run this command!", cmd)
}

export function thanksValidator(cmd: CommandRequest): CommandRequest | LayerError {
    // Ensure that the person calling the command has not done so more than 3 times
    // in one day.
    return cmd
}