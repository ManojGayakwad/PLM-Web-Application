import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Vision from "./pages/VisionMission";
import Frame5 from "./components/Frame5/Frame5";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <Aboutus />
      </Box>
      <Box id="vision">
        <Vision />
      </Box>
      <Box id="frame5">
        <Frame5 />
      </Box>
      <Box id="footer">
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
