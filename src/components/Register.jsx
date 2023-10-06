import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Button1 from './Button1';

import StyleContextProvider from '../context/Style';

function Register() {
    const {check, setCheck} = StyleContextProvider();
  return (
    <Wrapper>
        <div className='bg bg-[#171717] lg:p-20 md:p-9 p-5'>
            <div className='full bg-gray-800 rounded-2xl grid md:grid-cols-2 '>
                <div className='w-full flex flex-col justify-center items-center'>
                    <Form />
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <p className='text-center mb-2 text-[#AAAAAA]'>{check ? "Create an Account to get started!" : "Already have an Account?"}</p>
                    <Button1 />
                </div>

            </div>
        </div>
    </Wrapper>
  );
}

export default Register;

const Wrapper = styled.div`
    .bg{
        height: 100vh;
        width:100%;
    }
    .full{
        min-height: 100%;
        max-height: fit-content;
        width: 100%;
        padding: 5px;
    }
`;
