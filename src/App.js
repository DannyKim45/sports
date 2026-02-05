import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import Navigation from "./components/layout/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import PageHead from "./components/shared/PageHead";
import HomePage from "./pages/HomePage";
import HockeyIntroPage from "./pages/HockeyIntroPage";
import TodaysGamesPage from "./pages/TodaysGamesPage";
import PlayerBioPage from "./pages/PlayerBioPage";
import AttendanceGuidePage from "./pages/AttendanceGuidePage";
import MyGamesPage from "./pages/MyGamesPage";
import BaseballIntroPage from "./pages/BaseballIntroPage";
import MLBPlayersPage from "./pages/MLBPlayersPage";
import MLBGamesPage from "./pages/MLBGamesPage";
import MLBGuidePage from "./pages/MLBGuidePage";
import MyMLBGamesPage from "./pages/MyMLBGamesPage";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <PageHead />
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hockey/intro" element={<HockeyIntroPage />} />
          <Route path="/hockey/games" element={<TodaysGamesPage />} />
          <Route path="/hockey/players" element={<PlayerBioPage />} />
          <Route path="/hockey/guide" element={<AttendanceGuidePage />} />
          <Route path="/hockey/my-games" element={<MyGamesPage />} />
          <Route path="/baseball/intro" element={<BaseballIntroPage />} />
          <Route path="/baseball/players" element={<MLBPlayersPage />} />
          <Route path="/baseball/games" element={<MLBGamesPage />} />
          <Route path="/baseball/guide" element={<MLBGuidePage />} />
          <Route path="/baseball/my-games" element={<MyMLBGamesPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
