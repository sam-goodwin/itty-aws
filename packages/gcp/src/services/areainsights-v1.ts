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

export const LatLng = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
}).annotate({ identifier: "LatLng" });

export interface Circle {
  /** **Format:** Must be in the format `places/PLACE_ID`, where `PLACE_ID` is the unique identifier of a place. For example: `places/ChIJgUbEo8cfqokR5lP9_Wh_DaM`. */
  place?: string;
  /** The latitude and longitude of the center of the circle. */
  latLng?: LatLng;
  /** Optional. The radius of the circle in meters */
  radius?: number;
}

export const Circle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  place: Schema.optional(Schema.String),
  latLng: Schema.optional(LatLng),
  radius: Schema.optional(Schema.Number),
}).annotate({ identifier: "Circle" });

export interface Polygon {
  /** Optional. The coordinates that define the polygon. */
  coordinates?: ReadonlyArray<LatLng>;
}

export const Polygon = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  coordinates: Schema.optional(Schema.Array(LatLng)),
}).annotate({ identifier: "Polygon" });

export interface PlaceInsight {
  /** The unique identifier of the place. This resource name can be used to retrieve details about the place using the [Places API](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/get). */
  place?: string;
}

export const PlaceInsight = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  place: Schema.optional(Schema.String),
}).annotate({ identifier: "PlaceInsight" });

export interface RatingFilter {
  /** Optional. Restricts results to places whose average user rating is strictly less than or equal to max_rating. Values must be between 1.0 and 5.0. */
  maxRating?: number;
  /** Optional. Restricts results to places whose average user rating is greater than or equal to min_rating. Values must be between 1.0 and 5.0. */
  minRating?: number;
}

export const RatingFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxRating: Schema.optional(Schema.Number),
  minRating: Schema.optional(Schema.Number),
}).annotate({ identifier: "RatingFilter" });

export interface CustomArea {
  /** Required. The custom area represented as a polygon */
  polygon?: Polygon;
}

export const CustomArea = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  polygon: Schema.optional(Polygon),
}).annotate({ identifier: "CustomArea" });

export interface Region {
  /** The [place ID](https://developers.google.com/maps/documentation/places/web-service/place-id) of the geographic region. Not all region types are supported; see documentation for details. **Format:** Must be in the format `places/PLACE_ID`, where `PLACE_ID` is the unique identifier of a place. For example: `places/ChIJPV4oX_65j4ARVW8IJ6IJUYs`. */
  place?: string;
}

export const Region = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  place: Schema.optional(Schema.String),
}).annotate({ identifier: "Region" });

export interface LocationFilter {
  /** Custom area specified by a polygon. */
  customArea?: CustomArea;
  /** Area as a circle. */
  circle?: Circle;
  /** Area as region. */
  region?: Region;
}

export const LocationFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customArea: Schema.optional(CustomArea),
  circle: Schema.optional(Circle),
  region: Schema.optional(Region),
}).annotate({ identifier: "LocationFilter" });

export interface TypeFilter {
  /** Optional. Included Place types. */
  includedTypes?: ReadonlyArray<string>;
  /** Optional. Included primary Place types. */
  includedPrimaryTypes?: ReadonlyArray<string>;
  /** Optional. Excluded primary Place types. */
  excludedPrimaryTypes?: ReadonlyArray<string>;
  /** Optional. Excluded Place types. */
  excludedTypes?: ReadonlyArray<string>;
}

export const TypeFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includedTypes: Schema.optional(Schema.Array(Schema.String)),
  includedPrimaryTypes: Schema.optional(Schema.Array(Schema.String)),
  excludedPrimaryTypes: Schema.optional(Schema.Array(Schema.String)),
  excludedTypes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "TypeFilter" });

export interface Filter {
  /** Optional. Restricts results to places whose average user ratings are in the range specified by rating_filter. If rating_filter is not set, all ratings are included in the result. */
  ratingFilter?: RatingFilter;
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
  /** Required. Restricts results to places which are located in the area specified by location filters. */
  locationFilter?: LocationFilter;
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
}

export const Filter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ratingFilter: Schema.optional(RatingFilter),
  priceLevels: Schema.optional(Schema.Array(Schema.String)),
  locationFilter: Schema.optional(LocationFilter),
  typeFilter: Schema.optional(TypeFilter),
  operatingStatus: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Filter" });

export interface ComputeInsightsRequest {
  /** Required. Insights to compute. Currently only INSIGHT_COUNT and INSIGHT_PLACES are supported. */
  insights?: ReadonlyArray<
    "INSIGHT_UNSPECIFIED" | "INSIGHT_COUNT" | "INSIGHT_PLACES" | (string & {})
  >;
  /** Required. Insight filter. */
  filter?: Filter;
}

export const ComputeInsightsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    insights: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Filter),
  },
).annotate({ identifier: "ComputeInsightsRequest" });

export interface ComputeInsightsResponse {
  /** Result for Insights.INSIGHT_COUNT. */
  count?: string;
  /** Result for Insights.INSIGHT_PLACES. */
  placeInsights?: ReadonlyArray<PlaceInsight>;
}

export const ComputeInsightsResponse =
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
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
