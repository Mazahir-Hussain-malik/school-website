import React from 'react'
import logo from "/f-logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { GrFacebookOption, GrTwitter, GrLinkedinOption, GrYoutube, GrDribbble } from "react-icons/gr";
import { TiHeartFullOutline } from "react-icons/ti";



const Footer = () => {
    return (
        <div>
            <div className="bg-[#1A2B4A] lg:py-16 py-8">
                <div className="max-w-7xl px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto lg:pb-7">
                    <div className="p-2 ">
                        <a href="#">
                            <img src={logo} alt="img" />
                        </a>
                        <div className="lg:mt-10 mt-5">
                            <p className='font-semibold mt-3'>Lorem ipsum dolor sit amet, consectet adipisicing elit. Saepe porro neque a nam null quos.</p>
                            <ul className='text-[#969696] text-xs'>
                                <li>
                                    <IoLocationOutline className='inline-block text-[#0E9B68] text-lg my-3 mr-3' />
                                    795 South Park Avenue, CA 94107
                                </li>
                                <li>
                                    <AiOutlineMail className='inline-block text-[#0E9B68] text-lg my-3 mr-3' />
                                    enquery@domain.com

                                </li>
                                <li>
                                    <MdPhone className='inline-block text-[#0E9B68] text-lg my-3 mr-3' />
                                    +1 908 875 7678
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-6 py-2 ">
                        <div className="md:text-xl text-lg uppercase text-white font-medium">Useful Links
                        </div>
                        <ul className='text-[#969696] text-sm font-normal space-y-3 lg:mt-10 mt-5 '>
                            <li>
                                <a href="#" className='hover:tracking-wider hover:text-[#0E9B68] transition-all duration-300'>
                                    <MdOutlineKeyboardArrowRight className='inline-block text-[#0E9B68] text-xl mr-1 ' />
                                    General Information
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:tracking-wider hover:text-[#0E9B68] transition-all duration-300'>
                                    <MdOutlineKeyboardArrowRight className='inline-block text-[#0E9B68] text-xl mr-1' />
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:tracking-wider hover:text-[#0E9B68] transition-all duration-300'>
                                    <MdOutlineKeyboardArrowRight className='inline-block text-[#0E9B68] text-xl mr-1' />
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:tracking-wider hover:text-[#0E9B68] transition-all duration-300'>
                                    <MdOutlineKeyboardArrowRight className='inline-block text-[#0E9B68] text-xl mr-1' />
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:tracking-wider hover:text-[#0E9B68] transition-all duration-300'>
                                    <MdOutlineKeyboardArrowRight className='inline-block text-[#0E9B68] text-xl mr-1' />
                                    Online Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <div className="md:text-xl text-lg uppercase text-white font-medium">Twitter Post
                        </div>
                        <ul className='text-[#969696] text-sm font-normal space-y-3 lg:mt-10 mt-5'>
                            <li>
                                <a href="#" className=' hover:text-[#0E9B68] transition-all duration-300'>
                                    <RiTwitterXFill className='inline-block text-[#0E9B68] text-3xl mr-1 ' />

                                    Lorem ipsum dolor sit ...
                                    <p className='ml-8 text-xs'>Mar 30, 2019</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className=' hover:text-[#0E9B68] transition-all duration-300'>
                                    <RiTwitterXFill className='inline-block text-[#0E9B68] text-3xl mr-1 ' />

                                    Lorem ipsum dolor sit ...
                                    <p className='ml-8 text-xs'>Apr 12, 2019</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className=' hover:text-[#0E9B68] transition-all duration-300'>
                                    <RiTwitterXFill className='inline-block text-[#0E9B68] text-3xl mr-1 ' />

                                    Lorem ipsum dolor sit ...
                                    <p className='ml-8 text-xs'>Sept 04, 2019</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className=' hover:text-[#0E9B68] transition-all duration-300'>
                                    <RiTwitterXFill className='inline-block text-[#0E9B68] text-3xl mr-1 ' />

                                    Lorem ipsum dolor sit ...
                                    <p className='ml-8 text-xs'>Dec 23, 2019</p>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="p-2">
                        <div className="">
                            <h2 className='md:text-xl text-lg uppercase text-white font-medium '>Useful Links</h2>

                        </div>
                        <ul className='text-white text-sm font-normal space-y-3 lg:mt-10 mt-5'>
                            <li>
                                <p className='font-semibold'>Lorem ipsum dolor sit amet, consectet adipisicing elit.
                                </p>
                            </li>
                            <li>
                                <Input className="borer border-[#969696] bg-[#182B49] focus:border-gray-500 font-normal text-md text-[#969696] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none" placeholder="Enter your Email " />
                            </li>
                            <li>
                                <Button className="w-full bg-[#0E9B68]" >
                                    Submit
                                </Button >
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" pt-4">
                    <div className="flex pb-5 px-3 m-auto pt-5 border-t border-[#969696]  text-sm flex-col
      max-w-screen-lg items-center">
                        <div className="my-5 text-[#969696]">Copyright © 2017 | Designed With <TiHeartFullOutline className='inline-block text-[#0E9B68]' /> by <span className='text-[#0E9B68]'>Mazahir</span> </div>
                        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-white gap-2">
                            <a href="/#" className="small-hexagon ">
                                <GrFacebookOption />
                            </a>
                            <a href="/#" className=" small-hexagon">
                                <GrTwitter />
                            </a>
                            <a href="/#" className="small-hexagon">
                                <GrLinkedinOption />
                            </a>
                            <a href="/#" className="small-hexagon">
                                <GrYoutube />
                            </a>
                            <a href="/#" className="small-hexagon">
                                <GrDribbble />
                            </a>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Footer;