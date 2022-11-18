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
        height: 550px;
        object-fit: cover;
        object-position: center;
`;

const Slide = styled.div`
    width:100%;
    height:720px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0 6px 20px #327b5975;
    overflow:hidden;


 @media screen and (max-width: 920px){
    height:auto;
   }
`;

function Homeslide({items}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
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
             
                  <Image
                    key={item._id}
                    src={item.url}
                    alt="SOCIETE EQUATORIALE DES MINES"
                  />
             
            ))
          }
         
         
      </Slider>
    
  );
}

export default Homeslide