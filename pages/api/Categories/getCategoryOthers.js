import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default (req, res) => {

    if(req.method === "POST"){
        const category = prisma.category.findMany();
        const underCategory = prisma.underCategory.findMany();
        const theme = prisma.theme.findMany();
        console.log(category, underCategory, theme);
        res.status(200).json({
            category: category,
            underCategory: underCategory,
            theme: theme
        });
    }
  }
  