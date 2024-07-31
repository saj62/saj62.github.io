import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";

export default function Timeline() {
    return (
        <div>
            <Container>
                <div className="timeline-header">
                    <h2>Education</h2>
                    <h2>Experience</h2>
                </div>
            </Container>
        </div>
    );
}