import { PrismaClient } from ".prisma/client"
import Basic  from "../../../components/Basic/formik"
export const getStaticProps = async () => {
    const prisma = new PrismaClient()
    
    const categories = await prisma.category.findMany();
    const underCategory = await prisma.underCategory.findMany();
    const themes = await prisma.theme.findMany();
    console.log(categories);
    
    return {
        props: {
            categories: categories,
            underCategories: underCategory,
            themes: themes
        }
    }
}
const Form = (props) => {
    return ( 
        <>
            <Basic {...props} />
        </>
     );
}
 
export default Form;