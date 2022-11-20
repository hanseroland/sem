import React from 'react'
import Section from '../../components/sections/Section';
import Img1 from '../../images/MG_5295.jpg'
import Img2 from '../../images/fabrice2.jpg'
import Img3 from '../../images/AJCS3006.png'
import Img4 from '../../images/tanguy.jpg'
import Img5 from '../../images/MG_5308.jpg'
import Img6 from '../../images/AJCS2865.jpg'
import Img7 from '../../images/AJCS2937.jpg'
import BannerBread from '../../components/banner/BannerBread';
import { Divider, Grid, Typography } from '@mui/material';
import TeamCard from '../../components/cards/TeamCard';
import styled from 'styled-components';
import {motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useEffect } from 'react';

export const Image = styled.img`
  position: relative;
  width:100%;
  height:100%;
  margin: 0 0 -4px 0;
  padding-right:0;
 
  @media screen and (max-width: 768px){
    width:100%;
    height:100%;  
    }
`;

const Title3 = styled(motion.h3)`
   color:${props => props.titleColor} ;
   font-size: 1.5rem; 
   text-align:center;
`;


const Box = styled(motion.div)`
    padding:2px;
    margin-left:15px ;
`;

export const ImgWrap = styled(motion.div)`
    max-width: 555px;
    height:auto;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    border: 7px solid white;
    border-radius: 5px;
    margin-top:50px;

    &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
   }

   @media screen and (max-width: 380px){
       max-width: 300px;
    }
`;

const Team = [
  {
    _id:1,
    name:"Wesbert MOUSSOUNDA",
    title:"Mot du Directeur Général",
    content:"M. Wesbert Moussounda Ngoumba a intégré la Faculté de Droit et d'Economie de l'Université"+
    "Omar Bongo en 2003 avant de rejoindre l'Institut Universitaire de Gestion de Bamako en 2004 où il"+
    "a obtenu le diplôme universitaire de Technologie option Finance Comptabilité. Il est également"+ 
    "titulaire d'une licence en sciences et technologies comptables et financières (LSTCF) obtenue en 2007 "+
    "et suivie d'un master en sciences et technologies comptables et financières option finance.\n\n"+

    "En 2008, il débute sa carrière professionnelle dans l'industrie minière au bureau de Bamako (Mali)"+
    "de la société canadienne Avion Gold Corporation dans le département des finances. En 2010, il rejoint"+
    "un autre groupe canadien opérant au Mali : IAMGold Corporation. Il sera d'abord chef de projet sur "+
    "les activités d'exploration avant de devenir adjoint du directeur financier, en charge du contrôle "+
    "de gestion. Il réalisera des missions d'audit au sein du groupe, au Sénégal et au Canada\n\n."+

    "En 2012, Wesbert MOUSSOUNDA est nommé responsable de la paie pour les entités du groupe au Mali"+ 
    "et au Sénégal. Puis, en janvier 2013, il rejoint le Comptoir Gabonais de Collecte de l'Or, filiale"+
     "détenue à 100% par SEM, en tant que directeur des opérations.",
    img:Img7
  },
  {
    _id:2,
    name:"Richard Alain ABESSOLO",
    title:"Directeur Général Adjoint",
    content:"",
    img:Img6
  },
  {
    _id:3,
    name:"Mike BONGO NGO LEKEI",
    title:"Directeur Financier et Comptable",
    content:"",
    img:Img5
  },
  {
    _id:4,
    name:"Tanguy BAHISSY",
    title:"Directeur de la Géologie et de l'Exploitation",
    content:"",
    img:Img4
  },
  {
    _id:5,
    name:"Claude Marie ANDTOUNGOU",
    title:"Directrice des Affaires Juridique, Economique et Fiscale",
    content:"",
    img:Img3
  },
  {
    _id:6,
    name:"Fabrice NZIENGUI",
    title:"Directrice des Opérations",
    content:"",
    img:Img2
  },
  {
    _id:7,
    name:"FDAvy Franck NZAMBA",
    title:"Directeur Administratif",
    content:"",
    img:Img1
  }
]

function Equipe() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <>
     <BannerBread title="Équipe dirigeante"/>
     <Section
        title="Équipe"
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"easeIn", duration: 1 }}
    >
        <Grid container spacing={4}>
           <Grid item xs={6}>
               <ImgWrap
                   viewport={{once:false}}
                   initial={{opacity:0,x:-100}}
                   whileInView={{opacity:1,x:0}}
                   transition={{type:"easeIn", duration: 1 }}             
                >
                  <Image src={Team[0].img}  alt="SOCIÉTÉ ÉQUATORIALE DES MINES - DIRECTEUR" />
                </ImgWrap>
           </Grid>
           <Grid item xs={6}>
              <Box
                  viewport={{once:false}}
                  initial={{opacity:0,x:100}}
                  whileInView={{opacity:1,x:0}}
                  transition={{type:"easeIn", duration: 1 }}      
              >
                <Title3 titleColor="#006431" > <i>{Team[0].title}</i> </Title3>
                <Typography align="center" variant="inherit" >{Team[0].name}</Typography>
                <Divider/>
                <div style={{display:'flex',justifyContent:'center'}} >
                    <FormatQuoteIcon sx={{color:"#006431",fontSize:50,textAlign:"center"}}  />
                </div>
               

                <MDEditor.Markdown source={Team[0].content} 
                            style={{
                            backgroundColor:'#f7f7f7b8',
                            color:"#000",textAlign:"justify"
                          }} 
                 />

              </Box>
           </Grid>
            
        </Grid>
   </Section>
     <Section
        title=""
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"easeIn", duration: 1 }}
    >
        <Grid container spacing={4}>
          
             
                {
                  Team.slice(1).map((item,index)=>(
                    <Grid key={item._id}  item lg={4} xs={6} >
                       <TeamCard
                        img={item.img}
                        title={item.title}
                        name={item.name}
                        content={item.content?.substring(0,20)}
                    />
                    </Grid>
                  ))
                }
                   
        </Grid>
   </Section>
    </>
  
  )
} 

export default Equipe