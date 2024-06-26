import React from "react";

export default function Footer() {
  return (
    <section className="bg-black text-white">
      <div className="text-center py-4">
        <div className="px-16 md:px-8 lg:px-28">
          <div className="grid grid-cols-12 justify-between items-center">
            <div className="col-span-12">
              <ul className="flex justify-center">
                <li className="my-2 mx-4">
                  <a className="hover:opacity-80" href="#">
                    Home
                  </a>
                </li>
                <li className="my-2 mx-4">
                  <a className="hover:opacity-80" href="#">
                    Recipes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
