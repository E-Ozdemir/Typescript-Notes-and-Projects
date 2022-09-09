// const createDiv = function () {
//   const div = document.createElement("div");
//   const statement = document.createTextNode("Cargo Tarcking App");
//   div.append(statement);
//   document.body.appendChild(div);
// };
// createDiv();

import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { TrackingMap } from "./TrackingMaps";

const destination = new Destination();
console.log("destination :>> ", destination);

const cargo = new Cargo();
console.log("cargo :>> ", cargo);

const trackingMap = new TrackingMap("g-map");
trackingMap.attachMarker(destination);
trackingMap.attachMarker(cargo);
