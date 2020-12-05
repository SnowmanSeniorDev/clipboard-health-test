export default function Footer() {
    return (
        <footer className="bg-white flex flex-wrap px-7 pb-10 pt-3 border-none">
            <div className="lg:w-2/5 w-full flex flex-col mb-2">
                <h3 className="text-lg font-semibold">About us</h3>
                <p className="text-sm mt-2">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
                <p className="text-sm mt-2">All copyrights reserved © 2020 - Health Explore</p>
            </div>
            <div className="lg:w-2/5 w-full flex flex-col mb-2">
                <h3 className="text-lg font-semibold">Sitemap</h3>
                <a className="text-sm mt-2" href="#">Nurces</a>
                <a className="text-sm mt-2" href="#">Employes</a>
                <a className="text-sm mt-2" href="#">Social Networking</a>
                <a className="text-sm mt-2" href="#">Jobs</a>
            </div>
            <div className="lg:w-1/5 w-full flex flex-col mb-2">
                <h3 className="text-lg font-semibold">Privacy Policy</h3>
                <a className="text-sm mt-2" href="#">Terms of Use</a>
                <a className="text-sm mt-2" href="#">Privacy Policy</a>
                <a className="text-sm mt-2" href="#">Cookie Policy</a>
            </div>
        </footer>
    )
}