import dayjs from "dayjs";
import pino  from "pino";
import pinoPretty from "pino-pretty";


export const log = pino({
    transport : {
        target : 'pino-pretty',
        options : {
            colorize : true
        }
    },
    prettifier:pinoPretty,
    timestamp : () => `time : ${dayjs().format()} `
})