import axios from "axios";
import { useState } from "react";
import Header from "../../../components/Header";
import Modal from "../../../components/Modal/modalEntity";

const PhysicalPerson = () => {

    const [company_tin, setCompanyTin] = useState('');
    const [dataModal, setDataModal] = useState(false);
    const [legalEntity, setlegalEntity] = useState(null);
   
    const submitPhysicalPerson = async (e) => {
        e.preventDefault();

        const obj = {
            company_tin
        }

        await axios.post('/api/LegalEntity/create', obj)
            .then(res => {
                setDataModal(true);
                setlegalEntity(res.data.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <Header>
            <div>

                <form onSubmit={submitPhysicalPerson} className="overflow-hidden w-screen h-screen justify-center items-center flex flex-col space-y-4">

                    <input onChange={e => {
                        setCompanyTin(e.target.value);
                    }} value={company_tin} className="border-4 border-blue-300 py-2 px-4 rounded-full   focus:outline-none focus:border-green-500" placeholder="Company tin"></input>
                    <button className="border-4 border-black py-2 px-4 rounded-full   focus:outline-none focus:border-green-500 bg-gray-700 text-white hover:bg-white hover:text-black" type="submit">Submit</button>
                </form>
            </div>
            <Modal show = {dataModal} data = { legalEntity } onClick = {() => {
                setDataModal(!dataModal);
            }} />
        </Header>
    );
}

export default PhysicalPerson;