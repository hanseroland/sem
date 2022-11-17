import React from 'react'
import BannerBread from '../../components/banner/BannerBread';
import Section from '../../components/sections/Section';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as FaIcon from 'react-icons/fa'   
import * as HiIcon from 'react-icons/hi'  
import CardIcon from '../../components/cards/CardIcon';
import CenteredTabs from '../../components/tabs/CenterTabs';
import CarteGeologique from '../../images/CARTE-GEOLOGIQUE-ET-DES-RESSOURCES--MINERALES_1.jpg';
import CadreReglementairee from '../../images/regulatory_framework_fr.png';
import DroitMiniers from '../../images/carte_potentiel_Gabon1.jpg';





const InvestisseurTab = [
  {
    _id:1,
    title:"Potentiel minier",
    content:"Le Gabon possède un sous-sol avec un énorme potentiel en ressources minérales :"+ 
     "fer, manganèse, or, diamant, niobium, terres rares et phosphates. Le pays est le deuxième"+
     "producteur mondial de minerai de manganèse de haute qualité. Cependant, le secteur minier"+
     "au Gabon est essentiellement basé sur l'exploitation de deux substances : le manganèse et"+
     "l'or, et contribue modestement à l'économie nationale avec environ 4% du PIB."+
     "La zone minière occupée représente 60 000 km2, soit 22% du territoire national."+
     "D'importantes perspectives de croissance subsistent. Afin de faire de ce secteur un pilier "+
     "majeur de son économie, le Gabon a défini une orientation stratégique. défini une "+
     "orientation stratégique : l'optimisation de la valeur ajoutée par la transformation "+
     "locale et la diversification de l'exploitation minière. Ce document présente le potentiel "+
     "minier gabonais et offre des opportunités d'investissement dans le secteur.",
     image:CarteGeologique,
     alt:"SOCIETE EQUATORIAL DES MINES DU GABON - CARTES GEOLOGIQUES DES RESSOURCES MINIERE",
  },
  {
    _id:2,
    title:"Cadre règlementaire",
    content:"",
    image:CadreReglementairee,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - CADRE RELEMENTAIRE",
  },
  {
    _id:3,
    title:"Droits miniers",
    content:"",
    image:DroitMiniers,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - DROITS MINIERS",
  }
  ,
]

function Investisseurs() {

  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:100,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }

  return (
    <div >
      <BannerBread title="Investisseurs" />
      <Section
        title="Gabon : une économie croissante"
        bgcolor="#fff"
        titleColor="#006431"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}
      >
        <Grid container spacing={2}>
              <Box p={2}>
                <Typography textAlign="justify" variant="subtitle1"  component="p" >
                L'industrie minière gabonaise, l'une des rares industries de classe mondiale du pays, a la capacité de continuer 
                à générer des richesses et des opportunités d'emploi à grande échelle. L'exploitation minière étant une activité internationale,
                 le Gabon doit faire face à la concurrence des pays développés et en développement pour attirer les investissements
                  étrangers et locaux.
                  </Typography>
              </Box>
              <Grid display="flex" justifyContent="center" marginBottom={1} lg={4} xs={12}>
                  <CardIcon
                   icon={<HiIcon.HiAdjustments color="#000" size={60} />}
                   title="Le Gabon a adopté le PSGE"
                   content="À la suite de la crise économique mondiale de 2008, 
                   le Gabon a décidé de modifier sa stratégie de développement. 
                   Le Gabon a adopté le PSGE, un modèle qui lui est propre en 2009. 
                   Une nouvelle donne et des orientations pour la mise en place d'une 
                   économie plus diversifiée avec de nouvelles sources de revenus ou 
                   de recettes en faveur de la croissance du PIB et du développement 
                   de trois piliers : le Gabon industriel, le Gabon vert, l'Afrique 
                   du Sud et l'Afrique du Sud. le développement de trois piliers : 
                   le Gabon industriel, le Gabon vert, le Gabon des services essentiellement 
                   pour créer de la richesse et de la croissance."
                   color="#000"
                   bgcolor="#fff"
                  />
              </Grid>
              <Grid display="flex" justifyContent="center"  marginBottom={1} lg={4} xs={12} >
              <CardIcon
                   icon={<FaIcon.FaChartLine color="#fff" size={60} />}
                   title="Un environnement commercial favorable"
                   content="Le Gabon a modernisé son environnement des affaires par la révision 
                   des codes dans le but d'améliorer le score Doing Business : améliorer le processus 
                   de création d'entreprise avec la mise en place d'un guichet unique;

                   Réduction des obstacles administratifs, délivrance des accords dans un délai 
                   de 48 heures ; mise à jour de tous les principaux codes sectoriels tels que 
                   les hydrocarbures, les mines, les forêts, le tourisme, l'agriculture, l'eau et l'urbanisme ;

                   Création du Haut Conseil pour l'Investissement afin de renforcer les relations 
                   entre les secteurs public et privé ; un des PIB par habitant les plus élevés d'Afrique."
                   color="#fff"
                   bgcolor="#006431"
                  />
              </Grid>
              <Grid display="flex" justifyContent="center"  marginBottom={1} lg={4} xs={12} >
              <CardIcon
                   icon={<FaIcon.FaRegHandshake color="#000" size={60} />}
                   title="Stabilité politique et sociale"
                   content="Depuis son indépendance, le Gabon jouit d'une stabilité politique 
                   et sociale grâce à un pacte social fondé sur la solidarité, le dialogue et
                   la cohésion sociale. Doté d'institutions fortes et d'une justice indépendante et
                   impartiale, le pays arrive en tête en termes de gouvernance parmi les pays d'Afrique
                   centrale selon l'indice Mo Ibrahim de 2015. 
                   Le Gabon n'a jamais connu de conflit armé et constitue un modèle de
                   paix en Afrique et ailleurs dans le monde."
                   color="#000"
                   bgcolor="#fff"
                  />
              </Grid>
        </Grid>
      </Section>
      <Section
        title=""
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}
      >
        <Grid container spacing={2}>
              <CenteredTabs
                data={InvestisseurTab}
              />
        </Grid>
      </Section>
    </div>
  )
}

export default Investisseurs 