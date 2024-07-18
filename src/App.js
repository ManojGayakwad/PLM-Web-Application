import Navbar from "./components/Navbar";
import { ChakraProvider , useDisclosure, Box } from '@chakra-ui/react';
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Vision from "./pages/VisionMission";
import Frame5 from "./components/Frame5/Frame5";
import { Footer } from "./components/Footer";
import EnquiryFormModal from "./pages/enquiryForm";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Navbar  onOpen={onOpen}/>
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <Aboutus />
      </Box>

      <Box id="frame5">
        <Frame5 />
      </Box>
      <Box id="footer">
        <Footer />
      </Box>
      <EnquiryFormModal isOpen={isOpen} onClose={onClose}/>
    </Box>
  );
}

export default App;
