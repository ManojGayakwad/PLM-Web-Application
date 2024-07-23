import { Box, Text, Image, UnorderedList, ListItem, Divider } from '@chakra-ui/react';
import React from 'react';

const VisionMission = () => {
    return (
        <Box p={2}>

            <Box bgColor="white" textColor="black" >

                <Box display='flex' flexDirection={{ base: "column", md: "row" }} gap="20px"  borderRadius="25px"
                    bgColor="transparent"
                    backgroundImage="linear-gradient(to top left, #CAF4FF 15%, white 25% )"
                    backgroundSize="cover">
                    <Box mt={-5}>
                        <Image src="./ab2.jpg" borderRadius="10px" w="100%" h="100%" alt="about" />
                    </Box>
                    <Box>
                        {/* <Text fontSize={{ base: "15px", md: "25px" }} fontFamily="Arial" fontWeight="700"> </Text> */}
                        <Text fontSize={{ base: "15px", md: "20px" }} mb={4} fontFamily="Arial" textAlign="justify"><span style={{
                            fontSize: window.innerWidth < 768 ? "18px" : "25px",
                            fontFamily: "Arial",
                            fontWeight: "700"
                        }}>Vision:</span> To be the leading global institution for Product Life Cycle Management (PLM) training and education, empowering individuals and organizations to enhance their skills and capabilities in managing product lifecycles effectively and efficiently.</Text>
                    </Box>
                </Box>
                <Box display='flex'
                    mt="50px"
                    flexDirection={{ base: "column-reverse", md: "row" }}
                    gap="20px" 
                    borderRadius="25px"
                    bgColor="transparent"
                    backgroundImage="linear-gradient(to top right, #CAF4FF 15%, white 25% )"
                    backgroundSize="cover">

                    <Box>
                        {/* <Text fontSize={{ base: "15px", md: "25px" }} fontFamily="Arial" fontWeight="700">Mission: </Text> */}
                        <Text fontSize={{ base: "15px", md: "20px" }} mb={4} fontFamily="Arial" textAlign="justify"><span style={{
                            fontSize: window.innerWidth < 768 ? "18px" : "25px",
                            fontFamily: "Arial",
                            fontWeight: "700"
                        }}>Mission: </span>Our mission is to provide world-class PLM training and education that equips individuals and organizations with the knowledge, tools, and techniques to optimize the entire product lifecycle, from ideation to disposal.</Text>
                        {/* <UnorderedList spacing={2}>
                            <ListItem>Offering comprehensive PLM courses that cover the entire product lifecycle, including product development, design, manufacturing, and service.</ListItem>
                            <ListItem>Providing hands-on training with state-of-the-art PLM software and tools to ensure practical knowledge transfer and application.</ListItem>
                            <ListItem>Collaborating with leading global organizations, universities, and research institutions to stay at the forefront of PLM trends and developments.</ListItem>
                            <ListItem>Cultivating a dynamic and innovative learning environment that fosters creativity, critical thinking, and problem-solving.</ListItem>
                            <ListItem>Empowering our graduates to make a positive impact in their organizations and communities, and to advance their careers as PLM professionals.</ListItem>
                            <ListItem>Constantly evaluating and improving our curriculum to stay abreast of emerging PLM technologies, practices, and trends.</ListItem>
                        </UnorderedList> */}
                        {/* <Text fontSize={{ base: "15px", md: "20px" }} mt={4} fontFamily="Arial">By pursuing this vision and mission, we aim to contribute to the advancement of PLM as a critical discipline for driving innovation, efficiency, and sustainability across industries. </Text> */}
                    </Box>
                    <Box mt={-5} w={{ base: "100%", md: "80%" }} h="30%">
                        {/* <Image src="./ab2.jpg" borderRadius="10px"  alt="about" /> */}
                        <Image src="./bg2.jpg" w="100%" h="40%" borderRadius="10px" alt="about" />
                        {/* <Image src="./ab5.avif" borderRadius="10px" mt="20px"  alt="about" /> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default VisionMission;
