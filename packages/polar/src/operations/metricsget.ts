import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetricsgetInput {
  start_date: string;
  end_date: string;
  timezone?:
    | "Africa/Abidjan"
    | "Africa/Accra"
    | "Africa/Addis_Ababa"
    | "Africa/Algiers"
    | "Africa/Asmara"
    | "Africa/Asmera"
    | "Africa/Bamako"
    | "Africa/Bangui"
    | "Africa/Banjul"
    | "Africa/Bissau"
    | "Africa/Blantyre"
    | "Africa/Brazzaville"
    | "Africa/Bujumbura"
    | "Africa/Cairo"
    | "Africa/Casablanca"
    | "Africa/Ceuta"
    | "Africa/Conakry"
    | "Africa/Dakar"
    | "Africa/Dar_es_Salaam"
    | "Africa/Djibouti"
    | "Africa/Douala"
    | "Africa/El_Aaiun"
    | "Africa/Freetown"
    | "Africa/Gaborone"
    | "Africa/Harare"
    | "Africa/Johannesburg"
    | "Africa/Juba"
    | "Africa/Kampala"
    | "Africa/Khartoum"
    | "Africa/Kigali"
    | "Africa/Kinshasa"
    | "Africa/Lagos"
    | "Africa/Libreville"
    | "Africa/Lome"
    | "Africa/Luanda"
    | "Africa/Lubumbashi"
    | "Africa/Lusaka"
    | "Africa/Malabo"
    | "Africa/Maputo"
    | "Africa/Maseru"
    | "Africa/Mbabane"
    | "Africa/Mogadishu"
    | "Africa/Monrovia"
    | "Africa/Nairobi"
    | "Africa/Ndjamena"
    | "Africa/Niamey"
    | "Africa/Nouakchott"
    | "Africa/Ouagadougou"
    | "Africa/Porto-Novo"
    | "Africa/Sao_Tome"
    | "Africa/Timbuktu"
    | "Africa/Tripoli"
    | "Africa/Tunis"
    | "Africa/Windhoek"
    | "America/Adak"
    | "America/Anchorage"
    | "America/Anguilla"
    | "America/Antigua"
    | "America/Araguaina"
    | "America/Argentina/Buenos_Aires"
    | "America/Argentina/Catamarca"
    | "America/Argentina/ComodRivadavia"
    | "America/Argentina/Cordoba"
    | "America/Argentina/Jujuy"
    | "America/Argentina/La_Rioja"
    | "America/Argentina/Mendoza"
    | "America/Argentina/Rio_Gallegos"
    | "America/Argentina/Salta"
    | "America/Argentina/San_Juan"
    | "America/Argentina/San_Luis"
    | "America/Argentina/Tucuman"
    | "America/Argentina/Ushuaia"
    | "America/Aruba"
    | "America/Asuncion"
    | "America/Atikokan"
    | "America/Atka"
    | "America/Bahia"
    | "America/Bahia_Banderas"
    | "America/Barbados"
    | "America/Belem"
    | "America/Belize"
    | "America/Blanc-Sablon"
    | "America/Boa_Vista"
    | "America/Bogota"
    | "America/Boise"
    | "America/Buenos_Aires"
    | "America/Cambridge_Bay"
    | "America/Campo_Grande"
    | "America/Cancun"
    | "America/Caracas"
    | "America/Catamarca"
    | "America/Cayenne"
    | "America/Cayman"
    | "America/Chicago"
    | "America/Chihuahua"
    | "America/Ciudad_Juarez"
    | "America/Coral_Harbour"
    | "America/Cordoba"
    | "America/Costa_Rica"
    | "America/Coyhaique"
    | "America/Creston"
    | "America/Cuiaba"
    | "America/Curacao"
    | "America/Danmarkshavn"
    | "America/Dawson"
    | "America/Dawson_Creek"
    | "America/Denver"
    | "America/Detroit"
    | "America/Dominica"
    | "America/Edmonton"
    | "America/Eirunepe"
    | "America/El_Salvador"
    | "America/Ensenada"
    | "America/Fort_Nelson"
    | "America/Fort_Wayne"
    | "America/Fortaleza"
    | "America/Glace_Bay"
    | "America/Godthab"
    | "America/Goose_Bay"
    | "America/Grand_Turk"
    | "America/Grenada"
    | "America/Guadeloupe"
    | "America/Guatemala"
    | "America/Guayaquil"
    | "America/Guyana"
    | "America/Halifax"
    | "America/Havana"
    | "America/Hermosillo"
    | "America/Indiana/Indianapolis"
    | "America/Indiana/Knox"
    | "America/Indiana/Marengo"
    | "America/Indiana/Petersburg"
    | "America/Indiana/Tell_City"
    | "America/Indiana/Vevay"
    | "America/Indiana/Vincennes"
    | "America/Indiana/Winamac"
    | "America/Indianapolis"
    | "America/Inuvik"
    | "America/Iqaluit"
    | "America/Jamaica"
    | "America/Jujuy"
    | "America/Juneau"
    | "America/Kentucky/Louisville"
    | "America/Kentucky/Monticello"
    | "America/Knox_IN"
    | "America/Kralendijk"
    | "America/La_Paz"
    | "America/Lima"
    | "America/Los_Angeles"
    | "America/Louisville"
    | "America/Lower_Princes"
    | "America/Maceio"
    | "America/Managua"
    | "America/Manaus"
    | "America/Marigot"
    | "America/Martinique"
    | "America/Matamoros"
    | "America/Mazatlan"
    | "America/Mendoza"
    | "America/Menominee"
    | "America/Merida"
    | "America/Metlakatla"
    | "America/Mexico_City"
    | "America/Miquelon"
    | "America/Moncton"
    | "America/Monterrey"
    | "America/Montevideo"
    | "America/Montreal"
    | "America/Montserrat"
    | "America/Nassau"
    | "America/New_York"
    | "America/Nipigon"
    | "America/Nome"
    | "America/Noronha"
    | "America/North_Dakota/Beulah"
    | "America/North_Dakota/Center"
    | "America/North_Dakota/New_Salem"
    | "America/Nuuk"
    | "America/Ojinaga"
    | "America/Panama"
    | "America/Pangnirtung"
    | "America/Paramaribo"
    | "America/Phoenix"
    | "America/Port-au-Prince"
    | "America/Port_of_Spain"
    | "America/Porto_Acre"
    | "America/Porto_Velho"
    | "America/Puerto_Rico"
    | "America/Punta_Arenas"
    | "America/Rainy_River"
    | "America/Rankin_Inlet"
    | "America/Recife"
    | "America/Regina"
    | "America/Resolute"
    | "America/Rio_Branco"
    | "America/Rosario"
    | "America/Santa_Isabel"
    | "America/Santarem"
    | "America/Santiago"
    | "America/Santo_Domingo"
    | "America/Sao_Paulo"
    | "America/Scoresbysund"
    | "America/Shiprock"
    | "America/Sitka"
    | "America/St_Barthelemy"
    | "America/St_Johns"
    | "America/St_Kitts"
    | "America/St_Lucia"
    | "America/St_Thomas"
    | "America/St_Vincent"
    | "America/Swift_Current"
    | "America/Tegucigalpa"
    | "America/Thule"
    | "America/Thunder_Bay"
    | "America/Tijuana"
    | "America/Toronto"
    | "America/Tortola"
    | "America/Vancouver"
    | "America/Virgin"
    | "America/Whitehorse"
    | "America/Winnipeg"
    | "America/Yakutat"
    | "America/Yellowknife"
    | "Antarctica/Casey"
    | "Antarctica/Davis"
    | "Antarctica/DumontDUrville"
    | "Antarctica/Macquarie"
    | "Antarctica/Mawson"
    | "Antarctica/McMurdo"
    | "Antarctica/Palmer"
    | "Antarctica/Rothera"
    | "Antarctica/South_Pole"
    | "Antarctica/Syowa"
    | "Antarctica/Troll"
    | "Antarctica/Vostok"
    | "Arctic/Longyearbyen"
    | "Asia/Aden"
    | "Asia/Almaty"
    | "Asia/Amman"
    | "Asia/Anadyr"
    | "Asia/Aqtau"
    | "Asia/Aqtobe"
    | "Asia/Ashgabat"
    | "Asia/Ashkhabad"
    | "Asia/Atyrau"
    | "Asia/Baghdad"
    | "Asia/Bahrain"
    | "Asia/Baku"
    | "Asia/Bangkok"
    | "Asia/Barnaul"
    | "Asia/Beirut"
    | "Asia/Bishkek"
    | "Asia/Brunei"
    | "Asia/Calcutta"
    | "Asia/Chita"
    | "Asia/Choibalsan"
    | "Asia/Chongqing"
    | "Asia/Chungking"
    | "Asia/Colombo"
    | "Asia/Dacca"
    | "Asia/Damascus"
    | "Asia/Dhaka"
    | "Asia/Dili"
    | "Asia/Dubai"
    | "Asia/Dushanbe"
    | "Asia/Famagusta"
    | "Asia/Gaza"
    | "Asia/Harbin"
    | "Asia/Hebron"
    | "Asia/Ho_Chi_Minh"
    | "Asia/Hong_Kong"
    | "Asia/Hovd"
    | "Asia/Irkutsk"
    | "Asia/Istanbul"
    | "Asia/Jakarta"
    | "Asia/Jayapura"
    | "Asia/Jerusalem"
    | "Asia/Kabul"
    | "Asia/Kamchatka"
    | "Asia/Karachi"
    | "Asia/Kashgar"
    | "Asia/Kathmandu"
    | "Asia/Katmandu"
    | "Asia/Khandyga"
    | "Asia/Kolkata"
    | "Asia/Krasnoyarsk"
    | "Asia/Kuala_Lumpur"
    | "Asia/Kuching"
    | "Asia/Kuwait"
    | "Asia/Macao"
    | "Asia/Macau"
    | "Asia/Magadan"
    | "Asia/Makassar"
    | "Asia/Manila"
    | "Asia/Muscat"
    | "Asia/Nicosia"
    | "Asia/Novokuznetsk"
    | "Asia/Novosibirsk"
    | "Asia/Omsk"
    | "Asia/Oral"
    | "Asia/Phnom_Penh"
    | "Asia/Pontianak"
    | "Asia/Pyongyang"
    | "Asia/Qatar"
    | "Asia/Qostanay"
    | "Asia/Qyzylorda"
    | "Asia/Rangoon"
    | "Asia/Riyadh"
    | "Asia/Saigon"
    | "Asia/Sakhalin"
    | "Asia/Samarkand"
    | "Asia/Seoul"
    | "Asia/Shanghai"
    | "Asia/Singapore"
    | "Asia/Srednekolymsk"
    | "Asia/Taipei"
    | "Asia/Tashkent"
    | "Asia/Tbilisi"
    | "Asia/Tehran"
    | "Asia/Tel_Aviv"
    | "Asia/Thimbu"
    | "Asia/Thimphu"
    | "Asia/Tokyo"
    | "Asia/Tomsk"
    | "Asia/Ujung_Pandang"
    | "Asia/Ulaanbaatar"
    | "Asia/Ulan_Bator"
    | "Asia/Urumqi"
    | "Asia/Ust-Nera"
    | "Asia/Vientiane"
    | "Asia/Vladivostok"
    | "Asia/Yakutsk"
    | "Asia/Yangon"
    | "Asia/Yekaterinburg"
    | "Asia/Yerevan"
    | "Atlantic/Azores"
    | "Atlantic/Bermuda"
    | "Atlantic/Canary"
    | "Atlantic/Cape_Verde"
    | "Atlantic/Faeroe"
    | "Atlantic/Faroe"
    | "Atlantic/Jan_Mayen"
    | "Atlantic/Madeira"
    | "Atlantic/Reykjavik"
    | "Atlantic/South_Georgia"
    | "Atlantic/St_Helena"
    | "Atlantic/Stanley"
    | "Australia/ACT"
    | "Australia/Adelaide"
    | "Australia/Brisbane"
    | "Australia/Broken_Hill"
    | "Australia/Canberra"
    | "Australia/Currie"
    | "Australia/Darwin"
    | "Australia/Eucla"
    | "Australia/Hobart"
    | "Australia/LHI"
    | "Australia/Lindeman"
    | "Australia/Lord_Howe"
    | "Australia/Melbourne"
    | "Australia/NSW"
    | "Australia/North"
    | "Australia/Perth"
    | "Australia/Queensland"
    | "Australia/South"
    | "Australia/Sydney"
    | "Australia/Tasmania"
    | "Australia/Victoria"
    | "Australia/West"
    | "Australia/Yancowinna"
    | "Brazil/Acre"
    | "Brazil/DeNoronha"
    | "Brazil/East"
    | "Brazil/West"
    | "CET"
    | "CST6CDT"
    | "Canada/Atlantic"
    | "Canada/Central"
    | "Canada/Eastern"
    | "Canada/Mountain"
    | "Canada/Newfoundland"
    | "Canada/Pacific"
    | "Canada/Saskatchewan"
    | "Canada/Yukon"
    | "Chile/Continental"
    | "Chile/EasterIsland"
    | "Cuba"
    | "EET"
    | "EST"
    | "EST5EDT"
    | "Egypt"
    | "Eire"
    | "Etc/GMT"
    | "Etc/GMT+0"
    | "Etc/GMT+1"
    | "Etc/GMT+10"
    | "Etc/GMT+11"
    | "Etc/GMT+12"
    | "Etc/GMT+2"
    | "Etc/GMT+3"
    | "Etc/GMT+4"
    | "Etc/GMT+5"
    | "Etc/GMT+6"
    | "Etc/GMT+7"
    | "Etc/GMT+8"
    | "Etc/GMT+9"
    | "Etc/GMT-0"
    | "Etc/GMT-1"
    | "Etc/GMT-10"
    | "Etc/GMT-11"
    | "Etc/GMT-12"
    | "Etc/GMT-13"
    | "Etc/GMT-14"
    | "Etc/GMT-2"
    | "Etc/GMT-3"
    | "Etc/GMT-4"
    | "Etc/GMT-5"
    | "Etc/GMT-6"
    | "Etc/GMT-7"
    | "Etc/GMT-8"
    | "Etc/GMT-9"
    | "Etc/GMT0"
    | "Etc/Greenwich"
    | "Etc/UCT"
    | "Etc/UTC"
    | "Etc/Universal"
    | "Etc/Zulu"
    | "Europe/Amsterdam"
    | "Europe/Andorra"
    | "Europe/Astrakhan"
    | "Europe/Athens"
    | "Europe/Belfast"
    | "Europe/Belgrade"
    | "Europe/Berlin"
    | "Europe/Bratislava"
    | "Europe/Brussels"
    | "Europe/Bucharest"
    | "Europe/Budapest"
    | "Europe/Busingen"
    | "Europe/Chisinau"
    | "Europe/Copenhagen"
    | "Europe/Dublin"
    | "Europe/Gibraltar"
    | "Europe/Guernsey"
    | "Europe/Helsinki"
    | "Europe/Isle_of_Man"
    | "Europe/Istanbul"
    | "Europe/Jersey"
    | "Europe/Kaliningrad"
    | "Europe/Kiev"
    | "Europe/Kirov"
    | "Europe/Kyiv"
    | "Europe/Lisbon"
    | "Europe/Ljubljana"
    | "Europe/London"
    | "Europe/Luxembourg"
    | "Europe/Madrid"
    | "Europe/Malta"
    | "Europe/Mariehamn"
    | "Europe/Minsk"
    | "Europe/Monaco"
    | "Europe/Moscow"
    | "Europe/Nicosia"
    | "Europe/Oslo"
    | "Europe/Paris"
    | "Europe/Podgorica"
    | "Europe/Prague"
    | "Europe/Riga"
    | "Europe/Rome"
    | "Europe/Samara"
    | "Europe/San_Marino"
    | "Europe/Sarajevo"
    | "Europe/Saratov"
    | "Europe/Simferopol"
    | "Europe/Skopje"
    | "Europe/Sofia"
    | "Europe/Stockholm"
    | "Europe/Tallinn"
    | "Europe/Tirane"
    | "Europe/Tiraspol"
    | "Europe/Ulyanovsk"
    | "Europe/Uzhgorod"
    | "Europe/Vaduz"
    | "Europe/Vatican"
    | "Europe/Vienna"
    | "Europe/Vilnius"
    | "Europe/Volgograd"
    | "Europe/Warsaw"
    | "Europe/Zagreb"
    | "Europe/Zaporozhye"
    | "Europe/Zurich"
    | "Factory"
    | "GB"
    | "GB-Eire"
    | "GMT"
    | "GMT+0"
    | "GMT-0"
    | "GMT0"
    | "Greenwich"
    | "HST"
    | "Hongkong"
    | "Iceland"
    | "Indian/Antananarivo"
    | "Indian/Chagos"
    | "Indian/Christmas"
    | "Indian/Cocos"
    | "Indian/Comoro"
    | "Indian/Kerguelen"
    | "Indian/Mahe"
    | "Indian/Maldives"
    | "Indian/Mauritius"
    | "Indian/Mayotte"
    | "Indian/Reunion"
    | "Iran"
    | "Israel"
    | "Jamaica"
    | "Japan"
    | "Kwajalein"
    | "Libya"
    | "MET"
    | "MST"
    | "MST7MDT"
    | "Mexico/BajaNorte"
    | "Mexico/BajaSur"
    | "Mexico/General"
    | "NZ"
    | "NZ-CHAT"
    | "Navajo"
    | "PRC"
    | "PST8PDT"
    | "Pacific/Apia"
    | "Pacific/Auckland"
    | "Pacific/Bougainville"
    | "Pacific/Chatham"
    | "Pacific/Chuuk"
    | "Pacific/Easter"
    | "Pacific/Efate"
    | "Pacific/Enderbury"
    | "Pacific/Fakaofo"
    | "Pacific/Fiji"
    | "Pacific/Funafuti"
    | "Pacific/Galapagos"
    | "Pacific/Gambier"
    | "Pacific/Guadalcanal"
    | "Pacific/Guam"
    | "Pacific/Honolulu"
    | "Pacific/Johnston"
    | "Pacific/Kanton"
    | "Pacific/Kiritimati"
    | "Pacific/Kosrae"
    | "Pacific/Kwajalein"
    | "Pacific/Majuro"
    | "Pacific/Marquesas"
    | "Pacific/Midway"
    | "Pacific/Nauru"
    | "Pacific/Niue"
    | "Pacific/Norfolk"
    | "Pacific/Noumea"
    | "Pacific/Pago_Pago"
    | "Pacific/Palau"
    | "Pacific/Pitcairn"
    | "Pacific/Pohnpei"
    | "Pacific/Ponape"
    | "Pacific/Port_Moresby"
    | "Pacific/Rarotonga"
    | "Pacific/Saipan"
    | "Pacific/Samoa"
    | "Pacific/Tahiti"
    | "Pacific/Tarawa"
    | "Pacific/Tongatapu"
    | "Pacific/Truk"
    | "Pacific/Wake"
    | "Pacific/Wallis"
    | "Pacific/Yap"
    | "Poland"
    | "Portugal"
    | "ROC"
    | "ROK"
    | "Singapore"
    | "Turkey"
    | "UCT"
    | "US/Alaska"
    | "US/Aleutian"
    | "US/Arizona"
    | "US/Central"
    | "US/East-Indiana"
    | "US/Eastern"
    | "US/Hawaii"
    | "US/Indiana-Starke"
    | "US/Michigan"
    | "US/Mountain"
    | "US/Pacific"
    | "US/Samoa"
    | "UTC"
    | "Universal"
    | "W-SU"
    | "WET"
    | "Zulu"
    | "localtime";
  interval: "year" | "month" | "week" | "day" | "hour";
  organization_id?: string | ReadonlyArray<string> | null;
  product_id?: string | ReadonlyArray<string> | null;
  billing_type?:
    | "one_time"
    | "recurring"
    | ReadonlyArray<"one_time" | "recurring">
    | null;
  customer_id?: string | ReadonlyArray<string> | null;
  metrics?: ReadonlyArray<string> | null;
}
export const MetricsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start_date: Schema.String,
  end_date: Schema.String,
  timezone: Schema.optional(
    Schema.Literals([
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Addis_Ababa",
      "Africa/Algiers",
      "Africa/Asmara",
      "Africa/Asmera",
      "Africa/Bamako",
      "Africa/Bangui",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Blantyre",
      "Africa/Brazzaville",
      "Africa/Bujumbura",
      "Africa/Cairo",
      "Africa/Casablanca",
      "Africa/Ceuta",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Douala",
      "Africa/El_Aaiun",
      "Africa/Freetown",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Kigali",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Lome",
      "Africa/Luanda",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Malabo",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Africa/Mogadishu",
      "Africa/Monrovia",
      "Africa/Nairobi",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Porto-Novo",
      "Africa/Sao_Tome",
      "Africa/Timbuktu",
      "Africa/Tripoli",
      "Africa/Tunis",
      "Africa/Windhoek",
      "America/Adak",
      "America/Anchorage",
      "America/Anguilla",
      "America/Antigua",
      "America/Araguaina",
      "America/Argentina/Buenos_Aires",
      "America/Argentina/Catamarca",
      "America/Argentina/ComodRivadavia",
      "America/Argentina/Cordoba",
      "America/Argentina/Jujuy",
      "America/Argentina/La_Rioja",
      "America/Argentina/Mendoza",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Aruba",
      "America/Asuncion",
      "America/Atikokan",
      "America/Atka",
      "America/Bahia",
      "America/Bahia_Banderas",
      "America/Barbados",
      "America/Belem",
      "America/Belize",
      "America/Blanc-Sablon",
      "America/Boa_Vista",
      "America/Bogota",
      "America/Boise",
      "America/Buenos_Aires",
      "America/Cambridge_Bay",
      "America/Campo_Grande",
      "America/Cancun",
      "America/Caracas",
      "America/Catamarca",
      "America/Cayenne",
      "America/Cayman",
      "America/Chicago",
      "America/Chihuahua",
      "America/Ciudad_Juarez",
      "America/Coral_Harbour",
      "America/Cordoba",
      "America/Costa_Rica",
      "America/Coyhaique",
      "America/Creston",
      "America/Cuiaba",
      "America/Curacao",
      "America/Danmarkshavn",
      "America/Dawson",
      "America/Dawson_Creek",
      "America/Denver",
      "America/Detroit",
      "America/Dominica",
      "America/Edmonton",
      "America/Eirunepe",
      "America/El_Salvador",
      "America/Ensenada",
      "America/Fort_Nelson",
      "America/Fort_Wayne",
      "America/Fortaleza",
      "America/Glace_Bay",
      "America/Godthab",
      "America/Goose_Bay",
      "America/Grand_Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guatemala",
      "America/Guayaquil",
      "America/Guyana",
      "America/Halifax",
      "America/Havana",
      "America/Hermosillo",
      "America/Indiana/Indianapolis",
      "America/Indiana/Knox",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Tell_City",
      "America/Indiana/Vevay",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Indianapolis",
      "America/Inuvik",
      "America/Iqaluit",
      "America/Jamaica",
      "America/Jujuy",
      "America/Juneau",
      "America/Kentucky/Louisville",
      "America/Kentucky/Monticello",
      "America/Knox_IN",
      "America/Kralendijk",
      "America/La_Paz",
      "America/Lima",
      "America/Los_Angeles",
      "America/Louisville",
      "America/Lower_Princes",
      "America/Maceio",
      "America/Managua",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Matamoros",
      "America/Mazatlan",
      "America/Mendoza",
      "America/Menominee",
      "America/Merida",
      "America/Metlakatla",
      "America/Mexico_City",
      "America/Miquelon",
      "America/Moncton",
      "America/Monterrey",
      "America/Montevideo",
      "America/Montreal",
      "America/Montserrat",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Nome",
      "America/Noronha",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Nuuk",
      "America/Ojinaga",
      "America/Panama",
      "America/Pangnirtung",
      "America/Paramaribo",
      "America/Phoenix",
      "America/Port-au-Prince",
      "America/Port_of_Spain",
      "America/Porto_Acre",
      "America/Porto_Velho",
      "America/Puerto_Rico",
      "America/Punta_Arenas",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Recife",
      "America/Regina",
      "America/Resolute",
      "America/Rio_Branco",
      "America/Rosario",
      "America/Santa_Isabel",
      "America/Santarem",
      "America/Santiago",
      "America/Santo_Domingo",
      "America/Sao_Paulo",
      "America/Scoresbysund",
      "America/Shiprock",
      "America/Sitka",
      "America/St_Barthelemy",
      "America/St_Johns",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Swift_Current",
      "America/Tegucigalpa",
      "America/Thule",
      "America/Thunder_Bay",
      "America/Tijuana",
      "America/Toronto",
      "America/Tortola",
      "America/Vancouver",
      "America/Virgin",
      "America/Whitehorse",
      "America/Winnipeg",
      "America/Yakutat",
      "America/Yellowknife",
      "Antarctica/Casey",
      "Antarctica/Davis",
      "Antarctica/DumontDUrville",
      "Antarctica/Macquarie",
      "Antarctica/Mawson",
      "Antarctica/McMurdo",
      "Antarctica/Palmer",
      "Antarctica/Rothera",
      "Antarctica/South_Pole",
      "Antarctica/Syowa",
      "Antarctica/Troll",
      "Antarctica/Vostok",
      "Arctic/Longyearbyen",
      "Asia/Aden",
      "Asia/Almaty",
      "Asia/Amman",
      "Asia/Anadyr",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Ashkhabad",
      "Asia/Atyrau",
      "Asia/Baghdad",
      "Asia/Bahrain",
      "Asia/Baku",
      "Asia/Bangkok",
      "Asia/Barnaul",
      "Asia/Beirut",
      "Asia/Bishkek",
      "Asia/Brunei",
      "Asia/Calcutta",
      "Asia/Chita",
      "Asia/Choibalsan",
      "Asia/Chongqing",
      "Asia/Chungking",
      "Asia/Colombo",
      "Asia/Dacca",
      "Asia/Damascus",
      "Asia/Dhaka",
      "Asia/Dili",
      "Asia/Dubai",
      "Asia/Dushanbe",
      "Asia/Famagusta",
      "Asia/Gaza",
      "Asia/Harbin",
      "Asia/Hebron",
      "Asia/Ho_Chi_Minh",
      "Asia/Hong_Kong",
      "Asia/Hovd",
      "Asia/Irkutsk",
      "Asia/Istanbul",
      "Asia/Jakarta",
      "Asia/Jayapura",
      "Asia/Jerusalem",
      "Asia/Kabul",
      "Asia/Kamchatka",
      "Asia/Karachi",
      "Asia/Kashgar",
      "Asia/Kathmandu",
      "Asia/Katmandu",
      "Asia/Khandyga",
      "Asia/Kolkata",
      "Asia/Krasnoyarsk",
      "Asia/Kuala_Lumpur",
      "Asia/Kuching",
      "Asia/Kuwait",
      "Asia/Macao",
      "Asia/Macau",
      "Asia/Magadan",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Muscat",
      "Asia/Nicosia",
      "Asia/Novokuznetsk",
      "Asia/Novosibirsk",
      "Asia/Omsk",
      "Asia/Oral",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Pyongyang",
      "Asia/Qatar",
      "Asia/Qostanay",
      "Asia/Qyzylorda",
      "Asia/Rangoon",
      "Asia/Riyadh",
      "Asia/Saigon",
      "Asia/Sakhalin",
      "Asia/Samarkand",
      "Asia/Seoul",
      "Asia/Shanghai",
      "Asia/Singapore",
      "Asia/Srednekolymsk",
      "Asia/Taipei",
      "Asia/Tashkent",
      "Asia/Tbilisi",
      "Asia/Tehran",
      "Asia/Tel_Aviv",
      "Asia/Thimbu",
      "Asia/Thimphu",
      "Asia/Tokyo",
      "Asia/Tomsk",
      "Asia/Ujung_Pandang",
      "Asia/Ulaanbaatar",
      "Asia/Ulan_Bator",
      "Asia/Urumqi",
      "Asia/Ust-Nera",
      "Asia/Vientiane",
      "Asia/Vladivostok",
      "Asia/Yakutsk",
      "Asia/Yangon",
      "Asia/Yekaterinburg",
      "Asia/Yerevan",
      "Atlantic/Azores",
      "Atlantic/Bermuda",
      "Atlantic/Canary",
      "Atlantic/Cape_Verde",
      "Atlantic/Faeroe",
      "Atlantic/Faroe",
      "Atlantic/Jan_Mayen",
      "Atlantic/Madeira",
      "Atlantic/Reykjavik",
      "Atlantic/South_Georgia",
      "Atlantic/St_Helena",
      "Atlantic/Stanley",
      "Australia/ACT",
      "Australia/Adelaide",
      "Australia/Brisbane",
      "Australia/Broken_Hill",
      "Australia/Canberra",
      "Australia/Currie",
      "Australia/Darwin",
      "Australia/Eucla",
      "Australia/Hobart",
      "Australia/LHI",
      "Australia/Lindeman",
      "Australia/Lord_Howe",
      "Australia/Melbourne",
      "Australia/NSW",
      "Australia/North",
      "Australia/Perth",
      "Australia/Queensland",
      "Australia/South",
      "Australia/Sydney",
      "Australia/Tasmania",
      "Australia/Victoria",
      "Australia/West",
      "Australia/Yancowinna",
      "Brazil/Acre",
      "Brazil/DeNoronha",
      "Brazil/East",
      "Brazil/West",
      "CET",
      "CST6CDT",
      "Canada/Atlantic",
      "Canada/Central",
      "Canada/Eastern",
      "Canada/Mountain",
      "Canada/Newfoundland",
      "Canada/Pacific",
      "Canada/Saskatchewan",
      "Canada/Yukon",
      "Chile/Continental",
      "Chile/EasterIsland",
      "Cuba",
      "EET",
      "EST",
      "EST5EDT",
      "Egypt",
      "Eire",
      "Etc/GMT",
      "Etc/GMT+0",
      "Etc/GMT+1",
      "Etc/GMT+10",
      "Etc/GMT+11",
      "Etc/GMT+12",
      "Etc/GMT+2",
      "Etc/GMT+3",
      "Etc/GMT+4",
      "Etc/GMT+5",
      "Etc/GMT+6",
      "Etc/GMT+7",
      "Etc/GMT+8",
      "Etc/GMT+9",
      "Etc/GMT-0",
      "Etc/GMT-1",
      "Etc/GMT-10",
      "Etc/GMT-11",
      "Etc/GMT-12",
      "Etc/GMT-13",
      "Etc/GMT-14",
      "Etc/GMT-2",
      "Etc/GMT-3",
      "Etc/GMT-4",
      "Etc/GMT-5",
      "Etc/GMT-6",
      "Etc/GMT-7",
      "Etc/GMT-8",
      "Etc/GMT-9",
      "Etc/GMT0",
      "Etc/Greenwich",
      "Etc/UCT",
      "Etc/UTC",
      "Etc/Universal",
      "Etc/Zulu",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Astrakhan",
      "Europe/Athens",
      "Europe/Belfast",
      "Europe/Belgrade",
      "Europe/Berlin",
      "Europe/Bratislava",
      "Europe/Brussels",
      "Europe/Bucharest",
      "Europe/Budapest",
      "Europe/Busingen",
      "Europe/Chisinau",
      "Europe/Copenhagen",
      "Europe/Dublin",
      "Europe/Gibraltar",
      "Europe/Guernsey",
      "Europe/Helsinki",
      "Europe/Isle_of_Man",
      "Europe/Istanbul",
      "Europe/Jersey",
      "Europe/Kaliningrad",
      "Europe/Kiev",
      "Europe/Kirov",
      "Europe/Kyiv",
      "Europe/Lisbon",
      "Europe/Ljubljana",
      "Europe/London",
      "Europe/Luxembourg",
      "Europe/Madrid",
      "Europe/Malta",
      "Europe/Mariehamn",
      "Europe/Minsk",
      "Europe/Monaco",
      "Europe/Moscow",
      "Europe/Nicosia",
      "Europe/Oslo",
      "Europe/Paris",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Riga",
      "Europe/Rome",
      "Europe/Samara",
      "Europe/San_Marino",
      "Europe/Sarajevo",
      "Europe/Saratov",
      "Europe/Simferopol",
      "Europe/Skopje",
      "Europe/Sofia",
      "Europe/Stockholm",
      "Europe/Tallinn",
      "Europe/Tirane",
      "Europe/Tiraspol",
      "Europe/Ulyanovsk",
      "Europe/Uzhgorod",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Vilnius",
      "Europe/Volgograd",
      "Europe/Warsaw",
      "Europe/Zagreb",
      "Europe/Zaporozhye",
      "Europe/Zurich",
      "Factory",
      "GB",
      "GB-Eire",
      "GMT",
      "GMT+0",
      "GMT-0",
      "GMT0",
      "Greenwich",
      "HST",
      "Hongkong",
      "Iceland",
      "Indian/Antananarivo",
      "Indian/Chagos",
      "Indian/Christmas",
      "Indian/Cocos",
      "Indian/Comoro",
      "Indian/Kerguelen",
      "Indian/Mahe",
      "Indian/Maldives",
      "Indian/Mauritius",
      "Indian/Mayotte",
      "Indian/Reunion",
      "Iran",
      "Israel",
      "Jamaica",
      "Japan",
      "Kwajalein",
      "Libya",
      "MET",
      "MST",
      "MST7MDT",
      "Mexico/BajaNorte",
      "Mexico/BajaSur",
      "Mexico/General",
      "NZ",
      "NZ-CHAT",
      "Navajo",
      "PRC",
      "PST8PDT",
      "Pacific/Apia",
      "Pacific/Auckland",
      "Pacific/Bougainville",
      "Pacific/Chatham",
      "Pacific/Chuuk",
      "Pacific/Easter",
      "Pacific/Efate",
      "Pacific/Enderbury",
      "Pacific/Fakaofo",
      "Pacific/Fiji",
      "Pacific/Funafuti",
      "Pacific/Galapagos",
      "Pacific/Gambier",
      "Pacific/Guadalcanal",
      "Pacific/Guam",
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Kanton",
      "Pacific/Kiritimati",
      "Pacific/Kosrae",
      "Pacific/Kwajalein",
      "Pacific/Majuro",
      "Pacific/Marquesas",
      "Pacific/Midway",
      "Pacific/Nauru",
      "Pacific/Niue",
      "Pacific/Norfolk",
      "Pacific/Noumea",
      "Pacific/Pago_Pago",
      "Pacific/Palau",
      "Pacific/Pitcairn",
      "Pacific/Pohnpei",
      "Pacific/Ponape",
      "Pacific/Port_Moresby",
      "Pacific/Rarotonga",
      "Pacific/Saipan",
      "Pacific/Samoa",
      "Pacific/Tahiti",
      "Pacific/Tarawa",
      "Pacific/Tongatapu",
      "Pacific/Truk",
      "Pacific/Wake",
      "Pacific/Wallis",
      "Pacific/Yap",
      "Poland",
      "Portugal",
      "ROC",
      "ROK",
      "Singapore",
      "Turkey",
      "UCT",
      "US/Alaska",
      "US/Aleutian",
      "US/Arizona",
      "US/Central",
      "US/East-Indiana",
      "US/Eastern",
      "US/Hawaii",
      "US/Indiana-Starke",
      "US/Michigan",
      "US/Mountain",
      "US/Pacific",
      "US/Samoa",
      "UTC",
      "Universal",
      "W-SU",
      "WET",
      "Zulu",
      "localtime",
    ]),
  ),
  interval: Schema.Literals(["year", "month", "week", "day", "hour"]),
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  product_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  billing_type: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["one_time", "recurring"]),
        Schema.Array(Schema.Literals(["one_time", "recurring"])),
      ]),
    ),
  ),
  customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  metrics: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
}).pipe(
  T.Http({ method: "GET", path: "/v1/metrics/" }),
) as unknown as Schema.Codec<MetricsgetInput>;

// Output Schema
export interface MetricsgetOutput {
  periods: ReadonlyArray<{
    timestamp: string;
    active_subscriptions?: number | null;
    committed_subscriptions?: number | null;
    monthly_recurring_revenue?: number | null;
    trial_monthly_recurring_revenue?: number | null;
    committed_monthly_recurring_revenue?: number | null;
    trial_committed_monthly_recurring_revenue?: number | null;
    average_revenue_per_user?: number | null;
    checkouts?: number | null;
    succeeded_checkouts?: number | null;
    churned_subscriptions?: number | null;
    churn_rate?: number | null;
    seats_total?: number | null;
    seats_claimed?: number | null;
    seats_pending?: number | null;
    seat_customers?: number | null;
    new_seat_customers?: number | null;
    churned_seat_customers?: number | null;
    orders?: number | null;
    revenue?: number | null;
    net_revenue?: number | null;
    cumulative_revenue?: number | null;
    net_cumulative_revenue?: number | null;
    costs?: number | null;
    cumulative_costs?: number | null;
    average_order_value?: number | null;
    net_average_order_value?: number | null;
    cost_per_user?: number | null;
    active_user_by_event?: number | null;
    one_time_products?: number | null;
    one_time_products_revenue?: number | null;
    one_time_products_net_revenue?: number | null;
    new_subscriptions?: number | null;
    new_subscriptions_revenue?: number | null;
    new_subscriptions_net_revenue?: number | null;
    renewed_subscriptions?: number | null;
    renewed_subscriptions_revenue?: number | null;
    renewed_subscriptions_net_revenue?: number | null;
    canceled_subscriptions?: number | null;
    canceled_subscriptions_customer_service?: number | null;
    canceled_subscriptions_low_quality?: number | null;
    canceled_subscriptions_missing_features?: number | null;
    canceled_subscriptions_switched_service?: number | null;
    canceled_subscriptions_too_complex?: number | null;
    canceled_subscriptions_too_expensive?: number | null;
    canceled_subscriptions_unused?: number | null;
    canceled_subscriptions_other?: number | null;
    annual_recurring_revenue?: number | null;
    committed_annual_recurring_revenue?: number | null;
    checkouts_conversion?: number | null;
    ltv?: number | null;
    gross_margin?: number | null;
    gross_margin_percentage?: number | null;
    cashflow?: number | null;
    average_seats_per_customer?: number | null;
    seat_utilization_rate?: number | null;
  }>;
  totals: {
    active_subscriptions?: number | null;
    committed_subscriptions?: number | null;
    monthly_recurring_revenue?: number | null;
    trial_monthly_recurring_revenue?: number | null;
    committed_monthly_recurring_revenue?: number | null;
    trial_committed_monthly_recurring_revenue?: number | null;
    average_revenue_per_user?: number | null;
    checkouts?: number | null;
    succeeded_checkouts?: number | null;
    churned_subscriptions?: number | null;
    churn_rate?: number | null;
    seats_total?: number | null;
    seats_claimed?: number | null;
    seats_pending?: number | null;
    seat_customers?: number | null;
    new_seat_customers?: number | null;
    churned_seat_customers?: number | null;
    orders?: number | null;
    revenue?: number | null;
    net_revenue?: number | null;
    cumulative_revenue?: number | null;
    net_cumulative_revenue?: number | null;
    costs?: number | null;
    cumulative_costs?: number | null;
    average_order_value?: number | null;
    net_average_order_value?: number | null;
    cost_per_user?: number | null;
    active_user_by_event?: number | null;
    one_time_products?: number | null;
    one_time_products_revenue?: number | null;
    one_time_products_net_revenue?: number | null;
    new_subscriptions?: number | null;
    new_subscriptions_revenue?: number | null;
    new_subscriptions_net_revenue?: number | null;
    renewed_subscriptions?: number | null;
    renewed_subscriptions_revenue?: number | null;
    renewed_subscriptions_net_revenue?: number | null;
    canceled_subscriptions?: number | null;
    canceled_subscriptions_customer_service?: number | null;
    canceled_subscriptions_low_quality?: number | null;
    canceled_subscriptions_missing_features?: number | null;
    canceled_subscriptions_switched_service?: number | null;
    canceled_subscriptions_too_complex?: number | null;
    canceled_subscriptions_too_expensive?: number | null;
    canceled_subscriptions_unused?: number | null;
    canceled_subscriptions_other?: number | null;
    annual_recurring_revenue?: number | null;
    committed_annual_recurring_revenue?: number | null;
    checkouts_conversion?: number | null;
    ltv?: number | null;
    gross_margin?: number | null;
    gross_margin_percentage?: number | null;
    cashflow?: number | null;
    average_seats_per_customer?: number | null;
    seat_utilization_rate?: number | null;
  };
  metrics: {
    active_subscriptions?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    committed_subscriptions?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    monthly_recurring_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    trial_monthly_recurring_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    committed_monthly_recurring_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    trial_committed_monthly_recurring_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    average_revenue_per_user?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    checkouts?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    succeeded_checkouts?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    churned_subscriptions?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    churn_rate?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    seats_total?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    seats_claimed?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    seats_pending?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    seat_customers?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    new_seat_customers?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    churned_seat_customers?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    orders?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    net_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    cumulative_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    net_cumulative_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    costs?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    cumulative_costs?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    average_order_value?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    net_average_order_value?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    cost_per_user?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    active_user_by_event?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    one_time_products?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    one_time_products_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    one_time_products_net_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    new_subscriptions?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    new_subscriptions_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    new_subscriptions_net_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    renewed_subscriptions?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    renewed_subscriptions_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    renewed_subscriptions_net_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_customer_service?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_low_quality?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_missing_features?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_switched_service?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_too_complex?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_too_expensive?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_unused?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    canceled_subscriptions_other?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    annual_recurring_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    committed_annual_recurring_revenue?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    checkouts_conversion?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    ltv?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    gross_margin?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    gross_margin_percentage?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    cashflow?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    average_seats_per_customer?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
    seat_utilization_rate?: {
      slug: string;
      display_name: string;
      type: "scalar" | "currency" | "currency_sub_cent" | "percentage";
    } | null;
  };
}
export const MetricsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  periods: Schema.Array(
    Schema.Struct({
      timestamp: Schema.String,
      active_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
      committed_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
      monthly_recurring_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      trial_monthly_recurring_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      committed_monthly_recurring_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      trial_committed_monthly_recurring_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      average_revenue_per_user: Schema.optional(Schema.NullOr(Schema.Number)),
      checkouts: Schema.optional(Schema.NullOr(Schema.Number)),
      succeeded_checkouts: Schema.optional(Schema.NullOr(Schema.Number)),
      churned_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
      churn_rate: Schema.optional(Schema.NullOr(Schema.Number)),
      seats_total: Schema.optional(Schema.NullOr(Schema.Number)),
      seats_claimed: Schema.optional(Schema.NullOr(Schema.Number)),
      seats_pending: Schema.optional(Schema.NullOr(Schema.Number)),
      seat_customers: Schema.optional(Schema.NullOr(Schema.Number)),
      new_seat_customers: Schema.optional(Schema.NullOr(Schema.Number)),
      churned_seat_customers: Schema.optional(Schema.NullOr(Schema.Number)),
      orders: Schema.optional(Schema.NullOr(Schema.Number)),
      revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      net_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      cumulative_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      net_cumulative_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      costs: Schema.optional(Schema.NullOr(Schema.Number)),
      cumulative_costs: Schema.optional(Schema.NullOr(Schema.Number)),
      average_order_value: Schema.optional(Schema.NullOr(Schema.Number)),
      net_average_order_value: Schema.optional(Schema.NullOr(Schema.Number)),
      cost_per_user: Schema.optional(Schema.NullOr(Schema.Number)),
      active_user_by_event: Schema.optional(Schema.NullOr(Schema.Number)),
      one_time_products: Schema.optional(Schema.NullOr(Schema.Number)),
      one_time_products_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      one_time_products_net_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      new_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
      new_subscriptions_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      new_subscriptions_net_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      renewed_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
      renewed_subscriptions_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      renewed_subscriptions_net_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
      canceled_subscriptions_customer_service: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions_low_quality: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions_missing_features: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions_switched_service: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions_too_complex: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions_too_expensive: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions_unused: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      canceled_subscriptions_other: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      annual_recurring_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
      committed_annual_recurring_revenue: Schema.optional(
        Schema.NullOr(Schema.Number),
      ),
      checkouts_conversion: Schema.optional(Schema.NullOr(Schema.Number)),
      ltv: Schema.optional(Schema.NullOr(Schema.Number)),
      gross_margin: Schema.optional(Schema.NullOr(Schema.Number)),
      gross_margin_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
      cashflow: Schema.optional(Schema.NullOr(Schema.Number)),
      average_seats_per_customer: Schema.optional(Schema.NullOr(Schema.Number)),
      seat_utilization_rate: Schema.optional(Schema.NullOr(Schema.Number)),
    }),
  ),
  totals: Schema.Struct({
    active_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
    committed_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
    monthly_recurring_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    trial_monthly_recurring_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    committed_monthly_recurring_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    trial_committed_monthly_recurring_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    average_revenue_per_user: Schema.optional(Schema.NullOr(Schema.Number)),
    checkouts: Schema.optional(Schema.NullOr(Schema.Number)),
    succeeded_checkouts: Schema.optional(Schema.NullOr(Schema.Number)),
    churned_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
    churn_rate: Schema.optional(Schema.NullOr(Schema.Number)),
    seats_total: Schema.optional(Schema.NullOr(Schema.Number)),
    seats_claimed: Schema.optional(Schema.NullOr(Schema.Number)),
    seats_pending: Schema.optional(Schema.NullOr(Schema.Number)),
    seat_customers: Schema.optional(Schema.NullOr(Schema.Number)),
    new_seat_customers: Schema.optional(Schema.NullOr(Schema.Number)),
    churned_seat_customers: Schema.optional(Schema.NullOr(Schema.Number)),
    orders: Schema.optional(Schema.NullOr(Schema.Number)),
    revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    net_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    cumulative_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    net_cumulative_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    costs: Schema.optional(Schema.NullOr(Schema.Number)),
    cumulative_costs: Schema.optional(Schema.NullOr(Schema.Number)),
    average_order_value: Schema.optional(Schema.NullOr(Schema.Number)),
    net_average_order_value: Schema.optional(Schema.NullOr(Schema.Number)),
    cost_per_user: Schema.optional(Schema.NullOr(Schema.Number)),
    active_user_by_event: Schema.optional(Schema.NullOr(Schema.Number)),
    one_time_products: Schema.optional(Schema.NullOr(Schema.Number)),
    one_time_products_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    one_time_products_net_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    new_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
    new_subscriptions_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    new_subscriptions_net_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    renewed_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
    renewed_subscriptions_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    renewed_subscriptions_net_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions: Schema.optional(Schema.NullOr(Schema.Number)),
    canceled_subscriptions_customer_service: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions_low_quality: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions_missing_features: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions_switched_service: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions_too_complex: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions_too_expensive: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions_unused: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    canceled_subscriptions_other: Schema.optional(Schema.NullOr(Schema.Number)),
    annual_recurring_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
    committed_annual_recurring_revenue: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    checkouts_conversion: Schema.optional(Schema.NullOr(Schema.Number)),
    ltv: Schema.optional(Schema.NullOr(Schema.Number)),
    gross_margin: Schema.optional(Schema.NullOr(Schema.Number)),
    gross_margin_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
    cashflow: Schema.optional(Schema.NullOr(Schema.Number)),
    average_seats_per_customer: Schema.optional(Schema.NullOr(Schema.Number)),
    seat_utilization_rate: Schema.optional(Schema.NullOr(Schema.Number)),
  }),
  metrics: Schema.Struct({
    active_subscriptions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    committed_subscriptions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    monthly_recurring_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    trial_monthly_recurring_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    committed_monthly_recurring_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    trial_committed_monthly_recurring_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    average_revenue_per_user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    checkouts: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    succeeded_checkouts: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    churned_subscriptions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    churn_rate: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    seats_total: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    seats_claimed: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    seats_pending: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    seat_customers: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    new_seat_customers: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    churned_seat_customers: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    orders: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    net_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    cumulative_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    net_cumulative_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    costs: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    cumulative_costs: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    average_order_value: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    net_average_order_value: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    cost_per_user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    active_user_by_event: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    one_time_products: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    one_time_products_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    one_time_products_net_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    new_subscriptions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    new_subscriptions_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    new_subscriptions_net_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    renewed_subscriptions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    renewed_subscriptions_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    renewed_subscriptions_net_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_customer_service: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_low_quality: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_missing_features: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_switched_service: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_too_complex: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_too_expensive: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_unused: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    canceled_subscriptions_other: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    annual_recurring_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    committed_annual_recurring_revenue: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    checkouts_conversion: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    ltv: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    gross_margin: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    gross_margin_percentage: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    cashflow: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    average_seats_per_customer: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
    seat_utilization_rate: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          slug: Schema.String,
          display_name: Schema.String,
          type: Schema.Literals([
            "scalar",
            "currency",
            "currency_sub_cent",
            "percentage",
          ]),
        }),
      ),
    ),
  }),
}) as unknown as Schema.Codec<MetricsgetOutput>;

// The operation
/**
 * Get Metrics
 *
 * Get metrics about your orders and subscriptions.
 * Currency values are output in cents.
 * **Scopes**: `metrics:read`
 *
 * @param start_date - Start date.
 * @param end_date - End date.
 * @param timezone - Timezone to use for the timestamps. Default is UTC.
 * @param interval - Interval between two timestamps.
 * @param organization_id - Filter by organization ID.
 * @param product_id - Filter by product ID.
 * @param billing_type - Filter by billing type. `recurring` will filter data corresponding to subscriptions creations or renewals. `one_time` will filter data corresponding to one-time purchases.
 * @param customer_id - Filter by customer ID.
 * @param metrics - List of metric slugs to focus on. When provided, only the queries needed for these metrics will be executed, improving performance. If not provided, all metrics are returned.
 */
export const metricsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MetricsgetInput,
  outputSchema: MetricsgetOutput,
}));
