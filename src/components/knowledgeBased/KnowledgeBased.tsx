import { Link } from "react-router-dom";

function KnowledgeBased() {
  return (
    <div className="grid grid-col-1 gap-4 px-40 pb-20 pt-5">
      <Link to="/knowledge_Password">
        <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
          Password
        </button>
      </Link>
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        PIN
      </button>
      <button className="w-60 h-10 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer">
        Security Questions
      </button>
    </div>
  );
}

export default KnowledgeBased;
