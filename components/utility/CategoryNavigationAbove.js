function CategoryNavigationAbove({ text, desc }) {
  return (
    <aside className=" w-full grid laptop:hidden gap-y-4 mb-16">
      <h1 className="text-3xl font-semibold">{text}</h1>
      <div>
        <button className="border px-3 text-xs py-1.5 rounded-sm font-bold tracking-wider bg-button">
          <i className="fa-solid fa-wifi"></i> Follow
        </button>
      </div>
      <p>{desc}</p>
      <hr className="border-b bg-gray-600" />
      <div className="flex gap-x-6 justify-center text-xl px-4">
        <div>
          <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-500 duration-300"></i>
        </div>
        <div>
          <i className="fa-brands fa-twitter cursor-pointer hover:text-sky-400 duration-300"></i>
        </div>
        <div>
          <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-600 duration-300"></i>
        </div>
        <div>
          <i className="fa-brands fa-youtube cursor-pointer hover:text-red-600 duration-300"></i>
        </div>
        <div>
          <i className="fa-brands fa-instagram cursor-pointer hover:text-orange-600 duration-300"></i>
        </div>
      </div>
      <hr className="border-b bg-gray-600" />
    </aside>
  );
}

export default CategoryNavigationAbove;
