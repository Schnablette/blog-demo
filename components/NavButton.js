export const NavButton = ({ active, page, setActive }) => {
  return (
    <button
      onClick={() => setActive(page)}
      className={`hover:bg-ocean-600 p-2 rounded-full px-4 w-full mb-2 md:text-left ${
        active === page ? "text-white font-bold" : "text-ocean-200"
      }`}
    >
      {page}
    </button>
  );
};
