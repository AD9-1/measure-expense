import logo from "./logo.svg";
import "./App.scss";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import History from "./Components/History";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/global";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
