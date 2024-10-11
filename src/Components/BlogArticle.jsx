import React from "react";
import Blog1 from "../assets/home/blogsimages/blog-1.jpg";
import Blog2 from "../assets/home/blogsimages/blog-2.jpg";
import Blog3 from "../assets/home/blogsimages/blog-3.jpg";
import Blog4 from "../assets/home/blogsimages/blog-4.jpg";
import { RiAdminLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
const BlogData = [
  {
    image: Blog1,
    heading: "Libero nulla illo quam iure reiciendis maxime.",
    paragraph:
      "Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam excepturi eum necessitatibus.",
    date: 23,
    month: "Jan",
    nameadmin: "Latif",
    message: 289,
    likes: 999,
  },
  {
    image: Blog2,
    heading: "Libero nulla illo quam iure reiciendis maxime.",
    paragraph:
      "Please resume The magic Libero nulla illo quam Libero nulla illo quam  awaits inside! ✨",
    date: 17,
    month: "Apr",
    nameadmin: "mazahir",
    message: 23,
    likes: 459,
  },
  {
    image: Blog3,
    heading: "Libero nulla illo quam iure reiciendis maxime.",
    paragraph:
      "Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam excepturi eum necessitatibus.",
    date: 12,
    month: "Sept",
    nameadmin: "Arif",
    message: 23,
    likes: 233,
  },
  {
    image: Blog4,
    heading: "Libero nulla illo quam iure reiciendis maxime.",
    paragraph:
      "Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam excepturi eum necessitatibus.",
    date: 67,
    month: "Feb",
    nameadmin: "Zeshan",
    message: 122,
    likes: 546,
  },
];
const BlogArticle = () => {
  return (
    <div>
      <div className="max-w-7xl w-[90%] mx-auto ">
        <h2 className="lg:w-[40%] w-[90%] mx-auto text-center leading-tight scroll-m-20  sm:text-3xl text-xl font-medium tracking-tight first:mt-0 md:py-16 py-6">
          Lets See What We Can Show To You Our Useful Blog Article Post.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {BlogData.map((items, index) => (
            <div
              key={index}
              className="flex xl:flex-row flex-col justify-start  items-center relative "
            >
              <img
                src={items.image}
                className="xl:w-[280px] sm:w-[350px] w-full h-[300px] xl:rounded-lg rounded-b-none rounded-t-lg z-0"
                alt="img"
              />
              <div className="custom-shadow p-5 sm:w-[350px] w-full xl:rounded-lg rounded-b-lg xl:-ml-5  z-10 bg-white relative">
                <div className="flex sm:flex-row flex-col sm:items-center items-start justify-center gap-3">
                  <span className="bg-[#0E9B68] font-semibold text-white p-2 rounded-lg text-md inline-block text-center">
                    {items.date} <span className="block">{items.month}</span>
                  </span>
                  <a
                    href="#"
                    className="text-lg font-semibold hover:text-[#0E9B68] transition-all duration-300  "
                  >
                    {items.heading}
                  </a>
                </div>
                <p className="text-[#969696] py-4 font-medium ">
                  {items.paragraph}
                </p>
                <div className="flex gap-4 font-normal text-sm border-t py-3">
                  <a href="#" className="text-center ">
                    <RiAdminLine className="inline-block text-[#0E9B68] text-lg" />{" "}
                    {items.nameadmin}
                  </a>
                  <a href="#">
                    <TbMessage className="inline-block  text-[#0E9B68] text-lg" />{" "}
                    {items.message}
                  </a>
                  <a href="#">
                    <BiLike className="inline-block  text-[#0E9B68] text-lg" />{" "}
                    {items.likes}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
