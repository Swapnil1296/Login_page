import React from "react";
import { Col, Row } from "react-bootstrap";
import Scale from "./Scale";

const SectionThree = () => {
  return (
    <>
      <Row className="text-center fw-bold  border border-dark border-top-1 border-bottom-0 border-end-0 border-start-0 border-1">
        <p className="m-0">Part-III : Attendence</p>
      </Row>
      <Row className="text-center fw-bold mx-2">
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-1 border-start-1 border-end-1"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        ></Col>
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-1 border-start-0 border-end-1"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          No. of Working Days
        </Col>
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-1 border-start-0 border-end-1"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          No. of Days Present
        </Col>
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-1 border-start-0 border-end-1 p-0"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        >
          Percentage
        </Col>
      </Row>
      <Row className="text-center fw-bold   mx-2">
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-0 border-start-1 border-end-1"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        >
          TERM-1
        </Col>
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-0 border-start-0 border-end-1"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          83
        </Col>
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-0 border-start-0 border-end-1"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          83
        </Col>
        <Col
          className="border border-1 border-dark border-bottom-1 border-top-0 border-start-0 border-end-1"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        >
          100
        </Col>
      </Row>
      {/* <Row className=" fw-bold  mx-2">
        <Col lg={2} md={2} xl={2} xxl={2} xs={3} sm={3}>
          C.G.P. : 9.6
        </Col>
        <Col lg={4} md={4} xl={4} xxl={4} xs={3} sm={3}></Col>
        <Col lg={4} md={4} xl={4} xxl={4} xs={3} sm={3}></Col>
        <Col className="text-end" lg={2} md={2} xl={2} xxl={2} xs={3} sm={3}>
          Grade: A 1
        </Col>
      </Row> */}
      <Row className=" mx-2 d-flex ">
        <Col
          className="fw-bold p-0 m-0"
          lg={3}
          xl={3}
          xxl={3}
          md={3}
          sm={4}
          xs={4}
        >
          <span> C.G.P. : 9.6</span>
        </Col>
        <Col lg={3} xl={3} xxl={3} md={3} sm={2} xs={2}></Col>
        <Col lg={3} xl={3} xxl={3} md={3} sm={2} xs={2}></Col>
        <Col
          className="fw-bold text-end  p-0 m-0"
          lg={3}
          xl={3}
          xxl={3}
          md={3}
          sm={4}
          xs={4}
        >
          <span> Grade: A 1</span>
        </Col>
      </Row>
      <Row className="   mx-2 ">
        <Col className="m-0 p-0">
          Teacher's Remark - <span className="fw-bold">Excellent</span>
        </Col>
      </Row>
      <Row className=" fw-bold  mx-2 my-4">
        <Col lg={4} md={4} xl={4} xxl={4} xs={4} sm={4} className="fst-italic">
          Student's Signature
        </Col>
        {/* <Col lg={4} md={4} xl={4} xxl={4} xs={4} sm={4}></Col> */}
        <Col
          className="text-center fst-italic"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={4}
          sm={4}
        >
          Parent's Signature
        </Col>
        <Col
          className="text-end fst-italic"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={4}
          sm={4}
        >
          Principle Signature
        </Col>
      </Row>
      <Scale />
    </>
  );
};

export default SectionThree;
