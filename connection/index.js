"use strict ";

const axios = require ("axios");
const { remoteServer } = require ("../config");

class Connection {

    constructor(){
        this.http = axios.create({
            baseURL: remoteServer
        });
    }

    async registerMachine(machineInfo){
        return new Promise((resolve, reject) =>{
            this.http

            .post("/", machineInfo)
            .then(({data}) => {
                resolve(data);
            })

            .catch(e => reject(e));
        });
    }
}