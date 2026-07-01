// ==========================================================================
// Places API (New) (places v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "places",
  version: "v1",
  rootUrl: "https://places.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleTypeTimeZone {
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
}

export const GoogleTypeTimeZone: Schema.Codec<GoogleTypeTimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeTimeZone" });

export interface GoogleTypeLocalizedText {
  /** Localized string in the language corresponding to language_code below. */
  text?: string;
  /** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleTypeLocalizedText: Schema.Codec<GoogleTypeLocalizedText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeLocalizedText" });

export interface GoogleMapsPlacesV1AddressDescriptorLandmark {
  /** The landmark's resource name. */
  name?: string;
  /** Defines the spatial relationship between the target location and the landmark. */
  spatialRelationship?:
    | "NEAR"
    | "WITHIN"
    | "BESIDE"
    | "ACROSS_THE_ROAD"
    | "DOWN_THE_ROAD"
    | "AROUND_THE_CORNER"
    | "BEHIND"
    | (string & {});
  /** The straight line distance, in meters, between the center point of the target and the center point of the landmark. In some situations, this value can be longer than `travel_distance_meters`. */
  straightLineDistanceMeters?: number;
  /** The landmark's place id. */
  placeId?: string;
  /** The travel distance, in meters, along the road network from the target to the landmark, if known. This value does not take into account the mode of transportation, such as walking, driving, or biking. */
  travelDistanceMeters?: number;
  /** A set of type tags for this landmark. For a complete list of possible values, see https://developers.google.com/maps/documentation/places/web-service/place-types. */
  types?: ReadonlyArray<string>;
  /** The landmark's display name. */
  displayName?: GoogleTypeLocalizedText;
}

export const GoogleMapsPlacesV1AddressDescriptorLandmark: Schema.Codec<GoogleMapsPlacesV1AddressDescriptorLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    spatialRelationship: Schema.optional(Schema.String),
    straightLineDistanceMeters: Schema.optional(Schema.Number),
    placeId: Schema.optional(Schema.String),
    travelDistanceMeters: Schema.optional(Schema.Number),
    types: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(GoogleTypeLocalizedText),
  }).annotate({ identifier: "GoogleMapsPlacesV1AddressDescriptorLandmark" });

export interface GoogleMapsPlacesV1AddressDescriptorArea {
  /** The area's resource name. */
  name?: string;
  /** Defines the spatial relationship between the target location and the area. */
  containment?:
    | "CONTAINMENT_UNSPECIFIED"
    | "WITHIN"
    | "OUTSKIRTS"
    | "NEAR"
    | (string & {});
  /** The area's place id. */
  placeId?: string;
  /** The area's display name. */
  displayName?: GoogleTypeLocalizedText;
}

export const GoogleMapsPlacesV1AddressDescriptorArea: Schema.Codec<GoogleMapsPlacesV1AddressDescriptorArea> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    containment: Schema.optional(Schema.String),
    placeId: Schema.optional(Schema.String),
    displayName: Schema.optional(GoogleTypeLocalizedText),
  }).annotate({ identifier: "GoogleMapsPlacesV1AddressDescriptorArea" });

export interface GoogleMapsPlacesV1AddressDescriptor {
  /** A ranked list of nearby landmarks. The most recognizable and nearby landmarks are ranked first. */
  landmarks?: ReadonlyArray<GoogleMapsPlacesV1AddressDescriptorLandmark>;
  /** A ranked list of containing or adjacent areas. The most recognizable and precise areas are ranked first. */
  areas?: ReadonlyArray<GoogleMapsPlacesV1AddressDescriptorArea>;
}

export const GoogleMapsPlacesV1AddressDescriptor: Schema.Codec<GoogleMapsPlacesV1AddressDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    landmarks: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1AddressDescriptorLandmark),
    ),
    areas: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1AddressDescriptorArea),
    ),
  }).annotate({ identifier: "GoogleMapsPlacesV1AddressDescriptor" });

export interface GoogleMapsPlacesV1TransitIcon {
  /** The URL of the icon. */
  url?: string;
  /** Whether the name is contained in the icon and there is no need to display it next to the icon. */
  nameIncluded?: boolean;
}

export const GoogleMapsPlacesV1TransitIcon: Schema.Codec<GoogleMapsPlacesV1TransitIcon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    nameIncluded: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleMapsPlacesV1TransitIcon" });

export interface GoogleMapsPlacesV1TransitLine {
  /** The long name for this transit line (e.g. "Sunnydale local"). */
  displayName?: GoogleTypeLocalizedText;
  /** The id of the transit line that can be used to uniquely identify the line among other transit lines in the same transit station. This identifier is not guaranteed to be stable across different responses. */
  id?: string;
  /** The text color of labels for this transit line in #RRGGBB hex format, e.g. #909CE1. */
  textColor?: string;
  /** Icon identifier for this particular vehicle type. */
  vehicleIcon?: GoogleMapsPlacesV1TransitIcon;
  /** The short name for this transit line (e.g. "S2"). */
  shortDisplayName?: GoogleTypeLocalizedText;
  /** The URL of a webpage with details about this line. */
  url?: string;
  /** Icon identifier for this particular line (e.g. subway lines in New York). */
  icon?: GoogleMapsPlacesV1TransitIcon;
  /** The background color of the labels for this transit line in #RRGGBB hex format, e.g. #909CE1. This color can also be used for drawing shapes for this transit line. */
  backgroundColor?: string;
  /** The type of vehicle using this line. */
  vehicleType?:
    | "VEHICLE_TYPE_UNSPECIFIED"
    | "RAIL"
    | "METRO_RAIL"
    | "SUBWAY"
    | "TRAM"
    | "MONORAIL"
    | "HEAVY_RAIL"
    | "COMMUTER_TRAIN"
    | "HIGH_SPEED_TRAIN"
    | "LONG_DISTANCE_TRAIN"
    | "BUS"
    | "INTERCITY_BUS"
    | "TROLLEYBUS"
    | "SHARE_TAXI"
    | "COACH"
    | "FERRY"
    | "CABLE_CAR"
    | "GONDOLA_LIFT"
    | "FUNICULAR"
    | "SPECIAL"
    | "HORSE_CARRIAGE"
    | "AIRPLANE"
    | (string & {});
}

export const GoogleMapsPlacesV1TransitLine: Schema.Codec<GoogleMapsPlacesV1TransitLine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(GoogleTypeLocalizedText),
    id: Schema.optional(Schema.String),
    textColor: Schema.optional(Schema.String),
    vehicleIcon: Schema.optional(GoogleMapsPlacesV1TransitIcon),
    shortDisplayName: Schema.optional(GoogleTypeLocalizedText),
    url: Schema.optional(Schema.String),
    icon: Schema.optional(GoogleMapsPlacesV1TransitIcon),
    backgroundColor: Schema.optional(Schema.String),
    vehicleType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1TransitLine" });

export interface GoogleMapsPlacesV1TransitAgency {
  /** The URL of the agency's homepage. */
  url?: string;
  /** Agency name (e.g. "VTA") in the requested language. */
  displayName?: GoogleTypeLocalizedText;
  /** The URL of the agency's fare details page. */
  fareUrl?: string;
  /** Icon identifier for localized branded icon of a transit system (e.g. London Underground) which should be used instead of TransitLine.vehicle_icon in the UI. */
  icon?: GoogleMapsPlacesV1TransitIcon;
  /** The transit lines that are served by this agency. */
  lines?: ReadonlyArray<GoogleMapsPlacesV1TransitLine>;
}

export const GoogleMapsPlacesV1TransitAgency: Schema.Codec<GoogleMapsPlacesV1TransitAgency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    displayName: Schema.optional(GoogleTypeLocalizedText),
    fareUrl: Schema.optional(Schema.String),
    icon: Schema.optional(GoogleMapsPlacesV1TransitIcon),
    lines: Schema.optional(Schema.Array(GoogleMapsPlacesV1TransitLine)),
  }).annotate({ identifier: "GoogleMapsPlacesV1TransitAgency" });

export interface GoogleMapsPlacesV1PlaceContainingPlace {
  /** The resource name of the place in which this place is located. */
  name?: string;
  /** The place id of the place in which this place is located. */
  id?: string;
}

export const GoogleMapsPlacesV1PlaceContainingPlace: Schema.Codec<GoogleMapsPlacesV1PlaceContainingPlace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceContainingPlace" });

export interface GoogleTypeLatLng {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
}

export const GoogleTypeLatLng: Schema.Codec<GoogleTypeLatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeLatLng" });

export interface GoogleMapsPlacesV1RouteModifiers {
  /** Optional. When set to true, avoids ferries where reasonable, giving preference to routes not containing ferries. Applies only to the `DRIVE` and `TWO_WHEELER` `TravelMode`. */
  avoidFerries?: boolean;
  /** Optional. When set to true, avoids navigating indoors where reasonable, giving preference to routes not containing indoor navigation. Applies only to the `WALK` `TravelMode`. */
  avoidIndoor?: boolean;
  /** Optional. When set to true, avoids highways where reasonable, giving preference to routes not containing highways. Applies only to the `DRIVE` and `TWO_WHEELER` `TravelMode`. */
  avoidHighways?: boolean;
  /** Optional. When set to true, avoids toll roads where reasonable, giving preference to routes not containing toll roads. Applies only to the `DRIVE` and `TWO_WHEELER` `TravelMode`. */
  avoidTolls?: boolean;
}

export const GoogleMapsPlacesV1RouteModifiers: Schema.Codec<GoogleMapsPlacesV1RouteModifiers> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    avoidFerries: Schema.optional(Schema.Boolean),
    avoidIndoor: Schema.optional(Schema.Boolean),
    avoidHighways: Schema.optional(Schema.Boolean),
    avoidTolls: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleMapsPlacesV1RouteModifiers" });

export interface GoogleMapsPlacesV1RoutingParameters {
  /** Optional. An explicit routing origin that overrides the origin defined in the polyline. By default, the polyline origin is used. */
  origin?: GoogleTypeLatLng;
  /** Optional. The route modifiers. */
  routeModifiers?: GoogleMapsPlacesV1RouteModifiers;
  /** Optional. The travel mode. */
  travelMode?:
    | "TRAVEL_MODE_UNSPECIFIED"
    | "DRIVE"
    | "BICYCLE"
    | "WALK"
    | "TWO_WHEELER"
    | (string & {});
  /** Optional. Specifies how to compute the routing summaries. The server attempts to use the selected routing preference to compute the route. The traffic aware routing preference is only available for the `DRIVE` or `TWO_WHEELER` `travelMode`. */
  routingPreference?:
    | "ROUTING_PREFERENCE_UNSPECIFIED"
    | "TRAFFIC_UNAWARE"
    | "TRAFFIC_AWARE"
    | "TRAFFIC_AWARE_OPTIMAL"
    | (string & {});
}

export const GoogleMapsPlacesV1RoutingParameters: Schema.Codec<GoogleMapsPlacesV1RoutingParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    origin: Schema.optional(GoogleTypeLatLng),
    routeModifiers: Schema.optional(GoogleMapsPlacesV1RouteModifiers),
    travelMode: Schema.optional(Schema.String),
    routingPreference: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1RoutingParameters" });

export interface GoogleMapsPlacesV1PlacePaymentOptions {
  /** Place accepts credit cards as payment. */
  acceptsCreditCards?: boolean;
  /** Place accepts NFC payments. */
  acceptsNfc?: boolean;
  /** Place accepts debit cards as payment. */
  acceptsDebitCards?: boolean;
  /** Place accepts cash only as payment. Places with this attribute may still accept other payment methods. */
  acceptsCashOnly?: boolean;
}

export const GoogleMapsPlacesV1PlacePaymentOptions: Schema.Codec<GoogleMapsPlacesV1PlacePaymentOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceptsCreditCards: Schema.optional(Schema.Boolean),
    acceptsNfc: Schema.optional(Schema.Boolean),
    acceptsDebitCards: Schema.optional(Schema.Boolean),
    acceptsCashOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlacePaymentOptions" });

export interface GoogleMapsPlacesV1Circle {
  /** Required. Center latitude and longitude. The range of latitude must be within [-90.0, 90.0]. The range of the longitude must be within [-180.0, 180.0]. */
  center?: GoogleTypeLatLng;
  /** Required. Radius measured in meters. The radius must be within [0.0, 50000.0]. */
  radius?: number;
}

export const GoogleMapsPlacesV1Circle: Schema.Codec<GoogleMapsPlacesV1Circle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    center: Schema.optional(GoogleTypeLatLng),
    radius: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleMapsPlacesV1Circle" });

export interface GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange {
  /** Zero-based offset of the first Unicode character of the string (inclusive). */
  startOffset?: number;
  /** Zero-based offset of the last Unicode character (exclusive). */
  endOffset?: number;
}

export const GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startOffset: Schema.optional(Schema.Number),
    endOffset: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange",
  });

export interface GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText {
  /** Text that may be used as is or formatted with `matches`. */
  text?: string;
  /** A list of string ranges identifying where the input request matched in `text`. The ranges can be used to format specific parts of `text`. The substrings may not be exact matches of `input` if the matching was determined by criteria other than string matching (for example, spell corrections or transliterations). These values are Unicode character offsets of `text`. The ranges are guaranteed to be ordered in increasing offset values. */
  matches?: ReadonlyArray<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange>;
}

export const GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    matches: Schema.optional(
      Schema.Array(
        GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText",
  });

export interface GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat {
  /** Represents the name of the Place or query. */
  mainText?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
  /** Represents additional disambiguating features (such as a city or region) to further identify the Place or refine the query. */
  secondaryText?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
}

export const GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainText: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText,
    ),
    secondaryText: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText,
    ),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat",
  });

export interface GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction {
  /** The predicted text. This text does not represent a Place, but rather a text query that could be used in a search endpoint (for example, Text Search). `text` is recommended for developers who wish to show a single UI element. Developers who wish to show two separate, but related, UI elements may want to use `structured_format` instead. They are two different ways to represent a query prediction. Users should not try to parse `structured_format` into `text` or vice versa. May be in mixed languages if the request `input` and `language_code` are in different languages or if part of the query does not have a translation from the local language to `language_code`. */
  text?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
  /** A breakdown of the query prediction into main text containing the query and secondary text containing additional disambiguating features (such as a city or region). `structured_format` is recommended for developers who wish to show two separate, but related, UI elements. Developers who wish to show a single UI element may want to use `text` instead. They are two different ways to represent a query prediction. Users should not try to parse `structured_format` into `text` or vice versa. */
  structuredFormat?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat;
}

export const GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText,
    ),
    structuredFormat: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat,
    ),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction",
  });

export interface GoogleMapsPlacesV1TransitStop {
  /** Human readable identifier of the stop, used by transit agencies to distinguish stops with the same name. */
  stopCode?: GoogleTypeLocalizedText;
  /** The platform code represented by this stop. It can be formatted in any way. (eg: "2", "Platform 2", "2-4", or "1x"). */
  platformCode?: GoogleTypeLocalizedText;
  /** The verbatim text written on the signboard for this platform, e.g. "Towards Central" or "East side & Brooklyn". When `platform_code` is absent, this field is potentially the only identifier for the platform; however, both `platform_code` and `signage_text` may be set simultaneously. */
  signageText?: GoogleTypeLocalizedText;
  /** The stop's location. */
  location?: GoogleTypeLatLng;
  /** The id of the transit stop that can be used to uniquely identify the stop among other transit stops in the same transit station. This identifier is not guaranteed to be stable across different responses. */
  id?: string;
  /** The name of the stop. */
  displayName?: GoogleTypeLocalizedText;
  /** Wheelchair accessibility of this stop. This field indicates whether there is an accessible path from outside the station to the stop. It does not indicate whether it is possible to board a vehicle from the stop. */
  wheelchairAccessibleEntrance?: boolean;
}

export const GoogleMapsPlacesV1TransitStop: Schema.Codec<GoogleMapsPlacesV1TransitStop> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stopCode: Schema.optional(GoogleTypeLocalizedText),
    platformCode: Schema.optional(GoogleTypeLocalizedText),
    signageText: Schema.optional(GoogleTypeLocalizedText),
    location: Schema.optional(GoogleTypeLatLng),
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(GoogleTypeLocalizedText),
    wheelchairAccessibleEntrance: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleMapsPlacesV1TransitStop" });

export interface GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction {
  /** A circle defined by center point and radius. */
  circle?: GoogleMapsPlacesV1Circle;
}

export const GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction: Schema.Codec<GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    circle: Schema.optional(GoogleMapsPlacesV1Circle),
  }).annotate({
    identifier: "GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction",
  });

export interface GoogleMapsPlacesV1ContentBlock {
  /** The list of resource names of the referenced places. This name can be used in other APIs that accept Place resource names. */
  referencedPlaces?: ReadonlyArray<string>;
  /** Content related to the topic. */
  content?: GoogleTypeLocalizedText;
}

export const GoogleMapsPlacesV1ContentBlock: Schema.Codec<GoogleMapsPlacesV1ContentBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referencedPlaces: Schema.optional(Schema.Array(Schema.String)),
    content: Schema.optional(GoogleTypeLocalizedText),
  }).annotate({ identifier: "GoogleMapsPlacesV1ContentBlock" });

export interface GoogleMapsPlacesV1PlaceEvChargeAmenitySummary {
  /** An overview of the available amenities. This is guaranteed to be provided. */
  overview?: GoogleMapsPlacesV1ContentBlock;
  /** A summary of the nearby restaurants. */
  restaurant?: GoogleMapsPlacesV1ContentBlock;
  /** A summary of the nearby stores. */
  store?: GoogleMapsPlacesV1ContentBlock;
  /** A link where users can flag a problem with the summary. */
  flagContentUri?: string;
  /** A summary of the nearby coffee options. */
  coffee?: GoogleMapsPlacesV1ContentBlock;
  /** The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available. */
  disclosureText?: GoogleTypeLocalizedText;
}

export const GoogleMapsPlacesV1PlaceEvChargeAmenitySummary: Schema.Codec<GoogleMapsPlacesV1PlaceEvChargeAmenitySummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overview: Schema.optional(GoogleMapsPlacesV1ContentBlock),
    restaurant: Schema.optional(GoogleMapsPlacesV1ContentBlock),
    store: Schema.optional(GoogleMapsPlacesV1ContentBlock),
    flagContentUri: Schema.optional(Schema.String),
    coffee: Schema.optional(GoogleMapsPlacesV1ContentBlock),
    disclosureText: Schema.optional(GoogleTypeLocalizedText),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceEvChargeAmenitySummary" });

export interface GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation {
  /** Number of connectors in this aggregation. */
  count?: number;
  /** Number of connectors in this aggregation that are currently available. */
  availableCount?: number;
  /** Number of connectors in this aggregation that are currently out of service. */
  outOfServiceCount?: number;
  /** The static max charging rate in kw of each connector in the aggregation. */
  maxChargeRateKw?: number;
  /** The timestamp when the connector availability information in this aggregation was last updated. */
  availabilityLastUpdateTime?: string;
  /** The connector type of this aggregation. */
  type?:
    | "EV_CONNECTOR_TYPE_UNSPECIFIED"
    | "EV_CONNECTOR_TYPE_OTHER"
    | "EV_CONNECTOR_TYPE_J1772"
    | "EV_CONNECTOR_TYPE_TYPE_2"
    | "EV_CONNECTOR_TYPE_CHADEMO"
    | "EV_CONNECTOR_TYPE_CCS_COMBO_1"
    | "EV_CONNECTOR_TYPE_CCS_COMBO_2"
    | "EV_CONNECTOR_TYPE_TESLA"
    | "EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T"
    | "EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET"
    | "EV_CONNECTOR_TYPE_NACS"
    | (string & {});
}

export const GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation: Schema.Codec<GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    availableCount: Schema.optional(Schema.Number),
    outOfServiceCount: Schema.optional(Schema.Number),
    maxChargeRateKw: Schema.optional(Schema.Number),
    availabilityLastUpdateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation",
  });

export interface GoogleMapsPlacesV1EVChargeOptions {
  /** A list of EV charging connector aggregations that contain connectors of the same type and same charge rate. */
  connectorAggregation?: ReadonlyArray<GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation>;
  /** Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously. */
  connectorCount?: number;
}

export const GoogleMapsPlacesV1EVChargeOptions: Schema.Codec<GoogleMapsPlacesV1EVChargeOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectorAggregation: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation),
    ),
    connectorCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleMapsPlacesV1EVChargeOptions" });

export interface GoogleMapsPlacesV1PlaceSubDestination {
  /** The resource name of the sub-destination. */
  name?: string;
  /** The place id of the sub-destination. */
  id?: string;
}

export const GoogleMapsPlacesV1PlaceSubDestination: Schema.Codec<GoogleMapsPlacesV1PlaceSubDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceSubDestination" });

export interface GoogleTypeMoney {
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
}

export const GoogleTypeMoney: Schema.Codec<GoogleTypeMoney> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    units: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeMoney" });

export interface GoogleMapsPlacesV1PriceRange {
  /** The low end of the price range (inclusive). Price should be at or above this amount. */
  startPrice?: GoogleTypeMoney;
  /** The high end of the price range (exclusive). Price should be lower than this amount. */
  endPrice?: GoogleTypeMoney;
}

export const GoogleMapsPlacesV1PriceRange: Schema.Codec<GoogleMapsPlacesV1PriceRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startPrice: Schema.optional(GoogleTypeMoney),
    endPrice: Schema.optional(GoogleTypeMoney),
  }).annotate({ identifier: "GoogleMapsPlacesV1PriceRange" });

export interface GoogleTypeDate {
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
}

export const GoogleTypeDate: Schema.Codec<GoogleTypeDate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    day: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeDate" });

export interface GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint {
  /** Date in the local timezone for the place. */
  date?: GoogleTypeDate;
  /** A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc. */
  day?: number;
  /** The hour in 24 hour format. Ranges from 0 to 23. */
  hour?: number;
  /** Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned. */
  truncated?: boolean;
  /** The minute. Ranges from 0 to 59. */
  minute?: number;
}

export const GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint: Schema.Codec<GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(GoogleTypeDate),
    day: Schema.optional(Schema.Number),
    hour: Schema.optional(Schema.Number),
    truncated: Schema.optional(Schema.Boolean),
    minute: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint" });

export interface GoogleMapsPlacesV1PlaceOpeningHoursPeriod {
  /** The time that the place starts to be open. */
  open?: GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;
  /** The time that the place starts to be closed. */
  close?: GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;
}

export const GoogleMapsPlacesV1PlaceOpeningHoursPeriod: Schema.Codec<GoogleMapsPlacesV1PlaceOpeningHoursPeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    open: Schema.optional(GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint),
    close: Schema.optional(GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceOpeningHoursPeriod" });

export interface GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay {
  /** The date of this special day. */
  date?: GoogleTypeDate;
}

export const GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay: Schema.Codec<GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(GoogleTypeDate),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay" });

export interface GoogleMapsPlacesV1PlaceOpeningHours {
  /** Localized strings describing the opening hours of this place, one string for each day of the week. NOTE: The order of the days and the start of the week is determined by the locale (language and region). The ordering of the `periods` array is independent of the ordering of the `weekday_descriptions` array. Do not assume they will begin on the same day. Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00" */
  weekdayDescriptions?: ReadonlyArray<string>;
  /** The next time the current opening hours period starts up to 7 days in the future. This field is only populated if the opening hours period is not active at the time of serving the request. */
  nextOpenTime?: string;
  /** Whether the opening hours period is currently active. For regular opening hours and current opening hours, this field means whether the place is open. For secondary opening hours and current secondary opening hours, this field means whether the secondary hours of this place is active. */
  openNow?: boolean;
  /** A type string used to identify the type of secondary hours. */
  secondaryHoursType?:
    | "SECONDARY_HOURS_TYPE_UNSPECIFIED"
    | "DRIVE_THROUGH"
    | "HAPPY_HOUR"
    | "DELIVERY"
    | "TAKEOUT"
    | "KITCHEN"
    | "BREAKFAST"
    | "LUNCH"
    | "DINNER"
    | "BRUNCH"
    | "PICKUP"
    | "ACCESS"
    | "SENIOR_HOURS"
    | "ONLINE_SERVICE_HOURS"
    | (string & {});
  /** The next time the current opening hours period ends up to 7 days in the future. This field is only populated if the opening hours period is active at the time of serving the request. */
  nextCloseTime?: string;
  /** The periods that this place is open during the week. The periods are in chronological order, in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations. The starting day of `periods` is NOT fixed and should not be assumed to be Sunday. The API determines the start day based on a variety of factors. For example, for a 24/7 business, the first period may begin on the day of the request. For other businesses, it might be the first day of the week that they are open. NOTE: The ordering of the `periods` array is independent of the ordering of the `weekday_descriptions` array. Do not assume they will begin on the same day. */
  periods?: ReadonlyArray<GoogleMapsPlacesV1PlaceOpeningHoursPeriod>;
  /** Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for current_opening_hours and current_secondary_opening_hours if there are exceptional hours. */
  specialDays?: ReadonlyArray<GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay>;
}

export const GoogleMapsPlacesV1PlaceOpeningHours: Schema.Codec<GoogleMapsPlacesV1PlaceOpeningHours> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weekdayDescriptions: Schema.optional(Schema.Array(Schema.String)),
    nextOpenTime: Schema.optional(Schema.String),
    openNow: Schema.optional(Schema.Boolean),
    secondaryHoursType: Schema.optional(Schema.String),
    nextCloseTime: Schema.optional(Schema.String),
    periods: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceOpeningHoursPeriod),
    ),
    specialDays: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay),
    ),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceOpeningHours" });

export interface GoogleMapsPlacesV1PlacePlusCode {
  /** Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters). */
  globalCode?: string;
  /** Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity. */
  compoundCode?: string;
}

export const GoogleMapsPlacesV1PlacePlusCode: Schema.Codec<GoogleMapsPlacesV1PlacePlusCode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    globalCode: Schema.optional(Schema.String),
    compoundCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlacePlusCode" });

export interface GoogleGeoTypeViewport {
  /** Required. The low point of the viewport. */
  low?: GoogleTypeLatLng;
  /** Required. The high point of the viewport. */
  high?: GoogleTypeLatLng;
}

export const GoogleGeoTypeViewport: Schema.Codec<GoogleGeoTypeViewport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    low: Schema.optional(GoogleTypeLatLng),
    high: Schema.optional(GoogleTypeLatLng),
  }).annotate({ identifier: "GoogleGeoTypeViewport" });

export interface GoogleMapsPlacesV1PlaceParkingOptions {
  /** Place offers free parking lots. */
  freeParkingLot?: boolean;
  /** Place offers free street parking. */
  freeStreetParking?: boolean;
  /** Place offers paid parking lots. */
  paidParkingLot?: boolean;
  /** Place offers paid garage parking. */
  paidGarageParking?: boolean;
  /** Place offers paid street parking. */
  paidStreetParking?: boolean;
  /** Place offers valet parking. */
  valetParking?: boolean;
  /** Place offers free garage parking. */
  freeGarageParking?: boolean;
}

export const GoogleMapsPlacesV1PlaceParkingOptions: Schema.Codec<GoogleMapsPlacesV1PlaceParkingOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freeParkingLot: Schema.optional(Schema.Boolean),
    freeStreetParking: Schema.optional(Schema.Boolean),
    paidParkingLot: Schema.optional(Schema.Boolean),
    paidGarageParking: Schema.optional(Schema.Boolean),
    paidStreetParking: Schema.optional(Schema.Boolean),
    valetParking: Schema.optional(Schema.Boolean),
    freeGarageParking: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceParkingOptions" });

export interface GoogleMapsPlacesV1TransitStation {
  /** The name of the station in the local language. */
  displayName?: GoogleTypeLocalizedText;
  /** Transit stops at this station. */
  stops?: ReadonlyArray<GoogleMapsPlacesV1TransitStop>;
  /** The transit agencies that serve this station. */
  agencies?: ReadonlyArray<GoogleMapsPlacesV1TransitAgency>;
}

export const GoogleMapsPlacesV1TransitStation: Schema.Codec<GoogleMapsPlacesV1TransitStation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(GoogleTypeLocalizedText),
    stops: Schema.optional(Schema.Array(GoogleMapsPlacesV1TransitStop)),
    agencies: Schema.optional(Schema.Array(GoogleMapsPlacesV1TransitAgency)),
  }).annotate({ identifier: "GoogleMapsPlacesV1TransitStation" });

export interface GoogleMapsPlacesV1AuthorAttribution {
  /** URI of the author of the Photo or Review. */
  uri?: string;
  /** Profile photo URI of the author of the Photo or Review. */
  photoUri?: string;
  /** Name of the author of the Photo or Review. */
  displayName?: string;
}

export const GoogleMapsPlacesV1AuthorAttribution: Schema.Codec<GoogleMapsPlacesV1AuthorAttribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    photoUri: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1AuthorAttribution" });

export interface GoogleMapsPlacesV1Photo {
  /** A link where users can flag a problem with the photo. */
  flagContentUri?: string;
  /** A link to show the photo on Google Maps. */
  googleMapsUri?: string;
  /** The maximum available height, in pixels. */
  heightPx?: number;
  /** This photo's authors. */
  authorAttributions?: ReadonlyArray<GoogleMapsPlacesV1AuthorAttribution>;
  /** Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API "resource" name: `places/{place_id}/photos/{photo}`). */
  name?: string;
  /** The maximum available width, in pixels. */
  widthPx?: number;
}

export const GoogleMapsPlacesV1Photo: Schema.Codec<GoogleMapsPlacesV1Photo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagContentUri: Schema.optional(Schema.String),
    googleMapsUri: Schema.optional(Schema.String),
    heightPx: Schema.optional(Schema.Number),
    authorAttributions: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1AuthorAttribution),
    ),
    name: Schema.optional(Schema.String),
    widthPx: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleMapsPlacesV1Photo" });

export interface GoogleMapsPlacesV1PlaceAddressComponent {
  /** The language used to format this components, in CLDR notation. */
  languageCode?: string;
  /** An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of "AU". */
  shortText?: string;
  /** An array indicating the type(s) of the address component. */
  types?: ReadonlyArray<string>;
  /** The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of "Australia". */
  longText?: string;
}

export const GoogleMapsPlacesV1PlaceAddressComponent: Schema.Codec<GoogleMapsPlacesV1PlaceAddressComponent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    shortText: Schema.optional(Schema.String),
    types: Schema.optional(Schema.Array(Schema.String)),
    longText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceAddressComponent" });

export interface GoogleMapsPlacesV1PlaceAccessibilityOptions {
  /** Place offers wheelchair accessible parking. */
  wheelchairAccessibleParking?: boolean;
  /** Place has wheelchair accessible restroom. */
  wheelchairAccessibleRestroom?: boolean;
  /** Place has wheelchair accessible seating. */
  wheelchairAccessibleSeating?: boolean;
  /** Places has wheelchair accessible entrance. */
  wheelchairAccessibleEntrance?: boolean;
}

export const GoogleMapsPlacesV1PlaceAccessibilityOptions: Schema.Codec<GoogleMapsPlacesV1PlaceAccessibilityOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wheelchairAccessibleParking: Schema.optional(Schema.Boolean),
    wheelchairAccessibleRestroom: Schema.optional(Schema.Boolean),
    wheelchairAccessibleSeating: Schema.optional(Schema.Boolean),
    wheelchairAccessibleEntrance: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceAccessibilityOptions" });

export interface GoogleMapsPlacesV1PlaceReviewSummary {
  /** A link to show reviews of this place on Google Maps. */
  reviewsUri?: string;
  /** The summary of user reviews. */
  text?: GoogleTypeLocalizedText;
  /** A link where users can flag a problem with the summary. */
  flagContentUri?: string;
  /** The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available. */
  disclosureText?: GoogleTypeLocalizedText;
}

export const GoogleMapsPlacesV1PlaceReviewSummary: Schema.Codec<GoogleMapsPlacesV1PlaceReviewSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewsUri: Schema.optional(Schema.String),
    text: Schema.optional(GoogleTypeLocalizedText),
    flagContentUri: Schema.optional(Schema.String),
    disclosureText: Schema.optional(GoogleTypeLocalizedText),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceReviewSummary" });

export interface GoogleMapsPlacesV1PlaceNeighborhoodSummary {
  /** A detailed description of the neighborhood. */
  description?: GoogleMapsPlacesV1ContentBlock;
  /** An overview summary of the neighborhood. */
  overview?: GoogleMapsPlacesV1ContentBlock;
  /** A link where users can flag a problem with the summary. */
  flagContentUri?: string;
  /** The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available. */
  disclosureText?: GoogleTypeLocalizedText;
}

export const GoogleMapsPlacesV1PlaceNeighborhoodSummary: Schema.Codec<GoogleMapsPlacesV1PlaceNeighborhoodSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(GoogleMapsPlacesV1ContentBlock),
    overview: Schema.optional(GoogleMapsPlacesV1ContentBlock),
    flagContentUri: Schema.optional(Schema.String),
    disclosureText: Schema.optional(GoogleTypeLocalizedText),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceNeighborhoodSummary" });

export interface GoogleMapsPlacesV1PlaceGoogleMapsLinks {
  /** A link to show reviews of this place on Google Maps. */
  reviewsUri?: string;
  /** A link to show the directions to the place. The link only populates the destination location and uses the default travel mode `DRIVE`. */
  directionsUri?: string;
  /** A link to show this place. */
  placeUri?: string;
  /** A link to show photos of this place on Google Maps. */
  photosUri?: string;
  /** A link to write a review for this place on Google Maps. */
  writeAReviewUri?: string;
}

export const GoogleMapsPlacesV1PlaceGoogleMapsLinks: Schema.Codec<GoogleMapsPlacesV1PlaceGoogleMapsLinks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewsUri: Schema.optional(Schema.String),
    directionsUri: Schema.optional(Schema.String),
    placeUri: Schema.optional(Schema.String),
    photosUri: Schema.optional(Schema.String),
    writeAReviewUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceGoogleMapsLinks" });

export interface GoogleMapsPlacesV1PlaceGenerativeSummary {
  /** The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available. */
  disclosureText?: GoogleTypeLocalizedText;
  /** The overview of the place. */
  overview?: GoogleTypeLocalizedText;
  /** A link where users can flag a problem with the overview summary. */
  overviewFlagContentUri?: string;
}

export const GoogleMapsPlacesV1PlaceGenerativeSummary: Schema.Codec<GoogleMapsPlacesV1PlaceGenerativeSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disclosureText: Schema.optional(GoogleTypeLocalizedText),
    overview: Schema.optional(GoogleTypeLocalizedText),
    overviewFlagContentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceGenerativeSummary" });

export interface GoogleMapsPlacesV1PlaceConsumerAlertDetailsLink {
  /** The title to show for the link. */
  title?: string;
  /** The uri of the link. */
  uri?: string;
}

export const GoogleMapsPlacesV1PlaceConsumerAlertDetailsLink: Schema.Codec<GoogleMapsPlacesV1PlaceConsumerAlertDetailsLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleMapsPlacesV1PlaceConsumerAlertDetailsLink",
  });

export interface GoogleMapsPlacesV1PlaceConsumerAlertDetails {
  /** The title to show together with the description. */
  title?: string;
  /** The description of the consumer alert message. */
  description?: string;
  /** The link to show together with the description to provide more information. */
  aboutLink?: GoogleMapsPlacesV1PlaceConsumerAlertDetailsLink;
}

export const GoogleMapsPlacesV1PlaceConsumerAlertDetails: Schema.Codec<GoogleMapsPlacesV1PlaceConsumerAlertDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    aboutLink: Schema.optional(GoogleMapsPlacesV1PlaceConsumerAlertDetailsLink),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceConsumerAlertDetails" });

export interface GoogleMapsPlacesV1PlaceConsumerAlert {
  /** The details of the consumer alert message. */
  details?: GoogleMapsPlacesV1PlaceConsumerAlertDetails;
  /** The overview of the consumer alert message. */
  overview?: string;
  /** The language code of the consumer alert message. This is a BCP 47 language code. */
  languageCode?: string;
}

export const GoogleMapsPlacesV1PlaceConsumerAlert: Schema.Codec<GoogleMapsPlacesV1PlaceConsumerAlert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(GoogleMapsPlacesV1PlaceConsumerAlertDetails),
    overview: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceConsumerAlert" });

export interface GoogleTypePostalAddress {
  /** Unstructured address lines describing the lower levels of an address. Because values in `address_lines` do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), `address_language` is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a `region_code` with all remaining information placed in the `address_lines`. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a `region_code` and `address_lines` and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). */
  addressLines?: ReadonlyArray<string>;
  /** Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district. */
  sublocality?: string;
  /** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated. */
  administrativeArea?: string;
  /** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
  revision?: number;
  /** Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave `locality` empty and use `address_lines`. */
  locality?: string;
  /** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
  languageCode?: string;
  /** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States). */
  postalCode?: string;
  /** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire). */
  sortingCode?: string;
  /** Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. */
  recipients?: ReadonlyArray<string>;
  /** Optional. The name of the organization at the address. */
  organization?: string;
  /** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
  regionCode?: string;
}

export const GoogleTypePostalAddress: Schema.Codec<GoogleTypePostalAddress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressLines: Schema.optional(Schema.Array(Schema.String)),
    sublocality: Schema.optional(Schema.String),
    administrativeArea: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.Number),
    locality: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
    sortingCode: Schema.optional(Schema.String),
    recipients: Schema.optional(Schema.Array(Schema.String)),
    organization: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypePostalAddress" });

export interface GoogleMapsPlacesV1PlaceAttribution {
  /** URI to the Place's data provider. */
  providerUri?: string;
  /** Name of the Place's data provider. */
  provider?: string;
}

export const GoogleMapsPlacesV1PlaceAttribution: Schema.Codec<GoogleMapsPlacesV1PlaceAttribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerUri: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PlaceAttribution" });

export interface GoogleMapsPlacesV1Review {
  /** The date when the author visited the place. This is truncated to the year and month of the visit. */
  visitDate?: GoogleTypeDate;
  /** The localized text of the review. */
  text?: GoogleTypeLocalizedText;
  /** A link where users can flag a problem with the review. */
  flagContentUri?: string;
  /** A link to show the review on Google Maps. */
  googleMapsUri?: string;
  /** The review text in its original language. */
  originalText?: GoogleTypeLocalizedText;
  /** A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. */
  relativePublishTimeDescription?: string;
  /** This review's author. */
  authorAttribution?: GoogleMapsPlacesV1AuthorAttribution;
  /** A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: `places/{place_id}/reviews/{review}`). */
  name?: string;
  /** Timestamp for the review. */
  publishTime?: string;
  /** A number between 1.0 and 5.0, also called the number of stars. */
  rating?: number;
}

export const GoogleMapsPlacesV1Review: Schema.Codec<GoogleMapsPlacesV1Review> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visitDate: Schema.optional(GoogleTypeDate),
    text: Schema.optional(GoogleTypeLocalizedText),
    flagContentUri: Schema.optional(Schema.String),
    googleMapsUri: Schema.optional(Schema.String),
    originalText: Schema.optional(GoogleTypeLocalizedText),
    relativePublishTimeDescription: Schema.optional(Schema.String),
    authorAttribution: Schema.optional(GoogleMapsPlacesV1AuthorAttribution),
    name: Schema.optional(Schema.String),
    publishTime: Schema.optional(Schema.String),
    rating: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleMapsPlacesV1Review" });

export interface GoogleMapsPlacesV1FuelOptionsFuelPrice {
  /** The price of the fuel. */
  price?: GoogleTypeMoney;
  /** The type of fuel. */
  type?:
    | "FUEL_TYPE_UNSPECIFIED"
    | "DIESEL"
    | "DIESEL_PLUS"
    | "REGULAR_UNLEADED"
    | "MIDGRADE"
    | "PREMIUM"
    | "SP91"
    | "SP91_E10"
    | "SP92"
    | "SP95"
    | "SP95_E10"
    | "SP98"
    | "SP99"
    | "SP100"
    | "LPG"
    | "E80"
    | "E85"
    | "E100"
    | "METHANE"
    | "BIO_DIESEL"
    | "TRUCK_DIESEL"
    | (string & {});
  /** The time the fuel price was last updated. */
  updateTime?: string;
}

export const GoogleMapsPlacesV1FuelOptionsFuelPrice: Schema.Codec<GoogleMapsPlacesV1FuelOptionsFuelPrice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    price: Schema.optional(GoogleTypeMoney),
    type: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1FuelOptionsFuelPrice" });

export interface GoogleMapsPlacesV1FuelOptions {
  /** The last known fuel price for each type of fuel this station has. There is one entry per fuel type this station has. Order is not important. */
  fuelPrices?: ReadonlyArray<GoogleMapsPlacesV1FuelOptionsFuelPrice>;
}

export const GoogleMapsPlacesV1FuelOptions: Schema.Codec<GoogleMapsPlacesV1FuelOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fuelPrices: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1FuelOptionsFuelPrice),
    ),
  }).annotate({ identifier: "GoogleMapsPlacesV1FuelOptions" });

export interface GoogleMapsPlacesV1Place {
  /** A human-readable phone number for the place, in international format. */
  internationalPhoneNumber?: string;
  /** Place has a children's menu. */
  menuForChildren?: boolean;
  /** If this Place is permanently closed and has moved to a new Place, this field contains the new Place's place ID. If this Place moved multiple times, this field will represent the first moved Place. This field will not be populated if this Place has not moved. */
  movedPlaceId?: string;
  /** Background color for icon_mask in hex format, e.g. #909CE1. */
  iconBackgroundColor?: string;
  /** The summary of amenities near the EV charging station. */
  evChargeAmenitySummary?: GoogleMapsPlacesV1PlaceEvChargeAmenitySummary;
  /** Information of ev charging options. */
  evChargeOptions?: GoogleMapsPlacesV1EVChargeOptions;
  /** The position of this place. */
  location?: GoogleTypeLatLng;
  /** A list of sub-destinations related to the place. */
  subDestinations?: ReadonlyArray<GoogleMapsPlacesV1PlaceSubDestination>;
  /** The price range associated with a Place. */
  priceRange?: GoogleMapsPlacesV1PriceRange;
  /** A full, human-readable address for this place. */
  formattedAddress?: string;
  /** The hours of operation for the next seven days (including today) incorporating any special opening hours. The time period starts at midnight on the date of the request and ends at 11:59 pm six days later. If the actual opening hours are outside of this range, the opening hours will be truncated. For example, if a place is open from 10pm yesterday to 6am today, the opening hours will be truncated to 12am today to 6am today. This field includes the special_days subfield of all hours, set for dates that have exceptional hours. */
  currentOpeningHours?: GoogleMapsPlacesV1PlaceOpeningHours;
  /** The total number of reviews (with or without text) for this place. */
  userRatingCount?: number;
  /** List of places in which the current place is located. */
  containingPlaces?: ReadonlyArray<GoogleMapsPlacesV1PlaceContainingPlace>;
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  timeZone?: GoogleTypeTimeZone;
  /** The unique identifier of a place. */
  id?: string;
  /** A set of type tags for this result. For example, "political" and "locality". For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types */
  types?: ReadonlyArray<string>;
  /** The date this place will open in the future. This field is only populated if the business status is FUTURE_OPENING. */
  openingDate?: GoogleTypeDate;
  /** This Place's resource name, in `places/{place_id}` format. Can be used to look up the Place. */
  name?: string;
  /** Plus code of the place location lat/long. */
  plusCode?: GoogleMapsPlacesV1PlacePlusCode;
  /** Specifies if the business supports takeout. */
  takeout?: boolean;
  /** A viewport suitable for displaying the place on an average-sized map. This viewport should not be used as the physical boundary or the service area of the business. */
  viewport?: GoogleGeoTypeViewport;
  /** Options of parking provided by the place. */
  parkingOptions?: GoogleMapsPlacesV1PlaceParkingOptions;
  /** The transit station information for the place. */
  transitStation?: GoogleMapsPlacesV1TransitStation;
  /** Place serves coffee. */
  servesCoffee?: boolean;
  /** A rating between 1.0 and 5.0, based on user reviews of this place. */
  rating?: number;
  /** Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. */
  regularSecondaryOpeningHours?: ReadonlyArray<GoogleMapsPlacesV1PlaceOpeningHours>;
  /** The regular hours are the hours of operation for a place on a typical schedule. Note that if a place is always open (24 hours), the `close` field will not be set. Clients can rely on always open (24 hours) being represented as an [`open`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Period) period containing [`day`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`, [`hour`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`, and [`minute`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`. */
  regularOpeningHours?: GoogleMapsPlacesV1PlaceOpeningHours;
  /** Information (including references) about photos of this place. A maximum of 10 photos can be returned. */
  photos?: ReadonlyArray<GoogleMapsPlacesV1Photo>;
  /** Specifies if the place serves beer. */
  servesBeer?: boolean;
  /** Repeated components for each locality level. Note the following facts about the address_components[] array: - The array of address components may contain more components than the formatted_address. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formatted_address. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of address_components varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response. */
  addressComponents?: ReadonlyArray<GoogleMapsPlacesV1PlaceAddressComponent>;
  /** Place provides outdoor seating. */
  outdoorSeating?: boolean;
  /** Payment options the place accepts. If a payment option data is not available, the payment option field will be unset. */
  paymentOptions?: GoogleMapsPlacesV1PlacePaymentOptions;
  /** The business status for the place. */
  businessStatus?:
    | "BUSINESS_STATUS_UNSPECIFIED"
    | "OPERATIONAL"
    | "CLOSED_TEMPORARILY"
    | "CLOSED_PERMANENTLY"
    | "FUTURE_OPENING"
    | (string & {});
  /** Place allows dogs. */
  allowsDogs?: boolean;
  /** Price level of the place. */
  priceLevel?:
    | "PRICE_LEVEL_UNSPECIFIED"
    | "PRICE_LEVEL_FREE"
    | "PRICE_LEVEL_INEXPENSIVE"
    | "PRICE_LEVEL_MODERATE"
    | "PRICE_LEVEL_EXPENSIVE"
    | "PRICE_LEVEL_VERY_EXPENSIVE"
    | (string & {});
  /** A URL providing more information about this place. */
  googleMapsUri?: string;
  /** Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered. */
  editorialSummary?: GoogleTypeLocalizedText;
  /** Place provides live music. */
  liveMusic?: boolean;
  /** Place is suitable for watching sports. */
  goodForWatchingSports?: boolean;
  /** Information about the accessibility options a place offers. */
  accessibilityOptions?: GoogleMapsPlacesV1PlaceAccessibilityOptions;
  /** Specifies if the place serves wine. */
  servesWine?: boolean;
  /** Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the special_days subfield of all hours, set for dates that have exceptional hours. */
  currentSecondaryOpeningHours?: ReadonlyArray<GoogleMapsPlacesV1PlaceOpeningHours>;
  /** Specifies if the place serves lunch. */
  servesLunch?: boolean;
  /** The address descriptor of the place. Address descriptors include additional information that help describe a location using landmarks and areas. See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage. */
  addressDescriptor?: GoogleMapsPlacesV1AddressDescriptor;
  /** Specifies if the place serves vegetarian food. */
  servesVegetarianFood?: boolean;
  /** AI-generated summary of the place using user reviews. */
  reviewSummary?: GoogleMapsPlacesV1PlaceReviewSummary;
  /** Specifies if the place serves dinner. */
  servesDinner?: boolean;
  /** Place is good for children. */
  goodForChildren?: boolean;
  /** The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain. */
  websiteUri?: string;
  /** Specifies if the place serves brunch. */
  servesBrunch?: boolean;
  /** A summary of points of interest near the place. */
  neighborhoodSummary?: GoogleMapsPlacesV1PlaceNeighborhoodSummary;
  /** Place has restroom. */
  restroom?: boolean;
  /** Links to trigger different Google Maps actions. */
  googleMapsLinks?: GoogleMapsPlacesV1PlaceGoogleMapsLinks;
  /** The primary type of the given result. This type must be one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types. The primary type may be missing if the place's primary type is not a supported type. When a primary type is present, it is always one of the types in the `types` field. */
  primaryType?: string;
  /** The display name of the primary type, localized to the request language if applicable. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types. The primary type may be missing if the place's primary type is not a supported type. */
  primaryTypeDisplayName?: GoogleTypeLocalizedText;
  /** Place serves cocktails. */
  servesCocktails?: boolean;
  /** A human-readable phone number for the place, in national format. */
  nationalPhoneNumber?: string;
  /** Specifies if the business supports curbside pickup. */
  curbsidePickup?: boolean;
  /** Specifies if the place serves breakfast. */
  servesBreakfast?: boolean;
  /** AI-generated summary of the place. */
  generativeSummary?: GoogleMapsPlacesV1PlaceGenerativeSummary;
  /** The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies. */
  consumerAlert?: GoogleMapsPlacesV1PlaceConsumerAlert;
  /** The address in postal address format. */
  postalAddress?: GoogleTypePostalAddress;
  /** Place accommodates groups. */
  goodForGroups?: boolean;
  /** Indicates whether the place is a pure service area business. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses may not have a physical address or location on Google Maps. */
  pureServiceAreaBusiness?: boolean;
  /** Specifies if the business supports indoor or outdoor seating options. */
  dineIn?: boolean;
  /** The localized name of the place, suitable as a short human-readable description. For example, "Google Sydney", "Starbucks", "Pyrmont", etc. */
  displayName?: GoogleTypeLocalizedText;
  /** A set of data provider that must be shown with this result. */
  attributions?: ReadonlyArray<GoogleMapsPlacesV1PlaceAttribution>;
  /** A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png"). */
  iconMaskBaseUri?: string;
  /** Specifies if the business supports delivery. */
  delivery?: boolean;
  /** The type label of the place on Google Maps, localized to the request language if applicable, for example, "Restaurant", "Cafe", "Airport", etc. The type label may be different from the primary type display name and may not be a supported type in [Places API Place Types table](https://developers.google.com/maps/documentation/places/web-service/place-types). */
  googleMapsTypeLabel?: GoogleTypeLocalizedText;
  /** The place's address in adr microformat: http://microformats.org/wiki/adr. */
  adrFormatAddress?: string;
  /** Place serves dessert. */
  servesDessert?: boolean;
  /** If this Place is permanently closed and has moved to a new Place, this field contains the new Place's resource name, in `places/{place_id}` format. If this Place moved multiple times, this field will represent the first moved place. This field will not be populated if this Place has not moved. */
  movedPlace?: string;
  /** A short, human-readable address for this place. */
  shortFormattedAddress?: string;
  /** List of reviews about this place, sorted by relevance. A maximum of 5 reviews can be returned. */
  reviews?: ReadonlyArray<GoogleMapsPlacesV1Review>;
  /** Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes. */
  utcOffsetMinutes?: number;
  /** The most recent information about fuel options in a gas station. This information is updated regularly. */
  fuelOptions?: GoogleMapsPlacesV1FuelOptions;
  /** Specifies if the place supports reservations. */
  reservable?: boolean;
}

export const GoogleMapsPlacesV1Place: Schema.Codec<GoogleMapsPlacesV1Place> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internationalPhoneNumber: Schema.optional(Schema.String),
    menuForChildren: Schema.optional(Schema.Boolean),
    movedPlaceId: Schema.optional(Schema.String),
    iconBackgroundColor: Schema.optional(Schema.String),
    evChargeAmenitySummary: Schema.optional(
      GoogleMapsPlacesV1PlaceEvChargeAmenitySummary,
    ),
    evChargeOptions: Schema.optional(GoogleMapsPlacesV1EVChargeOptions),
    location: Schema.optional(GoogleTypeLatLng),
    subDestinations: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceSubDestination),
    ),
    priceRange: Schema.optional(GoogleMapsPlacesV1PriceRange),
    formattedAddress: Schema.optional(Schema.String),
    currentOpeningHours: Schema.optional(GoogleMapsPlacesV1PlaceOpeningHours),
    userRatingCount: Schema.optional(Schema.Number),
    containingPlaces: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceContainingPlace),
    ),
    timeZone: Schema.optional(GoogleTypeTimeZone),
    id: Schema.optional(Schema.String),
    types: Schema.optional(Schema.Array(Schema.String)),
    openingDate: Schema.optional(GoogleTypeDate),
    name: Schema.optional(Schema.String),
    plusCode: Schema.optional(GoogleMapsPlacesV1PlacePlusCode),
    takeout: Schema.optional(Schema.Boolean),
    viewport: Schema.optional(GoogleGeoTypeViewport),
    parkingOptions: Schema.optional(GoogleMapsPlacesV1PlaceParkingOptions),
    transitStation: Schema.optional(GoogleMapsPlacesV1TransitStation),
    servesCoffee: Schema.optional(Schema.Boolean),
    rating: Schema.optional(Schema.Number),
    regularSecondaryOpeningHours: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceOpeningHours),
    ),
    regularOpeningHours: Schema.optional(GoogleMapsPlacesV1PlaceOpeningHours),
    photos: Schema.optional(Schema.Array(GoogleMapsPlacesV1Photo)),
    servesBeer: Schema.optional(Schema.Boolean),
    addressComponents: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceAddressComponent),
    ),
    outdoorSeating: Schema.optional(Schema.Boolean),
    paymentOptions: Schema.optional(GoogleMapsPlacesV1PlacePaymentOptions),
    businessStatus: Schema.optional(Schema.String),
    allowsDogs: Schema.optional(Schema.Boolean),
    priceLevel: Schema.optional(Schema.String),
    googleMapsUri: Schema.optional(Schema.String),
    editorialSummary: Schema.optional(GoogleTypeLocalizedText),
    liveMusic: Schema.optional(Schema.Boolean),
    goodForWatchingSports: Schema.optional(Schema.Boolean),
    accessibilityOptions: Schema.optional(
      GoogleMapsPlacesV1PlaceAccessibilityOptions,
    ),
    servesWine: Schema.optional(Schema.Boolean),
    currentSecondaryOpeningHours: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceOpeningHours),
    ),
    servesLunch: Schema.optional(Schema.Boolean),
    addressDescriptor: Schema.optional(GoogleMapsPlacesV1AddressDescriptor),
    servesVegetarianFood: Schema.optional(Schema.Boolean),
    reviewSummary: Schema.optional(GoogleMapsPlacesV1PlaceReviewSummary),
    servesDinner: Schema.optional(Schema.Boolean),
    goodForChildren: Schema.optional(Schema.Boolean),
    websiteUri: Schema.optional(Schema.String),
    servesBrunch: Schema.optional(Schema.Boolean),
    neighborhoodSummary: Schema.optional(
      GoogleMapsPlacesV1PlaceNeighborhoodSummary,
    ),
    restroom: Schema.optional(Schema.Boolean),
    googleMapsLinks: Schema.optional(GoogleMapsPlacesV1PlaceGoogleMapsLinks),
    primaryType: Schema.optional(Schema.String),
    primaryTypeDisplayName: Schema.optional(GoogleTypeLocalizedText),
    servesCocktails: Schema.optional(Schema.Boolean),
    nationalPhoneNumber: Schema.optional(Schema.String),
    curbsidePickup: Schema.optional(Schema.Boolean),
    servesBreakfast: Schema.optional(Schema.Boolean),
    generativeSummary: Schema.optional(
      GoogleMapsPlacesV1PlaceGenerativeSummary,
    ),
    consumerAlert: Schema.optional(GoogleMapsPlacesV1PlaceConsumerAlert),
    postalAddress: Schema.optional(GoogleTypePostalAddress),
    goodForGroups: Schema.optional(Schema.Boolean),
    pureServiceAreaBusiness: Schema.optional(Schema.Boolean),
    dineIn: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(GoogleTypeLocalizedText),
    attributions: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1PlaceAttribution),
    ),
    iconMaskBaseUri: Schema.optional(Schema.String),
    delivery: Schema.optional(Schema.Boolean),
    googleMapsTypeLabel: Schema.optional(GoogleTypeLocalizedText),
    adrFormatAddress: Schema.optional(Schema.String),
    servesDessert: Schema.optional(Schema.Boolean),
    movedPlace: Schema.optional(Schema.String),
    shortFormattedAddress: Schema.optional(Schema.String),
    reviews: Schema.optional(Schema.Array(GoogleMapsPlacesV1Review)),
    utcOffsetMinutes: Schema.optional(Schema.Number),
    fuelOptions: Schema.optional(GoogleMapsPlacesV1FuelOptions),
    reservable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleMapsPlacesV1Place" });

export interface GoogleMapsPlacesV1RoutingSummaryLeg {
  /** The time it takes to complete this leg of the trip. */
  duration?: string;
  /** The distance of this leg of the trip. */
  distanceMeters?: number;
}

export const GoogleMapsPlacesV1RoutingSummaryLeg: Schema.Codec<GoogleMapsPlacesV1RoutingSummaryLeg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    distanceMeters: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleMapsPlacesV1RoutingSummaryLeg" });

export interface GoogleMapsPlacesV1RoutingSummary {
  /** The legs of the trip. When you calculate travel duration and distance from a set origin, `legs` contains a single leg containing the duration and distance from the origin to the destination. When you do a search along route, `legs` contains two legs: one from the origin to place, and one from the place to the destination. */
  legs?: ReadonlyArray<GoogleMapsPlacesV1RoutingSummaryLeg>;
  /** A link to show directions on Google Maps using the waypoints from the given routing summary. The route generated by this link is not guaranteed to be the same as the route used to generate the routing summary. The link uses information provided in the request, from fields including `routingParameters` and `searchAlongRouteParameters` when applicable, to generate the directions link. */
  directionsUri?: string;
}

export const GoogleMapsPlacesV1RoutingSummary: Schema.Codec<GoogleMapsPlacesV1RoutingSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    legs: Schema.optional(Schema.Array(GoogleMapsPlacesV1RoutingSummaryLeg)),
    directionsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1RoutingSummary" });

export interface GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange {
  startIndex?: number;
  endIndex?: number;
}

export const GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange: Schema.Codec<GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    endIndex: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange",
  });

export interface GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText {
  /** The list of the ranges of the highlighted text. */
  highlightedTextRanges?: ReadonlyArray<GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange>;
  text?: string;
}

export const GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText: Schema.Codec<GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highlightedTextRanges: Schema.optional(
      Schema.Array(
        GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange,
      ),
    ),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText",
  });

export interface GoogleMapsPlacesV1ContextualContentJustificationReviewJustification {
  highlightedText?: GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText;
  /** The review that the highlighted text is generated from. */
  review?: GoogleMapsPlacesV1Review;
}

export const GoogleMapsPlacesV1ContextualContentJustificationReviewJustification: Schema.Codec<GoogleMapsPlacesV1ContextualContentJustificationReviewJustification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highlightedText: Schema.optional(
      GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText,
    ),
    review: Schema.optional(GoogleMapsPlacesV1Review),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1ContextualContentJustificationReviewJustification",
  });

export interface GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification {
  /** If a place provides takeout. */
  takeout?: boolean;
  /** If a place provides dine-in. */
  dineIn?: boolean;
  /** If a place provides delivery. */
  delivery?: boolean;
}

export const GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification: Schema.Codec<GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    takeout: Schema.optional(Schema.Boolean),
    dineIn: Schema.optional(Schema.Boolean),
    delivery: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification",
  });

export interface GoogleMapsPlacesV1ContextualContentJustification {
  reviewJustification?: GoogleMapsPlacesV1ContextualContentJustificationReviewJustification;
  businessAvailabilityAttributesJustification?: GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification;
}

export const GoogleMapsPlacesV1ContextualContentJustification: Schema.Codec<GoogleMapsPlacesV1ContextualContentJustification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewJustification: Schema.optional(
      GoogleMapsPlacesV1ContextualContentJustificationReviewJustification,
    ),
    businessAvailabilityAttributesJustification: Schema.optional(
      GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification,
    ),
  }).annotate({
    identifier: "GoogleMapsPlacesV1ContextualContentJustification",
  });

export interface GoogleMapsPlacesV1ContextualContent {
  /** Justifications for the place. */
  justifications?: ReadonlyArray<GoogleMapsPlacesV1ContextualContentJustification>;
  /** Information (including references) about photos of this place, contextual to the place query. */
  photos?: ReadonlyArray<GoogleMapsPlacesV1Photo>;
  /** List of reviews about this place, contextual to the place query. */
  reviews?: ReadonlyArray<GoogleMapsPlacesV1Review>;
}

export const GoogleMapsPlacesV1ContextualContent: Schema.Codec<GoogleMapsPlacesV1ContextualContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justifications: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1ContextualContentJustification),
    ),
    photos: Schema.optional(Schema.Array(GoogleMapsPlacesV1Photo)),
    reviews: Schema.optional(Schema.Array(GoogleMapsPlacesV1Review)),
  }).annotate({ identifier: "GoogleMapsPlacesV1ContextualContent" });

export interface GoogleMapsPlacesV1SearchTextResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. */
  nextPageToken?: string;
  /** A link allows the user to search with the same text query as specified in the request on Google Maps. */
  searchUri?: string;
  /** A list of places that meet the user's text search criteria. */
  places?: ReadonlyArray<GoogleMapsPlacesV1Place>;
  /** A list of routing summaries where each entry associates to the corresponding place in the same index in the `places` field. If the routing summary is not available for one of the places, it will contain an empty entry. This list will have as many entries as the list of places if requested. */
  routingSummaries?: ReadonlyArray<GoogleMapsPlacesV1RoutingSummary>;
  /** Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. A list of contextual contents where each entry associates to the corresponding place in the same index in the places field. The contents that are relevant to the `text_query` in the request are preferred. If the contextual content is not available for one of the places, it will return non-contextual content. It will be empty only when the content is unavailable for this place. This list will have as many entries as the list of places if requested. */
  contextualContents?: ReadonlyArray<GoogleMapsPlacesV1ContextualContent>;
}

export const GoogleMapsPlacesV1SearchTextResponse: Schema.Codec<GoogleMapsPlacesV1SearchTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    searchUri: Schema.optional(Schema.String),
    places: Schema.optional(Schema.Array(GoogleMapsPlacesV1Place)),
    routingSummaries: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1RoutingSummary),
    ),
    contextualContents: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1ContextualContent),
    ),
  }).annotate({ identifier: "GoogleMapsPlacesV1SearchTextResponse" });

export interface GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction {
  /** Contains the human-readable name for the returned result. For establishment results, this is usually the business name and address. `text` is recommended for developers who wish to show a single UI element. Developers who wish to show two separate, but related, UI elements may want to use `structured_format` instead. They are two different ways to represent a Place prediction. Users should not try to parse `structured_format` into `text` or vice versa. This text may be different from the `display_name` returned by GetPlace. May be in mixed languages if the request `input` and `language_code` are in different languages or if the Place does not have a translation from the local language to `language_code`. */
  text?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
  /** List of types that apply to this Place from Table A or Table B in https://developers.google.com/maps/documentation/places/web-service/place-types. A type is a categorization of a Place. Places with shared types will share similar characteristics. */
  types?: ReadonlyArray<string>;
  /** The unique identifier of the suggested Place. This identifier can be used in other APIs that accept Place IDs. */
  placeId?: string;
  /** A breakdown of the Place prediction into main text containing the name of the Place and secondary text containing additional disambiguating features (such as a city or region). `structured_format` is recommended for developers who wish to show two separate, but related, UI elements. Developers who wish to show a single UI element may want to use `text` instead. They are two different ways to represent a Place prediction. Users should not try to parse `structured_format` into `text` or vice versa. */
  structuredFormat?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat;
  /** The length of the geodesic in meters from `origin` if `origin` is specified. Certain predictions such as routes may not populate this field. */
  distanceMeters?: number;
  /** The resource name of the suggested Place. This name can be used in other APIs that accept Place names. */
  place?: string;
}

export const GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText,
    ),
    types: Schema.optional(Schema.Array(Schema.String)),
    placeId: Schema.optional(Schema.String),
    structuredFormat: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat,
    ),
    distanceMeters: Schema.optional(Schema.Number),
    place: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction",
  });

export interface GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion {
  /** A prediction for a Place. */
  placePrediction?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction;
  /** A prediction for a query. */
  queryPrediction?: GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction;
}

export const GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placePrediction: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction,
    ),
    queryPrediction: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction,
    ),
  }).annotate({
    identifier: "GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion",
  });

export interface GoogleMapsPlacesV1AutocompletePlacesResponse {
  /** Contains a list of suggestions, ordered in descending order of relevance. */
  suggestions?: ReadonlyArray<GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion>;
}

export const GoogleMapsPlacesV1AutocompletePlacesResponse: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion),
    ),
  }).annotate({ identifier: "GoogleMapsPlacesV1AutocompletePlacesResponse" });

export interface GoogleMapsPlacesV1PhotoMedia {
  /** The resource name of a photo media in the format: `places/{place_id}/photos/{photo_reference}/media`. */
  name?: string;
  /** A short-lived uri that can be used to render the photo. */
  photoUri?: string;
}

export const GoogleMapsPlacesV1PhotoMedia: Schema.Codec<GoogleMapsPlacesV1PhotoMedia> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    photoUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1PhotoMedia" });

export interface GoogleMapsPlacesV1SearchTextRequestLocationBias {
  /** A rectangle box defined by northeast and southwest corner. `rectangle.high()` must be the northeast point of the rectangle viewport. `rectangle.low()` must be the southwest point of the rectangle viewport. `rectangle.low().latitude()` cannot be greater than `rectangle.high().latitude()`. This will result in an empty latitude range. A rectangle viewport cannot be wider than 180 degrees. */
  rectangle?: GoogleGeoTypeViewport;
  /** A circle defined by center point and radius. */
  circle?: GoogleMapsPlacesV1Circle;
}

export const GoogleMapsPlacesV1SearchTextRequestLocationBias: Schema.Codec<GoogleMapsPlacesV1SearchTextRequestLocationBias> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rectangle: Schema.optional(GoogleGeoTypeViewport),
    circle: Schema.optional(GoogleMapsPlacesV1Circle),
  }).annotate({
    identifier: "GoogleMapsPlacesV1SearchTextRequestLocationBias",
  });

export interface GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias {
  /** A viewport defined by a northeast and a southwest corner. */
  rectangle?: GoogleGeoTypeViewport;
  /** A circle defined by a center point and radius. */
  circle?: GoogleMapsPlacesV1Circle;
}

export const GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rectangle: Schema.optional(GoogleGeoTypeViewport),
    circle: Schema.optional(GoogleMapsPlacesV1Circle),
  }).annotate({
    identifier: "GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias",
  });

export interface GoogleMapsPlacesV1Polyline {
  /** An [encoded polyline](https://developers.google.com/maps/documentation/utilities/polylinealgorithm), as returned by the [Routes API by default](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes#polylineencoding). See the [encoder](https://developers.google.com/maps/documentation/utilities/polylineutility) and [decoder](https://developers.google.com/maps/documentation/routes/polylinedecoder) tools. */
  encodedPolyline?: string;
}

export const GoogleMapsPlacesV1Polyline: Schema.Codec<GoogleMapsPlacesV1Polyline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encodedPolyline: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1Polyline" });

export interface GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters {
  /** Required. The route polyline. */
  polyline?: GoogleMapsPlacesV1Polyline;
}

export const GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters: Schema.Codec<GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    polyline: Schema.optional(GoogleMapsPlacesV1Polyline),
  }).annotate({
    identifier: "GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters",
  });

export interface GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction {
  /** A viewport defined by a northeast and a southwest corner. */
  rectangle?: GoogleGeoTypeViewport;
  /** A circle defined by a center point and radius. */
  circle?: GoogleMapsPlacesV1Circle;
}

export const GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rectangle: Schema.optional(GoogleGeoTypeViewport),
    circle: Schema.optional(GoogleMapsPlacesV1Circle),
  }).annotate({
    identifier:
      "GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction",
  });

export interface GoogleMapsPlacesV1SearchNearbyRequest {
  /** Excluded Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If the client provides both included_types (e.g. restaurant) and excluded_types (e.g. cafe), then the response should include places that are restaurant but not cafe. The response includes places that match at least one of the included_types and none of the excluded_types. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
  excludedTypes?: ReadonlyArray<string>;
  /** The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. */
  regionCode?: string;
  /** Optional. Parameters that affect the routing to the search results. */
  routingParameters?: GoogleMapsPlacesV1RoutingParameters;
  /** Included Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
  includedTypes?: ReadonlyArray<string>;
  /** Excluded primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
  excludedPrimaryTypes?: ReadonlyArray<string>;
  /** Optional. If true, include businesses that are not yet open but will open in the future. */
  includeFutureOpeningBusinesses?: boolean;
  /** Maximum number of results to return. It must be between 1 and 20 (default), inclusively. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned. */
  maxResultCount?: number;
  /** Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. */
  languageCode?: string;
  /** Included primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. A place can only have a single primary type from the supported types table associated with it. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
  includedPrimaryTypes?: ReadonlyArray<string>;
  /** How results will be ranked in the response. */
  rankPreference?:
    | "RANK_PREFERENCE_UNSPECIFIED"
    | "DISTANCE"
    | "POPULARITY"
    | (string & {});
  /** Required. The region to search. */
  locationRestriction?: GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction;
}

export const GoogleMapsPlacesV1SearchNearbyRequest: Schema.Codec<GoogleMapsPlacesV1SearchNearbyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludedTypes: Schema.optional(Schema.Array(Schema.String)),
    regionCode: Schema.optional(Schema.String),
    routingParameters: Schema.optional(GoogleMapsPlacesV1RoutingParameters),
    includedTypes: Schema.optional(Schema.Array(Schema.String)),
    excludedPrimaryTypes: Schema.optional(Schema.Array(Schema.String)),
    includeFutureOpeningBusinesses: Schema.optional(Schema.Boolean),
    maxResultCount: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    includedPrimaryTypes: Schema.optional(Schema.Array(Schema.String)),
    rankPreference: Schema.optional(Schema.String),
    locationRestriction: Schema.optional(
      GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction,
    ),
  }).annotate({ identifier: "GoogleMapsPlacesV1SearchNearbyRequest" });

export interface GoogleMapsPlacesV1SearchNearbyResponse {
  /** A list of places that meets user's requirements like places types, number of places and specific location restriction. */
  places?: ReadonlyArray<GoogleMapsPlacesV1Place>;
  /** A list of routing summaries where each entry associates to the corresponding place in the same index in the `places` field. If the routing summary is not available for one of the places, it will contain an empty entry. This list should have as many entries as the list of places if requested. */
  routingSummaries?: ReadonlyArray<GoogleMapsPlacesV1RoutingSummary>;
}

export const GoogleMapsPlacesV1SearchNearbyResponse: Schema.Codec<GoogleMapsPlacesV1SearchNearbyResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    places: Schema.optional(Schema.Array(GoogleMapsPlacesV1Place)),
    routingSummaries: Schema.optional(
      Schema.Array(GoogleMapsPlacesV1RoutingSummary),
    ),
  }).annotate({ identifier: "GoogleMapsPlacesV1SearchNearbyResponse" });

export interface GoogleMapsPlacesV1SearchTextRequestLocationRestriction {
  /** A rectangle box defined by northeast and southwest corner. `rectangle.high()` must be the northeast point of the rectangle viewport. `rectangle.low()` must be the southwest point of the rectangle viewport. `rectangle.low().latitude()` cannot be greater than `rectangle.high().latitude()`. This will result in an empty latitude range. A rectangle viewport cannot be wider than 180 degrees. */
  rectangle?: GoogleGeoTypeViewport;
}

export const GoogleMapsPlacesV1SearchTextRequestLocationRestriction: Schema.Codec<GoogleMapsPlacesV1SearchTextRequestLocationRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rectangle: Schema.optional(GoogleGeoTypeViewport),
  }).annotate({
    identifier: "GoogleMapsPlacesV1SearchTextRequestLocationRestriction",
  });

export interface GoogleMapsPlacesV1SearchTextRequestEVOptions {
  /** Optional. Minimum required charging rate in kilowatts. A place with a charging rate less than the specified rate is filtered out. */
  minimumChargingRateKw?: number;
  /** Optional. The list of preferred EV connector types. A place that does not support any of the listed connector types is filtered out. */
  connectorTypes?: ReadonlyArray<
    | "EV_CONNECTOR_TYPE_UNSPECIFIED"
    | "EV_CONNECTOR_TYPE_OTHER"
    | "EV_CONNECTOR_TYPE_J1772"
    | "EV_CONNECTOR_TYPE_TYPE_2"
    | "EV_CONNECTOR_TYPE_CHADEMO"
    | "EV_CONNECTOR_TYPE_CCS_COMBO_1"
    | "EV_CONNECTOR_TYPE_CCS_COMBO_2"
    | "EV_CONNECTOR_TYPE_TESLA"
    | "EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T"
    | "EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET"
    | "EV_CONNECTOR_TYPE_NACS"
    | (string & {})
  >;
}

export const GoogleMapsPlacesV1SearchTextRequestEVOptions: Schema.Codec<GoogleMapsPlacesV1SearchTextRequestEVOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumChargingRateKw: Schema.optional(Schema.Number),
    connectorTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleMapsPlacesV1SearchTextRequestEVOptions" });

export interface GoogleMapsPlacesV1SearchTextRequest {
  /** Optional. Additional parameters proto for searching along a route. */
  searchAlongRouteParameters?: GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters;
  /** Used to set strict type filtering for included_type. If set to true, only results of the same type will be returned. Default to false. */
  strictTypeFiltering?: boolean;
  /** The region to search. This location serves as a restriction which means results outside given location will not be returned. Cannot be set along with location_bias. */
  locationRestriction?: GoogleMapsPlacesV1SearchTextRequestLocationRestriction;
  /** How results will be ranked in the response. */
  rankPreference?:
    | "RANK_PREFERENCE_UNSPECIFIED"
    | "DISTANCE"
    | "RELEVANCE"
    | (string & {});
  /** Used to restrict the search to places that are currently open. The default is false. */
  openNow?: boolean;
  /** The region to search. This location serves as a bias which means results around given location might be returned. Cannot be set along with location_restriction. */
  locationBias?: GoogleMapsPlacesV1SearchTextRequestLocationBias;
  /** Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. */
  languageCode?: string;
  /** Optional. Include pure service area businesses if the field is set to true. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses do not have a physical address or location on Google Maps. Places will not return fields including `location`, `plus_code`, and other location related fields for these businesses. */
  includePureServiceAreaBusinesses?: boolean;
  /** The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. */
  regionCode?: string;
  /** Filter out results whose average user rating is strictly less than this limit. A valid value must be a float between 0 and 5 (inclusively) at a 0.5 cadence i.e. [0, 0.5, 1.0, ... , 5.0] inclusively. The input rating will round up to the nearest 0.5(ceiling). For instance, a rating of 0.6 will eliminate all results with a less than 1.0 rating. */
  minRating?: number;
  /** Optional. The maximum number of results per page that can be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be passed to `page_token` to get the next page of results in subsequent requests. If 0 or no value is provided, a default of 20 is used. The maximum value is 20; values above 20 will be set to 20. Negative values will return an INVALID_ARGUMENT error. If both `max_result_count` and `page_size` are specified, `max_result_count` will be ignored. */
  pageSize?: number;
  /** Optional. Set the searchable EV options of a place search request. */
  evOptions?: GoogleMapsPlacesV1SearchTextRequestEVOptions;
  /** Optional. Additional parameters for routing to results. */
  routingParameters?: GoogleMapsPlacesV1RoutingParameters;
  /** Required. The text query for textual search. */
  textQuery?: string;
  /** Used to restrict the search to places that are marked as certain price levels. Users can choose any combinations of price levels. Default to select all price levels. */
  priceLevels?: ReadonlyArray<
    | "PRICE_LEVEL_UNSPECIFIED"
    | "PRICE_LEVEL_FREE"
    | "PRICE_LEVEL_INEXPENSIVE"
    | "PRICE_LEVEL_MODERATE"
    | "PRICE_LEVEL_EXPENSIVE"
    | "PRICE_LEVEL_VERY_EXPENSIVE"
    | (string & {})
  >;
  /** Optional. A page token, received from a previous TextSearch call. Provide this to retrieve the subsequent page. When paginating, all parameters other than `page_token`, `page_size`, and `max_result_count` provided to TextSearch must match the initial call that provided the page token. Otherwise an INVALID_ARGUMENT error is returned. */
  pageToken?: string;
  /** Deprecated: Use `page_size` instead. The maximum number of results per page that can be returned. If the number of available results is larger than `max_result_count`, a `next_page_token` is returned which can be passed to `page_token` to get the next page of results in subsequent requests. If 0 or no value is provided, a default of 20 is used. The maximum value is 20; values above 20 will be coerced to 20. Negative values will return an INVALID_ARGUMENT error. If both `max_result_count` and `page_size` are specified, `max_result_count` will be ignored. */
  maxResultCount?: number;
  /** Optional. If true, include businesses that are not yet open but will open in the future. */
  includeFutureOpeningBusinesses?: boolean;
  /** The requested place type. Full list of types supported: https://developers.google.com/maps/documentation/places/web-service/place-types. Only support one included type. */
  includedType?: string;
}

export const GoogleMapsPlacesV1SearchTextRequest: Schema.Codec<GoogleMapsPlacesV1SearchTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchAlongRouteParameters: Schema.optional(
      GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters,
    ),
    strictTypeFiltering: Schema.optional(Schema.Boolean),
    locationRestriction: Schema.optional(
      GoogleMapsPlacesV1SearchTextRequestLocationRestriction,
    ),
    rankPreference: Schema.optional(Schema.String),
    openNow: Schema.optional(Schema.Boolean),
    locationBias: Schema.optional(
      GoogleMapsPlacesV1SearchTextRequestLocationBias,
    ),
    languageCode: Schema.optional(Schema.String),
    includePureServiceAreaBusinesses: Schema.optional(Schema.Boolean),
    regionCode: Schema.optional(Schema.String),
    minRating: Schema.optional(Schema.Number),
    pageSize: Schema.optional(Schema.Number),
    evOptions: Schema.optional(GoogleMapsPlacesV1SearchTextRequestEVOptions),
    routingParameters: Schema.optional(GoogleMapsPlacesV1RoutingParameters),
    textQuery: Schema.optional(Schema.String),
    priceLevels: Schema.optional(Schema.Array(Schema.String)),
    pageToken: Schema.optional(Schema.String),
    maxResultCount: Schema.optional(Schema.Number),
    includeFutureOpeningBusinesses: Schema.optional(Schema.Boolean),
    includedType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleMapsPlacesV1SearchTextRequest" });

export interface GoogleMapsPlacesV1AutocompletePlacesRequest {
  /** Optional. Restrict results to a specified location. At most one of `location_bias` or `location_restriction` should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal. */
  locationRestriction?: GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction;
  /** Optional. The origin point from which to calculate geodesic distance to the destination (returned as `distance_meters`). If this value is omitted, geodesic distance will not be returned. */
  origin?: GoogleTypeLatLng;
  /** Optional. Bias results to a specified location. At most one of `location_bias` or `location_restriction` should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal. */
  locationBias?: GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias;
  /** Optional. A zero-based Unicode character offset of `input` indicating the cursor position in `input`. The cursor position may influence what predictions are returned. If empty, defaults to the length of `input`. */
  inputOffset?: number;
  /** Optional. The language in which to return results. Defaults to en-US. The results may be in mixed languages if the language used in `input` is different from `language_code` or if the returned Place does not have a translation from the local language to `language_code`. */
  languageCode?: string;
  /** Optional. Include pure service area businesses if the field is set to true. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses do not have a physical address or location on Google Maps. Places will not return fields including `location`, `plus_code`, and other location related fields for these businesses. */
  includePureServiceAreaBusinesses?: boolean;
  /** Optional. The region code, specified as a CLDR two-character region code. This affects address formatting, result ranking, and may influence what results are returned. This does not restrict results to the specified region. To restrict results to a region, use `region_code_restriction`. */
  regionCode?: string;
  /** Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned. The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `session_token` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately). We recommend the following guidelines: * Use session tokens for all Place Autocomplete calls. * Generate a fresh token for each session. Using a version 4 UUID is recommended. * Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project. * Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually. */
  sessionToken?: string;
  /** Required. The text string on which to search. */
  input?: string;
  /** Optional. If true, the response will include both Place and query predictions. Otherwise the response will only return Place predictions. */
  includeQueryPredictions?: boolean;
  /** Optional. Included primary Place type (for example, "restaurant" or "gas_station") in Place Types (https://developers.google.com/maps/documentation/places/web-service/place-types), or only `(regions)`, or only `(cities)`. A Place is only returned if its primary type is included in this list. Up to 5 values can be specified. If no types are specified, all Place types are returned. */
  includedPrimaryTypes?: ReadonlyArray<string>;
  /** Optional. If true, include businesses that are not yet open but will open in the future. */
  includeFutureOpeningBusinesses?: boolean;
  /** Optional. Only include results in the specified regions, specified as up to 15 CLDR two-character region codes. An empty set will not restrict the results. If both `location_restriction` and `included_region_codes` are set, the results will be located in the area of intersection. */
  includedRegionCodes?: ReadonlyArray<string>;
}

export const GoogleMapsPlacesV1AutocompletePlacesRequest: Schema.Codec<GoogleMapsPlacesV1AutocompletePlacesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationRestriction: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction,
    ),
    origin: Schema.optional(GoogleTypeLatLng),
    locationBias: Schema.optional(
      GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias,
    ),
    inputOffset: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    includePureServiceAreaBusinesses: Schema.optional(Schema.Boolean),
    regionCode: Schema.optional(Schema.String),
    sessionToken: Schema.optional(Schema.String),
    input: Schema.optional(Schema.String),
    includeQueryPredictions: Schema.optional(Schema.Boolean),
    includedPrimaryTypes: Schema.optional(Schema.Array(Schema.String)),
    includeFutureOpeningBusinesses: Schema.optional(Schema.Boolean),
    includedRegionCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleMapsPlacesV1AutocompletePlacesRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface AutocompletePlacesRequest {
  /** Request body */
  body?: GoogleMapsPlacesV1AutocompletePlacesRequest;
}

export const AutocompletePlacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleMapsPlacesV1AutocompletePlacesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/places:autocomplete", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<AutocompletePlacesRequest>;

export type AutocompletePlacesResponse =
  GoogleMapsPlacesV1AutocompletePlacesResponse;
export const AutocompletePlacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleMapsPlacesV1AutocompletePlacesResponse;

export type AutocompletePlacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns predictions for the given input. */
export const autocompletePlaces: API.OperationMethod<
  AutocompletePlacesRequest,
  AutocompletePlacesResponse,
  AutocompletePlacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AutocompletePlacesRequest,
  output: AutocompletePlacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPlacesRequest {
  /** Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned. The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `session_token` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately). We recommend the following guidelines: * Use session tokens for all Place Autocomplete calls. * Generate a fresh token for each session. Using a version 4 UUID is recommended. * Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project. * Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually. */
  sessionToken?: string;
  /** Required. The resource name of a place, in the `places/{place_id}` format. */
  name: string;
  /** Optional. Place details will be displayed with the preferred language if available. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. */
  languageCode?: string;
  /** Optional. The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. */
  regionCode?: string;
}

export const GetPlacesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sessionToken: Schema.optional(Schema.String).pipe(
    T.HttpQuery("sessionToken"),
  ),
  name: Schema.String.pipe(T.HttpPath("name")),
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
  regionCode: Schema.optional(Schema.String).pipe(T.HttpQuery("regionCode")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetPlacesRequest>;

export type GetPlacesResponse = GoogleMapsPlacesV1Place;
export const GetPlacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleMapsPlacesV1Place;

export type GetPlacesError = DefaultErrors | NotFound | Forbidden;

/** Get the details of a place based on its resource name, which is a string in the `places/{place_id}` format. */
export const getPlaces: API.OperationMethod<
  GetPlacesRequest,
  GetPlacesResponse,
  GetPlacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlacesRequest,
  output: GetPlacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchNearbyPlacesRequest {
  /** Request body */
  body?: GoogleMapsPlacesV1SearchNearbyRequest;
}

export const SearchNearbyPlacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleMapsPlacesV1SearchNearbyRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/places:searchNearby", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SearchNearbyPlacesRequest>;

export type SearchNearbyPlacesResponse = GoogleMapsPlacesV1SearchNearbyResponse;
export const SearchNearbyPlacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleMapsPlacesV1SearchNearbyResponse;

export type SearchNearbyPlacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Search for places near locations. */
export const searchNearbyPlaces: API.OperationMethod<
  SearchNearbyPlacesRequest,
  SearchNearbyPlacesResponse,
  SearchNearbyPlacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchNearbyPlacesRequest,
  output: SearchNearbyPlacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchTextPlacesRequest {
  /** Request body */
  body?: GoogleMapsPlacesV1SearchTextRequest;
}

export const SearchTextPlacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleMapsPlacesV1SearchTextRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/places:searchText", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SearchTextPlacesRequest>;

export type SearchTextPlacesResponse = GoogleMapsPlacesV1SearchTextResponse;
export const SearchTextPlacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleMapsPlacesV1SearchTextResponse;

export type SearchTextPlacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Text query based place search. */
export const searchTextPlaces: API.OperationMethod<
  SearchTextPlacesRequest,
  SearchTextPlacesResponse,
  SearchTextPlacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchTextPlacesRequest,
  output: SearchTextPlacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMediaPlacesPhotosRequest {
  /** Optional. If set, skip the default HTTP redirect behavior and render a text format (for example, in JSON format for HTTP use case) response. If not set, an HTTP redirect will be issued to redirect the call to the image media. This option is ignored for non-HTTP requests. */
  skipHttpRedirect?: boolean;
  /** Optional. Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned. */
  maxHeightPx?: number;
  /** Optional. Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned. */
  maxWidthPx?: number;
  /** Required. The resource name of a photo media in the format: `places/{place_id}/photos/{photo_reference}/media`. The resource name of a photo as returned in a Place object's `photos.name` field comes with the format `places/{place_id}/photos/{photo_reference}`. You need to append `/media` at the end of the photo resource to get the photo media resource name. */
  name: string;
}

export const GetMediaPlacesPhotosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipHttpRedirect: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("skipHttpRedirect"),
    ),
    maxHeightPx: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("maxHeightPx"),
    ),
    maxWidthPx: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxWidthPx")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetMediaPlacesPhotosRequest>;

export type GetMediaPlacesPhotosResponse = GoogleMapsPlacesV1PhotoMedia;
export const GetMediaPlacesPhotosResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleMapsPlacesV1PhotoMedia;

export type GetMediaPlacesPhotosError = DefaultErrors | NotFound | Forbidden;

/** Get a photo media with a photo reference string. */
export const getMediaPlacesPhotos: API.OperationMethod<
  GetMediaPlacesPhotosRequest,
  GetMediaPlacesPhotosResponse,
  GetMediaPlacesPhotosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMediaPlacesPhotosRequest,
  output: GetMediaPlacesPhotosResponse,
  errors: [NotFound, Forbidden],
}));
