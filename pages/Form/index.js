import Forma from "../../components/Forma";
import { PrismaClient } from ".prisma/client";

export const toJson = (data) => {
    return JSON.parse(JSON.stringify(data));
}

export const getStaticProps = async () => {

    const prisma = new PrismaClient()
    const types = await prisma.type.findMany();
    const categories = await prisma.category.findMany();
    const underCategory = await prisma.underCategory.findMany();
    const themes = await prisma.theme.findMany();
    const datas = await prisma.datas.findMany();

    return {
        props: {
            categories: toJson(categories),
            underCategories: toJson(underCategory),
            themes: toJson(themes),
            types: toJson(types),
            datas: toJson(datas)
        }
    }
}


const Form = (props) => {
    return ( 
        <>
            <Forma {...props}/>
        </>
     );
}
 
export default Form;