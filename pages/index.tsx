import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Brands from "../components/Brands";
import InputSearch from "../components/InputSearch";
import MainFooter from "../components/MainFooter";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Brands />
      <InputSearch />
      <MainFooter />
    </div>
  );
};

export default Home;
