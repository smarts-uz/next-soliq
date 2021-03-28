import { PrismaClient } from "@prisma/client";
import { authHandler } from "../../../untils/auth-middleware";

const prisma = new PrismaClient();

export default authHandler(async(req, res) => {

  if(req.method === "POST" ){

        await prisma.next_Destricts.findMany({
            where:{
              row_obl: req.body.ray
            }
        }).then(response=>{
          res.status(200).json(response)
        }).catch(err=>{
            console.log(err);
        })
        

    }
       
    
  }
  )