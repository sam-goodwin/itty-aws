// ==========================================================================
// Cloud Billing API (cloudbilling v1beta)
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
  name: "cloudbilling",
  version: "v1beta",
  rootUrl: "https://cloudbilling.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface UserContext {
  /** Optional. The user's role (e.g., Billing Admin, Project Owner, etc.). */
  role?: string;
  /** Optional. The user's persona (e.g., FinOps Manager, Developer). */
  persona?:
    | "PERSONA_UNSPECIFIED"
    | "FINOPS_MANAGER"
    | "DEVELOPER"
    | (string & {});
}

export const UserContext: Schema.Codec<UserContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    persona: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserContext" });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion {
  /** Description of a Google Cloud region. Example: "us-west2". */
  region?: string;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional {
  /** Google Cloud regions associated with the multi-regional geographic taxonomy. */
  regions?: ReadonlyArray<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion>;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(
      Schema.Array(
        GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal {}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional {
  /** Google Cloud region associated with the regional geographic taxonomy. */
  region?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(
      GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy {
  /** Multi-regional geographic metadata with 2 or more regions. */
  multiRegionalMetadata?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional;
  /** Type of geographic taxonomy associated with the billing account SKU group SKU. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_GLOBAL"
    | "TYPE_REGIONAL"
    | "TYPE_MULTI_REGIONAL"
    | (string & {});
  /** Global geographic metadata with no regions. */
  globalMetadata?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal;
  /** Regional geographic metadata with 1 region. */
  regionalMetadata?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multiRegionalMetadata: Schema.optional(
      GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional,
    ),
    type: Schema.optional(Schema.String),
    globalMetadata: Schema.optional(
      GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal,
    ),
    regionalMetadata: Schema.optional(
      GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional,
    ),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy",
  });

export interface Money {
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
}

export const Money: Schema.Codec<Money> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    units: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Money" });

export interface Decimal {
  /** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
  value?: string;
}

export const Decimal: Schema.Codec<Decimal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Decimal" });

export interface GoogleCloudBillingPricesV1betaRateTier {
  /** List price of one tier. */
  listPrice?: Money;
  /** Lower bound amount for a tier. Tiers 0-100, 100-200 will be represented with two tiers with `start_amount` 0 and 100. */
  startAmount?: Decimal;
}

export const GoogleCloudBillingPricesV1betaRateTier: Schema.Codec<GoogleCloudBillingPricesV1betaRateTier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listPrice: Schema.optional(Money),
    startAmount: Schema.optional(Decimal),
  }).annotate({ identifier: "GoogleCloudBillingPricesV1betaRateTier" });

export interface GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice {
  /** Source SKU where the discount is migrated from. Format: billingAccounts/{billing_account}/skus/{sku} */
  sourceSku?: string;
}

export const GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceSku: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice",
  });

export interface GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService {
  /** Identifier for the service. It is the string after the collection identifier "services/". Example: "DA34-426B-A397". */
  serviceId?: string;
  /** Resource name for the BillingAccountService. Example: "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397". */
  name?: string;
  /** Description of the BillingAccountService. Example: "BigQuery", "Compute Engine". */
  displayName?: string;
}

export const GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService: Schema.Codec<GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService",
  });

export interface GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse {
  /** The returned billing account services. */
  billingAccountServices?: ReadonlyArray<GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>;
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse: Schema.Codec<GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountServices: Schema.optional(
      Schema.Array(
        GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse",
  });

export interface Datetime {
  /** Represents bit field encoding of year/month/day/hour/minute/second. See class DatetimeValue in civil_time.h for details of encoding. */
  bitFieldDatetimeSeconds?: string;
  /** Non-negative fractions of a second at nanosecond resolution. */
  nanos?: number;
}

export const Datetime: Schema.Codec<Datetime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bitFieldDatetimeSeconds: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Datetime" });

export interface Struct {
  /** The fields in the struct */
  field?: ReadonlyArray<ValueProto>;
}

export const Struct: Schema.Codec<Struct> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      field: Schema.optional(Schema.Array(ValueProto)),
    }),
  ).annotate({ identifier: "Struct" }) as any as Schema.Codec<Struct>;

export interface MapEntry {
  /** Represents the serialized map key for the entry. */
  key?: ValueProto;
  /** Represents the serialized map value of the entry. */
  value?: ValueProto;
}

export const MapEntry: Schema.Codec<MapEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(ValueProto),
      value: Schema.optional(ValueProto),
    }),
  ).annotate({ identifier: "MapEntry" }) as any as Schema.Codec<MapEntry>;

export interface Cloudbilling_Map {
  /** Represents the map entries in the map. */
  entry?: ReadonlyArray<MapEntry>;
}

export const Cloudbilling_Map: Schema.Codec<Cloudbilling_Map> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      entry: Schema.optional(Schema.Array(MapEntry)),
    }),
  ).annotate({
    identifier: "Cloudbilling_Map",
  }) as any as Schema.Codec<Cloudbilling_Map>;

export interface Range {
  /** Represents the start of the range. */
  start?: ValueProto;
  /** Represents the end of the range. */
  end?: ValueProto;
}

export const Range: Schema.Codec<Range> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      start: Schema.optional(ValueProto),
      end: Schema.optional(ValueProto),
    }),
  ).annotate({ identifier: "Range" }) as any as Schema.Codec<Range>;

export interface ValueProto {
  /** Encoded tokenlist value. copybara:strip_begin(internal-comment) See //search/tokens:token_list. copybara:strip_end */
  tokenlistValue?: string;
  /** Encoded uuid value. For the encoding format see documentation for UuidValue::SerializeAsBytes(). */
  uuidValue?: string;
  /** Encoded bignumeric value. For the encoding format see documentation for BigNumericValue::SerializeAsProtoBytes(). */
  bignumericValue?: string;
  /** Tag 11 was used for specifying micros timestamps as int64, now obsolete. */
  enumValue?: number;
  /** Stores a serialized protocol message. */
  protoValue?: string;
  /** primitive for datetime */
  datetimeValue?: Datetime;
  /** User code that switches on this oneoff enum must have a default case so builds won't break when new fields are added. */
  ValueProtoSwitchMustHaveADefault?: boolean;
  /** An array of value */
  arrayValue?: Cloudbilling_Array;
  /** Encoded numeric value. For the encoding format see documentation for NumericValue::SerializeAsProtoBytes(). */
  numericValue?: string;
  /** A struct of values */
  structValue?: Struct;
  /** Primitive for date. */
  dateValue?: number;
  /** Geography encoded using ::stlib::STGeographyEncoder */
  geographyValue?: string;
  /** Primitive for uint32. */
  uint32Value?: number;
  /** Primitive for bool. */
  boolValue?: boolean;
  /** Primitive for double. */
  doubleValue?: number;
  /** Primitive value for int32. */
  int32Value?: number;
  /** Bit field encoding of hour/minute/second/nanos. See TimeValue class for details. */
  timeValue?: string;
  /** Encoded map value. See go/googlesql_map. */
  mapValue?: Cloudbilling_Map;
  /** Encoded interval value. For the encoding format see documentation for IntervalValue::SerializeAsBytes(). */
  intervalValue?: string;
  /** Primitive for int64. */
  int64Value?: string;
  /** Encoded range value. See go/googlesql_range. */
  rangeValue?: Range;
  /** Primitive for uint64. */
  uint64Value?: string;
  /** Primitive for bytes. */
  bytesValue?: string;
  /** primitive for timestamp */
  timestampValue?: string;
  /** Encoded timestamp_pico value. For the encoding format see documentation for googlesql::TimestampPico::SerializeAsBytes(). */
  timestampPicoValue?: string;
  /** Tag 22 was used for json value as bytes, now obsolete. Json value represented as a string document. */
  jsonValue?: string;
  /** Primitive for string. */
  stringValue?: string;
  /** Primitive for float. */
  floatValue?: number;
}

export const ValueProto: Schema.Codec<ValueProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tokenlistValue: Schema.optional(Schema.String),
      uuidValue: Schema.optional(Schema.String),
      bignumericValue: Schema.optional(Schema.String),
      enumValue: Schema.optional(Schema.Number),
      protoValue: Schema.optional(Schema.String),
      datetimeValue: Schema.optional(Datetime),
      ValueProtoSwitchMustHaveADefault: Schema.optional(Schema.Boolean),
      arrayValue: Schema.optional(Cloudbilling_Array),
      numericValue: Schema.optional(Schema.String),
      structValue: Schema.optional(Struct),
      dateValue: Schema.optional(Schema.Number),
      geographyValue: Schema.optional(Schema.String),
      uint32Value: Schema.optional(Schema.Number),
      boolValue: Schema.optional(Schema.Boolean),
      doubleValue: Schema.optional(Schema.Number),
      int32Value: Schema.optional(Schema.Number),
      timeValue: Schema.optional(Schema.String),
      mapValue: Schema.optional(Cloudbilling_Map),
      intervalValue: Schema.optional(Schema.String),
      int64Value: Schema.optional(Schema.String),
      rangeValue: Schema.optional(Range),
      uint64Value: Schema.optional(Schema.String),
      bytesValue: Schema.optional(Schema.String),
      timestampValue: Schema.optional(Schema.String),
      timestampPicoValue: Schema.optional(Schema.String),
      jsonValue: Schema.optional(Schema.String),
      stringValue: Schema.optional(Schema.String),
      floatValue: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "ValueProto" }) as any as Schema.Codec<ValueProto>;

export interface Cloudbilling_Array {
  /** The elements of the array. */
  element?: ReadonlyArray<ValueProto>;
}

export const Cloudbilling_Array: Schema.Codec<Cloudbilling_Array> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      element: Schema.optional(Schema.Array(ValueProto)),
    }),
  ).annotate({
    identifier: "Cloudbilling_Array",
  }) as any as Schema.Codec<Cloudbilling_Array>;

export interface GoogleCloudBillingBillingaccountpricesV1betaRateTier {
  /** Lower bound amount for a tier. Tiers 0-100, 100-200 will be represented with two tiers with `start_amount` 0 and 100. */
  startAmount?: Decimal;
  /** List price of one tier. */
  listPrice?: Money;
  /** Negotiated contract price specific for a billing account. */
  contractPrice?: Money;
  /** Percentage of effective discount calculated using the current list price per pricing tier. Formula used: effective_discount_percent = (list_price - contract_price) / list_price × 100 If list_price and contract_price are zero, this field is the same as `discount_percent` of FixedDiscount and FloatingDiscount. If your contract does NOT have the feature LIST_PRICE_AS_CEILING enabled, the effective_discount_percent can be negative if the SKU has a FixedDiscount and the current list price is lower than the list price on the date of the contract agreement. See the `FixedDiscount.fix_time` on when the discount was set. If you have questions regarding pricing per SKU, contact your Account team for more details. */
  effectiveDiscountPercent?: Decimal;
}

export const GoogleCloudBillingBillingaccountpricesV1betaRateTier: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaRateTier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startAmount: Schema.optional(Decimal),
    listPrice: Schema.optional(Money),
    contractPrice: Schema.optional(Money),
    effectiveDiscountPercent: Schema.optional(Decimal),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaRateTier",
  });

export interface GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory {
  /** Name of the product category. */
  category?: string;
}

export const GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory",
  });

export interface GoogleCloudBillingSkugroupskusV1betaProductTaxonomy {
  /** All product categories that the SKU group SKU belongs to. */
  taxonomyCategories?: ReadonlyArray<GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory>;
}

export const GoogleCloudBillingSkugroupskusV1betaProductTaxonomy: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaProductTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomyCategories: Schema.optional(
      Schema.Array(GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory),
    ),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaProductTaxonomy",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion {
  /** Description of a Google Cloud region. Example: "us-west2". */
  region?: string;
}

export const GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional {
  /** Google Cloud region associated with the regional geographic taxonomy. */
  region?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion;
}

export const GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(
      GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion,
    ),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional",
  });

export interface InteropLink {
  /** Output only. The type of the interop link, e.g., "COST_REPORT", "BQE_QUERY", etc. */
  linkType?:
    | "LINK_TYPE_UNSPECIFIED"
    | "COST_REPORT"
    | "BQE_QUERY"
    | "FINOPS_HUB"
    | (string & {});
  /** Output only. The label of the link, suitable for UI rendering. */
  label?: string;
  /** Output only. The URL of the link. */
  url?: string;
}

export const InteropLink: Schema.Codec<InteropLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkType: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "InteropLink" });

export interface ColumnInfo {
  /** Name of the column. */
  column?: string;
}

export const ColumnInfo: Schema.Codec<ColumnInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
  }).annotate({ identifier: "ColumnInfo" });

export interface Row {
  /** Values for a row in the column order. */
  values?: ReadonlyArray<ValueProto>;
}

export const Row: Schema.Codec<Row> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    values: Schema.optional(Schema.Array(ValueProto)),
  },
).annotate({ identifier: "Row" });

export interface BillingData {
  /** Information about columns. */
  columnInfo?: ReadonlyArray<ColumnInfo>;
  /** Rows. */
  rows?: ReadonlyArray<Row>;
}

export const BillingData: Schema.Codec<BillingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnInfo: Schema.optional(Schema.Array(ColumnInfo)),
    rows: Schema.optional(Schema.Array(Row)),
  }).annotate({ identifier: "BillingData" });

export interface AgenticQueryInfo {
  /** The view queried. */
  view?: string;
  /** The group-by clause applied to the query. */
  groupBy?: string;
  /** The columns queried. */
  columns?: string;
  /** The filter applied to the query. */
  filter?: string;
  /** The order-by clause applied to the query. */
  orderBy?: string;
  /** The parents (e.g. projects, billing accounts) queried. */
  parents?: ReadonlyArray<string>;
  /** The row limit applied to the query. */
  limit?: number;
}

export const AgenticQueryInfo: Schema.Codec<AgenticQueryInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String),
    groupBy: Schema.optional(Schema.String),
    columns: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    parents: Schema.optional(Schema.Array(Schema.String)),
    limit: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AgenticQueryInfo" });

export interface SuggestedChart {
  /** The label of the y-axis. */
  yAxisLabel?: string;
  /** The field used for the x-axis. */
  xAxisField?: string;
  /** The field used for the y-axis. */
  yAxisField?: string;
  /** The title of the chart. */
  chartTitle?: string;
  /** The label of the x-axis. */
  xAxisLabel?: string;
  /** The field used for the series (e.g., color-coding). Optional, but recommended for time-series data. */
  seriesField?: string;
  /** The type of the chart. */
  chartType?:
    | "CHART_TYPE_UNSPECIFIED"
    | "BAR_CHART"
    | "UNCHARTABLE"
    | "LINE_CHART"
    | "AREA_CHART"
    | (string & {});
}

export const SuggestedChart: Schema.Codec<SuggestedChart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yAxisLabel: Schema.optional(Schema.String),
    xAxisField: Schema.optional(Schema.String),
    yAxisField: Schema.optional(Schema.String),
    chartTitle: Schema.optional(Schema.String),
    xAxisLabel: Schema.optional(Schema.String),
    seriesField: Schema.optional(Schema.String),
    chartType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuggestedChart" });

export interface DataSet {
  /** Output only. Actual billing data returned from the Data Mart. Uses the formal message from the Billing Data Service. */
  billingData?: BillingData;
  /** Output only. The query used to fetch this data. */
  queryInfo?: AgenticQueryInfo;
  /** Output only. A suggested chart for the data set, used for UI rendering. */
  suggestedChart?: SuggestedChart;
}

export const DataSet: Schema.Codec<DataSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingData: Schema.optional(BillingData),
    queryInfo: Schema.optional(AgenticQueryInfo),
    suggestedChart: Schema.optional(SuggestedChart),
  }).annotate({ identifier: "DataSet" });

export interface SuggestedQuery {
  /** The natural language query. */
  query?: string;
}

export const SuggestedQuery: Schema.Codec<SuggestedQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuggestedQuery" });

export interface Insight {
  /** Output only. The description of the insight. */
  description?: string;
  /** Output only. The severity of the insight, used for UI rendering (e.g., color-coding). */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "CRITICAL"
    | (string & {});
  /** Output only. The title of the insight. */
  title?: string;
}

export const Insight: Schema.Codec<Insight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "Insight" });

export interface FinalResult {
  /** Output only. Links to interoperable tools (e.g., pre-filtered Cost Reports or BQE queries). */
  interopLinks?: ReadonlyArray<InteropLink>;
  /** Output only. Data sets used to support the insights, suitable for UI rendering (tables/charts). */
  dataSets?: ReadonlyArray<DataSet>;
  /** Output only. A list of suggested follow-up queries for the user. */
  suggestedQueries?: ReadonlyArray<SuggestedQuery>;
  /** Output only. Contains the full natural language analysis, including thoughts, reasoning, and references. */
  fullAnalysis?: string;
  /** Output only. A list of discrete insights gleaned from the data. */
  insights?: ReadonlyArray<Insight>;
  /** Output only. The full natural language summary (re-sent for consistency). */
  summary?: string;
}

export const FinalResult: Schema.Codec<FinalResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interopLinks: Schema.optional(Schema.Array(InteropLink)),
    dataSets: Schema.optional(Schema.Array(DataSet)),
    suggestedQueries: Schema.optional(Schema.Array(SuggestedQuery)),
    fullAnalysis: Schema.optional(Schema.String),
    insights: Schema.optional(Schema.Array(Insight)),
    summary: Schema.optional(Schema.String),
  }).annotate({ identifier: "FinalResult" });

export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal {}

export const GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal",
  });

export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion {
  /** Description of a Google Cloud region. Example: "us-west2". */
  region?: string;
}

export const GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion",
  });

export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional {
  /** Google Cloud region associated with the regional geographic taxonomy. */
  region?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion;
}

export const GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(
      GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion,
    ),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional",
  });

export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional {
  /** Google Cloud regions associated with the multi-regional geographic taxonomy. */
  regions?: ReadonlyArray<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion>;
}

export const GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(
      Schema.Array(GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion),
    ),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional",
  });

export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy {
  /** Global geographic metadata with no regions. */
  globalMetadata?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal;
  /** Regional geographic metadata with 1 region. */
  regionalMetadata?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional;
  /** Multi-regional geographic metadata with 2 or more regions. */
  multiRegionalMetadata?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional;
  /** Type of geographic taxonomy associated with the SKU group SKU. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_GLOBAL"
    | "TYPE_REGIONAL"
    | "TYPE_MULTI_REGIONAL"
    | (string & {});
}

export const GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    globalMetadata: Schema.optional(
      GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal,
    ),
    regionalMetadata: Schema.optional(
      GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional,
    ),
    multiRegionalMetadata: Schema.optional(
      GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional,
    ),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal {}

export const GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory {
  /** Name of the product category. */
  category?: string;
}

export const GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling {}

export const GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory {
  /** Name of the product category. */
  category?: string;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory",
  });

export interface GoogleCloudBillingPricesV1betaUnitInfo {
  /** Shorthand for the unit. Example: GiBy.mo. */
  unit?: string;
  /** Human-readable description of the unit. Example: gibibyte month. */
  unitDescription?: string;
  /** Unit quantity for the tier. Example: if the RateTier price is $1 per 1000000 Bytes, then `unit_quantity` is set to 1000000. */
  unitQuantity?: Decimal;
}

export const GoogleCloudBillingPricesV1betaUnitInfo: Schema.Codec<GoogleCloudBillingPricesV1betaUnitInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    unitDescription: Schema.optional(Schema.String),
    unitQuantity: Schema.optional(Decimal),
  }).annotate({ identifier: "GoogleCloudBillingPricesV1betaUnitInfo" });

export interface GoogleCloudBillingPricesV1betaAggregationInfo {
  /** Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account. */
  level?:
    | "LEVEL_UNSPECIFIED"
    | "LEVEL_ACCOUNT"
    | "LEVEL_PROJECT"
    | (string & {});
  /** Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month. */
  interval?:
    | "INTERVAL_UNSPECIFIED"
    | "INTERVAL_MONTHLY"
    | "INTERVAL_DAILY"
    | (string & {});
}

export const GoogleCloudBillingPricesV1betaAggregationInfo: Schema.Codec<GoogleCloudBillingPricesV1betaAggregationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
    interval: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudBillingPricesV1betaAggregationInfo" });

export interface GoogleCloudBillingPricesV1betaRate {
  /** Unit info such as name and quantity. */
  unitInfo?: GoogleCloudBillingPricesV1betaUnitInfo;
  /** Aggregation info for tiers such as aggregation level and interval. */
  aggregationInfo?: GoogleCloudBillingPricesV1betaAggregationInfo;
  /** All tiers associated with the `Rate` price. */
  tiers?: ReadonlyArray<GoogleCloudBillingPricesV1betaRateTier>;
}

export const GoogleCloudBillingPricesV1betaRate: Schema.Codec<GoogleCloudBillingPricesV1betaRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitInfo: Schema.optional(GoogleCloudBillingPricesV1betaUnitInfo),
    aggregationInfo: Schema.optional(
      GoogleCloudBillingPricesV1betaAggregationInfo,
    ),
    tiers: Schema.optional(
      Schema.Array(GoogleCloudBillingPricesV1betaRateTier),
    ),
  }).annotate({ identifier: "GoogleCloudBillingPricesV1betaRate" });

export interface GoogleCloudBillingPricesV1betaPrice {
  /** ISO-4217 currency code for the price. */
  currencyCode?: string;
  /** Rate price metadata. SKUs with `Rate` price are offered by pricing tiers. The price can have 1 or more rate pricing tiers. */
  rate?: GoogleCloudBillingPricesV1betaRate;
  /** Type of the price. It can have values: ["unspecified", "rate"]. */
  valueType?: string;
  /** Resource name for the latest price. */
  name?: string;
}

export const GoogleCloudBillingPricesV1betaPrice: Schema.Codec<GoogleCloudBillingPricesV1betaPrice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    rate: Schema.optional(GoogleCloudBillingPricesV1betaRate),
    valueType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudBillingPricesV1betaPrice" });

export interface GoogleCloudBillingPricesV1betaListPricesResponse {
  /** The returned publicly listed prices. */
  prices?: ReadonlyArray<GoogleCloudBillingPricesV1betaPrice>;
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudBillingPricesV1betaListPricesResponse: Schema.Codec<GoogleCloudBillingPricesV1betaListPricesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prices: Schema.optional(Schema.Array(GoogleCloudBillingPricesV1betaPrice)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingPricesV1betaListPricesResponse",
  });

export interface Rejection {
  /** Output only. A user-facing message explaining the rejection. */
  displayMessage?: string;
  /** Output only. The reason for the rejection. */
  reason?: "REASON_UNSPECIFIED" | "EXPLICIT_OUT_OF_SCOPE" | (string & {});
}

export const Rejection: Schema.Codec<Rejection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayMessage: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rejection" });

export interface GenerateInsightsResponse {
  /** Output only. The request was rejected (e.g. out of scope). */
  rejection?: Rejection;
  /** Output only. A chunk of the agent's internal reasoning process. The UI can use this to render a "Thinking..." log or status. */
  thoughtChunk?: string;
  /** Output only. A chunk of the natural language summary (customer-facing). The UI can append these chunks to provide a real-time "typing" effect. */
  summaryChunk?: string;
  /** Output only. The final structured results and metadata. Usually sent as the final message in the stream. */
  finalResult?: FinalResult;
}

export const GenerateInsightsResponse: Schema.Codec<GenerateInsightsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rejection: Schema.optional(Rejection),
    thoughtChunk: Schema.optional(Schema.String),
    summaryChunk: Schema.optional(Schema.String),
    finalResult: Schema.optional(FinalResult),
  }).annotate({ identifier: "GenerateInsightsResponse" });

export interface GoogleCloudBillingSkugroupskusV1betaSkuGroupSku {
  /** List of product categories that apply to the SkuGroupSku. */
  productTaxonomy?: GoogleCloudBillingSkugroupskusV1betaProductTaxonomy;
  /** Description of the SkuGroupSku. Example: "A2 Instance Core running in Hong Kong". */
  displayName?: string;
  /** Service that the SkuGroupSku belongs to. */
  service?: string;
  /** Resource name for the SkuGroupSku. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE". */
  name?: string;
  /** Geographic metadata that applies to the SkuGroupSku. */
  geoTaxonomy?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy;
  /** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
  skuId?: string;
}

export const GoogleCloudBillingSkugroupskusV1betaSkuGroupSku: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaSkuGroupSku> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productTaxonomy: Schema.optional(
      GoogleCloudBillingSkugroupskusV1betaProductTaxonomy,
    ),
    displayName: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    geoTaxonomy: Schema.optional(
      GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy,
    ),
    skuId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaSkuGroupSku",
  });

export interface GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse {
  /** The returned SKU group SKUs. */
  skuGroupSkus?: ReadonlyArray<GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>;
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse: Schema.Codec<GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skuGroupSkus: Schema.optional(
      Schema.Array(GoogleCloudBillingSkugroupskusV1betaSkuGroupSku),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount {
  /** Type of the floating discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'. */
  discountScopeType?: string;
  /** SKU group where the floating discount comes from. */
  skuGroup?: string;
  /** Percentage of the floating discount. */
  discountPercent?: Decimal;
}

export const GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discountScopeType: Schema.optional(Schema.String),
    skuGroup: Schema.optional(Schema.String),
    discountPercent: Schema.optional(Decimal),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaMergedPrice {}

export const GoogleCloudBillingBillingaccountpricesV1betaMergedPrice: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaMergedPrice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaMergedPrice",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaUnitInfo {
  /** Shorthand for the unit. Example: GiBy.mo. */
  unit?: string;
  /** Human-readable description of the unit. Example: gibibyte month. */
  unitDescription?: string;
  /** Unit quantity for the tier. Example: if the RateTier price is $1 per 1000000 Bytes, then `unit_quantity` is set to 1000000. */
  unitQuantity?: Decimal;
}

export const GoogleCloudBillingBillingaccountpricesV1betaUnitInfo: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaUnitInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    unitDescription: Schema.optional(Schema.String),
    unitQuantity: Schema.optional(Decimal),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaUnitInfo",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy {
  /** All product categories that the billing account SKU group SKU belong to. */
  taxonomyCategories?: ReadonlyArray<GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory>;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomyCategories: Schema.optional(
      Schema.Array(
        GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku {
  /** BillingAccountService that the BillingAccountSkuGroupSku belongs to. */
  billingAccountService?: string;
  /** List of product categories that apply to the BillingAccountSkuGroupSku. */
  productTaxonomy?: GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy;
  /** Description of the BillingAccountSkuGroupSku. Example: "A2 Instance Core running in Hong Kong". */
  displayName?: string;
  /** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
  skuId?: string;
  /** Resource name for the BillingAccountSkuGroupSku. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE". */
  name?: string;
  /** Geographic metadata that applies to the BillingAccountSkuGroupSku. */
  geoTaxonomy?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountService: Schema.optional(Schema.String),
    productTaxonomy: Schema.optional(
      GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy,
    ),
    displayName: Schema.optional(Schema.String),
    skuId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    geoTaxonomy: Schema.optional(
      GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku",
  });

export interface GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse {
  /** The returned billing account SKU group SKUs. */
  billingAccountSkuGroupSkus?: ReadonlyArray<GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>;
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse: Schema.Codec<GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountSkuGroupSkus: Schema.optional(
      Schema.Array(
        GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse",
  });

export interface GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup {
  /** Resource name for the BillingAccountSkuGroup. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301". */
  name?: string;
  /** Description of the BillingAccountSkuGroup. Example: "A2 VMs (1 Year CUD)". */
  displayName?: string;
}

export const GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup: Schema.Codec<GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup",
  });

export interface GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse {
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
  /** The returned publicly listed billing account SKU groups. */
  billingAccountSkuGroups?: ReadonlyArray<GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>;
}

export const GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse: Schema.Codec<GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    billingAccountSkuGroups: Schema.optional(
      Schema.Array(
        GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo {
  /** Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account. */
  level?:
    | "LEVEL_UNSPECIFIED"
    | "LEVEL_ACCOUNT"
    | "LEVEL_PROJECT"
    | (string & {});
  /** Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month. */
  interval?:
    | "INTERVAL_UNSPECIFIED"
    | "INTERVAL_MONTHLY"
    | "INTERVAL_DAILY"
    | (string & {});
}

export const GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
    interval: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount {
  /** Percentage of the fixed discount. */
  discountPercent?: Decimal;
  /** Time that the fixed discount is anchored to. */
  fixTime?: string;
  /** SKU group where the fixed discount comes from. */
  skuGroup?: string;
  /** Type of the fixed discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'. */
  discountScopeType?: string;
}

export const GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discountPercent: Schema.optional(Decimal),
    fixTime: Schema.optional(Schema.String),
    skuGroup: Schema.optional(Schema.String),
    discountScopeType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice {}

export const GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaFixedPrice {}

export const GoogleCloudBillingBillingaccountpricesV1betaFixedPrice: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaFixedPrice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaFixedPrice",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaPriceReason {
  /** Type of the price reason. It can have values such as 'unspecified', 'default-price', 'fixed-price', 'fixed-discount', 'floating-discount', 'migrated-price', 'merged-price', 'list-price-as-ceiling'. */
  type?: string;
  /** Discount off the list price, anchored to the list price as of a fixed time. */
  fixedDiscount?: GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount;
  /** Price after merging from multiple sources. */
  mergedPrice?: GoogleCloudBillingBillingaccountpricesV1betaMergedPrice;
  /** Default price which is the current list price. */
  defaultPrice?: GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice;
  /** Discount off the current list price, not anchored to any list price as of a fixed time. */
  floatingDiscount?: GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount;
  /** Contract feature that the list price (DefaultPrice) will be used for the price if the current list price drops lower than the custom fixed price. Available to new contracts after March 21, 2022. Applies to all fixed price SKUs in the contract, including FixedPrice, FixedDiscount, MigratedPrice, and MergedPrice. */
  listPriceAsCeiling?: GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling;
  /** Fixed price applicable during the terms of a contract agreement. */
  fixedPrice?: GoogleCloudBillingBillingaccountpricesV1betaFixedPrice;
  /** Price migrated from other SKUs. */
  migratedPrice?: GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice;
}

export const GoogleCloudBillingBillingaccountpricesV1betaPriceReason: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaPriceReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    fixedDiscount: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount,
    ),
    mergedPrice: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaMergedPrice,
    ),
    defaultPrice: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice,
    ),
    floatingDiscount: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount,
    ),
    listPriceAsCeiling: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling,
    ),
    fixedPrice: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaFixedPrice,
    ),
    migratedPrice: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice,
    ),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaPriceReason",
  });

export interface BillingDataResource {
  /** Required. Resource name for an entitity that can be used for authorization to access billing data such as `projects/{project}` or `billingAccounts/{billing_account}` */
  resource?: string;
  /** Optional. If not provided the billing account currently associated with the resource will be used. */
  billingAccount?: string;
}

export const BillingDataResource: Schema.Codec<BillingDataResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    billingAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "BillingDataResource" });

export interface GenerateInsightsRequest {
  /** Optional. Additional context for personalization (e.g., user persona, role). */
  userContext?: UserContext;
  /** Optional. Overrides the maximum iterations for any selected strategy. */
  overriddenMaxIterationCounts?: number;
  /** Optional. The billing account or projects to analyze. */
  parents?: ReadonlyArray<BillingDataResource>;
  /** Optional. Filters cost data by service id. Follows https://google.aip.dev/160 for the filter syntax. eg. filter: "service = 'C7E2-9256-1C43'" */
  filter?: string;
  /** Required. The natural language prompt from the user. */
  prompt?: string;
}

export const GenerateInsightsRequest: Schema.Codec<GenerateInsightsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userContext: Schema.optional(UserContext),
    overriddenMaxIterationCounts: Schema.optional(Schema.Number),
    parents: Schema.optional(Schema.Array(BillingDataResource)),
    filter: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateInsightsRequest" });

export interface GoogleCloudBillingBillingaccountpricesV1betaRate {
  /** Unit info such as name and quantity. */
  unitInfo?: GoogleCloudBillingBillingaccountpricesV1betaUnitInfo;
  /** Aggregation info for tiers such as aggregation level and interval. */
  aggregationInfo?: GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo;
  /** All tiers associated with the `Rate` price. */
  tiers?: ReadonlyArray<GoogleCloudBillingBillingaccountpricesV1betaRateTier>;
}

export const GoogleCloudBillingBillingaccountpricesV1betaRate: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitInfo: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaUnitInfo,
    ),
    aggregationInfo: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo,
    ),
    tiers: Schema.optional(
      Schema.Array(GoogleCloudBillingBillingaccountpricesV1betaRateTier),
    ),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountpricesV1betaRate",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional {
  /** Google Cloud regions associated with the multi-regional geographic taxonomy. */
  regions?: ReadonlyArray<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion>;
}

export const GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(
      Schema.Array(GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion),
    ),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy {
  /** Multi-regional geographic metadata with 2 or more regions. */
  multiRegionalMetadata?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional;
  /** Type of geographic taxonomy associated with the billing account SKU. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_GLOBAL"
    | "TYPE_REGIONAL"
    | "TYPE_MULTI_REGIONAL"
    | (string & {});
  /** Global geographic metadata with no regions. */
  globalMetadata?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal;
  /** Regional geographic metadata with 1 region. */
  regionalMetadata?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional;
}

export const GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multiRegionalMetadata: Schema.optional(
      GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional,
    ),
    type: Schema.optional(Schema.String),
    globalMetadata: Schema.optional(
      GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal,
    ),
    regionalMetadata: Schema.optional(
      GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional,
    ),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy {
  /** All product categories that the billing account SKU belong to. */
  taxonomyCategories?: ReadonlyArray<GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory>;
}

export const GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomyCategories: Schema.optional(
      Schema.Array(GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory),
    ),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku {
  /** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
  skuId?: string;
  /** Resource name for the BillingAccountSku. Example: "billingAccounts/012345-567890-ABCDEF/skus/AA95-CD31-42FE". */
  name?: string;
  /** Geographic metadata that applies to the BillingAccountSku. */
  geoTaxonomy?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy;
  /** BillingAccountService that the BillingAccountSku belongs to. */
  billingAccountService?: string;
  /** List of product categories that apply to the BillingAccountSku. */
  productTaxonomy?: GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy;
  /** Description of the BillingAccountSku. Example: "A2 Instance Core running in Hong Kong". */
  displayName?: string;
}

export const GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skuId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    geoTaxonomy: Schema.optional(
      GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy,
    ),
    billingAccountService: Schema.optional(Schema.String),
    productTaxonomy: Schema.optional(
      GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy,
    ),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku",
  });

export interface GoogleCloudBillingSkugroupsV1betaSkuGroup {
  /** Resource name for the SKU group. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301". */
  name?: string;
  /** Description of the SKU group. Example: "A2 VMs (1 Year CUD)". */
  displayName?: string;
}

export const GoogleCloudBillingSkugroupsV1betaSkuGroup: Schema.Codec<GoogleCloudBillingSkugroupsV1betaSkuGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudBillingSkugroupsV1betaSkuGroup" });

export interface GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice {
  /** Rate price metadata. Billing account SKUs with `Rate` price are offered by pricing tiers. The price can have 1 or more rate pricing tiers. */
  rate?: GoogleCloudBillingBillingaccountpricesV1betaRate;
  /** Type of the price. The possible values are: ["unspecified", "rate"]. */
  valueType?: string;
  /** Resource name for the latest billing account price. */
  name?: string;
  /** Background information on the origin of the price. */
  priceReason?: GoogleCloudBillingBillingaccountpricesV1betaPriceReason;
  /** ISO-4217 currency code for the price. */
  currencyCode?: string;
}

export const GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rate: Schema.optional(GoogleCloudBillingBillingaccountpricesV1betaRate),
    valueType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    priceReason: Schema.optional(
      GoogleCloudBillingBillingaccountpricesV1betaPriceReason,
    ),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice",
  });

export interface GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse {
  /** The returned billing account prices. */
  billingAccountPrices?: ReadonlyArray<GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>;
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse: Schema.Codec<GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountPrices: Schema.optional(
      Schema.Array(
        GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse",
  });

export interface GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse {
  /** The returned billing account SKUs. */
  billingAccountSkus?: ReadonlyArray<GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>;
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse: Schema.Codec<GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountSkus: Schema.optional(
      Schema.Array(GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse",
  });

export interface GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse {
  /** The returned publicly listed SKU groups. */
  skuGroups?: ReadonlyArray<GoogleCloudBillingSkugroupsV1betaSkuGroup>;
  /** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse: Schema.Codec<GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skuGroups: Schema.optional(
      Schema.Array(GoogleCloudBillingSkugroupsV1betaSkuGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse",
  });

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

export interface GetSkusPriceRequest {
  /** Optional. ISO-4217 currency code for the price. If not specified, USD will be used. */
  currencyCode?: string;
  /** Required. Name of the latest price to retrieve. Format: skus/{sku}/price */
  name: string;
}

export const GetSkusPriceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("currencyCode"),
  ),
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetSkusPriceRequest>;

export type GetSkusPriceResponse = GoogleCloudBillingPricesV1betaPrice;
export const GetSkusPriceResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingPricesV1betaPrice;

export type GetSkusPriceError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest price for the given SKU. */
export const getSkusPrice: API.OperationMethod<
  GetSkusPriceRequest,
  GetSkusPriceResponse,
  GetSkusPriceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSkusPriceRequest,
  output: GetSkusPriceResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSkusPricesRequest {
  /** Optional. Maximum number of prices to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
  /** Required. To list the prices for all SKUs, use `-` as the SKU ID. Format: `skus/-` Specifying a specific SKU ID returns a collection with one Price object for the SKU. */
  parent: string;
  /** Optional. Page token received from a previous ListPrices call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
  /** Optional. ISO-4217 currency code for the price. If not specified, USD will be used. */
  currencyCode?: string;
}

export const ListSkusPricesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  parent: Schema.String.pipe(T.HttpPath("parent")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  currencyCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("currencyCode"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/{+parent}/prices" }),
  svc,
) as unknown as Schema.Codec<ListSkusPricesRequest>;

export type ListSkusPricesResponse =
  GoogleCloudBillingPricesV1betaListPricesResponse;
export const ListSkusPricesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingPricesV1betaListPricesResponse;

export type ListSkusPricesError = DefaultErrors | NotFound | Forbidden;

/** Lists the latest prices for all SKUs. */
export const listSkusPrices: API.PaginatedOperationMethod<
  ListSkusPricesRequest,
  ListSkusPricesResponse,
  ListSkusPricesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSkusPricesRequest,
  output: ListSkusPricesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListBillingAccountsServicesRequest {
  /** Maximum number of billing account service to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
  /** Required. The billing account to list billing account service from. Format: billingAccounts/{billing_account} */
  parent: string;
  /** Page token received from a previous ListBillingAccountServices call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
}

export const ListBillingAccountsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/services" }),
    svc,
  ) as unknown as Schema.Codec<ListBillingAccountsServicesRequest>;

export type ListBillingAccountsServicesResponse =
  GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse;
export const ListBillingAccountsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse;

export type ListBillingAccountsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists services visible to a billing account. */
export const listBillingAccountsServices: API.PaginatedOperationMethod<
  ListBillingAccountsServicesRequest,
  ListBillingAccountsServicesResponse,
  ListBillingAccountsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingAccountsServicesRequest,
  output: ListBillingAccountsServicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetBillingAccountsServicesRequest {
  /** Required. The name of the billing account service to retrieve. Format: billingAccounts/{billing_account}/services/{service} */
  name: string;
}

export const GetBillingAccountsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetBillingAccountsServicesRequest>;

export type GetBillingAccountsServicesResponse =
  GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService;
export const GetBillingAccountsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService;

export type GetBillingAccountsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Google Cloud service visible to a billing account. */
export const getBillingAccountsServices: API.OperationMethod<
  GetBillingAccountsServicesRequest,
  GetBillingAccountsServicesResponse,
  GetBillingAccountsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingAccountsServicesRequest,
  output: GetBillingAccountsServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBillingAccountsSkusRequest {
  /** Required. The billing account to list billing account SKU from. Format: billingAccounts/{billing_account} */
  parent: string;
  /** Options for how to filter the billing account SKUs. Currently, only filter on `billing_account_service` is supported. Only !=, = operators are supported. Examples: - billing_account_service = "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397" */
  filter?: string;
  /** Page token received from a previous ListBillingAccountSkus call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
  /** Maximum number of billing account SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
}

export const ListBillingAccountsSkusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/skus" }),
    svc,
  ) as unknown as Schema.Codec<ListBillingAccountsSkusRequest>;

export type ListBillingAccountsSkusResponse =
  GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse;
export const ListBillingAccountsSkusResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse;

export type ListBillingAccountsSkusError = DefaultErrors | NotFound | Forbidden;

/** Lists SKUs visible to a billing account. */
export const listBillingAccountsSkus: API.PaginatedOperationMethod<
  ListBillingAccountsSkusRequest,
  ListBillingAccountsSkusResponse,
  ListBillingAccountsSkusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingAccountsSkusRequest,
  output: ListBillingAccountsSkusResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetBillingAccountsSkusRequest {
  /** Required. The name of the billing account SKU to retrieve. Format: billingAccounts/{billing_account}/skus/{sku} */
  name: string;
}

export const GetBillingAccountsSkusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetBillingAccountsSkusRequest>;

export type GetBillingAccountsSkusResponse =
  GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku;
export const GetBillingAccountsSkusResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku;

export type GetBillingAccountsSkusError = DefaultErrors | NotFound | Forbidden;

/** Gets a SKU visible to a billing account. */
export const getBillingAccountsSkus: API.OperationMethod<
  GetBillingAccountsSkusRequest,
  GetBillingAccountsSkusResponse,
  GetBillingAccountsSkusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingAccountsSkusRequest,
  output: GetBillingAccountsSkusResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetBillingAccountsSkusPriceRequest {
  /** Required. Name of the billing account price to retrieve. Format: billingAccounts/{billing_account}/skus/{sku}/price */
  name: string;
  /** Optional. ISO-4217 currency code for the price. If not specified, the currency of the billing account is used. */
  currencyCode?: string;
}

export const GetBillingAccountsSkusPriceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    currencyCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("currencyCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetBillingAccountsSkusPriceRequest>;

export type GetBillingAccountsSkusPriceResponse =
  GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice;
export const GetBillingAccountsSkusPriceResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice;

export type GetBillingAccountsSkusPriceError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest price for SKUs available to your Cloud Billing account. */
export const getBillingAccountsSkusPrice: API.OperationMethod<
  GetBillingAccountsSkusPriceRequest,
  GetBillingAccountsSkusPriceResponse,
  GetBillingAccountsSkusPriceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingAccountsSkusPriceRequest,
  output: GetBillingAccountsSkusPriceResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBillingAccountsSkusPricesRequest {
  /** Required. To list all Billing Account SKUs, use `-` as the SKU ID. Format: `billingAccounts/{billing_account}/skus/-` Note: Specifying an actual SKU resource id will return a collection of one Billing Account Price. */
  parent: string;
  /** Optional. ISO-4217 currency code for the price. If not specified, currency of billing account will be used. */
  currencyCode?: string;
  /** Optional. Page token received from a previous ListBillingAccountPrices call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
  /** Optional. Maximum number of billing account price to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
}

export const ListBillingAccountsSkusPricesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    currencyCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("currencyCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/prices" }),
    svc,
  ) as unknown as Schema.Codec<ListBillingAccountsSkusPricesRequest>;

export type ListBillingAccountsSkusPricesResponse =
  GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse;
export const ListBillingAccountsSkusPricesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse;

export type ListBillingAccountsSkusPricesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the latest prices for SKUs available to your Cloud Billing account. */
export const listBillingAccountsSkusPrices: API.PaginatedOperationMethod<
  ListBillingAccountsSkusPricesRequest,
  ListBillingAccountsSkusPricesResponse,
  ListBillingAccountsSkusPricesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingAccountsSkusPricesRequest,
  output: ListBillingAccountsSkusPricesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListBillingAccountsSkuGroupsRequest {
  /** Maximum number of billing account SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
  /** Required. The billing account to list billing account SKU groups from. Format: billingAccounts/{billing_account} */
  parent: string;
  /** Page token received from a previous ListBillingAccountSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
}

export const ListBillingAccountsSkuGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/skuGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListBillingAccountsSkuGroupsRequest>;

export type ListBillingAccountsSkuGroupsResponse =
  GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse;
export const ListBillingAccountsSkuGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse;

export type ListBillingAccountsSkuGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SKU groups visible to a billing account. */
export const listBillingAccountsSkuGroups: API.PaginatedOperationMethod<
  ListBillingAccountsSkuGroupsRequest,
  ListBillingAccountsSkuGroupsResponse,
  ListBillingAccountsSkuGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingAccountsSkuGroupsRequest,
  output: ListBillingAccountsSkuGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetBillingAccountsSkuGroupsRequest {
  /** Required. The name of the BillingAccountSkuGroup to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group} */
  name: string;
}

export const GetBillingAccountsSkuGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetBillingAccountsSkuGroupsRequest>;

export type GetBillingAccountsSkuGroupsResponse =
  GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup;
export const GetBillingAccountsSkuGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup;

export type GetBillingAccountsSkuGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a SKU group visible to a billing account. */
export const getBillingAccountsSkuGroups: API.OperationMethod<
  GetBillingAccountsSkuGroupsRequest,
  GetBillingAccountsSkuGroupsResponse,
  GetBillingAccountsSkuGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingAccountsSkuGroupsRequest,
  output: GetBillingAccountsSkuGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBillingAccountsSkuGroupsSkusRequest {
  /** Required. The billing account SKU group to list billing account SKU group SKUs from. Format: billingAccounts/{billing_account}/skuGroups/{sku_group} */
  parent: string;
  /** Page token received from a previous ListBillingAccountSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
  /** Maximum number of billing account SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
}

export const ListBillingAccountsSkuGroupsSkusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/skus" }),
    svc,
  ) as unknown as Schema.Codec<ListBillingAccountsSkuGroupsSkusRequest>;

export type ListBillingAccountsSkuGroupsSkusResponse =
  GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse;
export const ListBillingAccountsSkuGroupsSkusResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse;

export type ListBillingAccountsSkuGroupsSkusError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SKUs that is part of billing account SKU groups. */
export const listBillingAccountsSkuGroupsSkus: API.PaginatedOperationMethod<
  ListBillingAccountsSkuGroupsSkusRequest,
  ListBillingAccountsSkuGroupsSkusResponse,
  ListBillingAccountsSkuGroupsSkusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingAccountsSkuGroupsSkusRequest,
  output: ListBillingAccountsSkuGroupsSkusResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetBillingAccountsSkuGroupsSkusRequest {
  /** Required. The name of the billing account SKU group SKU to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}/skus/{sku} */
  name: string;
}

export const GetBillingAccountsSkuGroupsSkusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetBillingAccountsSkuGroupsSkusRequest>;

export type GetBillingAccountsSkuGroupsSkusResponse =
  GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku;
export const GetBillingAccountsSkuGroupsSkusResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku;

export type GetBillingAccountsSkuGroupsSkusError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a SKU that is part of a billing account SKU group. */
export const getBillingAccountsSkuGroupsSkus: API.OperationMethod<
  GetBillingAccountsSkuGroupsSkusRequest,
  GetBillingAccountsSkuGroupsSkusResponse,
  GetBillingAccountsSkuGroupsSkusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingAccountsSkuGroupsSkusRequest,
  output: GetBillingAccountsSkuGroupsSkusResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSkuGroupsRequest {
  /** Maximum number of SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
  /** Page token received from a previous ListSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
}

export const ListSkuGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/skuGroups" }),
  svc,
) as unknown as Schema.Codec<ListSkuGroupsRequest>;

export type ListSkuGroupsResponse =
  GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse;
export const ListSkuGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse;

export type ListSkuGroupsError = DefaultErrors | NotFound | Forbidden;

/** Lists all publicly listed SKU groups. */
export const listSkuGroups: API.PaginatedOperationMethod<
  ListSkuGroupsRequest,
  ListSkuGroupsResponse,
  ListSkuGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSkuGroupsRequest,
  output: ListSkuGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetSkuGroupsRequest {
  /** Required. The name of the SKU group to retrieve. Format: skuGroups/{sku_group} */
  name: string;
}

export const GetSkuGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetSkuGroupsRequest>;

export type GetSkuGroupsResponse = GoogleCloudBillingSkugroupsV1betaSkuGroup;
export const GetSkuGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingSkugroupsV1betaSkuGroup;

export type GetSkuGroupsError = DefaultErrors | NotFound | Forbidden;

/** Gets a publicly listed SKU group. */
export const getSkuGroups: API.OperationMethod<
  GetSkuGroupsRequest,
  GetSkuGroupsResponse,
  GetSkuGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSkuGroupsRequest,
  output: GetSkuGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSkuGroupsSkusRequest {
  /** Required. The SkuGroup to list SkuGroupSku from. Format: skuGroups/{sku_group} */
  parent: string;
  /** Page token received from a previous ListSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned. */
  pageToken?: string;
  /** Maximum number of SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. */
  pageSize?: number;
}

export const ListSkuGroupsSkusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/skus" }),
    svc,
  ) as unknown as Schema.Codec<ListSkuGroupsSkusRequest>;

export type ListSkuGroupsSkusResponse =
  GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse;
export const ListSkuGroupsSkusResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse;

export type ListSkuGroupsSkusError = DefaultErrors | NotFound | Forbidden;

/** Lists all publicly listed SKUs contained by a publicly listed SKU group. */
export const listSkuGroupsSkus: API.PaginatedOperationMethod<
  ListSkuGroupsSkusRequest,
  ListSkuGroupsSkusResponse,
  ListSkuGroupsSkusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSkuGroupsSkusRequest,
  output: ListSkuGroupsSkusResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetSkuGroupsSkusRequest {
  /** Required. The name of the SKU group SKU to retrieve. Format: skuGroups/{sku_group}/skus/{sku} */
  name: string;
}

export const GetSkuGroupsSkusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSkuGroupsSkusRequest>;

export type GetSkuGroupsSkusResponse =
  GoogleCloudBillingSkugroupskusV1betaSkuGroupSku;
export const GetSkuGroupsSkusResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBillingSkugroupskusV1betaSkuGroupSku;

export type GetSkuGroupsSkusError = DefaultErrors | NotFound | Forbidden;

/** Gets a publicly listed SKU that is part of a publicly listed SKU group. */
export const getSkuGroupsSkus: API.OperationMethod<
  GetSkuGroupsSkusRequest,
  GetSkuGroupsSkusResponse,
  GetSkuGroupsSkusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSkuGroupsSkusRequest,
  output: GetSkuGroupsSkusResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateInsightsV1betaRequest {
  /** Request body */
  body?: GenerateInsightsRequest;
}

export const GenerateInsightsV1betaRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GenerateInsightsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta:generateInsights", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<GenerateInsightsV1betaRequest>;

export type GenerateInsightsV1betaResponse = GenerateInsightsResponse;
export const GenerateInsightsV1betaResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateInsightsResponse;

export type GenerateInsightsV1betaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Analyzes cost data for a billing account and/or specific projects. Returns a natural language summary and supporting datasets. */
export const generateInsightsV1beta: API.OperationMethod<
  GenerateInsightsV1betaRequest,
  GenerateInsightsV1betaResponse,
  GenerateInsightsV1betaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateInsightsV1betaRequest,
  output: GenerateInsightsV1betaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
