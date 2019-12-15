import {getUserLogin} from '../../../api/api'
export const SET_USER_INFO ='SET_USER_INFO'

const  defaultState ={
        avater :'',
        nickname:'',
        uid:'',
        authToken:'',
        userStatus:0
}
export default( state = defaultState,action ) =>{
    switch(action.type){
        case SET_USER_INFO:
            console.log(action.data)
            return action.data
        default :
            return state
    }
}


const setUserInfo = (data) =>({
    type:SET_USER_INFO,
    data
})
export const getUserInfo = (userInfo) =>{
    return dispatch => {
        getUserLogin(userInfo).then((res) =>{
            // console.log(res)
            dispatch(setUserInfo(res.data))
        })
    
    }
}