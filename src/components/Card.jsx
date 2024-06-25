export function Card({ item }) {
  return (
    <div
      className={`${item.className} transform transition hover:scale-105 cursor-pointer max-w-xl`}
    >
      <div className='p-8'>
        <div className='text-2xl font-bold'>{item.title}</div>
        <div className='underline underline-offset-4 font-semibold mt-10'>
          SHOW NOW +
        </div>
      </div>
      <div>
        <img className='h-40 w-56 absolute top-5 left-[40%]' src={item.src} />
      </div>
    </div>
  );
}
