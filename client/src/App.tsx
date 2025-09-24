import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import AppSidebar from "@/components/AppSidebar";
import LivePage from "@/pages/LivePage";
import CreatePage from "@/pages/CreatePage";
import StatusPage from "@/pages/StatusPage";
import ApprovalsPage from "@/pages/ApprovalsPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LivePage} />
      <Route path="/create" component={CreatePage} />
      <Route path="/status" component={StatusPage} />
      <Route path="/approvals" component={ApprovalsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <Header />
              <main className="flex-1 overflow-auto">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
