import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

export default function RootLayout() {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}