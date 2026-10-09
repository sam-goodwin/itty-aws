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
  sdkId: "Geo Places",
  serviceShapeName: "PlacesService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "geo-places" });
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
          return e(`https://places.geo.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://places.geo-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://places.geo-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            `https://places.geo.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://places.geo.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://places.geo-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://places.geo-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            `https://places.geo.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://geo-places-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://geo-places-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://geo-places.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://geo-places.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export type SensitiveString = string | redacted.Redacted<string>;
export type Position = number[];
const Position = /*@__PURE__*/ S.Array(S.Number);
export type BoundingBox = number[];
const BoundingBox = Position as any as S.Schema<BoundingBox>;
export type DistanceMeters = number;
export interface FilterCircle {
  Center: number[];
  Radius: number;
}
const FilterCircle = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Center: Position, Radius: S.Number }),
).annotate({ identifier: "FilterCircle" }) as any as S.Schema<FilterCircle>;
export type CountryCode = string | redacted.Redacted<string>;
export type CountryCodeList = (string | redacted.Redacted<string>)[];
const CountryCodeList = /*@__PURE__*/ S.Array(SensitiveString);
export type AutocompleteFilterPlaceType =
  | "Locality"
  | "PostalCode"
  | "Street"
  | "Intersection"
  | "PointAddress"
  | "InterpolatedAddress"
  | "Country"
  | "Region"
  | (string & {});
const AutocompleteFilterPlaceType = S.String;

export type AutocompleteFilterPlaceTypeList = AutocompleteFilterPlaceType[];
const AutocompleteFilterPlaceTypeList = /*@__PURE__*/ S.Array(AutocompleteFilterPlaceType);
export interface AutocompleteFilter {
  BoundingBox?: number[];
  Circle?: FilterCircle;
  IncludeCountries?: (string | redacted.Redacted<string>)[];
  IncludePlaceTypes?: AutocompleteFilterPlaceType[];
}
const AutocompleteFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BoundingBox: S.optional(BoundingBox),
    Circle: S.optional(FilterCircle),
    IncludeCountries: S.optional(CountryCodeList),
    IncludePlaceTypes: S.optional(AutocompleteFilterPlaceTypeList),
  }),
).annotate({ identifier: "AutocompleteFilter" }) as any as S.Schema<AutocompleteFilter>;
export type PostalCodeMode =
  | "MergeAllSpannedLocalities"
  | "EnumerateSpannedLocalities"
  | "EnumerateSpannedDistricts"
  | (string & {});
const PostalCodeMode = S.String;

export type AutocompleteAdditionalFeature = "Core" | (string & {});
const AutocompleteAdditionalFeature = S.String;

export type AutocompleteAdditionalFeatureList = AutocompleteAdditionalFeature[];
const AutocompleteAdditionalFeatureList = /*@__PURE__*/ S.Array(AutocompleteAdditionalFeature);
export type LanguageTag = string;
export type AutocompleteIntendedUse = "SingleUse" | (string & {});
const AutocompleteIntendedUse = S.String;

export type ApiKey = string | redacted.Redacted<string>;
export interface AutocompleteRequest {
  QueryText: string | redacted.Redacted<string>;
  MaxResults?: number;
  BiasPosition?: number[];
  Filter?: AutocompleteFilter;
  PostalCodeMode?: PostalCodeMode;
  AdditionalFeatures?: AutocompleteAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: AutocompleteIntendedUse;
  Key?: string | redacted.Redacted<string>;
}
const AutocompleteRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    QueryText: SensitiveString,
    MaxResults: S.optional(S.Number),
    BiasPosition: S.optional(Position),
    Filter: S.optional(AutocompleteFilter),
    PostalCodeMode: S.optional(PostalCodeMode),
    AdditionalFeatures: S.optional(AutocompleteAdditionalFeatureList),
    Language: S.optional(S.String),
    PoliticalView: S.optional(SensitiveString),
    IntendedUse: S.optional(AutocompleteIntendedUse),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/autocomplete" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "AutocompleteRequest" }) as any as S.Schema<AutocompleteRequest>;
export type PlaceType =
  | "Country"
  | "Region"
  | "SubRegion"
  | "Locality"
  | "District"
  | "SubDistrict"
  | "PostalCode"
  | "Block"
  | "SubBlock"
  | "Intersection"
  | "Street"
  | "PointOfInterest"
  | "PointAddress"
  | "InterpolatedAddress"
  | "SecondaryAddress"
  | "InferredSecondaryAddress"
  | (string & {});
const PlaceType = S.String;

export type CountryCode2 = string | redacted.Redacted<string>;
export type CountryCode3 = string | redacted.Redacted<string>;
export interface Country {
  Code2?: string | redacted.Redacted<string>;
  Code3?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
const Country = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Code2: S.optional(SensitiveString),
    Code3: S.optional(SensitiveString),
    Name: S.optional(SensitiveString),
  }),
).annotate({ identifier: "Country" }) as any as S.Schema<Country>;
export interface Region {
  Code?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
const Region = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Code: S.optional(SensitiveString), Name: S.optional(SensitiveString) }),
).annotate({ identifier: "Region" }) as any as S.Schema<Region>;
export interface SubRegion {
  Code?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
const SubRegion = Region as any as S.Schema<SubRegion>;
export type IntersectionStreet = string;
export type IntersectionStreetList = string[];
const IntersectionStreetList = /*@__PURE__*/ S.Array(S.String);
export type TypePlacement = "BeforeBaseName" | "AfterBaseName" | (string & {});
const TypePlacement = S.String;

export type TypeSeparator = string;
export interface StreetComponents {
  BaseName?: string | redacted.Redacted<string>;
  Type?: string | redacted.Redacted<string>;
  TypePlacement?: TypePlacement;
  TypeSeparator?: string;
  Prefix?: string | redacted.Redacted<string>;
  Suffix?: string | redacted.Redacted<string>;
  Direction?: string | redacted.Redacted<string>;
  Language?: string;
}
const StreetComponents = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BaseName: S.optional(SensitiveString),
    Type: S.optional(SensitiveString),
    TypePlacement: S.optional(TypePlacement),
    TypeSeparator: S.optional(S.String),
    Prefix: S.optional(SensitiveString),
    Suffix: S.optional(SensitiveString),
    Direction: S.optional(SensitiveString),
    Language: S.optional(S.String),
  }),
).annotate({ identifier: "StreetComponents" }) as any as S.Schema<StreetComponents>;
export type StreetComponentsList = StreetComponents[];
const StreetComponentsList = /*@__PURE__*/ S.Array(StreetComponents);
export interface SecondaryAddressComponent {
  Number: string | redacted.Redacted<string>;
  Designator?: string | redacted.Redacted<string>;
}
const SecondaryAddressComponent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Number: SensitiveString, Designator: S.optional(SensitiveString) }),
).annotate({
  identifier: "SecondaryAddressComponent",
}) as any as S.Schema<SecondaryAddressComponent>;
export type SecondaryAddressComponentList = SecondaryAddressComponent[];
const SecondaryAddressComponentList = /*@__PURE__*/ S.Array(SecondaryAddressComponent);
export interface Address {
  Label?: string | redacted.Redacted<string>;
  Country?: Country;
  Region?: Region;
  SubRegion?: SubRegion;
  Locality?: string | redacted.Redacted<string>;
  District?: string | redacted.Redacted<string>;
  SubDistrict?: string | redacted.Redacted<string>;
  PostalCode?: string | redacted.Redacted<string>;
  Block?: string | redacted.Redacted<string>;
  SubBlock?: string | redacted.Redacted<string>;
  Intersection?: string[];
  Street?: string | redacted.Redacted<string>;
  StreetComponents?: StreetComponents[];
  AddressNumber?: string | redacted.Redacted<string>;
  Building?: string | redacted.Redacted<string>;
  SecondaryAddressComponents?: SecondaryAddressComponent[];
}
const Address = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Label: S.optional(SensitiveString),
    Country: S.optional(Country),
    Region: S.optional(Region),
    SubRegion: S.optional(SubRegion),
    Locality: S.optional(SensitiveString),
    District: S.optional(SensitiveString),
    SubDistrict: S.optional(SensitiveString),
    PostalCode: S.optional(SensitiveString),
    Block: S.optional(SensitiveString),
    SubBlock: S.optional(SensitiveString),
    Intersection: S.optional(IntersectionStreetList),
    Street: S.optional(SensitiveString),
    StreetComponents: S.optional(StreetComponentsList),
    AddressNumber: S.optional(SensitiveString),
    Building: S.optional(SensitiveString),
    SecondaryAddressComponents: S.optional(SecondaryAddressComponentList),
  }),
).annotate({ identifier: "Address" }) as any as S.Schema<Address>;
export interface Highlight {
  StartIndex?: number;
  EndIndex?: number;
  Value?: string | redacted.Redacted<string>;
}
const Highlight = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    StartIndex: S.optional(S.Number),
    EndIndex: S.optional(S.Number),
    Value: S.optional(SensitiveString),
  }),
).annotate({ identifier: "Highlight" }) as any as S.Schema<Highlight>;
export type HighlightList = Highlight[];
const HighlightList = /*@__PURE__*/ S.Array(Highlight);
export interface CountryHighlights {
  Code?: Highlight[];
  Name?: Highlight[];
}
const CountryHighlights = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Code: S.optional(HighlightList), Name: S.optional(HighlightList) }),
).annotate({ identifier: "CountryHighlights" }) as any as S.Schema<CountryHighlights>;
export interface RegionHighlights {
  Code?: Highlight[];
  Name?: Highlight[];
}
const RegionHighlights = CountryHighlights as any as S.Schema<RegionHighlights>;
export interface SubRegionHighlights {
  Code?: Highlight[];
  Name?: Highlight[];
}
const SubRegionHighlights = CountryHighlights as any as S.Schema<SubRegionHighlights>;
export type IntersectionHighlightsList = Highlight[][];
const IntersectionHighlightsList = /*@__PURE__*/ S.Array(HighlightList);
export interface AutocompleteAddressHighlights {
  Label?: Highlight[];
  Country?: CountryHighlights;
  Region?: RegionHighlights;
  SubRegion?: SubRegionHighlights;
  Locality?: Highlight[];
  District?: Highlight[];
  SubDistrict?: Highlight[];
  Street?: Highlight[];
  Block?: Highlight[];
  SubBlock?: Highlight[];
  Intersection?: Highlight[][];
  PostalCode?: Highlight[];
  AddressNumber?: Highlight[];
  Building?: Highlight[];
}
const AutocompleteAddressHighlights = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Label: S.optional(HighlightList),
    Country: S.optional(CountryHighlights),
    Region: S.optional(RegionHighlights),
    SubRegion: S.optional(SubRegionHighlights),
    Locality: S.optional(HighlightList),
    District: S.optional(HighlightList),
    SubDistrict: S.optional(HighlightList),
    Street: S.optional(HighlightList),
    Block: S.optional(HighlightList),
    SubBlock: S.optional(HighlightList),
    Intersection: S.optional(IntersectionHighlightsList),
    PostalCode: S.optional(HighlightList),
    AddressNumber: S.optional(HighlightList),
    Building: S.optional(HighlightList),
  }),
).annotate({
  identifier: "AutocompleteAddressHighlights",
}) as any as S.Schema<AutocompleteAddressHighlights>;
export interface AutocompleteHighlights {
  Title?: Highlight[];
  Address?: AutocompleteAddressHighlights;
}
const AutocompleteHighlights = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Title: S.optional(HighlightList),
    Address: S.optional(AutocompleteAddressHighlights),
  }),
).annotate({ identifier: "AutocompleteHighlights" }) as any as S.Schema<AutocompleteHighlights>;
export type SensitiveBoolean = boolean;
export interface AutocompleteResultItem {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  Distance?: number;
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  Highlights?: AutocompleteHighlights;
  EstimatedPointAddress?: boolean;
}
const AutocompleteResultItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString,
    PlaceType: PlaceType,
    Title: SensitiveString,
    Address: S.optional(Address),
    Distance: S.optional(S.Number),
    Language: S.optional(S.String),
    PoliticalView: S.optional(SensitiveString),
    Highlights: S.optional(AutocompleteHighlights),
    EstimatedPointAddress: S.optional(S.Boolean),
  }),
).annotate({ identifier: "AutocompleteResultItem" }) as any as S.Schema<AutocompleteResultItem>;
export type AutocompleteResultItemList = AutocompleteResultItem[];
const AutocompleteResultItemList = /*@__PURE__*/ S.Array(AutocompleteResultItem);
export interface AutocompleteResponse {
  PricingBucket: string;
  ResultItems?: AutocompleteResultItem[];
}
const AutocompleteResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    ResultItems: S.optional(AutocompleteResultItemList),
  }),
).annotate({ identifier: "AutocompleteResponse" }) as any as S.Schema<AutocompleteResponse>;
export interface GeocodeQueryComponents {
  Country?: string | redacted.Redacted<string>;
  Region?: string | redacted.Redacted<string>;
  SubRegion?: string | redacted.Redacted<string>;
  Locality?: string | redacted.Redacted<string>;
  District?: string | redacted.Redacted<string>;
  Street?: string | redacted.Redacted<string>;
  AddressNumber?: string | redacted.Redacted<string>;
  PostalCode?: string | redacted.Redacted<string>;
}
const GeocodeQueryComponents = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Country: S.optional(SensitiveString),
    Region: S.optional(SensitiveString),
    SubRegion: S.optional(SensitiveString),
    Locality: S.optional(SensitiveString),
    District: S.optional(SensitiveString),
    Street: S.optional(SensitiveString),
    AddressNumber: S.optional(SensitiveString),
    PostalCode: S.optional(SensitiveString),
  }),
).annotate({ identifier: "GeocodeQueryComponents" }) as any as S.Schema<GeocodeQueryComponents>;
export type GeocodeFilterPlaceType =
  | "Locality"
  | "PostalCode"
  | "Intersection"
  | "Street"
  | "PointAddress"
  | "InterpolatedAddress"
  | "SecondaryAddress"
  | "PointOfInterest"
  | "Country"
  | "Region"
  | (string & {});
export type GeocodeFilterPlaceTypeList = GeocodeFilterPlaceType[];
const GeocodeFilterPlaceTypeList =
  AutocompleteFilterPlaceTypeList as any as S.Schema<GeocodeFilterPlaceTypeList>;
export interface GeocodeFilter {
  IncludeCountries?: (string | redacted.Redacted<string>)[];
  IncludePlaceTypes?: GeocodeFilterPlaceType[];
}
const GeocodeFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    IncludeCountries: S.optional(CountryCodeList),
    IncludePlaceTypes: S.optional(GeocodeFilterPlaceTypeList),
  }),
).annotate({ identifier: "GeocodeFilter" }) as any as S.Schema<GeocodeFilter>;
export type GeocodeAdditionalFeature =
  | "TimeZone"
  | "Access"
  | "SecondaryAddresses"
  | "Intersections"
  | (string & {});
export type GeocodeAdditionalFeatureList = GeocodeAdditionalFeature[];
const GeocodeAdditionalFeatureList =
  AutocompleteFilterPlaceTypeList as any as S.Schema<GeocodeAdditionalFeatureList>;
export type GeocodeIntendedUse = "SingleUse" | "Storage" | (string & {});
const GeocodeIntendedUse = S.String;

export type AddressTranslationComponent =
  | "District"
  | "Locality"
  | "Region"
  | "SubRegion"
  | (string & {});
export type AddressTranslationComponentList = AddressTranslationComponent[];
const AddressTranslationComponentList =
  AutocompleteFilterPlaceTypeList as any as S.Schema<AddressTranslationComponentList>;
export type GeocodeAddressNamesMode = "Matched" | "Administrative" | (string & {});
const GeocodeAddressNamesMode = S.String;

export interface GeocodeRequest {
  QueryText?: string | redacted.Redacted<string>;
  QueryComponents?: GeocodeQueryComponents;
  MaxResults?: number;
  BiasPosition?: number[];
  Filter?: GeocodeFilter;
  AdditionalFeatures?: GeocodeAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: GeocodeIntendedUse;
  Key?: string | redacted.Redacted<string>;
  PostalCodeMode?: PostalCodeMode;
  AddressTranslations?: AddressTranslationComponent[];
  AddressNamesMode?: GeocodeAddressNamesMode;
}
const GeocodeRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    QueryText: S.optional(SensitiveString),
    QueryComponents: S.optional(GeocodeQueryComponents),
    MaxResults: S.optional(S.Number),
    BiasPosition: S.optional(Position),
    Filter: S.optional(GeocodeFilter),
    AdditionalFeatures: S.optional(GeocodeAdditionalFeatureList),
    Language: S.optional(S.String),
    PoliticalView: S.optional(SensitiveString),
    IntendedUse: S.optional(GeocodeIntendedUse),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    PostalCodeMode: S.optional(PostalCodeMode),
    AddressTranslations: S.optional(AddressTranslationComponentList),
    AddressNamesMode: S.optional(GeocodeAddressNamesMode),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/geocode" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "GeocodeRequest" }) as any as S.Schema<GeocodeRequest>;
export type PostalAuthority = "Usps" | (string & {});
const PostalAuthority = S.String;

export type PostalCodeType = "UspsZip" | "UspsZipPlus4" | (string & {});
const PostalCodeType = S.String;

export type ZipClassificationCode = "Military" | "PostOfficeBoxes" | "Unique" | (string & {});
const ZipClassificationCode = S.String;

export interface UspsZip {
  ZipClassificationCode?: ZipClassificationCode;
}
const UspsZip = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ZipClassificationCode: S.optional(ZipClassificationCode) }),
).annotate({ identifier: "UspsZip" }) as any as S.Schema<UspsZip>;
export type RecordTypeCode =
  | "Firm"
  | "General"
  | "HighRise"
  | "PostOfficeBox"
  | "Rural"
  | "Street"
  | (string & {});
const RecordTypeCode = S.String;

export interface UspsZipPlus4 {
  RecordTypeCode?: RecordTypeCode;
}
const UspsZipPlus4 = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RecordTypeCode: S.optional(RecordTypeCode) }),
).annotate({ identifier: "UspsZipPlus4" }) as any as S.Schema<UspsZipPlus4>;
export interface PostalCodeDetails {
  PostalCode?: string | redacted.Redacted<string>;
  PostalAuthority?: PostalAuthority;
  PostalCodeType?: PostalCodeType;
  UspsZip?: UspsZip;
  UspsZipPlus4?: UspsZipPlus4;
}
const PostalCodeDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PostalCode: S.optional(SensitiveString),
    PostalAuthority: S.optional(PostalAuthority),
    PostalCodeType: S.optional(PostalCodeType),
    UspsZip: S.optional(UspsZip),
    UspsZipPlus4: S.optional(UspsZipPlus4),
  }),
).annotate({ identifier: "PostalCodeDetails" }) as any as S.Schema<PostalCodeDetails>;
export type PostalCodeDetailsList = PostalCodeDetails[];
const PostalCodeDetailsList = /*@__PURE__*/ S.Array(PostalCodeDetails);
export interface Category {
  Id: string | redacted.Redacted<string>;
  Name: string | redacted.Redacted<string>;
  LocalizedName?: string | redacted.Redacted<string>;
  Primary?: boolean;
}
const Category = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Id: SensitiveString,
    Name: SensitiveString,
    LocalizedName: S.optional(SensitiveString),
    Primary: S.optional(S.Boolean),
  }),
).annotate({ identifier: "Category" }) as any as S.Schema<Category>;
export type CategoryList = Category[];
const CategoryList = /*@__PURE__*/ S.Array(Category);
export interface FoodType {
  LocalizedName: string | redacted.Redacted<string>;
  Id?: string | redacted.Redacted<string>;
  Primary?: boolean;
}
const FoodType = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    LocalizedName: SensitiveString,
    Id: S.optional(SensitiveString),
    Primary: S.optional(S.Boolean),
  }),
).annotate({ identifier: "FoodType" }) as any as S.Schema<FoodType>;
export type FoodTypeList = FoodType[];
const FoodTypeList = /*@__PURE__*/ S.Array(FoodType);
export type AccessPointType =
  | "Delivery"
  | "Emergency"
  | "Entrance"
  | "Loading"
  | "Other"
  | "Parking"
  | "Taxi"
  | (string & {});
const AccessPointType = S.String;

export interface AccessPoint {
  Position?: number[];
  Type?: AccessPointType;
  Primary?: boolean;
  Label?: string | redacted.Redacted<string>;
}
const AccessPoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Position: S.optional(Position),
    Type: S.optional(AccessPointType),
    Primary: S.optional(S.Boolean),
    Label: S.optional(SensitiveString),
  }),
).annotate({ identifier: "AccessPoint" }) as any as S.Schema<AccessPoint>;
export type AccessPointList = AccessPoint[];
const AccessPointList = /*@__PURE__*/ S.Array(AccessPoint);
export type DurationSeconds = number;
export interface TimeZone {
  Name: string | redacted.Redacted<string>;
  Offset?: string | redacted.Redacted<string>;
  OffsetSeconds?: number;
}
const TimeZone = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Name: SensitiveString,
    Offset: S.optional(SensitiveString),
    OffsetSeconds: S.optional(S.Number),
  }),
).annotate({ identifier: "TimeZone" }) as any as S.Schema<TimeZone>;
export type MatchScore = number;
export type MatchScoreList = number[];
const MatchScoreList = Position as any as S.Schema<MatchScoreList>;
export interface SecondaryAddressComponentMatchScore {
  Number?: number;
}
const SecondaryAddressComponentMatchScore = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Number: S.optional(S.Number) }),
).annotate({
  identifier: "SecondaryAddressComponentMatchScore",
}) as any as S.Schema<SecondaryAddressComponentMatchScore>;
export type SecondaryAddressComponentMatchScoreList = SecondaryAddressComponentMatchScore[];
const SecondaryAddressComponentMatchScoreList = /*@__PURE__*/ S.Array(
  SecondaryAddressComponentMatchScore,
);
export interface AddressComponentMatchScores {
  Country?: number;
  Region?: number;
  SubRegion?: number;
  Locality?: number;
  District?: number;
  SubDistrict?: number;
  PostalCode?: number;
  Block?: number;
  SubBlock?: number;
  Intersection?: number[];
  AddressNumber?: number;
  Building?: number;
  SecondaryAddressComponents?: SecondaryAddressComponentMatchScore[];
}
const AddressComponentMatchScores = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Country: S.optional(S.Number),
    Region: S.optional(S.Number),
    SubRegion: S.optional(S.Number),
    Locality: S.optional(S.Number),
    District: S.optional(S.Number),
    SubDistrict: S.optional(S.Number),
    PostalCode: S.optional(S.Number),
    Block: S.optional(S.Number),
    SubBlock: S.optional(S.Number),
    Intersection: S.optional(MatchScoreList),
    AddressNumber: S.optional(S.Number),
    Building: S.optional(S.Number),
    SecondaryAddressComponents: S.optional(SecondaryAddressComponentMatchScoreList),
  }),
).annotate({
  identifier: "AddressComponentMatchScores",
}) as any as S.Schema<AddressComponentMatchScores>;
export interface ComponentMatchScores {
  Title?: number;
  Address?: AddressComponentMatchScores;
}
const ComponentMatchScores = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Title: S.optional(S.Number), Address: S.optional(AddressComponentMatchScores) }),
).annotate({ identifier: "ComponentMatchScores" }) as any as S.Schema<ComponentMatchScores>;
export interface MatchScoreDetails {
  Overall?: number;
  Components?: ComponentMatchScores;
}
const MatchScoreDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Overall: S.optional(S.Number), Components: S.optional(ComponentMatchScores) }),
).annotate({ identifier: "MatchScoreDetails" }) as any as S.Schema<MatchScoreDetails>;
export interface ParsedQueryComponent {
  StartIndex?: number;
  EndIndex?: number;
  Value?: string | redacted.Redacted<string>;
  QueryComponent?: string | redacted.Redacted<string>;
}
const ParsedQueryComponent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    StartIndex: S.optional(S.Number),
    EndIndex: S.optional(S.Number),
    Value: S.optional(SensitiveString),
    QueryComponent: S.optional(SensitiveString),
  }),
).annotate({ identifier: "ParsedQueryComponent" }) as any as S.Schema<ParsedQueryComponent>;
export type ParsedQueryComponentList = ParsedQueryComponent[];
const ParsedQueryComponentList = /*@__PURE__*/ S.Array(ParsedQueryComponent);
export interface ParsedQuerySecondaryAddressComponent {
  StartIndex: number;
  EndIndex: number;
  Value: string | redacted.Redacted<string>;
  Number: string | redacted.Redacted<string>;
  Designator: string | redacted.Redacted<string>;
}
const ParsedQuerySecondaryAddressComponent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    StartIndex: S.Number,
    EndIndex: S.Number,
    Value: SensitiveString,
    Number: SensitiveString,
    Designator: SensitiveString,
  }),
).annotate({
  identifier: "ParsedQuerySecondaryAddressComponent",
}) as any as S.Schema<ParsedQuerySecondaryAddressComponent>;
export type ParsedQuerySecondaryAddressComponentList = ParsedQuerySecondaryAddressComponent[];
const ParsedQuerySecondaryAddressComponentList = /*@__PURE__*/ S.Array(
  ParsedQuerySecondaryAddressComponent,
);
export interface GeocodeParsedQueryAddressComponents {
  Country?: ParsedQueryComponent[];
  Region?: ParsedQueryComponent[];
  SubRegion?: ParsedQueryComponent[];
  Locality?: ParsedQueryComponent[];
  District?: ParsedQueryComponent[];
  SubDistrict?: ParsedQueryComponent[];
  PostalCode?: ParsedQueryComponent[];
  Block?: ParsedQueryComponent[];
  SubBlock?: ParsedQueryComponent[];
  Street?: ParsedQueryComponent[];
  AddressNumber?: ParsedQueryComponent[];
  Building?: ParsedQueryComponent[];
  SecondaryAddressComponents?: ParsedQuerySecondaryAddressComponent[];
  OtherComponents?: ParsedQueryComponent[];
}
const GeocodeParsedQueryAddressComponents = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Country: S.optional(ParsedQueryComponentList),
    Region: S.optional(ParsedQueryComponentList),
    SubRegion: S.optional(ParsedQueryComponentList),
    Locality: S.optional(ParsedQueryComponentList),
    District: S.optional(ParsedQueryComponentList),
    SubDistrict: S.optional(ParsedQueryComponentList),
    PostalCode: S.optional(ParsedQueryComponentList),
    Block: S.optional(ParsedQueryComponentList),
    SubBlock: S.optional(ParsedQueryComponentList),
    Street: S.optional(ParsedQueryComponentList),
    AddressNumber: S.optional(ParsedQueryComponentList),
    Building: S.optional(ParsedQueryComponentList),
    SecondaryAddressComponents: S.optional(ParsedQuerySecondaryAddressComponentList),
    OtherComponents: S.optional(ParsedQueryComponentList),
  }),
).annotate({
  identifier: "GeocodeParsedQueryAddressComponents",
}) as any as S.Schema<GeocodeParsedQueryAddressComponents>;
export interface GeocodeParsedQuery {
  Title?: ParsedQueryComponent[];
  Address?: GeocodeParsedQueryAddressComponents;
}
const GeocodeParsedQuery = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Title: S.optional(ParsedQueryComponentList),
    Address: S.optional(GeocodeParsedQueryAddressComponents),
  }),
).annotate({ identifier: "GeocodeParsedQuery" }) as any as S.Schema<GeocodeParsedQuery>;
export interface Intersection {
  PlaceId: string | redacted.Redacted<string>;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  Position?: number[];
  Distance?: number;
  RouteDistance?: number;
  MapView?: number[];
  AccessPoints?: AccessPoint[];
}
const Intersection = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString,
    Title: SensitiveString,
    Address: S.optional(Address),
    Position: S.optional(Position),
    Distance: S.optional(S.Number),
    RouteDistance: S.optional(S.Number),
    MapView: S.optional(BoundingBox),
    AccessPoints: S.optional(AccessPointList),
  }),
).annotate({ identifier: "Intersection" }) as any as S.Schema<Intersection>;
export type IntersectionList = Intersection[];
const IntersectionList = /*@__PURE__*/ S.Array(Intersection);
export interface RelatedPlace {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  Position?: number[];
  AccessPoints?: AccessPoint[];
}
const RelatedPlace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString,
    PlaceType: PlaceType,
    Title: SensitiveString,
    Address: S.optional(Address),
    Position: S.optional(Position),
    AccessPoints: S.optional(AccessPointList),
  }),
).annotate({ identifier: "RelatedPlace" }) as any as S.Schema<RelatedPlace>;
export type RelatedPlaceList = RelatedPlace[];
const RelatedPlaceList = /*@__PURE__*/ S.Array(RelatedPlace);
export type TranslationNameType =
  | "Abbreviation"
  | "AreaCode"
  | "BaseName"
  | "Exonym"
  | "Shortened"
  | "Synonym"
  | (string & {});
const TranslationNameType = S.String;

export interface TranslationName {
  Value: string | redacted.Redacted<string>;
  Language?: string;
  Type: TranslationNameType;
  Primary?: boolean;
  Transliterated?: boolean;
}
const TranslationName = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Value: SensitiveString,
    Language: S.optional(S.String),
    Type: TranslationNameType,
    Primary: S.optional(S.Boolean),
    Transliterated: S.optional(S.Boolean),
  }),
).annotate({ identifier: "TranslationName" }) as any as S.Schema<TranslationName>;
export type TranslationNameList = TranslationName[];
const TranslationNameList = /*@__PURE__*/ S.Array(TranslationName);
export type AdminNamesPreference = "Alternative" | "Primary" | (string & {});
const AdminNamesPreference = S.String;

export interface AdminNames {
  Names: TranslationName[];
  Preference?: AdminNamesPreference;
}
const AdminNames = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Names: TranslationNameList, Preference: S.optional(AdminNamesPreference) }),
).annotate({ identifier: "AdminNames" }) as any as S.Schema<AdminNames>;
export type AdminNamesList = AdminNames[];
const AdminNamesList = /*@__PURE__*/ S.Array(AdminNames);
export interface TranslationDetails {
  Locality?: AdminNames[];
  Region?: AdminNames[];
  District?: AdminNames[];
  SubRegion?: AdminNames[];
}
const TranslationDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Locality: S.optional(AdminNamesList),
    Region: S.optional(AdminNamesList),
    District: S.optional(AdminNamesList),
    SubRegion: S.optional(AdminNamesList),
  }),
).annotate({ identifier: "TranslationDetails" }) as any as S.Schema<TranslationDetails>;
export interface GeocodeResultItem {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  PostalCodeDetails?: PostalCodeDetails[];
  Position?: number[];
  Distance?: number;
  MapView?: number[];
  Categories?: Category[];
  FoodTypes?: FoodType[];
  AccessPoints?: AccessPoint[];
  TimeZone?: TimeZone;
  PoliticalView?: string | redacted.Redacted<string>;
  MatchScores?: MatchScoreDetails;
  ParsedQuery?: GeocodeParsedQuery;
  Intersections?: Intersection[];
  MainAddress?: RelatedPlace;
  SecondaryAddresses?: RelatedPlace[];
  Translations?: TranslationDetails;
  EstimatedPointAddress?: boolean;
}
const GeocodeResultItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString,
    PlaceType: PlaceType,
    Title: SensitiveString,
    Address: S.optional(Address),
    AddressNumberCorrected: S.optional(S.Boolean),
    PostalCodeDetails: S.optional(PostalCodeDetailsList),
    Position: S.optional(Position),
    Distance: S.optional(S.Number),
    MapView: S.optional(BoundingBox),
    Categories: S.optional(CategoryList),
    FoodTypes: S.optional(FoodTypeList),
    AccessPoints: S.optional(AccessPointList),
    TimeZone: S.optional(TimeZone),
    PoliticalView: S.optional(SensitiveString),
    MatchScores: S.optional(MatchScoreDetails),
    ParsedQuery: S.optional(GeocodeParsedQuery),
    Intersections: S.optional(IntersectionList),
    MainAddress: S.optional(RelatedPlace),
    SecondaryAddresses: S.optional(RelatedPlaceList),
    Translations: S.optional(TranslationDetails),
    EstimatedPointAddress: S.optional(S.Boolean),
  }),
).annotate({ identifier: "GeocodeResultItem" }) as any as S.Schema<GeocodeResultItem>;
export type GeocodeResultItemList = GeocodeResultItem[];
const GeocodeResultItemList = /*@__PURE__*/ S.Array(GeocodeResultItem);
export interface GeocodeResponse {
  PricingBucket: string;
  ResultItems?: GeocodeResultItem[];
}
const GeocodeResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    ResultItems: S.optional(GeocodeResultItemList),
  }),
).annotate({ identifier: "GeocodeResponse" }) as any as S.Schema<GeocodeResponse>;
export type GetPlaceAdditionalFeature =
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "Contact"
  | "SecondaryAddresses"
  | "CrossReferences"
  | (string & {});
export type GetPlaceAdditionalFeatureList = GetPlaceAdditionalFeature[];
const GetPlaceAdditionalFeatureList =
  AutocompleteFilterPlaceTypeList as any as S.Schema<GetPlaceAdditionalFeatureList>;
export type GetPlaceIntendedUse = "SingleUse" | "Storage" | (string & {});
const GetPlaceIntendedUse = S.String;

export type GetPlaceAddressNamesMode = "Administrative" | (string & {});
const GetPlaceAddressNamesMode = S.String;

export interface GetPlaceRequest {
  PlaceId: string | redacted.Redacted<string>;
  AdditionalFeatures?: GetPlaceAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: GetPlaceIntendedUse;
  Key?: string | redacted.Redacted<string>;
  AddressNamesMode?: GetPlaceAddressNamesMode;
}
const GetPlaceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString.pipe(T.HttpLabel("PlaceId")),
    AdditionalFeatures: S.optional(GetPlaceAdditionalFeatureList).pipe(
      T.HttpQuery("additional-features"),
    ),
    Language: S.optional(S.String).pipe(T.HttpQuery("language")),
    PoliticalView: S.optional(SensitiveString).pipe(T.HttpQuery("political-view")),
    IntendedUse: S.optional(GetPlaceIntendedUse).pipe(T.HttpQuery("intended-use")),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    AddressNamesMode: S.optional(GetPlaceAddressNamesMode).pipe(T.HttpQuery("address-names-mode")),
  }).pipe(
    T.all(T.Http({ method: "GET", uri: "/v2/place/{PlaceId}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetPlaceRequest" }) as any as S.Schema<GetPlaceRequest>;
export interface BusinessChain {
  Name?: string | redacted.Redacted<string>;
  Id?: string | redacted.Redacted<string>;
}
const BusinessChain = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Name: S.optional(SensitiveString), Id: S.optional(SensitiveString) }),
).annotate({ identifier: "BusinessChain" }) as any as S.Schema<BusinessChain>;
export type BusinessChainList = BusinessChain[];
const BusinessChainList = /*@__PURE__*/ S.Array(BusinessChain);
export interface ContactDetails {
  Label?: string | redacted.Redacted<string>;
  Value?: string | redacted.Redacted<string>;
  Categories?: Category[];
}
const ContactDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Label: S.optional(SensitiveString),
    Value: S.optional(SensitiveString),
    Categories: S.optional(CategoryList),
  }),
).annotate({ identifier: "ContactDetails" }) as any as S.Schema<ContactDetails>;
export type ContactDetailsList = ContactDetails[];
const ContactDetailsList = /*@__PURE__*/ S.Array(ContactDetails);
export interface Contacts {
  Phones?: ContactDetails[];
  Faxes?: ContactDetails[];
  Websites?: ContactDetails[];
  Emails?: ContactDetails[];
}
const Contacts = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Phones: S.optional(ContactDetailsList),
    Faxes: S.optional(ContactDetailsList),
    Websites: S.optional(ContactDetailsList),
    Emails: S.optional(ContactDetailsList),
  }),
).annotate({ identifier: "Contacts" }) as any as S.Schema<Contacts>;
export type OpeningHoursDisplay = string | redacted.Redacted<string>;
export type OpeningHoursDisplayList = (string | redacted.Redacted<string>)[];
const OpeningHoursDisplayList = CountryCodeList as any as S.Schema<OpeningHoursDisplayList>;
export interface OpeningHoursComponents {
  OpenTime?: string | redacted.Redacted<string>;
  OpenDuration?: string | redacted.Redacted<string>;
  Recurrence?: string | redacted.Redacted<string>;
}
const OpeningHoursComponents = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    OpenTime: S.optional(SensitiveString),
    OpenDuration: S.optional(SensitiveString),
    Recurrence: S.optional(SensitiveString),
  }),
).annotate({ identifier: "OpeningHoursComponents" }) as any as S.Schema<OpeningHoursComponents>;
export type OpeningHoursComponentsList = OpeningHoursComponents[];
const OpeningHoursComponentsList = /*@__PURE__*/ S.Array(OpeningHoursComponents);
export interface OpeningHours {
  Display?: (string | redacted.Redacted<string>)[];
  OpenNow?: boolean;
  Components?: OpeningHoursComponents[];
  Categories?: Category[];
}
const OpeningHours = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Display: S.optional(OpeningHoursDisplayList),
    OpenNow: S.optional(S.Boolean),
    Components: S.optional(OpeningHoursComponentsList),
    Categories: S.optional(CategoryList),
  }),
).annotate({ identifier: "OpeningHours" }) as any as S.Schema<OpeningHours>;
export type OpeningHoursList = OpeningHours[];
const OpeningHoursList = /*@__PURE__*/ S.Array(OpeningHours);
export interface AccessRestriction {
  Restricted?: boolean;
  Categories?: Category[];
}
const AccessRestriction = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Restricted: S.optional(S.Boolean), Categories: S.optional(CategoryList) }),
).annotate({ identifier: "AccessRestriction" }) as any as S.Schema<AccessRestriction>;
export type AccessRestrictionList = AccessRestriction[];
const AccessRestrictionList = /*@__PURE__*/ S.Array(AccessRestriction);
export interface PhonemeTranscription {
  Value?: string | redacted.Redacted<string>;
  Language?: string;
  Preferred?: boolean;
}
const PhonemeTranscription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Value: S.optional(SensitiveString),
    Language: S.optional(S.String),
    Preferred: S.optional(S.Boolean),
  }),
).annotate({ identifier: "PhonemeTranscription" }) as any as S.Schema<PhonemeTranscription>;
export type PhonemeTranscriptionList = PhonemeTranscription[];
const PhonemeTranscriptionList = /*@__PURE__*/ S.Array(PhonemeTranscription);
export interface AddressComponentPhonemes {
  Country?: PhonemeTranscription[];
  Region?: PhonemeTranscription[];
  SubRegion?: PhonemeTranscription[];
  Locality?: PhonemeTranscription[];
  District?: PhonemeTranscription[];
  SubDistrict?: PhonemeTranscription[];
  Block?: PhonemeTranscription[];
  SubBlock?: PhonemeTranscription[];
  Street?: PhonemeTranscription[];
}
const AddressComponentPhonemes = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Country: S.optional(PhonemeTranscriptionList),
    Region: S.optional(PhonemeTranscriptionList),
    SubRegion: S.optional(PhonemeTranscriptionList),
    Locality: S.optional(PhonemeTranscriptionList),
    District: S.optional(PhonemeTranscriptionList),
    SubDistrict: S.optional(PhonemeTranscriptionList),
    Block: S.optional(PhonemeTranscriptionList),
    SubBlock: S.optional(PhonemeTranscriptionList),
    Street: S.optional(PhonemeTranscriptionList),
  }),
).annotate({ identifier: "AddressComponentPhonemes" }) as any as S.Schema<AddressComponentPhonemes>;
export interface PhonemeDetails {
  Title?: PhonemeTranscription[];
  Address?: AddressComponentPhonemes;
}
const PhonemeDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Title: S.optional(PhonemeTranscriptionList),
    Address: S.optional(AddressComponentPhonemes),
  }),
).annotate({ identifier: "PhonemeDetails" }) as any as S.Schema<PhonemeDetails>;
export type PlaceAttribute = "DriveThrough" | (string & {});
export type PlaceAttributeList = PlaceAttribute[];
const PlaceAttributeList = AutocompleteFilterPlaceTypeList as any as S.Schema<PlaceAttributeList>;
export interface CrossReference {
  Source: string | redacted.Redacted<string>;
  SourcePlaceId: string | redacted.Redacted<string>;
  SourceCategories?: Category[];
}
const CrossReference = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Source: SensitiveString,
    SourcePlaceId: SensitiveString,
    SourceCategories: S.optional(CategoryList),
  }),
).annotate({ identifier: "CrossReference" }) as any as S.Schema<CrossReference>;
export type CrossReferenceList = CrossReference[];
const CrossReferenceList = /*@__PURE__*/ S.Array(CrossReference);
export interface GetPlaceResponse {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  PricingBucket: string;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  PostalCodeDetails?: PostalCodeDetails[];
  Position?: number[];
  MapView?: number[];
  Categories?: Category[];
  FoodTypes?: FoodType[];
  BusinessChains?: BusinessChain[];
  Contacts?: Contacts;
  OpeningHours?: OpeningHours[];
  AccessPoints?: AccessPoint[];
  AccessRestrictions?: AccessRestriction[];
  TimeZone?: TimeZone;
  PoliticalView?: string | redacted.Redacted<string>;
  Phonemes?: PhonemeDetails;
  MainAddress?: RelatedPlace;
  SecondaryAddresses?: RelatedPlace[];
  PlaceAttributes?: PlaceAttribute[];
  EstimatedPointAddress?: boolean;
  CrossReferences?: CrossReference[];
}
const GetPlaceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString,
    PlaceType: PlaceType,
    Title: SensitiveString,
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    Address: S.optional(Address),
    AddressNumberCorrected: S.optional(S.Boolean),
    PostalCodeDetails: S.optional(PostalCodeDetailsList),
    Position: S.optional(Position),
    MapView: S.optional(BoundingBox),
    Categories: S.optional(CategoryList),
    FoodTypes: S.optional(FoodTypeList),
    BusinessChains: S.optional(BusinessChainList),
    Contacts: S.optional(Contacts),
    OpeningHours: S.optional(OpeningHoursList),
    AccessPoints: S.optional(AccessPointList),
    AccessRestrictions: S.optional(AccessRestrictionList),
    TimeZone: S.optional(TimeZone),
    PoliticalView: S.optional(SensitiveString),
    Phonemes: S.optional(PhonemeDetails),
    MainAddress: S.optional(RelatedPlace),
    SecondaryAddresses: S.optional(RelatedPlaceList),
    PlaceAttributes: S.optional(PlaceAttributeList),
    EstimatedPointAddress: S.optional(S.Boolean),
    CrossReferences: S.optional(CrossReferenceList),
  }),
).annotate({ identifier: "GetPlaceResponse" }) as any as S.Schema<GetPlaceResponse>;
export type ReverseGeocodeFilterPlaceType =
  | "Locality"
  | "Intersection"
  | "Street"
  | "PointAddress"
  | "InterpolatedAddress"
  | "SecondaryAddress"
  | "PointOfInterest"
  | (string & {});
export type ReverseGeocodeFilterPlaceTypeList = ReverseGeocodeFilterPlaceType[];
const ReverseGeocodeFilterPlaceTypeList =
  AutocompleteAdditionalFeatureList as any as S.Schema<ReverseGeocodeFilterPlaceTypeList>;
export interface ReverseGeocodeFilter {
  IncludePlaceTypes?: ReverseGeocodeFilterPlaceType[];
}
const ReverseGeocodeFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ IncludePlaceTypes: S.optional(ReverseGeocodeFilterPlaceTypeList) }),
).annotate({ identifier: "ReverseGeocodeFilter" }) as any as S.Schema<ReverseGeocodeFilter>;
export type ReverseGeocodeAdditionalFeature =
  | "TimeZone"
  | "Access"
  | "Intersections"
  | (string & {});
export type ReverseGeocodeAdditionalFeatureList = ReverseGeocodeAdditionalFeature[];
const ReverseGeocodeAdditionalFeatureList =
  AutocompleteAdditionalFeatureList as any as S.Schema<ReverseGeocodeAdditionalFeatureList>;
export type ReverseGeocodeIntendedUse = "SingleUse" | "Storage" | (string & {});
const ReverseGeocodeIntendedUse = S.String;

export type Heading = number;
export type ReverseGeocodeAddressNamesMode = "Administrative" | (string & {});
const ReverseGeocodeAddressNamesMode = S.String;

export interface ReverseGeocodeRequest {
  QueryPosition: number[];
  QueryRadius?: number;
  MaxResults?: number;
  Filter?: ReverseGeocodeFilter;
  AdditionalFeatures?: ReverseGeocodeAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: ReverseGeocodeIntendedUse;
  Key?: string | redacted.Redacted<string>;
  Heading?: number;
  AddressNamesMode?: ReverseGeocodeAddressNamesMode;
}
const ReverseGeocodeRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    QueryPosition: Position,
    QueryRadius: S.optional(S.Number),
    MaxResults: S.optional(S.Number),
    Filter: S.optional(ReverseGeocodeFilter),
    AdditionalFeatures: S.optional(ReverseGeocodeAdditionalFeatureList),
    Language: S.optional(S.String),
    PoliticalView: S.optional(SensitiveString),
    IntendedUse: S.optional(ReverseGeocodeIntendedUse),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
    Heading: S.optional(S.Number),
    AddressNamesMode: S.optional(ReverseGeocodeAddressNamesMode),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/reverse-geocode" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "ReverseGeocodeRequest" }) as any as S.Schema<ReverseGeocodeRequest>;
export interface ReverseGeocodeResultItem {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  PostalCodeDetails?: PostalCodeDetails[];
  Position?: number[];
  Distance?: number;
  MapView?: number[];
  Categories?: Category[];
  FoodTypes?: FoodType[];
  AccessPoints?: AccessPoint[];
  TimeZone?: TimeZone;
  PoliticalView?: string | redacted.Redacted<string>;
  Intersections?: Intersection[];
  MainAddress?: RelatedPlace;
  EstimatedPointAddress?: boolean;
}
const ReverseGeocodeResultItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString,
    PlaceType: PlaceType,
    Title: SensitiveString,
    Address: S.optional(Address),
    AddressNumberCorrected: S.optional(S.Boolean),
    PostalCodeDetails: S.optional(PostalCodeDetailsList),
    Position: S.optional(Position),
    Distance: S.optional(S.Number),
    MapView: S.optional(BoundingBox),
    Categories: S.optional(CategoryList),
    FoodTypes: S.optional(FoodTypeList),
    AccessPoints: S.optional(AccessPointList),
    TimeZone: S.optional(TimeZone),
    PoliticalView: S.optional(SensitiveString),
    Intersections: S.optional(IntersectionList),
    MainAddress: S.optional(RelatedPlace),
    EstimatedPointAddress: S.optional(S.Boolean),
  }),
).annotate({ identifier: "ReverseGeocodeResultItem" }) as any as S.Schema<ReverseGeocodeResultItem>;
export type ReverseGeocodeResultItemList = ReverseGeocodeResultItem[];
const ReverseGeocodeResultItemList = /*@__PURE__*/ S.Array(ReverseGeocodeResultItem);
export interface ReverseGeocodeResponse {
  PricingBucket: string;
  ResultItems?: ReverseGeocodeResultItem[];
}
const ReverseGeocodeResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    ResultItems: S.optional(ReverseGeocodeResultItemList),
  }),
).annotate({ identifier: "ReverseGeocodeResponse" }) as any as S.Schema<ReverseGeocodeResponse>;
export type FilterCategoryList = (string | redacted.Redacted<string>)[];
const FilterCategoryList = CountryCodeList as any as S.Schema<FilterCategoryList>;
export type FilterBusinessChainList = (string | redacted.Redacted<string>)[];
const FilterBusinessChainList = CountryCodeList as any as S.Schema<FilterBusinessChainList>;
export type FilterFoodTypeList = (string | redacted.Redacted<string>)[];
const FilterFoodTypeList = CountryCodeList as any as S.Schema<FilterFoodTypeList>;
export interface SearchNearbyFilter {
  BoundingBox?: number[];
  IncludeCountries?: (string | redacted.Redacted<string>)[];
  IncludeCategories?: (string | redacted.Redacted<string>)[];
  ExcludeCategories?: (string | redacted.Redacted<string>)[];
  IncludeBusinessChains?: (string | redacted.Redacted<string>)[];
  ExcludeBusinessChains?: (string | redacted.Redacted<string>)[];
  IncludeFoodTypes?: (string | redacted.Redacted<string>)[];
  ExcludeFoodTypes?: (string | redacted.Redacted<string>)[];
}
const SearchNearbyFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BoundingBox: S.optional(BoundingBox),
    IncludeCountries: S.optional(CountryCodeList),
    IncludeCategories: S.optional(FilterCategoryList),
    ExcludeCategories: S.optional(FilterCategoryList),
    IncludeBusinessChains: S.optional(FilterBusinessChainList),
    ExcludeBusinessChains: S.optional(FilterBusinessChainList),
    IncludeFoodTypes: S.optional(FilterFoodTypeList),
    ExcludeFoodTypes: S.optional(FilterFoodTypeList),
  }),
).annotate({ identifier: "SearchNearbyFilter" }) as any as S.Schema<SearchNearbyFilter>;
export type SearchNearbyAdditionalFeature =
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "Contact"
  | "CrossReferences"
  | (string & {});
export type SearchNearbyAdditionalFeatureList = SearchNearbyAdditionalFeature[];
const SearchNearbyAdditionalFeatureList =
  AutocompleteAdditionalFeatureList as any as S.Schema<SearchNearbyAdditionalFeatureList>;
export type SearchNearbyIntendedUse = "SingleUse" | "Storage" | (string & {});
const SearchNearbyIntendedUse = S.String;

export type Token = string;
export interface SearchNearbyRequest {
  QueryPosition: number[];
  QueryRadius?: number;
  MaxResults?: number;
  Filter?: SearchNearbyFilter;
  AdditionalFeatures?: SearchNearbyAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: SearchNearbyIntendedUse;
  NextToken?: string;
  Key?: string | redacted.Redacted<string>;
}
const SearchNearbyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    QueryPosition: Position,
    QueryRadius: S.optional(S.Number),
    MaxResults: S.optional(S.Number),
    Filter: S.optional(SearchNearbyFilter),
    AdditionalFeatures: S.optional(SearchNearbyAdditionalFeatureList),
    Language: S.optional(S.String),
    PoliticalView: S.optional(SensitiveString),
    IntendedUse: S.optional(SearchNearbyIntendedUse),
    NextToken: S.optional(S.String),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/search-nearby" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "SearchNearbyRequest" }) as any as S.Schema<SearchNearbyRequest>;
export interface SearchNearbyResultItem {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  Position?: number[];
  Distance?: number;
  MapView?: number[];
  Categories?: Category[];
  FoodTypes?: FoodType[];
  BusinessChains?: BusinessChain[];
  Contacts?: Contacts;
  OpeningHours?: OpeningHours[];
  AccessPoints?: AccessPoint[];
  AccessRestrictions?: AccessRestriction[];
  TimeZone?: TimeZone;
  PoliticalView?: string | redacted.Redacted<string>;
  Phonemes?: PhonemeDetails;
  PlaceAttributes?: PlaceAttribute[];
  CrossReferences?: CrossReference[];
}
const SearchNearbyResultItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: SensitiveString,
    PlaceType: PlaceType,
    Title: SensitiveString,
    Address: S.optional(Address),
    AddressNumberCorrected: S.optional(S.Boolean),
    Position: S.optional(Position),
    Distance: S.optional(S.Number),
    MapView: S.optional(BoundingBox),
    Categories: S.optional(CategoryList),
    FoodTypes: S.optional(FoodTypeList),
    BusinessChains: S.optional(BusinessChainList),
    Contacts: S.optional(Contacts),
    OpeningHours: S.optional(OpeningHoursList),
    AccessPoints: S.optional(AccessPointList),
    AccessRestrictions: S.optional(AccessRestrictionList),
    TimeZone: S.optional(TimeZone),
    PoliticalView: S.optional(SensitiveString),
    Phonemes: S.optional(PhonemeDetails),
    PlaceAttributes: S.optional(PlaceAttributeList),
    CrossReferences: S.optional(CrossReferenceList),
  }),
).annotate({ identifier: "SearchNearbyResultItem" }) as any as S.Schema<SearchNearbyResultItem>;
export type SearchNearbyResultItemList = SearchNearbyResultItem[];
const SearchNearbyResultItemList = /*@__PURE__*/ S.Array(SearchNearbyResultItem);
export interface SearchNearbyResponse {
  PricingBucket: string;
  ResultItems?: SearchNearbyResultItem[];
  NextToken?: string;
}
const SearchNearbyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    ResultItems: S.optional(SearchNearbyResultItemList),
    NextToken: S.optional(S.String),
  }),
).annotate({ identifier: "SearchNearbyResponse" }) as any as S.Schema<SearchNearbyResponse>;
export interface SearchTextFilter {
  BoundingBox?: number[];
  Circle?: FilterCircle;
  IncludeCountries?: (string | redacted.Redacted<string>)[];
}
const SearchTextFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BoundingBox: S.optional(BoundingBox),
    Circle: S.optional(FilterCircle),
    IncludeCountries: S.optional(CountryCodeList),
  }),
).annotate({ identifier: "SearchTextFilter" }) as any as S.Schema<SearchTextFilter>;
export type SearchTextAdditionalFeature =
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "Contact"
  | "CrossReferences"
  | (string & {});
export type SearchTextAdditionalFeatureList = SearchTextAdditionalFeature[];
const SearchTextAdditionalFeatureList =
  AutocompleteFilterPlaceTypeList as any as S.Schema<SearchTextAdditionalFeatureList>;
export type SearchTextIntendedUse = "SingleUse" | "Storage" | (string & {});
const SearchTextIntendedUse = S.String;

export type SearchTextTravelMode = "Car" | "Scooter" | "Truck" | (string & {});
const SearchTextTravelMode = S.String;

export interface SearchTextRequest {
  QueryText?: string | redacted.Redacted<string>;
  QueryId?: string | redacted.Redacted<string>;
  MaxResults?: number;
  BiasPosition?: number[];
  Filter?: SearchTextFilter;
  AdditionalFeatures?: SearchTextAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: SearchTextIntendedUse;
  NextToken?: string;
  TravelMode?: SearchTextTravelMode;
  Key?: string | redacted.Redacted<string>;
}
const SearchTextRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    QueryText: S.optional(SensitiveString),
    QueryId: S.optional(SensitiveString),
    MaxResults: S.optional(S.Number),
    BiasPosition: S.optional(Position),
    Filter: S.optional(SearchTextFilter),
    AdditionalFeatures: S.optional(SearchTextAdditionalFeatureList),
    Language: S.optional(S.String),
    PoliticalView: S.optional(SensitiveString),
    IntendedUse: S.optional(SearchTextIntendedUse),
    NextToken: S.optional(S.String),
    TravelMode: S.optional(SearchTextTravelMode),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/search-text" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "SearchTextRequest" }) as any as S.Schema<SearchTextRequest>;
export interface SearchTextResultItem {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  Position?: number[];
  Distance?: number;
  MapView?: number[];
  Categories?: Category[];
  FoodTypes?: FoodType[];
  BusinessChains?: BusinessChain[];
  Contacts?: Contacts;
  OpeningHours?: OpeningHours[];
  AccessPoints?: AccessPoint[];
  AccessRestrictions?: AccessRestriction[];
  TimeZone?: TimeZone;
  PoliticalView?: string | redacted.Redacted<string>;
  Phonemes?: PhonemeDetails;
  PlaceAttributes?: PlaceAttribute[];
  CrossReferences?: CrossReference[];
}
export type SearchTextResultItemList = SearchTextResultItem[];
export interface SearchTextResponse {
  PricingBucket: string;
  ResultItems?: SearchTextResultItem[];
  NextToken?: string;
}
const SearchTextResponse = SearchNearbyResponse as any as S.Schema<SearchTextResponse>;
export interface SuggestFilter {
  BoundingBox?: number[];
  Circle?: FilterCircle;
  IncludeCountries?: (string | redacted.Redacted<string>)[];
}
const SuggestFilter = SearchTextFilter as any as S.Schema<SuggestFilter>;
export type SuggestAdditionalFeature =
  | "Core"
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "CrossReferences"
  | (string & {});
export type SuggestAdditionalFeatureList = SuggestAdditionalFeature[];
const SuggestAdditionalFeatureList =
  AutocompleteFilterPlaceTypeList as any as S.Schema<SuggestAdditionalFeatureList>;
export type SuggestIntendedUse = "SingleUse" | (string & {});
const SuggestIntendedUse = S.String;

export type SuggestTravelMode = "Car" | "Scooter" | "Truck" | (string & {});
const SuggestTravelMode = S.String;

export interface SuggestRequest {
  QueryText: string | redacted.Redacted<string>;
  MaxResults?: number;
  MaxQueryRefinements?: number;
  BiasPosition?: number[];
  Filter?: SuggestFilter;
  AdditionalFeatures?: SuggestAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: SuggestIntendedUse;
  TravelMode?: SuggestTravelMode;
  Key?: string | redacted.Redacted<string>;
}
const SuggestRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    QueryText: SensitiveString,
    MaxResults: S.optional(S.Number),
    MaxQueryRefinements: S.optional(S.Number),
    BiasPosition: S.optional(Position),
    Filter: S.optional(SuggestFilter),
    AdditionalFeatures: S.optional(SuggestAdditionalFeatureList),
    Language: S.optional(S.String),
    PoliticalView: S.optional(SensitiveString),
    IntendedUse: S.optional(SuggestIntendedUse),
    TravelMode: S.optional(SuggestTravelMode),
    Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/v2/suggest" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "SuggestRequest" }) as any as S.Schema<SuggestRequest>;
export type SuggestResultItemType = "Place" | "Query" | (string & {});
const SuggestResultItemType = S.String;

export interface SuggestPlaceResult {
  PlaceId?: string | redacted.Redacted<string>;
  PlaceType?: PlaceType;
  Address?: Address;
  Position?: number[];
  Distance?: number;
  MapView?: number[];
  Categories?: Category[];
  FoodTypes?: FoodType[];
  BusinessChains?: BusinessChain[];
  AccessPoints?: AccessPoint[];
  AccessRestrictions?: AccessRestriction[];
  TimeZone?: TimeZone;
  PoliticalView?: string | redacted.Redacted<string>;
  Phonemes?: PhonemeDetails;
  PlaceAttributes?: PlaceAttribute[];
  CrossReferences?: CrossReference[];
}
const SuggestPlaceResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PlaceId: S.optional(SensitiveString),
    PlaceType: S.optional(PlaceType),
    Address: S.optional(Address),
    Position: S.optional(Position),
    Distance: S.optional(S.Number),
    MapView: S.optional(BoundingBox),
    Categories: S.optional(CategoryList),
    FoodTypes: S.optional(FoodTypeList),
    BusinessChains: S.optional(BusinessChainList),
    AccessPoints: S.optional(AccessPointList),
    AccessRestrictions: S.optional(AccessRestrictionList),
    TimeZone: S.optional(TimeZone),
    PoliticalView: S.optional(SensitiveString),
    Phonemes: S.optional(PhonemeDetails),
    PlaceAttributes: S.optional(PlaceAttributeList),
    CrossReferences: S.optional(CrossReferenceList),
  }),
).annotate({ identifier: "SuggestPlaceResult" }) as any as S.Schema<SuggestPlaceResult>;
export type QueryType = "Category" | "BusinessChain" | (string & {});
const QueryType = S.String;

export interface SuggestQueryResult {
  QueryId?: string | redacted.Redacted<string>;
  QueryType?: QueryType;
}
const SuggestQueryResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ QueryId: S.optional(SensitiveString), QueryType: S.optional(QueryType) }),
).annotate({ identifier: "SuggestQueryResult" }) as any as S.Schema<SuggestQueryResult>;
export interface SuggestAddressHighlights {
  Label?: Highlight[];
}
const SuggestAddressHighlights = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Label: S.optional(HighlightList) }),
).annotate({ identifier: "SuggestAddressHighlights" }) as any as S.Schema<SuggestAddressHighlights>;
export interface SuggestHighlights {
  Title?: Highlight[];
  Address?: SuggestAddressHighlights;
}
const SuggestHighlights = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Title: S.optional(HighlightList), Address: S.optional(SuggestAddressHighlights) }),
).annotate({ identifier: "SuggestHighlights" }) as any as S.Schema<SuggestHighlights>;
export interface SuggestResultItem {
  Title: string | redacted.Redacted<string>;
  SuggestResultItemType: SuggestResultItemType;
  Place?: SuggestPlaceResult;
  Query?: SuggestQueryResult;
  Highlights?: SuggestHighlights;
}
const SuggestResultItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Title: SensitiveString,
    SuggestResultItemType: SuggestResultItemType,
    Place: S.optional(SuggestPlaceResult),
    Query: S.optional(SuggestQueryResult),
    Highlights: S.optional(SuggestHighlights),
  }),
).annotate({ identifier: "SuggestResultItem" }) as any as S.Schema<SuggestResultItem>;
export type SuggestResultItemList = SuggestResultItem[];
const SuggestResultItemList = /*@__PURE__*/ S.Array(SuggestResultItem);
export interface QueryRefinement {
  RefinedTerm: string | redacted.Redacted<string>;
  OriginalTerm: string | redacted.Redacted<string>;
  StartIndex: number;
  EndIndex: number;
}
const QueryRefinement = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RefinedTerm: SensitiveString,
    OriginalTerm: SensitiveString,
    StartIndex: S.Number,
    EndIndex: S.Number,
  }),
).annotate({ identifier: "QueryRefinement" }) as any as S.Schema<QueryRefinement>;
export type QueryRefinementList = QueryRefinement[];
const QueryRefinementList = /*@__PURE__*/ S.Array(QueryRefinement);
export interface SuggestResponse {
  PricingBucket: string;
  ResultItems?: SuggestResultItem[];
  QueryRefinements?: QueryRefinement[];
}
const SuggestResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
    ResultItems: S.optional(SuggestResultItemList),
    QueryRefinements: S.optional(QueryRefinementList),
  }),
).annotate({ identifier: "SuggestResponse" }) as any as S.Schema<SuggestResponse>;
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
export type AutocompleteError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `Autocomplete` completes potential places and addresses as the user types, based on the partial input. The API enhances the efficiency and accuracy of address by completing query based on a few entered keystrokes. It helps you by completing partial queries with valid address completion. Also, the API supports the filtering of results based on geographic location, country, or specific place types, and can be tailored using optional parameters like language and political views. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for GrabMaps customers.
 *
 * For more information, see Autocomplete in the *Amazon Location Service Developer Guide*.
 */
export const autocomplete: API.OperationMethod<
  AutocompleteRequest,
  AutocompleteResponse,
  AutocompleteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AutocompleteRequest,
  output: AutocompleteResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Autocomplete",
}));

export type GeocodeError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `Geocode` converts a textual address or place into geographic coordinates. You can obtain geographic coordinates, address component, and other related information. It supports flexible queries, including free-form text or structured queries with components like street names, postal codes, and regions. The Geocode API can also provide additional features such as time zone information and the inclusion of political views. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for GrabMaps customers.
 *
 * For more information, see Geocode in the *Amazon Location Service Developer Guide*.
 */
export const geocode: API.OperationMethod<
  GeocodeRequest,
  GeocodeResponse,
  GeocodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GeocodeRequest,
  output: GeocodeResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Geocode",
}));

export type GetPlaceError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `GetPlace` finds a place by its unique ID. A `PlaceId` is returned by other place operations.
 *
 * For more information, see GetPlace in the *Amazon Location Service Developer Guide*.
 */
export const getPlace: API.OperationMethod<
  GetPlaceRequest,
  GetPlaceResponse,
  GetPlaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPlaceRequest,
  output: GetPlaceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPlace",
}));

export type ReverseGeocodeError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `ReverseGeocode` converts geographic coordinates into a human-readable address or place. You can obtain address component, and other related information such as place type, category, street information. The Reverse Geocode API supports filtering to on place type so that you can refine result based on your need. Also, The Reverse Geocode API can also provide additional features such as time zone information and the inclusion of political views.
 *
 * For more information, see Reverse Geocode in the *Amazon Location Service Developer Guide*.
 */
export const reverseGeocode: API.OperationMethod<
  ReverseGeocodeRequest,
  ReverseGeocodeResponse,
  ReverseGeocodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReverseGeocodeRequest,
  output: ReverseGeocodeResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReverseGeocode",
}));

export type SearchNearbyError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `SearchNearby` queries for points of interest within a radius from a central coordinates, returning place results with optional filters such as categories, business chains, food types and more. The API returns details such as a place name, address, phone, category, food type, contact, opening hours. Also, the API can return phonemes, time zones and more based on requested parameters. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for GrabMaps customers.
 *
 * For more information, see Search Nearby in the *Amazon Location Service Developer Guide*.
 */
export const searchNearby: API.OperationMethod<
  SearchNearbyRequest,
  SearchNearbyResponse,
  SearchNearbyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchNearbyRequest,
  output: SearchNearbyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchNearby",
}));

export type SearchTextError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `SearchText` searches for geocode and place information. You can then complete a follow-up query suggested from the `Suggest` API via a query id.
 *
 * For more information, see Search Text in the *Amazon Location Service Developer Guide*.
 */
export const searchText: API.OperationMethod<
  SearchTextRequest,
  SearchTextResponse,
  SearchTextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchTextRequest,
  output: SearchTextResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchText",
}));

export type SuggestError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * `Suggest` provides intelligent predictions or recommendations based on the user's input or context, such as relevant places, points of interest, query terms or search category. It is designed to help users find places or point of interests candidates or identify a follow on query based on incomplete or misspelled queries. It returns a list of possible matches or refinements that can be used to formulate a more accurate query. Users can select the most appropriate suggestion and use it for further searching. The API provides options for filtering results by location and other attributes, and allows for additional features like phonemes and timezones. The response includes refined query terms and detailed place information.
 *
 * For more information, see Suggest in the *Amazon Location Service Developer Guide*.
 */
export const suggest: API.OperationMethod<
  SuggestRequest,
  SuggestResponse,
  SuggestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SuggestRequest,
  output: SuggestResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Suggest",
}));
