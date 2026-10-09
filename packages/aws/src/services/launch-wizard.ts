import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Launch Wizard",
  serviceShapeName: "LaunchWizard",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "launchwizard" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://launchwizard-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://launchwizard-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://launchwizard.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://launchwizard.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceLimitException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitException>()(
    "ResourceLimitException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type WorkloadName = string;
export type DeploymentPatternName = string;
export type DeploymentName = string;
export type KeyString = string;
export type ValueString = string;
export type DeploymentSpecifications = { [key: string]: string | undefined };
const DeploymentSpecifications = /*@__PURE__*/ __L.at(__c0, 0);
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c0, 1);
export interface CreateDeploymentInput {
  workloadName: string;
  deploymentPatternName: string;
  name: string;
  specifications: { [key: string]: string | undefined };
  dryRun?: boolean;
  tags?: { [key: string]: string | undefined };
}
const CreateDeploymentInput = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreateDeploymentInput>;
export type DeploymentId = string;
export interface CreateDeploymentOutput {
  deploymentId?: string;
}
const CreateDeploymentOutput = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateDeploymentOutput>;
export interface DeleteDeploymentInput {
  deploymentId: string;
}
const DeleteDeploymentInput = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<DeleteDeploymentInput>;
export type DeploymentStatus =
  | "COMPLETED"
  | "CREATING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_INITIATING"
  | "DELETE_FAILED"
  | "DELETED"
  | "FAILED"
  | "IN_PROGRESS"
  | "VALIDATING"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETED"
  | "UPDATE_FAILED"
  | "UPDATE_ROLLBACK_COMPLETED"
  | "UPDATE_ROLLBACK_FAILED"
  | (string & {});
const DeploymentStatus = S.String;

export interface DeleteDeploymentOutput {
  status?: DeploymentStatus;
  statusReason?: string;
}
const DeleteDeploymentOutput = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<DeleteDeploymentOutput>;
export interface GetDeploymentInput {
  deploymentId: string;
}
const GetDeploymentInput = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<GetDeploymentInput>;
export interface DeploymentData {
  name?: string;
  id?: string;
  workloadName?: string;
  patternName?: string;
  status?: DeploymentStatus;
  createdAt?: Date;
  modifiedAt?: Date;
  specifications?: { [key: string]: string | undefined };
  resourceGroup?: string;
  deletedAt?: Date;
  tags?: { [key: string]: string | undefined };
  deploymentArn?: string;
}
const DeploymentData = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<DeploymentData>;
export interface GetDeploymentOutput {
  deployment?: DeploymentData;
}
const GetDeploymentOutput = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<GetDeploymentOutput>;
export type DeploymentPatternVersionName = string;
export interface GetDeploymentPatternVersionInput {
  workloadName: string;
  deploymentPatternName: string;
  deploymentPatternVersionName: string;
}
const GetDeploymentPatternVersionInput = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<GetDeploymentPatternVersionInput>;
export interface DeploymentPatternVersionDataSummary {
  deploymentPatternVersionName?: string;
  description?: string;
  documentationUrl?: string;
  workloadName?: string;
  deploymentPatternName?: string;
}
const DeploymentPatternVersionDataSummary = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<DeploymentPatternVersionDataSummary>;
export interface GetDeploymentPatternVersionOutput {
  deploymentPatternVersion?: DeploymentPatternVersionDataSummary;
}
const GetDeploymentPatternVersionOutput = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<GetDeploymentPatternVersionOutput>;
export interface GetWorkloadInput {
  workloadName: string;
}
const GetWorkloadInput = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<GetWorkloadInput>;
export type WorkloadStatus = "ACTIVE" | "INACTIVE" | "DISABLED" | "DELETED" | (string & {});
const WorkloadStatus = S.String;

export interface ManagementAccountConstraint {}
const ManagementAccountConstraint = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<ManagementAccountConstraint>;
export type ServicePrincipalType = string;
export interface DelegatedAdminConstraint {
  servicePrincipal: string;
}
const DelegatedAdminConstraint = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<DelegatedAdminConstraint>;
export type AccountConstraint =
  | { managementAccount: ManagementAccountConstraint; delegatedAdmin?: never }
  | { managementAccount?: never; delegatedAdmin: DelegatedAdminConstraint };
const AccountConstraint = /*@__PURE__*/ __L.at(__c1, 7);
export type AccountConstraintsList = AccountConstraint[];
const AccountConstraintsList = /*@__PURE__*/ __L.at(__c2, 0);
export interface WorkloadData {
  workloadName?: string;
  displayName?: string;
  status?: WorkloadStatus;
  accountConstraints?: AccountConstraint[];
  description?: string;
  documentationUrl?: string;
  iconUrl?: string;
  statusMessage?: string;
}
const WorkloadData = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<WorkloadData>;
export interface GetWorkloadOutput {
  workload?: WorkloadData;
}
const GetWorkloadOutput = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<GetWorkloadOutput>;
export interface GetWorkloadDeploymentPatternInput {
  workloadName: string;
  deploymentPatternName: string;
}
const GetWorkloadDeploymentPatternInput = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<GetWorkloadDeploymentPatternInput>;
export type WorkloadVersionName = string;
export type WorkloadDeploymentPatternStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "DISABLED"
  | "DELETED"
  | (string & {});
const WorkloadDeploymentPatternStatus = S.String;

export type AllowedValues = string[];
const AllowedValues = /*@__PURE__*/ __L.at(__c2, 4);
export interface DeploymentConditionalField {
  name?: string;
  value?: string;
  comparator?: string;
}
const DeploymentConditionalField = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<DeploymentConditionalField>;
export type SpecificationsConditionalData = DeploymentConditionalField[];
const SpecificationsConditionalData = /*@__PURE__*/ __L.at(__c2, 6);
export interface DeploymentSpecificationsField {
  name?: string;
  description?: string;
  allowedValues?: string[];
  required?: string;
  conditionals?: DeploymentConditionalField[];
}
const DeploymentSpecificationsField = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<DeploymentSpecificationsField>;
export type DeploymentSpecificationsData = DeploymentSpecificationsField[];
const DeploymentSpecificationsData = /*@__PURE__*/ __L.at(__c3, 0);
export interface WorkloadDeploymentPatternData {
  workloadName?: string;
  deploymentPatternName?: string;
  workloadVersionName?: string;
  deploymentPatternVersionName?: string;
  displayName?: string;
  description?: string;
  status?: WorkloadDeploymentPatternStatus;
  statusMessage?: string;
  accountConstraints?: AccountConstraint[];
  specifications?: DeploymentSpecificationsField[];
}
const WorkloadDeploymentPatternData = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<WorkloadDeploymentPatternData>;
export interface GetWorkloadDeploymentPatternOutput {
  workloadDeploymentPattern?: WorkloadDeploymentPatternData;
}
const GetWorkloadDeploymentPatternOutput = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<GetWorkloadDeploymentPatternOutput>;
export type MaxDeploymentEventResults = number;
export type NextToken = string;
export interface ListDeploymentEventsInput {
  deploymentId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListDeploymentEventsInput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<ListDeploymentEventsInput>;
export type EventStatus =
  | "CANCELED"
  | "CANCELING"
  | "COMPLETED"
  | "CREATED"
  | "FAILED"
  | "IN_PROGRESS"
  | "PENDING"
  | "TIMED_OUT"
  | (string & {});
const EventStatus = S.String;

export type DeploymentEventMetadataKey = string;
export type DeploymentEventMetadataValue = string;
export type DeploymentEventMetadata = { [key: string]: string | undefined };
const DeploymentEventMetadata =
  DeploymentSpecifications as any as S.Schema<DeploymentEventMetadata>;
export interface DeploymentEventDataSummary {
  name?: string;
  description?: string;
  status?: EventStatus;
  statusReason?: string;
  timestamp?: Date;
  metadata?: { [key: string]: string | undefined };
}
const DeploymentEventDataSummary = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<DeploymentEventDataSummary>;
export type DeploymentEventDataSummaryList = DeploymentEventDataSummary[];
const DeploymentEventDataSummaryList = /*@__PURE__*/ __L.at(__c3, 5);
export interface ListDeploymentEventsOutput {
  deploymentEvents?: DeploymentEventDataSummary[];
  nextToken?: string;
}
const ListDeploymentEventsOutput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<ListDeploymentEventsOutput>;
export type MaxWorkloadResults = number;
export type DeploymentPatternVersionFilterKey = "updateFromVersion" | (string & {});
const DeploymentPatternVersionFilterKey = S.String;

export type DeploymentPatternVersionFilterValue = string;
export type DeploymentPatternVersionFilterValues = string[];
const DeploymentPatternVersionFilterValues =
  AllowedValues as any as S.Schema<DeploymentPatternVersionFilterValues>;
export interface DeploymentPatternVersionFilter {
  name: DeploymentPatternVersionFilterKey;
  values: string[];
}
const DeploymentPatternVersionFilter = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<DeploymentPatternVersionFilter>;
export type FilterList = DeploymentPatternVersionFilter[];
const FilterList = /*@__PURE__*/ __L.at(__c4, 0);
export interface ListDeploymentPatternVersionsInput {
  workloadName: string;
  deploymentPatternName: string;
  maxResults?: number;
  nextToken?: string;
  filters?: DeploymentPatternVersionFilter[];
}
const ListDeploymentPatternVersionsInput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<ListDeploymentPatternVersionsInput>;
export type DeploymentPatternVersionDataSummaryList = DeploymentPatternVersionDataSummary[];
const DeploymentPatternVersionDataSummaryList = /*@__PURE__*/ __L.at(__c4, 2);
export interface ListDeploymentPatternVersionsOutput {
  deploymentPatternVersions?: DeploymentPatternVersionDataSummary[];
  nextToken?: string;
}
const ListDeploymentPatternVersionsOutput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<ListDeploymentPatternVersionsOutput>;
export type DeploymentFilterKey = "WORKLOAD_NAME" | "DEPLOYMENT_STATUS" | (string & {});
const DeploymentFilterKey = S.String;

export type DeploymentFilterValue = string;
export type DeploymentFilterValues = string[];
const DeploymentFilterValues = AllowedValues as any as S.Schema<DeploymentFilterValues>;
export interface DeploymentFilter {
  name?: DeploymentFilterKey;
  values?: string[];
}
const DeploymentFilter = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<DeploymentFilter>;
export type DeploymentFilterList = DeploymentFilter[];
const DeploymentFilterList = /*@__PURE__*/ __L.at(__c4, 5);
export type MaxDeploymentResults = number;
export interface ListDeploymentsInput {
  filters?: DeploymentFilter[];
  maxResults?: number;
  nextToken?: string;
}
const ListDeploymentsInput = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<ListDeploymentsInput>;
export interface DeploymentDataSummary {
  name?: string;
  id?: string;
  workloadName?: string;
  patternName?: string;
  status?: DeploymentStatus;
  createdAt?: Date;
  modifiedAt?: Date;
}
const DeploymentDataSummary = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeploymentDataSummary>;
export type DeploymentDataSummaryList = DeploymentDataSummary[];
const DeploymentDataSummaryList = /*@__PURE__*/ __L.at(__c5, 0);
export interface ListDeploymentsOutput {
  deployments?: DeploymentDataSummary[];
  nextToken?: string;
}
const ListDeploymentsOutput = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ListDeploymentsOutput>;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListTagsForResourceOutput>;
export type MaxWorkloadDeploymentPatternResults = number;
export interface ListWorkloadDeploymentPatternsInput {
  workloadName: string;
  maxResults?: number;
  nextToken?: string;
}
const ListWorkloadDeploymentPatternsInput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListWorkloadDeploymentPatternsInput>;
export interface WorkloadDeploymentPatternDataSummary {
  workloadName?: string;
  deploymentPatternName?: string;
  workloadVersionName?: string;
  deploymentPatternVersionName?: string;
  displayName?: string;
  description?: string;
  status?: WorkloadDeploymentPatternStatus;
  statusMessage?: string;
  accountConstraints?: AccountConstraint[];
}
const WorkloadDeploymentPatternDataSummary = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<WorkloadDeploymentPatternDataSummary>;
export type WorkloadDeploymentPatternDataSummaryList = WorkloadDeploymentPatternDataSummary[];
const WorkloadDeploymentPatternDataSummaryList = /*@__PURE__*/ __L.at(__c5, 6);
export interface ListWorkloadDeploymentPatternsOutput {
  workloadDeploymentPatterns?: WorkloadDeploymentPatternDataSummary[];
  nextToken?: string;
}
const ListWorkloadDeploymentPatternsOutput = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<ListWorkloadDeploymentPatternsOutput>;
export interface ListWorkloadsInput {
  maxResults?: number;
  nextToken?: string;
}
const ListWorkloadsInput = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<ListWorkloadsInput>;
export interface WorkloadDataSummary {
  workloadName?: string;
  displayName?: string;
  status?: WorkloadStatus;
  accountConstraints?: AccountConstraint[];
}
const WorkloadDataSummary = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<WorkloadDataSummary>;
export type WorkloadDataSummaryList = WorkloadDataSummary[];
const WorkloadDataSummaryList = /*@__PURE__*/ __L.at(__c6, 2);
export interface ListWorkloadsOutput {
  workloads?: WorkloadDataSummary[];
  nextToken?: string;
}
const ListWorkloadsOutput = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ListWorkloadsOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = ManagementAccountConstraint as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = AllowedValues as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = ManagementAccountConstraint as any as S.Schema<UntagResourceOutput>;
export interface UpdateDeploymentInput {
  deploymentId: string;
  specifications: { [key: string]: string | undefined };
  workloadVersionName?: string;
  deploymentPatternVersionName?: string;
  dryRun?: boolean;
  force?: boolean;
}
const UpdateDeploymentInput = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<UpdateDeploymentInput>;
export interface UpdateDeploymentOutput {
  deployment?: DeploymentDataSummary;
}
const UpdateDeploymentOutput = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<UpdateDeploymentOutput>;
export type CreateDeploymentError =
  | InternalServerException
  | ResourceLimitException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a deployment for the given workload. Deployments created by this operation are not available in the Launch Wizard console to use the `Clone deployment` action on.
 */
export const createDeployment: API.OperationMethod<
  CreateDeploymentInput,
  CreateDeploymentOutput,
  CreateDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDeploymentInput,
  output: CreateDeploymentOutput,
  errors: [
    InternalServerException,
    ResourceLimitException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeployment",
}));

export type DeleteDeploymentError =
  | InternalServerException
  | ResourceLimitException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a deployment.
 */
export const deleteDeployment: API.OperationMethod<
  DeleteDeploymentInput,
  DeleteDeploymentOutput,
  DeleteDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeploymentInput,
  output: DeleteDeploymentOutput,
  errors: [
    InternalServerException,
    ResourceLimitException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDeployment",
}));

export type GetDeploymentError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the deployment.
 */
export const getDeployment: API.OperationMethod<
  GetDeploymentInput,
  GetDeploymentOutput,
  GetDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeploymentInput,
  output: GetDeploymentOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeployment",
}));

export type GetDeploymentPatternVersionError =
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about a deployment pattern version.
 */
export const getDeploymentPatternVersion: API.OperationMethod<
  GetDeploymentPatternVersionInput,
  GetDeploymentPatternVersionOutput,
  GetDeploymentPatternVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeploymentPatternVersionInput,
  output: GetDeploymentPatternVersionOutput,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeploymentPatternVersion",
}));

export type GetWorkloadError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a workload.
 */
export const getWorkload: API.OperationMethod<
  GetWorkloadInput,
  GetWorkloadOutput,
  GetWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkloadInput,
  output: GetWorkloadOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkload",
}));

export type GetWorkloadDeploymentPatternError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns details for a given workload and deployment pattern, including the available specifications. You can use the ListWorkloads operation to discover the available workload names and the ListWorkloadDeploymentPatterns operation to discover the available deployment pattern names of a given workload.
 */
export const getWorkloadDeploymentPattern: API.OperationMethod<
  GetWorkloadDeploymentPatternInput,
  GetWorkloadDeploymentPatternOutput,
  GetWorkloadDeploymentPatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkloadDeploymentPatternInput,
  output: GetWorkloadDeploymentPatternOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkloadDeploymentPattern",
}));

export type ListDeploymentEventsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the events of a deployment.
 */
export const listDeploymentEvents: API.PaginatedOperationMethod<
  ListDeploymentEventsInput,
  ListDeploymentEventsOutput,
  ListDeploymentEventsError,
  Credentials | HttpClient.HttpClient,
  DeploymentEventDataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDeploymentEventsInput,
  output: ListDeploymentEventsOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeploymentEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "deploymentEvents",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDeploymentPatternVersionsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the deployment pattern versions.
 */
export const listDeploymentPatternVersions: API.PaginatedOperationMethod<
  ListDeploymentPatternVersionsInput,
  ListDeploymentPatternVersionsOutput,
  ListDeploymentPatternVersionsError,
  Credentials | HttpClient.HttpClient,
  DeploymentPatternVersionDataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDeploymentPatternVersionsInput,
  output: ListDeploymentPatternVersionsOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeploymentPatternVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "deploymentPatternVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDeploymentsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Lists the deployments that have been created.
 */
export const listDeployments: API.PaginatedOperationMethod<
  ListDeploymentsInput,
  ListDeploymentsOutput,
  ListDeploymentsError,
  Credentials | HttpClient.HttpClient,
  DeploymentDataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDeploymentsInput,
  output: ListDeploymentsOutput,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeployments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "deployments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags associated with a specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWorkloadDeploymentPatternsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the workload deployment patterns for a given workload name. You can use the ListWorkloads operation to discover the available workload names.
 */
export const listWorkloadDeploymentPatterns: API.PaginatedOperationMethod<
  ListWorkloadDeploymentPatternsInput,
  ListWorkloadDeploymentPatternsOutput,
  ListWorkloadDeploymentPatternsError,
  Credentials | HttpClient.HttpClient,
  WorkloadDeploymentPatternDataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkloadDeploymentPatternsInput,
  output: ListWorkloadDeploymentPatternsOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloadDeploymentPatterns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workloadDeploymentPatterns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkloadsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Lists the available workload names. You can use the ListWorkloadDeploymentPatterns operation to discover the available deployment patterns for a given workload.
 */
export const listWorkloads: API.PaginatedOperationMethod<
  ListWorkloadsInput,
  ListWorkloadsOutput,
  ListWorkloadsError,
  Credentials | HttpClient.HttpClient,
  WorkloadDataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkloadsInput,
  output: ListWorkloadsOutput,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloads",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workloads",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds the specified tags to the given resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified tags from the given resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDeploymentError =
  | InternalServerException
  | ResourceLimitException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a deployment.
 */
export const updateDeployment: API.OperationMethod<
  UpdateDeploymentInput,
  UpdateDeploymentOutput,
  UpdateDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDeploymentInput,
  output: UpdateDeploymentOutput,
  errors: [
    InternalServerException,
    ResourceLimitException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeployment",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.String,
          deploymentPatternName: S.String,
          name: S.String,
          specifications: DeploymentSpecifications,
          dryRun: S.optional(S.Boolean),
          tags: S.optional(Tags),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/createDeployment" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDeploymentInput" });
    case 3:
      return S.suspend(() => S.Struct({ deploymentId: S.optional(S.String) })).annotate({
        identifier: "CreateDeploymentOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ deploymentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/deleteDeployment" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDeploymentInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ status: S.optional(DeploymentStatus), statusReason: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteDeploymentOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ deploymentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/getDeployment" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDeploymentInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          workloadName: S.optional(S.String),
          patternName: S.optional(S.String),
          status: S.optional(DeploymentStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          specifications: S.optional(DeploymentSpecifications),
          resourceGroup: S.optional(S.String),
          deletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(Tags),
          deploymentArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeploymentData" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ deployment: S.optional(DeploymentData) })).annotate({
        identifier: "GetDeploymentOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.String,
          deploymentPatternName: S.String,
          deploymentPatternVersionName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/getDeploymentPatternVersion" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDeploymentPatternVersionInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          deploymentPatternVersionName: S.optional(S.String),
          description: S.optional(S.String),
          documentationUrl: S.optional(S.String),
          workloadName: S.optional(S.String),
          deploymentPatternName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeploymentPatternVersionDataSummary",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ deploymentPatternVersion: S.optional(DeploymentPatternVersionDataSummary) }),
      ).annotate({
        identifier: "GetDeploymentPatternVersionOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ workloadName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/getWorkload" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetWorkloadInput" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "ManagementAccountConstraint",
      });
    case 6:
      return S.suspend(() => S.Struct({ servicePrincipal: S.String })).annotate({
        identifier: "DelegatedAdminConstraint",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ managementAccount: ManagementAccountConstraint }),
        /*@__PURE__*/ S.Struct({ delegatedAdmin: DelegatedAdminConstraint }),
      ]);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AccountConstraint);
    case 1:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.optional(S.String),
          displayName: S.optional(S.String),
          status: S.optional(WorkloadStatus),
          accountConstraints: S.optional(AccountConstraintsList),
          description: S.optional(S.String),
          documentationUrl: S.optional(S.String),
          iconUrl: S.optional(S.String),
          statusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadData" });
    case 2:
      return S.suspend(() => S.Struct({ workload: S.optional(WorkloadData) })).annotate({
        identifier: "GetWorkloadOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ workloadName: S.String, deploymentPatternName: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/getWorkloadDeploymentPattern" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkloadDeploymentPatternInput",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          value: S.optional(S.String),
          comparator: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeploymentConditionalField",
      });
    case 6:
      return S.Array(DeploymentConditionalField);
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          allowedValues: S.optional(AllowedValues),
          required: S.optional(S.String),
          conditionals: S.optional(SpecificationsConditionalData),
        }),
      ).annotate({
        identifier: "DeploymentSpecificationsField",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DeploymentSpecificationsField);
    case 1:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.optional(S.String),
          deploymentPatternName: S.optional(S.String),
          workloadVersionName: S.optional(S.String),
          deploymentPatternVersionName: S.optional(S.String),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(WorkloadDeploymentPatternStatus),
          statusMessage: S.optional(S.String),
          accountConstraints: S.optional(AccountConstraintsList),
          specifications: S.optional(DeploymentSpecificationsData),
        }),
      ).annotate({
        identifier: "WorkloadDeploymentPatternData",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ workloadDeploymentPattern: S.optional(WorkloadDeploymentPatternData) }),
      ).annotate({
        identifier: "GetWorkloadDeploymentPatternOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listDeploymentEvents" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDeploymentEventsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(EventStatus),
          statusReason: S.optional(S.String),
          timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          metadata: S.optional(DeploymentEventMetadata),
        }),
      ).annotate({
        identifier: "DeploymentEventDataSummary",
      });
    case 5:
      return S.Array(DeploymentEventDataSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          deploymentEvents: S.optional(DeploymentEventDataSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDeploymentEventsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: DeploymentPatternVersionFilterKey,
          values: DeploymentPatternVersionFilterValues,
        }),
      ).annotate({
        identifier: "DeploymentPatternVersionFilter",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DeploymentPatternVersionFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.String,
          deploymentPatternName: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(FilterList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listDeploymentPatternVersions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDeploymentPatternVersionsInput",
      });
    case 2:
      return S.Array(DeploymentPatternVersionDataSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          deploymentPatternVersions: S.optional(DeploymentPatternVersionDataSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDeploymentPatternVersionsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(DeploymentFilterKey),
          values: S.optional(DeploymentFilterValues),
        }),
      ).annotate({ identifier: "DeploymentFilter" });
    case 5:
      return S.Array(DeploymentFilter);
    case 6:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(DeploymentFilterList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listDeployments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDeploymentsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          workloadName: S.optional(S.String),
          patternName: S.optional(S.String),
          status: S.optional(DeploymentStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DeploymentDataSummary" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DeploymentDataSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          deployments: S.optional(DeploymentDataSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListDeploymentsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listWorkloadDeploymentPatterns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkloadDeploymentPatternsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.optional(S.String),
          deploymentPatternName: S.optional(S.String),
          workloadVersionName: S.optional(S.String),
          deploymentPatternVersionName: S.optional(S.String),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(WorkloadDeploymentPatternStatus),
          statusMessage: S.optional(S.String),
          accountConstraints: S.optional(AccountConstraintsList),
        }),
      ).annotate({
        identifier: "WorkloadDeploymentPatternDataSummary",
      });
    case 6:
      return S.Array(WorkloadDeploymentPatternDataSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          workloadDeploymentPatterns: S.optional(WorkloadDeploymentPatternDataSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkloadDeploymentPatternsOutput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listWorkloads" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListWorkloadsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workloadName: S.optional(S.String),
          displayName: S.optional(S.String),
          status: S.optional(WorkloadStatus),
          accountConstraints: S.optional(AccountConstraintsList),
        }),
      ).annotate({ identifier: "WorkloadDataSummary" });
    case 2:
      return S.Array(WorkloadDataSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          workloads: S.optional(WorkloadDataSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListWorkloadsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: Tags }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.String,
          specifications: DeploymentSpecifications,
          workloadVersionName: S.optional(S.String),
          deploymentPatternVersionName: S.optional(S.String),
          dryRun: S.optional(S.Boolean),
          force: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/updateDeployment" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateDeploymentInput" });
    case 7:
      return S.suspend(() => S.Struct({ deployment: S.optional(DeploymentDataSummary) })).annotate({
        identifier: "UpdateDeploymentOutput",
      });
  }
}
