import React,{useEffect} from 'react';
import {motion,useAnimation } from 'framer-motion';
import Section from '../../components/sections/Section';
import Grid from '@mui/material/Grid';
import { Button, ButtonGroup } from '@mui/material';
import styled from 'styled-components';
import Img from '../../images/AJCS3282.png';
import Img2 from '../../images/AJCS3210.png';
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
import HeroSection from '../../components/banner/Herosection';
import { useInView } from "react-intersection-observer";
import Circle from '../../components/cards/Circle';
import * as GiIcon from 'react-icons/gi'   
import Partners from '../../components/slick/Partners';
import Homeslide from '../../components/slick/Homeslide';
import Slide1 from '../../images/slide-1.jpg';
import Slide2 from '../../images/slide-2.jpg';
import Slide3 from '../../images/slide-3.jpg';
import back from '../../images/V79A6136.jpg';
import Img22 from '../../images/conseil.jpg';
import Img33 from '../../images/slide-6.png';
import Img44 from '../../images/pepite-dor.png';
import Img55 from '../../images/slide-2.jpg';
import ImgSEM from '../../images/webimag.png';
import ArticleList from '../../components/list/ArticleList';
import ActualiteTools from '../../components/list/ActualiteTools';
import MDEditor from '@uiw/react-md-editor';




const Title3 = styled(motion.h3)`
   color:#FFF;
   font-size: 2rem;
   text-align:center;
`;


export const Image = styled(motion.img)`
  position: relative;
  width:100%;
  max-width: 800px;
  height: auto;
  border-radius:10px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  &:hover {
    box-shadow: 0px 20px 30px -7px rgba(0, 0, 0, 0.4);
   }
`;

const Title5 = styled(motion.h3)`
   color:#000 ;
   text-align:center ;
`;
const Title2 = styled(motion.h2)`
   color:#000 ;
   text-align:left ;
`;



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

const articles = [
  {
    _id:1,
    title:"SOCIETE EQUATORIAL DES MINES - MANGANESE",
    image:ImgSEM,
    alt:"SOCIETE EQUATORIAL DES MINES - MANGANESE",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."+
     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
     "when an unknown printer took a galley of type and scrambled it to make a type"+
     "specimen book. It has survived not only five centuries, but also the leap into"+
     "electronic typesetting, remaining essentially unchanged. It was popularised in"+ 
     "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"+
     "and more recently with desktop publishing software like Aldus PageMaker including"+ 
     "versions of Lorem Ipsum.",
    category:"actualite",
    date:"2022-11-10 13:19:05",
    auteur:"Lorem"
  },
  {
    _id:2,
    title:"La SEM tient son premier Conseil d’administration présidé par le Pr Michel Mboussou",
    image:Img22,
    alt:"SOCIETE EQUATORIAL DES MINES - MANGANESE",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."+
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
    "when an unknown printer took a galley of type and scrambled it to make a type"+
    "specimen book. It has survived not only five centuries, but also the leap into"+
    "electronic typesetting, remaining essentially unchanged. It was popularised in"+ 
    "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"+
    "and more recently with desktop publishing software like Aldus PageMaker including"+ 
    "versions of Lorem Ipsum.",
    category:"actualite",
    date:"2022-10-19 13:19:05",
    auteur:"Lorem"
  },
  {
    _id:3,
    title:"Accompagner la contribution de l’Industrie Minière à l’économie gabonaise.",
    image:Img33,
    alt:"SOCIETE EQUATORIAL DES MINES - MANGANESE",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."+
     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
     "when an unknown printer took a galley of type and scrambled it to make a type"+
     "specimen book. It has survived not only five centuries, but also the leap into"+
     "electronic typesetting, remaining essentially unchanged. It was popularised in"+ 
     "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"+
     "and more recently with desktop publishing software like Aldus PageMaker including"+ 
     "versions of Lorem Ipsum.",
    category:"actualite",
    date:"2022-05-19 12:19:05",
    auteur:"Lorem"
  },
  {
    _id:4,
    title:"Des pistes pour augmenter la production nationale d'or ?",
    image:Img44,
    alt:"SOCIETE EQUATORIAL DES MINES - MANGANESE",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."+
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
    "when an unknown printer took a galley of type and scrambled it to make a type"+
    "specimen book. It has survived not only five centuries, but also the leap into"+
    "electronic typesetting, remaining essentially unchanged. It was popularised in"+ 
    "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"+
    "and more recently with desktop publishing software like Aldus PageMaker including"+ 
    "versions of Lorem Ipsum.",
    category:"actualite",
    date:"2022-03-19 13:29:04",
    auteur:"Lorem"
  },
  {
    _id:5,
    title:"La Mine d'Or de MINKIE dans un nouveau décor",
    image:Img55,
    alt:"SOCIETE EQUATORIAL DES MINES - MANGANESE",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."+
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
    "when an unknown printer took a galley of type and scrambled it to make a type"+
    "specimen book. It has survived not only five centuries, but also the leap into"+
    "electronic typesetting, remaining essentially unchanged. It was popularised in"+ 
    "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"+
    "and more recently with desktop publishing software like Aldus PageMaker including"+ 
    "versions of Lorem Ipsum.",
    category:"actualite",
    date:"2022-02-01 13:19:05",
    auteur:"Lorem"
  }
]

function Accueil() {

  const control = useAnimation();
  const [ref, inView] = useInView();
 

  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:0,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }

  const slides = [
    {url:Slide1,title:"Votre partenaire minier"},
    {url:Slide2,title:"Votre partenaire minier"},
    {url:Slide3,title:"Votre partenaire minier"}
 ];


  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }

  }, [control, inView]);

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);


  return (
    <div
     
     >
       {/*<Slide/>*/}
      {/*<Banner/>*/}
      <Homeslide  items={slides}/>
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
        <Grid container spacing={2}>
              <Grid item lg={8} xs={12}>
                <Box>
                    <Image 
                      src={ImgSEM} 
                      alt="SOCIETE EQUATORIAL DES MINES - MANGANESE"
                      viewport={{once:false}}
                      initial={{opacity:0,x:-100}}
                      whileInView={{opacity:1,x:0}}
                      transition={{type:"easeIn", duration: 1 }}
                    />
                </Box>
                <Box mt={2}>
                    <ActualiteTools item={articles[0]} />
                </Box>
                <Box mt={2}>
                     <Title2>{articles[0].title}</Title2>
                     <MDEditor.Markdown source={articles[0].content} style={{backgroundColor:'#f7f7f7b8',color:"#000",textAlign:"justify"}} />
                    
                </Box>
                <Box mt={2} sx={{display:'flex',justifyContent:"space-between"}} >
                <Button sx={{color:'#006431',textTransform:'none'}} size="small">Lire plus</Button>
               
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                 <Box>
                     <Title5>Récents</Title5>
                        <ArticleList
                            item={articles}
                            viewport={{once:false}}
                            initial={{opacity:0,x:100}}
                            whileInView={{opacity:1,x:0}}
                            transition={{type:"easeIn", duration: 1,delay:0.15 }}
                        />
                 </Box>
              </Grid>
        </Grid>
      </Section>
     {/* <Section
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
                    overflowX: 'hidden', 
                    overflowY: "scroll", 
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
      </Section>*/}

      <HeroSection
       ref={ref}
       contol={control}
      />
     <div>
      <Parallax
                bgImage={back}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            //background: `rgba(255, 255, 0, ${percentage * 1})`,
                            background:"#0064304e",
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