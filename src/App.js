
import "./App.css";
import CTA from "./components/CTA";
import CardCom from "./components/Card";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Reasons from "./components/Reasons";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Partners />
      <Reasons />
      <Client />
      <Testimonial />
      <CTA tag2={"66% of our learners transformed their careers"} tag3={"Alumni Career Transitions in the industry for degree & PG programs"} button={"download career report"} />
      <CardCom title={"Media Spotlight"} tag={"Featured in"} date={"27 Aug 2023"} />
      <CardCom title={"Awards and recognitions"} />
      <CTA tag1={"Got more questions?"} tag2={"Talk to our team directly."} tag3={"A program advisor will get in touch with you shortly."} button={"contact us"} />

      <Footer />
    </>
  );
}

export default App;
