import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import ExpenseAddPage from "./pages/Expense/ExpenseAddPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import HomePage from "./pages/Home/HomePage";
import RevenuesAdd from "./pages/RevenuesAdd/RevenuesAdd";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<RevenuesAdd />} />
          <Route path="/delete" element={<ExpenseAddPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
