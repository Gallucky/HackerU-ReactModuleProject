// import { Navbar, NavbarBrand, NavbarLink, NavbarToggle } from "flowbite-react";
import { NavbarLinkProps } from "./components/NavbarLink";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";

function App() {
  const links: NavbarLinkProps[] = [
    { href: "#", text: "Signup" },
    { href: "#", text: "Login" },
  ];

  return (
    <>
      <main className="h-screen w-screen bg-teal-100 dark:bg-slate-900">
        <Navbar links={links} />
        <Divider />
      </main>
    </>
  );
}

export default App;
