// [START maps_geocoding_component_restriction]
function initMap() {
  const geocoder = new google.maps.Geocoder();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: -33.865, lng: 151.209 },
  });
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, map) {
  geocoder.geocode(
    {
      address: "483 George St.",
      componentRestrictions: {
        country: "AU",
        postalCode: "2000",
      },
    },
    (results, status) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
        window.alert(
          "Geocode was not successful for the following reason: " + status
        );
      }
    }
  );
}
// [END maps_geocoding_component_restriction]
