import AwesomeSlider from 'react-awesome-slider';
import ReviewsItem from './ReviewsItem';
import reviewsData from './reviewsData.json';

export const Reviews = () => {
  // const reviewsJSX = reviewsData ? (
  //   reviewsData.map((item) => (
  //     <ReviewsItem
  //       key={item.id}
  //       name={item.name}
  //       level={item.level}
  //       stars={item.stars}
  //       day={item.day}
  //       text={item.text}
  //     />
  //   ))
  // ) : (
  //   <div>Нет данных</div>
  // );

  const slider = (
    <AwesomeSlider buttons>
      {reviewsData.map((item) => (
        <ReviewsItem
          key={item.id}
          name={item.name}
          level={item.level}
          stars={item.stars}
          day={item.day}
          text={item.text}
        />
      ))}
    </AwesomeSlider>
  );
  return (
    <div className="mb-[50px]">
      <div className="text-center">
        <h2 className="font-bold text-5xl py-7">ОТЗЫВЫ</h2>
      </div>
      {slider}
    </div>
  );
};

{
  /* <div className="w-full rounded-[25px] py-[25px] px-[25px] shadow-lg shadow-black">
        <div className="flex items-center mb-4">
          <div className="w-[70px] h-[70px] bg-black rounded-full mr-4"></div>
          <div>
            <h2>Буронов Шохрух</h2>
            <p>Знаток города 17 уровня</p>
          </div>
        </div>
        <div>
          <div>
            <p>
              *****
              <span>14 июня</span>
            </p>
          </div>
          <p>
            Хороший исполнитель, по срокам вышло чуть дольше, чем было
            согласованно, но ценник вкусный и качество отличное, спасибо!
          </p>
        </div>
      </div> */
}
