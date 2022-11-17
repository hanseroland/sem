import React from 'react'
import BannerBread from '../../components/banner/BannerBread'
import Img8 from '../../images/minkie01.jpg'
import Img9 from '../../images/minkie03.jpg'
import Section from '../../components/sections/Section'
import ProjectTabs from '../../components/tabs/ProjectTabs';
import { Grid} from '@mui/material';

const Minkie = [
  {
    _id:1,
    title:"LOCALISATION",
    content:"Le permis d’exploitation de mines à petite échelle (PEMPE) Minkie G9-981 se situe au Nord du Gabon à 97 km de Mitzic dans la province du Woleu Ntem. \n",
    image:Img8,
    image2:Img9,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - LOCALISATION PROJET MIAMEZ"
  },
  {
      _id:2,
      title:"VALIDITE DU PERMIS",
      content:"Le PEMPE G9-981 de Minkie a été obtenu le 18 décembre 2020 pour une durée de 5 ans, il expire le 18 décembre 2025.",

      image:"",
      alt:""
  },
  {
      _id:3,
      title:"CONTEXTE GEOLOGIQUE ET TECTONIQUE",
      content:"Au voisinage du permis, on observe une suite plutonique Néoarchéenne,"+ 
      "des intrusions monzogranitiques porphyriques, postérieures à la mise en place du cortège de roches vertes. \n\n"+ 
      "Ces intrusions granitiques apparaissent comme des réservoirs de fluides hydrothermaux,"+ 
      "qui ont pu favoriser la migration de l’or présent dans les ceintures de roches vertes, suivants les zones de failles.\n\n",
      image:"",
      alt:""
  },
  {
      _id:4,
      title:"SYNTHESE",
      content:"- **Superficie du permis de recherche :** <b style='color:red'>1445 km2</b>\n"+ 
      "- **Superficie du permis d’exploitation :** <b style='color:red'>50 km2</b>\n"+ 
      "- **Les ressources envisagées d’or alluvionnaire sont d’environ sur 1/3 du permis :**  <b style='color:red'>447 kg</b>\n"+ 
      "- **Zone non exploitée:** <b style='color:red'>141 km2</b>\n"+ 
      "- **Teneur moyenne :** <b style='color:red'>0,9g/m3</b>\n"+ 
      "- **La pureté de l’or avant raffinage :** <b style='color:red'>970 - 980</b>\n"+ 
      "- **Durée de vie de la mine : 4 ans**\n"+ 
      "- **La production mensuelle d’or alluvionnaire enregistrée en 2020 :** <b style='color:red'>20 kg</b> \n"+
      "- **Nombre d'échantillon en cours d'analyse :** <b style='color:red'>N/A</b>\n"+ 
      "- **Travaux effectués** : <b style='color:red'>Prospection par puit</b>\n"+
      "- **Besoin : mettre en place un programme de recherche de la source primaire de l'or**",
      image:"",
      alt:""
  },
]


function ProjetMinkie() {
  return (
    <>
    <BannerBread title="Projet MINKIE"/>
    <Section
        title="PROJET MINKIE"
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"easeIn", duration: 1 }}
    >
        <Grid container spacing={4}>
             <ProjectTabs
                data={Minkie}
             />
             
        </Grid>
   </Section>
   </>
  )
}

export default ProjetMinkie