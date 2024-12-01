import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import welcome from "../../Assests/download.svg";
import { FaRegPenToSquare } from "react-icons/fa6";

const Chat = () => {
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="grid grid-cols-12  mt-2">
      <div className="  col-span-12 lg:col-span-3 rounded-lg h-[calc(100vh-40px)] lg:max-h-[85vh] bg-white shadow-2xl  border-2  ml-2">
        <div className="flex flex-col gap-2   p-4">
          <div className="text-start text-md  flex justify-start gap-2 items-center  ">
            <div className="relative">
              <img
                src={
                  "https://media.licdn.com/dms/image/v2/D4D03AQFRw6UjkAzr8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691257155439?e=1735776000&v=beta&t=m7jcjURhU_ArIckKnhu47GGMsc9_wIc3ulFUZTVo8NE"
                }
                className="rounded-full w-[50px]"
              />
              <span className="absolute right-1 -bottom-0.5 bg-green-400 rounded-lg p-1.5 border border-white"></span>
            </div>

            <div>
              <h1 className="text-lg">Rohit Turkar</h1>
            </div>
          </div>

          <div className="relative mt-2">
            <input
              type="search"
              className="rounded-lg bg-transparent border py-2.5 px-2  border-gray-600 pl-10 text-sm outline-none w-full  "
              placeholder="Search here"
            />
            <CiSearch className="absolute top-2  left-2  " size={24} />
          </div>

          <div className="grid grid-cols-12 gap-2 mt-2 bg-gray-200 rounded-xl px-3 py-2">
            <div className="col-span-4 flex justify-center items-center rounded-lg text-sm bg-white py-1.5 px-2 text-center cursor-pointer">
              All
            </div>
            <div className="col-span-4 flex justify-center items-center rounded-lg text-sm text-center cursor-pointer">
              unRead
            </div>
            <div className="col-span-4 flex justify-center items-center rounded-lg text-sm text-center cursor-pointer ">
              Groups
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3 px-4 mb-2">
          <h1 className=" py-1 text-sm  text-gray-600">Messages</h1>
          <button className="bg-gray-900 text-white text-xs rounded-full p-2 flex gap-1 items-center">
            <FaRegPenToSquare /> New Chat
          </button>-
        </div>

        <div className="flex flex-col gap-2 justify-between items-start mt-2 w-full overflow-y-scroll lg:h-[calc(85vh-250px)] h-[calc(100vh-300px)]    ">
          <div
            className="  pl-4 py-2 pb-4 w-full flex justify-start items-center gap-2 border-b border-gray-200"
            onClick={() => {
              setShow(true);
            }}
          >
            <div className="relative ">
              <img
                src={
                  "https://media.licdn.com/dms/image/v2/D4D03AQFRw6UjkAzr8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691257155439?e=1735776000&v=beta&t=m7jcjURhU_ArIckKnhu47GGMsc9_wIc3ulFUZTVo8NE"
                }
                className="rounded-full max-w-[40px]"
              />
              <span className="absolute right-1 -bottom-0.5 bg-green-400 rounded-lg p-1 border border-white"></span>
            </div>

            <div className="flex flex-col  items-start w-full">
              <div className="flex justify-between items-start w-full ">
                <h1 className="text-sm font-semibold pb-0.5">Me</h1>
                <span className="bg-green-200 text-black rounded-full w-5 h-5 flex justify-center items-center text-xs text-center ">
                  2
                </span>
              </div>

              <p className="text-xs  text-wrap truncate">
                Need to complete this today, any how !
              </p>
            </div>
          </div>
        </div>
      </div>

      {show ? (
        <div
          className={` lg:inline-block  hidden col-span-12 lg:col-span-7 rounded-lg lg:h-[85vh] max-w-full  bg-white shadow-2xl mx-2 relative    `}
        >
          <div className="px-4 py-6 bg-gray-400 max-w-full  w-full h-10 rounded-t-lg flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                className="rounded-full max-w-[40px] h-10 w-10"
              />

              <div className="flex flex-col justify-between ">
                <h1 className="text-sm font-semibold text-gray-700">
                  Rohit Turkar
                </h1>
                <p className="text-xs pt-0.5 text-pretty ">online</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 left-1/2 px-4 transform -translate-x-1/2  w-full ">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleChange}
                className="border p-2 rounded-lg border-gray-900 w-full mb-4"
              />

              <div className="absolute bottom-6 right-2 cursor-pointer">
                <IoIosSend size={22} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` ${
            show ? "lg:col-span-7 " : "lg:col-span-9"
          } lg:flex flex-col justify-center items-center border border-gray-400 hidden col-span-12  rounded-lg lg:h-[85vh] max-w-full  bg-white shadow-2xl mx-2 relative     `}
        >
          <img src={welcome} className="w-[200px] h-[200px] " />
          <p>Welcome to our platform</p>
        </div>
      )}

      <div
        className={` ${
          show ? "lg:flex hidden " : "lg:hidden hidden "
        } lg:col-span-2   rounded-lg h-fit border border-gray-400 p-4 bg-white shadow-2xl  ml-2  flex-col items-start justify-start px-4`}
      >
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          className="rounded-md border border-gray-500  "
        />

        <div className="flex flex-col  items-start justify-between mt-4 ">
          <h1 className="text-lg font-semibold text-gray-700">Rohit</h1>
          <p className="text-sm pt-0.5 text-pretty text-start text-green">
            online
          </p>
        </div>

        <div className="flex flex-col  mt-4 items-start">
          <span className="text-md">About </span>
          <span className="text-xs">Software Engineer</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
