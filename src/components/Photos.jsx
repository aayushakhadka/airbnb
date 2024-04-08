import React, { useState } from "react";
import { photos } from "./data";

export const Photos = () => {
  
  return (
    <div className="flex flex-col gap-4 font-display">
      <h1 className="mt-[2rem] text-xl font-semibold p-2">
        Over Water Suite with Hammock
      </h1>
      <div className="flex gap-3 bg-white  ">
        <div className="col-span-2">
          <img
            src={photos[0]?.img}
            className="h-[23rem] rounded-bl-3xl rounded-tl-3xl  "
            alt="Main"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 ">
          {photos.slice(1, 5).map((photo, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 w-full max-w-[20rem] max-h-[11rem]   "
              >
                <img
                  src={photo?.img}
                  className="w-full h-full rounded-tr-2xl rounded-br-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>
      </div>


  );
};
