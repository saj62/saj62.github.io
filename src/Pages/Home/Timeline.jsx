import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import timelineElements from "../../data/timelineElements";

export default function Timeline() {
    return (
        <div>
            <Container>
                <div className="timeline-header">
                    <h2>Experience</h2>
                </div>
            </Container>
            <div>
                <VerticalTimeline className="vertical-timeline-education" layout="1-column-left" lineColor="#5D5D81">
                    {
                        timelineElements.map(element => {
                            return (
                                <VerticalTimelineElement key={element.key} iconStyle={{ background: "#5D5D81"}} contentStyle={{ background: "#EAEAF6"}}
                                >
                                    <h4>{element.date}</h4>
                                    <h3 className="vertical-timeline-element-title">{element.location}</h3>
                                    <h4>{element.position}</h4>
                                    <h5>{element.description}</h5>
                                </VerticalTimelineElement>
                            );
                        })}
                </VerticalTimeline>
            </div>
        </div>
    );
}