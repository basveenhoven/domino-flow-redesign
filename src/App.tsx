import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Over from "./pages/Over.tsx";
import Wdc2026 from "./pages/Wdc2026.tsx";
import Reserveren from "./pages/Reserveren.tsx";
import Sponsoren from "./pages/Sponsoren.tsx";
import Contact from "./pages/Contact.tsx";
import Versies from "./pages/Versies.tsx";
import IndexV2 from "./pages/v2/Index.tsx";
import OverV2 from "./pages/v2/Over.tsx";
import Wdc2026V2 from "./pages/v2/Wdc2026.tsx";
import ReserverenV2 from "./pages/v2/Reserveren.tsx";
import SponsorenV2 from "./pages/v2/Sponsoren.tsx";
import ContactV2 from "./pages/v2/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <I18nProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/versies" element={<Versies />} />
            <Route path="/" element={<Index />} />
            <Route path="/over-ons" element={<Over />} />
            <Route path="/wdc-2026" element={<Wdc2026 />} />
            <Route path="/reserveren" element={<Reserveren />} />
            <Route path="/sponsoren" element={<Sponsoren />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/v2" element={<IndexV2 />} />
            <Route path="/v2/over-ons" element={<OverV2 />} />
            <Route path="/v2/wdc-2026" element={<Wdc2026V2 />} />
            <Route path="/v2/reserveren" element={<ReserverenV2 />} />
            <Route path="/v2/sponsoren" element={<SponsorenV2 />} />
            <Route path="/v2/contact" element={<ContactV2 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
