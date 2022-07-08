import Photo from "../assets/Sidebar/Photo.png"
const dufaultState={
        name:'Kenny Semba',
        performance: 13,
        photo:Photo,
        email:'123@163.com',
        password:'123456',

}
export default function reducer(preState=dufaultState,action){
    const{type,data}=action
    switch(type){
      case 'login':
        if(data.email===dufaultState.email && data.password===dufaultState.password){
          return true
        }else{
          return false
        }
        break;
      case 'register':
        dufaultState.email=action.data.email
        dufaultState.password=action.data.password
        console.log(JSON.stringify(dufaultState))
        break;
      default:
        return false
    }
}