import React,{ useState } from 'react'
import {   Grid, Container } from '@mui/material';
import {makeStyles} from '@mui/styles'
import styled from 'styled-components';
import BannerBackground from '../../images/back-clear.png';
import {motion } from 'framer-motion';
import clsx from 'clsx';
import HandMg1 from '../../images/pepite-dor.png';
import HandMg2 from '../../images/product.png';
import HandMg9 from '../../images/manganese-1.png';
import Hand2 from '../../images/main-2.png';
import Hand3 from '../../images/main-3.png';


const HeroContainer = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow:inset 0 0 0 0 1000px rgba(0,0,0,0.2);
    object-fit:cover;
    background-image:url(${BannerBackground});
    background-size:100% 100% ;
    background-repeat:no-repeat ;
    
   // position:'absolute'
`;

const Title = styled(motion.h1)`
   font-size: 3rem;
   color:#707173 ;
   margin-left:50px;
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 750px;
 
  @media screen and (max-width: 768px){
       width: 70%;
       height: 70%;
  }
`;

export const ColumnLeft = styled(Grid)`

 ${Image}:nth-child(1) {
    bottom:20px;
    left:0px;
    height:450px ;
    width:600px;
  }

 @media screen and (max-width: 768px){
   h1 {
   margin-bottom: 0.5rem;
   font-size: 1rem;
   color:#006431;
   }
    p {
      margin: 2rem 0;
      font-size: 1rem;
      line-height: 1;
    }
     
   }


`;

export const ColumnRight = styled(Grid)`


  ${Image}:nth-child(1) {
    bottom: -50px;
    right:0px;
    height:450px ;
    width:500px;
  }
  ${Image}:nth-child(2) {
   bottom:160px;
   right:110px;
   height:400px ;
   width:480px;
  
 }
  ${Image}:nth-child(3) {
    bottom:130px;
    right:380px;
    height:100px ;
    width:150px;
  }
  ${Image}:nth-child(4) {
    bottom:250px;
    right:110px;
    height:100px ;
    width:150px;
  }
`;

const useStyles = makeStyles({
  
 banner:{
  
  backgroundColor: '#fff',

 },
 active:{
    backgroundColor: "#131313",
 },
 title:{
  
  color: '#006431',

 },
 activeTitle:{
    color: "#fff",
 }
});

function Banner() {

  const classes = useStyles();
  const [banner,setBanner] = useState(false);
  const [title,setTitle] = useState(false);
  

const changeBackground = () => {
    if(window.scrollY >= 80) {
      setBanner(true)
      setTitle(true)
   
    }else{
      setBanner(false)
      setTitle(false)
    }
}
window.addEventListener('scroll',changeBackground)

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
};

const fade= {
 
  visible: { opacity: 1, x: 0 }
};





  return (
    <HeroContainer  className={banner ? clsx(classes.banner,classes.active) : classes.banner} >
      
          <Container>
            <Grid container spacing={1}>
                <ColumnLeft container item spacing={2}  xs={12}>
                  <Grid item xs={12} style={{position:'absolute',bottom:300}} >
                    <Title
                          variants={fadeLeft}
                          initial='hidden'
                          animate='visible'
                          transition={{ duration: 2 }}
                          
                      >
                      Votre partenaire minier
                    </Title>
                  </Grid>
                  <Grid item xs={12}>
                    <Image 
                          src={Hand2} 
                          variants={fadeLeft}
                          initial='hidden'
                          animate='visible'
                          transition={{ duration: 1 }}
                      />
                       
                  </Grid>
                 
                   
                     
                </ColumnLeft>
                <ColumnRight item  xs={12}>
                    
                   
                    <Image 
                        src={Hand3} 
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        
                        transition={{
                          duration:3,
                          repeat:Infinity,
                          repeatType:'reverse'
                        }}
                        animate={{ rotate:2 }}
                    />
                      <Image 
                        src={HandMg9} 
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        transition={{
                          duration:2,
                          repeat:Infinity,
                          repeatType:'reverse',
                          type: "tween"
                        }}
                        animate={{ rotate:5 }}
                    />
                      <Image 
                        src={HandMg2} 
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        transition={{
                          duration:2,
                          repeat:Infinity,
                          repeatType:'reverse'
                        }}
                        animate={{ rotate:-15 }}
                    />
                     <Image 
                        src={HandMg1} 
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        transition={{
                          duration:2,
                          repeat:Infinity,
                          repeatType:'reverse'
                        }}
                        animate={{ rotate:-15 }}
                    />
                    
                   
                 </ColumnRight>
            </Grid>
          </Container>
    </HeroContainer>
  )
}

export default Banner