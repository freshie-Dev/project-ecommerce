import { createContext, useContext, useState, useEffect ,useReducer } from "react";
import axios from "axios";
import PopUp from "../components/PopUp";




const UserContext = createContext();

const UserProvider = ({ children }) => {
    const url = "https://web-production-8eab.up.railway.app"
    const [openModal, setOpenModal] = useState(false);

    const [error, setError] = useState({
        errorMessage: "",
        errorCode: ""
    });

    const [user, setUser] = useState({
        email: '',
        password: '',
        phone: '',
        type:''
    })

    const resetValues = () => {
        // Reset state after signup
        setUser({
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            type:""
        });
        // setConfirmPass("");
        // setCountry("+92");
    }

    const submitCredentials = async(newUser, code)=> {
        newUser.phone = code + newUser.phone;
        console.log(newUser)
        try {
            const response = await axios.post("http://localhost:3000/register", newUser)
            const data = await response.data;
            console.log(data)
            if (data.token) {
                localStorage.setItem("token", data.token);
            }
            setError({
                errorMessage: "You have successfully authenticated",
                errorCode: "Success"
            }); 
            setOpenModal(true)
        } catch (error) {
            console.error("SignUp failed:", error.response.data.error);
            setError({
                errorMessage: error.response.data.error,
                errorCode: error.response.status
            }); 
            setOpenModal(true)
        }
        
    }
    
    const loginUser = async (user) => {
        try {
            const response = await axios.post("http://localhost:3000/register/login", user);
            const data = response.data;
            console.log(data);
    
            if (data.token) {
                localStorage.setItem("token", data.token);
            }
            setError({
                errorMessage: "You have successfully logged in",
                errorCode: "Success"
            }); 
            setOpenModal(true)
        } catch (error) {
            // Handle error here
            console.error("Login failed:", error.response.data.error);
            setError({
                errorMessage: error.response.data.error,
                errorCode: error.response.status
            }); 
            setOpenModal(true)

        }
    };

    // ----------------------------------------------------------------
    
      
      
    // ----------------------------------------------------------------

    
    
    return (
        <UserContext.Provider value={
            {
                user, setUser,
                submitCredentials,
                loginUser,
                resetValues,
                openModal, setOpenModal,
                error
                // RestorePass
            }
        }>
            {children}
        </UserContext.Provider>
    )
};
const UserContextProvider = () => {
    return (useContext(UserContext))
};

export { UserProvider };
export default UserContextProvider;