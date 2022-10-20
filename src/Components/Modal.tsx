import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isOpenModal } from "../redux/Actions/modalAction";

//This is the modal to inform user that books were added to the cart
const Modal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: any) => state.modal);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="rounded-lg flex flex-col bg-white">
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-lg leading-relaxed">
              Producted has been added!
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              onClick={() => dispatch(isOpenModal(!modalState))}
              className="w-64 bg-green-500  rounded-lg h-12 hover:bg-green-600 transition-colors duration-100 hover:text-white"
            >
              Okay
            </button>
            <Link to={"/cart"}>
              <button
                onClick={() => dispatch(isOpenModal(!modalState))}
                className="w-64 bg-pink-leaf rounded-lg h-12 hover:bg-coral-pink transition-colors duration-100 hover:text-white"
              >
                Go To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
