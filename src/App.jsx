import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DevChef from "./pages/DevChef"
import ScrollToTop from "./components/ScrollToTop"
import LeaderBoard from "./pages/LeaderBoard"

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<DevChef />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
            
        </Router>
    )
  }