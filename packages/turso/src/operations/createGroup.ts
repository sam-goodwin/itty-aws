import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict } from "../errors.ts";

// Input Schema
export interface CreateGroupInput {
  organizationSlug: string;
  name: string;
  location: string;
  extensions?:
    | "all"
    | (
        | "vector"
        | "crypto"
        | "fuzzy"
        | "math"
        | "stats"
        | "text"
        | "unicode"
        | "uuid"
        | "regexp"
        | "vec"
      )[];
}
export const CreateGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
  location: Schema.String,
  extensions: Schema.optional(
    Schema.Union([
      Schema.Literals(["all"]),
      Schema.Array(
        Schema.Literals([
          "vector",
          "crypto",
          "fuzzy",
          "math",
          "stats",
          "text",
          "unicode",
          "uuid",
          "regexp",
          "vec",
        ]),
      ),
    ]),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/organizations/{organizationSlug}/groups",
  }),
) as unknown as Schema.Codec<CreateGroupInput>;

// Output Schema
export interface CreateGroupOutput {
  group?: {
    name?: string;
    version?: string;
    uuid?: string;
    locations?: string[];
    primary?: string;
    delete_protection?: boolean;
  };
}
export const CreateGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
      uuid: Schema.optional(Schema.String),
      locations: Schema.optional(Schema.Array(Schema.String)),
      primary: Schema.optional(Schema.String),
      delete_protection: Schema.optional(Schema.Boolean),
    }),
  ),
}) as unknown as Schema.Codec<CreateGroupOutput>;

// The operation
/**
 * Create Group
 *
 * Creates a new group for the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const createGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateGroupInput,
  outputSchema: CreateGroupOutput,
  errors: [BadRequest, Conflict] as const,
}));
