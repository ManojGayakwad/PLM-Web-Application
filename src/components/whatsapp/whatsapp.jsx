import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const FloatingWhatsAppButton = ({ phoneNumber, message }) => {
  // Ensure the phone number is in international format without any special characters.
  const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');

  // Encode the message for use in a URL.
  const encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp URL.
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

  return (
    <Box
      as="a"
      href={whatsappUrl}
      target="_blank"
      position="fixed"
      left="20px"
      bottom="20px"
      bg="white"
      borderRadius="full"
      boxShadow="lg"
      p="2"
      zIndex="1000"
      _hover={{ transform: 'scale(1.1)' }}
      transition="transform 0.3s ease-in-out"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" boxSize="40px" />
    </Box>
  );
};

export default FloatingWhatsAppButton;
