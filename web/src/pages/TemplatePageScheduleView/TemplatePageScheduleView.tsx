
import ViewScheduleCard from 'src/components/ViewScheduleCard/ViewScheduleCard'
import SideBar from 'src/components/SideBar/SideBar'
import TopBar from 'src/components/TopBar/TopBar'

import './styles.less'

// Please replace 'projects' with the actual name of the page where the components were used
const TemplatePageScheduleView = () => {
  return (
    <>
      <TopBar activePage='schedule'/>
      <div className='page'>
        <div className='side-bar'>
          <SideBar activePage='schedule'/>
        </div>
        <div className='main-card-schedule'>
          <ViewScheduleCard />
        </div>
      </div>
    </>
  )
}

export default TemplatePageScheduleView
