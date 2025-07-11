import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonPersonalizeEvents {
  putActionInteractions(
    input: PutActionInteractionsRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putActions(
    input: PutActionsRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putEvents(
    input: PutEventsRequest,
  ): Effect.Effect<{}, InvalidInputException | CommonAwsError>;
  putItems(
    input: PutItemsRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putUsers(
    input: PutUsersRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type PersonalizeEvents = AmazonPersonalizeEvents;

export interface Action {
  actionId: string;
  properties?: string;
}
export type ActionId = string;

export type ActionImpression = Array<string>;
export interface ActionInteraction {
  actionId: string;
  userId?: string;
  sessionId: string;
  timestamp: Date | string;
  eventType: string;
  eventId?: string;
  recommendationId?: string;
  impression?: Array<string>;
  properties?: string;
}
export type ActionInteractionsList = Array<ActionInteraction>;
export type ActionList = Array<Action>;
export type Arn = string;

export type ErrorMessage = string;

export interface Event {
  eventId?: string;
  eventType: string;
  eventValue?: number;
  itemId?: string;
  properties?: string;
  sentAt: Date | string;
  recommendationId?: string;
  impression?: Array<string>;
  metricAttribution?: MetricAttribution;
}
export type EventAttributionSource = string;

export type EventList = Array<Event>;
export type FloatType = number;

export type Impression = Array<string>;
export declare class InvalidInputException extends Data.TaggedError(
  "InvalidInputException",
)<{
  readonly message?: string;
}> {}
export interface Item {
  itemId: string;
  properties?: string;
}
export type ItemId = string;

export type ItemList = Array<Item>;
export interface MetricAttribution {
  eventAttributionSource: string;
}
export interface PutActionInteractionsRequest {
  trackingId: string;
  actionInteractions: Array<ActionInteraction>;
}
export interface PutActionsRequest {
  datasetArn: string;
  actions: Array<Action>;
}
export interface PutEventsRequest {
  trackingId: string;
  userId?: string;
  sessionId: string;
  eventList: Array<Event>;
}
export interface PutItemsRequest {
  datasetArn: string;
  items: Array<Item>;
}
export interface PutUsersRequest {
  datasetArn: string;
  users: Array<User>;
}
export type RecommendationId = string;

export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type StringType = string;

export type SynthesizedJsonActionInteractionProperties = string;

export type SynthesizedJsonActionProperties = string;

export type SynthesizedJsonEventPropertiesJSON = string;

export type SynthesizedJsonItemProperties = string;

export type SynthesizedJsonUserProperties = string;

export interface User {
  userId: string;
  properties?: string;
}
export type UserId = string;

export type UserList = Array<User>;
export declare namespace PutActionInteractions {
  export type Input = PutActionInteractionsRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutActions {
  export type Input = PutActionsRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutEvents {
  export type Input = PutEventsRequest;
  export type Output = {};
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace PutItems {
  export type Input = PutItemsRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutUsers {
  export type Input = PutUsersRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}
