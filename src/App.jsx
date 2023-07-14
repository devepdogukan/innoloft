import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./stores";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Toaster position="bottom-left"/>
    </Provider>
  );
}

export default App;
