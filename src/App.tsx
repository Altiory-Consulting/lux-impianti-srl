import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Soluzioni from "./pages/Soluzioni";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import TerminiCondizioni from "./pages/TerminiCondizioni";
import NoteLegali from "./pages/NoteLegali";
import Fotovoltaico from "./pages/solutions/Fotovoltaico";
import SolareTermico from "./pages/solutions/SolareTermico";
import Climatizzazione from "./pages/solutions/Climatizzazione";
import Biomasse from "./pages/solutions/Biomasse";
import Eolico from "./pages/solutions/Eolico";
import Geotermico from "./pages/solutions/Geotermico";
import RedditoEnergetico from "./pages/solutions/RedditoEnergetico";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/soluzioni" element={<Soluzioni />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/termini-condizioni" element={<TerminiCondizioni />} />
          <Route path="/note-legali" element={<NoteLegali />} />
          <Route path="/soluzione/fotovoltaico" element={<Fotovoltaico />} />
          <Route path="/soluzione/solare-termico" element={<SolareTermico />} />
          <Route path="/soluzione/climatizzazione" element={<Climatizzazione />} />
          <Route path="/soluzione/biomasse" element={<Biomasse />} />
          <Route path="/soluzione/eolico" element={<Eolico />} />
          <Route path="/soluzione/geotermico" element={<Geotermico />} />
          <Route path="/soluzione/reddito-energetico" element={<RedditoEnergetico />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
