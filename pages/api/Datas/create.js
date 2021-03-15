import { PrismaClient } from "@prisma/client";
import {authHandler} from "../../../untils/auth-middleware"

const prisma  = new PrismaClient();

export default authHandler(async (req, res) => {

    if(req.method === "GET"){
        res.json({msg:"here is data"})
    }

    if(req.method === "POST" ){
        await prisma.next_Datas.createMany({
            data: [
                {
                    ...req.body
                }
            ],
            skipDuplicates: true, 
        })
        .then(result=>{
            res.status(201).json({datas: result });
        })
        .catch(err=> {
            res.status(400).json({message: err});
        })
        ;

    }
    
  })
  