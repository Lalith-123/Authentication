import { Link } from "react-router-dom";

function Password() {
  return (
    <div className="grid grid-cols-2 gap-4 h-80 py-20 px-40 flex justify-items-center items-center">
      <Link to="/knowledge_Password/simple">
        <button className="w-80 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
          Simple Username + Password (Basic)
        </button>
      </Link>
      <Link to="/knowledge_Password/hashed">
        <button className="w-80 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
          Hashed Password Authentication (Standard)
        </button>
      </Link>
      <Link to="/knowledge_Password/session">
        <button className="w-80 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
          Session-Based Login
        </button>
      </Link>
      <Link to="/knowledge_Password/JWT">
        <button className="w-80 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
          JWT-Based Login
        </button>
      </Link>
    </div>
  );
}

export default Password;
