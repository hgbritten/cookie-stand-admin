import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Cookie Stand Admin
        </title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-green-500 px-5 py-3">
      <h1 className="text-black text-3xl">
        Cookie Stand Admin
      </h1>
    </header>
  )
}

function Main() {
  return (
    <main className="h-96 mx-auto">
      <div className="h-88 mx-auto">

        <form className="justify-center h-168 bg-green-300 mx-auto p-2 mx-10 my-5 rounded">
          <div>
            <h2 className="min-w-full text-center mx-auto p-2">
              Create Cookie Stand
            </h2>
            <div className="flex m-2">

              <label className="mx-2">Location</label>
              <input type="text" className="flex-auto" />
            </div>
            <div className="flex py-10 mx-1 items-center">
              <div className="flex">
                <div className="justify-items-start">
                  <label className="py-10">Minimum Customers per Hour</label>
                  <input type="text" className="mx-1" />
                </div>
                <div>
                  <label>Maximum Customers per Hour</label>
                  <input type="text" className="mx-1" />
                </div>
                <div>
                  <label>Average Cookies per Sale</label>
                  <input type="text" className="mx-1" />
                </div>
              </div>
              <button type="submit" className="w-48 h-20 bg-green-500">Create</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
function Footer() {
  return (
    <footer>
      <p className="bg-green-500 px-5 py-3">&copy; 2021</p>
    </footer>
  )
}