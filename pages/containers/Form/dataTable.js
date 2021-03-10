import { PrismaClient } from ".prisma/client";
import router from "next/router";
import Table from "../../../components/dataTable"

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
const dataTable = (props) => {
    return (
        <>
            <div className="flex flex-col py-5 md:px-32 h-screen">
                <div className="flex justify-end">
                    <button onClick = { () => {
                        router.push('/containers/Form');
                    }} className = "bg-green-600 px-5 rounded text-white text-lg uppercase font-bold border-2 border-gray-700 py-1 hover:bg-white hover:text-black">Create</button>
                </div>
                <Table categories = {props.categories} underCategories = {props.underCategories} themes = {props.themes} types = {props.types} users = {props.datas ? props.datas : []} />
            </div>
        </>
    );
}

export default dataTable;