import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Campaigns from "./pages/Campaigns";
import InternshipRegistration from "./pages/InternshipRegistration";
import Contact from "./pages/Contact";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "programs", Component: Programs },
      { path: "campaigns", Component: Campaigns },
      { path: "internship-registration", Component: InternshipRegistration },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "*", Component: Home }, // Fallback
    ],
  },
]);
