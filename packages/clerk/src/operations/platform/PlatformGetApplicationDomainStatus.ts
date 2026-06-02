import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformGetApplicationDomainStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    domainIDOrName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/domains/{domainIDOrName}/status",
    }),
  );
export type PlatformGetApplicationDomainStatusInput =
  typeof PlatformGetApplicationDomainStatusInput.Type;

// Output Schema
export const PlatformGetApplicationDomainStatusOutput =
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
  });
export type PlatformGetApplicationDomainStatusOutput =
  typeof PlatformGetApplicationDomainStatusOutput.Type;

// The operation
/**
 * Get application domain status
 *
 * Get the status of a domain for an application.
 *
 * @param applicationID - Application ID.
 * @param domainIDOrName - Domain ID or domain name.
 */
export const PlatformGetApplicationDomainStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PlatformGetApplicationDomainStatusInput,
    outputSchema: PlatformGetApplicationDomainStatusOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
