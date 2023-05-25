import 'dotenv/config'
import { app } from './app';
import { log } from './app/utils/logger';
const port = process.env.PORT || 5000;

const startServer =async () => {
    try {
        
        app.listen(port,() => console.log(`server is running on port ${port}`))
    } catch (error:any) {
        log.error(error.message)
    }
}
startServer()