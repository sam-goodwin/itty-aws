// ==========================================================================
// Places Aggregate API (areainsights v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "areainsights",
  version: "v1",
  rootUrl: "https://areainsights.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface LatLng {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
}

export const LatLng: Schema.Schema<LatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LatLng" });

export interface Circle {
  /** The latitude and longitude of the center of the circle. */
  latLng?: LatLng;
  /** Optional. The radius of the circle in meters */
  radius?: number;
  /** **Format:** Must be in the format `places/PLACE_ID`, where `PLACE_ID` is the unique identifier of a place. For example: `places/ChIJgUbEo8cfqokR5lP9_Wh_DaM`. */
  place?: string;
}

export const Circle: Schema.Schema<Circle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
    radius: Schema.optional(Schema.Number),
    place: Schema.optional(Schema.String),
  }).annotate({ identifier: "Circle" });

export interface PlaceInsight {
  /** The unique identifier of the place. This resource name can be used to retrieve details about the place using the [Places API](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/get). */
  place?: string;
}

export const PlaceInsight: Schema.Schema<PlaceInsight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    place: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaceInsight" });

export interface TypeFilter {
  /** Optional. Excluded Place types. */
  excludedTypes?: ReadonlyArray<string>;
  /** Optional. Excluded primary Place types. */
  excludedPrimaryTypes?: ReadonlyArray<string>;
  /** Optional. Included Place types. */
  includedTypes?: ReadonlyArray<string>;
  /** Optional. Included primary Place types. */
  includedPrimaryTypes?: ReadonlyArray<string>;
}

export const TypeFilter: Schema.Schema<TypeFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludedTypes: Schema.optional(Schema.Array(Schema.String)),
    excludedPrimaryTypes: Schema.optional(Schema.Array(Schema.String)),
    includedTypes: Schema.optional(Schema.Array(Schema.String)),
    includedPrimaryTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TypeFilter" });

export interface RatingFilter {
  /** Optional. Restricts results to places whose average user rating is greater than or equal to min_rating. Values must be between 1.0 and 5.0. */
  minRating?: number;
  /** Optional. Restricts results to places whose average user rating is strictly less than or equal to max_rating. Values must be between 1.0 and 5.0. */
  maxRating?: number;
}

export const RatingFilter: Schema.Schema<RatingFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minRating: Schema.optional(Schema.Number),
    maxRating: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RatingFilter" });

export interface Region {
  /** The [place ID](https://developers.google.com/maps/documentation/places/web-service/place-id) of the geographic region. Not all region types are supported; see documentation for details. **Format:** Must be in the format `places/PLACE_ID`, where `PLACE_ID` is the unique identifier of a place. For example: `places/ChIJPV4oX_65j4ARVW8IJ6IJUYs`. */
  place?: string;
}

export const Region: Schema.Schema<Region> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    place: Schema.optional(Schema.String),
  }).annotate({ identifier: "Region" });

export interface Polygon {
  /** Optional. The coordinates that define the polygon. */
  coordinates?: ReadonlyArray<LatLng>;
}

export const Polygon: Schema.Schema<Polygon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coordinates: Schema.optional(Schema.Array(LatLng)),
  }).annotate({ identifier: "Polygon" });

export interface CustomArea {
  /** Required. The custom area represented as a polygon */
  polygon?: Polygon;
}

export const CustomArea: Schema.Schema<CustomArea> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    polygon: Schema.optional(Polygon),
  }).annotate({ identifier: "CustomArea" });

export interface LocationFilter {
  /** Area as a circle. */
  circle?: Circle;
  /** Area as region. */
  region?: Region;
  /** Custom area specified by a polygon. */
  customArea?: CustomArea;
}

export const LocationFilter: Schema.Schema<LocationFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    circle: Schema.optional(Circle),
    region: Schema.optional(Region),
    customArea: Schema.optional(CustomArea),
  }).annotate({ identifier: "LocationFilter" });

export interface Filter {
  /** Optional. Restricts results to places whose price level is included on this list. If `price_levels` is not set, all price levels are included in the results. */
  priceLevels?: ReadonlyArray<
    | "PRICE_LEVEL_UNSPECIFIED"
    | "PRICE_LEVEL_FREE"
    | "PRICE_LEVEL_INEXPENSIVE"
    | "PRICE_LEVEL_MODERATE"
    | "PRICE_LEVEL_EXPENSIVE"
    | "PRICE_LEVEL_VERY_EXPENSIVE"
    | (string & {})
  >;
  /** Required. Place type filters. */
  typeFilter?: TypeFilter;
  /** Optional. Restricts results to places whose operating status is included on this list. If operating_status is not set, OPERATING_STATUS_OPERATIONAL is used as default. */
  operatingStatus?: ReadonlyArray<
    | "OPERATING_STATUS_UNSPECIFIED"
    | "OPERATING_STATUS_OPERATIONAL"
    | "OPERATING_STATUS_PERMANENTLY_CLOSED"
    | "OPERATING_STATUS_TEMPORARILY_CLOSED"
    | (string & {})
  >;
  /** Required. Restricts results to places which are located in the area specified by location filters. */
  locationFilter?: LocationFilter;
  /** Optional. Restricts results to places whose average user ratings are in the range specified by rating_filter. If rating_filter is not set, all ratings are included in the result. */
  ratingFilter?: RatingFilter;
}

export const Filter: Schema.Schema<Filter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priceLevels: Schema.optional(Schema.Array(Schema.String)),
    typeFilter: Schema.optional(TypeFilter),
    operatingStatus: Schema.optional(Schema.Array(Schema.String)),
    locationFilter: Schema.optional(LocationFilter),
    ratingFilter: Schema.optional(RatingFilter),
  }).annotate({ identifier: "Filter" });

export interface ComputeInsightsRequest {
  /** Required. Insights to compute. Currently only INSIGHT_COUNT and INSIGHT_PLACES are supported. */
  insights?: ReadonlyArray<
    "INSIGHT_UNSPECIFIED" | "INSIGHT_COUNT" | "INSIGHT_PLACES" | (string & {})
  >;
  /** Required. Insight filter. */
  filter?: Filter;
}

export const ComputeInsightsRequest: Schema.Schema<ComputeInsightsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insights: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Filter),
  }).annotate({ identifier: "ComputeInsightsRequest" });

export interface ComputeInsightsResponse {
  /** Result for Insights.INSIGHT_COUNT. */
  count?: string;
  /** Result for Insights.INSIGHT_PLACES. */
  placeInsights?: ReadonlyArray<PlaceInsight>;
}

export const ComputeInsightsResponse: Schema.Schema<ComputeInsightsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    placeInsights: Schema.optional(Schema.Array(PlaceInsight)),
  }).annotate({ identifier: "ComputeInsightsResponse" });

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

export interface ComputeInsightsV1Request {
  /** Request body */
  body?: ComputeInsightsRequest;
}

export const ComputeInsightsV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ComputeInsightsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1:computeInsights", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ComputeInsightsV1Request>;

export type ComputeInsightsV1Response = ComputeInsightsResponse;
export const ComputeInsightsV1Response =
  /*@__PURE__*/ /*#__PURE__*/ ComputeInsightsResponse;

export type ComputeInsightsV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** This method lets you retrieve insights about areas using a variety of filter such as: area, place type, operating status, price level and ratings. Currently "count" and "places" insights are supported. With "count" insights you can answer questions such as "How many restaurant are located in California that are operational, are inexpensive and have an average rating of at least 4 stars" (see `insight` enum for more details). With "places" insights, you can determine which places match the requested filter. Clients can then use those place resource names to fetch more details about each individual place using the Places API. */
export const computeInsightsV1: API.OperationMethod<
  ComputeInsightsV1Request,
  ComputeInsightsV1Response,
  ComputeInsightsV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ComputeInsightsV1Request,
  output: ComputeInsightsV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
