import { GlobalContext } from '../GlobalContext';

const Footer = () => {
  const { isModalOpen, openModal, closeModal } = GlobalContext();

  return (
    <>
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
            <h4 className="text-lg font-bold mb-4">
              Quick <span className="text-emerald-600">Links</span>
            </h4>
            <ul className="flex items-center justify-between gap-2 sm:flex-nowrap">
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
                  About
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
                <button
                  onClick={openModal}
                  className="text-slate-600 hover:text-emerald-600 transition duration-300 hover:underline"
                >
                  Contact
                </button>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-emerald-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-emerald-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-emerald-600"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
