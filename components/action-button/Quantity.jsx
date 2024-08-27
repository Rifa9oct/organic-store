
const Quantity = () => {

    return (
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <button
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >-</button>
            <div className="h-8 w-8 text-base flex items-center justify-center">1</div>
            <button
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >+</button>
        </div>
    );
};

export default Quantity;
