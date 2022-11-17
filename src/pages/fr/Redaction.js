import React from 'react'
import {motion } from 'framer-motion';
import BannerBread from '../../components/banner/BannerBread';
import Section from '../../components/sections/Section';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button, ButtonGroup, Grid } from '@mui/material';
import ImgSEM from '../../images/webimag.png'
import Img2 from '../../images/conseil.jpg'
import Img3 from '../../images/slide-6.png'
import Img4 from '../../images/pepite-dor.png'
import Img5 from '../../images/slide-2.jpg'
import ArticleList from '../../components/list/ArticleList';
import ActualiteTools from '../../components/list/ActualiteTools';
import MDEditor from '@uiw/react-md-editor';
import { Facebook, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';


export const Image = styled(motion.img)`
  position: relative;
  width: 100%;
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

function Redaction() {

  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:100,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }

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
      image:Img2,
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
      image:Img3,
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
      image:Img4,
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
      image:Img5,
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

  return (
    <div>
      <BannerBread title="Rédaction" />
      <Section
        title="Actualités"
        bgcolor="#fff"  
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
                     <MDEditor.Markdown source={articles[0].content} style={{backgroundColor:'#fff',color:"#000",textAlign:"justify"}} />
                    
                </Box>
                <Box mt={2}>
                <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                     
                    >
                      <Button sx={{textTransform:"none",color:"#006431"}} variant="text" startIcon={<Facebook />} ></Button>
                      <Button sx={{textTransform:"none",color:"#006431"}} variant="text" startIcon={<Twitter />} ></Button>
                      <Button sx={{textTransform:"none",color:"#006431"}} variant="text" startIcon={<LinkedIn />} ></Button>
                      <Button sx={{textTransform:"none",color:"#006431"}} variant="text" startIcon={<WhatsApp />} ></Button>
                   </ButtonGroup>
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                 <Box>
                     <Title5>Actualités récentes</Title5>
                        <ArticleList
                            item={articles}
                        />
                 </Box>
              </Grid>
        </Grid>
      </Section>
    </div>
  )
}

export default Redaction 