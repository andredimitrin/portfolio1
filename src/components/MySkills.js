import React from "react";
import { motion } from 'framer-motion';

//import global styles

import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../styles/Global.styled";

//import My skills styles
import { SkillsCardContainer, SkillCard } from "../styles/MySkills.styled";
import { Skills } from "../utils/Data";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
  return (
    <PaddingContainer
     id="Skills" 
     top="10%"
     bottom="10%"
     responsiveLeft="1rem"
     responsiveRight="1rem"
     >
      <FlexContainer
       responsiveFlex
       responsiveDirection="column-reverse"
       fullWidthChild={true}>

        {/* left section */}
        <SkillsCardContainer
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        >
          {Skills.map((skill) => (
            <SkillCard>
              <IconContainer
                size="5rem"
                color="blue"
                style={{ textAlign: "center" }}
              >
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4" style={{ textAlign: "center" }}>
                {skill.tech}
              </Heading>
            </SkillCard>
          ))}
        </SkillsCardContainer>
        {/* right section */}
        <motion.div
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        >
          <Heading as="h4" size="h4">
            Minhas Habilidades
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem"> 
            <BlueText>Profissionais</BlueText>
          </Heading>

          <ParaText top="2rem" bottom="1.5rem">
            Sou um desenvolvedor Full Stack apaixonado por tecnologia, com
            experiência em desenvolvimento de software e habilidades em Node.js,
            Express, bancos de dados (MySQL, Sequelize, MongoDB) e REST APIs.
            Adaptável a ambientes ágeis, tenho habilidades comprovadas na
            resolução eficiente de problemas e aprendizado rápido. Estou pronto
            para contribuir para o sucesso da equipe em projetos desafiadores.
          </ParaText>
          <ParaText top="2rem" bottom="1.5rem">
            Tenho habilidades para construir projetos escaláveis e realizar a
            manutenção de sistemas de forma eficiente. Com um olhar crítico e
            analítico, busco identificar oportunidades de melhoria que podem
            fazer a diferença na sua empresa. Estou pronto para contribuir em
            projetos desafiadores e agregar valor à equipe.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
