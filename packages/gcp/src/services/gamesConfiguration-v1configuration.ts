// ==========================================================================
// Google Play Games Services Publishing API (gamesConfiguration v1configuration)
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
  name: "gamesConfiguration",
  version: "v1configuration",
  rootUrl: "https://gamesconfiguration.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface LocalizedString {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`. */
  kind?: string;
  /** The string value. */
  value?: string;
  /** The locale string. */
  locale?: string;
}

export const LocalizedString: Schema.Schema<LocalizedString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedString" });

export interface LocalizedStringBundle {
  /** The locale strings. */
  translations?: ReadonlyArray<LocalizedString>;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`. */
  kind?: string;
}

export const LocalizedStringBundle: Schema.Schema<LocalizedStringBundle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    translations: Schema.optional(Schema.Array(LocalizedString)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedStringBundle" });

export interface GamesNumberAffixConfiguration {
  /** When the language requires special treatment of the number 0 (as in Arabic). */
  zero?: LocalizedStringBundle;
  /** When the language requires special treatment of numbers like two (as with 2 in Welsh, or 102 in Slovenian). */
  two?: LocalizedStringBundle;
  /** When the language requires special treatment of "large" numbers (as with numbers ending 11-99 in Maltese). */
  many?: LocalizedStringBundle;
  /** When the language requires special treatment of "small" numbers (as with 2, 3, and 4 in Czech; or numbers ending 2, 3, or 4 but not 12, 13, or 14 in Polish). */
  few?: LocalizedStringBundle;
  /** When the language does not require special treatment of the given quantity (as with all numbers in Chinese, or 42 in English). */
  other?: LocalizedStringBundle;
  /** When the language requires special treatment of numbers like one (as with the number 1 in English and most other languages; in Russian, any number ending in 1 but not ending in 11 is in this class). */
  one?: LocalizedStringBundle;
}

export const GamesNumberAffixConfiguration: Schema.Schema<GamesNumberAffixConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zero: Schema.optional(LocalizedStringBundle),
    two: Schema.optional(LocalizedStringBundle),
    many: Schema.optional(LocalizedStringBundle),
    few: Schema.optional(LocalizedStringBundle),
    other: Schema.optional(LocalizedStringBundle),
    one: Schema.optional(LocalizedStringBundle),
  }).annotate({ identifier: "GamesNumberAffixConfiguration" });

export interface GamesNumberFormatConfiguration {
  /** The formatting for the number. */
  numberFormatType?:
    | "NUMBER_FORMAT_TYPE_UNSPECIFIED"
    | "NUMERIC"
    | "TIME_DURATION"
    | "CURRENCY"
    | (string & {});
  /** The number of decimal places for number. Only used for NUMERIC format type. */
  numDecimalPlaces?: number;
  /** The curreny code string. Only used for CURRENCY format type. */
  currencyCode?: string;
  /** An optional suffix for the NUMERIC format type. These strings follow the same plural rules as all Android string resources. */
  suffix?: GamesNumberAffixConfiguration;
}

export const GamesNumberFormatConfiguration: Schema.Schema<GamesNumberFormatConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberFormatType: Schema.optional(Schema.String),
    numDecimalPlaces: Schema.optional(Schema.Number),
    currencyCode: Schema.optional(Schema.String),
    suffix: Schema.optional(GamesNumberAffixConfiguration),
  }).annotate({ identifier: "GamesNumberFormatConfiguration" });

export interface LeaderboardConfigurationDetail {
  /** The icon url of this leaderboard. Writes to this field are ignored. */
  iconUrl?: string;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`. */
  kind?: string;
  /** The sort rank of this leaderboard. Writes to this field are ignored. */
  sortRank?: number;
  /** The score formatting for the leaderboard. */
  scoreFormat?: GamesNumberFormatConfiguration;
  /** Localized strings for the leaderboard name. */
  name?: LocalizedStringBundle;
}

export const LeaderboardConfigurationDetail: Schema.Schema<LeaderboardConfigurationDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iconUrl: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sortRank: Schema.optional(Schema.Number),
    scoreFormat: Schema.optional(GamesNumberFormatConfiguration),
    name: Schema.optional(LocalizedStringBundle),
  }).annotate({ identifier: "LeaderboardConfigurationDetail" });

export interface LeaderboardConfiguration {
  /** Minimum score that can be posted to this leaderboard. */
  scoreMin?: string;
  /** The read-only published data of the leaderboard. */
  published?: LeaderboardConfigurationDetail;
  /** Maximum score that can be posted to this leaderboard. */
  scoreMax?: string;
  /** The ID of the leaderboard. */
  id?: string;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`. */
  kind?: string;
  /** The token for this resource. */
  token?: string;
  scoreOrder?:
    | "SCORE_ORDER_UNSPECIFIED"
    | "LARGER_IS_BETTER"
    | "SMALLER_IS_BETTER"
    | (string & {});
  /** The draft data of the leaderboard. */
  draft?: LeaderboardConfigurationDetail;
}

export const LeaderboardConfiguration: Schema.Schema<LeaderboardConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scoreMin: Schema.optional(Schema.String),
    published: Schema.optional(LeaderboardConfigurationDetail),
    scoreMax: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    scoreOrder: Schema.optional(Schema.String),
    draft: Schema.optional(LeaderboardConfigurationDetail),
  }).annotate({ identifier: "LeaderboardConfiguration" });

export interface AchievementConfigurationDetail {
  /** Localized strings for the achievement name. */
  name?: LocalizedStringBundle;
  /** Point value for the achievement. */
  pointValue?: number;
  /** The sort rank of this achievement. Writes to this field are ignored. */
  sortRank?: number;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`. */
  kind?: string;
  /** The icon url of this achievement. Writes to this field are ignored. */
  iconUrl?: string;
  /** Localized strings for the achievement description. */
  description?: LocalizedStringBundle;
}

export const AchievementConfigurationDetail: Schema.Schema<AchievementConfigurationDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(LocalizedStringBundle),
    pointValue: Schema.optional(Schema.Number),
    sortRank: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    iconUrl: Schema.optional(Schema.String),
    description: Schema.optional(LocalizedStringBundle),
  }).annotate({ identifier: "AchievementConfigurationDetail" });

export interface AchievementConfiguration {
  /** The draft data of the achievement. */
  draft?: AchievementConfigurationDetail;
  /** The token for this resource. */
  token?: string;
  /** The type of the achievement. */
  achievementType?:
    | "ACHIEVEMENT_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "INCREMENTAL"
    | (string & {});
  /** Steps to unlock. Only applicable to incremental achievements. */
  stepsToUnlock?: number;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`. */
  kind?: string;
  /** The ID of the achievement. */
  id?: string;
  /** The initial state of the achievement. */
  initialState?:
    | "INITIAL_STATE_UNSPECIFIED"
    | "HIDDEN"
    | "REVEALED"
    | (string & {});
  /** The read-only published data of the achievement. */
  published?: AchievementConfigurationDetail;
}

export const AchievementConfiguration: Schema.Schema<AchievementConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    draft: Schema.optional(AchievementConfigurationDetail),
    token: Schema.optional(Schema.String),
    achievementType: Schema.optional(Schema.String),
    stepsToUnlock: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    initialState: Schema.optional(Schema.String),
    published: Schema.optional(AchievementConfigurationDetail),
  }).annotate({ identifier: "AchievementConfiguration" });

export interface AchievementConfigurationListResponse {
  /** The pagination token for the next page of results. */
  nextPageToken?: string;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`. */
  kind?: string;
  /** The achievement configurations. */
  items?: ReadonlyArray<AchievementConfiguration>;
}

export const AchievementConfigurationListResponse: Schema.Schema<AchievementConfigurationListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(AchievementConfiguration)),
  }).annotate({ identifier: "AchievementConfigurationListResponse" });

export interface LeaderboardConfigurationListResponse {
  /** The pagination token for the next page of results. */
  nextPageToken?: string;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`. */
  kind?: string;
  /** The leaderboard configurations. */
  items?: ReadonlyArray<LeaderboardConfiguration>;
}

export const LeaderboardConfigurationListResponse: Schema.Schema<LeaderboardConfigurationListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(LeaderboardConfiguration)),
  }).annotate({ identifier: "LeaderboardConfigurationListResponse" });

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

export interface DeleteLeaderboardConfigurationsRequest {
  /** The ID of the leaderboard. */
  leaderboardId: string;
}

export const DeleteLeaderboardConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    leaderboardId: Schema.String.pipe(T.HttpPath("leaderboardId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "games/v1configuration/leaderboards/{leaderboardId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteLeaderboardConfigurationsRequest>;

export interface DeleteLeaderboardConfigurationsResponse {}
export const DeleteLeaderboardConfigurationsResponse: Schema.Schema<DeleteLeaderboardConfigurationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteLeaderboardConfigurationsResponse>;

export type DeleteLeaderboardConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the leaderboard configuration with the given ID. */
export const deleteLeaderboardConfigurations: API.OperationMethod<
  DeleteLeaderboardConfigurationsRequest,
  DeleteLeaderboardConfigurationsResponse,
  DeleteLeaderboardConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLeaderboardConfigurationsRequest,
  output: DeleteLeaderboardConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateLeaderboardConfigurationsRequest {
  /** The ID of the leaderboard. */
  leaderboardId: string;
  /** Request body */
  body?: LeaderboardConfiguration;
}

export const UpdateLeaderboardConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    leaderboardId: Schema.String.pipe(T.HttpPath("leaderboardId")),
    body: Schema.optional(LeaderboardConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "games/v1configuration/leaderboards/{leaderboardId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateLeaderboardConfigurationsRequest>;

export type UpdateLeaderboardConfigurationsResponse = LeaderboardConfiguration;
export const UpdateLeaderboardConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LeaderboardConfiguration;

export type UpdateLeaderboardConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the metadata of the leaderboard configuration with the given ID. */
export const updateLeaderboardConfigurations: API.OperationMethod<
  UpdateLeaderboardConfigurationsRequest,
  UpdateLeaderboardConfigurationsResponse,
  UpdateLeaderboardConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLeaderboardConfigurationsRequest,
  output: UpdateLeaderboardConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertLeaderboardConfigurationsRequest {
  /** The application ID from the Google Play developer console. */
  applicationId: string;
  /** Request body */
  body?: LeaderboardConfiguration;
}

export const InsertLeaderboardConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
    body: Schema.optional(LeaderboardConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1configuration/applications/{applicationId}/leaderboards",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertLeaderboardConfigurationsRequest>;

export type InsertLeaderboardConfigurationsResponse = LeaderboardConfiguration;
export const InsertLeaderboardConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LeaderboardConfiguration;

export type InsertLeaderboardConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Insert a new leaderboard configuration in this application. */
export const insertLeaderboardConfigurations: API.OperationMethod<
  InsertLeaderboardConfigurationsRequest,
  InsertLeaderboardConfigurationsResponse,
  InsertLeaderboardConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLeaderboardConfigurationsRequest,
  output: InsertLeaderboardConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListLeaderboardConfigurationsRequest {
  /** The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`. */
  maxResults?: number;
  /** The application ID from the Google Play developer console. */
  applicationId: string;
  /** The token returned by the previous request. */
  pageToken?: string;
}

export const ListLeaderboardConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "games/v1configuration/applications/{applicationId}/leaderboards",
    }),
    svc,
  ) as unknown as Schema.Schema<ListLeaderboardConfigurationsRequest>;

export type ListLeaderboardConfigurationsResponse =
  LeaderboardConfigurationListResponse;
export const ListLeaderboardConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LeaderboardConfigurationListResponse;

export type ListLeaderboardConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of the leaderboard configurations in this application. */
export const listLeaderboardConfigurations: API.PaginatedOperationMethod<
  ListLeaderboardConfigurationsRequest,
  ListLeaderboardConfigurationsResponse,
  ListLeaderboardConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLeaderboardConfigurationsRequest,
  output: ListLeaderboardConfigurationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface GetLeaderboardConfigurationsRequest {
  /** The ID of the leaderboard. */
  leaderboardId: string;
}

export const GetLeaderboardConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    leaderboardId: Schema.String.pipe(T.HttpPath("leaderboardId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "games/v1configuration/leaderboards/{leaderboardId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetLeaderboardConfigurationsRequest>;

export type GetLeaderboardConfigurationsResponse = LeaderboardConfiguration;
export const GetLeaderboardConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LeaderboardConfiguration;

export type GetLeaderboardConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the metadata of the leaderboard configuration with the given ID. */
export const getLeaderboardConfigurations: API.OperationMethod<
  GetLeaderboardConfigurationsRequest,
  GetLeaderboardConfigurationsResponse,
  GetLeaderboardConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLeaderboardConfigurationsRequest,
  output: GetLeaderboardConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAchievementConfigurationsRequest {
  /** The ID of the achievement used by this method. */
  achievementId: string;
}

export const GetAchievementConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    achievementId: Schema.String.pipe(T.HttpPath("achievementId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "games/v1configuration/achievements/{achievementId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAchievementConfigurationsRequest>;

export type GetAchievementConfigurationsResponse = AchievementConfiguration;
export const GetAchievementConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AchievementConfiguration;

export type GetAchievementConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the metadata of the achievement configuration with the given ID. */
export const getAchievementConfigurations: API.OperationMethod<
  GetAchievementConfigurationsRequest,
  GetAchievementConfigurationsResponse,
  GetAchievementConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAchievementConfigurationsRequest,
  output: GetAchievementConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAchievementConfigurationsRequest {
  /** The application ID from the Google Play developer console. */
  applicationId: string;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`. */
  maxResults?: number;
}

export const ListAchievementConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "games/v1configuration/applications/{applicationId}/achievements",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAchievementConfigurationsRequest>;

export type ListAchievementConfigurationsResponse =
  AchievementConfigurationListResponse;
export const ListAchievementConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AchievementConfigurationListResponse;

export type ListAchievementConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of the achievement configurations in this application. */
export const listAchievementConfigurations: API.PaginatedOperationMethod<
  ListAchievementConfigurationsRequest,
  ListAchievementConfigurationsResponse,
  ListAchievementConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAchievementConfigurationsRequest,
  output: ListAchievementConfigurationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertAchievementConfigurationsRequest {
  /** The application ID from the Google Play developer console. */
  applicationId: string;
  /** Request body */
  body?: AchievementConfiguration;
}

export const InsertAchievementConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
    body: Schema.optional(AchievementConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1configuration/applications/{applicationId}/achievements",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAchievementConfigurationsRequest>;

export type InsertAchievementConfigurationsResponse = AchievementConfiguration;
export const InsertAchievementConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AchievementConfiguration;

export type InsertAchievementConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Insert a new achievement configuration in this application. */
export const insertAchievementConfigurations: API.OperationMethod<
  InsertAchievementConfigurationsRequest,
  InsertAchievementConfigurationsResponse,
  InsertAchievementConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAchievementConfigurationsRequest,
  output: InsertAchievementConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAchievementConfigurationsRequest {
  /** The ID of the achievement used by this method. */
  achievementId: string;
}

export const DeleteAchievementConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    achievementId: Schema.String.pipe(T.HttpPath("achievementId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "games/v1configuration/achievements/{achievementId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAchievementConfigurationsRequest>;

export interface DeleteAchievementConfigurationsResponse {}
export const DeleteAchievementConfigurationsResponse: Schema.Schema<DeleteAchievementConfigurationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAchievementConfigurationsResponse>;

export type DeleteAchievementConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the achievement configuration with the given ID. */
export const deleteAchievementConfigurations: API.OperationMethod<
  DeleteAchievementConfigurationsRequest,
  DeleteAchievementConfigurationsResponse,
  DeleteAchievementConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAchievementConfigurationsRequest,
  output: DeleteAchievementConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAchievementConfigurationsRequest {
  /** The ID of the achievement used by this method. */
  achievementId: string;
  /** Request body */
  body?: AchievementConfiguration;
}

export const UpdateAchievementConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    achievementId: Schema.String.pipe(T.HttpPath("achievementId")),
    body: Schema.optional(AchievementConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "games/v1configuration/achievements/{achievementId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAchievementConfigurationsRequest>;

export type UpdateAchievementConfigurationsResponse = AchievementConfiguration;
export const UpdateAchievementConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AchievementConfiguration;

export type UpdateAchievementConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the metadata of the achievement configuration with the given ID. */
export const updateAchievementConfigurations: API.OperationMethod<
  UpdateAchievementConfigurationsRequest,
  UpdateAchievementConfigurationsResponse,
  UpdateAchievementConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAchievementConfigurationsRequest,
  output: UpdateAchievementConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
