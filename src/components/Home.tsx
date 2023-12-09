import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../libs/firebase";
import { classNames } from "../utils/styleFunctions";

export const Home = () => {
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, []);

    const logoutHandler = () => {
        try {
            setLoading(true);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(true);
        }
    }

    const publicFunction = () => {
        try {
            setLoading(true);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(true);
        }
    }

    const privateFunction = () => {
        try {
            setLoading(true);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(true);
        }
    }

    return (
        <div className="grid grid-cols-2">
            <h2 className="text-3xl font-bold underline col-span-2">
                Home Page
            </h2>
            <div className="max-w-[300px] flex flex-col gap-3 my-4">
                <h3>
                    Public functions
                </h3>
                <button className={classNames(
                        "py-2 px-4 rounded-xl bg-purple-300",
                        `${loading ? "opacity-50" : "opacity-100"}`,
                        )}
                    onClick={() => {publicFunction()}}
                    disabled={loading}
                    >
                    Function 1
                </button>
            </div>
            
            <div className="max-w-[300px] flex flex-col gap-3 my-4">
                <h3>
                    Private Function
                </h3>
                <button className={classNames(
                        "py-2 px-4 rounded-xl bg-blue-300",
                        `${loading ? "opacity-50" : "opacity-100"}`,
                        )}
                    onClick={() => {privateFunction()}}
                    disabled={loading}
                    >
                    Function 1
                </button>
            </div>
            <div className="max-w-[300px] flex flex-col gap-3 my-4">
                <h3>
                    Apps settings
                </h3>
                <button className={classNames(
                        "py-2 px-4 rounded-xl bg-yellow-300",
                        `${loading ? "opacity-50" : "opacity-100"}`,
                        )}
                    onClick={() => {logoutHandler()}}
                    disabled={loading}
                    >
                    Logout
                </button>
            </div>
        </div>
    )
}
