export default {
  global: {
    componenteFormativo: 'Sistema General de Seguridad Social en Salud',
    descripcionCurso:
      'En este componente formativo se hace una descripción general del Sistema General de Seguridad Social en Salud en Colombia. Es importante que los conocimientos de la competencia de orientación al usuario sean apropiados para brindar asertivamente la información al usuario de acuerdo a sus necesidades y expectativas. Para ello es importante reconocer y comprender la normatividad vigente que rige las políticas institucionales y conocer las normas que rigen el Sistema de Salud en Colombia.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema General de Seguridad Social en Salud - SGSSS ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Principios del Sistema General de Seguridad Social en Salud',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normativa del SGSSS',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actores del SGSSS',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aseguramiento',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Deberes y derechos en salud',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Afiliación al SGSSS ',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Prestación del servicio y planes de beneficios',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Inspección, Vigilancia y Control - IVC',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Financiación del SGSSS',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Políticas públicas de salud ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Sistema Obligatorio de Garantía de Calidad de Atención en Salud - SOGCS - del Sistema General de Seguridad Social en Salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes del SOGCS',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Calidad de datos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistemas de información en salud',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 780 del 2016 “Por medio del cual se expide el decreto único reglamentario del sector Salud. Ministerio de Salud y Protección Social. Mayo 6 de 2016. Departamento Nacional de Planeación. (s.f.). Salud Pública.',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-social/subdireccion-de-salud/Paginas/salud-publica.aspx',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006). Decreto Número 1011 de 2006. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2008). Lineamientos para la implementación de la Política de Seguridad del Paciente.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B2n%200112%20de%202012%20-%20Documentos%20de%20apoyo%202.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Plan de calidad de los componentes de información.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/plan-calidad-componentes-informacion-minsalud-2020.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2019). Resolución Número 2626 de 2019. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2626-de-2019.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ADRES',
      significado:
        ' Administradora de los Recursos del Sistema General de Seguridad Social en Salud.',
    },
    {
      termino: 'ARL',
      significado: ' Administradora de Riesgos Laborales.',
    },
    {
      termino: 'Calidad',
      significado:
        'Conjunto de propiedades inherentes a una cosa que permite caracterizarla y valorarla con respecto a las restantes de su especie.',
    },
    {
      termino: 'Copagos',
      significado:
        'Aportes en dinero que deben realizar únicamente los beneficiarios, de acuerdo con el Ingreso Base de Cotización del afiliado cotizante, los cuales corresponden a una parte del valor del servicio prestado y tienen como finalidad ayudar a financiar el Sistema.',
    },
    {
      termino: 'ECAT',
      significado:
        ' Subcuenta del Seguro de Riesgos Catastróficos y Accidentes de Tránsito.',
    },
    {
      termino: 'EAPB',
      significado: ' Empresa Administradora de Plan Básico.',
    },
    {
      termino: 'Movilidad',
      significado:
        'Derecho que tiene el afiliado de cambiar del régimen subsidiado hacia el régimen contributivo y viceversa, en el momento que cambien sus condiciones socioeconómicas, sin que exista interrupción en la afiliación, ni cambio de EPS.',
    },
    {
      termino: 'Portabilidad',
      significado:
        'Garantía que da la EPS al usuario para acceder a los servicios de salud en cualquier lugar del territorio nacional, cuando el afiliado y/o su familia que se va temporalmente a un municipio diferente al que reside y se encuentra afiliado.',
    },
    {
      termino: 'PDSP',
      significado: ' Plan Decenal de Salud Pública.',
    },
    {
      termino: 'ReTHUS',
      significado: ' Registro Único Nacional del Talento Humano en Salud.',
    },
    {
      termino: 'SISBÉN',
      significado:
        ' Sistema de Identificación de Potenciales Beneficiarios de Programas Sociales, que permite clasificar a la población de acuerdo con sus condiciones de vida e ingresos. Esta clasificación se utiliza para focalizar la inversión social y garantizar que sea asignada a quienes más lo necesitan.',
    },
    {
      termino: 'SIVIGILA',
      significado: ' Sistema Nacional de Vigilancia en Salud Pública.',
    },
    {
      termino: 'SOAT',
      significado: ' Seguro Obligatorio de Accidentes de Tránsito.',
    },
    {
      termino: 'SOGCS',
      significado: ' Sistema Obligatorio Gestión Calidad en Salud.',
    },
  ],
  complementario: [
    {
      tema: 'Normativa del SGSSS',
      referencia:
        'Decreto 780 del 2016. (2016). <i>“Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social”.</i>',
      tipo: 'Documento oficial',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      tema: 'PLAN DE CALIDAD COMPONENTE DE LA INFORMACIÓN.',
      referencia:
        'Ministerio de Salud y Protección Social. OFICINA DE TECNOLOGÍA DE LA INFORMACIÓN Y LA COMUNICACIÓN. Bogotá 13 enero de 2020',
      tipo: 'Documento oficial',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/plan-calidad-componentes-informacion-minsalud-2020.pdf',
    },
    {
      tema: 'Reforma SGSSS',
      referencia:
        'Ley 1438 - 2011 “Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones” enero 19 del 2011.',
      tipo: 'Documento oficial',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normatividad/ley1438de2011.pdf',
    },
    {
      tema:
        'Sistema Obligatorio de Garantía de Calidad de la Atención de Salud.',
      referencia:
        'Decreto 1011 - 2006 “Por el cual se establece el Sistema Obligatorio de Garantía de Calidad de la Atención de Salud del Sistema General de Seguridad Social en Salud”, Ministerio de la Protección Social. abril 3 de 2006.',
      tipo: 'Documento oficial',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf',
    },
    {
      tema:
        'Prestadores de servicios de salud y de habilitación de los servicios de salud – REPS - ',
      referencia:
        'Resolución 3100 - 2019 “Por la cual se definen procedimientos y condiciones de inscripción de los prestadores de servicios de salud y de habilitación de los servicios de salud y se adopta el manual de inscripción de Prestadores y Habilitación de servicios de salud, Ministerio de Salud y Protección Social”.',
      tipo: 'Documento oficial',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203100%20de%202019.pdf',
    },
    {
      tema: 'Sistema General Seguridad Social Salud',
      referencia:
        'Positiva Colombia. (18 de agosto de 2016). Sistema General Seguridad Social Salud. [Video]. https://www.youtube.com/watch?v=obE8FsL3Tvg',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=obE8FsL3Tvg',
    },
    {
      tema: 'ADRES',
      referencia:
        'ADRES. [ADRES Colombia]. (25 de septiembre de 2018). ADRES. [Video]. https://www.youtube.com/watch?v=Uxu6MU3Xu8k&t=43s',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Uxu6MU3Xu8k&t=43s',
    },
    {
      tema: 'Generalidades de la Política de Seguridad del Paciente',
      referencia:
        'Observatorio Calidad. (31 de julio de 2010). Generalidades de la Política de Seguridad del Paciente. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bvJBtSPwcpU',
    },
    {
      tema: 'ADRES | Recursos que se convierten en salud',
      referencia:
        'ADRES Colombia. [ADRES]. (31 de julio de 2019). ADRES | Recursos que se convierten en salud. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CgAmHIC5QbM',
    },
    {
      tema: '¿Qué es la Base de Datos Única de Afiliados - BDUA?',
      referencia:
        'ADRES Colombia. [ADRES]. (04 de diciembre de 2020). ¿Qué es la Base de Datos Única de Afiliados - BDUA?.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Eh3Vss5ifPk',
    },
    {
      tema: 'Dimensiones del Plan Decenal de Salud Pública 2012 - 2021',
      referencia:
        'MinSaludCol. (05 de junio de 2013). Dimensiones del Plan Decenal de Salud Pública 2012 - 2021. [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MMVi6Rdf7vI',
    },
    {
      tema: 'Sistemas de Información en Salud',
      referencia:
        'ADRES. (07 de febrero de 2021). Sistemas de Información en Salud.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TVzcTxyp7ms',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérres',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Emilia Sarmiento Mora',
          cargo: 'Experta temática - 2021',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñadora instruccional - 2021',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo:
            'Diseñadora instruccional – Revisora metodológica y pedagógica - 2021',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo - 2021',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico - 2021',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo fullstack - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
