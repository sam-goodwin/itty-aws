// ==========================================================================
// HomeGraph API (homegraph v1)
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
  name: "homegraph",
  version: "v1",
  rootUrl: "https://homegraph.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface TraitData {
  /** Optional. The Home API trait payload. */
  trait?: Record<string, unknown>;
}

export const TraitData: Schema.Schema<TraitData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trait: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "TraitData" });

export interface ComponentTraitUpdates {
  /** Required. ID of the component from the device provider. */
  componentId?: string;
  /** Required. The updated trait data for the component. */
  traitData?: ReadonlyArray<TraitData>;
}

export const ComponentTraitUpdates: Schema.Schema<ComponentTraitUpdates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    componentId: Schema.optional(Schema.String),
    traitData: Schema.optional(Schema.Array(TraitData)),
  }).annotate({ identifier: "ComponentTraitUpdates" });

export interface HomeTraitUpdates {
  /** Required. Unique identifier for the device. */
  deviceId?: string;
  /** Required. Trait updates for each component. */
  components?: ReadonlyArray<ComponentTraitUpdates>;
}

export const HomeTraitUpdates: Schema.Schema<HomeTraitUpdates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(ComponentTraitUpdates)),
  }).annotate({ identifier: "HomeTraitUpdates" });

export interface EventData {
  /** Required. The actual event payload. */
  event?: Record<string, unknown>;
  /** Required. The timestamp of the event. */
  eventTime?: string;
  /** Required. The unique event ID from the device provider. */
  eventId?: string;
}

export const EventData: Schema.Schema<EventData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventData" });

export interface Events {
  /** Optional. The ID of the provider component if the events are associated with a specific component. Optional for WHDM events, required for UDDM events. */
  componentId?: string;
  /** Required. List of events associated with the component. */
  events?: ReadonlyArray<EventData>;
}

export const Events: Schema.Schema<Events> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    componentId: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(EventData)),
  }).annotate({ identifier: "Events" });

export interface HomeEvents {
  /** Required. / Unique identifier for the device. */
  deviceId?: string;
  /** Required. List of events for the item. */
  events?: ReadonlyArray<Events>;
}

export const HomeEvents: Schema.Schema<HomeEvents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(Events)),
  }).annotate({ identifier: "HomeEvents" });

export interface ReportStateAndNotificationDevice {
  /** Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). */
  notifications?: Record<string, unknown>;
  /** Optional. UDDM/WHDM trait updates. */
  homeTraits?: ReadonlyArray<HomeTraitUpdates>;
  /** Optional. UDDM/WHDM trait events */
  homeEvents?: ReadonlyArray<HomeEvents>;
  /** States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). */
  states?: Record<string, unknown>;
}

export const ReportStateAndNotificationDevice: Schema.Schema<ReportStateAndNotificationDevice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notifications: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    homeTraits: Schema.optional(Schema.Array(HomeTraitUpdates)),
    homeEvents: Schema.optional(Schema.Array(HomeEvents)),
    states: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ReportStateAndNotificationDevice" });

export interface StateAndNotificationPayload {
  /** The devices for updating state and sending notifications. */
  devices?: ReportStateAndNotificationDevice;
}

export const StateAndNotificationPayload: Schema.Schema<StateAndNotificationPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(ReportStateAndNotificationDevice),
  }).annotate({ identifier: "StateAndNotificationPayload" });

export interface ReportStateAndNotificationRequest {
  /** Required. Third-party user ID. */
  agentUserId?: string;
  /** Required. State of devices to update and notification metadata for devices. */
  payload?: StateAndNotificationPayload;
  /** Request ID used for debugging. */
  requestId?: string;
  /** Deprecated. */
  followUpToken?: string;
  /** Unique identifier per event (for example, a doorbell press). */
  eventId?: string;
}

export const ReportStateAndNotificationRequest: Schema.Schema<ReportStateAndNotificationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUserId: Schema.optional(Schema.String),
    payload: Schema.optional(StateAndNotificationPayload),
    requestId: Schema.optional(Schema.String),
    followUpToken: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportStateAndNotificationRequest" });

export interface QueryResponsePayload {
  /** States of the devices. Map of third-party device ID to struct of device states. */
  devices?: Record<string, Record<string, unknown>>;
}

export const QueryResponsePayload: Schema.Schema<QueryResponsePayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "QueryResponsePayload" });

export interface AgentOtherDeviceId {
  /** Project ID for your smart home Action. */
  agentId?: string;
  /** Unique third-party device ID. */
  deviceId?: string;
}

export const AgentOtherDeviceId: Schema.Schema<AgentOtherDeviceId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentId: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentOtherDeviceId" });

export interface DeviceInfo {
  /** Device manufacturer. */
  manufacturer?: string;
  /** Device model. */
  model?: string;
  /** Device hardware version. */
  hwVersion?: string;
  /** Device software version. */
  swVersion?: string;
}

export const DeviceInfo: Schema.Schema<DeviceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manufacturer: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    hwVersion: Schema.optional(Schema.String),
    swVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceInfo" });

export interface DeviceNames {
  /** Primary name of the device, generally provided by the user. Names will be truncated if over the 60 Unicode code point (character) limit and no errors will be thrown. Developers are responsible for handling long names. */
  name?: string;
  /** List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc. */
  defaultNames?: ReadonlyArray<string>;
  /** Additional names provided by the user for the device. */
  nicknames?: ReadonlyArray<string>;
}

export const DeviceNames: Schema.Schema<DeviceNames> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    defaultNames: Schema.optional(Schema.Array(Schema.String)),
    nicknames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DeviceNames" });

export interface Device {
  /** Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information. */
  customData?: Record<string, unknown>;
  /** Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.home.google.com/local-home/overview). */
  otherDeviceIds?: ReadonlyArray<AgentOtherDeviceId>;
  /** Suggested name for the room where this device is installed. Google attempts to use this value during user setup. */
  roomHint?: string;
  /** Suggested name for the structure where this device is installed. Google attempts to use this value during user setup. */
  structureHint?: string;
  /** Device manufacturer, model, hardware version, and software version. */
  deviceInfo?: DeviceInfo;
  /** Traits supported by the device. See [device traits](https://developers.home.google.com/cloud-to-cloud/traits). */
  traits?: ReadonlyArray<string>;
  /** Names given to this device by your smart home Action. */
  name?: DeviceNames;
  /** Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification. */
  willReportState?: boolean;
  /** Attributes for the traits supported by the device. */
  attributes?: Record<string, unknown>;
  /** Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides). */
  type?: string;
  /** Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices. */
  notificationSupportedByAgent?: boolean;
  /** Third-party device ID. */
  id?: string;
}

export const Device: Schema.Schema<Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customData: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    otherDeviceIds: Schema.optional(Schema.Array(AgentOtherDeviceId)),
    roomHint: Schema.optional(Schema.String),
    structureHint: Schema.optional(Schema.String),
    deviceInfo: Schema.optional(DeviceInfo),
    traits: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(DeviceNames),
    willReportState: Schema.optional(Schema.Boolean),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.optional(Schema.String),
    notificationSupportedByAgent: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Device" });

export interface SyncResponsePayload {
  /** Third-party user ID */
  agentUserId?: string;
  /** Devices associated with the third-party user. */
  devices?: ReadonlyArray<Device>;
}

export const SyncResponsePayload: Schema.Schema<SyncResponsePayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUserId: Schema.optional(Schema.String),
    devices: Schema.optional(Schema.Array(Device)),
  }).annotate({ identifier: "SyncResponsePayload" });

export interface RequestSyncDevicesResponse {}

export const RequestSyncDevicesResponse: Schema.Schema<RequestSyncDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RequestSyncDevicesResponse",
  });

export interface RequestSyncDevicesRequest {
  /** Required. Third-party user ID. */
  agentUserId?: string;
  /** Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses. */
  async?: boolean;
}

export const RequestSyncDevicesRequest: Schema.Schema<RequestSyncDevicesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUserId: Schema.optional(Schema.String),
    async: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RequestSyncDevicesRequest" });

export interface ReportStateAndNotificationResponse {
  /** Request ID copied from ReportStateAndNotificationRequest. */
  requestId?: string;
}

export const ReportStateAndNotificationResponse: Schema.Schema<ReportStateAndNotificationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportStateAndNotificationResponse" });

export interface AgentDeviceId {
  /** Third-party device ID. */
  id?: string;
}

export const AgentDeviceId: Schema.Schema<AgentDeviceId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentDeviceId" });

export interface QueryRequestPayload {
  /** Third-party device IDs for which to get the device states. */
  devices?: ReadonlyArray<AgentDeviceId>;
}

export const QueryRequestPayload: Schema.Schema<QueryRequestPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(Schema.Array(AgentDeviceId)),
  }).annotate({ identifier: "QueryRequestPayload" });

export interface SyncRequest {
  /** Request ID used for debugging. */
  requestId?: string;
  /** Required. Third-party user ID. */
  agentUserId?: string;
}

export const SyncRequest: Schema.Schema<SyncRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    agentUserId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SyncRequest" });

export interface QueryResponse {
  /** Request ID used for debugging. Copied from the request. */
  requestId?: string;
  /** Device states for the devices given in the request. */
  payload?: QueryResponsePayload;
}

export const QueryResponse: Schema.Schema<QueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    payload: Schema.optional(QueryResponsePayload),
  }).annotate({ identifier: "QueryResponse" });

export interface QueryRequestInput {
  /** Payload containing third-party device IDs. */
  payload?: QueryRequestPayload;
}

export const QueryRequestInput: Schema.Schema<QueryRequestInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(QueryRequestPayload),
  }).annotate({ identifier: "QueryRequestInput" });

export interface QueryRequest {
  /** Required. Third-party user ID. */
  agentUserId?: string;
  /** Required. Inputs containing third-party device IDs for which to get the device states. */
  inputs?: ReadonlyArray<QueryRequestInput>;
  /** Request ID used for debugging. */
  requestId?: string;
}

export const QueryRequest: Schema.Schema<QueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUserId: Schema.optional(Schema.String),
    inputs: Schema.optional(Schema.Array(QueryRequestInput)),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryRequest" });

export interface SyncResponse {
  /** Request ID used for debugging. Copied from the request. */
  requestId?: string;
  /** Devices associated with the third-party user. */
  payload?: SyncResponsePayload;
}

export const SyncResponse: Schema.Schema<SyncResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    payload: Schema.optional(SyncResponsePayload),
  }).annotate({ identifier: "SyncResponse" });

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

export interface RequestSyncDevicesRequest_Op {
  /** Request body */
  body?: RequestSyncDevicesRequest;
}

export const RequestSyncDevicesRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(RequestSyncDevicesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/devices:requestSync", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RequestSyncDevicesRequest_Op>;

export type RequestSyncDevicesResponse_Op = RequestSyncDevicesResponse;
export const RequestSyncDevicesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ RequestSyncDevicesResponse;

export type RequestSyncDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project. */
export const requestSyncDevices: API.OperationMethod<
  RequestSyncDevicesRequest_Op,
  RequestSyncDevicesResponse_Op,
  RequestSyncDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestSyncDevicesRequest_Op,
  output: RequestSyncDevicesResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryDevicesRequest {
  /** Request body */
  body?: QueryRequest;
}

export const QueryDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(QueryRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/devices:query", hasBody: true }),
  svc,
) as unknown as Schema.Schema<QueryDevicesRequest>;

export type QueryDevicesResponse = QueryResponse;
export const QueryDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ QueryResponse;

export type QueryDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project. */
export const queryDevices: API.OperationMethod<
  QueryDevicesRequest,
  QueryDevicesResponse,
  QueryDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryDevicesRequest,
  output: QueryDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SyncDevicesRequest {
  /** Request body */
  body?: SyncRequest;
}

export const SyncDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SyncRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/devices:sync", hasBody: true }),
  svc,
) as unknown as Schema.Schema<SyncDevicesRequest>;

export type SyncDevicesResponse = SyncResponse;
export const SyncDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ SyncResponse;

export type SyncDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project. */
export const syncDevices: API.OperationMethod<
  SyncDevicesRequest,
  SyncDevicesResponse,
  SyncDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SyncDevicesRequest,
  output: SyncDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportStateAndNotificationDevicesRequest {
  /** Request body */
  body?: ReportStateAndNotificationRequest;
}

export const ReportStateAndNotificationDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ReportStateAndNotificationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/devices:reportStateAndNotification",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReportStateAndNotificationDevicesRequest>;

export type ReportStateAndNotificationDevicesResponse =
  ReportStateAndNotificationResponse;
export const ReportStateAndNotificationDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReportStateAndNotificationResponse;

export type ReportStateAndNotificationDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project. */
export const reportStateAndNotificationDevices: API.OperationMethod<
  ReportStateAndNotificationDevicesRequest,
  ReportStateAndNotificationDevicesResponse,
  ReportStateAndNotificationDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportStateAndNotificationDevicesRequest,
  output: ReportStateAndNotificationDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAgentUsersRequest {
  /** Request ID used for debugging. */
  requestId?: string;
  /** Required. Third-party user ID. */
  agentUserId: string;
}

export const DeleteAgentUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    agentUserId: Schema.String.pipe(T.HttpPath("agentUserId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+agentUserId}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAgentUsersRequest>;

export type DeleteAgentUsersResponse = Empty;
export const DeleteAgentUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAgentUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.home.google.com/cloud-to-cloud/primer/fulfillment). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project. */
export const deleteAgentUsers: API.OperationMethod<
  DeleteAgentUsersRequest,
  DeleteAgentUsersResponse,
  DeleteAgentUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAgentUsersRequest,
  output: DeleteAgentUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
