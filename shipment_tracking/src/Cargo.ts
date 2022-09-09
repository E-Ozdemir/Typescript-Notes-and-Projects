import { faker } from "@faker-js/faker";

export class Cargo {
  trackingId: string;
  location: {
    lat: number;
    lon: number;
  };
  constructor() {
    this.trackingId = faker.datatype.uuid();
    this.location = {
      lat: +faker.address.latitude(),
      lon: +faker.address.longitude(),
    };
  }
  popupText(): string {
    return `<h3>Cargo Name: ${this.trackingId}</h3>`;
  }
}
