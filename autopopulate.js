function getQueryParams() {
  let params = {};
  let queryString = window.location.search.substring(1);
  let regex = /([^&=]+)=([^&]*)/g;
  let match;

  while (match = regex.exec(queryString)) {
    params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
  }
  return params;
}

document.addEventListener("DOMContentLoaded", function() {
  let params = getQueryParams();
  let utmSource = params['utm_source'];
  
  if (utmSource) {
    let inputElement = document.querySelector('input[name="sursa trafic"]');
    if (inputElement) {
      inputElement.value = utmSource;
    } else {
      console.error('Input element not found');
    }
  } else {
    console.error('utm_source parameter not found in URL');
  }
});
