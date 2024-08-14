import express, { Request, Response } from 'express';
import {SignUpSchema} from '@basirkhan/common'
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.post('/',(req:Request,res:Response)=>{
const parsedResult = SignUpSchema.safeParse(req.body);
console.log(req.body);
console.log(parsedResult);
console.log(parsedResult.error);
if(parsedResult.success){
    res.status(200).send({message:"Success",data:parsedResult.data});
}
else{
    res.status(400).send({error:"Invalid Request error message schema twicked"});
}
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
