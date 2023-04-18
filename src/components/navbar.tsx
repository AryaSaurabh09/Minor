import React, {useState} from "react";
import { Image, Box, Flex, Stack } from "@chakra-ui/react";
import {  Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../design/ctheme";


type A = (toggle:any , isOpen:boolean) => React.ReactElement
type B = (children:any, to:string) => React.ReactElement 
const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ChakraProvider theme={Theme}>
    <NavBarContainer>
      <Image src="/profnitt_logo.png" ml={10} htmlHeight={40} htmlWidth={70} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks toggle={toggle} isOpen={isOpen} />
    </NavBarContainer>
    </ChakraProvider>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle: A = ({ toggle , isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};


const MenuLinks: A = ({ toggle , isOpen }) => {
  const [currentLink, setCurrentLink] = useState('');
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={5}
        align="center"
        justify={["center", "center", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Link to="/" style={currentLink==="home"?{color:"white"}:{color:"#C8CFFF"}} onClick={()=>{setCurrentLink("home");toggle()}}>Home</Link>
        <Link to="/about" style={currentLink==="about"?{color:"white"}:{color:"#C8CFFF"}} onClick={()=>{setCurrentLink("about");toggle()}}>About</Link>
        <Link to="/events" style={currentLink==="events"?{color:"white"}:{color:"#C8CFFF"}} onClick={()=>{setCurrentLink("events");toggle()}}>Events</Link>
        <Link to="/members" style={currentLink==="members"?{color:"white"}:{color:"#C8CFFF"}} onClick={()=>{setCurrentLink("members");toggle()}}>Members</Link>
        <Link to="/projects" style={currentLink==="projects"?{color:"white"}:{color:"#C8CFFF"}} onClick={()=>{setCurrentLink("project");toggle()}}>Projects</Link>
        <Link to="/contact" style={currentLink==="contact"?{color:"white"}:{color:"#C8CFFF"}} onClick={()=>{setCurrentLink("contact");toggle()}}>Contact</Link>
        <Box></Box>
      </Stack>
    </Box>
  );
};

const NavBarContainer: B = ({ children }) => {
  return (
    <Flex
      as="nav"
      zIndex={200}
      top="0"
      align="center"
      justify="space-between"
      wrap="wrap"
      position="fixed"
      w="100%"
      p={3}
      pb={4}
      bgGradient="linear(#2F3980 0%, #000424 72.92%)"
      color="#C8CFFF"
    >
      {children}
    </Flex>
  );
};

export default NavBar;