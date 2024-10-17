import React,{useState} from "react";
import { IoThumbsUpOutline } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsDatabaseCheck } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import Image1 from "../../assets/images/hero.png"
const Accomploshment = () => {
    const [expandedCard, setExpandedCard] = useState(null); // State to track which card is expanded

    const toggleCard = (id) => {
      setExpandedCard(expandedCard === id ? null : id); // Toggle the card on click
    };
  const cardsData = [
    {
      id: 1,
      heading: "NAVTTC Projects: ",
      paragraph: `North Tech has won three significant projects under NAVTTC since 2022, enhancing
    vocational and technical education across Pakistan.`,
      icon: <IoThumbsUpOutline />,
      image: Image1,
      moreText: "Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.",
    },
    {
      id: 2,
      heading: "PSEB Projects",
      paragraph: ` Starting in 2023, Noth Tech secured four major projects with PSEB, providing paid
    internships of PKR 20,000 to over 60 individuals, helping them gain valuable industry experience `,
      icon: <FaBookReader />,
      image: Image1,
      moreText: "Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects. Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.",
    },
    {
      id: 3,
      heading: "Special Communication Organization",
      paragraph: `Trained 90 students from the Special Communication Organization
    and 63 composite signal children in Digital Marketing and IELTS`,
      icon: <GiTeacher />,
      image: Image1,
      moreText: "Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects. Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.",
    },
    {
      id: 4,
      heading: "21st-Century Skills",
      paragraph: `Trained more than 50 students in essential 21st-century skills`,
      icon: <BsDatabaseCheck />,
      image: Image1,
      moreText: "Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.",
    },
    {
      id: 5,
      heading: "Punjab Skill Development Fund",
      paragraph: `Joint agreement on August 29, 2024, for Digital Marketing training.`,
      icon: <IoLocationSharp />,
      image: Image1,
      moreText: "Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.",
    },
    {
      id: 6,
      heading: "Professional Development Training",
      paragraph: `Sessions conducted on parent-child development, language classes
    (IELTS, TOEFL, PTE)`,
      icon: <MdSupportAgent />,
      image: Image1,
      moreText: "Further description about the NAVTTC projects. Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.Further description about the NAVTTC projects.",
    },
  ];

  return (
    <section className=" max-w-[1400px] mx-auto">
      <div>
        <h4 className=" sm:text-[24px] text-[16px] font-semibold md:w-4/12 w-[80%]  mx-auto text-center">
          Project Accomplishments:
        </h4>
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1rem] my-[2rem]">
      {cardsData.map((item) => (
        <div
          key={item.id}
          className={`box flex flex-col justify-center items-start rounded-[20px] p-[1rem] gap-[0.8rem] cursor-pointer transition-all duration-500 ease-in-out hover:shadow-lg 
            ${expandedCard === item.id ? 'col-span-full w-full h-auto' : 'h-[150px]'}
          `}
          onClick={() => toggleCard(item.id)}
        >
          <div className="bg-gradient text-[#fff] p-[1rem] rounded-full flex justify-center items-start text-[20px]">
            {item.icon}
          </div>
          <div>
            <h5 className="font-semibold">{item.heading}</h5>
            <p className="text-xs">{item.paragraph}</p>
          </div>

          {/* Conditionally render more content with transition */}
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              expandedCard === item.id ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}
          >
            {expandedCard === item.id && (
              <div className="mt-2 flex flex-row justify-start ">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-[400px] h-auto rounded-lg"
                />
                <div className=" mt-2 ml-6">
                <p className="text-base">{item.moreText}</p>
                <button className="rounded-md py-2 text-sm mt-4 px-3 hover:bg-[#4a90e2]">Read More</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default Accomploshment;
