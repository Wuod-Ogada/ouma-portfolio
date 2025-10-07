import { createContext } from "react";
import { projectData } from "../assets/assets";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {
  const values = {
      projectData
  }

  return (
    <PortfolioContext.Provider value={values}>
      {props.children}
    </PortfolioContext.Provider>
  )

}

PortfolioContextProvider.propTypes = {
  children: PropTypes.node,
}

export default PortfolioContextProvider