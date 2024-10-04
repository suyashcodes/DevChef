import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DevChef from "./pages/DevChef"
import ScrollToTop from "./components/ScrollToTop"
import LeaderBoard from "./pages/LeaderBoard"
import { Analytics } from "@vercel/analytics/react"
export default function App() {
    return (
        <>
            <Analytics />
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<DevChef />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
        </Router>
            </>
    )
  }
