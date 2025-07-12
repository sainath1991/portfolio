import { createBrowserRouter } from "react-router";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Blog, { blogsLoader } from "./pages/Blog";
import BLogDetails, { getBlogDetails } from "./pages/BlogDetails";

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
        children: [
          {
            index: true,
            element: <Blog />,
            loader: blogsLoader,
          },
          {
            path: ':id',
            element: <BLogDetails />,
            loader: getBlogDetails,
          }
        ]
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      }
    ]
  }
]);

export default router;