import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppWrapper from "./components/AppWrapper";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
