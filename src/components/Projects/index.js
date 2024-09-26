import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
        Tenho experiência no desenvolvimento de APIs escaláveis e seguras, além de aplicações Full Stack e sistemas de autenticação. Meus projetos incluem a criação de soluções robustas para web e mobile, com foco em performance e segurança. A seguir, estão alguns dos meus principais projetos.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'backend' ?
            <ToggleButton active value="backend" onClick={() => setToggle('backend')}>BACKEND</ToggleButton>
            :
            <ToggleButton value="backend" onClick={() => setToggle('backend')}>BACKEND</ToggleButton>
          }
          
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>FRONT END</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>FRONT END</ToggleButton>
          }
          <Divider />
          
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects