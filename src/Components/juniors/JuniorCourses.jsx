
const JuniorCourses = () => {
  const cardsData = [
    {
      id: 1,
      heading: "NAVTTC Projects: ",
      icon: 1,
    },
    {
      id: 2,
      heading: "PSEB Projects",
      icon: 2,
    },
    {
      id: 3,
      heading: "Special Communication Organization",
      icon: 3,
    },
    {
      id: 4,
      heading: "21st-Century Skills",
      icon: 4,
    },
    {
      id: 5,
      heading: "Punjab Skill Development Fund",
      icon: 5,
    },
    {
      id: 6,
      heading: "Professional Development Training",
      icon: 6,
    },
  ];

  return (
    <section className=" max-w-[1400px] mx-auto py-[1.5rem]">
      <div>
        <h4 className=" sm:text-[24px] py-[0.5rem] md:text-[40px] font-bold    mx-auto text-center">
          Courses Offer
        </h4>

        <div className=" max-w-[1300px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1rem] my-[2rem] ">
          {cardsData.map((items, index) => {
            return (
              <div
                key={index}
                className=" box flex  items-center h-[100px] rounded-[20px] p-[1rem] max-w-[450px]  gap-[0.8rem] cursor-pointer"
              >
                <div className="  bg-gradient text-[#fff] w-[60px] h-[60px]  rounded-full flex justify-center items-center text-[20px]">
                  {items.icon}
                </div>
                <div>
                  <h5 className=" font-semibold">{items.heading}</h5>
                  {/* <p className=" text-xs">{items.paragraph}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JuniorCourses;
