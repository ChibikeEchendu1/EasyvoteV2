import { StackNavigator, TabNavigator, addNavigationHelpers, } from 'react-navigation';
import Home from './src/pages/Home';
import PicChange from './src/pages/PicChange';
import SettingsEdit from './src/pages/SettingsEdit'
import Login from './src/pages/Login';
import Logintwo from './src/pages/Logintwo';
import LogOrSign from './src/pages/LogOrSign';
import Profile from './src/pages/Profile';
import Security from './src/pages/Security';
import ProfileEdit from './src/pages/ProfileEdit';
import SignUp from './src/pages/SignUp';
import TwoF from './src/pages/TwoF';
import HomeCan from './src/pages/HomeCan';
import CandidateList from './src/pages/CandidateList';

export const Router = StackNavigator({
   // Home:{ screen: Home},
    LogOrSign:{screen:LogOrSign},
    SignUp:{screen:SignUp},
    TwoF:{screen:TwoF},
    Login: { screen: Login },
    Logintwo:{screen: Logintwo},
    Security:{screen:Security},
    Profile:{screen:Profile},
    SettingsEdit:{screen:SettingsEdit},
    ProfileEdit:{screen:ProfileEdit},
    CandidateList:{screen:CandidateList},
    HomeCan:{screen:HomeCan},
    
   
},
{headerMode: 'none'}) 

export default Router


//amadichizobao@gmail.com
//password