import { Container, Row, Col } from "react-bootstrap"
import { pdfjs, Document, Page } from 'react-pdf';
import resume from '../assets/pdf/greg_herren_resume.pdf';
import "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

export const Resume = () => {
    return (
        <section className="resume" id="resume">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className="download">
                            <h2>Resume</h2>
                            <a target="_blank" rel="noreferrer" href={resume}><span>↓</span></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Document file={resume}>
                            <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={1}></Page>
                        </Document>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
