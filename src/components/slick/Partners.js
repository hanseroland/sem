import React, { Component } from "react";
import Slider from "react-slick";
import PartnerCard from "../cards/PartnerCard";


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

function Partners({items}) {

  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{padding:20}}>
      
      <Slider {...settings}>
          {
            items.map((item)=>(
              <div key={item._id}>
                  <PartnerCard
                    src={item.image}
                    alt="SOCIETE EQUATORIALE DES MINES - NOS PARTENAIRES"
                  />
              </div>
             
            ))
          }
      </Slider>
    </div>
  );
}

export default Partners