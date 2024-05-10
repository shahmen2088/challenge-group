export const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="bg-white border-gray-200  px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items center">
            <svg
              fill="#000000"
              width="50px"
              height="50px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128 209c-44.735 0-81-36.265-81-81s36.265-81 81-81 81 36.265 81 81-36.265 81-81 81zm22.53-141.14A64.379 64.379 0 0 0 128.5 64a64.352 64.352 0 0 0-22.917 4.19 1317.969 1317.969 0 0 0 21.079 22.104c.77.79 2.042.806 2.831.038 0 0 12.798-12.235 21.038-22.472zm0 121.635c-8.239-10.237-21.05-22.665-21.05-22.665a1.975 1.975 0 0 0-2.806.041s-10.22 10.605-21.09 22.294a64.352 64.352 0 0 0 22.916 4.19 64.379 64.379 0 0 0 22.03-3.86zM89.908 76.531s-26.02 17.694-26.02 51.538c0 33.845 26.02 53.465 26.02 53.465l38.09-39.787 38.376 38.29s27.389-21.385 27.389-52.066c0-30.682-27.739-51.678-27.739-51.678l-25.672 26.32 13.39 13.837 13.112-11.68s6.936 10.757 7.035 23.153c.098 12.396-6.653 24.904-6.653 24.904l-39.191-38.937-37.495 38.69s-7.684-11.61-7.65-25.002c.035-13.393 7.008-24.966 7.008-24.966l12.75 12.488 14.996-12.609-27.746-25.96z"
                fillRule="evenodd"
              />
            </svg>

            <span className="self-center ml-2  text-xl font-semibold whitespace-normal dark:text-white">
              НАРУЖНАЯ РЕКЛАМА
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="w-48 text-center text-gray-800 dark:text-white 
              bg-violet-900 hover:bg-violet-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg
            text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-gray-800"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
