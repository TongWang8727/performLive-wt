import Photo from "../assets/Sidebar/Photo.png"
const dufaultState={
        name:'Kenny Semba',
        performance: 13,
        photo:Photo,
        email:'123@163.com',
        password:123456,

}
export default function reducer(preState=dufaultState,action){
  console.log(JSON.stringify(action))
    const{type,data}=action
    switch(type){
      case 'login':
        if(data.email===preState.email && data.password===preState.password){
          return true
        }
        return false
      default:
        return false
    }
    
}