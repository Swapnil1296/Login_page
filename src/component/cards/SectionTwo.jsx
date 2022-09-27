import React from 'react'
import { Col, Row } from 'react-bootstrap';

const SectionTwo = ({ gradeData }) => {
  console.log(gradeData)
  return (
    <>
      {gradeData &&
        gradeData.map((item, i) => (
          <Row key={i} lg={5} md={5} xl={5} xxl={5} xs={5} sm={5}>
            <Col
              className="fs-7 border border-1 border-dark border-bottom-0 border-start-1 border-end-1 border-top-1  fw-bold p-1"
            
              lg={7}
              md={7}
              xl={7}
              xxl={7}
              xs={7}
              sm={7}
            >
              <span className="p-0 m-0"> {item.topic}</span>
            </Col>
            <Col
             
              className="border border-dark border-1 border-bottom-0 border-start-0 border-end-0 border-top-1 text-center fw-bold"
              lg={5}
              md={5}
              xl={5}
              xxl={5}
              xs={5}
              sm={5}
            >
              {item.grade}
            </Col>
          </Row>
        ))}
    </>
  );
}

export default SectionTwo
