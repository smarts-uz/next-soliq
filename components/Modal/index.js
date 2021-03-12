import Forma from '../Forma';

const Modal = (props) => {
    return (
        <div className={props.show ? 'fixed top-0 left-0 bg-black bg-opacity-80 w-full h-screen overflow-auto' : 'hidden'}>
            <div className="w-full h-full flex items-center justify-center">
                <button className="absolute right-0 top-0 p-4 focus:outline-none" onClick={props.onClick}>
                    <i className="fas fa-times-circle text-3xl text-white"></i>
                </button>
                <div className="bg-white sm:w-4/5 p-3 h-auto w-full my-3">
                    {props.children ? props.children : <Forma data={props.oneUser} {...props} />}
                </div>
            </div>
        </div>
    );
}

export default Modal;
