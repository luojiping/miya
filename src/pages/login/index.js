import React,{Component} from 'react'
import LoginHeader from './components/LoginHeader'
import LoginContent from './components/LoginContent'
import Footer from "../../component/footer/footer.js"
import 'antd/dist/antd.css'
import '../../assets/css/login/login.css'
class Login extends Component{
    render(){
        return(
           <div>
                <LoginHeader />
                <LoginContent />
                <Footer/>
           </div>
        )
    }
}
export default Login