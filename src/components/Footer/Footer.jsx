function Footer() {
  return (
    <div id="footer" className="text-center bg-my_aqua text-black pt-5 pb-14 px-2">

      <a className="block sm:inline-block sm:mx-10 my-4 hover:text-white" href="#home">Home</a>
      <a className="block sm:inline-block sm:mx-10 my-4 hover:text-white" href="#about">About</a>
      <a className="block sm:inline-block sm:mx-10 my-4 hover:text-white" href="#experience">Experience</a>
      <a className="block sm:inline-block sm:mx-10 my-4 hover:text-white" href="#projects">Projects</a>
      <a className="block sm:inline-block sm:mx-10 my-4 hover:text-white" href="mailto: ezedinnuru85@gmail.com">Contact</a>

      <div className="sm:my-5">
        <a className="bg-my_navy text-white px-3 py-2 rounded-md m-2 inline-block" href="https://github.com/ezedin85" title="github"><i class="fa-brands fa-github"></i></a>
        <a className="bg-my_navy text-white px-3 py-2 rounded-md m-2 inline-block" href="https://linkdin.com/in/ezedin85nuru" title="Linkdin"><i class="fa-brands fa-linkedin"></i></a>
        <a className="bg-my_navy text-white px-3 py-2 rounded-md m-2 inline-block" href="mailto: ezedinnuru85@gmail.com" title="Gmail"><i class="fa-solid fa-envelope"></i></a>
      </div>
        <p className="pt-5">© 1444 Copyright. All rights reserved. Ezedin Nuru - ananas Digital</p>
    </div>
  )
}

export default Footer