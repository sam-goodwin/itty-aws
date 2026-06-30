import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppsCreateInput {
  enable_subdomains?: boolean;
  name?: string;
  network?: string;
  org_slug?: string;
}
export const AppsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enable_subdomains: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  network: Schema.optional(Schema.String),
  org_slug: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/apps" }),
) as unknown as Schema.Codec<AppsCreateInput>;

// Output Schema
export type AppsCreateOutput = void;
export const AppsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AppsCreateOutput>;

// The operation
/**
 * Create App
 *
 * Create an app with the specified details in the request body.
 */
export const AppsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsCreateInput,
  outputSchema: AppsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
