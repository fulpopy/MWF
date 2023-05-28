import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="about"
    >
      <p className="text-4xl font-bold">About Us</p>
      <p className="text-gray-500 text-xl mb-20 w-full md:w-8/12 text-center my-4">
        We have run a nishulka pathshala in Prayagraj for the last three years.
        In the pathshala, the entire education of the students is free of
        charge, and we also provide them with stationery (books, notebooks,
        etc.). And we are constantly trying to establish nishulka pathshalas.
        <br />
        <br />
        Our aim is to build an educated society. And we are trying it completely
        free of charge for children in economically weak families. We want to
        bring education to the most underprivileged sections of society. We are
        trying a free education campaign. <br />
        <br />
        You can also contribute to this Mahayagya of education by joining this
        campaign.
      </p>
    </div>
  );
}
