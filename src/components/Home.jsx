import React, { useState } from 'react';
import styled from 'styled-components';

function Home() {
  const [check, setCheck] = useState(true);

  return (
    <Wrapper>
        <div className='bg bg bg-[#171717] lg:p-20 md:p-9'>
            <div className='full relative h-full w-full'>
                <div className={`parallelogramm absolute duration-1000 ${check?" opacity-100":"opacity-0"} left-0 bg-maroon-light`}>

                </div>
                <div className={`parallelogramm absolute duration-1000 right-0 bg-red-400 ${check?" opacity-0":"opacity-100"}`}>

                </div>
                <div className={`parallelogramm absolute duration-300 ${check?"right-0": "right-[50%]"} bg-red-200`}>
                    {check? "sign up": "Log in"}
                </div>
            </div>
            <button onClick={()=> {setCheck(!check)}} className='text-white'>click me</button>
            <h1 className='text-white' >helooo</h1>
        </div>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  .parallelogramm {
    height: 100%;
    width: 50%;
    animation: moveAnimation 0.3s forwards;
  }
  /* @keyframes moveAnimation {
    0%{
        left:0;
    }
    50%{
        left:50;
    }
  } */
`;
