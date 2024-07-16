import React from 'react';
import {
    Flex,
    Box,
    Image,
    FormControl,
    InputGroup,
    InputLeftElement,
    FormLabel,
    Input,
    Textarea,
    Button,
    Heading,
    Text,
    Icon
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <Flex p={4} justify="center" backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./c2.jpg')" // Path to your background image
            backgroundSize="contain,100% 100%,100% 100%"
            backgroundPosition="cover"
            // height={{ base: "100vw", md: "40vw" }}
            backgroundRepeat="no-repeat">
            <Flex
                maxW="1200px"
                w="100%"
                justify="center"
                align="center"
                direction={{ base: 'column', md: 'row' }}
                boxShadow="md"
                rounded="lg"
                overflow="hidden"
            // border="2px solid gray"

            >
                {/* Left Side - Image */}
                {/* <Box w={{ base: '100%', md: '50%' }} >
                    <Image
                        src="./c3.png"
                        alt="Contact Image"
                        objectFit="cover"
                        w="100%"
                        h={{ base: 'auto', md: '100%' }}
                    />
                </Box> */}
                <Box color="white" w={{ base: '100%', md: '50%' }} fontFamily="arial" fontSize={{ base: "16px", md: "20px" }} display="flex" gap={10} flexDir="column" >
                    <Text fontSize={{ base: "18px", md: "35px" }}>Contact Us</Text>
                    <Box mt={4}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Icon as={FaPhoneAlt} mr={2} color="teal" fontSize={{ base: "15px", md: "25px" }} />
                            <Box>
                                <Text >Call Us</Text>
                                <Text>+91-9975001439</Text>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Icon as={FaMapMarkerAlt} mr={2} color="teal" fontSize={{ base: "15px", md: "25px" }} />
                            <Box>
                                <Text>Location</Text>
                                <Text>Bavdhan, Pune, Maharashtra</Text>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Icon as={FaClock} mr={2} color="teal" fontSize={{ base: "15px", md: "25px" }} />
                            <Box>
                                <Text>Business Hours</Text>
                                <Text>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* Right Side - Contact Form with Blue Background */}
                <Box w={{ base: '100%', md: '40%' }} m={6} background="transparent" boxShadow="md" border="0.5px solid white" borderRadius="15px" >
                    <FormControl p={4}>
                        <FormLabel color="white">Name</FormLabel>
                        <InputGroup mb={4}>
                            <InputLeftElement
                                pointerEvents="none"
                                m={1}
                                fontSize="lg"
                                children={<FaUser color="gray.400" />}
                            />
                            <Input type="text" size="lg" borderRadius="20px" placeholder="Your name" bg="white" />
                        </InputGroup>

                        <FormLabel color="white">Email</FormLabel>
                        <InputGroup mb={4}>
                            <InputLeftElement
                                pointerEvents="none"
                                m={1}
                                fontSize="lg"
                                children={<FaEnvelope color="gray.300" />}
                            />
                            <Input type="email" size="lg" borderRadius="20px" placeholder="Your email" bg="white" />
                        </InputGroup>

                        <FormLabel color="white">Phone</FormLabel>
                        <InputGroup mb={4}>
                            <InputLeftElement
                                pointerEvents="none"
                                m={1}
                                fontSize="lg"
                                children={<FaPhoneAlt color="gray.300" />}
                            />
                            <Input type="phone" size="lg" borderRadius="20px" placeholder="Your phone" bg="white" />
                        </InputGroup>

                        <FormLabel color="white">Message</FormLabel>
                        <Textarea placeholder="Your message" borderRadius="20px" size="lg" mb={4} bg="white" />

                        <Button bgColor="#003399" variant="simple" width="100%" borderRadius="20px" color="white" type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ContactPage;
