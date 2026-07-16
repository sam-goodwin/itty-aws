import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UsersHedgehogConfigPartialUpdateInput {
  uuid: string;
  date_joined?: string;
  distinct_id?: string | null;
  first_name?: string;
  last_name?: string;
  email?: string;
  pending_email?: string | null;
  is_email_verified?: boolean | null;
  notification_settings?: Record<string, unknown>;
  anonymize_data?: boolean | null;
  allow_impersonation?: boolean | null;
  toolbar_mode?: "disabled" | "toolbar" | "" | null;
  has_password?: boolean;
  id?: number;
  is_staff?: boolean;
  is_impersonated?: boolean | null;
  is_impersonated_until?: string | null;
  is_impersonated_read_only?: boolean | null;
  sensitive_session_expires_at?: string | null;
  team?: {
    id?: number;
    uuid?: string;
    organization?: string;
    project_id?: number;
    api_token?: string | Redacted.Redacted<string>;
    name?: string;
    completed_snippet_onboarding?: boolean;
    has_completed_onboarding_for?: unknown;
    ingested_event?: boolean;
    is_demo?: boolean;
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
      | "Zulu";
    access_control?: boolean;
  };
  organization?: {
    id?: string;
    name?: string;
    slug?: string;
    logo_media_id?: string | null;
    created_at?: string;
    updated_at?: string;
    membership_level?: 1 | 8 | 15;
    plugins_access_level?: 0 | 3 | 6 | 9;
    teams?: Record<string, unknown>[];
    projects?: Record<string, unknown>[];
    available_product_features?: unknown[] | null;
    is_member_join_email_enabled?: boolean;
    metadata?: Record<string, string>;
    customer_id?: string | null;
    enforce_2fa?: boolean | null;
    members_can_invite?: boolean | null;
    members_can_create_projects?: boolean | null;
    members_can_use_personal_api_keys?: boolean;
    allow_publicly_shared_resources?: boolean;
    member_count?: number;
    is_ai_data_processing_approved?: boolean | null;
    is_ai_training_opted_in?: boolean | null;
    is_ai_training_locked?: boolean | null;
    is_ai_training_cta_shown?: boolean | null;
    is_hipaa?: boolean | null;
    default_experiment_stats_method?: "bayesian" | "frequentist" | "" | null;
    default_anonymize_ips?: boolean;
    default_role_id?: string | null;
    is_active?: boolean | null;
    is_not_active_reason?: string | null;
    is_pending_deletion?: boolean | null;
  };
  organizations?: {
    id?: string;
    name?: string;
    slug?: string;
    logo_media_id?: string | null;
    membership_level?: 1 | 8 | 15;
    members_can_use_personal_api_keys?: boolean;
    is_active?: boolean | null;
    is_not_active_reason?: string | null;
    is_pending_deletion?: boolean | null;
  }[];
  set_current_organization?: string;
  set_current_team?: string;
  password?: string | Redacted.Redacted<string>;
  current_password?: string | Redacted.Redacted<string>;
  events_column_config?: unknown;
  is_2fa_enabled?: boolean;
  has_social_auth?: boolean;
  has_sso_enforcement?: boolean;
  has_seen_product_intro_for?: unknown;
  scene_personalisation?: { scene?: string; dashboard?: number | null }[];
  theme_mode?: "light" | "dark" | "system" | "" | null;
  hedgehog_config?: unknown;
  allow_sidebar_suggestions?: boolean | null;
  shortcut_position?: "above" | "below" | "hidden" | "" | null;
  role_at_organization?:
    | "engineering"
    | "data"
    | "product"
    | "founder"
    | "leadership"
    | "marketing"
    | "sales"
    | "other";
  passkeys_enabled_for_2fa?: boolean | null;
  hide_mcp_hints?: boolean;
  onboarding_skipped_at?: string | null;
  onboarding_skipped_reason?: "delegated" | "later" | "other" | null;
  onboarding_skipped_organization_id?: string | null;
  onboarding_delegated_to_invite?: string | null;
  onboarding_delegated_to_organization_id?: string | null;
  onboarding_delegation_accepted_at?: string | null;
  is_organization_first_user?: boolean | null;
  active_realtime_notification_types?: string[];
  pending_invites?: {
    id?: string;
    target_email?: string;
    organization_id?: string;
    organization_name?: string;
    created_at?: string;
  }[];
  requires_credential_review?: boolean;
}
export const UsersHedgehogConfigPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    date_joined: Schema.optional(Schema.String),
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    pending_email: Schema.optional(Schema.NullOr(Schema.String)),
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    notification_settings: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    anonymize_data: Schema.optional(Schema.NullOr(Schema.Boolean)),
    allow_impersonation: Schema.optional(Schema.NullOr(Schema.Boolean)),
    toolbar_mode: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["disabled", "toolbar"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    has_password: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.Number),
    is_staff: Schema.optional(Schema.Boolean),
    is_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_impersonated_until: Schema.optional(Schema.NullOr(Schema.String)),
    is_impersonated_read_only: Schema.optional(Schema.NullOr(Schema.Boolean)),
    sensitive_session_expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        organization: Schema.optional(Schema.String),
        project_id: Schema.optional(Schema.Number),
        api_token: Schema.optional(SensitiveString),
        name: Schema.optional(Schema.String),
        completed_snippet_onboarding: Schema.optional(Schema.Boolean),
        has_completed_onboarding_for: Schema.optional(Schema.Unknown),
        ingested_event: Schema.optional(Schema.Boolean),
        is_demo: Schema.optional(Schema.Boolean),
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
          ]),
        ),
        access_control: Schema.optional(Schema.Boolean),
      }),
    ),
    organization: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        slug: Schema.optional(Schema.String),
        logo_media_id: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        membership_level: Schema.optional(Schema.Literals([1, 8, 15])),
        plugins_access_level: Schema.optional(Schema.Literals([0, 3, 6, 9])),
        teams: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        projects: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        available_product_features: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.Unknown)),
        ),
        is_member_join_email_enabled: Schema.optional(Schema.Boolean),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        customer_id: Schema.optional(Schema.NullOr(Schema.String)),
        enforce_2fa: Schema.optional(Schema.NullOr(Schema.Boolean)),
        members_can_invite: Schema.optional(Schema.NullOr(Schema.Boolean)),
        members_can_create_projects: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        members_can_use_personal_api_keys: Schema.optional(Schema.Boolean),
        allow_publicly_shared_resources: Schema.optional(Schema.Boolean),
        member_count: Schema.optional(Schema.Number),
        is_ai_data_processing_approved: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        is_ai_training_opted_in: Schema.optional(Schema.NullOr(Schema.Boolean)),
        is_ai_training_locked: Schema.optional(Schema.NullOr(Schema.Boolean)),
        is_ai_training_cta_shown: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        is_hipaa: Schema.optional(Schema.NullOr(Schema.Boolean)),
        default_experiment_stats_method: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["bayesian", "frequentist"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        default_anonymize_ips: Schema.optional(Schema.Boolean),
        default_role_id: Schema.optional(Schema.NullOr(Schema.String)),
        is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
        is_not_active_reason: Schema.optional(Schema.NullOr(Schema.String)),
        is_pending_deletion: Schema.optional(Schema.NullOr(Schema.Boolean)),
      }),
    ),
    organizations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          slug: Schema.optional(Schema.String),
          logo_media_id: Schema.optional(Schema.NullOr(Schema.String)),
          membership_level: Schema.optional(Schema.Literals([1, 8, 15])),
          members_can_use_personal_api_keys: Schema.optional(Schema.Boolean),
          is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
          is_not_active_reason: Schema.optional(Schema.NullOr(Schema.String)),
          is_pending_deletion: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    set_current_organization: Schema.optional(Schema.String),
    set_current_team: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveString),
    current_password: Schema.optional(SensitiveString),
    events_column_config: Schema.optional(Schema.Unknown),
    is_2fa_enabled: Schema.optional(Schema.Boolean),
    has_social_auth: Schema.optional(Schema.Boolean),
    has_sso_enforcement: Schema.optional(Schema.Boolean),
    has_seen_product_intro_for: Schema.optional(Schema.Unknown),
    scene_personalisation: Schema.optional(
      Schema.Array(
        Schema.Struct({
          scene: Schema.optional(Schema.String),
          dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
    ),
    theme_mode: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["light", "dark", "system"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    hedgehog_config: Schema.optional(Schema.Unknown),
    allow_sidebar_suggestions: Schema.optional(Schema.NullOr(Schema.Boolean)),
    shortcut_position: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["above", "below", "hidden"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    role_at_organization: Schema.optional(
      Schema.Literals([
        "engineering",
        "data",
        "product",
        "founder",
        "leadership",
        "marketing",
        "sales",
        "other",
      ]),
    ),
    passkeys_enabled_for_2fa: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hide_mcp_hints: Schema.optional(Schema.Boolean),
    onboarding_skipped_at: Schema.optional(Schema.NullOr(Schema.String)),
    onboarding_skipped_reason: Schema.optional(
      Schema.NullOr(Schema.Literals(["delegated", "later", "other"])),
    ),
    onboarding_skipped_organization_id: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    onboarding_delegated_to_invite: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    onboarding_delegated_to_organization_id: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    onboarding_delegation_accepted_at: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    is_organization_first_user: Schema.optional(Schema.NullOr(Schema.Boolean)),
    active_realtime_notification_types: Schema.optional(
      Schema.Array(Schema.String),
    ),
    pending_invites: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          target_email: Schema.optional(Schema.String),
          organization_id: Schema.optional(Schema.String),
          organization_name: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    requires_credential_review: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "PATCH", path: "/api/users/{uuid}/hedgehog_config/" }),
  ) as unknown as Schema.Codec<UsersHedgehogConfigPartialUpdateInput>;

// Output Schema
export type UsersHedgehogConfigPartialUpdateOutput = void;
export const UsersHedgehogConfigPartialUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersHedgehogConfigPartialUpdateOutput>;

// The operation
export const usersHedgehogConfigPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UsersHedgehogConfigPartialUpdateInput,
    outputSchema: UsersHedgehogConfigPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
