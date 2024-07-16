import React from 'react';
import { Box, Text, Icon, Divider} from '@chakra-ui/react';
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Dropdown = ({ isOpen, toggleDropdown, moduleNumber, moduleName, items }) => (
    <>
        <Box display="flex" flexDirection="row" width={{ base: "100%", md: "55%" }} borderTop="1px solid" borderColor="gray.300" p={6} justifyContent="space-between" alignItems="center">
            <Box display="flex" flexDirection="row" gap={2}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background="#f4f4f4"
                    borderRadius="50%"
                    padding={{ base: "2px", md: "4px" }}
                    mt={{ base: 2, md: "initial" }}
                    w={7}
                    h={7}
                >
                    <Text fontSize="15px" fontWeight="700">{moduleNumber}</Text>
                </Box>
                <Text fontWeight="700" fontSize={{ base: "15px", md: "16px" }} mt={1}>{moduleName}</Text>
            </Box>
            <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} fontSize="22px" cursor="pointer" mt={1} onClick={toggleDropdown} />
        </Box>
        {isOpen && (
            <Box display="flex" width={{ base: "100%", md: "55%" }} background="#f4f4f4" p={4} flexDirection="column" gap={4}>
                {items.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center">
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                        <Text  fontSize={{ base: "15px", md: "18px" }}>
                            {item}
                        </Text>
                    </Box>
                ))}
            </Box>
        )}
        
    </>
);

export default Dropdown;
