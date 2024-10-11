import React from 'react'
import CountdownTimer from './ui/CountdownTimer'
import SimpleForm from "./ui/CustomForm"
const SignupForm = () => {
    return (
        <div className='lg:py-8 py-2'>
            <div className="max-w-7xl mx-auto w-[90%] flex lg:flex-row flex-col justify-between lg:my-10 my-4">
                <div className="lg:w-[50%] w-full">
                    <h2 className="  leading-snug scroll-m-20 pb-2 lg:text-3xl sm:text-2xl text-xl font-semibold tracking-tight first:mt-0 md:pt-16 pt-6">Get Free Training Course On Web Design For This Week. It&apos;s Limited Time Only. Hurry Up To Get This Course.</h2>
                    <p className='md:text-lg md:my-9 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, molestiae modi quas rerum animi placeat aut iusto quae dolore officiis. Odio totam debitis quos voluptatib dolorem quae sequi ab velit.</p>
                    <div className="">
                        <CountdownTimer />
                    </div>
                </div>
                <div className=" py-11 lg:w-[40%] w-full">
                    <SimpleForm />
                </div>
            </div>
        </div>
    )
}

export default SignupForm