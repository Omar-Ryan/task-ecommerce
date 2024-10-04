import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";

import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
