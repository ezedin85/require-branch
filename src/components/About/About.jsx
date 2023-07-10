import image from "../../assets/image.png"
import image2 from "../../assets/coding.jpg"

function About() {
  return (
    <div id="about" className="py-20 mx-auto w-5/6 md:w-4/5">
        <div className="text-center mb-16">
            <p>Get to Know</p>
            <h1 className="text-my_aqua text-4xl">About Me</h1>
        </div>

        <div className="flex justify-between flex-col md:flex-row">
            <div className=" md:mx-0 sm:mx-auto md:w-3/6 h-96 pt-10 transform scale-90 md:scale-100 ">
                <div className="bg-white md:mx-auto h-72 w-72 rounded-2xl">
                    <div className="relative overflow-hidden h-72 w-72 rounded-2xl transform rotate-12 hover:rotate-0" style={{backgroundImage: `url(${image2})`, backgroundSize: "288px 288px", backgroundRepeat:"no-repeat"}}></div>
                </div>
            </div>

            <div className="md:w-3/6">
                <div className="flex flex-wrap gap-3 sm:justify-center md:justify-start mb-6 md:mb-8">
                    <a href="mailto: ezedinnuru85@gmail.com" className="bg-blue-900 p-5 text-center border border-transparent rounded-xl hover:bg-transparent hover:border-white transition duration-150">
                        <i class="fa-solid fa-envelope"></i>
                        <h2>Contact me</h2>
                    </a>
                    <a href="https://github.com/ezedin85" className="bg-blue-900 p-5 text-center border border-transparent rounded-xl hover:bg-transparent hover:border-white transition duration-150">
                        <i class="fa-brands fa-github"></i>
                        <h2>GitHub</h2>
                    </a>
                    <a href="https://linkdin.com/in/ezedin85nuru" className="bg-blue-900 p-5 text-center border border-transparent rounded-xl hover:bg-transparent hover:border-white transition duration-150">
                        <i class="fa-brands fa-linkedin"></i>
                        <h2>Linkedin</h2>
                    </a>
                </div>

                <div>
                    <p className="pb-5 md:text-xl">
                    Innovative Experienced Full Stack Developer in developing and maintaining web applications using latest web development technologies such as Node.js, Express, React, MongoDB, and MySQL. 
                    </p>
                    <a href="mailto: ezedinnuru85@gmail.com" className="mr-2 border text-my_navy bg-my_aqua border-transparent p-2 rounded hover:text-my_aqua hover:bg-transparent hover:border-my_aqua">Let's Talk</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About