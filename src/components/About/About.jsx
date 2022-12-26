import image from "../../assets/image.png"

function About() {
  return (
    <div id="about" className="py-20 mx-auto w-5/6 md:w-4/5">
        <div className="text-center mb-16">
            <p>Get to Know</p>
            <h1 className="text-my_aqua text-4xl">About Me</h1>
        </div>

        <div className="flex justify-between flex-col md:flex-row">
            <div className=" md:mx-0 sm:mx-auto md:w-3/6 h-96 pt-10 transform scale-90 md:scale-100">
                <div className="bg-red-500 md:mx-auto h-72 w-72 rounded-2xl">
                    <div className="relative overflow-hidden bg-yellow-400 h-72 w-72 rounded-2xl transform rotate-12 hover:rotate-0" style={{backgroundImage: `url(${image})`, backgroundSize: "288px 288px", backgroundRepeat:"no-repeat"}}></div>
                </div>
            </div>

            <div className="md:w-3/6">
                <div className="flex flex-wrap gap-3 sm:justify-center md:justify-start mb-6 md:mb-16">
                    <div className="bg-blue-900 p-5 text-center rounded-xl">
                        <i class="fa-solid fa-person-burst"></i>
                        <h2>Experience on several websites</h2>
                    </div>
                    <div className="bg-blue-900 p-5 text-center rounded-xl">
                        <i class="fa-solid fa-person-burst"></i>
                        <h2>Finished Many Projects</h2>
                    </div>
                    <div className="bg-blue-900 p-5 text-center rounded-xl">
                        <i class="fa-solid fa-person-burst"></i>
                        <h2>Worldwide clients</h2>
                    </div>
                </div>

                <div>
                    <p className="pb-5">
                    Frontend Software Engineer seeking an entry-level position with the
                    company to use my skills in coding, troubleshooting complex problems,
                    and assisting in project completion on time.

                    </p>
                    <a href="ezedin38nuru@gmail.com" className="mr-2 border text-my_navy bg-my_aqua border-transparent p-2 rounded hover:text-my_aqua hover:bg-transparent hover:border-my_aqua">Let's Talk</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About