

  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { trackingService } from "./utils/tracking";

  // Make tracking service globally available in console
  (window as any).trackingService = trackingService;

  createRoot(document.getElementById("root")!).render(<App />);
    