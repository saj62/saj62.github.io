import Timeline from "./Timeline";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="hero--section--content--box">
                <h1 className="section--title">About</h1>
                <div className="about--section--box">
                    <h6 className="about-text">
                        <span>I’m Sarah, currently pursuing a Bachelor’s of Science (B.S.) in Computer Science from The University of Texas at Dallas. In high school, I decided to pursue a career that would combine my interests in Math and Art, finally settling on Computer Science.</span>{" "}
                        <br />
                        <span>My main focus areas are full stack engineering and machine learning. I'm also exploring the exciting fields of AR/VR and working as an undergraduate researcher, delving into innovative projects that push the boundaries of technology.</span>{" "}
                        <br />
                        <span>When I’m not building software projects, I express my creativity through drawing and making art. Additionally, I work as a designer for HackUTD, where I collaborate with a team to create logos and assets for the largest hackathon in Texas.</span>
                    </h6>
                    <div className="timeline-text">
                        <Timeline />
                    </div>
                </div>
            </div>
        </section>
    )
}