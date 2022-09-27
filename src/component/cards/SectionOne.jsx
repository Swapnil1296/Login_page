import React from 'react';
import {Col, Row} from 'react-bootstrap';

const SectionOne = ({data}) => {
  // const res = data.map((e) => {
  //   return e.FA
  // })
  // console.log(res)
  return (
    <>
      {data &&
        data.map((item, i) => (
          <Row key={i}>
            <Col
              className="border border-1 border-dark border-bottom-0 border-start-0 border-end-0 border-top-1 d-flex justify-content-center fw-bold "
              lg={2}
              md={2}
              xl={2}
              xxl={2}
              xs={1}
              sm={1}
            >
              <span>{item.id > 9 ? item.id : "0" + item.id}</span>
            </Col>
            <Col
              className="border  border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 fw-bold"
              lg={4}
              md={4}
              xl={4}
              xxl={4}
              xs={4}
              sm={4}
            >
              <span>{item.subject}</span>
            </Col>
            <Col>
              <Row>
                <Col
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={2}
                  sm={2}
                  className="border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0 m-0 fw-bold"
                >
                  <span>{item.FA}</span>
                </Col>
                <Col
                  className="border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0 m-0 fw-bold"
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={3}
                  sm={3}
                >
                  <span>{item.oral_1}</span>
                </Col>
                <Col
                  className="border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0 fw-bold"
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={2}
                  sm={2}
                >
                  <p className="p-0 m-0  ">{item.BA}</p>
                </Col>
                <Col
                  className="border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0 fw-bold"
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={3}
                  sm={3}
                >
                  <p className="p-0 m-0 ">{item.oral_2}</p>
                </Col>
                <Col
                  className="border border-1 border-dark border-bottom-0 border-start-1 border-end-0 border-top-1 text-center p-0 fw-bold"
                  lg={4}
                  md={4}
                  xl={4}
                  xxl={4}
                  xs={2}
                  sm={2}
                >
                  <span className="p-0  ">
                    {item.FA + item.BA + item.oral_1 + item.oral_2 !== 0
                      ? item.FA + item.BA + item.oral_1 + item.oral_2
                      : "A"}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
    </>
  );
};

export default SectionOne;
