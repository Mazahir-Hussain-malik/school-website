import React from "react";
import gallery4 from "../assets/images/gallery4.png";
import gallery5 from "../assets/images/gallery5.png";
import gallery2 from "../assets/images/gallery2.png";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Departments = () => {
  const DepartmentsData = [
    {
      id: 1,
      image: gallery4,
      text: "JUNIORS",
      linkto : "/juniors"
    },
    {
      id: 2,
      image: gallery2,
      text: "SENIORS",
      linkto : "/seniors"

    },
    {
      id: 1,
      image: gallery5,
      text: "NORTECH",
      linkto : "/northtech"

    },
  ];

  return (
    <section className=" w-full py-[1rem]">
      <h2 className=" text-[50px] font-bold text-center  py-[1rem]">
        {" "}
        Our Departments{" "}
      </h2>
      <div className=" max-w-[1300px] mx-auto flex gap-[2rem] ">
        {DepartmentsData.map((items, index) => {
          return (
            <Link
            to={items.linkto}
              key={index}
              className="border rounded-xl overflow-hidden relative cursor-pointer hover:scale-105 transition-all ease-linear delay-150  h-[300px] w-[30%]  group "
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgb(0, 0, 0 , 0.3)),url(${items.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button className="z-20  group-hover:w-[300px] transition-all ease-linear delay-150  h-[80px] flex justify-center items-center gap-[0.5rem] group-hover:gap-[1rem] rounded-br-[40px]">
                {items.text}{" "}
                <span className=" group-hover:block hidden">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </button>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Departments;
