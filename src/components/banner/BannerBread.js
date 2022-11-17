import React from 'react'
import styled from 'styled-components';
import BreadCrumb from '../navbar/BreadCrumb';

const Container = styled.div`
    display:flex;
    width:100%;
    height:200px;
    background-color:#006431;
    width:100%;
    display:flex;
    background: linear-gradient(90deg,#006431 0%, #032f18 100%);
    align-items:center; 
    justify-content:center;
    box-shadow:0 6px 20px #327b5975;
    overflow:hidden;

`;

const Content = styled.div`
  position:absolute;
  text-align:center;
  max-width:1000px;
`;

const Box = styled.div`
  position:relative;
  top:0;
  left:0;
  width:100%;
  height:100%; 
  display:flex;
  justify-content:center;
  align-items:center;
  transition: 0.5s;
  z-index:1;  
`;

const P = styled.p`
  font-size:1.1em;
  color:#fdfdfd;
`;

const H2 = styled.h2`
  font-size:2em;
  line-height:1em;
  color: #fff;

  @media screen and (max-width: 920px){
    font-size:2em;
   }
`;

function BannerBread({title}) {

    
  return (
    <Container>
            
                <Box>
                  <Content>
                    <H2>{title}</H2>
                      <P>
                        <BreadCrumb/>          
                      </P>
                    </Content>
                </Box>
            
    </Container>
  )
}

export default BannerBread