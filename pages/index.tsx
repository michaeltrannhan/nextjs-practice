import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/NavBar";
import SuccessContainer from "../components/SuccessContainer";
import styles from "../styles/Home.module.css";

// import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Authentic Max</title>
        <meta name="description" content="Blah blah" />
        <link rel="icon" href="/public/favicon.ico"></link>
      </Head>
      <Navbar />
      <SuccessContainer/>
    </div>
  );
}
