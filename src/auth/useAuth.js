import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const useAuth = () => {
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        let authUser;
        let error;
        try {
            const res = await signInWithPopup(auth, googleProvider);
            authUser = res.user;
            console.log(user);
        } catch (err) {
            error = "some is wrong try again"
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
            console.log("logging in with", userCredential);
            authUser = userCredential.user;
        } catch (err) {
            if (err.message === "Firebase: Error (auth/wrong-password).") {
                error = "wrong password"
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
            console.log("logging in with", userCredential);
            user = userCredential.user;
            console.log(user);
        } catch (err) {
            const errorMessage = err.message;
            console.log(errorMessage);
            if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                error = "email already in use. try another."
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
