import { Routes, Route } from "react-router-dom";

import CreatePartyPage from "./components/CreatePartyPage";
import ListMemberPage from "./components/ListMemberPage";
import LoginPage from "./components/LoginPage";
import PartyListPage from "./components/PartyListPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/partylist" element={<PartyListPage />} />
      <Route path="/createparty" element={<CreatePartyPage />} />
      <Route path="/listmember" element={<ListMemberPage />} />
    </Routes>
  );
}

export default App;
