export function Sidebar({ children, isOpen, onCloseSidebar }) {
  return (
    <div>
      <div
        className={`p-5 z-50 overflow-y-auto fixed top-0 right-0 h-full w-full shadow-lg md:w-[50%] lg:md-[35%] bg-white transition transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <div>
          <button
            onClick={onCloseSidebar}
            className='absolute right-4 top-4 p-2 text-black font-bold'
          >
            X
          </button>
        </div>
        {children}
      </div>
      {isOpen && (
        <div className='fixed left-0 top-0 h-full w-full bg-black opacity-50'></div>
      )}
    </div>
  );
}
