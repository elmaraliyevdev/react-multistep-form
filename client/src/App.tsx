import { Switch, Route, Redirect } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import NewNumber from "./pages/new-number";
import IdentityType from "./pages/new-number/identity-type";
import RisForm from "./pages/new-number/ris-form";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/new-number" />
      </Route>
      <Route path="/new-number" component={NewNumber} />
      <Route path="/new-number/identity-type" component={IdentityType} />
      <Route path="/new-number/ris-form" component={RisForm} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;