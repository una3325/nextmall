import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ title, children }) {
  const { status, data: session } = useSession()

  return (
    <>
      <Head>
        <title>{title ? title + ' - Nextmall' : 'Nextmall'}</title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
            <Link href="/" className="text-lg font-bold">
              Nextmall
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022 Nextmall</p>
        </footer>
      </div>
    </>
  )
}
