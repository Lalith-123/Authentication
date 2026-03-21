function PossessionBased() {
  return (
    <div className="grid grid-col-1 gap-4 px-40 pb-20 pt-5">
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        OTP
      </button>
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        Hardware Token
      </button>
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        Smart Card
      </button>
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        ATM Card
      </button>
    </div>
  );
}

export default PossessionBased;
