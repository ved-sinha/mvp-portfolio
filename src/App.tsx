import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./about-us";
import Ai from "./ai";
import AndroidApps from "./android-apps";
import Pricing from "./pricing";
import Services from "./services";
import IosApps from "./ios-apps";
import WebDevelopment from "./web";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/android-apps" element={<AndroidApps />} />
        <Route path="/ios-apps" element={<IosApps />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web" element={<WebDevelopment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
