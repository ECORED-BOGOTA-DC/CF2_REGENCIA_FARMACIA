<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Políticas públicas de salud
    
    .row.justify-content-center.fondo-custom.mb-5
      .col-lg-11.mt-5
        .row(style='justify-content: center')
          .col-lg-3.mb-4.mb-lg-0
            figure
              img.mx-auto(
                src='@/assets/curso/tema2/img1.png',
                alt="Imágen decorativa"
                style='width: 280px'
              )
          .col-lg-8
            .row.px-4.mb-4
              p.mb-4 En el marco de los lineamientos de la Seguridad Social en Salud de Colombia, la salud pública se concibe como:
              .col-12.p-4.custom-card
                p.mb-0 El conjunto de políticas que buscan garantizar, de una manera integrada, la salud de la población por medio de acciones de salubridad dirigidas tanto de manera individual, como colectiva, ya que sus resultados se constituyen en indicadores de las condiciones de vida, bienestar y desarrollo del país. Dichas acciones se realizarán bajo la rectoría del Estado y deberán promover la participación responsable de todos los sectores de la comunidad.
              img.custom-img(
                src='@/assets/curso/tema1/img5.png',
                alt='Imágen decorativa'
              )

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img.mx-auto(src='@/assets/curso/tema2/img2.svg',alt="Imágen decorativa")

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 El Ministerio de Salud y Protección Social, como ente rector del Sistema General de Seguridad Social en Salud – SGSSS, y del sector salud en general, tiene la función de proveer, de manera integral, las acciones de salud individuales y colectivas, con la participación responsable de todos los sectores de la sociedad, para mejorar las condiciones de salud de la población colombiana.


    TabsC.color-secundario.mb-5
      .py-3.py-md-5(titulo='Plan de salud pública - PDSP 2012-2021 ')
        .row(style='justify-content: space-around')
          .col-md-5.mb-4.mb-md-0.align-self-top
            h2.mb-4 Plan de salud pública - PDSP 2012-2021 
            p.mb-4 Es una apuesta política por la equidad en salud, entendida como #[strong “la ausencia de diferencias en salud entre grupos sociales, consideradas innecesarias, evitables e injustas”] (Whitehead, 1992). 
          
            p Esto implica que la equidad en salud se logra cuando todas las personas alcanzan su potencial de salud, independientemente de sus condiciones sociales, culturales y económicas.


          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema2/img3.png',
                alt='Imágen decorativa',
                style='width: 486px;'
              )

      .py-3.py-md-5(titulo='Política de Seguridad del Paciente')
        .row(style='justify-content: center')
          .col-md-8.mb-4.mb-md-0.align-self-center
            h2.mb-4 Política de Seguridad del Paciente
            p.mb-4 La Seguridad del Paciente es una prioridad de la atención en salud, en las instituciones prestadoras de servicios de salud, sin importar el nivel de complejidad, ni la cantidad de procesos realizados diariamente; los incidentes y eventos adversos, son la luz roja que alerta sobre la existencia de una atención insegura. El Sistema de reporte de eventos adversos y aprendizaje colectivo, debe contemplar mecanismos para la identificación de incidentes y oportunidades de mejora que prevengan y/o minimicen el riesgo de futuros eventos adversos, insumo necesario para la gestión de la seguridad del paciente en cualquier Institución del sector salud.
            .cajon.color-secundario.p-4.mb-4
              p.mb-0 De acuerdo con el Ministerio de Salud, cada uno de los paquetes instruccionales busca propiciar un espacio de reflexión, actualización y diálogo de saberes en seguridad del paciente, siguiendo el modelo de aprendizaje basado en problemas ABP, con el fin que, en el desempeño laboral cotidiano, los profesionales de la salud se adhieran a la cultura de seguridad del paciente, haciendo que sus actividades diarias cumplan con las disposiciones establecidas en la Política Nacional de Seguridad del Paciente para garantizar al usuario de servicios de salud, una atención de calidad, humanizada y segura.


          .col-md-3.align-self-center
            figure
              img.mx-auto(
                src='@/assets/curso/tema2/img4.png',
                alt='Imágen decorativa',
                style='width:312px;'
              )

      .py-3.py-md-5(titulo='Política Atención Integral de Salud - MAITE – RIAS')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-top
            h2.mb-4 Política Atención Integral de Salud - MAITE – RIAS
            p La Política de Atención Integral en Salud, tiene por objetivo orientar el Sistema hacia la generación de las mejores condiciones de la salud de la población, mediante la regulación de las condiciones de intervención de los agentes hacia el
              b  “acceso a los servicios de salud, de manera oportuna, eficaz y con calidad para la preservación, el mejoramiento y la promoción de la salud” 
              b-none (Ley 1751, Estatutaria de Salud), para así garantizar el derecho a la salud, de acuerdo con la Ley Estatutaria 1751 de 2015. La integralidad definida en la política, comprende la igualdad de trato y oportunidades en el acceso (principio de equidad) y el abordaje integral de la salud y la enfermedad, consolidando
              b  “las actividades de promoción, prevención, diagnóstico, tratamiento, rehabilitación y paliación para todas las personas”
              b-none  (Ley 1751 de 2015).

          .col-md-5.align-self-center
            figure
              img.mx-auto(
                src='@/assets/curso/tema2/img5.png',
                alt='Imágen decorativa'
                style='width:486px'
              )





</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass" scoped></style>
