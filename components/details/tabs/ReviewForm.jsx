
const ReviewForm = () => {
    return (
        <div className="mb-20 font-poppins">
            <h1 className="text-xl">Please, Give your review!</h1>
            <div className="lg:w-[1170px] p-[26px] border-2 mt-5">
                <h1 className="text-xl text-gray-600">Review of “Assorted Coffee”</h1>
                <p className="text-gray-500 mt-2">Your email address will not be published. Required fields are marked *</p>

                <h3 className="text-lg my-2 text-gray-700">Your rating *</h3>
                <h3 className="text-lg my-2 text-gray-700">Your review *</h3>
                <textarea name="message" id="message" placeholder="write here..." cols="45" rows="3" className="outline-lime-500 w-full text-gray-500 p-5 shadow"></textarea>

                <div className="flex gap-10" >
                    <div className="w-[550px]">
                        <label htmlFor="name" className="text-lg my-2 text-gray-700 block">Name *</label>
                        <input type="text" placeholder="youre name" className="w-full shadow p-3 outline-lime-500" />
                    </div>
                    <div className="w-[550px]">
                        <label htmlFor="email" className="text-lg my-2 text-gray-700 block">Email *</label>
                        <input type="text" placeholder="youremail@domain.com" className="w-full shadow p-3 outline-lime-500" />
                    </div>
                </div>

                <div className="flex gap-2 mt-3 text-gray-500">
                    <input type="checkbox" name="" id="" />
                    <p>Save my name, email, and website in this browser for the next time I comment.</p>
                </div>

                <button className="mt-4 bg-lime-600 hover:bg-lime-500 text-white px-8 py-3 rounded-md">Submit</button>
            </div>
        </div>
    );
};

export default ReviewForm;