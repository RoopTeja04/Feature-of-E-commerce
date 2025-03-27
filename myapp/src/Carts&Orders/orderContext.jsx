import { createContext, useState, useContext } from "react";

const orderContext = createContext();

export const OrderProvider = ({ children }) => {

    const [BookedItems, setBookedItems] = useState([]);

    const [orderItems, setOrderItems] = useState([]);

    const handleOrder = (item) => {
        setOrderItems((orderItems) => {
            setBookedItems([...BookedItems, item]);
            return [item];
        })

    }

    const RemoveFromOrder = (item) => {
        setOrderItems(
            orderItems.filter((order) => order !== item)
        );
        setBookedItems(
            BookedItems.filter((itemOrder) => itemOrder !== item)
        );
    }

    return (
        <orderContext.Provider value={{ BookedItems, orderItems, handleOrder, RemoveFromOrder }}>
            {
                children
            }
        </orderContext.Provider>
    )

}

export const useOrder = () => {
    return useContext(orderContext);
}