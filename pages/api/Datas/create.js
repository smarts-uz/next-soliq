import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
export default async (req, res) => {

    if(req.method === "POST" ){
        console.log(req.body);
        // return res.json({message: "messages"})
        await prisma.datas.createMany({
            data: [
                {
                    ...req.body
                }
            ],
            skipDuplicates: true, 
        })
        .then(res=>{
            res.status(201).json({datas: createMany});
        })
        .catch(err=> {
            res.status(500).json({message: err});
        })
        ;

    }
    
  }
  