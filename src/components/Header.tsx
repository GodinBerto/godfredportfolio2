import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link
          href="#"
          className="text-2xl font-display font-bold flex items-center gap-2"
        >
          <span
            className="inline-block w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/profile.jpg")' }}
          />
          <span
            className={`${isScrolled ? "text-gray-800" : "text-accent"} font-semibold`}
          >
            Godfred
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium ${isScrolled ? "" : "text-accent hover:text-accent/70"} transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:godfredquarm83@gmail.com"
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className={`${isScrolled ? "" : "text-white"}`} />
          ) : (
            <Menu size={24} className={`${isScrolled ? "" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border">
          <nav className="container-custom py-6 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="mailto:godfredquarm83@gmail.com"
              className="mt-4 w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
