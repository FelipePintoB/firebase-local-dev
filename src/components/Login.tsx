import { useState } from "react"
import { 
    createWithEmailAndPasswordService, 
    signInWithEmailAndPasswordService } from "../services/fbAuthServices"
import { classNames } from "../utils/styleFunctions";

export const Login = () => {
    const [loading, setLoading] = useState(false);

    const createHandler = async () => {
        try {
            setLoading(true);
            await createWithEmailAndPasswordService("test@email.com", "Test1234.");
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    const loginHandler = async () => {
        try {
            setLoading(true);
            await signInWithEmailAndPasswordService("test@email.com", "Test1234.")
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
                        `${loading ? "opacity-50" : "opacity-100"}`,
                        )}
                    onClick={() => {createHandler()}}
                    disabled={loading}
                    >
                    Create test user
                </button>
                <button className={classNames(
                        "py-2 px-4 rounded-xl bg-emerald-300",
                        `${loading ? "opacity-50" : "opacity-100"}`,
                        )}
                    onClick={() => {loginHandler()}}
                    disabled={loading}
                    >
                    Login User
                </button>
            </div>
        </div>
    )
}
