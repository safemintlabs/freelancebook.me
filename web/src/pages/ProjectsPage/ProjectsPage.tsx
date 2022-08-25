
import ProjectsCard from 'src/components/ProjectsCard/ProjectsCard'
import SideBar from 'src/components/SideBar/SideBar'
import TopBar from 'src/components/TopBar/TopBar'

import './styles.less'

const ProjectsPage = () => {
  return (
    <>
      <TopBar activePage='projects'/>
      <div className='page'>
        <div className='side-bar'>
          <SideBar activePage='projects'/>
        </div>
        <div className='main-card'>
          <ProjectsCard />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
