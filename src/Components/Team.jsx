import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import CarouselPagination from "./ui/CarouselPagination";
import Autoplay from "embla-carousel-autoplay"
import { RiFacebookFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";


import TeamImage1 from "../assets/home/team/team-1.jpg";
import TeamImage2 from "../assets/home/team/team-2.jpg";
import TeamImage3 from "../assets/home/team/team-3.jpg";
import TeamImage4 from "../assets/home/team/team-4.jpg";
import TeamImage5 from "../assets/home/team/team-5.jpg";
const Team = () => {
    const [api, setApi] = useState(null);
    const cardData = [
        {
            image: TeamImage1,
            name: "Pery imoor",
            title: "Teacher",
            faceLink: "",
            youtLInk: "",
            twiterrLink: "",
        },
        {
            image: TeamImage2,
            name: "Modl shoen",
            title: "Teacher",
            faceLink: "",
            youtLInk: "",
            twiterrLink: "",
        },
        {
            image: TeamImage3,
            name: "la zulami",
            title: "Teacher",
            faceLink: "",
            youtLInk: "",
            twiterrLink: "",
        },
        {
            image: TeamImage4,
            name: "paawer usami",
            title: "Teacher",
            faceLink: "",
            youtLInk: "",
            twiterrLink: "",
        },
        {
            image: TeamImage5,
            name: "Sarh konsi",
            title: "Teacherr",
            faceLink: "",
            youtLInk: "",
            twiterrLink: "",
        },

    ];
    return (
        <div className="py-8 bg-[#F6F9FF]">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                setApi={setApi}
                className="max-w-7xl w-[90%] mx-auto h-auto pb-8"
            >
                <h2 className="lg:w-[40%] w-[90%] mx-auto text-center leading-tight scroll-m-20 pb-2 sm:text-3xl text-xl font-medium tracking-tight first:mt-0 md:pt-16 pt-6">We Do What We Love To Do. Find the Best Course To Fit Your Needs.</h2>
                <CarouselContent className="my-10 ">
                    {cardData.map((card, index) => (
                        <CarouselItem key={index} className="basi-1/2 md:basis-1/3 lg:basis-1/4 ">
                            <div className="p-1">
                                <Card className=" relative">
                                    <div className="relative">
                                        <img src={card.image} alt='img' className="w-full  object-cover " />

                                    </div>
                                    <div className="absolute w-[80%] mx-auto md:left-6 sm:left-16 left-6 -bottom-10 bg-white  rounded-xl shadow-md flex flex-col items-center justify-center ">
                                        <CardHeader className="text-center">
                                            <CardTitle className="lg:text-2xl text-xl tracking-wider capitalize font-semibold ">{card.name}</CardTitle>
                                            <CardDescription className="leading-7 md:text-lg text-base font-semibold   ">{card.title}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex flex-row justify-center items-center text-xl text-white gap-3">
                                            <a href={card.faceLink} target = "_blank" className='w-[40px] h-[40px] rounded-full bg-[#4267B2] flex items-center justify-center transition duration-300 hover:bg-[#0E9B68]'>

                                                <RiFacebookFill />
                                            </a>
                                            <a href={card.twiterrLink} target='_blank' className='w-[40px] h-[40px] rounded-full bg-[#1DA1F2] flex items-center justify-center transition duration-300 hover:bg-[#0E9B68] '>
                                                <RiTwitterXFill />
                                            </a>
                                            <a href={card.youtLInk} 
                                            target='_blank' className='w-[40px] h-[40px] rounded-full bg-[#DD1343] flex items-center justify-center transition duration-300 hover:bg-[#0E9B68] '>
                                                <RiYoutubeFill />
                                            </a>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
            {api && <CarouselPagination api={api} />}
        </div>
    )
}
export default Team;