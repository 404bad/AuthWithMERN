import { Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

const App = () => {
  return (
    <>
      <div
        className="min-h-screen bg-linear-to-br
       from-slate-950 via-rose-900 to-violet-900 flex items-center justify-center relative overflow-hidden"
      >
        <FloatingShape
          color="bg-rose-500"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />
        <FloatingShape
          color="bg-sky-500"
          size="w-48 h-48"
          top="70%"
          left="80%"
          delay={0}
        />
        <FloatingShape
          color="bg-pink-500"
          size="w-32 h-32"
          top="40%"
          left="-10%"
          delay={0}
        />
        <Routes>
          <Route path="/" element={"home"} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
