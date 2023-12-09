import { auth } from "../libs/firebase"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";

export const createWithEmailAndPasswordService = async (email: string, pass: string) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, pass);
        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating user");
    }
}

export const signInWithEmailAndPasswordService = async (email: string, pass: string) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, pass);
        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating user");
    }
}

export const logoutService = async () => {
    try {
        signOut(auth);
    } catch (error) {
        console.error(error)
        throw new Error("Error on logout")
    }
}
