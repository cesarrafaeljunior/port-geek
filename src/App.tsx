import { InputComponent, PasswordInputComponent } from "./components/Inputs";

import LandingPage from "./pages/LandingPage/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [isDashboard, setIsDashboard] = useState<boolean>(true);

  return <>{isDashboard ? <Dashboard /> : <LandingPage />}</>;
}

export default App;
