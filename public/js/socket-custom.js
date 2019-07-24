var socket = io();

//? ON: Escuchar información
socket.on("connect", function () {
    console.log("Conectado al servidor");
});

//? ON: Escuchar información
socket.on("disconnect", function () {
    console.log("Se perdio conexión con el servidor");
});

//? Emit: enviar información
socket.emit("enviarMensaje", {
    usuario: "Edgar",
    mensaje: "Hola Sockets"
}, function (resp) {
    console.log("Respuesta Server: ", resp);
});

//? Escuchar información
socket.on("enviarMensaje", function (mensaje) {
    console.log("Servidor: ", mensaje);
});