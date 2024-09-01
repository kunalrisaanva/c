import React from "react";

function Body() {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end ">
        <img
          src="./assetes/Blue-Shape.svg"
          alt="1st"
          className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assetes/Pink-Shape.svg"
          alt="2nd"
          className="absolute -rotate-[35deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assetes/Purple-Shape.svg"
          alt="3rd"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assetes/Hero-Model.png"
          alt="hero"
          className="absolute h-64 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfiar leading-tight">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400">
          With Hoster , get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3  placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Jion Waitlists</button>
        </form>
        <div className="flex gap-2 pt-2">
          <img src="./assetes/Checkmark.svg" alt="checkmark" />
          <p className="font-lato text-gray-400">No Span ,ever . Unsubscrime anytime</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
