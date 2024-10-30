import { Provider } from "react-redux";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import store from "./store/store";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainLayout />;
    </Provider>
  );
};

export default App;
