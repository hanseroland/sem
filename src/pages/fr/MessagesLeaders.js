import React from 'react'
import President from '../../images/Ali-Bongo-Ondimba.png'
import Ministre from '../../images/278100959_321612176733570_5570610213835320753_n.jpeg'
import Directeur from '../../images/AJCS2937.jpg'
import BannerBread from '../../components/banner/BannerBread'
import InfoSection from '../../components/sections/InfoSection'
import Section from '../../components/sections/Section'
import { Divider, Grid } from '@mui/material'
import {motion } from 'framer-motion';
import Circle from '../../components/cards/Circle';
import * as RiIcon from 'react-icons/ri';
import * as GiIcon from 'react-icons/gi';
import { Container } from '@mui/system'
import { useEffect } from 'react'
import ValueCard from '../../components/cards/ValueCard'

const Message = [
    {
        _id:1,
        content:"SEM a été créée par décret présidentiel en 2011 pour faciliter le développement des"+
         "ressources minérales du Gabon. SEM est une société privée qui est entièrement détenue par le"+ 
         "gouvernement du Gabon. Initialement, les activités de SEM seront axées sur l'expansion et le "+
         "développement des minéraux stratégiques nationaux.\n\n"+

        "Depuis 2009, le Gabon a mis en place une stratégie de développement ambitieuse en vue de"+ 
        "répondre d'ici 2015 aux critères habituellement admis pour être classé parmi les pays émergents."+
         "Cette stratégie, appelée Gabon Emergent, vise à atteindre un équilibre économique et social "+
         "dans le respect de l'environnement afin que les richesses du pays contribuent à l'amélioration"+ 
         "des conditions de vie des Gabonais.\n\n"+
        
        "Comme de nombreux pays producteurs de pétrole, le Gabon, a subi de plein fouet l'impact de"+
        "la chute drastique des prix des matières premières. Cette situation a entraîné un ralentissement"+ 
        "de notre activité économique. Dans ce contexte, j'ai instruit le Gouvernement de mettre en place"+
         "un Plan d'Accélération de la Transformation (P.A.T.). Ce programme vise à relancer notre "+
         "économie en accélérant la transition vers un paradigme post-pétrole, et en mettant l'accent"+ 
         "sur de nouveaux moteurs de croissance dont le potentiel peut être accru. Il s'agit notamment "+
         "des secteurs minier, forestier et agricole.\n\n"+
        
        "Par ailleurs, le Gabon renforce sa capacité énergétique par la réalisation imminente de "+
        "nouvelles centrales solaires ou hydroélectriques afin de donner un nouvel élan à son "+
        "processus d'industrialisation.\n\n"+
        
        "Au-delà du développement des infrastructures, l'effet induit de la mise en œuvre de ce plan de"+
        "relance est d'assurer l'ajustement budgétaire et la promotion du secteur privé comme leviers"+
         "de diversification et de transformation de l'économie nationale.\n\n"+
        
        "#### SE Ali Bongo Ondimba\n"+
        "*Président de la République, Chef de l'État.*",
        image:President,
        alt:"SOCIÉTÉ ÉQUATORIALE DES MINES - SE Ali Bongo Ondimba"
    },
    
        {
            _id:2,
            content:"L'industrie minière gabonaise, l'une des rares industries de classe mondiale du pays,"+ 
            "a la capacité de continuer à générer des richesses et des opportunités d'emploi à grande échelle."+ 
            "L'exploitation minière étant une activité internationale, "+
            "le Gabon doit faire face à la concurrence des pays développés et en développement pour attirer "+
            "les investissements étrangers et locaux. De nombreux projets miniers au Gabon ont eu tendance à "+
            "être exceptionnellement importants et à long terme, nécessitant des capitaux massifs et comportant"+ 
            "un degré élevé de risque. Le Gabon dispose de ressources minérales exceptionnelles et, pour "+
            "plusieurs produits de base importants, il a le potentiel de fournir bien plus que ce que les marchés"+
             "mondiaux peuvent consommer.\n\n"+

            "Comme indiqué dans sa stratégie macroéconomique, le gouvernement s'est engagé dans un "+
            "processus continu de libéralisation économique, renforçant ainsi la capacité concurrentielle de l'économie,"+
            "la réforme fiscale et tarifaire et la déréglementation bureaucratique. Il s'agit d'étapes essentielles "+
            "pour améliorer la compétitivité du pays, attirer les investissements étrangers directs et de portefeuille"+
            "et créer un climat propice à l'expansion des entreprises. L'industrie minière, entre autres, bénéficiera"+
            "à long terme de ces développements.\n\n"+
            
            "De par sa nature même, l'industrie minière est susceptible de mettre en danger la santé et la sécurité des "+
            "personnes ainsi que l'environnement physique. C'est pourquoi le gouvernement a établi un cadre réglementaire"+
            "qui minimise ces dangers sans imposer à l'industrie un fardeau financier excessif qui mettrait en péril sa "+
            "viabilité économique.\n\n"+
            
            "#### Elvis OSSINDJI\n"+
            "*Ministre des Mines*",
            image:Ministre,
            alt:"SOCIÉTÉ ÉQUATORIALE DES MINES - Ministre des Mines - Elvis OSSINDJI"
        },
        {
            _id:3,
            content:"Gabon Mining a amélioré de manière durable ses performances en matière de sécurité, d'environnement, de société"+
            "et d'exploitation. Notre objectif principal est de veiller à ce que la durabilité soit intégrée dans nos disciplines"+ 
            "d'exploitation comme un facteur clé de notre réussite.\n\n"+

            "Depuis mon arrivée à bord en mars 2022, nous avons lancé, avec nos parties prenantes, un processus interfonctionnel"+
            "et collaboratif visant à faire passer notre stratégie et nos performances en matière de durabilité à un niveau "+
            "supérieur, notamment par la création d'un groupe de travail multidisciplinaire sur la durabilité, d'un comité"+
            "directeur exécutif et d'une structure de gouvernance formelle. Grâce à ce processus, nous continuerons de "+
            "définir, d'intégrer et d'incorporer des piliers de durabilité, des thèmes clés, des indicateurs de performance"+
            "et des objectifs à long terme.\n\n"+
            
            "#### Wesbert MOUSSOUNDA NGOUMBA\n"+
            "Directeur Général",
            image:Directeur,
            alt:"SOCIÉTÉ ÉQUATORIALE DES MINES - Directeur Général - Wesbert MOUSSOUNDA NGOUMBA"
        },
    
]

const NosValeur = [
    {
        _id:1,
        icon:<GiIcon.GiTeacher color="#006431" size={70} />,
        title:"Travail",
        content:"Nous faisons ce qui est juste et nous honorons nos engagements.",
        color:"#707173",
        bgcolor:"#fff",
    },
    {
        _id:2,
        icon:<GiIcon.GiDiploma color="#fff" size={70} />,
        title:"Excellence",
        content:"Nous fixons des standards élevées et nous nous mettons au défi de fournir des performances supérieures.",
        color:"#fff",
        bgcolor:"#006431",
    },
    {
        _id:3,
        icon:<GiIcon.GiEcology color="#fff" size={70} />,
        title:"Développement durable",
        content:"Nous faisons de la santé et de la sécurité notre priorité absolue dans tout ce que nous faisons.",
        color:"#fff",
        bgcolor:"#006431",
    },
    {
        _id:4,
        icon:<RiIcon.RiSearchEyeLine color="#006431" size={70} />,
        title:"Transparence",
        content:"Nous encourageons la diversité, l'inclusion, le dialogue ouvert et la collaboration.",
        color:"#707173",
        bgcolor:"#fff",
    }
]
function Messages_leaders() {
    useEffect(() => {
        window.scrollTo(0,0)
      }, []);
    
  return (
    <>
     <BannerBread title="Message De Nos Leaders" />
     <InfoSection
        content={Message[0].content}
        imgStart={false}
        Img={Message[0].image}
        title="Nos leaders"
        titleColor="#006431"
        alt={Message[0].alt}

        viewport={{once:false}}
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"easeIn", duration: 1 }}

        boxViewport={{once:false}}
        boxInitial={{opacity:0,x:-100}}
        boxWhileInView={{opacity:1,x:0}}
        boxTransition={{type:"easeOut", duration: 1 }}

        imgViewport={{once:false}}
        imgInitial={{opacity:0,x:100}}
        imgWhileInView={{opacity:1,x:0}}
        imgTransition={{type:"easeOut", duration: 1 }}
     />
      <Container>
        <Divider/>
     </Container>
     <InfoSection
     content={Message[1].content}
     imgStart={true}
     Img={Message[1].image}
     title=""
     titleColor="#006431"
     alt={Message[1].alt}
     viewport={{once:false}}
     initial={{opacity:0,x:-100}}
     whileInView={{opacity:1,x:0}}
     transition={{type:"easeIn", duration: 1 }}

     boxViewport={{once:false}}
     boxInitial={{opacity:0,x:100}}
     boxWhileInView={{opacity:1,x:0}}
     boxTransition={{type:"easeOut", duration: 1 }}

     imgViewport={{once:false}}
     imgInitial={{opacity:0,x:-100}}
     imgWhileInView={{opacity:1,x:0}}
     imgTransition={{type:"easeOut", duration: 1 }}
     />
      <Container>
        <Divider/>
     </Container>
     <InfoSection
     content={Message[2].content}
     imgStart={false}
     Img={Message[2].image}
     title=""
     titleColor="#006431"
     alt={Message[2].alt}

     viewport={{once:false}}
     initial={{opacity:0,x:-100}}
     whileInView={{opacity:1,x:0}}
     transition={{type:"easeIn", duration: 1 }}

     boxViewport={{once:false}}
     boxInitial={{opacity:0,x:-100}}
     boxWhileInView={{opacity:1,x:0}}
     boxTransition={{type:"easeOut", duration: 1 }}

     imgViewport={{once:false}}
     imgInitial={{opacity:0,x:100}}
     imgWhileInView={{opacity:1,x:0}}
     imgTransition={{type:"easeOut", duration: 1 }}
     />
     <Container>
        <Divider/>
     </Container>
   
    <Section
            title="Nos Valeurs"
            titleColor="#006431"
            bgcolor="#fff"
            viewport={{once:false}}
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{type:"easeIn", duration: 1 }}
       >
            <Grid container spacing={2} >

                {
                    NosValeur.map((item,index)=>(
                        <Grid key={item._id} item lg={3} md={3} sm={6} xs={6}  sx={{display:'flex',justifyContent:"center"}} >
                            <motion.div
                              viewport={{once:false}}
                              initial={{opacity:0,y:-100}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration: 1 }}
                            >
                                <ValueCard
                                icon={item.icon}
                                title={item.title}
                                content={item.content}
                                color={item.color}
                                bgcolor={item.bgcolor}
                                width={450}
                            />
                            </motion.div>
                       </Grid>
                    ))
                }
               
            </Grid>
       </Section>
      
    </>
  )
}

export default Messages_leaders