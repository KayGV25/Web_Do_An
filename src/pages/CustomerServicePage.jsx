import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "../assets/components/NavBar";
import ChatBox from "../assets/components/ChatBox";
import SignInOut from "../assets/components/SignInOut";
import Welcome from "../assets/components/Welcome";

function CustomerServicePage() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      <SignInOut />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default CustomerServicePage;