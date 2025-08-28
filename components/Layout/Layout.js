import Link from "next/link"


function Layout({children}) {
  return (
    <>
    <header className="header">
      <h2>Botostart CRM</h2>
      <Link href="/add-customer">Add Customer</Link>
    </header>
    <div className="main">
        {children}
    </div>
    <footer className="footer">Next.js Course  |  CRM project &copy;</footer>
    </>
  )
}

export default Layout