import express from 'express'
const app = express()
const port = 5000


//parser 
app.use(express.json())

  
// const logger = (req: any, res: any, next: any) =>{
//    console.log( req.url , req.method, req.hostName )
//    next();
// }

const useRouter = express.Router()

app.use('/', useRouter)

useRouter.get('/api/D1',  (req: any , res: any) => {
   const user = req.body 
   console.log(user)
   res.json({
   name: '',
   name1:'minhazul abedin apon'
   })
})

app.get('/',  (req: any , res: any) => {
  res.send('express with typeScript!')
  console.log(req.body)
})
 
app.post('/', (req: any , res: any) => {
  res.send('Got Data')
  console.log(req.body)
})




export default app; 