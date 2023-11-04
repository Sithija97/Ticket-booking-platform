import { createBrowserRouter } from "react-router-dom";
import { Agreement, Dashboard, Layout, Login, Register } from "../screens";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const AGREEMENT = "/agreement";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";

export const router = createBrowserRouter([
  { path: ROOT, element: <Login /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: AGREEMENT, element: <Agreement /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
]);
