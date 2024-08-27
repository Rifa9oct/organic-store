import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import Image from 'next/image';

const ContactInfo = () => {
    return (
        <div className='font-poppins relative bg-white rounded-lg mx-auto w-[340px]  md:w-[650px] lg:w-[1200px] shadow-lg pb-12 pt-24 px-10'>
            <div className='absolute -top-10 left-[75px] md:left-[245px] lg:left-[500px]'>
                <Image src="/leaf.png" width={162} height={69} alt="banner" className="mx-auto" />
            </div>

            <div className='flex flex-col md:flex-row gap-8 justify-between'>
                <div className='flex flex-col items-center justify-center border-2 rounded-lg text-gray-600 gap-2 w-[250px] md:w-[325px] h-[140px]'>
                    <IoCall className='text-3xl text-lime-500' />
                    <p>+123 456 7890</p>
                    <p>+123 456 7890</p>
                </div>

                <div className='flex flex-col items-center justify-center border-2 rounded-lg text-gray-600 gap-2 w-[250px] md:w-[325px] h-[140px]'>
                    <MdMessage className='text-3xl text-lime-500' />
                    <p>info@example.com</p>
                    <p>support@example.com</p>
                </div>

                <div className='flex flex-col items-center justify-center border-2 rounded-lg text-gray-600 gap-2 w-[250px] md:w-[325px] h-[140px]'>
                    <FaLocationDot className='text-3xl text-lime-500' />
                    <p>1569 Ave, New York,</p>
                    <p>NY 10028, USA</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;