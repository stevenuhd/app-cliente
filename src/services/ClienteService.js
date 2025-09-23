import api from "../lib/axios";

export default {
    getClientes() {
        return api.get('/clientes')
    },

    agregarCliente(data) {
        return api.post('/clientes', data)
    },

    obtenerCliente(id) {
        return api.get(`/clientes/${id}`)
    },


}