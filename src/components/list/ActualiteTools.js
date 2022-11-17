import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { DateRange } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));



export default function ActualiteTools({item}) {
  return (
    <div>
      <LightTooltip title="">
        <Button sx={{textTransform:"none",color:"#006431"}} variant="text" startIcon={<DateRange />}>{item.date} </Button>
      </LightTooltip>
      <BootstrapTooltip title="">
        <Button sx={{textTransform:"none",color:"#006431"}} variant="text" startIcon={<PersonIcon />}>{item.auteur} </Button>
      </BootstrapTooltip>
    </div>
  );
}