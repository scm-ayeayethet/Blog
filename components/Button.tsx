"use client";

export default function Button() {
  const onclickhandler = () => {
    console.log("first");
  };
  return (
    <div className="bg-button h-52 brightness-100">
      <button
        className=" lg:bg-blue-500 sm:bg-red-500 bg-slate-800 text-white px-8 py-2 border m-8 rounded-full hover:bg-slate-700 focus:ring-4 ring-red-400 "
        onClick={onclickhandler}
      >
        Click
      </button>
    </div>
  );
}
