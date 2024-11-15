
import { Server } from 'http'
import app from './App'
const port = 5000


let server : Server

async function bootstrap() {
 
     server = app.listen(port, () => {
         console.log(`express with typeScript port ${port}`)
     })
     
}

bootstrap();



