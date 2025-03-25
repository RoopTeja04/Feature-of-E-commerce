import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "../Carts&Orders/cartContext";
import { useOrder } from "../Carts&Orders/orderContext";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
    const initialValues = {
        name: "",
        emailId: "",
        phoneNumber: "",
        address: "",
        password: "",
        confirmPassword: "",
    };

    const { cartItems } = useCart();
    const { orderItems } = useOrder();
    
    const [account, setAccount] = useState(() => {
        const savedAccount = localStorage.getItem("UserAddress");
        return savedAccount ? { ...initialValues, ...JSON.parse(savedAccount) } : initialValues;
    });

    useEffect(() => {
        if (localStorage.getItem("Login") === "true") {
            const currentUser = localStorage.getItem("CurrentUser");
            const currentPassword = localStorage.getItem("CurrentPassword");

            setAccount(prev => ({
                ...prev,
                name: currentUser,
                password: currentPassword,
                confirmPassword: currentPassword,
                cartItems: cartItems,
                orderItems: orderItems,
            }));
        }
    }, [cartItems, orderItems]);

    return (
        <AccountContext.Provider value={{ account, setAccount }}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccount = () => {
    return useContext(AccountContext);
};
