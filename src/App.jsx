import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DevChef from "./pages/DevChef"
import ScrollToTop from "./components/ScrollToTop"
import LeaderBoard from "./pages/LeaderBoard"
window.dataLayer = window.dataLayer || [];
function ga(args) {
  dataLayer.push(args);
}
ga('js', new Date());

ga('config', 'G-94R4ZWSHRV');
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