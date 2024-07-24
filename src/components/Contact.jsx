import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    InputGroup,
    InputLeftElement,
    FormLabel,
    Input,
    Textarea,
    Button,
    Text,
    Icon,
    useToast,
    Image
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { ref, push } from 'firebase/database';
import { db } from '../firebaseConfig';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const toast = useToast();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.phone) {
            errors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Phone number is invalid. It should be 10 digits";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        try {
            await push(ref(db, 'contactdetailonweb'), formData);
            toast({
                title: 'Successfully Submitted',
                description: 'Your application has been submitted successfully.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            handleClose();
        } catch (e) {
            toast({
                title: 'Submission Failed.',
                description: 'There was an error submitting your application. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleClose = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setErrors({});
    };

    return (
        <Flex p={4} justify="center" backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./c2.jpg')"
            backgroundSize="contain,100% 100%,100% 100%"
            backgroundPosition="cover"
            backgroundRepeat="no-repeat">
            <Flex
                maxW="1200px"
                w="100%"
                justify="center"
                align="center"
                direction={{ base: 'column', md: 'row' }}
                // boxShadow="md"
                rounded="lg"
                overflow="hidden"
            >
                <Box color="white" w={{ base: '100%', md: '50%' }} fontFamily="arial" fontSize={{ base: "16px", md: "20px" }} display="flex" gap={10} flexDir="column" >
                    <Text fontSize={{ base: "18px", md: "35px" }}>Contact Us</Text>
                    <Box mt={4}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Icon as={MdContactPhone} mr={2} color="teal" fontSize={{ base: "15px", md: "25px" }} />
                            <Box>
                                <Text>Call Us</Text>
                                <Text>+91-9975001439/7387501439</Text>

                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Icon as={MdEmail} mr={2} color="teal" fontSize={{ base: "15px", md: "25px" }} />
                            <Box>
                                <Text>Email Us</Text>
                                <Text>info@expertplmtechnologies.com</Text>
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
                                <Text>All Day :- 10 am – 8 pm</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box w={{ base: '100%', md: '35%' }} m={6} background="transparent" boxShadow="md" border="0.5px solid white" borderRadius="15px" >
                    {/* <form onSubmit={handleSubmit}>
                        <FormControl p={3} isInvalid={errors.name}>
                            <FormLabel color="white">Name</FormLabel>
                            <InputGroup >
                                <InputLeftElement
                                    pointerEvents="none"
                                    m={1}
                                    fontSize="lg"
                                    children={<FaUser color="gray.400" />}
                                />
                                <Input
                                    type="text"
                                    size="lg"
                                    borderRadius="20px"
                                    placeholder="Your name"
                                    bg="white"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                            {errors.name && <Text color="red.500">{errors.name}</Text>}
                        </FormControl>

                        <FormControl p={3} isInvalid={errors.email}>
                            <FormLabel color="white">Email</FormLabel>
                            <InputGroup >
                                <InputLeftElement
                                    pointerEvents="none"
                                    m={1}
                                    fontSize="lg"
                                    children={<FaEnvelope color="gray.300" />}
                                />
                                <Input
                                    type="email"
                                    size="lg"
                                    borderRadius="20px"
                                    placeholder="Your email"
                                    bg="white"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                            {errors.email && <Text color="red.500">{errors.email}</Text>}
                        </FormControl>

                        <FormControl p={3} isInvalid={errors.phone}>
                            <FormLabel color="white">Phone</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    m={1}
                                    fontSize="lg"
                                    children={<FaPhoneAlt color="gray.300" />}
                                />
                                <Input
                                    type="text"
                                    size="lg"
                                    borderRadius="20px"
                                    placeholder="Your phone"
                                    bg="white"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                            {errors.phone && <Text color="red.500">{errors.phone}</Text>}
                        </FormControl>

                        <FormControl p={3} isInvalid={errors.message}>
                            <FormLabel color="white">Message</FormLabel>
                            <Textarea
                                placeholder="Your message"
                                borderRadius="20px"
                                size="lg"
                                mb={4}
                                bg="white"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <Text color="red.500">{errors.message}</Text>}
                        </FormControl>

                        <Button
                            bgColor="#003399"
                            variant="simple"
                            width="90%"
                            ml={5}
                            borderRadius="20px"
                            color="white"
                            type="submit"
                            mb={4}
                        >
                            Submit
                        </Button>
                    </form> */}
                    <Image src="./c3.png" mb={-14} />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNufT69Qen-fONmrL55eQWUErnL44aNcBCRoxabrabstiWKA/viewform" target="_blank"><Button
                        bgColor="#003399"
                        variant="simple"
                        width="90%"
                        ml={5}
                        borderRadius="20px"
                        color="white"
                        type="submit"
                        m={4}
                    >
                        Contact Us
                    </Button></a>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ContactPage;
