import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Cloudfront2020_05_31 {
  associateAlias(
    input: AssociateAliasRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | IllegalUpdate
    | InvalidArgument
    | NoSuchDistribution
    | TooManyDistributionCNAMEs
    | CommonAwsError
  >;
  associateDistributionTenantWebACL(
    input: AssociateDistributionTenantWebACLRequest,
  ): Effect.Effect<
    AssociateDistributionTenantWebACLResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError
  >;
  associateDistributionWebACL(
    input: AssociateDistributionWebACLRequest,
  ): Effect.Effect<
    AssociateDistributionWebACLResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError
  >;
  copyDistribution(
    input: CopyDistributionRequest,
  ): Effect.Effect<
    CopyDistributionResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | DistributionAlreadyExists
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidIfMatchVersion
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidProtocolSettings
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchDistribution
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributions
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  createAnycastIpList(
    input: CreateAnycastIpListRequest,
  ): Effect.Effect<
    CreateAnycastIpListResult,
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | InvalidArgument
    | InvalidTagging
    | UnsupportedOperation
    | CommonAwsError
  >;
  createCachePolicy(
    input: CreateCachePolicyRequest,
  ): Effect.Effect<
    CreateCachePolicyResult,
    | AccessDenied
    | CachePolicyAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | TooManyCachePolicies
    | TooManyCookiesInCachePolicy
    | TooManyHeadersInCachePolicy
    | TooManyQueryStringsInCachePolicy
    | CommonAwsError
  >;
  createCloudFrontOriginAccessIdentity(
    input: CreateCloudFrontOriginAccessIdentityRequest,
  ): Effect.Effect<
    CreateCloudFrontOriginAccessIdentityResult,
    | CloudFrontOriginAccessIdentityAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | MissingBody
    | TooManyCloudFrontOriginAccessIdentities
    | CommonAwsError
  >;
  createConnectionGroup(
    input: CreateConnectionGroupRequest,
  ): Effect.Effect<
    CreateConnectionGroupResult,
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidTagging
    | CommonAwsError
  >;
  createContinuousDeploymentPolicy(
    input: CreateContinuousDeploymentPolicyRequest,
  ): Effect.Effect<
    CreateContinuousDeploymentPolicyResult,
    | AccessDenied
    | ContinuousDeploymentPolicyAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | StagingDistributionInUse
    | TooManyContinuousDeploymentPolicies
    | CommonAwsError
  >;
  createDistribution(
    input: CreateDistributionRequest,
  ): Effect.Effect<
    CreateDistributionResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | ContinuousDeploymentPolicyInUse
    | DistributionAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalOriginAccessConfiguration
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidDomainNameForOriginAccessControl
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidProtocolSettings
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchContinuousDeploymentPolicy
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributions
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  createDistributionTenant(
    input: CreateDistributionTenantRequest,
  ): Effect.Effect<
    CreateDistributionTenantResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidAssociation
    | InvalidTagging
    | CommonAwsError
  >;
  createDistributionWithTags(
    input: CreateDistributionWithTagsRequest,
  ): Effect.Effect<
    CreateDistributionWithTagsResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | ContinuousDeploymentPolicyInUse
    | DistributionAlreadyExists
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalOriginAccessConfiguration
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidDomainNameForOriginAccessControl
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidProtocolSettings
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTagging
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchContinuousDeploymentPolicy
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributions
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  createFieldLevelEncryptionConfig(
    input: CreateFieldLevelEncryptionConfigRequest,
  ): Effect.Effect<
    CreateFieldLevelEncryptionConfigResult,
    | FieldLevelEncryptionConfigAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | NoSuchFieldLevelEncryptionProfile
    | QueryArgProfileEmpty
    | TooManyFieldLevelEncryptionConfigs
    | TooManyFieldLevelEncryptionContentTypeProfiles
    | TooManyFieldLevelEncryptionQueryArgProfiles
    | CommonAwsError
  >;
  createFieldLevelEncryptionProfile(
    input: CreateFieldLevelEncryptionProfileRequest,
  ): Effect.Effect<
    CreateFieldLevelEncryptionProfileResult,
    | FieldLevelEncryptionProfileAlreadyExists
    | FieldLevelEncryptionProfileSizeExceeded
    | InconsistentQuantities
    | InvalidArgument
    | NoSuchPublicKey
    | TooManyFieldLevelEncryptionEncryptionEntities
    | TooManyFieldLevelEncryptionFieldPatterns
    | TooManyFieldLevelEncryptionProfiles
    | CommonAwsError
  >;
  createFunction(
    input: CreateFunctionRequest,
  ): Effect.Effect<
    CreateFunctionResult,
    | FunctionAlreadyExists
    | FunctionSizeLimitExceeded
    | InvalidArgument
    | TooManyFunctions
    | UnsupportedOperation
    | CommonAwsError
  >;
  createInvalidation(
    input: CreateInvalidationRequest,
  ): Effect.Effect<
    CreateInvalidationResult,
    | AccessDenied
    | BatchTooLarge
    | InconsistentQuantities
    | InvalidArgument
    | MissingBody
    | NoSuchDistribution
    | TooManyInvalidationsInProgress
    | CommonAwsError
  >;
  createInvalidationForDistributionTenant(
    input: CreateInvalidationForDistributionTenantRequest,
  ): Effect.Effect<
    CreateInvalidationForDistributionTenantResult,
    | AccessDenied
    | BatchTooLarge
    | EntityNotFound
    | InconsistentQuantities
    | InvalidArgument
    | MissingBody
    | TooManyInvalidationsInProgress
    | CommonAwsError
  >;
  createKeyGroup(
    input: CreateKeyGroupRequest,
  ): Effect.Effect<
    CreateKeyGroupResult,
    | InvalidArgument
    | KeyGroupAlreadyExists
    | TooManyKeyGroups
    | TooManyPublicKeysInKeyGroup
    | CommonAwsError
  >;
  createKeyValueStore(
    input: CreateKeyValueStoreRequest,
  ): Effect.Effect<
    CreateKeyValueStoreResult,
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntitySizeLimitExceeded
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  createMonitoringSubscription(
    input: CreateMonitoringSubscriptionRequest,
  ): Effect.Effect<
    CreateMonitoringSubscriptionResult,
    | AccessDenied
    | MonitoringSubscriptionAlreadyExists
    | NoSuchDistribution
    | UnsupportedOperation
    | CommonAwsError
  >;
  createOriginAccessControl(
    input: CreateOriginAccessControlRequest,
  ): Effect.Effect<
    CreateOriginAccessControlResult,
    | InvalidArgument
    | OriginAccessControlAlreadyExists
    | TooManyOriginAccessControls
    | CommonAwsError
  >;
  createOriginRequestPolicy(
    input: CreateOriginRequestPolicyRequest,
  ): Effect.Effect<
    CreateOriginRequestPolicyResult,
    | AccessDenied
    | InconsistentQuantities
    | InvalidArgument
    | OriginRequestPolicyAlreadyExists
    | TooManyCookiesInOriginRequestPolicy
    | TooManyHeadersInOriginRequestPolicy
    | TooManyOriginRequestPolicies
    | TooManyQueryStringsInOriginRequestPolicy
    | CommonAwsError
  >;
  createPublicKey(
    input: CreatePublicKeyRequest,
  ): Effect.Effect<
    CreatePublicKeyResult,
    | InvalidArgument
    | PublicKeyAlreadyExists
    | TooManyPublicKeys
    | CommonAwsError
  >;
  createRealtimeLogConfig(
    input: CreateRealtimeLogConfigRequest,
  ): Effect.Effect<
    CreateRealtimeLogConfigResult,
    | AccessDenied
    | InvalidArgument
    | RealtimeLogConfigAlreadyExists
    | TooManyRealtimeLogConfigs
    | CommonAwsError
  >;
  createResponseHeadersPolicy(
    input: CreateResponseHeadersPolicyRequest,
  ): Effect.Effect<
    CreateResponseHeadersPolicyResult,
    | AccessDenied
    | InconsistentQuantities
    | InvalidArgument
    | ResponseHeadersPolicyAlreadyExists
    | TooLongCSPInResponseHeadersPolicy
    | TooManyCustomHeadersInResponseHeadersPolicy
    | TooManyRemoveHeadersInResponseHeadersPolicy
    | TooManyResponseHeadersPolicies
    | CommonAwsError
  >;
  createStreamingDistribution(
    input: CreateStreamingDistributionRequest,
  ): Effect.Effect<
    CreateStreamingDistributionResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | MissingBody
    | StreamingDistributionAlreadyExists
    | TooManyStreamingDistributionCNAMEs
    | TooManyStreamingDistributions
    | TooManyTrustedSigners
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  createStreamingDistributionWithTags(
    input: CreateStreamingDistributionWithTagsRequest,
  ): Effect.Effect<
    CreateStreamingDistributionWithTagsResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidTagging
    | MissingBody
    | StreamingDistributionAlreadyExists
    | TooManyStreamingDistributionCNAMEs
    | TooManyStreamingDistributions
    | TooManyTrustedSigners
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  createVpcOrigin(
    input: CreateVpcOriginRequest,
  ): Effect.Effect<
    CreateVpcOriginResult,
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | InconsistentQuantities
    | InvalidArgument
    | InvalidTagging
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteAnycastIpList(
    input: DeleteAnycastIpListRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | IllegalDelete
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteCachePolicy(
    input: DeleteCachePolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | CachePolicyInUse
    | IllegalDelete
    | InvalidIfMatchVersion
    | NoSuchCachePolicy
    | PreconditionFailed
    | CommonAwsError
  >;
  deleteCloudFrontOriginAccessIdentity(
    input: DeleteCloudFrontOriginAccessIdentityRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | CloudFrontOriginAccessIdentityInUse
    | InvalidIfMatchVersion
    | NoSuchCloudFrontOriginAccessIdentity
    | PreconditionFailed
    | CommonAwsError
  >;
  deleteConnectionGroup(
    input: DeleteConnectionGroupRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | InvalidIfMatchVersion
    | PreconditionFailed
    | ResourceNotDisabled
    | CommonAwsError
  >;
  deleteContinuousDeploymentPolicy(
    input: DeleteContinuousDeploymentPolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | ContinuousDeploymentPolicyInUse
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchContinuousDeploymentPolicy
    | PreconditionFailed
    | CommonAwsError
  >;
  deleteDistribution(
    input: DeleteDistributionRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | DistributionNotDisabled
    | InvalidIfMatchVersion
    | NoSuchDistribution
    | PreconditionFailed
    | ResourceInUse
    | CommonAwsError
  >;
  deleteDistributionTenant(
    input: DeleteDistributionTenantRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | EntityNotFound
    | InvalidIfMatchVersion
    | PreconditionFailed
    | ResourceNotDisabled
    | CommonAwsError
  >;
  deleteFieldLevelEncryptionConfig(
    input: DeleteFieldLevelEncryptionConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | FieldLevelEncryptionConfigInUse
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionConfig
    | PreconditionFailed
    | CommonAwsError
  >;
  deleteFieldLevelEncryptionProfile(
    input: DeleteFieldLevelEncryptionProfileRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | FieldLevelEncryptionProfileInUse
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionProfile
    | PreconditionFailed
    | CommonAwsError
  >;
  deleteFunction(
    input: DeleteFunctionRequest,
  ): Effect.Effect<
    {},
    | FunctionInUse
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteKeyGroup(
    input: DeleteKeyGroupRequest,
  ): Effect.Effect<
    {},
    | InvalidIfMatchVersion
    | NoSuchResource
    | PreconditionFailed
    | ResourceInUse
    | CommonAwsError
  >;
  deleteKeyValueStore(
    input: DeleteKeyValueStoreRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteMonitoringSubscription(
    input: DeleteMonitoringSubscriptionRequest,
  ): Effect.Effect<
    DeleteMonitoringSubscriptionResult,
    | AccessDenied
    | NoSuchDistribution
    | NoSuchMonitoringSubscription
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteOriginAccessControl(
    input: DeleteOriginAccessControlRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | InvalidIfMatchVersion
    | NoSuchOriginAccessControl
    | OriginAccessControlInUse
    | PreconditionFailed
    | CommonAwsError
  >;
  deleteOriginRequestPolicy(
    input: DeleteOriginRequestPolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | IllegalDelete
    | InvalidIfMatchVersion
    | NoSuchOriginRequestPolicy
    | OriginRequestPolicyInUse
    | PreconditionFailed
    | CommonAwsError
  >;
  deletePublicKey(
    input: DeletePublicKeyRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | InvalidIfMatchVersion
    | NoSuchPublicKey
    | PreconditionFailed
    | PublicKeyInUse
    | CommonAwsError
  >;
  deleteRealtimeLogConfig(
    input: DeleteRealtimeLogConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | InvalidArgument
    | NoSuchRealtimeLogConfig
    | RealtimeLogConfigInUse
    | CommonAwsError
  >;
  deleteResponseHeadersPolicy(
    input: DeleteResponseHeadersPolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | IllegalDelete
    | InvalidIfMatchVersion
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | ResponseHeadersPolicyInUse
    | CommonAwsError
  >;
  deleteStreamingDistribution(
    input: DeleteStreamingDistributionRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | InvalidIfMatchVersion
    | NoSuchStreamingDistribution
    | PreconditionFailed
    | StreamingDistributionNotDisabled
    | CommonAwsError
  >;
  deleteVpcOrigin(
    input: DeleteVpcOriginRequest,
  ): Effect.Effect<
    DeleteVpcOriginResult,
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | IllegalDelete
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  describeFunction(
    input: DescribeFunctionRequest,
  ): Effect.Effect<
    DescribeFunctionResult,
    NoSuchFunctionExists | UnsupportedOperation | CommonAwsError
  >;
  describeKeyValueStore(
    input: DescribeKeyValueStoreRequest,
  ): Effect.Effect<
    DescribeKeyValueStoreResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  disassociateDistributionTenantWebACL(
    input: DisassociateDistributionTenantWebACLRequest,
  ): Effect.Effect<
    DisassociateDistributionTenantWebACLResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError
  >;
  disassociateDistributionWebACL(
    input: DisassociateDistributionWebACLRequest,
  ): Effect.Effect<
    DisassociateDistributionWebACLResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError
  >;
  getAnycastIpList(
    input: GetAnycastIpListRequest,
  ): Effect.Effect<
    GetAnycastIpListResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  getCachePolicy(
    input: GetCachePolicyRequest,
  ): Effect.Effect<
    GetCachePolicyResult,
    AccessDenied | NoSuchCachePolicy | CommonAwsError
  >;
  getCachePolicyConfig(
    input: GetCachePolicyConfigRequest,
  ): Effect.Effect<
    GetCachePolicyConfigResult,
    AccessDenied | NoSuchCachePolicy | CommonAwsError
  >;
  getCloudFrontOriginAccessIdentity(
    input: GetCloudFrontOriginAccessIdentityRequest,
  ): Effect.Effect<
    GetCloudFrontOriginAccessIdentityResult,
    AccessDenied | NoSuchCloudFrontOriginAccessIdentity | CommonAwsError
  >;
  getCloudFrontOriginAccessIdentityConfig(
    input: GetCloudFrontOriginAccessIdentityConfigRequest,
  ): Effect.Effect<
    GetCloudFrontOriginAccessIdentityConfigResult,
    AccessDenied | NoSuchCloudFrontOriginAccessIdentity | CommonAwsError
  >;
  getConnectionGroup(
    input: GetConnectionGroupRequest,
  ): Effect.Effect<
    GetConnectionGroupResult,
    AccessDenied | EntityNotFound | CommonAwsError
  >;
  getConnectionGroupByRoutingEndpoint(
    input: GetConnectionGroupByRoutingEndpointRequest,
  ): Effect.Effect<
    GetConnectionGroupByRoutingEndpointResult,
    AccessDenied | EntityNotFound | CommonAwsError
  >;
  getContinuousDeploymentPolicy(
    input: GetContinuousDeploymentPolicyRequest,
  ): Effect.Effect<
    GetContinuousDeploymentPolicyResult,
    AccessDenied | NoSuchContinuousDeploymentPolicy | CommonAwsError
  >;
  getContinuousDeploymentPolicyConfig(
    input: GetContinuousDeploymentPolicyConfigRequest,
  ): Effect.Effect<
    GetContinuousDeploymentPolicyConfigResult,
    AccessDenied | NoSuchContinuousDeploymentPolicy | CommonAwsError
  >;
  getDistribution(
    input: GetDistributionRequest,
  ): Effect.Effect<
    GetDistributionResult,
    AccessDenied | NoSuchDistribution | CommonAwsError
  >;
  getDistributionConfig(
    input: GetDistributionConfigRequest,
  ): Effect.Effect<
    GetDistributionConfigResult,
    AccessDenied | NoSuchDistribution | CommonAwsError
  >;
  getDistributionTenant(
    input: GetDistributionTenantRequest,
  ): Effect.Effect<
    GetDistributionTenantResult,
    AccessDenied | EntityNotFound | CommonAwsError
  >;
  getDistributionTenantByDomain(
    input: GetDistributionTenantByDomainRequest,
  ): Effect.Effect<
    GetDistributionTenantByDomainResult,
    AccessDenied | EntityNotFound | CommonAwsError
  >;
  getFieldLevelEncryption(
    input: GetFieldLevelEncryptionRequest,
  ): Effect.Effect<
    GetFieldLevelEncryptionResult,
    AccessDenied | NoSuchFieldLevelEncryptionConfig | CommonAwsError
  >;
  getFieldLevelEncryptionConfig(
    input: GetFieldLevelEncryptionConfigRequest,
  ): Effect.Effect<
    GetFieldLevelEncryptionConfigResult,
    AccessDenied | NoSuchFieldLevelEncryptionConfig | CommonAwsError
  >;
  getFieldLevelEncryptionProfile(
    input: GetFieldLevelEncryptionProfileRequest,
  ): Effect.Effect<
    GetFieldLevelEncryptionProfileResult,
    AccessDenied | NoSuchFieldLevelEncryptionProfile | CommonAwsError
  >;
  getFieldLevelEncryptionProfileConfig(
    input: GetFieldLevelEncryptionProfileConfigRequest,
  ): Effect.Effect<
    GetFieldLevelEncryptionProfileConfigResult,
    AccessDenied | NoSuchFieldLevelEncryptionProfile | CommonAwsError
  >;
  getFunction(
    input: GetFunctionRequest,
  ): Effect.Effect<
    GetFunctionResult,
    NoSuchFunctionExists | UnsupportedOperation | CommonAwsError
  >;
  getInvalidation(
    input: GetInvalidationRequest,
  ): Effect.Effect<
    GetInvalidationResult,
    AccessDenied | NoSuchDistribution | NoSuchInvalidation | CommonAwsError
  >;
  getInvalidationForDistributionTenant(
    input: GetInvalidationForDistributionTenantRequest,
  ): Effect.Effect<
    GetInvalidationForDistributionTenantResult,
    AccessDenied | EntityNotFound | NoSuchInvalidation | CommonAwsError
  >;
  getKeyGroup(
    input: GetKeyGroupRequest,
  ): Effect.Effect<GetKeyGroupResult, NoSuchResource | CommonAwsError>;
  getKeyGroupConfig(
    input: GetKeyGroupConfigRequest,
  ): Effect.Effect<GetKeyGroupConfigResult, NoSuchResource | CommonAwsError>;
  getManagedCertificateDetails(
    input: GetManagedCertificateDetailsRequest,
  ): Effect.Effect<
    GetManagedCertificateDetailsResult,
    AccessDenied | EntityNotFound | CommonAwsError
  >;
  getMonitoringSubscription(
    input: GetMonitoringSubscriptionRequest,
  ): Effect.Effect<
    GetMonitoringSubscriptionResult,
    | AccessDenied
    | NoSuchDistribution
    | NoSuchMonitoringSubscription
    | UnsupportedOperation
    | CommonAwsError
  >;
  getOriginAccessControl(
    input: GetOriginAccessControlRequest,
  ): Effect.Effect<
    GetOriginAccessControlResult,
    AccessDenied | NoSuchOriginAccessControl | CommonAwsError
  >;
  getOriginAccessControlConfig(
    input: GetOriginAccessControlConfigRequest,
  ): Effect.Effect<
    GetOriginAccessControlConfigResult,
    AccessDenied | NoSuchOriginAccessControl | CommonAwsError
  >;
  getOriginRequestPolicy(
    input: GetOriginRequestPolicyRequest,
  ): Effect.Effect<
    GetOriginRequestPolicyResult,
    AccessDenied | NoSuchOriginRequestPolicy | CommonAwsError
  >;
  getOriginRequestPolicyConfig(
    input: GetOriginRequestPolicyConfigRequest,
  ): Effect.Effect<
    GetOriginRequestPolicyConfigResult,
    AccessDenied | NoSuchOriginRequestPolicy | CommonAwsError
  >;
  getPublicKey(
    input: GetPublicKeyRequest,
  ): Effect.Effect<
    GetPublicKeyResult,
    AccessDenied | NoSuchPublicKey | CommonAwsError
  >;
  getPublicKeyConfig(
    input: GetPublicKeyConfigRequest,
  ): Effect.Effect<
    GetPublicKeyConfigResult,
    AccessDenied | NoSuchPublicKey | CommonAwsError
  >;
  getRealtimeLogConfig(
    input: GetRealtimeLogConfigRequest,
  ): Effect.Effect<
    GetRealtimeLogConfigResult,
    AccessDenied | InvalidArgument | NoSuchRealtimeLogConfig | CommonAwsError
  >;
  getResponseHeadersPolicy(
    input: GetResponseHeadersPolicyRequest,
  ): Effect.Effect<
    GetResponseHeadersPolicyResult,
    AccessDenied | NoSuchResponseHeadersPolicy | CommonAwsError
  >;
  getResponseHeadersPolicyConfig(
    input: GetResponseHeadersPolicyConfigRequest,
  ): Effect.Effect<
    GetResponseHeadersPolicyConfigResult,
    AccessDenied | NoSuchResponseHeadersPolicy | CommonAwsError
  >;
  getStreamingDistribution(
    input: GetStreamingDistributionRequest,
  ): Effect.Effect<
    GetStreamingDistributionResult,
    AccessDenied | NoSuchStreamingDistribution | CommonAwsError
  >;
  getStreamingDistributionConfig(
    input: GetStreamingDistributionConfigRequest,
  ): Effect.Effect<
    GetStreamingDistributionConfigResult,
    AccessDenied | NoSuchStreamingDistribution | CommonAwsError
  >;
  getVpcOrigin(
    input: GetVpcOriginRequest,
  ): Effect.Effect<
    GetVpcOriginResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  listAnycastIpLists(
    input: ListAnycastIpListsRequest,
  ): Effect.Effect<
    ListAnycastIpListsResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  listCachePolicies(
    input: ListCachePoliciesRequest,
  ): Effect.Effect<
    ListCachePoliciesResult,
    AccessDenied | InvalidArgument | NoSuchCachePolicy | CommonAwsError
  >;
  listCloudFrontOriginAccessIdentities(
    input: ListCloudFrontOriginAccessIdentitiesRequest,
  ): Effect.Effect<
    ListCloudFrontOriginAccessIdentitiesResult,
    InvalidArgument | CommonAwsError
  >;
  listConflictingAliases(
    input: ListConflictingAliasesRequest,
  ): Effect.Effect<
    ListConflictingAliasesResult,
    InvalidArgument | NoSuchDistribution | CommonAwsError
  >;
  listConnectionGroups(
    input: ListConnectionGroupsRequest,
  ): Effect.Effect<
    ListConnectionGroupsResult,
    AccessDenied | EntityNotFound | InvalidArgument | CommonAwsError
  >;
  listContinuousDeploymentPolicies(
    input: ListContinuousDeploymentPoliciesRequest,
  ): Effect.Effect<
    ListContinuousDeploymentPoliciesResult,
    | AccessDenied
    | InvalidArgument
    | NoSuchContinuousDeploymentPolicy
    | CommonAwsError
  >;
  listDistributions(
    input: ListDistributionsRequest,
  ): Effect.Effect<ListDistributionsResult, InvalidArgument | CommonAwsError>;
  listDistributionsByAnycastIpListId(
    input: ListDistributionsByAnycastIpListIdRequest,
  ): Effect.Effect<
    ListDistributionsByAnycastIpListIdResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  listDistributionsByCachePolicyId(
    input: ListDistributionsByCachePolicyIdRequest,
  ): Effect.Effect<
    ListDistributionsByCachePolicyIdResult,
    AccessDenied | InvalidArgument | NoSuchCachePolicy | CommonAwsError
  >;
  listDistributionsByConnectionMode(
    input: ListDistributionsByConnectionModeRequest,
  ): Effect.Effect<
    ListDistributionsByConnectionModeResult,
    AccessDenied | InvalidArgument | CommonAwsError
  >;
  listDistributionsByKeyGroup(
    input: ListDistributionsByKeyGroupRequest,
  ): Effect.Effect<
    ListDistributionsByKeyGroupResult,
    InvalidArgument | NoSuchResource | CommonAwsError
  >;
  listDistributionsByOriginRequestPolicyId(
    input: ListDistributionsByOriginRequestPolicyIdRequest,
  ): Effect.Effect<
    ListDistributionsByOriginRequestPolicyIdResult,
    AccessDenied | InvalidArgument | NoSuchOriginRequestPolicy | CommonAwsError
  >;
  listDistributionsByRealtimeLogConfig(
    input: ListDistributionsByRealtimeLogConfigRequest,
  ): Effect.Effect<
    ListDistributionsByRealtimeLogConfigResult,
    InvalidArgument | CommonAwsError
  >;
  listDistributionsByResponseHeadersPolicyId(
    input: ListDistributionsByResponseHeadersPolicyIdRequest,
  ): Effect.Effect<
    ListDistributionsByResponseHeadersPolicyIdResult,
    | AccessDenied
    | InvalidArgument
    | NoSuchResponseHeadersPolicy
    | CommonAwsError
  >;
  listDistributionsByVpcOriginId(
    input: ListDistributionsByVpcOriginIdRequest,
  ): Effect.Effect<
    ListDistributionsByVpcOriginIdResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  listDistributionsByWebACLId(
    input: ListDistributionsByWebACLIdRequest,
  ): Effect.Effect<
    ListDistributionsByWebACLIdResult,
    InvalidArgument | InvalidWebACLId | CommonAwsError
  >;
  listDistributionTenants(
    input: ListDistributionTenantsRequest,
  ): Effect.Effect<
    ListDistributionTenantsResult,
    AccessDenied | EntityNotFound | InvalidArgument | CommonAwsError
  >;
  listDistributionTenantsByCustomization(
    input: ListDistributionTenantsByCustomizationRequest,
  ): Effect.Effect<
    ListDistributionTenantsByCustomizationResult,
    AccessDenied | EntityNotFound | InvalidArgument | CommonAwsError
  >;
  listDomainConflicts(
    input: ListDomainConflictsRequest,
  ): Effect.Effect<
    ListDomainConflictsResult,
    AccessDenied | EntityNotFound | InvalidArgument | CommonAwsError
  >;
  listFieldLevelEncryptionConfigs(
    input: ListFieldLevelEncryptionConfigsRequest,
  ): Effect.Effect<
    ListFieldLevelEncryptionConfigsResult,
    InvalidArgument | CommonAwsError
  >;
  listFieldLevelEncryptionProfiles(
    input: ListFieldLevelEncryptionProfilesRequest,
  ): Effect.Effect<
    ListFieldLevelEncryptionProfilesResult,
    InvalidArgument | CommonAwsError
  >;
  listFunctions(
    input: ListFunctionsRequest,
  ): Effect.Effect<
    ListFunctionsResult,
    InvalidArgument | UnsupportedOperation | CommonAwsError
  >;
  listInvalidations(
    input: ListInvalidationsRequest,
  ): Effect.Effect<
    ListInvalidationsResult,
    AccessDenied | InvalidArgument | NoSuchDistribution | CommonAwsError
  >;
  listInvalidationsForDistributionTenant(
    input: ListInvalidationsForDistributionTenantRequest,
  ): Effect.Effect<
    ListInvalidationsForDistributionTenantResult,
    AccessDenied | EntityNotFound | InvalidArgument | CommonAwsError
  >;
  listKeyGroups(
    input: ListKeyGroupsRequest,
  ): Effect.Effect<ListKeyGroupsResult, InvalidArgument | CommonAwsError>;
  listKeyValueStores(
    input: ListKeyValueStoresRequest,
  ): Effect.Effect<
    ListKeyValueStoresResult,
    AccessDenied | InvalidArgument | UnsupportedOperation | CommonAwsError
  >;
  listOriginAccessControls(
    input: ListOriginAccessControlsRequest,
  ): Effect.Effect<
    ListOriginAccessControlsResult,
    InvalidArgument | CommonAwsError
  >;
  listOriginRequestPolicies(
    input: ListOriginRequestPoliciesRequest,
  ): Effect.Effect<
    ListOriginRequestPoliciesResult,
    AccessDenied | InvalidArgument | NoSuchOriginRequestPolicy | CommonAwsError
  >;
  listPublicKeys(
    input: ListPublicKeysRequest,
  ): Effect.Effect<ListPublicKeysResult, InvalidArgument | CommonAwsError>;
  listRealtimeLogConfigs(
    input: ListRealtimeLogConfigsRequest,
  ): Effect.Effect<
    ListRealtimeLogConfigsResult,
    AccessDenied | InvalidArgument | NoSuchRealtimeLogConfig | CommonAwsError
  >;
  listResponseHeadersPolicies(
    input: ListResponseHeadersPoliciesRequest,
  ): Effect.Effect<
    ListResponseHeadersPoliciesResult,
    | AccessDenied
    | InvalidArgument
    | NoSuchResponseHeadersPolicy
    | CommonAwsError
  >;
  listStreamingDistributions(
    input: ListStreamingDistributionsRequest,
  ): Effect.Effect<
    ListStreamingDistributionsResult,
    InvalidArgument | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResult,
    | AccessDenied
    | InvalidArgument
    | InvalidTagging
    | NoSuchResource
    | CommonAwsError
  >;
  listVpcOrigins(
    input: ListVpcOriginsRequest,
  ): Effect.Effect<
    ListVpcOriginsResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError
  >;
  publishFunction(
    input: PublishFunctionRequest,
  ): Effect.Effect<
    PublishFunctionResult,
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | InvalidArgument
    | InvalidTagging
    | NoSuchResource
    | CommonAwsError
  >;
  testFunction(
    input: TestFunctionRequest,
  ): Effect.Effect<
    TestFunctionResult,
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | TestFunctionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDenied
    | InvalidArgument
    | InvalidTagging
    | NoSuchResource
    | CommonAwsError
  >;
  updateCachePolicy(
    input: UpdateCachePolicyRequest,
  ): Effect.Effect<
    UpdateCachePolicyResult,
    | AccessDenied
    | CachePolicyAlreadyExists
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchCachePolicy
    | PreconditionFailed
    | TooManyCookiesInCachePolicy
    | TooManyHeadersInCachePolicy
    | TooManyQueryStringsInCachePolicy
    | CommonAwsError
  >;
  updateCloudFrontOriginAccessIdentity(
    input: UpdateCloudFrontOriginAccessIdentityRequest,
  ): Effect.Effect<
    UpdateCloudFrontOriginAccessIdentityResult,
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | MissingBody
    | NoSuchCloudFrontOriginAccessIdentity
    | PreconditionFailed
    | CommonAwsError
  >;
  updateConnectionGroup(
    input: UpdateConnectionGroupRequest,
  ): Effect.Effect<
    UpdateConnectionGroupResult,
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | ResourceInUse
    | CommonAwsError
  >;
  updateContinuousDeploymentPolicy(
    input: UpdateContinuousDeploymentPolicyRequest,
  ): Effect.Effect<
    UpdateContinuousDeploymentPolicyResult,
    | AccessDenied
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchContinuousDeploymentPolicy
    | PreconditionFailed
    | StagingDistributionInUse
    | CommonAwsError
  >;
  updateDistribution(
    input: UpdateDistributionRequest,
  ): Effect.Effect<
    UpdateDistributionResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | ContinuousDeploymentPolicyInUse
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalOriginAccessConfiguration
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidDomainNameForOriginAccessControl
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidIfMatchVersion
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchContinuousDeploymentPolicy
    | NoSuchDistribution
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | RealtimeLogConfigOwnerMismatch
    | StagingDistributionInUse
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  updateDistributionTenant(
    input: UpdateDistributionTenantRequest,
  ): Effect.Effect<
    UpdateDistributionTenantResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidAssociation
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError
  >;
  updateDistributionWithStagingConfig(
    input: UpdateDistributionWithStagingConfigRequest,
  ): Effect.Effect<
    UpdateDistributionWithStagingConfigResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidIfMatchVersion
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchDistribution
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  updateDomainAssociation(
    input: UpdateDomainAssociationRequest,
  ): Effect.Effect<
    UpdateDomainAssociationResult,
    | AccessDenied
    | EntityNotFound
    | IllegalUpdate
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError
  >;
  updateFieldLevelEncryptionConfig(
    input: UpdateFieldLevelEncryptionConfigRequest,
  ): Effect.Effect<
    UpdateFieldLevelEncryptionConfigResult,
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchFieldLevelEncryptionProfile
    | PreconditionFailed
    | QueryArgProfileEmpty
    | TooManyFieldLevelEncryptionContentTypeProfiles
    | TooManyFieldLevelEncryptionQueryArgProfiles
    | CommonAwsError
  >;
  updateFieldLevelEncryptionProfile(
    input: UpdateFieldLevelEncryptionProfileRequest,
  ): Effect.Effect<
    UpdateFieldLevelEncryptionProfileResult,
    | AccessDenied
    | FieldLevelEncryptionProfileAlreadyExists
    | FieldLevelEncryptionProfileSizeExceeded
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionProfile
    | NoSuchPublicKey
    | PreconditionFailed
    | TooManyFieldLevelEncryptionEncryptionEntities
    | TooManyFieldLevelEncryptionFieldPatterns
    | CommonAwsError
  >;
  updateFunction(
    input: UpdateFunctionRequest,
  ): Effect.Effect<
    UpdateFunctionResult,
    | FunctionSizeLimitExceeded
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  updateKeyGroup(
    input: UpdateKeyGroupRequest,
  ): Effect.Effect<
    UpdateKeyGroupResult,
    | InvalidArgument
    | InvalidIfMatchVersion
    | KeyGroupAlreadyExists
    | NoSuchResource
    | PreconditionFailed
    | TooManyPublicKeysInKeyGroup
    | CommonAwsError
  >;
  updateKeyValueStore(
    input: UpdateKeyValueStoreRequest,
  ): Effect.Effect<
    UpdateKeyValueStoreResult,
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  updateOriginAccessControl(
    input: UpdateOriginAccessControlRequest,
  ): Effect.Effect<
    UpdateOriginAccessControlResult,
    | AccessDenied
    | IllegalUpdate
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchOriginAccessControl
    | OriginAccessControlAlreadyExists
    | PreconditionFailed
    | CommonAwsError
  >;
  updateOriginRequestPolicy(
    input: UpdateOriginRequestPolicyRequest,
  ): Effect.Effect<
    UpdateOriginRequestPolicyResult,
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchOriginRequestPolicy
    | OriginRequestPolicyAlreadyExists
    | PreconditionFailed
    | TooManyCookiesInOriginRequestPolicy
    | TooManyHeadersInOriginRequestPolicy
    | TooManyQueryStringsInOriginRequestPolicy
    | CommonAwsError
  >;
  updatePublicKey(
    input: UpdatePublicKeyRequest,
  ): Effect.Effect<
    UpdatePublicKeyResult,
    | AccessDenied
    | CannotChangeImmutablePublicKeyFields
    | IllegalUpdate
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchPublicKey
    | PreconditionFailed
    | CommonAwsError
  >;
  updateRealtimeLogConfig(
    input: UpdateRealtimeLogConfigRequest,
  ): Effect.Effect<
    UpdateRealtimeLogConfigResult,
    AccessDenied | InvalidArgument | NoSuchRealtimeLogConfig | CommonAwsError
  >;
  updateResponseHeadersPolicy(
    input: UpdateResponseHeadersPolicyRequest,
  ): Effect.Effect<
    UpdateResponseHeadersPolicyResult,
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | ResponseHeadersPolicyAlreadyExists
    | TooLongCSPInResponseHeadersPolicy
    | TooManyCustomHeadersInResponseHeadersPolicy
    | TooManyRemoveHeadersInResponseHeadersPolicy
    | CommonAwsError
  >;
  updateStreamingDistribution(
    input: UpdateStreamingDistributionRequest,
  ): Effect.Effect<
    UpdateStreamingDistributionResult,
    | AccessDenied
    | CNAMEAlreadyExists
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | MissingBody
    | NoSuchStreamingDistribution
    | PreconditionFailed
    | TooManyStreamingDistributionCNAMEs
    | TooManyTrustedSigners
    | TrustedSignerDoesNotExist
    | CommonAwsError
  >;
  updateVpcOrigin(
    input: UpdateVpcOriginRequest,
  ): Effect.Effect<
    UpdateVpcOriginResult,
    | AccessDenied
    | CannotUpdateEntityWhileInUse
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError
  >;
  verifyDnsConfiguration(
    input: VerifyDnsConfigurationRequest,
  ): Effect.Effect<
    VerifyDnsConfigurationResult,
    AccessDenied | EntityNotFound | InvalidArgument | CommonAwsError
  >;
}

export type Cloudfront = Cloudfront2020_05_31;

export type AccessControlAllowHeadersList = Array<string>;
export type AccessControlAllowMethodsList =
  Array<ResponseHeadersPolicyAccessControlAllowMethodsValues>;
export type AccessControlAllowOriginsList = Array<string>;
export type AccessControlExposeHeadersList = Array<string>;
export declare class AccessDenied extends EffectData.TaggedError(
  "AccessDenied",
)<{
  readonly Message?: string;
}> {}
export interface ActiveTrustedKeyGroups {
  Enabled: boolean;
  Quantity: number;
  Items?: Array<KGKeyPairIds>;
}
export interface ActiveTrustedSigners {
  Enabled: boolean;
  Quantity: number;
  Items?: Array<Signer>;
}
export interface Aliases {
  Quantity: number;
  Items?: Array<string>;
}
export interface AliasICPRecordal {
  CNAME?: string;
  ICPRecordalStatus?: ICPRecordalStatus;
}
export type AliasICPRecordals = Array<AliasICPRecordal>;
export type AliasList = Array<string>;
export type aliasString = string;

export interface AllowedMethods {
  Quantity: number;
  Items: Array<Method>;
  CachedMethods?: CachedMethods;
}
export interface AnycastIpList {
  Id: string;
  Name: string;
  Status: string;
  Arn: string;
  AnycastIps: Array<string>;
  IpCount: number;
  LastModifiedTime: Date | string;
}
export interface AnycastIpListCollection {
  Items?: Array<AnycastIpListSummary>;
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
}
export type AnycastIpListName = string;

export type AnycastIpListSummaries = Array<AnycastIpListSummary>;
export interface AnycastIpListSummary {
  Id: string;
  Name: string;
  Status: string;
  Arn: string;
  IpCount: number;
  LastModifiedTime: Date | string;
}
export type AnycastIps = Array<string>;
export interface AssociateAliasRequest {
  TargetDistributionId: string;
  Alias: string;
}
export interface AssociateDistributionTenantWebACLRequest {
  Id: string;
  WebACLArn: string;
  IfMatch?: string;
}
export interface AssociateDistributionTenantWebACLResult {
  Id?: string;
  WebACLArn?: string;
  ETag?: string;
}
export interface AssociateDistributionWebACLRequest {
  Id: string;
  WebACLArn: string;
  IfMatch?: string;
}
export interface AssociateDistributionWebACLResult {
  Id?: string;
  WebACLArn?: string;
  ETag?: string;
}
export type AwsAccountNumberList = Array<string>;
export declare class BatchTooLarge extends EffectData.TaggedError(
  "BatchTooLarge",
)<{
  readonly Message?: string;
}> {}
export type Cloudfrontboolean = boolean;

export interface CacheBehavior {
  PathPattern: string;
  TargetOriginId: string;
  TrustedSigners?: TrustedSigners;
  TrustedKeyGroups?: TrustedKeyGroups;
  ViewerProtocolPolicy: ViewerProtocolPolicy;
  AllowedMethods?: AllowedMethods;
  SmoothStreaming?: boolean;
  Compress?: boolean;
  LambdaFunctionAssociations?: LambdaFunctionAssociations;
  FunctionAssociations?: FunctionAssociations;
  FieldLevelEncryptionId?: string;
  RealtimeLogConfigArn?: string;
  CachePolicyId?: string;
  OriginRequestPolicyId?: string;
  ResponseHeadersPolicyId?: string;
  GrpcConfig?: GrpcConfig;
  ForwardedValues?: ForwardedValues;
  MinTTL?: number;
  DefaultTTL?: number;
  MaxTTL?: number;
}
export type CacheBehaviorList = Array<CacheBehavior>;
export interface CacheBehaviors {
  Quantity: number;
  Items?: Array<CacheBehavior>;
}
export interface CachedMethods {
  Quantity: number;
  Items: Array<Method>;
}
export interface CachePolicy {
  Id: string;
  LastModifiedTime: Date | string;
  CachePolicyConfig: CachePolicyConfig;
}
export declare class CachePolicyAlreadyExists extends EffectData.TaggedError(
  "CachePolicyAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface CachePolicyConfig {
  Comment?: string;
  Name: string;
  DefaultTTL?: number;
  MaxTTL?: number;
  MinTTL: number;
  ParametersInCacheKeyAndForwardedToOrigin?: ParametersInCacheKeyAndForwardedToOrigin;
}
export type CachePolicyCookieBehavior =
  | "none"
  | "whitelist"
  | "allExcept"
  | "all";
export interface CachePolicyCookiesConfig {
  CookieBehavior: CachePolicyCookieBehavior;
  Cookies?: CookieNames;
}
export type CachePolicyHeaderBehavior = "none" | "whitelist";
export interface CachePolicyHeadersConfig {
  HeaderBehavior: CachePolicyHeaderBehavior;
  Headers?: Headers;
}
export declare class CachePolicyInUse extends EffectData.TaggedError(
  "CachePolicyInUse",
)<{
  readonly Message?: string;
}> {}
export interface CachePolicyList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<CachePolicySummary>;
}
export type CachePolicyQueryStringBehavior =
  | "none"
  | "whitelist"
  | "allExcept"
  | "all";
export interface CachePolicyQueryStringsConfig {
  QueryStringBehavior: CachePolicyQueryStringBehavior;
  QueryStrings?: QueryStringNames;
}
export interface CachePolicySummary {
  Type: CachePolicyType;
  CachePolicy: CachePolicy;
}
export type CachePolicySummaryList = Array<CachePolicySummary>;
export type CachePolicyType = "managed" | "custom";
export declare class CannotChangeImmutablePublicKeyFields extends EffectData.TaggedError(
  "CannotChangeImmutablePublicKeyFields",
)<{
  readonly Message?: string;
}> {}
export declare class CannotDeleteEntityWhileInUse extends EffectData.TaggedError(
  "CannotDeleteEntityWhileInUse",
)<{
  readonly Message?: string;
}> {}
export declare class CannotUpdateEntityWhileInUse extends EffectData.TaggedError(
  "CannotUpdateEntityWhileInUse",
)<{
  readonly Message?: string;
}> {}
export interface Certificate {
  Arn: string;
}
export type CertificateSource = "cloudfront" | "iam" | "acm";
export type CertificateTransparencyLoggingPreference = "Enabled" | "Disabled";
export interface CloudFrontOriginAccessIdentity {
  Id: string;
  S3CanonicalUserId: string;
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
}
export declare class CloudFrontOriginAccessIdentityAlreadyExists extends EffectData.TaggedError(
  "CloudFrontOriginAccessIdentityAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface CloudFrontOriginAccessIdentityConfig {
  CallerReference: string;
  Comment: string;
}
export declare class CloudFrontOriginAccessIdentityInUse extends EffectData.TaggedError(
  "CloudFrontOriginAccessIdentityInUse",
)<{
  readonly Message?: string;
}> {}
export interface CloudFrontOriginAccessIdentityList {
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items?: Array<CloudFrontOriginAccessIdentitySummary>;
}
export interface CloudFrontOriginAccessIdentitySummary {
  Id: string;
  S3CanonicalUserId: string;
  Comment: string;
}
export type CloudFrontOriginAccessIdentitySummaryList =
  Array<CloudFrontOriginAccessIdentitySummary>;
export declare class CNAMEAlreadyExists extends EffectData.TaggedError(
  "CNAMEAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export type CommentType = string;

export interface ConflictingAlias {
  Alias?: string;
  DistributionId?: string;
  AccountId?: string;
}
export type ConflictingAliases = Array<ConflictingAlias>;
export interface ConflictingAliasesList {
  NextMarker?: string;
  MaxItems?: number;
  Quantity?: number;
  Items?: Array<ConflictingAlias>;
}
export interface ConnectionGroup {
  Id?: string;
  Name?: string;
  Arn?: string;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
  Tags?: Tags;
  Ipv6Enabled?: boolean;
  RoutingEndpoint?: string;
  AnycastIpListId?: string;
  Status?: string;
  Enabled?: boolean;
  IsDefault?: boolean;
}
export interface ConnectionGroupAssociationFilter {
  AnycastIpListId?: string;
}
export interface ConnectionGroupSummary {
  Id: string;
  Name: string;
  Arn: string;
  RoutingEndpoint: string;
  CreatedTime: Date | string;
  LastModifiedTime: Date | string;
  ETag: string;
  AnycastIpListId?: string;
  Enabled?: boolean;
  Status?: string;
  IsDefault?: boolean;
}
export type ConnectionGroupSummaryList = Array<ConnectionGroupSummary>;
export type ConnectionMode = "Direct" | "TenantOnly";
export interface ContentTypeProfile {
  Format: Format;
  ProfileId?: string;
  ContentType: string;
}
export interface ContentTypeProfileConfig {
  ForwardWhenContentTypeIsUnknown: boolean;
  ContentTypeProfiles?: ContentTypeProfiles;
}
export type ContentTypeProfileList = Array<ContentTypeProfile>;
export interface ContentTypeProfiles {
  Quantity: number;
  Items?: Array<ContentTypeProfile>;
}
export interface ContinuousDeploymentPolicy {
  Id: string;
  LastModifiedTime: Date | string;
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
}
export declare class ContinuousDeploymentPolicyAlreadyExists extends EffectData.TaggedError(
  "ContinuousDeploymentPolicyAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface ContinuousDeploymentPolicyConfig {
  StagingDistributionDnsNames: StagingDistributionDnsNames;
  Enabled: boolean;
  TrafficConfig?: TrafficConfig;
}
export declare class ContinuousDeploymentPolicyInUse extends EffectData.TaggedError(
  "ContinuousDeploymentPolicyInUse",
)<{
  readonly Message?: string;
}> {}
export interface ContinuousDeploymentPolicyList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<ContinuousDeploymentPolicySummary>;
}
export interface ContinuousDeploymentPolicySummary {
  ContinuousDeploymentPolicy: ContinuousDeploymentPolicy;
}
export type ContinuousDeploymentPolicySummaryList =
  Array<ContinuousDeploymentPolicySummary>;
export type ContinuousDeploymentPolicyType = "SingleWeight" | "SingleHeader";
export interface ContinuousDeploymentSingleHeaderConfig {
  Header: string;
  Value: string;
}
export interface ContinuousDeploymentSingleWeightConfig {
  Weight: number;
  SessionStickinessConfig?: SessionStickinessConfig;
}
export type CookieNameList = Array<string>;
export interface CookieNames {
  Quantity: number;
  Items?: Array<string>;
}
export interface CookiePreference {
  Forward: ItemSelection;
  WhitelistedNames?: CookieNames;
}
export interface CopyDistributionRequest {
  PrimaryDistributionId: string;
  Staging?: boolean;
  IfMatch?: string;
  CallerReference: string;
  Enabled?: boolean;
}
export interface CopyDistributionResult {
  Distribution?: Distribution;
  Location?: string;
  ETag?: string;
}
export interface CreateAnycastIpListRequest {
  Name: string;
  IpCount: number;
  Tags?: Tags;
}
export interface CreateAnycastIpListResult {
  AnycastIpList?: AnycastIpList;
  ETag?: string;
}
export interface CreateCachePolicyRequest {
  CachePolicyConfig: CachePolicyConfig;
}
export interface CreateCachePolicyResult {
  CachePolicy?: CachePolicy;
  Location?: string;
  ETag?: string;
}
export interface CreateCloudFrontOriginAccessIdentityRequest {
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
}
export interface CreateCloudFrontOriginAccessIdentityResult {
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
  Location?: string;
  ETag?: string;
}
export interface CreateConnectionGroupRequest {
  Name: string;
  Ipv6Enabled?: boolean;
  Tags?: Tags;
  AnycastIpListId?: string;
  Enabled?: boolean;
}
export interface CreateConnectionGroupResult {
  ConnectionGroup?: ConnectionGroup;
  ETag?: string;
}
export interface CreateContinuousDeploymentPolicyRequest {
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
}
export interface CreateContinuousDeploymentPolicyResult {
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;
  Location?: string;
  ETag?: string;
}
export interface CreateDistributionRequest {
  DistributionConfig: DistributionConfig;
}
export interface CreateDistributionResult {
  Distribution?: Distribution;
  Location?: string;
  ETag?: string;
}
export interface CreateDistributionTenantRequest {
  DistributionId: string;
  Name: string;
  Domains: Array<DomainItem>;
  Tags?: Tags;
  Customizations?: Customizations;
  Parameters?: Array<Parameter>;
  ConnectionGroupId?: string;
  ManagedCertificateRequest?: ManagedCertificateRequest;
  Enabled?: boolean;
}
export interface CreateDistributionTenantResult {
  DistributionTenant?: DistributionTenant;
  ETag?: string;
}
export interface CreateDistributionWithTagsRequest {
  DistributionConfigWithTags: DistributionConfigWithTags;
}
export interface CreateDistributionWithTagsResult {
  Distribution?: Distribution;
  Location?: string;
  ETag?: string;
}
export interface CreateFieldLevelEncryptionConfigRequest {
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
}
export interface CreateFieldLevelEncryptionConfigResult {
  FieldLevelEncryption?: FieldLevelEncryption;
  Location?: string;
  ETag?: string;
}
export interface CreateFieldLevelEncryptionProfileRequest {
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
}
export interface CreateFieldLevelEncryptionProfileResult {
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
  Location?: string;
  ETag?: string;
}
export interface CreateFunctionRequest {
  Name: string;
  FunctionConfig: FunctionConfig;
  FunctionCode: Uint8Array | string;
}
export interface CreateFunctionResult {
  FunctionSummary?: FunctionSummary;
  Location?: string;
  ETag?: string;
}
export interface CreateInvalidationForDistributionTenantRequest {
  Id: string;
  InvalidationBatch: InvalidationBatch;
}
export interface CreateInvalidationForDistributionTenantResult {
  Location?: string;
  Invalidation?: Invalidation;
}
export interface CreateInvalidationRequest {
  DistributionId: string;
  InvalidationBatch: InvalidationBatch;
}
export interface CreateInvalidationResult {
  Location?: string;
  Invalidation?: Invalidation;
}
export interface CreateKeyGroupRequest {
  KeyGroupConfig: KeyGroupConfig;
}
export interface CreateKeyGroupResult {
  KeyGroup?: KeyGroup;
  Location?: string;
  ETag?: string;
}
export interface CreateKeyValueStoreRequest {
  Name: string;
  Comment?: string;
  ImportSource?: ImportSource;
}
export interface CreateKeyValueStoreResult {
  KeyValueStore?: KeyValueStore;
  ETag?: string;
  Location?: string;
}
export interface CreateMonitoringSubscriptionRequest {
  DistributionId: string;
  MonitoringSubscription: MonitoringSubscription;
}
export interface CreateMonitoringSubscriptionResult {
  MonitoringSubscription?: MonitoringSubscription;
}
export interface CreateOriginAccessControlRequest {
  OriginAccessControlConfig: OriginAccessControlConfig;
}
export interface CreateOriginAccessControlResult {
  OriginAccessControl?: OriginAccessControl;
  Location?: string;
  ETag?: string;
}
export interface CreateOriginRequestPolicyRequest {
  OriginRequestPolicyConfig: OriginRequestPolicyConfig;
}
export interface CreateOriginRequestPolicyResult {
  OriginRequestPolicy?: OriginRequestPolicy;
  Location?: string;
  ETag?: string;
}
export interface CreatePublicKeyRequest {
  PublicKeyConfig: PublicKeyConfig;
}
export interface CreatePublicKeyResult {
  PublicKey?: PublicKey;
  Location?: string;
  ETag?: string;
}
export interface CreateRealtimeLogConfigRequest {
  EndPoints: Array<EndPoint>;
  Fields: Array<string>;
  Name: string;
  SamplingRate: number;
}
export interface CreateRealtimeLogConfigResult {
  RealtimeLogConfig?: RealtimeLogConfig;
}
export interface CreateResponseHeadersPolicyRequest {
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
}
export interface CreateResponseHeadersPolicyResult {
  ResponseHeadersPolicy?: ResponseHeadersPolicy;
  Location?: string;
  ETag?: string;
}
export interface CreateStreamingDistributionRequest {
  StreamingDistributionConfig: StreamingDistributionConfig;
}
export interface CreateStreamingDistributionResult {
  StreamingDistribution?: StreamingDistribution;
  Location?: string;
  ETag?: string;
}
export interface CreateStreamingDistributionWithTagsRequest {
  StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;
}
export interface CreateStreamingDistributionWithTagsResult {
  StreamingDistribution?: StreamingDistribution;
  Location?: string;
  ETag?: string;
}
export interface CreateVpcOriginRequest {
  VpcOriginEndpointConfig: VpcOriginEndpointConfig;
  Tags?: Tags;
}
export interface CreateVpcOriginResult {
  VpcOrigin?: VpcOrigin;
  Location?: string;
  ETag?: string;
}
export interface CustomErrorResponse {
  ErrorCode: number;
  ResponsePagePath?: string;
  ResponseCode?: string;
  ErrorCachingMinTTL?: number;
}
export type CustomErrorResponseList = Array<CustomErrorResponse>;
export interface CustomErrorResponses {
  Quantity: number;
  Items?: Array<CustomErrorResponse>;
}
export interface CustomHeaders {
  Quantity: number;
  Items?: Array<OriginCustomHeader>;
}
export type CustomizationActionType = "override" | "disable";
export interface Customizations {
  WebAcl?: WebAclCustomization;
  Certificate?: Certificate;
  GeoRestrictions?: GeoRestrictionCustomization;
}
export interface CustomOriginConfig {
  HTTPPort: number;
  HTTPSPort: number;
  OriginProtocolPolicy: OriginProtocolPolicy;
  OriginSslProtocols?: OriginSslProtocols;
  OriginReadTimeout?: number;
  OriginKeepaliveTimeout?: number;
}
export interface DefaultCacheBehavior {
  TargetOriginId: string;
  TrustedSigners?: TrustedSigners;
  TrustedKeyGroups?: TrustedKeyGroups;
  ViewerProtocolPolicy: ViewerProtocolPolicy;
  AllowedMethods?: AllowedMethods;
  SmoothStreaming?: boolean;
  Compress?: boolean;
  LambdaFunctionAssociations?: LambdaFunctionAssociations;
  FunctionAssociations?: FunctionAssociations;
  FieldLevelEncryptionId?: string;
  RealtimeLogConfigArn?: string;
  CachePolicyId?: string;
  OriginRequestPolicyId?: string;
  ResponseHeadersPolicyId?: string;
  GrpcConfig?: GrpcConfig;
  ForwardedValues?: ForwardedValues;
  MinTTL?: number;
  DefaultTTL?: number;
  MaxTTL?: number;
}
export interface DeleteAnycastIpListRequest {
  Id: string;
  IfMatch: string;
}
export interface DeleteCachePolicyRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteConnectionGroupRequest {
  Id: string;
  IfMatch: string;
}
export interface DeleteContinuousDeploymentPolicyRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteDistributionRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteDistributionTenantRequest {
  Id: string;
  IfMatch: string;
}
export interface DeleteFieldLevelEncryptionConfigRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteFieldLevelEncryptionProfileRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteFunctionRequest {
  Name: string;
  IfMatch: string;
}
export interface DeleteKeyGroupRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteKeyValueStoreRequest {
  Name: string;
  IfMatch: string;
}
export interface DeleteMonitoringSubscriptionRequest {
  DistributionId: string;
}
export interface DeleteMonitoringSubscriptionResult {}
export interface DeleteOriginAccessControlRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteOriginRequestPolicyRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeletePublicKeyRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteRealtimeLogConfigRequest {
  Name?: string;
  ARN?: string;
}
export interface DeleteResponseHeadersPolicyRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteStreamingDistributionRequest {
  Id: string;
  IfMatch?: string;
}
export interface DeleteVpcOriginRequest {
  Id: string;
  IfMatch: string;
}
export interface DeleteVpcOriginResult {
  VpcOrigin?: VpcOrigin;
  ETag?: string;
}
export interface DescribeFunctionRequest {
  Name: string;
  Stage?: FunctionStage;
}
export interface DescribeFunctionResult {
  FunctionSummary?: FunctionSummary;
  ETag?: string;
}
export interface DescribeKeyValueStoreRequest {
  Name: string;
}
export interface DescribeKeyValueStoreResult {
  KeyValueStore?: KeyValueStore;
  ETag?: string;
}
export interface DisassociateDistributionTenantWebACLRequest {
  Id: string;
  IfMatch?: string;
}
export interface DisassociateDistributionTenantWebACLResult {
  Id?: string;
  ETag?: string;
}
export interface DisassociateDistributionWebACLRequest {
  Id: string;
  IfMatch?: string;
}
export interface DisassociateDistributionWebACLResult {
  Id?: string;
  ETag?: string;
}
export interface Distribution {
  Id: string;
  ARN: string;
  Status: string;
  LastModifiedTime: Date | string;
  InProgressInvalidationBatches: number;
  DomainName: string;
  ActiveTrustedSigners?: ActiveTrustedSigners;
  ActiveTrustedKeyGroups?: ActiveTrustedKeyGroups;
  DistributionConfig: DistributionConfig;
  AliasICPRecordals?: Array<AliasICPRecordal>;
}
export declare class DistributionAlreadyExists extends EffectData.TaggedError(
  "DistributionAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface DistributionConfig {
  CallerReference: string;
  Aliases?: Aliases;
  DefaultRootObject?: string;
  Origins: Origins;
  OriginGroups?: OriginGroups;
  DefaultCacheBehavior: DefaultCacheBehavior;
  CacheBehaviors?: CacheBehaviors;
  CustomErrorResponses?: CustomErrorResponses;
  Comment: string;
  Logging?: LoggingConfig;
  PriceClass?: PriceClass;
  Enabled: boolean;
  ViewerCertificate?: ViewerCertificate;
  Restrictions?: Restrictions;
  WebACLId?: string;
  HttpVersion?: HttpVersion;
  IsIPV6Enabled?: boolean;
  ContinuousDeploymentPolicyId?: string;
  Staging?: boolean;
  AnycastIpListId?: string;
  TenantConfig?: TenantConfig;
  ConnectionMode?: ConnectionMode;
}
export interface DistributionConfigWithTags {
  DistributionConfig: DistributionConfig;
  Tags: Tags;
}
export interface DistributionIdList {
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items?: Array<string>;
}
export type DistributionIdListSummary = Array<string>;
export type distributionIdString = string;

export interface DistributionList {
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items?: Array<DistributionSummary>;
}
export declare class DistributionNotDisabled extends EffectData.TaggedError(
  "DistributionNotDisabled",
)<{
  readonly Message?: string;
}> {}
export interface DistributionResourceId {
  DistributionId?: string;
  DistributionTenantId?: string;
}
export type DistributionResourceType = "Distribution" | "DistributionTenant";
export interface DistributionSummary {
  Id: string;
  ARN: string;
  ETag?: string;
  Status: string;
  LastModifiedTime: Date | string;
  DomainName: string;
  Aliases: Aliases;
  Origins: Origins;
  OriginGroups?: OriginGroups;
  DefaultCacheBehavior: DefaultCacheBehavior;
  CacheBehaviors: CacheBehaviors;
  CustomErrorResponses: CustomErrorResponses;
  Comment: string;
  PriceClass: PriceClass;
  Enabled: boolean;
  ViewerCertificate: ViewerCertificate;
  Restrictions: Restrictions;
  WebACLId: string;
  HttpVersion: HttpVersion;
  IsIPV6Enabled: boolean;
  AliasICPRecordals?: Array<AliasICPRecordal>;
  Staging: boolean;
  ConnectionMode?: ConnectionMode;
  AnycastIpListId?: string;
}
export type DistributionSummaryList = Array<DistributionSummary>;
export interface DistributionTenant {
  Id?: string;
  DistributionId?: string;
  Name?: string;
  Arn?: string;
  Domains?: Array<DomainResult>;
  Tags?: Tags;
  Customizations?: Customizations;
  Parameters?: Array<Parameter>;
  ConnectionGroupId?: string;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
  Enabled?: boolean;
  Status?: string;
}
export interface DistributionTenantAssociationFilter {
  DistributionId?: string;
  ConnectionGroupId?: string;
}
export type DistributionTenantList = Array<DistributionTenantSummary>;
export interface DistributionTenantSummary {
  Id: string;
  DistributionId: string;
  Name: string;
  Arn: string;
  Domains: Array<DomainResult>;
  ConnectionGroupId?: string;
  Customizations?: Customizations;
  CreatedTime: Date | string;
  LastModifiedTime: Date | string;
  ETag: string;
  Enabled?: boolean;
  Status?: string;
}
export interface DnsConfiguration {
  Domain: string;
  Status: DnsConfigurationStatus;
  Reason?: string;
}
export type DnsConfigurationList = Array<DnsConfiguration>;
export type DnsConfigurationStatus = "Valid" | "Invalid" | "Unknown";
export interface DomainConflict {
  Domain: string;
  ResourceType: DistributionResourceType;
  ResourceId: string;
  AccountId: string;
}
export type DomainConflictsList = Array<DomainConflict>;
export interface DomainItem {
  Domain: string;
}
export type DomainList = Array<DomainItem>;
export interface DomainResult {
  Domain: string;
  Status?: DomainStatus;
}
export type DomainResultList = Array<DomainResult>;
export type DomainStatus = "Active" | "Inactive";
export interface EncryptionEntities {
  Quantity: number;
  Items?: Array<EncryptionEntity>;
}
export interface EncryptionEntity {
  PublicKeyId: string;
  ProviderId: string;
  FieldPatterns: FieldPatterns;
}
export type EncryptionEntityList = Array<EncryptionEntity>;
export interface EndPoint {
  StreamType: string;
  KinesisStreamConfig?: KinesisStreamConfig;
}
export type EndPointList = Array<EndPoint>;
export declare class EntityAlreadyExists extends EffectData.TaggedError(
  "EntityAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export declare class EntityLimitExceeded extends EffectData.TaggedError(
  "EntityLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export declare class EntityNotFound extends EffectData.TaggedError(
  "EntityNotFound",
)<{
  readonly Message?: string;
}> {}
export declare class EntitySizeLimitExceeded extends EffectData.TaggedError(
  "EntitySizeLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export type EventType =
  | "viewer_request"
  | "viewer_response"
  | "origin_request"
  | "origin_response";
export interface FieldLevelEncryption {
  Id: string;
  LastModifiedTime: Date | string;
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
}
export interface FieldLevelEncryptionConfig {
  CallerReference: string;
  Comment?: string;
  QueryArgProfileConfig?: QueryArgProfileConfig;
  ContentTypeProfileConfig?: ContentTypeProfileConfig;
}
export declare class FieldLevelEncryptionConfigAlreadyExists extends EffectData.TaggedError(
  "FieldLevelEncryptionConfigAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export declare class FieldLevelEncryptionConfigInUse extends EffectData.TaggedError(
  "FieldLevelEncryptionConfigInUse",
)<{
  readonly Message?: string;
}> {}
export interface FieldLevelEncryptionList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<FieldLevelEncryptionSummary>;
}
export interface FieldLevelEncryptionProfile {
  Id: string;
  LastModifiedTime: Date | string;
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
}
export declare class FieldLevelEncryptionProfileAlreadyExists extends EffectData.TaggedError(
  "FieldLevelEncryptionProfileAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface FieldLevelEncryptionProfileConfig {
  Name: string;
  CallerReference: string;
  Comment?: string;
  EncryptionEntities: EncryptionEntities;
}
export declare class FieldLevelEncryptionProfileInUse extends EffectData.TaggedError(
  "FieldLevelEncryptionProfileInUse",
)<{
  readonly Message?: string;
}> {}
export interface FieldLevelEncryptionProfileList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<FieldLevelEncryptionProfileSummary>;
}
export declare class FieldLevelEncryptionProfileSizeExceeded extends EffectData.TaggedError(
  "FieldLevelEncryptionProfileSizeExceeded",
)<{
  readonly Message?: string;
}> {}
export interface FieldLevelEncryptionProfileSummary {
  Id: string;
  LastModifiedTime: Date | string;
  Name: string;
  EncryptionEntities: EncryptionEntities;
  Comment?: string;
}
export type FieldLevelEncryptionProfileSummaryList =
  Array<FieldLevelEncryptionProfileSummary>;
export interface FieldLevelEncryptionSummary {
  Id: string;
  LastModifiedTime: Date | string;
  Comment?: string;
  QueryArgProfileConfig?: QueryArgProfileConfig;
  ContentTypeProfileConfig?: ContentTypeProfileConfig;
}
export type FieldLevelEncryptionSummaryList =
  Array<FieldLevelEncryptionSummary>;
export type FieldList = Array<string>;
export type FieldPatternList = Array<string>;
export interface FieldPatterns {
  Quantity: number;
  Items?: Array<string>;
}
export type float = number;

export type Format = "URLEncoded";
export interface ForwardedValues {
  QueryString: boolean;
  Cookies: CookiePreference;
  Headers?: Headers;
  QueryStringCacheKeys?: QueryStringCacheKeys;
}
export type FrameOptionsList = "DENY" | "SAMEORIGIN";
export declare class FunctionAlreadyExists extends EffectData.TaggedError(
  "FunctionAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export type FunctionARN = string;

export interface FunctionAssociation {
  FunctionARN: string;
  EventType: EventType;
}
export type FunctionAssociationList = Array<FunctionAssociation>;
export interface FunctionAssociations {
  Quantity: number;
  Items?: Array<FunctionAssociation>;
}
export type FunctionBlob = Uint8Array | string;

export interface FunctionConfig {
  Comment: string;
  Runtime: FunctionRuntime;
  KeyValueStoreAssociations?: KeyValueStoreAssociations;
}
export type FunctionEventObject = Uint8Array | string;

export type FunctionExecutionLogList = Array<string>;
export declare class FunctionInUse extends EffectData.TaggedError(
  "FunctionInUse",
)<{
  readonly Message?: string;
}> {}
export interface FunctionList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<FunctionSummary>;
}
export interface FunctionMetadata {
  FunctionARN: string;
  Stage?: FunctionStage;
  CreatedTime?: Date | string;
  LastModifiedTime: Date | string;
}
export type FunctionName = string;

export type FunctionRuntime = "cloudfront_js_1_0" | "cloudfront_js_2_0";
export declare class FunctionSizeLimitExceeded extends EffectData.TaggedError(
  "FunctionSizeLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export type FunctionStage = "DEVELOPMENT" | "LIVE";
export interface FunctionSummary {
  Name: string;
  Status?: string;
  FunctionConfig: FunctionConfig;
  FunctionMetadata: FunctionMetadata;
}
export type FunctionSummaryList = Array<FunctionSummary>;
export interface GeoRestriction {
  RestrictionType: GeoRestrictionType;
  Quantity: number;
  Items?: Array<string>;
}
export interface GeoRestrictionCustomization {
  RestrictionType: GeoRestrictionType;
  Locations?: Array<string>;
}
export type GeoRestrictionType = "blacklist" | "whitelist" | "none";
export interface GetAnycastIpListRequest {
  Id: string;
}
export interface GetAnycastIpListResult {
  AnycastIpList?: AnycastIpList;
  ETag?: string;
}
export interface GetCachePolicyConfigRequest {
  Id: string;
}
export interface GetCachePolicyConfigResult {
  CachePolicyConfig?: CachePolicyConfig;
  ETag?: string;
}
export interface GetCachePolicyRequest {
  Id: string;
}
export interface GetCachePolicyResult {
  CachePolicy?: CachePolicy;
  ETag?: string;
}
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  Id: string;
}
export interface GetCloudFrontOriginAccessIdentityConfigResult {
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
  ETag?: string;
}
export interface GetCloudFrontOriginAccessIdentityRequest {
  Id: string;
}
export interface GetCloudFrontOriginAccessIdentityResult {
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
  ETag?: string;
}
export interface GetConnectionGroupByRoutingEndpointRequest {
  RoutingEndpoint: string;
}
export interface GetConnectionGroupByRoutingEndpointResult {
  ConnectionGroup?: ConnectionGroup;
  ETag?: string;
}
export interface GetConnectionGroupRequest {
  Identifier: string;
}
export interface GetConnectionGroupResult {
  ConnectionGroup?: ConnectionGroup;
  ETag?: string;
}
export interface GetContinuousDeploymentPolicyConfigRequest {
  Id: string;
}
export interface GetContinuousDeploymentPolicyConfigResult {
  ContinuousDeploymentPolicyConfig?: ContinuousDeploymentPolicyConfig;
  ETag?: string;
}
export interface GetContinuousDeploymentPolicyRequest {
  Id: string;
}
export interface GetContinuousDeploymentPolicyResult {
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;
  ETag?: string;
}
export interface GetDistributionConfigRequest {
  Id: string;
}
export interface GetDistributionConfigResult {
  DistributionConfig?: DistributionConfig;
  ETag?: string;
}
export interface GetDistributionRequest {
  Id: string;
}
export interface GetDistributionResult {
  Distribution?: Distribution;
  ETag?: string;
}
export interface GetDistributionTenantByDomainRequest {
  Domain: string;
}
export interface GetDistributionTenantByDomainResult {
  DistributionTenant?: DistributionTenant;
  ETag?: string;
}
export interface GetDistributionTenantRequest {
  Identifier: string;
}
export interface GetDistributionTenantResult {
  DistributionTenant?: DistributionTenant;
  ETag?: string;
}
export interface GetFieldLevelEncryptionConfigRequest {
  Id: string;
}
export interface GetFieldLevelEncryptionConfigResult {
  FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;
  ETag?: string;
}
export interface GetFieldLevelEncryptionProfileConfigRequest {
  Id: string;
}
export interface GetFieldLevelEncryptionProfileConfigResult {
  FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;
  ETag?: string;
}
export interface GetFieldLevelEncryptionProfileRequest {
  Id: string;
}
export interface GetFieldLevelEncryptionProfileResult {
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
  ETag?: string;
}
export interface GetFieldLevelEncryptionRequest {
  Id: string;
}
export interface GetFieldLevelEncryptionResult {
  FieldLevelEncryption?: FieldLevelEncryption;
  ETag?: string;
}
export interface GetFunctionRequest {
  Name: string;
  Stage?: FunctionStage;
}
export interface GetFunctionResult {
  FunctionCode?: Uint8Array | string;
  ETag?: string;
  ContentType?: string;
}
export interface GetInvalidationForDistributionTenantRequest {
  DistributionTenantId: string;
  Id: string;
}
export interface GetInvalidationForDistributionTenantResult {
  Invalidation?: Invalidation;
}
export interface GetInvalidationRequest {
  DistributionId: string;
  Id: string;
}
export interface GetInvalidationResult {
  Invalidation?: Invalidation;
}
export interface GetKeyGroupConfigRequest {
  Id: string;
}
export interface GetKeyGroupConfigResult {
  KeyGroupConfig?: KeyGroupConfig;
  ETag?: string;
}
export interface GetKeyGroupRequest {
  Id: string;
}
export interface GetKeyGroupResult {
  KeyGroup?: KeyGroup;
  ETag?: string;
}
export interface GetManagedCertificateDetailsRequest {
  Identifier: string;
}
export interface GetManagedCertificateDetailsResult {
  ManagedCertificateDetails?: ManagedCertificateDetails;
}
export interface GetMonitoringSubscriptionRequest {
  DistributionId: string;
}
export interface GetMonitoringSubscriptionResult {
  MonitoringSubscription?: MonitoringSubscription;
}
export interface GetOriginAccessControlConfigRequest {
  Id: string;
}
export interface GetOriginAccessControlConfigResult {
  OriginAccessControlConfig?: OriginAccessControlConfig;
  ETag?: string;
}
export interface GetOriginAccessControlRequest {
  Id: string;
}
export interface GetOriginAccessControlResult {
  OriginAccessControl?: OriginAccessControl;
  ETag?: string;
}
export interface GetOriginRequestPolicyConfigRequest {
  Id: string;
}
export interface GetOriginRequestPolicyConfigResult {
  OriginRequestPolicyConfig?: OriginRequestPolicyConfig;
  ETag?: string;
}
export interface GetOriginRequestPolicyRequest {
  Id: string;
}
export interface GetOriginRequestPolicyResult {
  OriginRequestPolicy?: OriginRequestPolicy;
  ETag?: string;
}
export interface GetPublicKeyConfigRequest {
  Id: string;
}
export interface GetPublicKeyConfigResult {
  PublicKeyConfig?: PublicKeyConfig;
  ETag?: string;
}
export interface GetPublicKeyRequest {
  Id: string;
}
export interface GetPublicKeyResult {
  PublicKey?: PublicKey;
  ETag?: string;
}
export interface GetRealtimeLogConfigRequest {
  Name?: string;
  ARN?: string;
}
export interface GetRealtimeLogConfigResult {
  RealtimeLogConfig?: RealtimeLogConfig;
}
export interface GetResponseHeadersPolicyConfigRequest {
  Id: string;
}
export interface GetResponseHeadersPolicyConfigResult {
  ResponseHeadersPolicyConfig?: ResponseHeadersPolicyConfig;
  ETag?: string;
}
export interface GetResponseHeadersPolicyRequest {
  Id: string;
}
export interface GetResponseHeadersPolicyResult {
  ResponseHeadersPolicy?: ResponseHeadersPolicy;
  ETag?: string;
}
export interface GetStreamingDistributionConfigRequest {
  Id: string;
}
export interface GetStreamingDistributionConfigResult {
  StreamingDistributionConfig?: StreamingDistributionConfig;
  ETag?: string;
}
export interface GetStreamingDistributionRequest {
  Id: string;
}
export interface GetStreamingDistributionResult {
  StreamingDistribution?: StreamingDistribution;
  ETag?: string;
}
export interface GetVpcOriginRequest {
  Id: string;
}
export interface GetVpcOriginResult {
  VpcOrigin?: VpcOrigin;
  ETag?: string;
}
export interface GrpcConfig {
  Enabled: boolean;
}
export type HeaderList = Array<string>;
export interface Headers {
  Quantity: number;
  Items?: Array<string>;
}
export type HttpVersion = "http1_1" | "http2" | "http3" | "http2and3";
export type ICPRecordalStatus = "APPROVED" | "SUSPENDED" | "PENDING";
export declare class IllegalDelete extends EffectData.TaggedError(
  "IllegalDelete",
)<{
  readonly Message?: string;
}> {}
export declare class IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior extends EffectData.TaggedError(
  "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior",
)<{
  readonly Message?: string;
}> {}
export declare class IllegalOriginAccessConfiguration extends EffectData.TaggedError(
  "IllegalOriginAccessConfiguration",
)<{
  readonly Message?: string;
}> {}
export declare class IllegalUpdate extends EffectData.TaggedError(
  "IllegalUpdate",
)<{
  readonly Message?: string;
}> {}
export interface ImportSource {
  SourceType: ImportSourceType;
  SourceARN: string;
}
export type ImportSourceType = "S3";
export declare class InconsistentQuantities extends EffectData.TaggedError(
  "InconsistentQuantities",
)<{
  readonly Message?: string;
}> {}
export type integer = number;

export declare class InvalidArgument extends EffectData.TaggedError(
  "InvalidArgument",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAssociation extends EffectData.TaggedError(
  "InvalidAssociation",
)<{
  readonly Message?: string;
}> {}
export interface Invalidation {
  Id: string;
  Status: string;
  CreateTime: Date | string;
  InvalidationBatch: InvalidationBatch;
}
export interface InvalidationBatch {
  Paths: Paths;
  CallerReference: string;
}
export interface InvalidationList {
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items?: Array<InvalidationSummary>;
}
export interface InvalidationSummary {
  Id: string;
  CreateTime: Date | string;
  Status: string;
}
export type InvalidationSummaryList = Array<InvalidationSummary>;
export declare class InvalidDefaultRootObject extends EffectData.TaggedError(
  "InvalidDefaultRootObject",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDomainNameForOriginAccessControl extends EffectData.TaggedError(
  "InvalidDomainNameForOriginAccessControl",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidErrorCode extends EffectData.TaggedError(
  "InvalidErrorCode",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidForwardCookies extends EffectData.TaggedError(
  "InvalidForwardCookies",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFunctionAssociation extends EffectData.TaggedError(
  "InvalidFunctionAssociation",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidGeoRestrictionParameter extends EffectData.TaggedError(
  "InvalidGeoRestrictionParameter",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidHeadersForS3Origin extends EffectData.TaggedError(
  "InvalidHeadersForS3Origin",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidIfMatchVersion extends EffectData.TaggedError(
  "InvalidIfMatchVersion",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidLambdaFunctionAssociation extends EffectData.TaggedError(
  "InvalidLambdaFunctionAssociation",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidLocationCode extends EffectData.TaggedError(
  "InvalidLocationCode",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidMinimumProtocolVersion extends EffectData.TaggedError(
  "InvalidMinimumProtocolVersion",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOrigin extends EffectData.TaggedError(
  "InvalidOrigin",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOriginAccessControl extends EffectData.TaggedError(
  "InvalidOriginAccessControl",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOriginAccessIdentity extends EffectData.TaggedError(
  "InvalidOriginAccessIdentity",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOriginKeepaliveTimeout extends EffectData.TaggedError(
  "InvalidOriginKeepaliveTimeout",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOriginReadTimeout extends EffectData.TaggedError(
  "InvalidOriginReadTimeout",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidProtocolSettings extends EffectData.TaggedError(
  "InvalidProtocolSettings",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidQueryStringParameters extends EffectData.TaggedError(
  "InvalidQueryStringParameters",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRelativePath extends EffectData.TaggedError(
  "InvalidRelativePath",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequiredProtocol extends EffectData.TaggedError(
  "InvalidRequiredProtocol",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidResponseCode extends EffectData.TaggedError(
  "InvalidResponseCode",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTagging extends EffectData.TaggedError(
  "InvalidTagging",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTTLOrder extends EffectData.TaggedError(
  "InvalidTTLOrder",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidViewerCertificate extends EffectData.TaggedError(
  "InvalidViewerCertificate",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidWebACLId extends EffectData.TaggedError(
  "InvalidWebACLId",
)<{
  readonly Message?: string;
}> {}
export type ItemSelection = "none" | "whitelist" | "all";
export interface KeyGroup {
  Id: string;
  LastModifiedTime: Date | string;
  KeyGroupConfig: KeyGroupConfig;
}
export declare class KeyGroupAlreadyExists extends EffectData.TaggedError(
  "KeyGroupAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface KeyGroupConfig {
  Name: string;
  Items: Array<string>;
  Comment?: string;
}
export interface KeyGroupList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<KeyGroupSummary>;
}
export interface KeyGroupSummary {
  KeyGroup: KeyGroup;
}
export type KeyGroupSummaryList = Array<KeyGroupSummary>;
export type KeyPairIdList = Array<string>;
export interface KeyPairIds {
  Quantity: number;
  Items?: Array<string>;
}
export interface KeyValueStore {
  Name: string;
  Id: string;
  Comment: string;
  ARN: string;
  Status?: string;
  LastModifiedTime: Date | string;
}
export type KeyValueStoreARN = string;

export interface KeyValueStoreAssociation {
  KeyValueStoreARN: string;
}
export type KeyValueStoreAssociationList = Array<KeyValueStoreAssociation>;
export interface KeyValueStoreAssociations {
  Quantity: number;
  Items?: Array<KeyValueStoreAssociation>;
}
export type KeyValueStoreComment = string;

export interface KeyValueStoreList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<KeyValueStore>;
}
export type KeyValueStoreName = string;

export type KeyValueStoreSummaryList = Array<KeyValueStore>;
export interface KGKeyPairIds {
  KeyGroupId?: string;
  KeyPairIds?: KeyPairIds;
}
export type KGKeyPairIdsList = Array<KGKeyPairIds>;
export interface KinesisStreamConfig {
  RoleARN: string;
  StreamARN: string;
}
export type LambdaFunctionARN = string;

export interface LambdaFunctionAssociation {
  LambdaFunctionARN: string;
  EventType: EventType;
  IncludeBody?: boolean;
}
export type LambdaFunctionAssociationList = Array<LambdaFunctionAssociation>;
export interface LambdaFunctionAssociations {
  Quantity: number;
  Items?: Array<LambdaFunctionAssociation>;
}
export interface ListAnycastIpListsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListAnycastIpListsResult {
  AnycastIpLists?: AnycastIpListCollection;
}
export interface ListCachePoliciesRequest {
  Type?: CachePolicyType;
  Marker?: string;
  MaxItems?: number;
}
export interface ListCachePoliciesResult {
  CachePolicyList?: CachePolicyList;
}
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListCloudFrontOriginAccessIdentitiesResult {
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
}
export type listConflictingAliasesMaxItemsInteger = number;

export interface ListConflictingAliasesRequest {
  DistributionId: string;
  Alias: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListConflictingAliasesResult {
  ConflictingAliasesList?: ConflictingAliasesList;
}
export interface ListConnectionGroupsRequest {
  AssociationFilter?: ConnectionGroupAssociationFilter;
  Marker?: string;
  MaxItems?: number;
}
export interface ListConnectionGroupsResult {
  NextMarker?: string;
  ConnectionGroups?: Array<ConnectionGroupSummary>;
}
export interface ListContinuousDeploymentPoliciesRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListContinuousDeploymentPoliciesResult {
  ContinuousDeploymentPolicyList?: ContinuousDeploymentPolicyList;
}
export interface ListDistributionsByAnycastIpListIdRequest {
  Marker?: string;
  MaxItems?: number;
  AnycastIpListId: string;
}
export interface ListDistributionsByAnycastIpListIdResult {
  DistributionList?: DistributionList;
}
export interface ListDistributionsByCachePolicyIdRequest {
  Marker?: string;
  MaxItems?: number;
  CachePolicyId: string;
}
export interface ListDistributionsByCachePolicyIdResult {
  DistributionIdList?: DistributionIdList;
}
export interface ListDistributionsByConnectionModeRequest {
  Marker?: string;
  MaxItems?: number;
  ConnectionMode: ConnectionMode;
}
export interface ListDistributionsByConnectionModeResult {
  DistributionList?: DistributionList;
}
export interface ListDistributionsByKeyGroupRequest {
  Marker?: string;
  MaxItems?: number;
  KeyGroupId: string;
}
export interface ListDistributionsByKeyGroupResult {
  DistributionIdList?: DistributionIdList;
}
export interface ListDistributionsByOriginRequestPolicyIdRequest {
  Marker?: string;
  MaxItems?: number;
  OriginRequestPolicyId: string;
}
export interface ListDistributionsByOriginRequestPolicyIdResult {
  DistributionIdList?: DistributionIdList;
}
export interface ListDistributionsByRealtimeLogConfigRequest {
  Marker?: string;
  MaxItems?: number;
  RealtimeLogConfigName?: string;
  RealtimeLogConfigArn?: string;
}
export interface ListDistributionsByRealtimeLogConfigResult {
  DistributionList?: DistributionList;
}
export interface ListDistributionsByResponseHeadersPolicyIdRequest {
  Marker?: string;
  MaxItems?: number;
  ResponseHeadersPolicyId: string;
}
export interface ListDistributionsByResponseHeadersPolicyIdResult {
  DistributionIdList?: DistributionIdList;
}
export interface ListDistributionsByVpcOriginIdRequest {
  Marker?: string;
  MaxItems?: number;
  VpcOriginId: string;
}
export interface ListDistributionsByVpcOriginIdResult {
  DistributionIdList?: DistributionIdList;
}
export interface ListDistributionsByWebACLIdRequest {
  Marker?: string;
  MaxItems?: number;
  WebACLId: string;
}
export interface ListDistributionsByWebACLIdResult {
  DistributionList?: DistributionList;
}
export interface ListDistributionsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListDistributionsResult {
  DistributionList?: DistributionList;
}
export interface ListDistributionTenantsByCustomizationRequest {
  WebACLArn?: string;
  CertificateArn?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListDistributionTenantsByCustomizationResult {
  NextMarker?: string;
  DistributionTenantList?: Array<DistributionTenantSummary>;
}
export interface ListDistributionTenantsRequest {
  AssociationFilter?: DistributionTenantAssociationFilter;
  Marker?: string;
  MaxItems?: number;
}
export interface ListDistributionTenantsResult {
  NextMarker?: string;
  DistributionTenantList?: Array<DistributionTenantSummary>;
}
export interface ListDomainConflictsRequest {
  Domain: string;
  DomainControlValidationResource: DistributionResourceId;
  MaxItems?: number;
  Marker?: string;
}
export interface ListDomainConflictsResult {
  DomainConflicts?: Array<DomainConflict>;
  NextMarker?: string;
}
export interface ListFieldLevelEncryptionConfigsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListFieldLevelEncryptionConfigsResult {
  FieldLevelEncryptionList?: FieldLevelEncryptionList;
}
export interface ListFieldLevelEncryptionProfilesRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListFieldLevelEncryptionProfilesResult {
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
}
export interface ListFunctionsRequest {
  Marker?: string;
  MaxItems?: number;
  Stage?: FunctionStage;
}
export interface ListFunctionsResult {
  FunctionList?: FunctionList;
}
export interface ListInvalidationsForDistributionTenantRequest {
  Id: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListInvalidationsForDistributionTenantResult {
  InvalidationList?: InvalidationList;
}
export interface ListInvalidationsRequest {
  DistributionId: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListInvalidationsResult {
  InvalidationList?: InvalidationList;
}
export interface ListKeyGroupsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListKeyGroupsResult {
  KeyGroupList?: KeyGroupList;
}
export interface ListKeyValueStoresRequest {
  Marker?: string;
  MaxItems?: number;
  Status?: string;
}
export interface ListKeyValueStoresResult {
  KeyValueStoreList?: KeyValueStoreList;
}
export interface ListOriginAccessControlsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListOriginAccessControlsResult {
  OriginAccessControlList?: OriginAccessControlList;
}
export interface ListOriginRequestPoliciesRequest {
  Type?: OriginRequestPolicyType;
  Marker?: string;
  MaxItems?: number;
}
export interface ListOriginRequestPoliciesResult {
  OriginRequestPolicyList?: OriginRequestPolicyList;
}
export interface ListPublicKeysRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListPublicKeysResult {
  PublicKeyList?: PublicKeyList;
}
export interface ListRealtimeLogConfigsRequest {
  MaxItems?: number;
  Marker?: string;
}
export interface ListRealtimeLogConfigsResult {
  RealtimeLogConfigs?: RealtimeLogConfigs;
}
export interface ListResponseHeadersPoliciesRequest {
  Type?: ResponseHeadersPolicyType;
  Marker?: string;
  MaxItems?: number;
}
export interface ListResponseHeadersPoliciesResult {
  ResponseHeadersPolicyList?: ResponseHeadersPolicyList;
}
export interface ListStreamingDistributionsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListStreamingDistributionsResult {
  StreamingDistributionList?: StreamingDistributionList;
}
export interface ListTagsForResourceRequest {
  Resource: string;
}
export interface ListTagsForResourceResult {
  Tags: Tags;
}
export interface ListVpcOriginsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListVpcOriginsResult {
  VpcOriginList?: VpcOriginList;
}
export type LocationList = Array<string>;
export interface LoggingConfig {
  Enabled?: boolean;
  IncludeCookies?: boolean;
  Bucket?: string;
  Prefix?: string;
}
export type long = number;

export interface ManagedCertificateDetails {
  CertificateArn?: string;
  CertificateStatus?: ManagedCertificateStatus;
  ValidationTokenHost?: ValidationTokenHost;
  ValidationTokenDetails?: Array<ValidationTokenDetail>;
}
export interface ManagedCertificateRequest {
  ValidationTokenHost: ValidationTokenHost;
  PrimaryDomainName?: string;
  CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference;
}
export type ManagedCertificateStatus =
  | "PendingValidation"
  | "Issued"
  | "Inactive"
  | "Expired"
  | "ValidationTimedOut"
  | "Revoked"
  | "Failed";
export type Method =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "PATCH"
  | "OPTIONS"
  | "DELETE";
export type MethodsList = Array<Method>;
export type MinimumProtocolVersion =
  | "SSLv3"
  | "TLSv1"
  | "TLSv1_2016"
  | "TLSv1_1_2016"
  | "TLSv1_2_2018"
  | "TLSv1_2_2019"
  | "TLSv1_2_2021";
export declare class MissingBody extends EffectData.TaggedError("MissingBody")<{
  readonly Message?: string;
}> {}
export interface MonitoringSubscription {
  RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
}
export declare class MonitoringSubscriptionAlreadyExists extends EffectData.TaggedError(
  "MonitoringSubscriptionAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchCachePolicy extends EffectData.TaggedError(
  "NoSuchCachePolicy",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchCloudFrontOriginAccessIdentity extends EffectData.TaggedError(
  "NoSuchCloudFrontOriginAccessIdentity",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchContinuousDeploymentPolicy extends EffectData.TaggedError(
  "NoSuchContinuousDeploymentPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchDistribution extends EffectData.TaggedError(
  "NoSuchDistribution",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchFieldLevelEncryptionConfig extends EffectData.TaggedError(
  "NoSuchFieldLevelEncryptionConfig",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchFieldLevelEncryptionProfile extends EffectData.TaggedError(
  "NoSuchFieldLevelEncryptionProfile",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchFunctionExists extends EffectData.TaggedError(
  "NoSuchFunctionExists",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchInvalidation extends EffectData.TaggedError(
  "NoSuchInvalidation",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchMonitoringSubscription extends EffectData.TaggedError(
  "NoSuchMonitoringSubscription",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchOrigin extends EffectData.TaggedError(
  "NoSuchOrigin",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchOriginAccessControl extends EffectData.TaggedError(
  "NoSuchOriginAccessControl",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchOriginRequestPolicy extends EffectData.TaggedError(
  "NoSuchOriginRequestPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchPublicKey extends EffectData.TaggedError(
  "NoSuchPublicKey",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchRealtimeLogConfig extends EffectData.TaggedError(
  "NoSuchRealtimeLogConfig",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchResource extends EffectData.TaggedError(
  "NoSuchResource",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchResponseHeadersPolicy extends EffectData.TaggedError(
  "NoSuchResponseHeadersPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchStreamingDistribution extends EffectData.TaggedError(
  "NoSuchStreamingDistribution",
)<{
  readonly Message?: string;
}> {}
export interface Origin {
  Id: string;
  DomainName: string;
  OriginPath?: string;
  CustomHeaders?: CustomHeaders;
  S3OriginConfig?: S3OriginConfig;
  CustomOriginConfig?: CustomOriginConfig;
  VpcOriginConfig?: VpcOriginConfig;
  ConnectionAttempts?: number;
  ConnectionTimeout?: number;
  OriginShield?: OriginShield;
  OriginAccessControlId?: string;
}
export interface OriginAccessControl {
  Id: string;
  OriginAccessControlConfig?: OriginAccessControlConfig;
}
export declare class OriginAccessControlAlreadyExists extends EffectData.TaggedError(
  "OriginAccessControlAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface OriginAccessControlConfig {
  Name: string;
  Description?: string;
  SigningProtocol: OriginAccessControlSigningProtocols;
  SigningBehavior: OriginAccessControlSigningBehaviors;
  OriginAccessControlOriginType: OriginAccessControlOriginTypes;
}
export declare class OriginAccessControlInUse extends EffectData.TaggedError(
  "OriginAccessControlInUse",
)<{
  readonly Message?: string;
}> {}
export interface OriginAccessControlList {
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items?: Array<OriginAccessControlSummary>;
}
export type OriginAccessControlOriginTypes =
  | "s3"
  | "mediastore"
  | "mediapackagev2"
  | "lambda";
export type OriginAccessControlSigningBehaviors =
  | "never"
  | "always"
  | "no_override";
export type OriginAccessControlSigningProtocols = "sigv4";
export interface OriginAccessControlSummary {
  Id: string;
  Description: string;
  Name: string;
  SigningProtocol: OriginAccessControlSigningProtocols;
  SigningBehavior: OriginAccessControlSigningBehaviors;
  OriginAccessControlOriginType: OriginAccessControlOriginTypes;
}
export type OriginAccessControlSummaryList = Array<OriginAccessControlSummary>;
export interface OriginCustomHeader {
  HeaderName: string;
  HeaderValue: string;
}
export type OriginCustomHeadersList = Array<OriginCustomHeader>;
export interface OriginGroup {
  Id: string;
  FailoverCriteria: OriginGroupFailoverCriteria;
  Members: OriginGroupMembers;
  SelectionCriteria?: OriginGroupSelectionCriteria;
}
export interface OriginGroupFailoverCriteria {
  StatusCodes: StatusCodes;
}
export type OriginGroupList = Array<OriginGroup>;
export interface OriginGroupMember {
  OriginId: string;
}
export type OriginGroupMemberList = Array<OriginGroupMember>;
export interface OriginGroupMembers {
  Quantity: number;
  Items: Array<OriginGroupMember>;
}
export interface OriginGroups {
  Quantity: number;
  Items?: Array<OriginGroup>;
}
export type OriginGroupSelectionCriteria = "Default" | "MediaQualityBased";
export type OriginList = Array<Origin>;
export type OriginProtocolPolicy = "http_only" | "match_viewer" | "https_only";
export interface OriginRequestPolicy {
  Id: string;
  LastModifiedTime: Date | string;
  OriginRequestPolicyConfig: OriginRequestPolicyConfig;
}
export declare class OriginRequestPolicyAlreadyExists extends EffectData.TaggedError(
  "OriginRequestPolicyAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface OriginRequestPolicyConfig {
  Comment?: string;
  Name: string;
  HeadersConfig: OriginRequestPolicyHeadersConfig;
  CookiesConfig: OriginRequestPolicyCookiesConfig;
  QueryStringsConfig: OriginRequestPolicyQueryStringsConfig;
}
export type OriginRequestPolicyCookieBehavior =
  | "none"
  | "whitelist"
  | "all"
  | "allExcept";
export interface OriginRequestPolicyCookiesConfig {
  CookieBehavior: OriginRequestPolicyCookieBehavior;
  Cookies?: CookieNames;
}
export type OriginRequestPolicyHeaderBehavior =
  | "none"
  | "whitelist"
  | "allViewer"
  | "allViewerAndWhitelistCloudFront"
  | "allExcept";
export interface OriginRequestPolicyHeadersConfig {
  HeaderBehavior: OriginRequestPolicyHeaderBehavior;
  Headers?: Headers;
}
export declare class OriginRequestPolicyInUse extends EffectData.TaggedError(
  "OriginRequestPolicyInUse",
)<{
  readonly Message?: string;
}> {}
export interface OriginRequestPolicyList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<OriginRequestPolicySummary>;
}
export type OriginRequestPolicyQueryStringBehavior =
  | "none"
  | "whitelist"
  | "all"
  | "allExcept";
export interface OriginRequestPolicyQueryStringsConfig {
  QueryStringBehavior: OriginRequestPolicyQueryStringBehavior;
  QueryStrings?: QueryStringNames;
}
export interface OriginRequestPolicySummary {
  Type: OriginRequestPolicyType;
  OriginRequestPolicy: OriginRequestPolicy;
}
export type OriginRequestPolicySummaryList = Array<OriginRequestPolicySummary>;
export type OriginRequestPolicyType = "managed" | "custom";
export interface Origins {
  Quantity: number;
  Items: Array<Origin>;
}
export interface OriginShield {
  Enabled: boolean;
  OriginShieldRegion?: string;
}
export type OriginShieldRegion = string;

export interface OriginSslProtocols {
  Quantity: number;
  Items: Array<SslProtocol>;
}
export interface Parameter {
  Name: string;
  Value: string;
}
export interface ParameterDefinition {
  Name: string;
  Definition: ParameterDefinitionSchema;
}
export type ParameterDefinitions = Array<ParameterDefinition>;
export interface ParameterDefinitionSchema {
  StringSchema?: StringSchemaConfig;
}
export type ParameterName = string;

export type Parameters = Array<Parameter>;
export interface ParametersInCacheKeyAndForwardedToOrigin {
  EnableAcceptEncodingGzip: boolean;
  EnableAcceptEncodingBrotli?: boolean;
  HeadersConfig: CachePolicyHeadersConfig;
  CookiesConfig: CachePolicyCookiesConfig;
  QueryStringsConfig: CachePolicyQueryStringsConfig;
}
export type ParameterValue = string;

export type PathList = Array<string>;
export interface Paths {
  Quantity: number;
  Items?: Array<string>;
}
export declare class PreconditionFailed extends EffectData.TaggedError(
  "PreconditionFailed",
)<{
  readonly Message?: string;
}> {}
export type PriceClass =
  | "PriceClass_100"
  | "PriceClass_200"
  | "PriceClass_All"
  | "None";
export interface PublicKey {
  Id: string;
  CreatedTime: Date | string;
  PublicKeyConfig: PublicKeyConfig;
}
export declare class PublicKeyAlreadyExists extends EffectData.TaggedError(
  "PublicKeyAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface PublicKeyConfig {
  CallerReference: string;
  Name: string;
  EncodedKey: string;
  Comment?: string;
}
export type PublicKeyIdList = Array<string>;
export declare class PublicKeyInUse extends EffectData.TaggedError(
  "PublicKeyInUse",
)<{
  readonly Message?: string;
}> {}
export interface PublicKeyList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<PublicKeySummary>;
}
export interface PublicKeySummary {
  Id: string;
  Name: string;
  CreatedTime: Date | string;
  EncodedKey: string;
  Comment?: string;
}
export type PublicKeySummaryList = Array<PublicKeySummary>;
export interface PublishFunctionRequest {
  Name: string;
  IfMatch: string;
}
export interface PublishFunctionResult {
  FunctionSummary?: FunctionSummary;
}
export interface QueryArgProfile {
  QueryArg: string;
  ProfileId: string;
}
export interface QueryArgProfileConfig {
  ForwardWhenQueryArgProfileIsUnknown: boolean;
  QueryArgProfiles?: QueryArgProfiles;
}
export declare class QueryArgProfileEmpty extends EffectData.TaggedError(
  "QueryArgProfileEmpty",
)<{
  readonly Message?: string;
}> {}
export type QueryArgProfileList = Array<QueryArgProfile>;
export interface QueryArgProfiles {
  Quantity: number;
  Items?: Array<QueryArgProfile>;
}
export interface QueryStringCacheKeys {
  Quantity: number;
  Items?: Array<string>;
}
export type QueryStringCacheKeysList = Array<string>;
export interface QueryStringNames {
  Quantity: number;
  Items?: Array<string>;
}
export type QueryStringNamesList = Array<string>;
export interface RealtimeLogConfig {
  ARN: string;
  Name: string;
  SamplingRate: number;
  EndPoints: Array<EndPoint>;
  Fields: Array<string>;
}
export declare class RealtimeLogConfigAlreadyExists extends EffectData.TaggedError(
  "RealtimeLogConfigAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export declare class RealtimeLogConfigInUse extends EffectData.TaggedError(
  "RealtimeLogConfigInUse",
)<{
  readonly Message?: string;
}> {}
export type RealtimeLogConfigList = Array<RealtimeLogConfig>;
export declare class RealtimeLogConfigOwnerMismatch extends EffectData.TaggedError(
  "RealtimeLogConfigOwnerMismatch",
)<{
  readonly Message?: string;
}> {}
export interface RealtimeLogConfigs {
  MaxItems: number;
  Items?: Array<RealtimeLogConfig>;
  IsTruncated: boolean;
  Marker: string;
  NextMarker?: string;
}
export interface RealtimeMetricsSubscriptionConfig {
  RealtimeMetricsSubscriptionStatus: RealtimeMetricsSubscriptionStatus;
}
export type RealtimeMetricsSubscriptionStatus = "Enabled" | "Disabled";
export type ReferrerPolicyList =
  | "no_referrer"
  | "no_referrer_when_downgrade"
  | "origin"
  | "origin_when_cross_origin"
  | "same_origin"
  | "strict_origin"
  | "strict_origin_when_cross_origin"
  | "unsafe_url";
export type ResourceARN = string;

export declare class ResourceInUse extends EffectData.TaggedError(
  "ResourceInUse",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotDisabled extends EffectData.TaggedError(
  "ResourceNotDisabled",
)<{
  readonly Message?: string;
}> {}
export interface ResponseHeadersPolicy {
  Id: string;
  LastModifiedTime: Date | string;
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
}
export interface ResponseHeadersPolicyAccessControlAllowHeaders {
  Quantity: number;
  Items: Array<string>;
}
export interface ResponseHeadersPolicyAccessControlAllowMethods {
  Quantity: number;
  Items: Array<ResponseHeadersPolicyAccessControlAllowMethodsValues>;
}
export type ResponseHeadersPolicyAccessControlAllowMethodsValues =
  | "GET"
  | "POST"
  | "OPTIONS"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "ALL";
export interface ResponseHeadersPolicyAccessControlAllowOrigins {
  Quantity: number;
  Items: Array<string>;
}
export interface ResponseHeadersPolicyAccessControlExposeHeaders {
  Quantity: number;
  Items?: Array<string>;
}
export declare class ResponseHeadersPolicyAlreadyExists extends EffectData.TaggedError(
  "ResponseHeadersPolicyAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface ResponseHeadersPolicyConfig {
  Comment?: string;
  Name: string;
  CorsConfig?: ResponseHeadersPolicyCorsConfig;
  SecurityHeadersConfig?: ResponseHeadersPolicySecurityHeadersConfig;
  ServerTimingHeadersConfig?: ResponseHeadersPolicyServerTimingHeadersConfig;
  CustomHeadersConfig?: ResponseHeadersPolicyCustomHeadersConfig;
  RemoveHeadersConfig?: ResponseHeadersPolicyRemoveHeadersConfig;
}
export interface ResponseHeadersPolicyContentSecurityPolicy {
  Override: boolean;
  ContentSecurityPolicy: string;
}
export interface ResponseHeadersPolicyContentTypeOptions {
  Override: boolean;
}
export interface ResponseHeadersPolicyCorsConfig {
  AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOrigins;
  AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeaders;
  AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethods;
  AccessControlAllowCredentials: boolean;
  AccessControlExposeHeaders?: ResponseHeadersPolicyAccessControlExposeHeaders;
  AccessControlMaxAgeSec?: number;
  OriginOverride: boolean;
}
export interface ResponseHeadersPolicyCustomHeader {
  Header: string;
  Value: string;
  Override: boolean;
}
export type ResponseHeadersPolicyCustomHeaderList =
  Array<ResponseHeadersPolicyCustomHeader>;
export interface ResponseHeadersPolicyCustomHeadersConfig {
  Quantity: number;
  Items?: Array<ResponseHeadersPolicyCustomHeader>;
}
export interface ResponseHeadersPolicyFrameOptions {
  Override: boolean;
  FrameOption: FrameOptionsList;
}
export declare class ResponseHeadersPolicyInUse extends EffectData.TaggedError(
  "ResponseHeadersPolicyInUse",
)<{
  readonly Message?: string;
}> {}
export interface ResponseHeadersPolicyList {
  NextMarker?: string;
  MaxItems: number;
  Quantity: number;
  Items?: Array<ResponseHeadersPolicySummary>;
}
export interface ResponseHeadersPolicyReferrerPolicy {
  Override: boolean;
  ReferrerPolicy: ReferrerPolicyList;
}
export interface ResponseHeadersPolicyRemoveHeader {
  Header: string;
}
export type ResponseHeadersPolicyRemoveHeaderList =
  Array<ResponseHeadersPolicyRemoveHeader>;
export interface ResponseHeadersPolicyRemoveHeadersConfig {
  Quantity: number;
  Items?: Array<ResponseHeadersPolicyRemoveHeader>;
}
export interface ResponseHeadersPolicySecurityHeadersConfig {
  XSSProtection?: ResponseHeadersPolicyXSSProtection;
  FrameOptions?: ResponseHeadersPolicyFrameOptions;
  ReferrerPolicy?: ResponseHeadersPolicyReferrerPolicy;
  ContentSecurityPolicy?: ResponseHeadersPolicyContentSecurityPolicy;
  ContentTypeOptions?: ResponseHeadersPolicyContentTypeOptions;
  StrictTransportSecurity?: ResponseHeadersPolicyStrictTransportSecurity;
}
export interface ResponseHeadersPolicyServerTimingHeadersConfig {
  Enabled: boolean;
  SamplingRate?: number;
}
export interface ResponseHeadersPolicyStrictTransportSecurity {
  Override: boolean;
  IncludeSubdomains?: boolean;
  Preload?: boolean;
  AccessControlMaxAgeSec: number;
}
export interface ResponseHeadersPolicySummary {
  Type: ResponseHeadersPolicyType;
  ResponseHeadersPolicy: ResponseHeadersPolicy;
}
export type ResponseHeadersPolicySummaryList =
  Array<ResponseHeadersPolicySummary>;
export type ResponseHeadersPolicyType = "managed" | "custom";
export interface ResponseHeadersPolicyXSSProtection {
  Override: boolean;
  Protection: boolean;
  ModeBlock?: boolean;
  ReportUri?: string;
}
export interface Restrictions {
  GeoRestriction: GeoRestriction;
}
export interface S3Origin {
  DomainName: string;
  OriginAccessIdentity: string;
}
export interface S3OriginConfig {
  OriginAccessIdentity: string;
}
export type SamplingRate = number;

export type sensitiveStringType = string;

export interface SessionStickinessConfig {
  IdleTTL: number;
  MaximumTTL: number;
}
export interface Signer {
  AwsAccountNumber?: string;
  KeyPairIds?: KeyPairIds;
}
export type SignerList = Array<Signer>;
export type SslProtocol = "SSLv3" | "TLSv1" | "TLSv1_1" | "TLSv1_2";
export type SslProtocolsList = Array<SslProtocol>;
export type SSLSupportMethod = "sni_only" | "vip" | "static_ip";
export type StagingDistributionDnsNameList = Array<string>;
export interface StagingDistributionDnsNames {
  Quantity: number;
  Items?: Array<string>;
}
export declare class StagingDistributionInUse extends EffectData.TaggedError(
  "StagingDistributionInUse",
)<{
  readonly Message?: string;
}> {}
export type StatusCodeList = Array<number>;
export interface StatusCodes {
  Quantity: number;
  Items: Array<number>;
}
export interface StreamingDistribution {
  Id: string;
  ARN: string;
  Status: string;
  LastModifiedTime?: Date | string;
  DomainName: string;
  ActiveTrustedSigners: ActiveTrustedSigners;
  StreamingDistributionConfig: StreamingDistributionConfig;
}
export declare class StreamingDistributionAlreadyExists extends EffectData.TaggedError(
  "StreamingDistributionAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export interface StreamingDistributionConfig {
  CallerReference: string;
  S3Origin: S3Origin;
  Aliases?: Aliases;
  Comment: string;
  Logging?: StreamingLoggingConfig;
  TrustedSigners: TrustedSigners;
  PriceClass?: PriceClass;
  Enabled: boolean;
}
export interface StreamingDistributionConfigWithTags {
  StreamingDistributionConfig: StreamingDistributionConfig;
  Tags: Tags;
}
export interface StreamingDistributionList {
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items?: Array<StreamingDistributionSummary>;
}
export declare class StreamingDistributionNotDisabled extends EffectData.TaggedError(
  "StreamingDistributionNotDisabled",
)<{
  readonly Message?: string;
}> {}
export interface StreamingDistributionSummary {
  Id: string;
  ARN: string;
  Status: string;
  LastModifiedTime: Date | string;
  DomainName: string;
  S3Origin: S3Origin;
  Aliases: Aliases;
  TrustedSigners: TrustedSigners;
  Comment: string;
  PriceClass: PriceClass;
  Enabled: boolean;
}
export type StreamingDistributionSummaryList =
  Array<StreamingDistributionSummary>;
export interface StreamingLoggingConfig {
  Enabled: boolean;
  Bucket: string;
  Prefix: string;
}
export type Cloudfrontstring = string;

export interface StringSchemaConfig {
  Comment?: string;
  DefaultValue?: string;
  Required: boolean;
}
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagKeys {
  Items?: Array<string>;
}
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  Resource: string;
  Tags: Tags;
}
export interface Tags {
  Items?: Array<Tag>;
}
export type TagValue = string;

export interface TenantConfig {
  ParameterDefinitions?: Array<ParameterDefinition>;
}
export declare class TestFunctionFailed extends EffectData.TaggedError(
  "TestFunctionFailed",
)<{
  readonly Message?: string;
}> {}
export interface TestFunctionRequest {
  Name: string;
  IfMatch: string;
  Stage?: FunctionStage;
  EventObject: Uint8Array | string;
}
export interface TestFunctionResult {
  TestResult?: TestResult;
}
export interface TestResult {
  FunctionSummary?: FunctionSummary;
  ComputeUtilization?: string;
  FunctionExecutionLogs?: Array<string>;
  FunctionErrorMessage?: string;
  FunctionOutput?: string;
}
export type timestamp = Date | string;

export declare class TooLongCSPInResponseHeadersPolicy extends EffectData.TaggedError(
  "TooLongCSPInResponseHeadersPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCacheBehaviors extends EffectData.TaggedError(
  "TooManyCacheBehaviors",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCachePolicies extends EffectData.TaggedError(
  "TooManyCachePolicies",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCertificates extends EffectData.TaggedError(
  "TooManyCertificates",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCloudFrontOriginAccessIdentities extends EffectData.TaggedError(
  "TooManyCloudFrontOriginAccessIdentities",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyContinuousDeploymentPolicies extends EffectData.TaggedError(
  "TooManyContinuousDeploymentPolicies",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCookieNamesInWhiteList extends EffectData.TaggedError(
  "TooManyCookieNamesInWhiteList",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCookiesInCachePolicy extends EffectData.TaggedError(
  "TooManyCookiesInCachePolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCookiesInOriginRequestPolicy extends EffectData.TaggedError(
  "TooManyCookiesInOriginRequestPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyCustomHeadersInResponseHeadersPolicy extends EffectData.TaggedError(
  "TooManyCustomHeadersInResponseHeadersPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionCNAMEs extends EffectData.TaggedError(
  "TooManyDistributionCNAMEs",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributions extends EffectData.TaggedError(
  "TooManyDistributions",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsAssociatedToCachePolicy extends EffectData.TaggedError(
  "TooManyDistributionsAssociatedToCachePolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsAssociatedToFieldLevelEncryptionConfig extends EffectData.TaggedError(
  "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsAssociatedToKeyGroup extends EffectData.TaggedError(
  "TooManyDistributionsAssociatedToKeyGroup",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsAssociatedToOriginAccessControl extends EffectData.TaggedError(
  "TooManyDistributionsAssociatedToOriginAccessControl",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsAssociatedToOriginRequestPolicy extends EffectData.TaggedError(
  "TooManyDistributionsAssociatedToOriginRequestPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsAssociatedToResponseHeadersPolicy extends EffectData.TaggedError(
  "TooManyDistributionsAssociatedToResponseHeadersPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsWithFunctionAssociations extends EffectData.TaggedError(
  "TooManyDistributionsWithFunctionAssociations",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsWithLambdaAssociations extends EffectData.TaggedError(
  "TooManyDistributionsWithLambdaAssociations",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyDistributionsWithSingleFunctionARN extends EffectData.TaggedError(
  "TooManyDistributionsWithSingleFunctionARN",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFieldLevelEncryptionConfigs extends EffectData.TaggedError(
  "TooManyFieldLevelEncryptionConfigs",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFieldLevelEncryptionContentTypeProfiles extends EffectData.TaggedError(
  "TooManyFieldLevelEncryptionContentTypeProfiles",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFieldLevelEncryptionEncryptionEntities extends EffectData.TaggedError(
  "TooManyFieldLevelEncryptionEncryptionEntities",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFieldLevelEncryptionFieldPatterns extends EffectData.TaggedError(
  "TooManyFieldLevelEncryptionFieldPatterns",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFieldLevelEncryptionProfiles extends EffectData.TaggedError(
  "TooManyFieldLevelEncryptionProfiles",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFieldLevelEncryptionQueryArgProfiles extends EffectData.TaggedError(
  "TooManyFieldLevelEncryptionQueryArgProfiles",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFunctionAssociations extends EffectData.TaggedError(
  "TooManyFunctionAssociations",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyFunctions extends EffectData.TaggedError(
  "TooManyFunctions",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyHeadersInCachePolicy extends EffectData.TaggedError(
  "TooManyHeadersInCachePolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyHeadersInForwardedValues extends EffectData.TaggedError(
  "TooManyHeadersInForwardedValues",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyHeadersInOriginRequestPolicy extends EffectData.TaggedError(
  "TooManyHeadersInOriginRequestPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyInvalidationsInProgress extends EffectData.TaggedError(
  "TooManyInvalidationsInProgress",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyKeyGroups extends EffectData.TaggedError(
  "TooManyKeyGroups",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyKeyGroupsAssociatedToDistribution extends EffectData.TaggedError(
  "TooManyKeyGroupsAssociatedToDistribution",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyLambdaFunctionAssociations extends EffectData.TaggedError(
  "TooManyLambdaFunctionAssociations",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyOriginAccessControls extends EffectData.TaggedError(
  "TooManyOriginAccessControls",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyOriginCustomHeaders extends EffectData.TaggedError(
  "TooManyOriginCustomHeaders",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyOriginGroupsPerDistribution extends EffectData.TaggedError(
  "TooManyOriginGroupsPerDistribution",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyOriginRequestPolicies extends EffectData.TaggedError(
  "TooManyOriginRequestPolicies",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyOrigins extends EffectData.TaggedError(
  "TooManyOrigins",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyPublicKeys extends EffectData.TaggedError(
  "TooManyPublicKeys",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyPublicKeysInKeyGroup extends EffectData.TaggedError(
  "TooManyPublicKeysInKeyGroup",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyQueryStringParameters extends EffectData.TaggedError(
  "TooManyQueryStringParameters",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyQueryStringsInCachePolicy extends EffectData.TaggedError(
  "TooManyQueryStringsInCachePolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyQueryStringsInOriginRequestPolicy extends EffectData.TaggedError(
  "TooManyQueryStringsInOriginRequestPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyRealtimeLogConfigs extends EffectData.TaggedError(
  "TooManyRealtimeLogConfigs",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyRemoveHeadersInResponseHeadersPolicy extends EffectData.TaggedError(
  "TooManyRemoveHeadersInResponseHeadersPolicy",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyResponseHeadersPolicies extends EffectData.TaggedError(
  "TooManyResponseHeadersPolicies",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyStreamingDistributionCNAMEs extends EffectData.TaggedError(
  "TooManyStreamingDistributionCNAMEs",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyStreamingDistributions extends EffectData.TaggedError(
  "TooManyStreamingDistributions",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTrustedSigners extends EffectData.TaggedError(
  "TooManyTrustedSigners",
)<{
  readonly Message?: string;
}> {}
export interface TrafficConfig {
  SingleWeightConfig?: ContinuousDeploymentSingleWeightConfig;
  SingleHeaderConfig?: ContinuousDeploymentSingleHeaderConfig;
  Type: ContinuousDeploymentPolicyType;
}
export declare class TrustedKeyGroupDoesNotExist extends EffectData.TaggedError(
  "TrustedKeyGroupDoesNotExist",
)<{
  readonly Message?: string;
}> {}
export type TrustedKeyGroupIdList = Array<string>;
export interface TrustedKeyGroups {
  Enabled: boolean;
  Quantity: number;
  Items?: Array<string>;
}
export declare class TrustedSignerDoesNotExist extends EffectData.TaggedError(
  "TrustedSignerDoesNotExist",
)<{
  readonly Message?: string;
}> {}
export interface TrustedSigners {
  Enabled: boolean;
  Quantity: number;
  Items?: Array<string>;
}
export declare class UnsupportedOperation extends EffectData.TaggedError(
  "UnsupportedOperation",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  Resource: string;
  TagKeys: TagKeys;
}
export interface UpdateCachePolicyRequest {
  CachePolicyConfig: CachePolicyConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateCachePolicyResult {
  CachePolicy?: CachePolicy;
  ETag?: string;
}
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateCloudFrontOriginAccessIdentityResult {
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
  ETag?: string;
}
export interface UpdateConnectionGroupRequest {
  Id: string;
  Ipv6Enabled?: boolean;
  IfMatch: string;
  AnycastIpListId?: string;
  Enabled?: boolean;
}
export interface UpdateConnectionGroupResult {
  ConnectionGroup?: ConnectionGroup;
  ETag?: string;
}
export interface UpdateContinuousDeploymentPolicyRequest {
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateContinuousDeploymentPolicyResult {
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;
  ETag?: string;
}
export interface UpdateDistributionRequest {
  DistributionConfig: DistributionConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateDistributionResult {
  Distribution?: Distribution;
  ETag?: string;
}
export interface UpdateDistributionTenantRequest {
  Id: string;
  DistributionId?: string;
  Domains?: Array<DomainItem>;
  Customizations?: Customizations;
  Parameters?: Array<Parameter>;
  ConnectionGroupId?: string;
  IfMatch: string;
  ManagedCertificateRequest?: ManagedCertificateRequest;
  Enabled?: boolean;
}
export interface UpdateDistributionTenantResult {
  DistributionTenant?: DistributionTenant;
  ETag?: string;
}
export interface UpdateDistributionWithStagingConfigRequest {
  Id: string;
  StagingDistributionId?: string;
  IfMatch?: string;
}
export interface UpdateDistributionWithStagingConfigResult {
  Distribution?: Distribution;
  ETag?: string;
}
export interface UpdateDomainAssociationRequest {
  Domain: string;
  TargetResource: DistributionResourceId;
  IfMatch?: string;
}
export interface UpdateDomainAssociationResult {
  Domain?: string;
  ResourceId?: string;
  ETag?: string;
}
export interface UpdateFieldLevelEncryptionConfigRequest {
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateFieldLevelEncryptionConfigResult {
  FieldLevelEncryption?: FieldLevelEncryption;
  ETag?: string;
}
export interface UpdateFieldLevelEncryptionProfileRequest {
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateFieldLevelEncryptionProfileResult {
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
  ETag?: string;
}
export interface UpdateFunctionRequest {
  Name: string;
  IfMatch: string;
  FunctionConfig: FunctionConfig;
  FunctionCode: Uint8Array | string;
}
export interface UpdateFunctionResult {
  FunctionSummary?: FunctionSummary;
  ETag?: string;
}
export interface UpdateKeyGroupRequest {
  KeyGroupConfig: KeyGroupConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateKeyGroupResult {
  KeyGroup?: KeyGroup;
  ETag?: string;
}
export interface UpdateKeyValueStoreRequest {
  Name: string;
  Comment: string;
  IfMatch: string;
}
export interface UpdateKeyValueStoreResult {
  KeyValueStore?: KeyValueStore;
  ETag?: string;
}
export interface UpdateOriginAccessControlRequest {
  OriginAccessControlConfig: OriginAccessControlConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateOriginAccessControlResult {
  OriginAccessControl?: OriginAccessControl;
  ETag?: string;
}
export interface UpdateOriginRequestPolicyRequest {
  OriginRequestPolicyConfig: OriginRequestPolicyConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateOriginRequestPolicyResult {
  OriginRequestPolicy?: OriginRequestPolicy;
  ETag?: string;
}
export interface UpdatePublicKeyRequest {
  PublicKeyConfig: PublicKeyConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdatePublicKeyResult {
  PublicKey?: PublicKey;
  ETag?: string;
}
export interface UpdateRealtimeLogConfigRequest {
  EndPoints?: Array<EndPoint>;
  Fields?: Array<string>;
  Name?: string;
  ARN?: string;
  SamplingRate?: number;
}
export interface UpdateRealtimeLogConfigResult {
  RealtimeLogConfig?: RealtimeLogConfig;
}
export interface UpdateResponseHeadersPolicyRequest {
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateResponseHeadersPolicyResult {
  ResponseHeadersPolicy?: ResponseHeadersPolicy;
  ETag?: string;
}
export interface UpdateStreamingDistributionRequest {
  StreamingDistributionConfig: StreamingDistributionConfig;
  Id: string;
  IfMatch?: string;
}
export interface UpdateStreamingDistributionResult {
  StreamingDistribution?: StreamingDistribution;
  ETag?: string;
}
export interface UpdateVpcOriginRequest {
  VpcOriginEndpointConfig: VpcOriginEndpointConfig;
  Id: string;
  IfMatch: string;
}
export interface UpdateVpcOriginResult {
  VpcOrigin?: VpcOrigin;
  ETag?: string;
}
export interface ValidationTokenDetail {
  Domain: string;
  RedirectTo?: string;
  RedirectFrom?: string;
}
export type ValidationTokenDetailList = Array<ValidationTokenDetail>;
export type ValidationTokenHost = "CloudFront" | "SelfHosted";
export interface VerifyDnsConfigurationRequest {
  Domain?: string;
  Identifier: string;
}
export interface VerifyDnsConfigurationResult {
  DnsConfigurationList?: Array<DnsConfiguration>;
}
export interface ViewerCertificate {
  CloudFrontDefaultCertificate?: boolean;
  IAMCertificateId?: string;
  ACMCertificateArn?: string;
  SSLSupportMethod?: SSLSupportMethod;
  MinimumProtocolVersion?: MinimumProtocolVersion;
  Certificate?: string;
  CertificateSource?: CertificateSource;
}
export type ViewerProtocolPolicy =
  | "allow_all"
  | "https_only"
  | "redirect_to_https";
export interface VpcOrigin {
  Id: string;
  Arn: string;
  Status: string;
  CreatedTime: Date | string;
  LastModifiedTime: Date | string;
  VpcOriginEndpointConfig: VpcOriginEndpointConfig;
}
export interface VpcOriginConfig {
  VpcOriginId: string;
  OriginReadTimeout?: number;
  OriginKeepaliveTimeout?: number;
}
export interface VpcOriginEndpointConfig {
  Name: string;
  Arn: string;
  HTTPPort: number;
  HTTPSPort: number;
  OriginProtocolPolicy: OriginProtocolPolicy;
  OriginSslProtocols?: OriginSslProtocols;
}
export interface VpcOriginList {
  Marker: string;
  NextMarker?: string;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items?: Array<VpcOriginSummary>;
}
export interface VpcOriginSummary {
  Id: string;
  Name: string;
  Status: string;
  CreatedTime: Date | string;
  LastModifiedTime: Date | string;
  Arn: string;
  OriginEndpointArn: string;
}
export type VpcOriginSummaryList = Array<VpcOriginSummary>;
export interface WebAclCustomization {
  Action: CustomizationActionType;
  Arn?: string;
}
export declare namespace AssociateAlias {
  export type Input = AssociateAliasRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | IllegalUpdate
    | InvalidArgument
    | NoSuchDistribution
    | TooManyDistributionCNAMEs
    | CommonAwsError;
}

export declare namespace AssociateDistributionTenantWebACL {
  export type Input = AssociateDistributionTenantWebACLRequest;
  export type Output = AssociateDistributionTenantWebACLResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace AssociateDistributionWebACL {
  export type Input = AssociateDistributionWebACLRequest;
  export type Output = AssociateDistributionWebACLResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace CopyDistribution {
  export type Input = CopyDistributionRequest;
  export type Output = CopyDistributionResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | DistributionAlreadyExists
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidIfMatchVersion
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidProtocolSettings
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchDistribution
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributions
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace CreateAnycastIpList {
  export type Input = CreateAnycastIpListRequest;
  export type Output = CreateAnycastIpListResult;
  export type Error =
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | InvalidArgument
    | InvalidTagging
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateCachePolicy {
  export type Input = CreateCachePolicyRequest;
  export type Output = CreateCachePolicyResult;
  export type Error =
    | AccessDenied
    | CachePolicyAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | TooManyCachePolicies
    | TooManyCookiesInCachePolicy
    | TooManyHeadersInCachePolicy
    | TooManyQueryStringsInCachePolicy
    | CommonAwsError;
}

export declare namespace CreateCloudFrontOriginAccessIdentity {
  export type Input = CreateCloudFrontOriginAccessIdentityRequest;
  export type Output = CreateCloudFrontOriginAccessIdentityResult;
  export type Error =
    | CloudFrontOriginAccessIdentityAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | MissingBody
    | TooManyCloudFrontOriginAccessIdentities
    | CommonAwsError;
}

export declare namespace CreateConnectionGroup {
  export type Input = CreateConnectionGroupRequest;
  export type Output = CreateConnectionGroupResult;
  export type Error =
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidTagging
    | CommonAwsError;
}

export declare namespace CreateContinuousDeploymentPolicy {
  export type Input = CreateContinuousDeploymentPolicyRequest;
  export type Output = CreateContinuousDeploymentPolicyResult;
  export type Error =
    | AccessDenied
    | ContinuousDeploymentPolicyAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | StagingDistributionInUse
    | TooManyContinuousDeploymentPolicies
    | CommonAwsError;
}

export declare namespace CreateDistribution {
  export type Input = CreateDistributionRequest;
  export type Output = CreateDistributionResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | ContinuousDeploymentPolicyInUse
    | DistributionAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalOriginAccessConfiguration
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidDomainNameForOriginAccessControl
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidProtocolSettings
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchContinuousDeploymentPolicy
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributions
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace CreateDistributionTenant {
  export type Input = CreateDistributionTenantRequest;
  export type Output = CreateDistributionTenantResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidAssociation
    | InvalidTagging
    | CommonAwsError;
}

export declare namespace CreateDistributionWithTags {
  export type Input = CreateDistributionWithTagsRequest;
  export type Output = CreateDistributionWithTagsResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | ContinuousDeploymentPolicyInUse
    | DistributionAlreadyExists
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalOriginAccessConfiguration
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidDomainNameForOriginAccessControl
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidProtocolSettings
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTagging
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchContinuousDeploymentPolicy
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributions
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace CreateFieldLevelEncryptionConfig {
  export type Input = CreateFieldLevelEncryptionConfigRequest;
  export type Output = CreateFieldLevelEncryptionConfigResult;
  export type Error =
    | FieldLevelEncryptionConfigAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | NoSuchFieldLevelEncryptionProfile
    | QueryArgProfileEmpty
    | TooManyFieldLevelEncryptionConfigs
    | TooManyFieldLevelEncryptionContentTypeProfiles
    | TooManyFieldLevelEncryptionQueryArgProfiles
    | CommonAwsError;
}

export declare namespace CreateFieldLevelEncryptionProfile {
  export type Input = CreateFieldLevelEncryptionProfileRequest;
  export type Output = CreateFieldLevelEncryptionProfileResult;
  export type Error =
    | FieldLevelEncryptionProfileAlreadyExists
    | FieldLevelEncryptionProfileSizeExceeded
    | InconsistentQuantities
    | InvalidArgument
    | NoSuchPublicKey
    | TooManyFieldLevelEncryptionEncryptionEntities
    | TooManyFieldLevelEncryptionFieldPatterns
    | TooManyFieldLevelEncryptionProfiles
    | CommonAwsError;
}

export declare namespace CreateFunction {
  export type Input = CreateFunctionRequest;
  export type Output = CreateFunctionResult;
  export type Error =
    | FunctionAlreadyExists
    | FunctionSizeLimitExceeded
    | InvalidArgument
    | TooManyFunctions
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateInvalidation {
  export type Input = CreateInvalidationRequest;
  export type Output = CreateInvalidationResult;
  export type Error =
    | AccessDenied
    | BatchTooLarge
    | InconsistentQuantities
    | InvalidArgument
    | MissingBody
    | NoSuchDistribution
    | TooManyInvalidationsInProgress
    | CommonAwsError;
}

export declare namespace CreateInvalidationForDistributionTenant {
  export type Input = CreateInvalidationForDistributionTenantRequest;
  export type Output = CreateInvalidationForDistributionTenantResult;
  export type Error =
    | AccessDenied
    | BatchTooLarge
    | EntityNotFound
    | InconsistentQuantities
    | InvalidArgument
    | MissingBody
    | TooManyInvalidationsInProgress
    | CommonAwsError;
}

export declare namespace CreateKeyGroup {
  export type Input = CreateKeyGroupRequest;
  export type Output = CreateKeyGroupResult;
  export type Error =
    | InvalidArgument
    | KeyGroupAlreadyExists
    | TooManyKeyGroups
    | TooManyPublicKeysInKeyGroup
    | CommonAwsError;
}

export declare namespace CreateKeyValueStore {
  export type Input = CreateKeyValueStoreRequest;
  export type Output = CreateKeyValueStoreResult;
  export type Error =
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntitySizeLimitExceeded
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateMonitoringSubscription {
  export type Input = CreateMonitoringSubscriptionRequest;
  export type Output = CreateMonitoringSubscriptionResult;
  export type Error =
    | AccessDenied
    | MonitoringSubscriptionAlreadyExists
    | NoSuchDistribution
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateOriginAccessControl {
  export type Input = CreateOriginAccessControlRequest;
  export type Output = CreateOriginAccessControlResult;
  export type Error =
    | InvalidArgument
    | OriginAccessControlAlreadyExists
    | TooManyOriginAccessControls
    | CommonAwsError;
}

export declare namespace CreateOriginRequestPolicy {
  export type Input = CreateOriginRequestPolicyRequest;
  export type Output = CreateOriginRequestPolicyResult;
  export type Error =
    | AccessDenied
    | InconsistentQuantities
    | InvalidArgument
    | OriginRequestPolicyAlreadyExists
    | TooManyCookiesInOriginRequestPolicy
    | TooManyHeadersInOriginRequestPolicy
    | TooManyOriginRequestPolicies
    | TooManyQueryStringsInOriginRequestPolicy
    | CommonAwsError;
}

export declare namespace CreatePublicKey {
  export type Input = CreatePublicKeyRequest;
  export type Output = CreatePublicKeyResult;
  export type Error =
    | InvalidArgument
    | PublicKeyAlreadyExists
    | TooManyPublicKeys
    | CommonAwsError;
}

export declare namespace CreateRealtimeLogConfig {
  export type Input = CreateRealtimeLogConfigRequest;
  export type Output = CreateRealtimeLogConfigResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | RealtimeLogConfigAlreadyExists
    | TooManyRealtimeLogConfigs
    | CommonAwsError;
}

export declare namespace CreateResponseHeadersPolicy {
  export type Input = CreateResponseHeadersPolicyRequest;
  export type Output = CreateResponseHeadersPolicyResult;
  export type Error =
    | AccessDenied
    | InconsistentQuantities
    | InvalidArgument
    | ResponseHeadersPolicyAlreadyExists
    | TooLongCSPInResponseHeadersPolicy
    | TooManyCustomHeadersInResponseHeadersPolicy
    | TooManyRemoveHeadersInResponseHeadersPolicy
    | TooManyResponseHeadersPolicies
    | CommonAwsError;
}

export declare namespace CreateStreamingDistribution {
  export type Input = CreateStreamingDistributionRequest;
  export type Output = CreateStreamingDistributionResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | MissingBody
    | StreamingDistributionAlreadyExists
    | TooManyStreamingDistributionCNAMEs
    | TooManyStreamingDistributions
    | TooManyTrustedSigners
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace CreateStreamingDistributionWithTags {
  export type Input = CreateStreamingDistributionWithTagsRequest;
  export type Output = CreateStreamingDistributionWithTagsResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | InconsistentQuantities
    | InvalidArgument
    | InvalidOrigin
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidTagging
    | MissingBody
    | StreamingDistributionAlreadyExists
    | TooManyStreamingDistributionCNAMEs
    | TooManyStreamingDistributions
    | TooManyTrustedSigners
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace CreateVpcOrigin {
  export type Input = CreateVpcOriginRequest;
  export type Output = CreateVpcOriginResult;
  export type Error =
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | InconsistentQuantities
    | InvalidArgument
    | InvalidTagging
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteAnycastIpList {
  export type Input = DeleteAnycastIpListRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | IllegalDelete
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteCachePolicy {
  export type Input = DeleteCachePolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | CachePolicyInUse
    | IllegalDelete
    | InvalidIfMatchVersion
    | NoSuchCachePolicy
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DeleteCloudFrontOriginAccessIdentity {
  export type Input = DeleteCloudFrontOriginAccessIdentityRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | CloudFrontOriginAccessIdentityInUse
    | InvalidIfMatchVersion
    | NoSuchCloudFrontOriginAccessIdentity
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DeleteConnectionGroup {
  export type Input = DeleteConnectionGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | InvalidIfMatchVersion
    | PreconditionFailed
    | ResourceNotDisabled
    | CommonAwsError;
}

export declare namespace DeleteContinuousDeploymentPolicy {
  export type Input = DeleteContinuousDeploymentPolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | ContinuousDeploymentPolicyInUse
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchContinuousDeploymentPolicy
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DeleteDistribution {
  export type Input = DeleteDistributionRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | DistributionNotDisabled
    | InvalidIfMatchVersion
    | NoSuchDistribution
    | PreconditionFailed
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace DeleteDistributionTenant {
  export type Input = DeleteDistributionTenantRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidIfMatchVersion
    | PreconditionFailed
    | ResourceNotDisabled
    | CommonAwsError;
}

export declare namespace DeleteFieldLevelEncryptionConfig {
  export type Input = DeleteFieldLevelEncryptionConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | FieldLevelEncryptionConfigInUse
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionConfig
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DeleteFieldLevelEncryptionProfile {
  export type Input = DeleteFieldLevelEncryptionProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | FieldLevelEncryptionProfileInUse
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionProfile
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DeleteFunction {
  export type Input = DeleteFunctionRequest;
  export type Output = {};
  export type Error =
    | FunctionInUse
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteKeyGroup {
  export type Input = DeleteKeyGroupRequest;
  export type Output = {};
  export type Error =
    | InvalidIfMatchVersion
    | NoSuchResource
    | PreconditionFailed
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace DeleteKeyValueStore {
  export type Input = DeleteKeyValueStoreRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteMonitoringSubscription {
  export type Input = DeleteMonitoringSubscriptionRequest;
  export type Output = DeleteMonitoringSubscriptionResult;
  export type Error =
    | AccessDenied
    | NoSuchDistribution
    | NoSuchMonitoringSubscription
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteOriginAccessControl {
  export type Input = DeleteOriginAccessControlRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | InvalidIfMatchVersion
    | NoSuchOriginAccessControl
    | OriginAccessControlInUse
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DeleteOriginRequestPolicy {
  export type Input = DeleteOriginRequestPolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | IllegalDelete
    | InvalidIfMatchVersion
    | NoSuchOriginRequestPolicy
    | OriginRequestPolicyInUse
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DeletePublicKey {
  export type Input = DeletePublicKeyRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | InvalidIfMatchVersion
    | NoSuchPublicKey
    | PreconditionFailed
    | PublicKeyInUse
    | CommonAwsError;
}

export declare namespace DeleteRealtimeLogConfig {
  export type Input = DeleteRealtimeLogConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchRealtimeLogConfig
    | RealtimeLogConfigInUse
    | CommonAwsError;
}

export declare namespace DeleteResponseHeadersPolicy {
  export type Input = DeleteResponseHeadersPolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | IllegalDelete
    | InvalidIfMatchVersion
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | ResponseHeadersPolicyInUse
    | CommonAwsError;
}

export declare namespace DeleteStreamingDistribution {
  export type Input = DeleteStreamingDistributionRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | InvalidIfMatchVersion
    | NoSuchStreamingDistribution
    | PreconditionFailed
    | StreamingDistributionNotDisabled
    | CommonAwsError;
}

export declare namespace DeleteVpcOrigin {
  export type Input = DeleteVpcOriginRequest;
  export type Output = DeleteVpcOriginResult;
  export type Error =
    | AccessDenied
    | CannotDeleteEntityWhileInUse
    | EntityNotFound
    | IllegalDelete
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DescribeFunction {
  export type Input = DescribeFunctionRequest;
  export type Output = DescribeFunctionResult;
  export type Error =
    | NoSuchFunctionExists
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DescribeKeyValueStore {
  export type Input = DescribeKeyValueStoreRequest;
  export type Output = DescribeKeyValueStoreResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DisassociateDistributionTenantWebACL {
  export type Input = DisassociateDistributionTenantWebACLRequest;
  export type Output = DisassociateDistributionTenantWebACLResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace DisassociateDistributionWebACL {
  export type Input = DisassociateDistributionWebACLRequest;
  export type Output = DisassociateDistributionWebACLResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace GetAnycastIpList {
  export type Input = GetAnycastIpListRequest;
  export type Output = GetAnycastIpListResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace GetCachePolicy {
  export type Input = GetCachePolicyRequest;
  export type Output = GetCachePolicyResult;
  export type Error = AccessDenied | NoSuchCachePolicy | CommonAwsError;
}

export declare namespace GetCachePolicyConfig {
  export type Input = GetCachePolicyConfigRequest;
  export type Output = GetCachePolicyConfigResult;
  export type Error = AccessDenied | NoSuchCachePolicy | CommonAwsError;
}

export declare namespace GetCloudFrontOriginAccessIdentity {
  export type Input = GetCloudFrontOriginAccessIdentityRequest;
  export type Output = GetCloudFrontOriginAccessIdentityResult;
  export type Error =
    | AccessDenied
    | NoSuchCloudFrontOriginAccessIdentity
    | CommonAwsError;
}

export declare namespace GetCloudFrontOriginAccessIdentityConfig {
  export type Input = GetCloudFrontOriginAccessIdentityConfigRequest;
  export type Output = GetCloudFrontOriginAccessIdentityConfigResult;
  export type Error =
    | AccessDenied
    | NoSuchCloudFrontOriginAccessIdentity
    | CommonAwsError;
}

export declare namespace GetConnectionGroup {
  export type Input = GetConnectionGroupRequest;
  export type Output = GetConnectionGroupResult;
  export type Error = AccessDenied | EntityNotFound | CommonAwsError;
}

export declare namespace GetConnectionGroupByRoutingEndpoint {
  export type Input = GetConnectionGroupByRoutingEndpointRequest;
  export type Output = GetConnectionGroupByRoutingEndpointResult;
  export type Error = AccessDenied | EntityNotFound | CommonAwsError;
}

export declare namespace GetContinuousDeploymentPolicy {
  export type Input = GetContinuousDeploymentPolicyRequest;
  export type Output = GetContinuousDeploymentPolicyResult;
  export type Error =
    | AccessDenied
    | NoSuchContinuousDeploymentPolicy
    | CommonAwsError;
}

export declare namespace GetContinuousDeploymentPolicyConfig {
  export type Input = GetContinuousDeploymentPolicyConfigRequest;
  export type Output = GetContinuousDeploymentPolicyConfigResult;
  export type Error =
    | AccessDenied
    | NoSuchContinuousDeploymentPolicy
    | CommonAwsError;
}

export declare namespace GetDistribution {
  export type Input = GetDistributionRequest;
  export type Output = GetDistributionResult;
  export type Error = AccessDenied | NoSuchDistribution | CommonAwsError;
}

export declare namespace GetDistributionConfig {
  export type Input = GetDistributionConfigRequest;
  export type Output = GetDistributionConfigResult;
  export type Error = AccessDenied | NoSuchDistribution | CommonAwsError;
}

export declare namespace GetDistributionTenant {
  export type Input = GetDistributionTenantRequest;
  export type Output = GetDistributionTenantResult;
  export type Error = AccessDenied | EntityNotFound | CommonAwsError;
}

export declare namespace GetDistributionTenantByDomain {
  export type Input = GetDistributionTenantByDomainRequest;
  export type Output = GetDistributionTenantByDomainResult;
  export type Error = AccessDenied | EntityNotFound | CommonAwsError;
}

export declare namespace GetFieldLevelEncryption {
  export type Input = GetFieldLevelEncryptionRequest;
  export type Output = GetFieldLevelEncryptionResult;
  export type Error =
    | AccessDenied
    | NoSuchFieldLevelEncryptionConfig
    | CommonAwsError;
}

export declare namespace GetFieldLevelEncryptionConfig {
  export type Input = GetFieldLevelEncryptionConfigRequest;
  export type Output = GetFieldLevelEncryptionConfigResult;
  export type Error =
    | AccessDenied
    | NoSuchFieldLevelEncryptionConfig
    | CommonAwsError;
}

export declare namespace GetFieldLevelEncryptionProfile {
  export type Input = GetFieldLevelEncryptionProfileRequest;
  export type Output = GetFieldLevelEncryptionProfileResult;
  export type Error =
    | AccessDenied
    | NoSuchFieldLevelEncryptionProfile
    | CommonAwsError;
}

export declare namespace GetFieldLevelEncryptionProfileConfig {
  export type Input = GetFieldLevelEncryptionProfileConfigRequest;
  export type Output = GetFieldLevelEncryptionProfileConfigResult;
  export type Error =
    | AccessDenied
    | NoSuchFieldLevelEncryptionProfile
    | CommonAwsError;
}

export declare namespace GetFunction {
  export type Input = GetFunctionRequest;
  export type Output = GetFunctionResult;
  export type Error =
    | NoSuchFunctionExists
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace GetInvalidation {
  export type Input = GetInvalidationRequest;
  export type Output = GetInvalidationResult;
  export type Error =
    | AccessDenied
    | NoSuchDistribution
    | NoSuchInvalidation
    | CommonAwsError;
}

export declare namespace GetInvalidationForDistributionTenant {
  export type Input = GetInvalidationForDistributionTenantRequest;
  export type Output = GetInvalidationForDistributionTenantResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | NoSuchInvalidation
    | CommonAwsError;
}

export declare namespace GetKeyGroup {
  export type Input = GetKeyGroupRequest;
  export type Output = GetKeyGroupResult;
  export type Error = NoSuchResource | CommonAwsError;
}

export declare namespace GetKeyGroupConfig {
  export type Input = GetKeyGroupConfigRequest;
  export type Output = GetKeyGroupConfigResult;
  export type Error = NoSuchResource | CommonAwsError;
}

export declare namespace GetManagedCertificateDetails {
  export type Input = GetManagedCertificateDetailsRequest;
  export type Output = GetManagedCertificateDetailsResult;
  export type Error = AccessDenied | EntityNotFound | CommonAwsError;
}

export declare namespace GetMonitoringSubscription {
  export type Input = GetMonitoringSubscriptionRequest;
  export type Output = GetMonitoringSubscriptionResult;
  export type Error =
    | AccessDenied
    | NoSuchDistribution
    | NoSuchMonitoringSubscription
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace GetOriginAccessControl {
  export type Input = GetOriginAccessControlRequest;
  export type Output = GetOriginAccessControlResult;
  export type Error = AccessDenied | NoSuchOriginAccessControl | CommonAwsError;
}

export declare namespace GetOriginAccessControlConfig {
  export type Input = GetOriginAccessControlConfigRequest;
  export type Output = GetOriginAccessControlConfigResult;
  export type Error = AccessDenied | NoSuchOriginAccessControl | CommonAwsError;
}

export declare namespace GetOriginRequestPolicy {
  export type Input = GetOriginRequestPolicyRequest;
  export type Output = GetOriginRequestPolicyResult;
  export type Error = AccessDenied | NoSuchOriginRequestPolicy | CommonAwsError;
}

export declare namespace GetOriginRequestPolicyConfig {
  export type Input = GetOriginRequestPolicyConfigRequest;
  export type Output = GetOriginRequestPolicyConfigResult;
  export type Error = AccessDenied | NoSuchOriginRequestPolicy | CommonAwsError;
}

export declare namespace GetPublicKey {
  export type Input = GetPublicKeyRequest;
  export type Output = GetPublicKeyResult;
  export type Error = AccessDenied | NoSuchPublicKey | CommonAwsError;
}

export declare namespace GetPublicKeyConfig {
  export type Input = GetPublicKeyConfigRequest;
  export type Output = GetPublicKeyConfigResult;
  export type Error = AccessDenied | NoSuchPublicKey | CommonAwsError;
}

export declare namespace GetRealtimeLogConfig {
  export type Input = GetRealtimeLogConfigRequest;
  export type Output = GetRealtimeLogConfigResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchRealtimeLogConfig
    | CommonAwsError;
}

export declare namespace GetResponseHeadersPolicy {
  export type Input = GetResponseHeadersPolicyRequest;
  export type Output = GetResponseHeadersPolicyResult;
  export type Error =
    | AccessDenied
    | NoSuchResponseHeadersPolicy
    | CommonAwsError;
}

export declare namespace GetResponseHeadersPolicyConfig {
  export type Input = GetResponseHeadersPolicyConfigRequest;
  export type Output = GetResponseHeadersPolicyConfigResult;
  export type Error =
    | AccessDenied
    | NoSuchResponseHeadersPolicy
    | CommonAwsError;
}

export declare namespace GetStreamingDistribution {
  export type Input = GetStreamingDistributionRequest;
  export type Output = GetStreamingDistributionResult;
  export type Error =
    | AccessDenied
    | NoSuchStreamingDistribution
    | CommonAwsError;
}

export declare namespace GetStreamingDistributionConfig {
  export type Input = GetStreamingDistributionConfigRequest;
  export type Output = GetStreamingDistributionConfigResult;
  export type Error =
    | AccessDenied
    | NoSuchStreamingDistribution
    | CommonAwsError;
}

export declare namespace GetVpcOrigin {
  export type Input = GetVpcOriginRequest;
  export type Output = GetVpcOriginResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListAnycastIpLists {
  export type Input = ListAnycastIpListsRequest;
  export type Output = ListAnycastIpListsResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListCachePolicies {
  export type Input = ListCachePoliciesRequest;
  export type Output = ListCachePoliciesResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchCachePolicy
    | CommonAwsError;
}

export declare namespace ListCloudFrontOriginAccessIdentities {
  export type Input = ListCloudFrontOriginAccessIdentitiesRequest;
  export type Output = ListCloudFrontOriginAccessIdentitiesResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListConflictingAliases {
  export type Input = ListConflictingAliasesRequest;
  export type Output = ListConflictingAliasesResult;
  export type Error = InvalidArgument | NoSuchDistribution | CommonAwsError;
}

export declare namespace ListConnectionGroups {
  export type Input = ListConnectionGroupsRequest;
  export type Output = ListConnectionGroupsResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | CommonAwsError;
}

export declare namespace ListContinuousDeploymentPolicies {
  export type Input = ListContinuousDeploymentPoliciesRequest;
  export type Output = ListContinuousDeploymentPoliciesResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchContinuousDeploymentPolicy
    | CommonAwsError;
}

export declare namespace ListDistributions {
  export type Input = ListDistributionsRequest;
  export type Output = ListDistributionsResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListDistributionsByAnycastIpListId {
  export type Input = ListDistributionsByAnycastIpListIdRequest;
  export type Output = ListDistributionsByAnycastIpListIdResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListDistributionsByCachePolicyId {
  export type Input = ListDistributionsByCachePolicyIdRequest;
  export type Output = ListDistributionsByCachePolicyIdResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchCachePolicy
    | CommonAwsError;
}

export declare namespace ListDistributionsByConnectionMode {
  export type Input = ListDistributionsByConnectionModeRequest;
  export type Output = ListDistributionsByConnectionModeResult;
  export type Error = AccessDenied | InvalidArgument | CommonAwsError;
}

export declare namespace ListDistributionsByKeyGroup {
  export type Input = ListDistributionsByKeyGroupRequest;
  export type Output = ListDistributionsByKeyGroupResult;
  export type Error = InvalidArgument | NoSuchResource | CommonAwsError;
}

export declare namespace ListDistributionsByOriginRequestPolicyId {
  export type Input = ListDistributionsByOriginRequestPolicyIdRequest;
  export type Output = ListDistributionsByOriginRequestPolicyIdResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchOriginRequestPolicy
    | CommonAwsError;
}

export declare namespace ListDistributionsByRealtimeLogConfig {
  export type Input = ListDistributionsByRealtimeLogConfigRequest;
  export type Output = ListDistributionsByRealtimeLogConfigResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListDistributionsByResponseHeadersPolicyId {
  export type Input = ListDistributionsByResponseHeadersPolicyIdRequest;
  export type Output = ListDistributionsByResponseHeadersPolicyIdResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchResponseHeadersPolicy
    | CommonAwsError;
}

export declare namespace ListDistributionsByVpcOriginId {
  export type Input = ListDistributionsByVpcOriginIdRequest;
  export type Output = ListDistributionsByVpcOriginIdResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListDistributionsByWebACLId {
  export type Input = ListDistributionsByWebACLIdRequest;
  export type Output = ListDistributionsByWebACLIdResult;
  export type Error = InvalidArgument | InvalidWebACLId | CommonAwsError;
}

export declare namespace ListDistributionTenants {
  export type Input = ListDistributionTenantsRequest;
  export type Output = ListDistributionTenantsResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | CommonAwsError;
}

export declare namespace ListDistributionTenantsByCustomization {
  export type Input = ListDistributionTenantsByCustomizationRequest;
  export type Output = ListDistributionTenantsByCustomizationResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | CommonAwsError;
}

export declare namespace ListDomainConflicts {
  export type Input = ListDomainConflictsRequest;
  export type Output = ListDomainConflictsResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | CommonAwsError;
}

export declare namespace ListFieldLevelEncryptionConfigs {
  export type Input = ListFieldLevelEncryptionConfigsRequest;
  export type Output = ListFieldLevelEncryptionConfigsResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListFieldLevelEncryptionProfiles {
  export type Input = ListFieldLevelEncryptionProfilesRequest;
  export type Output = ListFieldLevelEncryptionProfilesResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListFunctions {
  export type Input = ListFunctionsRequest;
  export type Output = ListFunctionsResult;
  export type Error = InvalidArgument | UnsupportedOperation | CommonAwsError;
}

export declare namespace ListInvalidations {
  export type Input = ListInvalidationsRequest;
  export type Output = ListInvalidationsResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchDistribution
    | CommonAwsError;
}

export declare namespace ListInvalidationsForDistributionTenant {
  export type Input = ListInvalidationsForDistributionTenantRequest;
  export type Output = ListInvalidationsForDistributionTenantResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | CommonAwsError;
}

export declare namespace ListKeyGroups {
  export type Input = ListKeyGroupsRequest;
  export type Output = ListKeyGroupsResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListKeyValueStores {
  export type Input = ListKeyValueStoresRequest;
  export type Output = ListKeyValueStoresResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListOriginAccessControls {
  export type Input = ListOriginAccessControlsRequest;
  export type Output = ListOriginAccessControlsResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListOriginRequestPolicies {
  export type Input = ListOriginRequestPoliciesRequest;
  export type Output = ListOriginRequestPoliciesResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchOriginRequestPolicy
    | CommonAwsError;
}

export declare namespace ListPublicKeys {
  export type Input = ListPublicKeysRequest;
  export type Output = ListPublicKeysResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListRealtimeLogConfigs {
  export type Input = ListRealtimeLogConfigsRequest;
  export type Output = ListRealtimeLogConfigsResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchRealtimeLogConfig
    | CommonAwsError;
}

export declare namespace ListResponseHeadersPolicies {
  export type Input = ListResponseHeadersPoliciesRequest;
  export type Output = ListResponseHeadersPoliciesResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchResponseHeadersPolicy
    | CommonAwsError;
}

export declare namespace ListStreamingDistributions {
  export type Input = ListStreamingDistributionsRequest;
  export type Output = ListStreamingDistributionsResult;
  export type Error = InvalidArgument | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | InvalidTagging
    | NoSuchResource
    | CommonAwsError;
}

export declare namespace ListVpcOrigins {
  export type Input = ListVpcOriginsRequest;
  export type Output = ListVpcOriginsResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace PublishFunction {
  export type Input = PublishFunctionRequest;
  export type Output = PublishFunctionResult;
  export type Error =
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | InvalidArgument
    | InvalidTagging
    | NoSuchResource
    | CommonAwsError;
}

export declare namespace TestFunction {
  export type Input = TestFunctionRequest;
  export type Output = TestFunctionResult;
  export type Error =
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | TestFunctionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDenied
    | InvalidArgument
    | InvalidTagging
    | NoSuchResource
    | CommonAwsError;
}

export declare namespace UpdateCachePolicy {
  export type Input = UpdateCachePolicyRequest;
  export type Output = UpdateCachePolicyResult;
  export type Error =
    | AccessDenied
    | CachePolicyAlreadyExists
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchCachePolicy
    | PreconditionFailed
    | TooManyCookiesInCachePolicy
    | TooManyHeadersInCachePolicy
    | TooManyQueryStringsInCachePolicy
    | CommonAwsError;
}

export declare namespace UpdateCloudFrontOriginAccessIdentity {
  export type Input = UpdateCloudFrontOriginAccessIdentityRequest;
  export type Output = UpdateCloudFrontOriginAccessIdentityResult;
  export type Error =
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | MissingBody
    | NoSuchCloudFrontOriginAccessIdentity
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace UpdateConnectionGroup {
  export type Input = UpdateConnectionGroupRequest;
  export type Output = UpdateConnectionGroupResult;
  export type Error =
    | AccessDenied
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace UpdateContinuousDeploymentPolicy {
  export type Input = UpdateContinuousDeploymentPolicyRequest;
  export type Output = UpdateContinuousDeploymentPolicyResult;
  export type Error =
    | AccessDenied
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchContinuousDeploymentPolicy
    | PreconditionFailed
    | StagingDistributionInUse
    | CommonAwsError;
}

export declare namespace UpdateDistribution {
  export type Input = UpdateDistributionRequest;
  export type Output = UpdateDistributionResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | ContinuousDeploymentPolicyInUse
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalOriginAccessConfiguration
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidDomainNameForOriginAccessControl
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidIfMatchVersion
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchContinuousDeploymentPolicy
    | NoSuchDistribution
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | RealtimeLogConfigOwnerMismatch
    | StagingDistributionInUse
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace UpdateDistributionTenant {
  export type Input = UpdateDistributionTenantRequest;
  export type Output = UpdateDistributionTenantResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | InvalidArgument
    | InvalidAssociation
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace UpdateDistributionWithStagingConfig {
  export type Input = UpdateDistributionWithStagingConfigRequest;
  export type Output = UpdateDistributionWithStagingConfigResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | EntityNotFound
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidDefaultRootObject
    | InvalidErrorCode
    | InvalidForwardCookies
    | InvalidFunctionAssociation
    | InvalidGeoRestrictionParameter
    | InvalidHeadersForS3Origin
    | InvalidIfMatchVersion
    | InvalidLambdaFunctionAssociation
    | InvalidLocationCode
    | InvalidMinimumProtocolVersion
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | InvalidOriginKeepaliveTimeout
    | InvalidOriginReadTimeout
    | InvalidQueryStringParameters
    | InvalidRelativePath
    | InvalidRequiredProtocol
    | InvalidResponseCode
    | InvalidTTLOrder
    | InvalidViewerCertificate
    | InvalidWebACLId
    | MissingBody
    | NoSuchCachePolicy
    | NoSuchDistribution
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchOrigin
    | NoSuchOriginRequestPolicy
    | NoSuchRealtimeLogConfig
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | RealtimeLogConfigOwnerMismatch
    | TooManyCacheBehaviors
    | TooManyCertificates
    | TooManyCookieNamesInWhiteList
    | TooManyDistributionCNAMEs
    | TooManyDistributionsAssociatedToCachePolicy
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    | TooManyDistributionsAssociatedToKeyGroup
    | TooManyDistributionsAssociatedToOriginAccessControl
    | TooManyDistributionsAssociatedToOriginRequestPolicy
    | TooManyDistributionsAssociatedToResponseHeadersPolicy
    | TooManyDistributionsWithFunctionAssociations
    | TooManyDistributionsWithLambdaAssociations
    | TooManyDistributionsWithSingleFunctionARN
    | TooManyFunctionAssociations
    | TooManyHeadersInForwardedValues
    | TooManyKeyGroupsAssociatedToDistribution
    | TooManyLambdaFunctionAssociations
    | TooManyOriginCustomHeaders
    | TooManyOriginGroupsPerDistribution
    | TooManyOrigins
    | TooManyQueryStringParameters
    | TooManyTrustedSigners
    | TrustedKeyGroupDoesNotExist
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace UpdateDomainAssociation {
  export type Input = UpdateDomainAssociationRequest;
  export type Output = UpdateDomainAssociationResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | IllegalUpdate
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace UpdateFieldLevelEncryptionConfig {
  export type Input = UpdateFieldLevelEncryptionConfigRequest;
  export type Output = UpdateFieldLevelEncryptionConfigResult;
  export type Error =
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionConfig
    | NoSuchFieldLevelEncryptionProfile
    | PreconditionFailed
    | QueryArgProfileEmpty
    | TooManyFieldLevelEncryptionContentTypeProfiles
    | TooManyFieldLevelEncryptionQueryArgProfiles
    | CommonAwsError;
}

export declare namespace UpdateFieldLevelEncryptionProfile {
  export type Input = UpdateFieldLevelEncryptionProfileRequest;
  export type Output = UpdateFieldLevelEncryptionProfileResult;
  export type Error =
    | AccessDenied
    | FieldLevelEncryptionProfileAlreadyExists
    | FieldLevelEncryptionProfileSizeExceeded
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFieldLevelEncryptionProfile
    | NoSuchPublicKey
    | PreconditionFailed
    | TooManyFieldLevelEncryptionEncryptionEntities
    | TooManyFieldLevelEncryptionFieldPatterns
    | CommonAwsError;
}

export declare namespace UpdateFunction {
  export type Input = UpdateFunctionRequest;
  export type Output = UpdateFunctionResult;
  export type Error =
    | FunctionSizeLimitExceeded
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchFunctionExists
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace UpdateKeyGroup {
  export type Input = UpdateKeyGroupRequest;
  export type Output = UpdateKeyGroupResult;
  export type Error =
    | InvalidArgument
    | InvalidIfMatchVersion
    | KeyGroupAlreadyExists
    | NoSuchResource
    | PreconditionFailed
    | TooManyPublicKeysInKeyGroup
    | CommonAwsError;
}

export declare namespace UpdateKeyValueStore {
  export type Input = UpdateKeyValueStoreRequest;
  export type Output = UpdateKeyValueStoreResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace UpdateOriginAccessControl {
  export type Input = UpdateOriginAccessControlRequest;
  export type Output = UpdateOriginAccessControlResult;
  export type Error =
    | AccessDenied
    | IllegalUpdate
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchOriginAccessControl
    | OriginAccessControlAlreadyExists
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace UpdateOriginRequestPolicy {
  export type Input = UpdateOriginRequestPolicyRequest;
  export type Output = UpdateOriginRequestPolicyResult;
  export type Error =
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchOriginRequestPolicy
    | OriginRequestPolicyAlreadyExists
    | PreconditionFailed
    | TooManyCookiesInOriginRequestPolicy
    | TooManyHeadersInOriginRequestPolicy
    | TooManyQueryStringsInOriginRequestPolicy
    | CommonAwsError;
}

export declare namespace UpdatePublicKey {
  export type Input = UpdatePublicKeyRequest;
  export type Output = UpdatePublicKeyResult;
  export type Error =
    | AccessDenied
    | CannotChangeImmutablePublicKeyFields
    | IllegalUpdate
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchPublicKey
    | PreconditionFailed
    | CommonAwsError;
}

export declare namespace UpdateRealtimeLogConfig {
  export type Input = UpdateRealtimeLogConfigRequest;
  export type Output = UpdateRealtimeLogConfigResult;
  export type Error =
    | AccessDenied
    | InvalidArgument
    | NoSuchRealtimeLogConfig
    | CommonAwsError;
}

export declare namespace UpdateResponseHeadersPolicy {
  export type Input = UpdateResponseHeadersPolicyRequest;
  export type Output = UpdateResponseHeadersPolicyResult;
  export type Error =
    | AccessDenied
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | NoSuchResponseHeadersPolicy
    | PreconditionFailed
    | ResponseHeadersPolicyAlreadyExists
    | TooLongCSPInResponseHeadersPolicy
    | TooManyCustomHeadersInResponseHeadersPolicy
    | TooManyRemoveHeadersInResponseHeadersPolicy
    | CommonAwsError;
}

export declare namespace UpdateStreamingDistribution {
  export type Input = UpdateStreamingDistributionRequest;
  export type Output = UpdateStreamingDistributionResult;
  export type Error =
    | AccessDenied
    | CNAMEAlreadyExists
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | InvalidOriginAccessControl
    | InvalidOriginAccessIdentity
    | MissingBody
    | NoSuchStreamingDistribution
    | PreconditionFailed
    | TooManyStreamingDistributionCNAMEs
    | TooManyTrustedSigners
    | TrustedSignerDoesNotExist
    | CommonAwsError;
}

export declare namespace UpdateVpcOrigin {
  export type Input = UpdateVpcOriginRequest;
  export type Output = UpdateVpcOriginResult;
  export type Error =
    | AccessDenied
    | CannotUpdateEntityWhileInUse
    | EntityAlreadyExists
    | EntityLimitExceeded
    | EntityNotFound
    | IllegalUpdate
    | InconsistentQuantities
    | InvalidArgument
    | InvalidIfMatchVersion
    | PreconditionFailed
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace VerifyDnsConfiguration {
  export type Input = VerifyDnsConfigurationRequest;
  export type Output = VerifyDnsConfigurationResult;
  export type Error =
    | AccessDenied
    | EntityNotFound
    | InvalidArgument
    | CommonAwsError;
}
