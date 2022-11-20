import React, { useEffect } from 'react'
import BannerBread from '../../components/banner/BannerBread'
import Img5 from '../../images/Marbre_1.jpg'
import Img6 from '../../images/Marbre_2.jpg'
import Img7 from '../../images/Marbre_3.jpg'
import Section from '../../components/sections/Section'
import ProjectTabs from '../../components/tabs/ProjectTabs';
import { Grid} from '@mui/material';


const Mabre = [
  {
    _id:1,
    title:"LOCALISATION",
    content:"La carrière de marbre de Dousseoussou est située à environ 610 km de Libreville par la route et à environ"+ 
    "17 km de la ville de Tchibanga, capitale de la province de la Nyanga, sur la route Tchibanga-Mayumba. "+ 
    "Les coordonnées de latitude et de longitude de la carrière sont : 03°02.189 S et 010°52.744 E.\n",
    image:Img5,
    image2:"",
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - LOCALISATION PROJET DOUSSEOUSSOU"
  },
  {
      _id:2,
      title:"CONTEXTE GÉOLOGIQUE",
      content:"La zone de Dousse Oussou appartient au flanc ouest plissé et métamorphisé du synclinal de Nyanga,"+ 
      "constitué du Groupe Schisto-Calcaire d'âge néoprotérozoïque. La zone marbrière de Dousse Oussou correspond"+ 
      "à une unité de dolomies et de calcaires de la partie inférieure (SC1) du Groupe Schisto-Calcaire, non "+ 
      "déformée et non métamorphisée sur le bord oriental du bassin. Ce dernier est affecté sur le flanc ouest"+ 
      "du bassin par un fort métamorphisme thermique, lié à la mise en place de plutons intrusifs panafricains."+ 
      "Cet épisode a conduit à la marmorisation (transformation des calcaires et dolomies en marbre).\n\n"+
      "Les couleurs des marbres varient du blanc au gris et présentent une grande variabilité de faciès.",
      image:Img6,
      alt:"SOCIETE EQUATORIAL DES MINES DU GABON -  Carte géologique synthétique du Gabon "
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
      title:"TRAVAUX PRÉCÉDENTS",
      content:"Lors de la première exploitation de la carrière de marbre de Dousse Oussou dans les années 1970,"+ 
      "notamment pour la construction du palais présidentiel et du palais du congrès du 12 mars"+ 
      "(aujourd'hui Cité de la Démocratie), une étude datée de 1975 a été réalisée par le service géologique du Gabon. \n\n"+ 
      "Cette étude comprenait une cartographie des affleurements et la réalisation de sondages :\n\n"+ 
      "**1. Observation des affleurements**\n\n"+ 
      "Pas moins de 45 affleurements différents ont été identifiés. L'observation des affleurements a permis de mettre en évidence la présence de 3 grands types de marbres :\n"+ 
      "- Un marbre gris\n"+ 
      "- Un marbre blanc veiné\n"+ 
      "- Un marbre blanchâtre à beige, avec des stries brun-rose.\n\n"+ 
      "**2. La réalisation d'enquêtes en 1974/1975**\n\n"+
      "23 carottages réalisés en divers points proches de la zone d'exploitation révèlent la présence des marbres suivants à des profondeurs variables, certains étant de qualité optimale pour l'exploitation :\n\n"+ 
      "- **Bardiglietto Venato**\n"+
      "- **Bardiglio Venato**\n"+
      "- **Bianco Venato**\n"+
      "- **Bardiglio**\n"+
      "- **Bianco colorato Marrone Rosso**\n"+
      "- **Bianco Rosato Sul Marrone**\n"+
      "Tous les marbres ci-dessus sont recommandés pour un usage intérieur et extérieur et leurs équivalents sont généralement d'origine italienne.\n\n"+
      "Des travaux plus récents ont été réalisés en 2013. Ces travaux ont consisté à prélever des échantillons et à réaliser des tests de porosité et de détermination de la densité apparente.\n\n"+
      "**3. Tests et analyse des marbres**\n\n"+
      "En 2013, des échantillons de marbre récupérés dans la zone de l'ancienne carrière ont été analysés dans un laboratoire en France afin de déterminer la porosité du marbre ainsi que sa densité. Les résultats obtenus sont satisfaisants présentés ci-dessous :\n\n",
      image:Img7,
      alt:"SOCIETE EQUATORIAL DES MINES DU GABON - Tableau des résultats des tests"
  },
  {
    _id:4,
    title:"RESSOURCES ESTIMÉES",
    content:"Despite the fact that the Dousse Oussou quarry was exploited in the 1970s, no reserve\n\n"+ 
    "Malgré le fait que la carrière de Dousse Oussou ait été exploitée dans les années 1970, aucune donnée d'estimation de réserve n'est disponible.\n\n"+ 
    "Cependant, étant donné l'étendue de la zone dans laquelle s'étend la formation géologique contenant le marbre, il est possible d'envisager des ressources géologiques potentielles de l'ordre de plusieurs millions de tonnes dans toute la région. \n\n"+ 
    "Une étude plus détaillée avec la réalisation de carottages est nécessaire pour faire une évaluation des réserves exploitables. En 2015, SEM a prévu un programme"+ 
    "de 30 forages pour déterminer et certifier les réserves dans la zone d'intérêt présentée sur la figure 2.\n\n",
    image:"",
    alt:""
},
{
  _id:5,
  title:"CONCLUSION",
  content:"Compte tenu de la géologie, les ressources en marbre de la zone de Dousse Oussou pourraient"+ 
  "être de l'ordre de plusieurs millions de tonnes. Les caractéristiques mécaniques du marbre sont"+
  "parfaitement compatibles avec les normes internationales. Cependant, compte tenu de la variabilité "+ 
  "du gisement, une étude pour déterminer les réserves par type de marbre est nécessaire. ",
  image:"",
  alt:""
},
]


function MabreDisseoussou() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <>
       <BannerBread title="Projet MARBRE DOUSEOUSSOU"/>
       <Section
        title="PROJET MARBRE DOUSEOUSSOU"
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"easeIn", duration: 1 }}
    >
        <Grid container spacing={4}>
             <ProjectTabs
                data={Mabre}
             />
             
        </Grid>
   </Section>
    </>
   
  )
}

export default MabreDisseoussou