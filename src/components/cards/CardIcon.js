import * as React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
   width:95%;
   max-width:760px ;
   box-shadow:0 6px 20px #1c502e53;
   filter:drop-shadow 0 6px 20px #1c502e53;
   overflow:hidden;
   background-color: ${props => props.bgcolor};
   border-radius:10px;
   padding:5px;
   transition:transform ease 500ms ;

    &:hover{
    transform: translate(0,-10px);
    }

   @media screen and (max-width: 375px){
       width:100%;
     
    }

    @media screen and (max-width: 414px){
        max-width:400px;
    }


   @media screen and (max-width: 768px){
        max-width:100%;
     
    }

   
`;
const CircleIcon = styled.div`
   text-align: center;

`;
const CircleContent = styled.div`
   
`;

const Title = styled.h1`
    color:${props => props.titleColor};
    font-size: 1.1rem;
    text-align: center;

    @media screen and (max-width: 375px){
       font-size:15px;
     
    }
`;

const Subtitle = styled.p`
    text-align: justify;
    font-size:14px;
    color:${props => props.contentColor};
   // color:#000;


    @media screen and (max-width: 375px){
       font-size:12px;
     
    }
    
`;

export default function CardIcon({icon,title,content,bgcolor,titleColor,contentColor}) {


  return (
   
    <CircleContainer bgcolor={bgcolor}>
        <CircleIcon>
            {icon}
        </CircleIcon>
        <CircleContent>
          <Title titleColor={titleColor}>
              {title}
          </Title>
          <Subtitle  contentColor={contentColor}>
              {content}
          </Subtitle>
        </CircleContent>
    </CircleContainer>
  
  );
}
