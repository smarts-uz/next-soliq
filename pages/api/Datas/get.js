import { PrismaClient } from "@prisma/client";
import { authHandler } from "../../../untils/auth-middleware";

const prisma  = new PrismaClient();
export default authHandler(async (req, res) => {

    if(req.method === "POST" ){
        let obj = {};
        await prisma.next_Datas.findMany({
            where: {
                id: req.body.id
            }
        }).then(res => {
            obj = {
                ...obj,
                data: res
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        }); 
        // return res.json({message: "messages"})
        await prisma.next_Category.findMany()
        .then(result=>{
            obj = {
                ...obj,
                categories: result
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        });


        await prisma.nderCategory.findMany()
        .then(result=>{
            obj = {
                ...obj,
                underCategories: result
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        });

        await prisma.theme.findMany()
        .then(result=>{
            obj = {
                ...obj,
                themes: result
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        });

        return res.status(200).json({props: obj});
    }
    
  }
  )