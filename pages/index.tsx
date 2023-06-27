import type { NextPage } from "next";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurNFT from "../components/OurNFT";
import Loadmap from "../components/Loadmap";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <OurNFT />
      <Loadmap />
      <Footer />
    </Layout>
  );
};

export default Home;
