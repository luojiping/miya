import React,{Component} from 'react'
import LoginHeader from './components/LoginHeader'
import LoginFooter from './components/LoginFooter'
import LoginContent from './components/LoginContent'
import 'antd/dist/antd.css'
import '../../assets/css/login/login.css'
class Login extends Component{
    render(){
        return(
           <div>
                <LoginHeader />
                <LoginFooter />
                <LoginContent />
           </div>
        )
    }
}
export default Login