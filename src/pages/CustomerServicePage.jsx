import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "";
import NavBar from "../assets/components/NavBar";
import ChatBox from "../assets/components/ChatBox";
import Welcome from "../assets/components/Welcome";

function CustomerServicePage() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default CustomerServicePage;