import React, { useEffect } from 'react'
import BannerBread from '../../components/banner/BannerBread'
import Section from '../../components/sections/Section'
import styled from 'styled-components';
import {motion } from 'framer-motion';
import Img2 from '../../images/localisation_de_Miamizez_S3.jpg'
import Img4 from '../../images/LOCALISATION_Miamizez_A2.jpg'
import ProjectTabs from '../../components/tabs/ProjectTabs';
import { Grid} from '@mui/material'

const Miamez = [
    {
      _id:1,
      title:"LOCALISATION",
      content:"Le permis d’exploitation de Miamizez est situé à 110 km au nord-est de la ville de Makokou,"+ 
      "dans le district de Mvadhy, province de l’Ogooué Ivindo. Au pied des gisements de fer des Monts Belinga. ",
      image:Img2,
      image2:Img4,
      alt:"SOCIETE EQUATORIAL DES MINES DU GABON - LOCALISATION PROJET MIAMEZ"
    },
    {
        _id:2,
        title:"CONTEXTE GEOLOGIQUE ET MINERALISATION",
        content:"Le permis Miamizez est situé dans un contexte de roches vertes appartenant au supergroupe de Belinga "+ 
        "et présente de la minéralisation aurifère. Au nord du permis des indices de minéralisation Cu-Mo ont été interceptés dans des sondages carottés.\n\n"+
        "Des intrusions monzogranitiques signalées sur la carte géologique régionale, ont joué un rôle prépondérant dans la mise "+
        "en place des minéralisations en Or observées dans le district minéral du Haut-Ivindo. ",
        image:"",
        alt:""
    },
    {
        _id:3,
        title:"MINERALISATION ET RESSOURCES",
        content:"On note à l’intérieur du permis l’existence de placers alluvionnaires aurifères qui sont exploités par les orpailleurs depuis les années 50.\n\n"+ 
        "Les ressources envisagées d’or alluvionnaire sont environ de 150 kg et nécessitent d’être précisées pour le passage en réserves par des travaux de fonçage de puits.\n\n"+
        "Le potentiel pour l’or primaire existe et a besoin d’être évalué par des travaux d’échantillonnage géochimique, un lever géophysique au sol et une cartographie géologique fine.",
        image:"",
        alt:""
    },
    {
        _id:4,
        title:"SYNTHESE",
        content:"- **Superficie du permis d’exploitation :** <b style='color:red'>27 km2</b>\n"+ 
        "- **Les ressources envisagées d’or alluvionnaire sont d’environ sur 1/3 du permis :** <b style='color:red'>150 kg</b>\n"+ 
        "- **Teneur moyenne :**  <b style='color:red'>0,5g/m3</b>\n"+ 
        "- **Durée de vie de la mine :** <b style='color:red'>2 ans</b>\n"+ 
        "- **La production mensuelle d’or alluvionnaire enregistrée : N/A**\n"+ 
        "- **La pureté de l’or avant raffinage :** <b style='color:red'>970</b> \n"+
        "- **Travaux effectués** : Puits de prospection dans les placers pour déterminer les ressources. Seule les bordures du placer ont été prospectées. Le centre du placer est en cours d’estimation ;\n"+
        "- Le contexte géologique du permis est marqué par la présence des sillons ferrifères à l’intérieur des ceintures"+ 
        "de roches vertes d’âge Néoarchéen. L’or est principalement de type orogénique présent dans des quartz. Une association"+ 
        "Fer cuivre et or est observée. Au nord du permis des associations Cu-Mo ont été interceptées dans des sondages anciens.\n"+
        "- Des analyses de 520 échantillons de sols et de tarières sont en cours dans le cadre du programme de recherche de gisement d’or primaire.",
        image:"",
        alt:""
    },
]


const Image = styled(motion.img)`
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

const ArrowLine = styled(motion.div)`
     position: relative;
     @media screen and (max-width: 768px){
        display: none ;
    }
 
`;
const ArrowDown = styled(motion.div)`
     position: relative;
     display: none ;
     justify-content:center;

    @media screen and (max-width: 768px){
        display: flex ;
        justify-content:center
    }
 
`;

 

export const ColumnLeft = styled(Grid)`
   
   align-content:center ;
   align-self:center ;
   align-items:center ;
`;

const Title3 = styled(motion.h3)`
   color:#006431 ;
   font-size: 1.5rem; 
   text-align:center;
   display:flex;
`;

const TitleBlock = styled(motion.div)`
    display:flex;
    justify-content:flex-start ;
    
    @media screen and (max-width: 768px){
        justify-content:center
    }
`;

const Box = styled(motion.div)`
    padding:2px;
    margin-left:15px ;
`;


export const ColumnRight = styled(Grid)`
    
 
`;

function ProjetMiamizez() {

    useEffect(() => {
        window.scrollTo(0,0)
      }, []);
    
  return (
    <>
    <BannerBread title="Nos Projets Majeurs"/>
    <Section
        title="PROJET MIAMIZEZ"
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"easeIn", duration: 1 }}
    >
        <Grid container spacing={4}>
             <ProjectTabs
                data={Miamez}
             />
             
        </Grid>
   </Section>
   </>
  )
}

export default ProjetMiamizez