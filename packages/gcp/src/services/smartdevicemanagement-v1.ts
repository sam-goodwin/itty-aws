// ==========================================================================
// Smart Device Management API (smartdevicemanagement v1)
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
  name: "smartdevicemanagement",
  version: "v1",
  rootUrl: "https://smartdevicemanagement.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleHomeEnterpriseSdmV1Structure {
  /** Structure traits. */
  traits?: Record<string, unknown>;
  /** Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC". */
  name?: string;
}

export const GoogleHomeEnterpriseSdmV1Structure: Schema.Schema<GoogleHomeEnterpriseSdmV1Structure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    traits: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleHomeEnterpriseSdmV1Structure" });

export interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse {
  /** The results of executing the command. */
  results?: Record<string, unknown>;
}

export const GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse: Schema.Schema<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse",
  });

export interface GoogleHomeEnterpriseSdmV1ListStructuresResponse {
  /** The list of structures. */
  structures?: ReadonlyArray<GoogleHomeEnterpriseSdmV1Structure>;
}

export const GoogleHomeEnterpriseSdmV1ListStructuresResponse: Schema.Schema<GoogleHomeEnterpriseSdmV1ListStructuresResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    structures: Schema.optional(
      Schema.Array(GoogleHomeEnterpriseSdmV1Structure),
    ),
  }).annotate({
    identifier: "GoogleHomeEnterpriseSdmV1ListStructuresResponse",
  });

export interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest {
  /** The command name to execute, represented by the fully qualified protobuf message name. */
  command?: string;
  /** The command message to execute, represented as a Struct. */
  params?: Record<string, unknown>;
}

export const GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest: Schema.Schema<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest",
  });

export interface GoogleHomeEnterpriseSdmV1ParentRelation {
  /** Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123" */
  parent?: string;
  /** Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to. */
  displayName?: string;
}

export const GoogleHomeEnterpriseSdmV1ParentRelation: Schema.Schema<GoogleHomeEnterpriseSdmV1ParentRelation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleHomeEnterpriseSdmV1ParentRelation" });

export interface GoogleHomeEnterpriseSdmV1Device {
  /** Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device. */
  type?: string;
  /** Assignee details of the device. */
  parentRelations?: ReadonlyArray<GoogleHomeEnterpriseSdmV1ParentRelation>;
  /** Output only. Device traits. */
  traits?: Record<string, unknown>;
  /** Required. The resource name of the device. For example: "enterprises/XYZ/devices/123". */
  name?: string;
}

export const GoogleHomeEnterpriseSdmV1Device: Schema.Schema<GoogleHomeEnterpriseSdmV1Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    parentRelations: Schema.optional(
      Schema.Array(GoogleHomeEnterpriseSdmV1ParentRelation),
    ),
    traits: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleHomeEnterpriseSdmV1Device" });

export interface GoogleHomeEnterpriseSdmV1ListDevicesResponse {
  /** The list of devices. */
  devices?: ReadonlyArray<GoogleHomeEnterpriseSdmV1Device>;
}

export const GoogleHomeEnterpriseSdmV1ListDevicesResponse: Schema.Schema<GoogleHomeEnterpriseSdmV1ListDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(Schema.Array(GoogleHomeEnterpriseSdmV1Device)),
  }).annotate({ identifier: "GoogleHomeEnterpriseSdmV1ListDevicesResponse" });

export interface GoogleHomeEnterpriseSdmV1Room {
  /** Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123". */
  name?: string;
  /** Room traits. */
  traits?: Record<string, unknown>;
}

export const GoogleHomeEnterpriseSdmV1Room: Schema.Schema<GoogleHomeEnterpriseSdmV1Room> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    traits: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleHomeEnterpriseSdmV1Room" });

export interface GoogleHomeEnterpriseSdmV1ListRoomsResponse {
  /** The list of rooms. */
  rooms?: ReadonlyArray<GoogleHomeEnterpriseSdmV1Room>;
}

export const GoogleHomeEnterpriseSdmV1ListRoomsResponse: Schema.Schema<GoogleHomeEnterpriseSdmV1ListRoomsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rooms: Schema.optional(Schema.Array(GoogleHomeEnterpriseSdmV1Room)),
  }).annotate({ identifier: "GoogleHomeEnterpriseSdmV1ListRoomsResponse" });

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

export interface ListEnterprisesDevicesRequest {
  /** The parent enterprise to list devices under. E.g. "enterprises/XYZ". */
  parent: string;
  /** Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing' */
  filter?: string;
}

export const ListEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesDevicesRequest>;

export type ListEnterprisesDevicesResponse =
  GoogleHomeEnterpriseSdmV1ListDevicesResponse;
export const ListEnterprisesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleHomeEnterpriseSdmV1ListDevicesResponse;

export type ListEnterprisesDevicesError = DefaultErrors | NotFound | Forbidden;

/** Lists devices managed by the enterprise. */
export const listEnterprisesDevices: API.OperationMethod<
  ListEnterprisesDevicesRequest,
  ListEnterprisesDevicesResponse,
  ListEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEnterprisesDevicesRequest,
  output: ListEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExecuteCommandEnterprisesDevicesRequest {
  /** The name of the device requested. For example: "enterprises/XYZ/devices/123" */
  name: string;
  /** Request body */
  body?: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
}

export const ExecuteCommandEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:executeCommand",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteCommandEnterprisesDevicesRequest>;

export type ExecuteCommandEnterprisesDevicesResponse =
  GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse;
export const ExecuteCommandEnterprisesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse;

export type ExecuteCommandEnterprisesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Executes a command to device managed by the enterprise. */
export const executeCommandEnterprisesDevices: API.OperationMethod<
  ExecuteCommandEnterprisesDevicesRequest,
  ExecuteCommandEnterprisesDevicesResponse,
  ExecuteCommandEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteCommandEnterprisesDevicesRequest,
  output: ExecuteCommandEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEnterprisesDevicesRequest {
  /** The name of the device requested. For example: "enterprises/XYZ/devices/123" */
  name: string;
}

export const GetEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesDevicesRequest>;

export type GetEnterprisesDevicesResponse = GoogleHomeEnterpriseSdmV1Device;
export const GetEnterprisesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleHomeEnterpriseSdmV1Device;

export type GetEnterprisesDevicesError = DefaultErrors | NotFound | Forbidden;

/** Gets a device managed by the enterprise. */
export const getEnterprisesDevices: API.OperationMethod<
  GetEnterprisesDevicesRequest,
  GetEnterprisesDevicesResponse,
  GetEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesDevicesRequest,
  output: GetEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesStructuresRequest {
  /** The parent enterprise to list structures under. E.g. "enterprises/XYZ". */
  parent: string;
  /** Optional filter to list structures. */
  filter?: string;
}

export const ListEnterprisesStructuresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/structures" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesStructuresRequest>;

export type ListEnterprisesStructuresResponse =
  GoogleHomeEnterpriseSdmV1ListStructuresResponse;
export const ListEnterprisesStructuresResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleHomeEnterpriseSdmV1ListStructuresResponse;

export type ListEnterprisesStructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists structures managed by the enterprise. */
export const listEnterprisesStructures: API.OperationMethod<
  ListEnterprisesStructuresRequest,
  ListEnterprisesStructuresResponse,
  ListEnterprisesStructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEnterprisesStructuresRequest,
  output: ListEnterprisesStructuresResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetEnterprisesStructuresRequest {
  /** The name of the structure requested. For example: "enterprises/XYZ/structures/ABC". */
  name: string;
}

export const GetEnterprisesStructuresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesStructuresRequest>;

export type GetEnterprisesStructuresResponse =
  GoogleHomeEnterpriseSdmV1Structure;
export const GetEnterprisesStructuresResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleHomeEnterpriseSdmV1Structure;

export type GetEnterprisesStructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a structure managed by the enterprise. */
export const getEnterprisesStructures: API.OperationMethod<
  GetEnterprisesStructuresRequest,
  GetEnterprisesStructuresResponse,
  GetEnterprisesStructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesStructuresRequest,
  output: GetEnterprisesStructuresResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetEnterprisesStructuresRoomsRequest {
  /** The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123". */
  name: string;
}

export const GetEnterprisesStructuresRoomsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesStructuresRoomsRequest>;

export type GetEnterprisesStructuresRoomsResponse =
  GoogleHomeEnterpriseSdmV1Room;
export const GetEnterprisesStructuresRoomsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleHomeEnterpriseSdmV1Room;

export type GetEnterprisesStructuresRoomsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a room managed by the enterprise. */
export const getEnterprisesStructuresRooms: API.OperationMethod<
  GetEnterprisesStructuresRoomsRequest,
  GetEnterprisesStructuresRoomsResponse,
  GetEnterprisesStructuresRoomsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesStructuresRoomsRequest,
  output: GetEnterprisesStructuresRoomsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesStructuresRoomsRequest {
  /** The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC". */
  parent: string;
}

export const ListEnterprisesStructuresRoomsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/rooms" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesStructuresRoomsRequest>;

export type ListEnterprisesStructuresRoomsResponse =
  GoogleHomeEnterpriseSdmV1ListRoomsResponse;
export const ListEnterprisesStructuresRoomsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleHomeEnterpriseSdmV1ListRoomsResponse;

export type ListEnterprisesStructuresRoomsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists rooms managed by the enterprise. */
export const listEnterprisesStructuresRooms: API.OperationMethod<
  ListEnterprisesStructuresRoomsRequest,
  ListEnterprisesStructuresRoomsResponse,
  ListEnterprisesStructuresRoomsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEnterprisesStructuresRoomsRequest,
  output: ListEnterprisesStructuresRoomsResponse,
  errors: [NotFound, Forbidden],
}));
