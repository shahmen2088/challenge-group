import MyMarquee from '~/shared/UI/MyMarquee/MyMarquee';

export const Main = () => {
  return (
    <main className="container mx-auto h-full overflow-hidden ">
      <div className="block-section  bg-cover bg-no-repeat bg-center bg-[url('./assets/back.jpg')]">
        <div className="flex justify-end min-h-[700px] flex-col items-center h-full ">
          <div className="mb-14">
            <MyMarquee />
          </div>
          <div className="mb-14">
            <a
              href="#"
              className="w-80 font-semibold text-center text-gray-800 dark:text-white 
          bg-purple-700 hover:bg-purple-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-full
            text-2xl px-4 lg:px-5 py-9 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-gray-800"
            >
              Узнать подробнее
            </a>
          </div>

          <div className=" w-2/6 flex bg-white rounded-3xl shadow-2xl mb-8">
            <p
              className="text-center text-gray-800 dark:text-black 
              font-medium
            text-base px-4 py-4 mr-2"
            >
              Рекламно-производственная компания «РСН» на Васильевском острове
              производит полный цикл работ, необходимых для рекламы и
              процветания вашего бизнеса. От производства рекламных вывесок до
              широкоформатной печати. почему выбирают нас?
            </p>
          </div>
        </div>
      </div>
      <div className="block-section h-full flex justify-evenly flex-col items-center lg:order-2">
        <div className="">
          <h2>ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
        </div>
        <div className="bg-[#f2f3f7] px-4 py-4 rounded-lg shadow-inner">
          <div className="flex items-center">
            <div className="mb-4 mr-4">
              <div className="bg-white px-4 py-4 rounded-lg shadow-inner mb-4">
                <h2>Качество</h2>
                <p>
                  Используем только качественные материалы и современные
                  оборудования.
                </p>
              </div>
              <div className=" bg-white px-4 py-4 rounded-lg shadow-inner mb-4">
                <h2>Цена</h2>
                <p>
                  Предлагаем конкурентосособные цены на услуги, что делает нас
                  доступными для различных типов клиентов.
                </p>
              </div>
            </div>
            <div className="bg-white px-4 py-4 rounded-lg shadow-inner">
              Картинка
            </div>
          </div>
          <div className="bg-white px-4 py-4 rounded-lg shadow-inner">
            <h2>Гарантия</h2>
            <p>
              Представляем гарантию 12 месяцев на вывески, стенды, конструкции и
              други виды продукции
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
