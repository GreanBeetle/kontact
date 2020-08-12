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
  smallText: {
    fontFamily: FONTS.raleway,
    fontSize: 12
  },
  normalText: {
    fontFamily: FONTS.raleway,
    fontSize: 16
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
  }
}

// SCREEN STYLES ***************************************
export const KONTACT_LIST_SCREEN_STYLES = {}

export const KONTACT_DETAIL_SCREEN_STYLES = {}

// COMPONENT STYLES ************************************
export const KONTACT_LIST_ITEM_STYLES = {
  item: {
    padding: 20,
    marginVertical: 8,
    width: deviceWindowWidth() - 40,
    backgroundColor: COLORS.actionGreen
  }
}

export const BUTTON_STYLES = {
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 36,
    width: deviceWindowWidth() - 72, // 48 if using height 42, radius 24 
    marginVertical: 12
  },
  buttonText: {  
    fontSize: 16,
    fontFamily: FONTS.raleway
  }
}