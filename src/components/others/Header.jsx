const Header = ({ data, changeUser }) => {
  const userName = data ? data.firstName : "admin";

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser(null);
    
  };

  return (
    <div
      className="flex items-end text-white bg-linear-to-br pb-10 from-[#020617] via-[#0f172a] to-[#020617]

 px-10 py-5 justify-between"
    >
      <h1 className="text-2xl">
        Hello <br />{" "}
        <span className="
  text-3xl font-semibold tracking-tight text-white/90
">
  {userName} 👋
</span>

      </h1>
      <button
        onClick={logOutUser}
        className="
    bg-linear-to-r from-red-600 via-rose-600 to-pink-600
    text-lg px-5 py-2 rounded font-medium text-white
    shadow-lg shadow-red-500/30
    transition-all duration-300 ease-out
    hover:from-red-700 hover:via-rose-700 hover:to-pink-700
    hover:shadow-red-500/50 hover:brightness-110
    hover:cursor-pointer
    active:scale-95
  "
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
