import React from "react";
import { formatDate } from "../utils/formatDate";

type CartProps = {
  jobName: string;
  company: string;
  location: string;
  appearenceCount: number;
  price: number;
  dateProps: Date;
};

function Cart(props: CartProps) {
  const { jobName, company, location, appearenceCount, price, dateProps } =
    props;

  return (
    <div className="border bg-light sm:w-[348px] w-full flex flex-col justiyf-center items-center gap-lg p-xl rounded-[20px]">
      <div className="flex flex-row items-start justify-between sm:w-[308px] w-full">
        <div className="flex flex-row items-center justify-center gap-1">
          <img
            src={"../public/images/user.png"}
            className="w-[39px] h-[39px] rounded-[19.5px] border-2 align-center"
          />

          <div>
            <p className="text-16 text-neutral-900 font-semibold px-1">
              {jobName}
            </p>
            <p className="text-14 text-neutral-700 font-medium px-1">
              {company} / {location}
            </p>
          </div>
        </div>
        <button>
          <img src={"../public/images/archive-tick.svg"} className="w-6 h-6" />
        </button>
      </div>

      <div className="sm:w-[308px] w-full flex flex-row flex-wrap justify-start gap-md ">
        <div className="w-[85px] min-w-fit text-center h-[29px] rounded py-1 px-2.5 bg-neutral-300 text-14 font-medium text-neutral-700">
          Part Time
        </div>
        <div className=" min-w-fit text-center h-[29px] rounded py-1 px-2.5 bg-neutral-300 text-14 font-medium text-neutral-700">
          Hibrid
        </div>
      </div>

      <div className="sm:w-[308px] w-full flex flex-col gap-1 xs:flex-row justify-between">
        <div className="flex flex-row items-center gap-1">
          <img src={"./public/images/calendar.svg"} className="w-6 h-6" />
          <p className="max-w-[213px] w-full text-neutral-700 text-14 font-medium">
            {formatDate(dateProps)}
          </p>
        </div>

        <div className="flex flex-row items-center gap-1">
          <img src="./public/images/eye.svg" className="w-6 h-6" />
          <p className="font-medium text-neutral-700 text-14">
            {appearenceCount}
          </p>
        </div>
      </div>

      <div className="sm:w-[308px] w-full flex xs:flex-row flex-col  justify-between xs:items-center gap-1">
        <p className="text-primary-500 font-semibold text-16 min-w-fit">
          {price} $
        </p>
        <button className="xs:w-32 w-full radius-md border py-2 px-4 rounded-md border-primary-500 text-primary-500">
          Ətraflı
        </button>
      </div>
    </div>
  );
}

export default Cart;
