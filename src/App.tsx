import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar
          currentRole="visitor"
        />

        <main>
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;