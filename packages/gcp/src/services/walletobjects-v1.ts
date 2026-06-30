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

export interface UpcomingNotification {
  /** Indicates if the object needs to have upcoming notification enabled. */
  enableNotification?: boolean;
}

export const UpcomingNotification: Schema.Schema<UpcomingNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableNotification: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UpcomingNotification" });

export interface TranslatedString {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#translatedString"`. */
  kind?: string;
  /** Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
  language?: string;
  /** The UTF-8 encoded translated string. */
  value?: string;
}

export const TranslatedString: Schema.Schema<TranslatedString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "TranslatedString" });

export interface LocalizedString {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#localizedString"`. */
  kind?: string;
  /** Contains the translations for the string. */
  translatedValues?: ReadonlyArray<TranslatedString>;
  /** Contains the string to be displayed if no appropriate translation is available. */
  defaultValue?: TranslatedString;
}

export const LocalizedString: Schema.Schema<LocalizedString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    translatedValues: Schema.optional(Schema.Array(TranslatedString)),
    defaultValue: Schema.optional(TranslatedString),
  }).annotate({ identifier: "LocalizedString" });

export interface LabelValue {
  /** Translated strings for the label. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  localizedLabel?: LocalizedString;
  /** Translated strings for the value. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  localizedValue?: LocalizedString;
  /** The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  value?: string;
  /** The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
  label?: string;
}

export const LabelValue: Schema.Schema<LabelValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizedLabel: Schema.optional(LocalizedString),
    localizedValue: Schema.optional(LocalizedString),
    value: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "LabelValue" });

export interface LabelValueRow {
  /** A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name. */
  columns?: ReadonlyArray<LabelValue>;
}

export const LabelValueRow: Schema.Schema<LabelValueRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columns: Schema.optional(Schema.Array(LabelValue)),
  }).annotate({ identifier: "LabelValueRow" });

export interface InfoModuleData {
  /** A list of collections of labels and values. These will be displayed one after the other in a singular column. */
  labelValueRows?: ReadonlyArray<LabelValueRow>;
  showLastUpdateTime?: boolean;
}

export const InfoModuleData: Schema.Schema<InfoModuleData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelValueRows: Schema.optional(Schema.Array(LabelValueRow)),
    showLastUpdateTime: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InfoModuleData" });

export interface RotatingBarcodeTotpDetailsTotpParameters {
  /** The length of the TOTP value in decimal digits. */
  valueLength?: number;
  /** The secret key used for the TOTP value generation, encoded as a Base16 string. */
  key?: string;
}

export const RotatingBarcodeTotpDetailsTotpParameters: Schema.Schema<RotatingBarcodeTotpDetailsTotpParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueLength: Schema.optional(Schema.Number),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "RotatingBarcodeTotpDetailsTotpParameters" });

export interface RotatingBarcodeTotpDetails {
  /** The TOTP algorithm used to generate the OTP. */
  algorithm?: "TOTP_ALGORITHM_UNSPECIFIED" | "TOTP_SHA1" | (string & {});
  /** The time interval used for the TOTP value generation, in milliseconds. */
  periodMillis?: string;
  /** The TOTP parameters for each of the {totp_value_*} substitutions. The TotpParameters at index n is used for the {totp_value_n} substitution. */
  parameters?: ReadonlyArray<RotatingBarcodeTotpDetailsTotpParameters>;
}

export const RotatingBarcodeTotpDetails: Schema.Schema<RotatingBarcodeTotpDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    algorithm: Schema.optional(Schema.String),
    periodMillis: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(RotatingBarcodeTotpDetailsTotpParameters),
    ),
  }).annotate({ identifier: "RotatingBarcodeTotpDetails" });

export interface SetPassUpdateNoticeRequest {
  /** Required. A fully qualified identifier of the pass that the issuer wants to notify the pass holder(s) about. Formatted as . */
  externalPassId?: string;
  /** Required. The JWT signature of the updated pass that the issuer wants to notify Google about. Only devices that report a different JWT signature than this JWT signature will receive the update notification. */
  updatedPassJwtSignature?: string;
  /** Required. The issuer endpoint URI the pass holder needs to follow in order to receive an updated pass JWT. It can not contain any sensitive information. The endpoint needs to authenticate the user before giving the user the updated JWT. Example update URI https://someissuer.com/update/passId=someExternalPassId */
  updateUri?: string;
}

export const SetPassUpdateNoticeRequest: Schema.Schema<SetPassUpdateNoticeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalPassId: Schema.optional(Schema.String),
    updatedPassJwtSignature: Schema.optional(Schema.String),
    updateUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetPassUpdateNoticeRequest" });

export interface ModifyLinkedOfferObjects {
  /** The linked offer object ids to add to the object. */
  addLinkedOfferObjectIds?: ReadonlyArray<string>;
  /** The linked offer object ids to remove from the object. */
  removeLinkedOfferObjectIds?: ReadonlyArray<string>;
}

export const ModifyLinkedOfferObjects: Schema.Schema<ModifyLinkedOfferObjects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addLinkedOfferObjectIds: Schema.optional(Schema.Array(Schema.String)),
    removeLinkedOfferObjectIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ModifyLinkedOfferObjects" });

export interface ModifyLinkedOfferObjectsRequest {
  /** The linked offer object ids to add or remove from the object. */
  linkedOfferObjectIds?: ModifyLinkedOfferObjects;
}

export const ModifyLinkedOfferObjectsRequest: Schema.Schema<ModifyLinkedOfferObjectsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkedOfferObjectIds: Schema.optional(ModifyLinkedOfferObjects),
  }).annotate({ identifier: "ModifyLinkedOfferObjectsRequest" });

export interface SignUpInfo {
  /** ID of the class the user can sign up for. */
  classId?: string;
}

export const SignUpInfo: Schema.Schema<SignUpInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignUpInfo" });

export interface IssuerToUserInfo {
  signUpInfo?: SignUpInfo;
  action?:
    | "ACTION_UNSPECIFIED"
    | "S2AP"
    | "s2ap"
    | "SIGN_UP"
    | "signUp"
    | (string & {});
  /** Currently not used, consider deprecating. */
  url?: string;
  /** JSON web token for action S2AP. */
  value?: string;
}

export const IssuerToUserInfo: Schema.Schema<IssuerToUserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signUpInfo: Schema.optional(SignUpInfo),
    action: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "IssuerToUserInfo" });

export interface SmartTap {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#smartTap"`. */
  kind?: string;
  /** Communication from merchant to user. */
  infos?: ReadonlyArray<IssuerToUserInfo>;
  /** The unique identifier for a smart tap. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is the Smart Tap id. The Smart Tap id is a Base64 encoded string which represents the id which was generated by the Google Pay app. */
  id?: string;
  /** Smart Tap merchant ID of who engaged in the Smart Tap interaction. */
  merchantId?: string;
}

export const SmartTap: Schema.Schema<SmartTap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    infos: Schema.optional(Schema.Array(IssuerToUserInfo)),
    id: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SmartTap" });

export interface ImageUri {
  /** Translated strings for the description, which are unused and retained only for backward compatibility. */
  localizedDescription?: LocalizedString;
  /** Additional information about the image, which is unused and retained only for backward compatibility. */
  description?: string;
  /** The location of the image. URIs must have a scheme. */
  uri?: string;
}

export const ImageUri: Schema.Schema<ImageUri> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizedDescription: Schema.optional(LocalizedString),
    description: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageUri" });

export interface Image {
  /** An ID for an already uploaded private image. Either this or source_uri should be set. Requests setting both or neither will be rejected. Please contact support to use private images. */
  privateImageId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#image"`. */
  kind?: string;
  /** A URI for the image. Either this or private_image_id should be set. Requests setting both or neither will be rejected. */
  sourceUri?: ImageUri;
  /** Description of the image used for accessibility. */
  contentDescription?: LocalizedString;
}

export const Image: Schema.Schema<Image> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateImageId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sourceUri: Schema.optional(ImageUri),
    contentDescription: Schema.optional(LocalizedString),
  }).annotate({ identifier: "Image" });

export interface ImageModuleData {
  /** A 100% width image. */
  mainImage?: Image;
  /** The ID associated with an image module. This field is here to enable ease of management of image modules. */
  id?: string;
}

export const ImageModuleData: Schema.Schema<ImageModuleData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainImage: Schema.optional(Image),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageModuleData" });

export interface RotatingBarcodeValues {
  /** Required. The amount of time each barcode is valid for. */
  periodMillis?: string;
  /** Required. The date/time the first barcode is valid from. Barcodes will be rotated through using period_millis defined on the object's RotatingBarcodeValueInfo. This is an ISO 8601 extended format date/time, with an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. */
  startDateTime?: string;
  /** Required. The values to encode in the barcode. At least one value is required. */
  values?: ReadonlyArray<string>;
}

export const RotatingBarcodeValues: Schema.Schema<RotatingBarcodeValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    periodMillis: Schema.optional(Schema.String),
    startDateTime: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RotatingBarcodeValues" });

export interface RotatingBarcode {
  /** String encoded barcode value. This string supports the following substitutions: * {totp_value_n}: Replaced with the TOTP value (see TotpDetails.parameters). * {totp_timestamp_millis}: Replaced with the timestamp (millis since epoch) at which the barcode was generated. * {totp_timestamp_seconds}: Replaced with the timestamp (seconds since epoch) at which the barcode was generated. */
  valuePattern?: string;
  /** Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google. */
  showCodeText?: LocalizedString;
  /** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
  renderEncoding?: "RENDER_ENCODING_UNSPECIFIED" | "UTF_8" | (string & {});
  /** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
  alternateText?: string;
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
  /** Details used to evaluate the {totp_value_n} substitutions. */
  totpDetails?: RotatingBarcodeTotpDetails;
  /** Input only. NOTE: This feature is only available for the transit vertical. Optional set of initial rotating barcode values. This allows a small subset of barcodes to be included with the object. Further rotating barcode values must be uploaded with the UploadRotatingBarcodeValues endpoint. */
  initialRotatingBarcodeValues?: RotatingBarcodeValues;
}

export const RotatingBarcode: Schema.Schema<RotatingBarcode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valuePattern: Schema.optional(Schema.String),
    showCodeText: Schema.optional(LocalizedString),
    renderEncoding: Schema.optional(Schema.String),
    alternateText: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    totpDetails: Schema.optional(RotatingBarcodeTotpDetails),
    initialRotatingBarcodeValues: Schema.optional(RotatingBarcodeValues),
  }).annotate({ identifier: "RotatingBarcode" });

export interface MerchantLocation {
  /** The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected. */
  latitude?: number;
  /** The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected. */
  longitude?: number;
}

export const MerchantLocation: Schema.Schema<MerchantLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MerchantLocation" });

export interface Money {
  /** The currency code, such as "USD" or "EUR." */
  currencyCode?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#money"`. */
  kind?: string;
  /** The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros. */
  micros?: string;
}

export const Money: Schema.Schema<Money> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    micros: Schema.optional(Schema.String),
  }).annotate({ identifier: "Money" });

export interface DateTime {
  /** An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field's documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user's time zone. For example, a time of `2018-06-19T18:30:00-04:00` will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user's current time zone. For example, a time of `2018-06-19T18:30:00` will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones. */
  date?: string;
}

export const DateTime: Schema.Schema<DateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Schema.String),
  }).annotate({ identifier: "DateTime" });

export interface CallbackOptions {
  /** The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Googlebot. */
  url?: string;
  /** URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Googlebot. Deprecated. */
  updateRequestUrl?: string;
}

export const CallbackOptions: Schema.Schema<CallbackOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    updateRequestUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "CallbackOptions" });

export interface Review {
  comments?: string;
}

export const Review: Schema.Schema<Review> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comments: Schema.optional(Schema.String),
  }).annotate({ identifier: "Review" });

export interface FieldReference {
  /** Path to the field being referenced, prefixed with "object" or "class" and separated with dots. For example, it may be the string "object.purchaseDetails.purchasePrice". */
  fieldPath?: string;
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
}

export const FieldReference: Schema.Schema<FieldReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldPath: Schema.optional(Schema.String),
    dateFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "FieldReference" });

export interface FieldSelector {
  /** If more than one reference is supplied, then the first one that references a non-empty field will be displayed. */
  fields?: ReadonlyArray<FieldReference>;
}

export const FieldSelector: Schema.Schema<FieldSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.Array(FieldReference)),
  }).annotate({ identifier: "FieldSelector" });

export interface TemplateItem {
  /** A reference to a field to display. If both `firstValue` and `secondValue` are populated, they will both appear as one item with a slash between them. For example, values A and B would be shown as "A / B". */
  firstValue?: FieldSelector;
  /** A reference to a field to display. This may only be populated if the `firstValue` field is populated. */
  secondValue?: FieldSelector;
  /** A predefined item to display. Only one of `firstValue` or `predefinedItem` may be set. */
  predefinedItem?:
    | "PREDEFINED_ITEM_UNSPECIFIED"
    | "FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER"
    | "frequentFlyerProgramNameAndNumber"
    | "FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER"
    | "flightNumberAndOperatingFlightNumber"
    | (string & {});
}

export const TemplateItem: Schema.Schema<TemplateItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstValue: Schema.optional(FieldSelector),
    secondValue: Schema.optional(FieldSelector),
    predefinedItem: Schema.optional(Schema.String),
  }).annotate({ identifier: "TemplateItem" });

export interface CardRowTwoItems {
  /** The item to be displayed at the end of the row. This item will be aligned to the right. */
  endItem?: TemplateItem;
  /** The item to be displayed at the start of the row. This item will be aligned to the left. */
  startItem?: TemplateItem;
}

export const CardRowTwoItems: Schema.Schema<CardRowTwoItems> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endItem: Schema.optional(TemplateItem),
    startItem: Schema.optional(TemplateItem),
  }).annotate({ identifier: "CardRowTwoItems" });

export interface CardRowThreeItems {
  /** The item to be displayed in the middle of the row. This item will be centered between the start and end items. */
  middleItem?: TemplateItem;
  /** The item to be displayed at the start of the row. This item will be aligned to the left. */
  startItem?: TemplateItem;
  /** The item to be displayed at the end of the row. This item will be aligned to the right. */
  endItem?: TemplateItem;
}

export const CardRowThreeItems: Schema.Schema<CardRowThreeItems> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    middleItem: Schema.optional(TemplateItem),
    startItem: Schema.optional(TemplateItem),
    endItem: Schema.optional(TemplateItem),
  }).annotate({ identifier: "CardRowThreeItems" });

export interface CardRowOneItem {
  /** The item to be displayed in the row. This item will be automatically centered. */
  item?: TemplateItem;
}

export const CardRowOneItem: Schema.Schema<CardRowOneItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(TemplateItem),
  }).annotate({ identifier: "CardRowOneItem" });

export interface CardRowTemplateInfo {
  /** Template for a row containing two items. Exactly one of "one_item", "two_items", "three_items" must be set. */
  twoItems?: CardRowTwoItems;
  /** Template for a row containing three items. Exactly one of "one_item", "two_items", "three_items" must be set. */
  threeItems?: CardRowThreeItems;
  /** Template for a row containing one item. Exactly one of "one_item", "two_items", "three_items" must be set. */
  oneItem?: CardRowOneItem;
}

export const CardRowTemplateInfo: Schema.Schema<CardRowTemplateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    twoItems: Schema.optional(CardRowTwoItems),
    threeItems: Schema.optional(CardRowThreeItems),
    oneItem: Schema.optional(CardRowOneItem),
  }).annotate({ identifier: "CardRowTemplateInfo" });

export interface CardTemplateOverride {
  /** Template information for rows in the card view. At most three rows are allowed to be specified. */
  cardRowTemplateInfos?: ReadonlyArray<CardRowTemplateInfo>;
}

export const CardTemplateOverride: Schema.Schema<CardTemplateOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardRowTemplateInfos: Schema.optional(Schema.Array(CardRowTemplateInfo)),
  }).annotate({ identifier: "CardTemplateOverride" });

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

export const FirstRowOption: Schema.Schema<FirstRowOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitOption: Schema.optional(Schema.String),
    fieldOption: Schema.optional(FieldSelector),
  }).annotate({ identifier: "FirstRowOption" });

export interface ListTemplateOverride {
  /** An unused/deprecated field. Setting it will have no effect on what the user sees. */
  thirdRowOption?: FieldSelector;
  /** A reference to the field to be displayed in the second row. This option is only displayed if there are not multiple user objects in a group. If there is a group, the second row will always display a field shared by all objects. To set this override, please set secondRowOption to the FieldSelector of you choice. */
  secondRowOption?: FieldSelector;
  /** Specifies from a predefined set of options or from a reference to the field what will be displayed in the first row. To set this override, set the FirstRowOption.fieldOption to the FieldSelector of your choice. */
  firstRowOption?: FirstRowOption;
}

export const ListTemplateOverride: Schema.Schema<ListTemplateOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thirdRowOption: Schema.optional(FieldSelector),
    secondRowOption: Schema.optional(FieldSelector),
    firstRowOption: Schema.optional(FirstRowOption),
  }).annotate({ identifier: "ListTemplateOverride" });

export interface BarcodeSectionDetail {
  /** A reference to an existing text-based or image field to display. */
  fieldSelector?: FieldSelector;
}

export const BarcodeSectionDetail: Schema.Schema<BarcodeSectionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldSelector: Schema.optional(FieldSelector),
  }).annotate({ identifier: "BarcodeSectionDetail" });

export interface CardBarcodeSectionDetails {
  /** Optional second piece of information to display above the barcode. If `firstTopDetail` is defined, this will be displayed to the end side of this detail section. */
  secondTopDetail?: BarcodeSectionDetail;
  /** Optional information to display above the barcode. If `secondTopDetail` is defined, this will be displayed to the start side of this detail section. */
  firstTopDetail?: BarcodeSectionDetail;
  /** Optional information to display below the barcode. */
  firstBottomDetail?: BarcodeSectionDetail;
}

export const CardBarcodeSectionDetails: Schema.Schema<CardBarcodeSectionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secondTopDetail: Schema.optional(BarcodeSectionDetail),
    firstTopDetail: Schema.optional(BarcodeSectionDetail),
    firstBottomDetail: Schema.optional(BarcodeSectionDetail),
  }).annotate({ identifier: "CardBarcodeSectionDetails" });

export interface DetailsItemInfo {
  /** The item to be displayed in the details list. */
  item?: TemplateItem;
}

export const DetailsItemInfo: Schema.Schema<DetailsItemInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(TemplateItem),
  }).annotate({ identifier: "DetailsItemInfo" });

export interface DetailsTemplateOverride {
  /** Information for the "nth" item displayed in the details list. */
  detailsItemInfos?: ReadonlyArray<DetailsItemInfo>;
}

export const DetailsTemplateOverride: Schema.Schema<DetailsTemplateOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detailsItemInfos: Schema.optional(Schema.Array(DetailsItemInfo)),
  }).annotate({ identifier: "DetailsTemplateOverride" });

export interface ClassTemplateInfo {
  /** Override for the card view. */
  cardTemplateOverride?: CardTemplateOverride;
  /** Override for the passes list view. */
  listTemplateOverride?: ListTemplateOverride;
  /** Specifies extra information to be displayed above and below the barcode. */
  cardBarcodeSectionDetails?: CardBarcodeSectionDetails;
  /** Override for the details view (beneath the card view). */
  detailsTemplateOverride?: DetailsTemplateOverride;
}

export const ClassTemplateInfo: Schema.Schema<ClassTemplateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardTemplateOverride: Schema.optional(CardTemplateOverride),
    listTemplateOverride: Schema.optional(ListTemplateOverride),
    cardBarcodeSectionDetails: Schema.optional(CardBarcodeSectionDetails),
    detailsTemplateOverride: Schema.optional(DetailsTemplateOverride),
  }).annotate({ identifier: "ClassTemplateInfo" });

export interface Uri {
  /** The URI's title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when `description` is part of an image. */
  description?: string;
  /** The ID associated with a uri. This field is here to enable ease of management of uris. */
  id?: string;
  /** The location of a web page, image, or other resource. URIs in the `LinksModuleData` module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme. */
  uri?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#uri"`. */
  kind?: string;
  /** Translated strings for the description. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. */
  localizedDescription?: LocalizedString;
}

export const Uri: Schema.Schema<Uri> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    localizedDescription: Schema.optional(LocalizedString),
  }).annotate({ identifier: "Uri" });

export interface AppLinkDataAppLinkInfoAppTarget {
  /** Package name for AppTarget. For example: com.google.android.gm */
  packageName?: string;
  /** URI for AppTarget. The description on the URI must be set. Prefer setting package field instead, if this target is defined for your application. */
  targetUri?: Uri;
}

export const AppLinkDataAppLinkInfoAppTarget: Schema.Schema<AppLinkDataAppLinkInfoAppTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    targetUri: Schema.optional(Uri),
  }).annotate({ identifier: "AppLinkDataAppLinkInfoAppTarget" });

export interface AppLinkDataAppLinkInfo {
  /** Target to follow when opening the app link on clients. It will be used by partners to open their app or webpage. */
  appTarget?: AppLinkDataAppLinkInfoAppTarget;
  /** Deprecated. Image isn't supported in the app link module. */
  appLogoImage?: Image;
  /** Deprecated. Title isn't supported in the app link module. */
  title?: LocalizedString;
  /** Deprecated. Description isn't supported in the app link module. */
  description?: LocalizedString;
}

export const AppLinkDataAppLinkInfo: Schema.Schema<AppLinkDataAppLinkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appTarget: Schema.optional(AppLinkDataAppLinkInfoAppTarget),
    appLogoImage: Schema.optional(Image),
    title: Schema.optional(LocalizedString),
    description: Schema.optional(LocalizedString),
  }).annotate({ identifier: "AppLinkDataAppLinkInfo" });

export interface AppLinkData {
  /** Optional display text for the app link button. Character limit is 30. */
  displayText?: LocalizedString;
  /** Optional information about the partner app link. */
  androidAppLinkInfo?: AppLinkDataAppLinkInfo;
  /** Optional information about the partner web link. */
  webAppLinkInfo?: AppLinkDataAppLinkInfo;
  /** Deprecated. Links to open iOS apps are not supported. */
  iosAppLinkInfo?: AppLinkDataAppLinkInfo;
}

export const AppLinkData: Schema.Schema<AppLinkData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayText: Schema.optional(LocalizedString),
    androidAppLinkInfo: Schema.optional(AppLinkDataAppLinkInfo),
    webAppLinkInfo: Schema.optional(AppLinkDataAppLinkInfo),
    iosAppLinkInfo: Schema.optional(AppLinkDataAppLinkInfo),
  }).annotate({ identifier: "AppLinkData" });

export interface TimeInterval {
  /** End time of the interval. Offset is not required. If an offset is provided and `start` time is set, `start` must also include an offset. */
  end?: DateTime;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#timeInterval"`. */
  kind?: string;
  /** Start time of the interval. Offset is not required. If an offset is provided and `end` time is set, `end` must also include an offset. */
  start?: DateTime;
}

export const TimeInterval: Schema.Schema<TimeInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    end: Schema.optional(DateTime),
    kind: Schema.optional(Schema.String),
    start: Schema.optional(DateTime),
  }).annotate({ identifier: "TimeInterval" });

export interface ModuleViewConstraints {
  /** The period of time that the module will be displayed to users. Can define both a `startTime` and `endTime`. The module is displayed immediately after insertion unless a `startTime` is set. The module is displayed indefinitely if `endTime` is not set. */
  displayInterval?: TimeInterval;
}

export const ModuleViewConstraints: Schema.Schema<ModuleViewConstraints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayInterval: Schema.optional(TimeInterval),
  }).annotate({ identifier: "ModuleViewConstraints" });

export interface ValueAddedModuleData {
  /** The index for sorting the modules. Modules with a lower sort index are shown before modules with a higher sort index. If unspecified, the sort index is assumed to be INT_MAX. For two modules with the same index, the sorting behavior is undefined. */
  sortIndex?: number;
  /** URI that the module leads to on click. This can be a web link or a deep link as mentioned in https://developer.android.com/training/app-links/deep-linking. */
  uri?: string;
  /** Body to be displayed on the module. Character limit is 50 and longer strings will be truncated. */
  body?: LocalizedString;
  /** Constraints that all must be met for the module to be shown. */
  viewConstraints?: ModuleViewConstraints;
  /** Image to be displayed on the module. Recommended image ratio is 1:1. Images will be resized to fit this ratio. */
  image?: Image;
  /** Header to be displayed on the module. Character limit is 60 and longer strings will be truncated. */
  header?: LocalizedString;
}

export const ValueAddedModuleData: Schema.Schema<ValueAddedModuleData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortIndex: Schema.optional(Schema.Number),
    uri: Schema.optional(Schema.String),
    body: Schema.optional(LocalizedString),
    viewConstraints: Schema.optional(ModuleViewConstraints),
    image: Schema.optional(Image),
    header: Schema.optional(LocalizedString),
  }).annotate({ identifier: "ValueAddedModuleData" });

export interface SecurityAnimation {
  /** Type of animation. */
  animationType?:
    | "ANIMATION_UNSPECIFIED"
    | "FOIL_SHIMMER"
    | "foilShimmer"
    | (string & {});
}

export const SecurityAnimation: Schema.Schema<SecurityAnimation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    animationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityAnimation" });

export interface TextModuleData {
  /** The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens. */
  header?: string;
  /** Translated strings for the header. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens. */
  localizedHeader?: LocalizedString;
  /** The ID associated with a text module. This field is here to enable ease of management of text modules and referencing them in template overrides. The ID should only include alphanumeric characters, '_', or '-'. It can not include dots, as dots are used to separate fields within FieldReference.fieldPaths in template overrides. */
  id?: string;
  /** The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens. */
  body?: string;
  /** Translated strings for the body. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens. */
  localizedBody?: LocalizedString;
}

export const TextModuleData: Schema.Schema<TextModuleData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    localizedHeader: Schema.optional(LocalizedString),
    id: Schema.optional(Schema.String),
    body: Schema.optional(Schema.String),
    localizedBody: Schema.optional(LocalizedString),
  }).annotate({ identifier: "TextModuleData" });

export interface LatLongPoint {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#latLongPoint"`. */
  kind?: string;
  /** The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected. */
  longitude?: number;
  /** The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected. */
  latitude?: number;
}

export const LatLongPoint: Schema.Schema<LatLongPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    longitude: Schema.optional(Schema.Number),
    latitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LatLongPoint" });

export interface Message {
  /** The message header. */
  header?: string;
  /** The period of time that the message will be displayed to users. You can define both a `startTime` and `endTime` for each message. A message is displayed immediately after a Wallet Object is inserted unless a `startTime` is set. The message will appear in a list of messages indefinitely if `endTime` is not provided. */
  displayInterval?: TimeInterval;
  /** The message type. */
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TEXT"
    | "text"
    | "EXPIRATION_NOTIFICATION"
    | "expirationNotification"
    | "TEXT_AND_NOTIFY"
    | (string & {});
  /** Translated strings for the message header. */
  localizedHeader?: LocalizedString;
  /** The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#walletObjectMessage"`. */
  kind?: string;
  /** The message body. */
  body?: string;
  /** Translated strings for the message body. */
  localizedBody?: LocalizedString;
}

export const Message: Schema.Schema<Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    displayInterval: Schema.optional(TimeInterval),
    messageType: Schema.optional(Schema.String),
    localizedHeader: Schema.optional(LocalizedString),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    body: Schema.optional(Schema.String),
    localizedBody: Schema.optional(LocalizedString),
  }).annotate({ identifier: "Message" });

export interface LinksModuleData {
  /** The list of URIs. */
  uris?: ReadonlyArray<Uri>;
}

export const LinksModuleData: Schema.Schema<LinksModuleData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Uri)),
  }).annotate({ identifier: "LinksModuleData" });

export interface GiftCardClass {
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
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
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Translated strings for the merchant_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  localizedMerchantName?: LocalizedString;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed. */
  allowBarcodeRedemption?: boolean;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated */
  version?: string;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** The label to display for the PIN, such as "4-digit PIN". */
  pinLabel?: string;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Deprecated. */
  wordMark?: Image;
  /** Translated strings for the card_number_label. */
  localizedCardNumberLabel?: LocalizedString;
  /** Translated strings for the event_number_label. */
  localizedEventNumberLabel?: LocalizedString;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** The label to display for the card number, such as "Card Number". */
  cardNumberLabel?: string;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** The label to display for event number, such as "Target Event #". */
  eventNumberLabel?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardClass"`. */
  kind?: string;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
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
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** The logo of the gift card program or company. This logo is displayed in both the details and list views of the app. */
  programLogo?: Image;
  /** Translated strings for the pin_label. */
  localizedPinLabel?: LocalizedString;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Merchant name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  merchantName?: string;
  /** View Unlock Requirement options for the gift card. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** The wide logo of the gift card program or company. When provided, this will be used in place of the program logo in the top left of the card view. */
  wideProgramLogo?: Image;
}

export const GiftCardClass: Schema.Schema<GiftCardClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    localizedIssuerName: Schema.optional(LocalizedString),
    callbackOptions: Schema.optional(CallbackOptions),
    multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
    allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    localizedMerchantName: Schema.optional(LocalizedString),
    redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
    allowBarcodeRedemption: Schema.optional(Schema.Boolean),
    infoModuleData: Schema.optional(InfoModuleData),
    hexBackgroundColor: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    review: Schema.optional(Review),
    countryCode: Schema.optional(Schema.String),
    pinLabel: Schema.optional(Schema.String),
    enableSmartTap: Schema.optional(Schema.Boolean),
    issuerName: Schema.optional(Schema.String),
    wordMark: Schema.optional(Image),
    localizedCardNumberLabel: Schema.optional(LocalizedString),
    localizedEventNumberLabel: Schema.optional(LocalizedString),
    classTemplateInfo: Schema.optional(ClassTemplateInfo),
    cardNumberLabel: Schema.optional(Schema.String),
    appLinkData: Schema.optional(AppLinkData),
    eventNumberLabel: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    homepageUri: Schema.optional(Uri),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    securityAnimation: Schema.optional(SecurityAnimation),
    reviewStatus: Schema.optional(Schema.String),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    programLogo: Schema.optional(Image),
    localizedPinLabel: Schema.optional(LocalizedString),
    messages: Schema.optional(Schema.Array(Message)),
    id: Schema.optional(Schema.String),
    merchantName: Schema.optional(Schema.String),
    viewUnlockRequirement: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
    wideProgramLogo: Schema.optional(Image),
  }).annotate({ identifier: "GiftCardClass" });

export interface PassConstraints {
  /** The NFC constraints for the pass. */
  nfcConstraint?: ReadonlyArray<
    | "NFC_CONSTRAINT_UNSPECIFIED"
    | "BLOCK_PAYMENT"
    | "BLOCK_CLOSED_LOOP_TRANSIT"
    | (string & {})
  >;
  /** The screenshot eligibility for the pass. */
  screenshotEligibility?:
    | "SCREENSHOT_ELIGIBILITY_UNSPECIFIED"
    | "ELIGIBLE"
    | "INELIGIBLE"
    | (string & {});
}

export const PassConstraints: Schema.Schema<PassConstraints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nfcConstraint: Schema.optional(Schema.Array(Schema.String)),
    screenshotEligibility: Schema.optional(Schema.String),
  }).annotate({ identifier: "PassConstraints" });

export interface SaveRestrictions {
  /** Restrict the save of the referencing object to the given email address only. This is the hex output of SHA256 sum of the email address, all lowercase and without any notations like "." or "+", except "@". For example, for example@example.com, this value will be 31c5543c1734d25c7206f5fd591525d0295bec6fe84ff82f946a34fe970a1e66 and for Example@example.com, this value will be bc34f262c93ad7122763684ccea6f07fb7f5d8a2d11e60ce15a6f43fe70ce632 If email address of the logged-in user who tries to save this pass does not match with the defined value here, users won't be allowed to save this pass. They will instead be prompted with an error to contact the issuer. This information should be gathered from the user with an explicit consent via Sign in with Google integration https://developers.google.com/identity/authentication. Please contact with support before using Save Restrictions. */
  restrictToEmailSha256?: string;
}

export const SaveRestrictions: Schema.Schema<SaveRestrictions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restrictToEmailSha256: Schema.optional(Schema.String),
  }).annotate({ identifier: "SaveRestrictions" });

export interface GroupingInfo {
  /** Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with the same sort index, the sorting behavior is undefined. */
  sortIndex?: number;
  /** Optional grouping ID for grouping the passes with the same ID visually together. Grouping with different types of passes is allowed. */
  groupingId?: string;
}

export const GroupingInfo: Schema.Schema<GroupingInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortIndex: Schema.optional(Schema.Number),
    groupingId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupingInfo" });

export interface Barcode {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#barcode"`. */
  kind?: string;
  /** The value encoded in the barcode. */
  value?: string;
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
  /** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
  renderEncoding?: "RENDER_ENCODING_UNSPECIFIED" | "UTF_8" | (string & {});
  /** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
  alternateText?: string;
  /** Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google. */
  showCodeText?: LocalizedString;
}

export const Barcode: Schema.Schema<Barcode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    renderEncoding: Schema.optional(Schema.String),
    alternateText: Schema.optional(Schema.String),
    showCodeText: Schema.optional(LocalizedString),
  }).annotate({ identifier: "Barcode" });

export interface GiftCardObject {
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
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
  /** The card's monetary balance. */
  balance?: Money;
  /** The date and time when the balance was last updated. Offset is required. If balance is updated and this property is not provided, system will default to the current time. */
  balanceUpdateTime?: DateTime;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this giftcard object. If a user had saved this gift card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Deprecated */
  version?: string;
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: GiftCardClass;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardObject"`. */
  kind?: string;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The card's event number, an optional field used by some gift cards. */
  eventNumber?: string;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Required. The card's number. */
  cardNumber?: string;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** The card's PIN. */
  pin?: string;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
}

export const GiftCardObject: Schema.Schema<GiftCardObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notifyPreference: Schema.optional(Schema.String),
    disableExpirationNotification: Schema.optional(Schema.Boolean),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    infoModuleData: Schema.optional(InfoModuleData),
    rotatingBarcode: Schema.optional(RotatingBarcode),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    state: Schema.optional(Schema.String),
    balance: Schema.optional(Money),
    balanceUpdateTime: Schema.optional(DateTime),
    linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    hasLinkedDevice: Schema.optional(Schema.Boolean),
    classReference: Schema.optional(GiftCardClass),
    validTimeInterval: Schema.optional(TimeInterval),
    passConstraints: Schema.optional(PassConstraints),
    saveRestrictions: Schema.optional(SaveRestrictions),
    appLinkData: Schema.optional(AppLinkData),
    kind: Schema.optional(Schema.String),
    groupingInfo: Schema.optional(GroupingInfo),
    eventNumber: Schema.optional(Schema.String),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    cardNumber: Schema.optional(Schema.String),
    barcode: Schema.optional(Barcode),
    classId: Schema.optional(Schema.String),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    id: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    smartTapRedemptionValue: Schema.optional(Schema.String),
    pin: Schema.optional(Schema.String),
    hasUsers: Schema.optional(Schema.Boolean),
    linksModuleData: Schema.optional(LinksModuleData),
  }).annotate({ identifier: "GiftCardObject" });

export interface EventReservationInfo {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventReservationInfo"`. */
  kind?: string;
  /** The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent. */
  confirmationCode?: string;
}

export const EventReservationInfo: Schema.Schema<EventReservationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    confirmationCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventReservationInfo" });

export interface AuthenticationKey {
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  publicKeyPem?: string;
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  id?: number;
}

export const AuthenticationKey: Schema.Schema<AuthenticationKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKeyPem: Schema.optional(Schema.String),
    id: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AuthenticationKey" });

export interface EventVenue {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventVenue"`. */
  kind?: string;
  /** The name of the venue, such as "AT&T Park". This is required. */
  name?: LocalizedString;
  /** The address of the venue, such as "24 Willie Mays Plaza\nSan Francisco, CA 94107". Address lines are separated by line feed (`\n`) characters. This is required. */
  address?: LocalizedString;
}

export const EventVenue: Schema.Schema<EventVenue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(LocalizedString),
    address: Schema.optional(LocalizedString),
  }).annotate({ identifier: "EventVenue" });

export interface EventDateTime {
  /** The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  doorsOpen?: string;
  /** The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  end?: string;
  /** The label to use for the doors open value (`doorsOpen`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used. */
  doorsOpenLabel?:
    | "DOORS_OPEN_LABEL_UNSPECIFIED"
    | "DOORS_OPEN"
    | "doorsOpen"
    | "GATES_OPEN"
    | "gatesOpen"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventDateTime"`. */
  kind?: string;
  /** The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  start?: string;
  /** A custom label to use for the doors open value (`doorsOpen`) on the card detail view. This should only be used if the default "Doors Open" label or one of the `doorsOpenLabel` options is not sufficient. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used. */
  customDoorsOpenLabel?: LocalizedString;
}

export const EventDateTime: Schema.Schema<EventDateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    doorsOpen: Schema.optional(Schema.String),
    end: Schema.optional(Schema.String),
    doorsOpenLabel: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    start: Schema.optional(Schema.String),
    customDoorsOpenLabel: Schema.optional(LocalizedString),
  }).annotate({ identifier: "EventDateTime" });

export interface EventTicketClass {
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Deprecated */
  version?: string;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** The wide logo of the ticket. When provided, this will be used in place of the logo in the top left of the card view. */
  wideLogo?: Image;
  /** The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used. */
  rowLabel?: "ROW_LABEL_UNSPECIFIED" | "ROW" | "row" | (string & {});
  /** A custom label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. This should only be used if the default "Row" label or one of the `rowLabel` options is not sufficient. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used. */
  customRowLabel?: LocalizedString;
  /** Event venue details. */
  venue?: EventVenue;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
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
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Deprecated. */
  wordMark?: Image;
  /** A custom label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. This should only be used if the default "Gate" label or one of the `gateLabel` options is not sufficient. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used. */
  customGateLabel?: LocalizedString;
  /** The date & time information of the event. */
  dateTime?: EventDateTime;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used. */
  seatLabel?: "SEAT_LABEL_UNSPECIFIED" | "SEAT" | "seat" | (string & {});
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
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used. */
  sectionLabel?:
    | "SECTION_LABEL_UNSPECIFIED"
    | "SECTION"
    | "section"
    | "THEATER"
    | "theater"
    | (string & {});
  /** The logo image of the ticket. This image is displayed in the card detail view of the app. */
  logo?: Image;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable). */
  eventId?: string;
  /** View Unlock Requirement options for the event ticket. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** A custom label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. This should only be used if the default "Confirmation Code" label or one of the `confirmationCodeLabel` options is not sufficient. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used. */
  customConfirmationCodeLabel?: LocalizedString;
  /** A custom label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. This should only be used if the default "Seat" label or one of the `seatLabel` options is not sufficient. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used. */
  customSeatLabel?: LocalizedString;
  /** The fine print, terms, or conditions of the ticket. */
  finePrint?: LocalizedString;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** A custom label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. This should only be used if the default "Section" label or one of the `sectionLabel` options is not sufficient. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used. */
  customSectionLabel?: LocalizedString;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketClass"`. */
  kind?: string;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
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
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
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
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Required. The name of the event, such as "LA Dodgers at SF Giants". */
  eventName?: LocalizedString;
}

export const EventTicketClass: Schema.Schema<EventTicketClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSmartTap: Schema.optional(Schema.Boolean),
    countryCode: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    review: Schema.optional(Review),
    wideLogo: Schema.optional(Image),
    rowLabel: Schema.optional(Schema.String),
    customRowLabel: Schema.optional(LocalizedString),
    venue: Schema.optional(EventVenue),
    appLinkData: Schema.optional(AppLinkData),
    classTemplateInfo: Schema.optional(ClassTemplateInfo),
    confirmationCodeLabel: Schema.optional(Schema.String),
    issuerName: Schema.optional(Schema.String),
    wordMark: Schema.optional(Image),
    customGateLabel: Schema.optional(LocalizedString),
    dateTime: Schema.optional(EventDateTime),
    allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    seatLabel: Schema.optional(Schema.String),
    multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
    localizedIssuerName: Schema.optional(LocalizedString),
    callbackOptions: Schema.optional(CallbackOptions),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    infoModuleData: Schema.optional(InfoModuleData),
    hexBackgroundColor: Schema.optional(Schema.String),
    sectionLabel: Schema.optional(Schema.String),
    logo: Schema.optional(Image),
    redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    eventId: Schema.optional(Schema.String),
    viewUnlockRequirement: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    customConfirmationCodeLabel: Schema.optional(LocalizedString),
    customSeatLabel: Schema.optional(LocalizedString),
    finePrint: Schema.optional(LocalizedString),
    linksModuleData: Schema.optional(LinksModuleData),
    customSectionLabel: Schema.optional(LocalizedString),
    kind: Schema.optional(Schema.String),
    homepageUri: Schema.optional(Uri),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    gateLabel: Schema.optional(Schema.String),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    reviewStatus: Schema.optional(Schema.String),
    securityAnimation: Schema.optional(SecurityAnimation),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    eventName: Schema.optional(LocalizedString),
  }).annotate({ identifier: "EventTicketClass" });

export interface EventSeat {
  /** The gate the ticket holder should enter to get to their seat, such as "A" or "West". This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  gate?: LocalizedString;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventSeat"`. */
  kind?: string;
  /** The row of the seat, such as "1", E", "BB", or "A5". This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  row?: LocalizedString;
  /** The section of the seat, such as "121". This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  section?: LocalizedString;
  /** The seat number, such as "1", "2", "3", or any other seat identifier. This field is localizable so you may translate words or use different alphabets for the characters in an identifier. */
  seat?: LocalizedString;
}

export const EventSeat: Schema.Schema<EventSeat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gate: Schema.optional(LocalizedString),
    kind: Schema.optional(Schema.String),
    row: Schema.optional(LocalizedString),
    section: Schema.optional(LocalizedString),
    seat: Schema.optional(LocalizedString),
  }).annotate({ identifier: "EventSeat" });

export interface EventTicketObject {
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this event ticket object. If a user had saved this event ticket, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Deprecated */
  version?: string;
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: EventTicketClass;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Reservation details for this ticket. This is expected to be shared amongst all tickets that were purchased in the same order. */
  reservationInfo?: EventReservationInfo;
  /** The type of the ticket, such as "Adult" or "Child", or "VIP" or "Standard". */
  ticketType?: LocalizedString;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
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
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Name of the ticket holder, if the ticket is assigned to a person. E.g. "John Doe" or "Jane Doe". */
  ticketHolderName?: string;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. */
  linkedOfferIds?: ReadonlyArray<string>;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.). */
  ticketNumber?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketObject"`. */
  kind?: string;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The face value of the ticket, matching what would be printed on a physical version of the ticket. */
  faceValue?: Money;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Seating details for this ticket. */
  seatInfo?: EventSeat;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
}

export const EventTicketObject: Schema.Schema<EventTicketObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    hasLinkedDevice: Schema.optional(Schema.Boolean),
    classReference: Schema.optional(EventTicketClass),
    validTimeInterval: Schema.optional(TimeInterval),
    passConstraints: Schema.optional(PassConstraints),
    saveRestrictions: Schema.optional(SaveRestrictions),
    appLinkData: Schema.optional(AppLinkData),
    reservationInfo: Schema.optional(EventReservationInfo),
    ticketType: Schema.optional(LocalizedString),
    notifyPreference: Schema.optional(Schema.String),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    disableExpirationNotification: Schema.optional(Schema.Boolean),
    hexBackgroundColor: Schema.optional(Schema.String),
    infoModuleData: Schema.optional(InfoModuleData),
    state: Schema.optional(Schema.String),
    rotatingBarcode: Schema.optional(RotatingBarcode),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    id: Schema.optional(Schema.String),
    ticketHolderName: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    smartTapRedemptionValue: Schema.optional(Schema.String),
    linkedOfferIds: Schema.optional(Schema.Array(Schema.String)),
    hasUsers: Schema.optional(Schema.Boolean),
    linksModuleData: Schema.optional(LinksModuleData),
    ticketNumber: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    groupingInfo: Schema.optional(GroupingInfo),
    faceValue: Schema.optional(Money),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    seatInfo: Schema.optional(EventSeat),
    classId: Schema.optional(Schema.String),
    barcode: Schema.optional(Barcode),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
  }).annotate({ identifier: "EventTicketObject" });

export interface EventTicketObjectAddMessageResponse {
  /** The updated EventTicketObject resource. */
  resource?: EventTicketObject;
}

export const EventTicketObjectAddMessageResponse: Schema.Schema<EventTicketObjectAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(EventTicketObject),
  }).annotate({ identifier: "EventTicketObjectAddMessageResponse" });

export interface AirportInfo {
  /** Terminal name. Eg: "INTL" or "I" */
  terminal?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#airportInfo"`. */
  kind?: string;
  /** Optional field that overrides the airport city name defined by IATA. By default, Google takes the `airportIataCode` provided and maps it to the official airport city name defined by IATA. Official IATA airport city names can be found at IATA airport city names website. For example, for the airport IATA code "LTN", IATA website tells us that the corresponding airport city is "London". If this field is not populated, Google would display "London". However, populating this field with a custom name (eg: "London Luton") would override it. */
  airportNameOverride?: LocalizedString;
  /** A name of the gate. Eg: "B59" or "59" */
  gate?: string;
  /** Three character IATA airport code. This is a required field for `origin` and `destination`. Eg: "SFO" */
  airportIataCode?: string;
}

export const AirportInfo: Schema.Schema<AirportInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    terminal: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    airportNameOverride: Schema.optional(LocalizedString),
    gate: Schema.optional(Schema.String),
    airportIataCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AirportInfo" });

export interface FlightCarrier {
  /** A logo for the airline alliance, displayed below the QR code that the passenger scans to board. */
  airlineAllianceLogo?: Image;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightCarrier"`. */
  kind?: string;
  /** The wide logo of the airline. When provided, this will be used in place of the airline logo in the top left of the card view. */
  wideAirlineLogo?: Image;
  /** Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIcaoCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "LX" for Swiss Air */
  carrierIataCode?: string;
  /** A localized name of the airline specified by carrierIataCode. If unset, `issuer_name` or `localized_issuer_name` from `FlightClass` will be used for display purposes. eg: "Swiss Air" for "LX" */
  airlineName?: LocalizedString;
  /** Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIataCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "EZY" for Easy Jet */
  carrierIcaoCode?: string;
  /** A logo for the airline described by carrierIataCode and localizedAirlineName. This logo will be rendered at the top of the detailed card view. */
  airlineLogo?: Image;
}

export const FlightCarrier: Schema.Schema<FlightCarrier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    airlineAllianceLogo: Schema.optional(Image),
    kind: Schema.optional(Schema.String),
    wideAirlineLogo: Schema.optional(Image),
    carrierIataCode: Schema.optional(Schema.String),
    airlineName: Schema.optional(LocalizedString),
    carrierIcaoCode: Schema.optional(Schema.String),
    airlineLogo: Schema.optional(Image),
  }).annotate({ identifier: "FlightCarrier" });

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

export const Permission: Schema.Schema<Permission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emailAddress: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "Permission" });

export interface GiftCardClassAddMessageResponse {
  /** The updated GiftCardClass resource. */
  resource?: GiftCardClass;
}

export const GiftCardClassAddMessageResponse: Schema.Schema<GiftCardClassAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GiftCardClass),
  }).annotate({ identifier: "GiftCardClassAddMessageResponse" });

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

export const BoardingAndSeatingPolicy: Schema.Schema<BoardingAndSeatingPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boardingPolicy: Schema.optional(Schema.String),
    seatClassPolicy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "BoardingAndSeatingPolicy" });

export interface FlightHeader {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightHeader"`. */
  kind?: string;
  /** The flight number without IATA carrier code. This field should contain only digits. This is a required property of `flightHeader`. eg: "123" */
  flightNumber?: string;
  /** Information about airline carrier. This is a required property of `flightHeader`. */
  carrier?: FlightCarrier;
  /** Override value to use for flight number. The default value used for display purposes is carrier + flight_number. If a different value needs to be shown to passengers, use this field to override the default behavior. eg: "XX1234 / YY576" */
  flightNumberDisplayOverride?: string;
  /** Information about operating airline carrier. */
  operatingCarrier?: FlightCarrier;
  /** The flight number used by the operating carrier without IATA carrier code. This field should contain only digits. eg: "234" */
  operatingFlightNumber?: string;
}

export const FlightHeader: Schema.Schema<FlightHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    flightNumber: Schema.optional(Schema.String),
    carrier: Schema.optional(FlightCarrier),
    flightNumberDisplayOverride: Schema.optional(Schema.String),
    operatingCarrier: Schema.optional(FlightCarrier),
    operatingFlightNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlightHeader" });

export interface FlightClass {
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
  languageOverride?: string;
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
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Required. Destination airport. */
  destination?: AirportInfo;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected by the validator. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Policies for boarding and seating. These will inform which labels will be shown to users. */
  boardingAndSeatingPolicy?: BoardingAndSeatingPolicy;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Required. Information about the flight carrier and number. */
  flightHeader?: FlightHeader;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated */
  version?: string;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localScheduledDepartureDateTime?: string;
  /** The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. */
  localEstimatedOrActualArrivalDateTime?: string;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
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
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Deprecated. */
  wordMark?: Image;
  /** The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localGateClosingDateTime?: string;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. */
  localScheduledArrivalDateTime?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightClass"`. */
  kind?: string;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
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
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localBoardingDateTime?: string;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** View Unlock Requirement options for the boarding pass. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Required. Origin airport. */
  origin?: AirportInfo;
  /** The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
  localEstimatedOrActualDepartureDateTime?: string;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
}

export const FlightClass: Schema.Schema<FlightClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    languageOverride: Schema.optional(Schema.String),
    multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
    localizedIssuerName: Schema.optional(LocalizedString),
    callbackOptions: Schema.optional(CallbackOptions),
    allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    destination: Schema.optional(AirportInfo),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    boardingAndSeatingPolicy: Schema.optional(BoardingAndSeatingPolicy),
    redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
    flightHeader: Schema.optional(FlightHeader),
    infoModuleData: Schema.optional(InfoModuleData),
    hexBackgroundColor: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    review: Schema.optional(Review),
    localScheduledDepartureDateTime: Schema.optional(Schema.String),
    localEstimatedOrActualArrivalDateTime: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    enableSmartTap: Schema.optional(Schema.Boolean),
    flightStatus: Schema.optional(Schema.String),
    issuerName: Schema.optional(Schema.String),
    wordMark: Schema.optional(Image),
    localGateClosingDateTime: Schema.optional(Schema.String),
    classTemplateInfo: Schema.optional(ClassTemplateInfo),
    appLinkData: Schema.optional(AppLinkData),
    localScheduledArrivalDateTime: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    homepageUri: Schema.optional(Uri),
    securityAnimation: Schema.optional(SecurityAnimation),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    reviewStatus: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    localBoardingDateTime: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    id: Schema.optional(Schema.String),
    viewUnlockRequirement: Schema.optional(Schema.String),
    origin: Schema.optional(AirportInfo),
    localEstimatedOrActualDepartureDateTime: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
  }).annotate({ identifier: "FlightClass" });

export interface Pagination {
  /** Number of results returned in this page. */
  resultsPerPage?: number;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#pagination"`. */
  kind?: string;
  /** Page token to send to fetch the next page. */
  nextPageToken?: string;
}

export const Pagination: Schema.Schema<Pagination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultsPerPage: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pagination" });

export interface FlightClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<FlightClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const FlightClassListResponse: Schema.Schema<FlightClassListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(FlightClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "FlightClassListResponse" });

export interface SmartTapMerchantData {
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  smartTapMerchantId?: string;
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  authenticationKeys?: ReadonlyArray<AuthenticationKey>;
}

export const SmartTapMerchantData: Schema.Schema<SmartTapMerchantData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smartTapMerchantId: Schema.optional(Schema.String),
    authenticationKeys: Schema.optional(Schema.Array(AuthenticationKey)),
  }).annotate({ identifier: "SmartTapMerchantData" });

export interface DiscoverableProgramMerchantSignupInfo {
  /** The URL to direct the user to for the merchant's signup site. */
  signupWebsite?: Uri;
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
}

export const DiscoverableProgramMerchantSignupInfo: Schema.Schema<DiscoverableProgramMerchantSignupInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signupWebsite: Schema.optional(Uri),
    signupSharedDatas: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DiscoverableProgramMerchantSignupInfo" });

export interface FlightClassAddMessageResponse {
  /** The updated FlightClass resource. */
  resource?: FlightClass;
}

export const FlightClassAddMessageResponse: Schema.Schema<FlightClassAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(FlightClass),
  }).annotate({ identifier: "FlightClassAddMessageResponse" });

export interface BoardingAndSeatingInfo {
  /** The value of boarding position. eg: "76" */
  boardingPosition?: string;
  /** The value of boarding group (or zone) this passenger shall board with. eg: "B" The label for this value will be determined by the `boardingPolicy` field in the `flightClass` referenced by this object. */
  boardingGroup?: string;
  /** The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: "49" */
  sequenceNumber?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingInfo"`. */
  kind?: string;
  /** The value of the seat class. eg: "Economy" or "Economy Plus" */
  seatClass?: string;
  /** The passenger's seat assignment. To be used when there is no specific identifier to use in `seatNumber`. eg: "assigned at gate" */
  seatAssignment?: LocalizedString;
  /** Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the `seatClass`. In those cases `boardingDoor` should not be set. */
  boardingDoor?:
    | "BOARDING_DOOR_UNSPECIFIED"
    | "FRONT"
    | "front"
    | "BACK"
    | "back"
    | (string & {});
  /** A small image shown above the boarding barcode. Airlines can use it to communicate any special boarding privileges. In the event the security program logo is also set, this image might be rendered alongside the logo for that security program. */
  boardingPrivilegeImage?: Image;
  /** The value of passenger seat. If there is no specific identifier, use `seatAssignment` instead. eg: "25A" */
  seatNumber?: string;
}

export const BoardingAndSeatingInfo: Schema.Schema<BoardingAndSeatingInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boardingPosition: Schema.optional(Schema.String),
    boardingGroup: Schema.optional(Schema.String),
    sequenceNumber: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    seatClass: Schema.optional(Schema.String),
    seatAssignment: Schema.optional(LocalizedString),
    boardingDoor: Schema.optional(Schema.String),
    boardingPrivilegeImage: Schema.optional(Image),
    seatNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "BoardingAndSeatingInfo" });

export interface FrequentFlyerInfo {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#frequentFlyerInfo"`. */
  kind?: string;
  /** Frequent flyer program name. eg: "Lufthansa Miles & More" */
  frequentFlyerProgramName?: LocalizedString;
  /** Frequent flyer number. Required for each nested object of kind `walletobjects#frequentFlyerInfo`. */
  frequentFlyerNumber?: string;
}

export const FrequentFlyerInfo: Schema.Schema<FrequentFlyerInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    frequentFlyerProgramName: Schema.optional(LocalizedString),
    frequentFlyerNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "FrequentFlyerInfo" });

export interface ReservationInfo {
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#reservationInfo"`. */
  kind?: string;
  /** Frequent flyer membership information. */
  frequentFlyerInfo?: FrequentFlyerInfo;
  /** Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass. */
  confirmationCode?: string;
  /** E-ticket number. */
  eticketNumber?: string;
}

export const ReservationInfo: Schema.Schema<ReservationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    frequentFlyerInfo: Schema.optional(FrequentFlyerInfo),
    confirmationCode: Schema.optional(Schema.String),
    eticketNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReservationInfo" });

export interface FlightObject {
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** An image for the security program that applies to the passenger. */
  securityProgramLogo?: Image;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightObject"`. */
  kind?: string;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
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
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Passenger specific information about boarding and seating. */
  boardingAndSeatingInfo?: BoardingAndSeatingInfo;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for Flights. */
  disableExpirationNotification?: boolean;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Required. Information about flight reservation. */
  reservationInfo?: ReservationInfo;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Required. Passenger name as it would appear on the boarding pass. eg: "Dave M Gahan" or "Gahan/Dave" or "GAHAN/DAVEM" */
  passengerName?: string;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: FlightClass;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** Deprecated */
  version?: string;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this flight object. If a user had saved this boarding pass, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
}

export const FlightObject: Schema.Schema<FlightObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    classId: Schema.optional(Schema.String),
    barcode: Schema.optional(Barcode),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    securityProgramLogo: Schema.optional(Image),
    groupingInfo: Schema.optional(GroupingInfo),
    kind: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
    hasUsers: Schema.optional(Schema.Boolean),
    messages: Schema.optional(Schema.Array(Message)),
    smartTapRedemptionValue: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    rotatingBarcode: Schema.optional(RotatingBarcode),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    boardingAndSeatingInfo: Schema.optional(BoardingAndSeatingInfo),
    hexBackgroundColor: Schema.optional(Schema.String),
    infoModuleData: Schema.optional(InfoModuleData),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    disableExpirationNotification: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    reservationInfo: Schema.optional(ReservationInfo),
    appLinkData: Schema.optional(AppLinkData),
    passengerName: Schema.optional(Schema.String),
    classReference: Schema.optional(FlightClass),
    validTimeInterval: Schema.optional(TimeInterval),
    passConstraints: Schema.optional(PassConstraints),
    saveRestrictions: Schema.optional(SaveRestrictions),
    hasLinkedDevice: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
    linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FlightObject" });

export interface FlightObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<FlightObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const FlightObjectListResponse: Schema.Schema<FlightObjectListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(FlightObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "FlightObjectListResponse" });

export interface ContentTypeInfo {
  /** The content type of the file as specified in the request headers, multipart headers, or RUPIO start request. */
  fromHeader?: string;
  /** Metadata information from Fusion ID detection. Serialized FusionIdDetectionMetadata proto. Only set if from_fusion_id is set. */
  fusionIdDetectionMetadata?: string;
  /** Scotty's best guess of what the content type of the file is. */
  bestGuess?: string;
  /** The content type of the file derived from the file extension of the original file name used by the client. */
  fromFileName?: string;
  /** The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file. */
  fromBytes?: string;
  /** The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API). */
  fromUrlPath?: string;
  /** The content type of the file detected by Fusion ID. go/fusionid */
  fromFusionId?: string;
}

export const ContentTypeInfo: Schema.Schema<ContentTypeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fromHeader: Schema.optional(Schema.String),
    fusionIdDetectionMetadata: Schema.optional(Schema.String),
    bestGuess: Schema.optional(Schema.String),
    fromFileName: Schema.optional(Schema.String),
    fromBytes: Schema.optional(Schema.String),
    fromUrlPath: Schema.optional(Schema.String),
    fromFusionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContentTypeInfo" });

export interface DiscoverableProgramMerchantSigninInfo {
  /** The URL to direct the user to for the merchant's signin site. */
  signinWebsite?: Uri;
}

export const DiscoverableProgramMerchantSigninInfo: Schema.Schema<DiscoverableProgramMerchantSigninInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signinWebsite: Schema.optional(Uri),
  }).annotate({ identifier: "DiscoverableProgramMerchantSigninInfo" });

export interface DiscoverableProgram {
  /** Information about the ability to signup and add a valuable for this program through a merchant site. Used when MERCHANT_HOSTED_SIGNUP is enabled. */
  merchantSignupInfo?: DiscoverableProgramMerchantSignupInfo;
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
}

export const DiscoverableProgram: Schema.Schema<DiscoverableProgram> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantSignupInfo: Schema.optional(DiscoverableProgramMerchantSignupInfo),
    state: Schema.optional(Schema.String),
    merchantSigninInfo: Schema.optional(DiscoverableProgramMerchantSigninInfo),
  }).annotate({ identifier: "DiscoverableProgram" });

export interface LoyaltyClass {
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Translated strings for the rewards_tier_label. Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens. */
  localizedRewardsTierLabel?: LocalizedString;
  /** Required. The program name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  programName?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Translated strings for the account_name_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  localizedAccountNameLabel?: LocalizedString;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
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
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** The secondary rewards tier, such as "Gold" or "Platinum." */
  secondaryRewardsTier?: string;
  /** Translated strings for the rewards_tier. Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens. */
  localizedRewardsTier?: LocalizedString;
  /** Information about how the class may be discovered and instantiated from within the Google Pay app. */
  discoverableProgram?: DiscoverableProgram;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Deprecated. */
  wordMark?: Image;
  /** The rewards tier label, such as "Rewards Tier." Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens. */
  rewardsTierLabel?: string;
  /** The account ID label, such as "Member ID." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  accountIdLabel?: string;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** The rewards tier, such as "Gold" or "Platinum." Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens. */
  rewardsTier?: string;
  /** Deprecated */
  version?: string;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Translated strings for the program_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
  localizedProgramName?: LocalizedString;
  /** The account name label, such as "Member Name." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  accountNameLabel?: string;
  /** The secondary rewards tier label, such as "Rewards Tier." */
  secondaryRewardsTierLabel?: string;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
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
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Translated strings for the secondary_rewards_tier. */
  localizedSecondaryRewardsTier?: LocalizedString;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyClass"`. */
  kind?: string;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** Translated strings for the secondary_rewards_tier_label. */
  localizedSecondaryRewardsTierLabel?: LocalizedString;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** The wide logo of the loyalty program or company. When provided, this will be used in place of the program logo in the top left of the card view. */
  wideProgramLogo?: Image;
  /** Required. The logo of the loyalty program or company. This logo is displayed in both the details and list views of the app. */
  programLogo?: Image;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Translated strings for the account_id_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
  localizedAccountIdLabel?: LocalizedString;
  /** View Unlock Requirement options for the loyalty card. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
}

export const LoyaltyClass: Schema.Schema<LoyaltyClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
    localizedRewardsTierLabel: Schema.optional(LocalizedString),
    programName: Schema.optional(Schema.String),
    infoModuleData: Schema.optional(InfoModuleData),
    hexBackgroundColor: Schema.optional(Schema.String),
    localizedAccountNameLabel: Schema.optional(LocalizedString),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
    localizedIssuerName: Schema.optional(LocalizedString),
    callbackOptions: Schema.optional(CallbackOptions),
    secondaryRewardsTier: Schema.optional(Schema.String),
    localizedRewardsTier: Schema.optional(LocalizedString),
    discoverableProgram: Schema.optional(DiscoverableProgram),
    allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    issuerName: Schema.optional(Schema.String),
    wordMark: Schema.optional(Image),
    rewardsTierLabel: Schema.optional(Schema.String),
    accountIdLabel: Schema.optional(Schema.String),
    classTemplateInfo: Schema.optional(ClassTemplateInfo),
    appLinkData: Schema.optional(AppLinkData),
    rewardsTier: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    review: Schema.optional(Review),
    localizedProgramName: Schema.optional(LocalizedString),
    accountNameLabel: Schema.optional(Schema.String),
    secondaryRewardsTierLabel: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    enableSmartTap: Schema.optional(Schema.Boolean),
    securityAnimation: Schema.optional(SecurityAnimation),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    reviewStatus: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    localizedSecondaryRewardsTier: Schema.optional(LocalizedString),
    kind: Schema.optional(Schema.String),
    homepageUri: Schema.optional(Uri),
    localizedSecondaryRewardsTierLabel: Schema.optional(LocalizedString),
    linksModuleData: Schema.optional(LinksModuleData),
    wideProgramLogo: Schema.optional(Image),
    programLogo: Schema.optional(Image),
    messages: Schema.optional(Schema.Array(Message)),
    id: Schema.optional(Schema.String),
    localizedAccountIdLabel: Schema.optional(LocalizedString),
    viewUnlockRequirement: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoyaltyClass" });

export interface TicketRestrictions {
  /** Restrictions about routes that may be taken. For example, this may be the string "Reserved CrossCountry trains only". */
  routeRestrictions?: LocalizedString;
  /** More details about the above `routeRestrictions`. */
  routeRestrictionsDetails?: LocalizedString;
  /** Restrictions about times this ticket may be used. */
  timeRestrictions?: LocalizedString;
  /** Extra restrictions that don't fall under the "route" or "time" categories. */
  otherRestrictions?: LocalizedString;
}

export const TicketRestrictions: Schema.Schema<TicketRestrictions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routeRestrictions: Schema.optional(LocalizedString),
    routeRestrictionsDetails: Schema.optional(LocalizedString),
    timeRestrictions: Schema.optional(LocalizedString),
    otherRestrictions: Schema.optional(LocalizedString),
  }).annotate({ identifier: "TicketRestrictions" });

export interface TicketCost {
  /** The face value of the ticket. */
  faceValue?: Money;
  /** The actual purchase price of the ticket, after tax and/or discounts. */
  purchasePrice?: Money;
  /** A message describing any kind of discount that was applied. */
  discountMessage?: LocalizedString;
}

export const TicketCost: Schema.Schema<TicketCost> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    faceValue: Schema.optional(Money),
    purchasePrice: Schema.optional(Money),
    discountMessage: Schema.optional(LocalizedString),
  }).annotate({ identifier: "TicketCost" });

export interface PurchaseDetails {
  /** The confirmation code for the purchase. This may be the same for multiple different tickets and is used to group tickets together. */
  confirmationCode?: string;
  /** ID of the account used to purchase the ticket. */
  accountId?: string;
  /** The purchase date/time of the ticket. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Without offset information, some rich features may not be available. */
  purchaseDateTime?: string;
  /** Receipt number/identifier for tracking the ticket purchase via the body that sold the ticket. */
  purchaseReceiptNumber?: string;
  /** The cost of the ticket. */
  ticketCost?: TicketCost;
}

export const PurchaseDetails: Schema.Schema<PurchaseDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmationCode: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    purchaseDateTime: Schema.optional(Schema.String),
    purchaseReceiptNumber: Schema.optional(Schema.String),
    ticketCost: Schema.optional(TicketCost),
  }).annotate({ identifier: "PurchaseDetails" });

export interface DeviceContext {
  /** If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user's device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated. */
  deviceToken?: string;
}

export const DeviceContext: Schema.Schema<DeviceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceContext" });

export interface ActivationOptions {
  /** HTTPS URL that supports REST semantics. Would be used for requesting activation from partners for given valuable, triggered by the users. */
  activationUrl?: string;
  /** Flag to allow users to make activation call from different device. This allows client to render the activation button enabled even if the activationStatus is ACTIVATED but the requested device is different than the current device. */
  allowReactivation?: boolean;
}

export const ActivationOptions: Schema.Schema<ActivationOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activationUrl: Schema.optional(Schema.String),
    allowReactivation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ActivationOptions" });

export interface TransitClass {
  /** A custom label to use for the transit terminus name value (`transitObject.ticketLeg.transitTerminusName`). */
  customTransitTerminusNameLabel?: LocalizedString;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** Deprecated. */
  wordMark?: Image;
  /** A custom label to use for the ticket number value (`transitObject.ticketNumber`). */
  customTicketNumberLabel?: LocalizedString;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** A custom label to use for the purchase face value (`transitObject.purchaseDetails.ticketCost.faceValue`). */
  customPurchaseFaceValueLabel?: LocalizedString;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Deprecated */
  version?: string;
  /** Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips. */
  enableSingleLegItinerary?: boolean;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Activation options for an activatable ticket. */
  activationOptions?: ActivationOptions;
  /** A custom label to use for the route restrictions value (`transitObject.ticketRestrictions.routeRestrictions`). */
  customRouteRestrictionsLabel?: LocalizedString;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** A custom label to use for the coach value (`transitObject.ticketLeg.ticketSeat.coach`). */
  customCoachLabel?: LocalizedString;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
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
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** A custom label to use for the seat location value (`transitObject.ticketLeg.ticketSeat.seat`). */
  customSeatLabel?: LocalizedString;
  /** Watermark image to display on the user's device. */
  watermark?: Image;
  /** A custom label to use for the route restrictions details value (`transitObject.ticketRestrictions.routeRestrictionsDetails`). */
  customRouteRestrictionsDetailsLabel?: LocalizedString;
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
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** A custom label to use for the other restrictions value (`transitObject.ticketRestrictions.otherRestrictions`). */
  customOtherRestrictionsLabel?: LocalizedString;
  /** A custom label to use for the transit concession category value (`transitObject.concessionCategory`). */
  customConcessionCategoryLabel?: LocalizedString;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** The name of the transit operator. */
  transitOperatorName?: LocalizedString;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** The wide logo of the ticket. When provided, this will be used in place of the logo in the top left of the card view. */
  wideLogo?: Image;
  /** A custom label to use for the purchase receipt number value (`transitObject.purchaseDetails.purchaseReceiptNumber`). */
  customPurchaseReceiptNumberLabel?: LocalizedString;
  /** Required. The logo image of the ticket. This image is displayed in the card detail view of the app. */
  logo?: Image;
  /** A custom label to use for the transit fare name value (`transitObject.ticketLeg.fareName`). */
  customFareNameLabel?: LocalizedString;
  /** A custom label to use for the transit discount message value (`transitObject.purchaseDetails.ticketCost.discountMessage`). */
  customDiscountMessageLabel?: LocalizedString;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** A custom label to use for the boarding platform value (`transitObject.ticketLeg.platform`). */
  customPlatformLabel?: LocalizedString;
  /** A custom label to use for the purchase price value (`transitObject.purchaseDetails.ticketCost.purchasePrice`). */
  customPurchasePriceLabel?: LocalizedString;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
  languageOverride?: string;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** A custom label to use for the boarding zone value (`transitObject.ticketLeg.zone`). */
  customZoneLabel?: LocalizedString;
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** View Unlock Requirement options for the transit ticket. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** A custom label to use for the confirmation code value (`transitObject.purchaseDetails.confirmationCode`). */
  customConfirmationCodeLabel?: LocalizedString;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** A custom label to use for the carriage value (`transitObject.ticketLeg.carriage`). */
  customCarriageLabel?: LocalizedString;
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
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** A custom label to use for the fare class value (`transitObject.ticketLeg.ticketSeat.fareClass`). */
  customFareClassLabel?: LocalizedString;
  /** A custom label to use for the time restrictions details value (`transitObject.ticketRestrictions.timeRestrictions`). */
  customTimeRestrictionsLabel?: LocalizedString;
}

export const TransitClass: Schema.Schema<TransitClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customTransitTerminusNameLabel: Schema.optional(LocalizedString),
    appLinkData: Schema.optional(AppLinkData),
    wordMark: Schema.optional(Image),
    customTicketNumberLabel: Schema.optional(LocalizedString),
    classTemplateInfo: Schema.optional(ClassTemplateInfo),
    customPurchaseFaceValueLabel: Schema.optional(LocalizedString),
    countryCode: Schema.optional(Schema.String),
    enableSmartTap: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
    enableSingleLegItinerary: Schema.optional(Schema.Boolean),
    infoModuleData: Schema.optional(InfoModuleData),
    hexBackgroundColor: Schema.optional(Schema.String),
    activationOptions: Schema.optional(ActivationOptions),
    customRouteRestrictionsLabel: Schema.optional(LocalizedString),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    customCoachLabel: Schema.optional(LocalizedString),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
    localizedIssuerName: Schema.optional(LocalizedString),
    customSeatLabel: Schema.optional(LocalizedString),
    watermark: Schema.optional(Image),
    customRouteRestrictionsDetailsLabel: Schema.optional(LocalizedString),
    transitType: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    securityAnimation: Schema.optional(SecurityAnimation),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    customOtherRestrictionsLabel: Schema.optional(LocalizedString),
    customConcessionCategoryLabel: Schema.optional(LocalizedString),
    issuerName: Schema.optional(Schema.String),
    transitOperatorName: Schema.optional(LocalizedString),
    review: Schema.optional(Review),
    wideLogo: Schema.optional(Image),
    customPurchaseReceiptNumberLabel: Schema.optional(LocalizedString),
    logo: Schema.optional(Image),
    customFareNameLabel: Schema.optional(LocalizedString),
    customDiscountMessageLabel: Schema.optional(LocalizedString),
    redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
    customPlatformLabel: Schema.optional(LocalizedString),
    customPurchasePriceLabel: Schema.optional(LocalizedString),
    allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    languageOverride: Schema.optional(Schema.String),
    callbackOptions: Schema.optional(CallbackOptions),
    customZoneLabel: Schema.optional(LocalizedString),
    id: Schema.optional(Schema.String),
    viewUnlockRequirement: Schema.optional(Schema.String),
    customConfirmationCodeLabel: Schema.optional(LocalizedString),
    messages: Schema.optional(Schema.Array(Message)),
    customCarriageLabel: Schema.optional(LocalizedString),
    reviewStatus: Schema.optional(Schema.String),
    homepageUri: Schema.optional(Uri),
    customFareClassLabel: Schema.optional(LocalizedString),
    customTimeRestrictionsLabel: Schema.optional(LocalizedString),
  }).annotate({ identifier: "TransitClass" });

export interface ActivationStatus {
  state?:
    | "UNKNOWN_STATE"
    | "NOT_ACTIVATED"
    | "not_activated"
    | "ACTIVATED"
    | "activated"
    | (string & {});
}

export const ActivationStatus: Schema.Schema<ActivationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivationStatus" });

export interface TicketSeat {
  /** The identifier of where the ticketed seat is located. Eg. "42". If there is no specific identifier, use `seatAssigment` instead. */
  seat?: string;
  /** A custome fare class to be used if no `fareClass` applies. Both `fareClass` and `customFareClass` may not be set. */
  customFareClass?: LocalizedString;
  /** The passenger's seat assignment. Eg. "no specific seat". To be used when there is no specific identifier to use in `seat`. */
  seatAssignment?: LocalizedString;
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
}

export const TicketSeat: Schema.Schema<TicketSeat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seat: Schema.optional(Schema.String),
    customFareClass: Schema.optional(LocalizedString),
    seatAssignment: Schema.optional(LocalizedString),
    fareClass: Schema.optional(Schema.String),
    coach: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketSeat" });

export interface TicketLeg {
  /** The train or ship name/number that the passsenger needs to board. */
  carriage?: string;
  /** The reserved seat for the passenger(s). If more than one seat is to be specified then use the `ticketSeats` field instead. Both `ticketSeat` and `ticketSeats` may not be set. */
  ticketSeat?: TicketSeat;
  /** The name of the origin station. This is required if `desinationName` is present or if `originStationCode` is not present. */
  originName?: LocalizedString;
  /** The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the destination station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  arrivalDateTime?: string;
  /** The name of the transit operator that is operating this leg of a trip. */
  transitOperatorName?: LocalizedString;
  /** Short description/name of the fare for this leg of travel. Eg "Anytime Single Use". */
  fareName?: LocalizedString;
  /** The zone of boarding within the platform. */
  zone?: string;
  /** The destination name. */
  destinationName?: LocalizedString;
  /** The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the origin station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
  departureDateTime?: string;
  /** The platform or gate where the passenger can board the carriage. */
  platform?: string;
  /** Terminus station or destination of the train/bus/etc. */
  transitTerminusName?: LocalizedString;
  /** The origin station code. This is required if `destinationStationCode` is present or if `originName` is not present. */
  originStationCode?: string;
  /** The reserved seat for the passenger(s). If only one seat is to be specified then use the `ticketSeat` field instead. Both `ticketSeat` and `ticketSeats` may not be set. */
  ticketSeats?: ReadonlyArray<TicketSeat>;
  /** The destination station code. */
  destinationStationCode?: string;
}

export const TicketLeg: Schema.Schema<TicketLeg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    carriage: Schema.optional(Schema.String),
    ticketSeat: Schema.optional(TicketSeat),
    originName: Schema.optional(LocalizedString),
    arrivalDateTime: Schema.optional(Schema.String),
    transitOperatorName: Schema.optional(LocalizedString),
    fareName: Schema.optional(LocalizedString),
    zone: Schema.optional(Schema.String),
    destinationName: Schema.optional(LocalizedString),
    departureDateTime: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    transitTerminusName: Schema.optional(LocalizedString),
    originStationCode: Schema.optional(Schema.String),
    ticketSeats: Schema.optional(Schema.Array(TicketSeat)),
    destinationStationCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketLeg" });

export interface TransitObject {
  /** A custom concession category to use when `concessionCategory` does not provide the right option. Both `concessionCategory` and `customConcessionCategory` may not be set. */
  customConcessionCategory?: LocalizedString;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
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
  /** Information about what kind of restrictions there are on using this ticket. For example, which days of the week it must be used, or which routes are allowed to be taken. */
  ticketRestrictions?: TicketRestrictions;
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Purchase details for this ticket. */
  purchaseDetails?: PurchaseDetails;
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
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination. */
  tripType?:
    | "TRIP_TYPE_UNSPECIFIED"
    | "ROUND_TRIP"
    | "roundTrip"
    | "ONE_WAY"
    | "oneWay"
    | (string & {});
  /** The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field. */
  passengerNames?: string;
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** Deprecated */
  version?: string;
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
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this transit object. If a user had saved this transit card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** Device context associated with the object. */
  deviceContext?: DeviceContext;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: TransitClass;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The activation status for the object. Required if the class has `activationOptions` set. */
  activationStatus?: ActivationStatus;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set. */
  ticketLegs?: ReadonlyArray<TicketLeg>;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** A custom status to use for the ticket status value when `ticketStatus` does not provide the right option. Both `ticketStatus` and `customTicketStatus` may not be set. */
  customTicketStatus?: LocalizedString;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** The number of passengers. */
  passengerType?:
    | "PASSENGER_TYPE_UNSPECIFIED"
    | "SINGLE_PASSENGER"
    | "singlePassenger"
    | "MULTIPLE_PASSENGERS"
    | "multiplePassengers"
    | (string & {});
  /** A single ticket leg contains departure and arrival information along with boarding and seating information. If more than one leg is to be specified then use the `ticketLegs` field instead. Both `ticketLeg` and `ticketLegs` may not be set. */
  ticketLeg?: TicketLeg;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** This id is used to group tickets together if the user has saved multiple tickets for the same trip. */
  tripId?: string;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** The number of the ticket. This is a unique identifier for the ticket in the transit operator's system. */
  ticketNumber?: string;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
}

export const TransitObject: Schema.Schema<TransitObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customConcessionCategory: Schema.optional(LocalizedString),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    disableExpirationNotification: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    ticketRestrictions: Schema.optional(TicketRestrictions),
    rotatingBarcode: Schema.optional(RotatingBarcode),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    purchaseDetails: Schema.optional(PurchaseDetails),
    concessionCategory: Schema.optional(Schema.String),
    hexBackgroundColor: Schema.optional(Schema.String),
    infoModuleData: Schema.optional(InfoModuleData),
    tripType: Schema.optional(Schema.String),
    passengerNames: Schema.optional(Schema.String),
    hasLinkedDevice: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
    ticketStatus: Schema.optional(Schema.String),
    linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
    deviceContext: Schema.optional(DeviceContext),
    appLinkData: Schema.optional(AppLinkData),
    classReference: Schema.optional(TransitClass),
    validTimeInterval: Schema.optional(TimeInterval),
    passConstraints: Schema.optional(PassConstraints),
    saveRestrictions: Schema.optional(SaveRestrictions),
    groupingInfo: Schema.optional(GroupingInfo),
    activationStatus: Schema.optional(ActivationStatus),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    ticketLegs: Schema.optional(Schema.Array(TicketLeg)),
    classId: Schema.optional(Schema.String),
    customTicketStatus: Schema.optional(LocalizedString),
    barcode: Schema.optional(Barcode),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    passengerType: Schema.optional(Schema.String),
    ticketLeg: Schema.optional(TicketLeg),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    messages: Schema.optional(Schema.Array(Message)),
    smartTapRedemptionValue: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    tripId: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
    ticketNumber: Schema.optional(Schema.String),
    hasUsers: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TransitObject" });

export interface TransitObjectAddMessageResponse {
  /** The updated TransitObject resource. */
  resource?: TransitObject;
}

export const TransitObjectAddMessageResponse: Schema.Schema<TransitObjectAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(TransitObject),
  }).annotate({ identifier: "TransitObjectAddMessageResponse" });

export interface Blobstore2Info {
  /** The blob generation id. */
  blobGeneration?: string;
  /** The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call. */
  readToken?: string;
  /** Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads. */
  downloadReadHandle?: string;
  /** A serialized External Read Token passed from Bigstore -> Scotty for a GCS download. This field must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
  downloadExternalReadToken?: string;
  /** The blob id, e.g., /blobstore/prod/playground/scotty */
  blobId?: string;
  /** Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
  uploadMetadataContainer?: string;
  /** A serialized Object Fragment List Creation Info passed from Bigstore -> Scotty for a GCS upload. This field must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
  uploadFragmentListCreationInfo?: string;
}

export const Blobstore2Info: Schema.Schema<Blobstore2Info> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blobGeneration: Schema.optional(Schema.String),
    readToken: Schema.optional(Schema.String),
    downloadReadHandle: Schema.optional(Schema.String),
    downloadExternalReadToken: Schema.optional(Schema.String),
    blobId: Schema.optional(Schema.String),
    uploadMetadataContainer: Schema.optional(Schema.String),
    uploadFragmentListCreationInfo: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blobstore2Info" });

export interface ObjectId {
  /** Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions */
  generation?: string;
  /** The name of the bucket to which this object belongs. */
  bucketName?: string;
  /** The name of the object. */
  objectName?: string;
}

export const ObjectId: Schema.Schema<ObjectId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.optional(Schema.String),
    bucketName: Schema.optional(Schema.String),
    objectName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectId" });

export interface CompositeMedia {
  /** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
  cosmoBinaryReference?: string;
  /** Size of the data, in bytes */
  length?: string;
  /** Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob. */
  blobstore2Info?: Blobstore2Info;
  /** crc32.c hash for the payload. */
  crc32cHash?: number;
  /** Media data, set if reference_type is INLINE */
  inline?: string;
  /** MD5 hash for the payload. */
  md5Hash?: string;
  /** Describes what the field reference contains. */
  referenceType?:
    | "PATH"
    | "BLOB_REF"
    | "INLINE"
    | "BIGSTORE_REF"
    | "COSMO_BINARY_REFERENCE"
    | (string & {});
  /** SHA-1 hash for the payload. */
  sha1Hash?: string;
  /** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
  blobRef?: string;
  /** Reference to a TI Blob, set if reference_type is BIGSTORE_REF. */
  objectId?: ObjectId;
  /** Path to the data, set if reference_type is PATH */
  path?: string;
}

export const CompositeMedia: Schema.Schema<CompositeMedia> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cosmoBinaryReference: Schema.optional(Schema.String),
    length: Schema.optional(Schema.String),
    blobstore2Info: Schema.optional(Blobstore2Info),
    crc32cHash: Schema.optional(Schema.Number),
    inline: Schema.optional(Schema.String),
    md5Hash: Schema.optional(Schema.String),
    referenceType: Schema.optional(Schema.String),
    sha1Hash: Schema.optional(Schema.String),
    blobRef: Schema.optional(Schema.String),
    objectId: Schema.optional(ObjectId),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompositeMedia" });

export interface OfferClass {
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens. */
  title?: string;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** The title image of the offer. This image is displayed in both the details and list views of the app. */
  titleImage?: Image;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width. */
  heroImage?: Image;
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
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerClass"`. */
  kind?: string;
  /** The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object). */
  homepageUri?: Uri;
  /** The fine print or terms of the offer, such as "20% off any t-shirt at Adam's Apparel." */
  finePrint?: string;
  /** Links module data. If links module data is also defined on the object, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Translated strings for the title. Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens. */
  localizedTitle?: LocalizedString;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens. */
  provider?: string;
  /** Translated strings for the fine_print. */
  localizedFinePrint?: LocalizedString;
  /** The help link for the offer, such as `http://myownpersonaldomain.com/help` */
  helpUri?: Uri;
  /** View Unlock Requirement options for the offer. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Translated strings for the details. */
  localizedDetails?: LocalizedString;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** The wide title image of the offer. When provided, this will be used in place of the title image in the top left of the card view. */
  wideTitleImage?: Image;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
  hexBackgroundColor?: string;
  /** The details of the offer. */
  details?: string;
  /** Translated strings for the provider. Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens. */
  localizedProvider?: LocalizedString;
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
  /** Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  localizedIssuerName?: LocalizedString;
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
  allowMultipleUsersPerObject?: boolean;
  /** Whether or not field updates to this class should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If not specified, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
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
  /** Translated strings for the short title. Recommended maximum length is 20 characters. */
  localizedShortTitle?: LocalizedString;
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  issuerName?: string;
  /** Deprecated. */
  wordMark?: Image;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters. */
  shortTitle?: string;
  /** Deprecated */
  version?: string;
  /** The review comments set by the platform when a class is marked `approved` or `rejected`. */
  review?: Review;
  /** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  enableSmartTap?: boolean;
  /** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
  countryCode?: string;
}

export const OfferClass: Schema.Schema<OfferClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityAnimation: Schema.optional(SecurityAnimation),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    title: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    titleImage: Schema.optional(Image),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    reviewStatus: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    homepageUri: Schema.optional(Uri),
    finePrint: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
    localizedTitle: Schema.optional(LocalizedString),
    messages: Schema.optional(Schema.Array(Message)),
    provider: Schema.optional(Schema.String),
    localizedFinePrint: Schema.optional(LocalizedString),
    helpUri: Schema.optional(Uri),
    viewUnlockRequirement: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    localizedDetails: Schema.optional(LocalizedString),
    redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    wideTitleImage: Schema.optional(Image),
    infoModuleData: Schema.optional(InfoModuleData),
    hexBackgroundColor: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    localizedProvider: Schema.optional(LocalizedString),
    multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
    localizedIssuerName: Schema.optional(LocalizedString),
    callbackOptions: Schema.optional(CallbackOptions),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    allowMultipleUsersPerObject: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    redemptionChannel: Schema.optional(Schema.String),
    localizedShortTitle: Schema.optional(LocalizedString),
    classTemplateInfo: Schema.optional(ClassTemplateInfo),
    issuerName: Schema.optional(Schema.String),
    wordMark: Schema.optional(Image),
    appLinkData: Schema.optional(AppLinkData),
    shortTitle: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    review: Schema.optional(Review),
    enableSmartTap: Schema.optional(Schema.Boolean),
    countryCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "OfferClass" });

export interface ExpiryNotification {
  /** Indicates if the object needs to have expiry notification enabled. */
  enableNotification?: boolean;
}

export const ExpiryNotification: Schema.Schema<ExpiryNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableNotification: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExpiryNotification" });

export interface Notifications {
  /** A notification would be triggered at a specific time before the card expires. */
  expiryNotification?: ExpiryNotification;
  /** A notification would be triggered at a specific time before the card becomes usable. */
  upcomingNotification?: UpcomingNotification;
}

export const Notifications: Schema.Schema<Notifications> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryNotification: Schema.optional(ExpiryNotification),
    upcomingNotification: Schema.optional(UpcomingNotification),
  }).annotate({ identifier: "Notifications" });

export interface GenericObject {
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that. */
  barcode?: Barcode;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. */
  classId?: string;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Banner image displayed on the front of the card if present. The image will be displayed at 100% width. */
  heroImage?: Image;
  /** Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  id?: string;
  /** Required. The title of the pass, such as "50% off coupon" or "Library card" or "Voucher". This field is required and appears in the title row of the pass detail view. */
  header?: LocalizedString;
  /** The notification settings that are enabled for this object. */
  notifications?: Notifications;
  /** Links module data. If `linksModuleData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  linksModuleData?: LinksModuleData;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** Required. The header of the pass. This is usually the Business name such as "XXX Gym", "AAA Insurance". This field is required and appears in the header row at the very top of the pass. */
  cardTitle?: LocalizedString;
  /** Image module data. Only one of the image from class and one from object level will be rendered when both set. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
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
  /** The rotating barcode settings/details. */
  rotatingBarcode?: RotatingBarcode;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
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
  /** The logo image of the pass. This image is displayed in the card detail view in upper left, and also on the list/thumbnail view. If the logo is not present, the first letter of `cardTitle` would be shown as logo. */
  logo?: Image;
  /** The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google. */
  hexBackgroundColor?: string;
  /** The wide logo of the pass. When provided, this will be used in place of the logo in the top left of the card view. */
  wideLogo?: Image;
  /** The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view. */
  subheader?: LocalizedString;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this generic object. If a user had saved this generic card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices. */
  validTimeInterval?: TimeInterval;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
}

export const GenericObject: Schema.Schema<GenericObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupingInfo: Schema.optional(GroupingInfo),
    barcode: Schema.optional(Barcode),
    classId: Schema.optional(Schema.String),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    heroImage: Schema.optional(Image),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    smartTapRedemptionValue: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    id: Schema.optional(Schema.String),
    header: Schema.optional(LocalizedString),
    notifications: Schema.optional(Notifications),
    linksModuleData: Schema.optional(LinksModuleData),
    hasUsers: Schema.optional(Schema.Boolean),
    cardTitle: Schema.optional(LocalizedString),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    genericType: Schema.optional(Schema.String),
    rotatingBarcode: Schema.optional(RotatingBarcode),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    state: Schema.optional(Schema.String),
    logo: Schema.optional(Image),
    hexBackgroundColor: Schema.optional(Schema.String),
    wideLogo: Schema.optional(Image),
    subheader: Schema.optional(LocalizedString),
    linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
    validTimeInterval: Schema.optional(TimeInterval),
    passConstraints: Schema.optional(PassConstraints),
    saveRestrictions: Schema.optional(SaveRestrictions),
    appLinkData: Schema.optional(AppLinkData),
  }).annotate({ identifier: "GenericObject" });

export interface LoyaltyPointsBalance {
  /** The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  double?: number;
  /** The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  string?: string;
  /** The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  int?: number;
  /** The money form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
  money?: Money;
}

export const LoyaltyPointsBalance: Schema.Schema<LoyaltyPointsBalance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    double: Schema.optional(Schema.Number),
    string: Schema.optional(Schema.String),
    int: Schema.optional(Schema.Number),
    money: Schema.optional(Money),
  }).annotate({ identifier: "LoyaltyPointsBalance" });

export interface LoyaltyPoints {
  /** The loyalty points label, such as "Points". Recommended maximum length is 9 characters. */
  label?: string;
  /** Translated strings for the label. Recommended maximum length is 9 characters. */
  localizedLabel?: LocalizedString;
  /** The account holder's loyalty point balance, such as "500" or "$10.00". Recommended maximum length is 7 characters. This is a required field of `loyaltyPoints` and `secondaryLoyaltyPoints`. */
  balance?: LoyaltyPointsBalance;
}

export const LoyaltyPoints: Schema.Schema<LoyaltyPoints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    localizedLabel: Schema.optional(LocalizedString),
    balance: Schema.optional(LoyaltyPointsBalance),
  }).annotate({ identifier: "LoyaltyPoints" });

export interface LoyaltyObject {
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
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
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: LoyaltyClass;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Deprecated */
  version?: string;
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** The loyalty account identifier. Recommended maximum length is 20 characters. */
  accountId?: string;
  /** The loyalty reward points label, balance, and type. */
  loyaltyPoints?: LoyaltyPoints;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this loyalty object. If a user had saved this loyalty card, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID. identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** The secondary loyalty reward points label, balance, and type. Shown in addition to the primary loyalty points. */
  secondaryLoyaltyPoints?: LoyaltyPoints;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyObject"`. */
  kind?: string;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. */
  linkedOfferIds?: ReadonlyArray<string>;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present. */
  smartTapRedemptionValue?: string;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** The loyalty account holder name, such as "John Smith." Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
  accountName?: string;
}

export const LoyaltyObject: Schema.Schema<LoyaltyObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rotatingBarcode: Schema.optional(RotatingBarcode),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    state: Schema.optional(Schema.String),
    infoModuleData: Schema.optional(InfoModuleData),
    disableExpirationNotification: Schema.optional(Schema.Boolean),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    notifyPreference: Schema.optional(Schema.String),
    classReference: Schema.optional(LoyaltyClass),
    validTimeInterval: Schema.optional(TimeInterval),
    passConstraints: Schema.optional(PassConstraints),
    saveRestrictions: Schema.optional(SaveRestrictions),
    appLinkData: Schema.optional(AppLinkData),
    version: Schema.optional(Schema.String),
    hasLinkedDevice: Schema.optional(Schema.Boolean),
    accountId: Schema.optional(Schema.String),
    loyaltyPoints: Schema.optional(LoyaltyPoints),
    linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
    barcode: Schema.optional(Barcode),
    classId: Schema.optional(Schema.String),
    secondaryLoyaltyPoints: Schema.optional(LoyaltyPoints),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    groupingInfo: Schema.optional(GroupingInfo),
    kind: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
    linkedOfferIds: Schema.optional(Schema.Array(Schema.String)),
    hasUsers: Schema.optional(Schema.Boolean),
    messages: Schema.optional(Schema.Array(Message)),
    smartTapRedemptionValue: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    accountName: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoyaltyObject" });

export interface OfferObject {
  /** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
  /** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
  disableExpirationNotification?: boolean;
  /** Whether or not field updates to this object should trigger notifications. When set to NOTIFY, we will attempt to trigger a field update notification to users. These notifications will only be sent to users if the field is part of an allowlist. If set to DO_NOT_NOTIFY or NOTIFICATION_SETTINGS_UNSPECIFIED, no notification will be triggered. This setting is ephemeral and needs to be set with each PATCH or UPDATE request, otherwise a notification will not be triggered. */
  notifyPreference?:
    | "NOTIFICATION_SETTINGS_FOR_UPDATES_UNSPECIFIED"
    | "NOTIFY_ON_UPDATE"
    | (string & {});
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
  /** The rotating barcode type and value. */
  rotatingBarcode?: RotatingBarcode;
  /** Merchant locations. There is a maximum of ten on the object. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Deprecated. Use textModulesData instead. */
  infoModuleData?: InfoModuleData;
  /** Deprecated */
  version?: string;
  /** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
  hasLinkedDevice?: boolean;
  /** linked_object_ids are a list of other objects such as event ticket, loyalty, offer, generic, giftcard, transit and boarding pass that should be automatically attached to this offer object. If a user had saved this offer, then these linked_object_ids would be automatically pushed to the user's wallet (unless they turned off the setting to receive such linked passes). Make sure that objects present in linked_object_ids are already inserted - if not, calls would fail. Once linked, the linked objects cannot be unlinked. You cannot link objects belonging to another issuer. There is a limit to the number of objects that can be linked to a single object. After the limit is reached, new linked objects in the call will be ignored silently. Object IDs should follow the format issuer ID.identifier where the former is issued by Google and the latter is chosen by you. */
  linkedObjectIds?: ReadonlyArray<string>;
  /** A copy of the inherited fields of the parent class. These fields are retrieved during a GET. */
  classReference?: OfferClass;
  /** The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed. */
  validTimeInterval?: TimeInterval;
  /** Pass constraints for the object. Includes limiting NFC and screenshot behaviors. */
  passConstraints?: PassConstraints;
  /** Restrictions on the object that needs to be verified before the user tries to save the pass. Note that this restrictions will only be applied during save time. If the restrictions changed after a user saves the pass, the new restrictions will not be applied to an already saved pass. */
  saveRestrictions?: SaveRestrictions;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding class only object AppLinkData will be displayed. */
  appLinkData?: AppLinkData;
  /** Information that controls how passes are grouped together. */
  groupingInfo?: GroupingInfo;
  /** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerObject"`. */
  kind?: string;
  /** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
  classId?: string;
  /** The barcode type and value. */
  barcode?: Barcode;
  /** Optional value added module data. Maximum of fifteen on the object. For a pass only fifteen will be displayed. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
  textModulesData?: ReadonlyArray<TextModuleData>;
  /** Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed. */
  heroImage?: Image;
  /** Note: This field is currently not supported to trigger geo notifications. */
  locations?: ReadonlyArray<LatLongPoint>;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
  smartTapRedemptionValue?: string;
  /** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
  id?: string;
  /** Links module data. If links module data is also defined on the class, both will be displayed. */
  linksModuleData?: LinksModuleData;
  /** Indicates if the object has users. This field is set by the platform. */
  hasUsers?: boolean;
}

export const OfferObject: Schema.Schema<OfferObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
    disableExpirationNotification: Schema.optional(Schema.Boolean),
    notifyPreference: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    rotatingBarcode: Schema.optional(RotatingBarcode),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    infoModuleData: Schema.optional(InfoModuleData),
    version: Schema.optional(Schema.String),
    hasLinkedDevice: Schema.optional(Schema.Boolean),
    linkedObjectIds: Schema.optional(Schema.Array(Schema.String)),
    classReference: Schema.optional(OfferClass),
    validTimeInterval: Schema.optional(TimeInterval),
    passConstraints: Schema.optional(PassConstraints),
    saveRestrictions: Schema.optional(SaveRestrictions),
    appLinkData: Schema.optional(AppLinkData),
    groupingInfo: Schema.optional(GroupingInfo),
    kind: Schema.optional(Schema.String),
    classId: Schema.optional(Schema.String),
    barcode: Schema.optional(Barcode),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    heroImage: Schema.optional(Image),
    locations: Schema.optional(Schema.Array(LatLongPoint)),
    messages: Schema.optional(Schema.Array(Message)),
    smartTapRedemptionValue: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    linksModuleData: Schema.optional(LinksModuleData),
    hasUsers: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OfferObject" });

export interface GenericClass {
  /** Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display. */
  classTemplateInfo?: ClassTemplateInfo;
  /** Links module data. If `linksModuleData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  linksModuleData?: LinksModuleData;
  /** Optional app or website link that will be displayed as a button on the front of the pass. If AppLinkData is provided for the corresponding object that will be used instead. */
  appLinkData?: AppLinkData;
  /** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
  messages?: ReadonlyArray<Message>;
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  enableSmartTap?: boolean;
  /** View Unlock Requirement options for the generic pass. */
  viewUnlockRequirement?:
    | "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
    | "UNLOCK_NOT_REQUIRED"
    | "UNLOCK_REQUIRED_TO_VIEW"
    | (string & {});
  /** Required. The unique identifier for the class. This ID must be unique across all from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
  id?: string;
  /** Optional information about the security animation. If this is set a security animation will be rendered on pass details. */
  securityAnimation?: SecurityAnimation;
  /** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
  redemptionIssuers?: ReadonlyArray<string>;
  /** Optional value added module data. Maximum of fifteen on the class. For a pass only fifteen will be displayed, prioritizing those from the object. */
  valueAddedModuleData?: ReadonlyArray<ValueAddedModuleData>;
  /** Merchant locations. There is a maximum of ten on the class. Any additional MerchantLocations added beyond the 10 will be rejected. These locations will trigger a notification when a user enters within a Google-set radius of the point. This field replaces the deprecated LatLongPoints. */
  merchantLocations?: ReadonlyArray<MerchantLocation>;
  /** Text module data. If `textModulesData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
  textModulesData?: ReadonlyArray<TextModuleData>;
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
  /** Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback. */
  callbackOptions?: CallbackOptions;
  /** Image module data. If `imageModulesData` is also defined on the object, both will be displayed. Only one of the image from class and one from object level will be rendered when both set. */
  imageModulesData?: ReadonlyArray<ImageModuleData>;
}

export const GenericClass: Schema.Schema<GenericClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classTemplateInfo: Schema.optional(ClassTemplateInfo),
    linksModuleData: Schema.optional(LinksModuleData),
    appLinkData: Schema.optional(AppLinkData),
    messages: Schema.optional(Schema.Array(Message)),
    enableSmartTap: Schema.optional(Schema.Boolean),
    viewUnlockRequirement: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    securityAnimation: Schema.optional(SecurityAnimation),
    redemptionIssuers: Schema.optional(Schema.Array(Schema.String)),
    valueAddedModuleData: Schema.optional(Schema.Array(ValueAddedModuleData)),
    merchantLocations: Schema.optional(Schema.Array(MerchantLocation)),
    textModulesData: Schema.optional(Schema.Array(TextModuleData)),
    multipleDevicesAndHoldersAllowedStatus: Schema.optional(Schema.String),
    callbackOptions: Schema.optional(CallbackOptions),
    imageModulesData: Schema.optional(Schema.Array(ImageModuleData)),
  }).annotate({ identifier: "GenericClass" });

export interface Resources {
  /** A list of flight classes. */
  flightClasses?: ReadonlyArray<FlightClass>;
  /** A list of offer classes. */
  offerClasses?: ReadonlyArray<OfferClass>;
  /** A list of generic objects. */
  genericObjects?: ReadonlyArray<GenericObject>;
  /** A list of event ticket classes. */
  eventTicketClasses?: ReadonlyArray<EventTicketClass>;
  /** A list of flight objects. */
  flightObjects?: ReadonlyArray<FlightObject>;
  /** A list of loyalty objects. */
  loyaltyObjects?: ReadonlyArray<LoyaltyObject>;
  /** A list of transit classes. */
  transitClasses?: ReadonlyArray<TransitClass>;
  /** A list of gift card classes. */
  giftCardClasses?: ReadonlyArray<GiftCardClass>;
  /** A list of loyalty classes. */
  loyaltyClasses?: ReadonlyArray<LoyaltyClass>;
  /** A list of event ticket objects. */
  eventTicketObjects?: ReadonlyArray<EventTicketObject>;
  /** A list of offer objects. */
  offerObjects?: ReadonlyArray<OfferObject>;
  /** A list of transit objects. */
  transitObjects?: ReadonlyArray<TransitObject>;
  /** A list of gift card objects. */
  giftCardObjects?: ReadonlyArray<GiftCardObject>;
  /** A list of generic classes. */
  genericClasses?: ReadonlyArray<GenericClass>;
}

export const Resources: Schema.Schema<Resources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flightClasses: Schema.optional(Schema.Array(FlightClass)),
    offerClasses: Schema.optional(Schema.Array(OfferClass)),
    genericObjects: Schema.optional(Schema.Array(GenericObject)),
    eventTicketClasses: Schema.optional(Schema.Array(EventTicketClass)),
    flightObjects: Schema.optional(Schema.Array(FlightObject)),
    loyaltyObjects: Schema.optional(Schema.Array(LoyaltyObject)),
    transitClasses: Schema.optional(Schema.Array(TransitClass)),
    giftCardClasses: Schema.optional(Schema.Array(GiftCardClass)),
    loyaltyClasses: Schema.optional(Schema.Array(LoyaltyClass)),
    eventTicketObjects: Schema.optional(Schema.Array(EventTicketObject)),
    offerObjects: Schema.optional(Schema.Array(OfferObject)),
    transitObjects: Schema.optional(Schema.Array(TransitObject)),
    giftCardObjects: Schema.optional(Schema.Array(GiftCardObject)),
    genericClasses: Schema.optional(Schema.Array(GenericClass)),
  }).annotate({ identifier: "Resources" });

export interface TransitObjectUploadRotatingBarcodeValuesResponse {}

export const TransitObjectUploadRotatingBarcodeValuesResponse: Schema.Schema<TransitObjectUploadRotatingBarcodeValuesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TransitObjectUploadRotatingBarcodeValuesResponse",
  });

export interface AddMessageRequest {
  message?: Message;
}

export const AddMessageRequest: Schema.Schema<AddMessageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Message),
  }).annotate({ identifier: "AddMessageRequest" });

export interface OfferClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<OfferClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const OfferClassListResponse: Schema.Schema<OfferClassListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(OfferClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "OfferClassListResponse" });

export interface EventTicketClassAddMessageResponse {
  /** The updated EventTicketClass resource. */
  resource?: EventTicketClass;
}

export const EventTicketClassAddMessageResponse: Schema.Schema<EventTicketClassAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(EventTicketClass),
  }).annotate({ identifier: "EventTicketClassAddMessageResponse" });

export interface DownloadParameters {
  /** A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client. */
  allowGzipCompression?: boolean;
  /** Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty. */
  ignoreRange?: boolean;
}

export const DownloadParameters: Schema.Schema<DownloadParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowGzipCompression: Schema.optional(Schema.Boolean),
    ignoreRange: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DownloadParameters" });

export interface GenericObjectAddMessageResponse {
  /** The updated GenericObject resource. */
  resource?: GenericObject;
}

export const GenericObjectAddMessageResponse: Schema.Schema<GenericObjectAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GenericObject),
  }).annotate({ identifier: "GenericObjectAddMessageResponse" });

export interface OfferObjectAddMessageResponse {
  /** The updated OfferObject resource. */
  resource?: OfferObject;
}

export const OfferObjectAddMessageResponse: Schema.Schema<OfferObjectAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(OfferObject),
  }).annotate({ identifier: "OfferObjectAddMessageResponse" });

export interface DiffChecksumsResponse {
  /** The total size of the server object. */
  objectSizeBytes?: string;
  /** Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol. */
  checksumsLocation?: CompositeMedia;
  /** The chunk size of checksums. Must be a multiple of 256KB. */
  chunkSizeBytes?: string;
  /** If set, calculate the checksums based on the contents and return them to the caller. */
  objectLocation?: CompositeMedia;
  /** The object version of the object the checksums are being returned for. */
  objectVersion?: string;
}

export const DiffChecksumsResponse: Schema.Schema<DiffChecksumsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectSizeBytes: Schema.optional(Schema.String),
    checksumsLocation: Schema.optional(CompositeMedia),
    chunkSizeBytes: Schema.optional(Schema.String),
    objectLocation: Schema.optional(CompositeMedia),
    objectVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiffChecksumsResponse" });

export interface EventTicketClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<EventTicketClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const EventTicketClassListResponse: Schema.Schema<EventTicketClassListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(EventTicketClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "EventTicketClassListResponse" });

export interface DiffUploadRequest {
  /** The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in. */
  objectVersion?: string;
  /** The location of the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. */
  objectInfo?: CompositeMedia;
  /** The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol. */
  checksumsInfo?: CompositeMedia;
}

export const DiffUploadRequest: Schema.Schema<DiffUploadRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectVersion: Schema.optional(Schema.String),
    objectInfo: Schema.optional(CompositeMedia),
    checksumsInfo: Schema.optional(CompositeMedia),
  }).annotate({ identifier: "DiffUploadRequest" });

export interface DiffDownloadResponse {
  /** The original object location. */
  objectLocation?: CompositeMedia;
}

export const DiffDownloadResponse: Schema.Schema<DiffDownloadResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectLocation: Schema.optional(CompositeMedia),
  }).annotate({ identifier: "DiffDownloadResponse" });

export interface DiffVersionResponse {
  /** The version of the object stored at the server. */
  objectVersion?: string;
  /** The total size of the server object. */
  objectSizeBytes?: string;
}

export const DiffVersionResponse: Schema.Schema<DiffVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectVersion: Schema.optional(Schema.String),
    objectSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiffVersionResponse" });

export interface DiffUploadResponse {
  /** The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification. */
  originalObject?: CompositeMedia;
  /** The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload. */
  objectVersion?: string;
}

export const DiffUploadResponse: Schema.Schema<DiffUploadResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalObject: Schema.optional(CompositeMedia),
    objectVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiffUploadResponse" });

export interface Media {
  /** Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time. */
  algorithm?: string;
  /** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
  blobRef?: string;
  /** Original file name */
  filename?: string;
  /** Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA. */
  mediaId?: string;
  /** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
  cosmoBinaryReference?: string;
  /** Size of the data, in bytes */
  length?: string;
  /** Set if reference_type is DIFF_UPLOAD_REQUEST. */
  diffUploadRequest?: DiffUploadRequest;
  /** A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified. */
  compositeMedia?: ReadonlyArray<CompositeMedia>;
  /** Reference to a TI Blob, set if reference_type is BIGSTORE_REF. */
  objectId?: ObjectId;
  /** Extended content type information provided for Scotty uploads. */
  contentTypeInfo?: ContentTypeInfo;
  /** MIME type of the data */
  contentType?: string;
  /** Time at which the media data was last updated, in milliseconds since UNIX epoch */
  timestamp?: string;
  /** Scotty-provided SHA512 hash for an upload. */
  sha512Hash?: string;
  /** For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification. */
  hashVerified?: boolean;
  /** Use object_id instead. */
  bigstoreObjectRef?: string;
  /** Parameters for a media download. */
  downloadParameters?: DownloadParameters;
  /** Set if reference_type is DIFF_DOWNLOAD_RESPONSE. */
  diffDownloadResponse?: DiffDownloadResponse;
  /** Scotty-provided MD5 hash for an upload. */
  md5Hash?: string;
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
  /** Set if reference_type is DIFF_VERSION_RESPONSE. */
  diffVersionResponse?: DiffVersionResponse;
  /** Scotty-provided SHA1 hash for an upload. */
  sha1Hash?: string;
  /** |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence. */
  isPotentialRetry?: boolean;
  /** Media data, set if reference_type is INLINE */
  inline?: string;
  /** Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob. */
  blobstore2Info?: Blobstore2Info;
  /** Set if reference_type is DIFF_UPLOAD_RESPONSE. */
  diffUploadResponse?: DiffUploadResponse;
  /** Path to the data, set if reference_type is PATH */
  path?: string;
  /** Scotty-provided SHA256 hash for an upload. */
  sha256Hash?: string;
  /** A unique fingerprint/version id for the media data */
  token?: string;
  /** Set if reference_type is DIFF_CHECKSUMS_RESPONSE. */
  diffChecksumsResponse?: DiffChecksumsResponse;
  /** Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/blobstore2/api/scotty/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media. */
  hash?: string;
  /** For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported. */
  crc32cHash?: number;
}

export const Media: Schema.Schema<Media> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    algorithm: Schema.optional(Schema.String),
    blobRef: Schema.optional(Schema.String),
    filename: Schema.optional(Schema.String),
    mediaId: Schema.optional(Schema.String),
    cosmoBinaryReference: Schema.optional(Schema.String),
    length: Schema.optional(Schema.String),
    diffUploadRequest: Schema.optional(DiffUploadRequest),
    compositeMedia: Schema.optional(Schema.Array(CompositeMedia)),
    objectId: Schema.optional(ObjectId),
    contentTypeInfo: Schema.optional(ContentTypeInfo),
    contentType: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    sha512Hash: Schema.optional(Schema.String),
    hashVerified: Schema.optional(Schema.Boolean),
    bigstoreObjectRef: Schema.optional(Schema.String),
    downloadParameters: Schema.optional(DownloadParameters),
    diffDownloadResponse: Schema.optional(DiffDownloadResponse),
    md5Hash: Schema.optional(Schema.String),
    referenceType: Schema.optional(Schema.String),
    diffVersionResponse: Schema.optional(DiffVersionResponse),
    sha1Hash: Schema.optional(Schema.String),
    isPotentialRetry: Schema.optional(Schema.Boolean),
    inline: Schema.optional(Schema.String),
    blobstore2Info: Schema.optional(Blobstore2Info),
    diffUploadResponse: Schema.optional(DiffUploadResponse),
    path: Schema.optional(Schema.String),
    sha256Hash: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    diffChecksumsResponse: Schema.optional(DiffChecksumsResponse),
    hash: Schema.optional(Schema.String),
    crc32cHash: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Media" });

export interface OfferObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<OfferObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const OfferObjectListResponse: Schema.Schema<OfferObjectListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(OfferObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "OfferObjectListResponse" });

export interface UploadPrivateImageResponse {
  /** Unique ID of the uploaded image to be referenced later in Image.private_image_id. */
  privateImageId?: string;
}

export const UploadPrivateImageResponse: Schema.Schema<UploadPrivateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateImageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadPrivateImageResponse" });

export interface JwtInsertResponse {
  /** Data that corresponds to the ids of the provided classes and objects in the JWT. resources will only include the non-empty arrays (i.e. if the JWT only includes eventTicketObjects, then that is the only field that will be present in resources). */
  resources?: Resources;
  /** A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account. */
  saveUri?: string;
}

export const JwtInsertResponse: Schema.Schema<JwtInsertResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Resources),
    saveUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "JwtInsertResponse" });

export interface MediaRequestInfo {
  /** The type of notification received from Scotty. */
  notificationType?:
    | "START"
    | "PROGRESS"
    | "END"
    | "RESPONSE_SENT"
    | "ERROR"
    | (string & {});
  /** Whether the total bytes field contains an estimated data. */
  totalBytesIsEstimated?: boolean;
  /** Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information. */
  diffObjectVersion?: string;
  /** The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929 */
  finalStatus?: number;
  /** The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange() */
  requestReceivedParamsServingInfo?: string;
  /** The number of current bytes uploaded or downloaded. */
  currentBytes?: string;
  /** Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
  customData?: string;
  /** The physical headers provided by RequestReceivedParameters in Scotty request. type is uploader_service.KeyValuePairs. */
  physicalHeaders?: string;
  /** The Scotty request ID. */
  requestId?: string;
  /** The total size of the file. */
  totalBytes?: string;
}

export const MediaRequestInfo: Schema.Schema<MediaRequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationType: Schema.optional(Schema.String),
    totalBytesIsEstimated: Schema.optional(Schema.Boolean),
    diffObjectVersion: Schema.optional(Schema.String),
    finalStatus: Schema.optional(Schema.Number),
    requestReceivedParamsServingInfo: Schema.optional(Schema.String),
    currentBytes: Schema.optional(Schema.String),
    customData: Schema.optional(Schema.String),
    physicalHeaders: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    totalBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "MediaRequestInfo" });

export interface TransitObjectUploadRotatingBarcodeValuesRequest {
  /** Extra information about the uploaded media. */
  mediaRequestInfo?: MediaRequestInfo;
  /** A reference to the rotating barcode values payload that was uploaded. */
  blob?: Media;
}

export const TransitObjectUploadRotatingBarcodeValuesRequest: Schema.Schema<TransitObjectUploadRotatingBarcodeValuesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaRequestInfo: Schema.optional(MediaRequestInfo),
    blob: Schema.optional(Media),
  }).annotate({
    identifier: "TransitObjectUploadRotatingBarcodeValuesRequest",
  });

export interface GiftCardObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GiftCardObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const GiftCardObjectListResponse: Schema.Schema<GiftCardObjectListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(GiftCardObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "GiftCardObjectListResponse" });

export interface TransitClassAddMessageResponse {
  /** The updated TransitClass resource. */
  resource?: TransitClass;
}

export const TransitClassAddMessageResponse: Schema.Schema<TransitClassAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(TransitClass),
  }).annotate({ identifier: "TransitClassAddMessageResponse" });

export interface TransitObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<TransitObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const TransitObjectListResponse: Schema.Schema<TransitObjectListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(TransitObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "TransitObjectListResponse" });

export interface OfferClassAddMessageResponse {
  /** The updated OfferClass resource. */
  resource?: OfferClass;
}

export const OfferClassAddMessageResponse: Schema.Schema<OfferClassAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(OfferClass),
  }).annotate({ identifier: "OfferClassAddMessageResponse" });

export interface Permissions {
  /** ID of the issuer the list of permissions refer to. */
  issuerId?: string;
  /** The complete list of permissions for the issuer account. */
  permissions?: ReadonlyArray<Permission>;
}

export const Permissions: Schema.Schema<Permissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuerId: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(Permission)),
  }).annotate({ identifier: "Permissions" });

export interface LoyaltyObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<LoyaltyObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const LoyaltyObjectListResponse: Schema.Schema<LoyaltyObjectListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(LoyaltyObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "LoyaltyObjectListResponse" });

export interface IssuerContactInfo {
  /** The primary contact phone number. */
  phone?: string;
  /** The primary contact email address. */
  email?: string;
  /** Email addresses which will receive alerts. */
  alertsEmails?: ReadonlyArray<string>;
  /** The primary contact name. */
  name?: string;
}

export const IssuerContactInfo: Schema.Schema<IssuerContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phone: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    alertsEmails: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "IssuerContactInfo" });

export interface Issuer {
  /** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
  smartTapMerchantData?: SmartTapMerchantData;
  /** Issuer contact information. */
  contactInfo?: IssuerContactInfo;
  /** The account name of the issuer. */
  name?: string;
  /** URL for the issuer's home page. */
  homepageUrl?: string;
  /** The unique identifier for an issuer account. This is automatically generated when the issuer is inserted. */
  issuerId?: string;
  /** Allows the issuer to provide their callback settings. */
  callbackOptions?: CallbackOptions;
}

export const Issuer: Schema.Schema<Issuer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smartTapMerchantData: Schema.optional(SmartTapMerchantData),
    contactInfo: Schema.optional(IssuerContactInfo),
    name: Schema.optional(Schema.String),
    homepageUrl: Schema.optional(Schema.String),
    issuerId: Schema.optional(Schema.String),
    callbackOptions: Schema.optional(CallbackOptions),
  }).annotate({ identifier: "Issuer" });

export interface UploadPrivateImageRequest {}

export const UploadPrivateImageRequest: Schema.Schema<UploadPrivateImageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadPrivateImageRequest",
  });

export interface JwtResource {
  /** Required. A string representing a JWT of the format described at https://developers.google.com/wallet/reference/rest/v1/Jwt */
  jwt?: string;
}

export const JwtResource: Schema.Schema<JwtResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jwt: Schema.optional(Schema.String),
  }).annotate({ identifier: "JwtResource" });

export interface GenericClassAddMessageResponse {
  /** The updated EventTicketClass resource. */
  resource?: GenericClass;
}

export const GenericClassAddMessageResponse: Schema.Schema<GenericClassAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GenericClass),
  }).annotate({ identifier: "GenericClassAddMessageResponse" });

export interface LoyaltyObjectAddMessageResponse {
  /** The updated LoyaltyObject resource. */
  resource?: LoyaltyObject;
}

export const LoyaltyObjectAddMessageResponse: Schema.Schema<LoyaltyObjectAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(LoyaltyObject),
  }).annotate({ identifier: "LoyaltyObjectAddMessageResponse" });

export interface LoyaltyClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<LoyaltyClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const LoyaltyClassListResponse: Schema.Schema<LoyaltyClassListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(LoyaltyClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "LoyaltyClassListResponse" });

export interface GenericClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GenericClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const GenericClassListResponse: Schema.Schema<GenericClassListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(GenericClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "GenericClassListResponse" });

export interface LoyaltyClassAddMessageResponse {
  /** The updated LoyaltyClass resource. */
  resource?: LoyaltyClass;
}

export const LoyaltyClassAddMessageResponse: Schema.Schema<LoyaltyClassAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(LoyaltyClass),
  }).annotate({ identifier: "LoyaltyClassAddMessageResponse" });

export interface FlightObjectAddMessageResponse {
  /** The updated FlightObject resource. */
  resource?: FlightObject;
}

export const FlightObjectAddMessageResponse: Schema.Schema<FlightObjectAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(FlightObject),
  }).annotate({ identifier: "FlightObjectAddMessageResponse" });

export interface TransitClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<TransitClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const TransitClassListResponse: Schema.Schema<TransitClassListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(TransitClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "TransitClassListResponse" });

export interface GenericObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GenericObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const GenericObjectListResponse: Schema.Schema<GenericObjectListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(GenericObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "GenericObjectListResponse" });

export interface IssuerListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<Issuer>;
}

export const IssuerListResponse: Schema.Schema<IssuerListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Issuer)),
  }).annotate({ identifier: "IssuerListResponse" });

export interface GiftCardClassListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<GiftCardClass>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const GiftCardClassListResponse: Schema.Schema<GiftCardClassListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(GiftCardClass)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "GiftCardClassListResponse" });

export interface SetPassUpdateNoticeResponse {}

export const SetPassUpdateNoticeResponse: Schema.Schema<SetPassUpdateNoticeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SetPassUpdateNoticeResponse",
  });

export interface GiftCardObjectAddMessageResponse {
  /** The updated GiftCardObject resource. */
  resource?: GiftCardObject;
}

export const GiftCardObjectAddMessageResponse: Schema.Schema<GiftCardObjectAddMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GiftCardObject),
  }).annotate({ identifier: "GiftCardObjectAddMessageResponse" });

export interface EventTicketObjectListResponse {
  /** Resources corresponding to the list request. */
  resources?: ReadonlyArray<EventTicketObject>;
  /** Pagination of the response. */
  pagination?: Pagination;
}

export const EventTicketObjectListResponse: Schema.Schema<EventTicketObjectListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(EventTicketObject)),
    pagination: Schema.optional(Pagination),
  }).annotate({ identifier: "EventTicketObjectListResponse" });

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

export type InsertJwtError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts the resources in the JWT. */
export const insertJwt: API.OperationMethod<
  InsertJwtRequest,
  InsertJwtResponse,
  InsertJwtError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertJwtRequest,
  output: InsertJwtResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertOfferclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an offer class with the given ID and properties. */
export const insertOfferclass: API.OperationMethod<
  InsertOfferclassRequest,
  InsertOfferclassResponse,
  InsertOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertOfferclassRequest,
  output: InsertOfferclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOfferclassRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListOfferclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/offerClass" }),
  svc,
) as unknown as Schema.Schema<ListOfferclassRequest>;

export type ListOfferclassResponse = OfferClassListResponse;
export const ListOfferclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferClassListResponse;

export type ListOfferclassError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all offer classes for a given issuer ID. */
export const listOfferclass: API.OperationMethod<
  ListOfferclassRequest,
  ListOfferclassResponse,
  ListOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOfferclassRequest,
  output: ListOfferclassResponse,
  errors: [NotFound, Forbidden],
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

export type PatchOfferclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the offer class referenced by the given class ID. This method supports patch semantics. */
export const patchOfferclass: API.OperationMethod<
  PatchOfferclassRequest,
  PatchOfferclassResponse,
  PatchOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOfferclassRequest,
  output: PatchOfferclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageOfferclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the offer class referenced by the given class ID. */
export const addmessageOfferclass: API.OperationMethod<
  AddmessageOfferclassRequest,
  AddmessageOfferclassResponse,
  AddmessageOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageOfferclassRequest,
  output: AddmessageOfferclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateOfferclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the offer class referenced by the given class ID. */
export const updateOfferclass: API.OperationMethod<
  UpdateOfferclassRequest,
  UpdateOfferclassResponse,
  UpdateOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOfferclassRequest,
  output: UpdateOfferclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetOfferclassError = DefaultErrors | NotFound | Forbidden;

/** Returns the offer class with the given class ID. */
export const getOfferclass: API.OperationMethod<
  GetOfferclassRequest,
  GetOfferclassResponse,
  GetOfferclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOfferclassRequest,
  output: GetOfferclassResponse,
  errors: [NotFound, Forbidden],
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

export type GetEventticketobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns the event ticket object with the given object ID. */
export const getEventticketobject: API.OperationMethod<
  GetEventticketobjectRequest,
  GetEventticketobjectResponse,
  GetEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventticketobjectRequest,
  output: GetEventticketobjectResponse,
  errors: [NotFound, Forbidden],
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

export type AddmessageEventticketobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the event ticket object referenced by the given object ID. */
export const addmessageEventticketobject: API.OperationMethod<
  AddmessageEventticketobjectRequest,
  AddmessageEventticketobjectResponse,
  AddmessageEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageEventticketobjectRequest,
  output: AddmessageEventticketobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateEventticketobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the event ticket object referenced by the given object ID. */
export const updateEventticketobject: API.OperationMethod<
  UpdateEventticketobjectRequest,
  UpdateEventticketobjectResponse,
  UpdateEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventticketobjectRequest,
  output: UpdateEventticketobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type ListEventticketobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all event ticket objects for a given issuer ID. */
export const listEventticketobject: API.OperationMethod<
  ListEventticketobjectRequest,
  ListEventticketobjectResponse,
  ListEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEventticketobjectRequest,
  output: ListEventticketobjectResponse,
  errors: [NotFound, Forbidden],
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

export type ModifylinkedofferobjectsEventticketobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use Auto Linked Passes instead. Modifies linked offer objects for the event ticket object with the given ID. */
export const modifylinkedofferobjectsEventticketobject: API.OperationMethod<
  ModifylinkedofferobjectsEventticketobjectRequest,
  ModifylinkedofferobjectsEventticketobjectResponse,
  ModifylinkedofferobjectsEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifylinkedofferobjectsEventticketobjectRequest,
  output: ModifylinkedofferobjectsEventticketobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type PatchEventticketobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the event ticket object referenced by the given object ID. This method supports patch semantics. */
export const patchEventticketobject: API.OperationMethod<
  PatchEventticketobjectRequest,
  PatchEventticketobjectResponse,
  PatchEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEventticketobjectRequest,
  output: PatchEventticketobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertEventticketobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an event ticket object with the given ID and properties. */
export const insertEventticketobject: API.OperationMethod<
  InsertEventticketobjectRequest,
  InsertEventticketobjectResponse,
  InsertEventticketobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertEventticketobjectRequest,
  output: InsertEventticketobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Provide Google with information about awaiting private pass update. This will allow Google to provide the update notification to the device that currently holds this pass. */
export const setPassUpdateNoticeWalletobjectsV1PrivateContent: API.OperationMethod<
  SetPassUpdateNoticeWalletobjectsV1PrivateContentRequest,
  SetPassUpdateNoticeWalletobjectsV1PrivateContentResponse,
  SetPassUpdateNoticeWalletobjectsV1PrivateContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetPassUpdateNoticeWalletobjectsV1PrivateContentRequest,
  output: SetPassUpdateNoticeWalletobjectsV1PrivateContentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListLoyaltyobjectRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListLoyaltyobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/loyaltyObject" }),
    svc,
  ) as unknown as Schema.Schema<ListLoyaltyobjectRequest>;

export type ListLoyaltyobjectResponse = LoyaltyObjectListResponse;
export const ListLoyaltyobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoyaltyObjectListResponse;

export type ListLoyaltyobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all loyalty objects for a given issuer ID. */
export const listLoyaltyobject: API.OperationMethod<
  ListLoyaltyobjectRequest,
  ListLoyaltyobjectResponse,
  ListLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLoyaltyobjectRequest,
  output: ListLoyaltyobjectResponse,
  errors: [NotFound, Forbidden],
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

export type ModifylinkedofferobjectsLoyaltyobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use Auto Linked Passes instead. Modifies linked offer objects for the loyalty object with the given ID. */
export const modifylinkedofferobjectsLoyaltyobject: API.OperationMethod<
  ModifylinkedofferobjectsLoyaltyobjectRequest,
  ModifylinkedofferobjectsLoyaltyobjectResponse,
  ModifylinkedofferobjectsLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifylinkedofferobjectsLoyaltyobjectRequest,
  output: ModifylinkedofferobjectsLoyaltyobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type PatchLoyaltyobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the loyalty object referenced by the given object ID. This method supports patch semantics. */
export const patchLoyaltyobject: API.OperationMethod<
  PatchLoyaltyobjectRequest,
  PatchLoyaltyobjectResponse,
  PatchLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLoyaltyobjectRequest,
  output: PatchLoyaltyobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertLoyaltyobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an loyalty object with the given ID and properties. */
export const insertLoyaltyobject: API.OperationMethod<
  InsertLoyaltyobjectRequest,
  InsertLoyaltyobjectResponse,
  InsertLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLoyaltyobjectRequest,
  output: InsertLoyaltyobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

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

export type GetLoyaltyobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns the loyalty object with the given object ID. */
export const getLoyaltyobject: API.OperationMethod<
  GetLoyaltyobjectRequest,
  GetLoyaltyobjectResponse,
  GetLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLoyaltyobjectRequest,
  output: GetLoyaltyobjectResponse,
  errors: [NotFound, Forbidden],
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

export type AddmessageLoyaltyobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the loyalty object referenced by the given object ID. */
export const addmessageLoyaltyobject: API.OperationMethod<
  AddmessageLoyaltyobjectRequest,
  AddmessageLoyaltyobjectResponse,
  AddmessageLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageLoyaltyobjectRequest,
  output: AddmessageLoyaltyobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateLoyaltyobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the loyalty object referenced by the given object ID. */
export const updateLoyaltyobject: API.OperationMethod<
  UpdateLoyaltyobjectRequest,
  UpdateLoyaltyobjectResponse,
  UpdateLoyaltyobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLoyaltyobjectRequest,
  output: UpdateLoyaltyobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UploadMediaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads rotating barcode values for the transit object referenced by the given object ID. Note the max upload size is specified in google3/production/config/cdd/apps-upload/customers/payments-consumer-passes/config.gcl and enforced by Scotty. */
export const uploadMedia: API.OperationMethod<
  UploadMediaRequest,
  UploadMediaResponse,
  UploadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadMediaRequest,
  output: UploadMediaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type DownloadMediaError = DefaultErrors | NotFound | Forbidden;

/** Downloads rotating barcode values for the transit object referenced by the given object ID. */
export const downloadMedia: API.OperationMethod<
  DownloadMediaRequest,
  DownloadMediaResponse,
  DownloadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadMediaRequest,
  output: DownloadMediaResponse,
  errors: [NotFound, Forbidden],
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

export type InsertGiftcardclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an gift card class with the given ID and properties. */
export const insertGiftcardclass: API.OperationMethod<
  InsertGiftcardclassRequest,
  InsertGiftcardclassResponse,
  InsertGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGiftcardclassRequest,
  output: InsertGiftcardclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListGiftcardclassRequest {
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
}

export const ListGiftcardclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/giftCardClass" }),
    svc,
  ) as unknown as Schema.Schema<ListGiftcardclassRequest>;

export type ListGiftcardclassResponse = GiftCardClassListResponse;
export const ListGiftcardclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GiftCardClassListResponse;

export type ListGiftcardclassError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all gift card classes for a given issuer ID. */
export const listGiftcardclass: API.OperationMethod<
  ListGiftcardclassRequest,
  ListGiftcardclassResponse,
  ListGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGiftcardclassRequest,
  output: ListGiftcardclassResponse,
  errors: [NotFound, Forbidden],
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

export type PatchGiftcardclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the gift card class referenced by the given class ID. This method supports patch semantics. */
export const patchGiftcardclass: API.OperationMethod<
  PatchGiftcardclassRequest,
  PatchGiftcardclassResponse,
  PatchGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGiftcardclassRequest,
  output: PatchGiftcardclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateGiftcardclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the gift card class referenced by the given class ID. */
export const updateGiftcardclass: API.OperationMethod<
  UpdateGiftcardclassRequest,
  UpdateGiftcardclassResponse,
  UpdateGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGiftcardclassRequest,
  output: UpdateGiftcardclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageGiftcardclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the gift card class referenced by the given class ID. */
export const addmessageGiftcardclass: API.OperationMethod<
  AddmessageGiftcardclassRequest,
  AddmessageGiftcardclassResponse,
  AddmessageGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGiftcardclassRequest,
  output: AddmessageGiftcardclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetGiftcardclassError = DefaultErrors | NotFound | Forbidden;

/** Returns the gift card class with the given class ID. */
export const getGiftcardclass: API.OperationMethod<
  GetGiftcardclassRequest,
  GetGiftcardclassResponse,
  GetGiftcardclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGiftcardclassRequest,
  output: GetGiftcardclassResponse,
  errors: [NotFound, Forbidden],
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

export type InsertFlightobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an flight object with the given ID and properties. */
export const insertFlightobject: API.OperationMethod<
  InsertFlightobjectRequest,
  InsertFlightobjectResponse,
  InsertFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFlightobjectRequest,
  output: InsertFlightobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFlightobjectRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListFlightobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/flightObject" }),
    svc,
  ) as unknown as Schema.Schema<ListFlightobjectRequest>;

export type ListFlightobjectResponse = FlightObjectListResponse;
export const ListFlightobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightObjectListResponse;

export type ListFlightobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all flight objects for a given issuer ID. */
export const listFlightobject: API.OperationMethod<
  ListFlightobjectRequest,
  ListFlightobjectResponse,
  ListFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListFlightobjectRequest,
  output: ListFlightobjectResponse,
  errors: [NotFound, Forbidden],
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

export type PatchFlightobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the flight object referenced by the given object ID. This method supports patch semantics. */
export const patchFlightobject: API.OperationMethod<
  PatchFlightobjectRequest,
  PatchFlightobjectResponse,
  PatchFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFlightobjectRequest,
  output: PatchFlightobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageFlightobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the flight object referenced by the given object ID. */
export const addmessageFlightobject: API.OperationMethod<
  AddmessageFlightobjectRequest,
  AddmessageFlightobjectResponse,
  AddmessageFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageFlightobjectRequest,
  output: AddmessageFlightobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateFlightobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the flight object referenced by the given object ID. */
export const updateFlightobject: API.OperationMethod<
  UpdateFlightobjectRequest,
  UpdateFlightobjectResponse,
  UpdateFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFlightobjectRequest,
  output: UpdateFlightobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetFlightobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns the flight object with the given object ID. */
export const getFlightobject: API.OperationMethod<
  GetFlightobjectRequest,
  GetFlightobjectResponse,
  GetFlightobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFlightobjectRequest,
  output: GetFlightobjectResponse,
  errors: [NotFound, Forbidden],
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

export type InsertLoyaltyclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an loyalty class with the given ID and properties. */
export const insertLoyaltyclass: API.OperationMethod<
  InsertLoyaltyclassRequest,
  InsertLoyaltyclassResponse,
  InsertLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLoyaltyclassRequest,
  output: InsertLoyaltyclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type ListLoyaltyclassError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all loyalty classes for a given issuer ID. */
export const listLoyaltyclass: API.OperationMethod<
  ListLoyaltyclassRequest,
  ListLoyaltyclassResponse,
  ListLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLoyaltyclassRequest,
  output: ListLoyaltyclassResponse,
  errors: [NotFound, Forbidden],
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

export type PatchLoyaltyclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the loyalty class referenced by the given class ID. This method supports patch semantics. */
export const patchLoyaltyclass: API.OperationMethod<
  PatchLoyaltyclassRequest,
  PatchLoyaltyclassResponse,
  PatchLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLoyaltyclassRequest,
  output: PatchLoyaltyclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageLoyaltyclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the loyalty class referenced by the given class ID. */
export const addmessageLoyaltyclass: API.OperationMethod<
  AddmessageLoyaltyclassRequest,
  AddmessageLoyaltyclassResponse,
  AddmessageLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageLoyaltyclassRequest,
  output: AddmessageLoyaltyclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateLoyaltyclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the loyalty class referenced by the given class ID. */
export const updateLoyaltyclass: API.OperationMethod<
  UpdateLoyaltyclassRequest,
  UpdateLoyaltyclassResponse,
  UpdateLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLoyaltyclassRequest,
  output: UpdateLoyaltyclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetLoyaltyclassError = DefaultErrors | NotFound | Forbidden;

/** Returns the loyalty class with the given class ID. */
export const getLoyaltyclass: API.OperationMethod<
  GetLoyaltyclassRequest,
  GetLoyaltyclassResponse,
  GetLoyaltyclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLoyaltyclassRequest,
  output: GetLoyaltyclassResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOfferobjectRequest {
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
}

export const ListOfferobjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/offerObject" }),
  svc,
) as unknown as Schema.Schema<ListOfferobjectRequest>;

export type ListOfferobjectResponse = OfferObjectListResponse;
export const ListOfferobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ OfferObjectListResponse;

export type ListOfferobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all offer objects for a given issuer ID. */
export const listOfferobject: API.OperationMethod<
  ListOfferobjectRequest,
  ListOfferobjectResponse,
  ListOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOfferobjectRequest,
  output: ListOfferobjectResponse,
  errors: [NotFound, Forbidden],
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

export type PatchOfferobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the offer object referenced by the given object ID. This method supports patch semantics. */
export const patchOfferobject: API.OperationMethod<
  PatchOfferobjectRequest,
  PatchOfferobjectResponse,
  PatchOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOfferobjectRequest,
  output: PatchOfferobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertOfferobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an offer object with the given ID and properties. */
export const insertOfferobject: API.OperationMethod<
  InsertOfferobjectRequest,
  InsertOfferobjectResponse,
  InsertOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertOfferobjectRequest,
  output: InsertOfferobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetOfferobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns the offer object with the given object ID. */
export const getOfferobject: API.OperationMethod<
  GetOfferobjectRequest,
  GetOfferobjectResponse,
  GetOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOfferobjectRequest,
  output: GetOfferobjectResponse,
  errors: [NotFound, Forbidden],
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

export type UpdateOfferobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the offer object referenced by the given object ID. */
export const updateOfferobject: API.OperationMethod<
  UpdateOfferobjectRequest,
  UpdateOfferobjectResponse,
  UpdateOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOfferobjectRequest,
  output: UpdateOfferobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageOfferobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the offer object referenced by the given object ID. */
export const addmessageOfferobject: API.OperationMethod<
  AddmessageOfferobjectRequest,
  AddmessageOfferobjectResponse,
  AddmessageOfferobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageOfferobjectRequest,
  output: AddmessageOfferobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageTransitclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the transit class referenced by the given class ID. */
export const addmessageTransitclass: API.OperationMethod<
  AddmessageTransitclassRequest,
  AddmessageTransitclassResponse,
  AddmessageTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageTransitclassRequest,
  output: AddmessageTransitclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateTransitclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the transit class referenced by the given class ID. */
export const updateTransitclass: API.OperationMethod<
  UpdateTransitclassRequest,
  UpdateTransitclassResponse,
  UpdateTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTransitclassRequest,
  output: UpdateTransitclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetTransitclassError = DefaultErrors | NotFound | Forbidden;

/** Returns the transit class with the given class ID. */
export const getTransitclass: API.OperationMethod<
  GetTransitclassRequest,
  GetTransitclassResponse,
  GetTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTransitclassRequest,
  output: GetTransitclassResponse,
  errors: [NotFound, Forbidden],
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

export type InsertTransitclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a transit class with the given ID and properties. */
export const insertTransitclass: API.OperationMethod<
  InsertTransitclassRequest,
  InsertTransitclassResponse,
  InsertTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTransitclassRequest,
  output: InsertTransitclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListTransitclassRequest {
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
}

export const ListTransitclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/transitClass" }),
    svc,
  ) as unknown as Schema.Schema<ListTransitclassRequest>;

export type ListTransitclassResponse = TransitClassListResponse;
export const ListTransitclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitClassListResponse;

export type ListTransitclassError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all transit classes for a given issuer ID. */
export const listTransitclass: API.OperationMethod<
  ListTransitclassRequest,
  ListTransitclassResponse,
  ListTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTransitclassRequest,
  output: ListTransitclassResponse,
  errors: [NotFound, Forbidden],
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

export type PatchTransitclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the transit class referenced by the given class ID. This method supports patch semantics. */
export const patchTransitclass: API.OperationMethod<
  PatchTransitclassRequest,
  PatchTransitclassResponse,
  PatchTransitclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchTransitclassRequest,
  output: PatchTransitclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageGenericobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the generic object referenced by the given object ID. */
export const addmessageGenericobject: API.OperationMethod<
  AddmessageGenericobjectRequest,
  AddmessageGenericobjectResponse,
  AddmessageGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGenericobjectRequest,
  output: AddmessageGenericobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateGenericobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the generic object referenced by the given object ID. */
export const updateGenericobject: API.OperationMethod<
  UpdateGenericobjectRequest,
  UpdateGenericobjectResponse,
  UpdateGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGenericobjectRequest,
  output: UpdateGenericobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetGenericobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns the generic object with the given object ID. */
export const getGenericobject: API.OperationMethod<
  GetGenericobjectRequest,
  GetGenericobjectResponse,
  GetGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGenericobjectRequest,
  output: GetGenericobjectResponse,
  errors: [NotFound, Forbidden],
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

export type InsertGenericobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a generic object with the given ID and properties. */
export const insertGenericobject: API.OperationMethod<
  InsertGenericobjectRequest,
  InsertGenericobjectResponse,
  InsertGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGenericobjectRequest,
  output: InsertGenericobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type ListGenericobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all generic objects for a given issuer ID. */
export const listGenericobject: API.OperationMethod<
  ListGenericobjectRequest,
  ListGenericobjectResponse,
  ListGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGenericobjectRequest,
  output: ListGenericobjectResponse,
  errors: [NotFound, Forbidden],
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

export type PatchGenericobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the generic object referenced by the given object ID. This method supports patch semantics. */
export const patchGenericobject: API.OperationMethod<
  PatchGenericobjectRequest,
  PatchGenericobjectResponse,
  PatchGenericobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGenericobjectRequest,
  output: PatchGenericobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateIssuerError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the issuer referenced by the given issuer ID. */
export const updateIssuer: API.OperationMethod<
  UpdateIssuerRequest,
  UpdateIssuerResponse,
  UpdateIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateIssuerRequest,
  output: UpdateIssuerResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetIssuerError = DefaultErrors | NotFound | Forbidden;

/** Returns the issuer with the given issuer ID. */
export const getIssuer: API.OperationMethod<
  GetIssuerRequest,
  GetIssuerResponse,
  GetIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIssuerRequest,
  output: GetIssuerResponse,
  errors: [NotFound, Forbidden],
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

export type InsertIssuerError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an issuer with the given ID and properties. */
export const insertIssuer: API.OperationMethod<
  InsertIssuerRequest,
  InsertIssuerResponse,
  InsertIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertIssuerRequest,
  output: InsertIssuerResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type ListIssuerError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all issuers shared to the caller. */
export const listIssuer: API.OperationMethod<
  ListIssuerRequest,
  ListIssuerResponse,
  ListIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListIssuerRequest,
  output: ListIssuerResponse,
  errors: [NotFound, Forbidden],
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

export type PatchIssuerError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the issuer referenced by the given issuer ID. This method supports patch semantics. */
export const patchIssuer: API.OperationMethod<
  PatchIssuerRequest,
  PatchIssuerResponse,
  PatchIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchIssuerRequest,
  output: PatchIssuerResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetFlightclassError = DefaultErrors | NotFound | Forbidden;

/** Returns the flight class with the given class ID. */
export const getFlightclass: API.OperationMethod<
  GetFlightclassRequest,
  GetFlightclassResponse,
  GetFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFlightclassRequest,
  output: GetFlightclassResponse,
  errors: [NotFound, Forbidden],
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

export type UpdateFlightclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the flight class referenced by the given class ID. */
export const updateFlightclass: API.OperationMethod<
  UpdateFlightclassRequest,
  UpdateFlightclassResponse,
  UpdateFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFlightclassRequest,
  output: UpdateFlightclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageFlightclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the flight class referenced by the given class ID. */
export const addmessageFlightclass: API.OperationMethod<
  AddmessageFlightclassRequest,
  AddmessageFlightclassResponse,
  AddmessageFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageFlightclassRequest,
  output: AddmessageFlightclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFlightclassRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListFlightclassRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  },
).pipe(
  T.Http({ method: "GET", path: "walletobjects/v1/flightClass" }),
  svc,
) as unknown as Schema.Schema<ListFlightclassRequest>;

export type ListFlightclassResponse = FlightClassListResponse;
export const ListFlightclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlightClassListResponse;

export type ListFlightclassError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all flight classes for a given issuer ID. */
export const listFlightclass: API.OperationMethod<
  ListFlightclassRequest,
  ListFlightclassResponse,
  ListFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListFlightclassRequest,
  output: ListFlightclassResponse,
  errors: [NotFound, Forbidden],
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

export type PatchFlightclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the flight class referenced by the given class ID. This method supports patch semantics. */
export const patchFlightclass: API.OperationMethod<
  PatchFlightclassRequest,
  PatchFlightclassResponse,
  PatchFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFlightclassRequest,
  output: PatchFlightclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertFlightclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an flight class with the given ID and properties. */
export const insertFlightclass: API.OperationMethod<
  InsertFlightclassRequest,
  InsertFlightclassResponse,
  InsertFlightclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFlightclassRequest,
  output: InsertFlightclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListGenericclassRequest {
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListGenericclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/genericClass" }),
    svc,
  ) as unknown as Schema.Schema<ListGenericclassRequest>;

export type ListGenericclassResponse = GenericClassListResponse;
export const ListGenericclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenericClassListResponse;

export type ListGenericclassError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all generic classes for a given issuer ID. */
export const listGenericclass: API.OperationMethod<
  ListGenericclassRequest,
  ListGenericclassResponse,
  ListGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGenericclassRequest,
  output: ListGenericclassResponse,
  errors: [NotFound, Forbidden],
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

export type PatchGenericclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the generic class referenced by the given class ID. This method supports patch semantics. */
export const patchGenericclass: API.OperationMethod<
  PatchGenericclassRequest,
  PatchGenericclassResponse,
  PatchGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGenericclassRequest,
  output: PatchGenericclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertGenericclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a generic class with the given ID and properties. */
export const insertGenericclass: API.OperationMethod<
  InsertGenericclassRequest,
  InsertGenericclassResponse,
  InsertGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGenericclassRequest,
  output: InsertGenericclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetGenericclassError = DefaultErrors | NotFound | Forbidden;

/** Returns the generic class with the given class ID. */
export const getGenericclass: API.OperationMethod<
  GetGenericclassRequest,
  GetGenericclassResponse,
  GetGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGenericclassRequest,
  output: GetGenericclassResponse,
  errors: [NotFound, Forbidden],
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

export type AddmessageGenericclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the generic class referenced by the given class ID. */
export const addmessageGenericclass: API.OperationMethod<
  AddmessageGenericclassRequest,
  AddmessageGenericclassResponse,
  AddmessageGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGenericclassRequest,
  output: AddmessageGenericclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateGenericclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the Generic class referenced by the given class ID. */
export const updateGenericclass: API.OperationMethod<
  UpdateGenericclassRequest,
  UpdateGenericclassResponse,
  UpdateGenericclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGenericclassRequest,
  output: UpdateGenericclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListTransitobjectRequest {
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. */
  token?: string;
  /** The ID of the class whose objects will be listed. */
  classId?: string;
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
}

export const ListTransitobjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    classId: Schema.optional(Schema.String).pipe(T.HttpQuery("classId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/transitObject" }),
    svc,
  ) as unknown as Schema.Schema<ListTransitobjectRequest>;

export type ListTransitobjectResponse = TransitObjectListResponse;
export const ListTransitobjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransitObjectListResponse;

export type ListTransitobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all transit objects for a given issuer ID. */
export const listTransitobject: API.OperationMethod<
  ListTransitobjectRequest,
  ListTransitobjectResponse,
  ListTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTransitobjectRequest,
  output: ListTransitobjectResponse,
  errors: [NotFound, Forbidden],
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

export type PatchTransitobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the transit object referenced by the given object ID. This method supports patch semantics. */
export const patchTransitobject: API.OperationMethod<
  PatchTransitobjectRequest,
  PatchTransitobjectResponse,
  PatchTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchTransitobjectRequest,
  output: PatchTransitobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertTransitobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an transit object with the given ID and properties. */
export const insertTransitobject: API.OperationMethod<
  InsertTransitobjectRequest,
  InsertTransitobjectResponse,
  InsertTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTransitobjectRequest,
  output: InsertTransitobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetTransitobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns the transit object with the given object ID. */
export const getTransitobject: API.OperationMethod<
  GetTransitobjectRequest,
  GetTransitobjectResponse,
  GetTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTransitobjectRequest,
  output: GetTransitobjectResponse,
  errors: [NotFound, Forbidden],
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

export type UpdateTransitobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the transit object referenced by the given object ID. */
export const updateTransitobject: API.OperationMethod<
  UpdateTransitobjectRequest,
  UpdateTransitobjectResponse,
  UpdateTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTransitobjectRequest,
  output: UpdateTransitobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageTransitobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the transit object referenced by the given object ID. */
export const addmessageTransitobject: API.OperationMethod<
  AddmessageTransitobjectRequest,
  AddmessageTransitobjectResponse,
  AddmessageTransitobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageTransitobjectRequest,
  output: AddmessageTransitobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageGiftcardobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the gift card object referenced by the given object ID. */
export const addmessageGiftcardobject: API.OperationMethod<
  AddmessageGiftcardobjectRequest,
  AddmessageGiftcardobjectResponse,
  AddmessageGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageGiftcardobjectRequest,
  output: AddmessageGiftcardobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateGiftcardobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the gift card object referenced by the given object ID. */
export const updateGiftcardobject: API.OperationMethod<
  UpdateGiftcardobjectRequest,
  UpdateGiftcardobjectResponse,
  UpdateGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGiftcardobjectRequest,
  output: UpdateGiftcardobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetGiftcardobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns the gift card object with the given object ID. */
export const getGiftcardobject: API.OperationMethod<
  GetGiftcardobjectRequest,
  GetGiftcardobjectResponse,
  GetGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGiftcardobjectRequest,
  output: GetGiftcardobjectResponse,
  errors: [NotFound, Forbidden],
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

export type InsertGiftcardobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an gift card object with the given ID and properties. */
export const insertGiftcardobject: API.OperationMethod<
  InsertGiftcardobjectRequest,
  InsertGiftcardobjectResponse,
  InsertGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGiftcardobjectRequest,
  output: InsertGiftcardobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type ListGiftcardobjectError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all gift card objects for a given issuer ID. */
export const listGiftcardobject: API.OperationMethod<
  ListGiftcardobjectRequest,
  ListGiftcardobjectResponse,
  ListGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGiftcardobjectRequest,
  output: ListGiftcardobjectResponse,
  errors: [NotFound, Forbidden],
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

export type PatchGiftcardobjectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the gift card object referenced by the given object ID. This method supports patch semantics. */
export const patchGiftcardobject: API.OperationMethod<
  PatchGiftcardobjectRequest,
  PatchGiftcardobjectResponse,
  PatchGiftcardobjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGiftcardobjectRequest,
  output: PatchGiftcardobjectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Returns the permissions for the given issuer id. */
export const getPermissions: API.OperationMethod<
  GetPermissionsRequest,
  GetPermissionsResponse,
  GetPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPermissionsRequest,
  output: GetPermissionsResponse,
  errors: [NotFound, Forbidden],
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

export type UpdatePermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the permissions for the given issuer. */
export const updatePermissions: API.OperationMethod<
  UpdatePermissionsRequest,
  UpdatePermissionsResponse,
  UpdatePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePermissionsRequest,
  output: UpdatePermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertEventticketclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts an event ticket class with the given ID and properties. */
export const insertEventticketclass: API.OperationMethod<
  InsertEventticketclassRequest,
  InsertEventticketclassResponse,
  InsertEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertEventticketclassRequest,
  output: InsertEventticketclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEventticketclassRequest {
  /** Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. */
  maxResults?: number;
  /** The ID of the issuer authorized to list classes. */
  issuerId?: string;
  /** Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. */
  token?: string;
}

export const ListEventticketclassRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    issuerId: Schema.optional(Schema.String).pipe(T.HttpQuery("issuerId")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  }).pipe(
    T.Http({ method: "GET", path: "walletobjects/v1/eventTicketClass" }),
    svc,
  ) as unknown as Schema.Schema<ListEventticketclassRequest>;

export type ListEventticketclassResponse = EventTicketClassListResponse;
export const ListEventticketclassResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTicketClassListResponse;

export type ListEventticketclassError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of all event ticket classes for a given issuer ID. */
export const listEventticketclass: API.OperationMethod<
  ListEventticketclassRequest,
  ListEventticketclassResponse,
  ListEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEventticketclassRequest,
  output: ListEventticketclassResponse,
  errors: [NotFound, Forbidden],
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

export type PatchEventticketclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the event ticket class referenced by the given class ID. This method supports patch semantics. */
export const patchEventticketclass: API.OperationMethod<
  PatchEventticketclassRequest,
  PatchEventticketclassResponse,
  PatchEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEventticketclassRequest,
  output: PatchEventticketclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateEventticketclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the event ticket class referenced by the given class ID. */
export const updateEventticketclass: API.OperationMethod<
  UpdateEventticketclassRequest,
  UpdateEventticketclassResponse,
  UpdateEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventticketclassRequest,
  output: UpdateEventticketclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type AddmessageEventticketclassError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a message to the event ticket class referenced by the given class ID. */
export const addmessageEventticketclass: API.OperationMethod<
  AddmessageEventticketclassRequest,
  AddmessageEventticketclassResponse,
  AddmessageEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddmessageEventticketclassRequest,
  output: AddmessageEventticketclassResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetEventticketclassError = DefaultErrors | NotFound | Forbidden;

/** Returns the event ticket class with the given class ID. */
export const getEventticketclass: API.OperationMethod<
  GetEventticketclassRequest,
  GetEventticketclassResponse,
  GetEventticketclassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventticketclassRequest,
  output: GetEventticketclassResponse,
  errors: [NotFound, Forbidden],
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

export type InsertSmarttapError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts the smart tap. */
export const insertSmarttap: API.OperationMethod<
  InsertSmarttapRequest,
  InsertSmarttapResponse,
  InsertSmarttapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSmarttapRequest,
  output: InsertSmarttapResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
