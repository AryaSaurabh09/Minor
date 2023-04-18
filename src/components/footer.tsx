import {
  Center,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../design/ctheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <ChakraProvider theme={Theme}>
    <Container
      maxW="container.8xl"
      bgGradient="linear(#000424 55.25%, #2F3980 100%)"
    >
      <VStack pt={10} minHeight="40vh">
        <Container maxW="container.md" textAlign="center" centerContent>
          <Image src="/profnitt_logo.png" htmlHeight={80} htmlWidth={140} />
          <Text pt={5} fontSize="xl" color="#8288B3">
            The Finance and Investments Club
          </Text>
          <Text fontSize="xl" color="#8288B3">
            of NIT Trichy
          </Text>
        </Container>
        <HStack>
          {/* <a href="" className="facebook" style={{margin:"15px",color:"rgba(255, 255, 255, 0.4)"}}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a> */}
          <a href="https://www.instagram.com/profnitt/?hl=en" target="_blank" className="instagram" style={{margin:"15px",color:"rgba(255, 255, 255, 0.4)"}}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/company/profnitt/" target="_blank" className="linkedin" style={{margin:"15px",color:"rgba(255, 255, 255, 0.4)"}}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </HStack>
      </VStack>
      <Center><Text pb={10} color={"#FFFFFF"}>Weaved with 🕸️ by Spider</Text></Center>
    </Container>
    </ChakraProvider>
  );
};

export default Footer;
