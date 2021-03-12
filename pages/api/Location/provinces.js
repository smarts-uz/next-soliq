import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default (req, res) => {

  if(req.method === "POST" ){
        console.log(req.body);
        // return res.json({message: "messages"})
        prisma.provinces.findMany({
            where:{
              row_obl: req.body.obl
            }
        }).then(response=>{
          res.status(200).json(response)
        }).catch(err=>{
            console.log(err);
        })
        

    }
       
    
  }
  