import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Support from './components/Support';
import Settings from './components/Settings';
import Notif from './components/Notif';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/notification" element={<Notif />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
