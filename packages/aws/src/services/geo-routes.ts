import * as API from "@distilled.cloud/core/api";
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
      Reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      FieldList: /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
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
const IsolineAllowOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Hot: S.optional(S.Boolean), Hov: S.optional(S.Boolean) }),
).annotate({ identifier: "IsolineAllowOptions" }) as any as S.Schema<IsolineAllowOptions>;
export type TimestampWithTimezoneOffset = string | redacted.Redacted<string>;
export type BoundingBox = number[];
const BoundingBox = /*@__PURE__*/ S.Array(S.Number);
export type Position = number[];
const Position = BoundingBox as any as S.Schema<Position>;
export type LineString = number[][];
const LineString = /*@__PURE__*/ S.Array(Position);
export interface Corridor {
  LineString: number[][];
  Radius: number;
}
const Corridor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ LineString: LineString, Radius: S.Number }),
).annotate({ identifier: "Corridor" }) as any as S.Schema<Corridor>;
export type LinearRing = number[][];
const LinearRing = LineString as any as S.Schema<LinearRing>;
export type LinearRings = number[][][];
const LinearRings = /*@__PURE__*/ S.Array(LinearRing);
export type Polyline = string | redacted.Redacted<string>;
export interface PolylineCorridor {
  Polyline: string | redacted.Redacted<string>;
  Radius: number;
}
const PolylineCorridor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Polyline: SensitiveString, Radius: S.Number }),
).annotate({ identifier: "PolylineCorridor" }) as any as S.Schema<PolylineCorridor>;
export type PolylineRing = string | redacted.Redacted<string>;
export type PolylineRingList = (string | redacted.Redacted<string>)[];
const PolylineRingList = /*@__PURE__*/ S.Array(SensitiveString);
export interface IsolineAvoidanceAreaGeometry {
  BoundingBox?: number[];
  Corridor?: Corridor;
  Polygon?: number[][][];
  PolylineCorridor?: PolylineCorridor;
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
const IsolineAvoidanceAreaGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BoundingBox: S.optional(BoundingBox),
    Corridor: S.optional(Corridor),
    Polygon: S.optional(LinearRings),
    PolylineCorridor: S.optional(PolylineCorridor),
    PolylinePolygon: S.optional(PolylineRingList),
  }),
).annotate({
  identifier: "IsolineAvoidanceAreaGeometry",
}) as any as S.Schema<IsolineAvoidanceAreaGeometry>;
export type IsolineAvoidanceAreaGeometryList = IsolineAvoidanceAreaGeometry[];
const IsolineAvoidanceAreaGeometryList = /*@__PURE__*/ S.Array(IsolineAvoidanceAreaGeometry);
export interface IsolineAvoidanceArea {
  Except?: IsolineAvoidanceAreaGeometry[];
  Geometry: IsolineAvoidanceAreaGeometry;
}
const IsolineAvoidanceArea = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Except: S.optional(IsolineAvoidanceAreaGeometryList),
    Geometry: IsolineAvoidanceAreaGeometry,
  }),
).annotate({ identifier: "IsolineAvoidanceArea" }) as any as S.Schema<IsolineAvoidanceArea>;
export type IsolineAvoidanceAreaList = IsolineAvoidanceArea[];
const IsolineAvoidanceAreaList = /*@__PURE__*/ S.Array(IsolineAvoidanceArea);
export type TruckRoadType = string | redacted.Redacted<string>;
export type TruckRoadTypeList = (string | redacted.Redacted<string>)[];
const TruckRoadTypeList = PolylineRingList as any as S.Schema<TruckRoadTypeList>;
export type IsolineZoneCategory =
  | "CongestionPricing"
  | "Environmental"
  | "Vignette"
  | (string & {});
const IsolineZoneCategory = S.String;

export interface IsolineAvoidanceZoneCategory {
  Category?: IsolineZoneCategory;
}
const IsolineAvoidanceZoneCategory = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Category: S.optional(IsolineZoneCategory) }),
).annotate({
  identifier: "IsolineAvoidanceZoneCategory",
}) as any as S.Schema<IsolineAvoidanceZoneCategory>;
export type IsolineAvoidanceZoneCategoryList = IsolineAvoidanceZoneCategory[];
const IsolineAvoidanceZoneCategoryList = /*@__PURE__*/ S.Array(IsolineAvoidanceZoneCategory);
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
const IsolineAvoidanceOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Areas: S.optional(IsolineAvoidanceAreaList),
    CarShuttleTrains: S.optional(S.Boolean),
    ControlledAccessHighways: S.optional(S.Boolean),
    DirtRoads: S.optional(S.Boolean),
    Ferries: S.optional(S.Boolean),
    SeasonalClosure: S.optional(S.Boolean),
    TollRoads: S.optional(S.Boolean),
    TollTransponders: S.optional(S.Boolean),
    TruckRoadTypes: S.optional(TruckRoadTypeList),
    Tunnels: S.optional(S.Boolean),
    UTurns: S.optional(S.Boolean),
    ZoneCategories: S.optional(IsolineAvoidanceZoneCategoryList),
  }),
).annotate({ identifier: "IsolineAvoidanceOptions" }) as any as S.Schema<IsolineAvoidanceOptions>;
export type DistanceMeters = number;
export type Heading = number;
export type SensitiveString = string | redacted.Redacted<string>;
export type MatchingStrategy = "MatchAny" | "MatchMostSignificantRoad" | (string & {});
const MatchingStrategy = S.String;

export interface IsolineMatchingOptions {
  NameHint?: string | redacted.Redacted<string>;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: MatchingStrategy;
}
const IsolineMatchingOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    NameHint: S.optional(SensitiveString),
    OnRoadThreshold: S.optional(S.Number),
    Radius: S.optional(S.Number),
    Strategy: S.optional(MatchingStrategy),
  }),
).annotate({ identifier: "IsolineMatchingOptions" }) as any as S.Schema<IsolineMatchingOptions>;
export type SideOfStreetMatchingStrategy = "AnyStreet" | "DividedStreetOnly" | (string & {});
const SideOfStreetMatchingStrategy = S.String;

export interface IsolineSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
const IsolineSideOfStreetOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Position: Position, UseWith: S.optional(SideOfStreetMatchingStrategy) }),
).annotate({
  identifier: "IsolineSideOfStreetOptions",
}) as any as S.Schema<IsolineSideOfStreetOptions>;
export interface IsolineDestinationOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: IsolineMatchingOptions;
  SideOfStreet?: IsolineSideOfStreetOptions;
}
const IsolineDestinationOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvoidActionsForDistance: S.optional(S.Number),
    Heading: S.optional(S.Number),
    Matching: S.optional(IsolineMatchingOptions),
    SideOfStreet: S.optional(IsolineSideOfStreetOptions),
  }),
).annotate({
  identifier: "IsolineDestinationOptions",
}) as any as S.Schema<IsolineDestinationOptions>;
export type GeometryFormat = "FlexiblePolyline" | "Simple" | (string & {});
const GeometryFormat = S.String;

export interface IsolineGranularityOptions {
  MaxPoints?: number;
  MaxResolution?: number;
}
const IsolineGranularityOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ MaxPoints: S.optional(S.Number), MaxResolution: S.optional(S.Number) }),
).annotate({
  identifier: "IsolineGranularityOptions",
}) as any as S.Schema<IsolineGranularityOptions>;
export type ApiKey = string | redacted.Redacted<string>;
export type IsolineOptimizationObjective =
  | "AccurateCalculation"
  | "BalancedCalculation"
  | "FastCalculation"
  | (string & {});
const IsolineOptimizationObjective = S.String;

export type RoutingObjective = "FastestRoute" | "ShortestRoute" | (string & {});
const RoutingObjective = S.String;

export interface IsolineOriginOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: IsolineMatchingOptions;
  SideOfStreet?: IsolineSideOfStreetOptions;
}
const IsolineOriginOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvoidActionsForDistance: S.optional(S.Number),
    Heading: S.optional(S.Number),
    Matching: S.optional(IsolineMatchingOptions),
    SideOfStreet: S.optional(IsolineSideOfStreetOptions),
  }),
).annotate({ identifier: "IsolineOriginOptions" }) as any as S.Schema<IsolineOriginOptions>;
export type DistanceThresholdList = number[];
const DistanceThresholdList = BoundingBox as any as S.Schema<DistanceThresholdList>;
export type DurationSeconds = number;
export type TimeThresholdList = number[];
const TimeThresholdList = BoundingBox as any as S.Schema<TimeThresholdList>;
export interface IsolineThresholds {
  Distance?: number[];
  Time?: number[];
}
const IsolineThresholds = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Distance: S.optional(DistanceThresholdList), Time: S.optional(TimeThresholdList) }),
).annotate({ identifier: "IsolineThresholds" }) as any as S.Schema<IsolineThresholds>;
export type TrafficUsage = "IgnoreTrafficData" | "UseTrafficData" | (string & {});
const TrafficUsage = S.String;

export interface IsolineTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: TrafficUsage;
}
const IsolineTrafficOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ FlowEventThresholdOverride: S.optional(S.Number), Usage: S.optional(TrafficUsage) }),
).annotate({ identifier: "IsolineTrafficOptions" }) as any as S.Schema<IsolineTrafficOptions>;
export type IsolineTravelMode = "Car" | "Pedestrian" | "Scooter" | "Truck" | (string & {});
const IsolineTravelMode = S.String;

export type IsolineEngineType = "Electric" | "InternalCombustion" | "PluginHybrid" | (string & {});
const IsolineEngineType = S.String;

export interface IsolineVehicleLicensePlate {
  LastCharacter?: string;
}
const IsolineVehicleLicensePlate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ LastCharacter: S.optional(S.String) }),
).annotate({
  identifier: "IsolineVehicleLicensePlate",
}) as any as S.Schema<IsolineVehicleLicensePlate>;
export type SpeedKilometersPerHour = number;
export type SensitiveInteger = number;
export interface IsolineCarOptions {
  EngineType?: IsolineEngineType;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
const IsolineCarOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EngineType: S.optional(IsolineEngineType),
    LicensePlate: S.optional(IsolineVehicleLicensePlate),
    MaxSpeed: S.optional(S.Number),
    Occupancy: S.optional(S.Number),
  }),
).annotate({ identifier: "IsolineCarOptions" }) as any as S.Schema<IsolineCarOptions>;
export interface IsolineScooterOptions {
  EngineType?: IsolineEngineType;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
const IsolineScooterOptions = IsolineCarOptions as any as S.Schema<IsolineScooterOptions>;
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
const IsolineHazardousCargoType = S.String;

export type IsolineHazardousCargoTypeList = IsolineHazardousCargoType[];
const IsolineHazardousCargoTypeList = /*@__PURE__*/ S.Array(IsolineHazardousCargoType);
export type DimensionCentimeters = number;
export interface IsolineTrailerOptions {
  AxleCount?: number;
  TrailerCount?: number;
}
const IsolineTrailerOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AxleCount: S.optional(S.Number), TrailerCount: S.optional(S.Number) }),
).annotate({ identifier: "IsolineTrailerOptions" }) as any as S.Schema<IsolineTrailerOptions>;
export type IsolineTruckType = "LightTruck" | "StraightTruck" | "Tractor" | (string & {});
const IsolineTruckType = S.String;

export type TunnelRestrictionCode = string | redacted.Redacted<string>;
export interface WeightPerAxleGroup {
  Single?: number;
  Tandem?: number;
  Triple?: number;
  Quad?: number;
  Quint?: number;
}
const WeightPerAxleGroup = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Single: S.optional(S.Number),
    Tandem: S.optional(S.Number),
    Triple: S.optional(S.Number),
    Quad: S.optional(S.Number),
    Quint: S.optional(S.Number),
  }),
).annotate({ identifier: "WeightPerAxleGroup" }) as any as S.Schema<WeightPerAxleGroup>;
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
const IsolineTruckOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AxleCount: S.optional(S.Number),
    EngineType: S.optional(IsolineEngineType),
    GrossWeight: S.optional(S.Number),
    HazardousCargos: S.optional(IsolineHazardousCargoTypeList),
    Height: S.optional(S.Number),
    HeightAboveFirstAxle: S.optional(S.Number),
    KpraLength: S.optional(S.Number),
    Length: S.optional(S.Number),
    LicensePlate: S.optional(IsolineVehicleLicensePlate),
    MaxSpeed: S.optional(S.Number),
    Occupancy: S.optional(S.Number),
    PayloadCapacity: S.optional(S.Number),
    TireCount: S.optional(S.Number),
    Trailer: S.optional(IsolineTrailerOptions),
    TruckType: S.optional(IsolineTruckType),
    TunnelRestrictionCode: S.optional(SensitiveString),
    WeightPerAxle: S.optional(S.Number),
    WeightPerAxleGroup: S.optional(WeightPerAxleGroup),
    Width: S.optional(S.Number),
  }),
).annotate({ identifier: "IsolineTruckOptions" }) as any as S.Schema<IsolineTruckOptions>;
export interface IsolineTravelModeOptions {
  Car?: IsolineCarOptions;
  Scooter?: IsolineScooterOptions;
  Truck?: IsolineTruckOptions;
}
const IsolineTravelModeOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Car: S.optional(IsolineCarOptions),
    Scooter: S.optional(IsolineScooterOptions),
    Truck: S.optional(IsolineTruckOptions),
  }),
).annotate({ identifier: "IsolineTravelModeOptions" }) as any as S.Schema<IsolineTravelModeOptions>;
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
const CalculateIsolinesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Allow: S.optional(IsolineAllowOptions),
    ArrivalTime: S.optional(SensitiveString),
    Avoid: S.optional(IsolineAvoidanceOptions),
    DepartNow: S.optional(S.Boolean),
    DepartureTime: S.optional(SensitiveString),
    Destination: S.optional(Position),
    DestinationOptions: S.optional(IsolineDestinationOptions),
    IsolineGeometryFormat: S.optional(GeometryFormat),
    IsolineGranularity: S.optional(IsolineGranularityOptions),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    OptimizeIsolineFor: S.optional(IsolineOptimizationObjective),
    OptimizeRoutingFor: S.optional(RoutingObjective),
    Origin: S.optional(Position),
    OriginOptions: S.optional(IsolineOriginOptions),
    Thresholds: IsolineThresholds,
    Traffic: S.optional(IsolineTrafficOptions),
    TravelMode: S.optional(IsolineTravelMode),
    TravelModeOptions: S.optional(IsolineTravelModeOptions),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/isolines" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CalculateIsolinesRequest" }) as any as S.Schema<CalculateIsolinesRequest>;
export interface IsolineConnectionGeometry {
  LineString?: number[][];
  Polyline?: string | redacted.Redacted<string>;
}
const IsolineConnectionGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ LineString: S.optional(LineString), Polyline: S.optional(SensitiveString) }),
).annotate({
  identifier: "IsolineConnectionGeometry",
}) as any as S.Schema<IsolineConnectionGeometry>;
export interface IsolineConnection {
  FromPolygonIndex: number;
  Geometry: IsolineConnectionGeometry;
  ToPolygonIndex: number;
}
const IsolineConnection = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    FromPolygonIndex: S.Number,
    Geometry: IsolineConnectionGeometry,
    ToPolygonIndex: S.Number,
  }),
).annotate({ identifier: "IsolineConnection" }) as any as S.Schema<IsolineConnection>;
export type IsolineConnectionList = IsolineConnection[];
const IsolineConnectionList = /*@__PURE__*/ S.Array(IsolineConnection);
export interface IsolineShapeGeometry {
  Polygon?: number[][][];
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
const IsolineShapeGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Polygon: S.optional(LinearRings), PolylinePolygon: S.optional(PolylineRingList) }),
).annotate({ identifier: "IsolineShapeGeometry" }) as any as S.Schema<IsolineShapeGeometry>;
export type IsolineShapeGeometryList = IsolineShapeGeometry[];
const IsolineShapeGeometryList = /*@__PURE__*/ S.Array(IsolineShapeGeometry);
export interface Isoline {
  Connections: IsolineConnection[];
  DistanceThreshold?: number;
  Geometries: IsolineShapeGeometry[];
  TimeThreshold?: number;
}
const Isoline = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Connections: IsolineConnectionList,
    DistanceThreshold: S.optional(S.Number),
    Geometries: IsolineShapeGeometryList,
    TimeThreshold: S.optional(S.Number),
  }),
).annotate({ identifier: "Isoline" }) as any as S.Schema<Isoline>;
export type IsolineList = Isoline[];
const IsolineList = /*@__PURE__*/ S.Array(Isoline);
export interface CalculateIsolinesResponse {
  ArrivalTime?: string | redacted.Redacted<string>;
  DepartureTime?: string | redacted.Redacted<string>;
  IsolineGeometryFormat: GeometryFormat;
  Isolines: Isoline[];
  PricingBucket: string;
  SnappedDestination?: number[];
  SnappedOrigin?: number[];
}
const CalculateIsolinesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ArrivalTime: S.optional(SensitiveString),
    DepartureTime: S.optional(SensitiveString),
    IsolineGeometryFormat: GeometryFormat,
    Isolines: IsolineList,
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    SnappedDestination: S.optional(Position),
    SnappedOrigin: S.optional(Position),
  }),
).annotate({
  identifier: "CalculateIsolinesResponse",
}) as any as S.Schema<CalculateIsolinesResponse>;
export interface RouteMatrixAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
const RouteMatrixAllowOptions = IsolineAllowOptions as any as S.Schema<RouteMatrixAllowOptions>;
export interface RouteMatrixAvoidanceAreaGeometry {
  BoundingBox?: number[];
  Polygon?: number[][][];
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
const RouteMatrixAvoidanceAreaGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BoundingBox: S.optional(BoundingBox),
    Polygon: S.optional(LinearRings),
    PolylinePolygon: S.optional(PolylineRingList),
  }),
).annotate({
  identifier: "RouteMatrixAvoidanceAreaGeometry",
}) as any as S.Schema<RouteMatrixAvoidanceAreaGeometry>;
export interface RouteMatrixAvoidanceArea {
  Geometry: RouteMatrixAvoidanceAreaGeometry;
}
const RouteMatrixAvoidanceArea = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Geometry: RouteMatrixAvoidanceAreaGeometry }),
).annotate({ identifier: "RouteMatrixAvoidanceArea" }) as any as S.Schema<RouteMatrixAvoidanceArea>;
export type RouteMatrixAvoidanceAreaList = RouteMatrixAvoidanceArea[];
const RouteMatrixAvoidanceAreaList = /*@__PURE__*/ S.Array(RouteMatrixAvoidanceArea);
export type RouteMatrixZoneCategory =
  | "CongestionPricing"
  | "Environmental"
  | "Vignette"
  | (string & {});
export interface RouteMatrixAvoidanceZoneCategory {
  Category?: RouteMatrixZoneCategory;
}
const RouteMatrixAvoidanceZoneCategory =
  IsolineAvoidanceZoneCategory as any as S.Schema<RouteMatrixAvoidanceZoneCategory>;
export type RouteMatrixAvoidanceZoneCategoryList = RouteMatrixAvoidanceZoneCategory[];
const RouteMatrixAvoidanceZoneCategoryList = /*@__PURE__*/ S.Array(
  RouteMatrixAvoidanceZoneCategory,
);
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
const RouteMatrixAvoidanceOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Areas: S.optional(RouteMatrixAvoidanceAreaList),
    CarShuttleTrains: S.optional(S.Boolean),
    ControlledAccessHighways: S.optional(S.Boolean),
    DirtRoads: S.optional(S.Boolean),
    Ferries: S.optional(S.Boolean),
    TollRoads: S.optional(S.Boolean),
    TollTransponders: S.optional(S.Boolean),
    TruckRoadTypes: S.optional(TruckRoadTypeList),
    Tunnels: S.optional(S.Boolean),
    UTurns: S.optional(S.Boolean),
    ZoneCategories: S.optional(RouteMatrixAvoidanceZoneCategoryList),
  }),
).annotate({
  identifier: "RouteMatrixAvoidanceOptions",
}) as any as S.Schema<RouteMatrixAvoidanceOptions>;
export interface RouteMatrixMatchingOptions {
  NameHint?: string | redacted.Redacted<string>;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: MatchingStrategy;
}
const RouteMatrixMatchingOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    NameHint: S.optional(SensitiveString),
    OnRoadThreshold: S.optional(S.Number),
    Radius: S.optional(S.Number),
    Strategy: S.optional(MatchingStrategy),
  }),
).annotate({
  identifier: "RouteMatrixMatchingOptions",
}) as any as S.Schema<RouteMatrixMatchingOptions>;
export interface RouteMatrixSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
const RouteMatrixSideOfStreetOptions =
  IsolineSideOfStreetOptions as any as S.Schema<RouteMatrixSideOfStreetOptions>;
export interface RouteMatrixDestinationOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: RouteMatrixMatchingOptions;
  SideOfStreet?: RouteMatrixSideOfStreetOptions;
}
const RouteMatrixDestinationOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvoidActionsForDistance: S.optional(S.Number),
    Heading: S.optional(S.Number),
    Matching: S.optional(RouteMatrixMatchingOptions),
    SideOfStreet: S.optional(RouteMatrixSideOfStreetOptions),
  }),
).annotate({
  identifier: "RouteMatrixDestinationOptions",
}) as any as S.Schema<RouteMatrixDestinationOptions>;
export interface RouteMatrixDestination {
  Options?: RouteMatrixDestinationOptions;
  Position: number[];
}
const RouteMatrixDestination = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Options: S.optional(RouteMatrixDestinationOptions), Position: Position }),
).annotate({ identifier: "RouteMatrixDestination" }) as any as S.Schema<RouteMatrixDestination>;
export type RouteMatrixDestinationList = RouteMatrixDestination[];
const RouteMatrixDestinationList = /*@__PURE__*/ S.Array(RouteMatrixDestination);
export type CountryCode = string | redacted.Redacted<string>;
export type CountryCodeList = (string | redacted.Redacted<string>)[];
const CountryCodeList = PolylineRingList as any as S.Schema<CountryCodeList>;
export interface RouteMatrixExclusionOptions {
  Countries: (string | redacted.Redacted<string>)[];
}
const RouteMatrixExclusionOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Countries: CountryCodeList }),
).annotate({
  identifier: "RouteMatrixExclusionOptions",
}) as any as S.Schema<RouteMatrixExclusionOptions>;
export interface RouteMatrixOriginOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: RouteMatrixMatchingOptions;
  SideOfStreet?: RouteMatrixSideOfStreetOptions;
}
const RouteMatrixOriginOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvoidActionsForDistance: S.optional(S.Number),
    Heading: S.optional(S.Number),
    Matching: S.optional(RouteMatrixMatchingOptions),
    SideOfStreet: S.optional(RouteMatrixSideOfStreetOptions),
  }),
).annotate({ identifier: "RouteMatrixOriginOptions" }) as any as S.Schema<RouteMatrixOriginOptions>;
export interface RouteMatrixOrigin {
  Options?: RouteMatrixOriginOptions;
  Position: number[];
}
const RouteMatrixOrigin = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Options: S.optional(RouteMatrixOriginOptions), Position: Position }),
).annotate({ identifier: "RouteMatrixOrigin" }) as any as S.Schema<RouteMatrixOrigin>;
export type RouteMatrixOriginList = RouteMatrixOrigin[];
const RouteMatrixOriginList = /*@__PURE__*/ S.Array(RouteMatrixOrigin);
export interface RouteMatrixAutoCircle {
  Margin?: number;
  MaxRadius?: number;
}
const RouteMatrixAutoCircle = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Margin: S.optional(S.Number), MaxRadius: S.optional(S.Number) }),
).annotate({ identifier: "RouteMatrixAutoCircle" }) as any as S.Schema<RouteMatrixAutoCircle>;
export type SensitiveDouble = number;
export interface Circle {
  Center: number[];
  Radius: number;
}
const Circle = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Center: Position, Radius: S.Number }),
).annotate({ identifier: "Circle" }) as any as S.Schema<Circle>;
export interface RouteMatrixBoundaryGeometry {
  AutoCircle?: RouteMatrixAutoCircle;
  Circle?: Circle;
  BoundingBox?: number[];
  Polygon?: number[][][];
}
const RouteMatrixBoundaryGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AutoCircle: S.optional(RouteMatrixAutoCircle),
    Circle: S.optional(Circle),
    BoundingBox: S.optional(BoundingBox),
    Polygon: S.optional(LinearRings),
  }),
).annotate({
  identifier: "RouteMatrixBoundaryGeometry",
}) as any as S.Schema<RouteMatrixBoundaryGeometry>;
export interface RouteMatrixBoundary {
  Geometry?: RouteMatrixBoundaryGeometry;
  Unbounded?: boolean;
}
const RouteMatrixBoundary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Geometry: S.optional(RouteMatrixBoundaryGeometry), Unbounded: S.optional(S.Boolean) }),
).annotate({ identifier: "RouteMatrixBoundary" }) as any as S.Schema<RouteMatrixBoundary>;
export interface RouteMatrixTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: TrafficUsage;
}
const RouteMatrixTrafficOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ FlowEventThresholdOverride: S.optional(S.Number), Usage: S.optional(TrafficUsage) }),
).annotate({
  identifier: "RouteMatrixTrafficOptions",
}) as any as S.Schema<RouteMatrixTrafficOptions>;
export type RouteMatrixTravelMode = "Car" | "Pedestrian" | "Scooter" | "Truck" | (string & {});
const RouteMatrixTravelMode = S.String;

export interface RouteMatrixVehicleLicensePlate {
  LastCharacter?: string;
}
const RouteMatrixVehicleLicensePlate =
  IsolineVehicleLicensePlate as any as S.Schema<RouteMatrixVehicleLicensePlate>;
export interface RouteMatrixCarOptions {
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
const RouteMatrixCarOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    LicensePlate: S.optional(RouteMatrixVehicleLicensePlate),
    MaxSpeed: S.optional(S.Number),
    Occupancy: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteMatrixCarOptions" }) as any as S.Schema<RouteMatrixCarOptions>;
export interface RouteMatrixScooterOptions {
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
const RouteMatrixScooterOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    LicensePlate: S.optional(RouteMatrixVehicleLicensePlate),
    MaxSpeed: S.optional(S.Number),
    Occupancy: S.optional(S.Number),
  }),
).annotate({
  identifier: "RouteMatrixScooterOptions",
}) as any as S.Schema<RouteMatrixScooterOptions>;
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
const RouteMatrixHazardousCargoType = S.String;

export type RouteMatrixHazardousCargoTypeList = RouteMatrixHazardousCargoType[];
const RouteMatrixHazardousCargoTypeList = /*@__PURE__*/ S.Array(RouteMatrixHazardousCargoType);
export interface RouteMatrixTrailerOptions {
  TrailerCount?: number;
}
const RouteMatrixTrailerOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TrailerCount: S.optional(S.Number) }),
).annotate({
  identifier: "RouteMatrixTrailerOptions",
}) as any as S.Schema<RouteMatrixTrailerOptions>;
export type RouteMatrixTruckType = "LightTruck" | "StraightTruck" | "Tractor" | (string & {});
const RouteMatrixTruckType = S.String;

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
const RouteMatrixTruckOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AxleCount: S.optional(S.Number),
    GrossWeight: S.optional(S.Number),
    HazardousCargos: S.optional(RouteMatrixHazardousCargoTypeList),
    Height: S.optional(S.Number),
    KpraLength: S.optional(S.Number),
    Length: S.optional(S.Number),
    LicensePlate: S.optional(RouteMatrixVehicleLicensePlate),
    MaxSpeed: S.optional(S.Number),
    Occupancy: S.optional(S.Number),
    PayloadCapacity: S.optional(S.Number),
    Trailer: S.optional(RouteMatrixTrailerOptions),
    TruckType: S.optional(RouteMatrixTruckType),
    TunnelRestrictionCode: S.optional(SensitiveString),
    WeightPerAxle: S.optional(S.Number),
    WeightPerAxleGroup: S.optional(WeightPerAxleGroup),
    Width: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteMatrixTruckOptions" }) as any as S.Schema<RouteMatrixTruckOptions>;
export interface RouteMatrixTravelModeOptions {
  Car?: RouteMatrixCarOptions;
  Scooter?: RouteMatrixScooterOptions;
  Truck?: RouteMatrixTruckOptions;
}
const RouteMatrixTravelModeOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Car: S.optional(RouteMatrixCarOptions),
    Scooter: S.optional(RouteMatrixScooterOptions),
    Truck: S.optional(RouteMatrixTruckOptions),
  }),
).annotate({
  identifier: "RouteMatrixTravelModeOptions",
}) as any as S.Schema<RouteMatrixTravelModeOptions>;
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
const CalculateRouteMatrixRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Allow: S.optional(RouteMatrixAllowOptions),
    Avoid: S.optional(RouteMatrixAvoidanceOptions),
    DepartNow: S.optional(S.Boolean),
    DepartureTime: S.optional(SensitiveString),
    Destinations: RouteMatrixDestinationList,
    Exclude: S.optional(RouteMatrixExclusionOptions),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    OptimizeRoutingFor: S.optional(RoutingObjective),
    Origins: RouteMatrixOriginList,
    RoutingBoundary: S.optional(RouteMatrixBoundary),
    Traffic: S.optional(RouteMatrixTrafficOptions),
    TravelMode: S.optional(RouteMatrixTravelMode),
    TravelModeOptions: S.optional(RouteMatrixTravelModeOptions),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/route-matrix" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CalculateRouteMatrixRequest",
}) as any as S.Schema<CalculateRouteMatrixRequest>;
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
const RouteMatrixErrorCode = S.String;

export interface RouteMatrixEntry {
  Distance: number;
  Duration: number;
  Error?: RouteMatrixErrorCode;
}
const RouteMatrixEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Distance: S.Number, Duration: S.Number, Error: S.optional(RouteMatrixErrorCode) }),
).annotate({ identifier: "RouteMatrixEntry" }) as any as S.Schema<RouteMatrixEntry>;
export type RouteMatrixRow = RouteMatrixEntry[];
const RouteMatrixRow = /*@__PURE__*/ S.Array(RouteMatrixEntry);
export type RouteMatrix = RouteMatrixEntry[][];
const RouteMatrix = /*@__PURE__*/ S.Array(RouteMatrixRow);
export interface CalculateRouteMatrixResponse {
  ErrorCount: number;
  PricingBucket: string;
  RouteMatrix: RouteMatrixEntry[][];
  RoutingBoundary: RouteMatrixBoundary;
}
const CalculateRouteMatrixResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ErrorCount: S.Number,
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    RouteMatrix: RouteMatrix,
    RoutingBoundary: RouteMatrixBoundary,
  }),
).annotate({
  identifier: "CalculateRouteMatrixResponse",
}) as any as S.Schema<CalculateRouteMatrixResponse>;
export interface RouteAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
const RouteAllowOptions = IsolineAllowOptions as any as S.Schema<RouteAllowOptions>;
export interface RouteAvoidanceAreaGeometry {
  Corridor?: Corridor;
  BoundingBox?: number[];
  Polygon?: number[][][];
  PolylineCorridor?: PolylineCorridor;
  PolylinePolygon?: (string | redacted.Redacted<string>)[];
}
const RouteAvoidanceAreaGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Corridor: S.optional(Corridor),
    BoundingBox: S.optional(BoundingBox),
    Polygon: S.optional(LinearRings),
    PolylineCorridor: S.optional(PolylineCorridor),
    PolylinePolygon: S.optional(PolylineRingList),
  }),
).annotate({
  identifier: "RouteAvoidanceAreaGeometry",
}) as any as S.Schema<RouteAvoidanceAreaGeometry>;
export type RouteAvoidanceAreaGeometryList = RouteAvoidanceAreaGeometry[];
const RouteAvoidanceAreaGeometryList = /*@__PURE__*/ S.Array(RouteAvoidanceAreaGeometry);
export interface RouteAvoidanceArea {
  Except?: RouteAvoidanceAreaGeometry[];
  Geometry: RouteAvoidanceAreaGeometry;
}
const RouteAvoidanceArea = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Except: S.optional(RouteAvoidanceAreaGeometryList),
    Geometry: RouteAvoidanceAreaGeometry,
  }),
).annotate({ identifier: "RouteAvoidanceArea" }) as any as S.Schema<RouteAvoidanceArea>;
export type RouteAvoidanceAreaList = RouteAvoidanceArea[];
const RouteAvoidanceAreaList = /*@__PURE__*/ S.Array(RouteAvoidanceArea);
export type RouteZoneCategory = "CongestionPricing" | "Environmental" | "Vignette" | (string & {});
const RouteZoneCategory = S.String;

export interface RouteAvoidanceZoneCategory {
  Category: RouteZoneCategory;
}
const RouteAvoidanceZoneCategory = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Category: RouteZoneCategory }),
).annotate({
  identifier: "RouteAvoidanceZoneCategory",
}) as any as S.Schema<RouteAvoidanceZoneCategory>;
export type RouteAvoidanceZoneCategoryList = RouteAvoidanceZoneCategory[];
const RouteAvoidanceZoneCategoryList = /*@__PURE__*/ S.Array(RouteAvoidanceZoneCategory);
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
const RouteAvoidanceOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Areas: S.optional(RouteAvoidanceAreaList),
    CarShuttleTrains: S.optional(S.Boolean),
    ControlledAccessHighways: S.optional(S.Boolean),
    DirtRoads: S.optional(S.Boolean),
    Ferries: S.optional(S.Boolean),
    SeasonalClosure: S.optional(S.Boolean),
    TollRoads: S.optional(S.Boolean),
    TollTransponders: S.optional(S.Boolean),
    TruckRoadTypes: S.optional(TruckRoadTypeList),
    Tunnels: S.optional(S.Boolean),
    UTurns: S.optional(S.Boolean),
    ZoneCategories: S.optional(RouteAvoidanceZoneCategoryList),
  }),
).annotate({ identifier: "RouteAvoidanceOptions" }) as any as S.Schema<RouteAvoidanceOptions>;
export interface RouteMatchingOptions {
  NameHint?: string | redacted.Redacted<string>;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: MatchingStrategy;
}
const RouteMatchingOptions = IsolineMatchingOptions as any as S.Schema<RouteMatchingOptions>;
export interface RouteSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
const RouteSideOfStreetOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Position: Position, UseWith: S.optional(SideOfStreetMatchingStrategy) }),
).annotate({ identifier: "RouteSideOfStreetOptions" }) as any as S.Schema<RouteSideOfStreetOptions>;
export interface RouteDestinationOptions {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  SideOfStreet?: RouteSideOfStreetOptions;
  StopDuration?: number;
}
const RouteDestinationOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvoidActionsForDistance: S.optional(S.Number),
    AvoidUTurns: S.optional(S.Boolean),
    Heading: S.optional(S.Number),
    Matching: S.optional(RouteMatchingOptions),
    SideOfStreet: S.optional(RouteSideOfStreetOptions),
    StopDuration: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteDestinationOptions" }) as any as S.Schema<RouteDestinationOptions>;
export interface RouteDriverScheduleInterval {
  DriveDuration: number;
  RestDuration: number;
}
const RouteDriverScheduleInterval = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DriveDuration: S.Number, RestDuration: S.Number }),
).annotate({
  identifier: "RouteDriverScheduleInterval",
}) as any as S.Schema<RouteDriverScheduleInterval>;
export type RouteDriverScheduleIntervalList = RouteDriverScheduleInterval[];
const RouteDriverScheduleIntervalList = /*@__PURE__*/ S.Array(RouteDriverScheduleInterval);
export interface RouteDriverOptions {
  Schedule?: RouteDriverScheduleInterval[];
}
const RouteDriverOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Schedule: S.optional(RouteDriverScheduleIntervalList) }),
).annotate({ identifier: "RouteDriverOptions" }) as any as S.Schema<RouteDriverOptions>;
export interface RouteExclusionOptions {
  Countries: (string | redacted.Redacted<string>)[];
}
const RouteExclusionOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Countries: CountryCodeList }),
).annotate({ identifier: "RouteExclusionOptions" }) as any as S.Schema<RouteExclusionOptions>;
export type MeasurementSystem = "Metric" | "Imperial" | (string & {});
const MeasurementSystem = S.String;

export type LanguageTag = string;
export type LanguageTagList = string[];
const LanguageTagList = /*@__PURE__*/ S.Array(S.String);
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
const RouteLegAdditionalFeatureList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteLegAdditionalFeatureList>;
export interface RouteOriginOptions {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  SideOfStreet?: RouteSideOfStreetOptions;
}
const RouteOriginOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvoidActionsForDistance: S.optional(S.Number),
    AvoidUTurns: S.optional(S.Boolean),
    Heading: S.optional(S.Number),
    Matching: S.optional(RouteMatchingOptions),
    SideOfStreet: S.optional(RouteSideOfStreetOptions),
  }),
).annotate({ identifier: "RouteOriginOptions" }) as any as S.Schema<RouteOriginOptions>;
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
const RouteSpanAdditionalFeatureList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteSpanAdditionalFeatureList>;
export type CurrencyCode = string;
export interface RouteEmissionType {
  Co2EmissionClass?: string | redacted.Redacted<string>;
  Type: string | redacted.Redacted<string>;
}
const RouteEmissionType = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Co2EmissionClass: S.optional(SensitiveString), Type: SensitiveString }),
).annotate({ identifier: "RouteEmissionType" }) as any as S.Schema<RouteEmissionType>;
export type RouteTollVehicleCategory = "Minibus" | (string & {});
const RouteTollVehicleCategory = S.String;

export interface RouteTollOptions {
  AllTransponders?: boolean;
  AllVignettes?: boolean;
  Currency?: string;
  EmissionType?: RouteEmissionType;
  VehicleCategory?: RouteTollVehicleCategory;
}
const RouteTollOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AllTransponders: S.optional(S.Boolean),
    AllVignettes: S.optional(S.Boolean),
    Currency: S.optional(S.String),
    EmissionType: S.optional(RouteEmissionType),
    VehicleCategory: S.optional(RouteTollVehicleCategory),
  }),
).annotate({ identifier: "RouteTollOptions" }) as any as S.Schema<RouteTollOptions>;
export interface RouteTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: TrafficUsage;
}
const RouteTrafficOptions = IsolineTrafficOptions as any as S.Schema<RouteTrafficOptions>;
export type RouteTravelMode =
  | "Car"
  | "Pedestrian"
  | "Scooter"
  | "Truck"
  | "Intermodal"
  | "Transit"
  | (string & {});
const RouteTravelMode = S.String;

export type RouteEngineType = "Electric" | "InternalCombustion" | "PluginHybrid" | (string & {});
const RouteEngineType = S.String;

export interface RouteVehicleLicensePlate {
  LastCharacter?: string | redacted.Redacted<string>;
}
const RouteVehicleLicensePlate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ LastCharacter: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteVehicleLicensePlate" }) as any as S.Schema<RouteVehicleLicensePlate>;
export interface RouteCarOptions {
  EngineType?: RouteEngineType;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
const RouteCarOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EngineType: S.optional(RouteEngineType),
    LicensePlate: S.optional(RouteVehicleLicensePlate),
    MaxSpeed: S.optional(S.Number),
    Occupancy: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteCarOptions" }) as any as S.Schema<RouteCarOptions>;
export interface RoutePedestrianOptions {
  Speed?: number;
}
const RoutePedestrianOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Speed: S.optional(S.Number) }),
).annotate({ identifier: "RoutePedestrianOptions" }) as any as S.Schema<RoutePedestrianOptions>;
export interface RouteScooterOptions {
  EngineType?: RouteEngineType;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
const RouteScooterOptions = RouteCarOptions as any as S.Schema<RouteScooterOptions>;
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
const RouteHazardousCargoTypeList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteHazardousCargoTypeList>;
export interface RouteTrailerOptions {
  AxleCount?: number;
  TrailerCount?: number;
}
const RouteTrailerOptions = IsolineTrailerOptions as any as S.Schema<RouteTrailerOptions>;
export type RouteTruckType = "LightTruck" | "StraightTruck" | "Tractor" | (string & {});
const RouteTruckType = S.String;

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
const RouteTruckOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AxleCount: S.optional(S.Number),
    EngineType: S.optional(RouteEngineType),
    GrossWeight: S.optional(S.Number),
    HazardousCargos: S.optional(RouteHazardousCargoTypeList),
    Height: S.optional(S.Number),
    HeightAboveFirstAxle: S.optional(S.Number),
    KpraLength: S.optional(S.Number),
    Length: S.optional(S.Number),
    LicensePlate: S.optional(RouteVehicleLicensePlate),
    MaxSpeed: S.optional(S.Number),
    Occupancy: S.optional(S.Number),
    PayloadCapacity: S.optional(S.Number),
    TireCount: S.optional(S.Number),
    Trailer: S.optional(RouteTrailerOptions),
    TruckType: S.optional(RouteTruckType),
    TunnelRestrictionCode: S.optional(SensitiveString),
    WeightPerAxle: S.optional(S.Number),
    WeightPerAxleGroup: S.optional(WeightPerAxleGroup),
    Width: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteTruckOptions" }) as any as S.Schema<RouteTruckOptions>;
export type RouteAccessibilityAttribute = "Wheelchair" | (string & {});
export type RouteAccessibilityAttributeList = RouteAccessibilityAttribute[];
const RouteAccessibilityAttributeList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteAccessibilityAttributeList>;
export interface RouteIntermodalPedestrianOptions {
  MaxDistance?: number;
  Speed?: number;
}
const RouteIntermodalPedestrianOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ MaxDistance: S.optional(S.Number), Speed: S.optional(S.Number) }),
).annotate({
  identifier: "RouteIntermodalPedestrianOptions",
}) as any as S.Schema<RouteIntermodalPedestrianOptions>;
export type RouteRentalMode = "All" | "Car" | (string & {});
const RouteRentalMode = S.String;

export type RouteRentalModeList = RouteRentalMode[];
const RouteRentalModeList = IsolineHazardousCargoTypeList as any as S.Schema<RouteRentalModeList>;
export type RouteIntermodalEnabledLegs =
  | "FirstLeg"
  | "LastLeg"
  | "EntireRoute"
  | "None"
  | (string & {});
export type RouteIntermodalEnabledLegsList = RouteIntermodalEnabledLegs[];
const RouteIntermodalEnabledLegsList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteIntermodalEnabledLegsList>;
export interface RouteIntermodalRentalOptions {
  AllowedModes?: RouteRentalMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteRentalMode[];
}
const RouteIntermodalRentalOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AllowedModes: S.optional(RouteRentalModeList),
    EnabledFor: S.optional(RouteIntermodalEnabledLegsList),
    ExcludedModes: S.optional(RouteRentalModeList),
  }),
).annotate({
  identifier: "RouteIntermodalRentalOptions",
}) as any as S.Schema<RouteIntermodalRentalOptions>;
export type RouteTaxiMode = "All" | "Car" | (string & {});
export type RouteTaxiModeList = RouteTaxiMode[];
export interface RouteIntermodalTaxiOptions {
  AllowedModes?: RouteTaxiMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteTaxiMode[];
}
const RouteIntermodalTaxiOptions =
  RouteIntermodalRentalOptions as any as S.Schema<RouteIntermodalTaxiOptions>;
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
const RouteTransitMode = S.String;

export type RouteTransitModeList = RouteTransitMode[];
const RouteTransitModeList = IsolineHazardousCargoTypeList as any as S.Schema<RouteTransitModeList>;
export interface RouteIntermodalTransitOptions {
  AllowedModes?: RouteTransitMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteTransitMode[];
}
const RouteIntermodalTransitOptions =
  RouteIntermodalRentalOptions as any as S.Schema<RouteIntermodalTransitOptions>;
export type RouteVehicleMode = "All" | "Car" | (string & {});
export type RouteVehicleModeList = RouteVehicleMode[];
export interface RouteIntermodalVehicleOptions {
  AllowedModes?: RouteVehicleMode[];
  EnabledFor?: RouteIntermodalEnabledLegs[];
  ExcludedModes?: RouteVehicleMode[];
}
const RouteIntermodalVehicleOptions =
  RouteIntermodalRentalOptions as any as S.Schema<RouteIntermodalVehicleOptions>;
export interface RouteIntermodalOptions {
  AccessibilityAttributes?: RouteAccessibilityAttribute[];
  MaxTransfers?: number;
  Pedestrian?: RouteIntermodalPedestrianOptions;
  Rental?: RouteIntermodalRentalOptions;
  Taxi?: RouteIntermodalTaxiOptions;
  Transit?: RouteIntermodalTransitOptions;
  Vehicle?: RouteIntermodalVehicleOptions;
}
const RouteIntermodalOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccessibilityAttributes: S.optional(RouteAccessibilityAttributeList),
    MaxTransfers: S.optional(S.Number),
    Pedestrian: S.optional(RouteIntermodalPedestrianOptions),
    Rental: S.optional(RouteIntermodalRentalOptions),
    Taxi: S.optional(RouteIntermodalTaxiOptions),
    Transit: S.optional(RouteIntermodalTransitOptions),
    Vehicle: S.optional(RouteIntermodalVehicleOptions),
  }),
).annotate({ identifier: "RouteIntermodalOptions" }) as any as S.Schema<RouteIntermodalOptions>;
export interface RouteTransitPedestrianOptions {
  MaxDistance?: number;
  Speed?: number;
}
const RouteTransitPedestrianOptions =
  RouteIntermodalPedestrianOptions as any as S.Schema<RouteTransitPedestrianOptions>;
export interface RouteTransitOptions {
  AccessibilityAttributes?: RouteAccessibilityAttribute[];
  AllowedModes?: RouteTransitMode[];
  ExcludedModes?: RouteTransitMode[];
  MaxTransfers?: number;
  Pedestrian?: RouteTransitPedestrianOptions;
}
const RouteTransitOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccessibilityAttributes: S.optional(RouteAccessibilityAttributeList),
    AllowedModes: S.optional(RouteTransitModeList),
    ExcludedModes: S.optional(RouteTransitModeList),
    MaxTransfers: S.optional(S.Number),
    Pedestrian: S.optional(RouteTransitPedestrianOptions),
  }),
).annotate({ identifier: "RouteTransitOptions" }) as any as S.Schema<RouteTransitOptions>;
export interface RouteTravelModeOptions {
  Car?: RouteCarOptions;
  Pedestrian?: RoutePedestrianOptions;
  Scooter?: RouteScooterOptions;
  Truck?: RouteTruckOptions;
  Intermodal?: RouteIntermodalOptions;
  Transit?: RouteTransitOptions;
}
const RouteTravelModeOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Car: S.optional(RouteCarOptions),
    Pedestrian: S.optional(RoutePedestrianOptions),
    Scooter: S.optional(RouteScooterOptions),
    Truck: S.optional(RouteTruckOptions),
    Intermodal: S.optional(RouteIntermodalOptions),
    Transit: S.optional(RouteTransitOptions),
  }),
).annotate({ identifier: "RouteTravelModeOptions" }) as any as S.Schema<RouteTravelModeOptions>;
export type RouteTravelStepType = "Default" | "TurnByTurn" | (string & {});
const RouteTravelStepType = S.String;

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
const RouteWaypoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvoidActionsForDistance: S.optional(S.Number),
    AvoidUTurns: S.optional(S.Boolean),
    Heading: S.optional(S.Number),
    Matching: S.optional(RouteMatchingOptions),
    PassThrough: S.optional(S.Boolean),
    Position: Position,
    SideOfStreet: S.optional(RouteSideOfStreetOptions),
    StopDuration: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteWaypoint" }) as any as S.Schema<RouteWaypoint>;
export type RouteWaypointList = RouteWaypoint[];
const RouteWaypointList = /*@__PURE__*/ S.Array(RouteWaypoint);
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
const CalculateRoutesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Allow: S.optional(RouteAllowOptions),
    ArrivalTime: S.optional(SensitiveString),
    Avoid: S.optional(RouteAvoidanceOptions),
    DepartNow: S.optional(S.Boolean),
    DepartureTime: S.optional(SensitiveString),
    Destination: Position,
    DestinationOptions: S.optional(RouteDestinationOptions),
    Driver: S.optional(RouteDriverOptions),
    Exclude: S.optional(RouteExclusionOptions),
    InstructionsMeasurementSystem: S.optional(MeasurementSystem),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    Languages: S.optional(LanguageTagList),
    LegAdditionalFeatures: S.optional(RouteLegAdditionalFeatureList),
    LegGeometryFormat: S.optional(GeometryFormat),
    MaxAlternatives: S.optional(S.Number),
    OptimizeRoutingFor: S.optional(RoutingObjective),
    Origin: Position,
    OriginOptions: S.optional(RouteOriginOptions),
    SpanAdditionalFeatures: S.optional(RouteSpanAdditionalFeatureList),
    Tolls: S.optional(RouteTollOptions),
    Traffic: S.optional(RouteTrafficOptions),
    TravelMode: S.optional(RouteTravelMode),
    TravelModeOptions: S.optional(RouteTravelModeOptions),
    TravelStepType: S.optional(RouteTravelStepType),
    Waypoints: S.optional(RouteWaypointList),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/routes" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CalculateRoutesRequest" }) as any as S.Schema<CalculateRoutesRequest>;
export type RouteResponseNoticeCode =
  | "MainLanguageNotFound"
  | "Other"
  | "TravelTimeExceedsDriverWorkHours"
  | "TransitDataUnavailable"
  | "TransitRouteUnavailable"
  | "NoTransitStationsFound"
  | (string & {});
const RouteResponseNoticeCode = S.String;

export type RouteNoticeImpact = "High" | "Low" | (string & {});
const RouteNoticeImpact = S.String;

export interface RouteResponseNotice {
  Code: RouteResponseNoticeCode;
  Impact?: RouteNoticeImpact;
}
const RouteResponseNotice = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Code: RouteResponseNoticeCode, Impact: S.optional(RouteNoticeImpact) }),
).annotate({ identifier: "RouteResponseNotice" }) as any as S.Schema<RouteResponseNotice>;
export type RouteResponseNoticeList = RouteResponseNotice[];
const RouteResponseNoticeList = /*@__PURE__*/ S.Array(RouteResponseNotice);
export type RouteFerryAfterTravelStepType = "Deboard" | (string & {});
const RouteFerryAfterTravelStepType = S.String;

export interface RouteFerryAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteFerryAfterTravelStepType;
}
const RouteFerryAfterTravelStep = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Duration: S.Number,
    Instruction: S.optional(SensitiveString),
    Type: RouteFerryAfterTravelStepType,
  }),
).annotate({
  identifier: "RouteFerryAfterTravelStep",
}) as any as S.Schema<RouteFerryAfterTravelStep>;
export type RouteFerryAfterTravelStepList = RouteFerryAfterTravelStep[];
const RouteFerryAfterTravelStepList = /*@__PURE__*/ S.Array(RouteFerryAfterTravelStep);
export type Position23 = number[];
const Position23 = BoundingBox as any as S.Schema<Position23>;
export interface RouteFerryPlace {
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  WaypointIndex?: number;
}
const RouteFerryPlace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Name: S.optional(SensitiveString),
    OriginalPosition: S.optional(Position23),
    Position: Position23,
    WaypointIndex: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteFerryPlace" }) as any as S.Schema<RouteFerryPlace>;
export interface RouteFerryArrival {
  Place: RouteFerryPlace;
  Time?: string | redacted.Redacted<string>;
}
const RouteFerryArrival = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Place: RouteFerryPlace, Time: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteFerryArrival" }) as any as S.Schema<RouteFerryArrival>;
export type RouteFerryBeforeTravelStepType = "Board" | (string & {});
export interface RouteFerryBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteFerryBeforeTravelStepType;
}
export type RouteFerryBeforeTravelStepList = RouteFerryBeforeTravelStep[];
const RouteFerryBeforeTravelStepList =
  RouteFerryAfterTravelStepList as any as S.Schema<RouteFerryBeforeTravelStepList>;
export interface RouteFerryDeparture {
  Place: RouteFerryPlace;
  Time?: string | redacted.Redacted<string>;
}
const RouteFerryDeparture = RouteFerryArrival as any as S.Schema<RouteFerryDeparture>;
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
const RouteFerryNoticeList = RouteResponseNoticeList as any as S.Schema<RouteFerryNoticeList>;
export interface RoutePassThroughPlace {
  OriginalPosition?: number[];
  Position: number[];
  WaypointIndex?: number;
}
const RoutePassThroughPlace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    OriginalPosition: S.optional(Position23),
    Position: Position23,
    WaypointIndex: S.optional(S.Number),
  }),
).annotate({ identifier: "RoutePassThroughPlace" }) as any as S.Schema<RoutePassThroughPlace>;
export interface RoutePassThroughWaypoint {
  GeometryOffset?: number;
  Place: RoutePassThroughPlace;
}
const RoutePassThroughWaypoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GeometryOffset: S.optional(S.Number), Place: RoutePassThroughPlace }),
).annotate({ identifier: "RoutePassThroughWaypoint" }) as any as S.Schema<RoutePassThroughWaypoint>;
export type RoutePassThroughWaypointList = RoutePassThroughWaypoint[];
const RoutePassThroughWaypointList = /*@__PURE__*/ S.Array(RoutePassThroughWaypoint);
export type CountryCode3 = string | redacted.Redacted<string>;
export interface LocalizedString {
  Language?: string;
  Value: string | redacted.Redacted<string>;
}
const LocalizedString = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Language: S.optional(S.String), Value: SensitiveString }),
).annotate({ identifier: "LocalizedString" }) as any as S.Schema<LocalizedString>;
export type LocalizedStringList = LocalizedString[];
const LocalizedStringList = /*@__PURE__*/ S.Array(LocalizedString);
export interface RouteFerrySpan {
  Country?: string | redacted.Redacted<string>;
  Distance?: number;
  Duration?: number;
  GeometryOffset?: number;
  Names?: LocalizedString[];
  Region?: string | redacted.Redacted<string>;
}
const RouteFerrySpan = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Country: S.optional(SensitiveString),
    Distance: S.optional(S.Number),
    Duration: S.optional(S.Number),
    GeometryOffset: S.optional(S.Number),
    Names: S.optional(LocalizedStringList),
    Region: S.optional(SensitiveString),
  }),
).annotate({ identifier: "RouteFerrySpan" }) as any as S.Schema<RouteFerrySpan>;
export type RouteFerrySpanList = RouteFerrySpan[];
const RouteFerrySpanList = /*@__PURE__*/ S.Array(RouteFerrySpan);
export interface RouteFerryOverviewSummary {
  Distance: number;
  Duration: number;
}
const RouteFerryOverviewSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Distance: S.Number, Duration: S.Number }),
).annotate({
  identifier: "RouteFerryOverviewSummary",
}) as any as S.Schema<RouteFerryOverviewSummary>;
export interface RouteFerryTravelOnlySummary {
  Duration: number;
}
const RouteFerryTravelOnlySummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Duration: S.Number }),
).annotate({
  identifier: "RouteFerryTravelOnlySummary",
}) as any as S.Schema<RouteFerryTravelOnlySummary>;
export interface RouteFerrySummary {
  Overview?: RouteFerryOverviewSummary;
  TravelOnly?: RouteFerryTravelOnlySummary;
}
const RouteFerrySummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Overview: S.optional(RouteFerryOverviewSummary),
    TravelOnly: S.optional(RouteFerryTravelOnlySummary),
  }),
).annotate({ identifier: "RouteFerrySummary" }) as any as S.Schema<RouteFerrySummary>;
export type RouteFerryTravelStepType = "Depart" | "Continue" | "Arrive" | (string & {});
const RouteFerryTravelStepType = S.String;

export interface RouteFerryTravelStep {
  Distance?: number;
  Duration: number;
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteFerryTravelStepType;
}
const RouteFerryTravelStep = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Distance: S.optional(S.Number),
    Duration: S.Number,
    GeometryOffset: S.optional(S.Number),
    Instruction: S.optional(SensitiveString),
    Type: RouteFerryTravelStepType,
  }),
).annotate({ identifier: "RouteFerryTravelStep" }) as any as S.Schema<RouteFerryTravelStep>;
export type RouteFerryTravelStepList = RouteFerryTravelStep[];
const RouteFerryTravelStepList = /*@__PURE__*/ S.Array(RouteFerryTravelStep);
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
const RouteFerryLegDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AfterTravelSteps: S.optional(RouteFerryAfterTravelStepList),
    Arrival: RouteFerryArrival,
    BeforeTravelSteps: S.optional(RouteFerryBeforeTravelStepList),
    Departure: RouteFerryDeparture,
    Notices: S.optional(RouteFerryNoticeList),
    PassThroughWaypoints: S.optional(RoutePassThroughWaypointList),
    RouteName: S.optional(SensitiveString),
    Spans: S.optional(RouteFerrySpanList),
    Summary: S.optional(RouteFerrySummary),
    TravelSteps: S.optional(RouteFerryTravelStepList),
  }),
).annotate({ identifier: "RouteFerryLegDetails" }) as any as S.Schema<RouteFerryLegDetails>;
export interface RouteLegGeometry {
  LineString?: number[][];
  Polyline?: string | redacted.Redacted<string>;
}
const RouteLegGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ LineString: S.optional(LineString), Polyline: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteLegGeometry" }) as any as S.Schema<RouteLegGeometry>;
export type RoutePedestrianAfterTravelStepType = "Wait" | (string & {});
export interface RoutePedestrianAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RoutePedestrianAfterTravelStepType;
}
const RoutePedestrianAfterTravelStep =
  RouteFerryAfterTravelStep as any as S.Schema<RoutePedestrianAfterTravelStep>;
export type RoutePedestrianAfterTravelStepList = RoutePedestrianAfterTravelStep[];
const RoutePedestrianAfterTravelStepList = /*@__PURE__*/ S.Array(RoutePedestrianAfterTravelStep);
export type RouteAccessibilityAvailability =
  | "Available"
  | "Limited"
  | "Unavailable"
  | "Unknown"
  | (string & {});
const RouteAccessibilityAvailability = S.String;

export interface RouteAccessibilityAvailabilityDetails {
  Wheelchair?: RouteAccessibilityAvailability;
}
const RouteAccessibilityAvailabilityDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Wheelchair: S.optional(RouteAccessibilityAvailability) }),
).annotate({
  identifier: "RouteAccessibilityAvailabilityDetails",
}) as any as S.Schema<RouteAccessibilityAvailabilityDetails>;
export interface RouteAccessPointDetails {
  Accessibility?: RouteAccessibilityAvailabilityDetails;
}
const RouteAccessPointDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Accessibility: S.optional(RouteAccessibilityAvailabilityDetails) }),
).annotate({ identifier: "RouteAccessPointDetails" }) as any as S.Schema<RouteAccessPointDetails>;
export type RouteSideOfStreet = "Left" | "Right" | (string & {});
const RouteSideOfStreet = S.String;

export interface RouteStationDetails {
  Accessibility?: RouteAccessibilityAvailabilityDetails;
  PlatformName?: string | redacted.Redacted<string>;
  ShortName?: string | redacted.Redacted<string>;
}
const RouteStationDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Accessibility: S.optional(RouteAccessibilityAvailabilityDetails),
    PlatformName: S.optional(SensitiveString),
    ShortName: S.optional(SensitiveString),
  }),
).annotate({ identifier: "RouteStationDetails" }) as any as S.Schema<RouteStationDetails>;
export type RoutePedestrianPlaceType =
  | "AccessPoint"
  | "DockingStation"
  | "ParkingLot"
  | "Station"
  | (string & {});
const RoutePedestrianPlaceType = S.String;

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
const RoutePedestrianPlace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccessPointDetails: S.optional(RouteAccessPointDetails),
    Name: S.optional(SensitiveString),
    OriginalPosition: S.optional(Position23),
    Position: Position23,
    SideOfStreet: S.optional(RouteSideOfStreet),
    StationDetails: S.optional(RouteStationDetails),
    Type: S.optional(RoutePedestrianPlaceType),
    WaypointIndex: S.optional(S.Number),
  }),
).annotate({ identifier: "RoutePedestrianPlace" }) as any as S.Schema<RoutePedestrianPlace>;
export interface RoutePedestrianArrival {
  Place: RoutePedestrianPlace;
  Time?: string | redacted.Redacted<string>;
}
const RoutePedestrianArrival = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Place: RoutePedestrianPlace, Time: S.optional(SensitiveString) }),
).annotate({ identifier: "RoutePedestrianArrival" }) as any as S.Schema<RoutePedestrianArrival>;
export interface RoutePedestrianDeparture {
  Place: RoutePedestrianPlace;
  Time?: string | redacted.Redacted<string>;
}
const RoutePedestrianDeparture =
  RoutePedestrianArrival as any as S.Schema<RoutePedestrianDeparture>;
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
const RoutePedestrianNoticeList =
  RouteResponseNoticeList as any as S.Schema<RoutePedestrianNoticeList>;
export interface RouteSpanDynamicSpeedDetails {
  BestCaseSpeed?: number;
  TurnDuration?: number;
  TypicalSpeed?: number;
}
const RouteSpanDynamicSpeedDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BestCaseSpeed: S.optional(S.Number),
    TurnDuration: S.optional(S.Number),
    TypicalSpeed: S.optional(S.Number),
  }),
).annotate({
  identifier: "RouteSpanDynamicSpeedDetails",
}) as any as S.Schema<RouteSpanDynamicSpeedDetails>;
export type IndexList = number[];
const IndexList = BoundingBox as any as S.Schema<IndexList>;
export type RouteSpanPedestrianAccessAttribute =
  | "Allowed"
  | "Indoors"
  | "NoThroughTraffic"
  | "Park"
  | "Stairs"
  | "TollRoad"
  | (string & {});
export type RouteSpanPedestrianAccessAttributeList = RouteSpanPedestrianAccessAttribute[];
const RouteSpanPedestrianAccessAttributeList =
  RouteMatrixHazardousCargoTypeList as any as S.Schema<RouteSpanPedestrianAccessAttributeList>;
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
const RouteSpanRoadAttributeList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteSpanRoadAttributeList>;
export type RouteDirection = "East" | "North" | "South" | "West" | (string & {});
const RouteDirection = S.String;

export interface RouteNumber {
  Direction?: RouteDirection;
  Language?: string;
  Value: string | redacted.Redacted<string>;
}
const RouteNumber = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Direction: S.optional(RouteDirection),
    Language: S.optional(S.String),
    Value: SensitiveString,
  }),
).annotate({ identifier: "RouteNumber" }) as any as S.Schema<RouteNumber>;
export type RouteNumberList = RouteNumber[];
const RouteNumberList = /*@__PURE__*/ S.Array(RouteNumber);
export interface RouteSpanSpeedLimitDetails {
  MaxSpeed?: number;
  Unlimited?: boolean;
}
const RouteSpanSpeedLimitDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ MaxSpeed: S.optional(S.Number), Unlimited: S.optional(S.Boolean) }),
).annotate({
  identifier: "RouteSpanSpeedLimitDetails",
}) as any as S.Schema<RouteSpanSpeedLimitDetails>;
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
const RoutePedestrianSpan = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BestCaseDuration: S.optional(S.Number),
    Country: S.optional(SensitiveString),
    Distance: S.optional(S.Number),
    Duration: S.optional(S.Number),
    DynamicSpeed: S.optional(RouteSpanDynamicSpeedDetails),
    FunctionalClassification: S.optional(S.Number),
    GeometryOffset: S.optional(S.Number),
    Incidents: S.optional(IndexList),
    Names: S.optional(LocalizedStringList),
    PedestrianAccess: S.optional(RouteSpanPedestrianAccessAttributeList),
    Region: S.optional(SensitiveString),
    RoadAttributes: S.optional(RouteSpanRoadAttributeList),
    RouteNumbers: S.optional(RouteNumberList),
    SpeedLimit: S.optional(RouteSpanSpeedLimitDetails),
    TypicalDuration: S.optional(S.Number),
  }),
).annotate({ identifier: "RoutePedestrianSpan" }) as any as S.Schema<RoutePedestrianSpan>;
export type RoutePedestrianSpanList = RoutePedestrianSpan[];
const RoutePedestrianSpanList = /*@__PURE__*/ S.Array(RoutePedestrianSpan);
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
const RoutePedestrianSummary = RouteFerrySummary as any as S.Schema<RoutePedestrianSummary>;
export interface RouteContinueStepDetails {
  Intersection: LocalizedString[];
}
const RouteContinueStepDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Intersection: LocalizedStringList }),
).annotate({ identifier: "RouteContinueStepDetails" }) as any as S.Schema<RouteContinueStepDetails>;
export type RouteRoadType = "Highway" | "Rural" | "Urban" | (string & {});
const RouteRoadType = S.String;

export interface RouteRoad {
  RoadName: LocalizedString[];
  RouteNumber: RouteNumber[];
  Towards: LocalizedString[];
  Type?: RouteRoadType;
}
const RouteRoad = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoadName: LocalizedStringList,
    RouteNumber: RouteNumberList,
    Towards: LocalizedStringList,
    Type: S.optional(RouteRoadType),
  }),
).annotate({ identifier: "RouteRoad" }) as any as S.Schema<RouteRoad>;
export type RouteSteeringDirection = "Left" | "Right" | "Straight" | (string & {});
const RouteSteeringDirection = S.String;

export type TurnAngle = number;
export type RouteTurnIntensity = "Sharp" | "Slight" | "Typical" | (string & {});
const RouteTurnIntensity = S.String;

export interface RouteKeepStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteKeepStepDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Intersection: LocalizedStringList,
    SteeringDirection: S.optional(RouteSteeringDirection),
    TurnAngle: S.optional(S.Number),
    TurnIntensity: S.optional(RouteTurnIntensity),
  }),
).annotate({ identifier: "RouteKeepStepDetails" }) as any as S.Schema<RouteKeepStepDetails>;
export interface RouteRoundaboutEnterStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteRoundaboutEnterStepDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Intersection: LocalizedStringList,
    SteeringDirection: S.optional(RouteSteeringDirection),
    TurnAngle: S.optional(S.Number),
    TurnIntensity: S.optional(RouteTurnIntensity),
  }),
).annotate({
  identifier: "RouteRoundaboutEnterStepDetails",
}) as any as S.Schema<RouteRoundaboutEnterStepDetails>;
export type RoundaboutAngle = number;
export interface RouteRoundaboutExitStepDetails {
  Intersection: LocalizedString[];
  RelativeExit?: number;
  RoundaboutAngle?: number;
  SteeringDirection?: RouteSteeringDirection;
}
const RouteRoundaboutExitStepDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Intersection: LocalizedStringList,
    RelativeExit: S.optional(S.Number),
    RoundaboutAngle: S.optional(S.Number),
    SteeringDirection: S.optional(RouteSteeringDirection),
  }),
).annotate({
  identifier: "RouteRoundaboutExitStepDetails",
}) as any as S.Schema<RouteRoundaboutExitStepDetails>;
export interface RouteRoundaboutPassStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteRoundaboutPassStepDetails =
  RouteRoundaboutEnterStepDetails as any as S.Schema<RouteRoundaboutPassStepDetails>;
export interface RouteSignpostLabel {
  RouteNumber?: RouteNumber;
  Text?: LocalizedString;
}
const RouteSignpostLabel = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RouteNumber: S.optional(RouteNumber), Text: S.optional(LocalizedString) }),
).annotate({ identifier: "RouteSignpostLabel" }) as any as S.Schema<RouteSignpostLabel>;
export type RouteSignpostLabelList = RouteSignpostLabel[];
const RouteSignpostLabelList = /*@__PURE__*/ S.Array(RouteSignpostLabel);
export interface RouteSignpost {
  Labels: RouteSignpostLabel[];
}
const RouteSignpost = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Labels: RouteSignpostLabelList }),
).annotate({ identifier: "RouteSignpost" }) as any as S.Schema<RouteSignpost>;
export interface RouteTurnStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteTurnStepDetails = RouteKeepStepDetails as any as S.Schema<RouteTurnStepDetails>;
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
const RoutePedestrianTravelStepType = S.String;

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
const RoutePedestrianTravelStep = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ContinueStepDetails: S.optional(RouteContinueStepDetails),
    CurrentRoad: S.optional(RouteRoad),
    Distance: S.optional(S.Number),
    Duration: S.Number,
    ExitNumber: S.optional(LocalizedStringList),
    GeometryOffset: S.optional(S.Number),
    Instruction: S.optional(SensitiveString),
    KeepStepDetails: S.optional(RouteKeepStepDetails),
    NextRoad: S.optional(RouteRoad),
    RoundaboutEnterStepDetails: S.optional(RouteRoundaboutEnterStepDetails),
    RoundaboutExitStepDetails: S.optional(RouteRoundaboutExitStepDetails),
    RoundaboutPassStepDetails: S.optional(RouteRoundaboutPassStepDetails),
    Signpost: S.optional(RouteSignpost),
    TurnStepDetails: S.optional(RouteTurnStepDetails),
    Type: RoutePedestrianTravelStepType,
  }),
).annotate({
  identifier: "RoutePedestrianTravelStep",
}) as any as S.Schema<RoutePedestrianTravelStep>;
export type RoutePedestrianTravelStepList = RoutePedestrianTravelStep[];
const RoutePedestrianTravelStepList = /*@__PURE__*/ S.Array(RoutePedestrianTravelStep);
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
const RoutePedestrianLegDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AfterTravelSteps: S.optional(RoutePedestrianAfterTravelStepList),
    Arrival: RoutePedestrianArrival,
    Departure: RoutePedestrianDeparture,
    Notices: S.optional(RoutePedestrianNoticeList),
    PassThroughWaypoints: S.optional(RoutePassThroughWaypointList),
    Spans: S.optional(RoutePedestrianSpanList),
    Summary: S.optional(RoutePedestrianSummary),
    TravelSteps: S.optional(RoutePedestrianTravelStepList),
  }),
).annotate({
  identifier: "RoutePedestrianLegDetails",
}) as any as S.Schema<RoutePedestrianLegDetails>;
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
const RouteLegTravelMode = S.String;

export type RouteLegType =
  | "Ferry"
  | "Pedestrian"
  | "Vehicle"
  | "Rental"
  | "Taxi"
  | "Transit"
  | (string & {});
const RouteLegType = S.String;

export type EnergyKilowattHours = number;
export type PowerKilowatts = number;
export interface RouteChargeStepDetails {
  ArrivalCharge?: number;
  ConsumablePower?: number;
  DesiredCharge?: number;
}
const RouteChargeStepDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ArrivalCharge: S.optional(S.Number),
    ConsumablePower: S.optional(S.Number),
    DesiredCharge: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteChargeStepDetails" }) as any as S.Schema<RouteChargeStepDetails>;
export type RouteVehicleAfterTravelStepType = "Park" | (string & {});
const RouteVehicleAfterTravelStepType = S.String;

export interface RouteVehicleAfterTravelStep {
  ChargeStepDetails?: RouteChargeStepDetails;
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteVehicleAfterTravelStepType;
}
const RouteVehicleAfterTravelStep = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ChargeStepDetails: S.optional(RouteChargeStepDetails),
    Duration: S.Number,
    Instruction: S.optional(SensitiveString),
    Type: RouteVehicleAfterTravelStepType,
  }),
).annotate({
  identifier: "RouteVehicleAfterTravelStep",
}) as any as S.Schema<RouteVehicleAfterTravelStep>;
export type RouteVehicleAfterTravelStepList = RouteVehicleAfterTravelStep[];
const RouteVehicleAfterTravelStepList = /*@__PURE__*/ S.Array(RouteVehicleAfterTravelStep);
export type RouteVehiclePlaceType =
  | "AccessPoint"
  | "DockingStation"
  | "ParkingLot"
  | "Station"
  | (string & {});
const RouteVehiclePlaceType = S.String;

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
const RouteVehiclePlace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Name: S.optional(SensitiveString),
    OriginalPosition: S.optional(Position23),
    Position: Position23,
    SideOfStreet: S.optional(RouteSideOfStreet),
    WaypointIndex: S.optional(S.Number),
    AccessPointDetails: S.optional(RouteAccessPointDetails),
    StationDetails: S.optional(RouteStationDetails),
    Type: S.optional(RouteVehiclePlaceType),
  }),
).annotate({ identifier: "RouteVehiclePlace" }) as any as S.Schema<RouteVehiclePlace>;
export interface RouteVehicleArrival {
  Place: RouteVehiclePlace;
  Time?: string | redacted.Redacted<string>;
}
const RouteVehicleArrival = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Place: RouteVehiclePlace, Time: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteVehicleArrival" }) as any as S.Schema<RouteVehicleArrival>;
export interface RouteVehicleDeparture {
  Place: RouteVehiclePlace;
  Time?: string | redacted.Redacted<string>;
}
const RouteVehicleDeparture = RouteVehicleArrival as any as S.Schema<RouteVehicleDeparture>;
export type RouteVehicleIncidentSeverity = "Critical" | "High" | "Medium" | "Low" | (string & {});
const RouteVehicleIncidentSeverity = S.String;

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
const RouteVehicleIncidentType = S.String;

export interface RouteVehicleIncident {
  Description?: string | redacted.Redacted<string>;
  EndTime?: string | redacted.Redacted<string>;
  Severity?: RouteVehicleIncidentSeverity;
  StartTime?: string | redacted.Redacted<string>;
  Type?: RouteVehicleIncidentType;
}
const RouteVehicleIncident = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Description: S.optional(SensitiveString),
    EndTime: S.optional(SensitiveString),
    Severity: S.optional(RouteVehicleIncidentSeverity),
    StartTime: S.optional(SensitiveString),
    Type: S.optional(RouteVehicleIncidentType),
  }),
).annotate({ identifier: "RouteVehicleIncident" }) as any as S.Schema<RouteVehicleIncident>;
export type RouteVehicleIncidentList = RouteVehicleIncident[];
const RouteVehicleIncidentList = /*@__PURE__*/ S.Array(RouteVehicleIncident);
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
const RouteVehicleNoticeCode = S.String;

export interface RouteNoticeDetailRange {
  Min?: number;
  Max?: number;
}
const RouteNoticeDetailRange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Min: S.optional(S.Number), Max: S.optional(S.Number) }),
).annotate({ identifier: "RouteNoticeDetailRange" }) as any as S.Schema<RouteNoticeDetailRange>;
export type RouteWeightConstraintType = "Current" | "Gross" | "Unknown" | (string & {});
const RouteWeightConstraintType = S.String;

export interface RouteWeightConstraint {
  Type: RouteWeightConstraintType;
  Value: number;
}
const RouteWeightConstraint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Type: RouteWeightConstraintType, Value: S.Number }),
).annotate({ identifier: "RouteWeightConstraint" }) as any as S.Schema<RouteWeightConstraint>;
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
const RouteViolatedConstraints = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AllHazardsRestricted: S.optional(S.Boolean),
    AxleCount: S.optional(RouteNoticeDetailRange),
    HazardousCargos: RouteHazardousCargoTypeList,
    MaxHeight: S.optional(S.Number),
    MaxKpraLength: S.optional(S.Number),
    MaxLength: S.optional(S.Number),
    MaxPayloadCapacity: S.optional(S.Number),
    MaxWeight: S.optional(RouteWeightConstraint),
    MaxWeightPerAxle: S.optional(S.Number),
    MaxWeightPerAxleGroup: S.optional(WeightPerAxleGroup),
    MaxWidth: S.optional(S.Number),
    Occupancy: S.optional(RouteNoticeDetailRange),
    RestrictedTimes: S.optional(S.String),
    TimeDependent: S.optional(S.Boolean),
    TrailerCount: S.optional(RouteNoticeDetailRange),
    TravelMode: S.optional(S.Boolean),
    TruckRoadType: S.optional(S.String),
    TruckType: S.optional(RouteTruckType),
    TunnelRestrictionCode: S.optional(SensitiveString),
  }),
).annotate({ identifier: "RouteViolatedConstraints" }) as any as S.Schema<RouteViolatedConstraints>;
export interface RouteVehicleNoticeDetail {
  Title?: string | redacted.Redacted<string>;
  ViolatedConstraints?: RouteViolatedConstraints;
}
const RouteVehicleNoticeDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Title: S.optional(SensitiveString),
    ViolatedConstraints: S.optional(RouteViolatedConstraints),
  }),
).annotate({ identifier: "RouteVehicleNoticeDetail" }) as any as S.Schema<RouteVehicleNoticeDetail>;
export type RouteVehicleNoticeDetailList = RouteVehicleNoticeDetail[];
const RouteVehicleNoticeDetailList = /*@__PURE__*/ S.Array(RouteVehicleNoticeDetail);
export interface RouteVehicleNotice {
  Code: RouteVehicleNoticeCode;
  Details: RouteVehicleNoticeDetail[];
  Impact?: RouteNoticeImpact;
}
const RouteVehicleNotice = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Code: RouteVehicleNoticeCode,
    Details: RouteVehicleNoticeDetailList,
    Impact: S.optional(RouteNoticeImpact),
  }),
).annotate({ identifier: "RouteVehicleNotice" }) as any as S.Schema<RouteVehicleNotice>;
export type RouteVehicleNoticeList = RouteVehicleNotice[];
const RouteVehicleNoticeList = /*@__PURE__*/ S.Array(RouteVehicleNotice);
export type RouteSpanCarAccessAttribute =
  | "Allowed"
  | "NoThroughTraffic"
  | "TollRoad"
  | (string & {});
export type RouteSpanCarAccessAttributeList = RouteSpanCarAccessAttribute[];
const RouteSpanCarAccessAttributeList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteSpanCarAccessAttributeList>;
export type RouteSpanGateAttribute =
  | "Emergency"
  | "KeyAccess"
  | "PermissionRequired"
  | (string & {});
const RouteSpanGateAttribute = S.String;

export type RouteSpanRailwayCrossingAttribute = "Protected" | "Unprotected" | (string & {});
const RouteSpanRailwayCrossingAttribute = S.String;

export type RouteSpanScooterAccessAttribute =
  | "Allowed"
  | "NoThroughTraffic"
  | "TollRoad"
  | (string & {});
export type RouteSpanScooterAccessAttributeList = RouteSpanScooterAccessAttribute[];
const RouteSpanScooterAccessAttributeList =
  RouteMatrixHazardousCargoTypeList as any as S.Schema<RouteSpanScooterAccessAttributeList>;
export type RouteSpanTruckAccessAttribute =
  | "Allowed"
  | "NoThroughTraffic"
  | "TollRoad"
  | (string & {});
export type RouteSpanTruckAccessAttributeList = RouteSpanTruckAccessAttribute[];
const RouteSpanTruckAccessAttributeList =
  RouteMatrixHazardousCargoTypeList as any as S.Schema<RouteSpanTruckAccessAttributeList>;
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
const RouteVehicleSpan = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BestCaseDuration: S.optional(S.Number),
    CarAccess: S.optional(RouteSpanCarAccessAttributeList),
    Country: S.optional(SensitiveString),
    Distance: S.optional(S.Number),
    Duration: S.optional(S.Number),
    DynamicSpeed: S.optional(RouteSpanDynamicSpeedDetails),
    FunctionalClassification: S.optional(S.Number),
    Gate: S.optional(RouteSpanGateAttribute),
    GeometryOffset: S.optional(S.Number),
    Incidents: S.optional(IndexList),
    Names: S.optional(LocalizedStringList),
    Notices: S.optional(IndexList),
    RailwayCrossing: S.optional(RouteSpanRailwayCrossingAttribute),
    Region: S.optional(SensitiveString),
    RoadAttributes: S.optional(RouteSpanRoadAttributeList),
    RouteNumbers: S.optional(RouteNumberList),
    ScooterAccess: S.optional(RouteSpanScooterAccessAttributeList),
    SpeedLimit: S.optional(RouteSpanSpeedLimitDetails),
    TollSystems: S.optional(IndexList),
    TruckAccess: S.optional(RouteSpanTruckAccessAttributeList),
    TruckRoadTypes: S.optional(IndexList),
    TypicalDuration: S.optional(S.Number),
    Zones: S.optional(IndexList),
  }),
).annotate({ identifier: "RouteVehicleSpan" }) as any as S.Schema<RouteVehicleSpan>;
export type RouteVehicleSpanList = RouteVehicleSpan[];
const RouteVehicleSpanList = /*@__PURE__*/ S.Array(RouteVehicleSpan);
export interface RouteVehicleOverviewSummary {
  BestCaseDuration?: number;
  Distance: number;
  Duration: number;
  TypicalDuration?: number;
}
const RouteVehicleOverviewSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BestCaseDuration: S.optional(S.Number),
    Distance: S.Number,
    Duration: S.Number,
    TypicalDuration: S.optional(S.Number),
  }),
).annotate({
  identifier: "RouteVehicleOverviewSummary",
}) as any as S.Schema<RouteVehicleOverviewSummary>;
export interface RouteVehicleTravelOnlySummary {
  BestCaseDuration?: number;
  Duration: number;
  TypicalDuration?: number;
}
const RouteVehicleTravelOnlySummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BestCaseDuration: S.optional(S.Number),
    Duration: S.Number,
    TypicalDuration: S.optional(S.Number),
  }),
).annotate({
  identifier: "RouteVehicleTravelOnlySummary",
}) as any as S.Schema<RouteVehicleTravelOnlySummary>;
export interface RouteVehicleSummary {
  Overview?: RouteVehicleOverviewSummary;
  TravelOnly?: RouteVehicleTravelOnlySummary;
}
const RouteVehicleSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Overview: S.optional(RouteVehicleOverviewSummary),
    TravelOnly: S.optional(RouteVehicleTravelOnlySummary),
  }),
).annotate({ identifier: "RouteVehicleSummary" }) as any as S.Schema<RouteVehicleSummary>;
export interface RouteTollPaymentSite {
  Name?: string;
  Position: number[];
}
const RouteTollPaymentSite = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Name: S.optional(S.String), Position: Position23 }),
).annotate({ identifier: "RouteTollPaymentSite" }) as any as S.Schema<RouteTollPaymentSite>;
export type RouteTollPaymentSiteList = RouteTollPaymentSite[];
const RouteTollPaymentSiteList = /*@__PURE__*/ S.Array(RouteTollPaymentSite);
export interface RouteTollPriceValueRange {
  Min: number;
  Max: number;
}
const RouteTollPriceValueRange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Min: S.Number, Max: S.Number }),
).annotate({ identifier: "RouteTollPriceValueRange" }) as any as S.Schema<RouteTollPriceValueRange>;
export interface RouteTollPrice {
  Currency: string;
  Estimate: boolean;
  PerDuration?: number;
  Range: boolean;
  RangeValue?: RouteTollPriceValueRange;
  Value: number;
}
const RouteTollPrice = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Currency: S.String,
    Estimate: S.Boolean,
    PerDuration: S.optional(S.Number),
    Range: S.Boolean,
    RangeValue: S.optional(RouteTollPriceValueRange),
    Value: S.Number,
  }),
).annotate({ identifier: "RouteTollPrice" }) as any as S.Schema<RouteTollPrice>;
export type RouteTollPassValidityPeriodType =
  | "Annual"
  | "Days"
  | "ExtendedAnnual"
  | "Minutes"
  | "Months"
  | (string & {});
const RouteTollPassValidityPeriodType = S.String;

export interface RouteTollPassValidityPeriod {
  Period: RouteTollPassValidityPeriodType;
  PeriodCount?: number;
}
const RouteTollPassValidityPeriod = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Period: RouteTollPassValidityPeriodType, PeriodCount: S.optional(S.Number) }),
).annotate({
  identifier: "RouteTollPassValidityPeriod",
}) as any as S.Schema<RouteTollPassValidityPeriod>;
export interface RouteTollPass {
  IncludesReturnTrip?: boolean;
  SeniorPass?: boolean;
  TransferCount?: number;
  TripCount?: number;
  ValidityPeriod?: RouteTollPassValidityPeriod;
}
const RouteTollPass = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    IncludesReturnTrip: S.optional(S.Boolean),
    SeniorPass: S.optional(S.Boolean),
    TransferCount: S.optional(S.Number),
    TripCount: S.optional(S.Number),
    ValidityPeriod: S.optional(RouteTollPassValidityPeriod),
  }),
).annotate({ identifier: "RouteTollPass" }) as any as S.Schema<RouteTollPass>;
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
const RouteTollPaymentMethodList =
  IsolineHazardousCargoTypeList as any as S.Schema<RouteTollPaymentMethodList>;
export interface RouteTransponder {
  SystemName?: string | redacted.Redacted<string>;
}
const RouteTransponder = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SystemName: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteTransponder" }) as any as S.Schema<RouteTransponder>;
export type RouteTransponderList = RouteTransponder[];
const RouteTransponderList = /*@__PURE__*/ S.Array(RouteTransponder);
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
const RouteTollRate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ApplicableTimes: S.optional(SensitiveString),
    ConvertedPrice: S.optional(RouteTollPrice),
    Id: SensitiveString,
    LocalPrice: RouteTollPrice,
    Name: SensitiveString,
    Pass: S.optional(RouteTollPass),
    PaymentMethods: RouteTollPaymentMethodList,
    Transponders: RouteTransponderList,
  }),
).annotate({ identifier: "RouteTollRate" }) as any as S.Schema<RouteTollRate>;
export type RouteTollRateList = RouteTollRate[];
const RouteTollRateList = /*@__PURE__*/ S.Array(RouteTollRate);
export interface RouteToll {
  Country?: string | redacted.Redacted<string>;
  PaymentSites: RouteTollPaymentSite[];
  Rates: RouteTollRate[];
  Systems: number[];
}
const RouteToll = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Country: S.optional(SensitiveString),
    PaymentSites: RouteTollPaymentSiteList,
    Rates: RouteTollRateList,
    Systems: IndexList,
  }),
).annotate({ identifier: "RouteToll" }) as any as S.Schema<RouteToll>;
export type RouteTollList = RouteToll[];
const RouteTollList = /*@__PURE__*/ S.Array(RouteToll);
export interface RouteTollSystem {
  Name?: string | redacted.Redacted<string>;
}
const RouteTollSystem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Name: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteTollSystem" }) as any as S.Schema<RouteTollSystem>;
export type RouteTollSystemList = RouteTollSystem[];
const RouteTollSystemList = /*@__PURE__*/ S.Array(RouteTollSystem);
export interface RouteContinueHighwayStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteContinueHighwayStepDetails =
  RouteRoundaboutEnterStepDetails as any as S.Schema<RouteContinueHighwayStepDetails>;
export interface RouteEnterHighwayStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteEnterHighwayStepDetails =
  RouteRoundaboutEnterStepDetails as any as S.Schema<RouteEnterHighwayStepDetails>;
export interface RouteExitStepDetails {
  Intersection: LocalizedString[];
  RelativeExit?: number;
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteExitStepDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Intersection: LocalizedStringList,
    RelativeExit: S.optional(S.Number),
    SteeringDirection: S.optional(RouteSteeringDirection),
    TurnAngle: S.optional(S.Number),
    TurnIntensity: S.optional(RouteTurnIntensity),
  }),
).annotate({ identifier: "RouteExitStepDetails" }) as any as S.Schema<RouteExitStepDetails>;
export interface RouteRampStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteRampStepDetails = RouteKeepStepDetails as any as S.Schema<RouteRampStepDetails>;
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
const RouteVehicleTravelStepType = S.String;

export interface RouteUTurnStepDetails {
  Intersection: LocalizedString[];
  SteeringDirection?: RouteSteeringDirection;
  TurnAngle?: number;
  TurnIntensity?: RouteTurnIntensity;
}
const RouteUTurnStepDetails = RouteKeepStepDetails as any as S.Schema<RouteUTurnStepDetails>;
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
const RouteVehicleTravelStep = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ContinueHighwayStepDetails: S.optional(RouteContinueHighwayStepDetails),
    ContinueStepDetails: S.optional(RouteContinueStepDetails),
    CurrentRoad: S.optional(RouteRoad),
    Distance: S.optional(S.Number),
    Duration: S.Number,
    EnterHighwayStepDetails: S.optional(RouteEnterHighwayStepDetails),
    ExitNumber: S.optional(LocalizedStringList),
    ExitStepDetails: S.optional(RouteExitStepDetails),
    GeometryOffset: S.optional(S.Number),
    Instruction: S.optional(SensitiveString),
    KeepStepDetails: S.optional(RouteKeepStepDetails),
    NextRoad: S.optional(RouteRoad),
    RampStepDetails: S.optional(RouteRampStepDetails),
    RoundaboutEnterStepDetails: S.optional(RouteRoundaboutEnterStepDetails),
    RoundaboutExitStepDetails: S.optional(RouteRoundaboutExitStepDetails),
    RoundaboutPassStepDetails: S.optional(RouteRoundaboutPassStepDetails),
    Signpost: S.optional(RouteSignpost),
    TurnStepDetails: S.optional(RouteTurnStepDetails),
    Type: RouteVehicleTravelStepType,
    UTurnStepDetails: S.optional(RouteUTurnStepDetails),
  }),
).annotate({ identifier: "RouteVehicleTravelStep" }) as any as S.Schema<RouteVehicleTravelStep>;
export type RouteVehicleTravelStepList = RouteVehicleTravelStep[];
const RouteVehicleTravelStepList = /*@__PURE__*/ S.Array(RouteVehicleTravelStep);
export interface RouteZone {
  Category?: RouteZoneCategory;
  Name?: string | redacted.Redacted<string>;
}
const RouteZone = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Category: S.optional(RouteZoneCategory), Name: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteZone" }) as any as S.Schema<RouteZone>;
export type RouteZoneList = RouteZone[];
const RouteZoneList = /*@__PURE__*/ S.Array(RouteZone);
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
const RouteVehicleLegDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AfterTravelSteps: S.optional(RouteVehicleAfterTravelStepList),
    Arrival: RouteVehicleArrival,
    Departure: RouteVehicleDeparture,
    Incidents: S.optional(RouteVehicleIncidentList),
    Notices: S.optional(RouteVehicleNoticeList),
    PassThroughWaypoints: S.optional(RoutePassThroughWaypointList),
    Spans: S.optional(RouteVehicleSpanList),
    Summary: S.optional(RouteVehicleSummary),
    Tolls: S.optional(RouteTollList),
    TollSystems: S.optional(RouteTollSystemList),
    TravelSteps: S.optional(RouteVehicleTravelStepList),
    TruckRoadTypes: S.optional(TruckRoadTypeList),
    Zones: S.optional(RouteZoneList),
  }),
).annotate({ identifier: "RouteVehicleLegDetails" }) as any as S.Schema<RouteVehicleLegDetails>;
export type RouteRentalAfterTravelStepType = "Park" | (string & {});
export interface RouteRentalAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteRentalAfterTravelStepType;
}
export type RouteRentalAfterTravelStepList = RouteRentalAfterTravelStep[];
const RouteRentalAfterTravelStepList =
  RouteFerryAfterTravelStepList as any as S.Schema<RouteRentalAfterTravelStepList>;
export interface RouteRentalAgency {
  Name: string | redacted.Redacted<string>;
  Url?: string | redacted.Redacted<string>;
}
const RouteRentalAgency = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Name: SensitiveString, Url: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteRentalAgency" }) as any as S.Schema<RouteRentalAgency>;
export type RouteRentalPlaceType =
  | "AccessPoint"
  | "DockingStation"
  | "ParkingLot"
  | "Station"
  | (string & {});
const RouteRentalPlaceType = S.String;

export interface RouteRentalPlace {
  AccessPointDetails?: RouteAccessPointDetails;
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  StationDetails?: RouteStationDetails;
  Type?: RouteRentalPlaceType;
  WaypointIndex?: number;
}
const RouteRentalPlace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccessPointDetails: S.optional(RouteAccessPointDetails),
    Name: S.optional(SensitiveString),
    OriginalPosition: S.optional(Position23),
    Position: Position23,
    StationDetails: S.optional(RouteStationDetails),
    Type: S.optional(RouteRentalPlaceType),
    WaypointIndex: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteRentalPlace" }) as any as S.Schema<RouteRentalPlace>;
export interface RouteRentalArrival {
  Place: RouteRentalPlace;
  Time?: string | redacted.Redacted<string>;
}
const RouteRentalArrival = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Place: RouteRentalPlace, Time: S.optional(SensitiveString) }),
).annotate({ identifier: "RouteRentalArrival" }) as any as S.Schema<RouteRentalArrival>;
export type RouteAttributionType = "Disclaimer" | "Tariff" | (string & {});
const RouteAttributionType = S.String;

export type RouteWebLinkDeviceType = "Android" | "Ios" | "Web" | (string & {});
const RouteWebLinkDeviceType = S.String;

export interface RouteWebLink {
  AnchorText?: string | redacted.Redacted<string>;
  Description: string | redacted.Redacted<string>;
  DeviceType?: RouteWebLinkDeviceType;
  Url?: string | redacted.Redacted<string>;
}
const RouteWebLink = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AnchorText: S.optional(SensitiveString),
    Description: SensitiveString,
    DeviceType: S.optional(RouteWebLinkDeviceType),
    Url: S.optional(SensitiveString),
  }),
).annotate({ identifier: "RouteWebLink" }) as any as S.Schema<RouteWebLink>;
export interface RouteAttribution {
  AttributionType?: RouteAttributionType;
  WebLink: RouteWebLink;
}
const RouteAttribution = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttributionType: S.optional(RouteAttributionType), WebLink: RouteWebLink }),
).annotate({ identifier: "RouteAttribution" }) as any as S.Schema<RouteAttribution>;
export type RouteAttributionList = RouteAttribution[];
const RouteAttributionList = /*@__PURE__*/ S.Array(RouteAttribution);
export type RouteRentalBeforeTravelStepType = "Setup" | (string & {});
export interface RouteRentalBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteRentalBeforeTravelStepType;
}
export type RouteRentalBeforeTravelStepList = RouteRentalBeforeTravelStep[];
const RouteRentalBeforeTravelStepList =
  RouteFerryAfterTravelStepList as any as S.Schema<RouteRentalBeforeTravelStepList>;
export type RouteWebLinkList = RouteWebLink[];
const RouteWebLinkList = /*@__PURE__*/ S.Array(RouteWebLink);
export interface RouteRentalDeparture {
  Place: RouteRentalPlace;
  Time?: string | redacted.Redacted<string>;
}
const RouteRentalDeparture = RouteRentalArrival as any as S.Schema<RouteRentalDeparture>;
export interface RouteRentalOverviewSummary {
  Duration: number;
  Distance: number;
}
const RouteRentalOverviewSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Duration: S.Number, Distance: S.Number }),
).annotate({
  identifier: "RouteRentalOverviewSummary",
}) as any as S.Schema<RouteRentalOverviewSummary>;
export interface RouteRentalTravelOnlySummary {
  Duration: number;
}
const RouteRentalTravelOnlySummary =
  RouteFerryTravelOnlySummary as any as S.Schema<RouteRentalTravelOnlySummary>;
export interface RouteRentalSummary {
  Overview?: RouteRentalOverviewSummary;
  TravelOnly?: RouteRentalTravelOnlySummary;
}
const RouteRentalSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Overview: S.optional(RouteRentalOverviewSummary),
    TravelOnly: S.optional(RouteRentalTravelOnlySummary),
  }),
).annotate({ identifier: "RouteRentalSummary" }) as any as S.Schema<RouteRentalSummary>;
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
const RouteRentalTransportModeDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AvailableSeats: S.optional(S.Number),
    Category: S.optional(SensitiveString),
    Color: S.optional(SensitiveString),
    Engine: S.optional(RouteEngineType),
    LicensePlate: S.optional(SensitiveString),
    Mode: RouteRentalMode,
    Model: S.optional(SensitiveString),
    Name: S.optional(SensitiveString),
    TextColor: S.optional(SensitiveString),
  }),
).annotate({
  identifier: "RouteRentalTransportModeDetails",
}) as any as S.Schema<RouteRentalTransportModeDetails>;
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
const RouteRentalTravelStepType = S.String;

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
const RouteRentalTravelStep = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ContinueStepDetails: S.optional(RouteContinueStepDetails),
    Distance: S.optional(S.Number),
    Duration: S.Number,
    ExitStepDetails: S.optional(RouteExitStepDetails),
    GeometryOffset: S.optional(S.Number),
    Instruction: S.optional(SensitiveString),
    KeepStepDetails: S.optional(RouteKeepStepDetails),
    RampStepDetails: S.optional(RouteRampStepDetails),
    RoundaboutEnterStepDetails: S.optional(RouteRoundaboutEnterStepDetails),
    RoundaboutExitStepDetails: S.optional(RouteRoundaboutExitStepDetails),
    RoundaboutPassStepDetails: S.optional(RouteRoundaboutPassStepDetails),
    TurnStepDetails: S.optional(RouteTurnStepDetails),
    Type: RouteRentalTravelStepType,
    UTurnStepDetails: S.optional(RouteUTurnStepDetails),
  }),
).annotate({ identifier: "RouteRentalTravelStep" }) as any as S.Schema<RouteRentalTravelStep>;
export type RouteRentalTravelStepList = RouteRentalTravelStep[];
const RouteRentalTravelStepList = /*@__PURE__*/ S.Array(RouteRentalTravelStep);
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
const RouteRentalLegDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AfterTravelSteps: S.optional(RouteRentalAfterTravelStepList),
    Agency: RouteRentalAgency,
    Arrival: RouteRentalArrival,
    Attributions: S.optional(RouteAttributionList),
    BeforeTravelSteps: S.optional(RouteRentalBeforeTravelStepList),
    BookingWebLinks: S.optional(RouteWebLinkList),
    Departure: RouteRentalDeparture,
    Summary: S.optional(RouteRentalSummary),
    Transport: RouteRentalTransportModeDetails,
    TravelSteps: S.optional(RouteRentalTravelStepList),
  }),
).annotate({ identifier: "RouteRentalLegDetails" }) as any as S.Schema<RouteRentalLegDetails>;
export type RouteTaxiAfterTravelStepType = "Park" | (string & {});
const RouteTaxiAfterTravelStepType = S.String;

export interface RouteTaxiAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTaxiAfterTravelStepType;
}
const RouteTaxiAfterTravelStep = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Duration: S.Number,
    Instruction: S.optional(SensitiveString),
    Type: RouteTaxiAfterTravelStepType,
  }),
).annotate({ identifier: "RouteTaxiAfterTravelStep" }) as any as S.Schema<RouteTaxiAfterTravelStep>;
export type RouteTaxiAfterTravelStepList = RouteTaxiAfterTravelStep[];
const RouteTaxiAfterTravelStepList = /*@__PURE__*/ S.Array(RouteTaxiAfterTravelStep);
export interface RouteTaxiAgency {
  Name: string | redacted.Redacted<string>;
  Url?: string | redacted.Redacted<string>;
}
const RouteTaxiAgency = RouteRentalAgency as any as S.Schema<RouteTaxiAgency>;
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
const RouteTaxiArrival = RouteRentalArrival as any as S.Schema<RouteTaxiArrival>;
export type RouteTaxiBeforeTravelStepType = "Wait" | (string & {});
export interface RouteTaxiBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTaxiBeforeTravelStepType;
}
export type RouteTaxiBeforeTravelStepList = RouteTaxiBeforeTravelStep[];
const RouteTaxiBeforeTravelStepList =
  RouteFerryAfterTravelStepList as any as S.Schema<RouteTaxiBeforeTravelStepList>;
export interface RouteTaxiDeparture {
  Place: RouteTaxiPlace;
  Time?: string | redacted.Redacted<string>;
}
const RouteTaxiDeparture = RouteTaxiArrival as any as S.Schema<RouteTaxiDeparture>;
export type RouteTaxiNoticeCode = "AccuratePolylineUnavailable" | "Other" | (string & {});
export interface RouteTaxiNotice {
  Code: RouteTaxiNoticeCode;
  Impact?: RouteNoticeImpact;
}
export type RouteTaxiNoticeList = RouteTaxiNotice[];
const RouteTaxiNoticeList = RouteResponseNoticeList as any as S.Schema<RouteTaxiNoticeList>;
export interface RouteTaxiOverviewSummary {
  Duration: number;
  Distance: number;
}
const RouteTaxiOverviewSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Duration: S.Number, Distance: S.Number }),
).annotate({ identifier: "RouteTaxiOverviewSummary" }) as any as S.Schema<RouteTaxiOverviewSummary>;
export interface RouteTaxiTravelOnlySummary {
  Duration: number;
}
const RouteTaxiTravelOnlySummary =
  RouteFerryTravelOnlySummary as any as S.Schema<RouteTaxiTravelOnlySummary>;
export interface RouteTaxiSummary {
  Overview?: RouteTaxiOverviewSummary;
  TravelOnly?: RouteTaxiTravelOnlySummary;
}
const RouteTaxiSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Overview: S.optional(RouteTaxiOverviewSummary),
    TravelOnly: S.optional(RouteTaxiTravelOnlySummary),
  }),
).annotate({ identifier: "RouteTaxiSummary" }) as any as S.Schema<RouteTaxiSummary>;
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
const RouteTaxiTransportModeDetails =
  RouteRentalTransportModeDetails as any as S.Schema<RouteTaxiTransportModeDetails>;
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
const RouteTaxiTravelStepList =
  RouteRentalTravelStepList as any as S.Schema<RouteTaxiTravelStepList>;
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
const RouteTaxiLegDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AfterTravelSteps: S.optional(RouteTaxiAfterTravelStepList),
    Agency: RouteTaxiAgency,
    Arrival: RouteTaxiArrival,
    Attributions: S.optional(RouteAttributionList),
    BeforeTravelSteps: S.optional(RouteTaxiBeforeTravelStepList),
    BookingWebLinks: S.optional(RouteWebLinkList),
    Departure: RouteTaxiDeparture,
    Notices: S.optional(RouteTaxiNoticeList),
    Summary: S.optional(RouteTaxiSummary),
    Transport: RouteTaxiTransportModeDetails,
    TravelSteps: S.optional(RouteTaxiTravelStepList),
  }),
).annotate({ identifier: "RouteTaxiLegDetails" }) as any as S.Schema<RouteTaxiLegDetails>;
export type RouteTransitAfterTravelStepType = "Deboard" | (string & {});
export interface RouteTransitAfterTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTransitAfterTravelStepType;
}
export type RouteTransitAfterTravelStepList = RouteTransitAfterTravelStep[];
const RouteTransitAfterTravelStepList =
  RouteFerryAfterTravelStepList as any as S.Schema<RouteTransitAfterTravelStepList>;
export interface RouteTransitAgency {
  Name: string | redacted.Redacted<string>;
  Url?: string | redacted.Redacted<string>;
}
const RouteTransitAgency = RouteRentalAgency as any as S.Schema<RouteTransitAgency>;
export type RouteTransitPlaceType = "Station" | (string & {});
const RouteTransitPlaceType = S.String;

export interface RouteTransitPlace {
  Name?: string | redacted.Redacted<string>;
  OriginalPosition?: number[];
  Position: number[];
  StationDetails?: RouteStationDetails;
  Type?: RouteTransitPlaceType;
  WaypointIndex?: number;
}
const RouteTransitPlace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Name: S.optional(SensitiveString),
    OriginalPosition: S.optional(Position23),
    Position: Position23,
    StationDetails: S.optional(RouteStationDetails),
    Type: S.optional(RouteTransitPlaceType),
    WaypointIndex: S.optional(S.Number),
  }),
).annotate({ identifier: "RouteTransitPlace" }) as any as S.Schema<RouteTransitPlace>;
export type RouteTransitTripStatus =
  | "Added"
  | "Cancelled"
  | "Replaced"
  | "Scheduled"
  | (string & {});
const RouteTransitTripStatus = S.String;

export interface RouteTransitArrival {
  Delay?: number;
  Place: RouteTransitPlace;
  Status?: RouteTransitTripStatus;
  Time?: string | redacted.Redacted<string>;
}
const RouteTransitArrival = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Delay: S.optional(S.Number),
    Place: RouteTransitPlace,
    Status: S.optional(RouteTransitTripStatus),
    Time: S.optional(SensitiveString),
  }),
).annotate({ identifier: "RouteTransitArrival" }) as any as S.Schema<RouteTransitArrival>;
export type RouteTransitBeforeTravelStepType = "Board" | (string & {});
export interface RouteTransitBeforeTravelStep {
  Duration: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTransitBeforeTravelStepType;
}
export type RouteTransitBeforeTravelStepList = RouteTransitBeforeTravelStep[];
const RouteTransitBeforeTravelStepList =
  RouteFerryAfterTravelStepList as any as S.Schema<RouteTransitBeforeTravelStepList>;
export interface RouteTransitDeparture {
  Delay?: number;
  Place: RouteTransitPlace;
  Status?: RouteTransitTripStatus;
  Time?: string | redacted.Redacted<string>;
}
const RouteTransitDeparture = RouteTransitArrival as any as S.Schema<RouteTransitDeparture>;
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
const RouteTransitIncidentEffect = S.String;

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
const RouteTransitIncidentType = S.String;

export interface RouteTransitIncident {
  Description?: string | redacted.Redacted<string>;
  Effect: RouteTransitIncidentEffect;
  EndTime?: string | redacted.Redacted<string>;
  StartTime?: string | redacted.Redacted<string>;
  Type: RouteTransitIncidentType;
  Url?: string | redacted.Redacted<string>;
}
const RouteTransitIncident = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Description: S.optional(SensitiveString),
    Effect: RouteTransitIncidentEffect,
    EndTime: S.optional(SensitiveString),
    StartTime: S.optional(SensitiveString),
    Type: RouteTransitIncidentType,
    Url: S.optional(SensitiveString),
  }),
).annotate({ identifier: "RouteTransitIncident" }) as any as S.Schema<RouteTransitIncident>;
export type RouteTransitIncidentList = RouteTransitIncident[];
const RouteTransitIncidentList = /*@__PURE__*/ S.Array(RouteTransitIncident);
export type RouteTransitIntermediateStopAttribute = "NoEntry" | "NoExit" | (string & {});
export type RouteTransitIntermediateStopAttributeList = RouteTransitIntermediateStopAttribute[];
const RouteTransitIntermediateStopAttributeList =
  RouteMatrixHazardousCargoTypeList as any as S.Schema<RouteTransitIntermediateStopAttributeList>;
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
const RouteTransitTransportModeDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Accessibility: S.optional(RouteAccessibilityAvailabilityDetails),
    Color: S.optional(SensitiveString),
    Headsign: S.optional(SensitiveString),
    LongRouteName: S.optional(SensitiveString),
    Mode: RouteTransitMode,
    RouteName: S.optional(SensitiveString),
    ShortRouteName: S.optional(SensitiveString),
    TextColor: S.optional(SensitiveString),
  }),
).annotate({
  identifier: "RouteTransitTransportModeDetails",
}) as any as S.Schema<RouteTransitTransportModeDetails>;
export interface RouteTransitIntermediateStop {
  Attributes?: RouteTransitIntermediateStopAttribute[];
  Departure: RouteTransitDeparture;
  Duration: number;
  GeometryOffset?: number;
  Transport?: RouteTransitTransportModeDetails;
}
const RouteTransitIntermediateStop = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Attributes: S.optional(RouteTransitIntermediateStopAttributeList),
    Departure: RouteTransitDeparture,
    Duration: S.Number,
    GeometryOffset: S.optional(S.Number),
    Transport: S.optional(RouteTransitTransportModeDetails),
  }),
).annotate({
  identifier: "RouteTransitIntermediateStop",
}) as any as S.Schema<RouteTransitIntermediateStop>;
export type RouteTransitIntermediateStopList = RouteTransitIntermediateStop[];
const RouteTransitIntermediateStopList = /*@__PURE__*/ S.Array(RouteTransitIntermediateStop);
export interface RouteTransitNextDeparture {
  Delay?: number;
  PlatformName?: string | redacted.Redacted<string>;
  Status?: RouteTransitTripStatus;
  Time: string | redacted.Redacted<string>;
  Transport?: RouteTransitTransportModeDetails;
}
const RouteTransitNextDeparture = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Delay: S.optional(S.Number),
    PlatformName: S.optional(SensitiveString),
    Status: S.optional(RouteTransitTripStatus),
    Time: SensitiveString,
    Transport: S.optional(RouteTransitTransportModeDetails),
  }),
).annotate({
  identifier: "RouteTransitNextDeparture",
}) as any as S.Schema<RouteTransitNextDeparture>;
export type RouteTransitNextDepartureList = RouteTransitNextDeparture[];
const RouteTransitNextDepartureList = /*@__PURE__*/ S.Array(RouteTransitNextDeparture);
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
const RouteTransitNoticeList = RouteResponseNoticeList as any as S.Schema<RouteTransitNoticeList>;
export interface RouteTransitSpan {
  Country?: string | redacted.Redacted<string>;
  Distance?: number;
  Duration?: number;
  GeometryOffset?: number;
  Names?: LocalizedString[];
  Region?: string | redacted.Redacted<string>;
}
export type RouteTransitSpanList = RouteTransitSpan[];
const RouteTransitSpanList = RouteFerrySpanList as any as S.Schema<RouteTransitSpanList>;
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
const RouteTransitSummary = RouteFerrySummary as any as S.Schema<RouteTransitSummary>;
export type RouteTransitTravelStepType = "Depart" | (string & {});
export interface RouteTransitTravelStep {
  Distance?: number;
  Duration: number;
  GeometryOffset?: number;
  Instruction?: string | redacted.Redacted<string>;
  Type: RouteTransitTravelStepType;
}
export type RouteTransitTravelStepList = RouteTransitTravelStep[];
const RouteTransitTravelStepList =
  RouteFerryTravelStepList as any as S.Schema<RouteTransitTravelStepList>;
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
const RouteTransitLegDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AfterTravelSteps: S.optional(RouteTransitAfterTravelStepList),
    Agency: S.optional(RouteTransitAgency),
    Arrival: RouteTransitArrival,
    Attributions: S.optional(RouteAttributionList),
    BeforeTravelSteps: S.optional(RouteTransitBeforeTravelStepList),
    BookingWebLinks: S.optional(RouteWebLinkList),
    Departure: RouteTransitDeparture,
    Incidents: S.optional(RouteTransitIncidentList),
    IntermediateStops: S.optional(RouteTransitIntermediateStopList),
    NextDepartures: S.optional(RouteTransitNextDepartureList),
    Notices: S.optional(RouteTransitNoticeList),
    PassThroughWaypoints: S.optional(RoutePassThroughWaypointList),
    Spans: S.optional(RouteTransitSpanList),
    Summary: S.optional(RouteTransitSummary),
    Transport: RouteTransitTransportModeDetails,
    TravelSteps: S.optional(RouteTransitTravelStepList),
  }),
).annotate({ identifier: "RouteTransitLegDetails" }) as any as S.Schema<RouteTransitLegDetails>;
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
const RouteLeg = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    FerryLegDetails: S.optional(RouteFerryLegDetails),
    Geometry: RouteLegGeometry,
    Language: S.optional(S.String),
    PedestrianLegDetails: S.optional(RoutePedestrianLegDetails),
    TravelMode: RouteLegTravelMode,
    Type: RouteLegType,
    VehicleLegDetails: S.optional(RouteVehicleLegDetails),
    RentalLegDetails: S.optional(RouteRentalLegDetails),
    TaxiLegDetails: S.optional(RouteTaxiLegDetails),
    TransitLegDetails: S.optional(RouteTransitLegDetails),
  }),
).annotate({ identifier: "RouteLeg" }) as any as S.Schema<RouteLeg>;
export type RouteLegList = RouteLeg[];
const RouteLegList = /*@__PURE__*/ S.Array(RouteLeg);
export interface RouteMajorRoadLabel {
  RoadName?: LocalizedString;
  RouteNumber?: RouteNumber;
}
const RouteMajorRoadLabel = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RoadName: S.optional(LocalizedString), RouteNumber: S.optional(RouteNumber) }),
).annotate({ identifier: "RouteMajorRoadLabel" }) as any as S.Schema<RouteMajorRoadLabel>;
export type RouteMajorRoadLabelList = RouteMajorRoadLabel[];
const RouteMajorRoadLabelList = /*@__PURE__*/ S.Array(RouteMajorRoadLabel);
export interface RouteTollPriceSummary {
  Currency: string;
  Estimate: boolean;
  Range: boolean;
  RangeValue?: RouteTollPriceValueRange;
  Value: number;
}
const RouteTollPriceSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Currency: S.String,
    Estimate: S.Boolean,
    Range: S.Boolean,
    RangeValue: S.optional(RouteTollPriceValueRange),
    Value: S.Number,
  }),
).annotate({ identifier: "RouteTollPriceSummary" }) as any as S.Schema<RouteTollPriceSummary>;
export interface RouteTollSummary {
  Total?: RouteTollPriceSummary;
}
const RouteTollSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Total: S.optional(RouteTollPriceSummary) }),
).annotate({ identifier: "RouteTollSummary" }) as any as S.Schema<RouteTollSummary>;
export interface RouteSummary {
  Distance?: number;
  Duration?: number;
  Tolls?: RouteTollSummary;
}
const RouteSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Distance: S.optional(S.Number),
    Duration: S.optional(S.Number),
    Tolls: S.optional(RouteTollSummary),
  }),
).annotate({ identifier: "RouteSummary" }) as any as S.Schema<RouteSummary>;
export interface Route {
  Legs: RouteLeg[];
  MajorRoadLabels: RouteMajorRoadLabel[];
  Summary?: RouteSummary;
}
const Route = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Legs: RouteLegList,
    MajorRoadLabels: RouteMajorRoadLabelList,
    Summary: S.optional(RouteSummary),
  }),
).annotate({ identifier: "Route" }) as any as S.Schema<Route>;
export type RouteList = Route[];
const RouteList = /*@__PURE__*/ S.Array(Route);
export interface CalculateRoutesResponse {
  LegGeometryFormat: GeometryFormat;
  Notices: RouteResponseNotice[];
  PricingBucket: string;
  Routes: Route[];
}
const CalculateRoutesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    LegGeometryFormat: GeometryFormat,
    Notices: RouteResponseNoticeList,
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    Routes: RouteList,
  }),
).annotate({ identifier: "CalculateRoutesResponse" }) as any as S.Schema<CalculateRoutesResponse>;
export interface WaypointOptimizationAvoidanceAreaGeometry {
  BoundingBox?: number[];
}
const WaypointOptimizationAvoidanceAreaGeometry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ BoundingBox: S.optional(BoundingBox) }),
).annotate({
  identifier: "WaypointOptimizationAvoidanceAreaGeometry",
}) as any as S.Schema<WaypointOptimizationAvoidanceAreaGeometry>;
export interface WaypointOptimizationAvoidanceArea {
  Geometry: WaypointOptimizationAvoidanceAreaGeometry;
}
const WaypointOptimizationAvoidanceArea = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Geometry: WaypointOptimizationAvoidanceAreaGeometry }),
).annotate({
  identifier: "WaypointOptimizationAvoidanceArea",
}) as any as S.Schema<WaypointOptimizationAvoidanceArea>;
export type WaypointOptimizationAvoidanceAreaList = WaypointOptimizationAvoidanceArea[];
const WaypointOptimizationAvoidanceAreaList = /*@__PURE__*/ S.Array(
  WaypointOptimizationAvoidanceArea,
);
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
const WaypointOptimizationAvoidanceOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Areas: S.optional(WaypointOptimizationAvoidanceAreaList),
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
}) as any as S.Schema<WaypointOptimizationAvoidanceOptions>;
export type WaypointOptimizationClusteringAlgorithm =
  | "DrivingDistance"
  | "TopologySegment"
  | (string & {});
const WaypointOptimizationClusteringAlgorithm = S.String;

export type WaypointOptimizationDrivingDistance = number;
export interface WaypointOptimizationDrivingDistanceOptions {
  DrivingDistance: number;
}
const WaypointOptimizationDrivingDistanceOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DrivingDistance: S.Number }),
).annotate({
  identifier: "WaypointOptimizationDrivingDistanceOptions",
}) as any as S.Schema<WaypointOptimizationDrivingDistanceOptions>;
export interface WaypointOptimizationClusteringOptions {
  Algorithm: WaypointOptimizationClusteringAlgorithm;
  DrivingDistanceOptions?: WaypointOptimizationDrivingDistanceOptions;
}
const WaypointOptimizationClusteringOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Algorithm: WaypointOptimizationClusteringAlgorithm,
    DrivingDistanceOptions: S.optional(WaypointOptimizationDrivingDistanceOptions),
  }),
).annotate({
  identifier: "WaypointOptimizationClusteringOptions",
}) as any as S.Schema<WaypointOptimizationClusteringOptions>;
export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | (string & {});
const DayOfWeek = S.String;

export type TimeOfDay = string | redacted.Redacted<string>;
export interface WaypointOptimizationAccessHoursEntry {
  DayOfWeek: DayOfWeek;
  TimeOfDay: string | redacted.Redacted<string>;
}
const WaypointOptimizationAccessHoursEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DayOfWeek: DayOfWeek, TimeOfDay: SensitiveString }),
).annotate({
  identifier: "WaypointOptimizationAccessHoursEntry",
}) as any as S.Schema<WaypointOptimizationAccessHoursEntry>;
export interface WaypointOptimizationAccessHours {
  From: WaypointOptimizationAccessHoursEntry;
  To: WaypointOptimizationAccessHoursEntry;
}
const WaypointOptimizationAccessHours = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    From: WaypointOptimizationAccessHoursEntry,
    To: WaypointOptimizationAccessHoursEntry,
  }),
).annotate({
  identifier: "WaypointOptimizationAccessHours",
}) as any as S.Schema<WaypointOptimizationAccessHours>;
export type WaypointId = string;
export interface WaypointOptimizationSideOfStreetOptions {
  Position: number[];
  UseWith?: SideOfStreetMatchingStrategy;
}
const WaypointOptimizationSideOfStreetOptions =
  IsolineSideOfStreetOptions as any as S.Schema<WaypointOptimizationSideOfStreetOptions>;
export interface WaypointOptimizationDestinationOptions {
  AccessHours?: WaypointOptimizationAccessHours;
  AppointmentTime?: string | redacted.Redacted<string>;
  Heading?: number;
  Id?: string;
  ServiceDuration?: number;
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions;
}
const WaypointOptimizationDestinationOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccessHours: S.optional(WaypointOptimizationAccessHours),
    AppointmentTime: S.optional(SensitiveString),
    Heading: S.optional(S.Number),
    Id: S.optional(S.String),
    ServiceDuration: S.optional(S.Number),
    SideOfStreet: S.optional(WaypointOptimizationSideOfStreetOptions),
  }),
).annotate({
  identifier: "WaypointOptimizationDestinationOptions",
}) as any as S.Schema<WaypointOptimizationDestinationOptions>;
export interface WaypointOptimizationRestCycleDurations {
  RestDuration: number;
  WorkDuration: number;
}
const WaypointOptimizationRestCycleDurations = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RestDuration: S.Number, WorkDuration: S.Number }),
).annotate({
  identifier: "WaypointOptimizationRestCycleDurations",
}) as any as S.Schema<WaypointOptimizationRestCycleDurations>;
export interface WaypointOptimizationRestCycles {
  LongCycle: WaypointOptimizationRestCycleDurations;
  ShortCycle: WaypointOptimizationRestCycleDurations;
}
const WaypointOptimizationRestCycles = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    LongCycle: WaypointOptimizationRestCycleDurations,
    ShortCycle: WaypointOptimizationRestCycleDurations,
  }),
).annotate({
  identifier: "WaypointOptimizationRestCycles",
}) as any as S.Schema<WaypointOptimizationRestCycles>;
export interface WaypointOptimizationRestProfile {
  Profile: string | redacted.Redacted<string>;
}
const WaypointOptimizationRestProfile = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Profile: SensitiveString }),
).annotate({
  identifier: "WaypointOptimizationRestProfile",
}) as any as S.Schema<WaypointOptimizationRestProfile>;
export type WaypointOptimizationServiceTimeTreatment = "Rest" | "Work" | (string & {});
const WaypointOptimizationServiceTimeTreatment = S.String;

export interface WaypointOptimizationDriverOptions {
  RestCycles?: WaypointOptimizationRestCycles;
  RestProfile?: WaypointOptimizationRestProfile;
  TreatServiceTimeAs?: WaypointOptimizationServiceTimeTreatment;
}
const WaypointOptimizationDriverOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RestCycles: S.optional(WaypointOptimizationRestCycles),
    RestProfile: S.optional(WaypointOptimizationRestProfile),
    TreatServiceTimeAs: S.optional(WaypointOptimizationServiceTimeTreatment),
  }),
).annotate({
  identifier: "WaypointOptimizationDriverOptions",
}) as any as S.Schema<WaypointOptimizationDriverOptions>;
export interface WaypointOptimizationExclusionOptions {
  Countries: (string | redacted.Redacted<string>)[];
}
const WaypointOptimizationExclusionOptions =
  RouteMatrixExclusionOptions as any as S.Schema<WaypointOptimizationExclusionOptions>;
export type WaypointOptimizationSequencingObjective =
  | "FastestRoute"
  | "ShortestRoute"
  | (string & {});
const WaypointOptimizationSequencingObjective = S.String;

export interface WaypointOptimizationOriginOptions {
  Id?: string;
}
const WaypointOptimizationOriginOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Id: S.optional(S.String) }),
).annotate({
  identifier: "WaypointOptimizationOriginOptions",
}) as any as S.Schema<WaypointOptimizationOriginOptions>;
export interface WaypointOptimizationTrafficOptions {
  Usage?: TrafficUsage;
}
const WaypointOptimizationTrafficOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Usage: S.optional(TrafficUsage) }),
).annotate({
  identifier: "WaypointOptimizationTrafficOptions",
}) as any as S.Schema<WaypointOptimizationTrafficOptions>;
export type WaypointOptimizationTravelMode =
  | "Car"
  | "Pedestrian"
  | "Scooter"
  | "Truck"
  | (string & {});
const WaypointOptimizationTravelMode = S.String;

export interface WaypointOptimizationPedestrianOptions {
  Speed?: number;
}
const WaypointOptimizationPedestrianOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Speed: S.optional(S.Number) }),
).annotate({
  identifier: "WaypointOptimizationPedestrianOptions",
}) as any as S.Schema<WaypointOptimizationPedestrianOptions>;
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
const WaypointOptimizationHazardousCargoTypeList =
  RouteMatrixHazardousCargoTypeList as any as S.Schema<WaypointOptimizationHazardousCargoTypeList>;
export interface WaypointOptimizationTrailerOptions {
  TrailerCount?: number;
}
const WaypointOptimizationTrailerOptions =
  RouteMatrixTrailerOptions as any as S.Schema<WaypointOptimizationTrailerOptions>;
export type WaypointOptimizationTruckType = "StraightTruck" | "Tractor" | (string & {});
const WaypointOptimizationTruckType = S.String;

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
const WaypointOptimizationTruckOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GrossWeight: S.optional(S.Number),
    HazardousCargos: S.optional(WaypointOptimizationHazardousCargoTypeList),
    Height: S.optional(S.Number),
    Length: S.optional(S.Number),
    Trailer: S.optional(WaypointOptimizationTrailerOptions),
    TruckType: S.optional(WaypointOptimizationTruckType),
    TunnelRestrictionCode: S.optional(SensitiveString),
    WeightPerAxle: S.optional(S.Number),
    Width: S.optional(S.Number),
  }),
).annotate({
  identifier: "WaypointOptimizationTruckOptions",
}) as any as S.Schema<WaypointOptimizationTruckOptions>;
export interface WaypointOptimizationTravelModeOptions {
  Pedestrian?: WaypointOptimizationPedestrianOptions;
  Truck?: WaypointOptimizationTruckOptions;
}
const WaypointOptimizationTravelModeOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Pedestrian: S.optional(WaypointOptimizationPedestrianOptions),
    Truck: S.optional(WaypointOptimizationTruckOptions),
  }),
).annotate({
  identifier: "WaypointOptimizationTravelModeOptions",
}) as any as S.Schema<WaypointOptimizationTravelModeOptions>;
export type WaypointIndex = number;
export type BeforeWaypointsList = number[];
const BeforeWaypointsList = BoundingBox as any as S.Schema<BeforeWaypointsList>;
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
const WaypointOptimizationWaypoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccessHours: S.optional(WaypointOptimizationAccessHours),
    AppointmentTime: S.optional(SensitiveString),
    Before: S.optional(BeforeWaypointsList),
    Heading: S.optional(S.Number),
    Id: S.optional(S.String),
    Position: Position,
    ServiceDuration: S.optional(S.Number),
    SideOfStreet: S.optional(WaypointOptimizationSideOfStreetOptions),
  }),
).annotate({
  identifier: "WaypointOptimizationWaypoint",
}) as any as S.Schema<WaypointOptimizationWaypoint>;
export type WaypointOptimizationWaypointList = WaypointOptimizationWaypoint[];
const WaypointOptimizationWaypointList = /*@__PURE__*/ S.Array(WaypointOptimizationWaypoint);
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
const OptimizeWaypointsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Avoid: S.optional(WaypointOptimizationAvoidanceOptions),
    Clustering: S.optional(WaypointOptimizationClusteringOptions),
    DepartureTime: S.optional(SensitiveString),
    Destination: S.optional(Position),
    DestinationOptions: S.optional(WaypointOptimizationDestinationOptions),
    Driver: S.optional(WaypointOptimizationDriverOptions),
    Exclude: S.optional(WaypointOptimizationExclusionOptions),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    OptimizeSequencingFor: S.optional(WaypointOptimizationSequencingObjective),
    Origin: Position,
    OriginOptions: S.optional(WaypointOptimizationOriginOptions),
    Traffic: S.optional(WaypointOptimizationTrafficOptions),
    TravelMode: S.optional(WaypointOptimizationTravelMode),
    TravelModeOptions: S.optional(WaypointOptimizationTravelModeOptions),
    Waypoints: S.optional(WaypointOptimizationWaypointList),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/optimize-waypoints" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "OptimizeWaypointsRequest" }) as any as S.Schema<OptimizeWaypointsRequest>;
export interface WaypointOptimizationConnection {
  Distance: number;
  From: string;
  RestDuration: number;
  To: string;
  TravelDuration: number;
  WaitDuration: number;
}
const WaypointOptimizationConnection = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<WaypointOptimizationConnection>;
export type WaypointOptimizationConnectionList = WaypointOptimizationConnection[];
const WaypointOptimizationConnectionList = /*@__PURE__*/ S.Array(WaypointOptimizationConnection);
export type WaypointOptimizationConstraint =
  | "AccessHours"
  | "AppointmentTime"
  | "Before"
  | "Heading"
  | "ServiceDuration"
  | "SideOfStreet"
  | (string & {});
const WaypointOptimizationConstraint = S.String;

export interface WaypointOptimizationFailedConstraint {
  Constraint?: WaypointOptimizationConstraint;
  Reason?: string | redacted.Redacted<string>;
}
const WaypointOptimizationFailedConstraint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Constraint: S.optional(WaypointOptimizationConstraint),
    Reason: S.optional(SensitiveString),
  }),
).annotate({
  identifier: "WaypointOptimizationFailedConstraint",
}) as any as S.Schema<WaypointOptimizationFailedConstraint>;
export type WaypointOptimizationFailedConstraintList = WaypointOptimizationFailedConstraint[];
const WaypointOptimizationFailedConstraintList = /*@__PURE__*/ S.Array(
  WaypointOptimizationFailedConstraint,
);
export interface WaypointOptimizationImpedingWaypoint {
  FailedConstraints: WaypointOptimizationFailedConstraint[];
  Id: string;
  Position: number[];
}
const WaypointOptimizationImpedingWaypoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    FailedConstraints: WaypointOptimizationFailedConstraintList,
    Id: S.String,
    Position: Position,
  }),
).annotate({
  identifier: "WaypointOptimizationImpedingWaypoint",
}) as any as S.Schema<WaypointOptimizationImpedingWaypoint>;
export type WaypointOptimizationImpedingWaypointList = WaypointOptimizationImpedingWaypoint[];
const WaypointOptimizationImpedingWaypointList = /*@__PURE__*/ S.Array(
  WaypointOptimizationImpedingWaypoint,
);
export type ClusterIndex = number;
export interface WaypointOptimizationOptimizedWaypoint {
  ArrivalTime?: string | redacted.Redacted<string>;
  ClusterIndex?: number;
  DepartureTime?: string | redacted.Redacted<string>;
  Id: string;
  Position: number[];
}
const WaypointOptimizationOptimizedWaypoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ArrivalTime: S.optional(SensitiveString),
    ClusterIndex: S.optional(S.Number),
    DepartureTime: S.optional(SensitiveString),
    Id: S.String,
    Position: Position,
  }),
).annotate({
  identifier: "WaypointOptimizationOptimizedWaypoint",
}) as any as S.Schema<WaypointOptimizationOptimizedWaypoint>;
export type WaypointOptimizationOptimizedWaypointList = WaypointOptimizationOptimizedWaypoint[];
const WaypointOptimizationOptimizedWaypointList = /*@__PURE__*/ S.Array(
  WaypointOptimizationOptimizedWaypoint,
);
export interface WaypointOptimizationTimeBreakdown {
  RestDuration: number;
  ServiceDuration: number;
  TravelDuration: number;
  WaitDuration: number;
}
const WaypointOptimizationTimeBreakdown = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RestDuration: S.Number,
    ServiceDuration: S.Number,
    TravelDuration: S.Number,
    WaitDuration: S.Number,
  }),
).annotate({
  identifier: "WaypointOptimizationTimeBreakdown",
}) as any as S.Schema<WaypointOptimizationTimeBreakdown>;
export interface OptimizeWaypointsResponse {
  Connections: WaypointOptimizationConnection[];
  Distance: number;
  Duration: number;
  ImpedingWaypoints: WaypointOptimizationImpedingWaypoint[];
  OptimizedWaypoints: WaypointOptimizationOptimizedWaypoint[];
  PricingBucket: string;
  TimeBreakdown: WaypointOptimizationTimeBreakdown;
}
const OptimizeWaypointsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Connections: WaypointOptimizationConnectionList,
    Distance: S.Number,
    Duration: S.Number,
    ImpedingWaypoints: WaypointOptimizationImpedingWaypointList,
    OptimizedWaypoints: WaypointOptimizationOptimizedWaypointList,
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    TimeBreakdown: WaypointOptimizationTimeBreakdown,
  }),
).annotate({
  identifier: "OptimizeWaypointsResponse",
}) as any as S.Schema<OptimizeWaypointsResponse>;
export interface RoadSnapTracePoint {
  Heading?: number;
  Position: number[];
  Speed?: number;
  Timestamp?: string | redacted.Redacted<string>;
}
const RoadSnapTracePoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Heading: S.optional(S.Number),
    Position: Position,
    Speed: S.optional(S.Number),
    Timestamp: S.optional(SensitiveString),
  }),
).annotate({ identifier: "RoadSnapTracePoint" }) as any as S.Schema<RoadSnapTracePoint>;
export type RoadSnapTracePointList = RoadSnapTracePoint[];
const RoadSnapTracePointList = /*@__PURE__*/ S.Array(RoadSnapTracePoint);
export type RoadSnapTravelMode = "Car" | "Pedestrian" | "Scooter" | "Truck" | (string & {});
const RoadSnapTravelMode = S.String;

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
const RoadSnapHazardousCargoTypeList =
  IsolineHazardousCargoTypeList as any as S.Schema<RoadSnapHazardousCargoTypeList>;
export interface RoadSnapTrailerOptions {
  TrailerCount?: number;
}
const RoadSnapTrailerOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TrailerCount: S.optional(S.Number) }),
).annotate({ identifier: "RoadSnapTrailerOptions" }) as any as S.Schema<RoadSnapTrailerOptions>;
export interface RoadSnapTruckOptions {
  GrossWeight?: number;
  HazardousCargos?: RoadSnapHazardousCargoType[];
  Height?: number;
  Length?: number;
  Trailer?: RoadSnapTrailerOptions;
  TunnelRestrictionCode?: string | redacted.Redacted<string>;
  Width?: number;
}
const RoadSnapTruckOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GrossWeight: S.optional(S.Number),
    HazardousCargos: S.optional(RoadSnapHazardousCargoTypeList),
    Height: S.optional(S.Number),
    Length: S.optional(S.Number),
    Trailer: S.optional(RoadSnapTrailerOptions),
    TunnelRestrictionCode: S.optional(SensitiveString),
    Width: S.optional(S.Number),
  }),
).annotate({ identifier: "RoadSnapTruckOptions" }) as any as S.Schema<RoadSnapTruckOptions>;
export interface RoadSnapTravelModeOptions {
  Truck?: RoadSnapTruckOptions;
}
const RoadSnapTravelModeOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Truck: S.optional(RoadSnapTruckOptions) }),
).annotate({
  identifier: "RoadSnapTravelModeOptions",
}) as any as S.Schema<RoadSnapTravelModeOptions>;
export interface SnapToRoadsRequest {
  Key?: string | redacted.Redacted<string>;
  SnappedGeometryFormat?: GeometryFormat;
  SnapRadius?: number;
  TracePoints: RoadSnapTracePoint[];
  TravelMode?: RoadSnapTravelMode;
  TravelModeOptions?: RoadSnapTravelModeOptions;
}
const SnapToRoadsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    SnappedGeometryFormat: S.optional(GeometryFormat),
    SnapRadius: S.optional(S.Number),
    TracePoints: RoadSnapTracePointList,
    TravelMode: S.optional(RoadSnapTravelMode),
    TravelModeOptions: S.optional(RoadSnapTravelModeOptions),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/snap-to-roads" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "SnapToRoadsRequest" }) as any as S.Schema<SnapToRoadsRequest>;
export type RoadSnapNoticeCode =
  | "TracePointsHeadingIgnored"
  | "TracePointsIgnored"
  | "TracePointsMovedByLargeDistance"
  | "TracePointsNotMatched"
  | "TracePointsOutOfSequence"
  | "TracePointsSpeedEstimated"
  | "TracePointsSpeedIgnored"
  | (string & {});
const RoadSnapNoticeCode = S.String;

export type RoadSnapTracePointIndexList = number[];
const RoadSnapTracePointIndexList = BoundingBox as any as S.Schema<RoadSnapTracePointIndexList>;
export interface RoadSnapNotice {
  Code: RoadSnapNoticeCode;
  Title: string | redacted.Redacted<string>;
  TracePointIndexes: number[];
}
const RoadSnapNotice = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Code: RoadSnapNoticeCode,
    Title: SensitiveString,
    TracePointIndexes: RoadSnapTracePointIndexList,
  }),
).annotate({ identifier: "RoadSnapNotice" }) as any as S.Schema<RoadSnapNotice>;
export type RoadSnapNoticeList = RoadSnapNotice[];
const RoadSnapNoticeList = /*@__PURE__*/ S.Array(RoadSnapNotice);
export interface RoadSnapSnappedGeometry {
  LineString?: number[][];
  Polyline?: string | redacted.Redacted<string>;
}
const RoadSnapSnappedGeometry = RouteLegGeometry as any as S.Schema<RoadSnapSnappedGeometry>;
export interface RoadSnapSnappedTracePoint {
  Confidence: number;
  OriginalPosition: number[];
  SnappedPosition: number[];
}
const RoadSnapSnappedTracePoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Confidence: S.Number, OriginalPosition: Position, SnappedPosition: Position }),
).annotate({
  identifier: "RoadSnapSnappedTracePoint",
}) as any as S.Schema<RoadSnapSnappedTracePoint>;
export type RoadSnapSnappedTracePointList = RoadSnapSnappedTracePoint[];
const RoadSnapSnappedTracePointList = /*@__PURE__*/ S.Array(RoadSnapSnappedTracePoint);
export interface SnapToRoadsResponse {
  Notices: RoadSnapNotice[];
  PricingBucket: string;
  SnappedGeometry?: RoadSnapSnappedGeometry;
  SnappedGeometryFormat: GeometryFormat;
  SnappedTracePoints: RoadSnapSnappedTracePoint[];
}
const SnapToRoadsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Notices: RoadSnapNoticeList,
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    SnappedGeometry: S.optional(RoadSnapSnappedGeometry),
    SnappedGeometryFormat: GeometryFormat,
    SnappedTracePoints: RoadSnapSnappedTracePointList,
  }),
).annotate({ identifier: "SnapToRoadsResponse" }) as any as S.Schema<SnapToRoadsResponse>;
export type ValidationExceptionReason =
  | "UnknownOperation"
  | "Missing"
  | "CannotParse"
  | "FieldValidationFailed"
  | "Other"
  | "UnknownField"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
const ValidationExceptionField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Name: S.String, Message: S.String }).pipe(
    S.encodeKeys({ Name: "name", Message: "message" }),
  ),
).annotate({ identifier: "ValidationExceptionField" }) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ S.Array(ValidationExceptionField);
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
  input: CalculateIsolinesRequest,
  output: CalculateIsolinesResponse,
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
  input: CalculateRouteMatrixRequest,
  output: CalculateRouteMatrixResponse,
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
  input: CalculateRoutesRequest,
  output: CalculateRoutesResponse,
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
  input: OptimizeWaypointsRequest,
  output: OptimizeWaypointsResponse,
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
  input: SnapToRoadsRequest,
  output: SnapToRoadsResponse,
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
