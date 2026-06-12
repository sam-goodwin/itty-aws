/**
 * Typed Railway error classes generated from `patches/{operationName}.json`.
 *
 * DO NOT HAND-EDIT — add or update a patch and run `bun run generate`.
 */
import * as Schema from "effect/Schema";
import * as Category from "../category.ts";
import * as T from "../traits.ts";

/** An environment with the requested name already exists in the project. */
export class EnvironmentNameConflict extends Schema.TaggedErrorClass<EnvironmentNameConflict>()(
  "EnvironmentNameConflict",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(
  Category.withCategory(Category.ConflictError, Category.AlreadyExistsError),
) {}
T.applyErrorMatchers(EnvironmentNameConflict, [
  { message: { includes: "environment with that name already exists" } },
]);

/** The token is not authorized to perform this operation (Railway also returns this for resources that do not exist or are not visible to the token). */
export class NotAuthorized extends Schema.TaggedErrorClass<NotAuthorized>()(
  "NotAuthorized",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withAuthError) {}
T.applyErrorMatchers(NotAuthorized, [{ message: "Not Authorized" }]);

/** Railway could not process the request — typically a malformed or non-existent identifier. */
export class ProblemProcessingRequest extends Schema.TaggedErrorClass<ProblemProcessingRequest>()(
  "ProblemProcessingRequest",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withBadRequestError) {}
T.applyErrorMatchers(ProblemProcessingRequest, [
  { message: "Problem processing request" },
]);

/** Workspace allows a limited rate of project creation (e.g. 1 project per 30 seconds). */
export class ProjectCreateRateLimited extends Schema.TaggedErrorClass<ProjectCreateRateLimited>()(
  "ProjectCreateRateLimited",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withQuotaError) {}
T.applyErrorMatchers(ProjectCreateRateLimited, [
  { message: { includes: "creating projects too quickly" } },
]);

/** The referenced project does not exist. */
export class ProjectNotFound extends Schema.TaggedErrorClass<ProjectNotFound>()(
  "ProjectNotFound",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withNotFoundError) {}
T.applyErrorMatchers(ProjectNotFound, [
  { message: { includes: "Project not found" } },
]);

/** A service with the requested name already exists in the project. */
export class ServiceNameConflict extends Schema.TaggedErrorClass<ServiceNameConflict>()(
  "ServiceNameConflict",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(
  Category.withCategory(Category.ConflictError, Category.AlreadyExistsError),
) {}
T.applyErrorMatchers(ServiceNameConflict, [
  { message: { includes: "already exists in this project" } },
]);

/** The service name is invalid (documented max length is 32 characters; the live API currently accepts up to 48). */
export class ServiceNameInvalid extends Schema.TaggedErrorClass<ServiceNameInvalid>()(
  "ServiceNameInvalid",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withBadRequestError) {}
T.applyErrorMatchers(ServiceNameInvalid, [
  { message: { includes: "Invalid service name" } },
]);

/** Railway allows only a single TCP proxy per service instance. */
export class TcpProxyLimitExceeded extends Schema.TaggedErrorClass<TcpProxyLimitExceeded>()(
  "TcpProxyLimitExceeded",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withConflictError) {}
T.applyErrorMatchers(TcpProxyLimitExceeded, [
  { message: { includes: "single TCP proxy is allowed per service instance" } },
]);

/** Another operation (e.g. the proxy's initial provisioning) is still in progress; retry once it settles. */
export class TcpProxyOperationInProgress extends Schema.TaggedErrorClass<TcpProxyOperationInProgress>()(
  "TcpProxyOperationInProgress",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withConflictError) {}
T.applyErrorMatchers(TcpProxyOperationInProgress, [
  {
    message: {
      includes: "Cannot delete TCP proxy: an operation is already in progress",
    },
  },
]);

/** The volume name is invalid (Railway enforces a max name length similar to services). */
export class VolumeNameInvalid extends Schema.TaggedErrorClass<VolumeNameInvalid>()(
  "VolumeNameInvalid",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(Category.withBadRequestError) {}
T.applyErrorMatchers(VolumeNameInvalid, [
  { message: { includes: "Invalid volume name" } },
]);
