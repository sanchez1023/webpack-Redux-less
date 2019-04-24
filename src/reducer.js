import { combineReducers } from "../../../../AppData/Local/Microsoft/TypeScript/3.4/node_modules/redux";
import toggleRedirect from '../src/reducers/toggleRedirect';
import dailogToggleredirect from '../src/reducers/dailogToggleredirect';
import loginPage from '../src/reducers/loginPage';
import addRedirect from '../src/reducers/addRedirect'
export default combineReducers({
    toggleRedirect,
    dailogToggleredirect,
    loginPage,
    addRedirect,

})