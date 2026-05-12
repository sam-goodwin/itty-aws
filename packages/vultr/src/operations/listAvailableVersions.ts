import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const ListAvailableVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/databases/{databaseId}/version-upgrade" }),
  );
export type ListAvailableVersionsInput = typeof ListAvailableVersionsInput.Type;

// Output Schema
export const ListAvailableVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available_versions: Schema.optional(Schema.Array(Schema.String)),
  });
export type ListAvailableVersionsOutput =
  typeof ListAvailableVersionsOutput.Type;

// The operation
/**
 * List Available Versions
 *
 * List all available version upgrades within the Managed Database (PostgreSQL and Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listAvailableVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListAvailableVersionsInput,
    outputSchema: ListAvailableVersionsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
