import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollManager from './ScrollManager'

export default function Layout() {
  return (
    <div className="w-full min-h-screen bg-canvas selection:bg-accent/30 selection:text-accent-muted relative overflow-x-hidden">
      <ScrollManager />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-accent-subtle/40 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] mix-blend-overlay opacity-80 z-[1]" />

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
