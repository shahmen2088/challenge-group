type Prop = {
  value: string;
};

export const MarqueeItem = ({ value }: Prop) => {
  return (
    <div
      className="w-80  font-semibold text-center text-gray-800 dark:text-white 
          bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-full
            text-2xl px-4 lg:px-5 py-9 lg:py-2.5 mr-16 focus:outline-none dark:focus:ring-gray-800"
    >
      {value}
    </div>
  );
};
