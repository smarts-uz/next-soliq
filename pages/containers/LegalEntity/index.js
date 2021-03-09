import { PrismaClient } from ".prisma/client";
import axios from "axios";
import { useState } from "react";
import Header from "../../../components/Header";
import Modal from "../../../components/Modal/modalEntity";

export const getStaticProps = async () => {
    const prisma = new PrismaClient()
    const provinces = await prisma.provinces.findMany()
    return {
        props: {
            provinces: provinces
        }
    }
}

const PhysicalPerson = (props) => {

    const [company_tin, setCompanyTin] = useState('');
    const [dataModal, setDataModal] = useState(false);
    const [legalEntity, setlegalEntity] = useState(null);
    const [oneProvince, setOneProvince] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const submitPhysicalPerson = async (e) => {
        e.preventDefault();

        const obj = {
            company_tin
        }

        await axios.post('/api/LegalEntity/create', obj)
            .then(res => {
                setDataModal(true);
                setlegalEntity(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <Header>
            <div>
                <div className="w-64">
                    <div className="mt-1 relative">
                        <button onClick={() => {
                            setDropdown(!dropdown);
                        }} type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                    {oneProvince ? oneProvince.name_uz : 'Select Province ... '}
                                </span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        {dropdown ?
                            <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                                <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {
                                        props.provinces.map(province => {
                                            return (
                                                <li key={province.id} onClick={() => {
                                                    setOneProvince(province);
                                                    setDropdown(false);
                                                }} id="listbox-item-0" role="option" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 block font-normal truncate">
                                                            {province.name_uz}
                                                        </span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            : ''}
                    </div>
                </div>

                <form onSubmit={submitPhysicalPerson} className="overflow-hidden w-screen h-screen justify-center items-center flex flex-col space-y-4">

                    <input onChange={e => {
                        setCompanyTin(e.target.value);
                    }} value={company_tin} className="border-4 border-blue-300 py-2 px-4 rounded-full   focus:outline-none focus:border-green-500" placeholder="Company tin"></input>
                    <button className="border-4 border-black py-2 px-4 rounded-full   focus:outline-none focus:border-green-500 bg-gray-700 text-white hover:bg-white hover:text-black" type="submit">Submit</button>
                </form>
            </div>
            <Modal show={dataModal} data={legalEntity} onClick={() => {
                setDataModal(!dataModal);
            }} />
        </Header>
    );
}

export default PhysicalPerson;