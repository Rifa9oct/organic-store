

const Price = () => {
    return (
        <div className="pt-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Price</h3>
            <div className="font-poppins mt-4 flex items-center">
                <input
                    type="text" name="min" id="min"
                    className="w-full border focus:border-lime-500 outline-none rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="min" />
                <span className="mx-3 text-gray-500">-</span>
                <input
                    type="text" name="max" id="max"
                    className="w-full border focus:border-lime-500 outline-none rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="max" />
            </div>
        </div>
    );
};

export default Price;