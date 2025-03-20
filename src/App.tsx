import { Switch, Route, Redirect } from "wouter";
import NewNumber from "@/pages/index";
import IdentityType from "@/pages/identity-type";
import RisForm from "@/pages/ris-form";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/new-number" />
      </Route>
      <Route path="/new-number" component={NewNumber} />
      <Route path="/new-number/identity-type" component={IdentityType} />
      <Route path="/new-number/ris-form" component={RisForm} />
    </Switch>
  );
}

export default App;