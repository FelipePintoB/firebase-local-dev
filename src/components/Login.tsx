import { createWithEmailAndPasswordService } from "../services/fbAuthServices"

export const Login = () => {

    const loginHandler = () => {
        createWithEmailAndPasswordService("test@email.com", "Test1234.")
    }

    return (
        <div className="text-3xl font-bold underline">
            <h2>
                Login Page
            </h2>
            <button className="py-2 px-4 rounded-xl bg-emerald-500"
                onClick={() => {loginHandler()}}>
                Login
            </button>
        </div>
    )
}
