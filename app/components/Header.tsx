export function Header() {
  return (
    //need absolute + useEffect with scrolled pos header`s
    <div className="flex flex-row w-fit justify-center px-1 py-3 gap-[266px] items-center">
      <h2 className="font-black">ДеревьЯ</h2>
      <div>
        <a href="">Услуги</a>
        <a href="">О нас</a>
        <a href="">Контакты</a>
      </div>
      <button className="py-2.5 px-4 bg-[#006FEE]">Заказать звонок</button>
    </div>
  );
}
