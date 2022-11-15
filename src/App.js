import GlobalStyles from "./components/GlobalStyles";
import AddRecord from "./pages/AddRecord/AddRecord";
import RemoveRecordPage from "./pages/RemoveRecord/RemoveRecord";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
// import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div>
      <GlobalStyles />
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}
      {/* <HomePage />  */}
      {/* <AddRecord /> */}
      <RemoveRecordPage />
    </div>
  );
}

export default App;
