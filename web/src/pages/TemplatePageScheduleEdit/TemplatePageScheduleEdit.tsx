
import EditScheduleCard from 'src/components/EditScheduleCard/EditScheduleCard'
import SideBar from 'src/components/SideBar/SideBar'
import TopBar from 'src/components/TopBar/TopBar'

import './styles.less'

// Please replace 'projects' with the actual name of the page where the components were used
const TemplatePageScheduleEdit = () => {
  return (
    <>
      <TopBar activePage='schedule'/>
      <div className='page'>
        <div className='side-bar'>
          <SideBar activePage='schedule'/>
        </div>
        <div className='main-card-schedule'>
          <EditScheduleCard />
        </div>
      </div>
    </>
  )
}

export default TemplatePageScheduleEdit
