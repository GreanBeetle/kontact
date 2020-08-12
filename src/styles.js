import { deviceWindowWidth } from './utilities'
import COLORS from './assets/colors'
import FONTS from './fonts'

export const GLOBAL_STYLES = {
  container: {
    flex: 1
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  standard: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  normalText: {
    fontFamily: FONTS.raleway,
    fontSize: 20
  },
  subHeaderText: {
    fontFamily: FONTS.montserrat,
    fontSize: 24
  },
  headerText: {
    fontFamily: FONTS.montserrat,
    fontSize: 36
  },
  red: {
    color: COLORS.red
  },  
  // MOVE THESE TO COMPONENT STYLES? REMOVE ME!
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 36,
    width: deviceWindowWidth() - 72, // 48 if using height 42, radius 24 
    marginVertical: 12
  },
  buttonText: { // REMOVE THIS 
    fontSize: 16,
    fontFamily: FONTS.raleway
  }
}

// SCREEN STYLES ***************************************
export const KONTACT_LIST_SCREEN_STYLES = {
  // styles here  
}

// COMPONENT STYLES ************************************
