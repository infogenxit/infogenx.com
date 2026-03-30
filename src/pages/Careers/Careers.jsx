import "./Careers.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const Career = () => {
  return (
    <div>
      <Helmet>
        <title>Careers at Infogenx | Join Our Tech Team</title>
        <meta
          name="description"
          content="Explore career opportunities at Infogenx and work on AI, automation, and software development projects with a global team."
        />
        <meta
          name="keywords"
          content="Infogenx careers, IT jobs, software jobs, AI jobs, tech careers"
        />
      </Helmet>
      <Header />
      <div className="career-page">
        <h1>Careers at Infogenx</h1>
        <p>Explore exciting career opportunities with Infogenx.</p>

        <p>Send your Resume to this whatsapp no: 9787806366</p>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
