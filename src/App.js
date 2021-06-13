import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center flex-direction-colum"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Switch>
            <Route path="/dashboard" component={null} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Redirect from="/" exact to="/signup" />
          </Switch>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
