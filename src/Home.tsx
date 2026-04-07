import { useState } from "react";
import KnowledgeBased from "./components/knowledgeBased/KnowledgeBased";
import PossessionBased from "./components/possessionBased/PossessionBased";
import CertificateBased from "./components/certificateBased/CertificateBased";
import InherenceBased from "./components/inherenceBased/InherenceBased";
import MultiFactor from "./components/multiFactor/MultiFactor";
import SSO from "./components/sso/SSO";
import TokenBased from "./components/tokenBased/TokenBased";
import TwoFactor from "./components/twoFactor/TwoFactor";
import { IoIosClose } from "react-icons/io";


function Home() {
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(<div>Hello World</div>);
  const [popUpHeading, setPopUpHeading] = useState("Hello World");
  return (
    <div>
      <h1 className="font-bold text-[40px] flex justify-center pt-10">
        Authentication
      </h1>
      <div className="grid grid-cols-4 gap-4 h-100 py-20 px-40 flex justify-items-center items-center">
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(KnowledgeBased);
            setPopUpHeading("Knowledge Based");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Knowledge Based
        </button>
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(PossessionBased);
            setPopUpHeading("Possession Based");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Possession Based
        </button>
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(InherenceBased);
            setPopUpHeading("Inherence Based");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Inherence Based
        </button>
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(MultiFactor);
            setPopUpHeading("Multi Factor");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Multi Factor
        </button>
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(TwoFactor);
            setPopUpHeading("Two Factor");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Two Factor
        </button>
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(TokenBased);
            setPopUpHeading("Token Based");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Token Based
        </button>
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(CertificateBased);
            setPopUpHeading("Certificate Based");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Certificate Based
        </button>
        <button
          onClick={() => {
            setPopUp(true);
            setPopUpContent(SSO);
            setPopUpHeading("Single Sign-On(SSO)");
          }}
          className="h-10 w-50 border border-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          Single Sign-On(SSO)
        </button>
      </div>
      {popUp && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 border border-black bg-white">
          <button
            onClick={() => setPopUp(false)}
            className="absolute top-2 cursor-pointer right-2"
          >
            <IoIosClose className="h-8 w-8"/>
          </button>
          <h1 className="flex justify-center font-bold text-[25px] py-5">
            {popUpHeading}
          </h1>
          <div className="flex justify-center items-center h-full">
            {popUpContent}
          </div>
        </div>
      )}
    </div>
  );
}


export default Home