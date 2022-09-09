interface Entity {
  location: {
    lat: number;
    lon: number;
  };
  popupText(): string;
}

export class TrackingMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 6,
      center: {
        lat: 38.9637,
        lng: 35.2433,
      },
    });
  }

  attachMarker(entity: Entity): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lon,
      },
    });
    const popup = new google.maps.InfoWindow({
      content: entity.popupText(),
    });
    marker.addListener("click", () => {
      popup.open({
        anchor: marker,
        shouldFocus: false,
      });
      // popup.open(this.googleMap, marker);
    });
  }
}
