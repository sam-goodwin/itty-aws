import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const HostingGetNodeJSBuildLogsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
    from_line: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds/{uuid}/logs",
    }),
  );
export type HostingGetNodeJSBuildLogsV1Input =
  typeof HostingGetNodeJSBuildLogsV1Input.Type;

// Output Schema
export const HostingGetNodeJSBuildLogsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logs: Schema.NullOr(Schema.String),
    lines: Schema.Number,
  });
export type HostingGetNodeJSBuildLogsV1Output =
  typeof HostingGetNodeJSBuildLogsV1Output.Type;

// The operation
/**
 * Get NodeJS build logs
 *
 * Retrieve logs from a specific Node.js build process.
 * To stream live output while a build is running, poll this endpoint repeatedly
 * while the build state is `running`, passing the previously returned `lines` count
 * as `from_line` to fetch only new output since the last call.
 * Log content may contain ANSI escape sequences (color codes).
 *
 * @param domain - Domain name
 * @param uuid - Build UUID
 * @param from_line - Line from which to start retrieving logs
 */
export const hostingGetNodeJSBuildLogsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostingGetNodeJSBuildLogsV1Input,
    outputSchema: HostingGetNodeJSBuildLogsV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
