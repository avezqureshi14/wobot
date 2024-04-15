import me from "../assets/images/avez.jpg"

export default function About() {
    return (
        <section className="mt-9 min-h-screen relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <a href="https://linkedin.com/in/avezqureshi14">
                    <h1 className="text-center font-extrabold text-2xl hover:underline" >Avez Qureshi</h1></a>
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “I'm a passionate Software Developer I like solving Problems using Computer Science, building the Front-End and Back-End of Web Applications using MERN Stack.”
                        </p>
                    </blockquote>
                    <a href="https://linkedin.com/in/avezqureshi14">
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-10 w-10 rounded-full object-cover"
                                src={me}
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <a href="https://linkedin.com/in/avezqureshi14" className="font-semibold text-gray-900 hover:blue ">Avez Qureshi</a>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-600">Software Developer </div>
                            </div>
                        </figcaption>
                    </a>
                </figure>
            </div>
        </section >
    )
}
