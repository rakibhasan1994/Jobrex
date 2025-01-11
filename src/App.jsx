import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import AllJobs from "./pages/AllJobs";
import MyJobs from "./pages/MyJobs";
import JobDetails from "./pages/JobDetails";
import Onboarding from "./pages/Onboarding";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import About from "./pages/About";
import PostJobs from "./pages/PostJobs";

const router = createBrowserRouter([
  {
  element: <Root />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/jobs",
      element: (
      <AuthenticatedRoute>
        <AllJobs />
      </AuthenticatedRoute>
      ),
    },
    {
      path: "/my-jobs",
      element: (
        <AuthenticatedRoute>
        <MyJobs />
      </AuthenticatedRoute>
      ),
    },
    {
      path: "/job/:id",
      element: (
        <AuthenticatedRoute>
        <JobDetails />
      </AuthenticatedRoute>
      ),
    },
    {
      path: "/onboard",
      element: (
        <AuthenticatedRoute>
        <Onboarding />
      </AuthenticatedRoute>
      ),
    },
    {
      path: "/post-job",
      element: (
        <AuthenticatedRoute>
        <PostJobs />
      </AuthenticatedRoute>
      ),
    },
  ],
  },
]);

function App() {

  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
     </ThemeProvider>
    </>
  );
}

export default App;