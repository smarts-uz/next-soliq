import axios from "axios";
import { useState } from "react";
import Forma from "../Forma";
import Modal from "../Modal";


const datTable = (props) => {
  
  const [oneUser, setOneUser] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <div className="flex flex-col shadow text-center w-full overflow-hidden">
      <div className="-my-2 overflow-x-auto ">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white text-black">
                <tr>
                  <th scope="col" className=" py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    author
                </th>
                  <th scope="col" className=" py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    inn
                </th>
                  <th scope="col" className=" py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    province
                </th>
                  <th scope="col" className=" py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    destrict
                </th>
                  <th scope="col" className=" py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    address
                </th>
                  <th scope="col" className=" py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    phone
                </th>
                  <th scope="col" className=" py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    email
                </th>
                  <th scope="col" className="py-3 text-center text-sm font-bold  uppercase tracking-wider">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white">
                {props.users.map(user => {
                  return (
                    <tr key={user.id} className="bg-white hover:bg-gray-200">
                      <td className="whitespace-nowrap">
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
                      <td className=" py-4 break-all  whitespace-nowrap text-sm text-gray-500">
                        {user.address}
                      </td>
                      <td className=" py-4  whitespace-nowrap text-sm text-gray-500">
                        {user.phone}
                      </td>
                      <td className=" py-4  whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="py-4 flex justify-center whitespace-nowrap text-left text-sm font-medium">
                        <button onClick={() => {
                          setOneUser(user);
                          setShowUpdateModal(true)
                        }} className="mx-1 w-6 focus:outline-none" type="button"><i class="far fa-edit"></i></button>
                        <button className="mx-1 w-6 focus:outline-none" type="button"
                          onClick={async () => {
                            await axios.post('/api/Datas/delete', { id: user.id }).then(data => {
                              window.location.reload()
                              console.log("Deleted")
                            }).catch(err => {
                              console.log(err);
                            })
                          }} ><i class="fas fa-trash"></i></button>
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
        {oneUser ? <Forma closeModal={()=>setShowUpdateModal(false)} data = {oneUser} {...props} /> : <Forma  {...props} />}
      </Modal>
    </div>

  );
}

export default datTable;