import React,{ useState} from 'react'
import { Grid } from '@mui/material';
import {makeStyles} from '@mui/styles'
import styled from 'styled-components';
import {motion } from 'framer-motion';
import Main2 from '../../images/main-2.png'
import Main3 from '../../images/main-3.png'
import * as GiIcon from 'react-icons/gi'   
import * as FaIcon from 'react-icons/fa'  
import Circle from '../cards/Circle';
import BannerBackground from '../../images/back-clear.png';


  

 
const HeroContainer = styled.div`
   
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow:inset 0 0 0 0 1000px rgba(0,0,0,0.2);
    padding-bottom:20px;
    object-fit:cover;
    background-image:url(${BannerBackground});
    background-size:100% 100% ;
    background-repeat:no-repeat ;
    background-color:#f7f7f7b8;

   

`;




const Title3 = styled(motion.h3)`
   color:#006431 ;
   font-size: 2rem;
   text-align:center ;
  
`;

export const Image = styled(motion.img)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 750px;
 

  @media screen and (max-width: 768px){
       width: 70%;
       height: 70%;
      
    }
`;

export const SectionColumnLeft = styled(Grid)`
 
 ${Image}:nth-child(1) {
    bottom:20px;
    left:0px;
    height:550px ;
    width:700px;
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


export const SectionColumnRight = styled(Grid)`



   
  ${Image}:nth-child(1) {
    bottom:20px;
    right:0px;
    height:550px ;
    width:700px;
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
       color:"white"
     }
      
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
})

function HeroSection() {

 
  return (
    <HeroContainer >
      
         
            <Grid container spacing={1}>
               <Grid item xs={12}>
                <Title3 
                      viewport={{once:false}}
                      initial={{opacity:0,y:100}}
                      whileInView={{opacity:1,y:0}}
                      transition={{type:"easeIn", duration: 1,delay:0.15 }}
                    >
                    Nos chiffres
                </Title3>
               </Grid>
              
                <SectionColumnLeft container item lg={6} xs={12}>
                  <Grid item xs={12} style={{
                    position:'absolute',
                    marginTop:50,
                    left:'20%',
                    }} 
                  >
                  <motion.div
                       animate={{
                         //x: [0,10, 10, 0, 0],
                         y: [10, 0, 10, 20, 10],
                        //rotate:-10,
                        }}
                       // transition={{ duration: 4, ease: "linear" }}
                        transition={{
                          duration:2,
                          repeat:Infinity,
                          //repeatType:'reverse',
                          ease:"linear"
                          
                        }}
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        >
                    <Circle
                        icon={<GiIcon.GiTakeMyMoney color="#fff" size={60} />}
                        title="4% du PIB"
                        content="Le pays est le deuxième producteur mondial de minerai de manganèse de haute qualité."
                        color="#fff"
                        bgcolor="#006431"
                        width={350}
                    />
                    </motion.div>
                   
                    
                  </Grid>
                  <Grid item xs={12} style={{
                     position:'relative',
                     top:140,
                    
                    }}  
                  >
                    
                       <Image 
                          src={Main2} 
                          
                          //variants={fadeInLeft}
                          viewport={{once:false}}
                          initial={{opacity:0,y:-100}}
                          whileInView={{opacity:1,y:0}}
                          transition={{type:"easeIn", duration: 1,delay:0.15 }}
                      />
                       
                  </Grid>
                </SectionColumnLeft>

                <SectionColumnRight container item  lg={6} xs={12}>
                    <Grid item xs={12}
                      style={{
                        position:'absolute',
                        marginTop:50,
                        right:'20%',
                        }} 
                    >
                      <motion.div
                        animate={{
                          //x: [0,10, 10, 0, 0],
                          y: [10, 0, 10, 20, 10],
                         //rotate:-10,
                         }}
                        // transition={{ duration: 4, ease: "linear" }}
                         transition={{
                           duration:2,
                           repeat:Infinity,
                           //repeatType:'reverse',
                           ease:"linear"
                           
                         }}
                         whileTap={{ scale: 0.6 }}
                         drag={true}
                         dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                      >
                          <Circle
                            icon={<FaIcon.FaMapMarkedAlt color="#707173" size={70} />}
                            title="22% du périmètre"
                            content="La zone minière occupée représente 60 000 km2, soit 22% du territoire national."
                            color="#707173"
                            bgcolor="#fff"
                            width={350}
                        />
                      </motion.div>
                       
      
                    </Grid>
                       <Grid item xs={12} style={{
                          position:'relative',
                          top:140,
                          display:'flex',
                          justifyContent:'flex-end'
                          }}  
                        >
                      {/* <Image 
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
                          />*/}
                        <Image 
                                src={Main3} 
                                viewport={{once:false}}
                                initial={{opacity:0,y:-100}}
                                whileInView={{opacity:1,y:0}}
                                transition={{type:"easeIn", duration: 1 }}
                            />
                         
                       
                      </Grid>
                 </SectionColumnRight>
            </Grid>
         
    </HeroContainer>
  )
}

export default HeroSection