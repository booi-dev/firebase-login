import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const useAuth = () => {
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        let user;
        try {
            const res = await signInWithPopup(auth, googleProvider);
            user = res.user;
        } catch (err) {
            console.log(err);
        }
        return user;
    };

    const emailLogin = async (email, password) => {
        let user;
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("logging in with", userCredential);
            user = userCredential.user;
            console.log(user);
        } catch (err) {
            if (err instanceof Error) {
                const errorMessage = err.message;
                console.log(errorMessage);
            }
        }
        return user;
    };

    const signAuthOut = async () => {
        try {
            await signOut(auth);
            console.log("signAuthOut");
        } catch (e) {
            console.log(e);
        }
    };

    return { googleLogin, emailLogin, signAuthOut };
};

export default useAuth;
