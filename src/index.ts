import express, {Request, Response} from 'express'
const app = express()
const port = 3500

app.get('/', (req: Request, res: Response) => {
  let hello = 'Hello incubator!!!';
  res.send(hello);
})

app.listen(port, () => {
  console.log(`Example app listening on PORT ${port}`)
})