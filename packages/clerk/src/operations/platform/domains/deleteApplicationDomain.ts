import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const DeleteApplicationDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    domainIDOrName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/domains/{domainIDOrName}",
    }),
  );
export type DeleteApplicationDomainInput =
  typeof DeleteApplicationDomainInput.Type;

// Output Schema
export const DeleteApplicationDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Boolean,
    object: Schema.String,
    id: Schema.String,
  });
export type DeleteApplicationDomainOutput =
  typeof DeleteApplicationDomainOutput.Type;

// The operation
/**
 * Delete application domain
 *
 * Delete a provider domain from an application's production instance.
 * Only provider domains can be deleted. The primary domain cannot be deleted.
 *
 * @param applicationID - Application ID.
 * @param domainIDOrName - Domain ID or domain name.
 */
export const deleteApplicationDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteApplicationDomainInput,
    outputSchema: DeleteApplicationDomainOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
