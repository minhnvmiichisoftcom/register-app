import logo from "./logo.svg";
import "./App.css";
import Login from "./component/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/register/register";
import Home from "./component/home/home";
import Drafts from "./component/home/drafts/drafts";
import Email from "./component/home/email/email";
import Inbox from "./component/home/inbox/inbox";
import Starred from "./component/home/starred/starred";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home /> } />
        <Route path="/drafts" element={<Drafts /> } />
        <Route path="/email" element={<Email /> } />
        <Route path="/inbox" element={<Inbox /> } />
        <Route path="/starred" element={<Starred /> } />
      </Routes>
    </div>
  );
}

export default App;
