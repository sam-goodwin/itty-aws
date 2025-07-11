import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface TrentService {
  cancelKeyDeletion(
    input: CancelKeyDeletionRequest,
  ): Effect.Effect<
    CancelKeyDeletionResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  connectCustomKeyStore(
    input: ConnectCustomKeyStoreRequest,
  ): Effect.Effect<
    ConnectCustomKeyStoreResponse,
    CloudHsmClusterInvalidConfigurationException | CloudHsmClusterNotActiveException | CustomKeyStoreInvalidStateException | CustomKeyStoreNotFoundException | KMSInternalException | CommonAwsError
  >;
  createAlias(
    input: CreateAliasRequest,
  ): Effect.Effect<
    {},
    AlreadyExistsException | DependencyTimeoutException | InvalidAliasNameException | KMSInternalException | KMSInvalidStateException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  createCustomKeyStore(
    input: CreateCustomKeyStoreRequest,
  ): Effect.Effect<
    CreateCustomKeyStoreResponse,
    CloudHsmClusterInUseException | CloudHsmClusterInvalidConfigurationException | CloudHsmClusterNotActiveException | CloudHsmClusterNotFoundException | CustomKeyStoreNameInUseException | IncorrectTrustAnchorException | KMSInternalException | LimitExceededException | XksProxyIncorrectAuthenticationCredentialException | XksProxyInvalidConfigurationException | XksProxyInvalidResponseException | XksProxyUriEndpointInUseException | XksProxyUriInUseException | XksProxyUriUnreachableException | XksProxyVpcEndpointServiceInUseException | XksProxyVpcEndpointServiceInvalidConfigurationException | XksProxyVpcEndpointServiceNotFoundException | CommonAwsError
  >;
  createGrant(
    input: CreateGrantRequest,
  ): Effect.Effect<
    CreateGrantResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidArnException | InvalidGrantTokenException | KMSInternalException | KMSInvalidStateException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  createKey(
    input: CreateKeyRequest,
  ): Effect.Effect<
    CreateKeyResponse,
    CloudHsmClusterInvalidConfigurationException | CustomKeyStoreInvalidStateException | CustomKeyStoreNotFoundException | DependencyTimeoutException | InvalidArnException | KMSInternalException | LimitExceededException | MalformedPolicyDocumentException | TagException | UnsupportedOperationException | XksKeyAlreadyInUseException | XksKeyInvalidConfigurationException | XksKeyNotFoundException | CommonAwsError
  >;
  decrypt(
    input: DecryptRequest,
  ): Effect.Effect<
    DecryptResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | IncorrectKeyException | InvalidCiphertextException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  deleteAlias(
    input: DeleteAliasRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  deleteCustomKeyStore(
    input: DeleteCustomKeyStoreRequest,
  ): Effect.Effect<
    DeleteCustomKeyStoreResponse,
    CustomKeyStoreHasCMKsException | CustomKeyStoreInvalidStateException | CustomKeyStoreNotFoundException | KMSInternalException | CommonAwsError
  >;
  deleteImportedKeyMaterial(
    input: DeleteImportedKeyMaterialRequest,
  ): Effect.Effect<
    DeleteImportedKeyMaterialResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  deriveSharedSecret(
    input: DeriveSharedSecretRequest,
  ): Effect.Effect<
    DeriveSharedSecretResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  describeCustomKeyStores(
    input: DescribeCustomKeyStoresRequest,
  ): Effect.Effect<
    DescribeCustomKeyStoresResponse,
    CustomKeyStoreNotFoundException | InvalidMarkerException | KMSInternalException | CommonAwsError
  >;
  describeKey(
    input: DescribeKeyRequest,
  ): Effect.Effect<
    DescribeKeyResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | NotFoundException | CommonAwsError
  >;
  disableKey(
    input: DisableKeyRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  disableKeyRotation(
    input: DisableKeyRotationRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | DisabledException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  disconnectCustomKeyStore(
    input: DisconnectCustomKeyStoreRequest,
  ): Effect.Effect<
    DisconnectCustomKeyStoreResponse,
    CustomKeyStoreInvalidStateException | CustomKeyStoreNotFoundException | KMSInternalException | CommonAwsError
  >;
  enableKey(
    input: EnableKeyRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  enableKeyRotation(
    input: EnableKeyRotationRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | DisabledException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  encrypt(
    input: EncryptRequest,
  ): Effect.Effect<
    EncryptResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  generateDataKey(
    input: GenerateDataKeyRequest,
  ): Effect.Effect<
    GenerateDataKeyResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  generateDataKeyPair(
    input: GenerateDataKeyPairRequest,
  ): Effect.Effect<
    GenerateDataKeyPairResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  generateDataKeyPairWithoutPlaintext(
    input: GenerateDataKeyPairWithoutPlaintextRequest,
  ): Effect.Effect<
    GenerateDataKeyPairWithoutPlaintextResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  generateDataKeyWithoutPlaintext(
    input: GenerateDataKeyWithoutPlaintextRequest,
  ): Effect.Effect<
    GenerateDataKeyWithoutPlaintextResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  generateMac(
    input: GenerateMacRequest,
  ): Effect.Effect<
    GenerateMacResponse,
    DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  generateRandom(
    input: GenerateRandomRequest,
  ): Effect.Effect<
    GenerateRandomResponse,
    CustomKeyStoreInvalidStateException | CustomKeyStoreNotFoundException | DependencyTimeoutException | KMSInternalException | UnsupportedOperationException | CommonAwsError
  >;
  getKeyPolicy(
    input: GetKeyPolicyRequest,
  ): Effect.Effect<
    GetKeyPolicyResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  getKeyRotationStatus(
    input: GetKeyRotationStatusRequest,
  ): Effect.Effect<
    GetKeyRotationStatusResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  getParametersForImport(
    input: GetParametersForImportRequest,
  ): Effect.Effect<
    GetParametersForImportResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  getPublicKey(
    input: GetPublicKeyRequest,
  ): Effect.Effect<
    GetPublicKeyResponse,
    DependencyTimeoutException | DisabledException | InvalidArnException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  importKeyMaterial(
    input: ImportKeyMaterialRequest,
  ): Effect.Effect<
    ImportKeyMaterialResponse,
    DependencyTimeoutException | ExpiredImportTokenException | IncorrectKeyMaterialException | InvalidArnException | InvalidCiphertextException | InvalidImportTokenException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  listAliases(
    input: ListAliasesRequest,
  ): Effect.Effect<
    ListAliasesResponse,
    DependencyTimeoutException | InvalidArnException | InvalidMarkerException | KMSInternalException | NotFoundException | CommonAwsError
  >;
  listGrants(
    input: ListGrantsRequest,
  ): Effect.Effect<
    ListGrantsResponse,
    DependencyTimeoutException | InvalidArnException | InvalidGrantIdException | InvalidMarkerException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  listKeyPolicies(
    input: ListKeyPoliciesRequest,
  ): Effect.Effect<
    ListKeyPoliciesResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  listKeyRotations(
    input: ListKeyRotationsRequest,
  ): Effect.Effect<
    ListKeyRotationsResponse,
    InvalidArnException | InvalidMarkerException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  listKeys(
    input: ListKeysRequest,
  ): Effect.Effect<
    ListKeysResponse,
    DependencyTimeoutException | InvalidMarkerException | KMSInternalException | CommonAwsError
  >;
  listResourceTags(
    input: ListResourceTagsRequest,
  ): Effect.Effect<
    ListResourceTagsResponse,
    InvalidArnException | InvalidMarkerException | KMSInternalException | NotFoundException | CommonAwsError
  >;
  listRetirableGrants(
    input: ListRetirableGrantsRequest,
  ): Effect.Effect<
    ListGrantsResponse,
    DependencyTimeoutException | InvalidArnException | InvalidMarkerException | KMSInternalException | NotFoundException | CommonAwsError
  >;
  putKeyPolicy(
    input: PutKeyPolicyRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | LimitExceededException | MalformedPolicyDocumentException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  reEncrypt(
    input: ReEncryptRequest,
  ): Effect.Effect<
    ReEncryptResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | IncorrectKeyException | InvalidCiphertextException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  replicateKey(
    input: ReplicateKeyRequest,
  ): Effect.Effect<
    ReplicateKeyResponse,
    AlreadyExistsException | DisabledException | InvalidArnException | KMSInternalException | KMSInvalidStateException | LimitExceededException | MalformedPolicyDocumentException | NotFoundException | TagException | UnsupportedOperationException | CommonAwsError
  >;
  retireGrant(
    input: RetireGrantRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | DryRunOperationException | InvalidArnException | InvalidGrantIdException | InvalidGrantTokenException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  revokeGrant(
    input: RevokeGrantRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | DryRunOperationException | InvalidArnException | InvalidGrantIdException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  rotateKeyOnDemand(
    input: RotateKeyOnDemandRequest,
  ): Effect.Effect<
    RotateKeyOnDemandResponse,
    ConflictException | DependencyTimeoutException | DisabledException | InvalidArnException | KMSInternalException | KMSInvalidStateException | LimitExceededException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  scheduleKeyDeletion(
    input: ScheduleKeyDeletionRequest,
  ): Effect.Effect<
    ScheduleKeyDeletionResponse,
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  sign(
    input: SignRequest,
  ): Effect.Effect<
    SignResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | KMSInternalException | KMSInvalidStateException | LimitExceededException | NotFoundException | TagException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | TagException | CommonAwsError
  >;
  updateAlias(
    input: UpdateAliasRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | KMSInternalException | KMSInvalidStateException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  updateCustomKeyStore(
    input: UpdateCustomKeyStoreRequest,
  ): Effect.Effect<
    UpdateCustomKeyStoreResponse,
    CloudHsmClusterInvalidConfigurationException | CloudHsmClusterNotActiveException | CloudHsmClusterNotFoundException | CloudHsmClusterNotRelatedException | CustomKeyStoreInvalidStateException | CustomKeyStoreNameInUseException | CustomKeyStoreNotFoundException | KMSInternalException | XksProxyIncorrectAuthenticationCredentialException | XksProxyInvalidConfigurationException | XksProxyInvalidResponseException | XksProxyUriEndpointInUseException | XksProxyUriInUseException | XksProxyUriUnreachableException | XksProxyVpcEndpointServiceInUseException | XksProxyVpcEndpointServiceInvalidConfigurationException | XksProxyVpcEndpointServiceNotFoundException | CommonAwsError
  >;
  updateKeyDescription(
    input: UpdateKeyDescriptionRequest,
  ): Effect.Effect<
    {},
    DependencyTimeoutException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  updatePrimaryRegion(
    input: UpdatePrimaryRegionRequest,
  ): Effect.Effect<
    {},
    DisabledException | InvalidArnException | KMSInternalException | KMSInvalidStateException | NotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  verify(
    input: VerifyRequest,
  ): Effect.Effect<
    VerifyResponse,
    DependencyTimeoutException | DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidSignatureException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
  verifyMac(
    input: VerifyMacRequest,
  ): Effect.Effect<
    VerifyMacResponse,
    DisabledException | DryRunOperationException | InvalidGrantTokenException | InvalidKeyUsageException | KeyUnavailableException | KMSInternalException | KMSInvalidMacException | KMSInvalidStateException | NotFoundException | CommonAwsError
  >;
}

export type Kms = TrentService;

export type AlgorithmSpec = "RSAES_PKCS1_V1_5" | "RSAES_OAEP_SHA_1" | "RSAES_OAEP_SHA_256" | "RSA_AES_KEY_WRAP_SHA_1" | "RSA_AES_KEY_WRAP_SHA_256" | "SM2PKE";
export type AliasList = Array<AliasListEntry>;
export interface AliasListEntry {
  AliasName?: string;
  AliasArn?: string;
  TargetKeyId?: string;
  CreationDate?: Date | string;
  LastUpdatedDate?: Date | string;
}
export type AliasNameType = string;

export declare class AlreadyExistsException extends Data.TaggedError(
  "AlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ArnType = string;

export type AttestationDocumentType = Uint8Array | string;

export type AWSAccountIdType = string;

export type BackingKeyIdResponseType = string;

export type BackingKeyIdType = string;

export type BooleanType = boolean;

export interface CancelKeyDeletionRequest {
  KeyId: string;
}
export interface CancelKeyDeletionResponse {
  KeyId?: string;
}
export type CiphertextType = Uint8Array | string;

export type CloudHsmClusterIdType = string;

export declare class CloudHsmClusterInUseException extends Data.TaggedError(
  "CloudHsmClusterInUseException",
)<{
  readonly message?: string;
}> {}
export declare class CloudHsmClusterInvalidConfigurationException extends Data.TaggedError(
  "CloudHsmClusterInvalidConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class CloudHsmClusterNotActiveException extends Data.TaggedError(
  "CloudHsmClusterNotActiveException",
)<{
  readonly message?: string;
}> {}
export declare class CloudHsmClusterNotFoundException extends Data.TaggedError(
  "CloudHsmClusterNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class CloudHsmClusterNotRelatedException extends Data.TaggedError(
  "CloudHsmClusterNotRelatedException",
)<{
  readonly message?: string;
}> {}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface ConnectCustomKeyStoreRequest {
  CustomKeyStoreId: string;
}
export interface ConnectCustomKeyStoreResponse {
}
export type ConnectionErrorCodeType = "INVALID_CREDENTIALS" | "CLUSTER_NOT_FOUND" | "NETWORK_ERRORS" | "INTERNAL_ERROR" | "INSUFFICIENT_CLOUDHSM_HSMS" | "USER_LOCKED_OUT" | "USER_NOT_FOUND" | "USER_LOGGED_IN" | "SUBNET_NOT_FOUND" | "INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET" | "XKS_PROXY_ACCESS_DENIED" | "XKS_PROXY_NOT_REACHABLE" | "XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND" | "XKS_PROXY_INVALID_RESPONSE" | "XKS_PROXY_INVALID_CONFIGURATION" | "XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION" | "XKS_PROXY_TIMED_OUT" | "XKS_PROXY_INVALID_TLS_CONFIGURATION";
export type ConnectionStateType = "CONNECTED" | "CONNECTING" | "FAILED" | "DISCONNECTED" | "DISCONNECTING";
export interface CreateAliasRequest {
  AliasName: string;
  TargetKeyId: string;
}
export interface CreateCustomKeyStoreRequest {
  CustomKeyStoreName: string;
  CloudHsmClusterId?: string;
  TrustAnchorCertificate?: string;
  KeyStorePassword?: string;
  CustomKeyStoreType?: CustomKeyStoreType;
  XksProxyUriEndpoint?: string;
  XksProxyUriPath?: string;
  XksProxyVpcEndpointServiceName?: string;
  XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;
  XksProxyConnectivity?: XksProxyConnectivityType;
}
export interface CreateCustomKeyStoreResponse {
  CustomKeyStoreId?: string;
}
export interface CreateGrantRequest {
  KeyId: string;
  GranteePrincipal: string;
  RetiringPrincipal?: string;
  Operations: Array<GrantOperation>;
  Constraints?: GrantConstraints;
  GrantTokens?: Array<string>;
  Name?: string;
  DryRun?: boolean;
}
export interface CreateGrantResponse {
  GrantToken?: string;
  GrantId?: string;
}
export interface CreateKeyRequest {
  Policy?: string;
  Description?: string;
  KeyUsage?: KeyUsageType;
  CustomerMasterKeySpec?: CustomerMasterKeySpec;
  KeySpec?: KeySpec;
  Origin?: OriginType;
  CustomKeyStoreId?: string;
  BypassPolicyLockoutSafetyCheck?: boolean;
  Tags?: Array<Tag>;
  MultiRegion?: boolean;
  XksKeyId?: string;
}
export interface CreateKeyResponse {
  KeyMetadata?: KeyMetadata;
}
export type CustomerMasterKeySpec = "RSA_2048" | "RSA_3072" | "RSA_4096" | "ECC_NIST_P256" | "ECC_NIST_P384" | "ECC_NIST_P521" | "ECC_SECG_P256K1" | "SYMMETRIC_DEFAULT" | "HMAC_224" | "HMAC_256" | "HMAC_384" | "HMAC_512" | "SM2";
export declare class CustomKeyStoreHasCMKsException extends Data.TaggedError(
  "CustomKeyStoreHasCMKsException",
)<{
  readonly message?: string;
}> {}
export type CustomKeyStoreIdType = string;

export declare class CustomKeyStoreInvalidStateException extends Data.TaggedError(
  "CustomKeyStoreInvalidStateException",
)<{
  readonly message?: string;
}> {}
export declare class CustomKeyStoreNameInUseException extends Data.TaggedError(
  "CustomKeyStoreNameInUseException",
)<{
  readonly message?: string;
}> {}
export type CustomKeyStoreNameType = string;

export declare class CustomKeyStoreNotFoundException extends Data.TaggedError(
  "CustomKeyStoreNotFoundException",
)<{
  readonly message?: string;
}> {}
export type CustomKeyStoresList = Array<CustomKeyStoresListEntry>;
export interface CustomKeyStoresListEntry {
  CustomKeyStoreId?: string;
  CustomKeyStoreName?: string;
  CloudHsmClusterId?: string;
  TrustAnchorCertificate?: string;
  ConnectionState?: ConnectionStateType;
  ConnectionErrorCode?: ConnectionErrorCodeType;
  CreationDate?: Date | string;
  CustomKeyStoreType?: CustomKeyStoreType;
  XksProxyConfiguration?: XksProxyConfigurationType;
}
export type CustomKeyStoreType = "AWS_CLOUDHSM" | "EXTERNAL_KEY_STORE";
export type DataKeyPairSpec = "RSA_2048" | "RSA_3072" | "RSA_4096" | "ECC_NIST_P256" | "ECC_NIST_P384" | "ECC_NIST_P521" | "ECC_SECG_P256K1" | "SM2";
export type DataKeySpec = "AES_256" | "AES_128";
export type DateType = Date | string;

export interface DecryptRequest {
  CiphertextBlob: Uint8Array | string;
  EncryptionContext?: Record<string, string>;
  GrantTokens?: Array<string>;
  KeyId?: string;
  EncryptionAlgorithm?: EncryptionAlgorithmSpec;
  Recipient?: RecipientInfo;
  DryRun?: boolean;
}
export interface DecryptResponse {
  KeyId?: string;
  Plaintext?: Uint8Array | string;
  EncryptionAlgorithm?: EncryptionAlgorithmSpec;
  CiphertextForRecipient?: Uint8Array | string;
  KeyMaterialId?: string;
}
export interface DeleteAliasRequest {
  AliasName: string;
}
export interface DeleteCustomKeyStoreRequest {
  CustomKeyStoreId: string;
}
export interface DeleteCustomKeyStoreResponse {
}
export interface DeleteImportedKeyMaterialRequest {
  KeyId: string;
  KeyMaterialId?: string;
}
export interface DeleteImportedKeyMaterialResponse {
  KeyId?: string;
  KeyMaterialId?: string;
}
export declare class DependencyTimeoutException extends Data.TaggedError(
  "DependencyTimeoutException",
)<{
  readonly message?: string;
}> {}
export interface DeriveSharedSecretRequest {
  KeyId: string;
  KeyAgreementAlgorithm: KeyAgreementAlgorithmSpec;
  PublicKey: Uint8Array | string;
  GrantTokens?: Array<string>;
  DryRun?: boolean;
  Recipient?: RecipientInfo;
}
export interface DeriveSharedSecretResponse {
  KeyId?: string;
  SharedSecret?: Uint8Array | string;
  CiphertextForRecipient?: Uint8Array | string;
  KeyAgreementAlgorithm?: KeyAgreementAlgorithmSpec;
  KeyOrigin?: OriginType;
}
export interface DescribeCustomKeyStoresRequest {
  CustomKeyStoreId?: string;
  CustomKeyStoreName?: string;
  Limit?: number;
  Marker?: string;
}
export interface DescribeCustomKeyStoresResponse {
  CustomKeyStores?: Array<CustomKeyStoresListEntry>;
  NextMarker?: string;
  Truncated?: boolean;
}
export interface DescribeKeyRequest {
  KeyId: string;
  GrantTokens?: Array<string>;
}
export interface DescribeKeyResponse {
  KeyMetadata?: KeyMetadata;
}
export type DescriptionType = string;

export declare class DisabledException extends Data.TaggedError(
  "DisabledException",
)<{
  readonly message?: string;
}> {}
export interface DisableKeyRequest {
  KeyId: string;
}
export interface DisableKeyRotationRequest {
  KeyId: string;
}
export interface DisconnectCustomKeyStoreRequest {
  CustomKeyStoreId: string;
}
export interface DisconnectCustomKeyStoreResponse {
}
export declare class DryRunOperationException extends Data.TaggedError(
  "DryRunOperationException",
)<{
  readonly message?: string;
}> {}
export interface EnableKeyRequest {
  KeyId: string;
}
export interface EnableKeyRotationRequest {
  KeyId: string;
  RotationPeriodInDays?: number;
}
export type EncryptionAlgorithmSpec = "SYMMETRIC_DEFAULT" | "RSAES_OAEP_SHA_1" | "RSAES_OAEP_SHA_256" | "SM2PKE";
export type EncryptionAlgorithmSpecList = Array<EncryptionAlgorithmSpec>;
export type EncryptionContextKey = string;

export type EncryptionContextType = Record<string, string>;
export type EncryptionContextValue = string;

export interface EncryptRequest {
  KeyId: string;
  Plaintext: Uint8Array | string;
  EncryptionContext?: Record<string, string>;
  GrantTokens?: Array<string>;
  EncryptionAlgorithm?: EncryptionAlgorithmSpec;
  DryRun?: boolean;
}
export interface EncryptResponse {
  CiphertextBlob?: Uint8Array | string;
  KeyId?: string;
  EncryptionAlgorithm?: EncryptionAlgorithmSpec;
}
export type ErrorMessageType = string;

export type ExpirationModelType = "KEY_MATERIAL_EXPIRES" | "KEY_MATERIAL_DOES_NOT_EXPIRE";
export declare class ExpiredImportTokenException extends Data.TaggedError(
  "ExpiredImportTokenException",
)<{
  readonly message?: string;
}> {}
export interface GenerateDataKeyPairRequest {
  EncryptionContext?: Record<string, string>;
  KeyId: string;
  KeyPairSpec: DataKeyPairSpec;
  GrantTokens?: Array<string>;
  Recipient?: RecipientInfo;
  DryRun?: boolean;
}
export interface GenerateDataKeyPairResponse {
  PrivateKeyCiphertextBlob?: Uint8Array | string;
  PrivateKeyPlaintext?: Uint8Array | string;
  PublicKey?: Uint8Array | string;
  KeyId?: string;
  KeyPairSpec?: DataKeyPairSpec;
  CiphertextForRecipient?: Uint8Array | string;
  KeyMaterialId?: string;
}
export interface GenerateDataKeyPairWithoutPlaintextRequest {
  EncryptionContext?: Record<string, string>;
  KeyId: string;
  KeyPairSpec: DataKeyPairSpec;
  GrantTokens?: Array<string>;
  DryRun?: boolean;
}
export interface GenerateDataKeyPairWithoutPlaintextResponse {
  PrivateKeyCiphertextBlob?: Uint8Array | string;
  PublicKey?: Uint8Array | string;
  KeyId?: string;
  KeyPairSpec?: DataKeyPairSpec;
  KeyMaterialId?: string;
}
export interface GenerateDataKeyRequest {
  KeyId: string;
  EncryptionContext?: Record<string, string>;
  NumberOfBytes?: number;
  KeySpec?: DataKeySpec;
  GrantTokens?: Array<string>;
  Recipient?: RecipientInfo;
  DryRun?: boolean;
}
export interface GenerateDataKeyResponse {
  CiphertextBlob?: Uint8Array | string;
  Plaintext?: Uint8Array | string;
  KeyId?: string;
  CiphertextForRecipient?: Uint8Array | string;
  KeyMaterialId?: string;
}
export interface GenerateDataKeyWithoutPlaintextRequest {
  KeyId: string;
  EncryptionContext?: Record<string, string>;
  KeySpec?: DataKeySpec;
  NumberOfBytes?: number;
  GrantTokens?: Array<string>;
  DryRun?: boolean;
}
export interface GenerateDataKeyWithoutPlaintextResponse {
  CiphertextBlob?: Uint8Array | string;
  KeyId?: string;
  KeyMaterialId?: string;
}
export interface GenerateMacRequest {
  Message: Uint8Array | string;
  KeyId: string;
  MacAlgorithm: MacAlgorithmSpec;
  GrantTokens?: Array<string>;
  DryRun?: boolean;
}
export interface GenerateMacResponse {
  Mac?: Uint8Array | string;
  MacAlgorithm?: MacAlgorithmSpec;
  KeyId?: string;
}
export interface GenerateRandomRequest {
  NumberOfBytes?: number;
  CustomKeyStoreId?: string;
  Recipient?: RecipientInfo;
}
export interface GenerateRandomResponse {
  Plaintext?: Uint8Array | string;
  CiphertextForRecipient?: Uint8Array | string;
}
export interface GetKeyPolicyRequest {
  KeyId: string;
  PolicyName?: string;
}
export interface GetKeyPolicyResponse {
  Policy?: string;
  PolicyName?: string;
}
export interface GetKeyRotationStatusRequest {
  KeyId: string;
}
export interface GetKeyRotationStatusResponse {
  KeyRotationEnabled?: boolean;
  KeyId?: string;
  RotationPeriodInDays?: number;
  NextRotationDate?: Date | string;
  OnDemandRotationStartDate?: Date | string;
}
export interface GetParametersForImportRequest {
  KeyId: string;
  WrappingAlgorithm: AlgorithmSpec;
  WrappingKeySpec: WrappingKeySpec;
}
export interface GetParametersForImportResponse {
  KeyId?: string;
  ImportToken?: Uint8Array | string;
  PublicKey?: Uint8Array | string;
  ParametersValidTo?: Date | string;
}
export interface GetPublicKeyRequest {
  KeyId: string;
  GrantTokens?: Array<string>;
}
export interface GetPublicKeyResponse {
  KeyId?: string;
  PublicKey?: Uint8Array | string;
  CustomerMasterKeySpec?: CustomerMasterKeySpec;
  KeySpec?: KeySpec;
  KeyUsage?: KeyUsageType;
  EncryptionAlgorithms?: Array<EncryptionAlgorithmSpec>;
  SigningAlgorithms?: Array<SigningAlgorithmSpec>;
  KeyAgreementAlgorithms?: Array<KeyAgreementAlgorithmSpec>;
}
export interface GrantConstraints {
  EncryptionContextSubset?: Record<string, string>;
  EncryptionContextEquals?: Record<string, string>;
}
export type GrantIdType = string;

export type GrantList = Array<GrantListEntry>;
export interface GrantListEntry {
  KeyId?: string;
  GrantId?: string;
  Name?: string;
  CreationDate?: Date | string;
  GranteePrincipal?: string;
  RetiringPrincipal?: string;
  IssuingAccount?: string;
  Operations?: Array<GrantOperation>;
  Constraints?: GrantConstraints;
}
export type GrantNameType = string;

export type GrantOperation = "Decrypt" | "Encrypt" | "GenerateDataKey" | "GenerateDataKeyWithoutPlaintext" | "ReEncryptFrom" | "ReEncryptTo" | "Sign" | "Verify" | "GetPublicKey" | "CreateGrant" | "RetireGrant" | "DescribeKey" | "GenerateDataKeyPair" | "GenerateDataKeyPairWithoutPlaintext" | "GenerateMac" | "VerifyMac" | "DeriveSharedSecret";
export type GrantOperationList = Array<GrantOperation>;
export type GrantTokenList = Array<string>;
export type GrantTokenType = string;

export interface ImportKeyMaterialRequest {
  KeyId: string;
  ImportToken: Uint8Array | string;
  EncryptedKeyMaterial: Uint8Array | string;
  ValidTo?: Date | string;
  ExpirationModel?: ExpirationModelType;
  ImportType?: ImportType;
  KeyMaterialDescription?: string;
  KeyMaterialId?: string;
}
export interface ImportKeyMaterialResponse {
  KeyId?: string;
  KeyMaterialId?: string;
}
export type ImportState = "IMPORTED" | "PENDING_IMPORT";
export type ImportType = "NEW_KEY_MATERIAL" | "EXISTING_KEY_MATERIAL";
export type IncludeKeyMaterial = "ALL_KEY_MATERIAL" | "ROTATIONS_ONLY";
export declare class IncorrectKeyException extends Data.TaggedError(
  "IncorrectKeyException",
)<{
  readonly message?: string;
}> {}
export declare class IncorrectKeyMaterialException extends Data.TaggedError(
  "IncorrectKeyMaterialException",
)<{
  readonly message?: string;
}> {}
export declare class IncorrectTrustAnchorException extends Data.TaggedError(
  "IncorrectTrustAnchorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAliasNameException extends Data.TaggedError(
  "InvalidAliasNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidArnException extends Data.TaggedError(
  "InvalidArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCiphertextException extends Data.TaggedError(
  "InvalidCiphertextException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidGrantIdException extends Data.TaggedError(
  "InvalidGrantIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidGrantTokenException extends Data.TaggedError(
  "InvalidGrantTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidImportTokenException extends Data.TaggedError(
  "InvalidImportTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKeyUsageException extends Data.TaggedError(
  "InvalidKeyUsageException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidMarkerException extends Data.TaggedError(
  "InvalidMarkerException",
)<{
  readonly message?: string;
}> {}
export type KeyAgreementAlgorithmSpec = "ECDH";
export type KeyAgreementAlgorithmSpecList = Array<KeyAgreementAlgorithmSpec>;
export type KeyEncryptionMechanism = "RSAES_OAEP_SHA_256";
export type KeyIdType = string;

export type KeyList = Array<KeyListEntry>;
export interface KeyListEntry {
  KeyId?: string;
  KeyArn?: string;
}
export type KeyManagerType = "AWS" | "CUSTOMER";
export type KeyMaterialDescriptionType = string;

export type KeyMaterialState = "NON_CURRENT" | "CURRENT" | "PENDING_ROTATION";
export interface KeyMetadata {
  AWSAccountId?: string;
  KeyId: string;
  Arn?: string;
  CreationDate?: Date | string;
  Enabled?: boolean;
  Description?: string;
  KeyUsage?: KeyUsageType;
  KeyState?: KeyState;
  DeletionDate?: Date | string;
  ValidTo?: Date | string;
  Origin?: OriginType;
  CustomKeyStoreId?: string;
  CloudHsmClusterId?: string;
  ExpirationModel?: ExpirationModelType;
  KeyManager?: KeyManagerType;
  CustomerMasterKeySpec?: CustomerMasterKeySpec;
  KeySpec?: KeySpec;
  EncryptionAlgorithms?: Array<EncryptionAlgorithmSpec>;
  SigningAlgorithms?: Array<SigningAlgorithmSpec>;
  KeyAgreementAlgorithms?: Array<KeyAgreementAlgorithmSpec>;
  MultiRegion?: boolean;
  MultiRegionConfiguration?: MultiRegionConfiguration;
  PendingDeletionWindowInDays?: number;
  MacAlgorithms?: Array<MacAlgorithmSpec>;
  XksKeyConfiguration?: XksKeyConfigurationType;
  CurrentKeyMaterialId?: string;
}
export type KeySpec = "RSA_2048" | "RSA_3072" | "RSA_4096" | "ECC_NIST_P256" | "ECC_NIST_P384" | "ECC_NIST_P521" | "ECC_SECG_P256K1" | "SYMMETRIC_DEFAULT" | "HMAC_224" | "HMAC_256" | "HMAC_384" | "HMAC_512" | "SM2" | "ML_DSA_44" | "ML_DSA_65" | "ML_DSA_87";
export type KeyState = "Creating" | "Enabled" | "Disabled" | "PendingDeletion" | "PendingImport" | "PendingReplicaDeletion" | "Unavailable" | "Updating";
export type KeyStorePasswordType = string;

export declare class KeyUnavailableException extends Data.TaggedError(
  "KeyUnavailableException",
)<{
  readonly message?: string;
}> {}
export type KeyUsageType = "SIGN_VERIFY" | "ENCRYPT_DECRYPT" | "GENERATE_VERIFY_MAC" | "KEY_AGREEMENT";
export declare class KMSInternalException extends Data.TaggedError(
  "KMSInternalException",
)<{
  readonly message?: string;
}> {}
export declare class KMSInvalidMacException extends Data.TaggedError(
  "KMSInvalidMacException",
)<{
  readonly message?: string;
}> {}
export declare class KMSInvalidSignatureException extends Data.TaggedError(
  "KMSInvalidSignatureException",
)<{
  readonly message?: string;
}> {}
export declare class KMSInvalidStateException extends Data.TaggedError(
  "KMSInvalidStateException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type LimitType = number;

export interface ListAliasesRequest {
  KeyId?: string;
  Limit?: number;
  Marker?: string;
}
export interface ListAliasesResponse {
  Aliases?: Array<AliasListEntry>;
  NextMarker?: string;
  Truncated?: boolean;
}
export interface ListGrantsRequest {
  Limit?: number;
  Marker?: string;
  KeyId: string;
  GrantId?: string;
  GranteePrincipal?: string;
}
export interface ListGrantsResponse {
  Grants?: Array<GrantListEntry>;
  NextMarker?: string;
  Truncated?: boolean;
}
export interface ListKeyPoliciesRequest {
  KeyId: string;
  Limit?: number;
  Marker?: string;
}
export interface ListKeyPoliciesResponse {
  PolicyNames?: Array<string>;
  NextMarker?: string;
  Truncated?: boolean;
}
export interface ListKeyRotationsRequest {
  KeyId: string;
  IncludeKeyMaterial?: IncludeKeyMaterial;
  Limit?: number;
  Marker?: string;
}
export interface ListKeyRotationsResponse {
  Rotations?: Array<RotationsListEntry>;
  NextMarker?: string;
  Truncated?: boolean;
}
export interface ListKeysRequest {
  Limit?: number;
  Marker?: string;
}
export interface ListKeysResponse {
  Keys?: Array<KeyListEntry>;
  NextMarker?: string;
  Truncated?: boolean;
}
export interface ListResourceTagsRequest {
  KeyId: string;
  Limit?: number;
  Marker?: string;
}
export interface ListResourceTagsResponse {
  Tags?: Array<Tag>;
  NextMarker?: string;
  Truncated?: boolean;
}
export interface ListRetirableGrantsRequest {
  Limit?: number;
  Marker?: string;
  RetiringPrincipal: string;
}
export type MacAlgorithmSpec = "HMAC_SHA_224" | "HMAC_SHA_256" | "HMAC_SHA_384" | "HMAC_SHA_512";
export type MacAlgorithmSpecList = Array<MacAlgorithmSpec>;
export declare class MalformedPolicyDocumentException extends Data.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly message?: string;
}> {}
export type MarkerType = string;

export type MessageType = "RAW" | "DIGEST" | "EXTERNAL_MU";
export interface MultiRegionConfiguration {
  MultiRegionKeyType?: MultiRegionKeyType;
  PrimaryKey?: MultiRegionKey;
  ReplicaKeys?: Array<MultiRegionKey>;
}
export interface MultiRegionKey {
  Arn?: string;
  Region?: string;
}
export type MultiRegionKeyList = Array<MultiRegionKey>;
export type MultiRegionKeyType = "PRIMARY" | "REPLICA";
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type NullableBooleanType = boolean;

export type NumberOfBytesType = number;

export type OriginType = "AWS_KMS" | "EXTERNAL" | "AWS_CLOUDHSM" | "EXTERNAL_KEY_STORE";
export type PendingWindowInDaysType = number;

export type PlaintextType = Uint8Array | string;

export type PolicyNameList = Array<string>;
export type PolicyNameType = string;

export type PolicyType = string;

export type PrincipalIdType = string;

export type PublicKeyType = Uint8Array | string;

export interface PutKeyPolicyRequest {
  KeyId: string;
  PolicyName?: string;
  Policy: string;
  BypassPolicyLockoutSafetyCheck?: boolean;
}
export interface RecipientInfo {
  KeyEncryptionAlgorithm?: KeyEncryptionMechanism;
  AttestationDocument?: Uint8Array | string;
}
export interface ReEncryptRequest {
  CiphertextBlob: Uint8Array | string;
  SourceEncryptionContext?: Record<string, string>;
  SourceKeyId?: string;
  DestinationKeyId: string;
  DestinationEncryptionContext?: Record<string, string>;
  SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec;
  DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec;
  GrantTokens?: Array<string>;
  DryRun?: boolean;
}
export interface ReEncryptResponse {
  CiphertextBlob?: Uint8Array | string;
  SourceKeyId?: string;
  KeyId?: string;
  SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec;
  DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec;
  SourceKeyMaterialId?: string;
  DestinationKeyMaterialId?: string;
}
export type RegionType = string;

export interface ReplicateKeyRequest {
  KeyId: string;
  ReplicaRegion: string;
  Policy?: string;
  BypassPolicyLockoutSafetyCheck?: boolean;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface ReplicateKeyResponse {
  ReplicaKeyMetadata?: KeyMetadata;
  ReplicaPolicy?: string;
  ReplicaTags?: Array<Tag>;
}
export interface RetireGrantRequest {
  GrantToken?: string;
  KeyId?: string;
  GrantId?: string;
  DryRun?: boolean;
}
export interface RevokeGrantRequest {
  KeyId: string;
  GrantId: string;
  DryRun?: boolean;
}
export interface RotateKeyOnDemandRequest {
  KeyId: string;
}
export interface RotateKeyOnDemandResponse {
  KeyId?: string;
}
export type RotationPeriodInDaysType = number;

export type RotationsList = Array<RotationsListEntry>;
export interface RotationsListEntry {
  KeyId?: string;
  KeyMaterialId?: string;
  KeyMaterialDescription?: string;
  ImportState?: ImportState;
  KeyMaterialState?: KeyMaterialState;
  ExpirationModel?: ExpirationModelType;
  ValidTo?: Date | string;
  RotationDate?: Date | string;
  RotationType?: RotationType;
}
export type RotationType = "AUTOMATIC" | "ON_DEMAND";
export interface ScheduleKeyDeletionRequest {
  KeyId: string;
  PendingWindowInDays?: number;
}
export interface ScheduleKeyDeletionResponse {
  KeyId?: string;
  DeletionDate?: Date | string;
  KeyState?: KeyState;
  PendingWindowInDays?: number;
}
export type SigningAlgorithmSpec = "RSASSA_PSS_SHA_256" | "RSASSA_PSS_SHA_384" | "RSASSA_PSS_SHA_512" | "RSASSA_PKCS1_V1_5_SHA_256" | "RSASSA_PKCS1_V1_5_SHA_384" | "RSASSA_PKCS1_V1_5_SHA_512" | "ECDSA_SHA_256" | "ECDSA_SHA_384" | "ECDSA_SHA_512" | "SM2DSA" | "ML_DSA_SHAKE_256";
export type SigningAlgorithmSpecList = Array<SigningAlgorithmSpec>;
export interface SignRequest {
  KeyId: string;
  Message: Uint8Array | string;
  MessageType?: MessageType;
  GrantTokens?: Array<string>;
  SigningAlgorithm: SigningAlgorithmSpec;
  DryRun?: boolean;
}
export interface SignResponse {
  KeyId?: string;
  Signature?: Uint8Array | string;
  SigningAlgorithm?: SigningAlgorithmSpec;
}
export interface Tag {
  TagKey: string;
  TagValue: string;
}
export declare class TagException extends Data.TaggedError(
  "TagException",
)<{
  readonly message?: string;
}> {}
export type TagKeyList = Array<string>;
export type TagKeyType = string;

export type TagList = Array<Tag>;
export interface TagResourceRequest {
  KeyId: string;
  Tags: Array<Tag>;
}
export type TagValueType = string;

export type TrustAnchorCertificateType = string;

export declare class UnsupportedOperationException extends Data.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  KeyId: string;
  TagKeys: Array<string>;
}
export interface UpdateAliasRequest {
  AliasName: string;
  TargetKeyId: string;
}
export interface UpdateCustomKeyStoreRequest {
  CustomKeyStoreId: string;
  NewCustomKeyStoreName?: string;
  KeyStorePassword?: string;
  CloudHsmClusterId?: string;
  XksProxyUriEndpoint?: string;
  XksProxyUriPath?: string;
  XksProxyVpcEndpointServiceName?: string;
  XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;
  XksProxyConnectivity?: XksProxyConnectivityType;
}
export interface UpdateCustomKeyStoreResponse {
}
export interface UpdateKeyDescriptionRequest {
  KeyId: string;
  Description: string;
}
export interface UpdatePrimaryRegionRequest {
  KeyId: string;
  PrimaryRegion: string;
}
export interface VerifyMacRequest {
  Message: Uint8Array | string;
  KeyId: string;
  MacAlgorithm: MacAlgorithmSpec;
  Mac: Uint8Array | string;
  GrantTokens?: Array<string>;
  DryRun?: boolean;
}
export interface VerifyMacResponse {
  KeyId?: string;
  MacValid?: boolean;
  MacAlgorithm?: MacAlgorithmSpec;
}
export interface VerifyRequest {
  KeyId: string;
  Message: Uint8Array | string;
  MessageType?: MessageType;
  Signature: Uint8Array | string;
  SigningAlgorithm: SigningAlgorithmSpec;
  GrantTokens?: Array<string>;
  DryRun?: boolean;
}
export interface VerifyResponse {
  KeyId?: string;
  SignatureValid?: boolean;
  SigningAlgorithm?: SigningAlgorithmSpec;
}
export type WrappingKeySpec = "RSA_2048" | "RSA_3072" | "RSA_4096" | "SM2";
export declare class XksKeyAlreadyInUseException extends Data.TaggedError(
  "XksKeyAlreadyInUseException",
)<{
  readonly message?: string;
}> {}
export interface XksKeyConfigurationType {
  Id?: string;
}
export type XksKeyIdType = string;

export declare class XksKeyInvalidConfigurationException extends Data.TaggedError(
  "XksKeyInvalidConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class XksKeyNotFoundException extends Data.TaggedError(
  "XksKeyNotFoundException",
)<{
  readonly message?: string;
}> {}
export type XksProxyAuthenticationAccessKeyIdType = string;

export interface XksProxyAuthenticationCredentialType {
  AccessKeyId: string;
  RawSecretAccessKey: string;
}
export type XksProxyAuthenticationRawSecretAccessKeyType = string;

export interface XksProxyConfigurationType {
  Connectivity?: XksProxyConnectivityType;
  AccessKeyId?: string;
  UriEndpoint?: string;
  UriPath?: string;
  VpcEndpointServiceName?: string;
}
export type XksProxyConnectivityType = "PUBLIC_ENDPOINT" | "VPC_ENDPOINT_SERVICE";
export declare class XksProxyIncorrectAuthenticationCredentialException extends Data.TaggedError(
  "XksProxyIncorrectAuthenticationCredentialException",
)<{
  readonly message?: string;
}> {}
export declare class XksProxyInvalidConfigurationException extends Data.TaggedError(
  "XksProxyInvalidConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class XksProxyInvalidResponseException extends Data.TaggedError(
  "XksProxyInvalidResponseException",
)<{
  readonly message?: string;
}> {}
export declare class XksProxyUriEndpointInUseException extends Data.TaggedError(
  "XksProxyUriEndpointInUseException",
)<{
  readonly message?: string;
}> {}
export type XksProxyUriEndpointType = string;

export declare class XksProxyUriInUseException extends Data.TaggedError(
  "XksProxyUriInUseException",
)<{
  readonly message?: string;
}> {}
export type XksProxyUriPathType = string;

export declare class XksProxyUriUnreachableException extends Data.TaggedError(
  "XksProxyUriUnreachableException",
)<{
  readonly message?: string;
}> {}
export declare class XksProxyVpcEndpointServiceInUseException extends Data.TaggedError(
  "XksProxyVpcEndpointServiceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class XksProxyVpcEndpointServiceInvalidConfigurationException extends Data.TaggedError(
  "XksProxyVpcEndpointServiceInvalidConfigurationException",
)<{
  readonly message?: string;
}> {}
export type XksProxyVpcEndpointServiceNameType = string;

export declare class XksProxyVpcEndpointServiceNotFoundException extends Data.TaggedError(
  "XksProxyVpcEndpointServiceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare namespace CancelKeyDeletion {
  export type Input = CancelKeyDeletionRequest;
  export type Output = CancelKeyDeletionResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ConnectCustomKeyStore {
  export type Input = ConnectCustomKeyStoreRequest;
  export type Output = ConnectCustomKeyStoreResponse;
  export type Error =
    | CloudHsmClusterInvalidConfigurationException
    | CloudHsmClusterNotActiveException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
    | CommonAwsError;
}

export declare namespace CreateAlias {
  export type Input = CreateAliasRequest;
  export type Output = {};
  export type Error =
    | AlreadyExistsException
    | DependencyTimeoutException
    | InvalidAliasNameException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace CreateCustomKeyStore {
  export type Input = CreateCustomKeyStoreRequest;
  export type Output = CreateCustomKeyStoreResponse;
  export type Error =
    | CloudHsmClusterInUseException
    | CloudHsmClusterInvalidConfigurationException
    | CloudHsmClusterNotActiveException
    | CloudHsmClusterNotFoundException
    | CustomKeyStoreNameInUseException
    | IncorrectTrustAnchorException
    | KMSInternalException
    | LimitExceededException
    | XksProxyIncorrectAuthenticationCredentialException
    | XksProxyInvalidConfigurationException
    | XksProxyInvalidResponseException
    | XksProxyUriEndpointInUseException
    | XksProxyUriInUseException
    | XksProxyUriUnreachableException
    | XksProxyVpcEndpointServiceInUseException
    | XksProxyVpcEndpointServiceInvalidConfigurationException
    | XksProxyVpcEndpointServiceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateGrant {
  export type Input = CreateGrantRequest;
  export type Output = CreateGrantResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidArnException
    | InvalidGrantTokenException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace CreateKey {
  export type Input = CreateKeyRequest;
  export type Output = CreateKeyResponse;
  export type Error =
    | CloudHsmClusterInvalidConfigurationException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | TagException
    | UnsupportedOperationException
    | XksKeyAlreadyInUseException
    | XksKeyInvalidConfigurationException
    | XksKeyNotFoundException
    | CommonAwsError;
}

export declare namespace Decrypt {
  export type Input = DecryptRequest;
  export type Output = DecryptResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | IncorrectKeyException
    | InvalidCiphertextException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteAlias {
  export type Input = DeleteAliasRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteCustomKeyStore {
  export type Input = DeleteCustomKeyStoreRequest;
  export type Output = DeleteCustomKeyStoreResponse;
  export type Error =
    | CustomKeyStoreHasCMKsException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
    | CommonAwsError;
}

export declare namespace DeleteImportedKeyMaterial {
  export type Input = DeleteImportedKeyMaterialRequest;
  export type Output = DeleteImportedKeyMaterialResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeriveSharedSecret {
  export type Input = DeriveSharedSecretRequest;
  export type Output = DeriveSharedSecretResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCustomKeyStores {
  export type Input = DescribeCustomKeyStoresRequest;
  export type Output = DescribeCustomKeyStoresResponse;
  export type Error =
    | CustomKeyStoreNotFoundException
    | InvalidMarkerException
    | KMSInternalException
    | CommonAwsError;
}

export declare namespace DescribeKey {
  export type Input = DescribeKeyRequest;
  export type Output = DescribeKeyResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DisableKey {
  export type Input = DisableKeyRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DisableKeyRotation {
  export type Input = DisableKeyRotationRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DisconnectCustomKeyStore {
  export type Input = DisconnectCustomKeyStoreRequest;
  export type Output = DisconnectCustomKeyStoreResponse;
  export type Error =
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
    | CommonAwsError;
}

export declare namespace EnableKey {
  export type Input = EnableKeyRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace EnableKeyRotation {
  export type Input = EnableKeyRotationRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace Encrypt {
  export type Input = EncryptRequest;
  export type Output = EncryptResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GenerateDataKey {
  export type Input = GenerateDataKeyRequest;
  export type Output = GenerateDataKeyResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GenerateDataKeyPair {
  export type Input = GenerateDataKeyPairRequest;
  export type Output = GenerateDataKeyPairResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GenerateDataKeyPairWithoutPlaintext {
  export type Input = GenerateDataKeyPairWithoutPlaintextRequest;
  export type Output = GenerateDataKeyPairWithoutPlaintextResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GenerateDataKeyWithoutPlaintext {
  export type Input = GenerateDataKeyWithoutPlaintextRequest;
  export type Output = GenerateDataKeyWithoutPlaintextResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GenerateMac {
  export type Input = GenerateMacRequest;
  export type Output = GenerateMacResponse;
  export type Error =
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GenerateRandom {
  export type Input = GenerateRandomRequest;
  export type Output = GenerateRandomResponse;
  export type Error =
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | DependencyTimeoutException
    | KMSInternalException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetKeyPolicy {
  export type Input = GetKeyPolicyRequest;
  export type Output = GetKeyPolicyResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetKeyRotationStatus {
  export type Input = GetKeyRotationStatusRequest;
  export type Output = GetKeyRotationStatusResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetParametersForImport {
  export type Input = GetParametersForImportRequest;
  export type Output = GetParametersForImportResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetPublicKey {
  export type Input = GetPublicKeyRequest;
  export type Output = GetPublicKeyResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ImportKeyMaterial {
  export type Input = ImportKeyMaterialRequest;
  export type Output = ImportKeyMaterialResponse;
  export type Error =
    | DependencyTimeoutException
    | ExpiredImportTokenException
    | IncorrectKeyMaterialException
    | InvalidArnException
    | InvalidCiphertextException
    | InvalidImportTokenException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListAliases {
  export type Input = ListAliasesRequest;
  export type Output = ListAliasesResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListGrants {
  export type Input = ListGrantsRequest;
  export type Output = ListGrantsResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | InvalidGrantIdException
    | InvalidMarkerException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListKeyPolicies {
  export type Input = ListKeyPoliciesRequest;
  export type Output = ListKeyPoliciesResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListKeyRotations {
  export type Input = ListKeyRotationsRequest;
  export type Output = ListKeyRotationsResponse;
  export type Error =
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListKeys {
  export type Input = ListKeysRequest;
  export type Output = ListKeysResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidMarkerException
    | KMSInternalException
    | CommonAwsError;
}

export declare namespace ListResourceTags {
  export type Input = ListResourceTagsRequest;
  export type Output = ListResourceTagsResponse;
  export type Error =
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListRetirableGrants {
  export type Input = ListRetirableGrantsRequest;
  export type Output = ListGrantsResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace PutKeyPolicy {
  export type Input = PutKeyPolicyRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ReEncrypt {
  export type Input = ReEncryptRequest;
  export type Output = ReEncryptResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | IncorrectKeyException
    | InvalidCiphertextException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ReplicateKey {
  export type Input = ReplicateKeyRequest;
  export type Output = ReplicateKeyResponse;
  export type Error =
    | AlreadyExistsException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NotFoundException
    | TagException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace RetireGrant {
  export type Input = RetireGrantRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | DryRunOperationException
    | InvalidArnException
    | InvalidGrantIdException
    | InvalidGrantTokenException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace RevokeGrant {
  export type Input = RevokeGrantRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | DryRunOperationException
    | InvalidArnException
    | InvalidGrantIdException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace RotateKeyOnDemand {
  export type Input = RotateKeyOnDemandRequest;
  export type Output = RotateKeyOnDemandResponse;
  export type Error =
    | ConflictException
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ScheduleKeyDeletion {
  export type Input = ScheduleKeyDeletionRequest;
  export type Output = ScheduleKeyDeletionResponse;
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace Sign {
  export type Input = SignRequest;
  export type Output = SignResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | TagException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | TagException
    | CommonAwsError;
}

export declare namespace UpdateAlias {
  export type Input = UpdateAliasRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateCustomKeyStore {
  export type Input = UpdateCustomKeyStoreRequest;
  export type Output = UpdateCustomKeyStoreResponse;
  export type Error =
    | CloudHsmClusterInvalidConfigurationException
    | CloudHsmClusterNotActiveException
    | CloudHsmClusterNotFoundException
    | CloudHsmClusterNotRelatedException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNameInUseException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
    | XksProxyIncorrectAuthenticationCredentialException
    | XksProxyInvalidConfigurationException
    | XksProxyInvalidResponseException
    | XksProxyUriEndpointInUseException
    | XksProxyUriInUseException
    | XksProxyUriUnreachableException
    | XksProxyVpcEndpointServiceInUseException
    | XksProxyVpcEndpointServiceInvalidConfigurationException
    | XksProxyVpcEndpointServiceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateKeyDescription {
  export type Input = UpdateKeyDescriptionRequest;
  export type Output = {};
  export type Error =
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdatePrimaryRegion {
  export type Input = UpdatePrimaryRegionRequest;
  export type Output = {};
  export type Error =
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace Verify {
  export type Input = VerifyRequest;
  export type Output = VerifyResponse;
  export type Error =
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidSignatureException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace VerifyMac {
  export type Input = VerifyMacRequest;
  export type Output = VerifyMacResponse;
  export type Error =
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidMacException
    | KMSInvalidStateException
    | NotFoundException
    | CommonAwsError;
}

