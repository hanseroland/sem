import React,{useState,useEffect} from 'react'
import BannerBread from '../../components/banner/BannerBread';
import { Box,Grid } from '@mui/material';
import Section from '../../components/sections/Section';
import MDEditor from '@uiw/react-md-editor';
import VerticalTabs from '../../components/tabs/VerticalTabs';
import Belinga from '../../images/belinga_project.jpg';
import BSO4 from '../../images/BSO4_project.jpg';
import Oussou from '../../images/oussou_project.jpg';
import Aurus from '../../images/aurus_project.jpg';


const Intro = "En 2015, la communauté internationale a adopté une série de 17 objectifs dans le cadre d'un nouveau"+ 
"programme mondial pour le développement durable.\n\n"+

"L'environnement est le fondement commun de chacun de ces objectifs, qu'il s'agisse de mettre fin à la"+  
"faim, de réduire les inégalités ou de construire des villes et des communautés durables dans le monde entier."+  
"Nous nous engageons à travailler avec toutes les parties prenantes pour atteindre les objectifs ambitieux"+  
"du programme, en particulier ceux directement liés à l'environnement.\n\n"+ 
"Bien que les technologies environnementales se soient améliorées au cours des deux dernières décennies,"+ 
"l'exploitation minière présente toujours le risque d'impacts élevés sur les écosystèmes aquatiques et"+ 
"terrestres. Ainsi, des mesures de protection et des techniques de réhabilitation innovantes et appropriées"+  
"sont systématiquement recommandées et appliquées lors de l'exploration et de l'exploitation des gisements"+  
"miniers au Gabon. Les activités minières font également l'objet d'un suivi et d'un contrôle rigoureux de"+  
"la part du gouvernement et, en l'occurrence, du SEM et des agences spécialisées.\n\n"+ 
"Le gouvernement, par le biais du SEM, propose des mesures d'atténuation et des stratégies pour minimiser "+ 
"les impacts environnementaux liés à l'exploration et à l'exploitation minière. Voici quelques-unes de ces mesures :\n"+ 

   "- Ainsi,la compréhension de la nature des minerais extraits en tant qu'élément chimique et de son importance dans"+ 
    "l'économie et dans l'industrie permet d'évaluer l'intérêt de leur exploitation.\n\n"+ 

   "- Les connaissances sur le comportement des minéraux dans l'eau, le sol, l'air, la faune et la flore en fonction"+ 
    "de divers facteurs biochimiques sont répertoriées afin d'évaluer l'ampleur de leur impact sur l'environnement.\n\n"+ 

   "- Ensuite, la législation régissant les activités minières est utilisée pour analyser l'efficacité du système"+  
   "gouvernemental à protéger l'environnement en cas d'exploitation minière.\n\n"+ 

   "- L'analyse des impacts environnementaux causés par l'exploration, l'exploitation et la fermeture d'une mine vise"+ 
    "à observer les changements que l'on peut observer autour de la mine et la contamination de l'atmosphère, des sols, "+
    " des plans d'eau, de la faune et de la flore.\n\n"+ 

   "- Enfin, les mesures d'atténuation répertoriées et vulgarisées visent à identifier les meilleures pratiques et"+  
   "technologies environnementales existant dans l'industrie.\n\n"+ 

"L'exploitation artisanale de l'or à petite échelle, également appelée orpaillage, est une activité qui s'est fortement"+
"développée au Gabon au cours des dernières décennies avec la découverte de filons d'or dans plusieurs provinces et"+  
"l'augmentation de la pauvreté. Dans ces régions, l'orpaillage est devenu un élément important de l'économie locale."+  
"L'exploitation artisanale de l'or est une réalité incontournable en milieu rural, une occupation au même titre que "+ 
"l'agriculture et l'élevage.\n\n"+ 

"Cependant, l'une des particularités de cette activité est sa grande nuisance sur l'environnement ; par la déforestation"+  
"inévitable et l'utilisation abusive de produits chimiques toxiques et polluants dont les plus courants sont le cyanure et le mercure.\n\n"+ 


"La déforestation est l'un des impacts les plus visibles sur les sites d'orpaillage. Les orpailleurs déboisent sauvagement"+  
"certaines zones lorsqu'ils trouvent de nouveaux sites à exploiter ou pour stabiliser leurs trous avec des branches et des "+ 
"troncs d'arbres, voire pour la construction de leurs maisons. La déforestation entraîne non seulement la disparition d'espèces"+  
"végétales et la diminution des puits de carbone, mais pourrait également entraîner une augmentation des dépôts de mercure "+ 
"sur les sédiments. Les sols dénudés sont facilement érodés, ce qui facilitera le transport du mercure déposé sur le sol "+ 
"vers les eaux de surface.\n\n"+ 

"Il est donc plus qu'urgent que le SEM apporte une réponse immédiate et à la hauteur des dangers causés par ce phénomène."

const Projects = [
  {
    _id:1,
    title:"PROJET BELINGA",
    content:"#### Minéralisation et réserves\n\n"+
    "Le gisement de Bélinga est largement dominé par les BIF qui affleurent dans l'ouest de l'Afrique centrale.\n\n"+
    "- Les gisements sont composés d'unités de magnétite et d'hématite.\n\n"+
    "-  De classe mondiale, avec des réserves estimées à plus d'un milliard de tonnes.\n\n"+
    "- Tonnage : + 1 milliard de Tonnes \n\n"+
    "-  Contenu : Haute teneur dite DSO\n\n",
    image:Belinga,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - PROJET BELINGA"
  },
  {
    _id:2,
    title:"GÎTE DE DOUREKIKI : Substance Barite",
    content:"#### Géologie et Tectonique\n\n"+
      "- Le contexte géologique du gisement de barytine de Dourekiki montre à la base un granite à biotite gris légèrement orienté. On observe ensuite une succession de niveaux conglomératiques, de niveaux conglomératiques profonds, de grès, d'argilite et d'ensilage crétacé. Ces formations sont situées en dehors mais en bordure du syncli-nal de Nyanga.\n\n"+
      "- La barytine affleure sous forme de gravier, de blocs de toutes tailles, ou de fins cristaux millimétriques dans une matrice argilo-sableuse.\n\n"+
   "#### Localisation\n\n"+
      "- Province (s): Ngounié\n\n"+
      "- Ville la plus proche: Tchibanga\n\n"+
      "- Distance par rapport à Libreville: 572 km\n\n"+
   "#### Minéralisation et réserves\n\n"+
      "- Le gisement de barytine de Dourekiki est de type éluvial, réparti sur une superficie de plus de 25ha. \n\n"+
      "- La puissance moyenne de la minéralisation est de 5 m, mais localement elle peut atteindre 15 m. Plusieurs faciès"+
      "associés de façon hétérogène ont été observés : barytine en bande ou bréchique (dominante), barytine en cristaux "+
      "dans une matrice ferrugineuse, barytine \"pierreuse\" à grain fin de teinte blanche, jaune ou rosée, barytine à "+
      "minéralisation fine dans une matrice argileuse.\n\n"+
      "- Des réserves de plus de 1,2 Mt de concentré de barytine récupérable avec une teneur moyenne tout azimut de 46%"+
      "de BaSO4 et dont une à 65% représentant la moitié des réserves.",
    image:BSO4,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - GÎTE DE DOUREKIKI : Substance Barite"
  },
  {
    _id:3,
    title:"CARRIERE DE DOUSSEOUSSOU : Substance Marble",
    content:"#### Objectifs\n\n"+

    "Ce sont les formations \"Schisto-Calcaire\" qui constituent la majeure partie du bassin de Nyanga. Les couches \n\n"+
    "inférieures sont constituées d'une grande fraction de calcaire magnésien.\n\n"+
    
    "#### Localisation\n\n"+
    
        "- Province (s): Ngounié\n\n"+
        "- Ville la plus proche: Tchibanga\n\n"+
        "- Distance par rapport à Libreville: 572 km\n\n"+
    
    "#### Minéralisation et réserves\n\n"+
    
    "Sur le flanc SO du synclinal, où le degré de métamorphisme est nettement plus intense que sur"+
    "le flanc nord-est, les calcaires se sont transformés en marbres présentant des marmorations, "+
    "des structures en bandes, des crénelures et un degré intense de recristallisation, donnant une "+
    "texture saccharoïde. Le gisement de Dousseoussou a été reconnu et a fait l'objet d'une "+
    "exploitation industrielle. Mais pour des raisons de rentabilité, dues à l'absence de voies "+
    "d'évacuation appropriées, l'activité s'est arrêtée. Les réserves géologiques sont importantes "+
    "par rapport à l'étendue de la formation géologique.",
    image:Oussou,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - CARRIERE DE DOUSSEOUSSOU : Substance Marble"
  },
  {
    _id:4,
    title:"PROJET MINKÉBÉ : Réserve d'or",
    content:"#### Géologie"+

   " L'or de minkébé fait partie du groupe de Belinga dans la ceinture de roches vertes d'âge archéen.\n\n"+
    
    "#### Localisation\n\n"+
    
       "- Province (s): Woleu Ntem\n\n"+
       "- Ville la plus proche: Mitzic\n\n"+
       "- Distance par rapport à Libreville: 535 km\n\n"+
    
    "#### Minéralisation et réserves\n\n"+
    
        "- Présence de nombreux indices d'or alluvionnaire et d'une importante activité minière artisanale.\n\n"+
    
        "- Le site dit de \" Minkébé \" a fait l'objet d'une ruée éluvionnaire dans les années 2000. Ainsi plus de 8 tonnes y ont été produites.\n\n"+ 
    
        "- La présence de lithologies ferrugineuses (BIF) semble un facteur essentiel pour la formation de ces gisements"+
        "aurifères et la possibilité de "+
        "trouver des corps minéralisés aurifères significatifs et d'en faire ainsi des gisements primaires de classe mondiale.",
    image:Aurus,
    alt:"SOCIETE EQUATORIAL DES MINES DU GABON - PROJET MINKÉBÉ : Réserve d'or"
  }
]

function Activites() {

  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:100,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }



  const [value, setValue] = useState(Intro);

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);


  return (
    <div>

       <BannerBread title="Nos Activités" />
       <Section
        title="Nos Activités"
        titleColor="#006431"
        bgcolor="#f7f7f7b8"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}
      >
        <Grid container spacing={2}>
              <Box p={2}>
                  
                  <MDEditor.Markdown source={Intro} style={{backgroundColor:'#f7f7f7b8',color:"#000",textAlign:"justify"}} />
              </Box>
        </Grid>
      </Section>
      <Section
        title="Projets Majeurs"
        titleColor="#006431"
        bgcolor="#fff"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}
      >
        <Grid container spacing={2}>
              <VerticalTabs
                 data={Projects}
              />
        </Grid>
      </Section>
       
    </div>
  )
}

export default Activites 