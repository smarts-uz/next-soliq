import { PrismaClient } from ".prisma/client"
import { authHandler } from "../../../untils/auth-middleware";

const prisma = new PrismaClient();

export default authHandler(async(req, res) => {

    if(req.method === "GET"){
        const types = await prisma.next_Type.findMany()
        const categories = await prisma.next_Category.findMany();
        const underCategory = await prisma.next_UnderCategory.findMany();
        const themes = await prisma.next_Theme.findMany();
        const datas = await prisma.next_Datas.findMany();

        res.status(200).json({
            types,
            categories,
            underCategory,
            themes,
            datas
        });
    }
  })
  