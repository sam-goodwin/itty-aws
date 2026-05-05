// ==========================================================================
// Admin SDK API (admin reports_v1)
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
  name: "admin",
  version: "reports_v1",
  rootUrl: "https://admin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GroupIdentity {
  /** Group gaia id. */
  id?: string;
  /** Group email. */
  groupEmail?: string;
}

export const GroupIdentity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  groupEmail: Schema.optional(Schema.String),
}).annotate({ identifier: "GroupIdentity" });

export interface CustomerIdentity {
  /** Customer id. */
  id?: string;
}

export const CustomerIdentity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomerIdentity" });

export interface UserIdentity {
  /** User gaia id. */
  id?: string;
  /** User email. */
  userEmail?: string;
}

export const UserIdentity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  userEmail: Schema.optional(Schema.String),
}).annotate({ identifier: "UserIdentity" });

export interface OwnerIdentity {
  /** Identity of the group who owns the resource. */
  groupIdentity?: GroupIdentity;
  /** Identity of the Google Workspace customer who owns the resource. */
  customerIdentity?: CustomerIdentity;
  /** Identity of the user who owns the resource. */
  userIdentity?: UserIdentity;
}

export const OwnerIdentity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupIdentity: Schema.optional(GroupIdentity),
  customerIdentity: Schema.optional(CustomerIdentity),
  userIdentity: Schema.optional(UserIdentity),
}).annotate({ identifier: "OwnerIdentity" });

export interface ActivityNetworkInfo {
  /** ISO 3166-1 alpha-2 region code of the user doing the action. */
  regionCode?: string;
  /** ISO 3166-2 region code (states and provinces) for countries of the user doing the action. */
  subdivisionCode?: string;
  /** IP Address of the user doing the action. */
  ipAsn?: ReadonlyArray<number>;
}

export const ActivityNetworkInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  regionCode: Schema.optional(Schema.String),
  subdivisionCode: Schema.optional(Schema.String),
  ipAsn: Schema.optional(Schema.Array(Schema.Number)),
}).annotate({ identifier: "ActivityNetworkInfo" });

export interface FieldValueUserValue {
  /** Email of the user. */
  email?: string;
}

export const FieldValueUserValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
}).annotate({ identifier: "FieldValueUserValue" });

export interface FieldValueSelectionValue {
  /** Identifier of the selection. */
  id?: string;
  /** Whether the selection is badged. */
  badged?: boolean;
  /** Display name of the selection. */
  displayName?: string;
}

export const FieldValueSelectionValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    badged: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "FieldValueSelectionValue" });

export interface FieldValueSelectionListValue {
  /** List of selections. */
  values?: ReadonlyArray<FieldValueSelectionValue>;
}

export const FieldValueSelectionListValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(FieldValueSelectionValue)),
  }).annotate({ identifier: "FieldValueSelectionListValue" });

export interface FieldValueTextListValue {
  /** List of text values. */
  values?: ReadonlyArray<string>;
}

export const FieldValueTextListValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FieldValueTextListValue" });

export interface Admin_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Admin_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  month: Schema.optional(Schema.Number),
  year: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
}).annotate({ identifier: "Admin_Date" });

export interface FieldValueUserListValue {
  /** List of users. */
  values?: ReadonlyArray<FieldValueUserValue>;
}

export const FieldValueUserListValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(FieldValueUserValue)),
  }).annotate({ identifier: "FieldValueUserListValue" });

export interface Reason {
  /** The type of the reason. */
  reasonType?: string;
}

export const Reason = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reasonType: Schema.optional(Schema.String),
}).annotate({ identifier: "Reason" });

export interface FieldValue {
  /** Setting an integer value. */
  integerValue?: string;
  /** Display name of the field */
  displayName?: string;
  /** Setting a selection value by selecting a single value from a dropdown. */
  selectionValue?: FieldValueSelectionValue;
  /** Setting a selection list value by selecting multiple values from a dropdown. */
  selectionListValue?: FieldValueSelectionListValue;
  /** Setting a text list value. */
  textListValue?: FieldValueTextListValue;
  /** Setting a date value. */
  dateValue?: Admin_Date;
  /** Type of the field */
  type?: string;
  /** Setting a user value by selecting a single user. */
  userValue?: FieldValueUserValue;
  /** Setting a text value. */
  textValue?: string;
  /** Setting a user list value by selecting multiple users. */
  userListValue?: FieldValueUserListValue;
  /** The reason why the field was applied to the label. */
  reason?: Reason;
  /** Identifier of the field */
  id?: string;
  /** Setting a long text value. */
  longTextValue?: string;
  /** If the field is unset, this will be true. */
  unsetValue?: boolean;
}

export const FieldValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  integerValue: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  selectionValue: Schema.optional(FieldValueSelectionValue),
  selectionListValue: Schema.optional(FieldValueSelectionListValue),
  textListValue: Schema.optional(FieldValueTextListValue),
  dateValue: Schema.optional(Admin_Date),
  type: Schema.optional(Schema.String),
  userValue: Schema.optional(FieldValueUserValue),
  textValue: Schema.optional(Schema.String),
  userListValue: Schema.optional(FieldValueUserListValue),
  reason: Schema.optional(Reason),
  id: Schema.optional(Schema.String),
  longTextValue: Schema.optional(Schema.String),
  unsetValue: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "FieldValue" });

export interface AppliedLabel {
  /** Title of the label */
  title?: string;
  /** List of fields which are part of the label and have been set by the user. If label has a field which was not set by the user, it would not be present in this list. */
  fieldValues?: ReadonlyArray<FieldValue>;
  /** Identifier of the label - Only the label id, not the full OnePlatform resource name. */
  id?: string;
  /** The reason why the label was applied on the resource. */
  reason?: Reason;
}

export const AppliedLabel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  fieldValues: Schema.optional(Schema.Array(FieldValue)),
  id: Schema.optional(Schema.String),
  reason: Schema.optional(Reason),
}).annotate({ identifier: "AppliedLabel" });

export interface UsageReport {
  /** The type of API resource. For a usage report, the value is `admin#reports#usageReport`. */
  kind?: string;
  /** Output only. The date of the report request. */
  date?: string;
  /** Output only. Parameter value pairs for various applications. For the Entity Usage Report parameters and values, see [the Entity Usage parameters reference](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/entities). */
  parameters?: ReadonlyArray<{
    msgValue?: ReadonlyArray<Record<string, unknown>>;
    datetimeValue?: string;
    name?: string;
    intValue?: string;
    stringValue?: string;
    boolValue?: boolean;
  }>;
  /** ETag of the resource. */
  etag?: string;
  /** Output only. Information about the type of the item. */
  entity?: {
    profileId?: string;
    entityId?: string;
    customerId?: string;
    userEmail?: string;
    type?: string;
  };
}

export const UsageReport = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  date: Schema.optional(Schema.String),
  parameters: Schema.optional(
    Schema.Array(
      Schema.Struct({
        msgValue: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        datetimeValue: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        intValue: Schema.optional(Schema.String),
        stringValue: Schema.optional(Schema.String),
        boolValue: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
  etag: Schema.optional(Schema.String),
  entity: Schema.optional(
    Schema.Struct({
      profileId: Schema.optional(Schema.String),
      entityId: Schema.optional(Schema.String),
      customerId: Schema.optional(Schema.String),
      userEmail: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  ),
}).annotate({ identifier: "UsageReport" });

export interface UsageReports {
  /** The type of API resource. For a usage report, the value is `admin#reports#usageReports`. */
  kind?: string;
  /** Warnings, if any. */
  warnings?: ReadonlyArray<{
    code?: string;
    message?: string;
    data?: ReadonlyArray<{ key?: string; value?: string }>;
  }>;
  /** Various application parameter records. */
  usageReports?: ReadonlyArray<UsageReport>;
  /** Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string. */
  nextPageToken?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const UsageReports = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  warnings: Schema.optional(
    Schema.Array(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        data: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  ),
  usageReports: Schema.optional(Schema.Array(UsageReport)),
  nextPageToken: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "UsageReports" });

export interface Channel {
  /** A UUID or similar unique string that identifies this channel. */
  id?: string;
  /** A version-specific identifier for the watched resource. */
  resourceUri?: string;
  /** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
  token?: string;
  /** The type of delivery mechanism used for this channel. The value should be set to `"web_hook"`. */
  type?: string;
  /** Identifies this as a notification channel used to watch for changes to a resource, which is "`api#channel`". */
  kind?: string;
  /** A Boolean value to indicate whether payload is wanted. A payload is data that is sent in the body of an HTTP POST, PUT, or PATCH message and contains important information about the request. Optional. */
  payload?: boolean;
  /** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
  expiration?: string;
  /** The address where notifications are delivered for this channel. */
  address?: string;
  /** Additional parameters controlling delivery channel behavior. Optional. */
  params?: Record<string, string>;
  /** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
  resourceId?: string;
}

export const Channel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  resourceUri: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  payload: Schema.optional(Schema.Boolean),
  expiration: Schema.optional(Schema.String),
  address: Schema.optional(Schema.String),
  params: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  resourceId: Schema.optional(Schema.String),
}).annotate({ identifier: "Channel" });

export interface ActivityEventsStatus {
  /** Error code of the event. Note: Field can be empty. */
  errorCode?: string;
  /** Status code of the event. Note: Field can be empty. */
  httpStatusCode?: number;
  /** Status of the event. Possible values if not empty: - UNKNOWN_EVENT_STATUS - SUCCEEDED - SUCCEEDED_WITH_WARNINGS - FAILED - SKIPPED */
  eventStatus?: string;
  /** Error message of the event. Note: Field can be empty. */
  errorMessage?: string;
}

export const ActivityEventsStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorCode: Schema.optional(Schema.String),
  httpStatusCode: Schema.optional(Schema.Number),
  eventStatus: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "ActivityEventsStatus" });

export interface NestedParameter {
  /** Multiple string values of the parameter. */
  multiValue?: ReadonlyArray<string>;
  /** Multiple integer values of the parameter. */
  multiIntValue?: ReadonlyArray<string>;
  /** Boolean value of the parameter. */
  boolValue?: boolean;
  /** String value of the parameter. */
  value?: string;
  /** Integer value of the parameter. */
  intValue?: string;
  /** Multiple boolean values of the parameter. */
  multiBoolValue?: ReadonlyArray<boolean>;
  /** The name of the parameter. */
  name?: string;
}

export const NestedParameter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  multiValue: Schema.optional(Schema.Array(Schema.String)),
  multiIntValue: Schema.optional(Schema.Array(Schema.String)),
  boolValue: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.String),
  intValue: Schema.optional(Schema.String),
  multiBoolValue: Schema.optional(Schema.Array(Schema.Boolean)),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "NestedParameter" });

export interface OwnerDetails {
  /** Type of the owner of the resource. */
  ownerType?: string;
  /** Identity details of the owner(s) of the resource. */
  ownerIdentity?: ReadonlyArray<OwnerIdentity>;
}

export const OwnerDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ownerType: Schema.optional(Schema.String),
  ownerIdentity: Schema.optional(Schema.Array(OwnerIdentity)),
}).annotate({ identifier: "OwnerDetails" });

export interface ResourceDetails {
  /** List of labels applied on the resource */
  appliedLabels?: ReadonlyArray<AppliedLabel>;
  /** Owner details of the resource. */
  ownerDetails?: OwnerDetails;
  /** Identifier of the resource, such as a doc_id for a Drive document, a conference_id for a Meet conference, or a "gaia_id/rfc2822_message_id" for an email. */
  id?: string;
  /** Defines relationship of the resource to the events */
  relation?: string;
  /** Title of the resource. For instance, in case of a drive document, this would be the title of the document. In case of an email, this would be the subject. */
  title?: string;
  /** Type of the resource - document, email, chat message */
  type?: string;
}

export const ResourceDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appliedLabels: Schema.optional(Schema.Array(AppliedLabel)),
  ownerDetails: Schema.optional(OwnerDetails),
  id: Schema.optional(Schema.String),
  relation: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "ResourceDetails" });

export interface Activity {
  /** The type of API resource. For an activity report, the value is `audit#activity`. */
  kind?: string;
  /** This is the domain that is affected by the report's event. For example domain of Admin console or the Drive application's document owner. */
  ownerDomain?: string;
  /** IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into Google Workspace, which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. The API supports IPv4 and IPv6. */
  ipAddress?: string;
  /** Network information of the user doing the action. */
  networkInfo?: ActivityNetworkInfo;
  /** Details of the resource on which the action was performed. */
  resourceDetails?: ReadonlyArray<ResourceDetails>;
  /** Unique identifier for each activity record. */
  id?: {
    applicationName?: string;
    customerId?: string;
    time?: string;
    uniqueQualifier?: string;
  };
  /** ETag of the entry. */
  etag?: string;
  /** Activity events in the report. */
  events?: ReadonlyArray<{
    parameters?: ReadonlyArray<{
      multiValue?: ReadonlyArray<string>;
      multiIntValue?: ReadonlyArray<string>;
      boolValue?: boolean;
      value?: string;
      intValue?: string;
      name?: string;
      multiMessageValue?: ReadonlyArray<{
        parameter?: ReadonlyArray<NestedParameter>;
      }>;
      messageValue?: { parameter?: ReadonlyArray<NestedParameter> };
    }>;
    sensitiveParameters?: ReadonlyArray<{
      name?: string;
      multiMessageValue?: ReadonlyArray<{
        parameter?: ReadonlyArray<NestedParameter>;
      }>;
      messageValue?: { parameter?: ReadonlyArray<NestedParameter> };
      multiValue?: ReadonlyArray<string>;
      multiIntValue?: ReadonlyArray<string>;
      boolValue?: boolean;
      value?: string;
      intValue?: string;
    }>;
    name?: string;
    resourceIds?: ReadonlyArray<string>;
    status?: ActivityEventsStatus;
    type?: string;
  }>;
  /** User doing the action. */
  actor?: {
    callerType?: string;
    applicationInfo?: {
      applicationName?: string;
      impersonation?: boolean;
      oauthClientId?: string;
    };
    profileId?: string;
    key?: string;
    email?: string;
  };
}

export const Activity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  ownerDomain: Schema.optional(Schema.String),
  ipAddress: Schema.optional(Schema.String),
  networkInfo: Schema.optional(ActivityNetworkInfo),
  resourceDetails: Schema.optional(Schema.Array(ResourceDetails)),
  id: Schema.optional(
    Schema.Struct({
      applicationName: Schema.optional(Schema.String),
      customerId: Schema.optional(Schema.String),
      time: Schema.optional(Schema.String),
      uniqueQualifier: Schema.optional(Schema.String),
    }),
  ),
  etag: Schema.optional(Schema.String),
  events: Schema.optional(
    Schema.Array(
      Schema.Struct({
        parameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              multiValue: Schema.optional(Schema.Array(Schema.String)),
              multiIntValue: Schema.optional(Schema.Array(Schema.String)),
              boolValue: Schema.optional(Schema.Boolean),
              value: Schema.optional(Schema.String),
              intValue: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              multiMessageValue: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    parameter: Schema.optional(Schema.Array(NestedParameter)),
                  }),
                ),
              ),
              messageValue: Schema.optional(
                Schema.Struct({
                  parameter: Schema.optional(Schema.Array(NestedParameter)),
                }),
              ),
            }),
          ),
        ),
        sensitiveParameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              multiMessageValue: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    parameter: Schema.optional(Schema.Array(NestedParameter)),
                  }),
                ),
              ),
              messageValue: Schema.optional(
                Schema.Struct({
                  parameter: Schema.optional(Schema.Array(NestedParameter)),
                }),
              ),
              multiValue: Schema.optional(Schema.Array(Schema.String)),
              multiIntValue: Schema.optional(Schema.Array(Schema.String)),
              boolValue: Schema.optional(Schema.Boolean),
              value: Schema.optional(Schema.String),
              intValue: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        resourceIds: Schema.optional(Schema.Array(Schema.String)),
        status: Schema.optional(ActivityEventsStatus),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  actor: Schema.optional(
    Schema.Struct({
      callerType: Schema.optional(Schema.String),
      applicationInfo: Schema.optional(
        Schema.Struct({
          applicationName: Schema.optional(Schema.String),
          impersonation: Schema.optional(Schema.Boolean),
          oauthClientId: Schema.optional(Schema.String),
        }),
      ),
      profileId: Schema.optional(Schema.String),
      key: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
    }),
  ),
}).annotate({ identifier: "Activity" });

export interface Activities {
  /** The type of API resource. For an activity report, the value is `reports#activities`. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
  /** Each activity record in the response. */
  items?: ReadonlyArray<Activity>;
  /** Token for retrieving the follow-on next page of the report. The `nextPageToken` value is used in the request's `pageToken` query string. */
  nextPageToken?: string;
}

export const Activities = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Activity)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "Activities" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetUserUsageReportRequest {
  /** The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include `accounts`, `chat`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last_login_time &filters=accounts:last_login_time%3C%3E2010-10-28T10:26:35.000Z The relational operators include: - `==` - 'equal to'. - `<>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `>` - 'greater than'. It is URL-encoded (%3E). - `>=` - 'greater than or equal to'. It is URL-encoded (%3E=). */
  filters?: string;
  /** Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456" */
  groupIdFilter?: string;
  /** Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional. */
  maxResults?: number;
  /** ID of the organizational unit to report on. User activity will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results. */
  orgUnitID?: string;
  /** Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`. */
  userKey: string;
  /** Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`. */
  date: string;
  /** The unique ID of the customer to retrieve data for. */
  customerId?: string;
  /** The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers Usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `chat`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned. */
  parameters?: string;
  /** Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string. */
  pageToken?: string;
}

export const GetUserUsageReportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
    groupIdFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("groupIdFilter"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    orgUnitID: Schema.optional(Schema.String).pipe(T.HttpQuery("orgUnitID")),
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
    date: Schema.String.pipe(T.HttpPath("date")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    parameters: Schema.optional(Schema.String).pipe(T.HttpQuery("parameters")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/reports/v1/usage/users/{userKey}/dates/{date}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetUserUsageReportRequest>;

export type GetUserUsageReportResponse = UsageReports;
export const GetUserUsageReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ UsageReports;

export type GetUserUsageReportError = DefaultErrors;

/** Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides. */
export const getUserUsageReport: API.PaginatedOperationMethod<
  GetUserUsageReportRequest,
  GetUserUsageReportResponse,
  GetUserUsageReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetUserUsageReportRequest,
  output: GetUserUsageReportResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListActivitiesRequest {
  /** The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`. */
  eventName?: string;
  /** The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions. */
  actorIpAddress?: string;
  /** Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000. */
  maxResults?: number;
  /** The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name}{relational operator}{parameter1 value},{parameter2 name}{relational operator}{parameter2 value},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `>`—'greater than'. Must be URL-encoded (%3E). * `>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned. */
  filters?: string;
  /** Optional. The `resourceDetailsFilter` query string is an AND separated list composed of [Resource Details](#resourcedetails) fields manipulated by relational operators. Resource Details Filters are in the form `{resourceDetails.field1}{relational operator}{field1 value} AND {resourceDetails.field2}{relational operator}{field2 value}...` All the inner fields are traversed using the `.` operator, as shown in the following example: ``` resourceDetails.id = "resourceId" AND resourceDetails.appliedLabels.id = "appliedLabelId" AND resourceDetails.appliedLabels.fieldValue.id = "fieldValueId" ``` `resourceDetailsFilter` query supports these relational operators: * `=`—'equal to'. * `!=`—'not equal to'. * `:`—'exists'. This is used for filtering on repeated fields. [`FieldValue`](#fieldvalue) types that are repeated in nature uses `exists` operator for filtering. The following [`FieldValue`](#fieldvalue) types are repeated: * [`TextListValue`](#textlistvalue) * [`SelectionListValue`](#selectionlistvalue) * [`UserListValue`](#userlistvalue) For example, in the following filter, [`SelectionListValue`](#selectionlistvalue), is a repeated field. The filter checks whether [`SelectionListValue`](#selectionlistvalue) contains `selection_id`: ``` resourceDetails.id = "resourceId" AND resourceDetails.appliedLabels.id = "appliedLabelId" AND resourceDetails.appliedLabels.fieldValue.id = "fieldValueId" AND resourceDetails.appliedLabels.fieldValue.type = "SELECTION_LIST_VALUE" AND resourceDetails.appliedLabels.fieldValue.selectionListValue.id: "id" ``` **Usage** ``` GET...&resourceDetailsFilter=resourceDetails.id = "resourceId" AND resourceDetails.appliedLabels.id = "appliedLabelId" GET...&resourceDetailsFilter=resourceDetails.id=%22resourceId%22%20AND%20resourceDetails.appliedLabels.id=%22appliedLabelId%22 ``` **Note the following**: * You must URL encode the query string before sending the request. * The API supports a maximum of 5 fields separated by the AND operator. - When filtering on deeper levels (e.g., [`AppliedLabel`](#appliedlabel), [`FieldValue`](#fieldvalue)), the IDs of all preceding levels in the hierarchy must be included in the filter. For example: Filtering on [`FieldValue`](#fieldvalue) requires [`AppliedLabel`](#appliedlabel) ID and resourceDetails ID to be present. *Sample Query*: ``` resourceDetails.id = "resourceId" AND resourceDetails.appliedLabels.id = "appliedLabelId" AND resourceDetails.appliedLabels.fieldValue.id = "fieldValueId" ``` * Filtering on inner [`FieldValue`](#fieldvalue) types like `longTextValue` and `textValue` requires `resourceDetails.appliedLabels.fieldValue.type` to be present. * Only Filtering on a single [`AppliedLabel`](#appliedlabel) id and [`FieldValue`](#fieldvalue) id is supported. */
  resourceDetailsFilter?: string;
  /** Optional. Used to filter on the `oAuthClientId` field present in [`ApplicationInfo`](#applicationinfo) message. **Usage** ``` GET...&applicationInfoFilter=oAuthClientId="clientId" GET...&applicationInfoFilter=oAuthClientId=%22clientId%22 ``` */
  applicationInfoFilter?: string;
  /** Optional. Used to filter on the `statusCode` field present in [`Status`](#status) message. **Usage** ``` GET...&statusFilter=statusCode="200" GET...&statusFilter=statusCode=%22200%22 ``` */
  statusFilter?: string;
  /** ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results. */
  orgUnitID?: string;
  /** Application name for which the events are to be retrieved. */
  applicationName:
    | "access_transparency"
    | "admin"
    | "calendar"
    | "chat"
    | "drive"
    | "gcp"
    | "gmail"
    | "gplus"
    | "groups"
    | "groups_enterprise"
    | "jamboard"
    | "login"
    | "meet"
    | "mobile"
    | "rules"
    | "saml"
    | "token"
    | "user_accounts"
    | "context_aware_access"
    | "chrome"
    | "data_studio"
    | "keep"
    | "vault"
    | "gemini_in_workspace_apps"
    | "classroom"
    | "assignments"
    | "cloud_search"
    | "tasks"
    | "data_migration"
    | "meet_hardware"
    | "directory_sync"
    | "ldap"
    | "profile"
    | "access_evaluation"
    | "admin_data_action"
    | "contacts"
    | "takeout"
    | "graduation"
    | (string & {});
  /** The unique ID of the customer to retrieve data for. */
  customerId?: string;
  /** The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string. */
  pageToken?: string;
  /** Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. For Gmail requests, `startTime` and `endTime` must be provided and the difference must not be greater than 30 days. */
  startTime?: string;
  /** Optional. Used to filter on the `regionCode` field present in [`NetworkInfo`](#networkinfo) message. **Usage** ``` GET...&networkInfoFilter=regionCode="IN" GET...&networkInfoFilter=regionCode=%22IN%22 ``` */
  networkInfoFilter?: string;
  /** Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past. For Gmail requests, `startTime` and `endTime` must be provided and the difference must not be greater than 30 days. */
  endTime?: string;
  /** Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456" *Important:* To filter by groups, you must explicitly add the groups to your filtering groups allowlist. For more information about adding groups to filtering groups allowlist, see [Filter results by Google Group](https://support.google.com/a/answer/11482175) */
  groupIdFilter?: string;
  /** Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`. */
  userKey: string;
  /** Optional. When set to `true`, this field allows sensitive user-generated content to be included in the returned audit logs. This parameter is supported only for Rules (DLP) and Chat applications; using it with any other application will result in a permission error. */
  includeSensitiveData?: boolean;
}

export const ListActivitiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  eventName: Schema.optional(Schema.String).pipe(T.HttpQuery("eventName")),
  actorIpAddress: Schema.optional(Schema.String).pipe(
    T.HttpQuery("actorIpAddress"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
  resourceDetailsFilter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("resourceDetailsFilter"),
  ),
  applicationInfoFilter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("applicationInfoFilter"),
  ),
  statusFilter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("statusFilter"),
  ),
  orgUnitID: Schema.optional(Schema.String).pipe(T.HttpQuery("orgUnitID")),
  applicationName: Schema.String.pipe(T.HttpPath("applicationName")),
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
  networkInfoFilter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("networkInfoFilter"),
  ),
  endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
  groupIdFilter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("groupIdFilter"),
  ),
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
  includeSensitiveData: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeSensitiveData"),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/reports/v1/activity/users/{userKey}/applications/{applicationName}",
  }),
  svc,
) as unknown as Schema.Schema<ListActivitiesRequest>;

export type ListActivitiesResponse = Activities;
export const ListActivitiesResponse = /*@__PURE__*/ /*#__PURE__*/ Activities;

export type ListActivitiesError = DefaultErrors;

/** Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. */
export const listActivities: API.PaginatedOperationMethod<
  ListActivitiesRequest,
  ListActivitiesResponse,
  ListActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListActivitiesRequest,
  output: ListActivitiesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface WatchActivitiesRequest {
  /** Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. */
  startTime?: string;
  /** The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string. */
  pageToken?: string;
  /** Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past. */
  endTime?: string;
  /** The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`. */
  eventName?: string;
  /** Application name for which the events are to be retrieved. */
  applicationName:
    | "access_transparency"
    | "admin"
    | "calendar"
    | "chat"
    | "drive"
    | "gcp"
    | "gplus"
    | "groups"
    | "groups_enterprise"
    | "jamboard"
    | "login"
    | "meet"
    | "mobile"
    | "rules"
    | "saml"
    | "token"
    | "user_accounts"
    | "context_aware_access"
    | "chrome"
    | "data_studio"
    | "keep"
    | "classroom"
    | (string & {});
  /** The unique ID of the customer to retrieve data for. */
  customerId?: string;
  /** Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`. */
  userKey: string;
  /** `Deprecated`. This field is deprecated and is no longer supported. ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results. */
  orgUnitID?: string;
  /** The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions. */
  actorIpAddress?: string;
  /** Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000. */
  maxResults?: number;
  /** `Deprecated`. This field is deprecated and is no longer supported. Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456" *Important:* To filter by groups, you must explicitly add the groups to your filtering groups allowlist. For more information about adding groups to filtering groups allowlist, see [Filter results by Google Group](https://support.google.com/a/answer/11482175) */
  groupIdFilter?: string;
  /** The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name}{relational operator}{parameter1 value},{parameter2 name}{relational operator}{parameter2 value},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `>`—'greater than'. Must be URL-encoded (%3E). * `>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned. */
  filters?: string;
  /** Request body */
  body?: Channel;
}

export const WatchActivitiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    eventName: Schema.optional(Schema.String).pipe(T.HttpQuery("eventName")),
    applicationName: Schema.String.pipe(T.HttpPath("applicationName")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
    orgUnitID: Schema.optional(Schema.String).pipe(T.HttpQuery("orgUnitID")),
    actorIpAddress: Schema.optional(Schema.String).pipe(
      T.HttpQuery("actorIpAddress"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    groupIdFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("groupIdFilter"),
    ),
    filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
    body: Schema.optional(Channel).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "admin/reports/v1/activity/users/{userKey}/applications/{applicationName}/watch",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<WatchActivitiesRequest>;

export type WatchActivitiesResponse = Channel;
export const WatchActivitiesResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type WatchActivitiesError = DefaultErrors;

/** Start receiving notifications for account activities. For more information, see Receiving Push Notifications. */
export const watchActivities: API.OperationMethod<
  WatchActivitiesRequest,
  WatchActivitiesResponse,
  WatchActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WatchActivitiesRequest,
  output: WatchActivitiesResponse,
  errors: [],
}));

export interface StopChannelsRequest {
  /** Request body */
  body?: Channel;
}

export const StopChannelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/reports_v1/channels/stop",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<StopChannelsRequest>;

export interface StopChannelsResponse {}
export const StopChannelsResponse: Schema.Schema<StopChannelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<StopChannelsResponse>;

export type StopChannelsError = DefaultErrors;

/** Stop watching resources through this channel. */
export const stopChannels: API.OperationMethod<
  StopChannelsRequest,
  StopChannelsResponse,
  StopChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopChannelsRequest,
  output: StopChannelsResponse,
  errors: [],
}));

export interface GetEntityUsageReportsRequest {
  /** Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`. */
  date: string;
  /** Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string. */
  pageToken?: string;
  /** Represents the key of the object to filter the data with. It is a string which can take the value `all` to get activity events for all users, or any other value for an app-specific entity. For details on how to obtain the `entityKey` for a particular `entityType`, see the Entities Usage parameters reference guides. */
  entityKey: string;
  /** The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only `gplus`. A `parameter` query string is in the CSV form of `[app_name1:param_name1], [app_name2:param_name2]...`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned. */
  parameters?: string;
  /** The unique ID of the customer to retrieve data for. */
  customerId?: string;
  /** The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include `accounts`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members%3C%3E0 The relational operators include: - `==` - 'equal to'. - `<>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `>` - 'greater than'. It is URL-encoded (%3E). - `>=` - 'greater than or equal to'. It is URL-encoded (%3E=). Filters can only be applied to numeric parameters. */
  filters?: string;
  /** Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. */
  maxResults?: number;
  /** Represents the type of entity for the report. */
  entityType: "gplus_communities" | (string & {});
}

export const GetEntityUsageReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.String.pipe(T.HttpPath("date")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    entityKey: Schema.String.pipe(T.HttpPath("entityKey")),
    parameters: Schema.optional(Schema.String).pipe(T.HttpQuery("parameters")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    entityType: Schema.String.pipe(T.HttpPath("entityType")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/reports/v1/usage/{entityType}/{entityKey}/dates/{date}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetEntityUsageReportsRequest>;

export type GetEntityUsageReportsResponse = UsageReports;
export const GetEntityUsageReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UsageReports;

export type GetEntityUsageReportsError = DefaultErrors;

/** Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides. */
export const getEntityUsageReports: API.PaginatedOperationMethod<
  GetEntityUsageReportsRequest,
  GetEntityUsageReportsResponse,
  GetEntityUsageReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetEntityUsageReportsRequest,
  output: GetEntityUsageReportsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCustomerUsageReportsRequest {
  /** Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`. */
  date: string;
  /** Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string. */
  pageToken?: string;
  /** The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `chat`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned. */
  parameters?: string;
  /** The unique ID of the customer to retrieve data for. */
  customerId?: string;
}

export const GetCustomerUsageReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.String.pipe(T.HttpPath("date")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parameters: Schema.optional(Schema.String).pipe(T.HttpQuery("parameters")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  }).pipe(
    T.Http({ method: "GET", path: "admin/reports/v1/usage/dates/{date}" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomerUsageReportsRequest>;

export type GetCustomerUsageReportsResponse = UsageReports;
export const GetCustomerUsageReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UsageReports;

export type GetCustomerUsageReportsError = DefaultErrors;

/** Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. */
export const getCustomerUsageReports: API.PaginatedOperationMethod<
  GetCustomerUsageReportsRequest,
  GetCustomerUsageReportsResponse,
  GetCustomerUsageReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetCustomerUsageReportsRequest,
  output: GetCustomerUsageReportsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
