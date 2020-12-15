import axios from 'axios';
import {URL_API} from "../constants/constant";

export async function login(user) {
    //console.log("--->",user)
    return  await axios
    .post(`${URL_API}api/v1/users/login`,{
        name : user.name,
        fullname : user.fullname,
        email : user.email,
        foto : user.foto
    })
    .then(respons =>{ 

        if(respons.data.data.token != undefined){
            localStorage.setItem("token",respons.data.data.token);
            return  respons.data.data;
        }
    })
    .catch(err =>{
        console.log(err)
    })
}