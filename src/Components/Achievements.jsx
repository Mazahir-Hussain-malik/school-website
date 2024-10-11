import React from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaGraduationCap } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { MdOutlineLocalLibrary } from "react-icons/md";

const AchievementsData = [
  {
    logo: <LiaUniversitySolid />,
    total: "1170+",
    depot: "University Courses",
  },
  {
    logo: <FaGraduationCap />,
    total: "2309+",
    depot: "Total Students",
  },
  {
    logo: <FaAward />,
    total: "590+",
    depot: "Awards Wins",
  },
  {
    logo: <MdOutlineLocalLibrary />,
    total: "3790+",
    depot: "Library Books",
  },
];
const Achievements = () => {
  return (
    <div className="bg-[#1D2F4D]">
      <div className="max-w-7xl w-[90%] mx-auto">
        <div className="lg:py-8 py-4">
          <h2 className="lg:w-[50%] w-[90%] mx-auto text-center leading-snug scroll-m-20 pb-2 md:text-3xl sm:text-2xl text-xl font-semibold tracking-tight first:mt-0 md:pt-16 pt-6 text-white">
            Lets Have A Look At Some Of Achievements For Years We Get.
          </h2>
          <div className="flex sm:justify-between justify-center items-center my-6 flex-wrap">
            {AchievementsData.map((items, index) => (
              <div
                key={index}
                className="flex text-white justify-between items-center py-5"
              >
                <div className="text-6xl border border-dotted border-[#0E9B68] text-[#0E9B68] rounded-md py-4 px-8 ">
                  {items.logo}
                </div>
                <div className="-ml-4">
                  <h2 className="md:text-2xl text-xl font-medium tracking-widest">
                    {items.total}{" "}
                  </h2>
                  <h4 className="text-lg font-semibold text-white">
                    {items.depot}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
