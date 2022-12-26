import project1_img from '../../assets/project1.jpg'
import project2_img from '../../assets/project2.jpg'
import project6_img from '../../assets/project6.png'

function Projects() {
  return (
    <div id="projects" className='py-20 mx-auto w-5/6 md:w-4/5 '>
        <div className="text-center mb-10">
            <p>My recent work</p>
            <h1 className="text-my_aqua text-4xl">Portfolio</h1>
        </div>

        <div className='flex flex-wrap justify-between'>
            <div className='experience_card'>
                <img className='w-full only:h-44 object-cover rounded-3xl' src={project1_img} alt="" />
                <h1 className='text-lg my-6'>
                    Lemalef is an online platform which offers COC exam tutorials and self-examination system for
                    accounting TVET students. Currently, the site has nearly 100 registered TVET student</h1>
                <a href="http://lemalef.epizy.com/" className="transparent_button" >Github</a>
                {/* <a className="filled_button">Live Demo</a> */}
            </div>
            <div className='experience_card'>
                <img className='w-full h-44 object-cover rounded-3xl' src={project2_img} alt="" />
                <h1 className='text-lg my-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</h1>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div>
            <div className='experience_card'>
                <img className='w-full placeholder:h-44 object-cover rounded-3xl' src={project6_img} alt="" />
                <h1 className='text-lg my-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</h1>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div>
            <div className='experience_card'>
                <img className='w-full h-44 object-cover rounded-3xl' src={project6_img} alt="" />
                <h1 className='text-lg my-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</h1>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div>
            <div className='experience_card'>
                <img className='w-full h-44 object-cover rounded-3xl' src={project1_img} alt="" />
                <h1 className='text-lg my-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</h1>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div>
            <div className='experience_card'>
                <img className='w-full h-44 object-cover rounded-3xl' src={project2_img} alt="" />
                <h1 className='text-lg my-6'>dolor sit amet consectetur adipisicing elit. Modi, alias.</h1>
                <a href="" className="transparent_button" >Github</a>
                <a href="" className="filled_button">Live Demo</a>
            </div>
        </div>
    </div>
  )
}

export default Projects