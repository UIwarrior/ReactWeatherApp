/* eslint-disable no-undef */
window.google = window.google || {};
//
export async function geocode(request) {
  let geocoder;
  geocoder = new google.maps.Geocoder();
  return geocoder.geocode(request).then((result) => {
    return {
      lat: result.results[0].geometry.location.lat(),
      long: result.results[0].geometry.location.lng(),
    };
  });
}

export const getLatLong = (results) => {
  return {
    lat: results.results[0].geometry.location.lat(),
    long: results.results[0].geometry.location.lng(),
  };
};
