import { PrismaClient } from ".prisma/client";
import router from "next/router";
import Layout from "../components/Layout";
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
        <Layout>
            <div className="w-4/5 mx-auto rounded">
                <div className="flex border-b-2 border-black justify-between bg-white items-center py-5 px-6">
                    <h1 className="text-2xl font-bold text-black ">Manage Employers</h1>
                    <button onClick = { () => {
                        router.push('/Form');
                    }} className = "bg-blue-500 hover:bg-blue-400 duration-300 px-6 focus:outline-none rounded text-white text-sm font-medium uppercase font-normal py-2">
                        <i class="fas fa-user-plus"></i>
                        <span className="pl-3">Create</span>
                    </button>
                </div>
                    <Table categories = {props.categories} underCategories = {props.underCategories} themes = {props.themes} types = {props.types} users = {props.datas ? props.datas : []} />
            </div>
        </Layout>
    );
}

export default dataTable;