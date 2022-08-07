import { CopyrightCircleFilled } from '@ant-design/icons'
import { Typography } from 'antd'
import './styles.less'
const AppFooter = () => {
  return (
    <div className="footer">
      <Typography.Link href="https://freelancerbook.com">
        Freelancerbook.com <CopyrightCircleFilled /> 2022
      </Typography.Link>
    </div>
  )
}

export default AppFooter
