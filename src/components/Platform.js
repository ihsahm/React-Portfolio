import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

const Platform = () => {
  return (
    <div name='features' className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">My Skills</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          My programming language skills and abilities include
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Flutter</h3>
              <p className="text-lg pt2 pb-4">
                Flutter mobile application development for IOS and Android.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">ASP.NET Core</h3>
              <p className="text-lg pt2 pb-4">
                ASP.NET Core website development using Entity Framework 6.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">React JS.</h3>
              <p className="text-lg pt2 pb-4">
                Website development using Facebook's open source Javascript library.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Android</h3>
              <p className="text-lg pt2 pb-4">
                Android mobile applications development using XML and Java languages.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Firebase</h3>
              <p className="text-lg pt2 pb-4">
               Google's firebase authentication, cloud firestore and database storing services.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Microsoft SQL Server</h3>
              <p className="text-lg pt2 pb-4">
                Database development using relational database for storing and retrieving data.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">HTML & CSS</h3>
              <p className="text-lg pt2 pb-4">
                Website development using html and the style sheet language CSS.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Prolog</h3>
              <p className="text-lg pt2 pb-4">
                Logic programming language used to make artificial intelligence systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
