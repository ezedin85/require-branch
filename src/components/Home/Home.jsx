import image from "../../assets/image.png"
import cv from "../../data/Ezedin_Nuru_CV.pdf"

function Home() {
  return (
    <div id="home" className="relative h-screen pt-20 mx-auto md:w-4/5 text-center">
        <p>Hello i'm</p>
        <h1 className="text-6xl mt-4 font-poppins">Ezedin Nuru</h1>
        <small className="opacity-70">Front-End Developer</small>

        <div className="my-5">
            <a href={cv} download className="transparent_button">Download CV</a>
            <a href="mailto: ezedinnuru85@gmail.com" className="filled_button">let's Talk</a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
            <div className="h-80 w-72 mx-auto rounded-t-full bg-gradient-to-b from-cyan-500 to-cyen-100">
                <img className="absolute bottom-0" src={image} alt="image not found" />
            </div>
        </div>
        
        <div className="absolute left-10 bottom-10 text-my_aqua">
            <a className="block mb-2 hover:text-white" href="https://github.com/ezedin85" title="github"><i class="fa-brands fa-github"></i></a>
            <a className="block mb-2 hover:text-white" href="https://linkdin.com/in/ezedin85nuru" title="Linkdin"><i class="fa-brands fa-linkedin"></i></a>
            <a  className="block hover:text-white" href="mailto: ezedinnuru85@gmail.com" title="Gmail"><i class="fa-solid fa-envelope"></i></a>
        </div>
    </div>
  )
}

export default Home