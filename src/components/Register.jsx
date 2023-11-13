import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Button1 from './Button1';

import cart_image from "../assets/shopping-cart.png"

import StyleContextProvider from '../context/Style';

function Register() {
    const { check, setCheck } = StyleContextProvider();
    return (
        <Wrapper>
            <div className='bg bg-[#171717] lg:p-20 sm:p-15 py-10 '>
                <div className='full bg-gray-800 p-5 sm:rounded-2xl grid md:grid-cols-2  '>
                    <div className='md:hidden flex flex-row justify-center items-center my-[20px] '>
                        <img
                            alt="Flowbite React Logo"
                            className=""
                            src={cart_image}
                        />
                        <h1 className='text-white text-2xl'>ShopEase</h1>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <Form />
                    </div>
                    <div className='w-full flex flex-col justify-evenly items-center  '>
                        <div className='hidden md:flex flex-row items-center my-[20px] '>
                            <img
                                alt="Flowbite React Logo"
                                className="w-[80px]"
                                src={cart_image}
                            />
                            <h1 className='text-white text-4xl'>ShopEase</h1>
                        </div>
                        <div className='mt-[30px]'>
                            <p className='text-center mb-2 text-[#AAAAAA]'>{check ? "Create an Account to get started!" : "Already have an Account?"}</p>
                            <Button1 />
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    );
}

export default Register;

const Wrapper = styled.div`

    .full{
        min-height: 100%;
        max-height: fit-content;
        width: 100%;
        padding: 5px;
    }
`;
