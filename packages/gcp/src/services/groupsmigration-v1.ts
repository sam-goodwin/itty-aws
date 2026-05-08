// ==========================================================================
// Groups Migration API (groupsmigration v1)
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
  name: "groupsmigration",
  version: "v1",
  rootUrl: "https://groupsmigration.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Groups {
  /** The status of the insert request. */
  responseCode?: string;
  /** The kind of insert resource this is. */
  kind?: string;
}

export const Groups: Schema.Schema<Groups> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseCode: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Groups" });

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

export interface InsertArchiveRequest {
  /** The group ID */
  groupId: string;
}

export const InsertArchiveRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupId: Schema.String.pipe(T.HttpPath("groupId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "groups/v1/groups/{groupId}/archive",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertArchiveRequest>;

export type InsertArchiveResponse = Groups;
export const InsertArchiveResponse = /*@__PURE__*/ /*#__PURE__*/ Groups;

export type InsertArchiveError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new mail into the archive of the Google group. */
export const insertArchive: API.OperationMethod<
  InsertArchiveRequest,
  InsertArchiveResponse,
  InsertArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertArchiveRequest,
  output: InsertArchiveResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
