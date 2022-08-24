
import MainCard from 'src/components/MainCard/MainCard'
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
          <MainCard />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
