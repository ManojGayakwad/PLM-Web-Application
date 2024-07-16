import { Box, Text, Image,Divider } from '@chakra-ui/react';
import React from 'react';
import VisionMission from './VisionMission';

const services = [
    { name: 'Teamcenter UA Implementation', image: './ab1.png' },
    { name: 'Teamcenter UA Customization', image: './ab1.png' },
    { name: 'Teamcenter UA Support', image: './ab1.png' },
    { name: 'Teamcenter UA Up-Gradation', image: './ab1.png' },
    { name: 'Teamcenter UA – ERP Integrations', image: './ab1.png' }
];

const ServiceCard = ({ service }) => (
    <Box bg="gray.100" p={0} m={2} borderRadius="md" boxShadow="md">
        <Image src={service.image} w={80} h={{base:40, md:80}} alt={service.name} borderTopRadius="md" />
        <Text mt={2} p={4} fontSize={{ base: '15px', md: '20px' }} fontFamily="Arial" fontWeight="500">
            {service.name}
        </Text>
    </Box>
);

const Aboutus = () => {
    return (
        <Box p={{base:1, md:2}}>
            <Box bgColor="white" p={{base:"20px", md:"40px"}} textColor="black">
                <Text fontSize={{ base: "20px", md: "25px" }} fontFamily="Arial" fontWeight="700">About Us: </Text>
                <Box display='flex' flexDirection={{ base: "column-reverse", md: "row" }} gap={10}>
                    <Box >
                        <Text fontSize={{ base: "17px", md: "20px" }} mb={4} fontFamily="Arial" textAlign="justify">ExpertPLM Technologies is highly recommended Siemens Authorized Training Partner (Siemens Solution Partner) for High End Teamcenter UA PLM Training for Fresher, Industry professional and Corporate.</Text>
                        <Text fontSize={{ base: "17px", md: "20px" }} mb={4} fontFamily="Arial" textAlign="justify">We are having rich experience in providing a wide range of services for our customers like PLM Development/Customer, Implementation and Testing.</Text>
                        <Text fontSize={{ base: "17px", md: "20px" }} fontFamily="Arial"  textAlign="justify">We make sure that every need to be catered to streamline the business processes.</Text>
                    </Box>
                    <Box mt={{base:0, md:-10}}>
                        <Image src="./ab2.jpg" borderRadius="10px" w="100%" h="100%" alt="about" />
                    </Box>
                </Box>
                {/* Cards */}
                <Box>
                    <Text fontSize={{ base: "15px", md: "25px" }} fontFamily="Arial" fontWeight="700" mt={4}>Services Offered</Text>
                    <Box display="flex" justifyContent="justify" overflow='auto'>
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </Box>
                    <Divider borderColor="gray.300" mt={5}  width={{base:"100%" , md:"100%"}}/> 
                </Box>
            </Box>
            
            <VisionMission />
        </Box>
    );
}

export default Aboutus;
