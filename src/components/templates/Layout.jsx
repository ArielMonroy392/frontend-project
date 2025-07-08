import { Outlet } from "react-router"
import Nav from "../molecules/Nav"
import "./Layout.css"

export default function Layout () {
  return (
    <div className="layout">
      <header className="header">
        <Nav></Nav>
      </header>
      <main className="main">
        <Outlet/>
      </main>
    </div>
  )
}