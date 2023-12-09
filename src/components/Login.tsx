import { useMemo, useState } from "react"
import { 
    createWithEmailAndPasswordService, 
    signInWithEmailAndPasswordService } from "../services/fbAuthServices"
import { classNames } from "../utils/styleFunctions";
import { UserCredential } from "firebase/auth";

type Props = {
    user: UserCredential | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserCredential | undefined>>
}

export const Login = ({user, setUser}: Props) => {
    const [loading, setLoading] = useState(false);

    const disable = useMemo(() => {
        return loading || !!user;
    }, [loading, user]);

    const createHandler = async () => {
        try {
            setLoading(true);
            const newUser = await createWithEmailAndPasswordService("test@email.com", "Test1234.");
            setUser(newUser);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    const loginHandler = async () => {
        try {
            setLoading(true);
            const newUser = await signInWithEmailAndPasswordService("test@email.com", "Test1234.");
            setUser(newUser);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-1 self-center items-center">
            <h2 className="text-3xl font-bold underline">
                Login Page
            </h2>
            <div className="max-w-[300px] flex flex-col gap-3 my-4">
                <button className={classNames(
                        "py-2 px-4 rounded-xl bg-orange-300",
                        `${disable ? "opacity-50" : "opacity-100"}`,
                        )}
                    onClick={() => {createHandler()}}
                    disabled={disable}
                    >
                    Create test user
                </button>
                <button className={classNames(
                        "py-2 px-4 rounded-xl bg-emerald-300",
                        `${disable ? "opacity-50" : "opacity-100"}`,
                        )}
                    onClick={() => {loginHandler()}}
                    disabled={disable}
                    >
                    Login User
                </button>
            </div>
        </div>
    )
}
