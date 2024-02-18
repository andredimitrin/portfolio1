import React from 'react'
import { motion } from 'framer-motion';

//import global styles
import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer, 
    Button,

    } from "../styles/Global.styled";

//import footer styled
import {
    ContactForm,
    FormLabel,
    FormInput,

} from "../styles/Footer.styled";

import { fadeInBottomVariant } from '../utils/Variants';

const Footer = () => {
    return (
    <PaddingContainer
        id='Contact'
        top="5%"
        bottom="10%"
    >
        <motion.div
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4" align="center">
                    CONTATO
                </Heading>
            </motion.div>

            <motion.div
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h2" size="h2" align="center" top="0.5rem">
                    Entre<BlueText> em contato</BlueText>
                </Heading>
            </motion.div>

        <PaddingContainer top='3rem'>
            <FlexContainer justify='center'>

                <ContactForm
                    as={motion.form}
                    variants={fadeInBottomVariant}
                    initial="hidden"
                    whileInView="visible"
                    
                >

                    <PaddingContainer bottom='2rem'>
                        <FormLabel>Nome:</FormLabel>
                        <FormInput
                            type="text"
                            placeholder="Seu Nome"
                        >
                        </FormInput>
                    </PaddingContainer>

                    <PaddingContainer bottom='2rem'>
                        <FormLabel>Email:</FormLabel>
                        <FormInput
                            type="email"
                            placeholder="Seu Email"
                        >
                        </FormInput>
                    </PaddingContainer>

                    <PaddingContainer bottom='2rem'>
                        <FormLabel>Mensagem:</FormLabel>
                        <FormInput
                            as="textarea"
                            placeholder="Escreva sua mensagem" 
                        >
                        </FormInput>
                    </PaddingContainer>

                    <FlexContainer justify='center'
                    responsiveFlex
                    >
                        <Button>Enviar Mensagem</Button>
                    </FlexContainer>

                </ContactForm>


            </FlexContainer>
        </PaddingContainer>

    </PaddingContainer>

    )
}

export default Footer