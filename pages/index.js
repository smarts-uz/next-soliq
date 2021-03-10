import { PrismaClient } from ".prisma/client";
import router from "next/router";
import Table from "../components/Table"

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
            <div className="w-full h-screen">
                <div className="flex justify-between items-center py-5 bg-blue-500 px-20">
                    <h1 className="text-2xl font-bold text-white ">Manage Employers</h1>
                    <button onClick = { () => {
                        router.push('/Form');
                    }} className = "bg-green-500 hover:bg-blue-400 duration-300 px-6 focus:outline-none rounded text-white text-lg font-medium uppercase font-bold py-2">Create</button>
                </div>
                <div className="px-20">
                    <Table categories = {props.categories} underCategories = {props.underCategories} themes = {props.themes} types = {props.types} users = {props.datas ? props.datas : []} />
                </div>
            </div>
        </>
    );
}

export default dataTable;