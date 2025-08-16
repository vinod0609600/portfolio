import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initialize3DCardEffects } from "./lib/card3dEffect";

createRoot(document.getElementById("root")!).render(<App />);

// Initialize 3D card effects after the app has rendered
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all components are fully rendered
  setTimeout(() => {
    initialize3DCardEffects();
  }, 500);
});
