import MenuItem from "@/components/modules/MenuItem/MenuItem";
import React from "react";

const Results = ({ searchResult }) => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-5 text-2xl font-bold">Hot Coffee</h1>
            {searchResult.filter((item) => item.type === "hot").length ? (
              <>
                {searchResult
                  .filter((item) => item.type === "hot")
                  .slice(0, 3)
                  .map((item) => (
                    <MenuItem {...item} key={item.id} />
                  ))}
              </>
            ) : (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-96 flex flex-col gap-4 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Nothing Found!</strong>
                <span className="block sm:inline">
                  There is no hot drink that matches your searching keyword.
                </span>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <h1 className="mb-5 text-2xl font-bold">Cold Coffee</h1>
            {searchResult.filter((item) => item.type === "cold").length ? (
              <>
                {searchResult
                  .filter((item) => item.type === "cold")
                  .slice(0, 3)
                  .map((item) => (
                    <MenuItem {...item} key={item.id} />
                  ))}
              </>
            ) : (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-96 flex flex-col gap-4 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Nothing Found!</strong>
                <span className="block sm:inline">
                  There is no cold drink that matches your searching keyword.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
