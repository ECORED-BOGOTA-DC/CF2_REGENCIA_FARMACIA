<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/intro.png', alt='imagen de ambiente').mx-auto
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p.mb-0 La salud es contemplada como uno de los derechos fundamentales de cada persona, salud que debe brindar bienestar a toda la comunidad, proporcionarle una vida digna, a través de los servicios y los diferentes actores que aportan para esta finalidad, relacionando la norma que define los diferentes procesos, para el acceso a los servicios, a las instalaciones y al personal de atención, para cada una de las necesidades que se pueden presentar en el Sistema de Salud en Colombia.

        p.mb-4(data-aos="fade-up") Es así como en este componente formativo, se estudiará el Sistema General de Seguridad Social en Salud, los principios, las normas y los actores que lo conforman.
        p.mb-4(data-aos="fade-up") También se realizará un recorrido a través de las políticas públicas de la salud y de los sistemas de información sobre la salud.

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2GIhYcPJxgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p.ps-4 #[strong ¡Muchos éxitos en este proceso de aprendizaje!]

      
    
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
