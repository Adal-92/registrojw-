let hoja_sleccionada1 = document.querySelector('.verhoja1');
hoja_sleccionada2 = document.querySelector('.verhoja2');
hoja_sleccionada3 = document.querySelector('.verhoja3');
hoja_sleccionada4 = document.querySelector('.verhoja4');
hoja_sleccionada5 = document.querySelector('.verhoja5');
hoja_sleccionada6 = document.querySelector('.verhoja6');
hoja_sleccionada7 = document.querySelector('.verhoja7');
appError = document.querySelector('.errorhoja')

hoja_sleccionada1.addEventListener('click', function (e) {
    e.preventDefault();

    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});

hoja_sleccionada2.addEventListener('click', function (e) {
    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});

hoja_sleccionada3.addEventListener('click', function (e) {
    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});

hoja_sleccionada4.addEventListener('click', function (e) {
    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});

hoja_sleccionada5.addEventListener('click', function (e) {
    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});

hoja_sleccionada6.addEventListener('click', function (e) {
    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});


hoja_sleccionada7.addEventListener('click', function (e) {
    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});


appError.addEventListener('click', function (appinstall) {
    
    appinstall.preventDefault()

    var width = 800; // Ancho de la ventana emergente
    var height = 600; // Altura de la ventana emergente
    var left = (window.innerWidth - width) / 2; // Posición izquierda de la ventana emergente
    var top = (window.innerHeight - height) / 2; // Posición superior de la ventana emergente
  
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    window.open(this.href, 'ventana_flotante', windowFeatures); 
});


/*ver mapas------------------------------- */

let mostrar_mapa1 = document.querySelector('.verMapa1');
mostrar_mapa2 = document.querySelector('.verMapa2');
mostrar_mapa3 = document.querySelector('.verMapa3');
mostrar_mapa4 = document.querySelector('.verMapa4');
mostrar_mapa5 = document.querySelector('.verMapa5');
mostrar_mapa6 = document.querySelector('.verMapa6');
mostrar_mapa7 = document.querySelector('.verMapa7');

mostrar_mapa1.addEventListener('click', function (e){
    e.preventDefault()
    window.open(this.href, '_blank')
});

mostrar_mapa2.addEventListener('click', function (e){
    e.preventDefault()
    window.open(this.href, '_blank')
});

mostrar_mapa3.addEventListener('click', function (e){
    e.preventDefault()
    window.open(this.href, '_blank')
});

mostrar_mapa4.addEventListener('click', function (e){
    e.preventDefault()
    window.open(this.href, '_blank')
});

mostrar_mapa5.addEventListener('click', function (e){
    e.preventDefault()
    window.open(this.href, '_blank')
});

mostrar_mapa6.addEventListener('click', function (e){
    e.preventDefault()
    window.open(this.href, '_blank')
});

mostrar_mapa7.addEventListener('click', function (e){
    e.preventDefault()
    window.open(this.href, '_blank')
});
/*--------------------------------ver mapas*/
