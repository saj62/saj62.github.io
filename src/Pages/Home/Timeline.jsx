import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import timelineElements from "../../data/timelineElements";

export default function Timeline() {
    return (
        <div className="flex flex-col">
            <Container>
                <div className="timeline-header">
                    <h2 className="text-purple sm:pt-6 lg:pt-0">Experience</h2>
                </div>
            </Container>
            <div>
                <VerticalTimeline className="vertical-timeline-education" layout="1-column-left" lineColor="#5D5D81">
                    {
                        timelineElements.map(element => {
                            return (
                                <VerticalTimelineElement key={element.key} iconStyle={{ background: "#5D5D81"}} contentStyle={{ background: "#FEFCFD"}}
                                >
                                    <h4 className="text-light-purple">{element.date}</h4>
                                    <h3 className="text-purple font-extrabold">{element.location}</h3>
                                    <h4 className="text-light-purple">{element.position}</h4>
                                    <h5 className="text-light-purple">{element.description}</h5>
                                </VerticalTimelineElement>
                            );
                        })}
                </VerticalTimeline>
            </div>
        </div>
    );
}