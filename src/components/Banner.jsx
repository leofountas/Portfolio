import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/leo photo.png";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Web Developer", "Front-end Dev", "Cat Lover"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1 className="txt-rotate">
                {`Hi! I'm Leonardo`} <br></br>
                <span className="wrap">{text}</span>
              </h1>
              <p>
                <p>
                  Aspiring full-stack web developer, my past experiences have
                  allowed me to develop great adaptability in diverse
                  environments across different countries. I&apos;m always ready
                  to dive into new experiences because, as I often remind
                  myself: &quot;There&apos;s always time to learn something new
                  and improve!&quot;
                  <br />
                  Contact me for any opportunities where I can contribute and
                  grow as a developer. I&apos;m eager to bring my skills and
                  enthusiasm to your team and take on exciting new challenges.
                </p>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="glow-img">
              <img src={headerImg} alt="profile picture" width={360} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
