import { createContext, useState, useContext } from "react";

const orderContext = createContext();

export const OrderProvider = ({ children }) => {

    const [orderItems, setOrderItems] = useState([]);

    const handleOrder = (item) => {
        setOrderItems((orderItems) => {
            if (!orderItems.find((prev_item) => prev_item.id === item.id)) {
                return [item]
            }

            return orderItems;
        })
        
    }

    const RemoveFromOrder = (item) => {
        setOrderItems(
            orderItems.filter((order) => order !== item)
        );
    }

    console.log(orderItems)

    return (
        <orderContext.Provider value={{ orderItems, handleOrder, RemoveFromOrder }}>
            {
                children
            }
        </orderContext.Provider>
    )

}

export const useOrder = () => {
    return useContext(orderContext);
}