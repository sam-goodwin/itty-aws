import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CloudHSM",
  serviceShapeName: "CloudHsmFrontendService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cloudhsm" });
const ver = /*@__PURE__*/ T.ServiceVersion("2014-05-30");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://cloudhsm-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://cloudhsm-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cloudhsm.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cloudhsm.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class CloudHsmInternalException
  extends /*@__PURE__*/ S.TaggedError<CloudHsmInternalException>()("CloudHsmInternalException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    retryable: /*@__PURE__*/ S.optional(S.Boolean),
  }) {}
export class CloudHsmServiceException
  extends /*@__PURE__*/ S.TaggedError<CloudHsmServiceException>()("CloudHsmServiceException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    retryable: /*@__PURE__*/ S.optional(S.Boolean),
  }) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()("InvalidRequestException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    retryable: /*@__PURE__*/ S.optional(S.Boolean),
  }) {}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 1);
export interface AddTagsToResourceRequest {
  ResourceArn: string;
  TagList: Tag[];
}
const AddTagsToResourceRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AddTagsToResourceRequest>;
export interface AddTagsToResourceResponse {
  Status: string;
}
const AddTagsToResourceResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AddTagsToResourceResponse>;
export type Label = string;
export interface CreateHapgRequest {
  Label: string;
}
const CreateHapgRequest = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<CreateHapgRequest>;
export type HapgArn = string;
export interface CreateHapgResponse {
  HapgArn?: string;
}
const CreateHapgResponse = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<CreateHapgResponse>;
export type SubnetId = string;
export type SshKey = string;
export type IpAddress = string;
export type IamRoleArn = string;
export type ExternalId = string;
export type SubscriptionType = "PRODUCTION" | (string & {});
const SubscriptionType = S.String;

export type ClientToken = string;
export interface CreateHsmRequest {
  SubnetId: string;
  SshKey: string;
  EniIp?: string;
  IamRoleArn: string;
  ExternalId?: string;
  SubscriptionType: SubscriptionType;
  ClientToken?: string;
  SyslogIp?: string;
}
const CreateHsmRequest = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<CreateHsmRequest>;
export type HsmArn = string;
export interface CreateHsmResponse {
  HsmArn?: string;
}
const CreateHsmResponse = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<CreateHsmResponse>;
export type ClientLabel = string;
export type Certificate = string;
export interface CreateLunaClientRequest {
  Label?: string;
  Certificate: string;
}
const CreateLunaClientRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateLunaClientRequest>;
export type ClientArn = string;
export interface CreateLunaClientResponse {
  ClientArn?: string;
}
const CreateLunaClientResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateLunaClientResponse>;
export interface DeleteHapgRequest {
  HapgArn: string;
}
const DeleteHapgRequest = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<DeleteHapgRequest>;
export interface DeleteHapgResponse {
  Status: string;
}
const DeleteHapgResponse = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<DeleteHapgResponse>;
export interface DeleteHsmRequest {
  HsmArn: string;
}
const DeleteHsmRequest = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<DeleteHsmRequest>;
export interface DeleteHsmResponse {
  Status: string;
}
const DeleteHsmResponse = DeleteHapgResponse as any as S.Schema<DeleteHsmResponse>;
export interface DeleteLunaClientRequest {
  ClientArn: string;
}
const DeleteLunaClientRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<DeleteLunaClientRequest>;
export interface DeleteLunaClientResponse {
  Status: string;
}
const DeleteLunaClientResponse = DeleteHapgResponse as any as S.Schema<DeleteLunaClientResponse>;
export interface DescribeHapgRequest {
  HapgArn: string;
}
const DescribeHapgRequest = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<DescribeHapgRequest>;
export type HsmList = string[];
const HsmList = /*@__PURE__*/ __L.at(__c1, 7);
export type PartitionSerial = string;
export type PartitionSerialList = string[];
const PartitionSerialList = HsmList as any as S.Schema<PartitionSerialList>;
export type CloudHsmObjectState = "READY" | "UPDATING" | "DEGRADED" | (string & {});
const CloudHsmObjectState = S.String;

export interface DescribeHapgResponse {
  HapgArn?: string;
  HapgSerial?: string;
  HsmsLastActionFailed?: string[];
  HsmsPendingDeletion?: string[];
  HsmsPendingRegistration?: string[];
  Label?: string;
  LastModifiedTimestamp?: string;
  PartitionSerialList?: string[];
  State?: CloudHsmObjectState;
}
const DescribeHapgResponse = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<DescribeHapgResponse>;
export type HsmSerialNumber = string;
export interface DescribeHsmRequest {
  HsmArn?: string;
  HsmSerialNumber?: string;
}
const DescribeHsmRequest = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<DescribeHsmRequest>;
export type HsmStatus =
  | "PENDING"
  | "RUNNING"
  | "UPDATING"
  | "SUSPENDED"
  | "TERMINATING"
  | "TERMINATED"
  | "DEGRADED"
  | (string & {});
const HsmStatus = S.String;

export type AZ = string;
export type EniId = string;
export type VpcId = string;
export type PartitionArn = string;
export type PartitionList = string[];
const PartitionList = HsmList as any as S.Schema<PartitionList>;
export interface DescribeHsmResponse {
  HsmArn?: string;
  Status?: HsmStatus;
  StatusDetails?: string;
  AvailabilityZone?: string;
  EniId?: string;
  EniIp?: string;
  SubscriptionType?: SubscriptionType;
  SubscriptionStartDate?: string;
  SubscriptionEndDate?: string;
  VpcId?: string;
  SubnetId?: string;
  IamRoleArn?: string;
  SerialNumber?: string;
  VendorName?: string;
  HsmType?: string;
  SoftwareVersion?: string;
  SshPublicKey?: string;
  SshKeyLastUpdated?: string;
  ServerCertUri?: string;
  ServerCertLastUpdated?: string;
  Partitions?: string[];
}
const DescribeHsmResponse = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<DescribeHsmResponse>;
export type CertificateFingerprint = string;
export interface DescribeLunaClientRequest {
  ClientArn?: string;
  CertificateFingerprint?: string;
}
const DescribeLunaClientRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<DescribeLunaClientRequest>;
export interface DescribeLunaClientResponse {
  ClientArn?: string;
  Certificate?: string;
  CertificateFingerprint?: string;
  LastModifiedTimestamp?: string;
  Label?: string;
}
const DescribeLunaClientResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DescribeLunaClientResponse>;
export type ClientVersion = "5.1" | "5.3" | (string & {});
const ClientVersion = S.String;

export type HapgList = string[];
const HapgList = HsmList as any as S.Schema<HapgList>;
export interface GetConfigRequest {
  ClientArn: string;
  ClientVersion: ClientVersion;
  HapgList: string[];
}
const GetConfigRequest = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<GetConfigRequest>;
export interface GetConfigResponse {
  ConfigType?: string;
  ConfigFile?: string;
  ConfigCred?: string;
}
const GetConfigResponse = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<GetConfigResponse>;
export interface ListAvailableZonesRequest {}
const ListAvailableZonesRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<ListAvailableZonesRequest>;
export type AZList = string[];
const AZList = HsmList as any as S.Schema<AZList>;
export interface ListAvailableZonesResponse {
  AZList?: string[];
}
const ListAvailableZonesResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<ListAvailableZonesResponse>;
export type PaginationToken = string;
export interface ListHapgsRequest {
  NextToken?: string;
}
const ListHapgsRequest = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<ListHapgsRequest>;
export interface ListHapgsResponse {
  HapgList: string[];
  NextToken?: string;
}
const ListHapgsResponse = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ListHapgsResponse>;
export interface ListHsmsRequest {
  NextToken?: string;
}
const ListHsmsRequest = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ListHsmsRequest>;
export interface ListHsmsResponse {
  HsmList?: string[];
  NextToken?: string;
}
const ListHsmsResponse = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ListHsmsResponse>;
export interface ListLunaClientsRequest {
  NextToken?: string;
}
const ListLunaClientsRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<ListLunaClientsRequest>;
export type ClientList = string[];
const ClientList = HsmList as any as S.Schema<ClientList>;
export interface ListLunaClientsResponse {
  ClientList: string[];
  NextToken?: string;
}
const ListLunaClientsResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<ListLunaClientsResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  TagList: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ModifyHapgRequest {
  HapgArn: string;
  Label?: string;
  PartitionSerialList?: string[];
}
const ModifyHapgRequest = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<ModifyHapgRequest>;
export interface ModifyHapgResponse {
  HapgArn?: string;
}
const ModifyHapgResponse = CreateHapgResponse as any as S.Schema<ModifyHapgResponse>;
export interface ModifyHsmRequest {
  HsmArn: string;
  SubnetId?: string;
  EniIp?: string;
  IamRoleArn?: string;
  ExternalId?: string;
  SyslogIp?: string;
}
const ModifyHsmRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<ModifyHsmRequest>;
export interface ModifyHsmResponse {
  HsmArn?: string;
}
const ModifyHsmResponse = CreateHsmResponse as any as S.Schema<ModifyHsmResponse>;
export interface ModifyLunaClientRequest {
  ClientArn: string;
  Certificate: string;
}
const ModifyLunaClientRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<ModifyLunaClientRequest>;
export interface ModifyLunaClientResponse {
  ClientArn?: string;
}
const ModifyLunaClientResponse =
  CreateLunaClientResponse as any as S.Schema<ModifyLunaClientResponse>;
export type TagKeyList = string[];
const TagKeyList = HsmList as any as S.Schema<TagKeyList>;
export interface RemoveTagsFromResourceRequest {
  ResourceArn: string;
  TagKeyList: string[];
}
const RemoveTagsFromResourceRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<RemoveTagsFromResourceRequest>;
export interface RemoveTagsFromResourceResponse {
  Status: string;
}
const RemoveTagsFromResourceResponse =
  AddTagsToResourceResponse as any as S.Schema<RemoveTagsFromResourceResponse>;
export type AddTagsToResourceError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Adds or overwrites one or more tags for the specified AWS CloudHSM resource.
 *
 * Each tag consists of a key and a value. Tag keys must be unique to each
 * resource.
 */
export const addTagsToResource: API.OperationMethod<
  AddTagsToResourceRequest,
  AddTagsToResourceResponse,
  AddTagsToResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddTagsToResourceRequest,
  output: AddTagsToResourceResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTagsToResource",
}));

export type CreateHapgError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Creates a high-availability partition group. A high-availability partition group is a
 * group of partitions that spans multiple physical HSMs.
 */
export const createHapg: API.OperationMethod<
  CreateHapgRequest,
  CreateHapgResponse,
  CreateHapgError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateHapgRequest,
  output: CreateHapgResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHapg",
}));

export type CreateHsmError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Creates an uninitialized HSM instance.
 *
 * There is an upfront fee charged for each HSM instance that you create with the
 * `CreateHsm` operation. If you accidentally provision an HSM and want to request a
 * refund, delete the instance using the DeleteHsm operation, go to the AWS Support Center, create a new case, and select
 * **Account and Billing Support**.
 *
 * It can take up to 20 minutes to create and provision an HSM. You can monitor the
 * status of the HSM with the DescribeHsm operation. The HSM is ready to be
 * initialized when the status changes to `RUNNING`.
 */
export const createHsm: API.OperationMethod<
  CreateHsmRequest,
  CreateHsmResponse,
  CreateHsmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateHsmRequest,
  output: CreateHsmResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHsm",
}));

export type CreateLunaClientError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Creates an HSM client.
 */
export const createLunaClient: API.OperationMethod<
  CreateLunaClientRequest,
  CreateLunaClientResponse,
  CreateLunaClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLunaClientRequest,
  output: CreateLunaClientResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLunaClient",
}));

export type DeleteHapgError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Deletes a high-availability partition group.
 */
export const deleteHapg: API.OperationMethod<
  DeleteHapgRequest,
  DeleteHapgResponse,
  DeleteHapgError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteHapgRequest,
  output: DeleteHapgResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHapg",
}));

export type DeleteHsmError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Deletes an HSM. After completion, this operation cannot be undone and your key material
 * cannot be recovered.
 */
export const deleteHsm: API.OperationMethod<
  DeleteHsmRequest,
  DeleteHsmResponse,
  DeleteHsmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteHsmRequest,
  output: DeleteHsmResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHsm",
}));

export type DeleteLunaClientError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Deletes a client.
 */
export const deleteLunaClient: API.OperationMethod<
  DeleteLunaClientRequest,
  DeleteLunaClientResponse,
  DeleteLunaClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLunaClientRequest,
  output: DeleteLunaClientResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLunaClient",
}));

export type DescribeHapgError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Retrieves information about a high-availability partition group.
 */
export const describeHapg: API.OperationMethod<
  DescribeHapgRequest,
  DescribeHapgResponse,
  DescribeHapgError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeHapgRequest,
  output: DescribeHapgResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHapg",
}));

export type DescribeHsmError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Retrieves information about an HSM. You can identify the HSM by its ARN or its serial
 * number.
 */
export const describeHsm: API.OperationMethod<
  DescribeHsmRequest,
  DescribeHsmResponse,
  DescribeHsmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeHsmRequest,
  output: DescribeHsmResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHsm",
}));

export type DescribeLunaClientError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Retrieves information about an HSM client.
 */
export const describeLunaClient: API.OperationMethod<
  DescribeLunaClientRequest,
  DescribeLunaClientResponse,
  DescribeLunaClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLunaClientRequest,
  output: DescribeLunaClientResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLunaClient",
}));

export type GetConfigError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Gets the configuration files necessary to connect to all high availability partition
 * groups the client is associated with.
 */
export const getConfig: API.OperationMethod<
  GetConfigRequest,
  GetConfigResponse,
  GetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigRequest,
  output: GetConfigResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfig",
}));

export type ListAvailableZonesError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Lists the Availability Zones that have available AWS CloudHSM capacity.
 */
export const listAvailableZones: API.OperationMethod<
  ListAvailableZonesRequest,
  ListAvailableZonesResponse,
  ListAvailableZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAvailableZonesRequest,
  output: ListAvailableZonesResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableZones",
}));

export type ListHapgsError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Lists the high-availability partition groups for the account.
 *
 * This operation supports pagination with the use of the `NextToken` member.
 * If more results are available, the `NextToken` member of the response contains a
 * token that you pass in the next call to `ListHapgs` to retrieve the next set of
 * items.
 */
export const listHapgs: API.OperationMethod<
  ListHapgsRequest,
  ListHapgsResponse,
  ListHapgsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListHapgsRequest,
  output: ListHapgsResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHapgs",
}));

export type ListHsmsError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Retrieves the identifiers of all of the HSMs provisioned for the current
 * customer.
 *
 * This operation supports pagination with the use of the `NextToken` member.
 * If more results are available, the `NextToken` member of the response contains a
 * token that you pass in the next call to `ListHsms` to retrieve the next set of
 * items.
 */
export const listHsms: API.OperationMethod<
  ListHsmsRequest,
  ListHsmsResponse,
  ListHsmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListHsmsRequest,
  output: ListHsmsResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHsms",
}));

export type ListLunaClientsError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Lists all of the clients.
 *
 * This operation supports pagination with the use of the `NextToken` member.
 * If more results are available, the `NextToken` member of the response contains a
 * token that you pass in the next call to `ListLunaClients` to retrieve the next set
 * of items.
 */
export const listLunaClients: API.OperationMethod<
  ListLunaClientsRequest,
  ListLunaClientsResponse,
  ListLunaClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLunaClientsRequest,
  output: ListLunaClientsResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLunaClients",
}));

export type ListTagsForResourceError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Returns a list of all tags for the specified AWS CloudHSM resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ModifyHapgError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Modifies an existing high-availability partition group.
 */
export const modifyHapg: API.OperationMethod<
  ModifyHapgRequest,
  ModifyHapgResponse,
  ModifyHapgError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyHapgRequest,
  output: ModifyHapgResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyHapg",
}));

export type ModifyHsmError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Modifies an HSM.
 *
 * This operation can result in the HSM being offline for up to 15 minutes while the AWS
 * CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure
 * that your AWS CloudHSM service is configured for high availability, and consider executing this
 * operation during a maintenance window.
 */
export const modifyHsm: API.OperationMethod<
  ModifyHsmRequest,
  ModifyHsmResponse,
  ModifyHsmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyHsmRequest,
  output: ModifyHsmResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyHsm",
}));

export type ModifyLunaClientError = CloudHsmServiceException | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Modifies the certificate used by the client.
 *
 * This action can potentially start a workflow to install the new certificate on the
 * client's HSMs.
 */
export const modifyLunaClient: API.OperationMethod<
  ModifyLunaClientRequest,
  ModifyLunaClientResponse,
  ModifyLunaClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyLunaClientRequest,
  output: ModifyLunaClientResponse,
  errors: [CloudHsmServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyLunaClient",
}));

export type RemoveTagsFromResourceError =
  | CloudHsmInternalException
  | CloudHsmServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * This is documentation for **AWS CloudHSM Classic**. For
 * more information, see AWS CloudHSM
 * Classic FAQs, the AWS
 * CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.
 *
 * For information about the current version of AWS
 * CloudHSM, see AWS CloudHSM, the
 * AWS CloudHSM User Guide,
 * and the AWS CloudHSM API
 * Reference.
 *
 * Removes one or more tags from the specified AWS CloudHSM resource.
 *
 * To remove a tag, specify only the tag key to remove (not the value). To overwrite the
 * value for an existing tag, use AddTagsToResource.
 */
export const removeTagsFromResource: API.OperationMethod<
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResponse,
  RemoveTagsFromResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveTagsFromResourceRequest,
  output: RemoveTagsFromResourceResponse,
  errors: [CloudHsmInternalException, CloudHsmServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTagsFromResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagList: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsToResourceRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Status: S.String })).annotate({
        identifier: "AddTagsToResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Label: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateHapgRequest" });
    case 5:
      return S.suspend(() => S.Struct({ HapgArn: S.optional(S.String) })).annotate({
        identifier: "CreateHapgResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubnetId: S.String.pipe(T.XmlName("SubnetId")),
          SshKey: S.String.pipe(T.XmlName("SshKey")),
          EniIp: S.optional(S.String).pipe(T.XmlName("EniIp")),
          IamRoleArn: S.String.pipe(T.XmlName("IamRoleArn")),
          ExternalId: S.optional(S.String).pipe(T.XmlName("ExternalId")),
          SubscriptionType: SubscriptionType.pipe(T.XmlName("SubscriptionType")),
          ClientToken: S.optional(S.String).pipe(T.XmlName("ClientToken")),
          SyslogIp: S.optional(S.String).pipe(T.XmlName("SyslogIp")),
        }).pipe(
          T.all(
            T.XmlName("CreateHsmRequest"),
            T.Http({ method: "POST", uri: "/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateHsmRequest" });
    case 7:
      return S.suspend(() => S.Struct({ HsmArn: S.optional(S.String) })).annotate({
        identifier: "CreateHsmResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Label: S.optional(S.String), Certificate: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateLunaClientRequest" });
    case 1:
      return S.suspend(() => S.Struct({ ClientArn: S.optional(S.String) })).annotate({
        identifier: "CreateLunaClientResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ HapgArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteHapgRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Status: S.String })).annotate({
        identifier: "DeleteHapgResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ HsmArn: S.String.pipe(T.XmlName("HsmArn")) }).pipe(
          T.all(
            T.XmlName("DeleteHsmRequest"),
            T.Http({ method: "POST", uri: "/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteHsmRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ClientArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLunaClientRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ HapgArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeHapgRequest" });
    case 7:
      return S.Array(S.String);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HapgArn: S.optional(S.String),
          HapgSerial: S.optional(S.String),
          HsmsLastActionFailed: S.optional(HsmList),
          HsmsPendingDeletion: S.optional(HsmList),
          HsmsPendingRegistration: S.optional(HsmList),
          Label: S.optional(S.String),
          LastModifiedTimestamp: S.optional(S.String),
          PartitionSerialList: S.optional(PartitionSerialList),
          State: S.optional(CloudHsmObjectState),
        }),
      ).annotate({ identifier: "DescribeHapgResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ HsmArn: S.optional(S.String), HsmSerialNumber: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeHsmRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          HsmArn: S.optional(S.String),
          Status: S.optional(HsmStatus),
          StatusDetails: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          EniId: S.optional(S.String),
          EniIp: S.optional(S.String),
          SubscriptionType: S.optional(SubscriptionType),
          SubscriptionStartDate: S.optional(S.String),
          SubscriptionEndDate: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetId: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          SerialNumber: S.optional(S.String),
          VendorName: S.optional(S.String),
          HsmType: S.optional(S.String),
          SoftwareVersion: S.optional(S.String),
          SshPublicKey: S.optional(S.String),
          SshKeyLastUpdated: S.optional(S.String),
          ServerCertUri: S.optional(S.String),
          ServerCertLastUpdated: S.optional(S.String),
          Partitions: S.optional(PartitionList),
        }),
      ).annotate({ identifier: "DescribeHsmResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClientArn: S.optional(S.String),
          CertificateFingerprint: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLunaClientRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientArn: S.optional(S.String),
          Certificate: S.optional(S.String),
          CertificateFingerprint: S.optional(S.String),
          LastModifiedTimestamp: S.optional(S.String),
          Label: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeLunaClientResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ClientArn: S.String, ClientVersion: ClientVersion, HapgList: HapgList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetConfigRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigType: S.optional(S.String),
          ConfigFile: S.optional(S.String),
          ConfigCred: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetConfigResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAvailableZonesRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AZList: S.optional(AZList) })).annotate({
        identifier: "ListAvailableZonesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListHapgsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ HapgList: HapgList, NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListHapgsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListHsmsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ HsmList: S.optional(HsmList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListHsmsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListLunaClientsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ClientList: ClientList, NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLunaClientsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TagList: TagList })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          HapgArn: S.String,
          Label: S.optional(S.String),
          PartitionSerialList: S.optional(PartitionSerialList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyHapgRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          HsmArn: S.String.pipe(T.XmlName("HsmArn")),
          SubnetId: S.optional(S.String).pipe(T.XmlName("SubnetId")),
          EniIp: S.optional(S.String).pipe(T.XmlName("EniIp")),
          IamRoleArn: S.optional(S.String).pipe(T.XmlName("IamRoleArn")),
          ExternalId: S.optional(S.String).pipe(T.XmlName("ExternalId")),
          SyslogIp: S.optional(S.String).pipe(T.XmlName("SyslogIp")),
        }).pipe(
          T.all(
            T.XmlName("ModifyHsmRequest"),
            T.Http({ method: "POST", uri: "/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ModifyHsmRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClientArn: S.String, Certificate: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ModifyLunaClientRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeyList: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveTagsFromResourceRequest",
      });
  }
}
