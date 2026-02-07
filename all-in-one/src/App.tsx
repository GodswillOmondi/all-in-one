import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage.tsx";
import OrdinationPage from "./pages/OrdinationPage.tsx";
import HealingsPage from "./pages/HealingsPage.tsx";
import Conferences from "./pages/Conferences.tsx";
import { FeedsPage } from "./pages/FeedsPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/healings"
          element={
            <Layout>
              <HealingsPage />
            </Layout>
          }
        />
        <Route
          path="/conferences"
          element={
            <Layout>
              <Conferences />
            </Layout>
          }
        />
        <Route
          path="/feeds"
          element={
            <Layout>
              <FeedsPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
