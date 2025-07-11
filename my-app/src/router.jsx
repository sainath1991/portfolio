import { createBrowserRouter } from "react-router";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Blog, { blogsLoader } from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: blogsLoader
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      }
    ]
  }
]);

export default router;