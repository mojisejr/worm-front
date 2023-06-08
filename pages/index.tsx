import type { NextPage } from "next";
import { useAccount } from "wagmi";
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
      <hr></hr>
      <Hero />
      <OurNFT />
      <Loadmap />
      <Footer />
    </Layout>
  );
};

export default Home;
