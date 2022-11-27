import React, { useState ,useEffect} from 'react'
import {  Box, Drawer, IconButton, MenuItem,Menu, Toolbar, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import {makeStyles} from '@mui/styles'
import { styled as styledMui, alpha } from '@mui/material/styles';
import clsx from 'clsx';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo_SEM-2couleurs.png'
import styled  from 'styled-components';
import Submenu from './Submenu';
import { MenuItems } from './MenuItems';
import { Facebook, LinkedIn } from '@mui/icons-material';
import {BrowserRouter as Router,Route,Routes, useLocation} from 'react-router-dom'


const SidebarLink = styled(Link)`
  display: flex;
  color: #006431; 
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height:30px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: #006431;
    cursor: pointer;
    color: #fff;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #707173; 
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color:  #fff;
  font-size: 12px;
  &:hover {
    background:#006431;
    cursor: pointer;
    color: #fff;
  }
`;


const MenuBox = styledMui(Box)(({ theme }) => ({
   display:'flex',
   flexDirection:'column',
   height:60,
   position: "relative",
   [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
   },
}));

const ContainerLogo = styled.div`
  max-width: 250px;
  padding: 0 10px;
  overflow: hidden;
`;

const LogoLink = styled(Link)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 60px;
`;

const LogoImg = styled.img`
    max-width: 100%;
    max-height: 60px;
`;


const MenuOptionToggle = styledMui(Link)(({ theme }) => ({
  padding:theme.spacing(2),
  textDecoration:'none',
  textAlign:"center",
  transition: "0.3s",
  color:"#006431",
 '&:hover' : {
      borderBottom: '4px solid  #006431',
      transform:'all 0.2s ease-out',
    },
    '&:active' :{
      borderBottom: '4px solid #006431',
      transform:'all 0.2s ease-out',
    }
}));

const MenuOption = styledMui(Link)(({ theme }) => ({
    padding:theme.spacing(2),
    textDecoration:'none',
    position: "relative",
    textAlign:"left",
    transition: "0.3s",
    width:100,
    zIndex:1,
    [theme.breakpoints.up('md')]: {
      paddingLeft:theme.spacing(3),
    },
   '&:hover' : {
        borderBottom: '4px solid  #fff',
        transform:'all 0.2s ease-out'
      },
      '&:active' :{
        borderBottom: '4px solid #006431',
        transform:'all 0.2s ease-out',
      }
 }));

 const ToolBar = styledMui(Toolbar)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.up('md')]: {
     flexDirection: 'row',
     alignItems:'flex-end',
     justifyContent:'space-between',
    },
 }));

 const SiteTitle = styledMui(Typography)(({ theme }) => ({
   fontWeight:'bold',
   letterSpacing:1.5,
   color:"white",
  }
));




const useStyles = makeStyles({
    menuOption:{
        padding:5
    },
    menuBox:{
        display:'flex',
        flexDirection:'column'
      
   },
   navbar:{
    position:'sticky',
    top:0,
    zIndex:10,
    color:'transparent',
    backdropFilter:"blur(20px)"
   
   },
   active:{
    backgroundColor:'#006431',
    
   },
   menuOption:{
    color:'#707173'
   },
   menuOptionActive:{
    color:'#fff'
   },
   sidebarLink:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
   }

})

const MenuSub = ({item,handleClick}) => {

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav && handleClick}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  )
}


function Navbar() {
  const [navbar,setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 

  const [state,setState] = useState({
    toggleMenu:false,
    toggleMenuOpen:false
  });

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };

    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    const onMouseEnter2 = () => {
      if (window.innerWidth < 960) {
        setDropdown2(false);
      } else {
        setDropdown2(true);
      }
    };

    const onMouseLeave2 = () => {
      if (window.innerWidth < 960) {
        setDropdown2(false);
      } else {
        setDropdown2(false);
      }
    };

  const {toggleMenu,toggleMenuOpen} = state;
  const classes = useStyles();


  const apropos = [
    {
      _id:1,
      title: 'Missions & Valeurs',
      path: '/a-propos/missions-et-valeurs',
    },
    {
      _id:2,
      title: 'Messages de nos Leaders',
      path: '/a-propos/messages-de-nos-leaders',
    },
    {
      _id:3,
      title: 'Équipe Dirigeante',
      path: '/a-propos/equipe-dirigeante',
    },
   
    
  ]

  const activites = [
    {
       _id:1, 
      title: 'Projet MIAMEZ',
      path: '/nos-activites/projet-miamizez', 
   },
  {
    _id:2,
    title: 'Projet MEBAGA',
    path: '/nos-activites/projet-mebaga',
  },
  {
      _id:3,
      title: 'Projet MINKIE',
      path: '/nos-activites/projet-minkie',
    
  },
  {
       _id:4,
      title: 'Projet MARBRE DOUSSEOUSSOU',
      path: '/nos-activites/projet-marbre-dousseoussou',
     
  }
  
  
] 

  const displayToggleMenu = () => {
   
    const handleToggleMenuOpen = () =>  setState((prevState) =>
          ({...prevState,toggleMenuOpen:true}))
     

    const handleToggleMenuClose = () =>  setState((prevState) =>
          ({...prevState,toggleMenuOpen:false}))
        

    return(
        <ToolBar
        >
                <IconButton
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                    style={{
                        color:'white',
                        display:'flex',
                        justifyContent:'flex-start'
                    }}
                >
               
                   <MenuIcon fontSize='large' sx={{color:'#707173'}} />
                </IconButton> 
                <Drawer
                    {...{
                        anchor:'left',
                        open:toggleMenuOpen,
                        onClose:handleToggleMenuClose
                    }}
                   
                >
                   
                   
                         <Box>
                         {MenuItems.map((item, index) => {
                          return <MenuSub handleClick={handleClick} item={item} key={index} />;
                          })
                        }

                            {/*<MenuItem
                              component="button"
                              variant="body1"
                              to='/'
                            >
                              <MenuOptionToggle to="/" >
                                  Accueil
                              </MenuOptionToggle>
                              
                            </MenuItem>
                            <MenuItem
                                component="button"
                                variant="body1"
                                to='/a-propos'
                            >
                               <MenuOptionToggle to="/a-propos" onClick={handleClick}>
                                   À propos
                                   {dropdown && <Submenu items={apropos} />}
                              </MenuOptionToggle>
                               
                            </MenuItem>
                           
                            <MenuItem
                            component="button"
                            variant="body1"
                              to='nos-activites'
                            >
                               <MenuOptionToggle to="/nos-activites" onClick={handleClick}>
                                  Nos activités
                              </MenuOptionToggle>
                               
                            </MenuItem>
                            <MenuItem
                            component="button"
                            variant="body1"
                            to="investisseurs"
                            
                            >
                              <MenuOptionToggle to="/investisseurs" onClick={handleClick}>
                                 Investisseurs
                              </MenuOptionToggle>
                               
                            </MenuItem>
                            <MenuItem
                             component="button"
                             variant="body1"
                             to="redaction"
                            >
                               <MenuOptionToggle to="/redaction" onClick={handleClick}>
                                  Redaction
                              </MenuOptionToggle> 
                              
                            </MenuItem>
                            <MenuItem
                            component="button"
                            variant="body1"
                            to="contact"
                            
                            >
                              <MenuOptionToggle to="/contact" onClick={handleClick}>
                                   Contact
                              </MenuOptionToggle> 
                               
                            </MenuItem>*/}
                       
                       
                        </Box>
                            
                 
                </Drawer>
               
            </ToolBar>
    )
 }
  

  const displayLargeMenu = () => {

    return(
        <ToolBar>

        <ContainerLogo>
            <LogoLink
              to="/"
            >
              <LogoImg  src={Logo} />
            </LogoLink>
        </ContainerLogo>
        <MenuBox  >
            
           
              <MenuOption
                component="button"
                variant="body1"
                  to='/'
                className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }
              >
                  Accueil
              </MenuOption>
          
                <MenuOption
                    component="button"
                    variant="body1"
                    to="/a-propos"
                    className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                  À propos
                  {dropdown && <Submenu items={apropos} />}
                </MenuOption>
               
           
           
             
            <MenuOption
              component="button"
              variant="body1"
              to="nos-activites"
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
              className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }
            >
                Nos Activités
                {dropdown2 && <Submenu items={activites} />}
            </MenuOption>

            <MenuOption
              component="button"
              variant="body1"
              to="investisseurs"
              className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }
            >
               Investisseurs
            </MenuOption>
            <MenuOption
              component="button"
              variant="body1"
              to="redaction"
              className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }
            >
               Redaction
            </MenuOption>
            <MenuOption
              component="button"
              variant="body1"
              to="contact"
              className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }
            >
               Contact
            </MenuOption>
        </MenuBox>
        <MenuBox>
           <MenuItem sx={{width:20}} className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }>
             <IconButton>
                <Facebook className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }/>
             </IconButton>
           </MenuItem>
           <MenuItem sx={{width:20}} className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }>
             <IconButton>
                <LinkedIn className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }/>
             </IconButton>
           </MenuItem>
           <MenuItem sx={{width:20}} >
             <IconButton >
                <span style={{fontSize:20}} className={navbar ? clsx(classes.menuOption,classes.menuOptionActive) : classes.menuOption }>En</span>
             </IconButton>
           </MenuItem>
        </MenuBox>
    </ToolBar>
    )
   
 }

  const changeBackground = () => {
       if(window.scrollY >= 80) {
        setNavbar(true)
      
       }else{
        setNavbar(false)
       }
  }

  useEffect(() => {
    const setResponsiveness = () => {
        return window.innerWidth < 960
         ? setState((prevState) => ({...prevState,toggleMenu:true}))
         : setState((prevState) => ({...prevState,toggleMenu:false}));

    }
    setResponsiveness();
    window.addEventListener('resize',()=>setResponsiveness());
  }, [])

  window.addEventListener('scroll',changeBackground)
  

  return (
    <div  className={navbar ? clsx(classes.navbar,classes.active) : classes.navbar } >
      <Container>
       
            {toggleMenu ? displayToggleMenu() : displayLargeMenu()} 
      
       
      </Container>
    </div>
  )
}

export default Navbar