document.addEventListener("DOMContentLoaded", function() {
  let params = new URLSearchParams(window.location.search);
  let utmSource = params.get('utm_source');

  if (utmSource) {
    let inputElement = document.querySelector('input[name="sursa trafic"]');
    if (inputElement) {
      inputElement.value = utmSource;
    }
  }
});

