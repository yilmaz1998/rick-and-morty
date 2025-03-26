import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-6 px-4 text-center mt-10">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Sinan Yilmaz</p>
        <p className="text-sm text-gray-400">Software Developer | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
