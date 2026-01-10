export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GJS Corp. All rights reserved.</p>
        <p>
          Built with Next.js & TailwindCSS.{' '}
          <a href="https://vercel.com" className="underline" target="_blank" rel="noopener noreferrer">
            Powered by Vercel
          </a>
        </p>
      </div>
    </footer>
  );
}
