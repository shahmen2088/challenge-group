export const Guarantee = () => {
  return (
    <div className="block-section h-full flex justify-evenly flex-col items-center lg:order-2">
      <div className="">
        <h2 className="font-bold text-5xl py-7">ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
      </div>
      <div className="bg-[#f2f3f7] px-4 py-4 rounded-lg shadow-inner">
        <div className="flex items-center">
          <div className="mb-4 mr-4">
            <div className="w-full bg-white px-4 py-4 rounded-lg shadow-inner mb-4">
              <h2 className="font-bold text-2xl">Качество</h2>
              <p>
                Ответственность перед клиентом за качество конечного результата,
                поэтому осуществляем контроль на каждом этапе. В случае
                форс-мажорных обстоятельств не оставим заказчика один на один с
                проблемой. Примем все меры для разрешения сложной ситуации и
                выполним свои обязательства.
              </p>
            </div>
            <div className="w-full bg-white px-4 py-4 rounded-lg shadow-inner mb-4">
              <h2 className="font-bold text-2xl">Цена</h2>
              <p>
                Предлагаем конкурентосособные цены на услуги, что делает нас
                доступными для различных типов клиентов.
              </p>
            </div>
            <div className="w-full bg-white px-4 py-4 rounded-lg shadow-inner mb-4">
              <h2 className="font-bold text-2xl">Гарантия</h2>
              <p>
                Представляем гарантию 12 месяцев на вывески, стенды, конструкции
                и други виды продукции
              </p>
            </div>
            <div className="w-full bg-white px-4 py-4 rounded-lg shadow-inner mb-4">
              <h2 className="font-bold text-2xl">Доставка</h2>
              <p>
                Доставим по Санкт-Петербургу готовую продукцию в день сдачи
                производством. Также организуем адресную доставку по России.
              </p>
            </div>
            <div className="w-full bg-white px-4 py-4 rounded-lg shadow-inner">
              <h2 className="font-bold text-2xl">Быстрый расчет</h2>
              <p>
                Оперативно рассчитаем срок и предварительную стоимость работы
                даже при минимальной конкретике по заказу. По мере получения
                подробной информации предоставим окончательный расчёт.
              </p>
            </div>
          </div>
          <div className="w-full h-screen bg-white px-4 py-4 rounded-lg shadow-inner bg-cover bg-no-repeat bg-center bg-[url('./assets/man.jpg')]"></div>
        </div>
      </div>
    </div>
  );
};
