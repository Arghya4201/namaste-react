import { CDN_URL } from "../utils/constants";

const ItemCards = ({ items }) => {
    return (
        <div className="w-full">
            {items.map((item) => (
                <div key={item.card.info.id} className="flex justify-between p-4 m-4 border-b-2 border-gray-200 text-left">
                    <div className="w-9/12"> {/* Corrected width class */}
                        <div className="py-4">
                            <span>{item.card.info.name}</span>
                            <span>{item.card.info.price ? ` - ₹${item.card.info.price / 100}` : ` - ₹${item.card.info.defaultPrice / 100}`}</span>
                        </div>
                        <p className="text-xs text-gray-500">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="h-36 w-full object-cover" /> {/* Added w-full for full width */}
                        <button className="bg-white border rounded-lg border-green-500 p-1 m-auto">Add +</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemCards;
