import Head from 'next/head'
import { useState } from 'react'
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"


export default function Home() {
  const [stands, setStands] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    const standInfo = {};
    standInfo.location = event.target.location.value;
    standInfo.minCustomers = parseInt(event.target.minCustomers.value);
    standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
    standInfo.avgCookies = parseFloat(event.target.avgCookies.value);
    standInfo.hours = [2, 23, 450, 2, 6, 3, 4, 2, 23, 450, 2, 6, 3, 4]
    setStands([...stands, standInfo]);
  }

  return (
    <div>
      <Head>
        <title>
          Cookie Stand Admin
        </title>
      </Head>
      <Header />
      <Main stands={stands} submitHandler={submitHandler} />
      <Footer />
    </div>
  )
}





