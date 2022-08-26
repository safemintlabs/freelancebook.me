import MainCard from 'src/components/MainCard/MainCard'
import SideBar from 'src/components/SideBar/SideBar'
import TopBar from 'src/components/TopBar/TopBar'

import './styles.less'

// Please replace 'projects' with the actual name of the page where the components were used
const TemplatePage = () => {
  return (
    <>
      <TopBar activePage="projects" />
      <div className="page">
        <div className="side-bar">
          <SideBar activePage="projects" />
        </div>
        <div className="main-card">
          <MainCard />
        </div>
      </div>
    </>
  )
}

export default TemplatePage
