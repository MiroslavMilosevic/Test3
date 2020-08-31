import axios from 'axios'

function getInfo(){
    return axios.get('https://api.spacexdata.com/v3/info');
}

function getShips(){
return axios.get('https://api.spacexdata.com/v3/ships');
}

export {getInfo, getShips}