function MultiFactor() {
  return (
    <div className="grid grid-col-1 gap-4 px-40 pb-20 pt-5">
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        Password
      </button>
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        OTP
      </button>
    </div>
  );
}

export default MultiFactor;
