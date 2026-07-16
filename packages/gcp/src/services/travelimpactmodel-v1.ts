// ==========================================================================
// Travel Impact Model API (travelimpactmodel v1)
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
  name: "travelimpactmodel",
  version: "v1",
  rootUrl: "https://travelimpactmodel.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface EmissionsGramsPerPax {
  /** Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not. */
  first?: number;
  /** Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not. */
  premiumEconomy?: number;
  /** Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not. */
  business?: number;
  /** Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not. */
  economy?: number;
}

export const EmissionsGramsPerPax: Schema.Codec<EmissionsGramsPerPax> =
  /*@__PURE__*/ Schema.Struct({
    first: Schema.optional(Schema.Number),
    premiumEconomy: Schema.optional(Schema.Number),
    business: Schema.optional(Schema.Number),
    economy: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EmissionsGramsPerPax" });

export interface Travelimpactmodel_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
}

export const Travelimpactmodel_Date: Schema.Codec<Travelimpactmodel_Date> =
  /*@__PURE__*/ Schema.Struct({
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Travelimpactmodel_Date" });

export interface EasaLabelMetadata {
  /** The date when the label expires. The label can be displayed until the end of this date. */
  labelExpiryDate?: Travelimpactmodel_Date;
  /** Version of the label. */
  labelVersion?: string;
  /** The date when the label was issued. */
  labelIssueDate?: Travelimpactmodel_Date;
  /** Sustainable Aviation Fuel (SAF) emissions discount percentage applied to the label. It is a percentage as a decimal. The values are in the interval [0,1]. For example, 0.0021 means 0.21%. This discount and reduction in emissions are reported by the EASA label but they are not included in the CO2e estimates distributed by this API. */
  safDiscountPercentage?: number;
}

export const EasaLabelMetadata: Schema.Codec<EasaLabelMetadata> =
  /*@__PURE__*/ Schema.Struct({
    labelExpiryDate: Schema.optional(Travelimpactmodel_Date),
    labelVersion: Schema.optional(Schema.String),
    labelIssueDate: Schema.optional(Travelimpactmodel_Date),
    safDiscountPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EasaLabelMetadata" });

export interface Flight {
  /** Required. Flight number, e.g. 324. */
  flightNumber?: number;
  /** Required. IATA airport code for flight origin, e.g. "LHR". */
  origin?: string;
  /** Required. IATA carrier code, e.g. "AA". */
  operatingCarrierCode?: string;
  /** Required. Date of the flight in the time zone of the origin airport. Must be a date in the present or future. */
  departureDate?: Travelimpactmodel_Date;
  /** Required. IATA airport code for flight destination, e.g. "JFK". */
  destination?: string;
}

export const Flight: Schema.Codec<Flight> =
  /*@__PURE__*/ Schema.Struct({
    flightNumber: Schema.optional(Schema.Number),
    origin: Schema.optional(Schema.String),
    operatingCarrierCode: Schema.optional(Schema.String),
    departureDate: Schema.optional(Travelimpactmodel_Date),
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "Flight" });

export interface FlightWithEmissions {
  /** Optional. Per-passenger emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeFlightEmissions. */
  emissionsGramsPerPax?: EmissionsGramsPerPax;
  /** Optional. The significance of contrails warming impact compared to the total CO2e emissions impact. */
  contrailsImpactBucket?:
    | "CONTRAILS_IMPACT_UNSPECIFIED"
    | "CONTRAILS_IMPACT_NEGLIGIBLE"
    | "CONTRAILS_IMPACT_MODERATE"
    | "CONTRAILS_IMPACT_SEVERE"
    | (string & {});
  /** Optional. Metadata about the EASA Flight Emissions Label. Only set when the emissions data source is EASA. */
  easaLabelMetadata?: EasaLabelMetadata;
  /** Identifier. Matches the flight identifiers in the request. Note: all IATA codes are capitalized. */
  flight?: Flight;
  /** Optional. The source of the emissions data. */
  source?: "SOURCE_UNSPECIFIED" | "TIM" | "EASA" | (string & {});
}

export const FlightWithEmissions: Schema.Codec<FlightWithEmissions> =
  /*@__PURE__*/ Schema.Struct({
    emissionsGramsPerPax: Schema.optional(EmissionsGramsPerPax),
    contrailsImpactBucket: Schema.optional(Schema.String),
    easaLabelMetadata: Schema.optional(EasaLabelMetadata),
    flight: Schema.optional(Flight),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlightWithEmissions" });

export interface EmissionsProvenanceEntry {
  /** Output only. The cargo mass fraction value. If not set, the cargo mass fraction value is not available. */
  cargoMassFractionData?: number;
  /** Output only. The source of the data. */
  source?:
    | "DATA_SOURCE_UNSPECIFIED"
    | "EEA"
    | "T100"
    | "CH_AVIATION"
    | "OAG"
    | "OPERATING_CARRIER"
    | "AIRCRAFT_MODEL_TYPICAL"
    | "GLOBAL_DEFAULT"
    | "IATA"
    | "ICL"
    | (string & {});
  /** Output only. Strategy for IATA seat area ratios. */
  seatAreaRatioIataStrategy?:
    | "STRATEGY_UNSPECIFIED"
    | "NARROW_AIRCRAFT_BODY"
    | "WIDE_AIRCRAFT_BODY"
    | (string & {});
  /** Output only. The load factors data value. If not set, the load factors value is not available. */
  loadFactorsData?: number;
  /** Output only. Strategy for EEA fuel burn. */
  fuelBurnEeaStrategy?:
    | "STRATEGY_UNSPECIFIED"
    | "AIRCRAFT_MAPPING_FALLBACK_WITH_CORRECTION_FACTOR"
    | "AIRCRAFT_MAPPING_EXACT"
    | "AIRCRAFT_MAPPING_FALLBACK"
    | (string & {});
  /** Output only. Strategy for distance adjustment. */
  distanceAdjustmentStrategy?:
    | "STRATEGY_UNSPECIFIED"
    | "ORIGIN_DESTINATION"
    | "COUNTRY_PAIR"
    | "DEFAULT"
    | (string & {});
  /** Output only. The type of the provenance entry. */
  provenanceEntryType?:
    | "EMISSIONS_PROVENANCE_ENTRY_TYPE_UNSPECIFIED"
    | "FUEL_BURN"
    | "LOAD_FACTORS"
    | "CARGO_MASS_FRACTION"
    | "SEATING_CONFIG"
    | "SEAT_AREA_RATIOS"
    | "DISTANCE_ADJUSTMENT"
    | (string & {});
  /** Output only. The estimated distance flown in CCD flight phase in kilometers value calculated using the distance adjustment factor (DAF). If not set, the estimated flight distance value is not available. */
  estimatedFlightDistanceKm?: number;
  /** Output only. Strategy for T100 load factors. */
  loadFactorsT100Strategy?:
    | "STRATEGY_UNSPECIFIED"
    | "CARRIER_ROUTE_MONTH"
    | "CARRIER_MONTH"
    | "ACTUAL_CARRIER_ROUTE_YEAR_MONTH"
    | (string & {});
  /** Output only. The version of the source data. For example, "2025/04". */
  sourceVersion?: string;
  /** Output only. Data category of the data source. */
  dataCategory?:
    | "DATA_CATEGORY_UNSPECIFIED"
    | "PRIMARY"
    | "MODELED"
    | "DEFAULT"
    | (string & {});
  /** Output only. Strategy for CH Aviation load factors. */
  loadFactorsChAviationStrategy?:
    | "STRATEGY_UNSPECIFIED"
    | "CARRIER_MONTH"
    | "ACTUAL_CARRIER_YEAR_MONTH"
    | (string & {});
  /** Output only. Strategy for T100 cargo mass fraction. */
  cargoMassFractionT100Strategy?:
    | "STRATEGY_UNSPECIFIED"
    | "CARRIER_ROUTE_AIRCRAFT_CLASS"
    | "ROUTE_AIRCRAFT_CLASS"
    | "DISTANCE_AIRCRAFT_CLASS"
    | "ACTUAL_CARRIER_ROUTE_YEAR_MONTH_AIRCRAFT_CLASS"
    | (string & {});
}

export const EmissionsProvenanceEntry: Schema.Codec<EmissionsProvenanceEntry> =
  /*@__PURE__*/ Schema.Struct({
    cargoMassFractionData: Schema.optional(Schema.Number),
    source: Schema.optional(Schema.String),
    seatAreaRatioIataStrategy: Schema.optional(Schema.String),
    loadFactorsData: Schema.optional(Schema.Number),
    fuelBurnEeaStrategy: Schema.optional(Schema.String),
    distanceAdjustmentStrategy: Schema.optional(Schema.String),
    provenanceEntryType: Schema.optional(Schema.String),
    estimatedFlightDistanceKm: Schema.optional(Schema.Number),
    loadFactorsT100Strategy: Schema.optional(Schema.String),
    sourceVersion: Schema.optional(Schema.String),
    dataCategory: Schema.optional(Schema.String),
    loadFactorsChAviationStrategy: Schema.optional(Schema.String),
    cargoMassFractionT100Strategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "EmissionsProvenanceEntry" });

export interface EmissionsProvenance {
  /** Output only. All contributing factors used to calculate emissions. */
  provenanceEntries?: ReadonlyArray<EmissionsProvenanceEntry>;
}

export const EmissionsProvenance: Schema.Codec<EmissionsProvenance> =
  /*@__PURE__*/ Schema.Struct({
    provenanceEntries: Schema.optional(Schema.Array(EmissionsProvenanceEntry)),
  }).annotate({ identifier: "EmissionsProvenance" });

export interface EmissionsMetadata {
  /** Output only. Details about the provenance of data used to calculate the emissions data, including the contributing factors with their data sources. */
  emissionsProvenance?: EmissionsProvenance;
  /** Output only. Metadata about the EASA Flight Emissions Label. Only set when the emissions data source is EASA. */
  easaLabelMetadata?: EasaLabelMetadata;
  /** Output only. Link to the `travelimpactmodel.org` Emissions Calculator website. Example: https://travelimpactmodel.org/lookup/flight?itinerary=ZRH-BOS-LX-52-20261225. */
  timWebsiteEmissionsCalculatorUrl?: string;
}

export const EmissionsMetadata: Schema.Codec<EmissionsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    emissionsProvenance: Schema.optional(EmissionsProvenance),
    easaLabelMetadata: Schema.optional(EasaLabelMetadata),
    timWebsiteEmissionsCalculatorUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "EmissionsMetadata" });

export interface EmissionsBreakdown {
  /** Per-passenger well-to-tank emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeFlightEmissions. */
  wttEmissionsGramsPerPax?: EmissionsGramsPerPax;
  /** Per-passenger tank-to-wake emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeFlightEmissions. */
  ttwEmissionsGramsPerPax?: EmissionsGramsPerPax;
}

export const EmissionsBreakdown: Schema.Codec<EmissionsBreakdown> =
  /*@__PURE__*/ Schema.Struct({
    wttEmissionsGramsPerPax: Schema.optional(EmissionsGramsPerPax),
    ttwEmissionsGramsPerPax: Schema.optional(EmissionsGramsPerPax),
  }).annotate({ identifier: "EmissionsBreakdown" });

export interface FlightEmissionsDetails {
  /** Output only. Details about the various emissions portions of the total emissions_grams_per_pax value. The value of the summed breakdowns should always equal emissions_grams_per_pax. */
  emissionsBreakdown?: EmissionsBreakdown;
  /** Output only. Per-passenger emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeDetailedFlightEmissions */
  emissionsGramsPerPax?: EmissionsGramsPerPax;
  /** Output only. The significance of contrails warming impact compared to the total CO2e emissions impact. */
  contrailsImpactBucket?:
    | "CONTRAILS_IMPACT_UNSPECIFIED"
    | "CONTRAILS_IMPACT_NEGLIGIBLE"
    | "CONTRAILS_IMPACT_MODERATE"
    | "CONTRAILS_IMPACT_SEVERE"
    | (string & {});
  /** Output only. The source of the emissions data. */
  source?: "SOURCE_UNSPECIFIED" | "TIM" | "EASA" | (string & {});
}

export const FlightEmissionsDetails: Schema.Codec<FlightEmissionsDetails> =
  /*@__PURE__*/ Schema.Struct({
    emissionsBreakdown: Schema.optional(EmissionsBreakdown),
    emissionsGramsPerPax: Schema.optional(EmissionsGramsPerPax),
    contrailsImpactBucket: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlightEmissionsDetails" });

export interface FlightWithDetailedEmissions {
  /** Output only. Matches the flight identifiers in the request. Note: all IATA codes are capitalized. */
  flight?: Flight;
  /** Output only. All the flight emissions data. */
  flightEmissionsDetails?: FlightEmissionsDetails;
  /** Output only. Additional metadata about the flight emissions calculation. */
  emissionsMetadata?: EmissionsMetadata;
}

export const FlightWithDetailedEmissions: Schema.Codec<FlightWithDetailedEmissions> =
  /*@__PURE__*/ Schema.Struct({
    flight: Schema.optional(Flight),
    flightEmissionsDetails: Schema.optional(FlightEmissionsDetails),
    emissionsMetadata: Schema.optional(EmissionsMetadata),
  }).annotate({ identifier: "FlightWithDetailedEmissions" });

export interface ModelVersion {
  /** Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation. */
  minor?: number;
  /** Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation. */
  patch?: number;
  /** Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly. */
  dated?: string;
  /** Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect [Google Cloud API guidelines](https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible) */
  major?: number;
}

export const ModelVersion: Schema.Codec<ModelVersion> =
  /*@__PURE__*/ Schema.Struct({
    minor: Schema.optional(Schema.Number),
    patch: Schema.optional(Schema.Number),
    dated: Schema.optional(Schema.String),
    major: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ModelVersion" });

export interface ComputeDetailedFlightEmissionsResponse {
  /** List of flight legs with emission estimates. */
  flightsWithDetailedEmissions?: ReadonlyArray<FlightWithDetailedEmissions>;
  /** The model version under which emission estimates for all flights in this response were computed. */
  modelVersion?: ModelVersion;
}

export const ComputeDetailedFlightEmissionsResponse: Schema.Codec<ComputeDetailedFlightEmissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    flightsWithDetailedEmissions: Schema.optional(
      Schema.Array(FlightWithDetailedEmissions),
    ),
    modelVersion: Schema.optional(ModelVersion),
  }).annotate({ identifier: "ComputeDetailedFlightEmissionsResponse" });

export interface ComputeDetailedFlightEmissionsRequest {
  /** Required. Direct flights to return emission estimates for. */
  flights?: ReadonlyArray<Flight>;
}

export const ComputeDetailedFlightEmissionsRequest: Schema.Codec<ComputeDetailedFlightEmissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    flights: Schema.optional(Schema.Array(Flight)),
  }).annotate({ identifier: "ComputeDetailedFlightEmissionsRequest" });

export interface Market {
  /** Required. IATA airport code for flight origin, e.g. "LHR". */
  origin?: string;
  /** Required. IATA airport code for flight destination, e.g. "JFK". */
  destination?: string;
}

export const Market: Schema.Codec<Market> =
  /*@__PURE__*/ Schema.Struct({
    origin: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "Market" });

export interface ComputeTypicalFlightEmissionsRequest {
  /** Required. Request the typical flight emissions estimates for this market pair. A maximum of 1000 markets can be requested. */
  markets?: ReadonlyArray<Market>;
}

export const ComputeTypicalFlightEmissionsRequest: Schema.Codec<ComputeTypicalFlightEmissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    markets: Schema.optional(Schema.Array(Market)),
  }).annotate({ identifier: "ComputeTypicalFlightEmissionsRequest" });

export interface ComputeFlightEmissionsRequest {
  /** Required. Direct flights to return emission estimates for. */
  flights?: ReadonlyArray<Flight>;
}

export const ComputeFlightEmissionsRequest: Schema.Codec<ComputeFlightEmissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    flights: Schema.optional(Schema.Array(Flight)),
  }).annotate({ identifier: "ComputeFlightEmissionsRequest" });

export interface ComputeFlightEmissionsResponse {
  /** List of flight legs with emission estimates. */
  flightEmissions?: ReadonlyArray<FlightWithEmissions>;
  /** The model version under which emission estimates for all flights in this response were computed. */
  modelVersion?: ModelVersion;
}

export const ComputeFlightEmissionsResponse: Schema.Codec<ComputeFlightEmissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    flightEmissions: Schema.optional(Schema.Array(FlightWithEmissions)),
    modelVersion: Schema.optional(ModelVersion),
  }).annotate({ identifier: "ComputeFlightEmissionsResponse" });

export interface TypicalFlightEmissions {
  /** Optional. Typical flight emissions per passenger for requested market. Will not be present if a typical emissions could not be computed. For the list of reasons why typical flight emissions could not be computed, see [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md#step-7-validate-dataset). */
  emissionsGramsPerPax?: EmissionsGramsPerPax;
  /** Identifier. Matches the flight identifiers in the request. Note: all IATA codes are capitalized. */
  market?: Market;
}

export const TypicalFlightEmissions: Schema.Codec<TypicalFlightEmissions> =
  /*@__PURE__*/ Schema.Struct({
    emissionsGramsPerPax: Schema.optional(EmissionsGramsPerPax),
    market: Schema.optional(Market),
  }).annotate({ identifier: "TypicalFlightEmissions" });

export interface ComputeTypicalFlightEmissionsResponse {
  /** Market's Typical Flight Emissions requested. */
  typicalFlightEmissions?: ReadonlyArray<TypicalFlightEmissions>;
  /** The model version under which typical flight emission estimates for all flights in this response were computed. */
  modelVersion?: ModelVersion;
}

export const ComputeTypicalFlightEmissionsResponse: Schema.Codec<ComputeTypicalFlightEmissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    typicalFlightEmissions: Schema.optional(
      Schema.Array(TypicalFlightEmissions),
    ),
    modelVersion: Schema.optional(ModelVersion),
  }).annotate({ identifier: "ComputeTypicalFlightEmissionsResponse" });

export interface Scope3FlightSegment {
  /** Required. The cabin class of the flight. */
  cabinClass?:
    | "CABIN_CLASS_UNSPECIFIED"
    | "ECONOMY"
    | "PREMIUM_ECONOMY"
    | "BUSINESS"
    | "FIRST"
    | (string & {});
  /** Optional. Distance in kilometers, e.g. `2423`, from [1, 2.5e16) km. This is used to match a flight to distance-based emissions when origin and destination are not provided or there are no matching typical flights. */
  distanceKm?: string;
  /** Optional. 2-character [IATA carrier code](https://www.iata.org/en/publications/directories/code-search/), e.g. `KE`. This is required if specific flight matching is desired. Otherwise, this is unused for typical flight and distance-based emissions models. This could be both operating and marketing carrier code (i.e. codeshare is covered). */
  carrierCode?: string;
  /** Optional. Up to 4-digit [flight number](https://en.wikipedia.org/wiki/Flight_number), e.g. `71`, from [1, 9999]. This is first used to match a specific flight if a flight number is specified alongside origin, destination, and carrier. If a flight number is not specified, we will first try to match the flight to a typical flight between the provided origin and destination airports. If that fails and/or origin & destination are not provided, we will use the distance-based emissions model based on the flight distance provided. */
  flightNumber?: number;
  /** Optional. 3-character [IATA airport code](https://www.iata.org/en/publications/directories/code-search/) for flight origin, e.g. `YVR`. This is used to match specific flight if provided alongside destination, carrier, and flight number. If there is no match, we will first try to match the flight to a typical flight between the provided origin and destination airports. Otherwise, we will use the distance-based emissions model if the flight distance is provided. */
  origin?: string;
  /** Optional. 3-character [IATA airport code](https://www.iata.org/en/publications/directories/code-search/) for flight destination, e.g. `ICN`. This is used to match specific flight if provided alongside origin, carrier, and flight number. If there is no match, we will first try to match the flight to a typical flight between the provided origin and destination airports. Otherwise, we will use the distance-based emissions model if the flight distance is provided. */
  destination?: string;
  /** Required. Date of the flight in the time zone of the origin airport. Only year is required for typical flight and distance-based emissions models (month and day values are ignored and therefore, can be either omitted, set to 0, or set to a valid date for those cases). Correspondingly, if a specific date is not provided for TIM emissions, we will fallback to typical flight (or distance-based) emissions. */
  departureDate?: Travelimpactmodel_Date;
}

export const Scope3FlightSegment: Schema.Codec<Scope3FlightSegment> =
  /*@__PURE__*/ Schema.Struct({
    cabinClass: Schema.optional(Schema.String),
    distanceKm: Schema.optional(Schema.String),
    carrierCode: Schema.optional(Schema.String),
    flightNumber: Schema.optional(Schema.Number),
    origin: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    departureDate: Schema.optional(Travelimpactmodel_Date),
  }).annotate({ identifier: "Scope3FlightSegment" });

export interface Scope3FlightEmissions {
  /** Optional. The source of the emissions data. */
  source?:
    | "SCOPE3_DATA_TYPE_UNSPECIFIED"
    | "TIM_EMISSIONS"
    | "TYPICAL_FLIGHT_EMISSIONS"
    | "DISTANCE_BASED_EMISSIONS"
    | (string & {});
  /** Identifier. Matches the flight identifiers in the request. */
  flight?: Scope3FlightSegment;
  /** Optional. Total flight emissions (sum of well-to-tank and tank-to-wake) per passenger based on the requested info. This is the total emissions and unless you have specific reasons for using TTW or WTT emissions, you should use this number. */
  wtwEmissionsGramsPerPax?: string;
  /** Optional. Tank-to-wake flight emissions per passenger based on the requested info. */
  ttwEmissionsGramsPerPax?: string;
  /** Optional. Well-to-tank flight emissions per passenger based on the requested info. */
  wttEmissionsGramsPerPax?: string;
}

export const Scope3FlightEmissions: Schema.Codec<Scope3FlightEmissions> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    flight: Schema.optional(Scope3FlightSegment),
    wtwEmissionsGramsPerPax: Schema.optional(Schema.String),
    ttwEmissionsGramsPerPax: Schema.optional(Schema.String),
    wttEmissionsGramsPerPax: Schema.optional(Schema.String),
  }).annotate({ identifier: "Scope3FlightEmissions" });

export interface ComputeScope3FlightEmissionsResponse {
  /** List of flight segments with emission estimates. */
  flightEmissions?: ReadonlyArray<Scope3FlightEmissions>;
  /** The model version under which emission estimates for all flights in this response were computed. */
  modelVersion?: ModelVersion;
}

export const ComputeScope3FlightEmissionsResponse: Schema.Codec<ComputeScope3FlightEmissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    flightEmissions: Schema.optional(Schema.Array(Scope3FlightEmissions)),
    modelVersion: Schema.optional(ModelVersion),
  }).annotate({ identifier: "ComputeScope3FlightEmissionsResponse" });

export interface ComputeScope3FlightEmissionsRequest {
  /** Required. Flights to return emission estimates for. */
  flights?: ReadonlyArray<Scope3FlightSegment>;
  /** Optional. The model version under which emission estimates for all flights in this request were computed. */
  modelVersion?: ModelVersion;
}

export const ComputeScope3FlightEmissionsRequest: Schema.Codec<ComputeScope3FlightEmissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    flights: Schema.optional(Schema.Array(Scope3FlightSegment)),
    modelVersion: Schema.optional(ModelVersion),
  }).annotate({ identifier: "ComputeScope3FlightEmissionsRequest" });

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

export interface ComputeFlightEmissionsFlightsRequest {
  /** Request body */
  body?: ComputeFlightEmissionsRequest;
}

export const ComputeFlightEmissionsFlightsRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(ComputeFlightEmissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/flights:computeFlightEmissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ComputeFlightEmissionsFlightsRequest>;

export type ComputeFlightEmissionsFlightsResponse =
  ComputeFlightEmissionsResponse;
export const ComputeFlightEmissionsFlightsResponse =
  /*@__PURE__*/ ComputeFlightEmissionsResponse;

export type ComputeFlightEmissionsFlightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves emission estimates. Details on how emission estimates are computed are in [GitHub](https://github.com/google/travel-impact-model). The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: * The flight is unknown to the server. * The input flight leg is missing one or more identifiers. * The flight date is in the past. * The aircraft type is not supported by the model. * Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error. */
export const computeFlightEmissionsFlights: API.OperationMethod<
  ComputeFlightEmissionsFlightsRequest,
  ComputeFlightEmissionsFlightsResponse,
  ComputeFlightEmissionsFlightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ComputeFlightEmissionsFlightsRequest,
  output: ComputeFlightEmissionsFlightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ComputeScope3FlightEmissionsFlightsRequest {
  /** Request body */
  body?: ComputeScope3FlightEmissionsRequest;
}

export const ComputeScope3FlightEmissionsFlightsRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(ComputeScope3FlightEmissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/flights:computeScope3FlightEmissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ComputeScope3FlightEmissionsFlightsRequest>;

export type ComputeScope3FlightEmissionsFlightsResponse =
  ComputeScope3FlightEmissionsResponse;
export const ComputeScope3FlightEmissionsFlightsResponse =
  /*@__PURE__*/ ComputeScope3FlightEmissionsResponse;

export type ComputeScope3FlightEmissionsFlightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves GHG emissions estimates for a set of flight segments for Scope 3 reporting. The response will contain all entries that match the input Scope3FlightSegment flight segments, in the same order provided. The estimates will be computed using the following cascading logic (using the first one that is available): 1. TIM-based emissions given origin, destination, carrier, flightNumber, departureDate, and cabinClass. 2. Typical flight emissions given origin, destination, year in departureDate, and cabinClass. 3. Distance-based emissions calculated using distanceKm, year in departureDate, and cabinClass. If there is a future flight requested in this calendar year, we do not support Tier 1 emissions and will fallback to Tier 2 or 3 emissions. If the requested future flight is in not in this calendar year, we will return an empty response. We recommend that for future flights, computeFlightEmissions API is used instead. If there are no estimates available for a certain flight with any of the three methods, the response will return a Scope3FlightEmissions object with empty emission fields. The request will still be considered successful. Generally, missing emissions estimates occur when the flight is unknown to the server (e.g. no specific flight exists, or typical flight emissions are not available for the requested pair). The request will fail with an `INVALID_ARGUMENT` error if: * The request contains more than 1,000 flight legs. * The input flight leg is missing one or more identifiers. For example, missing origin/destination without a valid distance for TIM_EMISSIONS or TYPICAL_FLIGHT_EMISSIONS type matching, or missing distance for a DISTANCE_BASED_EMISSIONS type matching (if you want to fallback to distance-based emissions or want a distance-based emissions estimate, you need to specify a distance). * The flight date is before 2019 (Scope 3 data is only available for 2019 and after). * The flight distance is 0 or lower. * Missing cabin class. Because the request is processed with fallback logic, it is possible that misconfigured requests return valid emissions estimates using fallback methods. For example, if a request has the wrong flight number but specifies the origin and destination, the request will still succeed, but the returned emissions will be based solely on the typical flight emissions. Similarly, if a request is missing the origin for a typical flight emissions request, but specifies a valid distance, the request could succeed based solely on the distance-based emissions. Consequently, one should check the source of the returned emissions (source) to confirm the results are as expected. */
export const computeScope3FlightEmissionsFlights: API.OperationMethod<
  ComputeScope3FlightEmissionsFlightsRequest,
  ComputeScope3FlightEmissionsFlightsResponse,
  ComputeScope3FlightEmissionsFlightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ComputeScope3FlightEmissionsFlightsRequest,
  output: ComputeScope3FlightEmissionsFlightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ComputeTypicalFlightEmissionsFlightsRequest {
  /** Request body */
  body?: ComputeTypicalFlightEmissionsRequest;
}

export const ComputeTypicalFlightEmissionsFlightsRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(ComputeTypicalFlightEmissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/flights:computeTypicalFlightEmissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ComputeTypicalFlightEmissionsFlightsRequest>;

export type ComputeTypicalFlightEmissionsFlightsResponse =
  ComputeTypicalFlightEmissionsResponse;
export const ComputeTypicalFlightEmissionsFlightsResponse =
  /*@__PURE__*/ ComputeTypicalFlightEmissionsResponse;

export type ComputeTypicalFlightEmissionsFlightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves typical flight emissions estimates between two airports, also known as a market. If there are no estimates available for a certain market, the response will return the market object with empty emission fields. The request will still be considered successful. Details on how the typical emissions estimates are computed are on [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md). The request can contain up to 1000 markets. If the request has more than 1000 markets, it will fail with an INVALID_ARGUMENT error. */
export const computeTypicalFlightEmissionsFlights: API.OperationMethod<
  ComputeTypicalFlightEmissionsFlightsRequest,
  ComputeTypicalFlightEmissionsFlightsResponse,
  ComputeTypicalFlightEmissionsFlightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ComputeTypicalFlightEmissionsFlightsRequest,
  output: ComputeTypicalFlightEmissionsFlightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ComputeDetailedFlightEmissionsFlightsRequest {
  /** Request body */
  body?: ComputeDetailedFlightEmissionsRequest;
}

export const ComputeDetailedFlightEmissionsFlightsRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(ComputeDetailedFlightEmissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/flights:computeDetailedFlightEmissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ComputeDetailedFlightEmissionsFlightsRequest>;

export type ComputeDetailedFlightEmissionsFlightsResponse =
  ComputeDetailedFlightEmissionsResponse;
export const ComputeDetailedFlightEmissionsFlightsResponse =
  /*@__PURE__*/ ComputeDetailedFlightEmissionsResponse;

export type ComputeDetailedFlightEmissionsFlightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves detailed emission estimates. Detailed Flight Emissions are transparent per-passenger greenhouse gas emission estimates supplemented by comprehensive metadata detailing the calculation methodology, emissions breakdown, contrail impact, and data provenance. Details on how emission estimates are computed are in [GitHub](https://github.com/google/travel-impact-model). The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: * The flight is unknown to the server. * The input flight leg is missing one or more identifiers. * The flight date is in the past. * The aircraft type is not supported by the model. * Missing seat configuration. The request can contain up to 100 flight legs. If the request has more than 100 flight legs, it will fail with an INVALID_ARGUMENT error. */
export const computeDetailedFlightEmissionsFlights: API.OperationMethod<
  ComputeDetailedFlightEmissionsFlightsRequest,
  ComputeDetailedFlightEmissionsFlightsResponse,
  ComputeDetailedFlightEmissionsFlightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ComputeDetailedFlightEmissionsFlightsRequest,
  output: ComputeDetailedFlightEmissionsFlightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
