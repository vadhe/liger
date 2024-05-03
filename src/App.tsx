import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Roadmap from "./components/roadmap";
import Contract from "./components/contract";

function App() {
  return (
    <Box p={{base:"20px" ,lg: "60px"}}>
      <Navbar />
      <Header />
      <About/>
      <Contract/>
      <Roadmap/>
    </Box>
  );
}

export default App;
