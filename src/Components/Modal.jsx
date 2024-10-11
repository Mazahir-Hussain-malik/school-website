import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ open, onClosed, children }) => {
  return (
    <div
      onClosed={onClosed}
      className={` fixed inset-0 flex justify-center h-[100vh]   items-center transition-colors ${
        open ? " bg-black/70" : " invisible"
      }`}
    >
      <div
        // onClick={(e) => e.stopPropagation()}
        className={`  rounded-xl shadow  transition-all delay-150 ${
          open ? " scale-100 opacity-100" : " scale-150 opacity-0"
        } `}
      >
        <div
          className=" absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClosed}
        >
          <MdOutlineClose />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
