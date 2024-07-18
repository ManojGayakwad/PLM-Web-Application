// EnquiryFormModal.js
import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Checkbox,
  useDisclosure,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react';
import { ref, push } from 'firebase/database';
import { db } from '../firebaseConfig';

const EnquiryFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    city: '',
    state: '',
    qualification: '',
    isWorkingProfessional: false,
  });

  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.contact) {
      errors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      errors.contact = "Contact number is invalid. It should be 10 digits";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.qualification) errors.qualification = "Qualification is required";
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
      await push(ref(db, 'EnquiryDetail'), formData);
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

  const statesInIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi",
    "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleClose = () => {
    setFormData({
      name: '',
      contact: '',
      email: '',
      city: '',
      state: '',
      qualification: '',
      isWorkingProfessional: false,
    });
    setErrors({});
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enquiry Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" mb={4} isInvalid={errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
            </FormControl>

            <FormControl id="contact" mb={4} isInvalid={errors.contact}>
              <FormLabel>Contact no.</FormLabel>
              <Input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              {errors.contact && <FormErrorMessage>{errors.contact}</FormErrorMessage>}
            </FormControl>

            <FormControl id="email" mb={4} isInvalid={errors.email}>
              <FormLabel>Email id</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </FormControl>

            <FormControl id="city" mb={4} isInvalid={errors.city}>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
            </FormControl>

            <FormControl id="state" mb={4} isInvalid={errors.state}>
              <FormLabel>State</FormLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                {statesInIndia.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </Select>
              {errors.state && <FormErrorMessage>{errors.state}</FormErrorMessage>}
            </FormControl>

            <FormControl id="qualification" mb={4} isInvalid={errors.qualification}>
              <FormLabel>Qualification</FormLabel>
              <Select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              >
                <option value="">Select Qualification</option>
                <option value="B.E">B.E</option>
                <option value="B.sc (comp)">B.sc (comp)</option>
                <option value="M.sc (comp)">M.sc (comp)</option>
                <option value="MCA">MCA</option>
                {/* Add more qualification options as needed */}
              </Select>
              {errors.qualification && <FormErrorMessage>{errors.qualification}</FormErrorMessage>}
            </FormControl>

            <FormControl id="isWorkingProfessional" mb={4}>
              <Checkbox
                name="isWorkingProfessional"
                isChecked={formData.isWorkingProfessional}
                onChange={handleChange}
              >
                Working professional
              </Checkbox>
            </FormControl>

            <FormControl id="isFresher" mb={4}>
              <Checkbox
                name="isFresher"
                isChecked={!formData.isWorkingProfessional}
                onChange={(e) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    isWorkingProfessional: !e.target.checked,
                  }));
                }}
              >
                Fresher
              </Checkbox>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EnquiryFormModal;
