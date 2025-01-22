const Footer = () => {
  return (
    <footer className="bg-emerald-100 py-8 ">
      <div className="align-element flex flex-row gap-4 justify-evenly">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Web<span className="text-emerald-600">Dev</span>
          </h3>
          <p className="text-slate-600">
            Building interactive and dynamic web experiences with modern
            technologies.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-slate-600 hover:text-emerald-600 transition duration-300 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-slate-600 hover:text-emerald-600 transition duration-300 hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-slate-600 hover:text-emerald-600 transition duration-300 hover:underline"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-slate-600 hover:text-emerald-600 transition duration-300 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-600 hover:text-emerald-600 transition duration-300 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-300 pt-4 text-center">
        <p className="text-slate-600">
          &copy; {new Date().getFullYear()} WebDev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
