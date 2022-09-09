import { faker } from "@faker-js/faker";

export class Destination {
  receiver: string;
  location: {
    lat: number;
    lon: number;
  };
  constructor() {
    this.receiver = faker.name.fullName({ sex: "male" });
    // this.location.lat = +faker.address.latitude(); //Bu seilde undefined hatasi aliniyor.
    // this.location.lon = +faker.address.longitude(); //Bu seilde undefined hatasi aliniyor.
    this.location = {
      lat: +faker.address.latitude(),
      lon: +faker.address.longitude(),
    };
  }
  popupText(): string {
    return `<h3>Receiver  Name: ${this.receiver}</h3>`;
  }
}
