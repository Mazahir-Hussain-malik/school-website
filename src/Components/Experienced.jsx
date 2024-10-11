import React from 'react'
import { BiLike } from "react-icons/bi";
import About_3 from "../../src/assets/home/about-3.jpg";
import About_2 from "../../src/assets/home/about-2.jpg";
const Experienced = () => {
    return (
        <div className="bg-[#F6F9FF]">
            <div className='max-w-7xl w-[90%] mx-auto py-7  flex md:flex-row flex-col justify-between items-start gap-14'>

                <div className=" relative md:w-[45%] w-full">
                    <h2 className="scroll-m-20 pb-2 md:text-3xl sm:text-2xl text-xl font-semibold tracking-tight first:mt-0">
                        We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.
                    </h2>
                    <p className='text-[#5e5454] text-base leading-7 [&:not(:first-child)]:mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.</p>

                    <ul className="my-6 list-none [&>li]:mt-2">
                        {
                            QualityPoints.map((items, key) => (
                                <li key={key} className='flex flex-row items-start justify-start gap-4  my-6'>
                                    <div className="border text-[#11B67A] border-[#11B67A] p-2 rounded-full text-xl">
                                        {items.logo}
                                    </div>
                                    <div className="">
                                        <h4 className="scroll-m-20 text-xl font-medium tracking-wide">
                                            {items.heading}
                                        </h4>
                                        <p className='text-[#5e5454] leading-7 text-base mt-3'>
                                            {items.paragraph}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="about-sec relative h-auto md:w-[50%] w-full  flex flex-row-reverse justify-start items-end">
                    <img className='md:w-[50%] w-full rounded-lg' src={About_3} alt="img" />
                    <div className="md:py-10 py-6 md:px-6 px-2 z-10 text-center text-white bg-[#11B67A] rounded-full absolute right-24 -bottom-10 ">
                        <h2 className='md:text-3xl text-xl font-bold tracking-wider'>15 <span className='font-thin'>+</span>
                        </h2>
                        <p className='md:text-base text-sm text-white font-medium mt-2'>Yrs Exprience
                        </p>
                    </div>
                    <img src={About_2} className='absolute md:top-24 top-48 left-4 rounded-lg md:w-[60%] w-[50%] ' alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Experienced;


const QualityPoints = [

    {
        logo: <BiLike />,
        heading: "Best Quality Courses",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam"
    },
    {
        logo: <BiLike />,
        heading: "Best Quality Courses",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam"
    },
    {
        logo: <BiLike />,
        heading: "Best Quality Courses",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam"
    },

] 