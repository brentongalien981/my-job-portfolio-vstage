import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mevsImage from '../../assets/photos/mevs.jpg';
import managemevsImage from '../../assets/photos/managemevs.jpg';
import ydotcomImage from '../../assets/photos/ydotcom.jpg';



const sampleProjectsData = [
  { title: 'Maggies EVs', description: 'A simple e-commerce site for EVs.', image: mevsImage, link: 'https://maggiesevs.brenbagadev.com' },
  { title: 'Manage MEVs', description: 'A simple content-management site for an e-commerce store.', image: managemevsImage, link: 'https://managemevs.brenbagadev.com' },
  { title: 'Ydotcom', description: 'The basics of a web forum site...', image: ydotcomImage, link: 'https://ydotcom.brenbagadev.com' },
];


const projectRowsComponent = sampleProjectsData.map((data, index) => {

  return (
    <Row className="p-4 align-items-center my-portfolio-row-1" key={index}>
      <Col>

        <Row>

          <Col md={7}>
            <Image src={data.image} alt="Sample Project Image" fluid rounded />
          </Col>

          <Col md={5} className=''>
            <div className='mx-4 mt-4'>
              <h4 className=''>{data.title}</h4>
              <p className=''>{data.description}</p><br />
              <label>Visit website <Link to={data.link} target='_blank' style={{ textDecoration: 'underline' }}>here.</Link></label>
            </div>
          </Col>

        </Row>

      </Col>

    </Row>
  );

});



const SampleProjectsPage: React.FC = () => {
  return (


    <Container className="mt-5">

      <h2>Sample Projects</h2>
      {projectRowsComponent}

    </Container>
  );
};

export default SampleProjectsPage;
