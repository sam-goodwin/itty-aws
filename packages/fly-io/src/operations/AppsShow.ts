import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppsShowInput {
  app_name: string;
}
export const AppsShowInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/apps/{app_name}" }),
) as unknown as Schema.Codec<AppsShowInput>;

// Output Schema
export interface AppsShowOutput {
  id?: string;
  internal_numeric_id?: number;
  machine_count?: number;
  name?: string;
  network?: string;
  organization?: { internal_numeric_id?: number; name?: string; slug?: string };
  status?: string;
  volume_count?: number;
}
export const AppsShowOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  internal_numeric_id: Schema.optional(Schema.Number),
  machine_count: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  network: Schema.optional(Schema.String),
  organization: Schema.optional(
    Schema.Struct({
      internal_numeric_id: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.String),
      slug: Schema.optional(Schema.String),
    }),
  ),
  status: Schema.optional(Schema.String),
  volume_count: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<AppsShowOutput>;

// The operation
/**
 * Get App
 *
 * Retrieve details about a specific app by its name.
 *
 * @param app_name - Fly App Name
 */
export const AppsShow = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsShowInput,
  outputSchema: AppsShowOutput,
  errors: [Forbidden, NotFound] as const,
}));
