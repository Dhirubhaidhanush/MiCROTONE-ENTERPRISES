import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/pages/Contact";
import WhatsappButton from "./components/WhatsappButton";
import IntroLoader from "./components/IntroLoader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>

      {loading ? (
        <IntroLoader onFinish={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
          <Navbar />

          <main className="grow">
            <Router />
          </main>

          <Footer />
          <WhatsappButton />
          <Toaster />
        </div>
      )}

    </QueryClientProvider>
  );
}

export default App;
