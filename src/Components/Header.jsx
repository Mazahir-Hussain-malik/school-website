import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Modal from "./Modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=" relative  header_hero_section  my-[5rem] flex flex-col justify-center items-center h-[80vh]   ">
      <div className=" max-w-[1300px] mx-auto flex flex-col justify-center items-center  gap-6    ">
        <h1 className=" text-center md:w-[60%] md:text-3xl sm:text-2xl font-bold ">
          North Tech Solution: A Comprehensive IT Service Provider
        </h1>
        <p className="md:w-2/3 mx-auto text-center text-[#fff]/70  md:text-[20px] text-sm leading-[32px]">
          North Tech Solution, established on January 5, 2021, is a leading IT
          service provider with affiliations including SECP, DC Office Gilgit
          Baltistan, Chamber of Commerce and Industry Gilgit, PSEB, and NAVTTC.
          NorTech is a pillar of technological advancement in the region,
          actively contributing to the community
        </p>

        <div
          className=" text-[#fff] h-[100px] w-[100px] rounded-full bg-gradient flex flex-col justify-center items-center text-[24px] animate-pulse cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FaPlay />
        </div>
      </div>

      <div>
        <Modal open={open} onClosed={() => setOpen(false)}>
          <div className=" max-w-[800px] overflow-hidden w-[90%] mx-auto">
            <video src="./assets/school/"></video>
          </div>
        </Modal>
      </div>

      {/* <img src="/r-shape.png" alt="" className=" w-[100%] absolute bottom-0" /> */}
    </header>
  );
};

export default Header;
