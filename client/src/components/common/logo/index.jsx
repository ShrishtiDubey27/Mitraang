const Logo = () => {
  return (
    <div className="flex p-5 justify-start items-center gap-2">
      <svg
        width="80"
        height="50"
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chat bubble shape */}
        <path
          d="M10 10 Q10 0, 20 0 L60 0 Q70 0, 70 10 L70 30 Q70 40, 60 40 L30 40 L15 45 L17 35 Q10 35, 10 30 Z"
          fill="#8338ec"
        />
        {/* "M" inside the chat bubble */}
        <path
          d="M25 30 L25 15 L35 30 L45 15 L45 30"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-3xl font-semibold">Mitraang</span>
    </div>
  );
};

export default Logo;
