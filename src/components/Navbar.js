import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import global styled

import {
  PaddingContainer,
  FlexContainer,
  Container,
  BlueText,
} from "../styles/Global.styled";

//imprt navbar styled
import { NavbarContainer, Logo, MenuIcon } from "../styles/Navbar.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "../utils/Theme";
import NavMenu from "../components/layouts/NavMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    //onScroll function
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);    }

    window.addEventListener('scroll', onScroll);

    //clean up
    return () => window.removeEventListener('scroll', onScroll);    

  }, []);

  return (
    <NavbarContainer
      bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
       top="1rem"
       bottom="1.2rem"
       responsiveFlex="1rem"
       responsiveRight="1rem"
       >
        <Container>
          <FlexContainer
           justify="space-between"
           responsiveFlex>


            {/* left logo */}

            <Logo>
              DimiCode <BlueText>Solutions</BlueText>
            </Logo>
            {/* right hamburger menu */}
            <MenuIcon
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>


        <AnimatePresence> 
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
