import { combineReducers } from "../../../../AppData/Local/Microsoft/TypeScript/3.4/node_modules/redux";
import toggleRedirect from '../src/reducers/toggleRedirect';
import panelReducer from '../src/reducers/panelReducer';
import loginPage from '../src/reducers/loginPage';
import addRedirect from '../src/reducers/addRedirect';
import dashboard from '../src/reducers/dashboard';
export default combineReducers({
    toggleRedirect,
    panelReducer,
    loginPage,
    addRedirect,
    dashboard


})