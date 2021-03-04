import axios from "axios";
import { useState } from "react";
import Header from "../../../components/Header";
import Modal from "../../../components/Modal";

const PhyPerson = () => {

    const [inn, setInn] = useState('');
    const [series_passport, setSeries_passport] = useState('');
    const [number_passport, setNumber_passport] = useState('');
    const [dataModal, setDataModal] = useState(false);
    const [physicalPerson, setPhysicalPerson] = useState(null);
    const submitPhysicalPerson = async (e) => {
        e.preventDefault();

        const obj = {
            series_passport,
            number_passport,
            inn
        }

        await axios.post('/api/PhysicalPerson/create', obj)
            .then(res => {
                setDataModal(true);
                setPhysicalPerson(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <Header>
            <div>

                <form onSubmit={submitPhysicalPerson} className="w-screen h-screen justify-center items-center flex flex-col space-y-4">

                    <input onChange={e => {
                        setInn(e.target.value);
                    }} value={inn} className="border-4 border-blue-300 py-2 px-4 rounded-full   focus:outline-none focus:border-green-500" placeholder="INN"></input>

                    <input onChange={e => {
                        setSeries_passport(e.target.value);
                    }} value={series_passport} className="border-4 border-blue-300 py-2 px-4 rounded-full   focus:outline-none focus:border-green-500" placeholder="Passport Series"></input>

                    <input onChange={e => {
                        setNumber_passport(e.target.value);
                    }} value={number_passport} className="border-4 border-blue-300 py-2 px-4 rounded-full   focus:outline-none focus:border-green-500" placeholder="Passport Numbers"></input>
                    <button className="border-4 border-black py-2 px-4 rounded-full   focus:outline-none focus:border-green-500 bg-gray-700 text-white hover:bg-white hover:text-black" type="submit">Submit</button>
                </form>
            </div>
            <Modal show={dataModal} data={physicalPerson} onClick={() => {
                setDataModal(!dataModal);
            }} />
        </Header>
    );
}

export default PhyPerson;