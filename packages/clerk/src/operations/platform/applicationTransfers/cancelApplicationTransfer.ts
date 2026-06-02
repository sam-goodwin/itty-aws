import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, NotFound, Conflict } from "../../../errors.ts";

// Input Schema
export const CancelApplicationTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    transferID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/transfers/{transferID}",
    }),
  );
export type CancelApplicationTransferInput =
  typeof CancelApplicationTransferInput.Type;

// Output Schema
export const CancelApplicationTransferOutput =
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
export type CancelApplicationTransferOutput =
  typeof CancelApplicationTransferOutput.Type;

// The operation
/**
 * Cancel an application transfer
 *
 * Cancel an existing application transfer. Only transfers in 'pending' status can be canceled.
 *
 * @param applicationID - Application ID.
 * @param transferID - Application Transfer ID.
 */
export const cancelApplicationTransfer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CancelApplicationTransferInput,
    outputSchema: CancelApplicationTransferOutput,
    errors: [Forbidden, NotFound, Conflict] as const,
  }),
);
