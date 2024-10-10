import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-black py-6 dark:border-slate-700">
            <div className="container mx-auto flex flex-col justify-between items-center">
                <div>
                    <h1 className="font-jersey20 font-bold text-4xl">
                        
                        <Link href={'/'}>
                            <span>&lt;DevHUB/&gt;</span>
                        </Link>

                    </h1>
                </div>
            </div>

            <div className="container mx-auto mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                <p>&copy;2024</p>
            </div>
        </footer>
    );
}

export default Footer;
