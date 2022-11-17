import * as React from 'react';
import styled from 'styled-components';
import {motion } from 'framer-motion';

const CircleContainer = styled(motion.div)`
   max-width:400px;
   width:90%;
   box-shadow:0 6px 20px #1c502e53;
   filter:drop-shadow 0 6px 20px #1c502e53;
   overflow:hidden;
   background-color: ${props => props.bgcolor};
   border-radius:10px;
   padding:5px;
   margin-top:10px;

    @media screen and (max-width: 414px){
        max-width:400px;
    }


   @media screen and (max-width: 768px){
        max-width:200px;
     
    }

    @media screen and (max-width: 1500px){
        max-width:${props =>props.width}px;
     
    }
`;
const CircleIcon = styled.div`
text-align: center;
`;
const CircleContent = styled.div`
   
`;

const Title = styled.h1`
 color:${props => props.color};
 font-size: 1.5rem;
 text-align: center;
`;

const Subtitle = styled.p`
    text-align: center;
    font-size:12px;
    color:${props => props.color};
`;

export default function Circle({icon,title,content,bgcolor,color,width,viewport,initial,whileInView,transition}) {


  return (
   
    <CircleContainer 
    width={width} 
    bgcolor={bgcolor}
    viewport={viewport}
    initial={initial}
    whileInView={whileInView}
    transition={transition}
    >
        <CircleIcon>
            {icon}
        </CircleIcon>
        <CircleContent>
          <Title color={color}>
              {title}
          </Title>
          <Subtitle  color={color}>
              {content}
          </Subtitle>
        </CircleContent>
    </CircleContainer>
  
  );
}
