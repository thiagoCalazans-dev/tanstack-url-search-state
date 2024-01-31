import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <div className="w-full flex items-center justify-center border-b border-border h-16">
      <header className="container flex items-center justify-between">
        <strong>LOGO</strong>
        <nav className="space-x-8">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
        </nav>
        <ThemeToggle />
      </header>
    </div>
  );
}
