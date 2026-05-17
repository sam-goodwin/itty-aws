import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ApplicationsGetActivityInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    instance_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/applications/{application_id}/activity-instances/{instance_id}",
    }),
  );
export type ApplicationsGetActivityInstanceInput =
  typeof ApplicationsGetActivityInstanceInput.Type;

// Output Schema
export const ApplicationsGetActivityInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String,
    instance_id: Schema.String,
    launch_id: Schema.String,
    location: Schema.Unknown,
    users: Schema.Array(Schema.String),
  });
export type ApplicationsGetActivityInstanceOutput =
  typeof ApplicationsGetActivityInstanceOutput.Type;

// The operation
export const applicationsGetActivityInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsGetActivityInstanceInput,
    outputSchema: ApplicationsGetActivityInstanceOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
