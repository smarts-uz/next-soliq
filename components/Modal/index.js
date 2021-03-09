import Image from 'next/image';
import BasicWithHTML from '../Basic/formikHtml';

const Modal = (props) => {
    console.log(props);
    return (
        <div className={(props.show) ? 'fixed z-10 inset-0 overflow-y-auto min-w-full' : 'fixed z-10 inset-0 hidden'}>
            <div className="flex items-end justify-center min-h-screen  text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-95"></div>
                </div>

                <div className="inline-block  bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="flex flex-col items-center">
                        {props.children ? props.children :<BasicWithHTML data = {props.oneUser} {...props} /> }
                    </div>
                    <div className="flex justify-around mb-4 ">
                        <button type="button" onClick={props.onClick} className="fixed top-3 right-3 border-4 border-blue-500 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            ✖️
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Modal;