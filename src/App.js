import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navigation from './layouts/Navigation';
import UserDashboard from './layouts/UserDashboard';
import Footer from './layouts/Footer';
import GuestDashboard from './layouts/GuestDashboard';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <GuestDashboard />
      {/* <UserDashboard /> */}
      <Footer />
    </div>
  );
}

export default App;