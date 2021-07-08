import Head from 'next/head'
import { useState } from 'react'
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"


export default function Home() {
  const [stand, setStand] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    const standInfo = {};
    standInfo.location = event.target.location.value;
    standInfo.minCustomers = parseInt(event.target.minCustomers.value);
    standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
    standInfo.avgCookies = parseInt(event.target.avgCookies.value);

    setStand([...stand, standInfo]);
  }

  return (
    <div>
      <Head>
        <title>
          Cookie Stand Admin
        </title>
      </Head>
      <Header stand={stand} submitHandler={submitHandler} />
      <Main stand={stand} submitHandler={submitHandler} />
      <Footer stand={stand} />
    </div>
  )
}





