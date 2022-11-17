import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {makeStyles} from '@mui/styles'
import clsx from 'clsx';


const useStyles = makeStyles({
    dropdownMenu:{
        background:"white",
        width: "100%",
        position: "absolute",
        top: "20px",
        textAlign: "start",
        zIndex:999,
        display: "block"
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
                    {item.title}
            </MenuItem>
          ))
        }
         

        </MenuList>
      
  );
}