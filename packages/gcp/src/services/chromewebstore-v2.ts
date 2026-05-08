// ==========================================================================
// Chrome Web Store API (chromewebstore v2)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "chromewebstore",
  version: "v2",
  rootUrl: "https://chromewebstore.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DeployInfo {
  /** Required. The current deploy percentage for the release channel (nonnegative number between 0 and 100). */
  deployPercentage?: number;
}

export const DeployInfo: Schema.Schema<DeployInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeployInfo" });

export interface PublishItemRequest {
  /** Optional. Use this to control if the item is published immediately on approval or staged for publishing in the future. Defaults to `DEFAULT_PUBLISH` if unset. */
  publishType?:
    | "PUBLISH_TYPE_UNSPECIFIED"
    | "DEFAULT_PUBLISH"
    | "STAGED_PUBLISH"
    | (string & {});
  /** Optional. Whether to attempt to skip item review. The API will validate if the item qualifies and return a validation error if the item requires review. Defaults to `false` if unset. */
  skipReview?: boolean;
  /** Optional. Additional deploy information including the desired initial percentage rollout. Defaults to the current value saved in the developer dashboard if unset. */
  deployInfos?: ReadonlyArray<DeployInfo>;
}

export const PublishItemRequest: Schema.Schema<PublishItemRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishType: Schema.optional(Schema.String),
    skipReview: Schema.optional(Schema.Boolean),
    deployInfos: Schema.optional(Schema.Array(DeployInfo)),
  }).annotate({ identifier: "PublishItemRequest" });

export interface CancelSubmissionResponse {}

export const CancelSubmissionResponse: Schema.Schema<CancelSubmissionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelSubmissionResponse",
  });

export interface PublishItemResponse {
  /** The name of the item that was submitted */
  name?: string;
  /** Output only. The current state of the submission. */
  state?:
    | "ITEM_STATE_UNSPECIFIED"
    | "PENDING_REVIEW"
    | "STAGED"
    | "PUBLISHED"
    | "PUBLISHED_TO_TESTERS"
    | "REJECTED"
    | "CANCELLED"
    | (string & {});
  /** Output only. The ID of the item. */
  itemId?: string;
}

export const PublishItemResponse: Schema.Schema<PublishItemResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PublishItemResponse" });

export interface DistributionChannel {
  /** The current deploy percentage for the release channel (nonnegative number between 0 and 100). */
  deployPercentage?: number;
  /** The extension version provided in the manifest of the uploaded package. */
  crxVersion?: string;
}

export const DistributionChannel: Schema.Schema<DistributionChannel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployPercentage: Schema.optional(Schema.Number),
    crxVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "DistributionChannel" });

export interface UploadItemPackageRequest {}

export const UploadItemPackageRequest: Schema.Schema<UploadItemPackageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadItemPackageRequest",
  });

export interface UploadItemPackageResponse {
  /** Output only. The ID of the item the package was uploaded to. */
  itemId?: string;
  /** The extension version provided in the manifest of the uploaded package. This will not be set if the upload is still in progress (`upload_state` is `UPLOAD_IN_PROGRESS`). */
  crxVersion?: string;
  /** Output only. The state of the upload. If `upload_state` is `UPLOAD_IN_PROGRESS`, you can poll for updates using the fetchStatus method. */
  uploadState?:
    | "UPLOAD_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "IN_PROGRESS"
    | "FAILED"
    | "NOT_FOUND"
    | (string & {});
  /** The name of the item the package was uploaded to. */
  name?: string;
}

export const UploadItemPackageResponse: Schema.Schema<UploadItemPackageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itemId: Schema.optional(Schema.String),
    crxVersion: Schema.optional(Schema.String),
    uploadState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadItemPackageResponse" });

export interface SetPublishedDeployPercentageResponse {}

export const SetPublishedDeployPercentageResponse: Schema.Schema<SetPublishedDeployPercentageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SetPublishedDeployPercentageResponse",
  });

export interface CancelSubmissionRequest {}

export const CancelSubmissionRequest: Schema.Schema<CancelSubmissionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelSubmissionRequest",
  });

export interface ItemRevisionStatus {
  /** Output only. Current state of the item */
  state?:
    | "ITEM_STATE_UNSPECIFIED"
    | "PENDING_REVIEW"
    | "STAGED"
    | "PUBLISHED"
    | "PUBLISHED_TO_TESTERS"
    | "REJECTED"
    | "CANCELLED"
    | (string & {});
  /** Details on the package of the item */
  distributionChannels?: ReadonlyArray<DistributionChannel>;
}

export const ItemRevisionStatus: Schema.Schema<ItemRevisionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    distributionChannels: Schema.optional(Schema.Array(DistributionChannel)),
  }).annotate({ identifier: "ItemRevisionStatus" });

export interface FetchItemStatusResponse {
  /** If true, the item has been taken down for a policy violation. Check the developer dashboard for details. */
  takenDown?: boolean;
  /** The public key of the item, which may be generated by the store. */
  publicKey?: string;
  /** The name of the requested item. */
  name?: string;
  /** If true, the item has been warned for a policy violation and will be taken down if not resolved. Check the developer dashboard for details. */
  warned?: boolean;
  /** Output only. Status of the current published revision of the item. Will be unset if the item is not published. */
  publishedItemRevisionStatus?: ItemRevisionStatus;
  /** Output only. The ID of the item. */
  itemId?: string;
  /** Status of the item revision submitted to be published. Will be unset if the item has not been submitted for publishing since the last successful publish. */
  submittedItemRevisionStatus?: ItemRevisionStatus;
  /** Output only. The state of the last async upload for an item. Only set when there has been an async upload for the item in the past 24 hours. */
  lastAsyncUploadState?:
    | "UPLOAD_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "IN_PROGRESS"
    | "FAILED"
    | "NOT_FOUND"
    | (string & {});
}

export const FetchItemStatusResponse: Schema.Schema<FetchItemStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    takenDown: Schema.optional(Schema.Boolean),
    publicKey: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    warned: Schema.optional(Schema.Boolean),
    publishedItemRevisionStatus: Schema.optional(ItemRevisionStatus),
    itemId: Schema.optional(Schema.String),
    submittedItemRevisionStatus: Schema.optional(ItemRevisionStatus),
    lastAsyncUploadState: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchItemStatusResponse" });

export interface SetPublishedDeployPercentageRequest {
  /** Required. Unscaled percentage value for the publised revision (nonnegative number between 0 and 100). It must be larger than the existing target percentage. */
  deployPercentage?: number;
}

export const SetPublishedDeployPercentageRequest: Schema.Schema<SetPublishedDeployPercentageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SetPublishedDeployPercentageRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface SetPublishedDeployPercentagePublishersItemsRequest {
  /** Required. Name of the item to update the published revision of in the form `publishers/{publisherId}/items/{itemId}` */
  name: string;
  /** Request body */
  body?: SetPublishedDeployPercentageRequest;
}

export const SetPublishedDeployPercentagePublishersItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetPublishedDeployPercentageRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+name}:setPublishedDeployPercentage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetPublishedDeployPercentagePublishersItemsRequest>;

export type SetPublishedDeployPercentagePublishersItemsResponse =
  SetPublishedDeployPercentageResponse;
export const SetPublishedDeployPercentagePublishersItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SetPublishedDeployPercentageResponse;

export type SetPublishedDeployPercentagePublishersItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Set a higher target deploy percentage for the item's published revision. This will be updated without the item being submitted for review. This is only available to items with over 10,000 seven-day active users. */
export const setPublishedDeployPercentagePublishersItems: API.OperationMethod<
  SetPublishedDeployPercentagePublishersItemsRequest,
  SetPublishedDeployPercentagePublishersItemsResponse,
  SetPublishedDeployPercentagePublishersItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetPublishedDeployPercentagePublishersItemsRequest,
  output: SetPublishedDeployPercentagePublishersItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PublishPublishersItemsRequest {
  /** Required. Name of the item in the form `publishers/{publisherId}/items/{itemId}` */
  name: string;
  /** Request body */
  body?: PublishItemRequest;
}

export const PublishPublishersItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PublishItemRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:publish", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PublishPublishersItemsRequest>;

export type PublishPublishersItemsResponse = PublishItemResponse;
export const PublishPublishersItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PublishItemResponse;

export type PublishPublishersItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Submit the item to be published in the store. The item will be submitted for review unless `skip_review` is set to true, or the item is staged from a previous submission with `publish_type` set to `STAGED_PUBLISH`. */
export const publishPublishersItems: API.OperationMethod<
  PublishPublishersItemsRequest,
  PublishPublishersItemsResponse,
  PublishPublishersItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishPublishersItemsRequest,
  output: PublishPublishersItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchStatusPublishersItemsRequest {
  /** Required. Name of the item to retrieve the status of in the form `publishers/{publisherId}/items/{itemId}` */
  name: string;
}

export const FetchStatusPublishersItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}:fetchStatus" }),
    svc,
  ) as unknown as Schema.Schema<FetchStatusPublishersItemsRequest>;

export type FetchStatusPublishersItemsResponse = FetchItemStatusResponse;
export const FetchStatusPublishersItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchItemStatusResponse;

export type FetchStatusPublishersItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch the status of an item. */
export const fetchStatusPublishersItems: API.OperationMethod<
  FetchStatusPublishersItemsRequest,
  FetchStatusPublishersItemsResponse,
  FetchStatusPublishersItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchStatusPublishersItemsRequest,
  output: FetchStatusPublishersItemsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelSubmissionPublishersItemsRequest {
  /** Required. Name of the item to cancel the submission of in the form `publishers/{publisherId}/items/{itemId}` */
  name: string;
  /** Request body */
  body?: CancelSubmissionRequest;
}

export const CancelSubmissionPublishersItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelSubmissionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+name}:cancelSubmission",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelSubmissionPublishersItemsRequest>;

export type CancelSubmissionPublishersItemsResponse = CancelSubmissionResponse;
export const CancelSubmissionPublishersItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelSubmissionResponse;

export type CancelSubmissionPublishersItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel the current active submission of an item if present. This can be used to cancel the review of a pending submission. */
export const cancelSubmissionPublishersItems: API.OperationMethod<
  CancelSubmissionPublishersItemsRequest,
  CancelSubmissionPublishersItemsResponse,
  CancelSubmissionPublishersItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelSubmissionPublishersItemsRequest,
  output: CancelSubmissionPublishersItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadMediaRequest {
  /** Required. Name of the item to upload the new package to in the form `publishers/{publisherId}/items/{itemId}` */
  name: string;
  /** Request body */
  body?: UploadItemPackageRequest;
}

export const UploadMediaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(UploadItemPackageRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v2/{+name}:upload", hasBody: true }),
  svc,
) as unknown as Schema.Schema<UploadMediaRequest>;

export type UploadMediaResponse = UploadItemPackageResponse;
export const UploadMediaResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadItemPackageResponse;

export type UploadMediaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upload a new package to an existing item. */
export const uploadMedia: API.OperationMethod<
  UploadMediaRequest,
  UploadMediaResponse,
  UploadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadMediaRequest,
  output: UploadMediaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
