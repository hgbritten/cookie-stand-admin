import Link from 'next/link'

export default function CookieStandHeader({ username, onLogout }) {
  return (
    <header className="flex items-center justify-around bg-green-400">
      <h1 className="text-gray-800 text-2xl font-semibold text-center py-4">
        Cookie Stand Admin
      </h1>
      <div className="flex items-center gap-2">
        <p className="px-3 py-1 text-gray-800 bg-green-100 rounded-lg">{username}</p>
        <nav>
          <Link href="/">
            <a onClick={onLogout} className="px-3 py-1.5 bg-green-600 text-gray-100 rounded-lg mr-2">Sign Out</a>
          </Link>
          <Link href="/overview">
            <a className="px-3 py-1.5 bg-gray-50 rounded-lg">Overview</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}