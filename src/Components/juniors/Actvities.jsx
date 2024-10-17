import Gallery4 from "@/assets/images/gallery4.png";

const Actvities = () => {
  return (
    <div className="py-[2rem]">
      <h2 className=" text-4xl font-bold  text-center text-gray-700">
        School Activities
      </h2>
      <div className=" bg-gradient w-[200px] h-[4px] mx-auto"></div>
      <p className=" text-[16px] text-center md:w-2/4 mx-auto py-[1rem]">
        Our school’s daily routine starts with a morning assembly, followed by
        engaging lessons and short breaks. Lunch offers time to relax and
        socialize, while afternoons focus on activities and sports. The day ends
        with a recap session, ensuring students stay on track with their
        learning.
      </p>
      <div className=" max-w-[1300px] mx-auto grid grid-cols-2 gap-[2rem] items-center py-[2rem] ">
        <div className="  shadow-lg rounded-xl  h-[450px] overflow-hidden">
          <img src={Gallery4} alt="std activity" className=" transition-all ease-linear delay-150 hover:scale-105  " />
        </div>
        <div className=" ">
          <h2 className=" text-[36px] font-semibold "> Morning Assembly</h2>
          <p className=" md:text-[15px] text-sm md:leading-[32px] ">
            {" "}
            North Tech Solution, established on January 5, 2021, is a leading IT
            service provider with affiliations including SECP, DC Office Gilgit
            Baltistan, Chamber of Commerce and Industry Gilgit, PSEB, and
            NAVTTC. NorTech is a pillar of technological advancement in the
            region, actively contributing to the community{" "}
          </p>
          <p className=" md:text-[15px] text-sm md:leading-[32px] ">
            {" "}
            North Tech Solution, established on January 5, 2021, is a leading IT
            service provider with affiliations including SECP, DC Office Gilgit
            Baltistan, Chamber of Commerce and Industry Gilgit, PSEB, and
            NAVTTC. NorTech is a pillar of technological advancement in the
            region, actively contributing to the community{" "}
          </p>
        </div>
      </div>
      <div className=" max-w-[1300px] mx-auto grid grid-cols-2 gap-[2rem] items-center py-[2rem] ">
        <div className=" ">
          <h2 className=" text-[36px] font-semibold "> Morning Assembly</h2>
          <p className=" md:text-[15px] text-sm md:leading-[32px] ">
            {" "}
            North Tech Solution, established on January 5, 2021, is a leading IT
            service provider with affiliations including SECP, DC Office Gilgit
            Baltistan, Chamber of Commerce and Industry Gilgit, PSEB, and
            NAVTTC. NorTech is a pillar of technological advancement in the
            region, actively contributing to the community{" "}
          </p>
          <p className=" md:text-[15px] text-sm md:leading-[32px] ">
            {" "}
            North Tech Solution, established on January 5, 2021, is a leading IT
            service provider with affiliations including SECP, DC Office Gilgit
            Baltistan, Chamber of Commerce and Industry Gilgit, PSEB, and
            NAVTTC. NorTech is a pillar of technological advancement in the
            region, actively contributing to the community{" "}
          </p>
        </div>
        <div className="  shadow-lg rounded-xl  h-[450px] overflow-hidden">
          <img src={Gallery4} alt="std activity" className="  transition-all ease-linear delay-150 hover:scale-105  " />
        </div>
      </div>
    </div>
  );
};

export default Actvities;
