import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, subtitle, description, imgUrl, codeUrl, appUrl }) => {
    return (
        <Col lg={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Gif showing a brief demo of the service"/>
                <div className="proj-txtx">
                    <h3>{title}</h3>
                    <h5>{subtitle}</h5>
                    <span>{description}</span>
                    <div>
                        <div>
                            {codeUrl && <button onClick = {() => {window.open(codeUrl, '_blank')}}><span>Code</span></button>}
                            {appUrl && <button onClick = {() => {window.open(appUrl, '_blank')}}><span>App</span></button>}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
