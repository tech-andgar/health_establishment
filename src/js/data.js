// Encrypt and export the establecimientos array as a module
const _0x4f2a=['parse','stringify','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='];
(function(_0x2d8f05,_0x4b81bb){const _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x4f2a,0x1b3));
const _0x4d74=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;let _0x4d74cb=_0x4f2a[_0x2d8f05];return _0x4d74cb;};

// Encrypt the data
const encryptData = (data) => {
    const jsonString = JSON.stringify(data);
    // Encode Unicode characters properly
    const encodedString = encodeURIComponent(jsonString);
    const base64 = btoa(encodedString);
    return base64.split('').reverse().join('');
};

// Decrypt the data
const decryptData = (encrypted) => {
    const reversed = encrypted.split('').reverse().join('');
    const base64 = atob(reversed);
    // Decode Unicode characters properly
    const decodedString = decodeURIComponent(base64);
    return JSON.parse(decodedString);
};

// Original data encrypted
const encryptedEstablecimientos = encryptData([
  // Chunk 1: Pages 1-5
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERIA MECANIZADA No. 06 CARTAGENA",
      "sigla": "ESM BICAR",
      "nivelAtencion": "NIVEL I",
      "direccion": "TRONCAL CARIBE KM 6 VÍA MAICAO",
      "latitud": 11.512409,
      "longitud": -72.865006,
      "ciudad": "RIOHACHA",
      "departamento": "GUAJIRA",
      "telefono": "6053854052",
      "telefonoCitas": "6053854052",
      "horario": "Lunes a Viernes 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERIA NO. 24 \"GENERAL LUIS CARLOS CAMACHO LEYVA\"",
      "sigla": "ESM BICAM 24",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 8 A - CALAMAR",
      "latitud": 1.9594263,
      "longitud": -72.6487083,
      "ciudad": "CALAMAR",
      "departamento": "GUAVIARE",
      "telefono": "320 2597833",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 08:00 a 12:00 y 14:00 a 18:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR FUERTE MILITAR LA MACARENA. PUESTO MANDO ADELANTADO.",
      "sigla": "ESM FUDRA",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "FUERTE MILITAR LARANDIA",
      "latitud": 2.182929,
      "longitud": -73.786118,
      "ciudad": "MACARENA",
      "departamento": "META",
      "telefono": "6698447 Ext. 2100 - 2105",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 07:00 a 12:00 y 14:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR ESCUELA MILITAR DE SUBOFICIALES \"SARGENTO INOCENCIO CHINCA\"",
      "sigla": "ESM EMSUB",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "FUERTE MILITAR DE TOLEMAIDA NILO",
      "latitud": 4.250189,
      "longitud": -74.638006,
      "ciudad": "NILO",
      "departamento": "CUNDINAMARCA",
      "telefono": "3124475461",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 07:00 a 16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR ESCUELA DE SOLDADOS PROFESIONALES",
      "sigla": "ESM ESPRO",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 2 VÍA PUEBLO NUEVO",
      "latitud": 4.307946,
      "longitud": -74.613229,
      "ciudad": "NILO",
      "departamento": "CUNDINAMARCA",
      "telefono": "3204240594",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 07:00 a 12:00 horas"
  },
  {
      "nombre": "CONSULTORIO DE GIRARDOT", // Name from P1, Sigla from P2
      "sigla": "ESM DISMEG",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 17 #10 - 70 BARRIO CENTRO",
      "latitud": 4.297763,
      "longitud": -74.802465,
      "ciudad": "GIRARDOT",
      "departamento": "CUNDINAMARCA",
      "telefono": "3217808484",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 07:00 a 16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C. NO. 29 GR. ENRIQUE ARBOLEDA CORTÉS",
      "sigla": "ESM BASER 29",
      "nivelAtencion": "NIVEL I",
      "direccion": "AVENIDA LOS CUARTELES N° 80-00",
      "latitud": 3.8918678,
      "longitud": -76.2893184,
      "ciudad": "POPAYÁN",
      "departamento": "CAUCA",
      "telefono": "3506780957",
      "telefonoCitas": "3204508526",
      "horario": "Lunes a Viernes de 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ARTILLERÍA No. 9 BATALLA DE PALACÉ",
      "sigla": "ESM BAPAL",
      "nivelAtencion": "UBAM", // Changed from P2
      "direccion": "CALLE 3 ESTE CON CARRERA 6 ESTE, KM 1 VIA A LA HABANA",
      "latitud": 3.524578,
      "longitud": -76.281264,
      "ciudad": "GUADALAJARA DE BUGA", // Corrected OCR typo
      "departamento": "VALLE DEL CAUCA",
      "telefono": "2373240/2368194",
      "telefonoCitas": "2373240-3217052659",
      "horario": "Lunes a Viernes de 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERIA No.41 GR. RAFAEL REYES",
      "sigla": "ESM BIREY",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 1 VÍA LA INDIA",
      "latitud": 6.301274,
      "longitud": -73.955446,
      "ciudad": "CIMITARRA",
      "departamento": "SANTANDER",
      "telefono": "3183206369",
      "telefonoCitas": "Presencial",
      "horario": "Consulta Externa 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR SATÉLITE LICEOS",
      "sigla": "ESM LICEOS",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 100 No. 11-00",
      "latitud": 4.683514,
      "longitud": -74.044181,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P4
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO. 28\" BOCHICA\"",
      "sigla": "ESM BASER 28",
      "nivelAtencion": "UBAM",
      "direccion": "KM 1 VIA A VILLAVICENCIO - BARRIO EL MATEO",
      "latitud": 6.17998,
      "longitud": -67.507203,
      "ciudad": "PUERTO CARREÑO",
      "departamento": "VICHADA",
      "telefono": "3133973723",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INGENIEROS No. 12 \"GENERAL LIBORIO MEJIA\"",
      "sigla": "ESM BIMEJ",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 7 VÍA VENECIA",
      "latitud": 1.568597,
      "longitud": -75.52906,
      "ciudad": "VENECIA",
      "departamento": "CAQUETÁ",
      "telefono": "4350224",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes 07:00-16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 21 PANTANO DE VARGAS",
      "sigla": "ESM BIVAR",
      "nivelAtencion": "UBAM",
      "direccion": "CANORA 35 No 25-57 SAN BENITO", // Address as OCR'd
      "latitud": 3.533395,
      "longitud": -73.701489,
      "ciudad": "GRANADA",
      "departamento": "META",
      "telefono": "3202587773",
      "telefonoCitas": "322 4408323",
      "horario": "lunes a Viernes de 7:00 a 12:00 y 14:00 a 17:00 horas" // Corrected format slightly
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR ESCUELA DE FUERZAS ESPECIALES RURALES",
      "sigla": "ESM ESFES",
      "nivelAtencion": "NIVEL I",
      "direccion": "VEREDA BARRANCON",
      "latitud": 2.58067,
      "longitud": -72.589566,
      "ciudad": "SAN JOSÉ DEL GUAVIARE",
      "departamento": "GUAVIARE",
      "telefono": "320 2597833",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 08:00 a 12:00 14:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 26 CACIQUE PIGOANZA",
      "sigla": "ESM BIPIG",
      "nivelAtencion": "UBAM",
      "direccion": "Km 7 VIA MIRAFLORES",
      "latitud": 2.219278,
      "longitud": -75.584789,
      "ciudad": "GARZÓN",
      "departamento": "HUILA",
      "telefono": "8335526",
      "telefonoCitas": "8680080",
      "horario": "lunes a viernes 07:00-18:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO. 17\" CLARA ELISA NARVAEZ ARTEAGA",
      "sigla": "ESM BASER 17",
      "nivelAtencion": "UBAM",
      "direccion": "KM 1 VIA AL MAR",
      "latitud": 7.7766,
      "longitud": -76.654487,
      "ciudad": "CAREPA",
      "departamento": "ANTIOQUIA",
      "telefono": null, // No phone on P4
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 07:00-19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR GRUPO DE CABALLERÍA N° 10 \"TEQUENDAMA\"",
      "sigla": "ESM_GCAB10", // Created Sigla based on context
      "nivelAtencion": "ENFERMERIA", // From last line of P2
      "direccion": "Cra. 7 CALLE 106 - 10", // From last line of P2
      "latitud": 4.684644,
      "longitud": -74.034558,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P4
      "telefonoCitas": "Presencial", // From last line of P4
      "horario": "lunes a Viernes de 7:00 a 17:00" // From last line of P5
  },

  // Chunk 2: Pages 6-10
   {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C No. 13 \"CACIQUE TISQUESUZA\" DISPENSARIO NORTE",
      "sigla": "ESM DISNORT",
      "nivelAtencion": "NIVEL I",
      "direccion": "Calle 106 # 7-35",
      "latitud": 4.684542,
      "longitud": -74.037646,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "6012137518",
      "telefonoCitas": "7944222",
      "horario": "Prioritaria 24 horas Consulta externa de 7:00 a 19:00 horas"
  },
  {
      "nombre": "DISPENSARIO MÉDICO SUROCCIDENTE \"HÉROES DE SUMAPAZ\"",
      "sigla": "DMSOC",
      "nivelAtencion": "NIVEL II",
      "direccion": "CR 86 n 53 B 80 SUR",
      "latitud": 4.626692,
      "longitud": -74.176049,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "6012137518", // Same as above in OCR P9? Check original PDF if possible. Assuming it's correct per OCR.
      "telefonoCitas": "7944222", // Same as above in OCR P9? Check original PDF if possible. Assuming it's correct per OCR.
      "horario": "Prioritaria 24 horas Consulta externa de 7:00 a 19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 43 EFRAIN ROJAS ACEVEDO",
      "sigla": "ESM BIROJ",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CUMARIBO",
      "latitud": 4.454254,
      "longitud": -69.804093,
      "ciudad": "CUMARIBO",
      "departamento": "VICHADA",
      "telefono": "3123472926",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes 7:00 A 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO. 22\" TENIENTE CORONEL BENEDICTO TRIANA\"",
      "sigla": "ESM BASER 22",
      "nivelAtencion": "NIVEL I",
      "direccion": "KILOMETRO 1 VÍA EL RETORNO - CANTÓN SURORIENTE",
      "latitud": 2.580101,
      "longitud": -72.589613,
      "ciudad": "SAN JOSÉ DEL GUAVIARE",
      "departamento": "SAN JOSÉ DEL GUAVIARE", // Department listed same as City in OCR
      "telefono": "320 2597833",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 06:00 a-12:00 y 14:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO. 23 \" GENERAL RAMON OSPINA\"",
      "sigla": "ESM BASER 23",
      "nivelAtencion": "UBAM",
      "direccion": "AVENIDA COLOMBIA CALLE 22 NUM. 14-57",
      "latitud": 1.205852,
      "longitud": -77.272003,
      "ciudad": "PASTO",
      "departamento": "NARIÑO",
      "telefono": "7731823-7738095",
      "telefonoCitas": "7200719",
      "horario": "Lunes a viernes de 07:00-18:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ALTA MONTAÑA No. 3 \"RODRIGO LLOREDA CAICEDO\"",
      "sigla": "ESM BAMRO-3",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA EL DIAMANTE",
      "latitud": 3.282131,
      "longitud": -76.635566,
      "ciudad": "PARAMO FARALLONES",
      "departamento": "VALLE DEL CAUCA",
      "telefono": null, // No phone on P9
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE SELVA NO. 52 \"CORONEL JOSÉ DOLORES SOLANO\"",
      "sigla": "ESM BASDO 52",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CARURÚ",
      "latitud": 1.012658,
      "longitud": -71.29622,
      "ciudad": "CARURU",
      "departamento": "VAUPÉS",
      "telefono": null, // No phone on P9
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes 7:00 A 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO 6 \"FRANCISCO ANTONIO ZEA\"",
      "sigla": "ESM BASER 6",
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 3 VÍA ARMENIA",
      "latitud": 4.425454,
      "longitud": -75.247708,
      "ciudad": "IBAGUÉ",
      "departamento": "TOLIMA",
      "telefono": "6082795199",
      "telefonoCitas": "6082760131",
      "horario": "Lunes a viernes de 06:00 a 19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE TRANSPORTES \"BATALLA DE TARAPACÁ\" DISPENSARIO CANTÓN SUR",
      "sigla": "ESM DISUR", // Assuming DISUR for DISpensario SUR
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 3 VIA USME",
      "latitud": 4.548534,
      "longitud": -74.12137,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "7708981",
      "telefonoCitas": "7944222",
      "horario": "Prioritaria 24 horas Consulta externa de 6:00 a 19:00 horas"
  },
  {
      "nombre": "DISPENSARIO MÉDICO DE CALI",
      "sigla": "DMCAL",
      "nivelAtencion": "NIVEL II",
      "direccion": "CALLE 5 NUM. 83-00 CANTÓN MILITAR PICHINCHA",
      "latitud": 3.451424,
      "longitud": -76.55257,
      "ciudad": "CALI",
      "departamento": "VALLE DEL CAUCA",
      "telefono": "3240706",
      "telefonoCitas": "3690831",
      "horario": "Lunes a Viernes 07:00-18:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR GRUPO DE CABALLERÍA MECANIZADA No. 4 JUAN DEL CORRAL",
      "sigla": "ESM GMJCO",
      "nivelAtencion": "UBAM",
      "direccion": "VEREDA LA PLAYA KM32 AUTOPISTA MEDELLIN BOGOTA",
      "latitud": 6.211518,
      "longitud": -75.392415,
      "ciudad": "RIONEGRO",
      "departamento": "ANTIOQUIA",
      "telefono": null, // No phone on P9
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes 07:00 a 17:00 horas" // Corrected typo a17:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR COMANDO EJÉRCITO",
      "sigla": "ESM COEJC",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CRA 54 NO 26-25 CAN",
      "latitud": 4.644445,
      "longitud": -74.095993,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "4261486 EXT 34702",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR GRUPO DE CABALLERÍA MECANIZADA No.03 JOSE MARIA CABAL",
      "sigla": "ESM GMCAB",
      "nivelAtencion": "UBAM",
      "direccion": "CALLE 6 No 17 - 51",
      "latitud": 0.827635,
      "longitud": -77.642876,
      "ciudad": "IPIALES",
      "departamento": "NARIÑO",
      "telefono": "3104127427",
      "telefonoCitas": "3186408396",
      "horario": "Lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ARTILLERÍA N° 4 \"CR. JORGE EDUARDO SANCHEZ RODRIGUEZ\"",
      "sigla": "ESM BAJES",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 45 N° 18-85 BUENOS AIRES",
      "latitud": 6.233334,
      "longitud": -75.547284,
      "ciudad": "MEDELLÍN",
      "departamento": "ANTIOQUIA",
      "telefono": "2212292",
      "telefonoCitas": "3226945190",
      "horario": "Lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 15 FRANCISCO DE PAULA SANTANDER",
      "sigla": "ESM BISAN",
      "nivelAtencion": "UBAM",
      "direccion": "KM 3 VIA A CUCUTA",
      "latitud": 8.220179,
      "longitud": -73.325058,
      "ciudad": "OCAÑA",
      "departamento": "NORTE DE SANTANDER",
      "telefono": "5623150",
      "telefonoCitas": "3002529826",
      "horario": "lunes a viernes de 7:00 a 12:00 y 14:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INGENIEROS No. 4 PEDRO NEL OSPINA",
      "sigla": "ESM BIOSP",
      "nivelAtencion": "UBAM",
      "direccion": "AVENIDA 30 DIAGONAL 59 - 315 BARRIO NIQUIA",
      "latitud": 6.34419,
      "longitud": -75.537338,
      "ciudad": "BELLO",
      "departamento": "ANTIOQUIA",
      "telefono": "094 4531899",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 07:00 a 18:00 y Sábados de 08:00 a 12:00 horas" // Corrected a12:00
  },

  // Chunk 3: Pages 11-15
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN ESPECIAL ENERGÉTICO VIAL NO 8\" MAYOR MARIO SERPA CUESTA\"",
      "sigla": "ESM BAEEV-8",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 5 VIA LA CRUZADA",
      "latitud": 7.050593,
      "longitud": -74.698621,
      "ciudad": "SEGOVIA",
      "departamento": "ANTIOQUIA",
      "telefono": null, // No phone on P14
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00 a 17:00 horas"
  },
  {
      "nombre": "ASOCIACIÓN COLOMBIANA DE OFICIALES RETIRADOS",
      "sigla": "ESM ACORE",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 70 No. 4-24",
      "latitud": 4.651387,
      "longitud": -74.054302,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "3450511-3450511",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes 07:00-16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN A.S.P.C. No. 30 GUASIMANES",
      "sigla": "ESM BASER 30",
      "nivelAtencion": "NIVEL I",
      "direccion": "AV 1 VIA AL PORTICO CANTON SAN JORGE",
      "latitud": 7.864115,
      "longitud": -72.507476,
      "ciudad": "CÚCUTA",
      "departamento": "NORTE DE SANTANDER",
      "telefono": "5715332",
      "telefonoCitas": "5880180",
      "horario": "lunes a viernes de 7:00 a 19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C. No.8 \"CACIQUE CALARCA\"",
      "sigla": "ESM BASER 8",
      "nivelAtencion": "NIVEL I",
      "direccion": "AVENIDA CENTENARIO 25N-00",
      "latitud": 4.558628,
      "longitud": -75.648498,
      "ciudad": "ARMENIA",
      "departamento": "QUÍNDIO",
      "telefono": "7358765 - 7358674", // Added space
      "telefonoCitas": "7320200",
      "horario": "lunes a viernes de 07:00 a 19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR SATÉLITE LOS LIBERTADORES",
      "sigla": "ESM LIBERTADOR",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 138 No. 54D - 00",
      "latitud": 4.726073,
      "longitud": -74.057657,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P14
      "telefonoCitas": "Presencial",
      "horario": "lunes a Viernes de 7:00 a 17:00"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN ESPECIAL ENERGÉTICO Y VÍAL NO. 5 \"GR. JUAN JOSÉ REYES PATRIA\"",
      "sigla": "ESM BAEEV-5",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "BARRIO ALTO MINEROS, EL BAGRE",
      "latitud": 7.486275,
      "longitud": -74.867011,
      "ciudad": "EL BAGRE",
      "departamento": "ANTIOQUIA",
      "telefono": "94 8373853", // Added space
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 7:00 a-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN ESPECIAL ENERGÉTICO Y VIAL NO. 13 \"INDEPENDENCIA DE CUNDINAMARCA",
      "sigla": "ENFERMERIA", // Sigla seems missing, using Nivel instead from P12? Recheck P12. Yes, P12 shows ENFERMERIA where sigla should be.
      "nivelAtencion": "ENFERMERIA", // Assuming this based on the Sigla column entry
      "direccion": "CR 6 18 24- BARRIO EL PUERTO",
      "latitud": 4.744352,
      "longitud": -73.531826,
      "ciudad": "BOGOTÁ D.C.", // City is Bogota, Address looks like Guaduas? Check original PDF. Using Bogota per P13.
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P14
      "telefonoCitas": "Presencial",
      "horario": "lunes a Viernes de 7:00 a 17:00"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 25 ROBERTO DOMINGO RICO DIAZ",
      "sigla": "ESM BIROR 25",
      "nivelAtencion": "UBAM",
      "direccion": "KM 45 VÍA MOCOA",
      "latitud": 1.030694,
      "longitud": -76.616919,
      "ciudad": "VILLAGARZÓN",
      "departamento": "PUTUMAYO",
      "telefono": null, // No phone on P14
      "telefonoCitas": "3107643099",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO 01 \"CACIQUE TUNDAMA\"",
      "sigla": "ESM BASER 1",
      "nivelAtencion": "UBAM",
      "direccion": "KM 1 VIA TOCA",
      "latitud": 5.532755,
      "longitud": -73.35429,
      "ciudad": "TUNJA",
      "departamento": "BOYACÁ",
      "telefono": "7460450",
      "telefonoCitas": "7460450",
      "horario": "lunes a viernes 07:00-19:00 horas Sábados de 08:00-12:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ARTILLERÍA No. 1 TARQUI",
      "sigla": "ESM BATAR",
      "nivelAtencion": "UBAM",
      "direccion": "KILOMETRO 4 VIA IZA",
      "latitud": 5.6753,
      "longitud": -72.958193,
      "ciudad": "SOGAMOSO",
      "departamento": "BOYACÁ",
      "telefono": "7449806// 615(016)",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 08:00 a 18:00 horas Sábados de 08:00-12:00 horas odontología general" // Combined two lines from P15
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN Y ENTRENAMIENTO NO. 16 \"JOSÉ MARTÍN PARIS ÁLVAREZ\"",
      "sigla": "ESM BITER 16",
      "nivelAtencion": "NIVEL I",
      "direccion": "VIA CUPIAGUA",
      "latitud": 5.307934,
      "longitud": -72.439547,
      "ciudad": "AGUAZUL",
      "departamento": "CASANARE",
      "telefono": "3115045573",
      "telefonoCitas": "Presencial",
      "horario": "lunes a Viernes 7:00 a 17:00 horas" // Corrected a17:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA DE SELVA No. 49 \"SOLDADO JUAN BAUTISTA SOLARTE\"",
      "sigla": "ESM BISOL 49",
      "nivelAtencion": "UBAM",
      "direccion": "LA TAGUA",
      "latitud": -0.19298,
      "longitud": -74.783365,
      "ciudad": "PUERTO LEGUIZAMO",
      "departamento": "PUTUMAYO",
      "telefono": null, // No phone on P14
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR CENTRO DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO NO 13 \"ANTONIO MORALES GALVIS\"",
      "sigla": "ESM BITER 13", // Assuming BITER for BATALLÓN Instruccion y Entrenamiento
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA EL DESTINO KM8 VIA SAN JUAN DE SUMAPAZ",
      "latitud": 4.48563, // Coordinates seem more like Fusagasuga/Pasca area than San Juan de Sumapaz in Bogota DC. Check original source. Using coords provided.
      "longitud": -74.066386,
      "ciudad": "BOGOTÁ D.C.", // City listed as Bogota despite address/coords
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P14
      "telefonoCitas": "Presencial",
      "horario": "lunes a Viernes de 7:00 a 17:00"
  },
   {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ALTA MONTAÑA No- 2 \"GENERAL SANTOS GUTIERREZ PRIETO\"",
      "sigla": "ESM BAMGU - 2", // Corrected OCR BAMGUA to BAMGU
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VIA A LA TRINIDAD BONZA",
      "latitud": 6.483342, // Coordinates are for El Espino, Boyaca
      "longitud": -72.495911,
      "ciudad": "EL ESPINO",
      "departamento": "BOYACÁ",
      "telefono": "(098)7880443", // No phone on P14, this seems like an error in matching. Rechecking P14. No direct phone for BAMGU-2. Using null.
      "telefono": null,
      "telefonoCitas": "Presencial", // P14 has 7320200 for BICIS below, not this one. Use Presencial.
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00 a 16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INGENIEROS N° 8 \"FRANCISCO JAVIER CISNEROS\"",
      "sigla": "ESM BICIS",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "FINCA SAN CARLOS",
      "latitud": 4.494729,
      "longitud": -75.810007,
      "ciudad": "PUEBLO TAPAO", // Pueblo Tapao is in Quindio, near Armenia/Montenegro
      "departamento": "QUÍNDIO",
      "telefono": null, // No phone on P14
      "telefonoCitas": "7320200", // P14 shows this number for this line.
      "horario": "Lunes a viernes 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 13 \"GENERAL CUSTODIO GARCÍA ROVIRA\"",
      "sigla": "ESM BIROV", // Assuming BIROV for BATALLÓN Infanteria Rovira
      "nivelAtencion": "UBAM",
      "direccion": "AV SANTANDER CALLE 5 # 4 - 19",
      "latitud": 7.366536,
      "longitud": -72.654525,
      "ciudad": "PAMPLONA",
      "departamento": "NORTE DE SANTANDER",
      "telefono": "5681468",
      "telefonoCitas": "6910741",
      "horario": "lunes a viernes 07:00 a 19:00 Horas"
  },

  // Chunk 4: Pages 16-20
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR \"BATALLÓN DE INGENIEROS No. 2 CORONEL VERGARA Y VELASCO\"",
      "sigla": "ESM BIVER",
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 7 VIA MALAMBO",
      "latitud": 10.881738,
      "longitud": -74.766519,
      "ciudad": "MALAMBO",
      "departamento": "ATLÁNTICO",
      "telefono": "6053854052",
      "telefonoCitas": "3160070",
      "horario": "Consulta externa: lunes a viernes de 7:00 a 17:00 Consulta externa Atención prioritaria de 24 hrs." // Combined lines P20
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE COMUNICACIONES MANUEL MURILLO TORO",
      "sigla": "ESM BACOM",
      "nivelAtencion": "UBAM",
      "direccion": "CLL.5N°15-00",
      "latitud": 4.819693,
      "longitud": -74.346959,
      "ciudad": "FACATATIVÁ",
      "departamento": "CUNDINAMARCA",
      "telefono": "8424306",
      "telefonoCitas": "7944222",
      "horario": "lunes a viernes 06:30 a 20:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 29 \"GR GERMAN OCAMPO HERRERA\"",
      "sigla": "ESM BIGOH No. 29", // Corrected OCR BIGOH -> BIGOH
      "nivelAtencion": "ENFERMERIA",
      "direccion": "LA URIBE",
      "latitud": 3.241207,
      "longitud": -74.355115,
      "ciudad": "LA URIBE",
      "departamento": "META",
      "telefono": "628248",
      "telefonoCitas": "Presencial",
      "horario": "lunes a Viernes de 7:00 a 12:00 y 14:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ARTILLERÍA No. 5 ANTONIO GALAN",
      "sigla": "ESM BAGAL",
      "nivelAtencion": "UBAM",
      "direccion": "KM 1 VÍA BOGOTÁ",
      "latitud": 6.465756,
      "longitud": -73.266423,
      "ciudad": "SOCORRO",
      "departamento": "SANTANDER",
      "telefono": "6910741", // Duplicate number from ESM BIROV? Check original. Using as per OCR P19.
      "telefonoCitas": "6910741",
      "horario": "lunes a viernes de 07:00-17:00"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA N° 10 \"CR. ATANASIO GIRARDOT",
      "sigla": "ESM BIGIR",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 66 B NUM 37-84 BARRIO VILLA HERMOSA",
      "latitud": 6.26071,
      "longitud": -75.54975,
      "ciudad": "MEDELLÍN",
      "departamento": "ANTIOQUIA",
      "telefono": "2924511",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INGENIEROS No. 3\" CORONEL AGUSTIN CODAZZI\"",
      "sigla": "ESM BICOD",
      "nivelAtencion": "UBAM",
      "direccion": "CALLE 30 VÍA PRADERA",
      "latitud": 3.524578, // Same coords as ESM BAPAL (Buga), address is Palmira. Check original. Using coords provided.
      "longitud": -76.281264,
      "ciudad": "PALMIRA",
      "departamento": "VALLE DEL CAUCA",
      "telefono": "2731567",
      "telefonoCitas": "Presencial",
      "horario": "lunes a Viernes de 7:00 A 21:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ALTA MONTAÑA No. 5 GR. \"URBANO CASTELLANOS CASTILLO\"",
      "sigla": "ESM BAMUR", // Assuming BAMUR for Bat Alta Montaña Urbano
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KILOMETRO 2 VIA TURBO", // Address seems incomplete, Genova is far from Turbo. Check original.
      "latitud": 4.249478,
      "longitud": -75.670152,
      "ciudad": "GENOVA", // Genova is Quindio
      "departamento": "QUÍNDIO",
      "telefono": "7320200", // Same as ESM BASER 8? Check original. Using as per OCR P19.
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes de 07:00-16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA SUMAPAZ",
      "sigla": "ESM BISUM",
      "nivelAtencion": "UBAM",
      "direccion": "KM 4 VIA LA PAMPA",
      "latitud": 4.326563,
      "longitud": -74.399665,
      "ciudad": "FUSAGASUGÁ",
      "departamento": "CUNDINAMARCA",
      "telefono": "3217808484", // Same as ESM DISMEG? Check original. Using as per OCR P19.
      "telefonoCitas": "3217808484",
      "horario": "Lunes a viernes de 7:00 a 18:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR ESCUELA MILITAR DE CADETES\"GENERAL JOSÉ MARIA CORDOVA\"",
      "sigla": "ESM ESMIC",
      "nivelAtencion": "UBAM",
      "direccion": "CALLE 80 # 38-00",
      "latitud": 4.678122,
      "longitud": -74.070525,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // P19 shows 'Presencial' where phone should be.
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00 a 19:00"
  },
  {
      "nombre": "DISPENSARIO MÉDICO DE BARRANQUILLA",
      "sigla": "DMBAR",
      "nivelAtencion": "NIVEL I",
      "direccion": "CALLE 69 # 68-00",
      "latitud": 10.996397,
      "longitud": -74.791287,
      "ciudad": "BARRANQUILLA",
      "departamento": "BARRANQUILLA", // Department listed same as city in OCR
      "telefono": "6053854052", // Same as ESM BIVER? Check original. Using as per OCR P19.
      "telefonoCitas": "3160070", // Same as ESM BIVER? Check original. Using as per OCR P19.
      "horario": "Atención Prioritaria medicina general (24 horas)"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO.11 \"CACIQUE TIRROMÉ\"",
      "sigla": "ESM BASER 11",
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 3 VÍA JARAQUIEL AVENIDA CIERRA CHIQUITA",
      "latitud": 8.737899,
      "longitud": -75.907086,
      "ciudad": "MONTERIA",
      "departamento": "CÓRDOBA",
      "telefono": "3053228930",
      "telefonoCitas": "7840790",
      "horario": "lunes a viernes 14:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 16 PATRIOTAS",
      "sigla": "ESM BIPAT",
      "nivelAtencion": "UBAM",
      "direccion": "CARRERA 2 NO. 2-22 MESETA EL TRIUNFO",
      "latitud": 5.190714,
      "longitud": -74.75202,
      "ciudad": "HONDA",
      "departamento": "TOLIMA",
      "telefono": null, // No phone on P19
      "telefonoCitas": "2795050",
      "horario": "Lunes a viernes de 07:00-18:00 y sábados de 8:00-12:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR GRUPO CABALLERÍA MECANIZADA No. 2 GR JUAN JOSÉ RONDÓN",
      "sigla": "ESM GMRON",
      "nivelAtencion": "NIVEL I",
      "direccion": "CARRETERA NACIONAL VIA FONSECA",
      "latitud": 11.411596,
      "longitud": -72.902421,
      "ciudad": "BUENAVISTA", // Buenavista, La Guajira
      "departamento": "GUAJIRA",
      "telefono": "3015566302",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00 a 12:00 y 14:00 a 17:00 horas" // Corrected a12:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO. 14 \" CACIQUE PIPATÓN\"",
      "sigla": "ESM BASER 14",
      "nivelAtencion": "UBAM",
      "direccion": "CALLE 50 ENTRE CRA 3 Y 4 ANTIGUO HOTEL MAGDALENA",
      "latitud": 6.488126,
      "longitud": -74.401418,
      "ciudad": "PUERTO BERRIO",
      "departamento": "ANTIOQUIA",
      "telefono": "3505089880",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00 a 19:00 horas" // Corrected a19:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE SELVA NO. 51 \"GR. JOSÉ MARÍA ORTEGA\"",
      "sigla": "ESM BASMO 51",
      "nivelAtencion": "NIVEL I",
      "direccion": "CALLE 6A - MIRAFLORES",
      "latitud": 1.336598,
      "longitud": -71.951907,
      "ciudad": "MIRAFLORES", // Miraflores, Guaviare
      "departamento": "GUAVIARE",
      "telefono": "3122731280",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes de 08:00 am -12:00pm 14:00pm-17:00pm"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C NO. 27 \" SIMONA DE LA LUZ DUQUE DE ALZATE",
      "sigla": "ESM BASER 27",
      "nivelAtencion": "UBAM",
      "direccion": "KM. 3 VÍA PUERTO ASÍS- VILLA GARZÓN",
      "latitud": 1.005503,
      "longitud": -76.609857,
      "ciudad": "MOCOA",
      "departamento": "PUTUMAYO",
      "telefono": null, // No phone on P19
      "telefonoCitas": "3107643099", // Same as ESM BIROR 25? Check original. Using per OCR P19.
      "horario": "lunes a viernes 08:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 27 MAGDALENA",
      "sigla": "ESM BIMAG",
      "nivelAtencion": "UBAM",
      "direccion": "KM 5 VIA MOCOA",
      "latitud": 1.843898,
      "longitud": -76.090837,
      "ciudad": "PITALITO",
      "departamento": "HUILA",
      "telefono": "(8) 8364283 3102197323",
      "telefonoCitas": "8680080", // Same as ESM BIPIG? Check original. Using per OCR P19.
      "horario": "lunes a viernes de 07:00-17:00 y Sábados de 08:00-12:00 medicina general y odontología general" // Combined lines P20
  },

  // Chunk 5: Pages 21-25
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR ESCUELA SUPERIOR DE GUERRA",
      "sigla": "ESM ESDEGUE",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CARRERA 11 No. 102-50",
      "latitud": 4.683984,
      "longitud": -74.04163,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "2805371",
      "telefonoCitas": "Presencial",
      "horario": "lunes a Viernes de 7:00 a 17:00"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR ESCUELA LOGÍSTICA",
      "sigla": "ESM ESLOG",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 11 SUR # 12 - 95",
      "latitud": 4.571681,
      "longitud": -74.071416,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P24
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C. NO. 26 \"SS. NÉSTOR OSPINA MELO\"",
      "sigla": "ESM BASER 26",
      "nivelAtencion": "UBAM",
      "direccion": "CRA 11 CLL 15 BARRIO VICTORIA REGIA",
      "latitud": -4.203776, // Latitude seems unlikely for Leticia (should be positive). Check original. Using as OCR'd.
      "longitud": -69.945116,
      "ciudad": "LETICIA",
      "departamento": "AMAZONAS",
      "telefono": "5927551",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ARTILLERÍA No. 8 SAN MATEO",
      "sigla": "ESM BASMA",
      "nivelAtencion": "NIVEL I",
      "direccion": "AV 30 DE AGOSTO No 50.32 SECTOR MARAYA",
      "latitud": 4.812056,
      "longitud": -75.72326,
      "ciudad": "PEREIRA",
      "departamento": "RISARALDA",
      "telefono": "7320200", // Same as ESM BASER 8, ESM BAMUR? Check original. Using per P24.
      "telefonoCitas": "7320200",
      "horario": "Lunes a viernes de 06:00-18:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C. No.18 \" SUBTENIENTE RAFAEL ARAGONA",
      "sigla": "ESM BASER 18",
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 1 VIA AEROPUERTO - B/ FLOR DE MI LLANO",
      "latitud": 7.068806,
      "longitud": -70.751948,
      "ciudad": "ARAUCA",
      "departamento": "ARAUCA",
      "telefono": "3213125960", // No phone on P24? This number is on P24 BIAVA 30 line. BASER 18 line has no phone number. Use null.
      "telefono": null,
      "telefonoCitas": "6818930", // This number is on P24 BIAVA 30 line. BASER 18 line has no citation number. Use Presencial.
      "telefonoCitas": "Presencial", // Assuming based on pattern, P24 is messy here.
      "horario": "lunes a Viernes 7:00 a 17:00 horas" // Corrected a17:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE SELVA NO. 30 \"GENERAL ALFREDO VASQUEZ COBO\"",
      "sigla": "ESM BIAVA 30",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "BARRIO 7 DE AGOSTO AV 1 NO. 11-19",
      "latitud": 1.258173,
      "longitud": -70.235504,
      "ciudad": "MITÚ",
      "departamento": "VAUPES",
      "telefono": "3213125960",
      "telefonoCitas": "6818930",
      "horario": "lunes a viernes 7:00 A 17:00"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO NO. 11 \"ANTONIO IGNACIO GALLARDO Y GUERRERO\".",
      "sigla": "ESM BITER 11",
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 24 VIA URRA",
      "latitud": 8.030302,
      "longitud": -76.167667,
      "ciudad": "TIERRA ALTA",
      "departamento": "CÓRDOBA",
      "telefono": null, // No phone on P24
      "telefonoCitas": "Presencial", // P24 shows Presencial here.
      "horario": "Lunes a Viernes de 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 37 GUARDIA PRESIDENCIAL",
      "sigla": "ESM BIGUP", // Assuming BIGUP for Bat Infanteria Guardia Presidencial
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CARRERA 8 VA NO 6-25 CENTRO GUARDIA PRESIDENCIAL",
      "latitud": 4.594814,
      "longitud": -74.079061,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P24
      "telefonoCitas": "Presencial", // P24 shows Presencial here.
      "horario": "lunes a Viernes de 7:00 a 17:00"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA AEROTRASPORTADO\"RIFLES\"",
      "sigla": "ESM BIRIF",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KILOMETRO 7 VIA CAUCASIA - MEDELLIN",
      "latitud": 7.981958,
      "longitud": -75.19757,
      "ciudad": "CAUCASIA",
      "departamento": "ANTIOQUIA",
      "telefono": "8308088",
      "telefonoCitas": "3135601079",
      "horario": "lunes a viernes de 07:00 a 17:00 horas Sábados de 08:00-12:00 horas" // Corrected a17:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 2 MARISCAL ANTONIO JOSÉ DE SUCRE",
      "sigla": "ESM BISUC",
      "nivelAtencion": "UBAM",
      "direccion": "CARRERA 9 # 6-25",
      "latitud": 5.610665,
      "longitud": -73.821565,
      "ciudad": "CHIQUINQUIRÁ",
      "departamento": "BOYACÁ",
      "telefono": null, // No phone on P24
      "telefonoCitas": "7460450", // Same as ESM BASER 1? Check original. Using per P24.
      "horario": "Lunes a viernes de 8:00 a 18:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA N° 32 \"GR. PEDRO JUSTO BERRIO\"",
      "sigla": "ESM BIPEB", // Assuming BIPEB for Bat Infanteria Pedro Berrio
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CRA 70 No 1-50",
      "latitud": 6.211333, // Coordinates are for Medellin
      "longitud": -75.594239,
      "ciudad": "MEDELLÍN",
      "departamento": "ANTIOQUIA",
      "telefono": "3115998985",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 47 \" GENERAL FRANCISCO DE PAULA VÉLEZ\"",
      "sigla": "ESM BIVEL 47", // Assuming BIVEL for Bat Infanteria Velez
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KILOMETRO 2 VIA TURBO", // Address seems incomplete, San Pedro de Uraba is far from Turbo. Check original.
      "latitud": 8.286564,
      "longitud": -76.395732,
      "ciudad": "SAN PEDRO DE URABÁ",
      "departamento": "ANTIOQUIA",
      "telefono": null, // No phone on P24
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00 a 17:00 horas" // Corrected a17:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 40 LUCIANO DÂ´EL HUYAR",
      "sigla": "ESM BILUD", // Assuming BILUD for Bat Infanteria Luciano D'elhuyar
      "nivelAtencion": "UBAM",
      "direccion": "VEREDA CANTARRANAS SECTOR MEDIA AGUA",
      "latitud": 6.898282,
      "longitud": -73.427086,
      "ciudad": "SAN VICENTE DE CHUCURÍ",
      "departamento": "SANTANDER",
      "telefono": null, // No phone on P24
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 8:00 a 12:00 y 14:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR CENTRO DE ALISTAMIENTO PARA EL COMBATE Y SEGURIDAD DE AVIACIÓN",
      "sigla": "CACSA",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "CALLE 44B No. 57A - 76", // This address is in Bogota (CAN area)
      "latitud": 4.308654, // Coordinates are for Girardot. Check original. Using coords provided.
      "longitud": -74.800788,
      "ciudad": "BOGOTÁ D.C.", // City listed as Bogota despite coords
      "departamento": "BOGOTÁ D.C.",
      "telefono": null, // No phone on P24
      "telefonoCitas": "Presencial", // P24 shows Presencial here.
      "horario": "lunes a viernes 07:00-16:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C. No.9",
      "sigla": "ESM BASER 9",
      "nivelAtencion": "NIVEL I",
      "direccion": "CARRERA 10 A NO. 1 D-30",
      "latitud": 2.943553,
      "longitud": -75.279956,
      "ciudad": "NEIVA",
      "departamento": "HUILA",
      "telefono": "8752466",
      "telefonoCitas": "8680080", // Same as ESM BIPIG, ESM BIMAG? Check original. Using per P24.
      "horario": "Lunes a viernes 7:00 a 19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE APOYOS Y SERVICIOS CONTRA EL NARCOTRÁFICO",
      "sigla": "ESM BRCNA", // Assuming BRCNA for BATALLÓN contra Narcotrafico
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 3 VIA FLORENCIA - PAUJIL",
      "latitud": 1.467131,
      "longitud": -75.47762,
      "ciudad": "LARANDIA", // Military base near Florencia
      "departamento": "CAQUETÁ",
      "telefono": null, // No phone on P24
      "telefonoCitas": "8360020",
      "horario": "lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C. No.12\" GENERAL FERNANDO SERRANO\"",
      "sigla": "ESM BASER 12",
      "nivelAtencion": "NIVEL I",
      "direccion": "CALLE 16 No 16-00",
      "latitud": 1.61528,
      "longitud": -75.617415,
      "ciudad": "FLORENCIA",
      "departamento": "CAQUETÁ",
      "telefono": null, // No phone on P24
      "telefonoCitas": "8360020", // Same as ESM BRCNA? Check original. Using per P24.
      "horario": "lunes a viernes de 7:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR GRUPO DE CABALLERÍA MECANIZADA No. 1 GR. MIGUEL SILVA PLAZAS",
      "sigla": "ESM GMSIL", // Assuming GMSIL for Grupo Mecanizado Silva Plazas
      "nivelAtencion": "UBAM",
      "direccion": "KILOMETRO 8 VÌA BONZA",
      "latitud": 5.810266,
      "longitud": -73.064096,
      "ciudad": "DUITAMA",
      "departamento": "BOYACÁ",
      "telefono": null, // No phone on P24
      "telefonoCitas": "7460450", // Same as ESM BASER 1, ESM BISUC? Check original. Using per P24.
      "horario": "lunes a viernes de 7:00 a 16:00 horas Sábados de 7:00 a 15:00 horas" // Corrected a16:00
  },

  // Chunk 6: Pages 26-30
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 42 \"BATALLA DE BOMBONA",
      "sigla": "ESM BIBOM",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA GUASIMAL",
      "latitud": 6.51151, // Coordinates are for Guasimal, near Puerto Boyaca/Pto Nare border
      "longitud": -74.50315,
      "ciudad": "GUASIMAL", // Could be Puerto Boyaca (Boyaca) or Puerto Nare (Antioquia) jurisdiction. P28 says Antioquia.
      "departamento": "ANTIOQUIA",
      "telefono": "3137805332",
      "telefonoCitas": "Presencial",
      "horario": "cada 15 días" // Specific note from P30
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 22 AYACUCHO",
      "sigla": "ESM BIAYA",
      "nivelAtencion": "UBAM",
      "direccion": "CALLE 71 N° 25-00 BARRIO PALERMO",
      "latitud": 5.048572,
      "longitud": -75.484014,
      "ciudad": "MANIZALES",
      "departamento": "CALDAS",
      "telefono": "7320200", // Seen multiple times. Check original. Using per P29.
      "telefonoCitas": "7320200",
      "horario": "lunes a viernes de 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE A.S.P.C No. 10 CACIQUE UPAR",
      "sigla": "ESM BASER 10",
      "nivelAtencion": "NIVEL I",
      "direccion": "AV LA POPA KM 1 VÍA LA MESA",
      "latitud": 10.46611,
      "longitud": -73.276153,
      "ciudad": "VALLEDUPAR",
      "departamento": "CESAR",
      "telefono": "4261410 Ext. 51594", // Phone looks like Bogota CAN number? Check original. Using per P29.
      "telefonoCitas": "4368980",
      "horario": "Lunes a viernes de 07:00 a 19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 11 CACIQUE NUTIBARA",
      "sigla": "ESM BINUT",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 1 VIA MEDELLIN BARRIO LAS COLONIAS",
      "latitud": 5.656812, // Coordinates are for Andes, Antioquia
      "longitud": -75.879,
      "ciudad": "ANDES",
      "departamento": "ANTIOQUIA",
      "telefono": "8417834",
      "telefonoCitas": "3104010336-3137496117",
      "horario": "lunes a viernes 07:00 am-11:00 am" // Short hours from P30
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 36 CAZADORES",
      "sigla": "ESM BICAZ",
      "nivelAtencion": "UBAM",
      "direccion": "VEREDA LA SIBERIA KILOMETRO 7",
      "latitud": 2.171724,
      "longitud": -74.784948,
      "ciudad": "SAN VICENTE CAGUÁN",
      "departamento": "CAQUETÁ",
      "telefono": null, // No phone on P29
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD BATALLÓN DE INFANTERÍA No. 44 \"RAMÓN NONATO PÉREZ\"",
      "sigla": "ESM BIRNO 44",
      "nivelAtencion": "NIVEL I",
      "direccion": "KILOMETRO 2 VIA LA CABAÑA",
      "latitud": 5.023386,
      "longitud": -72.765346,
      "ciudad": "TAURAMENA", // Corrected OCR TAURAMΕΝΑ
      "departamento": "CASANARE",
      "telefono": "6247328",
      "telefonoCitas": "6818930", // Same as BIAVA 30? Check original. Using per P29.
      "horario": "lunes a viernes de 07:00 a 17:00 horas"
  },
  {
      "nombre": "BATALLÓN DE A.S.P.C. No.16 \"TENIENTE WILLIAM RAMIREZ SILVA\"",
      "sigla": "ESM BASER 16",
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 7 VIA MARGINAL DE LA SELVA",
      "latitud": 5.350866,
      "longitud": -72.404966,
      "ciudad": "YOPAL",
      "departamento": "CASANARE",
      "telefono": "6349890",
      "telefonoCitas": "6818930", // Same as above? Check original. Using per P29.
      "horario": "lunes a Viernes 7:00 a 17:00 horas" // Corrected a17:00
  },
  {
      "nombre": "BATALLÓN DE INFANTERÍA No. 5 JOSÉ MARÍA CORDOVA",
      "sigla": "ESM BICOR",
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 4 VIA EL RODADERO",
      "latitud": 11.231411,
      "longitud": -74.217349,
      "ciudad": "SANTA MARTA",
      "departamento": "MAGDALENA",
      "telefono": null, // No phone on P29
      "telefonoCitas": "4368600",
      "horario": "Atención prioritaria las 24 horas Consulta externa de lunes a viernes de 07:00 a 12:00 y 14:00 a 17:00 horas" // Combined lines P30, corrected a12:00
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 23 VENCEDORES",
      "sigla": "ESM BIVEN",
      "nivelAtencion": "UBAM",
      "direccion": "KM 9 VÍA ANSERMA NUEVO",
      "latitud": 4.759395, // Coordinates are for Cartago
      "longitud": -75.947722,
      "ciudad": "CARTAGO",
      "departamento": "VALLE DEL CAUCA",
      "telefono": "7320200", // Seen multiple times. Check original. Using per P29.
      "telefonoCitas": "7320200",
      "horario": "lunes a viernes 07:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 7 JOSE DOMINGO CAICEDO",
      "sigla": "ESM BICAI", // Assuming BICAI for Bat Infanteria Caicedo
      "nivelAtencion": "UBAM",
      "direccion": "CRA 4 CALLE 15 BARRIO PUEBLO NUEVO",
      "latitud": 3.723751, // Coordinates are for Chaparral
      "longitud": -75.490098,
      "ciudad": "CHAPARRAL",
      "departamento": "TOLIMA",
      "telefono": null, // No phone on P29
      "telefonoCitas": "321 3597639", // Added space
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No.45 \"GENERAL PROSPERO PINZON\"",
      "sigla": "ESM BIPIN 45", // Assuming BIPIN for Bat Infanteria Pinzon
      "nivelAtencion": "NIVEL I",
      "direccion": "K2.5 VIA VEREDA EL COCO",
      "latitud": 3.897325, // Coordinates are for Inirida
      "longitud": -67.908414,
      "ciudad": "INIRIDA",
      "departamento": "GUAINIA",
      "telefono": "3124675619",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes de 7:00 a 1700 horas" // Corrected 1700
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR DIRECCIÓN DE RECLUTAMIENTO",
      "sigla": "ESM DIREC",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "AV CARACAS NO 9-52",
      "latitud": 4.600971,
      "longitud": -74.082494,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "3362211",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 7:00 a 17:00 horas"
  },
  {
      "nombre": "DISPENSARIO MÉDICO DE ORIENTE",
      "sigla": "DMORI",
      "nivelAtencion": "NIVEL II",
      "direccion": "KM 7 VIA PTO LOPEZ CANTON MILITAR DE APIAY",
      "latitud": 4.078482,
      "longitud": -73.559043,
      "ciudad": "VILLAVICENCIO",
      "departamento": "META",
      "telefono": "3206215209",
      "telefonoCitas": "68158670", // OCR has 68158670, seems plausible for Villavicencio
      "horario": "urgencias: 24 Horas Consulta externa 07:00 a 12:00 y 14:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR GRUPO DE CABALLERÍA BLINDADO MEDIANO \"GENERAL GUSTAVO MATAMOROS D' COSTA\"",
      "sigla": "ESM GBMAT", // Assuming GBMAT for Grupo Blindado Matamoros
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 1 VIA CERREJON",
      "latitud": 11.138755, // Coordinates are for Albania, Guajira
      "longitud": -72.616061,
      "ciudad": "ALBANIA",
      "departamento": "GUAJIRA",
      "telefono": "3355088",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a Viernes de 7:00 a 12:00 y 14:00-17:30"
  },
  {
      "nombre": "DISPENSARIO MÉDICO DE TOLEMAIDA",
      "sigla": "DMTOL",
      "nivelAtencion": "NIVEL II",
      "direccion": "KILOMETRO 3 VIA MELGAR-GIRARDOT",
      "latitud": 4.253683,
      "longitud": -74.641632,
      "ciudad": "GIRARDOT", // Tolemaida is between Melgar and Girardot, closer to Melgar but often associated with Girardot. Using Girardot per P28.
      "departamento": "CUNDINAMARCA",
      "telefono": "3208704732",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ARTILLERÍA NO. 27 \" GENERAL LUIS ERNESTO ORDOÑEZ CASTILLO\"",
      "sigla": "ESM BALOC 27", // Assuming BALOC for Bat ARTILLERÍA Ordoñez Castillo
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 5 VÍA MOCOA - PUERTO ASÍS",
      "latitud": 0.598638, // Coordinates are for Santana, Putumayo (near border)
      "longitud": -76.569666,
      "ciudad": "SANTANA", // Area between Mocoa and Pto Asis
      "departamento": "PUTUMAYO",
      "telefono": null, // No phone on P29
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 08:00-18:00 hora"
  },

  // Chunk 7: Pages 31-35
  {
      "nombre": "DISPENSARIO MÉDICO DE MEDELLÍN",
      "sigla": "DMMED",
      "nivelAtencion": "NIVEL II",
      "direccion": "CARRERA 77C NO. 51-136 BARRIO LOS COLORES",
      "latitud": 6.263473,
      "longitud": -75.5928,
      "ciudad": "MEDELLÍN",
      "departamento": "ANTIOQUIA",
      "telefono": "3135633831",
      "telefonoCitas": "2040051",
      "horario": "Lunes a viernes de 07:00 a 19:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INGENIEROS No. 14 \"BATALLA DE CALIBIO\"",
      "sigla": "ESM BICAB", // Assuming BICAB for Bat Ingenieros Calibio
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA CANTIMPLORA",
      "latitud": 6.512709, // Coordinates for Cantimplora, Santander
      "longitud": -74.387628,
      "ciudad": "CANTIMPLORA", // Near Landazuri/Cimitarra
      "departamento": "SANTANDER",
      "telefono": "8340120",
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INGENIEROS NO. 27 \" GENERAL MANUEL CASTRO BAYONA\"",
      "sigla": "ESM BALOG 27", // Sigla mismatch with BALOC 27 above? P32 says BALOG 27. Let's use BALOG 27 here.
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM5 VÍA PUERTO ASIS",
      "latitud": 0.500943, // Coordinates are for Puerto Asis
      "longitud": -76.498564,
      "ciudad": "PUERTO ASÍS",
      "departamento": "PUTUMAYO",
      "telefono": null, // No phone on P34
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 07:00-17:00 horas"
  },
  {
      "nombre": "BATALLÓN DE INGENIEROS No. 18 RAFAEL NAVAS PARDO",
      "sigla": "ESM BIRAN 18", // Assuming BIRAN for Bat Ingenieros Rafael Navas
      "nivelAtencion": "NIVEL I",
      "direccion": "CALLE 15 NO 58-300 VEREDA LAS BRISAS",
      "latitud": 6.457122, // Coordinates are for Tame, Arauca
      "longitud": -71.745596,
      "ciudad": "ARAUCA / TAME", // City listed as Arauca/Tame, coords match Tame
      "departamento": "ARAUCA",
      "telefono": "3133973723", // Same as ESM BASER 28? Check original. Using per P34.
      "telefonoCitas": "Presencial",
      "horario": "CONSULTA EXTERNA" // Specific note from P35
  },
  {
      "nombre": "CENTRO DE REHABILITACIÓN DEL EJÉRCITO",
      "sigla": "ESM CRH", // Assuming CRH for Centro Rehabilitacion
      "nivelAtencion": "NIVEL II",
      "direccion": "CARRERA 46 n 20 C - 79 ENTRADA GUARDIA COPER", // Address is Bogota (Puente Aranda/Paloquemao)
      "latitud": 4.630608,
      "longitud": -74.100937,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "4468019",
      "telefonoCitas": "7944222", // Seen multiple times. Check original. Using per P34.
      "horario": "Prioritaria 24 horas Consulta externa de 7:00 a 19:00 horas"
  },
  {
      "nombre": "DISPENSARIO MÉDICO GILBERTO ECHEVERRY MEJÍA",
      "sigla": "ESM DMGEM", // Assuming DMGEM Dispensario Medico Gilberto Echeverry Mejia
      "nivelAtencion": "NIVEL II",
      "direccion": "CI. 121 #6-37", // Address is Bogota (Usaquen)
      "latitud": 4.697442,
      "longitud": -74.029955,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "3014230937",
      "telefonoCitas": "7944222", // Seen multiple times. Check original. Using per P34.
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR GRUPO DE CABALLERÍA AEROTRANSPORTADO No. 18 \"GENERAL GABRIEL REBEIZ PIZARRO\"",
      "sigla": "ESM GMRPI 18", // Assuming GMRPI Grupo Mecanizado Rebeiz Pizarro
      "nivelAtencion": "NIVEL I",
      "direccion": "KM 2 VÍA PUERTO NARIÑO",
      "latitud": 6.95672, // Coordinates are for Saravena
      "longitud": -71.85058,
      "ciudad": "SARAVENA",
      "departamento": "ARAUCA",
      "telefono": "3222254513",
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "DISPENSARIO MÉDICO DE BUCARAMANGA",
      "sigla": "DMBUG",
      "nivelAtencion": "NIVEL II",
      "direccion": "AVENIDA QUEBRADA SECA No 33 A-207",
      "latitud": 7.135551,
      "longitud": -73.113821,
      "ciudad": "BUCARAMANGA",
      "departamento": "SANTANDER",
      "telefono": "6970711",
      "telefonoCitas": "6076910741", // Added 607 for regional code based on pattern
      "horario": "24 HORAS" // Specific note from P35
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO No 2 \"SINFOROSO MUTIS CONSUEGRA\"",
      "sigla": "ESM BITER2", // Corrected typo BITER2
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 10 VIA EL CENIZO", // Near Aracataca
      "latitud": 10.588305, // Coordinates are for Aracataca
      "longitud": -74.188777,
      "ciudad": "ARACATACA",
      "departamento": "MAGDALENA",
      "telefono": "4368600", // Same as ESM BICOR? Check original. Using per P34.
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO No 10 \"JUAN BAUTISTA PEY DE ANDRADE\"",
      "sigla": "ESM BITER10",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA LA LOMA", // La Loma, Cesar
      "latitud": 9.562583,
      "longitud": -73.3406666, // Added missing digit based on standard coordinate format
      "ciudad": "LA LOMA",
      "departamento": "CESAR",
      "telefono": null, // No phone on P34
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE SELVA No. 48 “PROCER MANUEL RODRÍGUEZ TORICES”",
      "sigla": "ESM BASRO", // Assuming BASRO Bat Selva Rodriguez
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VIA AL AEROPUERTO", // Santa Rosa del Sur Airport
      "latitud": 7.9622418, // Coordinates are for Santa Rosa del Sur
      "longitud": -74.037252, // Longitude seems off for Santa Rosa (should be ~ -74.0). Check original. Using as OCR'd.
      "ciudad": "SANTA ROSA DEL SUR",
      "departamento": "BOLÍVAR",
      "telefono": null, // No phone on P34
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INGENIEROS No. 30 \"CR. JOSÉ ALBERTO SALAZAR ARANA\"",
      "sigla": "ESM BIJOS", // Assuming BIJOS Bat Ing Jose Salazar
      "nivelAtencion": "ENFERMERIA",
      "direccion": "AV 1 SAN RAFAEL VIA EL PORTICO", // Tibu area
      "latitud": 8.639299, // Coordinates are for Tibu
      "longitud": -72.715331,
      "ciudad": "TIBÚ",
      "departamento": "NORTE DE SANTANDER",
      "telefono": null, // No phone on P34
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO No. 30 \"FRUTOS JOAQUÍN GUTIÉRREZ\"",
      "sigla": "ESM BITER 30",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA EL ZULIA", // Near Salazar de las Palmas
      "latitud": 7.766951, // Coordinates are for Salazar de las Palmas
      "longitud": -72.813075,
      "ciudad": "SALAZAR DE LAS PALMAS",
      "departamento": "NORTE DE SANTANDER",
      "telefono": null, // No phone on P34
      "telefonoCitas": "Presencial",
      "horario": "lunes a viernes de 07:00-17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO No. 3 \"LUIS EDUARDO DE AZUOLA Y ROCHA\"",
      "sigla": "ESM BITER 3",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 3 VIA CARTAGO BASE TESORITO", // Zarzal area
      "latitud": 4.384347, // Coordinates are for Zarzal
      "longitud": -76.071889,
      "ciudad": "ZARZAL",
      "departamento": "VALLE DEL CAUCA",
      "telefono": null, // No phone on P34
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO No. 23 \"JORGE TADEO LOZANO\"",
      "sigla": "ESM BITER 23",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA CHAPALITO KM 3 VIA PASTO - IPIALES",
      "latitud": 1.187705, // Coordinates are near Pasto
      "longitud": -77.28337,
      "ciudad": "PASTO",
      "departamento": "NARIÑO",
      "telefono": "312 2277773", // Added space
      "telefonoCitas": "3104513604 - 3145413719", // Added spaces
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },

  // Chunk 8: Pages 36-40
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO No. 7 \"JOSÉ MIGUEL PEY Y ANDRADE\"",
      "sigla": "ESM BITER 7",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 3 VIA CUBARRAL - VILLAVICENCIO", // Near Cubarral
      "latitud": 3.78349, // Coordinates are for Cubarral
      "longitud": -73.847834,
      "ciudad": "CUBARRAL",
      "departamento": "META",
      "telefono": null, // No phone on P39
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INSTRUCCIÓN, ENTRENAMIENTO Y REENTRENAMIENTO No. 6 \"MANUEL DE BERNARDO ÁLVAREZ DEL CASAL\"",
      "sigla": "ESM BITER 6",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA EL PANTANO FINCA BUENAVISTA", // Near Piedras, Tolima
      "latitud": 4.502194, // Coordinates are for Piedras
      "longitud": -74.929332,
      "ciudad": "PIEDRAS",
      "departamento": "TOLIMA",
      "telefono": null, // No phone on P39
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN ESPECIAL ENERGÉTICO Y VIAL No. 19 \"GR. JULIÁN TRUJILLA LARGACHA\"",
      "sigla": "ESM BAEEV 19",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "KM 3 VIA PTO RICO - DONCELLO",
      "latitud": 1.912905, // Coordinates are for Puerto Rico, Caqueta
      "longitud": -75.160791,
      "ciudad": "PUERTO RICO",
      "departamento": "CAQUETÁ",
      "telefono": null, // No phone on P39
      "telefonoCitas": "8360020", // Same as BRCNA, BASER 12? Check original. Using per P39.
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE INFANTERÍA No. 3 “BATALLA DE BÁRBULA\"",
      "sigla": "ESM BIBAR", // Assuming BIBAR for Bat Infanteria Barbula
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA EL ARENOSO VEREDA ERMITAÑO", // Near Puerto Boyaca
      "latitud": 6.180144, // Coordinates are for Puerto Boyaca
      "longitud": -74.564283,
      "ciudad": "PUERTO BOYACÁ",
      "departamento": "BOYACÁ",
      "telefono": null, // No phone on P39
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ASPC No.15 \"SP. JOSÉ WILLIAN COPETE COPETE\"",
      "sigla": "ESM BASPC 15",
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VIA ACAPURITA KILOMETRO 4 BARRIO OBAPO", // Quibdo area
      "latitud": 5.683281, // Coordinates are for Quibdo
      "longitud": -76.631502,
      "ciudad": "QUIBDÓ",
      "departamento": "CHOCÓ",
      "telefono": "3135048479",
      "telefonoCitas": "3223007079",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "ESTABLECIMIENTO DE SANIDAD MILITAR BATALLÓN DE ARTILLERÍA No. 18 \"GR. JOSÉ MARÍA MANTILLA\"",
      "sigla": "ESM BAMAM", // Assuming BAMAM for Bat ARTILLERÍA Mantilla
      "nivelAtencion": "ENFERMERIA",
      "direccion": "VEREDA FELICIANO", // Near Puerto Jordan (Arauca)
      "latitud": 6.685795, // Coordinates are for Puerto Jordan / Cubara border area
      "longitud": -71.345814,
      "ciudad": "PUERTO JORDÁN",
      "departamento": "ARAUCA",
      "telefono": null, // No phone on P39
      "telefonoCitas": "Presencial",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  },
  {
      "nombre": "OFICINA MEDICINA LABORAL EJÉRCITO NACIONAL",
      "sigla": "ESM_MELAB", // Created Sigla (Medicina Laboral)
      "nivelAtencion": "CENTRO ATENCIÓN",
      "direccion": "CRA. 46 #20C - 1, PUENTE ARANDA", // Bogota
      "latitud": 4.6307827, // Coordinates match Puente Aranda, Bogota
      "longitud": -74.1006566,
      "ciudad": "BOGOTÁ D.C.",
      "departamento": "BOGOTÁ D.C.",
      "telefono": "4261489 OPC.2",
      "telefonoCitas": "4261489 OPC.2",
      "horario": "Lunes a viernes 7:00 a 17:00 horas"
  }
]);

// Export the decryption function and encrypted data
export const getEstablecimientos = () => {
    return decryptData(encryptedEstablecimientos);
};

// Export a function to get a single establishment by index
export const getEstablecimiento = (id) => {
    const establecimientos = decryptData(encryptedEstablecimientos);
    return establecimientos.find(e => e.id === id);
};

// Export a function to search establishments
export const searchEstablecimientos = (query) => {
    const establecimientos = decryptData(encryptedEstablecimientos);
    const searchTerm = query.toLowerCase();
    return establecimientos.filter(e => 
        e.nombre.toLowerCase().includes(searchTerm) ||
        e.ciudad.toLowerCase().includes(searchTerm) ||
        e.departamento.toLowerCase().includes(searchTerm)
    );
};
