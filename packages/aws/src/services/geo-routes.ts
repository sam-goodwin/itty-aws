import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Geo Routes",
  serviceShapeName: "RoutesService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "geo-routes" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-11-19");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://routes.geo.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://routes.geo-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://routes.geo-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            `https://routes.geo.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(
            `https://routes.geo.${Region}.us-gov.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://routes.geo-fips.${Region}.us-gov.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(
            `https://routes.geo-fips.${Region}.us-gov.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            `https://routes.geo.${Region}.us-gov.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://geo-routes-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://geo-routes-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://geo-routes.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://geo-routes.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      FieldList: /*@__PURE__*/ S.suspend(() => __S(258)).annotate({
        identifier: "ValidationExceptionFieldList",
      }),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type SensitiveBoolean = boolean;
export interface IsolineAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
export type TimestampWithTimezoneOffset = string | redacted.Redacted<string>;
export type BoundingBox = number[];
export type Position = number[];
export type LineString = number[][];
export interface Corridor {
  LineString: number[][];
  Radius: number;
}
export type LinearRing = number[][];
export type LinearRings = number[][][];
export type Polyline = string | redacted.Redacted<string>;
export interface PolylineCorridor {
  Polyline: string | redacted.Redacted<string>;
  Radius: number;
}
export type PolylineRing = string | redacted.Redacted<string>;
export type PolylineRingList = (string | redacted.Redacted<string>)[];
export interface IsolineAvoidanceAreaGeometry {
  BoundingBox?: number[];
  Corridor?: Corridor;
  Polygon?: number[][][];
  PolylineCorridor?: PolylineCorridor;
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
export type IsolineAvoidanceAreaGeometryList = IsolineAvoidanceAreaGeometry[];
export interface IsolineAvoidanceArea {
  Except?: IsolineAvoidanceAreaGeometry[];
  Geometry: IsolineAvoidanceAreaGeometry;
}
export type IsolineAvoidanceAreaList = IsolineAvoidanceArea[];
export type TruckRoadType = string | redacted.Redacted<string>;
export type TruckRoadTypeList = (string | redacted.Redacted<string>)[];
export type IsolineZoneCategory =
  | "CongestionPricing"
  | "Environmental"
  | "Vignette"
  | (string & {});
export interface IsolineAvoidanceZoneCategory {
  Category?: IsolineZoneCategory;
}
export type IsolineAvoidanceZoneCategoryList = IsolineAvoidanceZoneCategory[];
export interface IsolineAvoidanceOptions {
  Areas?: IsolineAvoidanceArea[];
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  SeasonalClosure?: boolean;
  TollRoads?: boolean;
  TollTransponders?: boolean;
  TruckRoadTypes?: (string | redacted.Redacted<string>)[];
  Tunnels?: boolean;
  UTurns?: boolean;
  ZoneCategories?: IsolineAvoidanceZoneCategory[];
}
export type DistanceMeters = number;
export type Heading = number;
export type SensitiveString = string | redacted.Redacted<string>;
export type MatchingStrategy = "MatchAny" | "MatchMostSignificantRoad" | (string & {});
export interface IsolineMatchingOptions {
  NameHint?: string | redacted.Redacted<string>;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: MatchingStrategy;
}
export type SideOfStreetMatchingStrategy = "AnyStreet" | "DividedStreetOnly" | (string & {});
export interface IsolineSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
export interface IsolineDestinationOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: IsolineMatchingOptions;
  SideOfStreet?: IsolineSideOfStreetOptions;
}
export type GeometryFormat = "FlexiblePolyline" | "Simple" | (string & {});
export interface IsolineGranularityOptions {
  MaxPoints?: number;
  MaxResolution?: number;
}
export type ApiKey = string | redacted.Redacted<string>;
export type IsolineOptimizationObjective =
  | "AccurateCalculation"
  | "BalancedCalculation"
  | "FastCalculation"
  | (string & {});
export type RoutingObjective = "FastestRoute" | "ShortestRoute" | (string & {});
export interface IsolineOriginOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: IsolineMatchingOptions;
  SideOfStreet?: IsolineSideOfStreetOptions;
}
export type DistanceThresholdList = number[];
export type DurationSeconds = number;
export type TimeThresholdList = number[];
export interface IsolineThresholds {
  Distance?: number[];
  Time?: number[];
}
export type TrafficUsage = "IgnoreTrafficData" | "UseTrafficData" | (string & {});
export interface IsolineTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: TrafficUsage;
}
export type IsolineTravelMode = "Car" | "Pedestrian" | "Scooter" | "Truck" | (string & {});
export type IsolineEngineType = "Electric" | "InternalCombustion" | "PluginHybrid" | (string & {});
export interface IsolineVehicleLicensePlate {
  LastCharacter?: string;
}
export type SpeedKilometersPerHour = number;
export type SensitiveInteger = number;
export interface IsolineCarOptions {
  EngineType?: IsolineEngineType;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface IsolineScooterOptions {
  EngineType?: IsolineEngineType;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export type WeightKilograms = number;
export type IsolineHazardousCargoType =
  | "Combustible"
  | "Corrosive"
  | "Explosive"
  | "Flammable"
  | "Gas"
  | "HarmfulToWater"
  | "Organic"
  | "Other"
  | "Poison"
  | "PoisonousInhalation"
  | "Radioactive"
  | (string & {});
export type IsolineHazardousCargoTypeList = IsolineHazardousCargoType[];
export type DimensionCentimeters = number;
export interface IsolineTrailerOptions {
  AxleCount?: number;
  TrailerCount?: number;
}
export type IsolineTruckType = "LightTruck" | "StraightTruck" | "Tractor" | (string & {});
export type TunnelRestrictionCode = string | redacted.Redacted<string>;
export interface WeightPerAxleGroup {
  Single?: number;
  Tandem?: number;
  Triple?: number;
  Quad?: number;
  Quint?: number;
}
export interface IsolineTruckOptions {
  AxleCount?: number;
  EngineType?: IsolineEngineType;
  GrossWeight?: number;
  HazardousCargos?: IsolineHazardousCargoType[];
  Height?: number;
  HeightAboveFirstAxle?: number;
  KpraLength?: number;
  Length?: number;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
  PayloadCapacity?: number;
  TireCount?: number;
  Trailer?: IsolineTrailerOptions;
  TruckType?: IsolineTruckType;
  TunnelRestrictionCode?: string | redacted.Redacted<string>;
  WeightPerAxle?: number;
  WeightPerAxleGroup?: WeightPerAxleGroup;
  Width?: number;
}
export interface IsolineTravelModeOptions {
  Car?: IsolineCarOptions;
  Scooter?: IsolineScooterOptions;
  Truck?: IsolineTruckOptions;
}
export interface CalculateIsolinesRequest {
  Allow?: IsolineAllowOptions;
  ArrivalTime?: string | redacted.Redacted<string>;
  Avoid?: IsolineAvoidanceOptions;
  DepartNow?: boolean;
  DepartureTime?: string | redacted.Redacted<string>;
  Destination?: number[];
  DestinationOptions?: IsolineDestinationOptions;
  IsolineGeometryFormat?: GeometryFormat;
  IsolineGranularity?: IsolineGranularityOptions;
  Key?: string | redacted.Redacted<string>;
  OptimizeIsolineFor?: IsolineOptimizationObjective;
  OptimizeRoutingFor?: RoutingObjective;
  Origin?: number[];
  OriginOptions?: IsolineOriginOptions;
  Thresholds: IsolineThresholds;
  Traffic?: IsolineTrafficOptions;
  TravelMode?: IsolineTravelMode;
  TravelModeOptions?: IsolineTravelModeOptions;
}
export interface IsolineConnectionGeometry {
  LineString?: number[][];
  Polyline?: string | redacted.Redacted<string>;
}
export interface IsolineConnection {
  FromPolygonIndex: number;
  Geometry: IsolineConnectionGeometry;
  ToPolygonIndex: number;
}
export type IsolineConnectionList = IsolineConnection[];
export interface IsolineShapeGeometry {
  Polygon?: number[][][];
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
export type IsolineShapeGeometryList = IsolineShapeGeometry[];
export interface Isoline {
  Connections: IsolineConnection[];
  DistanceThreshold?: number;
  Geometries: IsolineShapeGeometry[];
  TimeThreshold?: number;
}
export type IsolineList = Isoline[];
export interface CalculateIsolinesResponse {
  ArrivalTime?: string | redacted.Redacted<string>;
  DepartureTime?: string | redacted.Redacted<string>;
  IsolineGeometryFormat: GeometryFormat;
  Isolines: Isoline[];
  PricingBucket: string;
  SnappedDestination?: number[];
  SnappedOrigin?: number[];
}
export interface RouteMatrixAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
export interface RouteMatrixAvoidanceAreaGeometry {
  BoundingBox?: number[];
  Polygon?: number[][][];
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
export interface RouteMatrixAvoidanceArea {
  Geometry: RouteMatrixAvoidanceAreaGeometry;
}
export type RouteMatrixAvoidanceAreaList = RouteMatrixAvoidanceArea[];
export type RouteMatrixZoneCategory =
  | "CongestionPricing"
  | "Environmental"
  | "Vignette"
  | (string & {});
export interface RouteMatrixAvoidanceZoneCategory {
  Category?: RouteMatrixZoneCategory;
}
export type RouteMatrixAvoidanceZoneCategoryList = RouteMatrixAvoidanceZoneCategory[];
export interface RouteMatrixAvoidanceOptions {
  Areas?: RouteMatrixAvoidanceArea[];
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  TollRoads?: boolean;
  TollTransponders?: boolean;
  TruckRoadTypes?: (string | redacted.Redacted<string>)[];
  Tunnels?: boolean;
  UTurns?: boolean;
  ZoneCategories?: RouteMatrixAvoidanceZoneCategory[];
}
export interface RouteMatrixMatchingOptions {
  NameHint?: string | redacted.Redacted<string>;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: MatchingStrategy;
}
export interface RouteMatrixSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
export interface RouteMatrixDestinationOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: RouteMatrixMatchingOptions;
  SideOfStreet?: RouteMatrixSideOfStreetOptions;
}
export interface RouteMatrixDestination {
  Options?: RouteMatrixDestinationOptions;
  Position: number[];
}
export type RouteMatrixDestinationList = RouteMatrixDestination[];
export type CountryCode = string | redacted.Redacted<string>;
export type CountryCodeList = (string | redacted.Redacted<string>)[];
export interface RouteMatrixExclusionOptions {
  Countries: (string | redacted.Redacted<string>)[];
}
export interface RouteMatrixOriginOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: RouteMatrixMatchingOptions;
  SideOfStreet?: RouteMatrixSideOfStreetOptions;
}
export interface RouteMatrixOrigin {
  Options?: RouteMatrixOriginOptions;
  Position: number[];
}
export type RouteMatrixOriginList = RouteMatrixOrigin[];
export interface RouteMatrixAutoCircle {
  Margin?: number;
  MaxRadius?: number;
}
export type SensitiveDouble = number;
export interface Circle {
  Center: number[];
  Radius: number;
}
export interface RouteMatrixBoundaryGeometry {
  AutoCircle?: RouteMatrixAutoCircle;
  Circle?: Circle;
  BoundingBox?: number[];
  Polygon?: number[][][];
}
export interface RouteMatrixBoundary {
  Geometry?: RouteMatrixBoundaryGeometry;
  Unbounded?: boolean;
}
export interface RouteMatrixTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: TrafficUsage;
}
export type RouteMatrixTravelMode = "Car" | "Pedestrian" | "Scooter" | "Truck" | (string & {});
export interface RouteMatrixVehicleLicensePlate {
  LastCharacter?: string;
}
export interface RouteMatrixCarOptions {
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface RouteMatrixScooterOptions {
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export type RouteMatrixHazardousCargoType =
  | "Combustible"
  | "Corrosive"
  | "Explosive"
  | "Flammable"
  | "Gas"
  | "HarmfulToWater"
  | "Organic"
  | "Other"
  | "Poison"
  | "PoisonousInhalation"
  | "Radioactive"
  | (string & {});
export type RouteMatrixHazardousCargoTypeList = RouteMatrixHazardousCargoType[];
export interface RouteMatrixTrailerOptions {
  TrailerCount?: number;
}
export type RouteMatrixTruckType = "LightTruck" | "StraightTruck" | "Tractor" | (string & {});
export interface RouteMatrixTruckOptions {
  AxleCount?: number;
  GrossWeight?: number;
  HazardousCargos?: RouteMatrixHazardousCargoType[];
  Height?: number;
  KpraLength?: number;
  Length?: number;
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
  PayloadCapacity?: number;
  Trailer?: RouteMatrixTrailerOptions;
  TruckType?: RouteMatrixTruckType;
  TunnelRestrictionCode?: string | redacted.Redacted<string>;
  WeightPerAxle?: number;
  WeightPerAxleGroup?: WeightPerAxleGroup;
  Width?: number;
}
export interface RouteMatrixTravelModeOptions {
  Car?: RouteMatrixCarOptions;
  Scooter?: RouteMatrixScooterOptions;
  Truck?: RouteMatrixTruckOptions;
}
export interface CalculateRouteMatrixRequest {
  Allow?: RouteMatrixAllowOptions;
  Avoid?: RouteMatrixAvoidanceOptions;
  DepartNow?: boolean;
  DepartureTime?: string | redacted.Redacted<string>;
  Destinations: RouteMatrixDestination[];
  Exclude?: RouteMatrixExclusionOptions;
  Key?: string | redacted.Redacted<string>;
  OptimizeRoutingFor?: RoutingObjective;
  Origins: RouteMatrixOrigin[];
  RoutingBoundary?: RouteMatrixBoundary;
  Traffic?: RouteMatrixTrafficOptions;
  TravelMode?: RouteMatrixTravelMode;
  TravelModeOptions?: RouteMatrixTravelModeOptions;
}
export type RouteMatrixErrorCode =
  | "NoMatch"
  | "NoMatchDestination"
  | "NoMatchOrigin"
  | "NoRoute"
  | "OutOfBounds"
  | "OutOfBoundsDestination"
  | "OutOfBoundsOrigin"
  | "Other"
  | "Violation"
  | (string & {});
export interface RouteMatrixEntry {
  Distance: number;
  Duration: number;
  Error?: RouteMatrixErrorCode;
}
export type RouteMatrixRow = RouteMatrixEntry[];
export type RouteMatrix = RouteMatrixEntry[][];
export interface CalculateRouteMatrixResponse {
  ErrorCount: number;
  PricingBucket: string;
  RouteMatrix: RouteMatrixEntry[][];
  RoutingBoundary: RouteMatrixBoundary;
}
export interface RouteAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
export interface RouteAvoidanceAreaGeometry {
  Corridor?: Corridor;
  BoundingBox?: number[];
  Polygon?: number[][][];
  PolylineCorridor?: PolylineCorridor;
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
export type RouteAvoidanceAreaGeometryList = RouteAvoidanceAreaGeometry[];
export interface RouteAvoidanceArea {
  Except?: RouteAvoidanceAreaGeometry[];
  Geometry: RouteAvoidanceAreaGeometry;
}
export type RouteAvoidanceAreaList = RouteAvoidanceArea[];
export type RouteZoneCategory = "CongestionPricing" | "Environmental" | "Vignette" | (string & {});
export interface RouteAvoidanceZoneCategory {
  Category: RouteZoneCategory;
}
export type RouteAvoidanceZoneCategoryList = RouteAvoidanceZoneCategory[];
export interface RouteAvoidanceOptions {
  Areas?: RouteAvoidanceArea[];
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  SeasonalClosure?: boolean;
  TollRoads?: boolean;
  TollTransponders?: boolean;
  TruckRoadTypes?: (string | redacted.Redacted<string>)[];
  Tunnels?: boolean;
  UTurns?: boolean;
  ZoneCategories?: RouteAvoidanceZoneCategory[];
}
export interface RouteMatchingOptions {
  NameHint?: string | redacted.Redacted<string>;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: MatchingStrategy;
}
export interface RouteSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
export interface RouteDestinationOptions {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  SideOfStreet?: RouteSideOfStreetOptions;
  StopDuration?: number;
}
export interface RouteDriverScheduleInterval {
  DriveDuration: number;
  RestDuration: number;
}
export type RouteDriverScheduleIntervalList = RouteDriverScheduleInterval[];
export interface RouteDriverOptions {
  Schedule?: RouteDriverScheduleInterval[];
}
export interface RouteExclusionOptions {
  Countries: (string | redacted.Redacted<string>)[];
}
export type MeasurementSystem = "Metric" | "Imperial" | (string & {});
export type LanguageTag = string;
export type LanguageTagList = string[];
export type RouteLegAdditionalFeature =
  | "Elevation"
  | "Incidents"
  | "PassThroughWaypoints"
  | "Summary"
  | "Tolls"
  | "TravelStepInstructions"
  | "TruckRoadTypes"
  | "TypicalDuration"
  | "Zones"
  | "Bookings"
  | "IntermediateStops"
  | "NextDepartures"
  | (string & {});
export type RouteLegAdditionalFeatureList = RouteLegAdditionalFeature[];
export interface RouteOriginOptions {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  SideOfStreet?: RouteSideOfStreetOptions;
}
export type RouteSpanAdditionalFeature =
  | "BestCaseDuration"
  | "CarAccess"
  | "Country"
  | "Distance"
  | "Duration"
  | "DynamicSpeed"
  | "FunctionalClassification"
  | "Gates"
  | "Incidents"
  | "Names"
  | "Notices"
  | "PedestrianAccess"
  | "RailwayCrossings"
  | "Region"
  | "RoadAttributes"
  | "RouteNumbers"
  | "ScooterAccess"
  | "SpeedLimit"
  | "TollSystems"
  | "TruckAccess"
  | "TruckRoadTypes"
  | "TypicalDuration"
  | "Zones"
  | "Consumption"
  | (string & {});
export type RouteSpanAdditionalFeatureList = RouteSpanAdditionalFeature[];
export type CurrencyCode = string;
export interface RouteEmissionType {
  Co2EmissionClass?: string | redacted.Redacted<string>;
  Type: string | redacted.Redacted<string>;
}
export type RouteTollVehicleCategory = "Minibus" | (string & {});
export interface RouteTollOptions {
  AllTransponders?: boolean;
  AllVignettes?: boolean;
  Currency?: string;
  EmissionType?: RouteEmissionType;
  VehicleCategory?: RouteTollVehicleCategory;
}
export interface RouteTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: TrafficUsage;
}
export type RouteTravelMode =
  | "Car"
  | "Pedestrian"
  | "Scooter"
  | "Truck"
  | "Intermodal"
  | "Transit"
  | (string & {});
export type RouteEngineType = "Electric" | "InternalCombustion" | "PluginHybrid" | (string & {});
export interface RouteVehicleLicensePlate {
  LastCharacter?: string | redacted.Redacted<string>;
}
export interface RouteCarOptions {
  EngineType?: RouteEngineType;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface RoutePedestrianOptions {
  Speed?: number;
}
export interface RouteScooterOptions {
  EngineType?: RouteEngineType;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export type RouteHazardousCargoType =
  | "Combustible"
  | "Corrosive"
  | "Explosive"
  | "Flammable"
  | "Gas"
  | "HarmfulToWater"
  | "Organic"
  | "Other"
  | "Poison"
  | "PoisonousInhalation"
  | "Radioactive"
  | (string & {});
export type RouteHazardousCargoTypeList = RouteHazardousCargoType[];
export interface RouteTrailerOptions {
  AxleCount?: number;
  TrailerCount?: number;
}
export type RouteTruckType = "LightTruck" | "StraightTruck" | "Tractor" | (string & {});
export interface RouteTruckOptions {
  AxleCount?: number;
  EngineType?: RouteEngineType;
  GrossWeight?: number;
  HazardousCargos?: RouteHazardousCargoType[];
  Height?: number;
  HeightAboveFirstAxle?: number;
  KpraLength?: number;
  Length?: number;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
  PayloadCapacity?: number;
  TireCount?: number;
  Trailer?: RouteTrailerOptions;
  TruckType?: RouteTruckType;
  TunnelRestrictionCode?: string | redacted.Redacted<string>;
  WeightPerAxle?: number;
  WeightPerAxleGroup?: WeightPerAxleGroup;
  Width?: number;
}
export type RouteAccessibilityAttribute = "Wheelchair" | (string & {});
export type RouteAccessibilityAttributeList = RouteAccessibilityAttribute[];
export interface RouteIntermodalPedestrianOptions {
  MaxDistance?: number;
  Speed?: number;
}
export type RouteRentalMode = "All" | "Car" | (string & {});
export type RouteRentalModeList = RouteRentalMode[];
export type RouteIntermodalEnabledLegs =
  | "FirstLeg"
  | "LastLeg"
  | "EntireRoute"
  | "None"
  | (string & {});
export type RouteIntermodalEnabledLegsList = RouteIntermodalEnabledLegs[];
export interface RouteIntermodalRentalOptions {
  AllowedModes?: RouteRentalMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteRentalMode[];
}
export type RouteTaxiMode = "All" | "Car" | (string & {});
export type RouteTaxiModeList = RouteTaxiMode[];
export interface RouteIntermodalTaxiOptions {
  AllowedModes?: RouteTaxiMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteTaxiMode[];
}
export type RouteTransitMode =
  | "AerialTramway"
  | "Airplane"
  | "All"
  | "Bus"
  | "BusRapidTransit"
  | "CityTrain"
  | "Ferry"
  | "FunicularRailway"
  | "HighSpeedTrain"
  | "IntercityTrain"
  | "InterregionalTrain"
  | "LightRail"
  | "Monorail"
  | "PrivateBus"
  | "RegionalTrain"
  | "Subway"
  | (string & {});
export type RouteTransitModeList = RouteTransitMode[];
export interface RouteIntermodalTransitOptions {
  AllowedModes?: RouteTransitMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteTransitMode[];
}
export type RouteVehicleMode = "All" | "Car" | (string & {});
export type RouteVehicleModeList = RouteVehicleMode[];
export interface RouteIntermodalVehicleOptions {
  AllowedModes?: RouteVehicleMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteVehicleMode[];
}
export interface RouteIntermodalOptions {
  AccessibilityAttributes?: RouteAccessibilityAttribute[];
  MaxTransfers?: number;
  Pedestrian?: RouteIntermodalPedestrianOptions;
  Rental?: RouteIntermodalRentalOptions;
  Taxi?: RouteIntermodalTaxiOptions;
  Transit?: RouteIntermodalTransitOptions;
  Vehicle?: RouteIntermodalVehicleOptions;
}
export interface RouteTransitPedestrianOptions {
  MaxDistance?: number;
  Speed?: number;
}
export interface RouteTransitOptions {
  AccessibilityAttributes?: RouteAccessibilityAttribute[];
  AllowedModes?: RouteTransitMode[];
  ExcludedModes?: RouteTransitMode[];
  MaxTransfers?: number;
  Pedestrian?: RouteTransitPedestrianOptions;
}
export interface RouteTravelModeOptions {
  Car?: RouteCarOptions;
  Pedestrian?: RoutePedestrianOptions;
  Scooter?: RouteScooterOptions;
  Truck?: RouteTruckOptions;
  Intermodal?: RouteIntermodalOptions;
  Transit?: RouteTransitOptions;
}
export type RouteTravelStepType = "Default" | "TurnByTurn" | (string & {});
export interface RouteWaypoint {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  PassThrough?: boolean;
  Position: number[];
  SideOfStreet?: RouteSideOfStreetOptions;
  StopDuration?: number;
}
export type RouteWaypointList = RouteWaypoint[];
export interface CalculateRoutesRequest {
  Allow?: RouteAllowOptions;
  ArrivalTime?: string | redacted.Redacted<string>;
  Avoid?: RouteAvoidanceOptions;
  DepartNow?: boolean;
  DepartureTime?: string | redacted.Redacted<string>;
  Destination: number[];
  DestinationOptions?: RouteDestinationOptions;
  Driver?: RouteDriverOptions;
  Exclude?: RouteExclusionOptions;
  InstructionsMeasurementSystem?: MeasurementSystem;
  Key?: string | redacted.Redacted<string>;
  Languages?: string[];
  LegAdditionalFeatures?: RouteLegAdditionalFeature[];
  LegGeometryFormat?: GeometryFormat;
  MaxAlternatives?: number;
  OptimizeRoutingFor?: RoutingObjective;
  Origin: number[];
  OriginOptions?: RouteOriginOptions;
  SpanAdditionalFeatures?: RouteSpanAdditionalFeature[];
  Tolls?: RouteTollOptions;
  Traffic?: RouteTrafficOptions;
  TravelMode?: RouteTravelMode;
  TravelModeOptions?: RouteTravelModeOptions;
  TravelStepType?: RouteTravelStepType;
  Waypoints?: RouteWaypoint[];
}
export type RouteResponseNoticeCode =
  | "MainLanguageNotFound"
  | "Other"
  | "TravelTimeExceedsDriverWorkHours"
  | "TransitDataUnavailable"
  | "TransitRouteUnavailable"
  | "NoTransitStationsFound"
  | (string & {});
export type RouteNoticeImpact = "High" | "Low" | (string & {});
export interface RouteResponseNotice {
  Code: RouteResponseNoticeCode;
  Impact?: RouteNoticeImpact;
}
export type RouteResponseNoticeList = RouteResponseNotice[];
export type RouteFerryAfterTravelStepType = "Deboard" | (string & {});
export interface RouteFerryAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteFerryAfterTravelStepType;
}
export type RouteFerryAfterTravelStepList = RouteFerryAfterTravelStep[];
export type Position23 = number[];
export interface RouteFerryPlace {
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  WaypointIndex?: number;
}
export interface RouteFerryArrival {
  Place: RouteFerryPlace;
  Time?: string | redacted.Redacted<string>;
}
export type RouteFerryBeforeTravelStepType = "Board" | (string & {});
export interface RouteFerryBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteFerryBeforeTravelStepType;
}
export type RouteFerryBeforeTravelStepList = RouteFerryBeforeTravelStep[];
export interface RouteFerryDeparture {
  Place: RouteFerryPlace;
  Time?: string | redacted.Redacted<string>;
}
export type RouteFerryNoticeCode =
  | "AccuratePolylineUnavailable"
  | "NoSchedule"
  | "Other"
  | "ViolatedAvoidFerry"
  | "ViolatedAvoidRailFerry"
  | "SeasonalClosure"
  | "PotentialViolatedVehicleRestrictionUsage"
  | "ViolatedAvoidAreas"
  | "ViolatedVehicleRestriction"
  | (string & {});
export interface RouteFerryNotice {
  Code: RouteFerryNoticeCode;
  Impact?: RouteNoticeImpact;
}
export type RouteFerryNoticeList = RouteFerryNotice[];
export interface RoutePassThroughPlace {
  OriginalPosition?: number[];
  Position: number[];
  WaypointIndex?: number;
}
export interface RoutePassThroughWaypoint {
  GeometryOffset?: number;
  Place: RoutePassThroughPlace;
}
export type RoutePassThroughWaypointList = RoutePassThroughWaypoint[];
export type CountryCode3 = string | redacted.Redacted<string>;
export interface LocalizedString {
  Language?: string;
  Value: string | redacted.Redacted<string>;
}
export type LocalizedStringList = LocalizedString[];
export interface RouteFerrySpan {
  Country?: string | redacted.Redacted<string>;
  Distance?: number;
  Duration?: number;
  GeometryOffset?: number;
  Names?: LocalizedString[];
  Region?: string | redacted.Redacted<string>;
}
export type RouteFerrySpanList = RouteFerrySpan[];
export interface RouteFerryOverviewSummary {
  Distance: number;
  Duration: number;
}
export interface RouteFerryTravelOnlySummary {
  Duration: number;
}
export interface RouteFerrySummary {
  Overview?: RouteFerryOverviewSummary;
  TravelOnly?: RouteFerryTravelOnlySummary;
}
export type RouteFerryTravelStepType = "Depart" | "Continue" | "Arrive" | (string & {});
export interface RouteFerryTravelStep {
  Distance?: number;
  Duration: number;
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteFerryTravelStepType;
}
export type RouteFerryTravelStepList = RouteFerryTravelStep[];
export interface RouteFerryLegDetails {
  AfterTravelSteps?: RouteFerryAfterTravelStep[];
  Arrival: RouteFerryArrival;
  BeforeTravelSteps?: RouteFerryBeforeTravelStep[];
  Departure: RouteFerryDeparture;
  Notices?: RouteFerryNotice[];
  PassThroughWaypoints?: RoutePassThroughWaypoint[];
  RouteName?: string | redacted.Redacted<string>;
  Spans?: RouteFerrySpan[];
  Summary?: RouteFerrySummary;
  TravelSteps?: RouteFerryTravelStep[];
}
export interface RouteLegGeometry {
  LineString?: number[][];
  Polyline?: string | redacted.Redacted<string>;
}
export type RoutePedestrianAfterTravelStepType = "Wait" | (string & {});
export interface RoutePedestrianAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RoutePedestrianAfterTravelStepType;
}
export type RoutePedestrianAfterTravelStepList = RoutePedestrianAfterTravelStep[];
export type RouteAccessibilityAvailability =
  | "Available"
  | "Limited"
  | "Unavailable"
  | "Unknown"
  | (string & {});
export interface RouteAccessibilityAvailabilityDetails {
  Wheelchair?: RouteAccessibilityAvailability;
}
export interface RouteAccessPointDetails {
  Accessibility?: RouteAccessibilityAvailabilityDetails;
}
export type RouteSideOfStreet = "Left" | "Right" | (string & {});
export interface RouteStationDetails {
  Accessibility?: RouteAccessibilityAvailabilityDetails;
  PlatformName?: string | redacted.Redacted<string>;
  ShortName?: string | redacted.Redacted<string>;
}
export type RoutePedestrianPlaceType =
  | "AccessPoint"
  | "DockingStation"
  | "ParkingLot"
  | "Station"
  | (string & {});
export interface RoutePedestrianPlace {
  AccessPointDetails?: RouteAccessPointDetails;
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  SideOfStreet?: RouteSideOfStreet;
  StationDetails?: RouteStationDetails;
  Type?: RoutePedestrianPlaceType;
  WaypointIndex?: number;
}
export interface RoutePedestrianArrival {
  Place: RoutePedestrianPlace;
  Time?: string | redacted.Redacted<string>;
}
export interface RoutePedestrianDeparture {
  Place: RoutePedestrianPlace;
  Time?: string | redacted.Redacted<string>;
}
export type RoutePedestrianNoticeCode =
  | "AccuratePolylineUnavailable"
  | "Other"
  | "ViolatedAvoidDirtRoad"
  | "ViolatedAvoidTunnel"
  | "ViolatedPedestrianOption"
  | "ViolatedAvoidAreas"
  | (string & {});
export interface RoutePedestrianNotice {
  Code: RoutePedestrianNoticeCode;
  Impact?: RouteNoticeImpact;
}
export type RoutePedestrianNoticeList = RoutePedestrianNotice[];
export interface RouteSpanDynamicSpeedDetails {
  BestCaseSpeed?: number;
  TurnDuration?: number;
  TypicalSpeed?: number;
}
export type IndexList = number[];
export type RouteSpanPedestrianAccessAttribute =
  | "Allowed"
  | "Indoors"
  | "NoThroughTraffic"
  | "Park"
  | "Stairs"
  | "TollRoad"
  | (string & {});
export type RouteSpanPedestrianAccessAttributeList = RouteSpanPedestrianAccessAttribute[];
export type RouteSpanRoadAttribute =
  | "Bridge"
  | "BuiltUpArea"
  | "ControlledAccessHighway"
  | "DirtRoad"
  | "DividedRoad"
  | "Motorway"
  | "PrivateRoad"
  | "Ramp"
  | "RightHandTraffic"
  | "Roundabout"
  | "Tunnel"
  | "UnderConstruction"
  | (string & {});
export type RouteSpanRoadAttributeList = RouteSpanRoadAttribute[];
export type RouteDirection = "East" | "North" | "South" | "West" | (string & {});
export interface RouteNumber {
  Direction?: RouteDirection;
  Language?: string;
  Value: string | redacted.Redacted<string>;
}
export type RouteNumberList = RouteNumber[];
export interface RouteSpanSpeedLimitDetails {
  MaxSpeed?: number;
  Unlimited?: boolean;
}
export interface RoutePedestrianSpan {
  BestCaseDuration?: number;
  Country?: string | redacted.Redacted<string>;
  Distance?: number;
  Duration?: number;
  DynamicSpeed?: RouteSpanDynamicSpeedDetails;
  FunctionalClassification?: number;
  GeometryOffset?: number;
  Incidents?: number[];
  Names?: LocalizedString[];
  PedestrianAccess?: RouteSpanPedestrianAccessAttribute[];
  Region?: string | redacted.Redacted<string>;
  RoadAttributes?: RouteSpanRoadAttribute[];
  RouteNumbers?: RouteNumber[];
  SpeedLimit?: RouteSpanSpeedLimitDetails;
  TypicalDuration?: number;
}
export type RoutePedestrianSpanList = RoutePedestrianSpan[];
export interface RoutePedestrianOverviewSummary {
  Distance: number;
  Duration: number;
}
export interface RoutePedestrianTravelOnlySummary {
  Duration: number;
}
export interface RoutePedestrianSummary {
  Overview?: RoutePedestrianOverviewSummary;
  TravelOnly?: RoutePedestrianTravelOnlySummary;
}
export interface RouteContinueStepDetails {
  Intersection: LocalizedString[];
}
export type RouteRoadType = "Highway" | "Rural" | "Urban" | (string & {});
export interface RouteRoad {
  RoadName: LocalizedString[];
  RouteNumber: RouteNumber[];
  Towards: LocalizedString[];
  Type?: RouteRoadType;
}
export type RouteSteeringDirection = "Left" | "Right" | "Straight" | (string & {});
export type TurnAngle = number;
export type RouteTurnIntensity = "Sharp" | "Slight" | "Typical" | (string & {});
export interface RouteKeepStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export interface RouteRoundaboutEnterStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export type RoundaboutAngle = number;
export interface RouteRoundaboutExitStepDetails {
  Intersection: LocalizedString[];
  RelativeExit?: number;
  RoundaboutAngle?: number;
  SteeringDirection?: RouteSteeringDirection;
}
export interface RouteRoundaboutPassStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export interface RouteSignpostLabel {
  RouteNumber?: RouteNumber;
  Text?: LocalizedString;
}
export type RouteSignpostLabelList = RouteSignpostLabel[];
export interface RouteSignpost {
  Labels: RouteSignpostLabel[];
}
export interface RouteTurnStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export type RoutePedestrianTravelStepType =
  | "Arrive"
  | "Continue"
  | "Depart"
  | "Keep"
  | "RoundaboutEnter"
  | "RoundaboutExit"
  | "RoundaboutPass"
  | "Turn"
  | (string & {});
export interface RoutePedestrianTravelStep {
  ContinueStepDetails?: RouteContinueStepDetails;
  CurrentRoad?: RouteRoad;
  Distance?: number;
  Duration: number;
  ExitNumber?: LocalizedString[];
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  KeepStepDetails?: RouteKeepStepDetails;
  NextRoad?: RouteRoad;
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails;
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails;
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails;
  Signpost?: RouteSignpost;
  TurnStepDetails?: RouteTurnStepDetails;
  Type: RoutePedestrianTravelStepType;
}
export type RoutePedestrianTravelStepList = RoutePedestrianTravelStep[];
export interface RoutePedestrianLegDetails {
  AfterTravelSteps?: RoutePedestrianAfterTravelStep[];
  Arrival: RoutePedestrianArrival;
  Departure: RoutePedestrianDeparture;
  Notices?: RoutePedestrianNotice[];
  PassThroughWaypoints?: RoutePassThroughWaypoint[];
  Spans?: RoutePedestrianSpan[];
  Summary?: RoutePedestrianSummary;
  TravelSteps?: RoutePedestrianTravelStep[];
}
export type RouteLegTravelMode =
  | "Car"
  | "Ferry"
  | "Pedestrian"
  | "Scooter"
  | "Truck"
  | "CarShuttleTrain"
  | "AerialTramway"
  | "Airplane"
  | "Bus"
  | "BusRapidTransit"
  | "CityTrain"
  | "FunicularRailway"
  | "HighSpeedTrain"
  | "IntercityTrain"
  | "InterregionalTrain"
  | "LightRail"
  | "Monorail"
  | "PrivateBus"
  | "RegionalTrain"
  | "Subway"
  | (string & {});
export type RouteLegType =
  | "Ferry"
  | "Pedestrian"
  | "Vehicle"
  | "Rental"
  | "Taxi"
  | "Transit"
  | (string & {});
export type EnergyKilowattHours = number;
export type PowerKilowatts = number;
export interface RouteChargeStepDetails {
  ArrivalCharge?: number;
  ConsumablePower?: number;
  DesiredCharge?: number;
}
export type RouteVehicleAfterTravelStepType = "Park" | (string & {});
export interface RouteVehicleAfterTravelStep {
  ChargeStepDetails?: RouteChargeStepDetails;
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteVehicleAfterTravelStepType;
}
export type RouteVehicleAfterTravelStepList = RouteVehicleAfterTravelStep[];
export type RouteVehiclePlaceType =
  | "AccessPoint"
  | "DockingStation"
  | "ParkingLot"
  | "Station"
  | (string & {});
export interface RouteVehiclePlace {
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  SideOfStreet?: RouteSideOfStreet;
  WaypointIndex?: number;
  AccessPointDetails?: RouteAccessPointDetails;
  StationDetails?: RouteStationDetails;
  Type?: RouteVehiclePlaceType;
}
export interface RouteVehicleArrival {
  Place: RouteVehiclePlace;
  Time?: string | redacted.Redacted<string>;
}
export interface RouteVehicleDeparture {
  Place: RouteVehiclePlace;
  Time?: string | redacted.Redacted<string>;
}
export type RouteVehicleIncidentSeverity = "Critical" | "High" | "Medium" | "Low" | (string & {});
export type RouteVehicleIncidentType =
  | "Accident"
  | "Congestion"
  | "Construction"
  | "DisabledVehicle"
  | "LaneRestriction"
  | "MassTransit"
  | "Other"
  | "PlannedEvent"
  | "RoadClosure"
  | "RoadHazard"
  | "Weather"
  | (string & {});
export interface RouteVehicleIncident {
  Description?: string | redacted.Redacted<string>;
  EndTime?: string | redacted.Redacted<string>;
  Severity?: RouteVehicleIncidentSeverity;
  StartTime?: string | redacted.Redacted<string>;
  Type?: RouteVehicleIncidentType;
}
export type RouteVehicleIncidentList = RouteVehicleIncident[];
export type RouteVehicleNoticeCode =
  | "AccuratePolylineUnavailable"
  | "Other"
  | "PotentialViolatedAvoidTollRoadUsage"
  | "PotentialViolatedCarpoolUsage"
  | "PotentialViolatedTurnRestrictionUsage"
  | "PotentialViolatedVehicleRestrictionUsage"
  | "PotentialViolatedZoneRestrictionUsage"
  | "SeasonalClosure"
  | "TollsDataTemporarilyUnavailable"
  | "TollsDataUnavailable"
  | "TollTransponder"
  | "ViolatedAvoidControlledAccessHighway"
  | "ViolatedAvoidDifficultTurns"
  | "ViolatedAvoidDirtRoad"
  | "ViolatedAvoidSeasonalClosure"
  | "ViolatedAvoidTollRoad"
  | "ViolatedAvoidTollTransponder"
  | "ViolatedAvoidTruckRoadType"
  | "ViolatedAvoidTunnel"
  | "ViolatedAvoidUTurns"
  | "ViolatedBlockedRoad"
  | "ViolatedCarpool"
  | "ViolatedEmergencyGate"
  | "ViolatedStartDirection"
  | "ViolatedTurnRestriction"
  | "ViolatedVehicleRestriction"
  | "ViolatedZoneRestriction"
  | "TravelTimeExceedsDriverWorkHours"
  | (string & {});
export interface RouteNoticeDetailRange {
  Min?: number;
  Max?: number;
}
export type RouteWeightConstraintType = "Current" | "Gross" | "Unknown" | (string & {});
export interface RouteWeightConstraint {
  Type: RouteWeightConstraintType;
  Value: number;
}
export interface RouteViolatedConstraints {
  AllHazardsRestricted?: boolean;
  AxleCount?: RouteNoticeDetailRange;
  HazardousCargos: RouteHazardousCargoType[];
  MaxHeight?: number;
  MaxKpraLength?: number;
  MaxLength?: number;
  MaxPayloadCapacity?: number;
  MaxWeight?: RouteWeightConstraint;
  MaxWeightPerAxle?: number;
  MaxWeightPerAxleGroup?: WeightPerAxleGroup;
  MaxWidth?: number;
  Occupancy?: RouteNoticeDetailRange;
  RestrictedTimes?: string;
  TimeDependent?: boolean;
  TrailerCount?: RouteNoticeDetailRange;
  TravelMode?: boolean;
  TruckRoadType?: string;
  TruckType?: RouteTruckType;
  TunnelRestrictionCode?: string | redacted.Redacted<string>;
}
export interface RouteVehicleNoticeDetail {
  Title?: string | redacted.Redacted<string>;
  ViolatedConstraints?: RouteViolatedConstraints;
}
export type RouteVehicleNoticeDetailList = RouteVehicleNoticeDetail[];
export interface RouteVehicleNotice {
  Code: RouteVehicleNoticeCode;
  Details: RouteVehicleNoticeDetail[];
  Impact?: RouteNoticeImpact;
}
export type RouteVehicleNoticeList = RouteVehicleNotice[];
export type RouteSpanCarAccessAttribute =
  | "Allowed"
  | "NoThroughTraffic"
  | "TollRoad"
  | (string & {});
export type RouteSpanCarAccessAttributeList = RouteSpanCarAccessAttribute[];
export type RouteSpanGateAttribute =
  | "Emergency"
  | "KeyAccess"
  | "PermissionRequired"
  | (string & {});
export type RouteSpanRailwayCrossingAttribute = "Protected" | "Unprotected" | (string & {});
export type RouteSpanScooterAccessAttribute =
  | "Allowed"
  | "NoThroughTraffic"
  | "TollRoad"
  | (string & {});
export type RouteSpanScooterAccessAttributeList = RouteSpanScooterAccessAttribute[];
export type RouteSpanTruckAccessAttribute =
  | "Allowed"
  | "NoThroughTraffic"
  | "TollRoad"
  | (string & {});
export type RouteSpanTruckAccessAttributeList = RouteSpanTruckAccessAttribute[];
export interface RouteVehicleSpan {
  BestCaseDuration?: number;
  CarAccess?: RouteSpanCarAccessAttribute[];
  Country?: string | redacted.Redacted<string>;
  Distance?: number;
  Duration?: number;
  DynamicSpeed?: RouteSpanDynamicSpeedDetails;
  FunctionalClassification?: number;
  Gate?: RouteSpanGateAttribute;
  GeometryOffset?: number;
  Incidents?: number[];
  Names?: LocalizedString[];
  Notices?: number[];
  RailwayCrossing?: RouteSpanRailwayCrossingAttribute;
  Region?: string | redacted.Redacted<string>;
  RoadAttributes?: RouteSpanRoadAttribute[];
  RouteNumbers?: RouteNumber[];
  ScooterAccess?: RouteSpanScooterAccessAttribute[];
  SpeedLimit?: RouteSpanSpeedLimitDetails;
  TollSystems?: number[];
  TruckAccess?: RouteSpanTruckAccessAttribute[];
  TruckRoadTypes?: number[];
  TypicalDuration?: number;
  Zones?: number[];
}
export type RouteVehicleSpanList = RouteVehicleSpan[];
export interface RouteVehicleOverviewSummary {
  BestCaseDuration?: number;
  Distance: number;
  Duration: number;
  TypicalDuration?: number;
}
export interface RouteVehicleTravelOnlySummary {
  BestCaseDuration?: number;
  Duration: number;
  TypicalDuration?: number;
}
export interface RouteVehicleSummary {
  Overview?: RouteVehicleOverviewSummary;
  TravelOnly?: RouteVehicleTravelOnlySummary;
}
export interface RouteTollPaymentSite {
  Name?: string;
  Position: number[];
}
export type RouteTollPaymentSiteList = RouteTollPaymentSite[];
export interface RouteTollPriceValueRange {
  Min: number;
  Max: number;
}
export interface RouteTollPrice {
  Currency: string;
  Estimate: boolean;
  PerDuration?: number;
  Range: boolean;
  RangeValue?: RouteTollPriceValueRange;
  Value: number;
}
export type RouteTollPassValidityPeriodType =
  | "Annual"
  | "Days"
  | "ExtendedAnnual"
  | "Minutes"
  | "Months"
  | (string & {});
export interface RouteTollPassValidityPeriod {
  Period: RouteTollPassValidityPeriodType;
  PeriodCount?: number;
}
export interface RouteTollPass {
  IncludesReturnTrip?: boolean;
  SeniorPass?: boolean;
  TransferCount?: number;
  TripCount?: number;
  ValidityPeriod?: RouteTollPassValidityPeriod;
}
export type RouteTollPaymentMethod =
  | "BankCard"
  | "Cash"
  | "CashExact"
  | "CreditCard"
  | "PassSubscription"
  | "TravelCard"
  | "Transponder"
  | "VideoToll"
  | (string & {});
export type RouteTollPaymentMethodList = RouteTollPaymentMethod[];
export interface RouteTransponder {
  SystemName?: string | redacted.Redacted<string>;
}
export type RouteTransponderList = RouteTransponder[];
export interface RouteTollRate {
  ApplicableTimes?: string | redacted.Redacted<string>;
  ConvertedPrice?: RouteTollPrice;
  Id: string | redacted.Redacted<string>;
  LocalPrice: RouteTollPrice;
  Name: string | redacted.Redacted<string>;
  Pass?: RouteTollPass;
  PaymentMethods: RouteTollPaymentMethod[];
  Transponders: RouteTransponder[];
}
export type RouteTollRateList = RouteTollRate[];
export interface RouteToll {
  Country?: string | redacted.Redacted<string>;
  PaymentSites: RouteTollPaymentSite[];
  Rates: RouteTollRate[];
  Systems: number[];
}
export type RouteTollList = RouteToll[];
export interface RouteTollSystem {
  Name?: string | redacted.Redacted<string>;
}
export type RouteTollSystemList = RouteTollSystem[];
export interface RouteContinueHighwayStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export interface RouteEnterHighwayStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export interface RouteExitStepDetails {
  Intersection: LocalizedString[];
  RelativeExit?: number;
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export interface RouteRampStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export type RouteVehicleTravelStepType =
  | "Arrive"
  | "Continue"
  | "ContinueHighway"
  | "Depart"
  | "EnterHighway"
  | "Exit"
  | "Keep"
  | "Ramp"
  | "RoundaboutEnter"
  | "RoundaboutExit"
  | "RoundaboutPass"
  | "Turn"
  | "UTurn"
  | (string & {});
export interface RouteUTurnStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
export interface RouteVehicleTravelStep {
  ContinueHighwayStepDetails?: RouteContinueHighwayStepDetails;
  ContinueStepDetails?: RouteContinueStepDetails;
  CurrentRoad?: RouteRoad;
  Distance?: number;
  Duration: number;
  EnterHighwayStepDetails?: RouteEnterHighwayStepDetails;
  ExitNumber?: LocalizedString[];
  ExitStepDetails?: RouteExitStepDetails;
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  KeepStepDetails?: RouteKeepStepDetails;
  NextRoad?: RouteRoad;
  RampStepDetails?: RouteRampStepDetails;
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails;
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails;
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails;
  Signpost?: RouteSignpost;
  TurnStepDetails?: RouteTurnStepDetails;
  Type: RouteVehicleTravelStepType;
  UTurnStepDetails?: RouteUTurnStepDetails;
}
export type RouteVehicleTravelStepList = RouteVehicleTravelStep[];
export interface RouteZone {
  Category?: RouteZoneCategory;
  Name?: string | redacted.Redacted<string>;
}
export type RouteZoneList = RouteZone[];
export interface RouteVehicleLegDetails {
  AfterTravelSteps?: RouteVehicleAfterTravelStep[];
  Arrival: RouteVehicleArrival;
  Departure: RouteVehicleDeparture;
  Incidents?: RouteVehicleIncident[];
  Notices?: RouteVehicleNotice[];
  PassThroughWaypoints?: RoutePassThroughWaypoint[];
  Spans?: RouteVehicleSpan[];
  Summary?: RouteVehicleSummary;
  Tolls?: RouteToll[];
  TollSystems?: RouteTollSystem[];
  TravelSteps?: RouteVehicleTravelStep[];
  TruckRoadTypes?: (string | redacted.Redacted<string>)[];
  Zones?: RouteZone[];
}
export type RouteRentalAfterTravelStepType = "Park" | (string & {});
export interface RouteRentalAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteRentalAfterTravelStepType;
}
export type RouteRentalAfterTravelStepList = RouteRentalAfterTravelStep[];
export interface RouteRentalAgency {
  Name: string | redacted.Redacted<string>;
  Url?: string | redacted.Redacted<string>;
}
export type RouteRentalPlaceType =
  | "AccessPoint"
  | "DockingStation"
  | "ParkingLot"
  | "Station"
  | (string & {});
export interface RouteRentalPlace {
  AccessPointDetails?: RouteAccessPointDetails;
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  StationDetails?: RouteStationDetails;
  Type?: RouteRentalPlaceType;
  WaypointIndex?: number;
}
export interface RouteRentalArrival {
  Place: RouteRentalPlace;
  Time?: string | redacted.Redacted<string>;
}
export type RouteAttributionType = "Disclaimer" | "Tariff" | (string & {});
export type RouteWebLinkDeviceType = "Android" | "Ios" | "Web" | (string & {});
export interface RouteWebLink {
  AnchorText?: string | redacted.Redacted<string>;
  Description: string | redacted.Redacted<string>;
  DeviceType?: RouteWebLinkDeviceType;
  Url?: string | redacted.Redacted<string>;
}
export interface RouteAttribution {
  AttributionType?: RouteAttributionType;
  WebLink: RouteWebLink;
}
export type RouteAttributionList = RouteAttribution[];
export type RouteRentalBeforeTravelStepType = "Setup" | (string & {});
export interface RouteRentalBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteRentalBeforeTravelStepType;
}
export type RouteRentalBeforeTravelStepList = RouteRentalBeforeTravelStep[];
export type RouteWebLinkList = RouteWebLink[];
export interface RouteRentalDeparture {
  Place: RouteRentalPlace;
  Time?: string | redacted.Redacted<string>;
}
export interface RouteRentalOverviewSummary {
  Duration: number;
  Distance: number;
}
export interface RouteRentalTravelOnlySummary {
  Duration: number;
}
export interface RouteRentalSummary {
  Overview?: RouteRentalOverviewSummary;
  TravelOnly?: RouteRentalTravelOnlySummary;
}
export interface RouteRentalTransportModeDetails {
  AvailableSeats?: number;
  Category?: string | redacted.Redacted<string>;
  Color?: string | redacted.Redacted<string>;
  Engine?: RouteEngineType;
  LicensePlate?: string | redacted.Redacted<string>;
  Mode: RouteRentalMode;
  Model?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
  TextColor?: string | redacted.Redacted<string>;
}
export type RouteRentalTravelStepType =
  | "Arrive"
  | "Continue"
  | "Depart"
  | "Exit"
  | "Keep"
  | "Ramp"
  | "RoundaboutEnter"
  | "RoundaboutExit"
  | "RoundaboutPass"
  | "Turn"
  | "UTurn"
  | (string & {});
export interface RouteRentalTravelStep {
  ContinueStepDetails?: RouteContinueStepDetails;
  Distance?: number;
  Duration: number;
  ExitStepDetails?: RouteExitStepDetails;
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  KeepStepDetails?: RouteKeepStepDetails;
  RampStepDetails?: RouteRampStepDetails;
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails;
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails;
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails;
  TurnStepDetails?: RouteTurnStepDetails;
  Type: RouteRentalTravelStepType;
  UTurnStepDetails?: RouteUTurnStepDetails;
}
export type RouteRentalTravelStepList = RouteRentalTravelStep[];
export interface RouteRentalLegDetails {
  AfterTravelSteps?: RouteRentalAfterTravelStep[];
  Agency: RouteRentalAgency;
  Arrival: RouteRentalArrival;
  Attributions?: RouteAttribution[];
  BeforeTravelSteps?: RouteRentalBeforeTravelStep[];
  BookingWebLinks?: RouteWebLink[];
  Departure: RouteRentalDeparture;
  Summary?: RouteRentalSummary;
  Transport: RouteRentalTransportModeDetails;
  TravelSteps?: RouteRentalTravelStep[];
}
export type RouteTaxiAfterTravelStepType = "Park" | (string & {});
export interface RouteTaxiAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTaxiAfterTravelStepType;
}
export type RouteTaxiAfterTravelStepList = RouteTaxiAfterTravelStep[];
export interface RouteTaxiAgency {
  Name: string | redacted.Redacted<string>;
  Url?: string | redacted.Redacted<string>;
}
export type RouteTaxiPlaceType = "AccessPoint" | "Station" | (string & {});
export interface RouteTaxiPlace {
  AccessPointDetails?: RouteAccessPointDetails;
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  StationDetails?: RouteStationDetails;
  Type?: RouteTaxiPlaceType;
  WaypointIndex?: number;
}
export interface RouteTaxiArrival {
  Place: RouteTaxiPlace;
  Time?: string | redacted.Redacted<string>;
}
export type RouteTaxiBeforeTravelStepType = "Wait" | (string & {});
export interface RouteTaxiBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTaxiBeforeTravelStepType;
}
export type RouteTaxiBeforeTravelStepList = RouteTaxiBeforeTravelStep[];
export interface RouteTaxiDeparture {
  Place: RouteTaxiPlace;
  Time?: string | redacted.Redacted<string>;
}
export type RouteTaxiNoticeCode = "AccuratePolylineUnavailable" | "Other" | (string & {});
export interface RouteTaxiNotice {
  Code: RouteTaxiNoticeCode;
  Impact?: RouteNoticeImpact;
}
export type RouteTaxiNoticeList = RouteTaxiNotice[];
export interface RouteTaxiOverviewSummary {
  Duration: number;
  Distance: number;
}
export interface RouteTaxiTravelOnlySummary {
  Duration: number;
}
export interface RouteTaxiSummary {
  Overview?: RouteTaxiOverviewSummary;
  TravelOnly?: RouteTaxiTravelOnlySummary;
}
export interface RouteTaxiTransportModeDetails {
  AvailableSeats?: number;
  Category?: string | redacted.Redacted<string>;
  Color?: string | redacted.Redacted<string>;
  Engine?: RouteEngineType;
  LicensePlate?: string | redacted.Redacted<string>;
  Mode: RouteTaxiMode;
  Model?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
  TextColor?: string | redacted.Redacted<string>;
}
export type RouteTaxiTravelStepType =
  | "Arrive"
  | "Continue"
  | "Depart"
  | "Exit"
  | "Keep"
  | "Ramp"
  | "RoundaboutEnter"
  | "RoundaboutExit"
  | "RoundaboutPass"
  | "Turn"
  | "UTurn"
  | (string & {});
export interface RouteTaxiTravelStep {
  ContinueStepDetails?: RouteContinueStepDetails;
  Distance?: number;
  Duration: number;
  ExitStepDetails?: RouteExitStepDetails;
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  KeepStepDetails?: RouteKeepStepDetails;
  RampStepDetails?: RouteRampStepDetails;
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails;
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails;
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails;
  TurnStepDetails?: RouteTurnStepDetails;
  Type: RouteTaxiTravelStepType;
  UTurnStepDetails?: RouteUTurnStepDetails;
}
export type RouteTaxiTravelStepList = RouteTaxiTravelStep[];
export interface RouteTaxiLegDetails {
  AfterTravelSteps?: RouteTaxiAfterTravelStep[];
  Agency: RouteTaxiAgency;
  Arrival: RouteTaxiArrival;
  Attributions?: RouteAttribution[];
  BeforeTravelSteps?: RouteTaxiBeforeTravelStep[];
  BookingWebLinks?: RouteWebLink[];
  Departure: RouteTaxiDeparture;
  Notices?: RouteTaxiNotice[];
  Summary?: RouteTaxiSummary;
  Transport: RouteTaxiTransportModeDetails;
  TravelSteps?: RouteTaxiTravelStep[];
}
export type RouteTransitAfterTravelStepType = "Deboard" | (string & {});
export interface RouteTransitAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTransitAfterTravelStepType;
}
export type RouteTransitAfterTravelStepList = RouteTransitAfterTravelStep[];
export interface RouteTransitAgency {
  Name: string | redacted.Redacted<string>;
  Url?: string | redacted.Redacted<string>;
}
export type RouteTransitPlaceType = "Station" | (string & {});
export interface RouteTransitPlace {
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  StationDetails?: RouteStationDetails;
  Type?: RouteTransitPlaceType;
  WaypointIndex?: number;
}
export type RouteTransitTripStatus =
  | "Added"
  | "Cancelled"
  | "Replaced"
  | "Scheduled"
  | (string & {});
export interface RouteTransitArrival {
  Delay?: number;
  Place: RouteTransitPlace;
  Status?: RouteTransitTripStatus;
  Time?: string | redacted.Redacted<string>;
}
export type RouteTransitBeforeTravelStepType = "Board" | (string & {});
export interface RouteTransitBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTransitBeforeTravelStepType;
}
export type RouteTransitBeforeTravelStepList = RouteTransitBeforeTravelStep[];
export interface RouteTransitDeparture {
  Delay?: number;
  Place: RouteTransitPlace;
  Status?: RouteTransitTripStatus;
  Time?: string | redacted.Redacted<string>;
}
export type RouteTransitIncidentEffect =
  | "Delayed"
  | "Detoured"
  | "Other"
  | "ServiceAdded"
  | "ServiceCancelled"
  | "ServiceModified"
  | "ServiceReduced"
  | "StopMoved"
  | (string & {});
export type RouteTransitIncidentType =
  | "Accident"
  | "Construction"
  | "Demonstration"
  | "Holiday"
  | "Maintenance"
  | "MedicalEmergency"
  | "Other"
  | "PoliceActivity"
  | "Strike"
  | "TechnicalProblem"
  | "Weather"
  | (string & {});
export interface RouteTransitIncident {
  Description?: string | redacted.Redacted<string>;
  Effect: RouteTransitIncidentEffect;
  EndTime?: string | redacted.Redacted<string>;
  StartTime?: string | redacted.Redacted<string>;
  Type: RouteTransitIncidentType;
  Url?: string | redacted.Redacted<string>;
}
export type RouteTransitIncidentList = RouteTransitIncident[];
export type RouteTransitIntermediateStopAttribute = "NoEntry" | "NoExit" | (string & {});
export type RouteTransitIntermediateStopAttributeList = RouteTransitIntermediateStopAttribute[];
export type HexColor = string | redacted.Redacted<string>;
export interface RouteTransitTransportModeDetails {
  Accessibility?: RouteAccessibilityAvailabilityDetails;
  Color?: string | redacted.Redacted<string>;
  Headsign?: string | redacted.Redacted<string>;
  LongRouteName?: string | redacted.Redacted<string>;
  Mode: RouteTransitMode;
  RouteName?: string | redacted.Redacted<string>;
  ShortRouteName?: string | redacted.Redacted<string>;
  TextColor?: string | redacted.Redacted<string>;
}
export interface RouteTransitIntermediateStop {
  Attributes?: RouteTransitIntermediateStopAttribute[];
  Departure: RouteTransitDeparture;
  Duration: number;
  GeometryOffset?: number;
  Transport?: RouteTransitTransportModeDetails;
}
export type RouteTransitIntermediateStopList = RouteTransitIntermediateStop[];
export interface RouteTransitNextDeparture {
  Delay?: number;
  PlatformName?: string | redacted.Redacted<string>;
  Status?: RouteTransitTripStatus;
  Time: string | redacted.Redacted<string>;
  Transport?: RouteTransitTransportModeDetails;
}
export type RouteTransitNextDepartureList = RouteTransitNextDeparture[];
export type RouteTransitNoticeCode =
  | "AccuratePolylineUnavailable"
  | "IntermediateStopsUnavailable"
  | "NoSchedule"
  | "Other"
  | "PotentialViolatedVehicleRestrictionUsage"
  | "ScheduledTimes"
  | "SeasonalClosure"
  | "ViolatedAvoidFerry"
  | "ViolatedAvoidRailFerry"
  | "ViolatedExcludedTransitMode"
  | "ViolatedVehicleRestriction"
  | "ViolatedAvoidAreas"
  | (string & {});
export interface RouteTransitNotice {
  Code: RouteTransitNoticeCode;
  Impact?: RouteNoticeImpact;
}
export type RouteTransitNoticeList = RouteTransitNotice[];
export interface RouteTransitSpan {
  Country?: string | redacted.Redacted<string>;
  Distance?: number;
  Duration?: number;
  GeometryOffset?: number;
  Names?: LocalizedString[];
  Region?: string | redacted.Redacted<string>;
}
export type RouteTransitSpanList = RouteTransitSpan[];
export interface RouteTransitOverviewSummary {
  Distance: number;
  Duration: number;
}
export interface RouteTransitTravelOnlySummary {
  Duration: number;
}
export interface RouteTransitSummary {
  Overview?: RouteTransitOverviewSummary;
  TravelOnly?: RouteTransitTravelOnlySummary;
}
export type RouteTransitTravelStepType = "Depart" | (string & {});
export interface RouteTransitTravelStep {
  Distance?: number;
  Duration: number;
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTransitTravelStepType;
}
export type RouteTransitTravelStepList = RouteTransitTravelStep[];
export interface RouteTransitLegDetails {
  AfterTravelSteps?: RouteTransitAfterTravelStep[];
  Agency?: RouteTransitAgency;
  Arrival: RouteTransitArrival;
  Attributions?: RouteAttribution[];
  BeforeTravelSteps?: RouteTransitBeforeTravelStep[];
  BookingWebLinks?: RouteWebLink[];
  Departure: RouteTransitDeparture;
  Incidents?: RouteTransitIncident[];
  IntermediateStops?: RouteTransitIntermediateStop[];
  NextDepartures?: RouteTransitNextDeparture[];
  Notices?: RouteTransitNotice[];
  PassThroughWaypoints?: RoutePassThroughWaypoint[];
  Spans?: RouteTransitSpan[];
  Summary?: RouteTransitSummary;
  Transport: RouteTransitTransportModeDetails;
  TravelSteps?: RouteTransitTravelStep[];
}
export interface RouteLeg {
  FerryLegDetails?: RouteFerryLegDetails;
  Geometry: RouteLegGeometry;
  Language?: string;
  PedestrianLegDetails?: RoutePedestrianLegDetails;
  TravelMode: RouteLegTravelMode;
  Type: RouteLegType;
  VehicleLegDetails?: RouteVehicleLegDetails;
  RentalLegDetails?: RouteRentalLegDetails;
  TaxiLegDetails?: RouteTaxiLegDetails;
  TransitLegDetails?: RouteTransitLegDetails;
}
export type RouteLegList = RouteLeg[];
export interface RouteMajorRoadLabel {
  RoadName?: LocalizedString;
  RouteNumber?: RouteNumber;
}
export type RouteMajorRoadLabelList = RouteMajorRoadLabel[];
export interface RouteTollPriceSummary {
  Currency: string;
  Estimate: boolean;
  Range: boolean;
  RangeValue?: RouteTollPriceValueRange;
  Value: number;
}
export interface RouteTollSummary {
  Total?: RouteTollPriceSummary;
}
export interface RouteSummary {
  Distance?: number;
  Duration?: number;
  Tolls?: RouteTollSummary;
}
export interface Route {
  Legs: RouteLeg[];
  MajorRoadLabels: RouteMajorRoadLabel[];
  Summary?: RouteSummary;
}
export type RouteList = Route[];
export interface CalculateRoutesResponse {
  LegGeometryFormat: GeometryFormat;
  Notices: RouteResponseNotice[];
  PricingBucket: string;
  Routes: Route[];
}
export interface WaypointOptimizationAvoidanceAreaGeometry {
  BoundingBox?: number[];
}
export interface WaypointOptimizationAvoidanceArea {
  Geometry: WaypointOptimizationAvoidanceAreaGeometry;
}
export type WaypointOptimizationAvoidanceAreaList = WaypointOptimizationAvoidanceArea[];
export interface WaypointOptimizationAvoidanceOptions {
  Areas?: WaypointOptimizationAvoidanceArea[];
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  TollRoads?: boolean;
  Tunnels?: boolean;
  UTurns?: boolean;
}
export type WaypointOptimizationClusteringAlgorithm =
  | "DrivingDistance"
  | "TopologySegment"
  | (string & {});
export type WaypointOptimizationDrivingDistance = number;
export interface WaypointOptimizationDrivingDistanceOptions {
  DrivingDistance: number;
}
export interface WaypointOptimizationClusteringOptions {
  Algorithm: WaypointOptimizationClusteringAlgorithm;
  DrivingDistanceOptions?: WaypointOptimizationDrivingDistanceOptions;
}
export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | (string & {});
export type TimeOfDay = string | redacted.Redacted<string>;
export interface WaypointOptimizationAccessHoursEntry {
  DayOfWeek: DayOfWeek;
  TimeOfDay: string | redacted.Redacted<string>;
}
export interface WaypointOptimizationAccessHours {
  From: WaypointOptimizationAccessHoursEntry;
  To: WaypointOptimizationAccessHoursEntry;
}
export type WaypointId = string;
export interface WaypointOptimizationSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
export interface WaypointOptimizationDestinationOptions {
  AccessHours?: WaypointOptimizationAccessHours;
  AppointmentTime?: string | redacted.Redacted<string>;
  Heading?: number;
  Id?: string;
  ServiceDuration?: number;
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions;
}
export interface WaypointOptimizationRestCycleDurations {
  RestDuration: number;
  WorkDuration: number;
}
export interface WaypointOptimizationRestCycles {
  LongCycle: WaypointOptimizationRestCycleDurations;
  ShortCycle: WaypointOptimizationRestCycleDurations;
}
export interface WaypointOptimizationRestProfile {
  Profile: string | redacted.Redacted<string>;
}
export type WaypointOptimizationServiceTimeTreatment = "Rest" | "Work" | (string & {});
export interface WaypointOptimizationDriverOptions {
  RestCycles?: WaypointOptimizationRestCycles;
  RestProfile?: WaypointOptimizationRestProfile;
  TreatServiceTimeAs?: WaypointOptimizationServiceTimeTreatment;
}
export interface WaypointOptimizationExclusionOptions {
  Countries: (string | redacted.Redacted<string>)[];
}
export type WaypointOptimizationSequencingObjective =
  | "FastestRoute"
  | "ShortestRoute"
  | (string & {});
export interface WaypointOptimizationOriginOptions {
  Id?: string;
}
export interface WaypointOptimizationTrafficOptions {
  Usage?: TrafficUsage;
}
export type WaypointOptimizationTravelMode =
  | "Car"
  | "Pedestrian"
  | "Scooter"
  | "Truck"
  | (string & {});
export interface WaypointOptimizationPedestrianOptions {
  Speed?: number;
}
export type WaypointOptimizationHazardousCargoType =
  | "Combustible"
  | "Corrosive"
  | "Explosive"
  | "Flammable"
  | "Gas"
  | "HarmfulToWater"
  | "Organic"
  | "Other"
  | "Poison"
  | "PoisonousInhalation"
  | "Radioactive"
  | (string & {});
export type WaypointOptimizationHazardousCargoTypeList = WaypointOptimizationHazardousCargoType[];
export interface WaypointOptimizationTrailerOptions {
  TrailerCount?: number;
}
export type WaypointOptimizationTruckType = "StraightTruck" | "Tractor" | (string & {});
export interface WaypointOptimizationTruckOptions {
  GrossWeight?: number;
  HazardousCargos?: WaypointOptimizationHazardousCargoType[];
  Height?: number;
  Length?: number;
  Trailer?: WaypointOptimizationTrailerOptions;
  TruckType?: WaypointOptimizationTruckType;
  TunnelRestrictionCode?: string | redacted.Redacted<string>;
  WeightPerAxle?: number;
  Width?: number;
}
export interface WaypointOptimizationTravelModeOptions {
  Pedestrian?: WaypointOptimizationPedestrianOptions;
  Truck?: WaypointOptimizationTruckOptions;
}
export type WaypointIndex = number;
export type BeforeWaypointsList = number[];
export interface WaypointOptimizationWaypoint {
  AccessHours?: WaypointOptimizationAccessHours;
  AppointmentTime?: string | redacted.Redacted<string>;
  Before?: number[];
  Heading?: number;
  Id?: string;
  Position: number[];
  ServiceDuration?: number;
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions;
}
export type WaypointOptimizationWaypointList = WaypointOptimizationWaypoint[];
export interface OptimizeWaypointsRequest {
  Avoid?: WaypointOptimizationAvoidanceOptions;
  Clustering?: WaypointOptimizationClusteringOptions;
  DepartureTime?: string | redacted.Redacted<string>;
  Destination?: number[];
  DestinationOptions?: WaypointOptimizationDestinationOptions;
  Driver?: WaypointOptimizationDriverOptions;
  Exclude?: WaypointOptimizationExclusionOptions;
  Key?: string | redacted.Redacted<string>;
  OptimizeSequencingFor?: WaypointOptimizationSequencingObjective;
  Origin: number[];
  OriginOptions?: WaypointOptimizationOriginOptions;
  Traffic?: WaypointOptimizationTrafficOptions;
  TravelMode?: WaypointOptimizationTravelMode;
  TravelModeOptions?: WaypointOptimizationTravelModeOptions;
  Waypoints?: WaypointOptimizationWaypoint[];
}
export interface WaypointOptimizationConnection {
  Distance: number;
  From: string;
  RestDuration: number;
  To: string;
  TravelDuration: number;
  WaitDuration: number;
}
export type WaypointOptimizationConnectionList = WaypointOptimizationConnection[];
export type WaypointOptimizationConstraint =
  | "AccessHours"
  | "AppointmentTime"
  | "Before"
  | "Heading"
  | "ServiceDuration"
  | "SideOfStreet"
  | (string & {});
export interface WaypointOptimizationFailedConstraint {
  Constraint?: WaypointOptimizationConstraint;
  Reason?: string | redacted.Redacted<string>;
}
export type WaypointOptimizationFailedConstraintList = WaypointOptimizationFailedConstraint[];
export interface WaypointOptimizationImpedingWaypoint {
  FailedConstraints: WaypointOptimizationFailedConstraint[];
  Id: string;
  Position: number[];
}
export type WaypointOptimizationImpedingWaypointList = WaypointOptimizationImpedingWaypoint[];
export type ClusterIndex = number;
export interface WaypointOptimizationOptimizedWaypoint {
  ArrivalTime?: string | redacted.Redacted<string>;
  ClusterIndex?: number;
  DepartureTime?: string | redacted.Redacted<string>;
  Id: string;
  Position: number[];
}
export type WaypointOptimizationOptimizedWaypointList = WaypointOptimizationOptimizedWaypoint[];
export interface WaypointOptimizationTimeBreakdown {
  RestDuration: number;
  ServiceDuration: number;
  TravelDuration: number;
  WaitDuration: number;
}
export interface OptimizeWaypointsResponse {
  Connections: WaypointOptimizationConnection[];
  Distance: number;
  Duration: number;
  ImpedingWaypoints: WaypointOptimizationImpedingWaypoint[];
  OptimizedWaypoints: WaypointOptimizationOptimizedWaypoint[];
  PricingBucket: string;
  TimeBreakdown: WaypointOptimizationTimeBreakdown;
}
export interface RoadSnapTracePoint {
  Heading?: number;
  Position: number[];
  Speed?: number;
  Timestamp?: string | redacted.Redacted<string>;
}
export type RoadSnapTracePointList = RoadSnapTracePoint[];
export type RoadSnapTravelMode = "Car" | "Pedestrian" | "Scooter" | "Truck" | (string & {});
export type RoadSnapHazardousCargoType =
  | "Combustible"
  | "Corrosive"
  | "Explosive"
  | "Flammable"
  | "Gas"
  | "HarmfulToWater"
  | "Organic"
  | "Other"
  | "Poison"
  | "PoisonousInhalation"
  | "Radioactive"
  | (string & {});
export type RoadSnapHazardousCargoTypeList = RoadSnapHazardousCargoType[];
export interface RoadSnapTrailerOptions {
  TrailerCount?: number;
}
export interface RoadSnapTruckOptions {
  GrossWeight?: number;
  HazardousCargos?: RoadSnapHazardousCargoType[];
  Height?: number;
  Length?: number;
  Trailer?: RoadSnapTrailerOptions;
  TunnelRestrictionCode?: string | redacted.Redacted<string>;
  Width?: number;
}
export interface RoadSnapTravelModeOptions {
  Truck?: RoadSnapTruckOptions;
}
export interface SnapToRoadsRequest {
  Key?: string | redacted.Redacted<string>;
  SnappedGeometryFormat?: GeometryFormat;
  SnapRadius?: number;
  TracePoints: RoadSnapTracePoint[];
  TravelMode?: RoadSnapTravelMode;
  TravelModeOptions?: RoadSnapTravelModeOptions;
}
export type RoadSnapNoticeCode =
  | "TracePointsHeadingIgnored"
  | "TracePointsIgnored"
  | "TracePointsMovedByLargeDistance"
  | "TracePointsNotMatched"
  | "TracePointsOutOfSequence"
  | "TracePointsSpeedEstimated"
  | "TracePointsSpeedIgnored"
  | (string & {});
export type RoadSnapTracePointIndexList = number[];
export interface RoadSnapNotice {
  Code: RoadSnapNoticeCode;
  Title: string | redacted.Redacted<string>;
  TracePointIndexes: number[];
}
export type RoadSnapNoticeList = RoadSnapNotice[];
export interface RoadSnapSnappedGeometry {
  LineString?: number[][];
  Polyline?: string | redacted.Redacted<string>;
}
export interface RoadSnapSnappedTracePoint {
  Confidence: number;
  OriginalPosition: number[];
  SnappedPosition: number[];
}
export type RoadSnapSnappedTracePointList = RoadSnapSnappedTracePoint[];
export interface SnapToRoadsResponse {
  Notices: RoadSnapNotice[];
  PricingBucket: string;
  SnappedGeometry?: RoadSnapSnappedGeometry;
  SnappedGeometryFormat: GeometryFormat;
  SnappedTracePoints: RoadSnapSnappedTracePoint[];
}
export type ValidationExceptionReason =
  | "UnknownOperation"
  | "Missing"
  | "CannotParse"
  | "FieldValidationFailed"
  | "Other"
  | "UnknownField"
  | (string & {});
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type CalculateIsolinesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Calculates areas that can be reached within specified time or distance thresholds from a given point. For example, you can use this operation to determine the area within a 30-minute drive of a store location, find neighborhoods within walking distance of a school, or identify delivery zones based on drive time.
 *
 * Isolines (also known as isochrones for time-based calculations) are useful for various applications including:
 *
 * - Service area visualization - Show customers the area you can serve within promised delivery times
 *
 * - Site selection - Analyze potential business locations based on population within travel distance
 *
 * - Site selection - Determine areas that can be reached within specified response times
 *
 * Route preferences such as avoiding toll roads or ferries are treated as preferences rather than absolute restrictions. If a viable route cannot be calculated while honoring all preferences, some may be ignored.
 *
 * For more information, see Calculate isolines in the *Amazon Location Service Developer Guide*.
 */
export const calculateIsolines: API.OperationMethod<
  CalculateIsolinesRequest,
  CalculateIsolinesResponse,
  CalculateIsolinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<CalculateIsolinesRequest>,
  output: __S(36) as any as S.Schema<CalculateIsolinesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CalculateIsolines",
}));

export type CalculateRouteMatrixError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use `CalculateRouteMatrix` to compute results for all pairs of Origins to Destinations. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destinations positions.
 *
 * For more information, see Calculate route matrix in the *Amazon Location Service Developer Guide*.
 */
export const calculateRouteMatrix: API.OperationMethod<
  CalculateRouteMatrixRequest,
  CalculateRouteMatrixResponse,
  CalculateRouteMatrixError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<CalculateRouteMatrixRequest>,
  output: __S(65) as any as S.Schema<CalculateRouteMatrixResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CalculateRouteMatrix",
}));

export type CalculateRoutesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `CalculateRoutes` computes routes given the following required parameters: `Origin` and `Destination`.
 *
 * For more information, see Calculate routes in the *Amazon Location Service Developer Guide*.
 */
export const calculateRoutes: API.OperationMethod<
  CalculateRoutesRequest,
  CalculateRoutesResponse,
  CalculateRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94) as any as S.Schema<CalculateRoutesRequest>,
  output: __S(214) as any as S.Schema<CalculateRoutesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CalculateRoutes",
}));

export type OptimizeWaypointsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `OptimizeWaypoints` calculates the optimal order to travel between a set of waypoints to minimize either the travel time or the distance travelled during the journey, based on road network restrictions and the traffic pattern data.
 *
 * For more information, see Optimize waypoints in the *Amazon Location Service Developer Guide*.
 */
export const optimizeWaypoints: API.OperationMethod<
  OptimizeWaypointsRequest,
  OptimizeWaypointsResponse,
  OptimizeWaypointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235) as any as S.Schema<OptimizeWaypointsRequest>,
  output: __S(245) as any as S.Schema<OptimizeWaypointsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "OptimizeWaypoints",
}));

export type SnapToRoadsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `SnapToRoads` matches GPS trace to roads most likely traveled on.
 *
 * For more information, see Snap to Roads in the *Amazon Location Service Developer Guide*.
 */
export const snapToRoads: API.OperationMethod<
  SnapToRoadsRequest,
  SnapToRoadsResponse,
  SnapToRoadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251) as any as S.Schema<SnapToRoadsRequest>,
  output: __S(256) as any as S.Schema<SnapToRoadsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SnapToRoads",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Hot: S.optional(S.Boolean), Hov: S.optional(S.Boolean) }),
      ).annotate({ identifier: "IsolineAllowOptions" });
    case 1:
      return S.Array(S.Number);
    case 2:
      return S.Array(__S(1));
    case 3:
      return S.suspend(() => S.Struct({ LineString: __S(2), Radius: S.Number })).annotate({
        identifier: "Corridor",
      });
    case 4:
      return S.Array(__S(2));
    case 5:
      return S.suspend(() => S.Struct({ Polyline: SensitiveString, Radius: S.Number })).annotate({
        identifier: "PolylineCorridor",
      });
    case 6:
      return S.Array(SensitiveString);
    case 7:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(__S(1)),
          Corridor: S.optional(__S(3)),
          Polygon: S.optional(__S(4)),
          PolylineCorridor: S.optional(__S(5)),
          PolylinePolygon: S.optional(__S(6)),
        }),
      ).annotate({
        identifier: "IsolineAvoidanceAreaGeometry",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Except: S.optional(__S(8)),
          Geometry: __S(7),
        }),
      ).annotate({ identifier: "IsolineAvoidanceArea" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() => S.Struct({ Category: S.optional(S.String) })).annotate({
        identifier: "IsolineAvoidanceZoneCategory",
      });
    case 4:
      return S.Array(__S(11));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Areas: S.optional(__S(10)),
          CarShuttleTrains: S.optional(S.Boolean),
          ControlledAccessHighways: S.optional(S.Boolean),
          DirtRoads: S.optional(S.Boolean),
          Ferries: S.optional(S.Boolean),
          SeasonalClosure: S.optional(S.Boolean),
          TollRoads: S.optional(S.Boolean),
          TollTransponders: S.optional(S.Boolean),
          TruckRoadTypes: S.optional(__S(6)),
          Tunnels: S.optional(S.Boolean),
          UTurns: S.optional(S.Boolean),
          ZoneCategories: S.optional(__S(12)),
        }),
      ).annotate({ identifier: "IsolineAvoidanceOptions" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NameHint: S.optional(SensitiveString),
          OnRoadThreshold: S.optional(S.Number),
          Radius: S.optional(S.Number),
          Strategy: S.optional(S.String),
        }),
      ).annotate({ identifier: "IsolineMatchingOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Position: __S(1), UseWith: S.optional(S.String) }),
      ).annotate({
        identifier: "IsolineSideOfStreetOptions",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvoidActionsForDistance: S.optional(S.Number),
          Heading: S.optional(S.Number),
          Matching: S.optional(__S(14)),
          SideOfStreet: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "IsolineDestinationOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MaxPoints: S.optional(S.Number), MaxResolution: S.optional(S.Number) }),
      ).annotate({
        identifier: "IsolineGranularityOptions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AvoidActionsForDistance: S.optional(S.Number),
          Heading: S.optional(S.Number),
          Matching: S.optional(__S(14)),
          SideOfStreet: S.optional(__S(15)),
        }),
      ).annotate({ identifier: "IsolineOriginOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Distance: S.optional(__S(1)),
          Time: S.optional(__S(1)),
        }),
      ).annotate({ identifier: "IsolineThresholds" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FlowEventThresholdOverride: S.optional(S.Number),
          Usage: S.optional(S.String),
        }),
      ).annotate({ identifier: "IsolineTrafficOptions" });
    case 5:
      return S.suspend(() => S.Struct({ LastCharacter: S.optional(S.String) })).annotate({
        identifier: "IsolineVehicleLicensePlate",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EngineType: S.optional(S.String),
          LicensePlate: S.optional(__S(21)),
          MaxSpeed: S.optional(S.Number),
          Occupancy: S.optional(S.Number),
        }),
      ).annotate({ identifier: "IsolineCarOptions" });
    case 7:
      return S.Array(S.String);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AxleCount: S.optional(S.Number), TrailerCount: S.optional(S.Number) }),
      ).annotate({ identifier: "IsolineTrailerOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Single: S.optional(S.Number),
          Tandem: S.optional(S.Number),
          Triple: S.optional(S.Number),
          Quad: S.optional(S.Number),
          Quint: S.optional(S.Number),
        }),
      ).annotate({ identifier: "WeightPerAxleGroup" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AxleCount: S.optional(S.Number),
          EngineType: S.optional(S.String),
          GrossWeight: S.optional(S.Number),
          HazardousCargos: S.optional(__S(23)),
          Height: S.optional(S.Number),
          HeightAboveFirstAxle: S.optional(S.Number),
          KpraLength: S.optional(S.Number),
          Length: S.optional(S.Number),
          LicensePlate: S.optional(__S(21)),
          MaxSpeed: S.optional(S.Number),
          Occupancy: S.optional(S.Number),
          PayloadCapacity: S.optional(S.Number),
          TireCount: S.optional(S.Number),
          Trailer: S.optional(__S(24)),
          TruckType: S.optional(S.String),
          TunnelRestrictionCode: S.optional(SensitiveString),
          WeightPerAxle: S.optional(S.Number),
          WeightPerAxleGroup: S.optional(__S(25)),
          Width: S.optional(S.Number),
        }),
      ).annotate({ identifier: "IsolineTruckOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Car: S.optional(__S(22)),
          Scooter: S.optional(__S(22)),
          Truck: S.optional(__S(26)),
        }),
      ).annotate({ identifier: "IsolineTravelModeOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Allow: S.optional(__S(0)),
          ArrivalTime: S.optional(SensitiveString),
          Avoid: S.optional(__S(13)),
          DepartNow: S.optional(S.Boolean),
          DepartureTime: S.optional(SensitiveString),
          Destination: S.optional(__S(1)),
          DestinationOptions: S.optional(__S(16)),
          IsolineGeometryFormat: S.optional(S.String),
          IsolineGranularity: S.optional(__S(17)),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          OptimizeIsolineFor: S.optional(S.String),
          OptimizeRoutingFor: S.optional(S.String),
          Origin: S.optional(__S(1)),
          OriginOptions: S.optional(__S(18)),
          Thresholds: __S(19),
          Traffic: S.optional(__S(20)),
          TravelMode: S.optional(S.String),
          TravelModeOptions: S.optional(__S(27)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/isolines" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CalculateIsolinesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ LineString: S.optional(__S(2)), Polyline: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "IsolineConnectionGeometry",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FromPolygonIndex: S.Number,
          Geometry: __S(29),
          ToPolygonIndex: S.Number,
        }),
      ).annotate({ identifier: "IsolineConnection" });
    case 7:
      return S.Array(__S(30));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Polygon: S.optional(__S(4)),
          PolylinePolygon: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "IsolineShapeGeometry" });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Connections: __S(31),
          DistanceThreshold: S.optional(S.Number),
          Geometries: __S(33),
          TimeThreshold: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Isoline" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ArrivalTime: S.optional(SensitiveString),
          DepartureTime: S.optional(SensitiveString),
          IsolineGeometryFormat: S.String,
          Isolines: __S(35),
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          SnappedDestination: S.optional(__S(1)),
          SnappedOrigin: S.optional(__S(1)),
        }),
      ).annotate({
        identifier: "CalculateIsolinesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(__S(1)),
          Polygon: S.optional(__S(4)),
          PolylinePolygon: S.optional(__S(6)),
        }),
      ).annotate({
        identifier: "RouteMatrixAvoidanceAreaGeometry",
      });
    case 6:
      return S.suspend(() => S.Struct({ Geometry: __S(37) })).annotate({
        identifier: "RouteMatrixAvoidanceArea",
      });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(11));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Areas: S.optional(__S(39)),
          CarShuttleTrains: S.optional(S.Boolean),
          ControlledAccessHighways: S.optional(S.Boolean),
          DirtRoads: S.optional(S.Boolean),
          Ferries: S.optional(S.Boolean),
          TollRoads: S.optional(S.Boolean),
          TollTransponders: S.optional(S.Boolean),
          TruckRoadTypes: S.optional(__S(6)),
          Tunnels: S.optional(S.Boolean),
          UTurns: S.optional(S.Boolean),
          ZoneCategories: S.optional(__S(40)),
        }),
      ).annotate({
        identifier: "RouteMatrixAvoidanceOptions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NameHint: S.optional(SensitiveString),
          OnRoadThreshold: S.optional(S.Number),
          Radius: S.optional(S.Number),
          Strategy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RouteMatrixMatchingOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AvoidActionsForDistance: S.optional(S.Number),
          Heading: S.optional(S.Number),
          Matching: S.optional(__S(42)),
          SideOfStreet: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "RouteMatrixDestinationOptions",
      });
    case 4:
      return S.suspend(() => S.Struct({ Options: S.optional(__S(43)), Position: __S(1) })).annotate(
        { identifier: "RouteMatrixDestination" },
      );
    case 5:
      return S.Array(__S(44));
    case 6:
      return S.suspend(() => S.Struct({ Countries: __S(6) })).annotate({
        identifier: "RouteMatrixExclusionOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AvoidActionsForDistance: S.optional(S.Number),
          Heading: S.optional(S.Number),
          Matching: S.optional(__S(42)),
          SideOfStreet: S.optional(__S(15)),
        }),
      ).annotate({ identifier: "RouteMatrixOriginOptions" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Options: S.optional(__S(47)), Position: __S(1) })).annotate(
        { identifier: "RouteMatrixOrigin" },
      );
    case 1:
      return S.Array(__S(48));
    case 2:
      return S.suspend(() =>
        S.Struct({ Margin: S.optional(S.Number), MaxRadius: S.optional(S.Number) }),
      ).annotate({ identifier: "RouteMatrixAutoCircle" });
    case 3:
      return S.suspend(() => S.Struct({ Center: __S(1), Radius: S.Number })).annotate({
        identifier: "Circle",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AutoCircle: S.optional(__S(50)),
          Circle: S.optional(__S(51)),
          BoundingBox: S.optional(__S(1)),
          Polygon: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "RouteMatrixBoundaryGeometry",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Geometry: S.optional(__S(52)),
          Unbounded: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RouteMatrixBoundary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FlowEventThresholdOverride: S.optional(S.Number),
          Usage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RouteMatrixTrafficOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LicensePlate: S.optional(__S(21)),
          MaxSpeed: S.optional(S.Number),
          Occupancy: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteMatrixCarOptions" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LicensePlate: S.optional(__S(21)),
          MaxSpeed: S.optional(S.Number),
          Occupancy: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RouteMatrixScooterOptions",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() => S.Struct({ TrailerCount: S.optional(S.Number) })).annotate({
        identifier: "RouteMatrixTrailerOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AxleCount: S.optional(S.Number),
          GrossWeight: S.optional(S.Number),
          HazardousCargos: S.optional(__S(57)),
          Height: S.optional(S.Number),
          KpraLength: S.optional(S.Number),
          Length: S.optional(S.Number),
          LicensePlate: S.optional(__S(21)),
          MaxSpeed: S.optional(S.Number),
          Occupancy: S.optional(S.Number),
          PayloadCapacity: S.optional(S.Number),
          Trailer: S.optional(__S(58)),
          TruckType: S.optional(S.String),
          TunnelRestrictionCode: S.optional(SensitiveString),
          WeightPerAxle: S.optional(S.Number),
          WeightPerAxleGroup: S.optional(__S(25)),
          Width: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteMatrixTruckOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Car: S.optional(__S(55)),
          Scooter: S.optional(__S(56)),
          Truck: S.optional(__S(59)),
        }),
      ).annotate({
        identifier: "RouteMatrixTravelModeOptions",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Allow: S.optional(__S(0)),
          Avoid: S.optional(__S(41)),
          DepartNow: S.optional(S.Boolean),
          DepartureTime: S.optional(SensitiveString),
          Destinations: __S(45),
          Exclude: S.optional(__S(46)),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          OptimizeRoutingFor: S.optional(S.String),
          Origins: __S(49),
          RoutingBoundary: S.optional(__S(53)),
          Traffic: S.optional(__S(54)),
          TravelMode: S.optional(S.String),
          TravelModeOptions: S.optional(__S(60)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/route-matrix" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CalculateRouteMatrixRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Distance: S.Number,
          Duration: S.Number,
          Error: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteMatrixEntry" });
    case 7:
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ErrorCount: S.Number,
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          RouteMatrix: __S(64),
          RoutingBoundary: __S(53),
        }),
      ).annotate({
        identifier: "CalculateRouteMatrixResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Corridor: S.optional(__S(3)),
          BoundingBox: S.optional(__S(1)),
          Polygon: S.optional(__S(4)),
          PolylineCorridor: S.optional(__S(5)),
          PolylinePolygon: S.optional(__S(6)),
        }),
      ).annotate({
        identifier: "RouteAvoidanceAreaGeometry",
      });
    case 3:
      return S.Array(__S(66));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Except: S.optional(__S(67)),
          Geometry: __S(66),
        }),
      ).annotate({ identifier: "RouteAvoidanceArea" });
    case 5:
      return S.Array(__S(68));
    case 6:
      return S.suspend(() => S.Struct({ Category: S.String })).annotate({
        identifier: "RouteAvoidanceZoneCategory",
      });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Areas: S.optional(__S(69)),
          CarShuttleTrains: S.optional(S.Boolean),
          ControlledAccessHighways: S.optional(S.Boolean),
          DirtRoads: S.optional(S.Boolean),
          Ferries: S.optional(S.Boolean),
          SeasonalClosure: S.optional(S.Boolean),
          TollRoads: S.optional(S.Boolean),
          TollTransponders: S.optional(S.Boolean),
          TruckRoadTypes: S.optional(__S(6)),
          Tunnels: S.optional(S.Boolean),
          UTurns: S.optional(S.Boolean),
          ZoneCategories: S.optional(__S(71)),
        }),
      ).annotate({ identifier: "RouteAvoidanceOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Position: __S(1), UseWith: S.optional(S.String) }),
      ).annotate({ identifier: "RouteSideOfStreetOptions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AvoidActionsForDistance: S.optional(S.Number),
          AvoidUTurns: S.optional(S.Boolean),
          Heading: S.optional(S.Number),
          Matching: S.optional(__S(14)),
          SideOfStreet: S.optional(__S(73)),
          StopDuration: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteDestinationOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DriveDuration: S.Number, RestDuration: S.Number }),
      ).annotate({
        identifier: "RouteDriverScheduleInterval",
      });
    case 4:
      return S.Array(__S(75));
    case 5:
      return S.suspend(() => S.Struct({ Schedule: S.optional(__S(76)) })).annotate({
        identifier: "RouteDriverOptions",
      });
    case 6:
      return S.suspend(() => S.Struct({ Countries: __S(6) })).annotate({
        identifier: "RouteExclusionOptions",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvoidActionsForDistance: S.optional(S.Number),
          AvoidUTurns: S.optional(S.Boolean),
          Heading: S.optional(S.Number),
          Matching: S.optional(__S(14)),
          SideOfStreet: S.optional(__S(73)),
        }),
      ).annotate({ identifier: "RouteOriginOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Co2EmissionClass: S.optional(SensitiveString), Type: SensitiveString }),
      ).annotate({ identifier: "RouteEmissionType" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AllTransponders: S.optional(S.Boolean),
          AllVignettes: S.optional(S.Boolean),
          Currency: S.optional(S.String),
          EmissionType: S.optional(__S(81)),
          VehicleCategory: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteTollOptions" });
    case 3:
      return S.suspend(() => S.Struct({ LastCharacter: S.optional(SensitiveString) })).annotate({
        identifier: "RouteVehicleLicensePlate",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EngineType: S.optional(S.String),
          LicensePlate: S.optional(__S(83)),
          MaxSpeed: S.optional(S.Number),
          Occupancy: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteCarOptions" });
    case 5:
      return S.suspend(() => S.Struct({ Speed: S.optional(S.Number) })).annotate({
        identifier: "RoutePedestrianOptions",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AxleCount: S.optional(S.Number),
          EngineType: S.optional(S.String),
          GrossWeight: S.optional(S.Number),
          HazardousCargos: S.optional(__S(23)),
          Height: S.optional(S.Number),
          HeightAboveFirstAxle: S.optional(S.Number),
          KpraLength: S.optional(S.Number),
          Length: S.optional(S.Number),
          LicensePlate: S.optional(__S(83)),
          MaxSpeed: S.optional(S.Number),
          Occupancy: S.optional(S.Number),
          PayloadCapacity: S.optional(S.Number),
          TireCount: S.optional(S.Number),
          Trailer: S.optional(__S(24)),
          TruckType: S.optional(S.String),
          TunnelRestrictionCode: S.optional(SensitiveString),
          WeightPerAxle: S.optional(S.Number),
          WeightPerAxleGroup: S.optional(__S(25)),
          Width: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteTruckOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({ MaxDistance: S.optional(S.Number), Speed: S.optional(S.Number) }),
      ).annotate({
        identifier: "RouteIntermodalPedestrianOptions",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AllowedModes: S.optional(__S(23)),
          EnabledFor: S.optional(__S(23)),
          ExcludedModes: S.optional(__S(23)),
        }),
      ).annotate({
        identifier: "RouteIntermodalRentalOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccessibilityAttributes: S.optional(__S(23)),
          MaxTransfers: S.optional(S.Number),
          Pedestrian: S.optional(__S(87)),
          Rental: S.optional(__S(88)),
          Taxi: S.optional(__S(88)),
          Transit: S.optional(__S(88)),
          Vehicle: S.optional(__S(88)),
        }),
      ).annotate({ identifier: "RouteIntermodalOptions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessibilityAttributes: S.optional(__S(23)),
          AllowedModes: S.optional(__S(23)),
          ExcludedModes: S.optional(__S(23)),
          MaxTransfers: S.optional(S.Number),
          Pedestrian: S.optional(__S(87)),
        }),
      ).annotate({ identifier: "RouteTransitOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Car: S.optional(__S(84)),
          Pedestrian: S.optional(__S(85)),
          Scooter: S.optional(__S(84)),
          Truck: S.optional(__S(86)),
          Intermodal: S.optional(__S(89)),
          Transit: S.optional(__S(90)),
        }),
      ).annotate({ identifier: "RouteTravelModeOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AvoidActionsForDistance: S.optional(S.Number),
          AvoidUTurns: S.optional(S.Boolean),
          Heading: S.optional(S.Number),
          Matching: S.optional(__S(14)),
          PassThrough: S.optional(S.Boolean),
          Position: __S(1),
          SideOfStreet: S.optional(__S(73)),
          StopDuration: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteWaypoint" });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Allow: S.optional(__S(0)),
          ArrivalTime: S.optional(SensitiveString),
          Avoid: S.optional(__S(72)),
          DepartNow: S.optional(S.Boolean),
          DepartureTime: S.optional(SensitiveString),
          Destination: __S(1),
          DestinationOptions: S.optional(__S(74)),
          Driver: S.optional(__S(77)),
          Exclude: S.optional(__S(78)),
          InstructionsMeasurementSystem: S.optional(S.String),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          Languages: S.optional(__S(79)),
          LegAdditionalFeatures: S.optional(__S(23)),
          LegGeometryFormat: S.optional(S.String),
          MaxAlternatives: S.optional(S.Number),
          OptimizeRoutingFor: S.optional(S.String),
          Origin: __S(1),
          OriginOptions: S.optional(__S(80)),
          SpanAdditionalFeatures: S.optional(__S(23)),
          Tolls: S.optional(__S(82)),
          Traffic: S.optional(__S(20)),
          TravelMode: S.optional(S.String),
          TravelModeOptions: S.optional(__S(91)),
          TravelStepType: S.optional(S.String),
          Waypoints: S.optional(__S(93)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/routes" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CalculateRoutesRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Code: S.String, Impact: S.optional(S.String) })).annotate({
        identifier: "RouteResponseNotice",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Duration: S.Number,
          Instruction: S.optional(SensitiveString),
          Type: S.String,
        }),
      ).annotate({
        identifier: "RouteFerryAfterTravelStep",
      });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(SensitiveString),
          OriginalPosition: S.optional(__S(1)),
          Position: __S(1),
          WaypointIndex: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteFerryPlace" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Place: __S(99), Time: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RouteFerryArrival" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OriginalPosition: S.optional(__S(1)),
          Position: __S(1),
          WaypointIndex: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RoutePassThroughPlace" });
    case 6:
      return S.suspend(() =>
        S.Struct({ GeometryOffset: S.optional(S.Number), Place: __S(101) }),
      ).annotate({ identifier: "RoutePassThroughWaypoint" });
    case 7:
      return S.Array(__S(102));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Language: S.optional(S.String), Value: SensitiveString }),
      ).annotate({ identifier: "LocalizedString" });
    case 1:
      return S.Array(__S(104));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Country: S.optional(SensitiveString),
          Distance: S.optional(S.Number),
          Duration: S.optional(S.Number),
          GeometryOffset: S.optional(S.Number),
          Names: S.optional(__S(105)),
          Region: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RouteFerrySpan" });
    case 3:
      return S.Array(__S(106));
    case 4:
      return S.suspend(() => S.Struct({ Distance: S.Number, Duration: S.Number })).annotate({
        identifier: "RouteFerryOverviewSummary",
      });
    case 5:
      return S.suspend(() => S.Struct({ Duration: S.Number })).annotate({
        identifier: "RouteFerryTravelOnlySummary",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Overview: S.optional(__S(108)),
          TravelOnly: S.optional(__S(109)),
        }),
      ).annotate({ identifier: "RouteFerrySummary" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Distance: S.optional(S.Number),
          Duration: S.Number,
          GeometryOffset: S.optional(S.Number),
          Instruction: S.optional(SensitiveString),
          Type: S.String,
        }),
      ).annotate({ identifier: "RouteFerryTravelStep" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AfterTravelSteps: S.optional(__S(98)),
          Arrival: __S(100),
          BeforeTravelSteps: S.optional(__S(98)),
          Departure: __S(100),
          Notices: S.optional(__S(96)),
          PassThroughWaypoints: S.optional(__S(103)),
          RouteName: S.optional(SensitiveString),
          Spans: S.optional(__S(107)),
          Summary: S.optional(__S(110)),
          TravelSteps: S.optional(__S(112)),
        }),
      ).annotate({ identifier: "RouteFerryLegDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({ LineString: S.optional(__S(2)), Polyline: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RouteLegGeometry" });
    case 3:
      return S.Array(__S(97));
    case 4:
      return S.suspend(() => S.Struct({ Wheelchair: S.optional(S.String) })).annotate({
        identifier: "RouteAccessibilityAvailabilityDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ Accessibility: S.optional(__S(116)) })).annotate({
        identifier: "RouteAccessPointDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Accessibility: S.optional(__S(116)),
          PlatformName: S.optional(SensitiveString),
          ShortName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RouteStationDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccessPointDetails: S.optional(__S(117)),
          Name: S.optional(SensitiveString),
          OriginalPosition: S.optional(__S(1)),
          Position: __S(1),
          SideOfStreet: S.optional(S.String),
          StationDetails: S.optional(__S(118)),
          Type: S.optional(S.String),
          WaypointIndex: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RoutePedestrianPlace" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Place: __S(119), Time: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RoutePedestrianArrival" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BestCaseSpeed: S.optional(S.Number),
          TurnDuration: S.optional(S.Number),
          TypicalSpeed: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RouteSpanDynamicSpeedDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Direction: S.optional(S.String),
          Language: S.optional(S.String),
          Value: SensitiveString,
        }),
      ).annotate({ identifier: "RouteNumber" });
    case 3:
      return S.Array(__S(122));
    case 4:
      return S.suspend(() =>
        S.Struct({ MaxSpeed: S.optional(S.Number), Unlimited: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "RouteSpanSpeedLimitDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BestCaseDuration: S.optional(S.Number),
          Country: S.optional(SensitiveString),
          Distance: S.optional(S.Number),
          Duration: S.optional(S.Number),
          DynamicSpeed: S.optional(__S(121)),
          FunctionalClassification: S.optional(S.Number),
          GeometryOffset: S.optional(S.Number),
          Incidents: S.optional(__S(1)),
          Names: S.optional(__S(105)),
          PedestrianAccess: S.optional(__S(57)),
          Region: S.optional(SensitiveString),
          RoadAttributes: S.optional(__S(23)),
          RouteNumbers: S.optional(__S(123)),
          SpeedLimit: S.optional(__S(124)),
          TypicalDuration: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RoutePedestrianSpan" });
    case 6:
      return S.Array(__S(125));
    case 7:
      return S.suspend(() => S.Struct({ Intersection: __S(105) })).annotate({
        identifier: "RouteContinueStepDetails",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RoadName: __S(105),
          RouteNumber: __S(123),
          Towards: __S(105),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteRoad" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Intersection: __S(105),
          SteeringDirection: S.optional(S.String),
          TurnAngle: S.optional(S.Number),
          TurnIntensity: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteKeepStepDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Intersection: __S(105),
          SteeringDirection: S.optional(S.String),
          TurnAngle: S.optional(S.Number),
          TurnIntensity: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RouteRoundaboutEnterStepDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Intersection: __S(105),
          RelativeExit: S.optional(S.Number),
          RoundaboutAngle: S.optional(S.Number),
          SteeringDirection: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RouteRoundaboutExitStepDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RouteNumber: S.optional(__S(122)), Text: S.optional(__S(104)) }),
      ).annotate({ identifier: "RouteSignpostLabel" });
    case 5:
      return S.Array(__S(132));
    case 6:
      return S.suspend(() => S.Struct({ Labels: __S(133) })).annotate({
        identifier: "RouteSignpost",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContinueStepDetails: S.optional(__S(127)),
          CurrentRoad: S.optional(__S(128)),
          Distance: S.optional(S.Number),
          Duration: S.Number,
          ExitNumber: S.optional(__S(105)),
          GeometryOffset: S.optional(S.Number),
          Instruction: S.optional(SensitiveString),
          KeepStepDetails: S.optional(__S(129)),
          NextRoad: S.optional(__S(128)),
          RoundaboutEnterStepDetails: S.optional(__S(130)),
          RoundaboutExitStepDetails: S.optional(__S(131)),
          RoundaboutPassStepDetails: S.optional(__S(130)),
          Signpost: S.optional(__S(134)),
          TurnStepDetails: S.optional(__S(129)),
          Type: S.String,
        }),
      ).annotate({
        identifier: "RoutePedestrianTravelStep",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AfterTravelSteps: S.optional(__S(115)),
          Arrival: __S(120),
          Departure: __S(120),
          Notices: S.optional(__S(96)),
          PassThroughWaypoints: S.optional(__S(103)),
          Spans: S.optional(__S(126)),
          Summary: S.optional(__S(110)),
          TravelSteps: S.optional(__S(136)),
        }),
      ).annotate({
        identifier: "RoutePedestrianLegDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ArrivalCharge: S.optional(S.Number),
          ConsumablePower: S.optional(S.Number),
          DesiredCharge: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteChargeStepDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChargeStepDetails: S.optional(__S(138)),
          Duration: S.Number,
          Instruction: S.optional(SensitiveString),
          Type: S.String,
        }),
      ).annotate({
        identifier: "RouteVehicleAfterTravelStep",
      });
    case 4:
      return S.Array(__S(139));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(SensitiveString),
          OriginalPosition: S.optional(__S(1)),
          Position: __S(1),
          SideOfStreet: S.optional(S.String),
          WaypointIndex: S.optional(S.Number),
          AccessPointDetails: S.optional(__S(117)),
          StationDetails: S.optional(__S(118)),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteVehiclePlace" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Place: __S(141), Time: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RouteVehicleArrival" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(SensitiveString),
          EndTime: S.optional(SensitiveString),
          Severity: S.optional(S.String),
          StartTime: S.optional(SensitiveString),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteVehicleIncident" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143));
    case 1:
      return S.suspend(() =>
        S.Struct({ Min: S.optional(S.Number), Max: S.optional(S.Number) }),
      ).annotate({ identifier: "RouteNoticeDetailRange" });
    case 2:
      return S.suspend(() => S.Struct({ Type: S.String, Value: S.Number })).annotate({
        identifier: "RouteWeightConstraint",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AllHazardsRestricted: S.optional(S.Boolean),
          AxleCount: S.optional(__S(145)),
          HazardousCargos: __S(23),
          MaxHeight: S.optional(S.Number),
          MaxKpraLength: S.optional(S.Number),
          MaxLength: S.optional(S.Number),
          MaxPayloadCapacity: S.optional(S.Number),
          MaxWeight: S.optional(__S(146)),
          MaxWeightPerAxle: S.optional(S.Number),
          MaxWeightPerAxleGroup: S.optional(__S(25)),
          MaxWidth: S.optional(S.Number),
          Occupancy: S.optional(__S(145)),
          RestrictedTimes: S.optional(S.String),
          TimeDependent: S.optional(S.Boolean),
          TrailerCount: S.optional(__S(145)),
          TravelMode: S.optional(S.Boolean),
          TruckRoadType: S.optional(S.String),
          TruckType: S.optional(S.String),
          TunnelRestrictionCode: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RouteViolatedConstraints" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Title: S.optional(SensitiveString),
          ViolatedConstraints: S.optional(__S(147)),
        }),
      ).annotate({ identifier: "RouteVehicleNoticeDetail" });
    case 5:
      return S.Array(__S(148));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Code: S.String,
          Details: __S(149),
          Impact: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteVehicleNotice" });
    case 7:
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BestCaseDuration: S.optional(S.Number),
          CarAccess: S.optional(__S(23)),
          Country: S.optional(SensitiveString),
          Distance: S.optional(S.Number),
          Duration: S.optional(S.Number),
          DynamicSpeed: S.optional(__S(121)),
          FunctionalClassification: S.optional(S.Number),
          Gate: S.optional(S.String),
          GeometryOffset: S.optional(S.Number),
          Incidents: S.optional(__S(1)),
          Names: S.optional(__S(105)),
          Notices: S.optional(__S(1)),
          RailwayCrossing: S.optional(S.String),
          Region: S.optional(SensitiveString),
          RoadAttributes: S.optional(__S(23)),
          RouteNumbers: S.optional(__S(123)),
          ScooterAccess: S.optional(__S(57)),
          SpeedLimit: S.optional(__S(124)),
          TollSystems: S.optional(__S(1)),
          TruckAccess: S.optional(__S(57)),
          TruckRoadTypes: S.optional(__S(1)),
          TypicalDuration: S.optional(S.Number),
          Zones: S.optional(__S(1)),
        }),
      ).annotate({ identifier: "RouteVehicleSpan" });
    case 1:
      return S.Array(__S(152));
    case 2:
      return S.suspend(() =>
        S.Struct({
          BestCaseDuration: S.optional(S.Number),
          Distance: S.Number,
          Duration: S.Number,
          TypicalDuration: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RouteVehicleOverviewSummary",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BestCaseDuration: S.optional(S.Number),
          Duration: S.Number,
          TypicalDuration: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RouteVehicleTravelOnlySummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Overview: S.optional(__S(154)),
          TravelOnly: S.optional(__S(155)),
        }),
      ).annotate({ identifier: "RouteVehicleSummary" });
    case 5:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String), Position: __S(1) })).annotate({
        identifier: "RouteTollPaymentSite",
      });
    case 6:
      return S.Array(__S(157));
    case 7:
      return S.suspend(() => S.Struct({ Min: S.Number, Max: S.Number })).annotate({
        identifier: "RouteTollPriceValueRange",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Currency: S.String,
          Estimate: S.Boolean,
          PerDuration: S.optional(S.Number),
          Range: S.Boolean,
          RangeValue: S.optional(__S(159)),
          Value: S.Number,
        }),
      ).annotate({ identifier: "RouteTollPrice" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Period: S.String, PeriodCount: S.optional(S.Number) }),
      ).annotate({
        identifier: "RouteTollPassValidityPeriod",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IncludesReturnTrip: S.optional(S.Boolean),
          SeniorPass: S.optional(S.Boolean),
          TransferCount: S.optional(S.Number),
          TripCount: S.optional(S.Number),
          ValidityPeriod: S.optional(__S(161)),
        }),
      ).annotate({ identifier: "RouteTollPass" });
    case 3:
      return S.suspend(() => S.Struct({ SystemName: S.optional(SensitiveString) })).annotate({
        identifier: "RouteTransponder",
      });
    case 4:
      return S.Array(__S(163));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicableTimes: S.optional(SensitiveString),
          ConvertedPrice: S.optional(__S(160)),
          Id: SensitiveString,
          LocalPrice: __S(160),
          Name: SensitiveString,
          Pass: S.optional(__S(162)),
          PaymentMethods: __S(23),
          Transponders: __S(164),
        }),
      ).annotate({ identifier: "RouteTollRate" });
    case 6:
      return S.Array(__S(165));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Country: S.optional(SensitiveString),
          PaymentSites: __S(158),
          Rates: __S(166),
          Systems: __S(1),
        }),
      ).annotate({ identifier: "RouteToll" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167));
    case 1:
      return S.suspend(() => S.Struct({ Name: S.optional(SensitiveString) })).annotate({
        identifier: "RouteTollSystem",
      });
    case 2:
      return S.Array(__S(169));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Intersection: __S(105),
          RelativeExit: S.optional(S.Number),
          SteeringDirection: S.optional(S.String),
          TurnAngle: S.optional(S.Number),
          TurnIntensity: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteExitStepDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContinueHighwayStepDetails: S.optional(__S(130)),
          ContinueStepDetails: S.optional(__S(127)),
          CurrentRoad: S.optional(__S(128)),
          Distance: S.optional(S.Number),
          Duration: S.Number,
          EnterHighwayStepDetails: S.optional(__S(130)),
          ExitNumber: S.optional(__S(105)),
          ExitStepDetails: S.optional(__S(171)),
          GeometryOffset: S.optional(S.Number),
          Instruction: S.optional(SensitiveString),
          KeepStepDetails: S.optional(__S(129)),
          NextRoad: S.optional(__S(128)),
          RampStepDetails: S.optional(__S(129)),
          RoundaboutEnterStepDetails: S.optional(__S(130)),
          RoundaboutExitStepDetails: S.optional(__S(131)),
          RoundaboutPassStepDetails: S.optional(__S(130)),
          Signpost: S.optional(__S(134)),
          TurnStepDetails: S.optional(__S(129)),
          Type: S.String,
          UTurnStepDetails: S.optional(__S(129)),
        }),
      ).annotate({ identifier: "RouteVehicleTravelStep" });
    case 5:
      return S.Array(__S(172));
    case 6:
      return S.suspend(() =>
        S.Struct({ Category: S.optional(S.String), Name: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RouteZone" });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AfterTravelSteps: S.optional(__S(140)),
          Arrival: __S(142),
          Departure: __S(142),
          Incidents: S.optional(__S(144)),
          Notices: S.optional(__S(151)),
          PassThroughWaypoints: S.optional(__S(103)),
          Spans: S.optional(__S(153)),
          Summary: S.optional(__S(156)),
          Tolls: S.optional(__S(168)),
          TollSystems: S.optional(__S(170)),
          TravelSteps: S.optional(__S(173)),
          TruckRoadTypes: S.optional(__S(6)),
          Zones: S.optional(__S(175)),
        }),
      ).annotate({ identifier: "RouteVehicleLegDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: SensitiveString, Url: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RouteRentalAgency" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessPointDetails: S.optional(__S(117)),
          Name: S.optional(SensitiveString),
          OriginalPosition: S.optional(__S(1)),
          Position: __S(1),
          StationDetails: S.optional(__S(118)),
          Type: S.optional(S.String),
          WaypointIndex: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteRentalPlace" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Place: __S(178), Time: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RouteRentalArrival" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AnchorText: S.optional(SensitiveString),
          Description: SensitiveString,
          DeviceType: S.optional(S.String),
          Url: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RouteWebLink" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AttributionType: S.optional(S.String), WebLink: __S(180) }),
      ).annotate({ identifier: "RouteAttribution" });
    case 6:
      return S.Array(__S(181));
    case 7:
      return S.Array(__S(180));
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Duration: S.Number, Distance: S.Number })).annotate({
        identifier: "RouteRentalOverviewSummary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Overview: S.optional(__S(184)),
          TravelOnly: S.optional(__S(109)),
        }),
      ).annotate({ identifier: "RouteRentalSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AvailableSeats: S.optional(S.Number),
          Category: S.optional(SensitiveString),
          Color: S.optional(SensitiveString),
          Engine: S.optional(S.String),
          LicensePlate: S.optional(SensitiveString),
          Mode: S.String,
          Model: S.optional(SensitiveString),
          Name: S.optional(SensitiveString),
          TextColor: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "RouteRentalTransportModeDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ContinueStepDetails: S.optional(__S(127)),
          Distance: S.optional(S.Number),
          Duration: S.Number,
          ExitStepDetails: S.optional(__S(171)),
          GeometryOffset: S.optional(S.Number),
          Instruction: S.optional(SensitiveString),
          KeepStepDetails: S.optional(__S(129)),
          RampStepDetails: S.optional(__S(129)),
          RoundaboutEnterStepDetails: S.optional(__S(130)),
          RoundaboutExitStepDetails: S.optional(__S(131)),
          RoundaboutPassStepDetails: S.optional(__S(130)),
          TurnStepDetails: S.optional(__S(129)),
          Type: S.String,
          UTurnStepDetails: S.optional(__S(129)),
        }),
      ).annotate({ identifier: "RouteRentalTravelStep" });
    case 4:
      return S.Array(__S(187));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AfterTravelSteps: S.optional(__S(98)),
          Agency: __S(177),
          Arrival: __S(179),
          Attributions: S.optional(__S(182)),
          BeforeTravelSteps: S.optional(__S(98)),
          BookingWebLinks: S.optional(__S(183)),
          Departure: __S(179),
          Summary: S.optional(__S(185)),
          Transport: __S(186),
          TravelSteps: S.optional(__S(188)),
        }),
      ).annotate({ identifier: "RouteRentalLegDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Duration: S.Number,
          Instruction: S.optional(SensitiveString),
          Type: S.String,
        }),
      ).annotate({ identifier: "RouteTaxiAfterTravelStep" });
    case 7:
      return S.Array(__S(190));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Duration: S.Number, Distance: S.Number })).annotate({
        identifier: "RouteTaxiOverviewSummary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Overview: S.optional(__S(192)),
          TravelOnly: S.optional(__S(109)),
        }),
      ).annotate({ identifier: "RouteTaxiSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AfterTravelSteps: S.optional(__S(191)),
          Agency: __S(177),
          Arrival: __S(179),
          Attributions: S.optional(__S(182)),
          BeforeTravelSteps: S.optional(__S(98)),
          BookingWebLinks: S.optional(__S(183)),
          Departure: __S(179),
          Notices: S.optional(__S(96)),
          Summary: S.optional(__S(193)),
          Transport: __S(186),
          TravelSteps: S.optional(__S(188)),
        }),
      ).annotate({ identifier: "RouteTaxiLegDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(SensitiveString),
          OriginalPosition: S.optional(__S(1)),
          Position: __S(1),
          StationDetails: S.optional(__S(118)),
          Type: S.optional(S.String),
          WaypointIndex: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RouteTransitPlace" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Delay: S.optional(S.Number),
          Place: __S(195),
          Status: S.optional(S.String),
          Time: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RouteTransitArrival" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(SensitiveString),
          Effect: S.String,
          EndTime: S.optional(SensitiveString),
          StartTime: S.optional(SensitiveString),
          Type: S.String,
          Url: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RouteTransitIncident" });
    case 6:
      return S.Array(__S(197));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Accessibility: S.optional(__S(116)),
          Color: S.optional(SensitiveString),
          Headsign: S.optional(SensitiveString),
          LongRouteName: S.optional(SensitiveString),
          Mode: S.String,
          RouteName: S.optional(SensitiveString),
          ShortRouteName: S.optional(SensitiveString),
          TextColor: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "RouteTransitTransportModeDetails",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(57)),
          Departure: __S(196),
          Duration: S.Number,
          GeometryOffset: S.optional(S.Number),
          Transport: S.optional(__S(199)),
        }),
      ).annotate({
        identifier: "RouteTransitIntermediateStop",
      });
    case 1:
      return S.Array(__S(200));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Delay: S.optional(S.Number),
          PlatformName: S.optional(SensitiveString),
          Status: S.optional(S.String),
          Time: SensitiveString,
          Transport: S.optional(__S(199)),
        }),
      ).annotate({
        identifier: "RouteTransitNextDeparture",
      });
    case 3:
      return S.Array(__S(202));
    case 4:
      return S.suspend(() =>
        S.Struct({
          AfterTravelSteps: S.optional(__S(98)),
          Agency: S.optional(__S(177)),
          Arrival: __S(196),
          Attributions: S.optional(__S(182)),
          BeforeTravelSteps: S.optional(__S(98)),
          BookingWebLinks: S.optional(__S(183)),
          Departure: __S(196),
          Incidents: S.optional(__S(198)),
          IntermediateStops: S.optional(__S(201)),
          NextDepartures: S.optional(__S(203)),
          Notices: S.optional(__S(96)),
          PassThroughWaypoints: S.optional(__S(103)),
          Spans: S.optional(__S(107)),
          Summary: S.optional(__S(110)),
          Transport: __S(199),
          TravelSteps: S.optional(__S(112)),
        }),
      ).annotate({ identifier: "RouteTransitLegDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FerryLegDetails: S.optional(__S(113)),
          Geometry: __S(114),
          Language: S.optional(S.String),
          PedestrianLegDetails: S.optional(__S(137)),
          TravelMode: S.String,
          Type: S.String,
          VehicleLegDetails: S.optional(__S(176)),
          RentalLegDetails: S.optional(__S(189)),
          TaxiLegDetails: S.optional(__S(194)),
          TransitLegDetails: S.optional(__S(204)),
        }),
      ).annotate({ identifier: "RouteLeg" });
    case 6:
      return S.Array(__S(205));
    case 7:
      return S.suspend(() =>
        S.Struct({ RoadName: S.optional(__S(104)), RouteNumber: S.optional(__S(122)) }),
      ).annotate({ identifier: "RouteMajorRoadLabel" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(207));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Currency: S.String,
          Estimate: S.Boolean,
          Range: S.Boolean,
          RangeValue: S.optional(__S(159)),
          Value: S.Number,
        }),
      ).annotate({ identifier: "RouteTollPriceSummary" });
    case 2:
      return S.suspend(() => S.Struct({ Total: S.optional(__S(209)) })).annotate({
        identifier: "RouteTollSummary",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Distance: S.optional(S.Number),
          Duration: S.optional(S.Number),
          Tolls: S.optional(__S(210)),
        }),
      ).annotate({ identifier: "RouteSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Legs: __S(206),
          MajorRoadLabels: __S(208),
          Summary: S.optional(__S(211)),
        }),
      ).annotate({ identifier: "Route" });
    case 5:
      return S.Array(__S(212));
    case 6:
      return S.suspend(() =>
        S.Struct({
          LegGeometryFormat: S.String,
          Notices: __S(96),
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          Routes: __S(213),
        }),
      ).annotate({ identifier: "CalculateRoutesResponse" });
    case 7:
      return S.suspend(() => S.Struct({ BoundingBox: S.optional(__S(1)) })).annotate({
        identifier: "WaypointOptimizationAvoidanceAreaGeometry",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Geometry: __S(215) })).annotate({
        identifier: "WaypointOptimizationAvoidanceArea",
      });
    case 1:
      return S.Array(__S(216));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Areas: S.optional(__S(217)),
          CarShuttleTrains: S.optional(S.Boolean),
          ControlledAccessHighways: S.optional(S.Boolean),
          DirtRoads: S.optional(S.Boolean),
          Ferries: S.optional(S.Boolean),
          TollRoads: S.optional(S.Boolean),
          Tunnels: S.optional(S.Boolean),
          UTurns: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "WaypointOptimizationAvoidanceOptions",
      });
    case 3:
      return S.suspend(() => S.Struct({ DrivingDistance: S.Number })).annotate({
        identifier: "WaypointOptimizationDrivingDistanceOptions",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Algorithm: S.String,
          DrivingDistanceOptions: S.optional(__S(219)),
        }),
      ).annotate({
        identifier: "WaypointOptimizationClusteringOptions",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DayOfWeek: S.String, TimeOfDay: SensitiveString }),
      ).annotate({
        identifier: "WaypointOptimizationAccessHoursEntry",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          From: __S(221),
          To: __S(221),
        }),
      ).annotate({
        identifier: "WaypointOptimizationAccessHours",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccessHours: S.optional(__S(222)),
          AppointmentTime: S.optional(SensitiveString),
          Heading: S.optional(S.Number),
          Id: S.optional(S.String),
          ServiceDuration: S.optional(S.Number),
          SideOfStreet: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "WaypointOptimizationDestinationOptions",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RestDuration: S.Number, WorkDuration: S.Number })).annotate(
        {
          identifier: "WaypointOptimizationRestCycleDurations",
        },
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          LongCycle: __S(224),
          ShortCycle: __S(224),
        }),
      ).annotate({
        identifier: "WaypointOptimizationRestCycles",
      });
    case 2:
      return S.suspend(() => S.Struct({ Profile: SensitiveString })).annotate({
        identifier: "WaypointOptimizationRestProfile",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RestCycles: S.optional(__S(225)),
          RestProfile: S.optional(__S(226)),
          TreatServiceTimeAs: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WaypointOptimizationDriverOptions",
      });
    case 4:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "WaypointOptimizationOriginOptions",
      });
    case 5:
      return S.suspend(() => S.Struct({ Usage: S.optional(S.String) })).annotate({
        identifier: "WaypointOptimizationTrafficOptions",
      });
    case 6:
      return S.suspend(() => S.Struct({ Speed: S.optional(S.Number) })).annotate({
        identifier: "WaypointOptimizationPedestrianOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GrossWeight: S.optional(S.Number),
          HazardousCargos: S.optional(__S(57)),
          Height: S.optional(S.Number),
          Length: S.optional(S.Number),
          Trailer: S.optional(__S(58)),
          TruckType: S.optional(S.String),
          TunnelRestrictionCode: S.optional(SensitiveString),
          WeightPerAxle: S.optional(S.Number),
          Width: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WaypointOptimizationTruckOptions",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Pedestrian: S.optional(__S(230)),
          Truck: S.optional(__S(231)),
        }),
      ).annotate({
        identifier: "WaypointOptimizationTravelModeOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccessHours: S.optional(__S(222)),
          AppointmentTime: S.optional(SensitiveString),
          Before: S.optional(__S(1)),
          Heading: S.optional(S.Number),
          Id: S.optional(S.String),
          Position: __S(1),
          ServiceDuration: S.optional(S.Number),
          SideOfStreet: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "WaypointOptimizationWaypoint",
      });
    case 2:
      return S.Array(__S(233));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Avoid: S.optional(__S(218)),
          Clustering: S.optional(__S(220)),
          DepartureTime: S.optional(SensitiveString),
          Destination: S.optional(__S(1)),
          DestinationOptions: S.optional(__S(223)),
          Driver: S.optional(__S(227)),
          Exclude: S.optional(__S(46)),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          OptimizeSequencingFor: S.optional(S.String),
          Origin: __S(1),
          OriginOptions: S.optional(__S(228)),
          Traffic: S.optional(__S(229)),
          TravelMode: S.optional(S.String),
          TravelModeOptions: S.optional(__S(232)),
          Waypoints: S.optional(__S(234)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/optimize-waypoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "OptimizeWaypointsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Distance: S.Number,
          From: S.String,
          RestDuration: S.Number,
          To: S.String,
          TravelDuration: S.Number,
          WaitDuration: S.Number,
        }),
      ).annotate({
        identifier: "WaypointOptimizationConnection",
      });
    case 5:
      return S.Array(__S(236));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Constraint: S.optional(S.String),
          Reason: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "WaypointOptimizationFailedConstraint",
      });
    case 7:
      return S.Array(__S(238));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FailedConstraints: __S(239),
          Id: S.String,
          Position: __S(1),
        }),
      ).annotate({
        identifier: "WaypointOptimizationImpedingWaypoint",
      });
    case 1:
      return S.Array(__S(240));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ArrivalTime: S.optional(SensitiveString),
          ClusterIndex: S.optional(S.Number),
          DepartureTime: S.optional(SensitiveString),
          Id: S.String,
          Position: __S(1),
        }),
      ).annotate({
        identifier: "WaypointOptimizationOptimizedWaypoint",
      });
    case 3:
      return S.Array(__S(242));
    case 4:
      return S.suspend(() =>
        S.Struct({
          RestDuration: S.Number,
          ServiceDuration: S.Number,
          TravelDuration: S.Number,
          WaitDuration: S.Number,
        }),
      ).annotate({
        identifier: "WaypointOptimizationTimeBreakdown",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Connections: __S(237),
          Distance: S.Number,
          Duration: S.Number,
          ImpedingWaypoints: __S(241),
          OptimizedWaypoints: __S(243),
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          TimeBreakdown: __S(244),
        }),
      ).annotate({
        identifier: "OptimizeWaypointsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Heading: S.optional(S.Number),
          Position: __S(1),
          Speed: S.optional(S.Number),
          Timestamp: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RoadSnapTracePoint" });
    case 7:
      return S.Array(__S(246));
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TrailerCount: S.optional(S.Number) })).annotate({
        identifier: "RoadSnapTrailerOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GrossWeight: S.optional(S.Number),
          HazardousCargos: S.optional(__S(23)),
          Height: S.optional(S.Number),
          Length: S.optional(S.Number),
          Trailer: S.optional(__S(248)),
          TunnelRestrictionCode: S.optional(SensitiveString),
          Width: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RoadSnapTruckOptions" });
    case 2:
      return S.suspend(() => S.Struct({ Truck: S.optional(__S(249)) })).annotate({
        identifier: "RoadSnapTravelModeOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          SnappedGeometryFormat: S.optional(S.String),
          SnapRadius: S.optional(S.Number),
          TracePoints: __S(247),
          TravelMode: S.optional(S.String),
          TravelModeOptions: S.optional(__S(250)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/snap-to-roads" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SnapToRoadsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Code: S.String,
          Title: SensitiveString,
          TracePointIndexes: __S(1),
        }),
      ).annotate({ identifier: "RoadSnapNotice" });
    case 5:
      return S.Array(__S(252));
    case 6:
      return S.suspend(() =>
        S.Struct({ Confidence: S.Number, OriginalPosition: __S(1), SnappedPosition: __S(1) }),
      ).annotate({
        identifier: "RoadSnapSnappedTracePoint",
      });
    case 7:
      return S.Array(__S(254));
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Notices: __S(253),
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          SnappedGeometry: S.optional(__S(114)),
          SnappedGeometryFormat: S.String,
          SnappedTracePoints: __S(255),
        }),
      ).annotate({ identifier: "SnapToRoadsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Message: S.String }).pipe(
          S.encodeKeys({ Name: "name", Message: "message" }),
        ),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 2:
      return S.Array(__S(257));
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
  }
}
