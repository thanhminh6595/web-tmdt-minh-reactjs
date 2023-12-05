const MoreInfo = () => {
  return (
    <>
      <div className="grid grid-cols-3 italic mx-auto py-10 max-w-7xl text-start bg-gray-100 mb-10">
        <div className="ml-28">
          <h1 className="uppercase font-medium">Free shipping</h1>
          <p className="text-gray-400 tracking-wider font-thin text-sm">
            Free shipping worldwide
          </p>
        </div>
        <div className="ml-28">
          <h1 className="uppercase font-medium">24/7 service</h1>
          <p className="text-gray-400 tracking-wider font-thin text-sm">
            Free shipping worldwide
          </p>
        </div>
        <div className="ml-28">
          <h1 className="uppercase font-medium">Festival offer</h1>
          <p className="text-gray-400 tracking-wider font-thin text-sm">
            Free shipping worldwide
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto py-10 max-w-7xl italic">
        <div className="text-lg">
          <h1 className="uppercase font-medium">let's be friends!</h1>
          <p className="text-gray-400 tracking-wider font-thin text-sm">
            Nisi Nisi tempor consequest laboris nisi
          </p>
        </div>
        <form className="flex items-center justify-between">
          <input
            placeholder="Enter your email address"
            className="w-full h-12 border border-solid border-gray-200 focus:outline-none pl-2"
          />
          <button className="bg-slate-900 text-white py-3 px-7">
            Subscibe
          </button>
        </form>
      </div>
    </>
  );
};

export default MoreInfo;
