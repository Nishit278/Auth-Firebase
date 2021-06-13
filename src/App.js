import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center flex-direction-colum"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
