import { useState } from 'react';
import { Box, Flex, Text, IconButton, VStack, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar({ onOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const underlineStyle = {
        position: 'relative',
        display: 'inline-block',
        backgroundImage: 'linear-gradient(to right, #0094FF 0%, #6FEBA8 83.4%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 0.2em',
        backgroundPosition: '0 108%',
        transition: 'background-size 0.25s ease-in-out',
    };


    return (
        <>
            <Flex
                alignItems="center"
                p="2"
                bg="#FFF"
                justifyContent="space-between"
                top={0}
                left={0}
                right={0}
                zIndex={1000}
                position="sticky"
               
                // top="0"
                boxShadow="md"
                bgColor="transparent"
                backgroundImage="linear-gradient(to top left, #CAF4FF, transparent), linear-gradient(to top right, white, transparent)"
                backgroundSize="cover"
                backgroundBlendMode="screen"
            >
                <Link to="/">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Image src="./logo.png" boxSize={20} alt="logo" />
                        <Box display="flex" flexDirection="column" alignItems="justify" justifyContent="justify">
                            <Text fontFamily="Copperplate Gothic Bold" fontWeight="700"  fontSize="21px">
                                ExpertPLM Technologies
                            </Text>
                            <Text fontSize="14px">We Build PLM experts</Text>
                        </Box>
                    </Box>
                </Link>
                <IconButton
                    display={{ base: 'block', md: 'none' }}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="25px" />}
                    onClick={toggleMenu}
                    variant="simple"
                    aria-label="Toggle Menu"
                />
                <Box
                    pos="absolute"
                    top="90px"
                    left="0"
                    w="100%"
                    bg="gray.100"
                    zIndex="1"
                    boxShadow="md"
                    display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
                >
                    <VStack spacing={4} align="stretch" p="4">
                        <ScrollLink to="home" smooth={true} duration={500} offset={-60}>
                            <Text variant="simple" _hover={underlineStyle} fontWeight="500">
                                Home
                            </Text>
                        </ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={500} offset={-60}>
                            <Text variant="simple" _hover={underlineStyle} fontWeight="500" >
                                About Us
                            </Text>
                        </ScrollLink>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNufT69Qen-fONmrL55eQWUErnL44aNcBCRoxabrabstiWKA/viewform" target="_blank"><Text variant="simple" _hover={underlineStyle} fontWeight="500">
                            Enquiry form
                        </Text></a>
                        {/* <Text variant="simple" _hover={underlineStyle} fontWeight="500">
                            Download Brochure
                        </Text> */}
                        <ScrollLink to="footer" smooth={true} duration={500} offset={-60}>
                            <Text variant="simple" _hover={underlineStyle} fontWeight="500">
                                Contact Us
                            </Text>
                        </ScrollLink>
                    </VStack>
                </Box>

                {/* Desktop */}
                <Box display={{ base: 'none', md: 'flex' }} gap="35px" fontSize="17px" fontWeight="500" cursor="pointer">
                    <ScrollLink to="home" smooth={true} duration={500} offset={-60}>
                        <Text variant="simple" _hover={{ color: 'teal' }}>
                            Home
                        </Text>
                    </ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500} offset={-60}>
                        <Text variant="simple" _hover={{ color: 'teal' }} mr="2">
                            About Us
                        </Text>
                    </ScrollLink>
                   <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNufT69Qen-fONmrL55eQWUErnL44aNcBCRoxabrabstiWKA/viewform" target="_blank"><Text variant="simple" _hover={{ color: 'teal' }} mr="2">
                        Enquiry form
                    </Text></a> 
                    {/* <Text variant="simple" _hover={{ color: 'teal' }} mr="2">
                        Download Brochure
                    </Text> */}
                    <ScrollLink to="footer" smooth={true} duration={500} offset={-60}>
                        <Text variant="simple" _hover={{ color: 'teal' }} mr="2">
                            Contact Us
                        </Text>
                    </ScrollLink>
                </Box>
            </Flex>
        </>
    );
}

export default Navbar;
