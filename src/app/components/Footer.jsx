import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <div className="text-4xl">
            <span>S</span>
            <span className="text-secondary-300">.</span>
          </div>
        </span>
        <p className="text-slate-600">All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
