import React from 'react';
import { Box, Button, Icon, Image, Text } from '@chakra-ui/react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Contact from './Contact';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export const Footer = () => {
    return (
        <>
            <Contact />
            <Box display="flex" justifyContent={{base:"justify" , md:"space-around"}} p="20px" flexDirection={{base:"column", md:"row"}} bgColor="#f1f3f4" >
                <Box alignSelf={{base:"justify",md:"center"}}>
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <Image alt="logo" src="./logo.png" boxSize={32} />
                        <Box display="flex" flexDirection="column" alignItems="justify" justifyContent="justify">
                            <Text fontFamily="Copperplate Gothic Bold" fontWeight="700" fontSize="21px">
                                ExpertPLM Technologies
                            </Text>
                            <Text fontSize="12px">We Build PLM experts</Text>
                        </Box>
                    </a>
                </Box>
                <Box fontFamily='arial' mt={5}>
                    <p className="h5 mb-4" style={{ fontWeight: '600' }} >
                        ExpertPLM Technologies
                    </p>
                    <Box display="flex" flexDir="column" >
                    <ScrollLink to="home" smooth={true} duration={500}>
                        <Box  cursor="pointer">
                            Home
                        </Box>
                    </ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        <Box  cursor="pointer">
                            About Us
                        </Box>
                    </ScrollLink>
                    <ScrollLink to="footer" smooth={true} duration={500}>
                        <Box  cursor="pointer">
                            Contact
                        </Box>
                    </ScrollLink>
                        <Box as="a" href="/" cursor="pointer">
                            Download Brochure
                        </Box>
                    </Box>
                </Box>
                <Box fontFamily='arial' mt={5}>
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Further Information
                    </p>
                    <Box display="flex" flexDir="column">
                        <Box as="a" href="/" cursor="pointer">
                            Terms & Condition
                        </Box>
                        <Box as="a" href="/" cursor="pointer">
                            Privacy Policy
                        </Box>
                    </Box>
                </Box>
                <Box fontFamily='arial' mt={5}>
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Follow Us
                    </p>
                    <Box display="flex" flexDir="column" justifyContent={{base:"justify", md:"center"}} alignItems={{base:"justify", md:"center"}} >
                        <a href="https://www.linkedin.com/in/expertplm-technologies/"><Box display="flex" alignItems="center" flexDirection="row" width="100%" mt={2} >
                            <Icon as={FaLinkedinIn} w={{ base: 5, md: 5 }} h={{ base: 5, md: 5 }} mr={2} />
                            <Text fontSize={{ base: "15px", md: "18px" }} >
                                Linkedin
                            </Text>

                        </Box>
                        </a>
                        <a href="https://www.instagram.com/expertplm_technologies_pune?igsh=enZrMGNuNTdsbXpm"><Box display="flex" alignItems={{base:"justify", md:"center"}} justifyContent={{base:"justify", md:"center"}} ml={{base:0, md:2}} flexDirection="row" width="100%" mt={2} >
                            <Icon as={FaInstagram} w={{ base: 5, md: 5 }} h={{ base: 5, md: 5 }} color="black" mr={2} />
                            <Text fontSize={{ base: "15px", md: "18px" }} >
                                Instagram
                            </Text>

                        </Box>
                        </a>
                        <a href="//youtube.com/@expertplmtechnologies5163?si=CZ5i40SROr6doud1"><Box display="flex" alignItems="center" flexDirection="row" width="100%" mt={2}>
                            <Icon as={FaYoutube} w={{ base: 5, md: 5 }} h={{ base: 5, md: 5 }} mr={2} />
                            <Box>
                                <Text fontSize={{ base: "15px", md: "18px" }} >
                                    Youtube
                                </Text>
                            </Box>
                        </Box>
                        </a>
                    </Box>
                </Box>
            </Box>
            {/* <small className="text-center mt-5">&copy; Devwares, 2024. All rights reserved.</small> */}
        </>

    );
};

export default Footer;