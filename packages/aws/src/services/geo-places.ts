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
      Reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      FieldList: /*@__PURE__*/ S.suspend(() => __S(103)).annotate({
        identifier: "ValidationExceptionFieldList",
      }),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type SensitiveString = string | redacted.Redacted<string>;
export type Position = number[];
export type BoundingBox = number[];
export type DistanceMeters = number;
export interface FilterCircle {
  Center: number[];
  Radius: number;
}
export type CountryCode = string | redacted.Redacted<string>;
export type CountryCodeList = (string | redacted.Redacted<string>)[];
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
export type AutocompleteFilterPlaceTypeList = AutocompleteFilterPlaceType[];
export interface AutocompleteFilter {
  BoundingBox?: number[];
  Circle?: FilterCircle;
  IncludeCountries?: (string | redacted.Redacted<string>)[];
  IncludePlaceTypes?: AutocompleteFilterPlaceType[];
}
export type PostalCodeMode =
  | "MergeAllSpannedLocalities"
  | "EnumerateSpannedLocalities"
  | "EnumerateSpannedDistricts"
  | (string & {});
export type AutocompleteAdditionalFeature = "Core" | (string & {});
export type AutocompleteAdditionalFeatureList = AutocompleteAdditionalFeature[];
export type LanguageTag = string;
export type AutocompleteIntendedUse = "SingleUse" | (string & {});
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
export type CountryCode2 = string | redacted.Redacted<string>;
export type CountryCode3 = string | redacted.Redacted<string>;
export interface Country {
  Code2?: string | redacted.Redacted<string>;
  Code3?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
export interface Region {
  Code?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
const Region = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<Region>;
export interface SubRegion {
  Code?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
const SubRegion = Region as any as S.Schema<SubRegion>;
export type IntersectionStreet = string;
export type IntersectionStreetList = string[];
export type TypePlacement = "BeforeBaseName" | "AfterBaseName" | (string & {});
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
export type StreetComponentsList = StreetComponents[];
export interface SecondaryAddressComponent {
  Number: string | redacted.Redacted<string>;
  Designator?: string | redacted.Redacted<string>;
}
export type SecondaryAddressComponentList = SecondaryAddressComponent[];
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
export interface Highlight {
  StartIndex?: number;
  EndIndex?: number;
  Value?: string | redacted.Redacted<string>;
}
export type HighlightList = Highlight[];
export interface CountryHighlights {
  Code?: Highlight[];
  Name?: Highlight[];
}
export interface RegionHighlights {
  Code?: Highlight[];
  Name?: Highlight[];
}
export interface SubRegionHighlights {
  Code?: Highlight[];
  Name?: Highlight[];
}
export type IntersectionHighlightsList = Highlight[][];
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
export interface AutocompleteHighlights {
  Title?: Highlight[];
  Address?: AutocompleteAddressHighlights;
}
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
export type AutocompleteResultItemList = AutocompleteResultItem[];
export interface AutocompleteResponse {
  PricingBucket: string;
  ResultItems?: AutocompleteResultItem[];
}
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
export interface GeocodeFilter {
  IncludeCountries?: (string | redacted.Redacted<string>)[];
  IncludePlaceTypes?: GeocodeFilterPlaceType[];
}
export type GeocodeAdditionalFeature =
  | "TimeZone"
  | "Access"
  | "SecondaryAddresses"
  | "Intersections"
  | (string & {});
export type GeocodeAdditionalFeatureList = GeocodeAdditionalFeature[];
export type GeocodeIntendedUse = "SingleUse" | "Storage" | (string & {});
export type AddressTranslationComponent =
  | "District"
  | "Locality"
  | "Region"
  | "SubRegion"
  | (string & {});
export type AddressTranslationComponentList = AddressTranslationComponent[];
export type GeocodeAddressNamesMode = "Matched" | "Administrative" | (string & {});
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
export type PostalAuthority = "Usps" | (string & {});
export type PostalCodeType = "UspsZip" | "UspsZipPlus4" | (string & {});
export type ZipClassificationCode = "Military" | "PostOfficeBoxes" | "Unique" | (string & {});
export interface UspsZip {
  ZipClassificationCode?: ZipClassificationCode;
}
export type RecordTypeCode =
  | "Firm"
  | "General"
  | "HighRise"
  | "PostOfficeBox"
  | "Rural"
  | "Street"
  | (string & {});
export interface UspsZipPlus4 {
  RecordTypeCode?: RecordTypeCode;
}
export interface PostalCodeDetails {
  PostalCode?: string | redacted.Redacted<string>;
  PostalAuthority?: PostalAuthority;
  PostalCodeType?: PostalCodeType;
  UspsZip?: UspsZip;
  UspsZipPlus4?: UspsZipPlus4;
}
export type PostalCodeDetailsList = PostalCodeDetails[];
export interface Category {
  Id: string | redacted.Redacted<string>;
  Name: string | redacted.Redacted<string>;
  LocalizedName?: string | redacted.Redacted<string>;
  Primary?: boolean;
}
export type CategoryList = Category[];
export interface FoodType {
  LocalizedName: string | redacted.Redacted<string>;
  Id?: string | redacted.Redacted<string>;
  Primary?: boolean;
}
export type FoodTypeList = FoodType[];
export type AccessPointType =
  | "Delivery"
  | "Emergency"
  | "Entrance"
  | "Loading"
  | "Other"
  | "Parking"
  | "Taxi"
  | (string & {});
export interface AccessPoint {
  Position?: number[];
  Type?: AccessPointType;
  Primary?: boolean;
  Label?: string | redacted.Redacted<string>;
}
export type AccessPointList = AccessPoint[];
export type DurationSeconds = number;
export interface TimeZone {
  Name: string | redacted.Redacted<string>;
  Offset?: string | redacted.Redacted<string>;
  OffsetSeconds?: number;
}
export type MatchScore = number;
export type MatchScoreList = number[];
export interface SecondaryAddressComponentMatchScore {
  Number?: number;
}
export type SecondaryAddressComponentMatchScoreList = SecondaryAddressComponentMatchScore[];
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
export interface ComponentMatchScores {
  Title?: number;
  Address?: AddressComponentMatchScores;
}
export interface MatchScoreDetails {
  Overall?: number;
  Components?: ComponentMatchScores;
}
export interface ParsedQueryComponent {
  StartIndex?: number;
  EndIndex?: number;
  Value?: string | redacted.Redacted<string>;
  QueryComponent?: string | redacted.Redacted<string>;
}
export type ParsedQueryComponentList = ParsedQueryComponent[];
export interface ParsedQuerySecondaryAddressComponent {
  StartIndex: number;
  EndIndex: number;
  Value: string | redacted.Redacted<string>;
  Number: string | redacted.Redacted<string>;
  Designator: string | redacted.Redacted<string>;
}
export type ParsedQuerySecondaryAddressComponentList = ParsedQuerySecondaryAddressComponent[];
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
export interface GeocodeParsedQuery {
  Title?: ParsedQueryComponent[];
  Address?: GeocodeParsedQueryAddressComponents;
}
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
export type IntersectionList = Intersection[];
export interface RelatedPlace {
  PlaceId: string | redacted.Redacted<string>;
  PlaceType: PlaceType;
  Title: string | redacted.Redacted<string>;
  Address?: Address;
  Position?: number[];
  AccessPoints?: AccessPoint[];
}
export type RelatedPlaceList = RelatedPlace[];
export type TranslationNameType =
  | "Abbreviation"
  | "AreaCode"
  | "BaseName"
  | "Exonym"
  | "Shortened"
  | "Synonym"
  | (string & {});
export interface TranslationName {
  Value: string | redacted.Redacted<string>;
  Language?: string;
  Type: TranslationNameType;
  Primary?: boolean;
  Transliterated?: boolean;
}
export type TranslationNameList = TranslationName[];
export type AdminNamesPreference = "Alternative" | "Primary" | (string & {});
export interface AdminNames {
  Names: TranslationName[];
  Preference?: AdminNamesPreference;
}
export type AdminNamesList = AdminNames[];
export interface TranslationDetails {
  Locality?: AdminNames[];
  Region?: AdminNames[];
  District?: AdminNames[];
  SubRegion?: AdminNames[];
}
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
export type GeocodeResultItemList = GeocodeResultItem[];
export interface GeocodeResponse {
  PricingBucket: string;
  ResultItems?: GeocodeResultItem[];
}
export type GetPlaceAdditionalFeature =
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "Contact"
  | "SecondaryAddresses"
  | "CrossReferences"
  | (string & {});
export type GetPlaceAdditionalFeatureList = GetPlaceAdditionalFeature[];
export type GetPlaceIntendedUse = "SingleUse" | "Storage" | (string & {});
export type GetPlaceAddressNamesMode = "Administrative" | (string & {});
export interface GetPlaceRequest {
  PlaceId: string | redacted.Redacted<string>;
  AdditionalFeatures?: GetPlaceAdditionalFeature[];
  Language?: string;
  PoliticalView?: string | redacted.Redacted<string>;
  IntendedUse?: GetPlaceIntendedUse;
  Key?: string | redacted.Redacted<string>;
  AddressNamesMode?: GetPlaceAddressNamesMode;
}
export interface BusinessChain {
  Name?: string | redacted.Redacted<string>;
  Id?: string | redacted.Redacted<string>;
}
export type BusinessChainList = BusinessChain[];
export interface ContactDetails {
  Label?: string | redacted.Redacted<string>;
  Value?: string | redacted.Redacted<string>;
  Categories?: Category[];
}
export type ContactDetailsList = ContactDetails[];
export interface Contacts {
  Phones?: ContactDetails[];
  Faxes?: ContactDetails[];
  Websites?: ContactDetails[];
  Emails?: ContactDetails[];
}
export type OpeningHoursDisplay = string | redacted.Redacted<string>;
export type OpeningHoursDisplayList = (string | redacted.Redacted<string>)[];
export interface OpeningHoursComponents {
  OpenTime?: string | redacted.Redacted<string>;
  OpenDuration?: string | redacted.Redacted<string>;
  Recurrence?: string | redacted.Redacted<string>;
}
export type OpeningHoursComponentsList = OpeningHoursComponents[];
export interface OpeningHours {
  Display?: (string | redacted.Redacted<string>)[];
  OpenNow?: boolean;
  Components?: OpeningHoursComponents[];
  Categories?: Category[];
}
export type OpeningHoursList = OpeningHours[];
export interface AccessRestriction {
  Restricted?: boolean;
  Categories?: Category[];
}
export type AccessRestrictionList = AccessRestriction[];
export interface PhonemeTranscription {
  Value?: string | redacted.Redacted<string>;
  Language?: string;
  Preferred?: boolean;
}
export type PhonemeTranscriptionList = PhonemeTranscription[];
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
export interface PhonemeDetails {
  Title?: PhonemeTranscription[];
  Address?: AddressComponentPhonemes;
}
export type PlaceAttribute = "DriveThrough" | (string & {});
export type PlaceAttributeList = PlaceAttribute[];
export interface CrossReference {
  Source: string | redacted.Redacted<string>;
  SourcePlaceId: string | redacted.Redacted<string>;
  SourceCategories?: Category[];
}
export type CrossReferenceList = CrossReference[];
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
export interface ReverseGeocodeFilter {
  IncludePlaceTypes?: ReverseGeocodeFilterPlaceType[];
}
export type ReverseGeocodeAdditionalFeature =
  | "TimeZone"
  | "Access"
  | "Intersections"
  | (string & {});
export type ReverseGeocodeAdditionalFeatureList = ReverseGeocodeAdditionalFeature[];
export type ReverseGeocodeIntendedUse = "SingleUse" | "Storage" | (string & {});
export type Heading = number;
export type ReverseGeocodeAddressNamesMode = "Administrative" | (string & {});
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
export type ReverseGeocodeResultItemList = ReverseGeocodeResultItem[];
export interface ReverseGeocodeResponse {
  PricingBucket: string;
  ResultItems?: ReverseGeocodeResultItem[];
}
export type FilterCategoryList = (string | redacted.Redacted<string>)[];
export type FilterBusinessChainList = (string | redacted.Redacted<string>)[];
export type FilterFoodTypeList = (string | redacted.Redacted<string>)[];
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
export type SearchNearbyAdditionalFeature =
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "Contact"
  | "CrossReferences"
  | (string & {});
export type SearchNearbyAdditionalFeatureList = SearchNearbyAdditionalFeature[];
export type SearchNearbyIntendedUse = "SingleUse" | "Storage" | (string & {});
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
export type SearchNearbyResultItemList = SearchNearbyResultItem[];
export interface SearchNearbyResponse {
  PricingBucket: string;
  ResultItems?: SearchNearbyResultItem[];
  NextToken?: string;
}
export interface SearchTextFilter {
  BoundingBox?: number[];
  Circle?: FilterCircle;
  IncludeCountries?: (string | redacted.Redacted<string>)[];
}
export type SearchTextAdditionalFeature =
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "Contact"
  | "CrossReferences"
  | (string & {});
export type SearchTextAdditionalFeatureList = SearchTextAdditionalFeature[];
export type SearchTextIntendedUse = "SingleUse" | "Storage" | (string & {});
export type SearchTextTravelMode = "Car" | "Scooter" | "Truck" | (string & {});
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
export interface SuggestFilter {
  BoundingBox?: number[];
  Circle?: FilterCircle;
  IncludeCountries?: (string | redacted.Redacted<string>)[];
}
export type SuggestAdditionalFeature =
  | "Core"
  | "TimeZone"
  | "Phonemes"
  | "Access"
  | "CrossReferences"
  | (string & {});
export type SuggestAdditionalFeatureList = SuggestAdditionalFeature[];
export type SuggestIntendedUse = "SingleUse" | (string & {});
export type SuggestTravelMode = "Car" | "Scooter" | "Truck" | (string & {});
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
export type SuggestResultItemType = "Place" | "Query" | (string & {});
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
export type QueryType = "Category" | "BusinessChain" | (string & {});
export interface SuggestQueryResult {
  QueryId?: string | redacted.Redacted<string>;
  QueryType?: QueryType;
}
export interface SuggestAddressHighlights {
  Label?: Highlight[];
}
export interface SuggestHighlights {
  Title?: Highlight[];
  Address?: SuggestAddressHighlights;
}
export interface SuggestResultItem {
  Title: string | redacted.Redacted<string>;
  SuggestResultItemType: SuggestResultItemType;
  Place?: SuggestPlaceResult;
  Query?: SuggestQueryResult;
  Highlights?: SuggestHighlights;
}
export type SuggestResultItemList = SuggestResultItem[];
export interface QueryRefinement {
  RefinedTerm: string | redacted.Redacted<string>;
  OriginalTerm: string | redacted.Redacted<string>;
  StartIndex: number;
  EndIndex: number;
}
export type QueryRefinementList = QueryRefinement[];
export interface SuggestResponse {
  PricingBucket: string;
  ResultItems?: SuggestResultItem[];
  QueryRefinements?: QueryRefinement[];
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
  input: __S(6) as any as S.Schema<AutocompleteRequest>,
  output: __S(23) as any as S.Schema<AutocompleteResponse>,
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
  input: __S(26) as any as S.Schema<GeocodeRequest>,
  output: __S(60) as any as S.Schema<GeocodeResponse>,
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
  input: __S(61) as any as S.Schema<GetPlaceRequest>,
  output: __S(79) as any as S.Schema<GetPlaceResponse>,
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
  input: __S(81) as any as S.Schema<ReverseGeocodeRequest>,
  output: __S(84) as any as S.Schema<ReverseGeocodeResponse>,
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
  input: __S(86) as any as S.Schema<SearchNearbyRequest>,
  output: __S(89) as any as S.Schema<SearchNearbyResponse>,
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
  input: __S(91) as any as S.Schema<SearchTextRequest>,
  output: __S(89) as any as S.Schema<SearchTextResponse>,
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
  input: __S(92) as any as S.Schema<SuggestRequest>,
  output: __S(101) as any as S.Schema<SuggestResponse>,
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

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.Number);
    case 1:
      return S.suspend(() => S.Struct({ Center: __S(0), Radius: S.Number })).annotate({
        identifier: "FilterCircle",
      });
    case 2:
      return S.Array(SensitiveString);
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(__S(0)),
          Circle: S.optional(__S(1)),
          IncludeCountries: S.optional(__S(2)),
          IncludePlaceTypes: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "AutocompleteFilter" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          QueryText: SensitiveString,
          MaxResults: S.optional(S.Number),
          BiasPosition: S.optional(__S(0)),
          Filter: S.optional(__S(4)),
          PostalCodeMode: S.optional(S.String),
          AdditionalFeatures: S.optional(__S(5)),
          Language: S.optional(S.String),
          PoliticalView: S.optional(SensitiveString),
          IntendedUse: S.optional(S.String),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/autocomplete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AutocompleteRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Code2: S.optional(SensitiveString),
          Code3: S.optional(SensitiveString),
          Name: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Country" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(SensitiveString), Name: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Region" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          BaseName: S.optional(SensitiveString),
          Type: S.optional(SensitiveString),
          TypePlacement: S.optional(S.String),
          TypeSeparator: S.optional(S.String),
          Prefix: S.optional(SensitiveString),
          Suffix: S.optional(SensitiveString),
          Direction: S.optional(SensitiveString),
          Language: S.optional(S.String),
        }),
      ).annotate({ identifier: "StreetComponents" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({ Number: SensitiveString, Designator: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "SecondaryAddressComponent",
      });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Label: S.optional(SensitiveString),
          Country: S.optional(__S(7)),
          Region: S.optional(Region),
          SubRegion: S.optional(SubRegion),
          Locality: S.optional(SensitiveString),
          District: S.optional(SensitiveString),
          SubDistrict: S.optional(SensitiveString),
          PostalCode: S.optional(SensitiveString),
          Block: S.optional(SensitiveString),
          SubBlock: S.optional(SensitiveString),
          Intersection: S.optional(__S(9)),
          Street: S.optional(SensitiveString),
          StreetComponents: S.optional(__S(11)),
          AddressNumber: S.optional(SensitiveString),
          Building: S.optional(SensitiveString),
          SecondaryAddressComponents: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "Address" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StartIndex: S.optional(S.Number),
          EndIndex: S.optional(S.Number),
          Value: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Highlight" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(__S(16)), Name: S.optional(__S(16)) }),
      ).annotate({ identifier: "CountryHighlights" });
    case 2:
      return S.Array(__S(16));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Label: S.optional(__S(16)),
          Country: S.optional(__S(17)),
          Region: S.optional(__S(17)),
          SubRegion: S.optional(__S(17)),
          Locality: S.optional(__S(16)),
          District: S.optional(__S(16)),
          SubDistrict: S.optional(__S(16)),
          Street: S.optional(__S(16)),
          Block: S.optional(__S(16)),
          SubBlock: S.optional(__S(16)),
          Intersection: S.optional(__S(18)),
          PostalCode: S.optional(__S(16)),
          AddressNumber: S.optional(__S(16)),
          Building: S.optional(__S(16)),
        }),
      ).annotate({
        identifier: "AutocompleteAddressHighlights",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Title: S.optional(__S(16)),
          Address: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "AutocompleteHighlights" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString,
          PlaceType: S.String,
          Title: SensitiveString,
          Address: S.optional(__S(14)),
          Distance: S.optional(S.Number),
          Language: S.optional(S.String),
          PoliticalView: S.optional(SensitiveString),
          Highlights: S.optional(__S(20)),
          EstimatedPointAddress: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AutocompleteResultItem" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          ResultItems: S.optional(__S(22)),
        }),
      ).annotate({ identifier: "AutocompleteResponse" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
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
      ).annotate({ identifier: "GeocodeQueryComponents" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IncludeCountries: S.optional(__S(2)),
          IncludePlaceTypes: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "GeocodeFilter" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          QueryText: S.optional(SensitiveString),
          QueryComponents: S.optional(__S(24)),
          MaxResults: S.optional(S.Number),
          BiasPosition: S.optional(__S(0)),
          Filter: S.optional(__S(25)),
          AdditionalFeatures: S.optional(__S(3)),
          Language: S.optional(S.String),
          PoliticalView: S.optional(SensitiveString),
          IntendedUse: S.optional(S.String),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          PostalCodeMode: S.optional(S.String),
          AddressTranslations: S.optional(__S(3)),
          AddressNamesMode: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/geocode" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GeocodeRequest" });
    case 3:
      return S.suspend(() => S.Struct({ ZipClassificationCode: S.optional(S.String) })).annotate({
        identifier: "UspsZip",
      });
    case 4:
      return S.suspend(() => S.Struct({ RecordTypeCode: S.optional(S.String) })).annotate({
        identifier: "UspsZipPlus4",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PostalCode: S.optional(SensitiveString),
          PostalAuthority: S.optional(S.String),
          PostalCodeType: S.optional(S.String),
          UspsZip: S.optional(__S(27)),
          UspsZipPlus4: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "PostalCodeDetails" });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: SensitiveString,
          Name: SensitiveString,
          LocalizedName: S.optional(SensitiveString),
          Primary: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Category" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() =>
        S.Struct({
          LocalizedName: SensitiveString,
          Id: S.optional(SensitiveString),
          Primary: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FoodType" });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Position: S.optional(__S(0)),
          Type: S.optional(S.String),
          Primary: S.optional(S.Boolean),
          Label: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AccessPoint" });
    case 4:
      return S.Array(__S(35));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: SensitiveString,
          Offset: S.optional(SensitiveString),
          OffsetSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TimeZone" });
    case 6:
      return S.suspend(() => S.Struct({ Number: S.optional(S.Number) })).annotate({
        identifier: "SecondaryAddressComponentMatchScore",
      });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
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
          Intersection: S.optional(__S(0)),
          AddressNumber: S.optional(S.Number),
          Building: S.optional(S.Number),
          SecondaryAddressComponents: S.optional(__S(39)),
        }),
      ).annotate({
        identifier: "AddressComponentMatchScores",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Title: S.optional(S.Number), Address: S.optional(__S(40)) }),
      ).annotate({ identifier: "ComponentMatchScores" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Overall: S.optional(S.Number), Components: S.optional(__S(41)) }),
      ).annotate({ identifier: "MatchScoreDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StartIndex: S.optional(S.Number),
          EndIndex: S.optional(S.Number),
          Value: S.optional(SensitiveString),
          QueryComponent: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ParsedQueryComponent" });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartIndex: S.Number,
          EndIndex: S.Number,
          Value: SensitiveString,
          Number: SensitiveString,
          Designator: SensitiveString,
        }),
      ).annotate({
        identifier: "ParsedQuerySecondaryAddressComponent",
      });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Country: S.optional(__S(44)),
          Region: S.optional(__S(44)),
          SubRegion: S.optional(__S(44)),
          Locality: S.optional(__S(44)),
          District: S.optional(__S(44)),
          SubDistrict: S.optional(__S(44)),
          PostalCode: S.optional(__S(44)),
          Block: S.optional(__S(44)),
          SubBlock: S.optional(__S(44)),
          Street: S.optional(__S(44)),
          AddressNumber: S.optional(__S(44)),
          Building: S.optional(__S(44)),
          SecondaryAddressComponents: S.optional(__S(46)),
          OtherComponents: S.optional(__S(44)),
        }),
      ).annotate({
        identifier: "GeocodeParsedQueryAddressComponents",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Title: S.optional(__S(44)),
          Address: S.optional(__S(47)),
        }),
      ).annotate({ identifier: "GeocodeParsedQuery" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString,
          Title: SensitiveString,
          Address: S.optional(__S(14)),
          Position: S.optional(__S(0)),
          Distance: S.optional(S.Number),
          RouteDistance: S.optional(S.Number),
          MapView: S.optional(__S(0)),
          AccessPoints: S.optional(__S(36)),
        }),
      ).annotate({ identifier: "Intersection" });
    case 2:
      return S.Array(__S(49));
    case 3:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString,
          PlaceType: S.String,
          Title: SensitiveString,
          Address: S.optional(__S(14)),
          Position: S.optional(__S(0)),
          AccessPoints: S.optional(__S(36)),
        }),
      ).annotate({ identifier: "RelatedPlace" });
    case 4:
      return S.Array(__S(51));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Value: SensitiveString,
          Language: S.optional(S.String),
          Type: S.String,
          Primary: S.optional(S.Boolean),
          Transliterated: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TranslationName" });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({ Names: __S(54), Preference: S.optional(S.String) }),
      ).annotate({ identifier: "AdminNames" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Locality: S.optional(__S(56)),
          Region: S.optional(__S(56)),
          District: S.optional(__S(56)),
          SubRegion: S.optional(__S(56)),
        }),
      ).annotate({ identifier: "TranslationDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString,
          PlaceType: S.String,
          Title: SensitiveString,
          Address: S.optional(__S(14)),
          AddressNumberCorrected: S.optional(S.Boolean),
          PostalCodeDetails: S.optional(__S(30)),
          Position: S.optional(__S(0)),
          Distance: S.optional(S.Number),
          MapView: S.optional(__S(0)),
          Categories: S.optional(__S(32)),
          FoodTypes: S.optional(__S(34)),
          AccessPoints: S.optional(__S(36)),
          TimeZone: S.optional(__S(37)),
          PoliticalView: S.optional(SensitiveString),
          MatchScores: S.optional(__S(42)),
          ParsedQuery: S.optional(__S(48)),
          Intersections: S.optional(__S(50)),
          MainAddress: S.optional(__S(51)),
          SecondaryAddresses: S.optional(__S(52)),
          Translations: S.optional(__S(57)),
          EstimatedPointAddress: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GeocodeResultItem" });
    case 3:
      return S.Array(__S(58));
    case 4:
      return S.suspend(() =>
        S.Struct({
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          ResultItems: S.optional(__S(59)),
        }),
      ).annotate({ identifier: "GeocodeResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString.pipe(T.HttpLabel("PlaceId")),
          AdditionalFeatures: S.optional(__S(3)).pipe(T.HttpQuery("additional-features")),
          Language: S.optional(S.String).pipe(T.HttpQuery("language")),
          PoliticalView: S.optional(SensitiveString).pipe(T.HttpQuery("political-view")),
          IntendedUse: S.optional(S.String).pipe(T.HttpQuery("intended-use")),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          AddressNamesMode: S.optional(S.String).pipe(T.HttpQuery("address-names-mode")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/place/{PlaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPlaceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(SensitiveString), Id: S.optional(SensitiveString) }),
      ).annotate({ identifier: "BusinessChain" });
    case 7:
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Label: S.optional(SensitiveString),
          Value: S.optional(SensitiveString),
          Categories: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "ContactDetails" });
    case 1:
      return S.Array(__S(64));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Phones: S.optional(__S(65)),
          Faxes: S.optional(__S(65)),
          Websites: S.optional(__S(65)),
          Emails: S.optional(__S(65)),
        }),
      ).annotate({ identifier: "Contacts" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OpenTime: S.optional(SensitiveString),
          OpenDuration: S.optional(SensitiveString),
          Recurrence: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "OpeningHoursComponents" });
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Display: S.optional(__S(2)),
          OpenNow: S.optional(S.Boolean),
          Components: S.optional(__S(68)),
          Categories: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "OpeningHours" });
    case 6:
      return S.Array(__S(69));
    case 7:
      return S.suspend(() =>
        S.Struct({ Restricted: S.optional(S.Boolean), Categories: S.optional(__S(32)) }),
      ).annotate({ identifier: "AccessRestriction" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(SensitiveString),
          Language: S.optional(S.String),
          Preferred: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PhonemeTranscription" });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Country: S.optional(__S(74)),
          Region: S.optional(__S(74)),
          SubRegion: S.optional(__S(74)),
          Locality: S.optional(__S(74)),
          District: S.optional(__S(74)),
          SubDistrict: S.optional(__S(74)),
          Block: S.optional(__S(74)),
          SubBlock: S.optional(__S(74)),
          Street: S.optional(__S(74)),
        }),
      ).annotate({ identifier: "AddressComponentPhonemes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Title: S.optional(__S(74)),
          Address: S.optional(__S(75)),
        }),
      ).annotate({ identifier: "PhonemeDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Source: SensitiveString,
          SourcePlaceId: SensitiveString,
          SourceCategories: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "CrossReference" });
    case 6:
      return S.Array(__S(77));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString,
          PlaceType: S.String,
          Title: SensitiveString,
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          Address: S.optional(__S(14)),
          AddressNumberCorrected: S.optional(S.Boolean),
          PostalCodeDetails: S.optional(__S(30)),
          Position: S.optional(__S(0)),
          MapView: S.optional(__S(0)),
          Categories: S.optional(__S(32)),
          FoodTypes: S.optional(__S(34)),
          BusinessChains: S.optional(__S(63)),
          Contacts: S.optional(__S(66)),
          OpeningHours: S.optional(__S(70)),
          AccessPoints: S.optional(__S(36)),
          AccessRestrictions: S.optional(__S(72)),
          TimeZone: S.optional(__S(37)),
          PoliticalView: S.optional(SensitiveString),
          Phonemes: S.optional(__S(76)),
          MainAddress: S.optional(__S(51)),
          SecondaryAddresses: S.optional(__S(52)),
          PlaceAttributes: S.optional(__S(3)),
          EstimatedPointAddress: S.optional(S.Boolean),
          CrossReferences: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "GetPlaceResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ IncludePlaceTypes: S.optional(__S(5)) })).annotate({
        identifier: "ReverseGeocodeFilter",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          QueryPosition: __S(0),
          QueryRadius: S.optional(S.Number),
          MaxResults: S.optional(S.Number),
          Filter: S.optional(__S(80)),
          AdditionalFeatures: S.optional(__S(5)),
          Language: S.optional(S.String),
          PoliticalView: S.optional(SensitiveString),
          IntendedUse: S.optional(S.String),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
          Heading: S.optional(S.Number),
          AddressNamesMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/reverse-geocode" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ReverseGeocodeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString,
          PlaceType: S.String,
          Title: SensitiveString,
          Address: S.optional(__S(14)),
          AddressNumberCorrected: S.optional(S.Boolean),
          PostalCodeDetails: S.optional(__S(30)),
          Position: S.optional(__S(0)),
          Distance: S.optional(S.Number),
          MapView: S.optional(__S(0)),
          Categories: S.optional(__S(32)),
          FoodTypes: S.optional(__S(34)),
          AccessPoints: S.optional(__S(36)),
          TimeZone: S.optional(__S(37)),
          PoliticalView: S.optional(SensitiveString),
          Intersections: S.optional(__S(50)),
          MainAddress: S.optional(__S(51)),
          EstimatedPointAddress: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ReverseGeocodeResultItem" });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() =>
        S.Struct({
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          ResultItems: S.optional(__S(83)),
        }),
      ).annotate({ identifier: "ReverseGeocodeResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(__S(0)),
          IncludeCountries: S.optional(__S(2)),
          IncludeCategories: S.optional(__S(2)),
          ExcludeCategories: S.optional(__S(2)),
          IncludeBusinessChains: S.optional(__S(2)),
          ExcludeBusinessChains: S.optional(__S(2)),
          IncludeFoodTypes: S.optional(__S(2)),
          ExcludeFoodTypes: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "SearchNearbyFilter" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          QueryPosition: __S(0),
          QueryRadius: S.optional(S.Number),
          MaxResults: S.optional(S.Number),
          Filter: S.optional(__S(85)),
          AdditionalFeatures: S.optional(__S(5)),
          Language: S.optional(S.String),
          PoliticalView: S.optional(SensitiveString),
          IntendedUse: S.optional(S.String),
          NextToken: S.optional(S.String),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/search-nearby" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SearchNearbyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PlaceId: SensitiveString,
          PlaceType: S.String,
          Title: SensitiveString,
          Address: S.optional(__S(14)),
          AddressNumberCorrected: S.optional(S.Boolean),
          Position: S.optional(__S(0)),
          Distance: S.optional(S.Number),
          MapView: S.optional(__S(0)),
          Categories: S.optional(__S(32)),
          FoodTypes: S.optional(__S(34)),
          BusinessChains: S.optional(__S(63)),
          Contacts: S.optional(__S(66)),
          OpeningHours: S.optional(__S(70)),
          AccessPoints: S.optional(__S(36)),
          AccessRestrictions: S.optional(__S(72)),
          TimeZone: S.optional(__S(37)),
          PoliticalView: S.optional(SensitiveString),
          Phonemes: S.optional(__S(76)),
          PlaceAttributes: S.optional(__S(3)),
          CrossReferences: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "SearchNearbyResultItem" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          ResultItems: S.optional(__S(88)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "SearchNearbyResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(__S(0)),
          Circle: S.optional(__S(1)),
          IncludeCountries: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "SearchTextFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          QueryText: S.optional(SensitiveString),
          QueryId: S.optional(SensitiveString),
          MaxResults: S.optional(S.Number),
          BiasPosition: S.optional(__S(0)),
          Filter: S.optional(__S(90)),
          AdditionalFeatures: S.optional(__S(3)),
          Language: S.optional(S.String),
          PoliticalView: S.optional(SensitiveString),
          IntendedUse: S.optional(S.String),
          NextToken: S.optional(S.String),
          TravelMode: S.optional(S.String),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/search-text" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SearchTextRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          QueryText: SensitiveString,
          MaxResults: S.optional(S.Number),
          MaxQueryRefinements: S.optional(S.Number),
          BiasPosition: S.optional(__S(0)),
          Filter: S.optional(__S(90)),
          AdditionalFeatures: S.optional(__S(3)),
          Language: S.optional(S.String),
          PoliticalView: S.optional(SensitiveString),
          IntendedUse: S.optional(S.String),
          TravelMode: S.optional(S.String),
          Key: S.optional(SensitiveString).pipe(T.HttpQuery("key")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/suggest" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SuggestRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PlaceId: S.optional(SensitiveString),
          PlaceType: S.optional(S.String),
          Address: S.optional(__S(14)),
          Position: S.optional(__S(0)),
          Distance: S.optional(S.Number),
          MapView: S.optional(__S(0)),
          Categories: S.optional(__S(32)),
          FoodTypes: S.optional(__S(34)),
          BusinessChains: S.optional(__S(63)),
          AccessPoints: S.optional(__S(36)),
          AccessRestrictions: S.optional(__S(72)),
          TimeZone: S.optional(__S(37)),
          PoliticalView: S.optional(SensitiveString),
          Phonemes: S.optional(__S(76)),
          PlaceAttributes: S.optional(__S(3)),
          CrossReferences: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "SuggestPlaceResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({ QueryId: S.optional(SensitiveString), QueryType: S.optional(S.String) }),
      ).annotate({ identifier: "SuggestQueryResult" });
    case 7:
      return S.suspend(() => S.Struct({ Label: S.optional(__S(16)) })).annotate({
        identifier: "SuggestAddressHighlights",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Title: S.optional(__S(16)),
          Address: S.optional(__S(95)),
        }),
      ).annotate({ identifier: "SuggestHighlights" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Title: SensitiveString,
          SuggestResultItemType: S.String,
          Place: S.optional(__S(93)),
          Query: S.optional(__S(94)),
          Highlights: S.optional(__S(96)),
        }),
      ).annotate({ identifier: "SuggestResultItem" });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.suspend(() =>
        S.Struct({
          RefinedTerm: SensitiveString,
          OriginalTerm: SensitiveString,
          StartIndex: S.Number,
          EndIndex: S.Number,
        }),
      ).annotate({ identifier: "QueryRefinement" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          PricingBucket: S.String.pipe(T.HttpHeader("x-amz-geo-pricing-bucket")),
          ResultItems: S.optional(__S(98)),
          QueryRefinements: S.optional(__S(100)),
        }),
      ).annotate({ identifier: "SuggestResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Message: S.String }).pipe(
          S.encodeKeys({ Name: "name", Message: "message" }),
        ),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 7:
      return S.Array(__S(102));
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
  }
}
