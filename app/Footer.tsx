import { Button } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-400 text-white p-8 mt-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div>
            <h3 className="font-bold text-lg">LOGO</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p>Home</p>
              <p>Discovery</p>
              <p>Photos</p>
              <p>Contact</p>
            </div>
            <div>
              <p>About</p>
              <p>Help</p>
              <p>Terms</p>
              <p>Guidelines</p>
            </div>
            <div>
              <p>Testimonials</p>
              <p>Advertise</p>
              <p>Integrations</p>
              <p>Careers</p>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="p-2 w-full border-1 border-amber-950 rounded mb-3"
            />
            <Button color="red">Subscribe</Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
