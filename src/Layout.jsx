import Btn from "./components/Btn";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-[#EAF0FF]">
      <Navbar />
      <main className="flex-1 p-6 bg-[#212529] text-[#F9FAFB]">
        <Outlet />
        <Btn/>
      </main>
    </div>
  );
}
