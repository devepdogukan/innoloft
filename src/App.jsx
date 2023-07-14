import { Provider } from "react-redux";
import { store } from "./stores";

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
