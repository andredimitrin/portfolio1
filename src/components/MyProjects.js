import React from 'react'
import { motion } from 'framer-motion';

//import global styles

import {
    PaddingContainer,
    Heading,
    BlueText,

} from '../styles/Global.styled'

import { projectDetails } from '../utils/Data';
import Project from '../components/layouts/Project';
import { fadeInTopVariant } from '../utils/Variants';

const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"

    >
       <motion.div
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading size="h4" align="left">
                    MEUS PROJETOS
                </Heading>
            </motion.div>

            <motion.div
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading size="h2" align="left">
                    O que eu <BlueText>construi</BlueText>
                </Heading>
            </motion.div>

        {projectDetails.map((project)=> (
        <PaddingContainer key={project.id} top='5rem' bottom='5rem'>
            <Project data={project}/>
        </PaddingContainer>        
        ))}

    </PaddingContainer>
  )
}

export default MyProjects