import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const useAuth = () => {
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        let authUser;
        let error;
        try {
            const res = await signInWithPopup(auth, googleProvider);
            authUser = res.user;
        } catch (err) {
            error = "Something is wrong. Try again."
        }
        return { authUser, error };
    };

    const emailLogin = async (email, password) => {
        let authUser;
        let error;
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            authUser = userCredential.user;
        } catch (err) {
            if (err.message === "Firebase: Error (auth/wrong-password).") {
                error = "Wrong password."
            }
        }
        return { authUser, error };
    };

    const emailSignup = async (email, password) => {
        let authUser;
        let error;
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            authUser = userCredential.user;
        } catch (err) {
            const errorMessage = err.message;
            if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                error = "Email already in use. Try another."
            }
        }
        return { authUser, error };
    };

    const signAuthOut = async () => {
        try {
            await signOut(auth);
            console.log("firebase sign out");
        } catch (e) {
            console.log(e);
        }
    };

    return { googleLogin, emailLogin, emailSignup, signAuthOut };
};

export default useAuth;
