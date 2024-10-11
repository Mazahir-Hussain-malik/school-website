import React from "react";
import { IoThumbsUpOutline } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsDatabaseCheck } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

const Feautured = () => {
  const cardsData = [
    {
      id: 1,
      heading: "Popular Courses",
      paragraph: "Lorem ipsum dolor sit, amet consectetur elit.",
      icon: <IoThumbsUpOutline />,
    },
    {
      id: 2,
      heading: "Modern Library",
      paragraph: "Lorem ipsum dolor sit, amet consectetur elit.",
      icon: <FaBookReader />,
    },
    {
      id: 3,
      heading: "Qualified Teacher",
      paragraph: "Lorem ipsum dolor sit, amet consectetur elit.",
      icon: <GiTeacher />,
    },
    {
      id: 4,
      heading: "Unlimited Courses",
      paragraph: "Lorem ipsum dolor sit, amet consectetur elit.",
      icon: <BsDatabaseCheck />,
    },
    {
      id: 5,
      heading: "Many Locations",
      paragraph: "Lorem ipsum dolor sit, amet consectetur elit.",
      icon: <IoLocationSharp />,
    },
    {
      id: 6,
      heading: "Online Support",
      paragraph: "Lorem ipsum dolor sit, amet consectetur elit.",
      icon: <MdSupportAgent />,
    },
  ];

  return (
    <section className=" max-w-[1300px] mx-auto">
      <div>
        <h4 className=" sm:text-[24px] text-[16px] font-semibold md:w-4/12 w-[80%]  mx-auto text-center">
          Checkout Our Features To Know Why We Are Best In This Business
        </h4>

        <div className=" max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1rem] my-[2rem] ">
          {cardsData.map((items, index) => {
            return (
              <div
                key={index}
                className=" box flex justify-center items-center h-[120px] p-[1rem] max-w-[400px]  gap-[0.8rem] cursor-pointer"
              >
                <div className=" bg-gradient text-[#fff] w-[70px] h-[70px] rounded-full flex justify-center items-center text-[24px]">
                  {items.icon}
                </div>
                <div>
                  <h5 className=" font-semibold">{items.heading}</h5>
                  <p>{items.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feautured;
