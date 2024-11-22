import Section from "./Section";
import { socials, footerLinks } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col flex-wrap">
        <a
          className="text-lg font-bold hover:text-color-1 transition-colors lg:text-2xl"
          href="#hero"
        >
          <h1 className="text-2xl font-bold">Infohr Solutions</h1>
        </a>

        <ul className="flex flex-wrap justify-center gap-3">
          {footerLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.title}
            </a>
          ))}
        </ul>

        <ul className="flex gap-3 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>

        <p className="caption text-n-4 inline-flex">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
