import { PrismaClient } from ".prisma/client"
import Basic  from "../../../components/Basic/formik"
import BasicWithHTML from "../../../components/Basic/formikHtml";
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
    console.log(props);
    return ( 
        <>
            {/* <Basic {...props} /> */}
            <BasicWithHTML {...props}/>
        </>
     );
}
 
export default Form;