import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.tsx";

type UserRole = "visitor" | "student" | "owner";

function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>("visitor");
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen">
      <Navbar
        currentRole={currentRole}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onRoleChange={setCurrentRole}
      />
    </div>
  );
}

export default App;