import { PrismaClient } from ".prisma/client"
import Forma from "../../components/Forma";
export const getStaticProps = async () => {
    const prisma = new PrismaClient()
    
    const types = await prisma.type.findMany();

    const categories = await prisma.category.findMany();
    const underCategory = await prisma.underCategory.findMany();
    const themes = await prisma.theme.findMany();
    
    return {
        props: {
            categories: categories,
            underCategories: underCategory,
            themes: themes,
            types: types
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