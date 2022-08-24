
import MainCard from 'src/components/MainCard/MainCard'
import SideBar from 'src/components/SideBar/SideBar'
import TopBar from 'src/components/TopBar/TopBar'

import './styles.less'

const TemplatePage = () => {
  return (
    <>
      <TopBar />
      <div className='page'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='main-card'>
          <MainCard />
        </div>
      </div>
    </>
  )
}

export default TemplatePage
