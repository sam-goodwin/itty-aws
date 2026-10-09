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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Personalize Events",
  serviceShapeName: "AmazonPersonalizeEvents",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "personalize" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-03-22");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
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
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://personalize-events-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://personalize-events-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://personalize-events.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://personalize-events.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export type StringType = string;
export type ActionId = string | redacted.Redacted<string>;
export type UserId = string | redacted.Redacted<string>;
export type RecommendationId = string;
export type ActionImpression = (string | redacted.Redacted<string>)[];
const ActionImpression = /*@__PURE__*/ __L.at(__c0, 0);
export type SynthesizedJsonActionInteractionProperties = string | redacted.Redacted<string>;
export interface ActionInteraction {
  actionId: string | redacted.Redacted<string>;
  userId?: string | redacted.Redacted<string>;
  sessionId: string;
  timestamp: Date;
  eventType: string;
  eventId?: string;
  recommendationId?: string;
  impression?: (string | redacted.Redacted<string>)[];
  properties?: string | redacted.Redacted<string>;
}
const ActionInteraction = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<ActionInteraction>;
export type ActionInteractionsList = ActionInteraction[];
const ActionInteractionsList = /*@__PURE__*/ __L.at(__c0, 2);
export interface PutActionInteractionsRequest {
  trackingId: string;
  actionInteractions: ActionInteraction[];
}
const PutActionInteractionsRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<PutActionInteractionsRequest>;
export interface PutActionInteractionsResponse {}
const PutActionInteractionsResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<PutActionInteractionsResponse>;
export type Arn = string;
export type SynthesizedJsonActionProperties = string | redacted.Redacted<string>;
export interface Action {
  actionId: string;
  properties?: string | redacted.Redacted<string>;
}
const Action = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Action>;
export type ActionList = Action[];
const ActionList = /*@__PURE__*/ __L.at(__c0, 6);
export interface PutActionsRequest {
  datasetArn: string;
  actions: Action[];
}
const PutActionsRequest = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<PutActionsRequest>;
export interface PutActionsResponse {}
const PutActionsResponse = PutActionInteractionsResponse as any as S.Schema<PutActionsResponse>;
export type FloatType = number;
export type ItemId = string | redacted.Redacted<string>;
export type SynthesizedJsonEventPropertiesJSON = string | redacted.Redacted<string>;
export type Impression = (string | redacted.Redacted<string>)[];
const Impression = ActionImpression as any as S.Schema<Impression>;
export type EventAttributionSource = string;
export interface MetricAttribution {
  eventAttributionSource: string;
}
const MetricAttribution = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<MetricAttribution>;
export interface Event {
  eventId?: string;
  eventType: string;
  eventValue?: number;
  itemId?: string | redacted.Redacted<string>;
  properties?: string | redacted.Redacted<string>;
  sentAt: Date;
  recommendationId?: string;
  impression?: (string | redacted.Redacted<string>)[];
  metricAttribution?: MetricAttribution;
}
const Event = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Event>;
export type EventList = Event[];
const EventList = /*@__PURE__*/ __L.at(__c1, 2);
export interface PutEventsRequest {
  trackingId: string;
  userId?: string | redacted.Redacted<string>;
  sessionId: string;
  eventList: Event[];
}
const PutEventsRequest = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<PutEventsRequest>;
export interface PutEventsResponse {}
const PutEventsResponse = PutActionInteractionsResponse as any as S.Schema<PutEventsResponse>;
export type SynthesizedJsonItemProperties = string | redacted.Redacted<string>;
export interface Item {
  itemId: string;
  properties?: string | redacted.Redacted<string>;
}
const Item = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Item>;
export type ItemList = Item[];
const ItemList = /*@__PURE__*/ __L.at(__c1, 5);
export interface PutItemsRequest {
  datasetArn: string;
  items: Item[];
}
const PutItemsRequest = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<PutItemsRequest>;
export interface PutItemsResponse {}
const PutItemsResponse = PutActionInteractionsResponse as any as S.Schema<PutItemsResponse>;
export type SynthesizedJsonUserProperties = string | redacted.Redacted<string>;
export interface User {
  userId: string;
  properties?: string | redacted.Redacted<string>;
}
const User = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<User>;
export type UserList = User[];
const UserList = /*@__PURE__*/ __L.at(__c2, 0);
export interface PutUsersRequest {
  datasetArn: string;
  users: User[];
}
const PutUsersRequest = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<PutUsersRequest>;
export interface PutUsersResponse {}
const PutUsersResponse = PutActionInteractionsResponse as any as S.Schema<PutUsersResponse>;
export type ErrorMessage = string;
export type PutActionInteractionsError =
  | InvalidInputException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Records action interaction event data. An *action interaction* event is an interaction between a user and an *action*.
 * For example, a user taking an action, such a enrolling in a membership program or downloading your app.
 *
 * For more information about recording action interactions, see Recording action interaction events.
 * For more information about actions in an Actions dataset, see Actions dataset.
 */
export const putActionInteractions: API.OperationMethod<
  PutActionInteractionsRequest,
  PutActionInteractionsResponse,
  PutActionInteractionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutActionInteractionsRequest,
  output: PutActionInteractionsResponse,
  errors: [InvalidInputException, ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutActionInteractions",
}));

export type PutActionsError =
  | InvalidInputException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds one or more actions to an Actions dataset. For more information see
 * Importing actions individually.
 */
export const putActions: API.OperationMethod<
  PutActionsRequest,
  PutActionsResponse,
  PutActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutActionsRequest,
  output: PutActionsResponse,
  errors: [InvalidInputException, ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutActions",
}));

export type PutEventsError = InvalidInputException | CommonErrors;
/**
 * Records item interaction event data. For more information see
 * Recording item interaction events.
 */
export const putEvents: API.OperationMethod<
  PutEventsRequest,
  PutEventsResponse,
  PutEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutEventsRequest,
  output: PutEventsResponse,
  errors: [InvalidInputException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEvents",
}));

export type PutItemsError =
  | InvalidInputException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds one or more items to an Items dataset. For more information see
 * Importing items individually.
 */
export const putItems: API.OperationMethod<
  PutItemsRequest,
  PutItemsResponse,
  PutItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutItemsRequest,
  output: PutItemsResponse,
  errors: [InvalidInputException, ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutItems",
}));

export type PutUsersError =
  | InvalidInputException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds one or more users to a Users dataset. For more information see
 * Importing users individually.
 */
export const putUsers: API.OperationMethod<
  PutUsersRequest,
  PutUsersResponse,
  PutUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutUsersRequest,
  output: PutUsersResponse,
  errors: [InvalidInputException, ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutUsers",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SensitiveString);
    case 1:
      return S.suspend(() =>
        S.Struct({
          actionId: SensitiveString,
          userId: S.optional(SensitiveString),
          sessionId: S.String,
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          eventType: S.String,
          eventId: S.optional(S.String),
          recommendationId: S.optional(S.String),
          impression: S.optional(ActionImpression),
          properties: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ActionInteraction" });
    case 2:
      return S.Array(ActionInteraction);
    case 3:
      return S.suspend(() =>
        S.Struct({ trackingId: S.String, actionInteractions: ActionInteractionsList }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/action-interactions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutActionInteractionsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "PutActionInteractionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ actionId: S.String, properties: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Action" });
    case 6:
      return S.Array(Action);
    case 7:
      return S.suspend(() =>
        S.Struct({ datasetArn: S.String, actions: ActionList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/actions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutActionsRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ eventAttributionSource: S.String })).annotate({
        identifier: "MetricAttribution",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(S.String),
          eventType: S.String,
          eventValue: S.optional(S.Number),
          itemId: S.optional(SensitiveString),
          properties: S.optional(SensitiveString),
          sentAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          recommendationId: S.optional(S.String),
          impression: S.optional(Impression),
          metricAttribution: S.optional(MetricAttribution),
        }),
      ).annotate({ identifier: "Event" });
    case 2:
      return S.Array(Event);
    case 3:
      return S.suspend(() =>
        S.Struct({
          trackingId: S.String,
          userId: S.optional(SensitiveString),
          sessionId: S.String,
          eventList: EventList,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/events" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutEventsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ itemId: S.String, properties: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Item" });
    case 5:
      return S.Array(Item);
    case 6:
      return S.suspend(() =>
        S.Struct({ datasetArn: S.String, items: ItemList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/items" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutItemsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ userId: S.String, properties: S.optional(SensitiveString) }),
      ).annotate({ identifier: "User" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(User);
    case 1:
      return S.suspend(() =>
        S.Struct({ datasetArn: S.String, users: UserList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/users" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutUsersRequest" });
  }
}
