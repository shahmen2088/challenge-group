export const AboutUs = () => {
  return (
    <div className="block-section h-full flex justify-evenly flex-col items-center lg:order-2">
      <div className="">
        <h2 className="font-bold text-5xl py-7">О НАС</h2>
      </div>
      <div className="bg-[#f2f3f7] px-4 py-4 rounded-lg shadow-inner">
        <div className="flex items-center">
          <div className="mb-4 mr-4">
            <div className="flex h-[220px] items-center w-full bg-white px-4 py-4 rounded-lg shadow-inner mb-4">
              <p>
                Используем самое современное оборудование всемирно известных
                производителей, таких как Roland, Graphtec, Mefy
              </p>
              <div className="h-[150px] w-4/12 ">
                <div className="h-full w-auto bg-cover bg-no-repeat bg-center bg-[url('./assets/master.png')]"></div>
                <p className=" font-bold text-lg">ПРОИЗВОДСТВО</p>
              </div>
            </div>
            <div className="flex h-[220px] items-center w-full bg-[#ffb800] px-4 py-4 rounded-lg shadow-inner mb-4">
              <p>
                Берем на себя полную ответственность за процесс установки
                вывесок, баннеров, стендов и других объектов реклами
              </p>
              <div className="items-center flex h-[200px] w-4/12 ">
                <div className="h-full w-full bg-cover bg-no-repeat bg-center bg-[url('./assets/narrow.png')]"></div>
                <p className="writing-mode-vertical font-bold text-lg">
                  УСТАНОВКА
                </p>
              </div>
            </div>
            <div className="flex h-[220px] text-white items-center w-full bg-black px-4 py-4 rounded-lg shadow-inner mb-4">
              <p>
                Используем самое современное оборудование всемирно известных
                производителей, таких как Roland, Graphtec, Mefy
              </p>
              <div className="h-[150PX] w-4/12 ">
                <div className="font-bold text-lg h-full w-auto bg-cover bg-no-repeat bg-center bg-[url('./assets/box.png')]">
                  ДОСТАВКА
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
