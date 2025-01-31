import { AuthProvider } from "react-admin";


export const authProvider:AuthProvider={
    login:({username,password})=>{
        if(username==='admin'&&password==='admin'){
            localStorage.setItem('username',username);
            return Promise.resolve();
        }
        else{
            return Promise.reject();    
        }
    },
    logout:()=>{
        //remove username from the localstorage

        localStorage.removeItem('username');    
        return Promise.resolve();   
    },
    
    //runs when API return error

    checkError:({status})=>{
        if(status===401||status===403){
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    // runs when user navigates to a new location

    checkAuth:()=>{
         return localStorage.getItem('username')?Promise.resolve():Promise.reject();
    },

    // runs when user navigates to a new location to check if the user is authenticated

    getPermissions:()=>{
        return Promise.resolve();
    }
}