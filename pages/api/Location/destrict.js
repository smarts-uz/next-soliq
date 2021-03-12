import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default (req, res) => {

  if(req.method === "POST" ){

        prisma.destricts.findMany({
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
  