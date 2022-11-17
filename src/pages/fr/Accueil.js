import React,{useEffect} from 'react';
import {motion,useAnimation } from 'framer-motion';
import Section from '../../components/sections/Section';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Img from '../../images/AJCS3282.png';
import Img2 from '../../images/AJCS3210.png';
import Img3 from '../../images/pexels-aleksandar-pasaric-1238864.jpg';
import Img4 from '../../images/index.png';
import { Parallax } from 'react-parallax';
import MediaCard from '../../components/cards/MediaCard';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';
import Image1 from '../../images/unnamed_3.png'
import Image2 from '../../images/unnamed_4.png'
import Image3 from '../../images/image_2.png'
import Image4 from '../../images/unnamed_1.png'
import Image5 from '../../images/image_1.png'
import Image6 from '../../images/unnamed_5.png'
import Image7 from '../../images/image.png'
import Image8 from '../../images/unnamed_6.png'
import Image9 from '../../images/unnamed.png'
import Image10 from '../../images/image_3.png'
import CardImage from '../../components/cards/CardImage';
import PartnerCard from '../../components/cards/PartnerCard';
import HeroSection from '../../components/banner/Herosection';
import { useInView } from "react-intersection-observer";
import Circle from '../../components/cards/Circle';
import * as GiIcon from 'react-icons/gi'   
import Slide from '../../components/banner/Slide';
import Partners from '../../components/slick/Partners';




const Title3 = styled(motion.h3)`
   color:#FFF ;
   font-size: 2rem;
   text-align:center ;
  
`;

export const data = [
  {
    _id:1,
    icon:<TrendingUpIcon sx={{
      width:50,
      height:50,
      
    }} />,
    title:"Optimiser",
    image:Img4,
    details:"Optimiser les revenus miniers",
    position:false

  },
  {
    _id:2,
    icon:<HandshakeIcon  sx={{
      width:50,
      height:50,
      
    }}/>,
    title:"Promouvoir",
    image:Img,
    details:"Promouvoir un tissu industriel national dans les secteurs minier.",
    position:true

  },
  {
    _id:3,
    icon:<BuildIcon sx={{
      width:50,
      height:50,
      
    }}/>,
    title:"Renforcer",
    image:Img2,
    details:"Renforcer les capacités nationales dans les secteurs minier.",
    position:false

  }
];

export const images = [
  {
    _id:1,
    image:Image1,
    color:"#31302e"
  },

  {
    _id:2,
    image:Image2,
    color:"#000000"
  },
  {
    _id:3,
    image:Image3,
    color:"#f5b517"
  },
  {
    _id:4,
    image:Image4,
    color:"#fdf23e"
  },
  {
    _id:5,
    image:Image5,
    color:"#002746"
  },
  {
    _id:6,
    image:Image6,
    color:"#010101"
  },
  {
    _id:7,
    image:Image7,
    color:"#fff"
  },
  {
    _id:8,
    image:Image8,
    color:"#152e82"
  },
  {
    _id:9,
    image:Image9,
    color:"#152e82"
  },
  {
    _id:10,
    image:Image10,
    color:"#d10000"
  }

];

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

function Accueil() {

  const control = useAnimation();
  const [ref, inView] = useInView();
 

  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:0,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }


  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }

  }, [control, inView]);


  return (
    <div
     
     >
       <Slide/>
      {/*<Banner/>*/}
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        
      </motion.div>
      <Section
        title="Actualités"
        bgcolor="#f7f7f7b8"
        titleColor="#006431"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}

      >
          <Grid container spacing={1}>
             <Grid item lg={4} xs={6} >
              <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
              >
                <MediaCard
                    img={Img}
                    alt="SOCIECTE EQUATORIAL MINIERE DU GABON"
                    title="SOCIECTE EQUATORIAL MINIERE DU GABON"
                    content="Découverte d'un nouveau gisement de manganèse Découverte d'un nouveau gisement de manganèse Découverte d'un nouveau gisement de manganèse"
                  />
              </motion.div>
             </Grid>
             <Grid item lg={4} xs={6} >
               <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
               >
                  <MediaCard
                    img={Img2}
                    alt="SOCIECTE EQUATORIAL MINIERE DU GABON"
                    title="PRÉSENTATION DU PLAN D'ACTION SUR LES MINES"
                    content="Découverte d'un nouveau gisement de manganèse Découverte d'un nouveau gisement de manganèse Découverte d'un nouveau gisement de manganèse"
                  />
              </motion.div>
             </Grid>
             <Grid item lg={4} xs={12} >
                <Box
                  style={{
                    overflowX: 'hidden', /* Hide horizontal scrollbar */
                    overflowY: "scroll", /* Add vertical scrollbar */
                    maxHeight:560,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:10
                  }}
                >
                  <Circle 
                       viewport={{once:false}}
                       initial={{opacity:0,x:100}}
                       whileInView={{opacity:1,x:0}}
                       transition={{type:"easeIn", duration: 1,delay:0.15 }}

                      icon={<GiIcon.GiTakeMyMoney color="#fff" size={60} />}
                      title="4% du PIB"
                      content="Le pays est le deuxième producteur mondial de minerai de manganèse de haute qualité."
                      color="#fff"
                      bgcolor="#006431"
                      width={350}
                   /> 
                    <Circle
                      viewport={{once:false}}
                      initial={{opacity:0,x:100}}
                      whileInView={{opacity:1,x:0}}
                      transition={{type:"easeIn", duration: 1,delay:0.15 }}
                    
                      icon={<GiIcon.GiTakeMyMoney color="#006431" size={60} />}
                      title="4% du PIB"
                      content="Le pays est le deuxième producteur mondial de minerai de manganèse de haute qualité."
                      color="#006431"
                      bgcolor="#fff"
                      width={350}
                   /> 
                  <Circle
                   viewport={{once:false}}
                   initial={{opacity:0,x:100}}
                   whileInView={{opacity:1,x:0}}
                   transition={{type:"easeIn", duration: 1,delay:0.15 }}
                      icon={<GiIcon.GiTakeMyMoney color="#fff" size={60} />}
                      title="4% du PIB"
                      content="Le pays est le deuxième producteur mondial de minerai de manganèse de haute qualité."
                      color="#fff"
                      bgcolor="#006431"
                      width={350}
                   /> 
                </Box>
             </Grid>
          </Grid>
      </Section>
      <HeroSection
       ref={ref}
       contol={control}
      />
     <div>
      <Parallax
                bgImage={Img3}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            //background: `rgba(255, 255, 0, ${percentage * 1})`,
                            background:"#0064308e",
                            width: '100%',
                            height: "100%",
                            //left: '25%',
                            //top: '25%',
                           // width: percentage * 700,
                           // height: percentage * 700,
                        }}
                    />
                )}
            >
                <Container>
                <Box p={4} >
                    <Title3 
                      viewport={{once:false}}
                      initial={{opacity:0,y:100}}
                      whileInView={{opacity:1,y:0}}
                      transition={{type:"easeIn", duration: 1,delay:0.15 }}
                    >
                           Nos Axes Stratégiques
                    </Title3>
                    
                </Box>
                  <Grid container  spacing={0} sx={{paddingBottom:10}} >
                    {
                      data.map((item) => (
                        <Grid item lg={4} xs={12} key={item._id} >
                          <motion.div
                            viewport={{once:false}}
                            initial={{opacity:0,y:100}}
                            whileInView={{opacity:1,y:0}}
                            transition={{type:"easeIn", duration: 1 }}
                          >
                            <CardImage
                              src={item.image}
                              title={item.title}
                              details={item.details}
                              icon={item.icon}
                            />
                          </motion.div>
                         
                       </Grid>
                      ))
                    }
                  </Grid>
                </Container>
      </Parallax>
      </div>
      <Section
        title="Nos Partenaires"
        bgcolor="#fff"
        titleColor="#006431"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}

      >
         
               <Partners  items={images} />
          
      </Section>
     
    </div>
  )
}

export default Accueil 