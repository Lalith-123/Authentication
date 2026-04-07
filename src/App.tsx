import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Password from "./components/knowledgeBased/Password";
import Simple from "./components/knowledgeBased/password/Simple";
import Hashed from "./components/knowledgeBased/password/Hashed";
import Session from "./components/knowledgeBased/password/Session";
import JWT from "./components/knowledgeBased/password/JWT";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/knowledge_Password" element={<Password />} />
      <Route path="/knowledge_Password/simple" element={<Simple />} />
      <Route path="/knowledge_Password/hashed" element={<Hashed />} />
      <Route path="/knowledge_Password/session" element={<Session />} />
      <Route path="/knowledge_Password/JWT" element={<JWT />} />
    </Routes>
  );
}

export default App;
