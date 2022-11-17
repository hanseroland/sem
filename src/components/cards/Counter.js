import React, { useState,useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { CircularProgress, Paper } from '@mui/material'
import styled from 'styled-components'


const ContainerCard = styled.div`
    
`


const CounterWrap = styled.div`
    
`

const DetailWrap = styled.div`
    
`

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress color='success'  size={100} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" component="div" color="text.secondary">
             {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function CounterCard({value,icon,title,subtitle}) {

  const [progress, setProgress] = useState(value);

  useEffect(() => {
    const timer = setInterval(()=>{
      setProgress((prevProgress)=>(prevProgress >= 4 ? 0 : prevProgress + 1));
    },800)
    return ()=>{
      clearInterval(timer)
    }
  }, []);

  return (
    <ContainerCard>
         
          <CircularProgressWithLabel  value={progress} />

    </ContainerCard>
  )
}

export default CounterCard