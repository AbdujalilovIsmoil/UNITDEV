import "swiper/css";
import "aos/dist/aos.css";
import App from "./App.tsx";
import "swiper/css/pagination";
import "./assets/sass/index.scss";
import { Provider } from "react-redux";
import { store } from "store/index.ts";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attempIndex) => Math.min(1000 * 2 ** attempIndex, 30000),
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
