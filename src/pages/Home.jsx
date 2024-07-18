import React from 'react';
import { Box, Text, VStack, Checkbox, extendTheme, Button, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FiDownload } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";



const Home = ({ onOpen }) => {
    return (
        <Box
            position="relative"
            bg="white"
            color="black"
            fontFamily="GT Sectra Fine"
            // fontWeight="600" 
            backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./plm12.png')" // Path to your background image
            backgroundSize="contain,100% 100%,100% 100%"
            backgroundPosition="cover"
            height={{ base: "100vw", md: "40vw"}}
            backgroundRepeat="no-repeat"

        >
            <Box color="white" display='flex' justifyContent={{ base: "center", md: "center" }} gap={28}>
                <Box padding={{ base: "10px", md: "20px" }} mt={{base:32, md:56}}  >
                    {/* <Text p={2} textAlign="center" bgColor="rgba(34, 34, 34, .5)" width={{ base: "40%", md: "20%" }} ml={{ base: "80px", md: "0px" }}>BATCH 3</Text> */}
                    {/* Programme in Data Science and Artificial Intelligence */}
                    <Text textAlign={{ base: "center", md: "center" }} fontSize={{ base: "1.2rem", md: "2.625rem" }} fontFamily="Copperplate Gothic Bold" fontWeight="700" lineHeight="120%">Siemens Authorised</Text>
                    <Text textAlign={{ base: "center", md: "center" }} fontSize={{ base: "1.2rem", md: "2.625rem" }} fontFamily="Copperplate Gothic Bold" fontWeight="700" lineHeight="120%">Teamcenter PLM Training Partner</Text>
                    <VStack flexDirection={{base:"column", md:"row"}}  alignItems="center" mt="8px" gap={{base:4 , md:20}} justifyContent="center">
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Get Started
                        </Button>
                        <Button
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            How It Works
                        </Button>
                    </VStack>
                </Box>

            </Box>

        </Box>
    );
};


export default Home;
