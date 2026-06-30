import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateAPITokenInput {
  tokenName: string;
  organization?: string;
  group?: string;
  scopes?: (
    | "read"
    | "db:create"
    | "db:delete"
    | "db:configure"
    | "db:mint-token"
    | "db:rotate-creds"
    | "group:configure"
    | "group:mint-token"
    | "group:rotate-creds"
    | "read-only"
    | "full-access"
  )[];
}
export const CreateAPITokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tokenName: Schema.String.pipe(T.PathParam()),
  organization: Schema.optional(Schema.String),
  group: Schema.optional(Schema.String),
  scopes: Schema.optional(
    Schema.Array(
      Schema.Literals([
        "read",
        "db:create",
        "db:delete",
        "db:configure",
        "db:mint-token",
        "db:rotate-creds",
        "group:configure",
        "group:mint-token",
        "group:rotate-creds",
        "read-only",
        "full-access",
      ]),
    ),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/v1/auth/api-tokens/{tokenName}" }),
) as unknown as Schema.Codec<CreateAPITokenInput>;

// Output Schema
export interface CreateAPITokenOutput {
  name?: string;
  id?: string;
  token?: string;
}
export const CreateAPITokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreateAPITokenOutput>;

// The operation
/**
 * Create API Token
 *
 * Returns a new API token belonging to a user.
 * The token can be minted at three levels of restriction, in increasing order of narrowness:
 * - **Organization-scoped** — pass `organization`. The token can only act on resources inside that organization.
 * - **Group-scoped** — pass `organization`, `group`, and `scopes`. The token is pinned to a single group inside the organization and only the operations listed in `scopes` are allowed. The caller must be an admin or owner of the organization.
 * - **Unrestricted** *(deprecated)* — no request body. The token can act on every organization the caller belongs to. **Unrestricted tokens are deprecated and will be removed in a future release.** Always pass `organization` for new tokens and rotate existing unrestricted tokens to scoped tokens.
 * Group-scoped tokens are designed for automations that should be able to provision and manage databases inside a single group without being able to touch the rest of the organization.
 *
 * @param tokenName - The name of the api token.
 */
export const createAPIToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateAPITokenInput,
  outputSchema: CreateAPITokenOutput,
}));
