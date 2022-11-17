import React,{ useState } from 'react';
import Img1 from '../../images/slide-1.jpg' 
import Img2 from '../../images/slide-2.jpg'
import Img3 from '../../images/slide-3.jpg'
import Img4 from '../../images/slide-4.jpg'
import Img5 from '../../images/slide-5.jpg'
import Img6 from '../../images/slide-6.png'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {makeStyles} from '@mui/styles'
import clsx from 'clsx';



const Slider = styled.div`
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

const LeftArrow = styled.div`
   position:absolute;
   top:50%;
   transform: translate(0,-50%);
   left:32px;
   z-index:1;
   cursor:pointer;
    
`;

const RightArrow = styled.div`
    position:absolute;
    top:50%;
    transform: translate(0,-50%);
    right:32px;
    z-index:1;
    cursor:pointer;
 
`;

const Image = styled.img`
   width:100%;
   height:100%;
   object-fit:cover;
`;

const H2 = styled.h2`
  font-size:6em;
  line-height:1em;
  color: #fff;

  @media screen and (max-width: 920px){
    font-size:2em;
   }
`;

const Content = styled.div`
  position:absolute;
  text-align:center;
  max-width:1000px;
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

const P = styled.p`
  font-size:1.1em;
  color:#fff;
`;

const useStyles = makeStyles({
  
  slide:{
      opacity:0,
      transitionDuration: '1s ease',
  },
  active:{
     opacity:1,
     transitionDuration:'1s',
     transform:'scale(1.08)',
  },
  
 })

function Slide() {
  const classes = useStyles();
 const slides = [
    {url:Img1,title:"Votre partenaire minier"},
    {url:Img2,title:"Votre partenaire minier"},
    {url:Img3,title:"Votre partenaire minier"}
 ];

  const [currentIndex,setCurrenIndex] = useState(0);
  const length = slides.length;

  const goToPrev = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrenIndex(newIndex);
  }
  
  const goToNext = () =>{
    setCurrenIndex(currentIndex === length -1 ? 0 : currentIndex + 1);
  }

  console.log(currentIndex)

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }
  

 

  return (
    
             <Slider>
             <LeftArrow onClick={goToPrev} ><ArrowBackIosIcon  sx={{color:"#ffffff",fontSize:32}} /></LeftArrow>
             <RightArrow onClick={goToNext}><ArrowForwardIosIcon  sx={{color:"#ffffff",fontSize:32}} /></RightArrow>

                        {
                            slides.map((item,index)=>(
                              
                              <div key={index} className={index === currentIndex ? clsx(classes.slide,classes.active) : classes.slide } >
                                {index === currentIndex && (
                                   <ImgBox>
                                      <Image src={item.url} />
                                      <Content>
                                        <H2>Slide One</H2>
                                        <P>Lorem ipsum</P>
                                      </Content>
                                   </ImgBox>
  
                                )}
                                
                              </div>
                               
                            ))
                        }
            </Slider>
 
  )
}

export default Slide