import config from '../config/config.js'
import knex from 'knex'
export default class ClienteService{
    constructor(){
        this.knex = knex(config)
    }
    async obtenerClientes(){
        const clientes = await this.knex.select('*').from('clientes')
        return Object.values(JSON.parse(JSON.stringify(clientes)))
    }
    
    async registrarClientes(body){
        return this.knex('clientes').insert(body)
    }

    async buscarClientesPorId(id){
        return this.knex('clientes').where({cliente_id:id}).select('*').first()
    }
 
    async actualizarClientesPorId(id){
        
        return this.knex('clientes').where({cliente_id:id}).update(body)
    }

     async eliminarClientesPorId(id){
        return this.knex('clientes').where({cliente_id:id}).del()
    }


}
