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
export const StartVersionUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/databases/{databaseId}/version-upgrade" }),
  );
export type StartVersionUpgradeInput = typeof StartVersionUpgradeInput.Type;

// Output Schema
export const StartVersionUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type StartVersionUpgradeOutput = typeof StartVersionUpgradeOutput.Type;

// The operation
/**
 * Start Version Upgrade
 *
 * Start a version upgrade for the Managed Database (PostgreSQL engine types only).
 */
export const startVersionUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StartVersionUpgradeInput,
  outputSchema: StartVersionUpgradeOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
