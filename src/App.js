
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import Navbar from './Navbar/Navbar';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <AppProvider>
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
    </AppProvider>
  );
}

export default App;
