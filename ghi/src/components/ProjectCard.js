import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, subtitle, description, imgUrl, codeUrl, appUrl }) => {
    return (
        <Col lg={6}>
            <h3 className="text-center">{title}</h3>
            <h5 className="text-center">〈〈 {subtitle} 〉〉</h5>
            <div className="text-center">
                {codeUrl && <button onClick = {() => {window.open(codeUrl, '_blank')}}><span>Code</span></button>}
                {appUrl && <button onClick = {() => {window.open(appUrl, '_blank')}}><span>App</span></button>}
            </div>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Gif showing a brief demo of the service"/>
                <div className="proj-txtx">
                    <h5>Made with:</h5>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
