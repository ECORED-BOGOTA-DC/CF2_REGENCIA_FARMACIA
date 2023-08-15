<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistema Obligatorio de Garantía de Calidad de Atención en Salud - SOGCS - del Sistema General de Seguridad Social en Salud

    .row.mb-5.justify-content-center.fondo-esquina.pt-4
      .col-lg-11
        .row(style='justify-content: space-between')
          .col-lg-8.pt-4
            p.mb-4 Según el Decreto 1011 del 3 de abril de 2006:
            .bloque-texto-b.color-primario.p-4.ms-4.mb-5
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h3.mb-0(style='font-size: 24px; font-weight: bold') Es el conjunto de instituciones, normas, requisitos, mecanismos y procesos deliberados y sistemáticos que desarrolla el sector salud para generar, mantener y mejorar la calidad de los servicios de salud en el país.
                i.fas.fa-quote-right.d-flex.justify-content-end
            p.mb-4 Las acciones que desarrolle el SOGCS, se orientarán hacia la mejora de los resultados de la atención en salud, centrados en el usuario, y que van más allá de la verificación de la existencia de estructura o de la documentación de procesos, los cuales solo constituyen prerrequisito para alcanzar los mencionados resultados.
          .col-lg-3.align-self-top.p-0
            figure
              img.mx-auto(
                src='@/assets/curso/tema3/img1.png',
                alt='Imágen decorativa',
                style='width: 280px'
              )

    p.mb-5 Para efectos de evaluar y mejorar la Calidad de la Atención de Salud, el SOGCS deberá cumplir con las siguientes características específicas:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4
        figure
          img.mx-auto(
            src='@/assets/curso/tema3/img2.svg',
            alt='Imágen decorativa',
            style='width: 335px'
          )
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-medium(numero='1', titulo='Accesibilidad') Se refiere a la posibilidad que tiene el usuario de utilizar los servicios de salud que le garantiza el Sistema General de Seguridad Social en Salud.
          p.text-medium(numero='2', titulo='Oportunidad ') Se basa en la posibilidad que tiene el usuario de obtener los servicios que requiere, sin que se presenten retrasos que pongan en riesgo su vida o su salud. Esta característica se relaciona con la organización de la oferta de servicios, en relación con la demanda y con el nivel de coordinación institucional, para gestionar el acceso a los servicios.
          p.text-medium(numero='3', titulo='Seguridad') Se conforma por el conjunto de elementos estructurales, procesos, instrumentos y metodologías basadas en evidencias científicamente probadas, que propenden por minimizar el riesgo de sufrir un evento adverso en el proceso de atención de salud o de mitigar sus consecuencias.
          p.text-medium(numero='4', titulo='Pertinencia') Se manifiesta con el grado en el cual los usuarios obtienen los servicios que requieren, con la mejor utilización de los recursos, de acuerdo con la evidencia científica y sus efectos secundarios que son menores que los beneficios potenciales.
          p.text-medium(numero='5', titulo='Continuidad') Se concreta con el grado en el cual los usuarios reciben las intervenciones requeridas, mediante una secuencia lógica y racional de actividades, basada en el conocimiento científico.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      .h2 3.1 Componentes del SOGCS

    p.mb-5 El SOGCS está conformado por los siguientes componentes:

    .row.justify-content-center.centro-fondo--arriba
      .col-lg-12.ps-5.pe-5
        PasosA.color-acento-contenido(tipo='n')
          .row
            .col-md-12.mb-4.mb-md-0
              h3 Sistema único de habilitación
              p Se refiere al conjunto de normas, requisitos y procedimientos, mediante los cuales se establece, registra, verifica y controla, el cumplimiento de las condiciones básicas de capacidad tecnológica y científica, de suficiencia patrimonial y financiera, y de capacidad técnico administrativa, indispensables para la entrada y permanencia en el Sistema, los cuales buscan dar seguridad a los usuarios, frente a los potenciales riesgos asociados a la prestación de servicios y que son de obligatorio cumplimiento por parte de los Prestadores de Servicios de Salud y las EAPB.

          .row
            .col-md-12
              h3 Auditoría para el mejoramiento de la calidad de la atención de salud
              p Es el conjunto de actividades que implican la realización de actividades de evaluación, seguimiento y mejoramiento de procesos definidos como prioritarios, y la comparación entre la calidad observada y la calidad esperada, la cual debe estar previamente definida mediante guías y normas técnicas, científicas y administrativas. Los programas de auditoría deberán ser concordantes con la intencionalidad de los estándares de acreditación, y superiores a los que se determinan como básicos en el Sistema Único de Habilitación. Los procesos de auditoría son obligatorios para las Entidades Departamentales, Distritales y Municipales de Salud, las Instituciones Prestadoras de Servicios de Salud y las Empresas Administradoras de Planes de Beneficio.

          .row
            .col-md-12.mb-4.mb-md-0
              h3 Sistema único de acreditación
              p Se refiere al conjunto de entidades, estándares, actividades de apoyo y procedimientos de autoevaluación, mejoramiento y evaluación externa, destinados a demostrar, evaluar y comprobar el cumplimiento de niveles superiores de calidad, por parte de las instituciones Prestadoras de Servicios de Salud, las EAPB y las Direcciones Departamentales, Distritales y Municipales, que voluntariamente decidan acogerse a este proceso. Todo Prestador de Servicios y EAPB, deberá contar con la Certificación de Cumplimiento de las Condiciones para la Habilitación como condición para acceder a la acreditación.

          .row
            .col-md-12
              h3 Sistemas de información en salud
              p Se refiere a la integración de actividades que buscan satisfacer las necesidades de información de uno o más grupos de interés. Un servicio de información se describe como un proceso: qué recibe como entrada y qué produce como salida, de acuerdo a un contrato de servicio que se debe cumplir.

    p.mb-5 Es importante reconocer que la información se ha convertido en un activo altamente valioso para las instituciones prestadoras de servicios de salud, lo que redunda en satisfacción para las familias, comunidades y habitantes del territorio nacional, ya que la misma se convierte en un elemento esencial que entrega beneficios para las personas, a través de la generación del conocimiento; es por esta razón, que el Ministerio de Salud y Protección Social a través de la Ley 1438 de 2011 artículo 112, es el responsable de articular el manejo de la administración de la información, a través del Sistema Integrado de Información de la Protección Social, SISPRO.
    .row.justify-content-center.mb-4
      .col-lg-3.mb-2
        figure
          img.mx-auto(
            src='@/assets/curso/tema3/img3.png',
            alt='Imágen decorativa',
            style='width: 345px'
          )
      .col-lg-9
        .bloque-texto-b.color-primario.p-4.ms-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-2(style='font-size: 22px; font-weight: bold') Con el fin de alcanzar un manejo veraz, oportuno, pertinente y transparente de los diferentes tipos de datos generados por todos los actores, en sus diferentes niveles y su transformación en información para la toma de decisiones, se implementará una política que incluya un sistema único de información en salud, que integre los componentes demográficos, socioeconómicos, epidemiológicos, clínicos, administrativos y financieros. Los agentes del Sistema deben suministrar la información que requiera el Ministerio de Salud y Protección Social, en los términos y condiciones que se determine.
            i.fas.fa-quote-right.d-flex.justify-content-end.mb-4
            .bloque-texto-d__autor
              .h5.mb-0 - (Artículo 19 Ley 1751 de 2015).

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 De acuerdo con las anteriores premisas y lineamientos, es necesario dar la razón a la evolución que presentan los datos para convertirse en activos de valor y generar objetivos concretos que garanticen la toma de decisiones en todos niveles jerárquicos de las instituciones prestadoras de servicios de salud, públicas y privadas, y del ente rector, Ministerio de Salud y Protección Social; por lo tanto, la siguiente gráfica presenta #[strong la evolución y transformación de los datos en conocimiento:]

    .row.justify-content-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 6.
          span Transformación del dato en conocimiento

        figure
          img.mb-4(
            src='@/assets/curso/tema3/img4.svg',
            alt='Muestra diagrama de transformación del dato en conocimiento con sus componentes:<br>-Datos<br>-Información'
          )
          figcaption Fuente: MINSALUD

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      .h2 3.2 Calidad de datos

    p.mb-5 La Guía Técnica de información G.Inf. 06, define calidad de datos como el ámbito enfocado en el aseguramiento de la calidad, para garantizar la prestación de servicios de información e institucionales, a través de la identificación y propuesta de mejoras, la modificación del modelo operativo y la actualización y verificación del cumplimiento de los indicadores de calidad, definidos para el dato.
    .row.justify-content-center.mb-4
      .col-lg-4.align-self-center
        figure
          img.mb-2.mx-auto(
            src='@/assets/curso/tema3/img5.png',
            alt='Imágen decorativa'
          )
      .col-lg-8
        p.mb-0 El Ministerio de Salud y Protección Social, creó el Sistema Integrado de Información de la Protección Social - SISPRO donde los ciudadanos pueden obtener información oportuna, suficiente y estandarizada, para la toma de decisiones del Sector Salud y Protección Social. SISPRO está conformado por bases de datos y sistemas de información del sector sobre oferta y demanda de servicios de salud, calidad de los servicios, aseguramiento, financiamiento, y promoción social. Dentro de este portal, se encuentra disponible una serie de catálogos que le permiten a las entidades adscritas al Sistema General de Seguridad Social en Salud y a la ciudadanía, obtener información consolidada de los diversos repositorios de datos que posee el Ministerio. También se cuenta con la #[strong Plataforma de transporte de Información – PISIS] para el intercambio de información entre los diversos actores del sistema.

    

    .row.justify-content-center.centro-fondo--arriba.mb-5
      .col-lg-12.ps-5.pe-5
        separador
        #t_3_3.titulo-segundo.color-acento-contenido
          .h2 3.3 Sistemas de información en salud

        .row.justify-content-center.mb-5
          .col-lg-11
            .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
              .row.m-0.align-items-center.justify-content-between
                .col-lg-3.mb-4.mb-lg-0
                  figure
                    img.mb-2.mx-auto(
                      src='@/assets/curso/tema3/img6.svg',
                      alt='Imágen decorativa',
                      style='width: 228px'
                    )
                .col-lg-9
                  .bloque-texto-a__texto.p-5
                    p Con base en todo lo anterior, se definirán algunos de los sistemas de información que, en la actualidad, son utilizados por las instituciones prestadoras de servicios de salud, como parte de lo establecido por normativa del Ministerio, para garantizar el Sistema de Información dentro del proceso de calidad.
          .col-lg-11
            LineaTiempoD.color-secundario
              p.text-medium(
                numero='1',
                titulo='REPS - Registro Especial de Prestadores de Servicios de Salud'
              ) Base de datos de las Entidades Departamentales y Distritales de Salud, en la cual se efectúa el registro de las instituciones Prestadoras de Servicios de Salud, que se encuentren habilitadas y consolidadas por parte del Ministerio de Salud y Protección Social. Resolución 3100 DE 2019.
              p.text-medium(
                numero='2',
                titulo='RIPS - Registros Individuales de Prestación de Servicios de Salud'
              ) Se define como el conjunto de datos mínimos y básicos que el Sistema General de Seguridad Social en Salud, requiere para los procesos de dirección, regulación y control, como soporte de la venta de servicios, cuya denominación, estructura y características se ha unificado y estandarizado para todas las entidades a que hace referencia el artículo segundo de la resolución 3374 de 2000 (las instituciones prestadoras de servicios de salud (IPS), de los profesionales independientes, o de los grupos de práctica profesional, las entidades administradoras de planes de beneficios y los organismos de dirección, vigilancia y control del SGSSS).
              p.text-medium(
                numero='3',
                titulo='ReTHUS - Registro Único Nacional del Talento Humano en Salud'
              ) Sistema de información del Ministerio de Salud y Protección Social del talento humano en salud, que cumple con los requisitos establecidos en la Ley 1164 de 2007; proceso con el cual se entiende que dicho personal se encuentra autorizado para el ejercicio de una profesión u ocupación del área de la salud. Igualmente, marca la información sobre las sanciones del talento humano en salud que, según el caso, reportan los Tribunales ético-disciplinarios del área de la salud, autoridades competentes, o los particulares a quienes se les deleguen las funciones públicas.
              p.text-medium(
                numero='4',
                titulo='RUAF - Registro Único de Afiliados'
              ) Sistema de información que consolida las afiliaciones que reportan las entidades y administradoras del Sistema de Protección Social, de acuerdo con lo establecido en la norma vigente.
              p.text-medium(
                numero='5',
                titulo='BDUA - Base de datos única de afiliados'
              ) Suministra la información para el reconocimiento de los pagos periódicos que se le hace a las EPS, por aseguramiento en salud de los colombianos. Resolución 4622 del 2016.
              p.text-medium(
                numero='6',
                titulo='SIVIGILA - Sistema Nacional de Vigilancia en Salud Pública'
              ) Sistema de información que se ha creado para realizar la provisión en forma sistemática y oportuna, de información sobre la dinámica de los eventos que afecten o puedan afectar la salud de la población colombiana; es responsabilidad de las instituciones prestadoras de servicio de salud, el reporte inmediato, semanal o mensual, de la información identificada al Instituto Nacional de Salud.
              p.text-medium(numero='7', titulo='PAIWEB') Es la plataforma que utilizan el Programa Ampliado de Inmunizaciones y los entes vacunadores del país, para sistematizar la información y el control de la inmunización de la población, con la aplicación de las vacunas que forman parte de su esquema.
              p.text-medium(numero='8', titulo='MiVacuna Covid-19') Es una aplicación web que permite la consulta individual de la información sobre la etapa en la que cada habitante del territorio nacional, identificado, quedó priorizado y, de acuerdo con la etapa, el lugar y la fecha de la vacunación contra el COVID-19.
</template>

<script>
export default {
  name: 'Tema3',
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
