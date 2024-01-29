import { connect } from "bun";

const TCPSocket = connect({
  hostname: "127.0.0.1",
  port: 2404,
  socket: {
    open(socket) {
      console.log(`Client at port ${socket.localPort}`);
      console.log(`Connected to ${socket.remoteAddress}`);
      return;
    },
    close(socket) {
      console.log(`Closed`);
      return;
    },
    error(socket, error) {
      console.error(`${error}`);
      return;
    },
    end(socket) {
      console.log(`Ended`);
      return;
    },
    timeout(socket) {
      console.log(`Timeout`);
      return;
    },
    connectError(socket, error) {
      console.error(`${error}`);
      return;
    },
    data(socket, data) {
      console.log(`${data}`);
      return;
    },
  }
});
