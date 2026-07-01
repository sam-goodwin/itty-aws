import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface AgentAdminControllerGetRegistrationInput {
  id: string;
}
export const AgentAdminControllerGetRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/agents/registrations/{id}" }),
  ) as unknown as Schema.Codec<AgentAdminControllerGetRegistrationInput>;

// Output Schema
export interface AgentAdminControllerGetRegistrationOutput {
  id: string;
  agent_identity: {
    id: string;
    userland_user_id: string | null;
    created_at: string;
    updated_at: string;
  };
  organization_id: string;
  status: "unverified" | "verified" | "expired" | "revoked";
  kind: "anonymous" | "service_auth" | "identity_assertion";
  claim: {
    id: string;
    claim_completion: {
      id: string;
      created_at: string;
      updated_at: string;
      expires_at: string;
      claimed_at: string;
    } | null;
    created_at: string;
    updated_at: string;
    expires_at: string;
  } | null;
  created_at: string;
  updated_at: string;
}
export const AgentAdminControllerGetRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    agent_identity: Schema.Struct({
      id: Schema.String,
      userland_user_id: Schema.NullOr(Schema.String),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
    organization_id: Schema.String,
    status: Schema.Literals(["unverified", "verified", "expired", "revoked"]),
    kind: Schema.Literals(["anonymous", "service_auth", "identity_assertion"]),
    claim: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        claim_completion: Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            created_at: Schema.String,
            updated_at: Schema.String,
            expires_at: Schema.String,
            claimed_at: Schema.String,
          }),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
        expires_at: Schema.String,
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<AgentAdminControllerGetRegistrationOutput>;

// The operation
/**
 * Get an agent registration
 *
 * Retrieve the details of an agent registration by ID. The registration is scoped to the environment of the API key used to authenticate the request.
 *
 * @param id - The unique ID of the agent registration.
 */
export const AgentAdminControllerGetRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentAdminControllerGetRegistrationInput,
    outputSchema: AgentAdminControllerGetRegistrationOutput,
    errors: [NotFound] as const,
  }));
