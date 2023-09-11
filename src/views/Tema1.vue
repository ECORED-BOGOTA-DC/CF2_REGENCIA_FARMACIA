<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema General de Seguridad Social en Salud - SGSSS

    .row.mb-5.justify-content-center.fondo-esquina.pt-5
      .col-lg-11(data-aos="flip-down")
        .tarjeta.color-secundario.p-4.p-md-5.mb-5(
          style='background: linear-gradient(0deg, #e3f0f7, #ebe6fb)'
        )
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
              img.mx-auto(
                src='@/assets/curso/tema1/img1.svg',
                alt='Imágen decorativa',
                style='width: 296'
              )
            .col-md.col-lg-6
              .titulo-segundo.color-acento-contenido.mb-4
                h3 Sistema de Salud Colombiano
              p.mb-4 La siguiente infografía presenta cómo era el sistema de salud antes de la Ley 100 de 1993, y cómo llegó a constituirse en un modelo para contribuir y apoyar la gestión, brindando protección a toda la población.
              a.boton.color-acento-botones(
                :href='obtenerLink("/downloads/sistema-salud-colombiano.pdf")',
                target='_blank',
                type='application/pdf'
              )
                span(style='color: #12263f') Descargar
                i.fas.fa-file-download(style='color: #12263f')

    p.mb-5(data-aos="fade-left") Tenga en cuenta, aplicar el principio de solidaridad con los aportes estatales para subsidiar los servicios de las poblaciones más vulnerables, reorganizar los prestadores de servicios de salud para integrar un sistema de salud único, con la participación del sector privado en la prestación de servicios de salud, permite generar una sana competencia para mejorar la visión del individuo y de su entorno. Es primordial la práctica de prevención de enfermedades y mejorar el cuidado personal. La Declaración de Alma-Ata, la atención primaria en salud, fue destacada como una acción urgente por parte de todos los gobiernos y de todos los profesionales de la salud, para proteger y promover la salud en todo el mundo.

    p.mb-4(data-aos="fade-right") Solo hasta 1993, con la Ley 100, se concibió la Seguridad Social Integral como:

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-up-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-4(style='font-size: 24px; font-weight: bold') El conjunto de instituciones, normas y procedimientos, de que disponen la persona y la comunidad, para gozar de una calidad de vida, mediante el cumplimiento progresivo de los planes y programas que el Estado y la sociedad desarrollen para proporcionar la cobertura integral de las contingencias, especialmente las que menoscaban la salud y la capacidad económica de los habitantes del territorio nacional, con el fin de lograr el bienestar individual y la integración de la comunidad.
            i.fas.fa-quote-right.d-flex.justify-content-end
      .col-lg-3.align-self-center.p-0(data-aos="fade-up-left")
        figure
          img(
            src='@/assets/curso/tema1/img2.png',
            alt='Imágen decorativa',
            style='width: 274px'
          )

    .cajon.color-secundario.p-4.mb-5(data-aos="flip-up")
      p.mb-0 El sistema general de seguridad social, en el sector salud, como reza en el Título 2 de la Ley No. 100 de 1993, ha evolucionado desde sus inicios, hasta la actualidad, de acuerdo con su desarrollo y su necesidad de aseguramiento.

    .row.justify-content-center(style='margin-bottom: 65px')
      .col-lg-11
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/img3.svg',
            alt='Imágen decorativa'
          )

    .row.justify-content-center.centro-fondo--arriba
      .col-lg-11
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/img4.png',alt="Imágen decorativa"
                style='width: 270px'
              )
          .col-lg-8
            .row.px-4.mb-4(data-aos="flip-up")
              .col-12.p-4.custom-card
                p.mb-0 El objetivo del Sistema General de Seguridad Social en Salud, es el de regular los servicios asistenciales, públicos y privados, del sector salud y facilitar el acceso a todos los residentes de Colombia.
              img.custom-img(
                src='@/assets/curso/tema1/img5.png',
                alt='Imágen decorativa'
              )
            .cajon.color-secundario.p-4.mb-5(data-aos="flip-up")
              p.mb-0 Con base en lo anterior, el SGSSS se compromete a garantizar servicios mejores, completos y equitativos a través del modelo de prestación de servicios de salud pública. Esto permite que el Estado, las instituciones y la sociedad, cooperen en el marco de la estrategia de atención primaria de salud.
      .col-lg-12.ps-5.pe-4
        separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          .h2 1.1 Principios del Sistema General de Seguridad Social en Salud

        p.mb-4(data-aos="fade-left") Los principios son los cimientos que sostienen el sistema, sin los cuales perdería identidad y razón de ser y, por lo tanto, se consideran la base de la Seguridad Social en Salud. Los tres primeros principios apalancan el Sistema General de Seguridad Social Integral y con la modificación del artículo 153 de la Ley 100 de 1993, se adicionan los otros tres. Estos principios son:

    TabsC.color-secundario.mb-5
      .py-3.py-md-5(titulo='Universalidad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Universalidad
            p Se refiere a la garantía de la protección para todas las personas, sin <b>ninguna discriminación,</b> en todas las etapas de su vida.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img1.jpg',
                alt='Imágen decorativa',
                style='width: 487'
              )

      .py-3.py-md-5(titulo='Solidaridad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Solidaridad
            p Se basa en la práctica de la mutua ayuda entre las personas, las generaciones, los sectores económicos, las regiones y las comunidades, bajo el principio del #[strong más fuerte hacia el más débil.]

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img2.jpg',
                alt='Imágen decorativa'
              )

      .py-3.py-md-5(titulo='Eficiencia')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Eficiencia
            p Se enfoca en la mejor utilización social y económica de los recursos administrativos, técnicos y financieros, disponibles para que los beneficios a que da derecho la seguridad social sean prestados de forma #[strong adecuada, oportuna y suficiente.]

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img3.jpg',
                alt='Imágen decorativa'
              )

      .py-3.py-md-5(titulo='Integralidad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Integralidad
            p #[strong Se apoya en la cobertura de todas las contingencias que afectan la salud,] la capacidad económica y, en general, las condiciones de vida de toda la población. Para este efecto, cada quien contribuirá según su capacidad y recibirá lo necesario para atender sus contingencias, amparadas por la Ley 100 de 1993.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img4.jpg',
                alt='Imágen decorativa'
              )

      .py-3.py-md-5(titulo='Unidad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Unidad
            p Se centra en la articulación de políticas, instituciones, regímenes, procedimientos y prestaciones, para alcanzar los objetivos de la seguridad social.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img5.jpg',
                alt='Imágen decorativa'
              )

      .py-3.py-md-5(titulo='Participación')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Participación
            p Se colabora sobre la intervención de la #[strong comunidad] a través de los beneficiarios de la seguridad social, en la organización, control, gestión y fiscalización de las instituciones y del sistema en su conjunto.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img6.jpg',
                alt='Imágen decorativa'
              )

    p.mb-5(data-aos="fade-right") El SGSSS adiciona nuevos principios que, a su vez, se aplican como reglas, para su óptimo desarrollo; estos principios adicionales son:

    .row.mb-5(style='justify-content: space-between')
      .col-lg-4
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/tema1-1/img7.png',
            alt='Imágen decorativa',
            style='width: 500px'
          )
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-medium(numero='1', titulo='Equidad ') Servicios de salud, con una <b>calidad igual</b> para todos los colombianos.

          p.text-medium(numero='2', titulo='Obligatoriedad') Afiliación al S.G.S.S.S. <b>obligatoria</b> para todos los colombianos.

          p.text-medium(numero='3', titulo='Protección integral') Atención en salud integral: educación, información, prevención de la enfermedad, diagnóstico precoz, tratamiento oportuno, rehabilitación, en <b>cantidad, oportunidad, calidad y eficiencia.</b>

          p.text-medium(numero='4', titulo='Libre escogencia') Participación de diferentes entidades que ofrezcan la administración y la prestación de servicios de salud, de tal manera que cada uno de los colombianos puedan seleccionar según la oferta y de acuerdo con sus preferencias.

          p.text-medium(numero='5', titulo='Autonomía de instituciones') Instituciones prestadoras de salud y Empresas Sociales del Estado, con autonomía jurídica.

          p.text-medium(numero='6', titulo='Descentralización administrativa') A través de los entes territoriales de salud: secretarías departamentales y municipales.

          p.text-medium(numero='7', titulo='Participación social') Participación de los usuarios en la organización y control: veedurías, asociaciones y comités de participación ciudadana.

          p.text-medium(numero='8', titulo='Concertación') A través de los Consejos Nacionales de Seguridad Social en Salud.

          p.text-medium(numero='9', titulo='Calidad') Atención en salud, oportuna, personalizada, humanizada, integral y continua.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2 Normativa del SGSSS

    .row.justify-content-center.centro-fondo--arriba
      .col-lg-12.ps-5.pe-5
        p.mb-4(data-aos="fade-right") La normativa que fortalece y apalanca el S.G.S.S.S, se basa en leyes, decretos y resoluciones que durante 28 años han sido parte de la transformación y desarrollo del sistema, siempre enfocándose en la búsqueda de una mayor cobertura y mejor oportunidad de atención de las necesidades de salud que tenemos todos los colombianos; a continuación, se revisará la línea de tiempo con una parte significativa de la normativa que ha generado un cambio en la historia de todo el sistema de salud.
        p.mb-5 Estas normas son las siguientes:
        .row.justify-content-center.mb-5
          .col-lg-10
            //p.mb-4 #[strong Leyes]
          .col-lg-6.mb-5
            LineaTiempoD.color-secundario
              p.text-medium(numero='1', titulo='Ley 100 - 1993') Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones.

              p.text-medium(numero='2', titulo='Ley 1122 – 2007') Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.

              p.text-medium(numero='3', titulo='Ley 1438 - 2011') Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.

              p.text-medium(numero='4', titulo='Ley 1751 - 2015') Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.

              p.text-medium(numero='5', titulo='Decreto 1283 - 1996') Por el cual se reglamenta el funcionamiento del Fondo de Solidaridad y Garantía del Sistema General de Seguridad Social en Salud.
          .col-lg-4
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img8.svg',
                alt='Imágen decorativa',
                style='width: 356px'
              )

    .row.mb-5(style='justify-content: space-around')
      .col-lg-4
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/tema1-1/img9.svg',
            alt='Imágen decorativa',
            style='width: 350px'
          )

      .col-lg-6
        //p.mb-4 #[strong Leyes]
        LineaTiempoD.color-secundario
          p.text-medium(numero='6', titulo='Decreto 1013 DE 1998') Por el cual se reglamenta el funcionamiento de la subcuenta de compensación del Fondo de Solidaridad y Garantía, Fosyga, y se deroga parcialmente el Decreto 1283 de 1996.

          p.text-medium(numero='7', titulo='Decreto 1011 – 2006') Por el cual se establece el Sistema Obligatorio de Garantía de Calidad de la Atención de Salud del Sistema General de Seguridad Social en Salud.

          p.text-medium(numero='8', titulo='Decreto 780 - 2016') Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.

          p.text-medium(numero='9', titulo='Decreto 064 - 2020') Por la cual se modifican los artículos 2.1.3.11, 2.1.3.13, 2.1.5.1, 2.1.7.7, 2.1.7.8 y 2.1.3.17 y se adicionan los artículos 2.1.5.4 y 2.1.5.5 del Decreto 780 de 2016, en relación con los afiliados al régimen subsidiado, la afiliación de oficio y se dictan otras disposiciones.

          p.text-medium(numero='10', titulo='Resolución 3374 - 2000') Por la cual se reglamentan los datos básicos que deben reportar los prestadores de servicios de salud y las entidades administradoras de planes de beneficios sobre los servicios de salud prestados.

          p.text-medium(numero='11', titulo='Resolución 1448 – 2006') Por la cual se definen las Condiciones de Habilitación para las instituciones que prestan servicios de salud bajo la modalidad de Telemedicina.

          p.text-medium(numero='12', titulo='Resolución 4505 – 2012') Establece el reporte relacionado con el registro de actividades de Protección Específica, Detección Temprana y la aplicación de Guías de Atención Integral para las enfermedades de interés en salud pública, de obligatorio cumplimiento, las cuales estarán integradas al Sistema Integral de Información de la Protección Social (SISPRO)

    .row.justify-content-center.mb-5
      .col-lg-10
        //p.mb-4 #[strong Resoluciones]
      .col-lg-7.mb-4
        LineaTiempoD.color-secundario
          p.text-medium(numero='13', titulo='Resolución 429 – 2016') Por medio de la cual se adopta la Política de Atención Integral en Salud.
          p.text-medium(numero='14', titulo='Resolución 4622 – 2016') Por la cual se establece el reporte de los datos de afiliación al Sistema General de Seguridad Social en Salud, a planes voluntarios, Regímenes Especial y de Excepción, y de las personas privadas de la libertad, bajo la custodia y vigilancia del INPEC.
          p.text-medium(numero='15', titulo='Resolución 1441 – 2016') Por la cual se establecen los estándares, criterios y procedimientos para la habilitación de las Redes Integrales de Prestadores de Servicios de Salud y se dictan otras disposiciones.
          p.text-medium(numero='16', titulo='Resolución 3202 - 2016') Por la cual se adopta el Manual Metodológico para la elaboración e implementación de las Rutas Integrales de Atención en Salud – RIAS, se adopta un grupo de Rutas Integrales de Atención en Salud, desarrolladas por el Ministerio de Salud y Protección Social dentro de la Política de Atención Integral en Salud – PAIS y se dictan otras disposiciones.
          p.text-medium(numero='17', titulo='Resolución 768 - 2018') Por la cual se adoptan las reglas y condiciones generales para la operación del Sistema de Afiliación Transaccional – SAT.
          p.text-medium(numero='18', titulo='Resolución 3100 – 2019') Por la cual se definen procedimientos y condiciones de inscripción de los prestadores de servicios de salud y de habilitación de los servicios de salud y se adopta el manual de inscripción de Prestadores y Habilitación de servicios de salud, Ministerio de Salud y Protección Social.
          p.text-medium(numero='19', titulo='Resolución 2626 - 2019') Por la cual se modifica la Política de Atención Integral en Salud – PAIS y se adopta el Modelo de Acción Integral Territorial – MAITE.
      .col-lg-4 
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/tema1-1/img10.svg',
            alt='Imágen decorativa',
            style='width: 346px'
          )

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3 Actores del SGSSS

    .row.justify-content-center.centro-fondo--arriba.mb-5
      .col-lg-12.ps-5.pe-5
        p.mb-5(data-aos="fade-right") Los actores que intervienen en el Sistema General de Seguridad Social en Salud, son:
        .row(style='justify-content: space-between')
          .col-lg-4
            figure
              img.mx-auto.mb-5(
                src='@/assets/curso/tema1/tema1-3/img1.png',
                alt='Imágen decorativa',
                style='width: 435px'
              )
          .col-lg-7.align-self-center
            .row.align-items-start.mb-4(data-aos="fade-up-left")
              .col-auto 
                .round--number
                  p 1
              .col
                .tarjeta.tarjeta--gris.p-4(style='border-radius:0')
                  p.mb-0 El Estado representado por el #[strong Ministerio de Salud y Protección Social], el cual direcciona el sistema.
            .row.align-items-start.mb-4(data-aos="fade-up-left")
              .col-auto 
                .round--number
                  p 2
              .col
                .tarjeta.tarjeta--gris.p-4(style='border-radius:0')
                  p.mb-0 Los aseguradores que incluyen las Entidades Promotoras de Salud #[strong E.P.S.]
            .row.align-items-start.mb-4(data-aos="fade-up-left")
              .col-auto 
                .round--number
                  p 3
              .col
                .tarjeta.tarjeta--gris.p-4(style='border-radius:0')
                  p.mb-0 Las Instituciones Prestadoras de Servicios de Salud, 
                    b I.P.S. 
                    b-none y las Empresas Sociales del Estado 
                    b E.S.E., 
                    b-none en el marco de un sistema dividido en regímenes: régimen subsidiado, régimen contributivo, régimen de población de bajos recursos NO asegurada y regímenes especiales, también llamados de excepción, administrados financieramente por 
                    b ADRES 
                    b-none que reemplaza al Fondo de Solidaridad y Garantía (FOSYGA).
            .row.align-items-start(data-aos="fade-up-left")
              .col-auto 
                .round--number
                  p 4
              .col
                .tarjeta.tarjeta--gris.p-4(style='border-radius:0')
                  p.mb-0 La inspección, Vigilancia y Control de todo el Sistema, depende de organismos como la 
                    b Super Intendencia Nacional de Salud, 
                    b-nonw el
                    b  INVIMA, 
                    b-none Instituto Nacional de Salud 
                    b INS 
                    b-none y los entes territoriales (secretarías departamentales y municipales de salud).

    p.mb-5(data-aos="fade-right") De forma gráfica, se puede observar de la siguiente manera:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 2.
      span Actores del SGSSS  

    figure.mb-4
      img.mx-auto(
        src='@/assets/curso/tema1/tema1-3/img2.svg',
        alt='Muestra dirección del SGSSS, identificando los principales actores en sus 4 fases:<br>1. Dirección ejercido por el ministerio de salud y protección social.<br>2. Aseguramiento donde esta EPS y ADRES.<br>3. Prestación de servicios de salud, se encuentran las IPS privadas y ESE  publicas<br>4. Vigilancia y control ejercido por la superintendencia nacional de salud, instituto nacional de salud, INVIMA y entes territoriales.',)

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4 Aseguramiento

    p.mb-4 La Ley 1122 de 2007 define el aseguramiento como: 

    .row.justify-content-center.mb-5
      .col-lg-9
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-4(style='font-size: 20px; font-weight: bold') La administración del riesgo financiero, la gestión del riesgo en salud, la articulación de los servicios, que garantice el acceso efectivo, la garantía de la calidad en la prestación de los servicios de salud y la representación del afiliado ante el prestador y los demás actores sin perjuicio de la autonomía del usuario.
            i.fas.fa-quote-right.d-flex.justify-content-end

    .row.justify-content-center.mb-4
      .col-lg-8
        p.mb-4(data-aos="fade-right") Por lo anterior, el aseguramiento es la estrategia del Sistema General de Seguridad Social en Salud (SGSSS) para que la población en general tenga acceso a las instituciones prestadoras de servicios de salud, públicas y privadas, las cuales incluyen el Plan Obligatorio de Salud POS y el Plan de Atención Básica PAB.
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p.mb-0 #[strong Existen dos tipos de aseguramiento:] las Entidades Promotoras de Salud, E.P.S. y las Administradoras de Riesgos Laborales, ARL. Profundicemos en cada una de ellas.
        p.mb-4(data-aos="fade-right") La Entidad Promotora de Salud E.P.S., es la encargada de organizar y garantizar la prestación de los servicios del Plan Obligatorio de Salud; además, es responsable de la gestión de riesgos derivados de la enfermedad general y no ocupacional.
      .col-lg-4
        figure.mb-4
          img.mx-auto(
            src='@/assets/curso/tema1/tema1-4/img1.png',
            alt='Imágen decorativa',
          )

    p.mb-5(data-aos="fade-left") El aseguramiento se realiza a través de dos grandes regímenes:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center(style='margin-bottom:40px;')
          .col-4
            figure
              img(src='@/assets/curso/tema1/tema1-4/img2.svg', alt='Imágen decorativa')
        h2.text-center.mb-4 Contributivo
        p.text-center Incluye los empleados, empleadores y trabajadores independientes con capacidad de pago, quienes aportan mensualmente para salud y pensión.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center(style='margin-bottom:40px;')
          .col-4
            figure
              img(src='@/assets/curso/tema1/tema1-4/img3.svg', alt='Imágen decorativa')
        h2.text-center.mb-4 Subsidiado
        p.text-center Cobija a todas las personas pobres y vulnerables, donde los servicios de salud están garantizados con los recaudos de solidaridad de los demás participantes en el sistema.

    .row.justify-content-center.centro-fondo--arriba.mb-5
      .col-lg-12.ps-5.pe-5
        p.mb-4(data-aos="fade-right") Las poblaciones especiales, definidas por el Estado como prioritarias, que no se encuentren afiliadas al régimen contributivo o pertenezcan a un régimen especial (Fuerzas Militares, Policía, Magisterio, funcionarios de universidades públicas y Ecopetrol) o de excepción (población en condición de desplazamiento, comunidades indígenas, desmovilizada del conflicto, población infantil abandonada a cargo del ICBF, personas mayores en centros de protección, y ROM o gitanos), serán afiliadas al sistema, a través del Régimen Subsidiado. Igualmente, aquellas personas sin capacidad de pago o que se encuentran en el limbo administrativo, mientras logran ser beneficiarios del Régimen Subsidiado, tendrán derecho a los servicios de salud que prestan las instituciones públicas y aquellas privadas que tengan contrato con el Estado.
        .cajon.color-secundario.p-4.mb-5(data-aos="flip-down")
          p.mb-0 Las EPS contributivas o subsidiadas, son las responsables de la afiliación, el registro de los afiliados y el recaudo de sus aportes y, a su vez, contratan la prestación de los servicios de salud con las IPS privadas y/o con la Empresas Sociales del Estado.
        p.mb-4(data-aos="fade-left") El segundo tipo de aseguramiento, se refiere a las:

        .row.justify-content-center
          .col-11
            .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5(data-aos="flip-up")
              .row.m-0.align-items-center.justify-content-between
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/tema1-4/img4.svg', alt='Imágen decorativa', style='width: 360px').m-auto
                .col-lg-8
                  .bloque-texto-a__texto.p-3
                    p.mb-0 #[strong Administradoras de Riesgos Laborales (ARL)], responsables de atender los accidentes o enfermedades derivados de los riesgos ocupacionales; todo empleador debe afiliar y aportar por todos y cada uno de sus empleados. Los trabajadores independientes también se deben afiliar a la ARL, de acuerdo al riesgo que genere su ocupación. Con esta afiliación, se cubren todos los gastos ocasionados por eventos en salud en el entorno laboral, así como el pago de los días de incapacidad, derivados de la misma.


      separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.5 Deberes y derechos en salud

    .row.justify-content-center.mb-4
      .col-lg-9.align-self-center
        p.mb-4(data-aos="fade-right") La nueva carta de derechos y deberes para el usuario del Sistema General de Seguridad Social en Salud, surge de la sentencia T-760 de 2008, luego que la Corte Constitucional estableciera la iniciativa como obligación.
        .cajon.color-secundario.p-4.mb-0.mb-4(data-aos="flip-down")
          p.mb-4 La Superintendencia Nacional de Salud recordó que las entidades del sistema de salud deben brindar a las personas, la información necesaria para acceder a los servicios de salud, con libertad y autonomía.
        a.anexo.mb-4(:href="obtenerLink('/downloads/DerechosyDeberes.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Información correspondiente a los derechos y deberes de las personas relacionados con el sistema de salud.
        
      .col-lg-3
        figure.mb-2
          img(src='@/assets/curso/tema1/tema1-5/img1.svg', alt='Imágen decorativa', style='width:336px').mx-auto


    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.6 Afiliación al SGSSS

    p.mb-0(data-aos="fade-right") ¿Sabías que la afiliación al Sistema General de Seguridad Social en Salud, es un acto que se realiza una sola vez? Por medio de ella se adquieren los derechos y obligaciones que del mismo se derivan.

    .row.justify-content-center.mb-2
      .col-lg-3
        figure.mb-2
          img(src='@/assets/curso/tema1/tema1-6/img1.svg', alt='Imágen decorativa', style='width:255px').mx-auto
      .col-lg-8.align-self-center
        p.mb-4 Se efectúa con:
        ul.lista-ul.mb-5.ms-4.fa-ul2
          li(data-aos="fade-up")
            i.fas.fa-atom
            | El registro en el Sistema de Afiliación Transaccional.
          li(data-aos="fade-up")
            i.fas.fa-atom
            | La inscripción a una sola Entidad Promotora de Salud - EPS o Entidad Obligada a Compensar – EOC.

        p.mb-2 Mediante la suscripción del formulario físico o electrónico que adopte el Ministerio de Salud y Protección Social.
    
    .row.justify-content-center.mb-4
      .col-lg-9
        p.mb-4 Tenga en cuenta que la afiliación al Sistema General de Seguridad Social en Salud, implica:
        ul.lista-ul.mb-4.ms-5.fa-ul2
          li(data-aos="fade-up")
            i.fas.fa-atom
            | La declaración de la veracidad de los datos informados y del cumplimiento de las condiciones para pertenecer al régimen contributivo o al régimen subsidiado. 
          li(data-aos="fade-up") 
            i.fas.fa-atom
            | La aceptación de las condiciones propias del régimen contributivo o subsidiado y aquellas relacionadas con las cuotas moderadoras y copagos para la prestación de los servicios, de conformidad con las normas vigentes, las cuales deberán ser informadas al afiliado.
        .cajon.color-secundario.p-4.mb-0.mb-3(data-aos="flip-down")
          | En el Sistema General de Seguridad Social en Salud no habrá afiliaciones retroactivas (Artículo 2.1.3.1 del Decreto 780 del 2016).
      .col-lg-3
        figure.mb-2
          img(src='@/assets/curso/tema1/tema1-6/img2.svg', alt='Imágen decorativa', style='width: 313px;').mx-auto

    p.mb-5(data-aos="fade-right") Los siguientes conceptos se deben tener siempre presentes en las afiliaciones:

    .row.justify-content-center.mb-5
      .col-lg-11
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Afiliaciones colectivas",  style='justify-content: space-around')
            .col-md-3.mt-4
              figure
                img(src='@/assets/curso/tema1/tema1-6/img3.svg', alt='Imágen decorativa' style='width: 221px;').mx-auto
                
            .col-md-8.mb-4.mb-md-0.align-self-center
              p La afiliación al Sistema de Seguridad Social Integral, podrá realizarse de manera colectiva, solamente a través de las asociaciones, agremiaciones y congregaciones religiosas autorizadas previamente por el Ministerio de Salud y Protección Social, en los términos y condiciones previstos en los artículos 3.2.6.1 a 3.2.6.13 del decreto 780 del 2016.

          .row(numero="2" titulo="Portabilidad", style='justify-content: space-around')
            .col-lg-12.mb-4.mt-3.px-4
              p.mb-0 Es la garantía de la accesibilidad a los servicios de salud, en cualquier municipio del territorio nacional, para todo afiliado al Sistema General de Seguridad Social en Salud, que emigre del municipio, domicilio de afiliación, o de aquel donde habitualmente recibe los servicios de salud.
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/tema1-6/img4.svg', alt='Imágen decorativa' style='width: 225px;').mx-auto
                
            .col-md-8.mb-4.mb-md-0
              .cajon.color-secundario.p-4.mb-2(data-aos="flip-down")
                p.mb-0 Las Entidades Promotoras de Salud garantizarán a sus afiliados el acceso a los servicios de salud, en un municipio diferente a aquel donde habitualmente se reciben los servicios de salud en una IPS primaria, cuando se presente cualquiera de las siguientes circunstancias, producto de la emigración ocasional, temporal o permanente de un afiliado. (Artículo o 2.1.12.4 y 2.1.12.5 del Decreto 780 del 2016)
            
          .row(numero="3" titulo="Movilidad",  style='justify-content: space-around')
            .col-md-3.mt-4
              figure
                img(src='@/assets/curso/tema1/tema1-6/img5.svg', alt='Imágen decorativa' style='width: 243px;')
                
            .col-md-8.mb-4.mb-md-0.align-self-center
              p Es el cambio de pertenencia a un régimen dentro de la misma EPS, para los afiliados en el Sistema General de Seguridad Social en Salud, focalizados en los niveles I y II del SISBÉN y algunas poblaciones especiales.
            
          .row(numero="4" titulo="Multiafiliación",  style='justify-content: space-around')
            .col-md-3.mt-4
              figure
                img(src='@/assets/curso/tema1/tema1-6/img6.svg', alt='Imágen decorativa' style='width: 223px;')
                
            .col-md-8.mb-4.mb-md-0.align-self-center
              p Afiliación simultánea de una persona, a dos o más entidades pertenecientes al régimen contributivo, o la afiliación tanto al régimen contributivo, como al subsidiado.



    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.7 Prestación del servicio y planes de beneficios

    p.mb-5 La prestación del servicio de salud es realizada por:

    .row.justify-content-center
      .col-lg-11
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center(style='margin-bottom:40px;')
              .col-4
                figure
                  img(src='@/assets/curso/tema1/tema1-7/img1.svg', alt='Imágen decorativa')
            h2.text-center.mb-4 IPS
            p.text-center Instituciones Prestadoras de <br>Servicios de Salud
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center(style='margin-bottom:40px;')
              .col-4
                figure
                  img(src='@/assets/curso/tema1/tema1-7/img2.svg', alt='Imágen decorativa')
            h2.text-center.mb-4 IPSI
            p.text-center Instituciones Prestadoras de Servicios<br> de Salud Indígena


    p.mb-4(data-aos="fade-right") Estas instituciones están compuestas por los hospitales, clínicas, laboratorios, centros de apoyo y diagnóstico, consultorios, transporte especializado de pacientes, centros de rehabilitación, entre otras. Pueden ser públicas o privadas y suministran el servicio de salud en los diferentes niveles de complejidad y de atención, según el tipo de servicios que habiliten y acreditan, es decir, de acuerdo con la capacidad instalada, tecnología y talento humano en salud.
    p.mb-4(data-aos="fade-right") Estos niveles de complejidad se clasifican en:

    TabsC.color-secundario.mb-5
      .py-3.py-md-5(titulo='Baja complejidad')
        .row(style='justify-content: space-around')
          .col-md-5.mb-4.mb-md-0.align-self-center
            h2 Baja complejidad
            p Instituciones prestadoras de servicios de salud, que realizan intervenciones y actividades de Promoción de la salud y Prevención de la enfermedad, consulta médica y odontológica, hospitalización con una baja capacidad instalada, atención de urgencias, partos de baja complejidad y servicios de apoyo diagnóstico básicos, en lo que se denomina #[strong primer nivel de atención.]

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-7/img3.png',
                alt='Imágen decorativa',
                style='width: 520px;'
              )

      .py-3.py-md-5(titulo='Mediana complejidad')
        .row(style='justify-content: space-around')
          .col-md-5.mb-4.mb-md-0.align-self-center
            h2 Mediana complejidad
            p Instituciones prestadoras de servicios de salud, que cuentan con atención de las especialidades básicas: pediatría, cirugía general, medicina interna, ortopedia y ginecobstetricia, con disponibilidad las 24 horas en servicios de hospitalización y urgencias; además, ofrecen servicios de consulta externa por especialista y laboratorios de mayor complejidad y todo lo anterior se relaciona con #[strong segundo nivel de atención.]

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-7/img4.png',
                alt='Imágen decorativa'
              )

      .py-3.py-md-5(titulo='Alta complejidad')
        .row(style='justify-content: space-around')
          .col-md-5.mb-4.mb-md-0.align-self-center
            h2 Alta complejidad
            p Instituciones prestadoras de servicios de salud, que cuentan con servicios que incluyen especialidades tales como neurocirugía, cirugía vascular, neumología, nefrología, dermatología, etc., con atención por especialista las 24 horas, consulta externa, servicio de urgencias, radiología intervencionista, medicina nuclear, unidades especiales como cuidados intensivos, cuidados intermedios y unidad renal. Estas instituciones con servicios de alta complejidad, atienden el 
              b tercer nivel de atención, 
              b-none que incluye casos y eventos o tratamientos, considerados como de 
              b alto costo en el POS.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-7/img5.png',
                alt='Imágen decorativa'
              )

    .h3.mb-4(data-aos="fade-right") Redes integrales de prestadores de servicio de salud - RIPSS

    p.mb-4(data-aos="fade-right") Es el conjunto articulado de prestadores de servicios de salud, o de organizaciones funcionales de servicios de salud, públicos, privados o mixtos, ubicados en un ámbito territorial definido, de acuerdo con las condiciones de operación del MIAS (actualmente MAITE). El objetivo de las RIPSS, es el de garantizar el acceso efectivo a los servicios de salud, y la atención oportuna, continua, integral y resolutiva.
    p.mb-5(data-aos="fade-left") La siguiente imagen nos presenta, de forma gráfica, qué es el RIPSS.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 3.
      span Redes Integrales de Prestadores de Servicios de Salud

    figure.mb-5
      img.mb-1.mx-auto(src='@/assets/curso/tema1/tema1-7/img6.svg', alt='Muestra redes integrales de prestadores de servicios de salud compuesta por servicios, prestadores y organizaciones funcionales.')
      figcaption Fuente: Tomada de MINSALUD

    
    .row.justify-content-center.centro-fondo--arriba.mb-5
      .col-lg-11
        .h3.mb-4 Red de prestación de servicios(data-aos="fade-right")
        p.mb-4(data-aos="fade-left") La siguiente imagen nos presenta qué es la red de prestación de servicios.


        .row(style='justify-content:center')
          .col-lg-4

            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 4.
              span Red de prestación de servicios

            figure.mb-5
              img.mb-1.mx-auto(src='@/assets/curso/tema1/tema1-7/img7.svg', alt='Imágen decorativa', style='width:465px')
          .col-lg-7.mb-5
            LineaTiempoD.color-secundario
              p.text-medium(numero='1', titulo='¿Qué es?') Es un conjunto articulado de prestadores de servicios de salud, ubicados en el mismo espacio geográfico, que trabajan de manera organizada y coordinada, en un proceso de integralidad con la entidad responsable de pago. 
              p.text-medium(numero='2', titulo='¿Qué busca?') Garantizar la calidad de la atención en salud y brindar, una respuesta adecuada a las necesidades de la población, en condiciones de accesibilidad, continuidad, oportunidad, integralidad y eficiencia en el uso de los recursos. 
              p.text-medium(numero='3', titulo='¿Cómo está conformada?') Está conformada por cada entidad responsable de pago e integrada a la red departamental de prestadores de servicios de salud, definida por la entidad territorial departamental en su documento de red, indicando a los prestadores con su identificación, ubicación geográfica, grado de complejidad de servicios habilitados, mecanismos de difusión y comunicación a los usuarios, así como también los indicadores definidos por el sistema obligatorio de garantía de calidad de la atención en salud, además del diseño, organización y documentación del sistema de referencia y contrarreferencia, que involucre las normas operacionales, sistemas de información y recursos logísticos, requeridos para la operación de la red. 

        p.mb-4(data-aos="fade-left") Para comprender qué es el sistema de referencia y contrareferencia, primero hay que definir qué es referencia y qué es contrareferencia.

        .row.justify-content-center
          .col-lg-11
            .tarjeta-avatar-b.tarjetar.mb-5(data-aos="fade-up-left")
              img(src='@/assets/curso/tema1/tema1-7/icon1.svg' alt='Imágen decorativa', style='')
              .tarjeta.tarjeta--gris.p-4(style='border-radius:0;')
                
                  h4(style="padding-left: 70px;") Referencia
                  p(style="padding-left: 70px;") Es el envío de pacientes o elementos de ayuda diagnóstica, por parte de un prestador de servicios de salud, a otro prestador, para atención o complementación diagnóstica. Considera el nivel de resolución y se realiza con el fin de dar respuesta a las necesidades de salud individuales de los pacientes que lo requieran. Por ejemplo, cuando un médico general o un médico especialista requiere la valoración o concepto de una especialidad diferente, el paciente es remitido a otra IPS de otro nivel de complejidad, perteneciente a la misma red de prestadores de servicios.
        
        .row.justify-content-center.mb-4
          .col-lg-11
            .tarjeta-avatar-b.tarjetar.mb-5(data-aos="fade-up-left")
              img(src='@/assets/curso/tema1/tema1-7/icon2.svg' alt='Imágen decorativa', style='')
              .tarjeta.tarjeta--gris.p-4(style='border-radius:0;')
                  h4(style="padding-left: 70px;") Contrareferencia
                  p(style="padding-left: 70px;") Es la respuesta que el prestador de servicios de salud, receptor de la referencia, da al prestador que remitió. La respuesta puede ser la contra remisión del paciente con las debidas indicaciones a seguir, o simplemente la información sobre la atención prestada al paciente en la institución receptora, o el resultado de las solicitudes de ayuda diagnóstica.

    p.mb-4(data-aos="fade-up") Entonces, el sistema de referencia y contrareferencia se definen como:
    .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
      p.mb-0 El conjunto de procesos, procedimientos y actividades técnicas y administrativas, que permiten brindar adecuadamente los servicios de salud a los pacientes, garantizando la calidad, accesibilidad, oportunidad, continuidad e integralidad de los servicios, en función de la organización de la red de prestación de servicios definida por la entidad responsable del pago; disminuyendo de esta manera, todas las barreras de acceso y las complicaciones futuras en los pacientes.
    
    p.mb-5(data-aos="fade-up") La siguiente imagen nos presenta un ejemplo de sistema de referencia y contrareferencia.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 5.
          span Ejemplo sistema de referencia y contrareferencia

        figure
          img(src='@/assets/curso/tema1/tema1-7/img8.svg' alt='Muestra ejemplo del sistema de referencia y contrareferencia, apoyo especializado por medico general   en referencia y por IPS  mayor en contrareferencia', style='').mx-auto

    p.mb-4 En la red de prestación de servicios, existen los siguientes tipos de atención:

    TabsC.color-secundario.mb-5
      .py-3.py-md-5(titulo='Atención extramural')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Atención extramural
            p Es la atención en salud, fuera de la institución prestadora de servicios de salud, como por ejemplo la residencia del paciente, un centro de bienestar para el adulto mayor o entornos de salud, que se definan como de difícil acceso; en esta atención, se involucran diferentes profesionales, técnicos y/o auxiliares del área de la salud y la participación de la familia o cuidador del paciente; hacen parte de esta atención, las brigadas, jornadas, unidades móviles en cualquiera de sus modalidades, y la atención domiciliaria.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-7/img9.jpg',
                alt='Imágen decorativa',
                style='width: 487'
              )

      .py-3.py-md-5(titulo='Atención domiciliaria')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Atención domiciliaria
            p Prestación de servicios de salud, directamente en la casa o domicilio del paciente; incluye servicios personales de enfermería, ocupacional y consulta médica. La hospitalización en casa, concentra la atención en la familia y o el cuidador del paciente, dependiente o con alto riesgo de complicación, en un servicio de hospitalización. El paciente que va a recibir atención domiciliaria, debe cumplir con los criterios de estabilidad clínica, cuidadores competentes, entorno apropiado, y disponibilidad del servicio profesional que supervise el tratamiento. Estos cuidados permiten reducir costos hospitalarios, mejorar la calidad de la atención, y favorecer la permanencia de los adultos mayores o personas con dependencia funcional, en su entorno familiar y/o en la comunidad.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-7/img10.jpg',
                alt='Imágen decorativa'
              )

      .py-3.py-md-5(titulo='Telemedicina')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Telemedicina
            p Provisión de servicios de salud a distancia, en los componentes de promoción, prevención, diagnóstico, tratamiento o rehabilitación, por profesionales de la salud que utilizan tecnologías de la información y la comunicación, les permiten intercambiar datos con el propósito de facilitar el acceso de la población a servicios que presentan limitaciones de oferta, de acceso a los servicios, o de ambos en su área geográfica.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-7/img11.jpg',
                alt='Imágen decorativa'
              )

    .cajon.color-secundario.p-4.mb-5(data-aos="flip-down")
      p.mb-0 Las entidades que prestan servicios de salud, bajo la modalidad de Telemedicina, se clasifican en Instituciones Remisoras y Centros de Referencia; en este sentido, son consideradas Instituciones Prestadoras de Servicios de Salud y, por lo tanto, deben cumplir con todas las disposiciones contenidas en la resolución 1448 de 2006 y con las exigencias y procedimientos establecidos en el Decreto 1011 de 2006. Todo lo relacionado con teleorientación, teleconsulta, telesalud, teleducación, teleasistencia, telemedicina, son tecnologías que hacen parte de la integración de las TIC y la Salud. Durante la contingencia generada por el CORONAVIRUS, en el mundo entero se utilizó, de forma activa, todo lo relacionado anteriormente.


    .h3.mb-4(data-aos="fade-right") Plan de Beneficios en Salud

    p.mb-4(data-aos="fade-up") Es el conjunto de los servicios de atención en salud, a los que tiene derecho todo afiliado al SGSSS.
    p.mb-4(data-aos="fade-up") Los tipos de planes de beneficios son:

    .row.justify-content-center.mb-5
      .col-lg-12
        .row(style='justify-content:space-between')
            .col-lg-4
              figure.mb-2
                img.mb-1.mx-auto(src='@/assets/curso/tema1/tema1-7/img12.png', alt='Imágen decorativa', style='width:462px').mx-auto
            .col-lg-7
              LineaTiempoD.color-secundario
                p.text-medium(numero='1', titulo='Plan atención básica') Denominado, posteriormente, Plan Nacional de Salud Pública, configurado por acciones gratuitas y primordialmente colectivas, de promoción de la salud, prevención de la enfermedad y, en algunos casos, acciones individuales de diagnóstico y tratamiento de algunas enfermedades de interés en salud pública, provistas por la red pública de prestadores y administrado por las entidades territoriales.
                p.text-medium(numero='2', titulo='Plan obligatorio de salud') Compuesto, principalmente, por acciones individuales de prevención primaria, secundaria y terciaria. Actualmente unificado el POS para el régimen contributivo y el régimen subsidiado. Están a cargo de las EPS.
                p.text-medium(numero='3', titulo='Planes voluntarios adicionales de salud')  Financiados voluntariamente por los usuarios que deben complementar en el POS, con prestaciones suntuarias o de mayor tecnología. Son los planes de medicina prepagada, planes complementarios y pólizas de hospitalización y cirugía, provistos por empresas registradas para ese propósito.
                p.text-medium(numero='4', titulo='Seguro obligatorio de accidentes de tránsito – SOAT') Cubre eventos de origen en accidentes de tránsito, hasta un monto determinado y de forma complementaria al POS. Provistos por compañías de seguros autorizadas hasta un monto definido, después del cual son financiados por la subcuenta específica de atención de Eventos Catastróficos y Accidentes de tránsito –ECAT. 
                p.text-medium(numero='5', titulo='Cobertura de riesgos laborales') Cubre todo evento o enfermedad de origen ocupacional sin los límites del POS. Son garantizados por las Administradoras de Riesgos Laborales-ARL.
                p.text-medium(numero='6', titulo='Atención de eventos catastróficos') Cubre eventos definidos como catastróficos (inundaciones, terremotos, etc.) con recursos específicos para tal fin y de forma complementaria al POS. Son financiados por el Fosyga mediante la subcuenta ECAT.
    
    .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
      p.mb-0 También existen los planes de cobertura, provistos a la población víctima de desplazamiento forzado y la población interna en establecimientos carcelarios que, usualmente, son suplementarios al POS. Aquí también se deben considerar las acciones de atención con tecnología en salud no cubierta por el POS y la atención de personas no afiliadas a un régimen de seguridad social en salud, que son provistas en la red pública, a cargo de las entidades territoriales (distritos, departamentos y municipios) y financiadas con los denominados recursos de subsidio a la demanda. Actualmente se le conoce como Plan de Intervenciones Colectivas -PIC.


    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.8 Inspección, Vigilancia y Control - IVC

    p.mb-4(data-aos="fade-up") Las organizaciones que componen el Sistema de Seguridad Social en Salud, como todas las Instituciones del Estado, están sujetas a tres tipos de control:


    .row.justify-content-center.mb-5
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema1/tema1-8/icon1.svg", alt="Imágen decorativa", style="width:120px;").m-auto
              h4.text-center Control <br>pólitico
            .tarjetaTxt
              p.mb-0 Se establece a través de las corporaciones públicas como el Congreso de la República, las Asambleas Departamentales y los Concejos Municipales. 
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema1/tema1-8/icon2.svg", alt="Imágen decorativa", style="width:120px;").m-auto
              h5.text-center Control<br>externo
            .tarjetaTxt
              p.mb-0 Corresponde a las instituciones de fiscalización del Estado, tales como la Contraloría, Procuraduría, Superintendencias, entre otros.
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema1/tema1-8/icon3.svg", alt="Imágen decorativa", style="width:120px;").m-auto
              h5.text-center Control <br> social
            .tarjetaTxt
              p.mb-0 Proviene de los ciudadanos, a través de las veedurías ciudadanas y las asociaciones de usuarios.


    p.mb-5(data-aos="fade-up") Los aspectos que han sido sujetos de Inspección, Vigilancia y Control, en todos los procesos y procedimientos de los diferentes actores del SGSSS, entre otros, son: 


    .row.mb-5(style='justify-content:center')
      .col-lg-3.col-md-3.mx-3.mb-4.px-4(style='background-color: #E6F7FE; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px')
        figure.mb-4.mt-4
          img.mx-auto(src="@/assets/curso/tema1/tema1-8/icon4.svg", alt="Imágen decorativa", style="width:116px;")
        h5.mb-5.text-center Multiafiliación
      .col-lg-3.col-md-3.mx-3.mb-4.px-4(style='background-color: #E6F7FE; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px ')
        figure.mb-4.mt-4
          img.mx-auto(src="@/assets/curso/tema1/tema1-8/icon5.svg", alt="Imágen decorativa", style="width:116px;")
        h5.mb-4.text-center Tardanza entre afiliación y carnetización
      .col-lg-3.col-md-3.mx-3.mb-4.px-4(style='background-color: #E6F7FE; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px ')
        figure.mb-4.mt-4
          img.mx-auto(src="@/assets/curso/tema1/tema1-8/icon6.svg", alt="Imágen decorativa", style="width:116px;")
        h5.mb-4.text-center Deficiencias en la calidad y oportunidad del servicio

    p.mb-5(data-aos="fade-up") Y los entes responsables de realizar Inspección Vigilancia y Control, de todos los actores del Sistema General de Seguridad Social en Salud S.G.S.S.S, son:

    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Superintendencia Nacional de Salud" :icono="require('@/assets/curso/tema1/tema1-8/icon7.svg')")
        .row(style='justify-content: space-around; margin-bottom:80px; margin-top:60px;')
          .col-md-7.mb-4.mb-md-0
            h1.mb-4 Superintendencia Nacional de Salud
            p Organismo de carácter técnico, que cumple funciones de inspección, vigilancia y control en el Sistema General de Seguridad Social en Salud, con personería jurídica, autonomía administrativa y patrimonio independiente, adscrita al Ministerio de Salud.
        
          .col-md-3
            figure
              img.mx-auto(src='@/assets/curso/tema1/tema1-8/img1.svg', alt='Muestra logo de Supersalud')
      
      .py-4.py-md-5(titulo="Entes territoriales / Entes de control" :icono="require('@/assets/curso/tema1/tema1-8/icon8.svg')")
        .row(style='justify-content: space-around; margin-bottom:80px; margin-top:60px;')
          .col-md-7.mb-4.mb-md-0
            h1.mb-4 Entes territoriales / Entes de control
            p Las entidades territoriales en los departamentos, los distritos, los municipios y los territorios indígenas, son las secretarías de salud departamentales y municipales, dependencias internas que garantizan que cada uno de los procesos, políticas, metas y actividades se cumplan de acuerdo con lo preestablecido por el Ministerio de Salud y Protección Social, en cuanto a lineamientos y normativa, en todo el espacio geográfico de su competencia.
        
          .col-md-3
            figure
              img.mx-auto(src='@/assets/curso/tema1/tema1-8/img2.svg', alt='Muestra imagen de ente territorial de salud')
      
      .py-4.py-md-5(titulo="INVIMA" :icono="require('@/assets/curso/tema1/tema1-8/icon9.svg')")
        .row(style='justify-content: space-around; margin-bottom:80px; margin-top:60px;')
          .col-md-7.mb-4.mb-md-0
            h1.mb-4 INVIMA
            p Instituto Nacional de Vigilancia de Medicamentos y Alimentos. Entidad de vigilancia y control de carácter técnico científico, que trabaja para la protección de la salud individual y colectiva de los colombianos, mediante la aplicación de las normas sanitarias asociadas al consumo y uso de alimentos, medicamentos, dispositivos médicos, productos cosméticos, Fitoterapéuticos y otros productos objeto de vigilancia sanitaria. El objetivo del INVIMA, es actuar como institución de referencia nacional, en materia sanitaria y ejecutar las políticas formuladas por el Ministerio de Salud y Protección Social en la inspección, vigilancia y control de calidad de los medicamentos, productos biológicos, alimentos, bebidas, cosméticos, dispositivos médicos. 
        
          .col-md-3
            figure
              img.mx-auto(src='@/assets/curso/tema1/tema1-8/img3.svg', alt='Muestra logo Invima, instituto nacional de vigilancia de medicamentos y alimentos')

      .py-4.py-md-5(titulo="Instituto Nacional de Salud" :icono="require('@/assets/curso/tema1/tema1-8/icon10.svg')")
        .row(style='justify-content: space-around; margin-bottom:80px; margin-top:60px;')
          .col-md-7.mb-4.mb-md-0
            h1.mb-4 Instituto Nacional de Salud
            p Instituto Científico y Técnico, con personería jurídica, autonomía administrativa y patrimonio propio, adscrito al Ministerio de Salud y Protección Social; su jurisdicción aplica a todo el territorio nacional. Su objetivo es el desarrollo y la gestión del conocimiento científico en salud y biomedicina, para contribuir a mejorar las condiciones de salud de las personas; realizar investigación científica básica y aplicada en salud y biomedicina; la promoción de la investigación científica, la innovación y la formulación de estudios, de acuerdo con las prioridades de salud pública, la vigilancia y seguridad sanitaria en la producción de insumos biológicos; y, actuar como laboratorio nacional de referencia y coordinador de las redes especiales, en el marco del Sistema General de Seguridad Social en Salud y del Sistema de Ciencia, Tecnología e Innovación. 
        
          .col-md-3
            figure
              img.mx-auto(src='@/assets/curso/tema1/tema1-8/img4.svg', alt='Muestra logo instituto nacional de salud')

    .row.justify-content-center.centro-fondo--arriba
      .col-lg-12.ps-5.pe-5
        separador
        #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          .h2 1.9 Financiación del SGSSS
        
        .row.justify-content-center.mb-5
          .col-lg-3.mb-2
            figure
              img.mx-auto(src='@/assets/curso/tema1/tema1-9/img1.svg', alt='Imágen decorativa', style='width:280px')
          .col-lg-9
            p.mb-4(data-aos="fade-left") Para la atención en Salud, de todo lo relacionado con enfermedad general y con riesgos no laborales, el gobierno destina recursos para la salud, administrados por la ADRES, Administradora de los Recursos del Sistema General de Seguridad Social en Salud, creada a partir del Decreto 1429 del 1 de septiembre de 2016, por el Ministerio de Salud.
            .cajon.color-secundario.p-4(data-aos="flip-down")
              p.mb-0 Su fin es el de garantizar el apropiado flujo de los recursos y los controles pertinentes; entra en reemplazo del antiguo Fondo de Solidaridad y Garantía (FOSYGA), a manejar los recursos de las siguientes subcuentas:
        
        .row.justify-content-center
          .col-lg-7.mb-4
            LineaTiempoD.color-secundario
              p.text-medium(numero='1', titulo='Subcuenta ECAT') Cubre el costo de las atenciones a las víctimas de accidentes de tránsito, a través del SOAT, y la atención a las víctimas de eventos catastróficos y terroristas. 
              p.text-medium(numero='2', titulo='Subcuenta de compensación') Cobra el valor del descuento de las cotizaciones recaudadas por las EPS del régimen contributivo y demás entidades obligadas a compensar, derivadas de los descuentos en salud y pensión, que se realizan a los empleados y empleadores. 
              p.text-medium(numero='3', titulo='Subcuenta solidaridad') Recauda los recursos aportados por todos los actores del sistema, con destino al régimen subsidiado.
              p.text-medium(numero='4', titulo='Subcuenta promoción') Financia las actividades de educación, información y fomento de la salud y de prevención de la enfermedad, las cuales se encuentran en el Plan de Atención Básica – PAB.
          .col-lg-4
            figure
              img.mx-auto(src='@/assets/curso/tema1/tema1-9/img2.svg', alt='Imágen decorativa', style='width:392px')

    p.mb-4.mt-5(data-aos="fade-right") En los regímenes exceptuados del sistema, como son las Fuerzas Armadas, Fondo Nacional del Magisterio, Ecopetrol y Universidades públicas, la financiación es responsabilidad de los fondos específicos de cada régimen exceptuado; estos, a la vez, deben aportar recursos para la subcuenta de solidaridad con que financia el Régimen Subsidiado del Sistema General. Igualmente, es importante aclarar que, parte de dinero de la subcuenta de solidaridad, recaudada por ADRES, son recursos que provienen de las empresas de medicina prepagada o planes complementarios de salud; todo lo anterior, ratifica el principio de solidaridad “mutua ayuda entre las personas, las generaciones, los sectores económicos, las regiones y las comunidades, bajo el principio del más fuerte hacia el más débil” del SGSSS.
    p.mb-5(data-aos="fade-up") En este punto, es importante tener presente qué es una cuota:


    TabsC.color-secundario.mb-5
      .py-3.py-md-5(titulo='Copagos')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Copagos
            p Aportes en dinero que deben realizar únicamente los beneficiarios, de acuerdo con el Ingreso Base de Cotización del afiliado cotizante, los cuales corresponden a una parte del valor del servicio prestado y tienen como finalidad, ayudar a financiar el Sistema. Los copagos tienen un tope máximo por la atención de una enfermedad, en el mismo año calendario y un tope máximo acumulado, por atención de distintas enfermedades. 

          .col-md-5.mt-4
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-9/img3.svg',
                alt='Imágen decorativa',
                style='width: 328px'
              )

      .py-3.py-md-5(titulo='Cuotas moderadas')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Cuotas moderadas
            p Aporte en dinero que debe ser pagado por todos los afiliados (cotizantes y beneficiarios), cuando se asiste al médico general, al especialista, al odontólogo, o a consulta con un profesional paramédico. También, cuando se reciben medicamentos, al tomarse exámenes de laboratorio o radiografías de tratamientos ambulatorios. Las cuotas moderadoras tienen por objeto regular la utilización del servicio de salud y estimular su buen uso. Su valor varía de acuerdo con el ingreso base de cotización del trabajador dependiente o independiente. La atención de urgencias NO cobra cuota moderadora, a no ser que el profesional de la salud determine que el servicio solicitado no era por una verdadera urgencia. NO se cobra cuando el usuario forma parte de un programa especial de manejo de enfermedades específicas, en el cual se debe seguir un plan rutinario de actividades de control, como por ejemplo, la atención de la hipertensión arterial o de la diabetes.

          .col-md-5.mt-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-9/img4.svg',
                alt='Imágen decorativa',
                style='width: 330px'
              )

      .py-3.py-md-5(titulo='Cuotas de recuperación')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Cuotas de recuperación
            p Aportes en dinero que debe pagar el usuario que necesite atención médica y requiera una Tecnología en Salud no incluida en el Plan de Beneficios. La población indígena y la indigente NO pagarán cuotas de recuperación. Las instituciones prestadoras de servicios de Salud, son las responsables de recaudar las cuotas de recuperación, cuando se preste una tecnología en Salud, no Incluida en el Plan de Beneficios. El valor a cancelar por cuota de recuperación, depende del valor de la Tecnología en Salud prestada, y el Nivel del Sisbén al que pertenezca el usuario. Los afiliados con nivel del SISBEN 1, pagarán el 5 % del valor de los servicios, sin exceder el equivalente a un salario mínimo legal vigente por la atención en un mismo evento; los afiliados con nivel del SISBÉN 2, pagarán el 10 % del valor de los servicios, sin exceder el equivalente a dos salarios mínimos mensuales legales vigentes (artículo 2.4.20 del Decreto 780 del 2016).

          .col-md-5.mt-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-9/img5.svg',
                alt='Imágen decorativa',
                style='width: 308px'
              )









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
