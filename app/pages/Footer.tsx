import Link from "next/link";

const footerLinks = {
  website: [
    { title: "Services", href: "/service" },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
  ],
  contact: [
    { title: "Contact", href: "/contact" },
    { title: "Booking", href: "/contact" },
    { title: "Email us", href: "mailto:contact@luxuredetails.com" },
  ],
  socialMedia: [
    { title: "Facebook", href: "https://facebook.com" },
    { title: "Instagram", href: "https://instagram.com" },
    { title: "Twitter", href: "https://twitter.com" },
    { title: "Youtube", href: "https://youtube.com" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-12 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">LuxurDetails</h3>
            <p className="max-w-md text-gray-400 leading-7">
              Luxury detailing with a refined finish, trusted by discerning owners for polished results and discreet service.
            </p>
            <p className="text-sm text-gray-500">contact@luxuredetails.com</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Explore</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              {footerLinks.website.map((link) => (
                <Link key={link.title} href={link.href} className="transition hover:text-white">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              {footerLinks.contact.map((link) => (
                <Link key={link.title} href={link.href} className="transition hover:text-white">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LuxurDetails. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.socialMedia.map((link) => (
              <Link key={link.title} href={link.href} className="transition hover:text-white">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

