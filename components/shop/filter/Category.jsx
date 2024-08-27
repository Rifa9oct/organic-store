
const Category = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-10">Categories</h3>

            <div className="font-poppins space-y-2">
                <div className="flex items-center">
                    <input
                        type="checkbox" name="groceries"
                        className="focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="groceries" className="text-[#8BC34A] ml-3 cursor-pointer">Groceries</label>
                    <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox" name="juice"
                        className="focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="juice" className="text-[#8BC34A] ml-3 cursor-pointer">Juice</label>
                    <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
            </div>
        </div>
    );
};

export default Category;