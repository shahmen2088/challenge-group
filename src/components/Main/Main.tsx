import { AboutUs } from '../BlockAboutUs/AboutUs';
import { Guarantee } from '../BlockGuarantees/Guarantee';
import MyMarquee from '~/shared/UI/MyMarquee/MyMarquee';
import { Video } from '../BlockVideo/Video';

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
      <Guarantee />
      <AboutUs />
      <Video />
    </main>
  );
};
