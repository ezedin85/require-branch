
import html_png from '../../assets/html.png'
import css_png from '../../assets/css3.png'
import github_png from '../../assets/github.png'
import git_png from '../../assets/git.png'
import javascript_png from '../../assets/javascript.png'
import react_png from '../../assets/react.png'
import php_png from '../../assets/php.png'
import mysql_png from '../../assets/mysql.png'

import tailwind_png from '../../assets/tailwind.png'

function Experience() {
  return (
    <div id='experience' className='py:10 md:py-20 mx-auto w-5/6 md:w-4/5'>
        <div className="text-center">
            <p>What skills do I have?</p>
            <h1 className="text-my_aqua text-4xl">My Experience</h1>
        </div>

        <div className='flex flex-wrap justify-between gap-y-20 gap-5 md:gap-10 mt-20'>
            <img className='w-20 md:w-40 h-20 object-contain cursor-pointer' src={html_png} title="HTML5" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={css_png} title="CSS3" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={javascript_png} title="JavaScript ES5/ES6" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={react_png} title="React" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={tailwind_png} title="Tailwind" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={git_png} title="Git" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={github_png} title="GitHub" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={mysql_png} title="basic MYSQL" alt=" not found" />
            <img className='w-20  md:w-40 h-20 object-contain cursor-pointer' src={php_png} title="basic PHP" alt=" not found" />
        </div>
    </div>
  )
}

export default Experience