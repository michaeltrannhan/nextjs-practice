import React from "react";
import { TiTick } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SuccessContainer = () => {
  return (
    <div className="container-wrapper mt-6 bg-yellow-400">
      <div className="container bg-white shadow-2xl mx-auto h-screen">
        <div className="text-center justify-items-center align-items-center ">
          <div className="flex-col text-[#008F00] text-4xl pt-16 font-bold mt-40 ">
            CONGRATULATIONS
          </div>
          <div className="flex-col pt-8">
            <TiTick
              color="white"
              className="h-24 w-24 block mx-auto text-2xl bg-[#008F00] font-bold justify-items-center rounded-[50%]"
            />
          </div>
          <div className="flex-col text-[#008F00] text-3xl pt-8">
            <div className="flex-col">
              <p>This is a genuine</p>
            </div>
            <div className="flex-col">product</div>
          </div>
          <div className="flex-row">
            <p>Owned by</p>

            <div className="text-bold">Dao Viet Thanh</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessContainer;
