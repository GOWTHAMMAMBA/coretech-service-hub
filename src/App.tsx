
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LaptopRepair from "./pages/LaptopRepair";
import DataRecovery from "./pages/DataRecovery";
import PCBuild from "./pages/PCBuild";
import ChipLevelDiagnostic from "./pages/ChipLevelDiagnostic";
import PrioritySupport from "./pages/PrioritySupport";
import HomeService from "./pages/HomeService";
import Software from "./pages/Software";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/laptop-repair" element={<LaptopRepair />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/pc-build" element={<PCBuild />} />
          <Route path="/chip-level-diagnostic" element={<ChipLevelDiagnostic />} />
          <Route path="/priority-support" element={<PrioritySupport />} />
          <Route path="/home-service" element={<HomeService />} />
          <Route path="/software" element={<Software />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
