// https://nodejs.org/api/dgram.html
import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");
socket.bind({ port: 5500, address: "localhost" });
socket.on("message", (msg, info) => {
  console.log(
    `My sever got this datagram ${msg}, from the client at: ${info.address}:${info.port}`
  );
});
