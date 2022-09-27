import { Col, Container, Row } from "react-bootstrap";

import SectionOne from "./SectionOne";
import studentData from "../data/data.json";
import SectionTwo from "./SectionTwo";
import GrandTotal from "./GrandTotal";
import SectionThree from "./SectionThree";

const UserView = () => {
  const data = studentData["part-1"];
  const gradeData = studentData["part-2"];
  // console.log(gradeData)
  return (
    <>
      <Container className="border border-dark border-3">
        <Row>
          <Col className=" justify-content-center d-flex fs-4 fw-bold text-danger">
            First Terminal Examination 2018-19
          </Col>
        </Row>
        <Row>
          <Col className="border border-dark border-bottom-0 border-start-0 border-end-0 border-top-1  d-flex justify-content-center fw-bold fs-5 border-1">
            ACADEMICS PERFORMANCE
          </Col>
        </Row>
        <Row className="border border-bottom-0 border-dark border-end-0 border-top-0 border-start-0 border-1">
          {/*Section one  */}
          <Col lg={7} md={7} xl={7} xxl={7} xs={12} sm={12}>
            <Row>
              <Col className="border border-1 border-dark border-bottom-0 border-start-0 border-end-0 border-top-1 d-flex justify-content-center fw-bold fs-5 text-primary">
                Part - I : Scholastic Areas
              </Col>
            </Row>
            <Row>
              <Col
                className="border border-1 border-dark border-bottom-0 border-start-0 border-end-0 border-top-1 text-center fw-bold fs-5 d-flex justify-content-center align-items-center "
                lg={2}
                md={2}
                xl={2}
                xxl={2}
                xs={1}
                sm={1}
              >
                <span> Sl. No</span>
              </Col>
              <Col
                className="border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center fw-bold fs-5 d-flex justify-content-center align-items-center "
                lg={4}
                md={4}
                xl={4}
                xxl={4}
                xs={4}
                sm={4}
              >
                <sapan>SUBJECTS</sapan>
              </Col>
              <Col lg={6} md={6} xl={6} xxl={6} xs={7} sm={7}>
                <Row>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0 m-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    <p className="p-0 m-0"> FA</p>
                  </Col>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    <p className="p-0 m-0">Oral</p>
                  </Col>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    <p className="p-0 m-0"> BA</p>
                  </Col>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    <p className="p-0 m-0">Oral</p>
                  </Col>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={4}
                    md={4}
                    xl={4}
                    xxl={4}
                    xs={2}
                    sm={2}
                  >
                    <p className="p-0 m-0"> Over All</p>
                  </Col>
                </Row>
                <Row>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0 m-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    20
                  </Col>
                  <Col
                    className="fw-bold border  border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    30
                  </Col>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    40
                  </Col>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    50
                  </Col>
                  <Col
                    className="fw-bold border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0"
                    lg={4}
                    md={4}
                    xl={4}
                    xxl={4}
                    xs={2}
                    sm={2}
                  >
                    150
                  </Col>
                </Row>
              </Col>
            </Row>
            <SectionOne data={data} />
            <GrandTotal />
          </Col>
          {/*section two */}
          <Col lg={5} md={5} xl={5} xxl={5} xs={12} sm={12}>
            <Row>
              <Col className="border border-dark border-1 border-bottom-0 border-start-1 border-end-0 border-top-1 d-flex justify-content-center fw-bold fs-5 text-primary w-100">
                Part - II : Co-Scholastic Areas
              </Col>
            </Row>

            <Row
              lg={5}
              md={5}
              xl={5}
              xxl={5}
              xs={5}
              sm={5}
              style={{ height: "50px" }}
            >
              <Col
                className="border border-dark border-1 border-bottom-0 border-start-1 border-end-1 border-top-1 text-center fw-bold fs-5 d-flex justify-content-center align-items-center "
                lg={7}
                md={7}
                xl={7}
                xxl={7}
                xs={7}
                sm={7}
              ></Col>
              <Col
                className="border border-1 border-dark border-bottom-0 border-start-0 border-end-0 border-top-1 text-center fw-bold fs-5 d-flex justify-content-center align-items-center "
                lg={5}
                md={5}
                xl={5}
                xxl={5}
                xs={5}
                sm={5}
              >
                Grades
              </Col>
            </Row>
            <SectionTwo gradeData={gradeData} />
          </Col>
        </Row>
        <SectionThree />
      </Container>
    </>
  );
};

export default UserView;
