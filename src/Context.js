import { useState, createContext } from "react";
import PropTypes from 'prop-types'

export const DefaultContext = createContext({});

const ExampleProvider = ({ children }) => {
    const [theme, setTheme] = useState({
      backgroundColor: '#fff'
    })
  
    return (
      <DefaultContext.Provider value={{ theme, setTheme }}>
        {children}
      </DefaultContext.Provider>
    )
  }
  
  ExampleProvider.propTypes = {
    children: PropTypes.node.isRequired
  }
  
  export default ExampleProvider