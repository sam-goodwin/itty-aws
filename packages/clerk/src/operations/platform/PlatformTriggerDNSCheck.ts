import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../../errors.ts";

// Input Schema
export const PlatformTriggerDNSCheckInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    domainIDOrName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/applications/{applicationID}/domains/{domainIDOrName}/dns_check",
    }),
  );
export type PlatformTriggerDNSCheckInput =
  typeof PlatformTriggerDNSCheckInput.Type;

// Output Schema
export const PlatformTriggerDNSCheckOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dns: Schema.Struct({
      status: Schema.Literals(["not_started", "in_progress", "complete"]),
      cnames: Schema.Struct({
        accounts: Schema.optional(
          Schema.Struct({
            actual: Schema.optional(Schema.Array(Schema.String)),
            clerk_subdomain: Schema.String,
            from: Schema.String,
            to: Schema.String,
            verified: Schema.Boolean,
            required: Schema.Boolean,
            failure_hints: Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  code: Schema.String,
                  message: Schema.String,
                }),
              ),
            ),
          }),
        ),
        clerk: Schema.optional(
          Schema.Struct({
            actual: Schema.optional(Schema.Array(Schema.String)),
            clerk_subdomain: Schema.String,
            from: Schema.String,
            to: Schema.String,
            verified: Schema.Boolean,
            required: Schema.Boolean,
            failure_hints: Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  code: Schema.String,
                  message: Schema.String,
                }),
              ),
            ),
          }),
        ),
        "clk._domainkey": Schema.optional(
          Schema.Struct({
            actual: Schema.optional(Schema.Array(Schema.String)),
            clerk_subdomain: Schema.String,
            from: Schema.String,
            to: Schema.String,
            verified: Schema.Boolean,
            required: Schema.Boolean,
            failure_hints: Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  code: Schema.String,
                  message: Schema.String,
                }),
              ),
            ),
          }),
        ),
        "clk2._domainkey": Schema.optional(
          Schema.Struct({
            actual: Schema.optional(Schema.Array(Schema.String)),
            clerk_subdomain: Schema.String,
            from: Schema.String,
            to: Schema.String,
            verified: Schema.Boolean,
            required: Schema.Boolean,
            failure_hints: Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  code: Schema.String,
                  message: Schema.String,
                }),
              ),
            ),
          }),
        ),
        clkmail: Schema.optional(
          Schema.Struct({
            actual: Schema.optional(Schema.Array(Schema.String)),
            clerk_subdomain: Schema.String,
            from: Schema.String,
            to: Schema.String,
            verified: Schema.Boolean,
            required: Schema.Boolean,
            failure_hints: Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  code: Schema.String,
                  message: Schema.String,
                }),
              ),
            ),
          }),
        ),
      }),
    }),
    ssl: Schema.Struct({
      status: Schema.optional(
        Schema.Literals([
          "complete",
          "in_process",
          "not_started",
          "failed",
          "incomplete",
        ]),
      ),
      required: Schema.optional(Schema.Boolean),
      failure_hints: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              code: Schema.String,
              message: Schema.String,
            }),
          ),
        ),
      ),
    }),
    ssl_hosts: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          status: Schema.String,
          required: Schema.Boolean,
          failure_hints: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                code: Schema.String,
                message: Schema.String,
              }),
            ),
          ),
        }),
      ),
    ),
    mail: Schema.optional(
      Schema.Struct({
        status: Schema.String,
        required: Schema.Boolean,
      }),
    ),
    proxy: Schema.optional(
      Schema.Struct({
        status: Schema.String,
        required: Schema.Boolean,
      }),
    ),
    status: Schema.Literals(["complete", "incomplete"]),
    domain_id: Schema.String,
    last_run_at: Schema.NullOr(Schema.Number),
  });
export type PlatformTriggerDNSCheckOutput =
  typeof PlatformTriggerDNSCheckOutput.Type;

// The operation
/**
 * Trigger DNS check
 *
 * Triggers a DNS check for a domain and returns the current domain status.
 * This endpoint ensures that at most one DNS check job is in-flight at any time.
 * If a check is already running or was recently performed, a 409 Conflict is returned.
 * Use this endpoint to trigger a new DNS verification check after configuring DNS records.
 *
 * @param applicationID - Application ID.
 * @param domainIDOrName - Domain ID or domain name.
 */
export const PlatformTriggerDNSCheck = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformTriggerDNSCheckInput,
    outputSchema: PlatformTriggerDNSCheckOutput,
    errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
  }),
);
