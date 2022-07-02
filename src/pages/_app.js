import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import '../styles/normal.css'
import '../styles/MenuSec.css'
import '../styles/MenuSecPhone.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
