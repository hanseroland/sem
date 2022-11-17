import React from 'react'
import { Parallax, Background } from 'react-parallax';

function ParallaxSection(img,children) {
  return (
   
         <Parallax
                bgImage={img}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            width: percentage * 500,
                            height: percentage * 500,
                        }}
                    />
                )}
            >
                <p>...Content</p>
            </Parallax>
  
  )
}

export default ParallaxSection