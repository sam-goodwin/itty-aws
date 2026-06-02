import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, Conflict } from "../../../errors.ts";

// Input Schema
export const CreateApplicationTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/applications/{applicationID}/transfers",
    }),
  );
export type CreateApplicationTransferInput =
  typeof CreateApplicationTransferInput.Type;

// Output Schema
export const CreateApplicationTransferOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["application_transfer"]),
    id: Schema.String,
    code: Schema.String,
    application_id: Schema.String,
    status: Schema.Literals(["pending", "completed", "canceled", "expired"]),
    expires_at: Schema.String,
    created_at: Schema.String,
    canceled_at: Schema.NullOr(Schema.String),
    completed_at: Schema.NullOr(Schema.String),
  });
export type CreateApplicationTransferOutput =
  typeof CreateApplicationTransferOutput.Type;

// The operation
/**
 * Create an application transfer
 *
 * Create a new transfer request for an application. This initiates the process of
 * transferring ownership of the application to another workspace.
 * Only one pending transfer can exist for an application at a time. The transfer
 * will expire after 24 hours if not completed.
 *
 * @param applicationID - Application ID.
 */
export const createApplicationTransfer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateApplicationTransferInput,
    outputSchema: CreateApplicationTransferOutput,
    errors: [Forbidden, Conflict] as const,
  }),
);
