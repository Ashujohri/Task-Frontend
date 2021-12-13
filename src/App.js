import logo from "./logo.svg";
import "./App.css";
import SignIn from "./component/SignIn";
import SignUpForm from "./component/SignUpForm";
import AdminRouter from "./AdminRouter";
import Dashboard from "./component/Dashboard";

function App(props) {
  return (
    <div>
      <AdminRouter />
      {/* <SignIn /> */}
      {/* <SignUpForm /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
