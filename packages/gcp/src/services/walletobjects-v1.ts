// ==========================================================================
// Google Wallet API (walletobjects v1)
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
  name: "walletobjects",
  version: "v1",
  rootUrl: "https://walletobjects.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ActivationStatus {
  state?:
    | "UNKNOWN_STATE"
    | "NOT_ACTIVATED"
    | "not_activated"
    | "ACTIVATED"
    | "activated"
    | (string & {});
}

export const ActivationStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "ActivationStatus" });

export interface TranslatedString {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#translatedString"`. */
  kind?: string;
  /** Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
  language?: string;
  /** The UTF-8 encoded translated string. */
  value?: string;
}

export const TranslatedString = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  language: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "TranslatedString" });

export interface LocalizedString {
  /** Contains the translations for the string. */
  translatedValues?: ReadonlyArray<TranslatedString>;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#localizedString"`. */
  kind?: string;
  /** Contains the string to be displayed if no appropriate translation is available. */
  defaultValue?: TranslatedString;
}

export const LocalizedString = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  translatedValues: Schema.optional(Schema.Array(TranslatedString)),
  kind: Schema.optional(Schema.String),
  defaultValue: Schema.optional(TranslatedString),
}).annotate({ identifier: "LocalizedString" });

export interface LabelValue {
  /** The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  label?: string;
  /** The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  value?: string;
  /** Translated strings for the label. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  localizedLabel?: LocalizedString;
  /** Translated strings for the value. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  localizedValue?: LocalizedString;
}

export const LabelValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  localizedLabel: Schema.optional(LocalizedString),
  localizedValue: Schema.optional(LocalizedString),
}).annotate({ identifier: "LabelValue" });

export interface LabelValueRow {
  /** A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name. */
  columns?: ReadonlyArray<LabelValue>;
}

export const LabelValueRow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columns: Schema.optional(Schema.Array(LabelValue)),
}).annotate({ identifier: "LabelValueRow" });

export interface InfoModuleData {
  /** A list of collections of labels and values. These will be displayed one after the other in a singular column. */
  labelValueRows?: ReadonlyArray<LabelValueRow>;
  showLastUpdateTime?: boolean;
}

export const InfoModuleData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labelValueRows: Schema.optional(Schema.Array(LabelValueRow)),
  showLastUpdateTime: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "InfoModuleData" });

export interface ImageUri {
  /** The location of the image. URIs must have a scheme. */
  uri?: string;
  /** Additional information about the image, which is unused and retained only for backward compatibility. */
  description?: string;
  /** Translated strings for the description, which are unused and retained only for backward compatibility. */
  localizedDescription?: LocalizedString;
}

export const ImageUri = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  localizedDescription: Schema.optional(LocalizedString),
}).annotate({ identifier: "ImageUri" });

export interface Image {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#image"`. */
  kind?: string;
  /** An ID for an already uploaded private image. Either this or source_uri should be set. Requests setting both or neither will be rejected. Please contact support to use private images. */
  privateImageId?: string;
  /** A URI for the image. Either this or private_image_id should be set. Requests setting both or neither will be rejected. */
  sourceUri?: ImageUri;
  /** Description of the image used for accessibility. */
  contentDescription?: LocalizedString;
}

export const Image = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  privateImageId: Schema.optional(Schema.String),
  sourceUri: Schema.optional(ImageUri),
  contentDescription: Schema.optional(LocalizedString),
}).annotate({ identifier: "Image" });

export interface Uri {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#uri"`. */
  kind?: string;
  /** The ID associated with a uri. This field is here to enable ease of management of uris. */
  id?: string;
  /** The URI's title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when `description` is part of an image. */
  description?: string;
  /** Translated strings for the description. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. */
  localizedDescription?: LocalizedString;
  /** The location of a web page, image, or other resource. URIs in the `LinksModuleData` module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme. */
  uri?: string;
}

export const Uri = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  localizedDescription: Schema.optional(LocalizedString),
  uri: Schema.optional(Schema.String),
}).annotate({ identifier: "Uri" });

export interface AppLinkDataAppLinkInfoAppTarget {
  /** Package name for AppTarget. For example: com.google.android.gm */
  packageName?: string;
  /** URI for AppTarget. The description on the URI must be set. Prefer setting package field instead, if this target is defined for your application. */
  targetUri?: Uri;
}

export const AppLinkDataAppLinkInfoAppTarget =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    targetUri: Schema.optional(Uri),
  }).annotate({ identifier: "AppLinkDataAppLinkInfoAppTarget" });

export interface AppLinkDataAppLinkInfo {
  /** Deprecated. Image isn't supported in the app link module. */
  appLogoImage?: Image;
  /** Deprecated. Description isn't supported in the app link module. */
  description?: LocalizedString;
  /** Target to follow when opening the app link on clients. It will be used by partners to open their app or webpage. */
  appTarget?: AppLinkDataAppLinkInfoAppTarget;
  /** Deprecated. Title isn't supported in the app link module. */
  title?: LocalizedString;
}

export const AppLinkDataAppLinkInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    appLogoImage: Schema.optional(Image),
    description: Schema.optional(LocalizedString),
    appTarget: Schema.optional(AppLinkDataAppLinkInfoAppTarget),
    title: Schema.optional(LocalizedString),
  },
).annotate({ identifier: "AppLinkDataAppLinkInfo" });

export interface AppLinkData {
  /** Optional information about the partner web link. */
  webAppLinkInfo?: AppLinkDataAppLinkInfo;
  /** Optional display text for the app link button. Character limit is 30. */
  displayText?: LocalizedString;
  /** Optional information about the partner app link. */
  androidAppLinkInfo?: AppLinkDataAppLinkInfo;
  /** Deprecated. Links to open iOS apps are not supported. */
  iosAppLinkInfo?: AppLinkDataAppLinkInfo;
}

export const AppLinkData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webAppLinkInfo: Schema.optional(AppLinkDataAppLinkInfo),
  displayText: Schema.optional(LocalizedString),
  androidAppLinkInfo: Schema.optional(AppLinkDataAppLinkInfo),
  iosAppLinkInfo: Schema.optional(AppLinkDataAppLinkInfo),
}).annotate({ identifier: "AppLinkData" });

export interface MerchantLocation {
  /** The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected. */
  latitude?: number;
  /** The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected. */
  longitude?: number;
}

export const MerchantLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
}).annotate({ identifier: "MerchantLocation" });

export interface EventSeat {
  /** The section of the seat, such as "121". This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  section?: LocalizedString;
  /** The row of the seat, such as "1", E", "BB", or "A5". This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  row?: LocalizedString;
  /** The gate the ticket holder should enter to get to their seat, such as "A" or "West". This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  gate?: LocalizedString;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventSeat"`. */
  kind?: string;
  /** The seat number, such as "1", "2", "3", or any other seat identifier. This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  seat?: LocalizedString;
}

export const EventSeat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  section: Schema.optional(LocalizedString),
  row: Schema.optional(LocalizedString),
  gate: Schema.optional(LocalizedString),
  kind: Schema.optional(Schema.String),
  seat: Schema.optional(LocalizedString),
}).annotate({ identifier: "EventSeat" });

export interface ImageModuleData {
  /** The ID associated with an image module. This field is here to enable ease of management of image modules. */
  id?: string;
  /** A 100% width image. */
  mainImage?: Image;
}

export const ImageModuleData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  mainImage: Schema.optional(Image),
}).annotate({ identifier: "ImageModuleData" });

export interface LatLongPoint {
  /** The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected. */
  latitude?: number;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#latLongPoint"`. */
  kind?: string;
  /** The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected. */
  longitude?: number;
}

export const LatLongPoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latitude: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  longitude: Schema.optional(Schema.Number),
}).annotate({ identifier: "LatLongPoint" });

export interface EventReservationInfo {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventReservationInfo"`. */
  kind?: string;
  /** The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent. */
  confirmationCode?: string;
}

export const EventReservationInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  confirmationCode: Schema.optional(Schema.String),
}).annotate({ identifier: "EventReservationInfo" });

export interface RotatingBarcodeTotpDetailsTotpParameters {
  /** The secret key used for the TOTP value generation, encoded as a Base16 string. */
  key?: string;
  /** The length of the TOTP value in decimal digits. */
  valueLength?: number;
}

export const RotatingBarcodeTotpDetailsTotpParameters =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    valueLength: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RotatingBarcodeTotpDetailsTotpParameters" });

export interface RotatingBarcodeTotpDetails {
  /** The TOTP parameters for each of the {totp_value_*} substitutions. The TotpParameters at index n is used for the {totp_value_n} substitution. */
  parameters?: ReadonlyArray<RotatingBarcodeTotpDetailsTotpParameters>;
  /** The time interval used for the TOTP value generation, in milliseconds. */
  periodMillis?: string;
  /** The TOTP algorithm used to generate the OTP. */
  algorithm?: "TOTP_ALGORITHM_UNSPECIFIED" | "TOTP_SHA1" | (string & {});
}

export const RotatingBarcodeTotpDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(RotatingBarcodeTotpDetailsTotpParameters),
    ),
    periodMillis: Schema.optional(Schema.String),
    algorithm: Schema.optional(Schema.String),
  }).annotate({ identifier: "RotatingBarcodeTotpDetails" });

export interface RotatingBarcodeValues {
  /** Required. The date/time the first barcode is valid from. Barcodes will be rotated through using period_millis defined on the object's RotatingBarcodeValueInfo. This is an ISO 8601 extended format date/time, with an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. */
  startDateTime?: string;
  /** Required. The amount of time each barcode is valid for. */
  periodMillis?: string;
  /** Required. The values to encode in the barcode. At least one value is required. */
  values?: ReadonlyArray<string>;
}

export const RotatingBarcodeValues = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startDateTime: Schema.optional(Schema.String),
  periodMillis: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RotatingBarcodeValues" });

export interface RotatingBarcode {
  /** Details used to evaluate the {totp_value_n} substitutions. */
  totpDetails?: RotatingBarcodeTotpDetails;
  /** The type of this barcode. */
  type?:
    | "BARCODE_TYPE_UNSPECIFIED"
    | "AZTEC"
    | "aztec"
    | "CODE_39"
    | "code39"
    | "CODE_128"
    | "code128"
    | "CODABAR"
    | "codabar"
    | "DATA_MATRIX"
    | "dataMatrix"
    | "EAN_8"
    | "ean8"
    | "EAN_13"
    | "ean13"
    | "EAN13"
    | "ITF_14"
    | "itf14"
    | "PDF_417"
    | "pdf417"
    | "PDF417"
    | "QR_CODE"
    | "qrCode"
    | "qrcode"
    | "UPC_A"
    | "upcA"
    | "TEXT_ONLY"
    | "textOnly"
    | (string & {});
  /** Input only. NOTE: This feature is only available for the transit vertical. Optional set of initial rotating barcode values. This allows a small subset of barcodes to be included with the object. Further rotating barcode values must be uploaded with the UploadRotatingBarcodeValues endpoint. */
  initialRotatingBarcodeValues?: RotatingBarcodeValues;
  /** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
  alternateText?: string;
  /** Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google. */
  showCodeText?: LocalizedString;
  /** String encoded barcode value. This string supports the following substitutions: * {totp_value_n}: Replaced with the TOTP value (see TotpDetails.parameters). * {totp_timestamp_millis}: Replaced with the timestamp (millis since epoch) at which the barcode was generated. * {totp_timestamp_seconds}: Replaced with the timestamp (seconds since epoch) at which the barcode was generated. */
  valuePattern?: string;
  /** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
  renderEncoding?: "RENDER_ENCODING_UNSPECIFIED" | "UTF_8" | (string & {});
}

export const RotatingBarcode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totpDetails: Schema.optional(RotatingBarcodeTotpDetails),
  type: Schema.optional(Schema.String),
  initialRotatingBarcodeValues: Schema.optional(RotatingBarcodeValues),
  alternateText: Schema.optional(Schema.String),
  showCodeText: Schema.optional(LocalizedString),
  valuePattern: Schema.optional(Schema.String),
  renderEncoding: Schema.optional(Schema.String),
}).annotate({ identifier: "RotatingBarcode" });

export interface LinksModuleData {
  /** The list of URIs. */
  uris?: ReadonlyArray<Uri>;
}

export const LinksModuleData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uris: Schema.optional(Schema.Array(Uri)),
}).annotate({ identifier: "LinksModuleData" });

export interface TextModuleData {
  /** The ID associated with a text module. This field is here to enable ease of management of text modules and referencing them in template overrides. The ID should only include alphanumeric characters, '_', or '-'. It can not include dots, as dots are used to separate fields within FieldReference.fieldPaths in template overrides. */
  id?: string;
  /** Translated strings for the header. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens. */
  localizedHeader?: LocalizedString;
  /** The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens. */
  body?: string;
  /** Translated strings for the body. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens. */
  localizedBody?: LocalizedString;
  /** The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens. */
  header?: string;
}

export const TextModuleData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  localizedHeader: Schema.optional(LocalizedString),
  body: Schema.optional(Schema.String),
  localizedBody: Schema.optional(LocalizedString),
  header: Schema.optional(Schema.String),
}).annotate({ identifier: "TextModuleData" });

export interface SaveRestrictions {
  /** Restrict the save of the referencing object to the given email address only. This is the hex output of SHA256 sum of the email address, all lowercase and without any notations like "." or "+", except "@". For example, for example@example.com, this value will be 31c5543c1734d25c7206f5fd591525d0295bec6fe84ff82f946a34fe970a1e66 and for Example@example.com, this value will be bc34f262c93ad7122763684ccea6f07fb7f5d8a2d11e60ce15a6f43fe70ce632 If email address of the logged-in user who tries to save this pass does not match with the defined value here, users won't be allowed to save this pass. They will instead be prompted with an error to contact the issuer. This information should be gathered from the user with an explicit consent via Sign in with Google integration https://developers.google.com/identity/authentication. Please contact with support before using Save Restrictions. */
  restrictToEmailSha256?: string;
}

export const SaveRestrictions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  restrictToEmailSha256: Schema.optional(Schema.String),
}).annotate({ identifier: "SaveRestrictions" });

export interface GroupingInfo {
  /** Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with the same sort index, the sorting behavior is undefined. */
  sortIndex?: number;
  /** Optional grouping ID for grouping the passes with the same ID visually together. Grouping with different types of passes is allowed. */
  groupingId?: string;
}

export const GroupingInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortIndex: Schema.optional(Schema.Number),
  groupingId: Schema.optional(Schema.String),
}).annotate({ identifier: "GroupingInfo" });

export interface DateTime {
  /** An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field's documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user's time zone. For example, a time of `2018-06-19T18:30:00-04:00` will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user's current time zone. For example, a time of `2018-06-19T18:30:00` will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones. */
  date?: string;
}

export const DateTime = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Schema.String),
}).annotate({ identifier: "DateTime" });

export interface TimeInterval {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#timeInterval"`. */
  kind?: string;
  /** End time of the interval. Offset is not required. If an offset is provided and `start` time is set, `start` must also include an offset. */
  end?: DateTime;
  /** Start time of the interval. Offset is not required. If an offset is provided and `end` time is set, `end` must also include an offset. */
  start?: DateTime;
}

export const TimeInterval = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  end: Schema.optional(DateTime),
  start: Schema.optional(DateTime),
}).annotate({ identifier: "TimeInterval" });

export interface ModuleViewConstraints {
  /** The period of time that the module will be displayed to users. Can define both a `startTime` and `endTime`. The module is displayed immediately after insertion unless a `startTime` is set. The module is displayed indefinitely if `endTime` is not set. */
  displayInterval?: TimeInterval;
}

export const ModuleViewConstraints = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayInterval: Schema.optional(TimeInterval),
}).annotate({ identifier: "ModuleViewConstraints" });

export interface ValueAddedModuleData {
  /** Image to be displayed on the module. Recommended image ratio is 1:1. Images will be resized to fit this ratio. */
  image?: Image;
  /** Header to be displayed on the module. Character limit is 60 and longer strings will be truncated. */
  header?: LocalizedString;
  /** Constraints that all must be met for the module to be shown. */
  viewConstraints?: ModuleViewConstraints;
  /** The index for sorting the modules. Modules with a lower sort index are shown before modules with a higher sort index. If unspecified, the sort index is assumed to be INT_MAX. For two modules with the same index, the sorting behavior is undefined. */
  sortIndex?: number;
  /** Body to be displayed on the module. Character limit is 50 and longer strings will be truncated. */
  body?: LocalizedString;
  /** URI that the module leads to on click. This can be a web link or a deep link as mentioned in https://developer.android.com/training/app-links/deep-linking. */
  uri?: string;
}

export const ValueAddedModuleData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  image: Schema.optional(Image),
  header: Schema.optional(LocalizedString),
  viewConstraints: Schema.optional(ModuleViewConstraints),
  sortIndex: Schema.optional(Schema.Number),
  body: Schema.optional(LocalizedString),
  uri: Schema.optional(Schema.String),
}).annotate({ identifier: "ValueAddedModuleData" });

export interface Review {
  comments?: string;
}

export const Review = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  comments: Schema.optional(Schema.String),
}).annotate({ identifier: "Review" });

export interface CallbackOptions {
  /** The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Googlebot. */
  url?: string;
  /** URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Googlebot. Deprecated. */
  updateRequestUrl?: string;
}

export const CallbackOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  updateRequestUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "CallbackOptions" });

export interface EventDateTime {
  /** A custom label to use for the doors open value (`doorsOpen`) on the card detail view. This should only be used if the default "Doors Open" label or one of the `doorsOpenLabel` options is not sufficient. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used. */
  customDoorsOpenLabel?: LocalizedString;
  /** The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  end?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventDateTime"`. */
  kind?: string;
  /** The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  doorsOpen?: string;
  /** The label to use for the doors open value (`doorsOpen`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used. */
  doorsOpenLabel?:
    | "DOORS_OPEN_LABEL_UNSPECIFIED"
    | "DOORS_OPEN"
    | "doorsOpen"
    | "GATES_OPEN"
    | "gatesOpen"
    | (string & {});
  /** The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  start?: string;
}

export const EventDateTime = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customDoorsOpenLabel: Schema.optional(LocalizedString),
  end: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  doorsOpen: Schema.optional(Schema.String),
  doorsOpenLabel: Schema.optional(Schema.String),
  start: Schema.optional(Schema.String),
}).annotate({ identifier: "EventDateTime" });

export interface EventVenue {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventVenue"`. */
  kind?: string;
  /** The name of the venue, such as "AT&T Park". This is required. */
  name?: LocalizedString;
  /** The address of the venue, such as "24 Willie Mays Plaza\nSan Francisco, CA 94107". Address lines are separated by line feed (`\n`) characters. This is required. */
  address?: LocalizedString;
}

export const EventVenue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  name: Schema.optional(LocalizedString),
  address: Schema.optional(LocalizedString),
}).annotate({ identifier: "EventVenue" });

export interface FieldReference {
  /** Only valid if the `fieldPath` references a date field. Chooses how the date field will be formatted and displayed in the UI. */
  dateFormat?:
    | "DATE_FORMAT_UNSPECIFIED"
    | "DATE_TIME"
    | "dateTime"
    | "DATE_ONLY"
    | "dateOnly"
    | "TIME_ONLY"
    | "timeOnly"
    | "DATE_TIME_YEAR"
    | "dateTimeYear"
    | "DATE_YEAR"
    | "dateYear"
    | "YEAR_MONTH"
    | "YEAR_MONTH_DAY"
    | (string & {});
  /** Path to the field being referenced, prefixed with "object" or "class" and separated with dots. For example, it may be the string "object.purchaseDetails.purchasePrice". */
  fieldPath?: string;
}

export const FieldReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dateFormat: Schema.optional(Schema.String),
  fieldPath: Schema.optional(Schema.String),
}).annotate({ identifier: "FieldReference" });

export interface FieldSelector {
  /** If more than one reference is supplied, then the first one that references a non-empty field will be displayed. */
  fields?: ReadonlyArray<FieldReference>;
}

export const FieldSelector = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fields: Schema.optional(Schema.Array(FieldReference)),
}).annotate({ identifier: "FieldSelector" });

export interface TemplateItem {
  /** A reference to a field to display. This may only be populated if the `firstValue` field is populated. */
  secondValue?: FieldSelector;
  /** A reference to a field to display. If both `firstValue` and `secondValue` are populated, they will both appear as one item with a slash between them. For example, values A and B would be shown as "A / B". */
  firstValue?: FieldSelector;
  /** A predefined item to display. Only one of `firstValue` or `predefinedItem` may be set. */
  predefinedItem?:
    | "PREDEFINED_ITEM_UNSPECIFIED"
    | "FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER"
    | "frequentFlyerProgramNameAndNumber"
    | "FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER"
    | "flightNumberAndOperatingFlightNumber"
    | (string & {});
}

export const TemplateItem = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secondValue: Schema.optional(FieldSelector),
  firstValue: Schema.optional(FieldSelector),
  predefinedItem: Schema.optional(Schema.String),
}).annotate({ identifier: "TemplateItem" });

export interface CardRowThreeItems {
  /** The item to be displayed at the start of the row. This item will be aligned to the left. */
  startItem?: TemplateItem;
  /** The item to be displayed in the middle of the row. This item will be centered between the start and end items. */
  middleItem?: TemplateItem;
  /** The item to be displayed at the end of the row. This item will be aligned to the right. */
  endItem?: TemplateItem;
}

export const CardRowThreeItems = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startItem: Schema.optional(TemplateItem),
  middleItem: Schema.optional(TemplateItem),
  endItem: Schema.optional(TemplateItem),
}).annotate({ identifier: "CardRowThreeItems" });

export interface CardRowOneItem {
  /** The item to be displayed in the row. This item will be automatically centered. */
  item?: TemplateItem;
}

export const CardRowOneItem = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  item: Schema.optional(TemplateItem),
}).annotate({ identifier: "CardRowOneItem" });

export interface CardRowTwoItems {
  /** The item to be displayed at the start of the row. This item will be aligned to the left. */
  startItem?: TemplateItem;
  /** The item to be displayed at the end of the row. This item will be aligned to the right. */
  endItem?: TemplateItem;
}

export const CardRowTwoItems = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startItem: Schema.optional(TemplateItem),
  endItem: Schema.optional(TemplateItem),
}).annotate({ identifier: "CardRowTwoItems" });

export interface CardRowTemplateInfo {
  /** Template for a row containing three items. Exactly one of "one_item", "two_items", "three_items" must be set. */
  threeItems?: CardRowThreeItems;
  /** Template for a row containing one item. Exactly one of "one_item", "two_items", "three_items" must be set. */
  oneItem?: CardRowOneItem;
  /** Template for a row containing two items. Exactly one of "one_item", "two_items", "three_items" must be set. */
  twoItems?: CardRowTwoItems;
}

export const CardRowTemplateInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  threeItems: Schema.optional(CardRowThreeItems),
  oneItem: Schema.optional(CardRowOneItem),
  twoItems: Schema.optional(CardRowTwoItems),
}).annotate({ identifier: "CardRowTemplateInfo" });

export interface CardTemplateOverride {
  /** Template information for rows in the card view. At most three rows are allowed to be specified. */
  cardRowTemplateInfos?: ReadonlyArray<CardRowTemplateInfo>;
}

export const CardTemplateOverride = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cardRowTemplateInfos: Schema.optional(Schema.Array(CardRowTemplateInfo)),
}).annotate({ identifier: "CardTemplateOverride" });

export interface DetailsItemInfo {
  /** The item to be displayed in the details list. */
  item?: TemplateItem;
}

export const DetailsItemInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  item: Schema.optional(TemplateItem),
}).annotate({ identifier: "DetailsItemInfo" });

export interface DetailsTemplateOverride {
  /** Information for the "nth" item displayed in the details list. */
  detailsItemInfos?: ReadonlyArray<DetailsItemInfo>;
}

export const DetailsTemplateOverride =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detailsItemInfos: Schema.optional(Schema.Array(DetailsItemInfo)),
  }).annotate({ identifier: "DetailsTemplateOverride" });

export interface BarcodeSectionDetail {
  /** A reference to an existing text-based or image field to display. */
  fieldSelector?: FieldSelector;
}

export const BarcodeSectionDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldSelector: Schema.optional(FieldSelector),
}).annotate({ identifier: "BarcodeSectionDetail" });

export interface CardBarcodeSectionDetails {
  /** Optional information to display above the barcode. If `secondTopDetail` is defined, this will be displayed to the start side of this detail section. */
  firstTopDetail?: BarcodeSectionDetail;
  /** Optional information to display below the barcode. */
  firstBottomDetail?: BarcodeSectionDetail;
  /** Optional second piece of information to display above the barcode. If `firstTopDetail` is defined, this will be displayed to the end side of this detail section. */
  secondTopDetail?: BarcodeSectionDetail;
}

export const CardBarcodeSectionDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstTopDetail: Schema.optional(BarcodeSectionDetail),
    firstBottomDetail: Schema.optional(BarcodeSectionDetail),
    secondTopDetail: Schema.optional(BarcodeSectionDetail),
  }).annotate({ identifier: "CardBarcodeSectionDetails" });

export interface FirstRowOption {
  transitOption?:
    | "TRANSIT_OPTION_UNSPECIFIED"
    | "ORIGIN_AND_DESTINATION_NAMES"
    | "originAndDestinationNames"
    | "ORIGIN_AND_DESTINATION_CODES"
    | "originAndDestinationCodes"
    | "ORIGIN_NAME"
    | "originName"
    | (string & {});
  /** A reference to the field to be displayed in the first row. */
  fieldOption?: FieldSelector;
}

export const FirstRowOption = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  transitOption: Schema.optional(Schema.String),
  fieldOption: Schema.optional(FieldSelector),
}).annotate({ identifier: "FirstRowOption" });

export interface ListTemplateOverride {
  /** A reference to the field to be displayed in the second row. This option is only displayed if there are not multiple user objects in a group. If there is a group, the second row will always display a field shared by all objects. To set this override, please set secondRowOption to the FieldSelector of you choice. */
  secondRowOption?: FieldSelector;
  /** An unused/deprecated field. Setting it will have no effect on what the user sees. */
  thirdRowOption?: FieldSelector;
  /** Specifies from a predefined set of options or from a reference to the field what will be displayed in the first row. To set this override, set the FirstRowOption.fieldOption to the FieldSelector of your choice. */
  firstRowOption?: FirstRowOption;
}

export const ListTemplateOverride = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secondRowOption: Schema.optional(FieldSelector),
  thirdRowOption: Schema.optional(FieldSelector),
  firstRowOption: Schema.optional(FirstRowOption),
}).annotate({ identifier: "ListTemplateOverride" });

export interface ClassTemplateInfo {
  /** Override for the card view. */
  cardTemplateOverride?: CardTemplateOverride;
  /** Override for the details view (beneath the card view). */
  detailsTemplateOverride?: DetailsTemplateOverride;
  /** Specifies extra information to be displayed above and below the barcode. */
  cardBarcodeSectionDetails?: CardBarcodeSectionDetails;
  /** Override for the passes list view. */
  listTemplateOverride?: ListTemplateOverride;
}

export const ClassTemplateInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cardTemplateOverride: Schema.optional(CardTemplateOverride),
  detailsTemplateOverride: Schema.optional(DetailsTemplateOverride),
  cardBarcodeSectionDetails: Schema.optional(CardBarcodeSectionDetails),
  listTemplateOverride: Schema.optional(ListTemplateOverride),
}).annotate({ identifier: "ClassTemplateInfo" });

export interface SecurityAnimation {
  /** Type of animation. */
  animationType?:
    | "ANIMATION_UNSPECIFIED"
    | "FOIL_SHIMMER"
    | "foilShimmer"
    | (string & {});
}

export const SecurityAnimation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  animationType: Schema.optional(Schema.String),
}).annotate({ identifier: "SecurityAnimation" });

export interface Message {
  /** The message body. */
  body?: string;
  /** Translated strings for the message body. */
  localizedBody?: LocalizedString;
  /** The message header. */
  header?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#walletObjectMessage"`. */
  kind?: string;
  /** The period of time that the message will be displayed to users. You can define both a `startTime` and `endTime` for each message. A message is displayed immediately after a Wallet Object is inserted unless a `startTime` is set. The message will appear in a list of messages indefinitely if `endTime` is not provided. */
  displayInterval?: TimeInterval;
  /** Translated strings for the message header. */
  localizedHeader?: LocalizedString;
  /** The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message. */
  id?: string;
  /** The message type. */
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TEXT"
    | "text"
    | "EXPIRATION_NOTIFICATION"
    | "expirationNotification"
    | "TEXT_AND_NOTIFY"
    | (string & {});
}

export const Message = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Schema.String),
  localizedBody: Schema.optional(LocalizedString),
  header: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  displayInterval: Schema.optional(TimeInterval),
  localizedHeader: Schema.optional(LocalizedString),
  id: Schema.optional(Schema.String),
  messageType: Schema.optional(Schema.String),
}).annotate({ identifier: "Message" });

export interface EventTicketClass {
  /** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
  reviewStatus?:
    | "REVIEW_STATUS_UNSPECIFIED"
    | "UNDER_REVIEW"
    | "underReview"
    | "APPROVED"
    | "approved"
    | "REJECTED"
    | "rejected"
    | "DRAFT"
    | "draft"
    | (string & {});
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used. */
  sectionLabel?:
    | "SECTION_LABEL_UNSPECIFIED"
    | "SECTION"
    | "section"
    | "THEATER"
    | "theater"
    | (string & {});
  /** The wide logo of the ticket. When provided, this will be used in place of the logo in the top left of the card view. */
  wideLogo?: Image;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable). */
  eventId?: string;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketClass"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated. */
  wordMark?: Image;
  /** Deprecated */
  version?: string;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used. */
  seatLabel?: "SEAT_LABEL_UNSPECIFIED" | "SEAT" | "seat" | (string & {});
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used. */
  rowLabel?: "ROW_LABEL_UNSPECIFIED" | "ROW" | "row" | (string & {});
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** A custom label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. This should only be used if the default "Confirmation Code" label or one of the `confirmationCodeLabel` options is not sufficient. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used. */
  customConfirmationCodeLabel?: LocalizedString;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** A custom label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. This should only be used if the default "Section" label or one of the `sectionLabel` options is not sufficient. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used. */
  customSectionLabel?: LocalizedString;
  /** Required. The name of the event, such as "LA Dodgers at SF Giants". */
  eventName?: LocalizedString;
  /** The date & time information of the event. */
  dateTime?: EventDateTime;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** A custom label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. This should only be used if the default "Seat" label or one of the `seatLabel` options is not sufficient. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used. */
  customSeatLabel?: LocalizedString;
  /** The logo image of the ticket. This image is displayed in the card detail view of the app. */
  logo?: Image;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Identifies whether multiple users and devices will save the same object referencing this class. */
  multipleDevicesAndHoldersAllowedStatus?:
    | "STATUS_UNSPECIFIED"
    | "MULTIPLE_HOLDERS"
    | "ONE_USER_ALL_DEVICES"
    | "ONE_USER_ONE_DEVICE"
    | "multipleHolders"
    | "oneUserAllDevices"
    | "oneUserOneDevice"
    | (string & {});
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** View Unlock Requirement options for the event ticket. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used. */
  confirmationCodeLabel?:
    | "CONFIRMATION_CODE_LABEL_UNSPECIFIED"
    | "CONFIRMATION_CODE"
    | "confirmationCode"
    | "CONFIRMATION_NUMBER"
    | "confirmationNumber"
    | "ORDER_NUMBER"
    | "orderNumber"
    | "RESERVATION_NUMBER"
    | "reservationNumber"
    | (string & {});
  /** A custom label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. This should only be used if the default "Row" label or one of the `rowLabel` options is not sufficient. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used. */
  customRowLabel?: LocalizedString;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used. */
  gateLabel?:
    | "GATE_LABEL_UNSPECIFIED"
    | "GATE"
    | "gate"
    | "DOOR"
    | "door"
    | "ENTRANCE"
    | "entrance"
    | (string & {});
  /** Event venue details. */
  venue?: EventVenue;
  /** The fine print, terms, or conditions of the ticket. */
  finePrint?: LocalizedString;
  /** A custom label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. This should only be used if the default "Gate" label or one of the `gateLabel` options is not sufficient. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used. */
  customGateLabel?: LocalizedString;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
}

export const EventTicketClass = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reviewStatus: Schema.optional(Schema.String),
  notifyPreference: Schema.optional(Schema.String),
  appLinkData: Schema.optional(AppLinkData),
  sectionLabel: Schema.optional(Schema.String),
  wideLogo: Schema.optional(Image),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  eventId: Schema.optional(Schema.String),
  review: Schema.optional(Review),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  wordMark: Schema.optional(Image),
  version: Schema.optional(Schema.String),
  heroImage: Schema.optional(Image),
  seatLabel: Schema.optional(Schema.String),
  allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
  issuerName: Schema.optional(Schema.String),
  rowLabel: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
  hexBackgroundColor: Schema.optional(Schema.String),
  callbackOptions: Schema.optional(CallbackOptions),
  linksModuleData: Schema.optional(LinksModuleData),
  customConfirmationCodeLabel: Schema.optional(LocalizedString),
  infoModuleData: Schema.optional(InfoModuleData),
  countryCode: Schema.optional(Schema.String),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  customSectionLabel: Schema.optional(LocalizedString),
  eventName: Schema.optional(LocalizedString),
  dateTime: Schema.optional(EventDateTime),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  customSeatLabel: Schema.optional(LocalizedString),
  logo: Schema.optional(Image),
  enableSmartTap: Schema.optional(Schema.Boolean),
  multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
  homepageUri: Schema.optional(Uri),
  viewUnlockRequirement: Schema.optional(Schema.String),
  confirmationCodeLabel: Schema.optional(Schema.String),
  customRowLabel: Schema.optional(LocalizedString),
  id: Schema.optional(Schema.String),
  gateLabel: Schema.optional(Schema.String),
  venue: Schema.optional(EventVenue),
  finePrint: Schema.optional(LocalizedString),
  customGateLabel: Schema.optional(LocalizedString),
  classTemplateInfo: Schema.optional(ClassTemplateInfo),
  securityAnimation: Schema.optional(SecurityAnimation),
  messages: Schema.optional(Schema.Array(Message)),
  localizedIssuerName: Schema.optional(LocalizedString),
}).annotate({ identifier: "EventTicketClass" });

export interface PassConstraints {
  /** The screenshot eligibility for the pass. */
  screenshotEligibility?:
    | "SCREENSHOT_ELIGIBILITY_UNSPECIFIED"
    | "ELIGIBLE"
    | "INELIGIBLE"
    | (string & {});
  /** The NFC constraints for the pass. */
  nfcConstraint?: ReadonlyArray<
    | "NFC_CONSTRAINT_UNSPECIFIED"
    | "BLOCK_PAYMENT"
    | "BLOCK_CLOSED_LOOP_TRANSIT"
    | (string & {})
  >;
}

export const PassConstraints = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  screenshotEligibility: Schema.optional(Schema.String),
  nfcConstraint: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PassConstraints" });

export interface Barcode {
  /** The type of barcode. */
  type?:
    | "BARCODE_TYPE_UNSPECIFIED"
    | "AZTEC"
    | "aztec"
    | "CODE_39"
    | "code39"
    | "CODE_128"
    | "code128"
    | "CODABAR"
    | "codabar"
    | "DATA_MATRIX"
    | "dataMatrix"
    | "EAN_8"
    | "ean8"
    | "EAN_13"
    | "ean13"
    | "EAN13"
    | "ITF_14"
    | "itf14"
    | "PDF_417"
    | "pdf417"
    | "PDF417"
    | "QR_CODE"
    | "qrCode"
    | "qrcode"
    | "UPC_A"
    | "upcA"
    | "TEXT_ONLY"
    | "textOnly"
    | (string & {});
  /** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
  alternateText?: string;
  /** Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google. */
  showCodeText?: LocalizedString;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#barcode"`. */
  kind?: string;
  /** The value encoded in the barcode. */
  value?: string;
  /** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
  renderEncoding?: "RENDER_ENCODING_UNSPECIFIED" | "UTF_8" | (string & {});
}

export const Barcode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  alternateText: Schema.optional(Schema.String),
  showCodeText: Schema.optional(LocalizedString),
  kind: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  renderEncoding: Schema.optional(Schema.String),
}).annotate({ identifier: "Barcode" });

export interface Money {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#money"`. */
  kind?: string;
  /** The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros. */
  micros?: string;
  /** The currency code, such as "USD" or "EUR." */
  currencyCode?: string;
}

export const Money = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  micros: Schema.optional(Schema.String),
  currencyCode: Schema.optional(Schema.String),
}).annotate({ identifier: "Money" });

export interface EventTicketObject {
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.). */
  ticketNumber?: string;
  /** The type of the ticket, such as "Adult" or "Child", or "VIP" or "Standard". */
  ticketType?: LocalizedString;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Seating details for this ticket. */
  seatInfo?: EventSeat;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Deprecated */
  version?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketObject"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Reservation details for this ticket. This is expected to be shared amongst all tickets that were purchased in the same order. */
  reservationInfo?: EventReservationInfo;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Name of the ticket holder, if the ticket is assigned to a person. E.g. "John Doe" or "Jane Doe". */
  ticketHolderName?: string;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. */
  linkedOfferIds?: ReadonlyArray<string>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this event ticket object. If a user had saved this event ticket, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "active"
    | "COMPLETED"
    | "completed"
    | "EXPIRED"
    | "expired"
    | "INACTIVE"
    | "inactive"
    | (string & {});
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: EventTicketClass;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** The face value of the ticket, matching what would be printed on a physical version of the ticket. */
  faceValue?: Money;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
}

export const EventTicketObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appLinkData: Schema.optional(AppLinkData),
  notifyPreference: Schema.optional(Schema.String),
  ticketNumber: Schema.optional(Schema.String),
  ticketType: Schema.optional(LocalizedString),
  classId: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  smartTapRedemptionValue: Schema.optional(Schema.String),
  seatInfo: Schema.optional(EventSeat),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  version: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  reservationInfo: Schema.optional(EventReservationInfo),
  heroImage: Schema.optional(Image),
  disableExpirationNotification: Schema.optional(Schema.Boolean),
  rotatingBarcode: Schema.optional(RotatingBarcode),
  ticketHolderName: Schema.optional(Schema.String),
  hexBackgroundColor: Schema.optional(Schema.String),
  infoModuleData: Schema.optional(InfoModuleData),
  linksModuleData: Schema.optional(LinksModuleData),
  linkedOfferIds: Schema.optional(Schema.Array(Schema.String)),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  saveRestrictions: Schema.optional(SaveRestrictions),
  linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  state: Schema.optional(Schema.String),
  hasLinkedDevice: Schema.optional(Schema.Boolean),
  groupingInfo: Schema.optional(GroupingInfo),
  validTimeInterval: Schema.optional(TimeInterval),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  classReference: Schema.optional(EventTicketClass),
  hasUsers: Schema.optional(Schema.Boolean),
  passConstraints: Schema.optional(PassConstraints),
  id: Schema.optional(Schema.String),
  barcode: Schema.optional(Barcode),
  faceValue: Schema.optional(Money),
  messages: Schema.optional(Schema.Array(Message)),
}).annotate({ identifier: "EventTicketObject" });

export interface EventTicketObjectAddMessageResponse {
  /** The updated EventTicketObject resource. */
  resource?: EventTicketObject;
}

export const EventTicketObjectAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(EventTicketObject),
  }).annotate({ identifier: "EventTicketObjectAddMessageResponse" });

export interface TicketCost {
  /** A message describing any kind of discount that was applied. */
  discountMessage?: LocalizedString;
  /** The actual purchase price of the ticket, after tax and/or discounts. */
  purchasePrice?: Money;
  /** The face value of the ticket. */
  faceValue?: Money;
}

export const TicketCost = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discountMessage: Schema.optional(LocalizedString),
  purchasePrice: Schema.optional(Money),
  faceValue: Schema.optional(Money),
}).annotate({ identifier: "TicketCost" });

export interface GiftCardClass {
  /** Deprecated */
  version?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardClass"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated. */
  wordMark?: Image;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** The logo of the gift card program or company. This logo is displayed in both the details and list views of the app. */
  programLogo?: Image;
  /** The label to display for the PIN, such as "4-digit PIN". */
  pinLabel?: string;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The label to display for event number, such as "Target Event #". */
  eventNumberLabel?: string;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
  reviewStatus?:
    | "REVIEW_STATUS_UNSPECIFIED"
    | "UNDER_REVIEW"
    | "underReview"
    | "APPROVED"
    | "approved"
    | "REJECTED"
    | "rejected"
    | "DRAFT"
    | "draft"
    | (string & {});
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed. */
  allowBarcodeRedemption?: boolean;
  /** The label to display for the card number, such as "Card Number". */
  cardNumberLabel?: string;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Translated strings for the event_number_label. */
  localizedEventNumberLabel?: LocalizedString;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** The wide logo of the gift card program or company. When provided, this will be used in place of the program logo in the top left of the card view. */
  wideProgramLogo?: Image;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Translated strings for the pin_label. */
  localizedPinLabel?: LocalizedString;
  /** Merchant name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  merchantName?: string;
  /** Translated strings for the card_number_label. */
  localizedCardNumberLabel?: LocalizedString;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Translated strings for the merchant_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  localizedMerchantName?: LocalizedString;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** Identifies whether multiple users and devices will save the same object referencing this class. */
  multipleDevicesAndHoldersAllowedStatus?:
    | "STATUS_UNSPECIFIED"
    | "MULTIPLE_HOLDERS"
    | "ONE_USER_ALL_DEVICES"
    | "ONE_USER_ONE_DEVICE"
    | "multipleHolders"
    | "oneUserAllDevices"
    | "oneUserOneDevice"
    | (string & {});
  /** View Unlock Requirement options for the gift card. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
}

export const GiftCardClass = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  wordMark: Schema.optional(Image),
  allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
  heroImage: Schema.optional(Image),
  issuerName: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
  programLogo: Schema.optional(Image),
  pinLabel: Schema.optional(Schema.String),
  callbackOptions: Schema.optional(CallbackOptions),
  hexBackgroundColor: Schema.optional(Schema.String),
  infoModuleData: Schema.optional(InfoModuleData),
  eventNumberLabel: Schema.optional(Schema.String),
  linksModuleData: Schema.optional(LinksModuleData),
  countryCode: Schema.optional(Schema.String),
  reviewStatus: Schema.optional(Schema.String),
  notifyPreference: Schema.optional(Schema.String),
  allowBarcodeRedemption: Schema.optional(Schema.Boolean),
  cardNumberLabel: Schema.optional(Schema.String),
  appLinkData: Schema.optional(AppLinkData),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  review: Schema.optional(Review),
  localizedEventNumberLabel: Schema.optional(LocalizedString),
  id: Schema.optional(Schema.String),
  classTemplateInfo: Schema.optional(ClassTemplateInfo),
  securityAnimation: Schema.optional(SecurityAnimation),
  localizedIssuerName: Schema.optional(LocalizedString),
  wideProgramLogo: Schema.optional(Image),
  messages: Schema.optional(Schema.Array(Message)),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  localizedPinLabel: Schema.optional(LocalizedString),
  merchantName: Schema.optional(Schema.String),
  localizedCardNumberLabel: Schema.optional(LocalizedString),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  enableSmartTap: Schema.optional(Schema.Boolean),
  localizedMerchantName: Schema.optional(LocalizedString),
  homepageUri: Schema.optional(Uri),
  multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
  viewUnlockRequirement: Schema.optional(Schema.String),
}).annotate({ identifier: "GiftCardClass" });

export interface GiftCardObject {
  /** The barcode type and value. */
  barcode?: Barcode;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The card's monetary balance. */
  balance?: Money;
  /** Required. The card's number. */
  cardNumber?: string;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: GiftCardClass;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "active"
    | "COMPLETED"
    | "completed"
    | "EXPIRED"
    | "expired"
    | "INACTIVE"
    | "inactive"
    | (string & {});
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The date and time when the balance was last updated. Offset is required. If balance is updated and this property is not provided, system will default to the current time. */
  balanceUpdateTime?: DateTime;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this giftcard object. If a user had saved this gift card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** The card's event number, an optional field used by some gift cards. */
  eventNumber?: string;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardObject"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated */
  version?: string;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** The card's PIN. */
  pin?: string;
}

export const GiftCardObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  barcode: Schema.optional(Barcode),
  messages: Schema.optional(Schema.Array(Message)),
  balance: Schema.optional(Money),
  cardNumber: Schema.optional(Schema.String),
  classReference: Schema.optional(GiftCardClass),
  hasUsers: Schema.optional(Schema.Boolean),
  passConstraints: Schema.optional(PassConstraints),
  id: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  hasLinkedDevice: Schema.optional(Schema.Boolean),
  validTimeInterval: Schema.optional(TimeInterval),
  groupingInfo: Schema.optional(GroupingInfo),
  balanceUpdateTime: Schema.optional(DateTime),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  saveRestrictions: Schema.optional(SaveRestrictions),
  eventNumber: Schema.optional(Schema.String),
  disableExpirationNotification: Schema.optional(Schema.Boolean),
  rotatingBarcode: Schema.optional(RotatingBarcode),
  linksModuleData: Schema.optional(LinksModuleData),
  infoModuleData: Schema.optional(InfoModuleData),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  version: Schema.optional(Schema.String),
  heroImage: Schema.optional(Image),
  classId: Schema.optional(Schema.String),
  smartTapRedemptionValue: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  appLinkData: Schema.optional(AppLinkData),
  notifyPreference: Schema.optional(Schema.String),
  pin: Schema.optional(Schema.String),
}).annotate({ identifier: "GiftCardObject" });

export interface GiftCardObjectAddMessageResponse {
  /** The updated GiftCardObject resource. */
  resource?: GiftCardObject;
}

export const GiftCardObjectAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GiftCardObject),
  }).annotate({ identifier: "GiftCardObjectAddMessageResponse" });

export interface OfferClass {
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** The details of the offer. */
  details?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** The help link for the offer, such as `http://myownpersonaldomain.com/help` */
  helpUri?: Uri;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerClass"`. */
  kind?: string;
  /** Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens. */
  title?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated. */
  wordMark?: Image;
  /** Deprecated */
  version?: string;
  /** Required. The redemption channels applicable to this offer. */
  redemptionChannel?:
    | "REDEMPTION_CHANNEL_UNSPECIFIED"
    | "INSTORE"
    | "instore"
    | "ONLINE"
    | "online"
    | "BOTH"
    | "both"
    | "TEMPORARY_PRICE_REDUCTION"
    | "temporaryPriceReduction"
    | (string & {});
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Translated strings for the short title. Recommended maximum length is 20 characters. */
  localizedShortTitle?: LocalizedString;
  /** Translated strings for the details. */
  localizedDetails?: LocalizedString;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Required. The status of the class. This field can be set to `draft` or The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
  reviewStatus?:
    | "REVIEW_STATUS_UNSPECIFIED"
    | "UNDER_REVIEW"
    | "underReview"
    | "APPROVED"
    | "approved"
    | "REJECTED"
    | "rejected"
    | "DRAFT"
    | "draft"
    | (string & {});
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** The title image of the offer. This image is displayed in both the details and list views of the app. */
  titleImage?: Image;
  /** The wide title image of the offer. When provided, this will be used in place of the title image in the top left of the card view. */
  wideTitleImage?: Image;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** The fine print or terms of the offer, such as "20% off any t-shirt at Adam's Apparel." */
  finePrint?: string;
  /** A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters. */
  shortTitle?: string;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Translated strings for the fine_print. */
  localizedFinePrint?: LocalizedString;
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Translated strings for the title. Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens. */
  localizedTitle?: LocalizedString;
  /** Translated strings for the provider. Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens. */
  localizedProvider?: LocalizedString;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens. */
  provider?: string;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Identifies whether multiple users and devices will save the same object referencing this class. */
  multipleDevicesAndHoldersAllowedStatus?:
    | "STATUS_UNSPECIFIED"
    | "MULTIPLE_HOLDERS"
    | "ONE_USER_ALL_DEVICES"
    | "ONE_USER_ONE_DEVICE"
    | "multipleHolders"
    | "oneUserAllDevices"
    | "oneUserOneDevice"
    | (string & {});
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** View Unlock Requirement options for the offer. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
}

export const OfferClass = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hexBackgroundColor: Schema.optional(Schema.String),
  callbackOptions: Schema.optional(CallbackOptions),
  linksModuleData: Schema.optional(LinksModuleData),
  details: Schema.optional(Schema.String),
  infoModuleData: Schema.optional(InfoModuleData),
  countryCode: Schema.optional(Schema.String),
  helpUri: Schema.optional(Uri),
  kind: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  wordMark: Schema.optional(Image),
  version: Schema.optional(Schema.String),
  redemptionChannel: Schema.optional(Schema.String),
  heroImage: Schema.optional(Image),
  allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
  localizedShortTitle: Schema.optional(LocalizedString),
  localizedDetails: Schema.optional(LocalizedString),
  issuerName: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  review: Schema.optional(Review),
  reviewStatus: Schema.optional(Schema.String),
  notifyPreference: Schema.optional(Schema.String),
  titleImage: Schema.optional(Image),
  wideTitleImage: Schema.optional(Image),
  appLinkData: Schema.optional(AppLinkData),
  finePrint: Schema.optional(Schema.String),
  shortTitle: Schema.optional(Schema.String),
  classTemplateInfo: Schema.optional(ClassTemplateInfo),
  securityAnimation: Schema.optional(SecurityAnimation),
  messages: Schema.optional(Schema.Array(Message)),
  localizedFinePrint: Schema.optional(LocalizedString),
  localizedIssuerName: Schema.optional(LocalizedString),
  id: Schema.optional(Schema.String),
  localizedTitle: Schema.optional(LocalizedString),
  localizedProvider: Schema.optional(LocalizedString),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  provider: Schema.optional(Schema.String),
  enableSmartTap: Schema.optional(Schema.Boolean),
  multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
  homepageUri: Schema.optional(Uri),
  viewUnlockRequirement: Schema.optional(Schema.String),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
}).annotate({ identifier: "OfferClass" });

export interface ObjectId {
  /** The name of the object. */
  objectName?: string;
  /** Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions */
  generation?: string;
  /** The name of the bucket to which this object belongs. */
  bucketName?: string;
}

export const ObjectId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectName: Schema.optional(Schema.String),
  generation: Schema.optional(Schema.String),
  bucketName: Schema.optional(Schema.String),
}).annotate({ identifier: "ObjectId" });

export interface Blobstore2Info {
  /** The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call. */
  readToken?: string;
  /** Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
  uploadMetadataContainer?: string;
  /** A serialized External Read Token passed from Bigstore -> Scotty for a GCS download. This field must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
  downloadExternalReadToken?: string;
  /** The blob generation id. */
  blobGeneration?: string;
  /** Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads. */
  downloadReadHandle?: string;
  /** A serialized Object Fragment List Creation Info passed from Bigstore -> Scotty for a GCS upload. This field must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
  uploadFragmentListCreationInfo?: string;
  /** The blob id, e.g., /blobstore/prod/playground/scotty */
  blobId?: string;
}

export const Blobstore2Info = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  readToken: Schema.optional(Schema.String),
  uploadMetadataContainer: Schema.optional(Schema.String),
  downloadExternalReadToken: Schema.optional(Schema.String),
  blobGeneration: Schema.optional(Schema.String),
  downloadReadHandle: Schema.optional(Schema.String),
  uploadFragmentListCreationInfo: Schema.optional(Schema.String),
  blobId: Schema.optional(Schema.String),
}).annotate({ identifier: "Blobstore2Info" });

export interface CompositeMedia {
  /** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
  blobRef?: string;
  /** MD5 hash for the payload. */
  md5Hash?: string;
  /** SHA-1 hash for the payload. */
  sha1Hash?: string;
  /** Size of the data, in bytes */
  length?: string;
  /** Path to the data, set if reference_type is PATH */
  path?: string;
  /** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
  cosmoBinaryReference?: string;
  /** Describes what the field reference contains. */
  referenceType?:
    | "PATH"
    | "BLOB_REF"
    | "INLINE"
    | "BIGSTORE_REF"
    | "COSMO_BINARY_REFERENCE"
    | (string & {});
  /** Reference to a TI Blob, set if reference_type is BIGSTORE_REF. */
  objectId?: ObjectId;
  /** Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob. */
  blobstore2Info?: Blobstore2Info;
  /** crc32.c hash for the payload. */
  crc32cHash?: number;
  /** Media data, set if reference_type is INLINE */
  inline?: string;
}

export const CompositeMedia = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blobRef: Schema.optional(Schema.String),
  md5Hash: Schema.optional(Schema.String),
  sha1Hash: Schema.optional(Schema.String),
  length: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
  cosmoBinaryReference: Schema.optional(Schema.String),
  referenceType: Schema.optional(Schema.String),
  objectId: Schema.optional(ObjectId),
  blobstore2Info: Schema.optional(Blobstore2Info),
  crc32cHash: Schema.optional(Schema.Number),
  inline: Schema.optional(Schema.String),
}).annotate({ identifier: "CompositeMedia" });

export interface DiffUploadRequest {
  /** The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in. */
  objectVersion?: string;
  /** The location of the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. */
  objectInfo?: CompositeMedia;
  /** The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol. */
  checksumsInfo?: CompositeMedia;
}

export const DiffUploadRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectVersion: Schema.optional(Schema.String),
  objectInfo: Schema.optional(CompositeMedia),
  checksumsInfo: Schema.optional(CompositeMedia),
}).annotate({ identifier: "DiffUploadRequest" });

export interface DiscoverableProgramMerchantSigninInfo {
  /** The URL to direct the user to for the merchant's signin site. */
  signinWebsite?: Uri;
}

export const DiscoverableProgramMerchantSigninInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signinWebsite: Schema.optional(Uri),
  }).annotate({ identifier: "DiscoverableProgramMerchantSigninInfo" });

export interface DiscoverableProgramMerchantSignupInfo {
  /** User data that is sent in a POST request to the signup website URL. This information is encoded and then shared so that the merchant's website can prefill fields used to enroll the user for the discoverable program. */
  signupSharedDatas?: ReadonlyArray<
    | "SHARED_DATA_TYPE_UNSPECIFIED"
    | "FIRST_NAME"
    | "LAST_NAME"
    | "STREET_ADDRESS"
    | "ADDRESS_LINE_1"
    | "ADDRESS_LINE_2"
    | "ADDRESS_LINE_3"
    | "CITY"
    | "STATE"
    | "ZIPCODE"
    | "COUNTRY"
    | "EMAIL"
    | "PHONE"
    | (string & {})
  >;
  /** The URL to direct the user to for the merchant's signup site. */
  signupWebsite?: Uri;
}

export const DiscoverableProgramMerchantSignupInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signupSharedDatas: Schema.optional(Schema.Array(Schema.String)),
    signupWebsite: Schema.optional(Uri),
  }).annotate({ identifier: "DiscoverableProgramMerchantSignupInfo" });

export interface DiscoverableProgram {
  /** Visibility state of the discoverable program. */
  state?:
    | "STATE_UNSPECIFIED"
    | "TRUSTED_TESTERS"
    | "trustedTesters"
    | "LIVE"
    | "live"
    | "DISABLED"
    | "disabled"
    | (string & {});
  /** Information about the ability to signin and add a valuable for this program through a merchant site. Used when MERCHANT_HOSTED_SIGNIN is enabled. */
  merchantSigninInfo?: DiscoverableProgramMerchantSigninInfo;
  /** Information about the ability to signup and add a valuable for this program through a merchant site. Used when MERCHANT_HOSTED_SIGNUP is enabled. */
  merchantSignupInfo?: DiscoverableProgramMerchantSignupInfo;
}

export const DiscoverableProgram = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  merchantSigninInfo: Schema.optional(DiscoverableProgramMerchantSigninInfo),
  merchantSignupInfo: Schema.optional(DiscoverableProgramMerchantSignupInfo),
}).annotate({ identifier: "DiscoverableProgram" });

export interface LoyaltyClass {
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Translated strings for the rewards_tier_label. Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens. */
  localizedRewardsTierLabel?: LocalizedString;
  /** Translated strings for the secondary_rewards_tier. */
  localizedSecondaryRewardsTier?: LocalizedString;
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** The wide logo of the loyalty program or company. When provided, this will be used in place of the program logo in the top left of the card view. */
  wideProgramLogo?: Image;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Translated strings for the secondary_rewards_tier_label. */
  localizedSecondaryRewardsTierLabel?: LocalizedString;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Translated strings for the rewards_tier. Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens. */
  localizedRewardsTier?: LocalizedString;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** View Unlock Requirement options for the loyalty card. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** Identifies whether multiple users and devices will save the same object referencing this class. */
  multipleDevicesAndHoldersAllowedStatus?:
    | "STATUS_UNSPECIFIED"
    | "MULTIPLE_HOLDERS"
    | "ONE_USER_ALL_DEVICES"
    | "ONE_USER_ONE_DEVICE"
    | "multipleHolders"
    | "oneUserAllDevices"
    | "oneUserOneDevice"
    | (string & {});
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Required. The program name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  programName?: string;
  /** The account ID label, such as "Member ID." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  accountIdLabel?: string;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** The rewards tier, such as "Gold" or "Platinum." Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens. */
  rewardsTier?: string;
  /** Translated strings for the account_name_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  localizedAccountNameLabel?: LocalizedString;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** Information about how the class may be discovered and instantiated from within the Google Pay app. */
  discoverableProgram?: DiscoverableProgram;
  /** Deprecated */
  version?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyClass"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated. */
  wordMark?: Image;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Required. The logo of the loyalty program or company. This logo is displayed in both the details and list views of the app. */
  programLogo?: Image;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Translated strings for the account_id_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  localizedAccountIdLabel?: LocalizedString;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
  reviewStatus?:
    | "REVIEW_STATUS_UNSPECIFIED"
    | "UNDER_REVIEW"
    | "underReview"
    | "APPROVED"
    | "approved"
    | "REJECTED"
    | "rejected"
    | "DRAFT"
    | "draft"
    | (string & {});
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** The account name label, such as "Member Name." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  accountNameLabel?: string;
  /** The rewards tier label, such as "Rewards Tier." Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens. */
  rewardsTierLabel?: string;
  /** The secondary rewards tier label, such as "Rewards Tier." */
  secondaryRewardsTierLabel?: string;
  /** Translated strings for the program_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  localizedProgramName?: LocalizedString;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The secondary rewards tier, such as "Gold" or "Platinum." */
  secondaryRewardsTier?: string;
}

export const LoyaltyClass = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  localizedRewardsTierLabel: Schema.optional(LocalizedString),
  localizedSecondaryRewardsTier: Schema.optional(LocalizedString),
  localizedIssuerName: Schema.optional(LocalizedString),
  wideProgramLogo: Schema.optional(Image),
  messages: Schema.optional(Schema.Array(Message)),
  localizedSecondaryRewardsTierLabel: Schema.optional(LocalizedString),
  classTemplateInfo: Schema.optional(ClassTemplateInfo),
  securityAnimation: Schema.optional(SecurityAnimation),
  localizedRewardsTier: Schema.optional(LocalizedString),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  viewUnlockRequirement: Schema.optional(Schema.String),
  homepageUri: Schema.optional(Uri),
  multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
  enableSmartTap: Schema.optional(Schema.Boolean),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
  issuerName: Schema.optional(Schema.String),
  programName: Schema.optional(Schema.String),
  accountIdLabel: Schema.optional(Schema.String),
  allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
  rewardsTier: Schema.optional(Schema.String),
  localizedAccountNameLabel: Schema.optional(LocalizedString),
  heroImage: Schema.optional(Image),
  discoverableProgram: Schema.optional(DiscoverableProgram),
  version: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  wordMark: Schema.optional(Image),
  countryCode: Schema.optional(Schema.String),
  infoModuleData: Schema.optional(InfoModuleData),
  linksModuleData: Schema.optional(LinksModuleData),
  programLogo: Schema.optional(Image),
  callbackOptions: Schema.optional(CallbackOptions),
  hexBackgroundColor: Schema.optional(Schema.String),
  localizedAccountIdLabel: Schema.optional(LocalizedString),
  appLinkData: Schema.optional(AppLinkData),
  reviewStatus: Schema.optional(Schema.String),
  notifyPreference: Schema.optional(Schema.String),
  accountNameLabel: Schema.optional(Schema.String),
  rewardsTierLabel: Schema.optional(Schema.String),
  secondaryRewardsTierLabel: Schema.optional(Schema.String),
  localizedProgramName: Schema.optional(LocalizedString),
  review: Schema.optional(Review),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  secondaryRewardsTier: Schema.optional(Schema.String),
}).annotate({ identifier: "LoyaltyClass" });

export interface FlightCarrier {
  /** Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIataCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "EZY" for Easy Jet */
  carrierIcaoCode?: string;
  /** A logo for the airline described by carrierIataCode and localizedAirlineName. This logo will be rendered at the top of the detailed card view. */
  airlineLogo?: Image;
  /** A logo for the airline alliance, displayed below the QR code that the passenger scans to board. */
  airlineAllianceLogo?: Image;
  /** A localized name of the airline specified by carrierIataCode. If unset, `issuer_name` or `localized_issuer_name` from `FlightClass` will be used for display purposes. eg: "Swiss Air" for "LX" */
  airlineName?: LocalizedString;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightCarrier"`. */
  kind?: string;
  /** Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIcaoCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "LX" for Swiss Air */
  carrierIataCode?: string;
  /** The wide logo of the airline. When provided, this will be used in place of the airline logo in the top left of the card view. */
  wideAirlineLogo?: Image;
}

export const FlightCarrier = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  carrierIcaoCode: Schema.optional(Schema.String),
  airlineLogo: Schema.optional(Image),
  airlineAllianceLogo: Schema.optional(Image),
  airlineName: Schema.optional(LocalizedString),
  kind: Schema.optional(Schema.String),
  carrierIataCode: Schema.optional(Schema.String),
  wideAirlineLogo: Schema.optional(Image),
}).annotate({ identifier: "FlightCarrier" });

export interface FlightHeader {
  /** The flight number used by the operating carrier without IATA carrier code. This field should contain only digits. eg: "234" */
  operatingFlightNumber?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightHeader"`. */
  kind?: string;
  /** Information about airline carrier. This is a required property of `flightHeader`. */
  carrier?: FlightCarrier;
  /** The flight number without IATA carrier code. This field should contain only digits. This is a required property of `flightHeader`. eg: "123" */
  flightNumber?: string;
  /** Information about operating airline carrier. */
  operatingCarrier?: FlightCarrier;
  /** Override value to use for flight number. The default value used for display purposes is carrier + flight_number. If a different value needs to be shown to passengers, use this field to override the default behavior. eg: "XX1234 / YY576" */
  flightNumberDisplayOverride?: string;
}

export const FlightHeader = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  operatingFlightNumber: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  carrier: Schema.optional(FlightCarrier),
  flightNumber: Schema.optional(Schema.String),
  operatingCarrier: Schema.optional(FlightCarrier),
  flightNumberDisplayOverride: Schema.optional(Schema.String),
}).annotate({ identifier: "FlightHeader" });

export interface AirportInfo {
  /** A name of the gate. Eg: "B59" or "59" */
  gate?: string;
  /** Terminal name. Eg: "INTL" or "I" */
  terminal?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#airportInfo"`. */
  kind?: string;
  /** Optional field that overrides the airport city name defined by IATA. By default, Google takes the `airportIataCode` provided and maps it to the official airport city name defined by IATA. Official IATA airport city names can be found at IATA airport city names website. For example, for the airport IATA code "LTN", IATA website tells us that the corresponding airport city is "London". If this field is not populated, Google would display "London". However, populating this field with a custom name (eg: "London Luton") would override it. */
  airportNameOverride?: LocalizedString;
  /** Three character IATA airport code. This is a required field for `origin` and `destination`. Eg: "SFO" */
  airportIataCode?: string;
}

export const AirportInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gate: Schema.optional(Schema.String),
  terminal: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  airportNameOverride: Schema.optional(LocalizedString),
  airportIataCode: Schema.optional(Schema.String),
}).annotate({ identifier: "AirportInfo" });

export interface BoardingAndSeatingPolicy {
  /** Indicates the policy the airline uses for boarding. If unset, Google will default to `zoneBased`. */
  boardingPolicy?:
    | "BOARDING_POLICY_UNSPECIFIED"
    | "ZONE_BASED"
    | "zoneBased"
    | "GROUP_BASED"
    | "groupBased"
    | "BOARDING_POLICY_OTHER"
    | "boardingPolicyOther"
    | (string & {});
  /** Seating policy which dictates how we display the seat class. If unset, Google will default to `cabinBased`. */
  seatClassPolicy?:
    | "SEAT_CLASS_POLICY_UNSPECIFIED"
    | "CABIN_BASED"
    | "cabinBased"
    | "CLASS_BASED"
    | "classBased"
    | "TIER_BASED"
    | "tierBased"
    | "SEAT_CLASS_POLICY_OTHER"
    | "seatClassPolicyOther"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingPolicy"`. */
  kind?: string;
}

export const BoardingAndSeatingPolicy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boardingPolicy: Schema.optional(Schema.String),
    seatClassPolicy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "BoardingAndSeatingPolicy" });

export interface FlightClass {
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localScheduledDepartureDateTime?: string;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Deprecated */
  version?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightClass"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated. */
  wordMark?: Image;
  /** Required. Information about the flight carrier and number. */
  flightHeader?: FlightHeader;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
  languageOverride?: string;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected by the validator. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
  reviewStatus?:
    | "REVIEW_STATUS_UNSPECIFIED"
    | "UNDER_REVIEW"
    | "underReview"
    | "APPROVED"
    | "approved"
    | "REJECTED"
    | "rejected"
    | "DRAFT"
    | "draft"
    | (string & {});
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localEstimatedOrActualDepartureDateTime?: string;
  /** Required. Destination airport. */
  destination?: AirportInfo;
  /** The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. */
  localScheduledArrivalDateTime?: string;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Required. Origin airport. */
  origin?: AirportInfo;
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. */
  localEstimatedOrActualArrivalDateTime?: string;
  /** Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses. */
  flightStatus?:
    | "FLIGHT_STATUS_UNSPECIFIED"
    | "SCHEDULED"
    | "scheduled"
    | "ACTIVE"
    | "active"
    | "LANDED"
    | "landed"
    | "CANCELLED"
    | "cancelled"
    | "REDIRECTED"
    | "redirected"
    | "DIVERTED"
    | "diverted"
    | (string & {});
  /** Policies for boarding and seating. These will inform which labels will be shown to users. */
  boardingAndSeatingPolicy?: BoardingAndSeatingPolicy;
  /** The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localGateClosingDateTime?: string;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** Identifies whether multiple users and devices will save the same object referencing this class. */
  multipleDevicesAndHoldersAllowedStatus?:
    | "STATUS_UNSPECIFIED"
    | "MULTIPLE_HOLDERS"
    | "ONE_USER_ALL_DEVICES"
    | "ONE_USER_ONE_DEVICE"
    | "multipleHolders"
    | "oneUserAllDevices"
    | "oneUserOneDevice"
    | (string & {});
  /** The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localBoardingDateTime?: string;
  /** View Unlock Requirement options for the boarding pass. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
}

export const FlightClass = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  countryCode: Schema.optional(Schema.String),
  callbackOptions: Schema.optional(CallbackOptions),
  hexBackgroundColor: Schema.optional(Schema.String),
  infoModuleData: Schema.optional(InfoModuleData),
  linksModuleData: Schema.optional(LinksModuleData),
  localScheduledDepartureDateTime: Schema.optional(Schema.String),
  issuerName: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
  version: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  wordMark: Schema.optional(Image),
  flightHeader: Schema.optional(FlightHeader),
  allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
  heroImage: Schema.optional(Image),
  review: Schema.optional(Review),
  languageOverride: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  appLinkData: Schema.optional(AppLinkData),
  reviewStatus: Schema.optional(Schema.String),
  notifyPreference: Schema.optional(Schema.String),
  localEstimatedOrActualDepartureDateTime: Schema.optional(Schema.String),
  destination: Schema.optional(AirportInfo),
  localScheduledArrivalDateTime: Schema.optional(Schema.String),
  classTemplateInfo: Schema.optional(ClassTemplateInfo),
  securityAnimation: Schema.optional(SecurityAnimation),
  origin: Schema.optional(AirportInfo),
  localizedIssuerName: Schema.optional(LocalizedString),
  messages: Schema.optional(Schema.Array(Message)),
  localEstimatedOrActualArrivalDateTime: Schema.optional(Schema.String),
  flightStatus: Schema.optional(Schema.String),
  boardingAndSeatingPolicy: Schema.optional(BoardingAndSeatingPolicy),
  localGateClosingDateTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  homepageUri: Schema.optional(Uri),
  multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
  localBoardingDateTime: Schema.optional(Schema.String),
  viewUnlockRequirement: Schema.optional(Schema.String),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  enableSmartTap: Schema.optional(Schema.Boolean),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
}).annotate({ identifier: "FlightClass" });

export interface BoardingAndSeatingInfo {
  /** The value of the seat class. eg: "Economy" or "Economy Plus" */
  seatClass?: string;
  /** The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: "49" */
  sequenceNumber?: string;
  /** Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the `seatClass`. In those cases `boardingDoor` should not be set. */
  boardingDoor?:
    | "BOARDING_DOOR_UNSPECIFIED"
    | "FRONT"
    | "front"
    | "BACK"
    | "back"
    | (string & {});
  /** The value of boarding group (or zone) this passenger shall board with. eg: "B" The label for this value will be determined by the `boardingPolicy` field in the `flightClass` referenced by this object. */
  boardingGroup?: string;
  /** The passenger's seat assignment. To be used when there is no specific identifier to use in `seatNumber`. eg: "assigned at gate" */
  seatAssignment?: LocalizedString;
  /** The value of boarding position. eg: "76" */
  boardingPosition?: string;
  /** The value of passenger seat. If there is no specific identifier, use `seatAssignment` instead. eg: "25A" */
  seatNumber?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingInfo"`. */
  kind?: string;
  /** A small image shown above the boarding barcode. Airlines can use it to communicate any special boarding privileges. In the event the security program logo is also set, this image might be rendered alongside the logo for that security program. */
  boardingPrivilegeImage?: Image;
}

export const BoardingAndSeatingInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    seatClass: Schema.optional(Schema.String),
    sequenceNumber: Schema.optional(Schema.String),
    boardingDoor: Schema.optional(Schema.String),
    boardingGroup: Schema.optional(Schema.String),
    seatAssignment: Schema.optional(LocalizedString),
    boardingPosition: Schema.optional(Schema.String),
    seatNumber: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    boardingPrivilegeImage: Schema.optional(Image),
  },
).annotate({ identifier: "BoardingAndSeatingInfo" });

export interface FrequentFlyerInfo {
  /** Frequent flyer program name. eg: "Lufthansa Miles & More" */
  frequentFlyerProgramName?: LocalizedString;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#frequentFlyerInfo"`. */
  kind?: string;
  /** Frequent flyer number. Required for each nested object of kind `walletobjects#frequentFlyerInfo`. */
  frequentFlyerNumber?: string;
}

export const FrequentFlyerInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  frequentFlyerProgramName: Schema.optional(LocalizedString),
  kind: Schema.optional(Schema.String),
  frequentFlyerNumber: Schema.optional(Schema.String),
}).annotate({ identifier: "FrequentFlyerInfo" });

export interface ReservationInfo {
  /** E-ticket number. */
  eticketNumber?: string;
  /** Frequent flyer membership information. */
  frequentFlyerInfo?: FrequentFlyerInfo;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#reservationInfo"`. */
  kind?: string;
  /** Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass. */
  confirmationCode?: string;
}

export const ReservationInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  eticketNumber: Schema.optional(Schema.String),
  frequentFlyerInfo: Schema.optional(FrequentFlyerInfo),
  kind: Schema.optional(Schema.String),
  confirmationCode: Schema.optional(Schema.String),
}).annotate({ identifier: "ReservationInfo" });

export interface FlightObject {
  /** An image for the security program that applies to the passenger. */
  securityProgramLogo?: Image;
  /** Passenger specific information about boarding and seating. */
  boardingAndSeatingInfo?: BoardingAndSeatingInfo;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Required. Passenger name as it would appear on the boarding pass. eg: "Dave M Gahan" or "Gahan/Dave" or "GAHAN/DAVEM" */
  passengerName?: string;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for Flights. */
  disableExpirationNotification?: boolean;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Deprecated */
  version?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightObject"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Required. Information about flight reservation. */
  reservationInfo?: ReservationInfo;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "active"
    | "COMPLETED"
    | "completed"
    | "EXPIRED"
    | "expired"
    | "INACTIVE"
    | "inactive"
    | (string & {});
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this flight object. If a user had saved this boarding pass, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: FlightClass;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
}

export const FlightObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  securityProgramLogo: Schema.optional(Image),
  boardingAndSeatingInfo: Schema.optional(BoardingAndSeatingInfo),
  classId: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  smartTapRedemptionValue: Schema.optional(Schema.String),
  appLinkData: Schema.optional(AppLinkData),
  notifyPreference: Schema.optional(Schema.String),
  passengerName: Schema.optional(Schema.String),
  disableExpirationNotification: Schema.optional(Schema.Boolean),
  rotatingBarcode: Schema.optional(RotatingBarcode),
  hexBackgroundColor: Schema.optional(Schema.String),
  infoModuleData: Schema.optional(InfoModuleData),
  linksModuleData: Schema.optional(LinksModuleData),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  version: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  reservationInfo: Schema.optional(ReservationInfo),
  heroImage: Schema.optional(Image),
  state: Schema.optional(Schema.String),
  hasLinkedDevice: Schema.optional(Schema.Boolean),
  groupingInfo: Schema.optional(GroupingInfo),
  validTimeInterval: Schema.optional(TimeInterval),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  saveRestrictions: Schema.optional(SaveRestrictions),
  linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  barcode: Schema.optional(Barcode),
  messages: Schema.optional(Schema.Array(Message)),
  classReference: Schema.optional(FlightClass),
  hasUsers: Schema.optional(Schema.Boolean),
  passConstraints: Schema.optional(PassConstraints),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "FlightObject" });

export interface TicketSeat {
  /** The fare class of the ticketed seat. */
  fareClass?:
    | "FARE_CLASS_UNSPECIFIED"
    | "ECONOMY"
    | "economy"
    | "FIRST"
    | "first"
    | "BUSINESS"
    | "business"
    | (string & {});
  /** The identifier of the train car or coach in which the ticketed seat is located. Eg. "10" */
  coach?: string;
  /** A custome fare class to be used if no `fareClass` applies. Both `fareClass` and `customFareClass` may not be set. */
  customFareClass?: LocalizedString;
  /** The identifier of where the ticketed seat is located. Eg. "42". If there is no specific identifier, use `seatAssigment` instead. */
  seat?: string;
  /** The passenger's seat assignment. Eg. "no specific seat". To be used when there is no specific identifier to use in `seat`. */
  seatAssignment?: LocalizedString;
}

export const TicketSeat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fareClass: Schema.optional(Schema.String),
  coach: Schema.optional(Schema.String),
  customFareClass: Schema.optional(LocalizedString),
  seat: Schema.optional(Schema.String),
  seatAssignment: Schema.optional(LocalizedString),
}).annotate({ identifier: "TicketSeat" });

export interface TicketLeg {
  /** The reserved seat for the passenger(s). If more than one seat is to be specified then use the `ticketSeats` field instead. Both `ticketSeat` and `ticketSeats` may not be set. */
  ticketSeat?: TicketSeat;
  /** Terminus station or destination of the train/bus/etc. */
  transitTerminusName?: LocalizedString;
  /** The zone of boarding within the platform. */
  zone?: string;
  /** The destination station code. */
  destinationStationCode?: string;
  /** The name of the origin station. This is required if `desinationName` is present or if `originStationCode` is not present. */
  originName?: LocalizedString;
  /** The platform or gate where the passenger can board the carriage. */
  platform?: string;
  /** The reserved seat for the passenger(s). If only one seat is to be specified then use the `ticketSeat` field instead. Both `ticketSeat` and `ticketSeats` may not be set. */
  ticketSeats?: ReadonlyArray<TicketSeat>;
  /** The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the destination station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  arrivalDateTime?: string;
  /** The name of the transit operator that is operating this leg of a trip. */
  transitOperatorName?: LocalizedString;
  /** The origin station code. This is required if `destinationStationCode` is present or if `originName` is not present. */
  originStationCode?: string;
  /** Short description/name of the fare for this leg of travel. Eg "Anytime Single Use". */
  fareName?: LocalizedString;
  /** The destination name. */
  destinationName?: LocalizedString;
  /** The train or ship name/number that the passsenger needs to board. */
  carriage?: string;
  /** The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the origin station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  departureDateTime?: string;
}

export const TicketLeg = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ticketSeat: Schema.optional(TicketSeat),
  transitTerminusName: Schema.optional(LocalizedString),
  zone: Schema.optional(Schema.String),
  destinationStationCode: Schema.optional(Schema.String),
  originName: Schema.optional(LocalizedString),
  platform: Schema.optional(Schema.String),
  ticketSeats: Schema.optional(Schema.Array(TicketSeat)),
  arrivalDateTime: Schema.optional(Schema.String),
  transitOperatorName: Schema.optional(LocalizedString),
  originStationCode: Schema.optional(Schema.String),
  fareName: Schema.optional(LocalizedString),
  destinationName: Schema.optional(LocalizedString),
  carriage: Schema.optional(Schema.String),
  departureDateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "TicketLeg" });

export interface PurchaseDetails {
  /** ID of the account used to purchase the ticket. */
  accountId?: string;
  /** The confirmation code for the purchase. This may be the same for multiple different tickets and is used to group tickets together. */
  confirmationCode?: string;
  /** The cost of the ticket. */
  ticketCost?: TicketCost;
  /** The purchase date/time of the ticket. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Without offset information, some rich features may not be available. */
  purchaseDateTime?: string;
  /** Receipt number/identifier for tracking the ticket purchase via the body that sold the ticket. */
  purchaseReceiptNumber?: string;
}

export const PurchaseDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.optional(Schema.String),
  confirmationCode: Schema.optional(Schema.String),
  ticketCost: Schema.optional(TicketCost),
  purchaseDateTime: Schema.optional(Schema.String),
  purchaseReceiptNumber: Schema.optional(Schema.String),
}).annotate({ identifier: "PurchaseDetails" });

export interface TicketRestrictions {
  /** More details about the above `routeRestrictions`. */
  routeRestrictionsDetails?: LocalizedString;
  /** Extra restrictions that don't fall under the "route" or "time" categories. */
  otherRestrictions?: LocalizedString;
  /** Restrictions about routes that may be taken. For example, this may be the string "Reserved CrossCountry trains only". */
  routeRestrictions?: LocalizedString;
  /** Restrictions about times this ticket may be used. */
  timeRestrictions?: LocalizedString;
}

export const TicketRestrictions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  routeRestrictionsDetails: Schema.optional(LocalizedString),
  otherRestrictions: Schema.optional(LocalizedString),
  routeRestrictions: Schema.optional(LocalizedString),
  timeRestrictions: Schema.optional(LocalizedString),
}).annotate({ identifier: "TicketRestrictions" });

export interface DeviceContext {
  /** If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user's device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated. */
  deviceToken?: string;
}

export const DeviceContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceToken: Schema.optional(Schema.String),
}).annotate({ identifier: "DeviceContext" });

export interface ActivationOptions {
  /** HTTPS URL that supports REST semantics. Would be used for requesting activation from partners for given valuable, triggered by the users. */
  activationUrl?: string;
  /** Flag to allow users to make activation call from different device. This allows client to render the activation button enabled even if the activationStatus is ACTIVATED but the requested device is different than the current device. */
  allowReactivation?: boolean;
}

export const ActivationOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  activationUrl: Schema.optional(Schema.String),
  allowReactivation: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ActivationOptions" });

export interface TransitClass {
  /** A custom label to use for the seat location value (`transitObject.ticketLeg.ticketSeat.seat`). */
  customSeatLabel?: LocalizedString;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** A custom label to use for the purchase face value (`transitObject.purchaseDetails.ticketCost.faceValue`). */
  customPurchaseFaceValueLabel?: LocalizedString;
  /** Identifies whether multiple users and devices will save the same object referencing this class. */
  multipleDevicesAndHoldersAllowedStatus?:
    | "STATUS_UNSPECIFIED"
    | "MULTIPLE_HOLDERS"
    | "ONE_USER_ALL_DEVICES"
    | "ONE_USER_ONE_DEVICE"
    | "multipleHolders"
    | "oneUserAllDevices"
    | "oneUserOneDevice"
    | (string & {});
  /** Required. The type of transit this class represents, such as "bus". */
  transitType?:
    | "TRANSIT_TYPE_UNSPECIFIED"
    | "BUS"
    | "bus"
    | "RAIL"
    | "rail"
    | "TRAM"
    | "tram"
    | "FERRY"
    | "ferry"
    | "OTHER"
    | "other"
    | (string & {});
  /** A custom label to use for the coach value (`transitObject.ticketLeg.ticketSeat.coach`). */
  customCoachLabel?: LocalizedString;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** The name of the transit operator. */
  transitOperatorName?: LocalizedString;
  /** A custom label to use for the transit fare name value (`transitObject.ticketLeg.fareName`). */
  customFareNameLabel?: LocalizedString;
  /** A custom label to use for the route restrictions details value (`transitObject.ticketRestrictions.routeRestrictionsDetails`). */
  customRouteRestrictionsDetailsLabel?: LocalizedString;
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** A custom label to use for the time restrictions details value (`transitObject.ticketRestrictions.timeRestrictions`). */
  customTimeRestrictionsLabel?: LocalizedString;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** A custom label to use for the route restrictions value (`transitObject.ticketRestrictions.routeRestrictions`). */
  customRouteRestrictionsLabel?: LocalizedString;
  /** If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
  languageOverride?: string;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
  reviewStatus?:
    | "REVIEW_STATUS_UNSPECIFIED"
    | "UNDER_REVIEW"
    | "underReview"
    | "APPROVED"
    | "approved"
    | "REJECTED"
    | "rejected"
    | "DRAFT"
    | "draft"
    | (string & {});
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** A custom label to use for the boarding zone value (`transitObject.ticketLeg.zone`). */
  customZoneLabel?: LocalizedString;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** A custom label to use for the carriage value (`transitObject.ticketLeg.carriage`). */
  customCarriageLabel?: LocalizedString;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** A custom label to use for the purchase receipt number value (`transitObject.purchaseDetails.purchaseReceiptNumber`). */
  customPurchaseReceiptNumberLabel?: LocalizedString;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Required. The logo image of the ticket. This image is displayed in the card detail view of the app. */
  logo?: Image;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** View Unlock Requirement options for the transit ticket. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** A custom label to use for the other restrictions value (`transitObject.ticketRestrictions.otherRestrictions`). */
  customOtherRestrictionsLabel?: LocalizedString;
  /** A custom label to use for the purchase price value (`transitObject.purchaseDetails.ticketCost.purchasePrice`). */
  customPurchasePriceLabel?: LocalizedString;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** A custom label to use for the boarding platform value (`transitObject.ticketLeg.platform`). */
  customPlatformLabel?: LocalizedString;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips. */
  enableSingleLegItinerary?: boolean;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Watermark image to display on the user's device. */
  watermark?: Image;
  /** Activation options for an activatable ticket. */
  activationOptions?: ActivationOptions;
  /** The wide logo of the ticket. When provided, this will be used in place of the logo in the top left of the card view. */
  wideLogo?: Image;
  /** A custom label to use for the transit concession category value (`transitObject.concessionCategory`). */
  customConcessionCategoryLabel?: LocalizedString;
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** A custom label to use for the ticket number value (`transitObject.ticketNumber`). */
  customTicketNumberLabel?: LocalizedString;
  /** A custom label to use for the fare class value (`transitObject.ticketLeg.ticketSeat.fareClass`). */
  customFareClassLabel?: LocalizedString;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** A custom label to use for the confirmation code value (`transitObject.purchaseDetails.confirmationCode`). */
  customConfirmationCodeLabel?: LocalizedString;
  /** A custom label to use for the transit terminus name value (`transitObject.ticketLeg.transitTerminusName`). */
  customTransitTerminusNameLabel?: LocalizedString;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Deprecated. */
  wordMark?: Image;
  /** Deprecated */
  version?: string;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** A custom label to use for the transit discount message value (`transitObject.purchaseDetails.ticketCost.discountMessage`). */
  customDiscountMessageLabel?: LocalizedString;
}

export const TransitClass = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customSeatLabel: Schema.optional(LocalizedString),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  customPurchaseFaceValueLabel: Schema.optional(LocalizedString),
  multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
  transitType: Schema.optional(Schema.String),
  customCoachLabel: Schema.optional(LocalizedString),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  transitOperatorName: Schema.optional(LocalizedString),
  customFareNameLabel: Schema.optional(LocalizedString),
  customRouteRestrictionsDetailsLabel: Schema.optional(LocalizedString),
  localizedIssuerName: Schema.optional(LocalizedString),
  securityAnimation: Schema.optional(SecurityAnimation),
  customTimeRestrictionsLabel: Schema.optional(LocalizedString),
  id: Schema.optional(Schema.String),
  customRouteRestrictionsLabel: Schema.optional(LocalizedString),
  languageOverride: Schema.optional(Schema.String),
  review: Schema.optional(Review),
  reviewStatus: Schema.optional(Schema.String),
  linksModuleData: Schema.optional(LinksModuleData),
  infoModuleData: Schema.optional(InfoModuleData),
  hexBackgroundColor: Schema.optional(Schema.String),
  callbackOptions: Schema.optional(CallbackOptions),
  customZoneLabel: Schema.optional(LocalizedString),
  countryCode: Schema.optional(Schema.String),
  customCarriageLabel: Schema.optional(LocalizedString),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  customPurchaseReceiptNumberLabel: Schema.optional(LocalizedString),
  redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
  issuerName: Schema.optional(Schema.String),
  logo: Schema.optional(Image),
  enableSmartTap: Schema.optional(Schema.Boolean),
  viewUnlockRequirement: Schema.optional(Schema.String),
  customOtherRestrictionsLabel: Schema.optional(LocalizedString),
  customPurchasePriceLabel: Schema.optional(LocalizedString),
  homepageUri: Schema.optional(Uri),
  customPlatformLabel: Schema.optional(LocalizedString),
  messages: Schema.optional(Schema.Array(Message)),
  classTemplateInfo: Schema.optional(ClassTemplateInfo),
  enableSingleLegItinerary: Schema.optional(Schema.Boolean),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  watermark: Schema.optional(Image),
  activationOptions: Schema.optional(ActivationOptions),
  wideLogo: Schema.optional(Image),
  customConcessionCategoryLabel: Schema.optional(LocalizedString),
  notifyPreference: Schema.optional(Schema.String),
  customTicketNumberLabel: Schema.optional(LocalizedString),
  customFareClassLabel: Schema.optional(LocalizedString),
  appLinkData: Schema.optional(AppLinkData),
  customConfirmationCodeLabel: Schema.optional(LocalizedString),
  customTransitTerminusNameLabel: Schema.optional(LocalizedString),
  heroImage: Schema.optional(Image),
  allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
  wordMark: Schema.optional(Image),
  version: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  customDiscountMessageLabel: Schema.optional(LocalizedString),
}).annotate({ identifier: "TransitClass" });

export interface TransitObject {
  /** The number of passengers. */
  passengerType?:
    | "PASSENGER_TYPE_UNSPECIFIED"
    | "SINGLE_PASSENGER"
    | "singlePassenger"
    | "MULTIPLE_PASSENGERS"
    | "multiplePassengers"
    | (string & {});
  /** The concession category for the ticket. */
  concessionCategory?:
    | "CONCESSION_CATEGORY_UNSPECIFIED"
    | "ADULT"
    | "adult"
    | "CHILD"
    | "child"
    | "SENIOR"
    | "senior"
    | (string & {});
  /** A custom status to use for the ticket status value when `ticketStatus` does not provide the right option. Both `ticketStatus` and `customTicketStatus` may not be set. */
  customTicketStatus?: LocalizedString;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "active"
    | "COMPLETED"
    | "completed"
    | "EXPIRED"
    | "expired"
    | "INACTIVE"
    | "inactive"
    | (string & {});
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** The activation status for the object. Required if the class has `activationOptions` set. */
  activationStatus?: ActivationStatus;
  /** A single ticket leg contains departure and arrival information along with boarding and seating information. If more than one leg is to be specified then use the `ticketLegs` field instead. Both `ticketLeg` and `ticketLegs` may not be set. */
  ticketLeg?: TicketLeg;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this transit object. If a user had saved this transit card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Purchase details for this ticket. */
  purchaseDetails?: PurchaseDetails;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Information about what kind of restrictions there are on using this ticket. For example, which days of the week it must be used, or which routes are allowed to be taken. */
  ticketRestrictions?: TicketRestrictions;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Device context associated with the object. */
  deviceContext?: DeviceContext;
  /** The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field. */
  passengerNames?: string;
  /** This id is used to group tickets together if the user has saved multiple tickets for the same trip. */
  tripId?: string;
  /** The status of the ticket. For states which affect display, use the `state` field instead. */
  ticketStatus?:
    | "TICKET_STATUS_UNSPECIFIED"
    | "USED"
    | "used"
    | "REFUNDED"
    | "refunded"
    | "EXCHANGED"
    | "exchanged"
    | (string & {});
  /** A custom concession category to use when `concessionCategory` does not provide the right option. Both `concessionCategory` and `customConcessionCategory` may not be set. */
  customConcessionCategory?: LocalizedString;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: TransitClass;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** The number of the ticket. This is a unique identifier for the ticket in the transit operator's system. */
  ticketNumber?: string;
  /** Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set. */
  ticketLegs?: ReadonlyArray<TicketLeg>;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination. */
  tripType?:
    | "TRIP_TYPE_UNSPECIFIED"
    | "ROUND_TRIP"
    | "roundTrip"
    | "ONE_WAY"
    | "oneWay"
    | (string & {});
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated */
  version?: string;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
}

export const TransitObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  passengerType: Schema.optional(Schema.String),
  concessionCategory: Schema.optional(Schema.String),
  customTicketStatus: Schema.optional(LocalizedString),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  validTimeInterval: Schema.optional(TimeInterval),
  groupingInfo: Schema.optional(GroupingInfo),
  state: Schema.optional(Schema.String),
  hasLinkedDevice: Schema.optional(Schema.Boolean),
  activationStatus: Schema.optional(ActivationStatus),
  ticketLeg: Schema.optional(TicketLeg),
  linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  purchaseDetails: Schema.optional(PurchaseDetails),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  saveRestrictions: Schema.optional(SaveRestrictions),
  ticketRestrictions: Schema.optional(TicketRestrictions),
  messages: Schema.optional(Schema.Array(Message)),
  barcode: Schema.optional(Barcode),
  id: Schema.optional(Schema.String),
  deviceContext: Schema.optional(DeviceContext),
  passengerNames: Schema.optional(Schema.String),
  tripId: Schema.optional(Schema.String),
  ticketStatus: Schema.optional(Schema.String),
  customConcessionCategory: Schema.optional(LocalizedString),
  classReference: Schema.optional(TransitClass),
  hasUsers: Schema.optional(Schema.Boolean),
  passConstraints: Schema.optional(PassConstraints),
  smartTapRedemptionValue: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  classId: Schema.optional(Schema.String),
  ticketNumber: Schema.optional(Schema.String),
  ticketLegs: Schema.optional(Schema.Array(TicketLeg)),
  notifyPreference: Schema.optional(Schema.String),
  appLinkData: Schema.optional(AppLinkData),
  tripType: Schema.optional(Schema.String),
  linksModuleData: Schema.optional(LinksModuleData),
  infoModuleData: Schema.optional(InfoModuleData),
  hexBackgroundColor: Schema.optional(Schema.String),
  rotatingBarcode: Schema.optional(RotatingBarcode),
  disableExpirationNotification: Schema.optional(Schema.Boolean),
  heroImage: Schema.optional(Image),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  version: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
}).annotate({ identifier: "TransitObject" });

export interface LoyaltyPointsBalance {
  /** The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  double?: number;
  /** The money form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  money?: Money;
  /** The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  string?: string;
  /** The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  int?: number;
}

export const LoyaltyPointsBalance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  double: Schema.optional(Schema.Number),
  money: Schema.optional(Money),
  string: Schema.optional(Schema.String),
  int: Schema.optional(Schema.Number),
}).annotate({ identifier: "LoyaltyPointsBalance" });

export interface LoyaltyPoints {
  /** The loyalty points label, such as "Points". Recommended maximum length is 9 characters. */
  label?: string;
  /** The account holder's loyalty point balance, such as "500" or "$10.00". Recommended maximum length is 7 characters. This is a required field of `loyaltyPoints` and `secondaryLoyaltyPoints`. */
  balance?: LoyaltyPointsBalance;
  /** Translated strings for the label. Recommended maximum length is 9 characters. */
  localizedLabel?: LocalizedString;
}

export const LoyaltyPoints = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String),
  balance: Schema.optional(LoyaltyPointsBalance),
  localizedLabel: Schema.optional(LocalizedString),
}).annotate({ identifier: "LoyaltyPoints" });

export interface LoyaltyObject {
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** The loyalty account holder name, such as "John Smith." Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  accountName?: string;
  /** The loyalty reward points label, balance, and type. */
  loyaltyPoints?: LoyaltyPoints;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: LoyaltyClass;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "active"
    | "COMPLETED"
    | "completed"
    | "EXPIRED"
    | "expired"
    | "INACTIVE"
    | "inactive"
    | (string & {});
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** The secondary loyalty reward points label, balance, and type. Shown in addition to the primary loyalty points. */
  secondaryLoyaltyPoints?: LoyaltyPoints;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this loyalty object. If a user had saved this loyalty card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** The loyalty account identifier. Recommended maximum length is 20 characters. */
  accountId?: string;
  /** A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. */
  linkedOfferIds?: ReadonlyArray<string>;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyObject"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Deprecated */
  version?: string;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present. */
  smartTapRedemptionValue?: string;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
}

export const LoyaltyObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  messages: Schema.optional(Schema.Array(Message)),
  barcode: Schema.optional(Barcode),
  id: Schema.optional(Schema.String),
  accountName: Schema.optional(Schema.String),
  loyaltyPoints: Schema.optional(LoyaltyPoints),
  classReference: Schema.optional(LoyaltyClass),
  hasUsers: Schema.optional(Schema.Boolean),
  passConstraints: Schema.optional(PassConstraints),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  validTimeInterval: Schema.optional(TimeInterval),
  groupingInfo: Schema.optional(GroupingInfo),
  state: Schema.optional(Schema.String),
  hasLinkedDevice: Schema.optional(Schema.Boolean),
  secondaryLoyaltyPoints: Schema.optional(LoyaltyPoints),
  linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  saveRestrictions: Schema.optional(SaveRestrictions),
  accountId: Schema.optional(Schema.String),
  linkedOfferIds: Schema.optional(Schema.Array(Schema.String)),
  linksModuleData: Schema.optional(LinksModuleData),
  infoModuleData: Schema.optional(InfoModuleData),
  rotatingBarcode: Schema.optional(RotatingBarcode),
  disableExpirationNotification: Schema.optional(Schema.Boolean),
  heroImage: Schema.optional(Image),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  version: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  smartTapRedemptionValue: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  classId: Schema.optional(Schema.String),
  notifyPreference: Schema.optional(Schema.String),
  appLinkData: Schema.optional(AppLinkData),
}).annotate({ identifier: "LoyaltyObject" });

export interface OfferObject {
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Deprecated */
  version?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerObject"`. */
  kind?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** The barcode type and value. */
  barcode?: Barcode;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: OfferClass;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "active"
    | "COMPLETED"
    | "completed"
    | "EXPIRED"
    | "expired"
    | "INACTIVE"
    | "inactive"
    | (string & {});
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this offer object. If a user had saved this offer, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID.identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
}

export const OfferObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disableExpirationNotification: Schema.optional(Schema.Boolean),
  rotatingBarcode: Schema.optional(RotatingBarcode),
  infoModuleData: Schema.optional(InfoModuleData),
  linksModuleData: Schema.optional(LinksModuleData),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  version: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(LatLongPoint)),
  heroImage: Schema.optional(Image),
  classId: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  smartTapRedemptionValue: Schema.optional(Schema.String),
  appLinkData: Schema.optional(AppLinkData),
  notifyPreference: Schema.optional(Schema.String),
  barcode: Schema.optional(Barcode),
  messages: Schema.optional(Schema.Array(Message)),
  classReference: Schema.optional(OfferClass),
  hasUsers: Schema.optional(Schema.Boolean),
  passConstraints: Schema.optional(PassConstraints),
  id: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  hasLinkedDevice: Schema.optional(Schema.Boolean),
  groupingInfo: Schema.optional(GroupingInfo),
  validTimeInterval: Schema.optional(TimeInterval),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  saveRestrictions: Schema.optional(SaveRestrictions),
  linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "OfferObject" });

export interface ExpiryNotification {
  /** Indicates if the object needs to have expiry notification enabled. */
  enableNotification?: boolean;
}

export const ExpiryNotification = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableNotification: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ExpiryNotification" });

export interface UpcomingNotification {
  /** Indicates if the object needs to have upcoming notification enabled. */
  enableNotification?: boolean;
}

export const UpcomingNotification = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableNotification: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "UpcomingNotification" });

export interface Notifications {
  /** A notification would be triggered at a specific time before the card expires. */
  expiryNotification?: ExpiryNotification;
  /** A notification would be triggered at a specific time before the card becomes usable. */
  upcomingNotification?: UpcomingNotification;
}

export const Notifications = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expiryNotification: Schema.optional(ExpiryNotification),
  upcomingNotification: Schema.optional(UpcomingNotification),
}).annotate({ identifier: "Notifications" });

export interface GenericObject {
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that. */
  barcode?: Barcode;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  id?: string;
  /** The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view. */
  subheader?: LocalizedString;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** The logo image of the pass. This image is displayed in the card detail view in upper left, and also on the list/thumbnail view. If the logo is not present, the first letter of `cardTitle` would be shown as logo. */
  logo?: Image;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices. */
  validTimeInterval?: TimeInterval;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** Required. The title of the pass, such as "50% off coupon" or "Library card" or "Voucher". This field is required and appears in the title row of the pass detail view. */
  header?: LocalizedString;
  /** The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. If this is not provided, the object would be considered `ACTIVE`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "active"
    | "COMPLETED"
    | "completed"
    | "EXPIRED"
    | "expired"
    | "INACTIVE"
    | "inactive"
    | (string & {});
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this generic object. If a user had saved this generic card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Links module data. If `linksModuleData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  linksModuleData?: LinksModuleData;
  /** The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google. */
  hexBackgroundColor?: string;
  /** The rotating barcode settings/details. */
  rotatingBarcode?: RotatingBarcode;
  /** Banner image displayed on the front of the card if present. The image will be displayed at 100% width. */
  heroImage?: Image;
  /** Image module data. Only one of the image from class and one from object level will be rendered when both set. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Required. The header of the pass. This is usually the Business name such as "XXX Gym", "AAA Insurance". This field is required and appears in the header row at the very top of the pass. */
  cardTitle?: LocalizedString;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. */
  classId?: string;
  /** The wide logo of the pass. When provided, this will be used in place of the logo in the top left of the card view. */
  wideLogo?: Image;
  /** Specify which `GenericType` the card belongs to. */
  genericType?:
    | "GENERIC_TYPE_UNSPECIFIED"
    | "GENERIC_SEASON_PASS"
    | "GENERIC_UTILITY_BILLS"
    | "GENERIC_PARKING_PASS"
    | "GENERIC_VOUCHER"
    | "GENERIC_GYM_MEMBERSHIP"
    | "GENERIC_LIBRARY_MEMBERSHIP"
    | "GENERIC_RESERVATIONS"
    | "GENERIC_AUTO_INSURANCE"
    | "GENERIC_HOME_INSURANCE"
    | "GENERIC_ENTRY_TICKET"
    | "GENERIC_RECEIPT"
    | "GENERIC_LOYALTY_CARD"
    | "GENERIC_BUSINESS_CARD"
    | "GENERIC_BARCODE_PASS"
    | "GENERIC_MEMBERSHIP_CARD"
    | "GENERIC_STUDENT_CARD"
    | "GENERIC_TRANSIT_PASS"
    | "GENERIC_VEHICLE_REGISTRATION"
    | "GENERIC_OTHER"
    | (string & {});
  /** The notification settings that are enabled for this object. */
  notifications?: Notifications;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
}

export const GenericObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  messages: Schema.optional(Schema.Array(Message)),
  barcode: Schema.optional(Barcode),
  id: Schema.optional(Schema.String),
  subheader: Schema.optional(LocalizedString),
  hasUsers: Schema.optional(Schema.Boolean),
  passConstraints: Schema.optional(PassConstraints),
  logo: Schema.optional(Image),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  validTimeInterval: Schema.optional(TimeInterval),
  groupingInfo: Schema.optional(GroupingInfo),
  header: Schema.optional(LocalizedString),
  state: Schema.optional(Schema.String),
  linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  saveRestrictions: Schema.optional(SaveRestrictions),
  linksModuleData: Schema.optional(LinksModuleData),
  hexBackgroundColor: Schema.optional(Schema.String),
  rotatingBarcode: Schema.optional(RotatingBarcode),
  heroImage: Schema.optional(Image),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  cardTitle: Schema.optional(LocalizedString),
  smartTapRedemptionValue: Schema.optional(Schema.String),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  classId: Schema.optional(Schema.String),
  wideLogo: Schema.optional(Image),
  genericType: Schema.optional(Schema.String),
  notifications: Schema.optional(Notifications),
  appLinkData: Schema.optional(AppLinkData),
}).annotate({ identifier: "GenericObject" });

export interface GenericClass {
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  enableSmartTap?: boolean;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** View Unlock Requirement options for the generic pass. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Identifies whether multiple users and devices will save the same object referencing this class. */
  multipleDevicesAndHoldersAllowedStatus?:
    | "STATUS_UNSPECIFIED"
    | "MULTIPLE_HOLDERS"
    | "ONE_USER_ALL_DEVICES"
    | "ONE_USER_ONE_DEVICE"
    | "multipleHolders"
    | "oneUserAllDevices"
    | "oneUserOneDevice"
    | (string & {});
  /** Text module data. If `textModulesData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** Links module data. If `linksModuleData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  linksModuleData?: LinksModuleData;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Required. The unique identifier for the class. This ID must be unique across all from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  id?: string;
  /** Image module data. If `imageModulesData` is also defined on the object, both will be displayed. Only one of the image from class and one from object level will be rendered when both set. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
}

export const GenericClass = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableSmartTap: Schema.optional(Schema.Boolean),
  merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
  valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  viewUnlockRequirement: Schema.optional(Schema.String),
  multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
  textModulesData: Schema.optional(Schema.Array(TextModuleData)),
  appLinkData: Schema.optional(AppLinkData),
  linksModuleData: Schema.optional(LinksModuleData),
  callbackOptions: Schema.optional(CallbackOptions),
  messages: Schema.optional(Schema.Array(Message)),
  classTemplateInfo: Schema.optional(ClassTemplateInfo),
  securityAnimation: Schema.optional(SecurityAnimation),
  id: Schema.optional(Schema.String),
  imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "GenericClass" });

export interface Resources {
  /** A list of loyalty classes. */
  loyaltyClasses?: ReadonlyArray<LoyaltyClass>;
  /** A list of flight classes. */
  flightClasses?: ReadonlyArray<FlightClass>;
  /** A list of flight objects. */
  flightObjects?: ReadonlyArray<FlightObject>;
  /** A list of transit objects. */
  transitObjects?: ReadonlyArray<TransitObject>;
  /** A list of gift card objects. */
  giftCardObjects?: ReadonlyArray<GiftCardObject>;
  /** A list of event ticket classes. */
  eventTicketClasses?: ReadonlyArray<EventTicketClass>;
  /** A list of offer classes. */
  offerClasses?: ReadonlyArray<OfferClass>;
  /** A list of event ticket objects. */
  eventTicketObjects?: ReadonlyArray<EventTicketObject>;
  /** A list of gift card classes. */
  giftCardClasses?: ReadonlyArray<GiftCardClass>;
  /** A list of loyalty objects. */
  loyaltyObjects?: ReadonlyArray<LoyaltyObject>;
  /** A list of offer objects. */
  offerObjects?: ReadonlyArray<OfferObject>;
  /** A list of generic objects. */
  genericObjects?: ReadonlyArray<GenericObject>;
  /** A list of generic classes. */
  genericClasses?: ReadonlyArray<GenericClass>;
  /** A list of transit classes. */
  transitClasses?: ReadonlyArray<TransitClass>;
}

export const Resources = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  loyaltyClasses: Schema.optional(Schema.Array(LoyaltyClass)),
  flightClasses: Schema.optional(Schema.Array(FlightClass)),
  flightObjects: Schema.optional(Schema.Array(FlightObject)),
  transitObjects: Schema.optional(Schema.Array(TransitObject)),
  giftCardObjects: Schema.optional(Schema.Array(GiftCardObject)),
  eventTicketClasses: Schema.optional(Schema.Array(EventTicketClass)),
  offerClasses: Schema.optional(Schema.Array(OfferClass)),
  eventTicketObjects: Schema.optional(Schema.Array(EventTicketObject)),
  giftCardClasses: Schema.optional(Schema.Array(GiftCardClass)),
  loyaltyObjects: Schema.optional(Schema.Array(LoyaltyObject)),
  offerObjects: Schema.optional(Schema.Array(OfferObject)),
  genericObjects: Schema.optional(Schema.Array(GenericObject)),
  genericClasses: Schema.optional(Schema.Array(GenericClass)),
  transitClasses: Schema.optional(Schema.Array(TransitClass)),
}).annotate({ identifier: "Resources" });

export interface Pagination {
  /** Number of results returned in this page. */
  resultsPerPage?: number;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#pagination"`. */
  kind?: string;
  /** Page token to send to fetch the next page. */
  nextPageToken?: string;
}

export const Pagination = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resultsPerPage: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "Pagination" });

export interface OfferClassListResponse {
  /** Pagination of the response. */
  pagination?: Pagination;
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<OfferClass>;
}

export const OfferClassListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    pagination: Schema.optional(Pagination),
    resources: Schema.optional(Schema.Array(OfferClass)),
  },
).annotate({ identifier: "OfferClassListResponse" });

export interface GenericObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GenericObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const GenericObjectListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(GenericObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "GenericObjectListResponse" });

export interface EventTicketClassAddMessageResponse {
  /** The updated EventTicketClass resource. */
  resource?: EventTicketClass;
}

export const EventTicketClassAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(EventTicketClass),
  }).annotate({ identifier: "EventTicketClassAddMessageResponse" });

export interface IssuerContactInfo {
  /** The primary contact name. */
  name?: string;
  /** The primary contact email address. */
  email?: string;
  /** Email addresses which will receive alerts. */
  alertsEmails?: ReadonlyArray<string>;
  /** The primary contact phone number. */
  phone?: string;
}

export const IssuerContactInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  alertsEmails: Schema.optional(Schema.Array(Schema.String)),
  phone: Schema.optional(Schema.String),
}).annotate({ identifier: "IssuerContactInfo" });

export interface AuthenticationKey {
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  id?: number;
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  publicKeyPem?: string;
}

export const AuthenticationKey = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  publicKeyPem: Schema.optional(Schema.String),
}).annotate({ identifier: "AuthenticationKey" });

export interface SmartTapMerchantData {
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  smartTapMerchantId?: string;
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  authenticationKeys?: ReadonlyArray<AuthenticationKey>;
}

export const SmartTapMerchantData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  smartTapMerchantId: Schema.optional(Schema.String),
  authenticationKeys: Schema.optional(Schema.Array(AuthenticationKey)),
}).annotate({ identifier: "SmartTapMerchantData" });

export interface Issuer {
  /** Issuer contact information. */
  contactInfo?: IssuerContactInfo;
  /** The account name of the issuer. */
  name?: string;
  /** The unique identifier for an issuer account. This is automatically generated when the issuer is inserted. */
  issuerId?: string;
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  smartTapMerchantData?: SmartTapMerchantData;
  /** URL for the issuer's home page. */
  homepageUrl?: string;
  /** Allows the issuer to provide their callback settings. */
  callbackOptions?: CallbackOptions;
}

export const Issuer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contactInfo: Schema.optional(IssuerContactInfo),
  name: Schema.optional(Schema.String),
  issuerId: Schema.optional(Schema.String),
  smartTapMerchantData: Schema.optional(SmartTapMerchantData),
  homepageUrl: Schema.optional(Schema.String),
  callbackOptions: Schema.optional(CallbackOptions),
}).annotate({ identifier: "Issuer" });

export interface IssuerListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<Issuer>;
}

export const IssuerListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resources: Schema.optional(Schema.Array(Issuer)),
}).annotate({ identifier: "IssuerListResponse" });

export interface DownloadParameters {
  /** Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty. */
  ignoreRange?: boolean;
  /** A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client. */
  allowGzipCompression?: boolean;
}

export const DownloadParameters = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ignoreRange: Schema.optional(Schema.Boolean),
  allowGzipCompression: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DownloadParameters" });

export interface DiffUploadResponse {
  /** The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification. */
  originalObject?: CompositeMedia;
  /** The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload. */
  objectVersion?: string;
}

export const DiffUploadResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  originalObject: Schema.optional(CompositeMedia),
  objectVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "DiffUploadResponse" });

export interface DiffChecksumsResponse {
  /** The chunk size of checksums. Must be a multiple of 256KB. */
  chunkSizeBytes?: string;
  /** If set, calculate the checksums based on the contents and return them to the caller. */
  objectLocation?: CompositeMedia;
  /** The total size of the server object. */
  objectSizeBytes?: string;
  /** Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol. */
  checksumsLocation?: CompositeMedia;
  /** The object version of the object the checksums are being returned for. */
  objectVersion?: string;
}

export const DiffChecksumsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  chunkSizeBytes: Schema.optional(Schema.String),
  objectLocation: Schema.optional(CompositeMedia),
  objectSizeBytes: Schema.optional(Schema.String),
  checksumsLocation: Schema.optional(CompositeMedia),
  objectVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "DiffChecksumsResponse" });

export interface DiffDownloadResponse {
  /** The original object location. */
  objectLocation?: CompositeMedia;
}

export const DiffDownloadResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectLocation: Schema.optional(CompositeMedia),
}).annotate({ identifier: "DiffDownloadResponse" });

export interface DiffVersionResponse {
  /** The version of the object stored at the server. */
  objectVersion?: string;
  /** The total size of the server object. */
  objectSizeBytes?: string;
}

export const DiffVersionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectVersion: Schema.optional(Schema.String),
  objectSizeBytes: Schema.optional(Schema.String),
}).annotate({ identifier: "DiffVersionResponse" });

export interface ContentTypeInfo {
  /** The content type of the file detected by Fusion ID. go/fusionid */
  fromFusionId?: string;
  /** Scotty's best guess of what the content type of the file is. */
  bestGuess?: string;
  /** The content type of the file derived from the file extension of the original file name used by the client. */
  fromFileName?: string;
  /** The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file. */
  fromBytes?: string;
  /** The content type of the file as specified in the request headers, multipart headers, or RUPIO start request. */
  fromHeader?: string;
  /** The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API). */
  fromUrlPath?: string;
  /** Metadata information from Fusion ID detection. Serialized FusionIdDetectionMetadata proto. Only set if from_fusion_id is set. */
  fusionIdDetectionMetadata?: string;
}

export const ContentTypeInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fromFusionId: Schema.optional(Schema.String),
  bestGuess: Schema.optional(Schema.String),
  fromFileName: Schema.optional(Schema.String),
  fromBytes: Schema.optional(Schema.String),
  fromHeader: Schema.optional(Schema.String),
  fromUrlPath: Schema.optional(Schema.String),
  fusionIdDetectionMetadata: Schema.optional(Schema.String),
}).annotate({ identifier: "ContentTypeInfo" });

export interface Media {
  /** Parameters for a media download. */
  downloadParameters?: DownloadParameters;
  /** Set if reference_type is DIFF_UPLOAD_RESPONSE. */
  diffUploadResponse?: DiffUploadResponse;
  /** Set if reference_type is DIFF_UPLOAD_REQUEST. */
  diffUploadRequest?: DiffUploadRequest;
  /** For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported. */
  crc32cHash?: number;
  /** Set if reference_type is DIFF_CHECKSUMS_RESPONSE. */
  diffChecksumsResponse?: DiffChecksumsResponse;
  /** Size of the data, in bytes */
  length?: string;
  /** Scotty-provided SHA1 hash for an upload. */
  sha1Hash?: string;
  /** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
  cosmoBinaryReference?: string;
  /** Use object_id instead. */
  bigstoreObjectRef?: string;
  /** Set if reference_type is DIFF_DOWNLOAD_RESPONSE. */
  diffDownloadResponse?: DiffDownloadResponse;
  /** Set if reference_type is DIFF_VERSION_RESPONSE. */
  diffVersionResponse?: DiffVersionResponse;
  /** Reference to a TI Blob, set if reference_type is BIGSTORE_REF. */
  objectId?: ObjectId;
  /** Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob. */
  blobstore2Info?: Blobstore2Info;
  /** MIME type of the data */
  contentType?: string;
  /** Path to the data, set if reference_type is PATH */
  path?: string;
  /** A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified. */
  compositeMedia?: ReadonlyArray<CompositeMedia>;
  /** Describes what the field reference contains. */
  referenceType?:
    | "PATH"
    | "BLOB_REF"
    | "INLINE"
    | "GET_MEDIA"
    | "COMPOSITE_MEDIA"
    | "BIGSTORE_REF"
    | "DIFF_VERSION_RESPONSE"
    | "DIFF_CHECKSUMS_RESPONSE"
    | "DIFF_DOWNLOAD_RESPONSE"
    | "DIFF_UPLOAD_REQUEST"
    | "DIFF_UPLOAD_RESPONSE"
    | "COSMO_BINARY_REFERENCE"
    | "ARBITRARY_BYTES"
    | (string & {});
  /** For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification. */
  hashVerified?: boolean;
  /** |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence. */
  isPotentialRetry?: boolean;
  /** Scotty-provided MD5 hash for an upload. */
  md5Hash?: string;
  /** Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA. */
  mediaId?: string;
  /** A unique fingerprint/version id for the media data */
  token?: string;
  /** Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time. */
  algorithm?: string;
  /** Media data, set if reference_type is INLINE */
  inline?: string;
  /** Original file name */
  filename?: string;
  /** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
  blobRef?: string;
  /** Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/blobstore2/api/scotty/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media. */
  hash?: string;
  /** Extended content type information provided for Scotty uploads. */
  contentTypeInfo?: ContentTypeInfo;
  /** Time at which the media data was last updated, in milliseconds since UNIX epoch */
  timestamp?: string;
  /** Scotty-provided SHA256 hash for an upload. */
  sha256Hash?: string;
}

export const Media = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  downloadParameters: Schema.optional(DownloadParameters),
  diffUploadResponse: Schema.optional(DiffUploadResponse),
  diffUploadRequest: Schema.optional(DiffUploadRequest),
  crc32cHash: Schema.optional(Schema.Number),
  diffChecksumsResponse: Schema.optional(DiffChecksumsResponse),
  length: Schema.optional(Schema.String),
  sha1Hash: Schema.optional(Schema.String),
  cosmoBinaryReference: Schema.optional(Schema.String),
  bigstoreObjectRef: Schema.optional(Schema.String),
  diffDownloadResponse: Schema.optional(DiffDownloadResponse),
  diffVersionResponse: Schema.optional(DiffVersionResponse),
  objectId: Schema.optional(ObjectId),
  blobstore2Info: Schema.optional(Blobstore2Info),
  contentType: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
  compositeMedia: Schema.optional(Schema.Array(CompositeMedia)),
  referenceType: Schema.optional(Schema.String),
  hashVerified: Schema.optional(Schema.Boolean),
  isPotentialRetry: Schema.optional(Schema.Boolean),
  md5Hash: Schema.optional(Schema.String),
  mediaId: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
  algorithm: Schema.optional(Schema.String),
  inline: Schema.optional(Schema.String),
  filename: Schema.optional(Schema.String),
  blobRef: Schema.optional(Schema.String),
  hash: Schema.optional(Schema.String),
  contentTypeInfo: Schema.optional(ContentTypeInfo),
  timestamp: Schema.optional(Schema.String),
  sha256Hash: Schema.optional(Schema.String),
}).annotate({ identifier: "Media" });

export interface MediaRequestInfo {
  /** Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information. */
  diffObjectVersion?: string;
  /** Whether the total bytes field contains an estimated data. */
  totalBytesIsEstimated?: boolean;
  /** The type of notification received from Scotty. */
  notificationType?:
    | "START"
    | "PROGRESS"
    | "END"
    | "RESPONSE_SENT"
    | "ERROR"
    | (string & {});
  /** Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
  customData?: string;
  /** The total size of the file. */
  totalBytes?: string;
  /** The physical headers provided by RequestReceivedParameters in Scotty request. type is uploader_service.KeyValuePairs. */
  physicalHeaders?: string;
  /** The number of current bytes uploaded or downloaded. */
  currentBytes?: string;
  /** The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange() */
  requestReceivedParamsServingInfo?: string;
  /** The Scotty request ID. */
  requestId?: string;
  /** The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929 */
  finalStatus?: number;
}

export const MediaRequestInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diffObjectVersion: Schema.optional(Schema.String),
  totalBytesIsEstimated: Schema.optional(Schema.Boolean),
  notificationType: Schema.optional(Schema.String),
  customData: Schema.optional(Schema.String),
  totalBytes: Schema.optional(Schema.String),
  physicalHeaders: Schema.optional(Schema.String),
  currentBytes: Schema.optional(Schema.String),
  requestReceivedParamsServingInfo: Schema.optional(Schema.String),
  requestId: Schema.optional(Schema.String),
  finalStatus: Schema.optional(Schema.Number),
}).annotate({ identifier: "MediaRequestInfo" });

export interface TransitObjectUploadRotatingBarcodeValuesRequest {
  /** A reference to the rotating barcode values payload that was uploaded. */
  blob?: Media;
  /** Extra information about the uploaded media. */
  mediaRequestInfo?: MediaRequestInfo;
}

export const TransitObjectUploadRotatingBarcodeValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blob: Schema.optional(Media),
    mediaRequestInfo: Schema.optional(MediaRequestInfo),
  }).annotate({
    identifier: "TransitObjectUploadRotatingBarcodeValuesRequest",
  });

export interface SignUpInfo {
  /** ID of the class the user can sign up for. */
  classId?: string;
}

export const SignUpInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  classId: Schema.optional(Schema.String),
}).annotate({ identifier: "SignUpInfo" });

export interface IssuerToUserInfo {
  /** Currently not used, consider deprecating. */
  url?: string;
  action?:
    | "ACTION_UNSPECIFIED"
    | "S2AP"
    | "s2ap"
    | "SIGN_UP"
    | "signUp"
    | (string & {});
  signUpInfo?: SignUpInfo;
  /** JSON web token for action S2AP. */
  value?: string;
}

export const IssuerToUserInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  action: Schema.optional(Schema.String),
  signUpInfo: Schema.optional(SignUpInfo),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "IssuerToUserInfo" });

export interface GenericClassAddMessageResponse {
  /** The updated EventTicketClass resource. */
  resource?: GenericClass;
}

export const GenericClassAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GenericClass),
  }).annotate({ identifier: "GenericClassAddMessageResponse" });

export interface OfferObjectAddMessageResponse {
  /** The updated OfferObject resource. */
  resource?: OfferObject;
}

export const OfferObjectAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(OfferObject),
  }).annotate({ identifier: "OfferObjectAddMessageResponse" });

export interface TransitObjectAddMessageResponse {
  /** The updated TransitObject resource. */
  resource?: TransitObject;
}

export const TransitObjectAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(TransitObject),
  }).annotate({ identifier: "TransitObjectAddMessageResponse" });

export interface EventTicketClassListResponse {
  /** Pagination of the response. */
  pagination?: Pagination;
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<EventTicketClass>;
}

export const EventTicketClassListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pagination: Schema.optional(Pagination),
    resources: Schema.optional(Schema.Array(EventTicketClass)),
  }).annotate({ identifier: "EventTicketClassListResponse" });

export interface FlightObjectAddMessageResponse {
  /** The updated FlightObject resource. */
  resource?: FlightObject;
}

export const FlightObjectAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(FlightObject),
  }).annotate({ identifier: "FlightObjectAddMessageResponse" });

export interface EventTicketObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<EventTicketObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const EventTicketObjectListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(EventTicketObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "EventTicketObjectListResponse" });

export interface GenericClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GenericClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const GenericClassListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(GenericClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "GenericClassListResponse" });

export interface JwtInsertResponse {
  /** Data that corresponds to the ids of the provided classes and objects in the JWT. resources will only include the non-empty arrays (i.e. if the JWT only includes eventTicketObjects, then that is the only field that will be present in resources). */
  resources?: Resources;
  /** A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account. */
  saveUri?: string;
}

export const JwtInsertResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resources: Schema.optional(Resources),
  saveUri: Schema.optional(Schema.String),
}).annotate({ identifier: "JwtInsertResponse" });

export interface LoyaltyObjectAddMessageResponse {
  /** The updated LoyaltyObject resource. */
  resource?: LoyaltyObject;
}

export const LoyaltyObjectAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(LoyaltyObject),
  }).annotate({ identifier: "LoyaltyObjectAddMessageResponse" });

export interface FlightObjectListResponse {
  /** Pagination of the response. */
  pagination?: Pagination;
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<FlightObject>;
}

export const FlightObjectListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pagination: Schema.optional(Pagination),
    resources: Schema.optional(Schema.Array(FlightObject)),
  }).annotate({ identifier: "FlightObjectListResponse" });

export interface Permission {
  /** The email address of the user, group, or service account to which this permission refers to. */
  emailAddress?: string;
  /** The role granted by this permission. */
  role?:
    | "ROLE_UNSPECIFIED"
    | "OWNER"
    | "owner"
    | "READER"
    | "reader"
    | "WRITER"
    | "writer"
    | (string & {});
}

export const Permission = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  emailAddress: Schema.optional(Schema.String),
  role: Schema.optional(Schema.String),
}).annotate({ identifier: "Permission" });

export interface Permissions {
  /** The complete list of permissions for the issuer account. */
  permissions?: ReadonlyArray<Permission>;
  /** ID of the issuer the list of permissions refer to. */
  issuerId?: string;
}

export const Permissions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permissions: Schema.optional(Schema.Array(Permission)),
  issuerId: Schema.optional(Schema.String),
}).annotate({ identifier: "Permissions" });

export interface OfferClassAddMessageResponse {
  /** The updated OfferClass resource. */
  resource?: OfferClass;
}

export const OfferClassAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(OfferClass),
  }).annotate({ identifier: "OfferClassAddMessageResponse" });

export interface GiftCardClassListResponse {
  /** Pagination of the response. */
  pagination?: Pagination;
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GiftCardClass>;
}

export const GiftCardClassListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pagination: Schema.optional(Pagination),
    resources: Schema.optional(Schema.Array(GiftCardClass)),
  }).annotate({ identifier: "GiftCardClassListResponse" });

export interface ModifyLinkedOfferObjects {
  /** The linked offer object ids to add to the object. */
  addLinkedOfferObjectIds?: ReadonlyArray<string>;
  /** The linked offer object ids to remove from the object. */
  removeLinkedOfferObjectIds?: ReadonlyArray<string>;
}

export const ModifyLinkedOfferObjects =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addLinkedOfferObjectIds: Schema.optional(Schema.Array(Schema.String)),
    removeLinkedOfferObjectIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ModifyLinkedOfferObjects" });

export interface OfferObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<OfferObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const OfferObjectListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(OfferObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "OfferObjectListResponse" });

export interface UploadPrivateImageRequest {}

export const UploadPrivateImageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadPrivateImageRequest",
  });

export interface UploadPrivateImageResponse {
  /** Unique ID of the uploaded image to be referenced later in Image.private_image_id. */
  privateImageId?: string;
}

export const UploadPrivateImageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateImageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadPrivateImageResponse" });

export interface AddMessageRequest {
  message?: Message;
}

export const AddMessageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Message),
}).annotate({ identifier: "AddMessageRequest" });

export interface LoyaltyClassAddMessageResponse {
  /** The updated LoyaltyClass resource. */
  resource?: LoyaltyClass;
}

export const LoyaltyClassAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(LoyaltyClass),
  }).annotate({ identifier: "LoyaltyClassAddMessageResponse" });

export interface GenericObjectAddMessageResponse {
  /** The updated GenericObject resource. */
  resource?: GenericObject;
}

export const GenericObjectAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GenericObject),
  }).annotate({ identifier: "GenericObjectAddMessageResponse" });

export interface GiftCardObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GiftCardObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const GiftCardObjectListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(GiftCardObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "GiftCardObjectListResponse" });

export interface TransitObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<TransitObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const TransitObjectListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(TransitObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "TransitObjectListResponse" });

export interface LoyaltyObjectListResponse {
  /** Pagination of the response. */
  pagination?: Pagination;
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<LoyaltyObject>;
}

export const LoyaltyObjectListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pagination: Schema.optional(Pagination),
    resources: Schema.optional(Schema.Array(LoyaltyObject)),
  }).annotate({ identifier: "LoyaltyObjectListResponse" });

export interface SetPassUpdateNoticeRequest {
  /** Required. A fully qualified identifier of the pass that the issuer wants to notify the pass holder(s) about. Formatted as . */
  externalPassId?: string;
  /** Required. The JWT signature of the updated pass that the issuer wants to notify Google about. Only devices that report a different JWT signature than this JWT signature will receive the update notification. */
  updatedPassJwtSignature?: string;
  /** Required. The issuer endpoint URI the pass holder needs to follow in order to receive an updated pass JWT. It can not contain any sensitive information. The endpoint needs to authenticate the user before giving the user the updated JWT. Example update URI https://someissuer.com/update/passId=someExternalPassId */
  updateUri?: string;
}

export const SetPassUpdateNoticeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalPassId: Schema.optional(Schema.String),
    updatedPassJwtSignature: Schema.optional(Schema.String),
    updateUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetPassUpdateNoticeRequest" });

export interface SmartTap {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#smartTap"`. */
  kind?: string;
  /** Smart Tap merchant ID of who engaged in the Smart Tap interaction. */
  merchantId?: string;
  /** The unique identifier for a smart tap. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is the Smart Tap id. The Smart Tap id is a Base64 encoded string which represents the id which was generated by the Google Pay app. */
  id?: string;
  /** Communication from merchant to user. */
  infos?: ReadonlyArray<IssuerToUserInfo>;
}

export const SmartTap = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  merchantId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  infos: Schema.optional(Schema.Array(IssuerToUserInfo)),
}).annotate({ identifier: "SmartTap" });

export interface JwtResource {
  /** Required. A string representing a JWT of the format described at https://developers.google.com/wallet/reference/rest/v1/Jwt */
  jwt?: string;
}

export const JwtResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jwt: Schema.optional(Schema.String),
}).annotate({ identifier: "JwtResource" });

export interface FlightClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<FlightClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const FlightClassListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(FlightClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "FlightClassListResponse" });

export interface ModifyLinkedOfferObjectsRequest {
  /** The linked offer object ids to add or remove from the object. */
  linkedOfferObjectIds?: ModifyLinkedOfferObjects;
}

export const ModifyLinkedOfferObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkedOfferObjectIds: Schema.optional(ModifyLinkedOfferObjects),
  }).annotate({ identifier: "ModifyLinkedOfferObjectsRequest" });

export interface TransitClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<TransitClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const TransitClassListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(TransitClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "TransitClassListResponse" });

export interface TransitObjectUploadRotatingBarcodeValuesResponse {}

export const TransitObjectUploadRotatingBarcodeValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TransitObjectUploadRotatingBarcodeValuesResponse",
  });

export interface TransitClassAddMessageResponse {
  /** The updated TransitClass resource. */
  resource?: TransitClass;
}

export const TransitClassAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(TransitClass),
  }).annotate({ identifier: "TransitClassAddMessageResponse" });

export interface SetPassUpdateNoticeResponse {}

export const SetPassUpdateNoticeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SetPassUpdateNoticeResponse",
  });

export interface FlightClassAddMessageResponse {
  /** The updated FlightClass resource. */
  resource?: FlightClass;
}

export const FlightClassAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(FlightClass),
  }).annotate({ identifier: "FlightClassAddMessageResponse" });

export interface GiftCardClassAddMessageResponse {
  /** The updated GiftCardClass resource. */
  resource?: GiftCardClass;
}

export const GiftCardClassAddMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GiftCardClass),
  }).annotate({ identifier: "GiftCardClassAddMessageResponse" });

export interface LoyaltyClassListResponse {
  /** Pagination of the response. */
  pagination?: Pagination;
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<LoyaltyClass>;
}

export const LoyaltyClassListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pagination: Schema.optional(Pagination),
    resources: Schema.optional(Schema.Array(LoyaltyClass)),
  }).annotate({ identifier: "LoyaltyClassListResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetLoyaltyobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "walletobjects/v1/loyaltyObject/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetLoyaltyobjectRequest>;

export type GetLoyaltyobjectResponse = LoyaltyObject;
export const GetLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObject;

export type GetLoyaltyobjectError = DefaultErrors;

/** Returns the loyalty object with the given object ID. */
export const getLoyaltyobject: API.OperationMethod<
  GetLoyaltyobjectRequest,
  GetLoyaltyobjectResponse,
  GetLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLoyaltyobjectRequest,
  output: GetLoyaltyobjectResponse,
  errors: [],
}));

export interface PatchLoyaltyobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: LoyaltyObject;
}

export const PatchLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(LoyaltyObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/loyaltyObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchLoyaltyobjectRequest>;

export type PatchLoyaltyobjectResponse = LoyaltyObject;
export const PatchLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObject;

export type PatchLoyaltyobjectError = DefaultErrors;

/** Updates the loyalty object referenced by the given object ID. This method supports patch semantics. */
export const patchLoyaltyobject: API.OperationMethod<
  PatchLoyaltyobjectRequest,
  PatchLoyaltyobjectResponse,
  PatchLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLoyaltyobjectRequest,
  output: PatchLoyaltyobjectResponse,
  errors: [],
}));

export interface AddmessageLoyaltyobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/loyaltyObject/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageLoyaltyobjectRequest>;

export type AddmessageLoyaltyobjectResponse = LoyaltyObjectAddMessageResponse;
export const AddmessageLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObjectAddMessageResponse;

export type AddmessageLoyaltyobjectError = DefaultErrors;

/** Adds a message to the loyalty object referenced by the given object ID. */
export const addmessageLoyaltyobject: API.OperationMethod<
  AddmessageLoyaltyobjectRequest,
  AddmessageLoyaltyobjectResponse,
  AddmessageLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageLoyaltyobjectRequest,
  output: AddmessageLoyaltyobjectResponse,
  errors: [],
}));

export interface ModifylinkedofferobjectsLoyaltyobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: ModifyLinkedOfferObjectsRequest;
}

export const ModifylinkedofferobjectsLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(ModifyLinkedOfferObjectsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifylinkedofferobjectsLoyaltyobjectRequest>;

export type ModifylinkedofferobjectsLoyaltyobjectResponse = LoyaltyObject;
export const ModifylinkedofferobjectsLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObject;

export type ModifylinkedofferobjectsLoyaltyobjectError = DefaultErrors;

/** Deprecated: Use Auto Linked Passes instead. Modifies linked offer objects for the loyalty object with the given ID. */
export const modifylinkedofferobjectsLoyaltyobject: API.OperationMethod<
  ModifylinkedofferobjectsLoyaltyobjectRequest,
  ModifylinkedofferobjectsLoyaltyobjectResponse,
  ModifylinkedofferobjectsLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifylinkedofferobjectsLoyaltyobjectRequest,
  output: ModifylinkedofferobjectsLoyaltyobjectResponse,
  errors: [],
}));

export interface UpdateLoyaltyobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: LoyaltyObject;
}

export const UpdateLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(LoyaltyObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/loyaltyObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateLoyaltyobjectRequest>;

export type UpdateLoyaltyobjectResponse = LoyaltyObject;
export const UpdateLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObject;

export type UpdateLoyaltyobjectError = DefaultErrors;

/** Updates the loyalty object referenced by the given object ID. */
export const updateLoyaltyobject: API.OperationMethod<
  UpdateLoyaltyobjectRequest,
  UpdateLoyaltyobjectResponse,
  UpdateLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLoyaltyobjectRequest,
  output: UpdateLoyaltyobjectResponse,
  errors: [],
}));

export interface ListLoyaltyobjectRequest {
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/loyaltyObject" }),
    svc,
  ) as unknown as Schema.Schema<ListLoyaltyobjectRequest>;

export type ListLoyaltyobjectResponse = LoyaltyObjectListResponse;
export const ListLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObjectListResponse;

export type ListLoyaltyobjectError = DefaultErrors;

/** Returns a list of all loyalty objects for a given issuer ID. */
export const listLoyaltyobject: API.OperationMethod<
  ListLoyaltyobjectRequest,
  ListLoyaltyobjectResponse,
  ListLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLoyaltyobjectRequest,
  output: ListLoyaltyobjectResponse,
  errors: [],
}));

export interface InsertLoyaltyobjectRequest {
  /** Request body */
  body?: LoyaltyObject;
}

export const InsertLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(LoyaltyObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/loyaltyObject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertLoyaltyobjectRequest>;

export type InsertLoyaltyobjectResponse = LoyaltyObject;
export const InsertLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObject;

export type InsertLoyaltyobjectError = DefaultErrors;

/** Inserts an loyalty object with the given ID and properties. */
export const insertLoyaltyobject: API.OperationMethod<
  InsertLoyaltyobjectRequest,
  InsertLoyaltyobjectResponse,
  InsertLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLoyaltyobjectRequest,
  output: InsertLoyaltyobjectResponse,
  errors: [],
}));

export interface InsertEventticketobjectRequest {
  /** Request body */
  body?: EventTicketObject;
}

export const InsertEventticketobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(EventTicketObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/eventTicketObject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertEventticketobjectRequest>;

export type InsertEventticketobjectResponse = EventTicketObject;
export const InsertEventticketobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketObject;

export type InsertEventticketobjectError = DefaultErrors;

/** Inserts an event ticket object with the given ID and properties. */
export const insertEventticketobject: API.OperationMethod<
  InsertEventticketobjectRequest,
  InsertEventticketobjectResponse,
  InsertEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertEventticketobjectRequest,
  output: InsertEventticketobjectResponse,
  errors: [],
}));

export interface ListEventticketobjectRequest {
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
}

export const ListEventticketobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/eventTicketObject" }),
    svc,
  ) as unknown as Schema.Schema<ListEventticketobjectRequest>;

export type ListEventticketobjectResponse = EventTicketObjectListResponse;
export const ListEventticketobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketObjectListResponse;

export type ListEventticketobjectError = DefaultErrors;

/** Returns a list of all event ticket objects for a given issuer ID. */
export const listEventticketobject: API.OperationMethod<
  ListEventticketobjectRequest,
  ListEventticketobjectResponse,
  ListEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEventticketobjectRequest,
  output: ListEventticketobjectResponse,
  errors: [],
}));

export interface ModifylinkedofferobjectsEventticketobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: ModifyLinkedOfferObjectsRequest;
}

export const ModifylinkedofferobjectsEventticketobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(ModifyLinkedOfferObjectsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifylinkedofferobjectsEventticketobjectRequest>;

export type ModifylinkedofferobjectsEventticketobjectResponse =
  EventTicketObject;
export const ModifylinkedofferobjectsEventticketobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketObject;

export type ModifylinkedofferobjectsEventticketobjectError = DefaultErrors;

/** Deprecated: Use Auto Linked Passes instead. Modifies linked offer objects for the event ticket object with the given ID. */
export const modifylinkedofferobjectsEventticketobject: API.OperationMethod<
  ModifylinkedofferobjectsEventticketobjectRequest,
  ModifylinkedofferobjectsEventticketobjectResponse,
  ModifylinkedofferobjectsEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifylinkedofferobjectsEventticketobjectRequest,
  output: ModifylinkedofferobjectsEventticketobjectResponse,
  errors: [],
}));

export interface UpdateEventticketobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: EventTicketObject;
}

export const UpdateEventticketobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(EventTicketObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/eventTicketObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateEventticketobjectRequest>;

export type UpdateEventticketobjectResponse = EventTicketObject;
export const UpdateEventticketobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketObject;

export type UpdateEventticketobjectError = DefaultErrors;

/** Updates the event ticket object referenced by the given object ID. */
export const updateEventticketobject: API.OperationMethod<
  UpdateEventticketobjectRequest,
  UpdateEventticketobjectResponse,
  UpdateEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventticketobjectRequest,
  output: UpdateEventticketobjectResponse,
  errors: [],
}));

export interface GetEventticketobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetEventticketobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "walletobjects/v1/eventTicketObject/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetEventticketobjectRequest>;

export type GetEventticketobjectResponse = EventTicketObject;
export const GetEventticketobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketObject;

export type GetEventticketobjectError = DefaultErrors;

/** Returns the event ticket object with the given object ID. */
export const getEventticketobject: API.OperationMethod<
  GetEventticketobjectRequest,
  GetEventticketobjectResponse,
  GetEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventticketobjectRequest,
  output: GetEventticketobjectResponse,
  errors: [],
}));

export interface PatchEventticketobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: EventTicketObject;
}

export const PatchEventticketobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(EventTicketObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/eventTicketObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchEventticketobjectRequest>;

export type PatchEventticketobjectResponse = EventTicketObject;
export const PatchEventticketobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketObject;

export type PatchEventticketobjectError = DefaultErrors;

/** Updates the event ticket object referenced by the given object ID. This method supports patch semantics. */
export const patchEventticketobject: API.OperationMethod<
  PatchEventticketobjectRequest,
  PatchEventticketobjectResponse,
  PatchEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEventticketobjectRequest,
  output: PatchEventticketobjectResponse,
  errors: [],
}));

export interface AddmessageEventticketobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageEventticketobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/eventTicketObject/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageEventticketobjectRequest>;

export type AddmessageEventticketobjectResponse =
  EventTicketObjectAddMessageResponse;
export const AddmessageEventticketobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketObjectAddMessageResponse;

export type AddmessageEventticketobjectError = DefaultErrors;

/** Adds a message to the event ticket object referenced by the given object ID. */
export const addmessageEventticketobject: API.OperationMethod<
  AddmessageEventticketobjectRequest,
  AddmessageEventticketobjectResponse,
  AddmessageEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageEventticketobjectRequest,
  output: AddmessageEventticketobjectResponse,
  errors: [],
}));

export interface UpdateOfferclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: OfferClass;
}

export const UpdateOfferclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(OfferClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/offerClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateOfferclassRequest>;

export type UpdateOfferclassResponse = OfferClass;
export const UpdateOfferclassResponse = /*@__PURE__*/ /*#__PURE__*/ OfferClass;

export type UpdateOfferclassError = DefaultErrors;

/** Updates the offer class referenced by the given class ID. */
export const updateOfferclass: API.OperationMethod<
  UpdateOfferclassRequest,
  UpdateOfferclassResponse,
  UpdateOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOfferclassRequest,
  output: UpdateOfferclassResponse,
  errors: [],
}));

export interface AddmessageOfferclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageOfferclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/offerClass/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageOfferclassRequest>;

export type AddmessageOfferclassResponse = OfferClassAddMessageResponse;
export const AddmessageOfferclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferClassAddMessageResponse;

export type AddmessageOfferclassError = DefaultErrors;

/** Adds a message to the offer class referenced by the given class ID. */
export const addmessageOfferclass: API.OperationMethod<
  AddmessageOfferclassRequest,
  AddmessageOfferclassResponse,
  AddmessageOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageOfferclassRequest,
  output: AddmessageOfferclassResponse,
  errors: [],
}));

export interface GetOfferclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetOfferclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
}).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/offerClass/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetOfferclassRequest>;

export type GetOfferclassResponse = OfferClass;
export const GetOfferclassResponse = /*@__PURE__*/ /*#__PURE__*/ OfferClass;

export type GetOfferclassError = DefaultErrors;

/** Returns the offer class with the given class ID. */
export const getOfferclass: API.OperationMethod<
  GetOfferclassRequest,
  GetOfferclassResponse,
  GetOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOfferclassRequest,
  output: GetOfferclassResponse,
  errors: [],
}));

export interface PatchOfferclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: OfferClass;
}

export const PatchOfferclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(OfferClass).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "walletobjects/v1/offerClass/{resourceId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchOfferclassRequest>;

export type PatchOfferclassResponse = OfferClass;
export const PatchOfferclassResponse = /*@__PURE__*/ /*#__PURE__*/ OfferClass;

export type PatchOfferclassError = DefaultErrors;

/** Updates the offer class referenced by the given class ID. This method supports patch semantics. */
export const patchOfferclass: API.OperationMethod<
  PatchOfferclassRequest,
  PatchOfferclassResponse,
  PatchOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOfferclassRequest,
  output: PatchOfferclassResponse,
  errors: [],
}));

export interface InsertOfferclassRequest {
  /** Request body */
  body?: OfferClass;
}

export const InsertOfferclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(OfferClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/offerClass",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertOfferclassRequest>;

export type InsertOfferclassResponse = OfferClass;
export const InsertOfferclassResponse = /*@__PURE__*/ /*#__PURE__*/ OfferClass;

export type InsertOfferclassError = DefaultErrors;

/** Inserts an offer class with the given ID and properties. */
export const insertOfferclass: API.OperationMethod<
  InsertOfferclassRequest,
  InsertOfferclassResponse,
  InsertOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertOfferclassRequest,
  output: InsertOfferclassResponse,
  errors: [],
}));

export interface ListOfferclassRequest {
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
}

export const ListOfferclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
}).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/offerClass" }),
  svc,
) as unknown as Schema.Schema<ListOfferclassRequest>;

export type ListOfferclassResponse = OfferClassListResponse;
export const ListOfferclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferClassListResponse;

export type ListOfferclassError = DefaultErrors;

/** Returns a list of all offer classes for a given issuer ID. */
export const listOfferclass: API.OperationMethod<
  ListOfferclassRequest,
  ListOfferclassResponse,
  ListOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOfferclassRequest,
  output: ListOfferclassResponse,
  errors: [],
}));

export interface UpdateTransitclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: TransitClass;
}

export const UpdateTransitclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(TransitClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/transitClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateTransitclassRequest>;

export type UpdateTransitclassResponse = TransitClass;
export const UpdateTransitclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitClass;

export type UpdateTransitclassError = DefaultErrors;

/** Updates the transit class referenced by the given class ID. */
export const updateTransitclass: API.OperationMethod<
  UpdateTransitclassRequest,
  UpdateTransitclassResponse,
  UpdateTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTransitclassRequest,
  output: UpdateTransitclassResponse,
  errors: [],
}));

export interface AddmessageTransitclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageTransitclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/transitClass/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageTransitclassRequest>;

export type AddmessageTransitclassResponse = TransitClassAddMessageResponse;
export const AddmessageTransitclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitClassAddMessageResponse;

export type AddmessageTransitclassError = DefaultErrors;

/** Adds a message to the transit class referenced by the given class ID. */
export const addmessageTransitclass: API.OperationMethod<
  AddmessageTransitclassRequest,
  AddmessageTransitclassResponse,
  AddmessageTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageTransitclassRequest,
  output: AddmessageTransitclassResponse,
  errors: [],
}));

export interface GetTransitclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetTransitclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/transitClass/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetTransitclassRequest>;

export type GetTransitclassResponse = TransitClass;
export const GetTransitclassResponse = /*@__PURE__*/ /*#__PURE__*/ TransitClass;

export type GetTransitclassError = DefaultErrors;

/** Returns the transit class with the given class ID. */
export const getTransitclass: API.OperationMethod<
  GetTransitclassRequest,
  GetTransitclassResponse,
  GetTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTransitclassRequest,
  output: GetTransitclassResponse,
  errors: [],
}));

export interface PatchTransitclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: TransitClass;
}

export const PatchTransitclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(TransitClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/transitClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchTransitclassRequest>;

export type PatchTransitclassResponse = TransitClass;
export const PatchTransitclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitClass;

export type PatchTransitclassError = DefaultErrors;

/** Updates the transit class referenced by the given class ID. This method supports patch semantics. */
export const patchTransitclass: API.OperationMethod<
  PatchTransitclassRequest,
  PatchTransitclassResponse,
  PatchTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchTransitclassRequest,
  output: PatchTransitclassResponse,
  errors: [],
}));

export interface InsertTransitclassRequest {
  /** Request body */
  body?: TransitClass;
}

export const InsertTransitclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(TransitClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/transitClass",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertTransitclassRequest>;

export type InsertTransitclassResponse = TransitClass;
export const InsertTransitclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitClass;

export type InsertTransitclassError = DefaultErrors;

/** Inserts a transit class with the given ID and properties. */
export const insertTransitclass: API.OperationMethod<
  InsertTransitclassRequest,
  InsertTransitclassResponse,
  InsertTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTransitclassRequest,
  output: InsertTransitclassResponse,
  errors: [],
}));

export interface ListTransitclassRequest {
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
}

export const ListTransitclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/transitClass" }),
    svc,
  ) as unknown as Schema.Schema<ListTransitclassRequest>;

export type ListTransitclassResponse = TransitClassListResponse;
export const ListTransitclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitClassListResponse;

export type ListTransitclassError = DefaultErrors;

/** Returns a list of all transit classes for a given issuer ID. */
export const listTransitclass: API.OperationMethod<
  ListTransitclassRequest,
  ListTransitclassResponse,
  ListTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTransitclassRequest,
  output: ListTransitclassResponse,
  errors: [],
}));

export interface InsertSmarttapRequest {
  /** Request body */
  body?: SmartTap;
}

export const InsertSmarttapRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SmartTap).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "walletobjects/v1/smartTap", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertSmarttapRequest>;

export type InsertSmarttapResponse = SmartTap;
export const InsertSmarttapResponse = /*@__PURE__*/ /*#__PURE__*/ SmartTap;

export type InsertSmarttapError = DefaultErrors;

/** Inserts the smart tap. */
export const insertSmarttap: API.OperationMethod<
  InsertSmarttapRequest,
  InsertSmarttapResponse,
  InsertSmarttapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSmarttapRequest,
  output: InsertSmarttapResponse,
  errors: [],
}));

export interface InsertOfferobjectRequest {
  /** Request body */
  body?: OfferObject;
}

export const InsertOfferobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(OfferObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/offerObject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertOfferobjectRequest>;

export type InsertOfferobjectResponse = OfferObject;
export const InsertOfferobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferObject;

export type InsertOfferobjectError = DefaultErrors;

/** Inserts an offer object with the given ID and properties. */
export const insertOfferobject: API.OperationMethod<
  InsertOfferobjectRequest,
  InsertOfferobjectResponse,
  InsertOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertOfferobjectRequest,
  output: InsertOfferobjectResponse,
  errors: [],
}));

export interface ListOfferobjectRequest {
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListOfferobjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/offerObject" }),
  svc,
) as unknown as Schema.Schema<ListOfferobjectRequest>;

export type ListOfferobjectResponse = OfferObjectListResponse;
export const ListOfferobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferObjectListResponse;

export type ListOfferobjectError = DefaultErrors;

/** Returns a list of all offer objects for a given issuer ID. */
export const listOfferobject: API.OperationMethod<
  ListOfferobjectRequest,
  ListOfferobjectResponse,
  ListOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOfferobjectRequest,
  output: ListOfferobjectResponse,
  errors: [],
}));

export interface UpdateOfferobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: OfferObject;
}

export const UpdateOfferobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(OfferObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/offerObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateOfferobjectRequest>;

export type UpdateOfferobjectResponse = OfferObject;
export const UpdateOfferobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferObject;

export type UpdateOfferobjectError = DefaultErrors;

/** Updates the offer object referenced by the given object ID. */
export const updateOfferobject: API.OperationMethod<
  UpdateOfferobjectRequest,
  UpdateOfferobjectResponse,
  UpdateOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOfferobjectRequest,
  output: UpdateOfferobjectResponse,
  errors: [],
}));

export interface GetOfferobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetOfferobjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
}).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/offerObject/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetOfferobjectRequest>;

export type GetOfferobjectResponse = OfferObject;
export const GetOfferobjectResponse = /*@__PURE__*/ /*#__PURE__*/ OfferObject;

export type GetOfferobjectError = DefaultErrors;

/** Returns the offer object with the given object ID. */
export const getOfferobject: API.OperationMethod<
  GetOfferobjectRequest,
  GetOfferobjectResponse,
  GetOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOfferobjectRequest,
  output: GetOfferobjectResponse,
  errors: [],
}));

export interface PatchOfferobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: OfferObject;
}

export const PatchOfferobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(OfferObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/offerObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchOfferobjectRequest>;

export type PatchOfferobjectResponse = OfferObject;
export const PatchOfferobjectResponse = /*@__PURE__*/ /*#__PURE__*/ OfferObject;

export type PatchOfferobjectError = DefaultErrors;

/** Updates the offer object referenced by the given object ID. This method supports patch semantics. */
export const patchOfferobject: API.OperationMethod<
  PatchOfferobjectRequest,
  PatchOfferobjectResponse,
  PatchOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOfferobjectRequest,
  output: PatchOfferobjectResponse,
  errors: [],
}));

export interface AddmessageOfferobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageOfferobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/offerObject/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageOfferobjectRequest>;

export type AddmessageOfferobjectResponse = OfferObjectAddMessageResponse;
export const AddmessageOfferobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferObjectAddMessageResponse;

export type AddmessageOfferobjectError = DefaultErrors;

/** Adds a message to the offer object referenced by the given object ID. */
export const addmessageOfferobject: API.OperationMethod<
  AddmessageOfferobjectRequest,
  AddmessageOfferobjectResponse,
  AddmessageOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageOfferobjectRequest,
  output: AddmessageOfferobjectResponse,
  errors: [],
}));

export interface ListGenericclassRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListGenericclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/genericClass" }),
    svc,
  ) as unknown as Schema.Schema<ListGenericclassRequest>;

export type ListGenericclassResponse = GenericClassListResponse;
export const ListGenericclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericClassListResponse;

export type ListGenericclassError = DefaultErrors;

/** Returns a list of all generic classes for a given issuer ID. */
export const listGenericclass: API.OperationMethod<
  ListGenericclassRequest,
  ListGenericclassResponse,
  ListGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGenericclassRequest,
  output: ListGenericclassResponse,
  errors: [],
}));

export interface InsertGenericclassRequest {
  /** Request body */
  body?: GenericClass;
}

export const InsertGenericclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GenericClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/genericClass",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertGenericclassRequest>;

export type InsertGenericclassResponse = GenericClass;
export const InsertGenericclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericClass;

export type InsertGenericclassError = DefaultErrors;

/** Inserts a generic class with the given ID and properties. */
export const insertGenericclass: API.OperationMethod<
  InsertGenericclassRequest,
  InsertGenericclassResponse,
  InsertGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGenericclassRequest,
  output: InsertGenericclassResponse,
  errors: [],
}));

export interface AddmessageGenericclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageGenericclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/genericClass/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageGenericclassRequest>;

export type AddmessageGenericclassResponse = GenericClassAddMessageResponse;
export const AddmessageGenericclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericClassAddMessageResponse;

export type AddmessageGenericclassError = DefaultErrors;

/** Adds a message to the generic class referenced by the given class ID. */
export const addmessageGenericclass: API.OperationMethod<
  AddmessageGenericclassRequest,
  AddmessageGenericclassResponse,
  AddmessageGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGenericclassRequest,
  output: AddmessageGenericclassResponse,
  errors: [],
}));

export interface GetGenericclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  resourceId: string;
}

export const GetGenericclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/genericClass/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetGenericclassRequest>;

export type GetGenericclassResponse = GenericClass;
export const GetGenericclassResponse = /*@__PURE__*/ /*#__PURE__*/ GenericClass;

export type GetGenericclassError = DefaultErrors;

/** Returns the generic class with the given class ID. */
export const getGenericclass: API.OperationMethod<
  GetGenericclassRequest,
  GetGenericclassResponse,
  GetGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGenericclassRequest,
  output: GetGenericclassResponse,
  errors: [],
}));

export interface PatchGenericclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  resourceId: string;
  /** Request body */
  body?: GenericClass;
}

export const PatchGenericclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GenericClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/genericClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchGenericclassRequest>;

export type PatchGenericclassResponse = GenericClass;
export const PatchGenericclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericClass;

export type PatchGenericclassError = DefaultErrors;

/** Updates the generic class referenced by the given class ID. This method supports patch semantics. */
export const patchGenericclass: API.OperationMethod<
  PatchGenericclassRequest,
  PatchGenericclassResponse,
  PatchGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGenericclassRequest,
  output: PatchGenericclassResponse,
  errors: [],
}));

export interface UpdateGenericclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  resourceId: string;
  /** Request body */
  body?: GenericClass;
}

export const UpdateGenericclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GenericClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/genericClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateGenericclassRequest>;

export type UpdateGenericclassResponse = GenericClass;
export const UpdateGenericclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericClass;

export type UpdateGenericclassError = DefaultErrors;

/** Updates the Generic class referenced by the given class ID. */
export const updateGenericclass: API.OperationMethod<
  UpdateGenericclassRequest,
  UpdateGenericclassResponse,
  UpdateGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGenericclassRequest,
  output: UpdateGenericclassResponse,
  errors: [],
}));

export interface InsertJwtRequest {
  /** Request body */
  body?: JwtResource;
}

export const InsertJwtRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(JwtResource).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "walletobjects/v1/jwt", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertJwtRequest>;

export type InsertJwtResponse = JwtInsertResponse;
export const InsertJwtResponse = /*@__PURE__*/ /*#__PURE__*/ JwtInsertResponse;

export type InsertJwtError = DefaultErrors;

/** Inserts the resources in the JWT. */
export const insertJwt: API.OperationMethod<
  InsertJwtRequest,
  InsertJwtResponse,
  InsertJwtError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertJwtRequest,
  output: InsertJwtResponse,
  errors: [],
}));

export interface ListLoyaltyclassRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListLoyaltyclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/loyaltyClass" }),
    svc,
  ) as unknown as Schema.Schema<ListLoyaltyclassRequest>;

export type ListLoyaltyclassResponse = LoyaltyClassListResponse;
export const ListLoyaltyclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyClassListResponse;

export type ListLoyaltyclassError = DefaultErrors;

/** Returns a list of all loyalty classes for a given issuer ID. */
export const listLoyaltyclass: API.OperationMethod<
  ListLoyaltyclassRequest,
  ListLoyaltyclassResponse,
  ListLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLoyaltyclassRequest,
  output: ListLoyaltyclassResponse,
  errors: [],
}));

export interface InsertLoyaltyclassRequest {
  /** Request body */
  body?: LoyaltyClass;
}

export const InsertLoyaltyclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(LoyaltyClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/loyaltyClass",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertLoyaltyclassRequest>;

export type InsertLoyaltyclassResponse = LoyaltyClass;
export const InsertLoyaltyclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyClass;

export type InsertLoyaltyclassError = DefaultErrors;

/** Inserts an loyalty class with the given ID and properties. */
export const insertLoyaltyclass: API.OperationMethod<
  InsertLoyaltyclassRequest,
  InsertLoyaltyclassResponse,
  InsertLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLoyaltyclassRequest,
  output: InsertLoyaltyclassResponse,
  errors: [],
}));

export interface GetLoyaltyclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetLoyaltyclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/loyaltyClass/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetLoyaltyclassRequest>;

export type GetLoyaltyclassResponse = LoyaltyClass;
export const GetLoyaltyclassResponse = /*@__PURE__*/ /*#__PURE__*/ LoyaltyClass;

export type GetLoyaltyclassError = DefaultErrors;

/** Returns the loyalty class with the given class ID. */
export const getLoyaltyclass: API.OperationMethod<
  GetLoyaltyclassRequest,
  GetLoyaltyclassResponse,
  GetLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLoyaltyclassRequest,
  output: GetLoyaltyclassResponse,
  errors: [],
}));

export interface PatchLoyaltyclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: LoyaltyClass;
}

export const PatchLoyaltyclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(LoyaltyClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/loyaltyClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchLoyaltyclassRequest>;

export type PatchLoyaltyclassResponse = LoyaltyClass;
export const PatchLoyaltyclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyClass;

export type PatchLoyaltyclassError = DefaultErrors;

/** Updates the loyalty class referenced by the given class ID. This method supports patch semantics. */
export const patchLoyaltyclass: API.OperationMethod<
  PatchLoyaltyclassRequest,
  PatchLoyaltyclassResponse,
  PatchLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLoyaltyclassRequest,
  output: PatchLoyaltyclassResponse,
  errors: [],
}));

export interface AddmessageLoyaltyclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageLoyaltyclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/loyaltyClass/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageLoyaltyclassRequest>;

export type AddmessageLoyaltyclassResponse = LoyaltyClassAddMessageResponse;
export const AddmessageLoyaltyclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyClassAddMessageResponse;

export type AddmessageLoyaltyclassError = DefaultErrors;

/** Adds a message to the loyalty class referenced by the given class ID. */
export const addmessageLoyaltyclass: API.OperationMethod<
  AddmessageLoyaltyclassRequest,
  AddmessageLoyaltyclassResponse,
  AddmessageLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageLoyaltyclassRequest,
  output: AddmessageLoyaltyclassResponse,
  errors: [],
}));

export interface UpdateLoyaltyclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: LoyaltyClass;
}

export const UpdateLoyaltyclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(LoyaltyClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/loyaltyClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateLoyaltyclassRequest>;

export type UpdateLoyaltyclassResponse = LoyaltyClass;
export const UpdateLoyaltyclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyClass;

export type UpdateLoyaltyclassError = DefaultErrors;

/** Updates the loyalty class referenced by the given class ID. */
export const updateLoyaltyclass: API.OperationMethod<
  UpdateLoyaltyclassRequest,
  UpdateLoyaltyclassResponse,
  UpdateLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLoyaltyclassRequest,
  output: UpdateLoyaltyclassResponse,
  errors: [],
}));

export interface InsertGiftcardobjectRequest {
  /** Request body */
  body?: GiftCardObject;
}

export const InsertGiftcardobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GiftCardObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/giftCardObject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertGiftcardobjectRequest>;

export type InsertGiftcardobjectResponse = GiftCardObject;
export const InsertGiftcardobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardObject;

export type InsertGiftcardobjectError = DefaultErrors;

/** Inserts an gift card object with the given ID and properties. */
export const insertGiftcardobject: API.OperationMethod<
  InsertGiftcardobjectRequest,
  InsertGiftcardobjectResponse,
  InsertGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGiftcardobjectRequest,
  output: InsertGiftcardobjectResponse,
  errors: [],
}));

export interface ListGiftcardobjectRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** The ID of the class whose objects will be listed. */
  classId?: string;
}

export const ListGiftcardobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/giftCardObject" }),
    svc,
  ) as unknown as Schema.Schema<ListGiftcardobjectRequest>;

export type ListGiftcardobjectResponse = GiftCardObjectListResponse;
export const ListGiftcardobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardObjectListResponse;

export type ListGiftcardobjectError = DefaultErrors;

/** Returns a list of all gift card objects for a given issuer ID. */
export const listGiftcardobject: API.OperationMethod<
  ListGiftcardobjectRequest,
  ListGiftcardobjectResponse,
  ListGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGiftcardobjectRequest,
  output: ListGiftcardobjectResponse,
  errors: [],
}));

export interface UpdateGiftcardobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: GiftCardObject;
}

export const UpdateGiftcardobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GiftCardObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/giftCardObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateGiftcardobjectRequest>;

export type UpdateGiftcardobjectResponse = GiftCardObject;
export const UpdateGiftcardobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardObject;

export type UpdateGiftcardobjectError = DefaultErrors;

/** Updates the gift card object referenced by the given object ID. */
export const updateGiftcardobject: API.OperationMethod<
  UpdateGiftcardobjectRequest,
  UpdateGiftcardobjectResponse,
  UpdateGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGiftcardobjectRequest,
  output: UpdateGiftcardobjectResponse,
  errors: [],
}));

export interface AddmessageGiftcardobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageGiftcardobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/giftCardObject/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageGiftcardobjectRequest>;

export type AddmessageGiftcardobjectResponse = GiftCardObjectAddMessageResponse;
export const AddmessageGiftcardobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardObjectAddMessageResponse;

export type AddmessageGiftcardobjectError = DefaultErrors;

/** Adds a message to the gift card object referenced by the given object ID. */
export const addmessageGiftcardobject: API.OperationMethod<
  AddmessageGiftcardobjectRequest,
  AddmessageGiftcardobjectResponse,
  AddmessageGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGiftcardobjectRequest,
  output: AddmessageGiftcardobjectResponse,
  errors: [],
}));

export interface GetGiftcardobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetGiftcardobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "walletobjects/v1/giftCardObject/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetGiftcardobjectRequest>;

export type GetGiftcardobjectResponse = GiftCardObject;
export const GetGiftcardobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardObject;

export type GetGiftcardobjectError = DefaultErrors;

/** Returns the gift card object with the given object ID. */
export const getGiftcardobject: API.OperationMethod<
  GetGiftcardobjectRequest,
  GetGiftcardobjectResponse,
  GetGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGiftcardobjectRequest,
  output: GetGiftcardobjectResponse,
  errors: [],
}));

export interface PatchGiftcardobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: GiftCardObject;
}

export const PatchGiftcardobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GiftCardObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/giftCardObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchGiftcardobjectRequest>;

export type PatchGiftcardobjectResponse = GiftCardObject;
export const PatchGiftcardobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardObject;

export type PatchGiftcardobjectError = DefaultErrors;

/** Updates the gift card object referenced by the given object ID. This method supports patch semantics. */
export const patchGiftcardobject: API.OperationMethod<
  PatchGiftcardobjectRequest,
  PatchGiftcardobjectResponse,
  PatchGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGiftcardobjectRequest,
  output: PatchGiftcardobjectResponse,
  errors: [],
}));

export interface UpdateEventticketclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: EventTicketClass;
}

export const UpdateEventticketclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(EventTicketClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/eventTicketClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateEventticketclassRequest>;

export type UpdateEventticketclassResponse = EventTicketClass;
export const UpdateEventticketclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketClass;

export type UpdateEventticketclassError = DefaultErrors;

/** Updates the event ticket class referenced by the given class ID. */
export const updateEventticketclass: API.OperationMethod<
  UpdateEventticketclassRequest,
  UpdateEventticketclassResponse,
  UpdateEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventticketclassRequest,
  output: UpdateEventticketclassResponse,
  errors: [],
}));

export interface GetEventticketclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetEventticketclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "walletobjects/v1/eventTicketClass/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetEventticketclassRequest>;

export type GetEventticketclassResponse = EventTicketClass;
export const GetEventticketclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketClass;

export type GetEventticketclassError = DefaultErrors;

/** Returns the event ticket class with the given class ID. */
export const getEventticketclass: API.OperationMethod<
  GetEventticketclassRequest,
  GetEventticketclassResponse,
  GetEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventticketclassRequest,
  output: GetEventticketclassResponse,
  errors: [],
}));

export interface PatchEventticketclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: EventTicketClass;
}

export const PatchEventticketclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(EventTicketClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/eventTicketClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchEventticketclassRequest>;

export type PatchEventticketclassResponse = EventTicketClass;
export const PatchEventticketclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketClass;

export type PatchEventticketclassError = DefaultErrors;

/** Updates the event ticket class referenced by the given class ID. This method supports patch semantics. */
export const patchEventticketclass: API.OperationMethod<
  PatchEventticketclassRequest,
  PatchEventticketclassResponse,
  PatchEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEventticketclassRequest,
  output: PatchEventticketclassResponse,
  errors: [],
}));

export interface AddmessageEventticketclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageEventticketclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/eventTicketClass/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageEventticketclassRequest>;

export type AddmessageEventticketclassResponse =
  EventTicketClassAddMessageResponse;
export const AddmessageEventticketclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketClassAddMessageResponse;

export type AddmessageEventticketclassError = DefaultErrors;

/** Adds a message to the event ticket class referenced by the given class ID. */
export const addmessageEventticketclass: API.OperationMethod<
  AddmessageEventticketclassRequest,
  AddmessageEventticketclassResponse,
  AddmessageEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageEventticketclassRequest,
  output: AddmessageEventticketclassResponse,
  errors: [],
}));

export interface InsertEventticketclassRequest {
  /** Request body */
  body?: EventTicketClass;
}

export const InsertEventticketclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(EventTicketClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/eventTicketClass",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertEventticketclassRequest>;

export type InsertEventticketclassResponse = EventTicketClass;
export const InsertEventticketclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketClass;

export type InsertEventticketclassError = DefaultErrors;

/** Inserts an event ticket class with the given ID and properties. */
export const insertEventticketclass: API.OperationMethod<
  InsertEventticketclassRequest,
  InsertEventticketclassResponse,
  InsertEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertEventticketclassRequest,
  output: InsertEventticketclassResponse,
  errors: [],
}));

export interface ListEventticketclassRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListEventticketclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/eventTicketClass" }),
    svc,
  ) as unknown as Schema.Schema<ListEventticketclassRequest>;

export type ListEventticketclassResponse = EventTicketClassListResponse;
export const ListEventticketclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketClassListResponse;

export type ListEventticketclassError = DefaultErrors;

/** Returns a list of all event ticket classes for a given issuer ID. */
export const listEventticketclass: API.OperationMethod<
  ListEventticketclassRequest,
  ListEventticketclassResponse,
  ListEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEventticketclassRequest,
  output: ListEventticketclassResponse,
  errors: [],
}));

export interface GetFlightobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetFlightobjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/flightObject/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetFlightobjectRequest>;

export type GetFlightobjectResponse = FlightObject;
export const GetFlightobjectResponse = /*@__PURE__*/ /*#__PURE__*/ FlightObject;

export type GetFlightobjectError = DefaultErrors;

/** Returns the flight object with the given object ID. */
export const getFlightobject: API.OperationMethod<
  GetFlightobjectRequest,
  GetFlightobjectResponse,
  GetFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFlightobjectRequest,
  output: GetFlightobjectResponse,
  errors: [],
}));

export interface PatchFlightobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: FlightObject;
}

export const PatchFlightobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(FlightObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/flightObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFlightobjectRequest>;

export type PatchFlightobjectResponse = FlightObject;
export const PatchFlightobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightObject;

export type PatchFlightobjectError = DefaultErrors;

/** Updates the flight object referenced by the given object ID. This method supports patch semantics. */
export const patchFlightobject: API.OperationMethod<
  PatchFlightobjectRequest,
  PatchFlightobjectResponse,
  PatchFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFlightobjectRequest,
  output: PatchFlightobjectResponse,
  errors: [],
}));

export interface AddmessageFlightobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageFlightobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/flightObject/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageFlightobjectRequest>;

export type AddmessageFlightobjectResponse = FlightObjectAddMessageResponse;
export const AddmessageFlightobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightObjectAddMessageResponse;

export type AddmessageFlightobjectError = DefaultErrors;

/** Adds a message to the flight object referenced by the given object ID. */
export const addmessageFlightobject: API.OperationMethod<
  AddmessageFlightobjectRequest,
  AddmessageFlightobjectResponse,
  AddmessageFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageFlightobjectRequest,
  output: AddmessageFlightobjectResponse,
  errors: [],
}));

export interface UpdateFlightobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: FlightObject;
}

export const UpdateFlightobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(FlightObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/flightObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFlightobjectRequest>;

export type UpdateFlightobjectResponse = FlightObject;
export const UpdateFlightobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightObject;

export type UpdateFlightobjectError = DefaultErrors;

/** Updates the flight object referenced by the given object ID. */
export const updateFlightobject: API.OperationMethod<
  UpdateFlightobjectRequest,
  UpdateFlightobjectResponse,
  UpdateFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFlightobjectRequest,
  output: UpdateFlightobjectResponse,
  errors: [],
}));

export interface ListFlightobjectRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** The ID of the class whose objects will be listed. */
  classId?: string;
}

export const ListFlightobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/flightObject" }),
    svc,
  ) as unknown as Schema.Schema<ListFlightobjectRequest>;

export type ListFlightobjectResponse = FlightObjectListResponse;
export const ListFlightobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightObjectListResponse;

export type ListFlightobjectError = DefaultErrors;

/** Returns a list of all flight objects for a given issuer ID. */
export const listFlightobject: API.OperationMethod<
  ListFlightobjectRequest,
  ListFlightobjectResponse,
  ListFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListFlightobjectRequest,
  output: ListFlightobjectResponse,
  errors: [],
}));

export interface InsertFlightobjectRequest {
  /** Request body */
  body?: FlightObject;
}

export const InsertFlightobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(FlightObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/flightObject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertFlightobjectRequest>;

export type InsertFlightobjectResponse = FlightObject;
export const InsertFlightobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightObject;

export type InsertFlightobjectError = DefaultErrors;

/** Inserts an flight object with the given ID and properties. */
export const insertFlightobject: API.OperationMethod<
  InsertFlightobjectRequest,
  InsertFlightobjectResponse,
  InsertFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFlightobjectRequest,
  output: InsertFlightobjectResponse,
  errors: [],
}));

export interface InsertGiftcardclassRequest {
  /** Request body */
  body?: GiftCardClass;
}

export const InsertGiftcardclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GiftCardClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/giftCardClass",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertGiftcardclassRequest>;

export type InsertGiftcardclassResponse = GiftCardClass;
export const InsertGiftcardclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardClass;

export type InsertGiftcardclassError = DefaultErrors;

/** Inserts an gift card class with the given ID and properties. */
export const insertGiftcardclass: API.OperationMethod<
  InsertGiftcardclassRequest,
  InsertGiftcardclassResponse,
  InsertGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGiftcardclassRequest,
  output: InsertGiftcardclassResponse,
  errors: [],
}));

export interface ListGiftcardclassRequest {
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
}

export const ListGiftcardclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/giftCardClass" }),
    svc,
  ) as unknown as Schema.Schema<ListGiftcardclassRequest>;

export type ListGiftcardclassResponse = GiftCardClassListResponse;
export const ListGiftcardclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardClassListResponse;

export type ListGiftcardclassError = DefaultErrors;

/** Returns a list of all gift card classes for a given issuer ID. */
export const listGiftcardclass: API.OperationMethod<
  ListGiftcardclassRequest,
  ListGiftcardclassResponse,
  ListGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGiftcardclassRequest,
  output: ListGiftcardclassResponse,
  errors: [],
}));

export interface UpdateGiftcardclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: GiftCardClass;
}

export const UpdateGiftcardclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GiftCardClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/giftCardClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateGiftcardclassRequest>;

export type UpdateGiftcardclassResponse = GiftCardClass;
export const UpdateGiftcardclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardClass;

export type UpdateGiftcardclassError = DefaultErrors;

/** Updates the gift card class referenced by the given class ID. */
export const updateGiftcardclass: API.OperationMethod<
  UpdateGiftcardclassRequest,
  UpdateGiftcardclassResponse,
  UpdateGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGiftcardclassRequest,
  output: UpdateGiftcardclassResponse,
  errors: [],
}));

export interface AddmessageGiftcardclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageGiftcardclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/giftCardClass/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageGiftcardclassRequest>;

export type AddmessageGiftcardclassResponse = GiftCardClassAddMessageResponse;
export const AddmessageGiftcardclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardClassAddMessageResponse;

export type AddmessageGiftcardclassError = DefaultErrors;

/** Adds a message to the gift card class referenced by the given class ID. */
export const addmessageGiftcardclass: API.OperationMethod<
  AddmessageGiftcardclassRequest,
  AddmessageGiftcardclassResponse,
  AddmessageGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGiftcardclassRequest,
  output: AddmessageGiftcardclassResponse,
  errors: [],
}));

export interface GetGiftcardclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetGiftcardclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "walletobjects/v1/giftCardClass/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetGiftcardclassRequest>;

export type GetGiftcardclassResponse = GiftCardClass;
export const GetGiftcardclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardClass;

export type GetGiftcardclassError = DefaultErrors;

/** Returns the gift card class with the given class ID. */
export const getGiftcardclass: API.OperationMethod<
  GetGiftcardclassRequest,
  GetGiftcardclassResponse,
  GetGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGiftcardclassRequest,
  output: GetGiftcardclassResponse,
  errors: [],
}));

export interface PatchGiftcardclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: GiftCardClass;
}

export const PatchGiftcardclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GiftCardClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/giftCardClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchGiftcardclassRequest>;

export type PatchGiftcardclassResponse = GiftCardClass;
export const PatchGiftcardclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardClass;

export type PatchGiftcardclassError = DefaultErrors;

/** Updates the gift card class referenced by the given class ID. This method supports patch semantics. */
export const patchGiftcardclass: API.OperationMethod<
  PatchGiftcardclassRequest,
  PatchGiftcardclassResponse,
  PatchGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGiftcardclassRequest,
  output: PatchGiftcardclassResponse,
  errors: [],
}));

export interface InsertGenericobjectRequest {
  /** Request body */
  body?: GenericObject;
}

export const InsertGenericobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GenericObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/genericObject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertGenericobjectRequest>;

export type InsertGenericobjectResponse = GenericObject;
export const InsertGenericobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericObject;

export type InsertGenericobjectError = DefaultErrors;

/** Inserts a generic object with the given ID and properties. */
export const insertGenericobject: API.OperationMethod<
  InsertGenericobjectRequest,
  InsertGenericobjectResponse,
  InsertGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGenericobjectRequest,
  output: InsertGenericobjectResponse,
  errors: [],
}));

export interface ListGenericobjectRequest {
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
}

export const ListGenericobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/genericObject" }),
    svc,
  ) as unknown as Schema.Schema<ListGenericobjectRequest>;

export type ListGenericobjectResponse = GenericObjectListResponse;
export const ListGenericobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericObjectListResponse;

export type ListGenericobjectError = DefaultErrors;

/** Returns a list of all generic objects for a given issuer ID. */
export const listGenericobject: API.OperationMethod<
  ListGenericobjectRequest,
  ListGenericobjectResponse,
  ListGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGenericobjectRequest,
  output: ListGenericobjectResponse,
  errors: [],
}));

export interface UpdateGenericobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  resourceId: string;
  /** Request body */
  body?: GenericObject;
}

export const UpdateGenericobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GenericObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/genericObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateGenericobjectRequest>;

export type UpdateGenericobjectResponse = GenericObject;
export const UpdateGenericobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericObject;

export type UpdateGenericobjectError = DefaultErrors;

/** Updates the generic object referenced by the given object ID. */
export const updateGenericobject: API.OperationMethod<
  UpdateGenericobjectRequest,
  UpdateGenericobjectResponse,
  UpdateGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGenericobjectRequest,
  output: UpdateGenericobjectResponse,
  errors: [],
}));

export interface GetGenericobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  resourceId: string;
}

export const GetGenericobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "walletobjects/v1/genericObject/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetGenericobjectRequest>;

export type GetGenericobjectResponse = GenericObject;
export const GetGenericobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericObject;

export type GetGenericobjectError = DefaultErrors;

/** Returns the generic object with the given object ID. */
export const getGenericobject: API.OperationMethod<
  GetGenericobjectRequest,
  GetGenericobjectResponse,
  GetGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGenericobjectRequest,
  output: GetGenericobjectResponse,
  errors: [],
}));

export interface PatchGenericobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  resourceId: string;
  /** Request body */
  body?: GenericObject;
}

export const PatchGenericobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(GenericObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/genericObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchGenericobjectRequest>;

export type PatchGenericobjectResponse = GenericObject;
export const PatchGenericobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericObject;

export type PatchGenericobjectError = DefaultErrors;

/** Updates the generic object referenced by the given object ID. This method supports patch semantics. */
export const patchGenericobject: API.OperationMethod<
  PatchGenericobjectRequest,
  PatchGenericobjectResponse,
  PatchGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGenericobjectRequest,
  output: PatchGenericobjectResponse,
  errors: [],
}));

export interface AddmessageGenericobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageGenericobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/genericObject/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageGenericobjectRequest>;

export type AddmessageGenericobjectResponse = GenericObjectAddMessageResponse;
export const AddmessageGenericobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericObjectAddMessageResponse;

export type AddmessageGenericobjectError = DefaultErrors;

/** Adds a message to the generic object referenced by the given object ID. */
export const addmessageGenericobject: API.OperationMethod<
  AddmessageGenericobjectRequest,
  AddmessageGenericobjectResponse,
  AddmessageGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGenericobjectRequest,
  output: AddmessageGenericobjectResponse,
  errors: [],
}));

export interface UploadMediaRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: TransitObjectUploadRotatingBarcodeValuesRequest;
}

export const UploadMediaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  body: Schema.optional(TransitObjectUploadRotatingBarcodeValuesRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UploadMediaRequest>;

export type UploadMediaResponse =
  TransitObjectUploadRotatingBarcodeValuesResponse;
export const UploadMediaResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObjectUploadRotatingBarcodeValuesResponse;

export type UploadMediaError = DefaultErrors;

/** Uploads rotating barcode values for the transit object referenced by the given object ID. Note the max upload size is specified in google3/production/config/cdd/apps-upload/customers/payments-consumer-passes/config.gcl and enforced by Scotty. */
export const uploadMedia: API.OperationMethod<
  UploadMediaRequest,
  UploadMediaResponse,
  UploadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadMediaRequest,
  output: UploadMediaResponse,
  errors: [],
}));

export interface DownloadMediaRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const DownloadMediaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "walletobjects/v1/transitObject/{resourceId}/downloadRotatingBarcodeValues",
  }),
  svc,
) as unknown as Schema.Schema<DownloadMediaRequest>;

export type DownloadMediaResponse = Media;
export const DownloadMediaResponse = /*@__PURE__*/ /*#__PURE__*/ Media;

export type DownloadMediaError = DefaultErrors;

/** Downloads rotating barcode values for the transit object referenced by the given object ID. */
export const downloadMedia: API.OperationMethod<
  DownloadMediaRequest,
  DownloadMediaResponse,
  DownloadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadMediaRequest,
  output: DownloadMediaResponse,
  errors: [],
}));

export interface InsertFlightclassRequest {
  /** Request body */
  body?: FlightClass;
}

export const InsertFlightclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(FlightClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/flightClass",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertFlightclassRequest>;

export type InsertFlightclassResponse = FlightClass;
export const InsertFlightclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightClass;

export type InsertFlightclassError = DefaultErrors;

/** Inserts an flight class with the given ID and properties. */
export const insertFlightclass: API.OperationMethod<
  InsertFlightclassRequest,
  InsertFlightclassResponse,
  InsertFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFlightclassRequest,
  output: InsertFlightclassResponse,
  errors: [],
}));

export interface ListFlightclassRequest {
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
}

export const ListFlightclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/flightClass" }),
  svc,
) as unknown as Schema.Schema<ListFlightclassRequest>;

export type ListFlightclassResponse = FlightClassListResponse;
export const ListFlightclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightClassListResponse;

export type ListFlightclassError = DefaultErrors;

/** Returns a list of all flight classes for a given issuer ID. */
export const listFlightclass: API.OperationMethod<
  ListFlightclassRequest,
  ListFlightclassResponse,
  ListFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListFlightclassRequest,
  output: ListFlightclassResponse,
  errors: [],
}));

export interface UpdateFlightclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: FlightClass;
}

export const UpdateFlightclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(FlightClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/flightClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFlightclassRequest>;

export type UpdateFlightclassResponse = FlightClass;
export const UpdateFlightclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightClass;

export type UpdateFlightclassError = DefaultErrors;

/** Updates the flight class referenced by the given class ID. */
export const updateFlightclass: API.OperationMethod<
  UpdateFlightclassRequest,
  UpdateFlightclassResponse,
  UpdateFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFlightclassRequest,
  output: UpdateFlightclassResponse,
  errors: [],
}));

export interface GetFlightclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetFlightclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
}).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/flightClass/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetFlightclassRequest>;

export type GetFlightclassResponse = FlightClass;
export const GetFlightclassResponse = /*@__PURE__*/ /*#__PURE__*/ FlightClass;

export type GetFlightclassError = DefaultErrors;

/** Returns the flight class with the given class ID. */
export const getFlightclass: API.OperationMethod<
  GetFlightclassRequest,
  GetFlightclassResponse,
  GetFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFlightclassRequest,
  output: GetFlightclassResponse,
  errors: [],
}));

export interface PatchFlightclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: FlightClass;
}

export const PatchFlightclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(FlightClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/flightClass/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFlightclassRequest>;

export type PatchFlightclassResponse = FlightClass;
export const PatchFlightclassResponse = /*@__PURE__*/ /*#__PURE__*/ FlightClass;

export type PatchFlightclassError = DefaultErrors;

/** Updates the flight class referenced by the given class ID. This method supports patch semantics. */
export const patchFlightclass: API.OperationMethod<
  PatchFlightclassRequest,
  PatchFlightclassResponse,
  PatchFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFlightclassRequest,
  output: PatchFlightclassResponse,
  errors: [],
}));

export interface AddmessageFlightclassRequest {
  /** The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageFlightclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/flightClass/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageFlightclassRequest>;

export type AddmessageFlightclassResponse = FlightClassAddMessageResponse;
export const AddmessageFlightclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightClassAddMessageResponse;

export type AddmessageFlightclassError = DefaultErrors;

/** Adds a message to the flight class referenced by the given class ID. */
export const addmessageFlightclass: API.OperationMethod<
  AddmessageFlightclassRequest,
  AddmessageFlightclassResponse,
  AddmessageFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageFlightclassRequest,
  output: AddmessageFlightclassResponse,
  errors: [],
}));

export interface InsertTransitobjectRequest {
  /** Request body */
  body?: TransitObject;
}

export const InsertTransitobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(TransitObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/transitObject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertTransitobjectRequest>;

export type InsertTransitobjectResponse = TransitObject;
export const InsertTransitobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObject;

export type InsertTransitobjectError = DefaultErrors;

/** Inserts an transit object with the given ID and properties. */
export const insertTransitobject: API.OperationMethod<
  InsertTransitobjectRequest,
  InsertTransitobjectResponse,
  InsertTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTransitobjectRequest,
  output: InsertTransitobjectResponse,
  errors: [],
}));

export interface ListTransitobjectRequest {
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
}

export const ListTransitobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/transitObject" }),
    svc,
  ) as unknown as Schema.Schema<ListTransitobjectRequest>;

export type ListTransitobjectResponse = TransitObjectListResponse;
export const ListTransitobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObjectListResponse;

export type ListTransitobjectError = DefaultErrors;

/** Returns a list of all transit objects for a given issuer ID. */
export const listTransitobject: API.OperationMethod<
  ListTransitobjectRequest,
  ListTransitobjectResponse,
  ListTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTransitobjectRequest,
  output: ListTransitobjectResponse,
  errors: [],
}));

export interface UpdateTransitobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: TransitObject;
}

export const UpdateTransitobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(TransitObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/transitObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateTransitobjectRequest>;

export type UpdateTransitobjectResponse = TransitObject;
export const UpdateTransitobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObject;

export type UpdateTransitobjectError = DefaultErrors;

/** Updates the transit object referenced by the given object ID. */
export const updateTransitobject: API.OperationMethod<
  UpdateTransitobjectRequest,
  UpdateTransitobjectResponse,
  UpdateTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTransitobjectRequest,
  output: UpdateTransitobjectResponse,
  errors: [],
}));

export interface GetTransitobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
}

export const GetTransitobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "walletobjects/v1/transitObject/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTransitobjectRequest>;

export type GetTransitobjectResponse = TransitObject;
export const GetTransitobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObject;

export type GetTransitobjectError = DefaultErrors;

/** Returns the transit object with the given object ID. */
export const getTransitobject: API.OperationMethod<
  GetTransitobjectRequest,
  GetTransitobjectResponse,
  GetTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTransitobjectRequest,
  output: GetTransitobjectResponse,
  errors: [],
}));

export interface PatchTransitobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: TransitObject;
}

export const PatchTransitobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(TransitObject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "walletobjects/v1/transitObject/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchTransitobjectRequest>;

export type PatchTransitobjectResponse = TransitObject;
export const PatchTransitobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObject;

export type PatchTransitobjectError = DefaultErrors;

/** Updates the transit object referenced by the given object ID. This method supports patch semantics. */
export const patchTransitobject: API.OperationMethod<
  PatchTransitobjectRequest,
  PatchTransitobjectResponse,
  PatchTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchTransitobjectRequest,
  output: PatchTransitobjectResponse,
  errors: [],
}));

export interface AddmessageTransitobjectRequest {
  /** The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  resourceId: string;
  /** Request body */
  body?: AddMessageRequest;
}

export const AddmessageTransitobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(AddMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/transitObject/{resourceId}/addMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddmessageTransitobjectRequest>;

export type AddmessageTransitobjectResponse = TransitObjectAddMessageResponse;
export const AddmessageTransitobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObjectAddMessageResponse;

export type AddmessageTransitobjectError = DefaultErrors;

/** Adds a message to the transit object referenced by the given object ID. */
export const addmessageTransitobject: API.OperationMethod<
  AddmessageTransitobjectRequest,
  AddmessageTransitobjectResponse,
  AddmessageTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageTransitobjectRequest,
  output: AddmessageTransitobjectResponse,
  errors: [],
}));

export interface SetPassUpdateNoticeWalletobjectsV1PrivateContentRequest {
  /** Request body */
  body?: SetPassUpdateNoticeRequest;
}

export const SetPassUpdateNoticeWalletobjectsV1PrivateContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SetPassUpdateNoticeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "walletobjects/v1/privateContent/setPassUpdateNotice",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetPassUpdateNoticeWalletobjectsV1PrivateContentRequest>;

export type SetPassUpdateNoticeWalletobjectsV1PrivateContentResponse =
  SetPassUpdateNoticeResponse;
export const SetPassUpdateNoticeWalletobjectsV1PrivateContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ SetPassUpdateNoticeResponse;

export type SetPassUpdateNoticeWalletobjectsV1PrivateContentError =
  DefaultErrors;

/** Provide Google with information about awaiting private pass update. This will allow Google to provide the update notification to the device that currently holds this pass. */
export const setPassUpdateNoticeWalletobjectsV1PrivateContent: API.OperationMethod<
  SetPassUpdateNoticeWalletobjectsV1PrivateContentRequest,
  SetPassUpdateNoticeWalletobjectsV1PrivateContentResponse,
  SetPassUpdateNoticeWalletobjectsV1PrivateContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetPassUpdateNoticeWalletobjectsV1PrivateContentRequest,
  output: SetPassUpdateNoticeWalletobjectsV1PrivateContentResponse,
  errors: [],
}));

export interface UpdateIssuerRequest {
  /** The unique identifier for an issuer. */
  resourceId: string;
  /** Request body */
  body?: Issuer;
}

export const UpdateIssuerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  body: Schema.optional(Issuer).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "walletobjects/v1/issuer/{resourceId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateIssuerRequest>;

export type UpdateIssuerResponse = Issuer;
export const UpdateIssuerResponse = /*@__PURE__*/ /*#__PURE__*/ Issuer;

export type UpdateIssuerError = DefaultErrors;

/** Updates the issuer referenced by the given issuer ID. */
export const updateIssuer: API.OperationMethod<
  UpdateIssuerRequest,
  UpdateIssuerResponse,
  UpdateIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateIssuerRequest,
  output: UpdateIssuerResponse,
  errors: [],
}));

export interface GetIssuerRequest {
  /** The unique identifier for an issuer. */
  resourceId: string;
}

export const GetIssuerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
}).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/issuer/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetIssuerRequest>;

export type GetIssuerResponse = Issuer;
export const GetIssuerResponse = /*@__PURE__*/ /*#__PURE__*/ Issuer;

export type GetIssuerError = DefaultErrors;

/** Returns the issuer with the given issuer ID. */
export const getIssuer: API.OperationMethod<
  GetIssuerRequest,
  GetIssuerResponse,
  GetIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIssuerRequest,
  output: GetIssuerResponse,
  errors: [],
}));

export interface PatchIssuerRequest {
  /** The unique identifier for an issuer. */
  resourceId: string;
  /** Request body */
  body?: Issuer;
}

export const PatchIssuerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  body: Schema.optional(Issuer).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "walletobjects/v1/issuer/{resourceId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchIssuerRequest>;

export type PatchIssuerResponse = Issuer;
export const PatchIssuerResponse = /*@__PURE__*/ /*#__PURE__*/ Issuer;

export type PatchIssuerError = DefaultErrors;

/** Updates the issuer referenced by the given issuer ID. This method supports patch semantics. */
export const patchIssuer: API.OperationMethod<
  PatchIssuerRequest,
  PatchIssuerResponse,
  PatchIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchIssuerRequest,
  output: PatchIssuerResponse,
  errors: [],
}));

export interface InsertIssuerRequest {
  /** Request body */
  body?: Issuer;
}

export const InsertIssuerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Issuer).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "walletobjects/v1/issuer", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertIssuerRequest>;

export type InsertIssuerResponse = Issuer;
export const InsertIssuerResponse = /*@__PURE__*/ /*#__PURE__*/ Issuer;

export type InsertIssuerError = DefaultErrors;

/** Inserts an issuer with the given ID and properties. */
export const insertIssuer: API.OperationMethod<
  InsertIssuerRequest,
  InsertIssuerResponse,
  InsertIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertIssuerRequest,
  output: InsertIssuerResponse,
  errors: [],
}));

export interface ListIssuerRequest {}

export const ListIssuerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/issuer" }),
  svc,
) as unknown as Schema.Schema<ListIssuerRequest>;

export type ListIssuerResponse = IssuerListResponse;
export const ListIssuerResponse =
  /*@__PURE__*/ /*#__PURE__*/ IssuerListResponse;

export type ListIssuerError = DefaultErrors;

/** Returns a list of all issuers shared to the caller. */
export const listIssuer: API.OperationMethod<
  ListIssuerRequest,
  ListIssuerResponse,
  ListIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListIssuerRequest,
  output: ListIssuerResponse,
  errors: [],
}));

export interface GetPermissionsRequest {
  /** The unique identifier for an issuer. This ID must be unique across all issuers. */
  resourceId: string;
}

export const GetPermissionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
}).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/permissions/{resourceId}" }),
  svc,
) as unknown as Schema.Schema<GetPermissionsRequest>;

export type GetPermissionsResponse = Permissions;
export const GetPermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permissions;

export type GetPermissionsError = DefaultErrors;

/** Returns the permissions for the given issuer id. */
export const getPermissions: API.OperationMethod<
  GetPermissionsRequest,
  GetPermissionsResponse,
  GetPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPermissionsRequest,
  output: GetPermissionsResponse,
  errors: [],
}));

export interface UpdatePermissionsRequest {
  /** The unique identifier for an issuer. This ID must be unique across all issuers. */
  resourceId: string;
  /** Request body */
  body?: Permissions;
}

export const UpdatePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(Permissions).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "walletobjects/v1/permissions/{resourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePermissionsRequest>;

export type UpdatePermissionsResponse = Permissions;
export const UpdatePermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Permissions;

export type UpdatePermissionsError = DefaultErrors;

/** Updates the permissions for the given issuer. */
export const updatePermissions: API.OperationMethod<
  UpdatePermissionsRequest,
  UpdatePermissionsResponse,
  UpdatePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePermissionsRequest,
  output: UpdatePermissionsResponse,
  errors: [],
}));
