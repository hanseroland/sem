import * as React from 'react';
import { emphasize } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link,useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import Home from '@mui/icons-material/Home';



const BreadLink = styled(Link)`
    background-color:#fff ;
    text-decoration:none ;
    color:#707173;
    padding:5px;
    font-size:14px ;
    border-radius:10px ;
    display:flex ;
    color:#006431;
`;

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb() {

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);
    const history = [];
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        
         {pathnames.length > 0 ? (
            <BreadLink to="/" onClick={() => history.push("/")}> <Home fontSize='small' /> <span>Accueil</span> </BreadLink>
            ) : (
            <Typography style={{}} > Accueil </Typography>
         )}
         {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
            <Typography color="white" key={name}>{name}</Typography>
            ) : (
            <BreadLink  to={routeTo} key={name} onClick={() => history.push(routeTo)}>
                {name}
            </BreadLink>
            );
        })}
      </Breadcrumbs>
    </div>
  );
}
