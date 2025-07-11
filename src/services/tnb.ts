import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class tnb extends AWSServiceClient {
  cancelSolNetworkOperation(
    input: CancelSolNetworkOperationInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSolFunctionPackage(
    input: CreateSolFunctionPackageInput,
  ): Effect.Effect<
    CreateSolFunctionPackageOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSolNetworkInstance(
    input: CreateSolNetworkInstanceInput,
  ): Effect.Effect<
    CreateSolNetworkInstanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSolNetworkPackage(
    input: CreateSolNetworkPackageInput,
  ): Effect.Effect<
    CreateSolNetworkPackageOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSolFunctionPackage(
    input: DeleteSolFunctionPackageInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSolNetworkInstance(
    input: DeleteSolNetworkInstanceInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSolNetworkPackage(
    input: DeleteSolNetworkPackageInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolFunctionInstance(
    input: GetSolFunctionInstanceInput,
  ): Effect.Effect<
    GetSolFunctionInstanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolFunctionPackage(
    input: GetSolFunctionPackageInput,
  ): Effect.Effect<
    GetSolFunctionPackageOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolFunctionPackageContent(
    input: GetSolFunctionPackageContentInput,
  ): Effect.Effect<
    GetSolFunctionPackageContentOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolFunctionPackageDescriptor(
    input: GetSolFunctionPackageDescriptorInput,
  ): Effect.Effect<
    GetSolFunctionPackageDescriptorOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolNetworkInstance(
    input: GetSolNetworkInstanceInput,
  ): Effect.Effect<
    GetSolNetworkInstanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolNetworkOperation(
    input: GetSolNetworkOperationInput,
  ): Effect.Effect<
    GetSolNetworkOperationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolNetworkPackage(
    input: GetSolNetworkPackageInput,
  ): Effect.Effect<
    GetSolNetworkPackageOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolNetworkPackageContent(
    input: GetSolNetworkPackageContentInput,
  ): Effect.Effect<
    GetSolNetworkPackageContentOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSolNetworkPackageDescriptor(
    input: GetSolNetworkPackageDescriptorInput,
  ): Effect.Effect<
    GetSolNetworkPackageDescriptorOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  instantiateSolNetworkInstance(
    input: InstantiateSolNetworkInstanceInput,
  ): Effect.Effect<
    InstantiateSolNetworkInstanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSolFunctionInstances(
    input: ListSolFunctionInstancesInput,
  ): Effect.Effect<
    ListSolFunctionInstancesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSolFunctionPackages(
    input: ListSolFunctionPackagesInput,
  ): Effect.Effect<
    ListSolFunctionPackagesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSolNetworkInstances(
    input: ListSolNetworkInstancesInput,
  ): Effect.Effect<
    ListSolNetworkInstancesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSolNetworkOperations(
    input: ListSolNetworkOperationsInput,
  ): Effect.Effect<
    ListSolNetworkOperationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSolNetworkPackages(
    input: ListSolNetworkPackagesInput,
  ): Effect.Effect<
    ListSolNetworkPackagesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putSolFunctionPackageContent(
    input: PutSolFunctionPackageContentInput,
  ): Effect.Effect<
    PutSolFunctionPackageContentOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putSolNetworkPackageContent(
    input: PutSolNetworkPackageContentInput,
  ): Effect.Effect<
    PutSolNetworkPackageContentOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  terminateSolNetworkInstance(
    input: TerminateSolNetworkInstanceInput,
  ): Effect.Effect<
    TerminateSolNetworkInstanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSolFunctionPackage(
    input: UpdateSolFunctionPackageInput,
  ): Effect.Effect<
    UpdateSolFunctionPackageOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSolNetworkInstance(
    input: UpdateSolNetworkInstanceInput,
  ): Effect.Effect<
    UpdateSolNetworkInstanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSolNetworkPackage(
    input: UpdateSolNetworkPackageInput,
  ): Effect.Effect<
    UpdateSolNetworkPackageOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  validateSolFunctionPackageContent(
    input: ValidateSolFunctionPackageContentInput,
  ): Effect.Effect<
    ValidateSolFunctionPackageContentOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  validateSolNetworkPackageContent(
    input: ValidateSolNetworkPackageContentInput,
  ): Effect.Effect<
    ValidateSolNetworkPackageContentOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Tnb extends tnb {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface CancelSolNetworkOperationInput {
  nsLcmOpOccId: string;
}
export interface CreateSolFunctionPackageInput {
  tags?: Record<string, string>;
}
export interface CreateSolFunctionPackageOutput {
  id: string;
  arn: string;
  onboardingState: OnboardingState;
  operationalState: OperationalState;
  usageState: UsageState;
  tags?: Record<string, string>;
}
export interface CreateSolNetworkInstanceInput {
  nsdInfoId: string;
  nsName: string;
  nsDescription?: string;
  tags?: Record<string, string>;
}
export interface CreateSolNetworkInstanceOutput {
  id: string;
  arn: string;
  nsdInfoId: string;
  nsInstanceName: string;
  tags?: Record<string, string>;
}
export interface CreateSolNetworkPackageInput {
  tags?: Record<string, string>;
}
export interface CreateSolNetworkPackageOutput {
  id: string;
  arn: string;
  nsdOnboardingState: NsdOnboardingState;
  nsdOperationalState: NsdOperationalState;
  nsdUsageState: NsdUsageState;
  tags?: Record<string, string>;
}
export interface DeleteSolFunctionPackageInput {
  vnfPkgId: string;
}
export interface DeleteSolNetworkInstanceInput {
  nsInstanceId: string;
}
export interface DeleteSolNetworkPackageInput {
  nsdInfoId: string;
}
export type DescriptorContentType = "TEXT_PLAIN";
export type ErrorCause = string;

export type ErrorDetails = string;

export interface ErrorInfo {
  cause?: string;
  details?: string;
}
export interface FunctionArtifactMeta {
  overrides?: Array<ToscaOverride>;
}
export interface GetSolFunctionInstanceInput {
  vnfInstanceId: string;
}
export interface GetSolFunctionInstanceMetadata {
  createdAt: Date | string;
  lastModified: Date | string;
}
export interface GetSolFunctionInstanceOutput {
  id: string;
  arn: string;
  nsInstanceId: string;
  vnfPkgId: string;
  vnfdId: string;
  vnfProvider?: string;
  vnfProductName?: string;
  vnfdVersion?: string;
  instantiationState: VnfInstantiationState;
  instantiatedVnfInfo?: GetSolVnfInfo;
  metadata: GetSolFunctionInstanceMetadata;
  tags?: Record<string, string>;
}
export interface GetSolFunctionPackageContentInput {
  vnfPkgId: string;
  accept: PackageContentType;
}
export interface GetSolFunctionPackageContentOutput {
  contentType?: PackageContentType;
  packageContent?: Uint8Array | string;
}
export interface GetSolFunctionPackageDescriptorInput {
  vnfPkgId: string;
  accept: DescriptorContentType;
}
export interface GetSolFunctionPackageDescriptorOutput {
  contentType?: DescriptorContentType;
  vnfd?: Uint8Array | string;
}
export interface GetSolFunctionPackageInput {
  vnfPkgId: string;
}
export interface GetSolFunctionPackageMetadata {
  vnfd?: FunctionArtifactMeta;
  createdAt: Date | string;
  lastModified: Date | string;
}
export interface GetSolFunctionPackageOutput {
  id: string;
  arn: string;
  onboardingState: OnboardingState;
  operationalState: OperationalState;
  usageState: UsageState;
  vnfdId?: string;
  vnfProvider?: string;
  vnfProductName?: string;
  vnfdVersion?: string;
  metadata?: GetSolFunctionPackageMetadata;
  tags?: Record<string, string>;
}
export interface GetSolInstantiatedVnfInfo {
  vnfState?: VnfOperationalState;
}
export interface GetSolNetworkInstanceInput {
  nsInstanceId: string;
}
export interface GetSolNetworkInstanceMetadata {
  createdAt: Date | string;
  lastModified: Date | string;
}
export interface GetSolNetworkInstanceOutput {
  id: string;
  arn: string;
  nsInstanceName: string;
  nsInstanceDescription: string;
  nsdId: string;
  nsdInfoId: string;
  nsState?: NsState;
  lcmOpInfo?: LcmOperationInfo;
  metadata: GetSolNetworkInstanceMetadata;
  tags?: Record<string, string>;
}
export interface GetSolNetworkOperationInput {
  nsLcmOpOccId: string;
}
export interface GetSolNetworkOperationMetadata {
  updateNsMetadata?: UpdateNsMetadata;
  modifyVnfInfoMetadata?: ModifyVnfInfoMetadata;
  instantiateMetadata?: InstantiateMetadata;
  createdAt: Date | string;
  lastModified: Date | string;
}
export interface GetSolNetworkOperationOutput {
  id?: string;
  arn: string;
  operationState?: NsLcmOperationState;
  nsInstanceId?: string;
  lcmOperationType?: LcmOperationType;
  updateType?: UpdateSolNetworkType;
  error?: ProblemDetails;
  metadata?: GetSolNetworkOperationMetadata;
  tasks?: Array<GetSolNetworkOperationTaskDetails>;
  tags?: Record<string, string>;
}
export interface GetSolNetworkOperationTaskDetails {
  taskName?: string;
  taskContext?: Record<string, string>;
  taskErrorDetails?: ErrorInfo;
  taskStatus?: TaskStatus;
  taskStartTime?: Date | string;
  taskEndTime?: Date | string;
}
export type GetSolNetworkOperationTasksList =
  Array<GetSolNetworkOperationTaskDetails>;
export interface GetSolNetworkPackageContentInput {
  nsdInfoId: string;
  accept: PackageContentType;
}
export interface GetSolNetworkPackageContentOutput {
  contentType?: PackageContentType;
  nsdContent?: Uint8Array | string;
}
export interface GetSolNetworkPackageDescriptorInput {
  nsdInfoId: string;
}
export interface GetSolNetworkPackageDescriptorOutput {
  contentType?: DescriptorContentType;
  nsd?: Uint8Array | string;
}
export interface GetSolNetworkPackageInput {
  nsdInfoId: string;
}
export interface GetSolNetworkPackageMetadata {
  nsd?: NetworkArtifactMeta;
  createdAt: Date | string;
  lastModified: Date | string;
}
export interface GetSolNetworkPackageOutput {
  id: string;
  arn: string;
  nsdOnboardingState: NsdOnboardingState;
  nsdOperationalState: NsdOperationalState;
  nsdUsageState: NsdUsageState;
  nsdId: string;
  nsdName: string;
  nsdVersion: string;
  vnfPkgIds: Array<string>;
  metadata: GetSolNetworkPackageMetadata;
  tags?: Record<string, string>;
}
export interface GetSolVnfcResourceInfo {
  metadata?: GetSolVnfcResourceInfoMetadata;
}
export type GetSolVnfcResourceInfoList = Array<GetSolVnfcResourceInfo>;
export interface GetSolVnfcResourceInfoMetadata {
  nodeGroup?: string;
  cluster?: string;
  helmChart?: string;
}
export interface GetSolVnfInfo {
  vnfState?: VnfOperationalState;
  vnfcResourceInfo?: Array<GetSolVnfcResourceInfo>;
}
export interface InstantiateMetadata {
  nsdInfoId: string;
  additionalParamsForNs?: unknown;
}
export interface InstantiateSolNetworkInstanceInput {
  nsInstanceId: string;
  dryRun?: boolean;
  additionalParamsForNs?: unknown;
  tags?: Record<string, string>;
}
export interface InstantiateSolNetworkInstanceOutput {
  nsLcmOpOccId: string;
  tags?: Record<string, string>;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface LcmOperationInfo {
  nsLcmOpOccId: string;
}
export type LcmOperationType = "INSTANTIATE" | "UPDATE" | "TERMINATE";
export interface ListSolFunctionInstanceInfo {
  id: string;
  arn: string;
  nsInstanceId: string;
  vnfPkgId: string;
  vnfPkgName?: string;
  instantiationState: VnfInstantiationState;
  instantiatedVnfInfo?: GetSolInstantiatedVnfInfo;
  metadata: ListSolFunctionInstanceMetadata;
}
export interface ListSolFunctionInstanceMetadata {
  createdAt: Date | string;
  lastModified: Date | string;
}
export type ListSolFunctionInstanceResources =
  Array<ListSolFunctionInstanceInfo>;
export interface ListSolFunctionInstancesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSolFunctionInstancesOutput {
  nextToken?: string;
  functionInstances?: Array<ListSolFunctionInstanceInfo>;
}
export interface ListSolFunctionPackageInfo {
  id: string;
  arn: string;
  onboardingState: OnboardingState;
  operationalState: OperationalState;
  usageState: UsageState;
  vnfdId?: string;
  vnfProvider?: string;
  vnfProductName?: string;
  vnfdVersion?: string;
  metadata?: ListSolFunctionPackageMetadata;
}
export interface ListSolFunctionPackageMetadata {
  createdAt: Date | string;
  lastModified: Date | string;
}
export type ListSolFunctionPackageResources = Array<ListSolFunctionPackageInfo>;
export interface ListSolFunctionPackagesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSolFunctionPackagesOutput {
  nextToken?: string;
  functionPackages: Array<ListSolFunctionPackageInfo>;
}
export interface ListSolNetworkInstanceInfo {
  id: string;
  arn: string;
  nsInstanceName: string;
  nsInstanceDescription: string;
  nsdId: string;
  nsdInfoId: string;
  nsState: NsState;
  metadata: ListSolNetworkInstanceMetadata;
}
export interface ListSolNetworkInstanceMetadata {
  createdAt: Date | string;
  lastModified: Date | string;
}
export type ListSolNetworkInstanceResources = Array<ListSolNetworkInstanceInfo>;
export interface ListSolNetworkInstancesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSolNetworkInstancesOutput {
  nextToken?: string;
  networkInstances?: Array<ListSolNetworkInstanceInfo>;
}
export interface ListSolNetworkOperationsInfo {
  id: string;
  arn: string;
  operationState: NsLcmOperationState;
  nsInstanceId: string;
  lcmOperationType: LcmOperationType;
  updateType?: UpdateSolNetworkType;
  error?: ProblemDetails;
  metadata?: ListSolNetworkOperationsMetadata;
}
export interface ListSolNetworkOperationsInput {
  nsInstanceId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSolNetworkOperationsMetadata {
  nsdInfoId?: string;
  vnfInstanceId?: string;
  createdAt: Date | string;
  lastModified: Date | string;
}
export interface ListSolNetworkOperationsOutput {
  nextToken?: string;
  networkOperations?: Array<ListSolNetworkOperationsInfo>;
}
export type ListSolNetworkOperationsResources =
  Array<ListSolNetworkOperationsInfo>;
export interface ListSolNetworkPackageInfo {
  id: string;
  arn: string;
  nsdOnboardingState: NsdOnboardingState;
  nsdOperationalState: NsdOperationalState;
  nsdUsageState: NsdUsageState;
  nsdId?: string;
  nsdName?: string;
  nsdVersion?: string;
  nsdDesigner?: string;
  nsdInvariantId?: string;
  vnfPkgIds?: Array<string>;
  metadata: ListSolNetworkPackageMetadata;
}
export interface ListSolNetworkPackageMetadata {
  createdAt: Date | string;
  lastModified: Date | string;
}
export type ListSolNetworkPackageResources = Array<ListSolNetworkPackageInfo>;
export interface ListSolNetworkPackagesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSolNetworkPackagesOutput {
  nextToken?: string;
  networkPackages: Array<ListSolNetworkPackageInfo>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags: Record<string, string>;
}
export interface ModifyVnfInfoMetadata {
  vnfInstanceId: string;
  vnfConfigurableProperties: unknown;
}
export interface NetworkArtifactMeta {
  overrides?: Array<ToscaOverride>;
}
export type NsdId = string;

export type NsdInfoArn = string;

export type NsdInfoId = string;

export type NsdOnboardingState = "CREATED" | "ONBOARDED" | "ERROR";
export type NsdOperationalState = "ENABLED" | "DISABLED";
export type NsdUsageState = "IN_USE" | "NOT_IN_USE";
export type NsInstanceArn = string;

export type NsInstanceId = string;

export type NsLcmOperationState =
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLING"
  | "CANCELLED";
export type NsLcmOpOccArn = string;

export type NsLcmOpOccId = string;

export type NsState =
  | "INSTANTIATED"
  | "NOT_INSTANTIATED"
  | "UPDATED"
  | "IMPAIRED"
  | "UPDATE_FAILED"
  | "STOPPED"
  | "DELETED"
  | "INSTANTIATE_IN_PROGRESS"
  | "INTENT_TO_UPDATE_IN_PROGRESS"
  | "UPDATE_IN_PROGRESS"
  | "TERMINATE_IN_PROGRESS";
export type OnboardingState = "CREATED" | "ONBOARDED" | "ERROR";
export type OperationalState = "ENABLED" | "DISABLED";
export type OverrideList = Array<ToscaOverride>;
export type PackageContentType = "APPLICATION_ZIP";
export type PaginationToken = string;

export interface ProblemDetails {
  detail: string;
  title?: string;
}
export interface PutSolFunctionPackageContentInput {
  vnfPkgId: string;
  contentType?: PackageContentType;
  file: Uint8Array | string;
}
export interface PutSolFunctionPackageContentMetadata {
  vnfd?: FunctionArtifactMeta;
}
export interface PutSolFunctionPackageContentOutput {
  id: string;
  vnfdId: string;
  vnfProductName: string;
  vnfProvider: string;
  vnfdVersion: string;
  metadata: PutSolFunctionPackageContentMetadata;
}
export interface PutSolNetworkPackageContentInput {
  nsdInfoId: string;
  contentType?: PackageContentType;
  file: Uint8Array | string;
}
export interface PutSolNetworkPackageContentMetadata {
  nsd?: NetworkArtifactMeta;
}
export interface PutSolNetworkPackageContentOutput {
  id: string;
  arn: string;
  nsdId: string;
  nsdName: string;
  nsdVersion: string;
  vnfPkgIds: Array<string>;
  metadata: PutSolNetworkPackageContentMetadata;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type SensitiveBlob = Uint8Array | string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type StringMap = Record<string, string>;
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TaskStatus =
  | "SCHEDULED"
  | "STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "ERROR"
  | "SKIPPED"
  | "CANCELLED";
export interface TerminateSolNetworkInstanceInput {
  nsInstanceId: string;
  tags?: Record<string, string>;
}
export interface TerminateSolNetworkInstanceOutput {
  nsLcmOpOccId?: string;
  tags?: Record<string, string>;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type TNBResourceArn = string;

export interface ToscaOverride {
  name?: string;
  defaultValue?: string;
}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateNsMetadata {
  nsdInfoId: string;
  additionalParamsForNs?: unknown;
}
export interface UpdateSolFunctionPackageInput {
  vnfPkgId: string;
  operationalState: OperationalState;
}
export interface UpdateSolFunctionPackageOutput {
  operationalState: OperationalState;
}
export interface UpdateSolNetworkInstanceInput {
  nsInstanceId: string;
  updateType: UpdateSolNetworkType;
  modifyVnfInfoData?: UpdateSolNetworkModify;
  updateNs?: UpdateSolNetworkServiceData;
  tags?: Record<string, string>;
}
export interface UpdateSolNetworkInstanceOutput {
  nsLcmOpOccId?: string;
  tags?: Record<string, string>;
}
export interface UpdateSolNetworkModify {
  vnfInstanceId: string;
  vnfConfigurableProperties: unknown;
}
export interface UpdateSolNetworkPackageInput {
  nsdInfoId: string;
  nsdOperationalState: NsdOperationalState;
}
export interface UpdateSolNetworkPackageOutput {
  nsdOperationalState: NsdOperationalState;
}
export interface UpdateSolNetworkServiceData {
  nsdInfoId: string;
  additionalParamsForNs?: unknown;
}
export type UpdateSolNetworkType = "MODIFY_VNF_INFORMATION" | "UPDATE_NS";
export type UsageState = "IN_USE" | "NOT_IN_USE";
export interface ValidateSolFunctionPackageContentInput {
  vnfPkgId: string;
  contentType?: PackageContentType;
  file: Uint8Array | string;
}
export interface ValidateSolFunctionPackageContentMetadata {
  vnfd?: FunctionArtifactMeta;
}
export interface ValidateSolFunctionPackageContentOutput {
  id: string;
  vnfdId: string;
  vnfProductName: string;
  vnfProvider: string;
  vnfdVersion: string;
  metadata: ValidateSolFunctionPackageContentMetadata;
}
export interface ValidateSolNetworkPackageContentInput {
  nsdInfoId: string;
  contentType?: PackageContentType;
  file: Uint8Array | string;
}
export interface ValidateSolNetworkPackageContentMetadata {
  nsd?: NetworkArtifactMeta;
}
export interface ValidateSolNetworkPackageContentOutput {
  id: string;
  arn: string;
  nsdId: string;
  nsdName: string;
  nsdVersion: string;
  vnfPkgIds: Array<string>;
  metadata: ValidateSolNetworkPackageContentMetadata;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type VnfdId = string;

export type VnfInstanceArn = string;

export type VnfInstanceId = string;

export type VnfInstantiationState = "INSTANTIATED" | "NOT_INSTANTIATED";
export type VnfOperationalState = "STARTED" | "STOPPED";
export type VnfPkgArn = string;

export type VnfPkgId = string;

export type VnfPkgIdList = Array<string>;
export declare namespace CancelSolNetworkOperation {
  export type Input = CancelSolNetworkOperationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSolFunctionPackage {
  export type Input = CreateSolFunctionPackageInput;
  export type Output = CreateSolFunctionPackageOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSolNetworkInstance {
  export type Input = CreateSolNetworkInstanceInput;
  export type Output = CreateSolNetworkInstanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSolNetworkPackage {
  export type Input = CreateSolNetworkPackageInput;
  export type Output = CreateSolNetworkPackageOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSolFunctionPackage {
  export type Input = DeleteSolFunctionPackageInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSolNetworkInstance {
  export type Input = DeleteSolNetworkInstanceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSolNetworkPackage {
  export type Input = DeleteSolNetworkPackageInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolFunctionInstance {
  export type Input = GetSolFunctionInstanceInput;
  export type Output = GetSolFunctionInstanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolFunctionPackage {
  export type Input = GetSolFunctionPackageInput;
  export type Output = GetSolFunctionPackageOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolFunctionPackageContent {
  export type Input = GetSolFunctionPackageContentInput;
  export type Output = GetSolFunctionPackageContentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolFunctionPackageDescriptor {
  export type Input = GetSolFunctionPackageDescriptorInput;
  export type Output = GetSolFunctionPackageDescriptorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolNetworkInstance {
  export type Input = GetSolNetworkInstanceInput;
  export type Output = GetSolNetworkInstanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolNetworkOperation {
  export type Input = GetSolNetworkOperationInput;
  export type Output = GetSolNetworkOperationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolNetworkPackage {
  export type Input = GetSolNetworkPackageInput;
  export type Output = GetSolNetworkPackageOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolNetworkPackageContent {
  export type Input = GetSolNetworkPackageContentInput;
  export type Output = GetSolNetworkPackageContentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSolNetworkPackageDescriptor {
  export type Input = GetSolNetworkPackageDescriptorInput;
  export type Output = GetSolNetworkPackageDescriptorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InstantiateSolNetworkInstance {
  export type Input = InstantiateSolNetworkInstanceInput;
  export type Output = InstantiateSolNetworkInstanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSolFunctionInstances {
  export type Input = ListSolFunctionInstancesInput;
  export type Output = ListSolFunctionInstancesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSolFunctionPackages {
  export type Input = ListSolFunctionPackagesInput;
  export type Output = ListSolFunctionPackagesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSolNetworkInstances {
  export type Input = ListSolNetworkInstancesInput;
  export type Output = ListSolNetworkInstancesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSolNetworkOperations {
  export type Input = ListSolNetworkOperationsInput;
  export type Output = ListSolNetworkOperationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSolNetworkPackages {
  export type Input = ListSolNetworkPackagesInput;
  export type Output = ListSolNetworkPackagesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSolFunctionPackageContent {
  export type Input = PutSolFunctionPackageContentInput;
  export type Output = PutSolFunctionPackageContentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSolNetworkPackageContent {
  export type Input = PutSolNetworkPackageContentInput;
  export type Output = PutSolNetworkPackageContentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TerminateSolNetworkInstance {
  export type Input = TerminateSolNetworkInstanceInput;
  export type Output = TerminateSolNetworkInstanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSolFunctionPackage {
  export type Input = UpdateSolFunctionPackageInput;
  export type Output = UpdateSolFunctionPackageOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSolNetworkInstance {
  export type Input = UpdateSolNetworkInstanceInput;
  export type Output = UpdateSolNetworkInstanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSolNetworkPackage {
  export type Input = UpdateSolNetworkPackageInput;
  export type Output = UpdateSolNetworkPackageOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ValidateSolFunctionPackageContent {
  export type Input = ValidateSolFunctionPackageContentInput;
  export type Output = ValidateSolFunctionPackageContentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ValidateSolNetworkPackageContent {
  export type Input = ValidateSolNetworkPackageContentInput;
  export type Output = ValidateSolNetworkPackageContentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
