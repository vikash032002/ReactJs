const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-amber-600 p-4 m-4">Contact us Page</h1>
            <form>
                <input type="text" className="border-2 m-2 p-2 rounded-sm" placeholder="name" />
                <input type="text" className="border-2 m-2 p-2 rounded-sm" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
                    submit
                </button>
            </form>
        </div>
    );
};

export default Contact;