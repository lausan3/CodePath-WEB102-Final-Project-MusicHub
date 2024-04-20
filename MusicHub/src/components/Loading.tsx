import { Oval } from 'react-loader-spinner'
import { useTheme } from '../contexts/theme-context'

const LoadingPage = () => {
  const [theme] = useTheme();

  return (
    <div className="main-ctn center">
      <Oval 
        visible={true}
        height={60}
        width={60}
        color={theme == "dark" ? "#322a42" : "#0D1821"}
        strokeWidth={3}
        secondaryColor={theme == "dark" ? "#E5D9F2" : "#0D1821"}
      />
    </div>
  )
}

export default LoadingPage