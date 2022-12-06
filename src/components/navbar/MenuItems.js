import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const MenuItems = [
  {
    title: 'Accueil',
    path: '/',
    icon: <FaIcons.FaHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'À propos',
    path: 'a-propos',
    icon: <FaIcons.FaStar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Missions & Valeurs',
        path: '/a-propos/missions-et-valeurs',
        icon: <FaIcons.FaStar />,
        cName: 'sub-nav'
      },
     
      {
        title: 'Équipe Dirigeante',
        path: '/a-propos/equipe-dirigeante',
        icon: <FaIcons.FaStar />,
        cName: 'sub-nav'
      },
     
      
    ]
  },
  {
    title: 'Nos Activités',
    path: '/nos-activites',
    icon: <FaIcons.FaPeopleArrows />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
          { 
            title: 'Projet MIAMEZ',
            path: '/nos-activites/projet-miamizez', 
            icon: <RiIcons.RiStackLine/>,
            cName: 'sub-nav'
        },
        {
          title: 'Projet MEBAGA',
          path: '/nos-activites/projet-mebaga',
          icon: <RiIcons.RiStackLine/>,
            cName: 'sub-nav'
        },
        {
            title: 'Projet MINKIE',
            path: '/nos-activites/projet-minkie',
            icon: <RiIcons.RiStackLine/>,
            cName: 'sub-nav'
          
        },
        {
            title: 'Projet MARBRE DOUSSEOUSSOU',
            path: '/nos-activites/projet-marbre-dousseoussou',
            icon: <RiIcons.RiStackLine/>,
            cName: 'sub-nav'
           
        }
        
        
    ]
       
  },
  {
        title: 'Investisseurs',
        path: '/investisseurs',
        icon: <FaIcons.FaUser />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        
  },
  /*{
    title: 'Newsroom',
    path: '/redaction',
    icon: <FaIcons.FaNewspaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
   
  },*/
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaAddressCard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
   
  },
  
]; 