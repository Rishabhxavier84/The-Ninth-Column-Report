import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./Components/About/About.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/about"
            element={
              <>
                <SignedOut>
                  <div className="signin">
                    <SignIn routing="/sign-in" />
                  </div>
                </SignedOut>
                <SignedIn>
                  <About />
                </SignedIn>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <SignedOut>
                  <div className="signin">
                    <SignIn routing="/sign-in" />
                  </div>
                </SignedOut>
                <SignedIn>
                  <App />
                </SignedIn>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
