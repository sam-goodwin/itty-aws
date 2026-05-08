// ==========================================================================
// Google Play Games Services Management API (gamesManagement v1management)
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
  name: "gamesManagement",
  version: "v1management",
  rootUrl: "https://gamesmanagement.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GamesPlayerLevelResource {
  /** The level for the user. */
  level?: number;
  /** The maximum experience points for this level. */
  maxExperiencePoints?: string;
  /** The minimum experience points for this level. */
  minExperiencePoints?: string;
}

export const GamesPlayerLevelResource: Schema.Schema<GamesPlayerLevelResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.Number),
    maxExperiencePoints: Schema.optional(Schema.String),
    minExperiencePoints: Schema.optional(Schema.String),
  }).annotate({ identifier: "GamesPlayerLevelResource" });

export interface ProfileSettings {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#profileSettings`. */
  kind?: string;
  profileVisible?: boolean;
}

export const ProfileSettings: Schema.Schema<ProfileSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    profileVisible: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ProfileSettings" });

export interface GamesPlayerExperienceInfoResource {
  /** The current number of experience points for the player. */
  currentExperiencePoints?: string;
  /** The current level of the player. */
  currentLevel?: GamesPlayerLevelResource;
  /** The timestamp when the player was leveled up, in millis since Unix epoch UTC. */
  lastLevelUpTimestampMillis?: string;
  /** The next level of the player. If the current level is the maximum level, this should be same as the current level. */
  nextLevel?: GamesPlayerLevelResource;
}

export const GamesPlayerExperienceInfoResource: Schema.Schema<GamesPlayerExperienceInfoResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentExperiencePoints: Schema.optional(Schema.String),
    currentLevel: Schema.optional(GamesPlayerLevelResource),
    lastLevelUpTimestampMillis: Schema.optional(Schema.String),
    nextLevel: Schema.optional(GamesPlayerLevelResource),
  }).annotate({ identifier: "GamesPlayerExperienceInfoResource" });

export interface Player {
  /** The player's title rewarded for their game activities. */
  title?: string;
  /** An object representation of the individual components of the player's name. For some players, these fields may not be present. */
  name?: { familyName?: string; givenName?: string };
  /** The url to the portrait mode player banner image. */
  bannerUrlPortrait?: string;
  /** The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs. */
  originalPlayerId?: string;
  /** The player's profile settings. Controls whether or not the player's profile is visible to other players. */
  profileSettings?: ProfileSettings;
  /** The name to display for the player. */
  displayName?: string;
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#player`. */
  kind?: string;
  /** The url to the landscape mode player banner image. */
  bannerUrlLandscape?: string;
  /** The ID of the player. */
  playerId?: string;
  /** The base URL for the image that represents the player. */
  avatarImageUrl?: string;
  /** An object to represent Play Game experience information for the player. */
  experienceInfo?: GamesPlayerExperienceInfoResource;
}

export const Player: Schema.Schema<Player> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    name: Schema.optional(
      Schema.Struct({
        familyName: Schema.optional(Schema.String),
        givenName: Schema.optional(Schema.String),
      }),
    ),
    bannerUrlPortrait: Schema.optional(Schema.String),
    originalPlayerId: Schema.optional(Schema.String),
    profileSettings: Schema.optional(ProfileSettings),
    displayName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    bannerUrlLandscape: Schema.optional(Schema.String),
    playerId: Schema.optional(Schema.String),
    avatarImageUrl: Schema.optional(Schema.String),
    experienceInfo: Schema.optional(GamesPlayerExperienceInfoResource),
  }).annotate({ identifier: "Player" });

export interface HiddenPlayer {
  /** Output only. The player information. */
  player?: Player;
  /** Output only. The time this player was hidden. */
  hiddenTimeMillis?: string;
  /** Output only. Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayer`. */
  kind?: string;
}

export const HiddenPlayer: Schema.Schema<HiddenPlayer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    player: Schema.optional(Player),
    hiddenTimeMillis: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "HiddenPlayer" });

export interface HiddenPlayerList {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayerList`. */
  kind?: string;
  /** The pagination token for the next page of results. */
  nextPageToken?: string;
  /** The players. */
  items?: ReadonlyArray<HiddenPlayer>;
}

export const HiddenPlayerList: Schema.Schema<HiddenPlayerList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(HiddenPlayer)),
  }).annotate({ identifier: "HiddenPlayerList" });

export interface ScoresResetMultipleForAllRequest {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`. */
  kind?: string;
  /** The IDs of leaderboards to reset. */
  leaderboard_ids?: ReadonlyArray<string>;
}

export const ScoresResetMultipleForAllRequest: Schema.Schema<ScoresResetMultipleForAllRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    leaderboard_ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ScoresResetMultipleForAllRequest" });

export interface AchievementResetMultipleForAllRequest {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`. */
  kind?: string;
  /** The IDs of achievements to reset. */
  achievement_ids?: ReadonlyArray<string>;
}

export const AchievementResetMultipleForAllRequest: Schema.Schema<AchievementResetMultipleForAllRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    achievement_ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AchievementResetMultipleForAllRequest" });

export interface AchievementResetResponse {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetResponse`. */
  kind?: string;
  /** The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - "`HIDDEN`"- Achievement is hidden. - "`REVEALED`" - Achievement is revealed. - "`UNLOCKED`" - Achievement is unlocked. */
  currentState?: string;
  /** The ID of an achievement for which player state has been updated. */
  definitionId?: string;
  /** Flag to indicate if the requested update actually occurred. */
  updateOccurred?: boolean;
}

export const AchievementResetResponse: Schema.Schema<AchievementResetResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    currentState: Schema.optional(Schema.String),
    definitionId: Schema.optional(Schema.String),
    updateOccurred: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AchievementResetResponse" });

export interface AchievementResetAllResponse {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetAllResponse`. */
  kind?: string;
  /** The achievement reset results. */
  results?: ReadonlyArray<AchievementResetResponse>;
}

export const AchievementResetAllResponse: Schema.Schema<AchievementResetAllResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(AchievementResetResponse)),
  }).annotate({ identifier: "AchievementResetAllResponse" });

export interface PlayerScoreResetResponse {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetResponse`. */
  kind?: string;
  /** The ID of an leaderboard for which player state has been updated. */
  definitionId?: string;
  /** The time spans of the updated score. Possible values are: - "`ALL_TIME`" - The score is an all-time score. - "`WEEKLY`" - The score is a weekly score. - "`DAILY`" - The score is a daily score. */
  resetScoreTimeSpans?: ReadonlyArray<string>;
}

export const PlayerScoreResetResponse: Schema.Schema<PlayerScoreResetResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    definitionId: Schema.optional(Schema.String),
    resetScoreTimeSpans: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PlayerScoreResetResponse" });

export interface PlayerScoreResetAllResponse {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetAllResponse`. */
  kind?: string;
  /** The leaderboard reset results. */
  results?: ReadonlyArray<PlayerScoreResetResponse>;
}

export const PlayerScoreResetAllResponse: Schema.Schema<PlayerScoreResetAllResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(PlayerScoreResetResponse)),
  }).annotate({ identifier: "PlayerScoreResetAllResponse" });

export interface EventsResetMultipleForAllRequest {
  /** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`. */
  kind?: string;
  /** The IDs of events to reset. */
  event_ids?: ReadonlyArray<string>;
}

export const EventsResetMultipleForAllRequest: Schema.Schema<EventsResetMultipleForAllRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    event_ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EventsResetMultipleForAllRequest" });

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

export interface ResetEventsRequest {
  /** The ID of the event. */
  eventId: string;
}

export const ResetEventsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  eventId: Schema.String.pipe(T.HttpPath("eventId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "games/v1management/events/{eventId}/reset",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ResetEventsRequest>;

export interface ResetEventsResponse {}
export const ResetEventsResponse: Schema.Schema<ResetEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetEventsResponse>;

export type ResetEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
export const resetEvents: API.OperationMethod<
  ResetEventsRequest,
  ResetEventsResponse,
  ResetEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetEventsRequest,
  output: ResetEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetForAllPlayersEventsRequest {
  /** The ID of the event. */
  eventId: string;
}

export const ResetForAllPlayersEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.String.pipe(T.HttpPath("eventId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/events/{eventId}/resetForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetForAllPlayersEventsRequest>;

export interface ResetForAllPlayersEventsResponse {}
export const ResetForAllPlayersEventsResponse: Schema.Schema<ResetForAllPlayersEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetForAllPlayersEventsResponse>;

export type ResetForAllPlayersEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. */
export const resetForAllPlayersEvents: API.OperationMethod<
  ResetForAllPlayersEventsRequest,
  ResetForAllPlayersEventsResponse,
  ResetForAllPlayersEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetForAllPlayersEventsRequest,
  output: ResetForAllPlayersEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetMultipleForAllPlayersEventsRequest {
  /** Request body */
  body?: EventsResetMultipleForAllRequest;
}

export const ResetMultipleForAllPlayersEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(EventsResetMultipleForAllRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/events/resetMultipleForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetMultipleForAllPlayersEventsRequest>;

export interface ResetMultipleForAllPlayersEventsResponse {}
export const ResetMultipleForAllPlayersEventsResponse: Schema.Schema<ResetMultipleForAllPlayersEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetMultipleForAllPlayersEventsResponse>;

export type ResetMultipleForAllPlayersEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset. */
export const resetMultipleForAllPlayersEvents: API.OperationMethod<
  ResetMultipleForAllPlayersEventsRequest,
  ResetMultipleForAllPlayersEventsResponse,
  ResetMultipleForAllPlayersEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetMultipleForAllPlayersEventsRequest,
  output: ResetMultipleForAllPlayersEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAllForAllPlayersEventsRequest {}

export const ResetAllForAllPlayersEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/events/resetAllForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetAllForAllPlayersEventsRequest>;

export interface ResetAllForAllPlayersEventsResponse {}
export const ResetAllForAllPlayersEventsResponse: Schema.Schema<ResetAllForAllPlayersEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetAllForAllPlayersEventsResponse>;

export type ResetAllForAllPlayersEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets all draft events for all players. This method is only available to user accounts for your developer console. */
export const resetAllForAllPlayersEvents: API.OperationMethod<
  ResetAllForAllPlayersEventsRequest,
  ResetAllForAllPlayersEventsResponse,
  ResetAllForAllPlayersEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAllForAllPlayersEventsRequest,
  output: ResetAllForAllPlayersEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAllEventsRequest {}

export const ResetAllEventsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "games/v1management/events/reset",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ResetAllEventsRequest>;

export interface ResetAllEventsResponse {}
export const ResetAllEventsResponse: Schema.Schema<ResetAllEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetAllEventsResponse>;

export type ResetAllEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
export const resetAllEvents: API.OperationMethod<
  ResetAllEventsRequest,
  ResetAllEventsResponse,
  ResetAllEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAllEventsRequest,
  output: ResetAllEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListHiddenApplicationsRequest {
  /** The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`. */
  maxResults?: number;
  /** The application ID from the Google Play developer console. */
  applicationId: string;
  /** The token returned by the previous request. */
  pageToken?: string;
}

export const ListHiddenApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "games/v1management/applications/{applicationId}/players/hidden",
    }),
    svc,
  ) as unknown as Schema.Schema<ListHiddenApplicationsRequest>;

export type ListHiddenApplicationsResponse = HiddenPlayerList;
export const ListHiddenApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HiddenPlayerList;

export type ListHiddenApplicationsError = DefaultErrors | NotFound | Forbidden;

/** Get the list of players hidden from the given application. This method is only available to user accounts for your developer console. */
export const listHiddenApplications: API.PaginatedOperationMethod<
  ListHiddenApplicationsRequest,
  ListHiddenApplicationsResponse,
  ListHiddenApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListHiddenApplicationsRequest,
  output: ListHiddenApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ResetMultipleForAllPlayersScoresRequest {
  /** Request body */
  body?: ScoresResetMultipleForAllRequest;
}

export const ResetMultipleForAllPlayersScoresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ScoresResetMultipleForAllRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/scores/resetMultipleForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetMultipleForAllPlayersScoresRequest>;

export interface ResetMultipleForAllPlayersScoresResponse {}
export const ResetMultipleForAllPlayersScoresResponse: Schema.Schema<ResetMultipleForAllPlayersScoresResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetMultipleForAllPlayersScoresResponse>;

export type ResetMultipleForAllPlayersScoresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset. */
export const resetMultipleForAllPlayersScores: API.OperationMethod<
  ResetMultipleForAllPlayersScoresRequest,
  ResetMultipleForAllPlayersScoresResponse,
  ResetMultipleForAllPlayersScoresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetMultipleForAllPlayersScoresRequest,
  output: ResetMultipleForAllPlayersScoresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetScoresRequest {
  /** The ID of the leaderboard. */
  leaderboardId: string;
}

export const ResetScoresRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  leaderboardId: Schema.String.pipe(T.HttpPath("leaderboardId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "games/v1management/leaderboards/{leaderboardId}/scores/reset",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ResetScoresRequest>;

export type ResetScoresResponse = PlayerScoreResetResponse;
export const ResetScoresResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlayerScoreResetResponse;

export type ResetScoresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
export const resetScores: API.OperationMethod<
  ResetScoresRequest,
  ResetScoresResponse,
  ResetScoresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetScoresRequest,
  output: ResetScoresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetForAllPlayersScoresRequest {
  /** The ID of the leaderboard. */
  leaderboardId: string;
}

export const ResetForAllPlayersScoresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    leaderboardId: Schema.String.pipe(T.HttpPath("leaderboardId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetForAllPlayersScoresRequest>;

export interface ResetForAllPlayersScoresResponse {}
export const ResetForAllPlayersScoresResponse: Schema.Schema<ResetForAllPlayersScoresResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetForAllPlayersScoresResponse>;

export type ResetForAllPlayersScoresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset. */
export const resetForAllPlayersScores: API.OperationMethod<
  ResetForAllPlayersScoresRequest,
  ResetForAllPlayersScoresResponse,
  ResetForAllPlayersScoresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetForAllPlayersScoresRequest,
  output: ResetForAllPlayersScoresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAllScoresRequest {}

export const ResetAllScoresRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "games/v1management/scores/reset",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ResetAllScoresRequest>;

export type ResetAllScoresResponse = PlayerScoreResetAllResponse;
export const ResetAllScoresResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlayerScoreResetAllResponse;

export type ResetAllScoresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application. */
export const resetAllScores: API.OperationMethod<
  ResetAllScoresRequest,
  ResetAllScoresResponse,
  ResetAllScoresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAllScoresRequest,
  output: ResetAllScoresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAllForAllPlayersScoresRequest {}

export const ResetAllForAllPlayersScoresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/scores/resetAllForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetAllForAllPlayersScoresRequest>;

export interface ResetAllForAllPlayersScoresResponse {}
export const ResetAllForAllPlayersScoresResponse: Schema.Schema<ResetAllForAllPlayersScoresResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetAllForAllPlayersScoresResponse>;

export type ResetAllForAllPlayersScoresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console. */
export const resetAllForAllPlayersScores: API.OperationMethod<
  ResetAllForAllPlayersScoresRequest,
  ResetAllForAllPlayersScoresResponse,
  ResetAllForAllPlayersScoresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAllForAllPlayersScoresRequest,
  output: ResetAllForAllPlayersScoresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAchievementsRequest {
  /** The ID of the achievement used by this method. */
  achievementId: string;
}

export const ResetAchievementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    achievementId: Schema.String.pipe(T.HttpPath("achievementId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/achievements/{achievementId}/reset",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetAchievementsRequest>;

export type ResetAchievementsResponse = AchievementResetResponse;
export const ResetAchievementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AchievementResetResponse;

export type ResetAchievementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
export const resetAchievements: API.OperationMethod<
  ResetAchievementsRequest,
  ResetAchievementsResponse,
  ResetAchievementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAchievementsRequest,
  output: ResetAchievementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetForAllPlayersAchievementsRequest {
  /** The ID of the achievement used by this method. */
  achievementId: string;
}

export const ResetForAllPlayersAchievementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    achievementId: Schema.String.pipe(T.HttpPath("achievementId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/achievements/{achievementId}/resetForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetForAllPlayersAchievementsRequest>;

export interface ResetForAllPlayersAchievementsResponse {}
export const ResetForAllPlayersAchievementsResponse: Schema.Schema<ResetForAllPlayersAchievementsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetForAllPlayersAchievementsResponse>;

export type ResetForAllPlayersAchievementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset. */
export const resetForAllPlayersAchievements: API.OperationMethod<
  ResetForAllPlayersAchievementsRequest,
  ResetForAllPlayersAchievementsResponse,
  ResetForAllPlayersAchievementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetForAllPlayersAchievementsRequest,
  output: ResetForAllPlayersAchievementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetMultipleForAllPlayersAchievementsRequest {
  /** Request body */
  body?: AchievementResetMultipleForAllRequest;
}

export const ResetMultipleForAllPlayersAchievementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AchievementResetMultipleForAllRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/achievements/resetMultipleForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetMultipleForAllPlayersAchievementsRequest>;

export interface ResetMultipleForAllPlayersAchievementsResponse {}
export const ResetMultipleForAllPlayersAchievementsResponse: Schema.Schema<ResetMultipleForAllPlayersAchievementsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetMultipleForAllPlayersAchievementsResponse>;

export type ResetMultipleForAllPlayersAchievementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset. */
export const resetMultipleForAllPlayersAchievements: API.OperationMethod<
  ResetMultipleForAllPlayersAchievementsRequest,
  ResetMultipleForAllPlayersAchievementsResponse,
  ResetMultipleForAllPlayersAchievementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetMultipleForAllPlayersAchievementsRequest,
  output: ResetMultipleForAllPlayersAchievementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAllForAllPlayersAchievementsRequest {}

export const ResetAllForAllPlayersAchievementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/achievements/resetAllForAllPlayers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetAllForAllPlayersAchievementsRequest>;

export interface ResetAllForAllPlayersAchievementsResponse {}
export const ResetAllForAllPlayersAchievementsResponse: Schema.Schema<ResetAllForAllPlayersAchievementsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResetAllForAllPlayersAchievementsResponse>;

export type ResetAllForAllPlayersAchievementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets all draft achievements for all players. This method is only available to user accounts for your developer console. */
export const resetAllForAllPlayersAchievements: API.OperationMethod<
  ResetAllForAllPlayersAchievementsRequest,
  ResetAllForAllPlayersAchievementsResponse,
  ResetAllForAllPlayersAchievementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAllForAllPlayersAchievementsRequest,
  output: ResetAllForAllPlayersAchievementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAllAchievementsRequest {}

export const ResetAllAchievementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "games/v1management/achievements/reset",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetAllAchievementsRequest>;

export type ResetAllAchievementsResponse = AchievementResetAllResponse;
export const ResetAllAchievementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AchievementResetAllResponse;

export type ResetAllAchievementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application. */
export const resetAllAchievements: API.OperationMethod<
  ResetAllAchievementsRequest,
  ResetAllAchievementsResponse,
  ResetAllAchievementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAllAchievementsRequest,
  output: ResetAllAchievementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnhidePlayersRequest {
  /** The application ID from the Google Play developer console. */
  applicationId: string;
  /** A player ID. A value of `me` may be used in place of the authenticated player's ID. */
  playerId: string;
}

export const UnhidePlayersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
  playerId: Schema.String.pipe(T.HttpPath("playerId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "games/v1management/applications/{applicationId}/players/hidden/{playerId}",
  }),
  svc,
) as unknown as Schema.Schema<UnhidePlayersRequest>;

export interface UnhidePlayersResponse {}
export const UnhidePlayersResponse: Schema.Schema<UnhidePlayersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<UnhidePlayersResponse>;

export type UnhidePlayersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console. */
export const unhidePlayers: API.OperationMethod<
  UnhidePlayersRequest,
  UnhidePlayersResponse,
  UnhidePlayersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnhidePlayersRequest,
  output: UnhidePlayersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface HidePlayersRequest {
  /** The application ID from the Google Play developer console. */
  applicationId: string;
  /** A player ID. A value of `me` may be used in place of the authenticated player's ID. */
  playerId: string;
}

export const HidePlayersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
  playerId: Schema.String.pipe(T.HttpPath("playerId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "games/v1management/applications/{applicationId}/players/hidden/{playerId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<HidePlayersRequest>;

export interface HidePlayersResponse {}
export const HidePlayersResponse: Schema.Schema<HidePlayersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<HidePlayersResponse>;

export type HidePlayersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console. */
export const hidePlayers: API.OperationMethod<
  HidePlayersRequest,
  HidePlayersResponse,
  HidePlayersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: HidePlayersRequest,
  output: HidePlayersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
