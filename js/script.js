function mostrarOcultarVideo(id) {
  var videoDiv = document.getElementById(id);
  var iframe = videoDiv.querySelector("iframe");
  if (videoDiv.style.display === "none") {
    // Si el video está oculto, lo mostramos
    if (!iframe) {
      // Si el iframe aún no está agregado, lo agregamos
      videoDiv.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        id.split("video")[1] +
        '" frameborder="0" allowfullscreen></iframe>';
    }
    videoDiv.style.display = "block";
  } else {
    // Si el video está visible, lo ocultamos
    videoDiv.style.display = "none";
  }
}
