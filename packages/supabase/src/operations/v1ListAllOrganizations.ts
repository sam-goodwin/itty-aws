import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllOrganizationsInput {}
export const V1ListAllOrganizationsInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/v1/organizations" }),
  ) as unknown as Schema.Codec<V1ListAllOrganizationsInput>;

// Output Schema
export type V1ListAllOrganizationsOutput = {
  id: string;
  slug: string;
  name: string;
}[];
export const V1ListAllOrganizationsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      slug: Schema.String,
      name: Schema.String,
    }),
  ) as unknown as Schema.Codec<V1ListAllOrganizationsOutput>;

// The operation
/**
 * List all organizations
 *
 * Returns a list of organizations that you currently belong to.
 */
export const v1ListAllOrganizations = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllOrganizationsInput,
  outputSchema: V1ListAllOrganizationsOutput,
  errors: [Forbidden] as const,
}));
