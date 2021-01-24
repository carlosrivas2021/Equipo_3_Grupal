import {
  Switch,
  Route
} from "react-router-dom";

/*Pages*/
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Panel from "./pages/panel/index"
import './css/main.css';
import Layout from "./components/Layout/index"

function App() {
  return (
    <div className="general-body">
        <Switch>
          <Layout>
            <Route path="/panel" component={Panel}/>
            <Route path="/" exact component={Login} />   
            <Route path="/register" component={Register} />
          </Layout>
        </Switch>
    </div>
  );
}

export default App;
