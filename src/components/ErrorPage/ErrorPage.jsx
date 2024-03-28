import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full mt-32 p-16  text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-extrabold text-black md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 font-bold text-gray-400">But don't worry, you can find plenty of other things on our homepage.</p>
			<div>
                <Link to="/"><a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</a></Link>
            </div>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default ErrorPage;