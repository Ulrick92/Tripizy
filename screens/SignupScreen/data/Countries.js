const countries = [
  {
    label: "Afghanistan",
    flag: "https://restcountries.eu/data/afg.svg",
    alpha2Code: "AF",
    value: 0
  },
  {
    label: "Åland",
    flag: "https://restcountries.eu/data/ala.svg",
    alpha2Code: "AX",
    value: 1
  },
  {
    label: "Albanie",
    flag: "https://restcountries.eu/data/alb.svg",
    alpha2Code: "AL",
    value: 2
  },
  {
    label: "Algérie",
    flag: "https://restcountries.eu/data/dza.svg",
    alpha2Code: "DZ",
    value: 3
  },
  {
    label: "Samoa américaines",
    flag: "https://restcountries.eu/data/asm.svg",
    alpha2Code: "AS",
    value: 4
  },
  {
    label: "Andorre",
    flag: "https://restcountries.eu/data/and.svg",
    alpha2Code: "AD",
    value: 5
  },
  {
    label: "Angola",
    flag: "https://restcountries.eu/data/ago.svg",
    alpha2Code: "AO",
    value: 6
  },
  {
    label: "Anguilla",
    flag: "https://restcountries.eu/data/aia.svg",
    alpha2Code: "AI",
    value: 7
  },
  {
    label: "Antarctique",
    flag: "https://restcountries.eu/data/ata.svg",
    alpha2Code: "AQ",
    value: 8
  },
  {
    label: "Antigua-et-Barbuda",
    flag: "https://restcountries.eu/data/atg.svg",
    alpha2Code: "AG",
    value: 9
  },
  {
    label: "Argentine",
    flag: "https://restcountries.eu/data/arg.svg",
    alpha2Code: "AR",
    value: 10
  },
  {
    label: "Arménie",
    flag: "https://restcountries.eu/data/arm.svg",
    alpha2Code: "AM",
    value: 11
  },
  {
    label: "Aruba",
    flag: "https://restcountries.eu/data/abw.svg",
    alpha2Code: "AW",
    value: 12
  },
  {
    label: "Australie",
    flag: "https://restcountries.eu/data/aus.svg",
    alpha2Code: "AU",
    value: 13
  },
  {
    label: "Autriche",
    flag: "https://restcountries.eu/data/aut.svg",
    alpha2Code: "AT",
    value: 14
  },
  {
    label: "Azerbaïdjan",
    flag: "https://restcountries.eu/data/aze.svg",
    alpha2Code: "AZ",
    value: 15
  },
  {
    label: "Bahamas",
    flag: "https://restcountries.eu/data/bhs.svg",
    alpha2Code: "BS",
    value: 16
  },
  {
    label: "Bahreïn",
    flag: "https://restcountries.eu/data/bhr.svg",
    alpha2Code: "BH",
    value: 17
  },
  {
    label: "Bangladesh",
    flag: "https://restcountries.eu/data/bgd.svg",
    alpha2Code: "BD",
    value: 18
  },
  {
    label: "Barbade",
    flag: "https://restcountries.eu/data/brb.svg",
    alpha2Code: "BB",
    value: 19
  },
  {
    label: "Biélorussie",
    flag: "https://restcountries.eu/data/blr.svg",
    alpha2Code: "BY",
    value: 20
  },
  {
    label: "Belgique",
    flag: "https://restcountries.eu/data/bel.svg",
    alpha2Code: "BE",
    value: 21
  },
  {
    label: "Belize",
    flag: "https://restcountries.eu/data/blz.svg",
    alpha2Code: "BZ",
    value: 22
  },
  {
    label: "Bénin",
    flag: "https://restcountries.eu/data/ben.svg",
    alpha2Code: "BJ",
    value: 23
  },
  {
    label: "Bermudes",
    flag: "https://restcountries.eu/data/bmu.svg",
    alpha2Code: "BM",
    value: 24
  },
  {
    label: "Bhoutan",
    flag: "https://restcountries.eu/data/btn.svg",
    alpha2Code: "BT",
    value: 25
  },
  {
    label: "Bolivie",
    flag: "https://restcountries.eu/data/bol.svg",
    alpha2Code: "BO",
    value: 26
  },
  {
    label: "Bonaire, Saint-Eustache et Saba",
    flag: "https://restcountries.eu/data/bes.svg",
    alpha2Code: "BQ",
    value: 27
  },
  {
    label: "Bosnie-Herzégovine",
    flag: "https://restcountries.eu/data/bih.svg",
    alpha2Code: "BA",
    value: 28
  },
  {
    label: "Botswana",
    flag: "https://restcountries.eu/data/bwa.svg",
    alpha2Code: "BW",
    value: 29
  },
  {
    label: "Île Bouvet",
    flag: "https://restcountries.eu/data/bvt.svg",
    alpha2Code: "BV",
    value: 30
  },
  {
    label: "Brésil",
    flag: "https://restcountries.eu/data/bra.svg",
    alpha2Code: "BR",
    value: 31
  },
  {
    label: "Territoire britannique de l'océan Indien",
    flag: "https://restcountries.eu/data/iot.svg",
    alpha2Code: "IO",
    value: 32
  },
  {
    label: "Îles mineures éloignées des États-Unis",
    flag: "https://restcountries.eu/data/umi.svg",
    alpha2Code: "UM",
    value: 33
  },
  {
    label: "Îles Vierges britanniques",
    flag: "https://restcountries.eu/data/vgb.svg",
    alpha2Code: "VG",
    value: 34
  },
  {
    label: "Îles Vierges des États-Unis",
    flag: "https://restcountries.eu/data/vir.svg",
    alpha2Code: "VI",
    value: 35
  },
  {
    label: "Brunei",
    flag: "https://restcountries.eu/data/brn.svg",
    alpha2Code: "BN",
    value: 36
  },
  {
    label: "Bulgarie",
    flag: "https://restcountries.eu/data/bgr.svg",
    alpha2Code: "BG",
    value: 37
  },
  {
    label: "Burkina Faso",
    flag: "https://restcountries.eu/data/bfa.svg",
    alpha2Code: "BF",
    value: 38
  },
  {
    label: "Burundi",
    flag: "https://restcountries.eu/data/bdi.svg",
    alpha2Code: "BI",
    value: 39
  },
  {
    label: "Cambodge",
    flag: "https://restcountries.eu/data/khm.svg",
    alpha2Code: "KH",
    value: 40
  },
  {
    label: "Cameroun",
    flag: "https://restcountries.eu/data/cmr.svg",
    alpha2Code: "CM",
    value: 41
  },
  {
    label: "Canada",
    flag: "https://restcountries.eu/data/can.svg",
    alpha2Code: "CA",
    value: 42
  },
  {
    label: "Cap Vert",
    flag: "https://restcountries.eu/data/cpv.svg",
    alpha2Code: "CV",
    value: 43
  },
  {
    label: "Îles Caïmans",
    flag: "https://restcountries.eu/data/cym.svg",
    alpha2Code: "KY",
    value: 44
  },
  {
    label: "République centrafricaine",
    flag: "https://restcountries.eu/data/caf.svg",
    alpha2Code: "CF",
    value: 45
  },
  {
    label: "Tchad",
    flag: "https://restcountries.eu/data/tcd.svg",
    alpha2Code: "TD",
    value: 46
  },
  {
    label: "Chili",
    flag: "https://restcountries.eu/data/chl.svg",
    alpha2Code: "CL",
    value: 47
  },
  {
    label: "Chine",
    flag: "https://restcountries.eu/data/chn.svg",
    alpha2Code: "CN",
    value: 48
  },
  {
    label: "Île Christmas",
    flag: "https://restcountries.eu/data/cxr.svg",
    alpha2Code: "CX",
    value: 49
  },
  {
    label: "Îles Cocos",
    flag: "https://restcountries.eu/data/cck.svg",
    alpha2Code: "CC",
    value: 50
  },
  {
    label: "Colombie",
    flag: "https://restcountries.eu/data/col.svg",
    alpha2Code: "CO",
    value: 51
  },
  {
    label: "Comores",
    flag: "https://restcountries.eu/data/com.svg",
    alpha2Code: "KM",
    value: 52
  },
  {
    label: "Congo",
    flag: "https://restcountries.eu/data/cog.svg",
    alpha2Code: "CG",
    value: 53
  },
  {
    label: "Congo (Rép. dém.)",
    flag: "https://restcountries.eu/data/cod.svg",
    alpha2Code: "CD",
    value: 54
  },
  {
    label: "Îles Cook",
    flag: "https://restcountries.eu/data/cok.svg",
    alpha2Code: "CK",
    value: 55
  },
  {
    label: "Costa Rica",
    flag: "https://restcountries.eu/data/cri.svg",
    alpha2Code: "CR",
    value: 56
  },
  {
    label: "Croatie",
    flag: "https://restcountries.eu/data/hrv.svg",
    alpha2Code: "HR",
    value: 57
  },
  {
    label: "Cuba",
    flag: "https://restcountries.eu/data/cub.svg",
    alpha2Code: "CU",
    value: 58
  },
  {
    label: "Curaçao",
    flag: "https://restcountries.eu/data/cuw.svg",
    alpha2Code: "CW",
    value: 59
  },
  {
    label: "Chypre",
    flag: "https://restcountries.eu/data/cyp.svg",
    alpha2Code: "CY",
    value: 60
  },
  {
    label: "République tchèque",
    flag: "https://restcountries.eu/data/cze.svg",
    alpha2Code: "CZ",
    value: 61
  },
  {
    label: "Danemark",
    flag: "https://restcountries.eu/data/dnk.svg",
    alpha2Code: "DK",
    value: 62
  },
  {
    label: "Djibouti",
    flag: "https://restcountries.eu/data/dji.svg",
    alpha2Code: "DJ",
    value: 63
  },
  {
    label: "Dominique",
    flag: "https://restcountries.eu/data/dma.svg",
    alpha2Code: "DM",
    value: 64
  },
  {
    label: "République dominicaine",
    flag: "https://restcountries.eu/data/dom.svg",
    alpha2Code: "DO",
    value: 65
  },
  {
    label: "Équateur",
    flag: "https://restcountries.eu/data/ecu.svg",
    alpha2Code: "EC",
    value: 66
  },
  {
    label: "Égypte",
    flag: "https://restcountries.eu/data/egy.svg",
    alpha2Code: "EG",
    value: 67
  },
  {
    label: "Salvador",
    flag: "https://restcountries.eu/data/slv.svg",
    alpha2Code: "SV",
    value: 68
  },
  {
    label: "Guinée-Équatoriale",
    flag: "https://restcountries.eu/data/gnq.svg",
    alpha2Code: "GQ",
    value: 69
  },
  {
    label: "Érythrée",
    flag: "https://restcountries.eu/data/eri.svg",
    alpha2Code: "ER",
    value: 70
  },
  {
    label: "Estonie",
    flag: "https://restcountries.eu/data/est.svg",
    alpha2Code: "EE",
    value: 71
  },
  {
    label: "Éthiopie",
    flag: "https://restcountries.eu/data/eth.svg",
    alpha2Code: "ET",
    value: 72
  },
  {
    label: "Îles Malouines",
    flag: "https://restcountries.eu/data/flk.svg",
    alpha2Code: "FK",
    value: 73
  },
  {
    label: "Îles Féroé",
    flag: "https://restcountries.eu/data/fro.svg",
    alpha2Code: "FO",
    value: 74
  },
  {
    label: "Fidji",
    flag: "https://restcountries.eu/data/fji.svg",
    alpha2Code: "FJ",
    value: 75
  },
  {
    label: "Finlande",
    flag: "https://restcountries.eu/data/fin.svg",
    alpha2Code: "FI",
    value: 76
  },
  {
    label: "France",
    flag: "https://restcountries.eu/data/fra.svg",
    alpha2Code: "FR",
    value: 77
  },
  {
    label: "Guayane",
    flag: "https://restcountries.eu/data/guf.svg",
    alpha2Code: "GF",
    value: 78
  },
  {
    label: "Polynésie française",
    flag: "https://restcountries.eu/data/pyf.svg",
    alpha2Code: "PF",
    value: 79
  },
  {
    label: "Terres australes et antarctiques françaises",
    flag: "https://restcountries.eu/data/atf.svg",
    alpha2Code: "TF",
    value: 80
  },
  {
    label: "Gabon",
    flag: "https://restcountries.eu/data/gab.svg",
    alpha2Code: "GA",
    value: 81
  },
  {
    label: "Gambie",
    flag: "https://restcountries.eu/data/gmb.svg",
    alpha2Code: "GM",
    value: 82
  },
  {
    label: "Géorgie",
    flag: "https://restcountries.eu/data/geo.svg",
    alpha2Code: "GE",
    value: 83
  },
  {
    label: "Allemagne",
    flag: "https://restcountries.eu/data/deu.svg",
    alpha2Code: "DE",
    value: 84
  },
  {
    label: "Ghana",
    flag: "https://restcountries.eu/data/gha.svg",
    alpha2Code: "GH",
    value: 85
  },
  {
    label: "Gibraltar",
    flag: "https://restcountries.eu/data/gib.svg",
    alpha2Code: "GI",
    value: 86
  },
  {
    label: "Grèce",
    flag: "https://restcountries.eu/data/grc.svg",
    alpha2Code: "GR",
    value: 87
  },
  {
    label: "Groenland",
    flag: "https://restcountries.eu/data/grl.svg",
    alpha2Code: "GL",
    value: 88
  },
  {
    label: "Grenade",
    flag: "https://restcountries.eu/data/grd.svg",
    alpha2Code: "GD",
    value: 89
  },
  {
    label: "Guadeloupe",
    flag: "https://restcountries.eu/data/glp.svg",
    alpha2Code: "GP",
    value: 90
  },
  {
    label: "Guam",
    flag: "https://restcountries.eu/data/gum.svg",
    alpha2Code: "GU",
    value: 91
  },
  {
    label: "Guatemala",
    flag: "https://restcountries.eu/data/gtm.svg",
    alpha2Code: "GT",
    value: 92
  },
  {
    label: "Guernesey",
    flag: "https://restcountries.eu/data/ggy.svg",
    alpha2Code: "GG",
    value: 93
  },
  {
    label: "Guinée",
    flag: "https://restcountries.eu/data/gin.svg",
    alpha2Code: "GN",
    value: 94
  },
  {
    label: "Guinée-Bissau",
    flag: "https://restcountries.eu/data/gnb.svg",
    alpha2Code: "GW",
    value: 95
  },
  {
    label: "Guyane",
    flag: "https://restcountries.eu/data/guy.svg",
    alpha2Code: "GY",
    value: 96
  },
  {
    label: "Haïti",
    flag: "https://restcountries.eu/data/hti.svg",
    alpha2Code: "HT",
    value: 97
  },
  {
    label: "Îles Heard-et-MacDonald",
    flag: "https://restcountries.eu/data/hmd.svg",
    alpha2Code: "HM",
    value: 98
  },
  {
    label: "voir Saint",
    flag: "https://restcountries.eu/data/vat.svg",
    alpha2Code: "VA",
    value: 99
  },
  {
    label: "Honduras",
    flag: "https://restcountries.eu/data/hnd.svg",
    alpha2Code: "HN",
    value: 100
  },
  {
    label: "Hong Kong",
    flag: "https://restcountries.eu/data/hkg.svg",
    alpha2Code: "HK",
    value: 101
  },
  {
    label: "Hongrie",
    flag: "https://restcountries.eu/data/hun.svg",
    alpha2Code: "HU",
    value: 102
  },
  {
    label: "Islande",
    flag: "https://restcountries.eu/data/isl.svg",
    alpha2Code: "IS",
    value: 103
  },
  {
    label: "Inde",
    flag: "https://restcountries.eu/data/ind.svg",
    alpha2Code: "IN",
    value: 104
  },
  {
    label: "Indonésie",
    flag: "https://restcountries.eu/data/idn.svg",
    alpha2Code: "ID",
    value: 105
  },
  {
    label: "Côte d'Ivoire",
    flag: "https://restcountries.eu/data/civ.svg",
    alpha2Code: "CI",
    value: 106
  },
  {
    label: "Iran",
    flag: "https://restcountries.eu/data/irn.svg",
    alpha2Code: "IR",
    value: 107
  },
  {
    label: "Irak",
    flag: "https://restcountries.eu/data/irq.svg",
    alpha2Code: "IQ",
    value: 108
  },
  {
    label: "Irlande",
    flag: "https://restcountries.eu/data/irl.svg",
    alpha2Code: "IE",
    value: 109
  },
  {
    label: "Île de Man",
    flag: "https://restcountries.eu/data/imn.svg",
    alpha2Code: "IM",
    value: 110
  },
  {
    label: "Israël",
    flag: "https://restcountries.eu/data/isr.svg",
    alpha2Code: "IL",
    value: 111
  },
  {
    label: "Italie",
    flag: "https://restcountries.eu/data/ita.svg",
    alpha2Code: "IT",
    value: 112
  },
  {
    label: "Jamaïque",
    flag: "https://restcountries.eu/data/jam.svg",
    alpha2Code: "JM",
    value: 113
  },
  {
    label: "Japon",
    flag: "https://restcountries.eu/data/jpn.svg",
    alpha2Code: "JP",
    value: 114
  },
  {
    label: "Jersey",
    flag: "https://restcountries.eu/data/jey.svg",
    alpha2Code: "JE",
    value: 115
  },
  {
    label: "Jordanie",
    flag: "https://restcountries.eu/data/jor.svg",
    alpha2Code: "JO",
    value: 116
  },
  {
    label: "Kazakhstan",
    flag: "https://restcountries.eu/data/kaz.svg",
    alpha2Code: "KZ",
    value: 117
  },
  {
    label: "Kenya",
    flag: "https://restcountries.eu/data/ken.svg",
    alpha2Code: "KE",
    value: 118
  },
  {
    label: "Kiribati",
    flag: "https://restcountries.eu/data/kir.svg",
    alpha2Code: "KI",
    value: 119
  },
  {
    label: "Koweït",
    flag: "https://restcountries.eu/data/kwt.svg",
    alpha2Code: "KW",
    value: 120
  },
  {
    label: "Kirghizistan",
    flag: "https://restcountries.eu/data/kgz.svg",
    alpha2Code: "KG",
    value: 121
  },
  {
    label: "Laos",
    flag: "https://restcountries.eu/data/lao.svg",
    alpha2Code: "LA",
    value: 122
  },
  {
    label: "Lettonie",
    flag: "https://restcountries.eu/data/lva.svg",
    alpha2Code: "LV",
    value: 123
  },
  {
    label: "Liban",
    flag: "https://restcountries.eu/data/lbn.svg",
    alpha2Code: "LB",
    value: 124
  },
  {
    label: "Lesotho",
    flag: "https://restcountries.eu/data/lso.svg",
    alpha2Code: "LS",
    value: 125
  },
  {
    label: "Liberia",
    flag: "https://restcountries.eu/data/lbr.svg",
    alpha2Code: "LR",
    value: 126
  },
  {
    label: "Libye",
    flag: "https://restcountries.eu/data/lby.svg",
    alpha2Code: "LY",
    value: 127
  },
  {
    label: "Liechtenstein",
    flag: "https://restcountries.eu/data/lie.svg",
    alpha2Code: "LI",
    value: 128
  },
  {
    label: "Lituanie",
    flag: "https://restcountries.eu/data/ltu.svg",
    alpha2Code: "LT",
    value: 129
  },
  {
    label: "Luxembourg",
    flag: "https://restcountries.eu/data/lux.svg",
    alpha2Code: "LU",
    value: 130
  },
  {
    label: "Macao",
    flag: "https://restcountries.eu/data/mac.svg",
    alpha2Code: "MO",
    value: 131
  },
  {
    label: "Macédoine",
    flag: "https://restcountries.eu/data/mkd.svg",
    alpha2Code: "MK",
    value: 132
  },
  {
    label: "Madagascar",
    flag: "https://restcountries.eu/data/mdg.svg",
    alpha2Code: "MG",
    value: 133
  },
  {
    label: "Malawi",
    flag: "https://restcountries.eu/data/mwi.svg",
    alpha2Code: "MW",
    value: 134
  },
  {
    label: "Malaisie",
    flag: "https://restcountries.eu/data/mys.svg",
    alpha2Code: "MY",
    value: 135
  },
  {
    label: "Maldives",
    flag: "https://restcountries.eu/data/mdv.svg",
    alpha2Code: "MV",
    value: 136
  },
  {
    label: "Mali",
    flag: "https://restcountries.eu/data/mli.svg",
    alpha2Code: "ML",
    value: 137
  },
  {
    label: "Malte",
    flag: "https://restcountries.eu/data/mlt.svg",
    alpha2Code: "MT",
    value: 138
  },
  {
    label: "Îles Marshall",
    flag: "https://restcountries.eu/data/mhl.svg",
    alpha2Code: "MH",
    value: 139
  },
  {
    label: "Martinique",
    flag: "https://restcountries.eu/data/mtq.svg",
    alpha2Code: "MQ",
    value: 140
  },
  {
    label: "Mauritanie",
    flag: "https://restcountries.eu/data/mrt.svg",
    alpha2Code: "MR",
    value: 141
  },
  {
    label: "Île Maurice",
    flag: "https://restcountries.eu/data/mus.svg",
    alpha2Code: "MU",
    value: 142
  },
  {
    label: "Mayotte",
    flag: "https://restcountries.eu/data/myt.svg",
    alpha2Code: "YT",
    value: 143
  },
  {
    label: "Mexique",
    flag: "https://restcountries.eu/data/mex.svg",
    alpha2Code: "MX",
    value: 144
  },
  {
    label: "Micronésie",
    flag: "https://restcountries.eu/data/fsm.svg",
    alpha2Code: "FM",
    value: 145
  },
  {
    label: "Moldavie",
    flag: "https://restcountries.eu/data/mda.svg",
    alpha2Code: "MD",
    value: 146
  },
  {
    label: "Monaco",
    flag: "https://restcountries.eu/data/mco.svg",
    alpha2Code: "MC",
    value: 147
  },
  {
    label: "Mongolie",
    flag: "https://restcountries.eu/data/mng.svg",
    alpha2Code: "MN",
    value: 148
  },
  {
    label: "Monténégro",
    flag: "https://restcountries.eu/data/mne.svg",
    alpha2Code: "ME",
    value: 149
  },
  {
    label: "Montserrat",
    flag: "https://restcountries.eu/data/msr.svg",
    alpha2Code: "MS",
    value: 150
  },
  {
    label: "Maroc",
    flag: "https://restcountries.eu/data/mar.svg",
    alpha2Code: "MA",
    value: 151
  },
  {
    label: "Mozambique",
    flag: "https://restcountries.eu/data/moz.svg",
    alpha2Code: "MZ",
    value: 152
  },
  {
    label: "Myanmar",
    flag: "https://restcountries.eu/data/mmr.svg",
    alpha2Code: "MM",
    value: 153
  },
  {
    label: "Namibie",
    flag: "https://restcountries.eu/data/nam.svg",
    alpha2Code: "NA",
    value: 154
  },
  {
    label: "Nauru",
    flag: "https://restcountries.eu/data/nru.svg",
    alpha2Code: "NR",
    value: 155
  },
  {
    label: "Népal",
    flag: "https://restcountries.eu/data/npl.svg",
    alpha2Code: "NP",
    value: 156
  },
  {
    label: "Pays-Bas",
    flag: "https://restcountries.eu/data/nld.svg",
    alpha2Code: "NL",
    value: 157
  },
  {
    label: "Nouvelle-Calédonie",
    flag: "https://restcountries.eu/data/ncl.svg",
    alpha2Code: "NC",
    value: 158
  },
  {
    label: "Nouvelle-Zélande",
    flag: "https://restcountries.eu/data/nzl.svg",
    alpha2Code: "NZ",
    value: 159
  },
  {
    label: "Nicaragua",
    flag: "https://restcountries.eu/data/nic.svg",
    alpha2Code: "NI",
    value: 160
  },
  {
    label: "Niger",
    flag: "https://restcountries.eu/data/ner.svg",
    alpha2Code: "NE",
    value: 161
  },
  {
    label: "Nigéria",
    flag: "https://restcountries.eu/data/nga.svg",
    alpha2Code: "NG",
    value: 162
  },
  {
    label: "Niue",
    flag: "https://restcountries.eu/data/niu.svg",
    alpha2Code: "NU",
    value: 163
  },
  {
    label: "Île de Norfolk",
    flag: "https://restcountries.eu/data/nfk.svg",
    alpha2Code: "NF",
    value: 164
  },
  {
    label: "Corée du Nord",
    flag: "https://restcountries.eu/data/prk.svg",
    alpha2Code: "KP",
    value: 165
  },
  {
    label: "Îles Mariannes du Nord",
    flag: "https://restcountries.eu/data/mnp.svg",
    alpha2Code: "MP",
    value: 166
  },
  {
    label: "Norvège",
    flag: "https://restcountries.eu/data/nor.svg",
    alpha2Code: "NO",
    value: 167
  },
  {
    label: "Oman",
    flag: "https://restcountries.eu/data/omn.svg",
    alpha2Code: "OM",
    value: 168
  },
  {
    label: "Pakistan",
    flag: "https://restcountries.eu/data/pak.svg",
    alpha2Code: "PK",
    value: 169
  },
  {
    label: "Palaos",
    flag: "https://restcountries.eu/data/plw.svg",
    alpha2Code: "PW",
    value: 170
  },
  {
    label: "Palestine",
    flag: "https://restcountries.eu/data/pse.svg",
    alpha2Code: "PS",
    value: 171
  },
  {
    label: "Panama",
    flag: "https://restcountries.eu/data/pan.svg",
    alpha2Code: "PA",
    value: 172
  },
  {
    label: "Papouasie-Nouvelle-Guinée",
    flag: "https://restcountries.eu/data/png.svg",
    alpha2Code: "PG",
    value: 173
  },
  {
    label: "Paraguay",
    flag: "https://restcountries.eu/data/pry.svg",
    alpha2Code: "PY",
    value: 174
  },
  {
    label: "Pérou",
    flag: "https://restcountries.eu/data/per.svg",
    alpha2Code: "PE",
    value: 175
  },
  {
    label: "Philippines",
    flag: "https://restcountries.eu/data/phl.svg",
    alpha2Code: "PH",
    value: 176
  },
  {
    label: "Îles Pitcairn",
    flag: "https://restcountries.eu/data/pcn.svg",
    alpha2Code: "PN",
    value: 177
  },
  {
    label: "Pologne",
    flag: "https://restcountries.eu/data/pol.svg",
    alpha2Code: "PL",
    value: 178
  },
  {
    label: "Portugal",
    flag: "https://restcountries.eu/data/prt.svg",
    alpha2Code: "PT",
    value: 179
  },
  {
    label: "Porto Rico",
    flag: "https://restcountries.eu/data/pri.svg",
    alpha2Code: "PR",
    value: 180
  },
  {
    label: "Qatar",
    flag: "https://restcountries.eu/data/qat.svg",
    alpha2Code: "QA",
    value: 181
  },
  {
    label: "Republic of Kosovo",
    flag: "https://restcountries.eu/data/kos.svg",
    alpha2Code: "XK",
    value: 182
  },
  {
    label: "Réunion",
    flag: "https://restcountries.eu/data/reu.svg",
    alpha2Code: "RE",
    value: 183
  },
  {
    label: "Roumanie",
    flag: "https://restcountries.eu/data/rou.svg",
    alpha2Code: "RO",
    value: 184
  },
  {
    label: "Russie",
    flag: "https://restcountries.eu/data/rus.svg",
    alpha2Code: "RU",
    value: 185
  },
  {
    label: "Rwanda",
    flag: "https://restcountries.eu/data/rwa.svg",
    alpha2Code: "RW",
    value: 186
  },
  {
    label: "Saint-Barthélemy",
    flag: "https://restcountries.eu/data/blm.svg",
    alpha2Code: "BL",
    value: 187
  },
  {
    label: "Sainte-Hélène",
    flag: "https://restcountries.eu/data/shn.svg",
    alpha2Code: "SH",
    value: 188
  },
  {
    label: "Saint-Christophe-et-Niévès",
    flag: "https://restcountries.eu/data/kna.svg",
    alpha2Code: "KN",
    value: 189
  },
  {
    label: "Saint-Lucie",
    flag: "https://restcountries.eu/data/lca.svg",
    alpha2Code: "LC",
    value: 190
  },
  {
    label: "Saint-Martin",
    flag: "https://restcountries.eu/data/maf.svg",
    alpha2Code: "MF",
    value: 191
  },
  {
    label: "Saint-Pierre-et-Miquelon",
    flag: "https://restcountries.eu/data/spm.svg",
    alpha2Code: "PM",
    value: 192
  },
  {
    label: "Saint-Vincent-et-les-Grenadines",
    flag: "https://restcountries.eu/data/vct.svg",
    alpha2Code: "VC",
    value: 193
  },
  {
    label: "Samoa",
    flag: "https://restcountries.eu/data/wsm.svg",
    alpha2Code: "WS",
    value: 194
  },
  {
    label: "Saint-Marin",
    flag: "https://restcountries.eu/data/smr.svg",
    alpha2Code: "SM",
    value: 195
  },
  {
    label: "Sao Tomé-et-Principe",
    flag: "https://restcountries.eu/data/stp.svg",
    alpha2Code: "ST",
    value: 196
  },
  {
    label: "Arabie Saoudite",
    flag: "https://restcountries.eu/data/sau.svg",
    alpha2Code: "SA",
    value: 197
  },
  {
    label: "Sénégal",
    flag: "https://restcountries.eu/data/sen.svg",
    alpha2Code: "SN",
    value: 198
  },
  {
    label: "Serbie",
    flag: "https://restcountries.eu/data/srb.svg",
    alpha2Code: "RS",
    value: 199
  },
  {
    label: "Seychelles",
    flag: "https://restcountries.eu/data/syc.svg",
    alpha2Code: "SC",
    value: 200
  },
  {
    label: "Sierra Leone",
    flag: "https://restcountries.eu/data/sle.svg",
    alpha2Code: "SL",
    value: 201
  },
  {
    label: "Singapour",
    flag: "https://restcountries.eu/data/sgp.svg",
    alpha2Code: "SG",
    value: 202
  },
  {
    label: "Saint Martin (partie néerlandaise)",
    flag: "https://restcountries.eu/data/sxm.svg",
    alpha2Code: "SX",
    value: 203
  },
  {
    label: "Slovaquie",
    flag: "https://restcountries.eu/data/svk.svg",
    alpha2Code: "SK",
    value: 204
  },
  {
    label: "Slovénie",
    flag: "https://restcountries.eu/data/svn.svg",
    alpha2Code: "SI",
    value: 205
  },
  {
    label: "Îles Salomon",
    flag: "https://restcountries.eu/data/slb.svg",
    alpha2Code: "SB",
    value: 206
  },
  {
    label: "Somalie",
    flag: "https://restcountries.eu/data/som.svg",
    alpha2Code: "SO",
    value: 207
  },
  {
    label: "Afrique du Sud",
    flag: "https://restcountries.eu/data/zaf.svg",
    alpha2Code: "ZA",
    value: 208
  },
  {
    label: "Géorgie du Sud-et-les Îles Sandwich du Sud",
    flag: "https://restcountries.eu/data/sgs.svg",
    alpha2Code: "GS",
    value: 209
  },
  {
    label: "Corée du Sud",
    flag: "https://restcountries.eu/data/kor.svg",
    alpha2Code: "KR",
    value: 210
  },
  {
    label: "Soudan du Sud",
    flag: "https://restcountries.eu/data/ssd.svg",
    alpha2Code: "SS",
    value: 211
  },
  {
    label: "Espagne",
    flag: "https://restcountries.eu/data/esp.svg",
    alpha2Code: "ES",
    value: 212
  },
  {
    label: "Sri Lanka",
    flag: "https://restcountries.eu/data/lka.svg",
    alpha2Code: "LK",
    value: 213
  },
  {
    label: "Soudan",
    flag: "https://restcountries.eu/data/sdn.svg",
    alpha2Code: "SD",
    value: 214
  },
  {
    label: "Surinam",
    flag: "https://restcountries.eu/data/sur.svg",
    alpha2Code: "SR",
    value: 215
  },
  {
    label: "Svalbard et Jan Mayen",
    flag: "https://restcountries.eu/data/sjm.svg",
    alpha2Code: "SJ",
    value: 216
  },
  {
    label: "Swaziland",
    flag: "https://restcountries.eu/data/swz.svg",
    alpha2Code: "SZ",
    value: 217
  },
  {
    label: "Suède",
    flag: "https://restcountries.eu/data/swe.svg",
    alpha2Code: "SE",
    value: 218
  },
  {
    label: "Suisse",
    flag: "https://restcountries.eu/data/che.svg",
    alpha2Code: "CH",
    value: 219
  },
  {
    label: "Syrie",
    flag: "https://restcountries.eu/data/syr.svg",
    alpha2Code: "SY",
    value: 220
  },
  {
    label: "Taïwan",
    flag: "https://restcountries.eu/data/twn.svg",
    alpha2Code: "TW",
    value: 221
  },
  {
    label: "Tadjikistan",
    flag: "https://restcountries.eu/data/tjk.svg",
    alpha2Code: "TJ",
    value: 222
  },
  {
    label: "Tanzanie",
    flag: "https://restcountries.eu/data/tza.svg",
    alpha2Code: "TZ",
    value: 223
  },
  {
    label: "Thaïlande",
    flag: "https://restcountries.eu/data/tha.svg",
    alpha2Code: "TH",
    value: 224
  },
  {
    label: "Timor oriental",
    flag: "https://restcountries.eu/data/tls.svg",
    alpha2Code: "TL",
    value: 225
  },
  {
    label: "Togo",
    flag: "https://restcountries.eu/data/tgo.svg",
    alpha2Code: "TG",
    value: 226
  },
  {
    label: "Tokelau",
    flag: "https://restcountries.eu/data/tkl.svg",
    alpha2Code: "TK",
    value: 227
  },
  {
    label: "Tonga",
    flag: "https://restcountries.eu/data/ton.svg",
    alpha2Code: "TO",
    value: 228
  },
  {
    label: "Trinité et Tobago",
    flag: "https://restcountries.eu/data/tto.svg",
    alpha2Code: "TT",
    value: 229
  },
  {
    label: "Tunisie",
    flag: "https://restcountries.eu/data/tun.svg",
    alpha2Code: "TN",
    value: 230
  },
  {
    label: "Turquie",
    flag: "https://restcountries.eu/data/tur.svg",
    alpha2Code: "TR",
    value: 231
  },
  {
    label: "Turkménistan",
    flag: "https://restcountries.eu/data/tkm.svg",
    alpha2Code: "TM",
    value: 232
  },
  {
    label: "Îles Turques-et-Caïques",
    flag: "https://restcountries.eu/data/tca.svg",
    alpha2Code: "TC",
    value: 233
  },
  {
    label: "Tuvalu",
    flag: "https://restcountries.eu/data/tuv.svg",
    alpha2Code: "TV",
    value: 234
  },
  {
    label: "Uganda",
    flag: "https://restcountries.eu/data/uga.svg",
    alpha2Code: "UG",
    value: 235
  },
  {
    label: "Ukraine",
    flag: "https://restcountries.eu/data/ukr.svg",
    alpha2Code: "UA",
    value: 236
  },
  {
    label: "Émirats arabes unis",
    flag: "https://restcountries.eu/data/are.svg",
    alpha2Code: "AE",
    value: 237
  },
  {
    label: "Royaume-Uni",
    flag: "https://restcountries.eu/data/gbr.svg",
    alpha2Code: "GB",
    value: 238
  },
  {
    label: "États-Unis",
    flag: "https://restcountries.eu/data/usa.svg",
    alpha2Code: "US",
    value: 239
  },
  {
    label: "Uruguay",
    flag: "https://restcountries.eu/data/ury.svg",
    alpha2Code: "UY",
    value: 240
  },
  {
    label: "Ouzbékistan",
    flag: "https://restcountries.eu/data/uzb.svg",
    alpha2Code: "UZ",
    value: 241
  },
  {
    label: "Vanuatu",
    flag: "https://restcountries.eu/data/vut.svg",
    alpha2Code: "VU",
    value: 242
  },
  {
    label: "Venezuela",
    flag: "https://restcountries.eu/data/ven.svg",
    alpha2Code: "VE",
    value: 243
  },
  {
    label: "Viêt Nam",
    flag: "https://restcountries.eu/data/vnm.svg",
    alpha2Code: "VN",
    value: 244
  },
  {
    label: "Wallis-et-Futuna",
    flag: "https://restcountries.eu/data/wlf.svg",
    alpha2Code: "WF",
    value: 245
  },
  {
    label: "Sahara Occidental",
    flag: "https://restcountries.eu/data/esh.svg",
    alpha2Code: "EH",
    value: 246
  },
  {
    label: "Yémen",
    flag: "https://restcountries.eu/data/yem.svg",
    alpha2Code: "YE",
    value: 247
  },
  {
    label: "Zambie",
    flag: "https://restcountries.eu/data/zmb.svg",
    alpha2Code: "ZM",
    value: 248
  },
  {
    label: "Zimbabwe",
    flag: "https://restcountries.eu/data/zwe.svg",
    alpha2Code: "ZW",
    value: 249
  }
];

export default countries;
