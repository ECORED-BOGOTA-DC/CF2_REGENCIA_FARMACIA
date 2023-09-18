<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El objetivo fundamental del Sistema General de Seguridad Social en Salud, es regular el servicio en salud, creando condiciones de calidad para todos los usuarios en todos los niveles que lo comprenden, este sistema cubre la totalidad de los gastos en salud de toda la población colombiana, cumpliendo con uno de los derechos fundamentales contemplados en la Constitución como es el de la salud y a través de esta proporcionar bienestar y una vida digna para cada uno de los integrantes de la comunidad. Por esta razón este componente formativo abordo los temas necesarios para conocer todo sobre el SGGGG, sus principios, normas y actores que lo conforman, al igual que los sistemas de información y políticas públicas en salud vigentes. Temas vistos que se esquematizan a través del siguiente mapa conceptual.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra síntesis del componente formativo, el diagrama de actividades se termina la descripción de las tres técnicas usadas para la especificación y el análisis de requisitos de sofware, historias de usuario y diagramada de actividades. Como se pudo analizar cada una de las técnicas nos brinda características para lograr representar gráficamente y de una forma clara, los requisitos que un usuario necesita poder cumplir satisfactoriamente con las solicitudes de los clientes y usuarios, por otro lado se pueden usar todas las técnicas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
