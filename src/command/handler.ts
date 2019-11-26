import { CommandRequest, LayerError } from "./types";

export class CommandHandler<DBResult> {
    constructor(
        readonly validator: (cmd: CommandRequest) => CommandRequest | LayerError,
        readonly dbHandler: (cmd: CommandRequest) => DBResult | LayerError,
        readonly discordHandler: (dbResult: DBResult) =>  void
    ) {}

    evaluate(cmd: CommandRequest) {
        const validationResult = this.validator(cmd)
        if (validationResult instanceof LayerError) {
            return validationResult.cmd.msg.reply(validationResult.error)
        }

        const dbResult = this.dbHandler(validationResult)
        if (dbResult instanceof LayerError) {
            return dbResult.cmd.msg.reply(dbResult.error)
        }

        this.discordHandler(dbResult)
    }
}