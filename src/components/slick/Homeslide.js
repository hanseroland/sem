import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,borderRadius:10, display: "block", background: "#006431" }}
      onClick={onClick}
    />
  );
} 

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,borderRadius:10, display: "block", background: "#006431" }}
      onClick={onClick}
    />
  );
}

const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
`;

const Slide = styled.div`
    width:100%;
    height:500px;
    display:flex;
    align-items:center;
    justify-content:center;
    //box-shadow:0 6px 20px #327b5975;
    overflow:hidden;
    


 @media screen and (max-width: 920px){
    height:auto;
   }
`;

const ImgBox = styled.div`
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


const H2 = styled.h2`
  font-size:6em;
  line-height:1em;
  color: #fff;

  @media screen and (max-width: 920px){
    font-size:2em;
   }
`;

const P = styled.p`
  font-size:1.1em;
  color:#fff;
`;
 
const Content = styled.div`
  position:absolute;
  text-align:center;
  max-width:1000px;
`;

function Homeslide({items}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    
    
         <Slider {...settings}>
          
             {
                items.map((item)=>(
                  <Slide>
                  <ImgBox>
                     <Image
                        key={item._id}
                        src={item.url}
                        alt="SOCIETE EQUATORIALE DES MINES"
                      />
                      <Content>
                          <H2></H2>
                          <P></P>
                      </Content>
                  </ImgBox>   
                  </Slide>
                      
                ))
              }
            
        </Slider>
     
  );
}

export default Homeslide