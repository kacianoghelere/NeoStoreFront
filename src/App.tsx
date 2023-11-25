import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "~/store"
import Root from './Root'

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>
)

export default App
