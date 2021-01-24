export class ServerError extends Error {
    constructor(){
        super("Error de conexion")
    }
}
export class ErrorNotFound extends Error {
    constructor(){
        super("Recurso no encontrado")
    }
}

export class ErrorUnauthorized extends Error {
    constructor(){
        super("No esta autorizado")
    }
}