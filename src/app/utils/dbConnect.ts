import mongoose from "mongoose";
import { log } from "./logger";

const {URL}:any = process.env


export const dbConncet =async () => {
   try {
    if (!URL) {
        log.error('Not is url found .env files')
        process.exit(1)
    }
    await mongoose.connect(URL)
    log.info('Database Connected')
   } catch (error:any) {
    log.error(error.message)
   }
}
