import React from "react";

import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] pb-3">
            Get for free now!
          </h2>
          <p className="regular-14 text-gray-10">
            Available on iOS and Android, download now!
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 whitespace-nowrap lg:items-center xl:flex-row">
          <Button
            type="button"
            title="App store"
            icon="/apple.svg"
            variant="btn_white"
            full
          />
          <Button
            type="button"
            title="Play store"
            icon="/android.svg"
            variant="btn_dark_green_outline"
            full
          />
        </div>
        <div className="flex flex-1 items-center justify-end lg:mt-[-30rem]">
         <Image src='/phones.png' alt="phones" width={550} height={870}/>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
