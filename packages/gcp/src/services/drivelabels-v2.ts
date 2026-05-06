// ==========================================================================
// Drive Labels API (drivelabels v2)
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
  name: "drivelabels",
  version: "v2",
  rootUrl: "https://drivelabels.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleTypeDate {
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
}

export const GoogleTypeDate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  day: Schema.optional(Schema.Number),
  year: Schema.optional(Schema.Number),
  month: Schema.optional(Schema.Number),
}).annotate({ identifier: "GoogleTypeDate" });

export interface GoogleAppsDriveLabelsV2FieldDateOptions {
  /** Localized date formatting option. Field values are rendered in this format according to their locale. */
  dateFormatType?:
    | "DATE_FORMAT_UNSPECIFIED"
    | "LONG_DATE"
    | "SHORT_DATE"
    | (string & {});
  /** Output only. Minimum valid value (year, month, day). */
  minValue?: GoogleTypeDate;
  /** Output only. ICU date format. */
  dateFormat?: string;
  /** Output only. Maximum valid value (year, month, day). */
  maxValue?: GoogleTypeDate;
}

export const GoogleAppsDriveLabelsV2FieldDateOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dateFormatType: Schema.optional(Schema.String),
    minValue: Schema.optional(GoogleTypeDate),
    dateFormat: Schema.optional(Schema.String),
    maxValue: Schema.optional(GoogleTypeDate),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldDateOptions" });

export interface GoogleAppsDriveLabelsV2WriteControl {
  /** The revision ID of the label that the write request will be applied to. If this isn't the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. */
  requiredRevisionId?: string;
}

export const GoogleAppsDriveLabelsV2WriteControl =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredRevisionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2WriteControl" });

export interface GoogleAppsDriveLabelsV2LifecycleDisabledPolicy {
  /** Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI. */
  showInApply?: boolean;
  /** Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items. */
  hideInSearch?: boolean;
}

export const GoogleAppsDriveLabelsV2LifecycleDisabledPolicy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    showInApply: Schema.optional(Schema.Boolean),
    hideInSearch: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LifecycleDisabledPolicy" });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest {
  /** Required. Field disabled policy. */
  disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
  /** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as a short-hand for updating every field. */
  updateMask?: string;
  /** Required. Key of the field to disable. */
  id?: string;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabledPolicy: Schema.optional(
      GoogleAppsDriveLabelsV2LifecycleDisabledPolicy,
    ),
    updateMask: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest",
  });

export interface GoogleAppsDriveLabelsV2LabelProperties {
  /** The description of the label. */
  description?: string;
  /** Required. Title of the label. */
  title?: string;
}

export const GoogleAppsDriveLabelsV2LabelProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelProperties" });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest {
  /** The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as a short-hand for updating every field. */
  updateMask?: string;
  /** Required. Label properties to update. */
  properties?: GoogleAppsDriveLabelsV2LabelProperties;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    properties: Schema.optional(GoogleAppsDriveLabelsV2LabelProperties),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest",
  });

export interface GoogleTypeColor {
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?: number;
  /** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
  alpha?: number;
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?: number;
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?: number;
}

export const GoogleTypeColor = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  red: Schema.optional(Schema.Number),
  alpha: Schema.optional(Schema.Number),
  green: Schema.optional(Schema.Number),
  blue: Schema.optional(Schema.Number),
}).annotate({ identifier: "GoogleTypeColor" });

export interface GoogleAppsDriveLabelsV2BadgeConfig {
  /** The color of the badge. When not specified, no badge is rendered. The background, foreground, and solo (light and dark mode) colors set here are changed in the Drive UI into the closest recommended supported color. */
  color?: GoogleTypeColor;
  /** Override the default global priority of this badge. When set to 0, the default priority heuristic is used. */
  priorityOverride?: string;
}

export const GoogleAppsDriveLabelsV2BadgeConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(GoogleTypeColor),
    priorityOverride: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2BadgeConfig" });

export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties {
  /** The badge configuration for this choice. When set, the label that owns this choice is considered a "badged label". */
  badgeConfig?: GoogleAppsDriveLabelsV2BadgeConfig;
  /** Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list. */
  insertBeforeChoice?: string;
  /** The description of this label. */
  description?: string;
  /** Required. The display text to show in the UI identifying this field. */
  displayName?: string;
}

export const GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    badgeConfig: Schema.optional(GoogleAppsDriveLabelsV2BadgeConfig),
    insertBeforeChoice: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest {
  /** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as a short-hand for updating every field. */
  updateMask?: string;
  /** Required. The selection field to update. */
  fieldId?: string;
  /** Required. The choice to update. */
  id?: string;
  /** Required. The choice properties to update. */
  properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    fieldId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties,
    ),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest",
  });

export interface GoogleAppsDriveLabelsV2FieldListOptions {
  /** Maximum number of entries permitted. */
  maxEntries?: number;
}

export const GoogleAppsDriveLabelsV2FieldListOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxEntries: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldListOptions" });

export interface GoogleAppsDriveLabelsV2UserInfo {
  /** The identifier for this user that can be used with the [People API](https://developers.google.com/people) to get more information. For example, `people/12345678`. */
  person?: string;
}

export const GoogleAppsDriveLabelsV2UserInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    person: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2UserInfo" });

export interface GoogleAppsDriveLabelsV2LockStatus {
  /** Output only. Indicates whether this label component is the (direct) target of a label lock. A label component can be implicitly locked even if it's not the direct target of a label lock, in which case this field is set to false. */
  locked?: boolean;
}

export const GoogleAppsDriveLabelsV2LockStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locked: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LockStatus" });

export interface GoogleAppsDriveLabelsV2Lifecycle {
  /** Output only. The state of the object associated with this lifecycle. */
  state?:
    | "STATE_UNSPECIFIED"
    | "UNPUBLISHED_DRAFT"
    | "PUBLISHED"
    | "DISABLED"
    | "DELETED"
    | (string & {});
  /** Output only. Whether the object associated with this lifecycle has unpublished changes. */
  hasUnpublishedChanges?: boolean;
  /** The policy that governs how to show a disabled label, field, or selection choice. */
  disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
}

export const GoogleAppsDriveLabelsV2Lifecycle =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    hasUnpublishedChanges: Schema.optional(Schema.Boolean),
    disabledPolicy: Schema.optional(
      GoogleAppsDriveLabelsV2LifecycleDisabledPolicy,
    ),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2Lifecycle" });

export interface GoogleAppsDriveLabelsV2BadgeColors {
  /** Output only. Badge foreground that pairs with the background. */
  foregroundColor?: GoogleTypeColor;
  /** Output only. Color that can be used for text without a background. */
  soloColor?: GoogleTypeColor;
  /** Output only. Badge background that pairs with the foreground. */
  backgroundColor?: GoogleTypeColor;
}

export const GoogleAppsDriveLabelsV2BadgeColors =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    foregroundColor: Schema.optional(GoogleTypeColor),
    soloColor: Schema.optional(GoogleTypeColor),
    backgroundColor: Schema.optional(GoogleTypeColor),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2BadgeColors" });

export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints {
  /** The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority. */
  badgePriority?: string;
  /** The colors to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`. */
  badgeColors?: GoogleAppsDriveLabelsV2BadgeColors;
  /** This option should be hidden in the search menu when searching for Drive items. */
  hiddenInSearch?: boolean;
  /** Whether the option should be shown in the UI as disabled. */
  disabled?: boolean;
  /** The dark-mode color to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`. */
  darkBadgeColors?: GoogleAppsDriveLabelsV2BadgeColors;
  /** This option should be shown in the apply menu when applying values to a Drive item. */
  shownInApply?: boolean;
}

export const GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    badgePriority: Schema.optional(Schema.String),
    badgeColors: Schema.optional(GoogleAppsDriveLabelsV2BadgeColors),
    hiddenInSearch: Schema.optional(Schema.Boolean),
    disabled: Schema.optional(Schema.Boolean),
    darkBadgeColors: Schema.optional(GoogleAppsDriveLabelsV2BadgeColors),
    shownInApply: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints",
  });

export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities {
  /** Whether the user can enable this choice. */
  canEnable?: boolean;
  /** Whether the user can update this choice. */
  canUpdate?: boolean;
  /** Whether the user can delete this choice. */
  canDelete?: boolean;
  /** Whether the user can disable this choice. */
  canDisable?: boolean;
}

export const GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canEnable: Schema.optional(Schema.Boolean),
    canUpdate: Schema.optional(Schema.Boolean),
    canDelete: Schema.optional(Schema.Boolean),
    canDisable: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities",
  });

export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities {
  /** Whether the user can read related applied metadata on items. */
  canRead?: boolean;
  /** Whether the user can use this choice in search queries. */
  canSearch?: boolean;
  /** Whether the user can select this choice on an item. */
  canSelect?: boolean;
}

export const GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canRead: Schema.optional(Schema.Boolean),
    canSearch: Schema.optional(Schema.Boolean),
    canSelect: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities",
  });

export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice {
  /** Output only. The time this choice was created. */
  createTime?: string;
  /** Output only. The user who published this choice. This value has no meaning when the choice is not published. */
  publisher?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. The `LockStatus` of this choice. */
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;
  /** The unique value of the choice. This ID is autogenerated. Matches the regex: `([a-zA-Z0-9_])+`. */
  id?: string;
  /** Output only. The time this choice was updated last. */
  updateTime?: string;
  /** Output only. Lifecycle of the choice. */
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;
  /** Output only. UI display hints for rendering a choice. */
  displayHints?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;
  /** Basic properties of the choice. */
  properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
  /** Output only. The capabilities related to this option when editing the option. */
  schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;
  /** Output only. The user who created this choice. */
  creator?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. The user who updated this choice last. */
  updater?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. The capabilities related to this choice on applied metadata. */
  appliedCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;
  /** Output only. The time this choice was published. This value has no meaning when the choice is not published. */
  publishTime?: string;
  /** Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled. */
  disableTime?: string;
  /** Output only. The user who disabled this choice. This value has no meaning when the option is not disabled. */
  disabler?: GoogleAppsDriveLabelsV2UserInfo;
}

export const GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    publisher: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    lockStatus: Schema.optional(GoogleAppsDriveLabelsV2LockStatus),
    id: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    lifecycle: Schema.optional(GoogleAppsDriveLabelsV2Lifecycle),
    displayHints: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints,
    ),
    properties: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties,
    ),
    schemaCapabilities: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities,
    ),
    creator: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    updater: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    appliedCapabilities: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities,
    ),
    publishTime: Schema.optional(Schema.String),
    disableTime: Schema.optional(Schema.String),
    disabler: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice",
  });

export interface GoogleAppsDriveLabelsV2FieldSelectionOptions {
  /** When specified, indicates this field supports a list of values. Once the field is published, this cannot be changed. */
  listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
  /** The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`. */
  choices?: ReadonlyArray<GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice>;
}

export const GoogleAppsDriveLabelsV2FieldSelectionOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldListOptions),
    choices: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice),
    ),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldSelectionOptions" });

export interface GoogleAppsDriveLabelsV2FieldTextOptions {
  /** Output only. The minimum valid length of values for the text field. */
  minLength?: number;
  /** Output only. The maximum valid length of values for the text field. */
  maxLength?: number;
}

export const GoogleAppsDriveLabelsV2FieldTextOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLength: Schema.optional(Schema.Number),
    maxLength: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldTextOptions" });

export interface GoogleAppsDriveLabelsV2FieldIntegerOptions {
  /** Output only. The minimum valid value for the integer field. */
  minValue?: string;
  /** Output only. The maximum valid value for the integer field. */
  maxValue?: string;
}

export const GoogleAppsDriveLabelsV2FieldIntegerOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minValue: Schema.optional(Schema.String),
    maxValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldIntegerOptions" });

export interface GoogleAppsDriveLabelsV2FieldUserOptions {
  /** When specified, indicates that this field supports a list of values. Once the field is published, this cannot be changed. */
  listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
}

export const GoogleAppsDriveLabelsV2FieldUserOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldListOptions),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldUserOptions" });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest {
  /** Update field to Selection. */
  selectionOptions?: GoogleAppsDriveLabelsV2FieldSelectionOptions;
  /** Update field to Text. */
  textOptions?: GoogleAppsDriveLabelsV2FieldTextOptions;
  /** Update field to Integer. */
  integerOptions?: GoogleAppsDriveLabelsV2FieldIntegerOptions;
  /** Update field to Date. */
  dateOptions?: GoogleAppsDriveLabelsV2FieldDateOptions;
  /** The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as a short-hand for updating every field. */
  updateMask?: string;
  /** Required. The field to update. */
  id?: string;
  /** Update field to User. */
  userOptions?: GoogleAppsDriveLabelsV2FieldUserOptions;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selectionOptions: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSelectionOptions,
    ),
    textOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldTextOptions),
    integerOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldIntegerOptions),
    dateOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldDateOptions),
    updateMask: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    userOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldUserOptions),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest",
  });

export interface GoogleAppsDriveLabelsV2FieldDisplayHints {
  /** Whether the field should be shown as required in the UI. */
  required?: boolean;
  /** This field should be shown in the apply menu when applying values to a Drive item. */
  shownInApply?: boolean;
  /** Whether the field should be shown in the UI as disabled. */
  disabled?: boolean;
  /** This field should be hidden in the search menu when searching for Drive items. */
  hiddenInSearch?: boolean;
}

export const GoogleAppsDriveLabelsV2FieldDisplayHints =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    required: Schema.optional(Schema.Boolean),
    shownInApply: Schema.optional(Schema.Boolean),
    disabled: Schema.optional(Schema.Boolean),
    hiddenInSearch: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldDisplayHints" });

export interface GoogleAppsDriveLabelsV2FieldProperties {
  /** Whether the field should be marked as required. */
  required?: boolean;
  /** Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list. */
  insertBeforeField?: string;
  /** Required. The display text to show in the UI identifying this field. */
  displayName?: string;
}

export const GoogleAppsDriveLabelsV2FieldProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    required: Schema.optional(Schema.Boolean),
    insertBeforeField: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldProperties" });

export interface GoogleAppsDriveLabelsV2FieldSchemaCapabilities {
  /** Whether the user can change this field. */
  canUpdate?: boolean;
  /** Whether the user can delete this field. The user must have permission and the field must be deprecated. */
  canDelete?: boolean;
  /** Whether the user can disable this field. The user must have permission and this field must not already be disabled. */
  canDisable?: boolean;
  /** Whether the user can enable this field. The user must have permission and this field must be disabled. */
  canEnable?: boolean;
}

export const GoogleAppsDriveLabelsV2FieldSchemaCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canUpdate: Schema.optional(Schema.Boolean),
    canDelete: Schema.optional(Schema.Boolean),
    canDisable: Schema.optional(Schema.Boolean),
    canEnable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldSchemaCapabilities" });

export interface GoogleAppsDriveLabelsV2FieldAppliedCapabilities {
  /** Whether the user can set this field on Drive items. */
  canWrite?: boolean;
  /** Whether the user can read related applied metadata on items. */
  canRead?: boolean;
  /** Whether the user can search for Drive items referencing this field. */
  canSearch?: boolean;
}

export const GoogleAppsDriveLabelsV2FieldAppliedCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canWrite: Schema.optional(Schema.Boolean),
    canRead: Schema.optional(Schema.Boolean),
    canSearch: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2FieldAppliedCapabilities",
  });

export interface GoogleAppsDriveLabelsV2Field {
  /** Output only. The time this field was created. */
  createTime?: string;
  /** Integer field options. */
  integerOptions?: GoogleAppsDriveLabelsV2FieldIntegerOptions;
  /** Output only. The user who published this field. This value has no meaning when the field is not published. */
  publisher?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. The `LockStatus` of this field. */
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;
  /** Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, "`{query_key}` > 2001-01-01". */
  queryKey?: string;
  /** User field options. */
  userOptions?: GoogleAppsDriveLabelsV2FieldUserOptions;
  /** Output only. UI display hints for rendering a field. */
  displayHints?: GoogleAppsDriveLabelsV2FieldDisplayHints;
  /** Output only. The lifecycle of this field. */
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;
  /** Output only. The key of a field, unique within a label or library. This value is autogenerated. Matches the regex: `([a-zA-Z0-9])+`. */
  id?: string;
  /** Output only. The time this field was updated. */
  updateTime?: string;
  /** Date field options. */
  dateOptions?: GoogleAppsDriveLabelsV2FieldDateOptions;
  /** The basic properties of the field. */
  properties?: GoogleAppsDriveLabelsV2FieldProperties;
  /** Output only. The capabilities this user has when editing this field. */
  schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSchemaCapabilities;
  /** Text field options. */
  textOptions?: GoogleAppsDriveLabelsV2FieldTextOptions;
  /** Output only. The capabilities this user has on this field and its value when the label is applied on Drive items. */
  appliedCapabilities?: GoogleAppsDriveLabelsV2FieldAppliedCapabilities;
  /** Output only. The time this field was disabled. This value has no meaning when the field is not disabled. */
  disableTime?: string;
  /** Output only. The user who modified this field. */
  updater?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. The user who created this field. */
  creator?: GoogleAppsDriveLabelsV2UserInfo;
  /** Selection field options. */
  selectionOptions?: GoogleAppsDriveLabelsV2FieldSelectionOptions;
  /** Output only. The user who disabled this field. This value has no meaning when the field is not disabled. */
  disabler?: GoogleAppsDriveLabelsV2UserInfo;
}

export const GoogleAppsDriveLabelsV2Field =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    integerOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldIntegerOptions),
    publisher: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    lockStatus: Schema.optional(GoogleAppsDriveLabelsV2LockStatus),
    queryKey: Schema.optional(Schema.String),
    userOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldUserOptions),
    displayHints: Schema.optional(GoogleAppsDriveLabelsV2FieldDisplayHints),
    lifecycle: Schema.optional(GoogleAppsDriveLabelsV2Lifecycle),
    id: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dateOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldDateOptions),
    properties: Schema.optional(GoogleAppsDriveLabelsV2FieldProperties),
    schemaCapabilities: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSchemaCapabilities,
    ),
    textOptions: Schema.optional(GoogleAppsDriveLabelsV2FieldTextOptions),
    appliedCapabilities: Schema.optional(
      GoogleAppsDriveLabelsV2FieldAppliedCapabilities,
    ),
    disableTime: Schema.optional(Schema.String),
    updater: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    creator: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    selectionOptions: Schema.optional(
      GoogleAppsDriveLabelsV2FieldSelectionOptions,
    ),
    disabler: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2Field" });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest {
  /** Required. Field to create. */
  field?: GoogleAppsDriveLabelsV2Field;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GoogleAppsDriveLabelsV2Field),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest {
  /** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as a short-hand for updating every field. */
  updateMask?: string;
  /** Required. The field to update. */
  id?: string;
  /** Required. Basic field properties. */
  properties?: GoogleAppsDriveLabelsV2FieldProperties;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(GoogleAppsDriveLabelsV2FieldProperties),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest {
  /** Required. The selection field in which a choice will be created. */
  fieldId?: string;
  /** Required. The choice to create. */
  choice?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.String),
    choice: Schema.optional(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest {
  /** Required. ID of the field to enable. */
  id?: string;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest {
  /** Required. The selection field from which a choice will be deleted. */
  fieldId?: string;
  /** Required. Choice to delete. */
  id?: string;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest {
  /** Required. ID of the field to delete. */
  id?: string;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest {
  /** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as a short-hand for updating every field. */
  updateMask?: string;
  /** Required. The selection field in which a choice will be disabled. */
  fieldId?: string;
  /** Required. Choice to disable. */
  id?: string;
  /** Required. The disabled policy to update. */
  disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    fieldId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    disabledPolicy: Schema.optional(
      GoogleAppsDriveLabelsV2LifecycleDisabledPolicy,
    ),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest {
  /** Required. The selection field in which a choice will be enabled. */
  fieldId?: string;
  /** Required. Choice to enable. */
  id?: string;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest {
  /** Disables the field. */
  disableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest;
  /** Updates the label properties. */
  updateLabel?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest;
  /** Update a choice property within a selection field. */
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
  /** Update field type and/or type options. */
  updateFieldType?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest;
  /** Creates a field. */
  createField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest;
  /** Updates basic properties of a field. */
  updateField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest;
  /** Create a choice within a selection field. */
  createSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest;
  /** Enables the field. */
  enableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest;
  /** Delete a choice within a selection field. */
  deleteSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest;
  /** Deletes a field from the label. */
  deleteField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest;
  /** Disable a choice within a selection field. */
  disableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest;
  /** Enable a choice within a selection field. */
  enableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest,
    ),
    updateLabel: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest,
    ),
    updateSelectionChoiceProperties: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest,
    ),
    updateFieldType: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest,
    ),
    createField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest,
    ),
    updateField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest,
    ),
    createSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest,
    ),
    enableField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest,
    ),
    deleteSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest,
    ),
    deleteField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest,
    ),
    disableSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest,
    ),
    enableSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest,
    ),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest {
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** Provides control over how write requests are executed. */
  writeControl?: GoogleAppsDriveLabelsV2WriteControl;
  /** A list of updates to apply to the label. Requests will be applied in the order they are specified. */
  requests?: ReadonlyArray<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest>;
  /** When specified, only certain fields belonging to the indicated view will be returned. */
  view?: "LABEL_VIEW_BASIC" | "LABEL_VIEW_FULL" | (string & {});
  /** The BCP-47 language code to use for evaluating localized field labels when `include_label_in_response` is `true`. */
  languageCode?: string;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useAdminAccess: Schema.optional(Schema.Boolean),
    writeControl: Schema.optional(GoogleAppsDriveLabelsV2WriteControl),
    requests: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest),
    ),
    view: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest" });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse",
  });

export interface GoogleAppsDriveLabelsV2TextLimits {
  /** Minimum length allowed for a text field type. */
  minLength?: number;
  /** Maximum length allowed for a text field type. */
  maxLength?: number;
}

export const GoogleAppsDriveLabelsV2TextLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLength: Schema.optional(Schema.Number),
    maxLength: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2TextLimits" });

export interface GoogleAppsDriveLabelsV2LabelPermission {
  /** Person resource name. */
  person?: string;
  /** Resource name of this permission. */
  name?: string;
  /** Specifies the email address for a user or group principal. Not populated for audience principals. User and group permissions may only be inserted using an email address. On update requests, if email address is specified, no principal should be specified. */
  email?: string;
  /** The role the principal should have. */
  role?:
    | "LABEL_ROLE_UNSPECIFIED"
    | "READER"
    | "APPLIER"
    | "ORGANIZER"
    | "EDITOR"
    | (string & {});
  /** Group resource name. */
  group?: string;
  /** Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the label. */
  audience?: string;
}

export const GoogleAppsDriveLabelsV2LabelPermission =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    person: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    audience: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelPermission" });

export interface GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse {
  /** Required. Permissions updated. */
  permissions?: ReadonlyArray<GoogleAppsDriveLabelsV2LabelPermission>;
}

export const GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2LabelPermission),
    ),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse",
  });

export interface GoogleAppsDriveLabelsV2PublishLabelRequest {
  /** Provides control over how write requests are executed. Defaults to unset, which means the last write wins. */
  writeControl?: GoogleAppsDriveLabelsV2WriteControl;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
  languageCode?: string;
}

export const GoogleAppsDriveLabelsV2PublishLabelRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writeControl: Schema.optional(GoogleAppsDriveLabelsV2WriteControl),
    useAdminAccess: Schema.optional(Schema.Boolean),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2PublishLabelRequest" });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse {
  /** The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n). */
  priority?: number;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse {
  /** The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here. */
  id?: string;
  /** The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n). */
  priority?: number;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse {
  /** The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n). */
  priority?: number;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse {
  /** The server-generated ID of the field. */
  fieldId?: string;
  /** The server-generated ID of the created choice within the field. */
  id?: string;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse {}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse",
  });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse {
  /** Deletes a field from the label. */
  deleteField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse;
  /** Enables field. */
  enableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse;
  /** Deletes a choice from a selection field. */
  deleteSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse;
  /** Enables a choice within a selection field. */
  enableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse;
  /** Disables a choice within a selection field. */
  disableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse;
  /** Updates a choice within a selection field. */
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
  /** Updates basic properties of a label. */
  updateLabel?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse;
  /** Disables field. */
  disableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse;
  /** Creates a field. */
  createField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse;
  /** Updates basic properties of a field. */
  updateField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse;
  /** Creates a selection list option to add to a selection field. */
  createSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse;
  /** Updates field type and/or type options. */
  updateFieldType?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleteField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse,
    ),
    enableField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse,
    ),
    deleteSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse,
    ),
    enableSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse,
    ),
    disableSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse,
    ),
    updateSelectionChoiceProperties: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse,
    ),
    updateLabel: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse,
    ),
    disableField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse,
    ),
    createField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse,
    ),
    updateField: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse,
    ),
    createSelectionChoice: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse,
    ),
    updateFieldType: Schema.optional(
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse,
    ),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse",
  });

export interface GoogleAppsDriveLabelsV2LabelDisplayHints {
  /** This label should be shown in the apply menu when applying values to a Drive item. */
  shownInApply?: boolean;
  /** Whether the label should be shown in the UI as disabled. */
  disabled?: boolean;
  /** This label should be hidden in the search menu when searching for Drive items. */
  hiddenInSearch?: boolean;
  /** The order to display labels in a list. */
  priority?: string;
}

export const GoogleAppsDriveLabelsV2LabelDisplayHints =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shownInApply: Schema.optional(Schema.Boolean),
    disabled: Schema.optional(Schema.Boolean),
    hiddenInSearch: Schema.optional(Schema.Boolean),
    priority: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelDisplayHints" });

export interface GoogleAppsDriveLabelsV2LabelAppliedCapabilities {
  /** Whether the user can read applied metadata related to this label. */
  canRead?: boolean;
  /** Whether the user can remove this label from items. */
  canRemove?: boolean;
  /** Whether the user can apply this label to items. */
  canApply?: boolean;
}

export const GoogleAppsDriveLabelsV2LabelAppliedCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canRead: Schema.optional(Schema.Boolean),
    canRemove: Schema.optional(Schema.Boolean),
    canApply: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2LabelAppliedCapabilities",
  });

export interface GoogleAppsDriveLabelsV2LabelSchemaCapabilities {
  /** Whether the user can enable this label. The user must have permission and this label must be disabled. */
  canEnable?: boolean;
  /** Whether the user can change this label. */
  canUpdate?: boolean;
  /** Whether the user can delete this label. The user must have permission and the label must be disabled. */
  canDelete?: boolean;
  /** Whether the user can disable this label. The user must have permission and this label must not already be disabled. */
  canDisable?: boolean;
}

export const GoogleAppsDriveLabelsV2LabelSchemaCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canEnable: Schema.optional(Schema.Boolean),
    canUpdate: Schema.optional(Schema.Boolean),
    canDelete: Schema.optional(Schema.Boolean),
    canDisable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelSchemaCapabilities" });

export interface GoogleAppsDriveLabelsV2LabelEnabledAppSettingsEnabledApp {
  /** Optional. The name of the app. */
  app?: "APP_UNSPECIFIED" | "DRIVE" | "GMAIL" | (string & {});
}

export const GoogleAppsDriveLabelsV2LabelEnabledAppSettingsEnabledApp =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2LabelEnabledAppSettingsEnabledApp",
  });

export interface GoogleAppsDriveLabelsV2LabelEnabledAppSettings {
  /** Optional. The list of apps where the label can be used. */
  enabledApps?: ReadonlyArray<GoogleAppsDriveLabelsV2LabelEnabledAppSettingsEnabledApp>;
}

export const GoogleAppsDriveLabelsV2LabelEnabledAppSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabledApps: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2LabelEnabledAppSettingsEnabledApp),
    ),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelEnabledAppSettings" });

export interface GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy {
  /** Indicates how the applied label and field values should be copied when a Drive item is copied. */
  copyMode?:
    | "COPY_MODE_UNSPECIFIED"
    | "DO_NOT_COPY"
    | "ALWAYS_COPY"
    | "COPY_APPLIABLE"
    | (string & {});
}

export const GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    copyMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy" });

export interface GoogleAppsDriveLabelsV2Label {
  /** Required. The type of label. */
  labelType?:
    | "LABEL_TYPE_UNSPECIFIED"
    | "SHARED"
    | "ADMIN"
    | "GOOGLE_APP"
    | (string & {});
  /** Output only. The user who published this label. This value has no meaning when the label isn't published.>> */
  publisher?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. The `LockStatus` of this label. */
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;
  /** Output only. The customer this label belongs to. For example: `customers/123abc789`. */
  customer?: string;
  /** Output only. The time this label was created. */
  createTime?: string;
  /** Required. The basic properties of the label. */
  properties?: GoogleAppsDriveLabelsV2LabelProperties;
  /** Custom URL to present to users to allow them to learn more about this label and how it should be used. */
  learnMoreUri?: string;
  /** List of fields in descending priority order. */
  fields?: ReadonlyArray<GoogleAppsDriveLabelsV2Field>;
  /** Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`. */
  id?: string;
  /** Output only. The lifecycle state of the label including whether it's published, deprecated, and has draft changes. */
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;
  /** Output only. UI display hints for rendering the label. */
  displayHints?: GoogleAppsDriveLabelsV2LabelDisplayHints;
  /** Output only. The user who created this label. */
  creator?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. The user who created this label revision. */
  revisionCreator?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below. */
  name?: string;
  /** Output only. The time this label was published. This value has no meaning when the label isn't published. */
  publishTime?: string;
  /** Output only. The time this label was disabled. This value has no meaning when the label isn't disabled. */
  disableTime?: string;
  /** Output only. The capabilities related to this label on applied metadata. */
  appliedCapabilities?: GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
  /** Output only. The capabilities the user has on this label. */
  schemaCapabilities?: GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
  /** Output only. The time this label revision was created. */
  revisionCreateTime?: string;
  /** Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`. */
  revisionId?: string;
  /** Optional. The `EnabledAppSettings` for this Label. */
  enabledAppSettings?: GoogleAppsDriveLabelsV2LabelEnabledAppSettings;
  /** Output only. Behavior of this label when it's applied to Drive items. */
  appliedLabelPolicy?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
  /** Output only. The user who disabled this label. This value has no meaning when the label isn't disabled. */
  disabler?: GoogleAppsDriveLabelsV2UserInfo;
}

export const GoogleAppsDriveLabelsV2Label =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelType: Schema.optional(Schema.String),
    publisher: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    lockStatus: Schema.optional(GoogleAppsDriveLabelsV2LockStatus),
    customer: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    properties: Schema.optional(GoogleAppsDriveLabelsV2LabelProperties),
    learnMoreUri: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Array(GoogleAppsDriveLabelsV2Field)),
    id: Schema.optional(Schema.String),
    lifecycle: Schema.optional(GoogleAppsDriveLabelsV2Lifecycle),
    displayHints: Schema.optional(GoogleAppsDriveLabelsV2LabelDisplayHints),
    creator: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    revisionCreator: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    name: Schema.optional(Schema.String),
    publishTime: Schema.optional(Schema.String),
    disableTime: Schema.optional(Schema.String),
    appliedCapabilities: Schema.optional(
      GoogleAppsDriveLabelsV2LabelAppliedCapabilities,
    ),
    schemaCapabilities: Schema.optional(
      GoogleAppsDriveLabelsV2LabelSchemaCapabilities,
    ),
    revisionCreateTime: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    enabledAppSettings: Schema.optional(
      GoogleAppsDriveLabelsV2LabelEnabledAppSettings,
    ),
    appliedLabelPolicy: Schema.optional(
      GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy,
    ),
    disabler: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2Label" });

export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse {
  /** The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty. */
  responses?: ReadonlyArray<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse>;
  /** The label after updates were applied. This is only set if `include_label_in_response` is `true` and there were no errors. */
  updatedLabel?: GoogleAppsDriveLabelsV2Label;
}

export const GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse),
    ),
    updatedLabel: Schema.optional(GoogleAppsDriveLabelsV2Label),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse",
  });

export interface GoogleAppsDriveLabelsV2ListLabelPermissionsResponse {
  /** Label permissions. */
  labelPermissions?: ReadonlyArray<GoogleAppsDriveLabelsV2LabelPermission>;
  /** The token of the next page in the response. */
  nextPageToken?: string;
}

export const GoogleAppsDriveLabelsV2ListLabelPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelPermissions: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2LabelPermission),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2ListLabelPermissionsResponse",
  });

export interface GoogleAppsDriveLabelsV2LabelLockCapabilities {
  /** True if the user is authorized to view the policy. */
  canViewPolicy?: boolean;
}

export const GoogleAppsDriveLabelsV2LabelLockCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canViewPolicy: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelLockCapabilities" });

export interface GoogleAppsDriveLabelsV2ListLabelsResponse {
  /** Labels. */
  labels?: ReadonlyArray<GoogleAppsDriveLabelsV2Label>;
  /** The token of the next page in the response. */
  nextPageToken?: string;
}

export const GoogleAppsDriveLabelsV2ListLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Array(GoogleAppsDriveLabelsV2Label)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2ListLabelsResponse" });

export interface GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest {
  /** Required. The permission to create or update on the label. */
  labelPermission?: GoogleAppsDriveLabelsV2LabelPermission;
  /** Required. The parent label resource name. */
  parent?: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelPermission: Schema.optional(GoogleAppsDriveLabelsV2LabelPermission),
    parent: Schema.optional(Schema.String),
    useAdminAccess: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest",
  });

export interface GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest {
  /** Required. The request message specifying the resources to update. */
  requests?: ReadonlyArray<GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest>;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. If this is set, the `use_admin_access` field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. */
  useAdminAccess?: boolean;
}

export const GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest),
    ),
    useAdminAccess: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest",
  });

export interface GoogleAppsDriveLabelsV2UpdateLabelEnabledAppSettingsRequest {
  /** Optional. The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
  languageCode?: string;
  /** Optional. When specified, only certain fields belonging to the indicated view will be returned. */
  view?: "LABEL_VIEW_BASIC" | "LABEL_VIEW_FULL" | (string & {});
  /** Required. The new `EnabledAppSettings` value for the label. */
  enabledAppSettings?: GoogleAppsDriveLabelsV2LabelEnabledAppSettings;
  /** Optional. Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const GoogleAppsDriveLabelsV2UpdateLabelEnabledAppSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    view: Schema.optional(Schema.String),
    enabledAppSettings: Schema.optional(
      GoogleAppsDriveLabelsV2LabelEnabledAppSettings,
    ),
    useAdminAccess: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2UpdateLabelEnabledAppSettingsRequest",
  });

export interface GoogleAppsDriveLabelsV2LongTextLimits {
  /** Minimum length allowed for a long text field type. */
  minLength?: number;
  /** Maximum length allowed for a long text field type. */
  maxLength?: number;
}

export const GoogleAppsDriveLabelsV2LongTextLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLength: Schema.optional(Schema.Number),
    maxLength: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LongTextLimits" });

export interface GoogleAppsDriveLabelsV2ListLimits {
  /** Maximum number of values allowed for the field type. */
  maxEntries?: number;
}

export const GoogleAppsDriveLabelsV2ListLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxEntries: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2ListLimits" });

export interface GoogleAppsDriveLabelsV2SelectionLimits {
  /** Limits for list-variant of a field type. */
  listLimits?: GoogleAppsDriveLabelsV2ListLimits;
  /** Maximum number of deleted choices. */
  maxDeletedChoices?: number;
  /** Maximum length for display name. */
  maxDisplayNameLength?: number;
  /** Maximum ID length for a selection option. */
  maxIdLength?: number;
  /** Maximum number of choices. */
  maxChoices?: number;
}

export const GoogleAppsDriveLabelsV2SelectionLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listLimits: Schema.optional(GoogleAppsDriveLabelsV2ListLimits),
    maxDeletedChoices: Schema.optional(Schema.Number),
    maxDisplayNameLength: Schema.optional(Schema.Number),
    maxIdLength: Schema.optional(Schema.Number),
    maxChoices: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2SelectionLimits" });

export interface GoogleAppsDriveLabelsV2IntegerLimits {
  /** Minimum value for an integer field type. */
  minValue?: string;
  /** Maximum value for an integer field type. */
  maxValue?: string;
}

export const GoogleAppsDriveLabelsV2IntegerLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minValue: Schema.optional(Schema.String),
    maxValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2IntegerLimits" });

export interface GoogleAppsDriveLabelsV2UserLimits {
  /** Limits for list-variant of a field type. */
  listLimits?: GoogleAppsDriveLabelsV2ListLimits;
}

export const GoogleAppsDriveLabelsV2UserLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listLimits: Schema.optional(GoogleAppsDriveLabelsV2ListLimits),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2UserLimits" });

export interface GoogleAppsDriveLabelsV2DateLimits {
  /** Minimum value for the date field type. */
  minValue?: GoogleTypeDate;
  /** Maximum value for the date field type. */
  maxValue?: GoogleTypeDate;
}

export const GoogleAppsDriveLabelsV2DateLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minValue: Schema.optional(GoogleTypeDate),
    maxValue: Schema.optional(GoogleTypeDate),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2DateLimits" });

export interface GoogleAppsDriveLabelsV2FieldLimits {
  /** Long text field limits. */
  longTextLimits?: GoogleAppsDriveLabelsV2LongTextLimits;
  /** Selection field limits. */
  selectionLimits?: GoogleAppsDriveLabelsV2SelectionLimits;
  /** Limits for field title. */
  maxDisplayNameLength?: number;
  /** Limits for field description, also called help text. */
  maxDescriptionLength?: number;
  /** Integer field limits. */
  integerLimits?: GoogleAppsDriveLabelsV2IntegerLimits;
  /** The relevant limits for the specified Field.Type. Text field limits. */
  textLimits?: GoogleAppsDriveLabelsV2TextLimits;
  /** User field limits. */
  userLimits?: GoogleAppsDriveLabelsV2UserLimits;
  /** Maximum length for the id. */
  maxIdLength?: number;
  /** Date field limits. */
  dateLimits?: GoogleAppsDriveLabelsV2DateLimits;
}

export const GoogleAppsDriveLabelsV2FieldLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longTextLimits: Schema.optional(GoogleAppsDriveLabelsV2LongTextLimits),
    selectionLimits: Schema.optional(GoogleAppsDriveLabelsV2SelectionLimits),
    maxDisplayNameLength: Schema.optional(Schema.Number),
    maxDescriptionLength: Schema.optional(Schema.Number),
    integerLimits: Schema.optional(GoogleAppsDriveLabelsV2IntegerLimits),
    textLimits: Schema.optional(GoogleAppsDriveLabelsV2TextLimits),
    userLimits: Schema.optional(GoogleAppsDriveLabelsV2UserLimits),
    maxIdLength: Schema.optional(Schema.Number),
    dateLimits: Schema.optional(GoogleAppsDriveLabelsV2DateLimits),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2FieldLimits" });

export interface GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest {
  /** Required. Label permission resource name. */
  name?: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    useAdminAccess: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest",
  });

export interface GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest {
  /** Required. The request message specifying the resources to update. */
  requests?: ReadonlyArray<GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest>;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. If this is set, the `use_admin_access` field in the `DeleteLabelPermissionRequest` messages must either be empty or match this field. */
  useAdminAccess?: boolean;
}

export const GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest),
    ),
    useAdminAccess: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest",
  });

export interface GoogleAppsDriveLabelsV2UserCapabilities {
  /** Output only. Whether the user is allowed access to the label manager. */
  canAccessLabelManager?: boolean;
  /** Output only. Whether the user is allowed to create admin labels. */
  canCreateAdminLabels?: boolean;
  /** Output only. Whether the user is an administrator for the shared labels feature. */
  canAdministrateLabels?: boolean;
  /** Output only. Resource name for the user capabilities. */
  name?: string;
  /** Output only. Whether the user is allowed to create shared labels. */
  canCreateSharedLabels?: boolean;
}

export const GoogleAppsDriveLabelsV2UserCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canAccessLabelManager: Schema.optional(Schema.Boolean),
    canCreateAdminLabels: Schema.optional(Schema.Boolean),
    canAdministrateLabels: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    canCreateSharedLabels: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2UserCapabilities" });

export interface GoogleAppsDriveLabelsV2LabelLock {
  /** The ID of the selection field choice that should be locked. If present, `field_id` must also be present. */
  choiceId?: string;
  /** Output only. This label lock's state. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DELETING" | (string & {});
  /** Output only. The time this label lock was created. */
  createTime?: string;
  /** The ID of the field that should be locked. Empty if the whole label should be locked. */
  fieldId?: string;
  /** Output only. The user whose credentials were used to create the label lock. Not present if no user was responsible for creating the label lock. */
  creator?: GoogleAppsDriveLabelsV2UserInfo;
  /** Output only. A timestamp indicating when this label lock was scheduled for deletion. Present only if this label lock is in the `DELETING` state. */
  deleteTime?: string;
  /** Output only. Resource name of this label lock. */
  name?: string;
  /** Output only. The user's capabilities on this label lock. */
  capabilities?: GoogleAppsDriveLabelsV2LabelLockCapabilities;
}

export const GoogleAppsDriveLabelsV2LabelLock =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    choiceId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    fieldId: Schema.optional(Schema.String),
    creator: Schema.optional(GoogleAppsDriveLabelsV2UserInfo),
    deleteTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    capabilities: Schema.optional(GoogleAppsDriveLabelsV2LabelLockCapabilities),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelLock" });

export interface GoogleAppsDriveLabelsV2ListLabelLocksResponse {
  /** The token of the next page in the response. */
  nextPageToken?: string;
  /** Label locks. */
  labelLocks?: ReadonlyArray<GoogleAppsDriveLabelsV2LabelLock>;
}

export const GoogleAppsDriveLabelsV2ListLabelLocksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    labelLocks: Schema.optional(Schema.Array(GoogleAppsDriveLabelsV2LabelLock)),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2ListLabelLocksResponse" });

export interface GoogleAppsDriveLabelsV2EnableLabelRequest {
  /** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
  languageCode?: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** Provides control over how write requests are executed. Defaults to unset, which means the last write wins. */
  writeControl?: GoogleAppsDriveLabelsV2WriteControl;
}

export const GoogleAppsDriveLabelsV2EnableLabelRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    useAdminAccess: Schema.optional(Schema.Boolean),
    writeControl: Schema.optional(GoogleAppsDriveLabelsV2WriteControl),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2EnableLabelRequest" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "GoogleProtobufEmpty" });

export interface GoogleAppsDriveLabelsV2LabelLimits {
  /** The maximum number of draft revisions that will be kept before deleting old drafts. */
  maxDraftRevisions?: number;
  /** The maximum number of characters allowed for the title. */
  maxTitleLength?: number;
  /** The limits for fields. */
  fieldLimits?: GoogleAppsDriveLabelsV2FieldLimits;
  /** Resource name. */
  name?: string;
  /** The maximum number of published fields that can be deleted. */
  maxDeletedFields?: number;
  /** The maximum number of characters allowed for the description. */
  maxDescriptionLength?: number;
  /** The maximum number of fields allowed within the label. */
  maxFields?: number;
}

export const GoogleAppsDriveLabelsV2LabelLimits =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDraftRevisions: Schema.optional(Schema.Number),
    maxTitleLength: Schema.optional(Schema.Number),
    fieldLimits: Schema.optional(GoogleAppsDriveLabelsV2FieldLimits),
    name: Schema.optional(Schema.String),
    maxDeletedFields: Schema.optional(Schema.Number),
    maxDescriptionLength: Schema.optional(Schema.Number),
    maxFields: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2LabelLimits" });

export interface GoogleAppsDriveLabelsV2DisableLabelRequest {
  /** Disabled policy to use. */
  disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
  /** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
  languageCode?: string;
  /** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as a short-hand for updating every field. */
  updateMask?: string;
  /** Provides control over how write requests are executed. Defaults to unset, which means the last write wins. */
  writeControl?: GoogleAppsDriveLabelsV2WriteControl;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const GoogleAppsDriveLabelsV2DisableLabelRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabledPolicy: Schema.optional(
      GoogleAppsDriveLabelsV2LifecycleDisabledPolicy,
    ),
    languageCode: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
    writeControl: Schema.optional(GoogleAppsDriveLabelsV2WriteControl),
    useAdminAccess: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsDriveLabelsV2DisableLabelRequest" });

export interface GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest {
  /** Required. Indicates how the applied label and field values should be copied when a Drive item is copied. */
  copyMode?:
    | "COPY_MODE_UNSPECIFIED"
    | "DO_NOT_COPY"
    | "ALWAYS_COPY"
    | "COPY_APPLIABLE"
    | (string & {});
  /** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
  languageCode?: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** When specified, only certain fields belonging to the indicated view will be returned. */
  view?: "LABEL_VIEW_BASIC" | "LABEL_VIEW_FULL" | (string & {});
}

export const GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    copyMode: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    useAdminAccess: Schema.optional(Schema.Boolean),
    view: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest",
  });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetCapabilitiesUsersRequest {
  /** The customer to scope this request to. For example: `customers/abcd1234`. If unset, it will return settings within the current customer. */
  customer?: string;
  /** Required. The resource name of the user. Only "users/me/capabilities" is supported. */
  name: string;
}

export const GetCapabilitiesUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCapabilitiesUsersRequest>;

export type GetCapabilitiesUsersResponse =
  GoogleAppsDriveLabelsV2UserCapabilities;
export const GetCapabilitiesUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2UserCapabilities;

export type GetCapabilitiesUsersError = DefaultErrors;

/** Gets the user capabilities. */
export const getCapabilitiesUsers: API.OperationMethod<
  GetCapabilitiesUsersRequest,
  GetCapabilitiesUsersResponse,
  GetCapabilitiesUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCapabilitiesUsersRequest,
  output: GetCapabilitiesUsersResponse,
  errors: [],
}));

export interface ListLabelsRequest {
  /** The customer to scope this list request to. For example: `customers/abcd1234`. If unset, will return all labels within the current customer. */
  customer?: string;
  /** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used. */
  languageCode?: string;
  /** Maximum number of labels to return per page. Default: 50. Max: 200. */
  pageSize?: number;
  /** Specifies the level of access the user must have on the returned labels. The minimum role a user must have on a label. Defaults to `READER`. */
  minimumRole?:
    | "LABEL_ROLE_UNSPECIFIED"
    | "READER"
    | "APPLIER"
    | "ORGANIZER"
    | "EDITOR"
    | (string & {});
  /** The token of the page to return. */
  pageToken?: string;
  /** Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`). */
  publishedOnly?: boolean;
  /** When specified, only certain fields belonging to the indicated view are returned. */
  view?: "LABEL_VIEW_BASIC" | "LABEL_VIEW_FULL" | (string & {});
  /** Set to `true` in order to use the user's admin credentials. This will return all labels within the customer. */
  useAdminAccess?: boolean;
}

export const ListLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  minimumRole: Schema.optional(Schema.String).pipe(T.HttpQuery("minimumRole")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  publishedOnly: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("publishedOnly"),
  ),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v2/labels" }),
  svc,
) as unknown as Schema.Schema<ListLabelsRequest>;

export type ListLabelsResponse = GoogleAppsDriveLabelsV2ListLabelsResponse;
export const ListLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2ListLabelsResponse;

export type ListLabelsError = DefaultErrors;

/** List labels. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label). */
export const listLabels: API.PaginatedOperationMethod<
  ListLabelsRequest,
  ListLabelsResponse,
  ListLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLabelsRequest,
  output: ListLabelsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetLabelsRequest {
  /** When specified, only certain fields belonging to the indicated view are returned. */
  view?: "LABEL_VIEW_BASIC" | "LABEL_VIEW_FULL" | (string & {});
  /** Required. Label resource name. May be any of: * `labels/{id}` (equivalent to labels/{id}@latest) * `labels/{id}@latest` * `labels/{id}@published` * `labels/{id}@{revision_id}` */
  name: string;
  /** Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used. */
  languageCode?: string;
}

export const GetLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  name: Schema.String.pipe(T.HttpPath("name")),
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v2/{name}" }),
  svc,
) as unknown as Schema.Schema<GetLabelsRequest>;

export type GetLabelsResponse = GoogleAppsDriveLabelsV2Label;
export const GetLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2Label;

export type GetLabelsError = DefaultErrors;

/** Get a label by its resource name. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label). Resource name may be any of: * `labels/{id}` - See `labels/{id}@latest` * `labels/{id}@latest` - Gets the latest revision of the label. * `labels/{id}@published` - Gets the current published revision of the label. * `labels/{id}@{revision_id}` - Gets the label at the specified revision ID. */
export const getLabels: API.OperationMethod<
  GetLabelsRequest,
  GetLabelsResponse,
  GetLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLabelsRequest,
  output: GetLabelsResponse,
  errors: [],
}));

export interface CreateLabelsRequest {
  /** The BCP-47 language code to use for evaluating localized field labels in response. When not specified, values in the default configured language will be used. */
  languageCode?: string;
  /** Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access. */
  useAdminAccess?: boolean;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2Label;
}

export const CreateLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
  body: Schema.optional(GoogleAppsDriveLabelsV2Label).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v2/labels", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateLabelsRequest>;

export type CreateLabelsResponse = GoogleAppsDriveLabelsV2Label;
export const CreateLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2Label;

export type CreateLabelsError = DefaultErrors;

/** Creates a label. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label). */
export const createLabels: API.OperationMethod<
  CreateLabelsRequest,
  CreateLabelsResponse,
  CreateLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLabelsRequest,
  output: CreateLabelsResponse,
  errors: [],
}));

export interface UpdateLabelEnabledAppSettingsLabelsRequest {
  /** Required. The resource name of the label to update. The resource name of the label to update. */
  name: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2UpdateLabelEnabledAppSettingsRequest;
}

export const UpdateLabelEnabledAppSettingsLabelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleAppsDriveLabelsV2UpdateLabelEnabledAppSettingsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{name}:updateLabelEnabledAppSettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateLabelEnabledAppSettingsLabelsRequest>;

export type UpdateLabelEnabledAppSettingsLabelsResponse =
  GoogleAppsDriveLabelsV2Label;
export const UpdateLabelEnabledAppSettingsLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2Label;

export type UpdateLabelEnabledAppSettingsLabelsError = DefaultErrors;

/** Updates a label's `EnabledAppSettings`. Enabling a label in a Google Workspace app allows it to be used in that app. This change isn't revisioned, doesn't require publishing, and takes effect immediately. */
export const updateLabelEnabledAppSettingsLabels: API.OperationMethod<
  UpdateLabelEnabledAppSettingsLabelsRequest,
  UpdateLabelEnabledAppSettingsLabelsResponse,
  UpdateLabelEnabledAppSettingsLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLabelEnabledAppSettingsLabelsRequest,
  output: UpdateLabelEnabledAppSettingsLabelsResponse,
  errors: [],
}));

export interface UpdatePermissionsLabelsRequest {
  /** Required. The parent label resource name. */
  parent: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2LabelPermission;
}

export const UpdatePermissionsLabelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    body: Schema.optional(GoogleAppsDriveLabelsV2LabelPermission).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{parent}/permissions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdatePermissionsLabelsRequest>;

export type UpdatePermissionsLabelsResponse =
  GoogleAppsDriveLabelsV2LabelPermission;
export const UpdatePermissionsLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2LabelPermission;

export type UpdatePermissionsLabelsError = DefaultErrors;

/** Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const updatePermissionsLabels: API.OperationMethod<
  UpdatePermissionsLabelsRequest,
  UpdatePermissionsLabelsResponse,
  UpdatePermissionsLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePermissionsLabelsRequest,
  output: UpdatePermissionsLabelsResponse,
  errors: [],
}));

export interface PublishLabelsRequest {
  /** Required. Label resource name. */
  name: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2PublishLabelRequest;
}

export const PublishLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(GoogleAppsDriveLabelsV2PublishLabelRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({ method: "POST", path: "v2/{name}:publish", hasBody: true }),
  svc,
) as unknown as Schema.Schema<PublishLabelsRequest>;

export type PublishLabelsResponse = GoogleAppsDriveLabelsV2Label;
export const PublishLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2Label;

export type PublishLabelsError = DefaultErrors;

/** Publish all draft changes to the label. Once published, the label may not return to its draft state. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label). Publishing a label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle). Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label will be rejected. For example, the following changes to a label will be rejected after the label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * `Field.FieldType` cannot be changed. * Changes to field validation options cannot reject something that was previously accepted. * Reducing the maximum entries. */
export const publishLabels: API.OperationMethod<
  PublishLabelsRequest,
  PublishLabelsResponse,
  PublishLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishLabelsRequest,
  output: PublishLabelsResponse,
  errors: [],
}));

export interface DisableLabelsRequest {
  /** Required. Label resource name. */
  name: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2DisableLabelRequest;
}

export const DisableLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(GoogleAppsDriveLabelsV2DisableLabelRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({ method: "POST", path: "v2/{name}:disable", hasBody: true }),
  svc,
) as unknown as Schema.Schema<DisableLabelsRequest>;

export type DisableLabelsResponse = GoogleAppsDriveLabelsV2Label;
export const DisableLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2Label;

export type DisableLabelsError = DefaultErrors;

/** Disable a published label. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Disabling a label will result in a new disabled published revision based on the current published revision. If there's a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`. */
export const disableLabels: API.OperationMethod<
  DisableLabelsRequest,
  DisableLabelsResponse,
  DisableLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableLabelsRequest,
  output: DisableLabelsResponse,
  errors: [],
}));

export interface DeltaLabelsRequest {
  /** Required. The resource name of the label to update. */
  name: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest;
}

export const DeltaLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({ method: "POST", path: "v2/{name}:delta", hasBody: true }),
  svc,
) as unknown as Schema.Schema<DeltaLabelsRequest>;

export type DeltaLabelsResponse =
  GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse;
export const DeltaLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse;

export type DeltaLabelsError = DefaultErrors;

/** Updates a single label by applying a set of update requests resulting in a new draft revision. For more information, see [Update a label](https://developers.google.com/workspace/drive/labels/guides/update-label). The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive items. */
export const deltaLabels: API.OperationMethod<
  DeltaLabelsRequest,
  DeltaLabelsResponse,
  DeltaLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeltaLabelsRequest,
  output: DeltaLabelsResponse,
  errors: [],
}));

export interface UpdateLabelCopyModeLabelsRequest {
  /** Required. The resource name of the label to update. */
  name: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest;
}

export const UpdateLabelCopyModeLabelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{name}:updateLabelCopyMode",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateLabelCopyModeLabelsRequest>;

export type UpdateLabelCopyModeLabelsResponse = GoogleAppsDriveLabelsV2Label;
export const UpdateLabelCopyModeLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2Label;

export type UpdateLabelCopyModeLabelsError = DefaultErrors;

/** Updates a label's `CopyMode`. Changes to this policy aren't revisioned, don't require publishing, and take effect immediately. */
export const updateLabelCopyModeLabels: API.OperationMethod<
  UpdateLabelCopyModeLabelsRequest,
  UpdateLabelCopyModeLabelsResponse,
  UpdateLabelCopyModeLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLabelCopyModeLabelsRequest,
  output: UpdateLabelCopyModeLabelsResponse,
  errors: [],
}));

export interface DeleteLabelsRequest {
  /** The revision ID of the label that the write request will be applied to. If this isn't the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. */
  "writeControl.requiredRevisionId"?: string;
  /** Required. Label resource name. */
  name: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const DeleteLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "writeControl.requiredRevisionId": Schema.optional(Schema.String).pipe(
    T.HttpQuery("writeControl.requiredRevisionId"),
  ),
  name: Schema.String.pipe(T.HttpPath("name")),
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
}).pipe(
  T.Http({ method: "DELETE", path: "v2/{name}" }),
  svc,
) as unknown as Schema.Schema<DeleteLabelsRequest>;

export type DeleteLabelsResponse = GoogleProtobufEmpty;
export const DeleteLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteLabelsError = DefaultErrors;

/** Permanently deletes a label and related metadata on Drive items. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Once deleted, the label and related Drive item metadata will be deleted. Only draft labels and disabled labels may be deleted. */
export const deleteLabels: API.OperationMethod<
  DeleteLabelsRequest,
  DeleteLabelsResponse,
  DeleteLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLabelsRequest,
  output: DeleteLabelsResponse,
  errors: [],
}));

export interface EnableLabelsRequest {
  /** Required. Label resource name. */
  name: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2EnableLabelRequest;
}

export const EnableLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(GoogleAppsDriveLabelsV2EnableLabelRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({ method: "POST", path: "v2/{name}:enable", hasBody: true }),
  svc,
) as unknown as Schema.Schema<EnableLabelsRequest>;

export type EnableLabelsResponse = GoogleAppsDriveLabelsV2Label;
export const EnableLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2Label;

export type EnableLabelsError = DefaultErrors;

/** Enable a disabled label and restore it to its published state. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). This will result in a new published revision based on the current disabled published revision. If there's an existing disabled draft revision, a new revision will be created based on that draft and will be enabled. */
export const enableLabels: API.OperationMethod<
  EnableLabelsRequest,
  EnableLabelsResponse,
  EnableLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableLabelsRequest,
  output: EnableLabelsResponse,
  errors: [],
}));

export interface UpdatePermissionsLabelsRevisionsRequest {
  /** Required. The parent label resource name. */
  parent: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2LabelPermission;
}

export const UpdatePermissionsLabelsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    body: Schema.optional(GoogleAppsDriveLabelsV2LabelPermission).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{parent}/permissions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdatePermissionsLabelsRevisionsRequest>;

export type UpdatePermissionsLabelsRevisionsResponse =
  GoogleAppsDriveLabelsV2LabelPermission;
export const UpdatePermissionsLabelsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2LabelPermission;

export type UpdatePermissionsLabelsRevisionsError = DefaultErrors;

/** Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const updatePermissionsLabelsRevisions: API.OperationMethod<
  UpdatePermissionsLabelsRevisionsRequest,
  UpdatePermissionsLabelsRevisionsResponse,
  UpdatePermissionsLabelsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePermissionsLabelsRevisionsRequest,
  output: UpdatePermissionsLabelsRevisionsResponse,
  errors: [],
}));

export interface CreateLabelsRevisionsPermissionsRequest {
  /** Required. The parent label resource name on the label permission is created. Format: `labels/{label}`. */
  parent: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2LabelPermission;
}

export const CreateLabelsRevisionsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    body: Schema.optional(GoogleAppsDriveLabelsV2LabelPermission).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{parent}/permissions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateLabelsRevisionsPermissionsRequest>;

export type CreateLabelsRevisionsPermissionsResponse =
  GoogleAppsDriveLabelsV2LabelPermission;
export const CreateLabelsRevisionsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2LabelPermission;

export type CreateLabelsRevisionsPermissionsError = DefaultErrors;

/** Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const createLabelsRevisionsPermissions: API.OperationMethod<
  CreateLabelsRevisionsPermissionsRequest,
  CreateLabelsRevisionsPermissionsResponse,
  CreateLabelsRevisionsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLabelsRevisionsPermissionsRequest,
  output: CreateLabelsRevisionsPermissionsResponse,
  errors: [],
}));

export interface DeleteLabelsRevisionsPermissionsRequest {
  /** Required. Label permission resource name. */
  name: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const DeleteLabelsRevisionsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteLabelsRevisionsPermissionsRequest>;

export type DeleteLabelsRevisionsPermissionsResponse = GoogleProtobufEmpty;
export const DeleteLabelsRevisionsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteLabelsRevisionsPermissionsError = DefaultErrors;

/** Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const deleteLabelsRevisionsPermissions: API.OperationMethod<
  DeleteLabelsRevisionsPermissionsRequest,
  DeleteLabelsRevisionsPermissionsResponse,
  DeleteLabelsRevisionsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLabelsRevisionsPermissionsRequest,
  output: DeleteLabelsRevisionsPermissionsResponse,
  errors: [],
}));

export interface BatchDeleteLabelsRevisionsPermissionsRequest {
  /** Required. The parent label resource name shared by all permissions being deleted. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. */
  parent: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest;
}

export const BatchDeleteLabelsRevisionsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{parent}/permissions:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteLabelsRevisionsPermissionsRequest>;

export type BatchDeleteLabelsRevisionsPermissionsResponse = GoogleProtobufEmpty;
export const BatchDeleteLabelsRevisionsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type BatchDeleteLabelsRevisionsPermissionsError = DefaultErrors;

/** Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const batchDeleteLabelsRevisionsPermissions: API.OperationMethod<
  BatchDeleteLabelsRevisionsPermissionsRequest,
  BatchDeleteLabelsRevisionsPermissionsResponse,
  BatchDeleteLabelsRevisionsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteLabelsRevisionsPermissionsRequest,
  output: BatchDeleteLabelsRevisionsPermissionsResponse,
  errors: [],
}));

export interface BatchUpdateLabelsRevisionsPermissionsRequest {
  /** Required. The parent label resource name shared by all permissions being updated. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. */
  parent: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest;
}

export const BatchUpdateLabelsRevisionsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{parent}/permissions:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateLabelsRevisionsPermissionsRequest>;

export type BatchUpdateLabelsRevisionsPermissionsResponse =
  GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse;
export const BatchUpdateLabelsRevisionsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse;

export type BatchUpdateLabelsRevisionsPermissionsError = DefaultErrors;

/** Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const batchUpdateLabelsRevisionsPermissions: API.OperationMethod<
  BatchUpdateLabelsRevisionsPermissionsRequest,
  BatchUpdateLabelsRevisionsPermissionsResponse,
  BatchUpdateLabelsRevisionsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateLabelsRevisionsPermissionsRequest,
  output: BatchUpdateLabelsRevisionsPermissionsResponse,
  errors: [],
}));

export interface ListLabelsRevisionsPermissionsRequest {
  /** Maximum number of permissions to return per page. Default: 50. Max: 200. */
  pageSize?: number;
  /** The token of the page to return. */
  pageToken?: string;
  /** Required. The parent label resource name on which label permissions are listed. Format: `labels/{label}`. */
  parent: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const ListLabelsRevisionsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/permissions" }),
    svc,
  ) as unknown as Schema.Schema<ListLabelsRevisionsPermissionsRequest>;

export type ListLabelsRevisionsPermissionsResponse =
  GoogleAppsDriveLabelsV2ListLabelPermissionsResponse;
export const ListLabelsRevisionsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2ListLabelPermissionsResponse;

export type ListLabelsRevisionsPermissionsError = DefaultErrors;

/** Lists a label's permissions. */
export const listLabelsRevisionsPermissions: API.PaginatedOperationMethod<
  ListLabelsRevisionsPermissionsRequest,
  ListLabelsRevisionsPermissionsResponse,
  ListLabelsRevisionsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLabelsRevisionsPermissionsRequest,
  output: ListLabelsRevisionsPermissionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListLabelsRevisionsLocksRequest {
  /** Maximum number of locks to return per page. Default: 100. Max: 200. */
  pageSize?: number;
  /** The token of the page to return. */
  pageToken?: string;
  /** Required. Label on which locks are applied. Format: `labels/{label}`. */
  parent: string;
}

export const ListLabelsRevisionsLocksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/locks" }),
    svc,
  ) as unknown as Schema.Schema<ListLabelsRevisionsLocksRequest>;

export type ListLabelsRevisionsLocksResponse =
  GoogleAppsDriveLabelsV2ListLabelLocksResponse;
export const ListLabelsRevisionsLocksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2ListLabelLocksResponse;

export type ListLabelsRevisionsLocksError = DefaultErrors;

/** Lists the label locks on a label. */
export const listLabelsRevisionsLocks: API.PaginatedOperationMethod<
  ListLabelsRevisionsLocksRequest,
  ListLabelsRevisionsLocksResponse,
  ListLabelsRevisionsLocksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLabelsRevisionsLocksRequest,
  output: ListLabelsRevisionsLocksResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListLabelsPermissionsRequest {
  /** Maximum number of permissions to return per page. Default: 50. Max: 200. */
  pageSize?: number;
  /** The token of the page to return. */
  pageToken?: string;
  /** Required. The parent label resource name on which label permissions are listed. Format: `labels/{label}`. */
  parent: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const ListLabelsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/permissions" }),
    svc,
  ) as unknown as Schema.Schema<ListLabelsPermissionsRequest>;

export type ListLabelsPermissionsResponse =
  GoogleAppsDriveLabelsV2ListLabelPermissionsResponse;
export const ListLabelsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2ListLabelPermissionsResponse;

export type ListLabelsPermissionsError = DefaultErrors;

/** Lists a label's permissions. */
export const listLabelsPermissions: API.PaginatedOperationMethod<
  ListLabelsPermissionsRequest,
  ListLabelsPermissionsResponse,
  ListLabelsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLabelsPermissionsRequest,
  output: ListLabelsPermissionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchUpdateLabelsPermissionsRequest {
  /** Required. The parent label resource name shared by all permissions being updated. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. */
  parent: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest;
}

export const BatchUpdateLabelsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{parent}/permissions:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateLabelsPermissionsRequest>;

export type BatchUpdateLabelsPermissionsResponse =
  GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse;
export const BatchUpdateLabelsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse;

export type BatchUpdateLabelsPermissionsError = DefaultErrors;

/** Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const batchUpdateLabelsPermissions: API.OperationMethod<
  BatchUpdateLabelsPermissionsRequest,
  BatchUpdateLabelsPermissionsResponse,
  BatchUpdateLabelsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateLabelsPermissionsRequest,
  output: BatchUpdateLabelsPermissionsResponse,
  errors: [],
}));

export interface BatchDeleteLabelsPermissionsRequest {
  /** Required. The parent label resource name shared by all permissions being deleted. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. */
  parent: string;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest;
}

export const BatchDeleteLabelsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{parent}/permissions:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteLabelsPermissionsRequest>;

export type BatchDeleteLabelsPermissionsResponse = GoogleProtobufEmpty;
export const BatchDeleteLabelsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type BatchDeleteLabelsPermissionsError = DefaultErrors;

/** Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const batchDeleteLabelsPermissions: API.OperationMethod<
  BatchDeleteLabelsPermissionsRequest,
  BatchDeleteLabelsPermissionsResponse,
  BatchDeleteLabelsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteLabelsPermissionsRequest,
  output: BatchDeleteLabelsPermissionsResponse,
  errors: [],
}));

export interface DeleteLabelsPermissionsRequest {
  /** Required. Label permission resource name. */
  name: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
}

export const DeleteLabelsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteLabelsPermissionsRequest>;

export type DeleteLabelsPermissionsResponse = GoogleProtobufEmpty;
export const DeleteLabelsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteLabelsPermissionsError = DefaultErrors;

/** Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const deleteLabelsPermissions: API.OperationMethod<
  DeleteLabelsPermissionsRequest,
  DeleteLabelsPermissionsResponse,
  DeleteLabelsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLabelsPermissionsRequest,
  output: DeleteLabelsPermissionsResponse,
  errors: [],
}));

export interface CreateLabelsPermissionsRequest {
  /** Required. The parent label resource name on the label permission is created. Format: `labels/{label}`. */
  parent: string;
  /** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. */
  useAdminAccess?: boolean;
  /** Request body */
  body?: GoogleAppsDriveLabelsV2LabelPermission;
}

export const CreateLabelsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    body: Schema.optional(GoogleAppsDriveLabelsV2LabelPermission).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{parent}/permissions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateLabelsPermissionsRequest>;

export type CreateLabelsPermissionsResponse =
  GoogleAppsDriveLabelsV2LabelPermission;
export const CreateLabelsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2LabelPermission;

export type CreateLabelsPermissionsError = DefaultErrors;

/** Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing. */
export const createLabelsPermissions: API.OperationMethod<
  CreateLabelsPermissionsRequest,
  CreateLabelsPermissionsResponse,
  CreateLabelsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLabelsPermissionsRequest,
  output: CreateLabelsPermissionsResponse,
  errors: [],
}));

export interface ListLabelsLocksRequest {
  /** The token of the page to return. */
  pageToken?: string;
  /** Maximum number of locks to return per page. Default: 100. Max: 200. */
  pageSize?: number;
  /** Required. Label on which locks are applied. Format: `labels/{label}`. */
  parent: string;
}

export const ListLabelsLocksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  },
).pipe(
  T.Http({ method: "GET", path: "v2/{parent}/locks" }),
  svc,
) as unknown as Schema.Schema<ListLabelsLocksRequest>;

export type ListLabelsLocksResponse =
  GoogleAppsDriveLabelsV2ListLabelLocksResponse;
export const ListLabelsLocksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2ListLabelLocksResponse;

export type ListLabelsLocksError = DefaultErrors;

/** Lists the label locks on a label. */
export const listLabelsLocks: API.PaginatedOperationMethod<
  ListLabelsLocksRequest,
  ListLabelsLocksResponse,
  ListLabelsLocksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLabelsLocksRequest,
  output: ListLabelsLocksResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetLabelLimitsRequest {
  /** Required. Label revision resource name must be: "limits/label". */
  name?: string;
}

export const GetLabelLimitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
}).pipe(
  T.Http({ method: "GET", path: "v2/limits/label" }),
  svc,
) as unknown as Schema.Schema<GetLabelLimitsRequest>;

export type GetLabelLimitsResponse = GoogleAppsDriveLabelsV2LabelLimits;
export const GetLabelLimitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAppsDriveLabelsV2LabelLimits;

export type GetLabelLimitsError = DefaultErrors;

/** Get the constraints on the structure of a label; such as, the maximum number of fields allowed and maximum length of the label title. */
export const getLabelLimits: API.OperationMethod<
  GetLabelLimitsRequest,
  GetLabelLimitsResponse,
  GetLabelLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLabelLimitsRequest,
  output: GetLabelLimitsResponse,
  errors: [],
}));
