import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import AddRecord from "./pages/AddRecord/AddRecord";
import RemoveRecordPage from "./pages/RemoveRecord/RemoveRecord";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/add" element={<AddRecord />}/>
        <Route path="/delete" element={<RemoveRecordPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
