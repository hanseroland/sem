import React from 'react'
import BannerBread from '../../components/banner/BannerBread'
import Img1 from '../../images/carte_Mebaga_S2.jpg'
import Img3 from '../../images/LOCALISATION_MEBAGA_A2.jpg' 
import Section from '../../components/sections/Section'
import styled from 'styled-components';
import {motion } from 'framer-motion';
import ProjectTabs from '../../components/tabs/ProjectTabs';
import { Grid} from '@mui/material';

const Mebaga = [
  {
    _id:1,
    title:"LOCALISATION",
    content:"Le permis d’exploitation de Mebaga est situé à environ 50 km à vol d’oiseau à l’est de la ville de Mitzic dans le département de l’Okano province du Woleu Ntem.\n",
    image:Img1,
    image2:Img3,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - LOCALISATION PROJET MIAMEZ"
  },
  {
      _id:2,
      title:"CONTEXTE GEOLOGIQUE ET MINERALISATION",
      content:"Sur le plan géologique, l’emprise du permis de MEBAGA est caractérisée par un socle archéen constitué principalement de 2 faciès de granitoïdes vieux de 2,7Ga.\n\n"+ 
      "Nous avons : \n"+
      "- d’une part les granitoïdes gris à faciès granodiorite-tonalite-diorite\n"+
      "- d’autre part des granitoïdes roses à faciès granite-monzonite-syénite-migmatitite\n\n"+
      "Des ceintures de roches vertes comprenant des sillons ferrifères de type BIF ou quartzites"+ 
      "ferrugineux, sont également cartographiées dans ce socle granitoïdique. Les quartzites ferrugineux"+ 
      "interviennent topographiquement en position sommitale sur les crêtes de NGAMA et de MEBAGA, enregistrant"+ 
      "ainsi les altitudes les plus élevées de la région. Le socle archéen est profondément altéré et les affleurements"+ 
      "rocheux n’apparaissent que très rarement à la faveur d’accidents tectoniques.",

      image:"",
      alt:""
  },
  {
      _id:3,
      title:"MINERALISATION ET RESSOURCES",
      content:"Les travaux de prospection effectués ont permis d’identifier des zones potentielles classées en trois (3) niveaux de priorité pour l’or alluvionnaire. \n\n"+ 
      "Les ressources en or alluvionnaires envisagées dans la zone sont de l’ordre de 500 kg, cette quantité a été estimées sur la base de puits foncés à l’intérieur des placer de Mebaga.\n\n"+
      "La détermination de la pureté de l’or alluvionnaire fondu en barre a donné des valeurs de l’ordre de 98%. L’or du Gabon est considéré en moyenne comme de l’or naturellement riche.\n\n"+
      "Le potentiel pour l’or primaire existe. En effet, une étude minéralogique et chimique du profil d’altération de la zone datant de 1988 (Fabrice Colin et Paul Lecomte), a permis de"+ 
      "mettre en évidence que l’or identifié dans les altérites est d’origine primaire.",
      image:"",
      alt:""
  },
  {
      _id:4,
      title:"SYNTHESE",
      content:"- **Superficie du permis de recherche :** <b style='color:red'>191 km2</b>\n"+ 
      "- **Superficie du permis d’exploitation :** <b style='color:red'>50 km2</b>\n"+ 
      "- **Zone non exploitée:** <b style='color:red'>141 km2</b>\n"+ 
      "- **Les ressources envisagées d’or alluvionnaire sont d’environ sur 2/3 du permis :**  <b style='color:red'>450 kg</b>\n"+ 
      "- **Teneur moyenne :** <b style='color:red'>0,7g/m3</b>\n"+ 
      "- **Durée de vie de la mine : 4 ans**\n"+ 
      "- **La production mensuelle d’or alluvionnaire enregistrée en 2020 :** <b style='color:red'>15 kg</b> \n"+
      "- **La pureté de l’or avant raffinage :** <b style='color:red'>970 - 980</b>\n"+ 
      "- **Travaux effectués** : Puits de prospection dans les placers pour déterminer les ressources.\n"+
      "- Le potentiel pour l’or primaire existe. En effet, une étude minéralogique et chimique "+ 
      "du profil d’altération de la zone datant de 1988 (Fabrice Colin et Paul Lecomte), a permis de mettre en évidence que l’or identifié dans les altérites est d’origine primaire.",
      image:"",
      alt:""
  },
]



function ProjetMebaga() {
  return (
    <>
     <BannerBread title="Projet MEBAGA"/>
     <Section
        title="PROJET MEBAGA"
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"easeIn", duration: 1 }}
    >
        <Grid container spacing={4}>
             <ProjectTabs
                data={Mebaga}
             />
             
        </Grid>
   </Section>
    </>
    
  )
}

export default ProjetMebaga