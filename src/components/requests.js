import axios from 'axios'

const apiUrl ='http://45.147.248.126'
export async function LoginGet(auth_data){
    try { 
        const response = await axios({
            method: 'POST',
            url: `${apiUrl}/api/login`,
            data: auth_data,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data; 
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}

export async function Register(reg_data){
    try { 
        const response = await axios({
            method: 'POST',
            url: `${apiUrl}/api/register/user`,
            data: reg_data,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data; 
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}


export async function RegisterCompany(reg_data_com){
    try { 
        const response = await axios({
            method: 'POST',
            url: `${apiUrl}/api/register/company`,
            data: reg_data_com,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data; 
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}

export async function ResetPass(email){
    try { 
        const response = await axios({
            method: 'POST',
            url: `${apiUrl}/api/password/reset`,
            data: {'email': email},
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data; 
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}



export async function GetAtm(id) { 
 
    const authAxios = axios.create({ 
        baseUrl: apiUrl, 
        headers: { 
            'accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Credentials': true, 
            'Access-Control-Allow-Origin': '*' 
        }, 
    }) 
    try { 
        const response = await authAxios.get(`${apiUrl}/atms/${id}`); 
        const result = response.data; 
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
} 



export async function GetCities(){
    try { 
        const response = await axios({
            method: 'GET',
            url: `${apiUrl}/api/directory/getAllCities`,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data; 
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}

export async function GetCategories(){
    try { 
        const response = await axios({
            method: 'GET',
            url: `${apiUrl}/api/categories`,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data.data; 
        console.log(result);
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}

export async function GetFeatured(){
    try { 
        const response = await axios({
            method: 'GET',
            url: `${apiUrl}/api/featured-companies`,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data.data; 
        console.log(result);
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}

export async function GetLatestPost(){
    try { 
        const response = await axios({
            method: 'GET',
            url: `${apiUrl}/api/latest-post`,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data.data; 
        console.log(result);
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}

export async function PostJob(data){
    try { 
        const response = await axios({
            method: 'POST',
            url: `${apiUrl}/api/job`,
            data: data,
            headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Credentials': true, 
                'Access-Control-Allow-Origin': '*' 
            },
            withCredentials: true
        }); 
        const result = response.data; 
        return result; 
 
    } catch (err) { 
        console.log(err); 
    } 
}
