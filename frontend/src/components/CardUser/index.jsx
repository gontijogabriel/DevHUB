const CardUser = ({ name, role, image, review }) => {
    return (
        <div className="flex w-full p-6 flex-col rounded-lg bg-white shadow-md border border-slate-200">
            <div className="flex items-center gap-4 text-slate-800">
                <img
                    src={image}
                    alt={name}
                    className="relative inline-block h-[58px] w-[58px] rounded-full object-cover"
                />
                <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between">
                        <h5 className="text-xl font-semibold text-slate-800">{name}</h5>
                        <div className="flex items-center gap-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600">
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">{role}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-base text-slate-600 font-light leading-relaxed line-clamp-3">
                    {review}
                </p>
            </div>
        </div>
    );
};

export default CardUser;