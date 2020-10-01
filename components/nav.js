import Link from 'next/link'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <div className="flex justify-between bg-purple-500 border-b-4 border-gray-900">
      <div className="flex w-64">
        <div className="w-full p-6 font-bold text-center text-gray-300 hover:bg-purple-400">KEDUWEB</div>
        <div className="w-full p-6 font-bold text-center text-gray-300 hover:bg-purple-400">SITES</div>
      </div>
      
    </div>
  )
}
