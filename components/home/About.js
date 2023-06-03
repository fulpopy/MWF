import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="about"
    >
      <div className="flex flex-col md:flex-row pt-10 justify-center items-center">
        <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-11/12 flex flex-col justify-center items-center px-4">
          <p className="text-4xl lg:text-5xl font-bold pt-10 md:pt-0">
            About Us
          </p>
          <p className="lg:text-lg 2xl:text-xl py-6 text-center">
            We have run a nishulka pathshala in Prayagraj for the last three
            years. In the pathshala, the entire education of the students is
            free of charge, and we also provide them with stationery (books,
            notebooks, etc.). And we are constantly trying to establish nishulka
            pathshalas.
            <br />
            <br />
            Our aim is to build an educated society. And we are trying it
            completely free of charge for children in economically weak
            families. We want to bring education to the most underprivileged
            sections of society. We are trying a free education campaign. <br />
            <br />
            You can also contribute to this Mahayagya of education by joining
            this campaign.
          </p>
        </div>
      </div>
    </div>
  );
}
