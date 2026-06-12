import * as Schema from "effect/Schema";
import {
  bank_connections_resource_link_account_session_filtersSchema,
  financial_connections_accountSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";

// Input Schema
export const GetFinancialConnectionsSessionsSessionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/financial_connections/sessions/{session}",
      contentType: "form-urlencoded",
    }),
  );
export type GetFinancialConnectionsSessionsSessionInput =
  typeof GetFinancialConnectionsSessionsSessionInput.Type;

// Output Schema
export const GetFinancialConnectionsSessionsSessionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder: Schema.Unknown,
    accounts: Schema.Struct({
      data: Schema.Array(
        Schema.suspend(() => financial_connections_accountSchema),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    client_secret: SensitiveOutputNullableString,
    filters: Schema.optional(
      Schema.suspend(
        () => bank_connections_resource_link_account_session_filtersSchema,
      ),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["financial_connections.session"]),
    permissions: Schema.Array(
      Schema.Literals([
        "balances",
        "ownership",
        "payment_method",
        "transactions",
      ]),
    ),
    prefetch: Schema.NullOr(
      Schema.Array(Schema.Literals(["balances", "ownership", "transactions"])),
    ),
    return_url: Schema.optional(Schema.String),
  });
export type GetFinancialConnectionsSessionsSessionOutput =
  typeof GetFinancialConnectionsSessionsSessionOutput.Type;

// The operation
/**
 * Retrieve a Session
 *
 * <p>Retrieves the details of a Financial Connections <code>Session</code></p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetFinancialConnectionsSessionsSession =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetFinancialConnectionsSessionsSessionInput,
    outputSchema: GetFinancialConnectionsSessionsSessionOutput,
  }));
