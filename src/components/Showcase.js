import React from "react";
import { motion } from 'framer-motion';

//import Global Styles
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";
import {
  ShowcaseParticleContainer,
  ShowCaseImageCard,
  Particle,
} from "../styles/Showcase.styled";

//import react icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

//import assets
import ShowcaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () => {
  return (
    <PaddingContainer
     id="Home"
      left="3%"
       right="10%"
        top="18%" 
        bottom="10%"
         responsiveLeft='1rem'
          responsiveRight='1rem'
          responsiveTop='8rem'
          
          >
      <FlexContainer align="left" fullWidthChild={true}>
        {/* left Content */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"

        >
          <Heading as="h4" size="h4">
            Olá!
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            Eu sou <BlueText>André E. Dimitrin</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            Eu sou <BlueText>Desenvolvedor Full Stack</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            André E. Dimitrin, desenvolvedor FullStack em início de carreira,
            buscando oportunidades para crescer e contribuir. Determinado a
            dominar o desenvolvimento de software e pronto para enfrentar
            desafios. Vamos criar algo incrível juntos!
          </ParaText>

          {/*--Social Icons--*/}

          <FlexContainer gap="20px" responsiveFlex>
            {/* Adicione os links para LinkedIn e GitHub */}
            <a href="https://www.linkedin.com/in/andredimitrin/" target="_blank" rel="noopener noreferrer">
              <IconContainer color="white" size="1.5rem">
                <BsLinkedin />
              </IconContainer>
            </a>
            
            <a href="https://github.com/andredimitrin" target="_blank" rel="noopener noreferrer">
              <IconContainer color="white" size="1.5rem">
                <BsGithub />
              </IconContainer>
            </a>
          </FlexContainer>
        </motion.div>

        {/*--Right Content--*/}
        <FlexContainer
        as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView='visible'
        justify="flex-end">
          <ShowcaseParticleContainer>
            <ShowCaseImageCard>
            <img src={ShowcaseImg} alt="Showcase" />
            </ShowCaseImageCard>

            <Particle
              as={motion.img}
              animate={{
                x:[0, 100, 0],
                rotate:360,
                scale:[1, 0.5, 1],
              }}
              transition={{
                duration:20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />

            <Particle
            as={motion.img}
            animate={{
              y:[0, 100, 0],
              rotate:360,
              scale:[1, 0.8, 1],
            }}
            transition={{
              duration:18,
              repeat: Infinity,
            }}
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />

            <Particle
            as={motion.img}
            animate={{
              y:[0, -100, 0],
              rotate:360,
              scale:[1, 0.9, 1],
            }}
            transition={{
              duration:15,
              repeat: Infinity,
            }}
              src={BackgroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
