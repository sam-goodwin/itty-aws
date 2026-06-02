import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const ClaimAccountlessApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/accountless_applications/claim",
    }),
  );
export type ClaimAccountlessApplicationInput =
  typeof ClaimAccountlessApplicationInput.Type;

// Output Schema
export const ClaimAccountlessApplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String,
    name: Schema.String,
    instances: Schema.Array(
      Schema.Struct({
        instance_id: Schema.String,
        environment_type: Schema.Literals(["development", "production"]),
        secret_key: Schema.optional(SensitiveOutputString),
        publishable_key: Schema.optional(Schema.String),
      }),
    ),
  });
export type ClaimAccountlessApplicationOutput =
  typeof ClaimAccountlessApplicationOutput.Type;

// The operation
/**
 * Claim an accountless application
 *
 * Claim an accountless application by assigning it to the authenticated principal's workspace.
 * The application is identified by a single-use claim token that was generated when the
 * accountless application was created. Once claimed, the token is invalidated and cannot be reused.
 */
export const claimAccountlessApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClaimAccountlessApplicationInput,
    outputSchema: ClaimAccountlessApplicationOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
