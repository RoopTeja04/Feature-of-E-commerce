import React, { useState } from 'react';
import { useCart } from '../../Carts&Orders/cartContext';
import ShirtsData from '../../ShopData/MensWear/shirts';
import { useTheme } from '../../ContextAPI/ThemeContext';
import { Link } from 'react-router-dom';

const Shirts = () => {

    const [selectedNames, setSelectedNames] = useState([]);
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);

    const { AddToCart } = useCart();
    const { theme } = useTheme();

    const handleNameChange = (value) => {
        setSelectedNames((selectedNames) =>
            selectedNames.includes(value)
                ? selectedNames.filter((item) => item !== value)
                : [...selectedNames, value]
        );
    };

    const handleRangeChange = (value) => {
        setSelectedRanges((selectedRanges) =>
            selectedRanges.includes(value) ?
                selectedRanges.filter((item) => item !== value) :
                [...selectedRanges, value]
        )
    }

    const handleStarRating = (value) => {
        setSelectedRating((selectedRating) =>
            selectedRating.includes(value) ?
                selectedRating.filter((item) => item !== value) :
                [...selectedRating, value]
        );
    };



    const filteredData = ShirtsData.filter((data) => {

        const matchName =
            selectedNames.length === 0 ||
            selectedNames.some((item) => data.name.toLowerCase().includes(item.toLowerCase()));


        const MatchPrice =
            selectedRanges.length === 0 ||
            selectedRanges.some((Price) => {
                const [min, max] = Price.split(" to ").map(Number);
                return data.price >= min && data.price <= max;
            })

        const matchRange =
            selectedRating.length === 0 ||
            selectedRating.some((range) => {
                const [min, max] = range.split(" to ").map(Number);
                return data.starRating >= min && data.starRating <= max;
            })

        return matchName && matchRange && MatchPrice;

    })

    return (
        <>
            <div className="min-h-screen flex flex-row w-full">
                <div className={`flex flex-col border-r-2 w-1/6 px-4 py-4 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                    <p className="text-lg font-semibold">Product Name</p>
                    <label>
                        <input type='checkbox' value="Allen Solly" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Allen Solly</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Peter England" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Peter England</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Van Heusen" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Van Heusen</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Levi's" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Levi's</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Benetton" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Benetton</span>
                    </label>
                    <label>
                        <input type='checkbox' value="H&M" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">H&M</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Roadster" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Roadster</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Fabindia" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Fabindia</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Tommy Hilfiger" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Tommy Hilfiger</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Mango" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Mango</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Puma" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Puma</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Wrangler" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Wrangler</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Biba" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Biba</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Zodiac" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Zodiac</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Club Factory" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">Club Factory</span>
                    </label>
                    <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                        Price Range
                    </p>
                    <label>
                        <input type='checkbox' value="2500 to 3000" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹2,500 to ₹3,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="2000 to 2500" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹2,000 to ₹2,500</span>
                    </label>
                    <label>
                        <input type='checkbox' value="1500 to 2000" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹1,500 to ₹2,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="1000 to 1500" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹1,000 to ₹1,500</span>
                    </label>

                    <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                        Star Rating
                    </p>
                    <label>
                        <input type='checkbox' value="4.5 to 5" onChange={(e) => handleStarRating(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">4.5 to 5</span>
                    </label>
                    <label>
                        <input type='checkbox' value="4 to 4.5" onChange={(e) => handleStarRating(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">4 to 4.5</span>
                    </label>
                    <label>
                        <input type='checkbox' value="3.5 to 4" onChange={(e) => handleStarRating(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">3.5 to 4</span>
                    </label>

                </div>
                <div className="flex flex-col px-8 py-8 w-full">
                    {filteredData.length > 0 ? (
                        <div className="grid grid-cols-4 gap-8">
                            {
                                filteredData.map((item) => (
                                    <div className={`border-2 rounded-lg p-6 flex flex-col items-center ${theme === "Light" ? "border-white" : "border-gray-900"}`} key={item.id}>
                                        <Link to={`/home/menswear/shirts-view/${item.name}`} className="flex flex-col items-center" replace>
                                            <img className="h-56 rounded-lg" src={item.imageURL} alt={item.name} />
                                            <div className={`${theme === "Light" ? "border-white" : "border-gray-900"} flex flex-col items-center mt-4 border-t-2 outline-offset-8 w-full`}>
                                                <p className="mt-2 font-semibold text-lg tracking-wide">{item.shortName}</p>
                                                <span className="mt-1 text-lg tracking-wider">{item.price > 0 ? `₹ ${item.price.toLocaleString("hi-IN")}/-` : (<p className='text-red-500 font-semibold tracking-widest'>Out of Stock</p>)}</span>
                                            </div>
                                        </Link>
                                        <div className="flex flex-col space-y-3 mt-4">
                                            <button className="bg-yellow-500 h-10 w-full px-8 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer" onClick={() => AddToCart(item)}>Add To Cart</button>
                                            <button className="bg-green-500 h-10 w-full px-6 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer">Buy Now</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col items-center mt-28">
                                <img
                                    className="h-4/5 w-1/2"
                                    src={`https://www.new4you.in/img/no_products_found.png`} alt="No items found"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Shirts