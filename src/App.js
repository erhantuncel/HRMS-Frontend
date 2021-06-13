import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navigation from './layouts/Navigation';
import UserDashboard from './layouts/UserDashboard';
import Footer from './layouts/Footer';
import GuestDashboard from './layouts/GuestDashboard';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/user" component={UserDashboard} />
        <Route path="/" component={GuestDashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;