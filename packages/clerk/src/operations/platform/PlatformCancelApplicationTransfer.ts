import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound, Conflict } from "../../errors.ts";

// Input Schema
export const PlatformCancelApplicationTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    transferID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/transfers/{transferID}",
    }),
  );
export type PlatformCancelApplicationTransferInput =
  typeof PlatformCancelApplicationTransferInput.Type;

// Output Schema
export const PlatformCancelApplicationTransferOutput =
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
export type PlatformCancelApplicationTransferOutput =
  typeof PlatformCancelApplicationTransferOutput.Type;

// The operation
/**
 * Cancel an application transfer
 *
 * Cancel an existing application transfer. Only transfers in 'pending' status can be canceled.
 *
 * @param applicationID - Application ID.
 * @param transferID - Application Transfer ID.
 */
export const PlatformCancelApplicationTransfer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PlatformCancelApplicationTransferInput,
    outputSchema: PlatformCancelApplicationTransferOutput,
    errors: [Forbidden, NotFound, Conflict] as const,
  }));
