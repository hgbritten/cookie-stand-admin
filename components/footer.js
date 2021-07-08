import Link from 'next/link'

export default function Footer(props) {
  return (
    <footer className="flex bg-green-500 px-5 py-3">
      <p>&copy; 2021</p>
      <nav>
        <Link href="/careers">
          <a className="px-3 py-1.5 bg-green-700 rounded-lg mx-10">Careers</a>
        </Link>
      </nav>
    </footer>
  )
}