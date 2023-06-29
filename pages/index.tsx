import type { NextPage } from "next";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurNFT from "../components/OurNFT";
import Loadmap from "../components/Loadmap";
import Footer from "../components/Footer";
import HeroContent from "../components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Hero>
        <HeroContent />
      </Hero>
      <OurNFT />
      <Loadmap />
      <Footer />
    </Layout>
  );
};

export default Home;
