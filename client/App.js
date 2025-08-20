import "./global.css";
import { Provider } from "react-redux";
// import { store } from "./redux/store";
import Navigation from "./navigation";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
