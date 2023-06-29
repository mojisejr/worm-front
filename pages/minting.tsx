import type { NextPage } from "next";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Minting2 from "../components/Hero/Minting2";

const MintingPage: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Hero>
        <Minting2 />
      </Hero>
      <Footer />
    </Layout>
  );
};

export default MintingPage;
