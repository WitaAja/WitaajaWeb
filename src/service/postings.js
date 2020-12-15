import axios from 'axios';
import {URL_API} from "../constants/constant";

export async function getAllPostings() {
    console.log("masukkk")
    return  await axios
    .get(`${URL_API}api/v1/posting`     
    )
    .then(respons =>{ 
        return respons      
    })
    .catch(err =>{
        console.log(err)
    })
}