import project1_img from '../../assets/project1.png'
import project2_img from '../../assets/project2.png'
import project3_img from '../../assets/project3.png'

function Projects() {
  return (
    <div id="projects" className='py-20 mx-auto sm:w-5/6 md:w-4/5 '>
        <div className="text-center mb-10">
            <p>My recent work</p>
            <h1 className="text-my_aqua text-4xl">Portfolio</h1>
        </div>

        <div className='flex flex-wrap justify-between'>
            <div className='experience_card'>
                <img className='w-full h-56 object-cover rounded-3xl' src={project1_img} alt="" />
                <h1 className='text-yellow-300 mt-6 text-2xl font-bold'>Self-examination system for TVET students</h1>
                <p className='text-lg mt-1 mb-6'>
                    This online platform offers COC exam tutorials and self-examination system for
                    accounting TVET students. Currently, the site has nearly 100 registered TVET students</p>
                {/* <a href="" className="transparent_button" >Github</a> */}
                <a href="http://lemalef.epizy.com/" target="_blank" className="filled_button">Live Demo</a>                
            </div>
            <div className='experience_card'>
                <img className='w-full h-56 object-cover rounded-3xl' src={project2_img} alt="" />
                <h1 className='text-yellow-300 mt-6 text-2xl font-bold'>Book's search engine - Google API</h1>
                <p className='text-lg mt-1 mb-6'>HazE Books is a search engine for books. to build this website I used the google Api that has over 600,000 books.</p>
                <a href="https://github.com/ezedin85/HazE_Books" target="_blank" className="transparent_button" >Github</a>
                <a href="https://ezedin85.github.io/HazE_Books/" target="_blank" className="filled_button">Live Demo</a>
            </div>
            <div className='experience_card'>
                <img className='w-full h-56 object-cover rounded-3xl' src={project3_img} alt="" />
                <h1 className='text-yellow-300 mt-6 text-2xl font-bold'>(TTS) Text to Speach Converter</h1>
                <p className='text-lg mt-1 mb-6'>
                    This TTS Website is an online text-to-speech reader. It reads out loud texts with natural sounding voices. 
                </p>
                <a href="https://github.com/ezedin85/haze-text-to-speach" target="_blank" className="transparent_button" >Github</a>
                <a href="https://ezedin85.github.io/haze-text-to-speach/" target="_blank" className="filled_button">Live Demo</a>
            </div>
            {/* <div className='experience_card'>
                <img className='w-full h-56 object-cover rounded-3xl' src={project3_img} alt="" />
                <h1 className='text-yellow-300 mt-6 text-2xl font-bold'>Lemalef COC</h1>
                <p className='text-lg mt-1 mb-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</p>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div>
            <div className='experience_card'>
                <img className='w-full h-56 object-cover rounded-3xl' src={project1_img} alt="" />
                <h1 className='text-yellow-300 mt-6 text-2xl font-bold'>Lemalef COC</h1>
                <p className='text-lg mt-1 mb-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</p>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div>
            <div className='experience_card'>
                <img className='w-full h-56 object-cover rounded-3xl' src={project2_img} alt="" />
                <h1 className='text-yellow-300 mt-6 text-2xl font-bold'>Lemalef COC</h1>
                <p className='text-lg mt-1 mb-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</p>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div> */}
        </div>
    </div>
  )
}

export default Projects