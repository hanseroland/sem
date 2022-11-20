import * as React from 'react';
import styled from 'styled-components';
import {motion } from 'framer-motion';

const CircleContainer = styled(motion.div)`
   max-width:250px;
   width:210px;
   height:210px;
   box-shadow:0 6px 20px #1c502e53;
   filter:drop-shadow 0 6px 20px #1c502e53;
   overflow:hidden;
   background-color: ${props => props.bgcolor};
   border-radius:100px;
   padding:5px;
   margin-top:10px;
   transition:transform ease 500ms ;

   &:hover{
    transform: translate(0,-20px);
   }

    @media screen and (max-width: 414px){
       
        width:150px;
        height:150px;
    }


   @media screen and (max-width: 768px){
        width:200px;
        height:200px;
     
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
 font-size: 1rem;
 text-align: center;

`;

const Subtitle = styled.p`
    text-align: center;
    font-size:12px;
    color:${props => props.color};

    @media screen and (max-width: 414px){
        display:none ;
     
    }
    @media screen and (max-width: 768px){
        font-size:10px;
     
    }
`;

export default function ValueCard({icon,title,content,bgcolor,color,width,viewport,initial,whileInView,transition}) {


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
