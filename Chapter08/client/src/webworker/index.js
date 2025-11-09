/**
    Web Worker
    Handles communications and database operations
 */
import dbService from "./services/dbService";
import netService from "./services/network";
import testService from "./services/test";

const services = [dbService, netService, testService];
// Define whitelists of allowed commands for each service
const serviceCommands = [
  Object.keys(dbService),
  Object.keys(netService),
  Object.keys(testService),
];

function sendRequest(id, success = false, payload = {}) {
  self.postMessage({ id, success, payload });
}

self.onmessage = (event) => {
  let data = event.data,
    payload = data.payload;
  services.forEach((service, index) => {
    if (
      serviceCommands[index].includes(data.command) &&
      Object.prototype.hasOwnProperty.call(service, data.command) &&
      typeof service[data.command] === "function"
    ) {
      service[data.command](payload).then(
        (result) => {
          sendRequest(data.id, true, result);
        },
        (err) => {
          sendRequest(data.id, false, err);
        },
      );
    }
  });
};

console.log("Web Worker ready!");
