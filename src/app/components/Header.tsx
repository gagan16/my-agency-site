import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          MyAgency
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
