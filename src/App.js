import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
