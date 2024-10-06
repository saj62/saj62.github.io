import Timeline from "./Timeline";
import Skills from "./Skills";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="flex sm:p-4 lg:p-10 lg:ml-10">
            <div className="">
                <h1 className="text-purple">About</h1>
                <div className="flex justify-around sm:flex-col lg:flex-grid-row lg:gap-x-10 place-content-center">
                    <h6 className="text-light-purple">
                        <h6 className="pt-2">Hey there, my name is <span className="font-bold">Sarah</span>
                            , and I'm from <span className="font-bold">Dallas, TX</span>
                            . I'm currently pursuing a Bachelor’s of Science (B.S.) in Computer Science from The University of Texas at Dallas. In high school, I decided to pursue a career that would combine my interests in Math and Art, finally settling on <span className="font-bold">Computer Science</span>.</h6>{" "}
                        <br />
                        <h6 className="pt-1">My main focus areas are <span className="font-bold">full stack software development </span> and <span className="font-bold">machine learning </span>. I'm also exploring the exciting fields of AR/VR and working as an undergraduate researcher, delving into innovative projects that push the boundaries of technology.</h6>{" "}
                        <br />
                        <h6 className="pt-1 pb-4">When I’m not building software projects, I express my creativity through drawing and making art. Additionally, I work as a designer for <a href="https://ripple.hackutd.co/" className="font-bold hover:text-[#40B7BA] hover:underline" target="_blank" rel="noopener noreferrer">HackUTD</a>, where I collaborate with my team to create logos and assets for the largest hackathon in Texas.</h6>
                    </h6>
                    <div className="flex md:flex-row lg:flex-row sm:flex-col">
                        <div className="sm:pt-6">
                            <Timeline />
                        </div>
                        <div className="sm:pt-6">
                            <Skills />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}