import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const IamAwsStsAssumeRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    Action: Schema.optional(Schema.String),
    RoleArn: Schema.optional(Schema.String),
    RoleSessionName: Schema.optional(Schema.String),
    DurationSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/assumed-roles/compatibility/aws/sts",
      contentType: "form-urlencoded",
    }),
  );
export type IamAwsStsAssumeRoleInput = typeof IamAwsStsAssumeRoleInput.Type;

// Output Schema
export const IamAwsStsAssumeRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IamAwsStsAssumeRoleOutput = typeof IamAwsStsAssumeRoleOutput.Type;

// The operation
/**
 * AWS STS AssumeRole Compatibility
 *
 * AWS STS-compatible AssumeRole endpoint. Accepts `application/x-www-form-urlencoded` and returns XML.
 */
export const iamAwsStsAssumeRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IamAwsStsAssumeRoleInput,
  outputSchema: IamAwsStsAssumeRoleOutput,
  errors: [BadRequest, Forbidden] as const,
}));
