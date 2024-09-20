import ItemCards from "./ItemCards"

const RestaurantCategory = ({ data }) => {
    // console.log(data)
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                {/* Accordion header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔻</span>
                </div>
                {/* Accordion body  */}
                <ItemCards items={data.itemCards}></ItemCards>
            </div>

        </div>

    )
}

export default RestaurantCategory