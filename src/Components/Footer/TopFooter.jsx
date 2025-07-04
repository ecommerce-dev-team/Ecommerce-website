import {
  advantages,
  Beverages,
  Breads_Bakery,
  Breakfast_Dairy,
  Fruit_Vegetables,
  Meat_Seafood,
} from "./Data";

const TopFooter = () => {
  return (
    <>
      <div className="top mb-5 py-5 ">
        <ul className="flex gap-10 flex-wrap md:flex-nowrap justify-center p-5">
          {advantages.map((advantage) => {
            return (
              <li
                key={advantage.id}
                className="flex items-center gap-2 md:gap-5 "
              >
                {<advantage.icon />}
                <p className="text">{advantage.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-15 ps-5 pe-5 w-fit mx-auto pb-10">
        <ul className="text-left">
          <h5 className="font-semibold mb-2">Fruit & Vegetables</h5>
          {Fruit_Vegetables.map((item) => {
            return (
              <li key={item.id} className="text-[#71778E]">
                {item.title}
              </li>
            );
          })}
        </ul>

        <ul className="text-left">
          <h5 className="font-semibold mb-2">Breakfast & Dairy</h5>
          {Breakfast_Dairy.map((item) => {
            return (
              <li key={item.id} className="text-[#71778E]">
                {item.title}
              </li>
            );
          })}
        </ul>

        <ul className="text-left">
          <h5 className="font-semibold mb-2">Meat & Seafood</h5>
          {Meat_Seafood.map((item) => {
            return (
              <li key={item.id} className="text-[#71778E]">
                {item.title}
              </li>
            );
          })}
        </ul>

        <ul className="text-left">
          <h5 className="font-semibold mb-2">Beverages</h5>
          {Beverages.map((item) => {
            return (
              <li key={item.id} className="text-[#71778E]">
                {item.title}
              </li>
            );
          })}
        </ul>

        <ul className="text-left">
          <h5 className="font-semibold mb-2">Breads & Bakery</h5>
          {Breads_Bakery.map((item) => {
            return (
              <li key={item.id} className="text-[#71778E]">
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TopFooter;
