import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="#"
            className="text-2xl font-display font-bold flex items-center gap-2"
          >
            <span
              className="inline-block w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/profile.jpg")' }}
            />
            <span className={`text-gray-800 font-semibold`}>Godfred</span>
          </Link>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made by @BertoStudio
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
