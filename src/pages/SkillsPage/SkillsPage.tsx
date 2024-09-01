import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Skill, skillsData } from '../../data/skillsData';
import './SkillsPage.css';


const SkillsPage: React.FC = () => {


  const skillsComponent = skillsData.map((skill: Skill, index) => {


    const numItemPerCol: number = 3;
    const numCols = 3;
    const breakpointPerCol = 12 / numCols;

    const rowsOfSubskills = [];
    const lengthOfSubskills = skill.subskills.length;

    // A row of skill that has columns of subskills.
    let subskillsColContent = [];
    let colNum = 0;

    for (let j = 0; j < lengthOfSubskills; j++) {

      const subskill = skill.subskills[j];

      // Push the subskill to the column content.
      subskillsColContent.push(<li key={j} className='a-skill-item'>{subskill}</li>);


      // If 5 subskills have been pushed to the column content, 
      if ((j + 1) % numItemPerCol === 0) {
        // Push the column content to the row of subskills.
        rowsOfSubskills.push(
          <Col key={`skill-${skill}-col-${colNum}`} md={breakpointPerCol} className='mt-2 mb-2'>
            <ul>
              {subskillsColContent}
            </ul>
          </Col>
        );

        // Reset the column for the next 5 subskills.
        subskillsColContent = [];
        colNum++;
      }
    }

    // If there are remaining subskills, push them to the column content.
    if (subskillsColContent.length > 0) {
      rowsOfSubskills.push(
        <Col key={`skill-${skill}-col-${colNum}`} md={breakpointPerCol} className='mt-2 mb-2'>
          <ul>
            {subskillsColContent}
          </ul>
        </Col>
      );
    }


    const rowStyle = {
      minHeight: '150px',
      backgroundColor: 'white',
      boxShadow: '0 0 5px #ddd',
    };

    return (
      <Row className="p-0 my-portfolio-row-1" key={index} style={rowStyle}>
        <h5 className='px-3 py-2 a-skill-title' style={{ backgroundColor: 'rgb(235, 245, 245)' }}>{skill.subject}</h5>
        {rowsOfSubskills}
      </Row>
    );

  });


  return (
    <Container className="mt-5">
      <h2>My Skills</h2>
      {skillsComponent}
    </Container>
  );
};

export default SkillsPage;
