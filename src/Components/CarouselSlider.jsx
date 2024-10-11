import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CarouselPagination from "./ui/CarouselPagination";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay"
import { CiClock2 } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";

import CardImage1 from "../assets/home/course-1.jpg";
import CardImage2 from "../assets/home/course-2.jpg";
import CardImage3 from "../assets/home/course-3.jpg";
import CardImage4 from "../assets/home/course-4.jpg";
import avator from "../assets/home/avator.svg";
const CarouselSize = () => {
  const [api, setApi] = useState(null);
  const cardData = [
    {
      image: CardImage1, title: "Digital Marketing Course", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus ",
      avator: avator,
      price: "$20"
    },
    {
      image: CardImage2, title: "Zero to Hero in Python 3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus ",
      avator: avator,
      price: "$30"
    },
    {
      image: CardImage3, title: "PhP mySql programming", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus ",
      avator: avator,
      price: "$13"
    },
    {
      image: CardImage4, title: "Microsoft Excel for Beginner", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus ",
      avator: avator,
      price: "$12"
    },

  ];
  return (
    <div className="py-8">
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
        className="max-w-7xl w-[90%] mx-auto h-auto"
      >
        <h2 className="lg:w-[40%] w-[90%] mx-auto text-center leading-tight scroll-m-20 pb-2 md:text-3xl sm:text-2xl text-xl font-medium tracking-tight first:mt-0 md:pt-16 pt-6">We Do What We Love To Do. Find the Best Course To Fit Your Needs.</h2>
        <CarouselContent className="my-10 ">
          {cardData.map((card, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                <Card className="transition duration-300 hover:shadow-2xl hover:cursor-pointer">
                  <div className="relative">
                    <img src={card.image} alt={card.title} className="w-full h-64 object-cover " />
                    <div className="flex justify-between px-4 ">
                      <img src={card.avator} className="h-12 absolute left-4 bottom-5" alt="" />
                      <span className="bg-[#182B49] sm:py-2 py-1 sm:px-3 px-1 rounded-md sm:text-xl text-base font-medium text-white tracking-wider absolute right-4 bottom-5">{card.price}</span>
                    </div>
                  </div>
                  <CardHeader className="">
                    <CardTitle className="text-xl tracking-wider">{card.title}</CardTitle>
                    <CardDescription className="leading-7 md:text-lg text-base border-b border-blue-100 pb-4">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-row justify-between items-start ">
                    <div className="flex items-center sm:gap-2 gap-1">
                      <CiClock2 className="text-[#11B67A] sm:text-2xl text-lg " /> <span className="font-thin">120</span>
                    </div>
                    <div className="flex items-center sm:gap-2 gap-1 text-[#FBAB19]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <div className="flex items-center sm:gap-2 gap-1">
                      <GiWoodenChair className="text-[#11B67A] sm:text-2xl text-lg" />
                      <span className="font-thin">60</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
      {api && <CarouselPagination api={api} />}
    </div>
  )
}
export default CarouselSize;