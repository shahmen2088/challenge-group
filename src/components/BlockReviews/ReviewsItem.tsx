type Props = {
  name: string;
  level: string;
  stars: number;
  day: string;
  text: string;
};

export default function ReviewsItem({ name, level, stars, day, text }: Props) {
  return (
    <div>
      <div className="w-full rounded-[25px] py-[25px] px-[25px] shadow-lg shadow-black">
        <div className="flex items-center mb-4">
          <div className="w-[70px] h-[70px] bg-black rounded-full mr-4"></div>
          <div>
            <h2>{name}</h2>
            <p>{level}</p>
          </div>
        </div>
        <div>
          <div>
            <p>
              {stars}
              <span>{day}</span>
            </p>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
