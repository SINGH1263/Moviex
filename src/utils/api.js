import axios from "axios"; 

const BASE_URL =""

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmUzNjIzZmNlYWQ3ZTY4Mzk1YjViMjg5MWQ5OWNhNSIsInN1YiI6IjY2NTMyOWYwMWMxYmYxZTZlY2I2MjM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u8FPAUA0N73EteR59tXnQlxSximgvucGqam5mUD6rMI"

const headers ={
    Authorization: "bearer" + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params) =>{
    try{
     const {data} = await axios.get(BASE_URL + url,{
        headers,
        params
     })
     return data;
    }catch(err){
        console.log(err);
        return err;
    }
}