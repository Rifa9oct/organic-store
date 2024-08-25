

const RegisterForm = () => {

    return (
        <>
            <form action="#" method="post" autocomplete="off">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="name" className="text-gray-600 mb-2 block">Full Name</label>
                        <input type="text" name="name" id="name"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Email</label>
                        <input type="email" name="email" id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
                        <input type="password" name="password" id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******" required />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the<a
                            href="#" className="text-primary">terms & conditions</a></label>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Create an account</button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;