import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {makeStyles} from '@mui/styles'
import clsx from 'clsx';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
    dropdownMenu:{
        background:"white",
        width:220,
        position: "absolute",
        top: "20px",
        textAlign: "start",
        zIndex:10,
        display: "block",
        boxShadow:" 0px 10px 10px -5px rgba(0, 0, 0, 0.3)"
    },
    clicked:{
        display: "none",
    },
    dropdownLink:{
         color:" #707173",
        '&:hover' : {
            background:'#006431',
            color:" #707173",
          },
    }

})

export const NavItem = styled(Link)`
  text-align:center;
  transition: "0.3s";
  color:#707173;
  text-decoration:none;
  font-size:12px;

  &:hover {
    color:#006431;
   }

`;

export default function Submenu({items}) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const classes = useStyles();
 

  return (
      
        <MenuList   
          onClick={handleClick}
          className= {click ? clsx(classes.dropdownMenu,classes.clicked) : classes.dropdownMenu }
        >
        {
          items.map((item)=>(
            <MenuItem  
              onClick={() => setClick(false)}
              className={classes.dropdownLink}
              key={item._id}
              >
                <NavItem to={item.path} >
                   {item.title}
                </NavItem>
                   
            </MenuItem>
          ))
        }
         

        </MenuList>
      
  );
}