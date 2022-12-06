import React, { useEffect } from 'react'
import BannerBread from '../../components/banner/BannerBread';
import Section from '../../components/sections/Section';
import { Box, Container, Grid } from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';
import {motion,useAnimation } from 'framer-motion';
import Image1 from '../../images/Eramet-Produits-Manganese-Minerai-Visuel-Rocheux_0.jpg';



const Title3 = styled(motion.h3)`
   color:#FFF;
   font-size: 2rem;
   text-align:center;
`;


function Aprops() {

  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:100,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  const about = [
    {
      _id:1,
      title:"Origine",
      content:"Créée par le décret présidentiel n°1018/PR/MMPH du 24 août 2011, la Société Equatoriale des Mines"+ 
      "a pour mission, au nom et pour le compte de l'Etat, de détenir et de gérer ses participations dans des"+ 
      "sociétés minières, ainsi que d'entreprendre en République gabonaise ou à l'étranger, seule ou en association,"+ 
      "toute activité liée au secteur minier. La SEM est placée sous la tutelle administrative de la Présidence de"+ 
      "la République, et sous la tutelle technique du Ministère des Mines."
    }
  ]

  const historique = [
    {
      _id:1,
      title:"2011 - 2013",
      content:
      "- La Société minière du Gabon est constituée par l'enregistrement de ses statuts conformément à la"+
       "loi sur les sociétés commerciales du Gabon sous le nom de Société équatoriale des mines.\n\n"+
  
      "- La Société minière du Gabon lance la production commerciale.\n"+
      "La société, par le biais de sa participation de 39 % dans North Atlantic Natural Resources,"+
       "découvre le gisement de Storliden dans le nord de la Suède.\n\n"+
  
      "- En 2013 dans le cadre du développement du secteur aurifère, la SEM a créé sa première "+
      "filiale à 100% nommée le Comptoir Gabonais de Collecte de l'Or (CGCO) qui aura pour objectif "+
      "principal la réorganisation de l'Exploitation artisanale à petite échelle (ASGM);\n\n"+
  
      "- Le CGCO collecte 47 kilogrammes d'or fin 2013 et commence sa commercialisation au niveau national"+
      "(il signe un partenariat avec la Caisse des Dépôts et Consignations pour commercialiser localement"+ 
      "une partie de sa production.)\n\n",
    },
    {
      _id:2,
      title:"2014 - 2017",
      content:
      "- Le FGIS conclut un accord de joint-venture pour développer la collecte et le traitement "+
      "de l'or par la création d'une fonderie.\n\n"+
  
      "- Consolidation des activités liées à l'or artisanal.\n\n"+
  
      "- Signature de partenariats stratégiques avec la CDC.\n\n"+
  
      "- L'or est déclaré substance stratégique par le Président de "+
      "la République et la SEM oriente donc ses investissements dans l'or.\n\n"+
  
      "- La SEM signe avec une raffinerie au Portugal (Albinô montinô refundry)"+ 
      "qui a acheté une partie de notre production."
    },
    {
      _id:3,
      title:"2018 - 2021",
      content:
      "- 4 permis d'or dont 3 en exploitation et 1 en exploration.\n\n"+
  
      "- Acquisition de la mine de cuivre-or Chapada, à longue durée de vie et extensible, au Brésil\n\n"+
  
      "- Extraction du premier minerai d'Eagle East en avance sur le calendrier et en dessous du budget\n\n"+
  
      "- Réinvestissement du parc de la mine Candelaria terminé et livraison du premier minerai de la mine" +
      "souterraine de South Sector.\n\n"+
  
      "- Utilisation de nos permis.\n\n"+
  
      "- Renforcement de la participation de l'Etat dans la société minière.\n\n"+
  
      "- Diversification du portefeuille de permis de la SEM à Barythine et dans le secteur des carrières.\n\n"+
  
      "- La SEM signe de nouveaux partenariats."
    }
  ]

  return (
    
    <>
      <BannerBread title="À propos" />
      <Section
        title=""
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}
      >
        <Grid container spacing={2}>
              <Box p={2}>
                  
                  <MDEditor.Markdown source={about[0].content} 
                      style={{backgroundColor:'#fff',color:"#000",textAlign:"justify"}} 
                  />
              </Box>
        </Grid>

      </Section>
      <div>
      <Parallax
                bgImage={Image1}
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
                           Historique
                    </Title3>
                    
                </Box>
                  <Grid container  spacing={2} sx={{paddingBottom:10}} >
                    {
                        historique.map((item) => (
                          <Grid item lg={4} sm={6} md={6} xs={12} key={item._id} >
                            <motion.div
                              viewport={{once:false}}
                              initial={{opacity:0,y:100}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration: 1 }}
                              style={{
                                borderRadius:10,
                                backgroundColor:"#ffffffa8",
                                paddingRight:5,
                                transition: "0.3s",
                                boxShadow:" 0px 10px 10px -5px rgba(0, 0, 0, 0.3)",
                               
                              }}
                            >
                              <h3 style={{textAlign:"center",color:"#006431"}} >{item.title}</h3>
                              <MDEditor.Markdown source={item.content} 
                                    style={{
                                     backgroundColor:'transparent',
                                     color:"#000",
                                     textAlign:"justify",
                                     paddingRight:10,
                                    
                                    }} 
                                />
                            </motion.div>
                          
                        </Grid>
                        ))
                      }
                  </Grid>
                </Container>
      </Parallax>
      </div>
    </>
  )
}

export default Aprops