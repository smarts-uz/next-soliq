import axios from "axios";
import { useEffect, useState } from "react";
import BasicWithHTML from "../Basic/formikHtml";
import Modal from "../Modal";
// import Modal from "./modal";
// import UpdateForm from "./updateForm";


const datTable = (props) => {
  
  const [oneUser, setOneUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dateFormat = (datetime) => {
    
    let date = new Date(Date.parse(datetime));
    console.log(date);
    let day = (date.getDay().toString().length == 1) ? `0${date.getDay()}` : date.getDay();
    let month = (date.getMonth().toString().length == 1) ? `0${date.getMonth()}` : date.getMonth();;
    console.log(day, month);
    return date.toDateString();
  }

  return (
    <div className="flex flex-col my-4 text-center w-full overflow-hidden">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-300  text-white">
                <tr>
                  <th scope="col" className=" py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    author
                </th>
                  <th scope="col" className=" py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    inn
                </th>
                  <th scope="col" className=" py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    province
                </th>
                  <th scope="col" className=" py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    destrict
                </th>
                  <th scope="col" className=" py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    address
                </th>
                  <th scope="col" className=" py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    phone
                </th>
                  <th scope="col" className=" py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    email
                </th>
                  <th scope="col" className="relative  py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg- divide-y divide-white">
                {props?.users?.map(user => {
                  return (
                    <tr key={user.id} className="bg-blue-100 hover:bg-white">
                      <td className="  whitespace-nowrap">
                        
                          <div className="text-sm text-gray-900 text-center">{user.author}</div>
                        
                      </td>
                      <td className=" py-4  whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.inn}</div>
                      </td>
                      <td className="  whitespace-nowrap">
                        <span className="text-sm text-gray-900 text-center">
                          {user.province}
                        </span>
                      </td>
                      <td className=" py-4  whitespace-nowrap text-sm text-gray-500">
                        {user.destrict}
                      </td>
                      <td className=" py-4  whitespace-nowrap text-sm text-gray-500">
                        {user.address}
                      </td>
                      <td className=" py-4  whitespace-nowrap text-sm text-gray-500">
                        {user.phone}
                      </td>
                      <td className=" py-4  whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="pr-4 py-4  whitespace-nowrap text-left text-sm font-medium">
                        <i className="fas fa-edit"></i>
                        <button onClick={() => {
                          setOneUser(user);
                          setShowUpdateModal(true)
                        }} className="border-none mx-1 w-6 focus:outline-none fal fa-edit rounded-full" type="button"><img className="w-12" src="https://img.icons8.com/cute-clipart/64/000000/pencil.png"/></button>
                        <button className="border-none mx-1 w-6 focus:outline-none fal fa-edit rounded-full " type="button"
                          onClick={async () => {
                            await axios.post('/api/Datas/delete', { id: user.id }).then(data => {
                              window.location.reload();
                            }).catch(err => {
                              console.log(err);
                            })
                          }} ><img className="w-12" src="https://img.icons8.com/plasticine/100/000000/trash--v1.png"/></button>
                        <button onClick={() => {
                          setOneUser(user);
                          setShowModal(true);
                        }} className="border-none mx-1 w-6 focus:outline-none fal fa-edit rounded-full " type="button" ><img className="w-12" src="https://img.icons8.com/bubbles/50/000000/visible--v2.png"/></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={showUpdateModal}  data={oneUser} onClick={() => {
        setShowUpdateModal(!showUpdateModal);
      }} >
        {oneUser ? <BasicWithHTML data = {oneUser} {...props} /> : <BasicWithHTML  {...props} />}
        {/* ok */}
      </Modal>
      {/* <UpdateForm data={oneUser}
        show={showUpdateModal}
        onClick={() => {
          setShowUpdateModal(!showUpdateModal);
        }} /> */}
    </div>

  );
}

export default datTable;