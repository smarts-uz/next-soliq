import {useState} from "react"
import Layout from "../components/Layout";
import Table from "../components/Table"
import Modal from "../components/Modal"
import Forma from "../components/Forma"
import {getRoute} from "../untils/get-router"
import  Router  from "next/router";
import jwt from "jsonwebtoken";



export const getServerSideProps = async(ctx) => {
   const data = await getRoute('http://localhost:3000/api/All/info', ctx)
   console.log(data)

    return {
        props: {
            category: data.categories,
            underCategories: data.underCategory,
            themes: data.themes,
            types: data.types,
            datas: data.datas,
            user: jwt.decode(data.token)
        }
    }
}


function DataTable (props) {

      const [showUpdateModal, setShowUpdateModal] = useState(false);

    return (
        <Layout>
            <div className="rounded">
                <div className="flex justify-between bg-blue-600 shadow items-center py-5 px-6">
                    <h1 className="text-2xl font-bold text-white ">Manage Employers</h1>
                    <div>
                        <button onClick = { () =>setShowUpdateModal(true)} className = "bg-blue-400 hover:bg-blue-200 duration-300 focus:outline-none rounded text-white text-lg rounded-full font-medium uppercase font-normal w-12 h-12">
                        <i class="fas fa-user-plus"></i>
                        </button>
                        <button onClick={()=>{fetch('/api/Auth/logout').then(res=> res.status === 200 ? Router.push("/login"):'')}} className = "bg-blue-400 ml-3 hover:bg-blue-200 duration-300 focus:outline-none rounded text-white text-lg rounded-full font-medium uppercase font-normal w-12 h-12">
                        <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                    
                </div>
                    <div className="mt-5 mx-5">
                        <Table categories = {props.category} underCategories = {props.underCategories} themes = {props.themes} types = {props.types} users = {props.datas ? props.datas : []} />
                    </div>
                    
                    <Modal show={showUpdateModal} onClick={() => { setShowUpdateModal(!showUpdateModal) }} >
                        <Forma closeModal={()=>setShowUpdateModal(false)} {...props} />
                    </Modal>
            </div>
        </Layout>
    );
}


export default DataTable;