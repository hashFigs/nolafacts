import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">  </h1>
      <h2 class="text-shadows">Nola Facts by data</h2>
      <Link href="/nopdforce">
        <p className="text-4xl font-bold">NOPD use of force</p>
      </Link>
    </main>
  )
}
