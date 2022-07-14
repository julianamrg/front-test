import Navbar from './components/navbar/Navbar';
import { DataProvider } from './context/DataContext';
import AppRouter from './routers/AppRouter';


function App() {
  return (
    <> 
      <DataProvider>
        <Navbar/>
        <AppRouter/>
      </DataProvider>
    </>
  );
}

export default App;
