import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetApplicationTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    transferID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/transfers/{transferID}",
    }),
  );
export type GetApplicationTransferInput =
  typeof GetApplicationTransferInput.Type;

// Output Schema
export const GetApplicationTransferOutput =
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
export type GetApplicationTransferOutput =
  typeof GetApplicationTransferOutput.Type;

// The operation
/**
 * Get an application transfer
 *
 * Retrieve details of an application transfer by its ID.
 *
 * @param applicationID - Application ID.
 * @param transferID - Application Transfer ID.
 */
export const getApplicationTransfer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetApplicationTransferInput,
    outputSchema: GetApplicationTransferOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
