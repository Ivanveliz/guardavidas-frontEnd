// src/App.tsx
import { AuthProvider } from "./context/AuthContext";
import Router from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;

