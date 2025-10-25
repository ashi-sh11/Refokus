import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-2 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 capitalize text-zinc-600">Socials</h4>
            <div>
              {["Instagram", "Twitter (x?)", "LinkedIn"].map((ele, idx) => (
                <a className="block mt-1 capitalize text-zinc-600">{ele}</a>
              ))}
            </div>
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 capitalize text-zinc-600">sitemap</h4>
            <div>
              {["Home", "Work", "careers", "contacts"].map((ele, idx) => (
                <a className="block mt-1 capitalize text-zinc-600">{ele}</a>
              ))}
            </div>
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className=" text-zinc-600 text-right mt-10">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="w-40 mt-3"
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
