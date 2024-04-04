import React from "react";
import GoogleSignin from "../product-images/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignInOut = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
      <>
        {user ? (
          <button onClick={signOut} className="sign-out" type="button">
            Sign Out
          </button>
        ) : (
          <button className="sign-in">
            <img
              onClick={googleSignIn}
              src={GoogleSignin}
              alt="sign in with google"
              type="button"
            />
          </button>
        )}
      </>
  );
};

export default SignInOut;
