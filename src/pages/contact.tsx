import { Box, Center, Heading, HStack, Input, Text, Textarea, VStack, useToast, Spinner } from "@chakra-ui/react";
import React, { useState, useCallback, useEffect } from "react";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "../components/map";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../design/ctheme";
import Submit from "../api/contact";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface A {
  name: string;
  mail: string;
  subject: string;
}


const Contact = () => {
  const [inputs, setInputs] = useState<A>({ name: "", mail: "", subject: "" });
  const [textarea, setTextarea] = useState("");
  const toast = useToast();
  const [spinner, setSpinner] = useState(false);
  const {executeRecaptcha} = useGoogleReCaptcha();
  
  const Toast = (status:any, title:any) => {
    return toast({
      title: title,
      status: status,
      duration: 4000,
      isClosable: true,
    });
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(event.target.value);
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    setSpinner(true)
    event.preventDefault();
    if (!executeRecaptcha) {
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      Submit(inputs,textarea,gReCaptchaToken).then((res) => res.json()).then((msg) =>{
        setSpinner(false)
        if(msg.error){
          Toast("error",msg.error)
        }
        else{
          setInputs({name:"",mail:"",subject:""})
          setTextarea("")
          Toast("success","Message sent successfully!")}
      })
      .catch((error) => {
        setSpinner(false)
        Toast("error","Unable to send the message, Please Check Your Network!")
      })
    });
  }

  return (
    <ChakraProvider theme={Theme}>
    <Box mt="6rem" ml={[10,20,125,170]}>
        <Text color="#2F3980" fontWeight="bold" fontSize={[40,50,60]}> 
          Contact
        </Text>
        <Text ml={1} mt={-2} fontSize={[20,30]} >
          GET IN TOUCH
          <span style={{letterSpacing:"-10px", color:"#2F3980", marginLeft:"10px"}}>
            &#x2015;&#x2015;&#x2015;&#x2015;&#x2015;
          </span>
        </Text>
        <Text color="#17205F" width="65vw" mt={25} ml={6} mb={18}>Please get in touch and our expert support team will answer all your questions.</Text> 
    </Box>
    <Box>
    <Center>
    <Map />
    </Center>
    <Center mt={20} mb={10}>
    <HStack>
      <Heading display={{base:"none", md:"block" }} transform="rotate(-90deg)" width={250} fontWeight={400} fontSize="45px" textAlign="center" color="#2F3980" lineHeight="45px" >Send us an <Text fontWeight={700}>Email</Text></Heading>
      <form onSubmit={handleSubmit}>
        <VStack>
        <Heading display={{base:"block", md:"none"}} fontWeight={400} fontSize="30px" textAlign="center" color="#2F3980" lineHeight="35px" >Send us an <Text fontWeight={700}>Email</Text></Heading>
        <Input
          placeholder="Your Name..."
          type="text"
          name="name"
          _placeholder={{color:"#2F3980", fontWeight:"300"}}
          value={inputs.name || ""}
          onChange={handleChange}
          backgroundColor="#D0D6FF"
          height={10}
          width={[220,300,400,400]}
        />
        <Input
          placeholder="Your Email..."
          type="text"
          name="mail"
          _placeholder={{color:"#2F3980", fontWeight:"300"}}
          value={inputs.mail || ""}
          onChange={handleChange}
          backgroundColor="#D0D6FF"
          width={[220,300,400,400]}
        />
        <Input
          placeholder="Subject..."
          type="text"
          name="subject"
          _placeholder={{color:"#2F3980", fontWeight:"300"}}
          value={inputs.subject || ""}
          onChange={handleChange}
          backgroundColor="#D0D6FF"
          height={65}
          width={[220,300,400,400]}
        />
        <Textarea
          placeholder="Message..."
          value={textarea}
          _placeholder={{color:"#2F3980", fontWeight:"300"}}
          onChange={handleTextArea}
          backgroundColor="#D0D6FF"
          height={150}
          width={[220,300,400,400]}
        />
        {spinner===true? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' /> : 
        <Input borderRadius={25} width={150} cursor="pointer" alignSelf="flex-end" backgroundColor="#2F3980" color="white" type="submit" value="Send Message" />}
        </VStack>
      </form>
    </HStack>
    </Center>
    <Center mt={15} mb={15}>
    <VStack>
      <HStack borderWidth="1px" borderColor="rgba(8,17,79,0.33)" borderTop="none" borderLeft="none" borderRight="none" pr={[0,0,10]} >
      <Box width={[65,130,220]} height={85} textAlign="center" pt={30} borderColor="rgba(8,17,79,0.33)" borderWidth="1px" borderTop="none" borderLeft="none" borderBottom="none"><FontAwesomeIcon color="#2F3980" icon={faLocationDot} size="2x"></FontAwesomeIcon></Box>
      <Text width={[255,320,400]} pl={[5,5,10]} color="#000B56">Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab 144011</Text>
      </HStack>
      <HStack borderWidth="1px" borderColor="rgba(8,17,79,0.33)" borderTop="none" borderLeft="none" borderRight="none" pr={[0,0,10]} >
      <Box width={[65,130,220]} height={85} textAlign="center" mt={-2} pt={30} borderColor="rgba(8,17,79,0.33)" borderWidth="1px" borderTop="none" borderLeft="none" borderBottom="none"><FontAwesomeIcon color="#2F3980" icon={faPhone} size="2x"></FontAwesomeIcon></Box>
      <Text width={[255,320,400]} pl={[5,5,10]} color="#000B56">(+91) 88247 44414</Text>
      </HStack>
      <HStack pr={[0,0,10]} >
      <Box width={[65,130,220]} height={85} textAlign="center" mt={-2} pt={30} borderColor="rgba(8,17,79,0.33)" borderWidth="1px" borderTop="none" borderLeft="none" borderBottom="none"><FontAwesomeIcon color="#2F3980" icon={faEnvelope} size="2x"></FontAwesomeIcon></Box>
      <Text width={[255,320,400]} pl={[5,5,10]} color="#000B56">saurabharya2421@gmail.com</Text>
      </HStack>
    </VStack>      
    </Center>
    </Box>
    </ChakraProvider>
  );
};


export default Contact;