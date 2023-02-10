import { Provider } from "react-redux";
import { initializeStore } from "./src/store";
import Navigation from "./src/Navigation";

const store = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
