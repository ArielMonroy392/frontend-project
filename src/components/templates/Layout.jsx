import Nav from "../molecules/Nav"
import "./Layout.css"

export default function Layout ({children}) {
  return (
    <div className="layout">
      <header className="header">
        <Nav></Nav>
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer"></footer>
    </div>
  )
}