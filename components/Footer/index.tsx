import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className='special-font text-4xl md:text-6xl bg-black mb-6 text-primary'>PASTRY EVENT</h1>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Sweeten your senses, indulge in mastery!
              Join us for a delectable pastry showdown!
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap flex-col md:flex-row items-top mb-6">
              <div className="my-4 lg:my-0 md:mx-auto">
                <span className="block uppercase text-blueGray-500 text-lg mb-2 font-bold text-primary ">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Participants</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Gallery</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/JPIC Guidelines & Rules.pdf">Rules And Regulations</a>
                  </li>
                </ul>
              </div>
              <div className="my-4 lg:my-0 md:mx-auto">
                <span className="block uppercase text-blueGray-500 text-lg font-bold text-primary mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">MIT License</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">Junior Pastry Indian Cup 2023</span>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
