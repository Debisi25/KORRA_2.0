import React from "react";
import { useState } from "react";

function Footer() {
  return (
    <>
      <footer className="grid xs:grid-cols-3 items-center justify-center px-6 py-10 w-full mx-auto bg-korra-green text-white gap-6">
        <div className="xs:justify-self-start flex flex-col">
          <h2 className="font-display text-2xl text-white font-medium uppercase">
            KORRA
          </h2>

          <p className="font-body text-sm text-white/75">
            Food rooted in Lagos.
          </p>
        </div>

        <div className="xs:justify-self-center">
          <h3 className="font-body text-sm font-medium uppercase">Visit</h3>
          <p className="font-body text-sm text-white/75">Lagos, Nigeria</p>
        </div>

        <div className="xs:justify-self-end">
          <h3 className="font-body text-sm font-medium uppercase">Contact</h3>
          <p className="font-body text-sm text-white/75">hello@korra.com</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
