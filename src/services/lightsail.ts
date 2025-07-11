import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Lightsail_20161128 {
  allocateStaticIp(
    input: AllocateStaticIpRequest,
  ): Effect.Effect<
    AllocateStaticIpResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  attachCertificateToDistribution(
    input: AttachCertificateToDistributionRequest,
  ): Effect.Effect<
    AttachCertificateToDistributionResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  attachDisk(
    input: AttachDiskRequest,
  ): Effect.Effect<
    AttachDiskResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  attachInstancesToLoadBalancer(
    input: AttachInstancesToLoadBalancerRequest,
  ): Effect.Effect<
    AttachInstancesToLoadBalancerResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  attachLoadBalancerTlsCertificate(
    input: AttachLoadBalancerTlsCertificateRequest,
  ): Effect.Effect<
    AttachLoadBalancerTlsCertificateResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  attachStaticIp(
    input: AttachStaticIpRequest,
  ): Effect.Effect<
    AttachStaticIpResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  closeInstancePublicPorts(
    input: CloseInstancePublicPortsRequest,
  ): Effect.Effect<
    CloseInstancePublicPortsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  copySnapshot(
    input: CopySnapshotRequest,
  ): Effect.Effect<
    CopySnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createBucket(
    input: CreateBucketRequest,
  ): Effect.Effect<
    CreateBucketResult,
    | AccessDeniedException
    | InvalidInputException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createBucketAccessKey(
    input: CreateBucketAccessKeyRequest,
  ): Effect.Effect<
    CreateBucketAccessKeyResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createCertificate(
    input: CreateCertificateRequest,
  ): Effect.Effect<
    CreateCertificateResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createCloudFormationStack(
    input: CreateCloudFormationStackRequest,
  ): Effect.Effect<
    CreateCloudFormationStackResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createContactMethod(
    input: CreateContactMethodRequest,
  ): Effect.Effect<
    CreateContactMethodResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createContainerService(
    input: CreateContainerServiceRequest,
  ): Effect.Effect<
    CreateContainerServiceResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createContainerServiceDeployment(
    input: CreateContainerServiceDeploymentRequest,
  ): Effect.Effect<
    CreateContainerServiceDeploymentResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createContainerServiceRegistryLogin(
    input: CreateContainerServiceRegistryLoginRequest,
  ): Effect.Effect<
    CreateContainerServiceRegistryLoginResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createDisk(
    input: CreateDiskRequest,
  ): Effect.Effect<
    CreateDiskResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createDiskFromSnapshot(
    input: CreateDiskFromSnapshotRequest,
  ): Effect.Effect<
    CreateDiskFromSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createDiskSnapshot(
    input: CreateDiskSnapshotRequest,
  ): Effect.Effect<
    CreateDiskSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createDistribution(
    input: CreateDistributionRequest,
  ): Effect.Effect<
    CreateDistributionResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    CreateDomainResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createDomainEntry(
    input: CreateDomainEntryRequest,
  ): Effect.Effect<
    CreateDomainEntryResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createGUISessionAccessDetails(
    input: CreateGUISessionAccessDetailsRequest,
  ): Effect.Effect<
    CreateGUISessionAccessDetailsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createInstances(
    input: CreateInstancesRequest,
  ): Effect.Effect<
    CreateInstancesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createInstancesFromSnapshot(
    input: CreateInstancesFromSnapshotRequest,
  ): Effect.Effect<
    CreateInstancesFromSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createInstanceSnapshot(
    input: CreateInstanceSnapshotRequest,
  ): Effect.Effect<
    CreateInstanceSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createKeyPair(
    input: CreateKeyPairRequest,
  ): Effect.Effect<
    CreateKeyPairResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createLoadBalancer(
    input: CreateLoadBalancerRequest,
  ): Effect.Effect<
    CreateLoadBalancerResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createLoadBalancerTlsCertificate(
    input: CreateLoadBalancerTlsCertificateRequest,
  ): Effect.Effect<
    CreateLoadBalancerTlsCertificateResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createRelationalDatabase(
    input: CreateRelationalDatabaseRequest,
  ): Effect.Effect<
    CreateRelationalDatabaseResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createRelationalDatabaseFromSnapshot(
    input: CreateRelationalDatabaseFromSnapshotRequest,
  ): Effect.Effect<
    CreateRelationalDatabaseFromSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  createRelationalDatabaseSnapshot(
    input: CreateRelationalDatabaseSnapshotRequest,
  ): Effect.Effect<
    CreateRelationalDatabaseSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteAlarm(
    input: DeleteAlarmRequest,
  ): Effect.Effect<
    DeleteAlarmResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteAutoSnapshot(
    input: DeleteAutoSnapshotRequest,
  ): Effect.Effect<
    DeleteAutoSnapshotResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteBucket(
    input: DeleteBucketRequest,
  ): Effect.Effect<
    DeleteBucketResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteBucketAccessKey(
    input: DeleteBucketAccessKeyRequest,
  ): Effect.Effect<
    DeleteBucketAccessKeyResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteCertificate(
    input: DeleteCertificateRequest,
  ): Effect.Effect<
    DeleteCertificateResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteContactMethod(
    input: DeleteContactMethodRequest,
  ): Effect.Effect<
    DeleteContactMethodResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteContainerImage(
    input: DeleteContainerImageRequest,
  ): Effect.Effect<
    DeleteContainerImageResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteContainerService(
    input: DeleteContainerServiceRequest,
  ): Effect.Effect<
    DeleteContainerServiceResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteDisk(
    input: DeleteDiskRequest,
  ): Effect.Effect<
    DeleteDiskResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteDiskSnapshot(
    input: DeleteDiskSnapshotRequest,
  ): Effect.Effect<
    DeleteDiskSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteDistribution(
    input: DeleteDistributionRequest,
  ): Effect.Effect<
    DeleteDistributionResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    DeleteDomainResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteDomainEntry(
    input: DeleteDomainEntryRequest,
  ): Effect.Effect<
    DeleteDomainEntryResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteInstance(
    input: DeleteInstanceRequest,
  ): Effect.Effect<
    DeleteInstanceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteInstanceSnapshot(
    input: DeleteInstanceSnapshotRequest,
  ): Effect.Effect<
    DeleteInstanceSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteKeyPair(
    input: DeleteKeyPairRequest,
  ): Effect.Effect<
    DeleteKeyPairResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteKnownHostKeys(
    input: DeleteKnownHostKeysRequest,
  ): Effect.Effect<
    DeleteKnownHostKeysResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteLoadBalancer(
    input: DeleteLoadBalancerRequest,
  ): Effect.Effect<
    DeleteLoadBalancerResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteLoadBalancerTlsCertificate(
    input: DeleteLoadBalancerTlsCertificateRequest,
  ): Effect.Effect<
    DeleteLoadBalancerTlsCertificateResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteRelationalDatabase(
    input: DeleteRelationalDatabaseRequest,
  ): Effect.Effect<
    DeleteRelationalDatabaseResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  deleteRelationalDatabaseSnapshot(
    input: DeleteRelationalDatabaseSnapshotRequest,
  ): Effect.Effect<
    DeleteRelationalDatabaseSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  detachCertificateFromDistribution(
    input: DetachCertificateFromDistributionRequest,
  ): Effect.Effect<
    DetachCertificateFromDistributionResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  detachDisk(
    input: DetachDiskRequest,
  ): Effect.Effect<
    DetachDiskResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  detachInstancesFromLoadBalancer(
    input: DetachInstancesFromLoadBalancerRequest,
  ): Effect.Effect<
    DetachInstancesFromLoadBalancerResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  detachStaticIp(
    input: DetachStaticIpRequest,
  ): Effect.Effect<
    DetachStaticIpResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  disableAddOn(
    input: DisableAddOnRequest,
  ): Effect.Effect<
    DisableAddOnResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  downloadDefaultKeyPair(
    input: DownloadDefaultKeyPairRequest,
  ): Effect.Effect<
    DownloadDefaultKeyPairResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  enableAddOn(
    input: EnableAddOnRequest,
  ): Effect.Effect<
    EnableAddOnResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  exportSnapshot(
    input: ExportSnapshotRequest,
  ): Effect.Effect<
    ExportSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getActiveNames(
    input: GetActiveNamesRequest,
  ): Effect.Effect<
    GetActiveNamesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getAlarms(
    input: GetAlarmsRequest,
  ): Effect.Effect<
    GetAlarmsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getAutoSnapshots(
    input: GetAutoSnapshotsRequest,
  ): Effect.Effect<
    GetAutoSnapshotsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getBlueprints(
    input: GetBlueprintsRequest,
  ): Effect.Effect<
    GetBlueprintsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getBucketAccessKeys(
    input: GetBucketAccessKeysRequest,
  ): Effect.Effect<
    GetBucketAccessKeysResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getBucketBundles(
    input: GetBucketBundlesRequest,
  ): Effect.Effect<
    GetBucketBundlesResult,
    | AccessDeniedException
    | InvalidInputException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getBucketMetricData(
    input: GetBucketMetricDataRequest,
  ): Effect.Effect<
    GetBucketMetricDataResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getBuckets(
    input: GetBucketsRequest,
  ): Effect.Effect<
    GetBucketsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getBundles(
    input: GetBundlesRequest,
  ): Effect.Effect<
    GetBundlesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getCertificates(
    input: GetCertificatesRequest,
  ): Effect.Effect<
    GetCertificatesResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getCloudFormationStackRecords(
    input: GetCloudFormationStackRecordsRequest,
  ): Effect.Effect<
    GetCloudFormationStackRecordsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContactMethods(
    input: GetContactMethodsRequest,
  ): Effect.Effect<
    GetContactMethodsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContainerAPIMetadata(
    input: GetContainerAPIMetadataRequest,
  ): Effect.Effect<
    GetContainerAPIMetadataResult,
    | AccessDeniedException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContainerImages(
    input: GetContainerImagesRequest,
  ): Effect.Effect<
    GetContainerImagesResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContainerLog(
    input: GetContainerLogRequest,
  ): Effect.Effect<
    GetContainerLogResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContainerServiceDeployments(
    input: GetContainerServiceDeploymentsRequest,
  ): Effect.Effect<
    GetContainerServiceDeploymentsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContainerServiceMetricData(
    input: GetContainerServiceMetricDataRequest,
  ): Effect.Effect<
    GetContainerServiceMetricDataResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContainerServicePowers(
    input: GetContainerServicePowersRequest,
  ): Effect.Effect<
    GetContainerServicePowersResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getContainerServices(
    input: GetContainerServicesRequest,
  ): Effect.Effect<
    ContainerServicesListResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getCostEstimate(
    input: GetCostEstimateRequest,
  ): Effect.Effect<
    GetCostEstimateResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDisk(
    input: GetDiskRequest,
  ): Effect.Effect<
    GetDiskResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDisks(
    input: GetDisksRequest,
  ): Effect.Effect<
    GetDisksResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDiskSnapshot(
    input: GetDiskSnapshotRequest,
  ): Effect.Effect<
    GetDiskSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDiskSnapshots(
    input: GetDiskSnapshotsRequest,
  ): Effect.Effect<
    GetDiskSnapshotsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDistributionBundles(
    input: GetDistributionBundlesRequest,
  ): Effect.Effect<
    GetDistributionBundlesResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDistributionLatestCacheReset(
    input: GetDistributionLatestCacheResetRequest,
  ): Effect.Effect<
    GetDistributionLatestCacheResetResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDistributionMetricData(
    input: GetDistributionMetricDataRequest,
  ): Effect.Effect<
    GetDistributionMetricDataResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDistributions(
    input: GetDistributionsRequest,
  ): Effect.Effect<
    GetDistributionsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDomain(
    input: GetDomainRequest,
  ): Effect.Effect<
    GetDomainResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getDomains(
    input: GetDomainsRequest,
  ): Effect.Effect<
    GetDomainsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getExportSnapshotRecords(
    input: GetExportSnapshotRecordsRequest,
  ): Effect.Effect<
    GetExportSnapshotRecordsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstance(
    input: GetInstanceRequest,
  ): Effect.Effect<
    GetInstanceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstanceAccessDetails(
    input: GetInstanceAccessDetailsRequest,
  ): Effect.Effect<
    GetInstanceAccessDetailsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstanceMetricData(
    input: GetInstanceMetricDataRequest,
  ): Effect.Effect<
    GetInstanceMetricDataResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstancePortStates(
    input: GetInstancePortStatesRequest,
  ): Effect.Effect<
    GetInstancePortStatesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstances(
    input: GetInstancesRequest,
  ): Effect.Effect<
    GetInstancesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstanceSnapshot(
    input: GetInstanceSnapshotRequest,
  ): Effect.Effect<
    GetInstanceSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstanceSnapshots(
    input: GetInstanceSnapshotsRequest,
  ): Effect.Effect<
    GetInstanceSnapshotsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getInstanceState(
    input: GetInstanceStateRequest,
  ): Effect.Effect<
    GetInstanceStateResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getKeyPair(
    input: GetKeyPairRequest,
  ): Effect.Effect<
    GetKeyPairResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getKeyPairs(
    input: GetKeyPairsRequest,
  ): Effect.Effect<
    GetKeyPairsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getLoadBalancer(
    input: GetLoadBalancerRequest,
  ): Effect.Effect<
    GetLoadBalancerResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getLoadBalancerMetricData(
    input: GetLoadBalancerMetricDataRequest,
  ): Effect.Effect<
    GetLoadBalancerMetricDataResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getLoadBalancers(
    input: GetLoadBalancersRequest,
  ): Effect.Effect<
    GetLoadBalancersResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getLoadBalancerTlsCertificates(
    input: GetLoadBalancerTlsCertificatesRequest,
  ): Effect.Effect<
    GetLoadBalancerTlsCertificatesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getLoadBalancerTlsPolicies(
    input: GetLoadBalancerTlsPoliciesRequest,
  ): Effect.Effect<
    GetLoadBalancerTlsPoliciesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getOperation(
    input: GetOperationRequest,
  ): Effect.Effect<
    GetOperationResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getOperations(
    input: GetOperationsRequest,
  ): Effect.Effect<
    GetOperationsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getOperationsForResource(
    input: GetOperationsForResourceRequest,
  ): Effect.Effect<
    GetOperationsForResourceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRegions(
    input: GetRegionsRequest,
  ): Effect.Effect<
    GetRegionsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabase(
    input: GetRelationalDatabaseRequest,
  ): Effect.Effect<
    GetRelationalDatabaseResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseBlueprints(
    input: GetRelationalDatabaseBlueprintsRequest,
  ): Effect.Effect<
    GetRelationalDatabaseBlueprintsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseBundles(
    input: GetRelationalDatabaseBundlesRequest,
  ): Effect.Effect<
    GetRelationalDatabaseBundlesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseEvents(
    input: GetRelationalDatabaseEventsRequest,
  ): Effect.Effect<
    GetRelationalDatabaseEventsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseLogEvents(
    input: GetRelationalDatabaseLogEventsRequest,
  ): Effect.Effect<
    GetRelationalDatabaseLogEventsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseLogStreams(
    input: GetRelationalDatabaseLogStreamsRequest,
  ): Effect.Effect<
    GetRelationalDatabaseLogStreamsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseMasterUserPassword(
    input: GetRelationalDatabaseMasterUserPasswordRequest,
  ): Effect.Effect<
    GetRelationalDatabaseMasterUserPasswordResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseMetricData(
    input: GetRelationalDatabaseMetricDataRequest,
  ): Effect.Effect<
    GetRelationalDatabaseMetricDataResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseParameters(
    input: GetRelationalDatabaseParametersRequest,
  ): Effect.Effect<
    GetRelationalDatabaseParametersResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabases(
    input: GetRelationalDatabasesRequest,
  ): Effect.Effect<
    GetRelationalDatabasesResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseSnapshot(
    input: GetRelationalDatabaseSnapshotRequest,
  ): Effect.Effect<
    GetRelationalDatabaseSnapshotResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getRelationalDatabaseSnapshots(
    input: GetRelationalDatabaseSnapshotsRequest,
  ): Effect.Effect<
    GetRelationalDatabaseSnapshotsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getSetupHistory(
    input: GetSetupHistoryRequest,
  ): Effect.Effect<
    GetSetupHistoryResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getStaticIp(
    input: GetStaticIpRequest,
  ): Effect.Effect<
    GetStaticIpResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  getStaticIps(
    input: GetStaticIpsRequest,
  ): Effect.Effect<
    GetStaticIpsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  importKeyPair(
    input: ImportKeyPairRequest,
  ): Effect.Effect<
    ImportKeyPairResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  isVpcPeered(
    input: IsVpcPeeredRequest,
  ): Effect.Effect<
    IsVpcPeeredResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  openInstancePublicPorts(
    input: OpenInstancePublicPortsRequest,
  ): Effect.Effect<
    OpenInstancePublicPortsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  peerVpc(
    input: PeerVpcRequest,
  ): Effect.Effect<
    PeerVpcResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  putAlarm(
    input: PutAlarmRequest,
  ): Effect.Effect<
    PutAlarmResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  putInstancePublicPorts(
    input: PutInstancePublicPortsRequest,
  ): Effect.Effect<
    PutInstancePublicPortsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  rebootInstance(
    input: RebootInstanceRequest,
  ): Effect.Effect<
    RebootInstanceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  rebootRelationalDatabase(
    input: RebootRelationalDatabaseRequest,
  ): Effect.Effect<
    RebootRelationalDatabaseResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  registerContainerImage(
    input: RegisterContainerImageRequest,
  ): Effect.Effect<
    RegisterContainerImageResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  releaseStaticIp(
    input: ReleaseStaticIpRequest,
  ): Effect.Effect<
    ReleaseStaticIpResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  resetDistributionCache(
    input: ResetDistributionCacheRequest,
  ): Effect.Effect<
    ResetDistributionCacheResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  sendContactMethodVerification(
    input: SendContactMethodVerificationRequest,
  ): Effect.Effect<
    SendContactMethodVerificationResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  setIpAddressType(
    input: SetIpAddressTypeRequest,
  ): Effect.Effect<
    SetIpAddressTypeResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  setResourceAccessForBucket(
    input: SetResourceAccessForBucketRequest,
  ): Effect.Effect<
    SetResourceAccessForBucketResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  setupInstanceHttps(
    input: SetupInstanceHttpsRequest,
  ): Effect.Effect<
    SetupInstanceHttpsResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  startGUISession(
    input: StartGUISessionRequest,
  ): Effect.Effect<
    StartGUISessionResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  startInstance(
    input: StartInstanceRequest,
  ): Effect.Effect<
    StartInstanceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  startRelationalDatabase(
    input: StartRelationalDatabaseRequest,
  ): Effect.Effect<
    StartRelationalDatabaseResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  stopGUISession(
    input: StopGUISessionRequest,
  ): Effect.Effect<
    StopGUISessionResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  stopInstance(
    input: StopInstanceRequest,
  ): Effect.Effect<
    StopInstanceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  stopRelationalDatabase(
    input: StopRelationalDatabaseRequest,
  ): Effect.Effect<
    StopRelationalDatabaseResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  testAlarm(
    input: TestAlarmRequest,
  ): Effect.Effect<
    TestAlarmResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  unpeerVpc(
    input: UnpeerVpcRequest,
  ): Effect.Effect<
    UnpeerVpcResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateBucket(
    input: UpdateBucketRequest,
  ): Effect.Effect<
    UpdateBucketResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateBucketBundle(
    input: UpdateBucketBundleRequest,
  ): Effect.Effect<
    UpdateBucketBundleResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateContainerService(
    input: UpdateContainerServiceRequest,
  ): Effect.Effect<
    UpdateContainerServiceResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateDistribution(
    input: UpdateDistributionRequest,
  ): Effect.Effect<
    UpdateDistributionResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateDistributionBundle(
    input: UpdateDistributionBundleRequest,
  ): Effect.Effect<
    UpdateDistributionBundleResult,
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateDomainEntry(
    input: UpdateDomainEntryRequest,
  ): Effect.Effect<
    UpdateDomainEntryResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateInstanceMetadataOptions(
    input: UpdateInstanceMetadataOptionsRequest,
  ): Effect.Effect<
    UpdateInstanceMetadataOptionsResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateLoadBalancerAttribute(
    input: UpdateLoadBalancerAttributeRequest,
  ): Effect.Effect<
    UpdateLoadBalancerAttributeResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateRelationalDatabase(
    input: UpdateRelationalDatabaseRequest,
  ): Effect.Effect<
    UpdateRelationalDatabaseResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
  updateRelationalDatabaseParameters(
    input: UpdateRelationalDatabaseParametersRequest,
  ): Effect.Effect<
    UpdateRelationalDatabaseParametersResult,
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError
  >;
}

export type Lightsail = Lightsail_20161128;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly code?: string;
  readonly docs?: string;
  readonly message?: string;
  readonly tip?: string;
}> {}
export type AccessDirection = "inbound" | "outbound";
export interface AccessKey {
  accessKeyId?: string;
  secretAccessKey?: string;
  status?: StatusType;
  createdAt?: Date | string;
  lastUsed?: AccessKeyLastUsed;
}
export interface AccessKeyLastUsed {
  lastUsedDate?: Date | string;
  region?: string;
  serviceName?: string;
}
export type AccessKeyList = Array<AccessKey>;
export type AccessReceiverList = Array<ResourceReceivingAccess>;
export interface AccessRules {
  getObject?: AccessType;
  allowPublicOverrides?: boolean;
}
export type AccessType = "Public" | "Private";
export interface AccountLevelBpaSync {
  status?: AccountLevelBpaSyncStatus;
  lastSyncedAt?: Date | string;
  message?: BPAStatusMessage;
  bpaImpactsLightsail?: boolean;
}
export type AccountLevelBpaSyncStatus =
  | "InSync"
  | "Failed"
  | "NeverSynced"
  | "Defaulted";
export declare class AccountSetupInProgressException extends EffectData.TaggedError(
  "AccountSetupInProgressException",
)<{
  readonly code?: string;
  readonly docs?: string;
  readonly message?: string;
  readonly tip?: string;
}> {}
export interface AddOn {
  name?: string;
  status?: string;
  snapshotTimeOfDay?: string;
  nextSnapshotTimeOfDay?: string;
  threshold?: string;
  duration?: string;
}
export type AddOnList = Array<AddOn>;
export interface AddOnRequest {
  addOnType: AddOnType;
  autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
  stopInstanceOnIdleRequest?: StopInstanceOnIdleRequest;
}
export type AddOnRequestList = Array<AddOnRequest>;
export type AddOnType = "AutoSnapshot" | "StopInstanceOnIdle";
export interface Alarm {
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  supportCode?: string;
  monitoredResourceInfo?: MonitoredResourceInfo;
  comparisonOperator?: ComparisonOperator;
  evaluationPeriods?: number;
  period?: number;
  threshold?: number;
  datapointsToAlarm?: number;
  treatMissingData?: TreatMissingData;
  statistic?: MetricStatistic;
  metricName?: MetricName;
  state?: AlarmState;
  unit?: MetricUnit;
  contactProtocols?: Array<ContactProtocol>;
  notificationTriggers?: Array<AlarmState>;
  notificationEnabled?: boolean;
}
export type AlarmsList = Array<Alarm>;
export type AlarmState = "OK" | "ALARM" | "INSUFFICIENT_DATA";
export interface AllocateStaticIpRequest {
  staticIpName: string;
}
export interface AllocateStaticIpResult {
  operations?: Array<Operation>;
}
export type AppCategory = "LfR";
export type AppCategoryList = Array<AppCategory>;
export interface AttachCertificateToDistributionRequest {
  distributionName: string;
  certificateName: string;
}
export interface AttachCertificateToDistributionResult {
  operation?: Operation;
}
export interface AttachDiskRequest {
  diskName: string;
  instanceName: string;
  diskPath: string;
  autoMounting?: boolean;
}
export interface AttachDiskResult {
  operations?: Array<Operation>;
}
export interface AttachedDisk {
  path?: string;
  sizeInGb?: number;
}
export type AttachedDiskList = Array<AttachedDisk>;
export type AttachedDiskMap = Record<string, Array<DiskMap>>;
export interface AttachInstancesToLoadBalancerRequest {
  loadBalancerName: string;
  instanceNames: Array<string>;
}
export interface AttachInstancesToLoadBalancerResult {
  operations?: Array<Operation>;
}
export interface AttachLoadBalancerTlsCertificateRequest {
  loadBalancerName: string;
  certificateName: string;
}
export interface AttachLoadBalancerTlsCertificateResult {
  operations?: Array<Operation>;
}
export interface AttachStaticIpRequest {
  staticIpName: string;
  instanceName: string;
}
export interface AttachStaticIpResult {
  operations?: Array<Operation>;
}
export type AutoMountStatus = "Failed" | "Pending" | "Mounted" | "NotMounted";
export interface AutoSnapshotAddOnRequest {
  snapshotTimeOfDay?: string;
}
export type AutoSnapshotDate = string;

export interface AutoSnapshotDetails {
  date?: string;
  createdAt?: Date | string;
  status?: AutoSnapshotStatus;
  fromAttachedDisks?: Array<AttachedDisk>;
}
export type AutoSnapshotDetailsList = Array<AutoSnapshotDetails>;
export type AutoSnapshotStatus =
  | "SUCCESS"
  | "FAILED"
  | "IN_PROGRESS"
  | "NOT_FOUND";
export interface AvailabilityZone {
  zoneName?: string;
  state?: string;
}
export type AvailabilityZoneList = Array<AvailabilityZone>;
export type Base64 = string;

export type BehaviorEnum = "DontCacheSetting" | "CacheSetting";
export interface Blueprint {
  blueprintId?: string;
  name?: string;
  group?: string;
  type?: BlueprintType;
  description?: string;
  isActive?: boolean;
  minPower?: number;
  version?: string;
  versionCode?: string;
  productUrl?: string;
  licenseUrl?: string;
  platform?: InstancePlatform;
  appCategory?: AppCategory;
}
export type BlueprintList = Array<Blueprint>;
export type BlueprintType = "os" | "app";
export type Lightsailboolean = boolean;

export type BPAStatusMessage =
  | "DEFAULTED_FOR_SLR_MISSING"
  | "SYNC_ON_HOLD"
  | "DEFAULTED_FOR_SLR_MISSING_ON_HOLD"
  | "Unknown";
export interface Bucket {
  resourceType?: string;
  accessRules?: AccessRules;
  arn?: string;
  bundleId?: string;
  createdAt?: Date | string;
  url?: string;
  location?: ResourceLocation;
  name?: string;
  supportCode?: string;
  tags?: Array<Tag>;
  objectVersioning?: string;
  ableToUpdateBundle?: boolean;
  readonlyAccessAccounts?: Array<string>;
  resourcesReceivingAccess?: Array<ResourceReceivingAccess>;
  state?: BucketState;
  accessLogConfig?: BucketAccessLogConfig;
}
export interface BucketAccessLogConfig {
  enabled: boolean;
  destination?: string;
  prefix?: string;
}
export type BucketAccessLogPrefix = string;

export interface BucketBundle {
  bundleId?: string;
  name?: string;
  price?: number;
  storagePerMonthInGb?: number;
  transferPerMonthInGb?: number;
  isActive?: boolean;
}
export type BucketBundleList = Array<BucketBundle>;
export type BucketList = Array<Bucket>;
export type BucketMetricName = "BucketSizeBytes" | "NumberOfObjects";
export type BucketName = string;

export interface BucketState {
  code?: string;
  message?: string;
}
export interface Bundle {
  price?: number;
  cpuCount?: number;
  diskSizeInGb?: number;
  bundleId?: string;
  instanceType?: string;
  isActive?: boolean;
  name?: string;
  power?: number;
  ramSizeInGb?: number;
  transferPerMonthInGb?: number;
  supportedPlatforms?: Array<InstancePlatform>;
  supportedAppCategories?: Array<AppCategory>;
  publicIpv4AddressCount?: number;
}
export type BundleList = Array<Bundle>;
export interface CacheBehavior {
  behavior?: BehaviorEnum;
}
export type CacheBehaviorList = Array<CacheBehaviorPerPath>;
export interface CacheBehaviorPerPath {
  path?: string;
  behavior?: BehaviorEnum;
}
export interface CacheSettings {
  defaultTTL?: number;
  minimumTTL?: number;
  maximumTTL?: number;
  allowedHTTPMethods?: string;
  cachedHTTPMethods?: string;
  forwardedCookies?: CookieObject;
  forwardedHeaders?: HeaderObject;
  forwardedQueryStrings?: QueryStringObject;
}
export interface Certificate {
  arn?: string;
  name?: string;
  domainName?: string;
  status?: CertificateStatus;
  serialNumber?: string;
  subjectAlternativeNames?: Array<string>;
  domainValidationRecords?: Array<DomainValidationRecord>;
  requestFailureReason?: string;
  inUseResourceCount?: number;
  keyAlgorithm?: string;
  createdAt?: Date | string;
  issuedAt?: Date | string;
  issuerCA?: string;
  notBefore?: Date | string;
  notAfter?: Date | string;
  eligibleToRenew?: string;
  renewalSummary?: RenewalSummary;
  revokedAt?: Date | string;
  revocationReason?: string;
  tags?: Array<Tag>;
  supportCode?: string;
}
export type CertificateDomainValidationStatus =
  | "PendingValidation"
  | "Failed"
  | "Success";
export type CertificateName = string;

export type CertificateProvider = "LetsEncrypt";
export type CertificateStatus =
  | "PendingValidation"
  | "Issued"
  | "Inactive"
  | "Expired"
  | "ValidationTimedOut"
  | "Revoked"
  | "Failed";
export type CertificateStatusList = Array<CertificateStatus>;
export interface CertificateSummary {
  certificateArn?: string;
  certificateName?: string;
  domainName?: string;
  certificateDetail?: Certificate;
  tags?: Array<Tag>;
}
export type CertificateSummaryList = Array<CertificateSummary>;
export interface CloseInstancePublicPortsRequest {
  portInfo: PortInfo;
  instanceName: string;
}
export interface CloseInstancePublicPortsResult {
  operation?: Operation;
}
export interface CloudFormationStackRecord {
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  state?: RecordState;
  sourceInfo?: Array<CloudFormationStackRecordSourceInfo>;
  destinationInfo?: DestinationInfo;
}
export type CloudFormationStackRecordList = Array<CloudFormationStackRecord>;
export interface CloudFormationStackRecordSourceInfo {
  resourceType?: CloudFormationStackRecordSourceType;
  name?: string;
  arn?: string;
}
export type CloudFormationStackRecordSourceInfoList =
  Array<CloudFormationStackRecordSourceInfo>;
export type CloudFormationStackRecordSourceType = "ExportSnapshotRecord";
export type ComparisonOperator =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "LessThanThreshold"
  | "LessThanOrEqualToThreshold";
export interface ContactMethod {
  contactEndpoint?: string;
  status?: ContactMethodStatus;
  protocol?: ContactProtocol;
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  supportCode?: string;
}
export type ContactMethodsList = Array<ContactMethod>;
export type ContactMethodStatus = "PendingVerification" | "Valid" | "Invalid";
export type ContactMethodVerificationProtocol = "Email";
export type ContactProtocol = "Email" | "SMS";
export type ContactProtocolsList = Array<ContactProtocol>;
export interface Container {
  image?: string;
  command?: Array<string>;
  environment?: Record<string, string>;
  ports?: Record<string, ContainerServiceProtocol>;
}
export interface ContainerImage {
  image?: string;
  digest?: string;
  createdAt?: Date | string;
}
export type ContainerImageList = Array<ContainerImage>;
export type ContainerLabel = string;

export type ContainerMap = Record<string, Container>;
export type ContainerName = string;

export interface ContainerService {
  containerServiceName?: string;
  arn?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  power?: ContainerServicePowerName;
  powerId?: string;
  state?: ContainerServiceState;
  stateDetail?: ContainerServiceStateDetail;
  scale?: number;
  currentDeployment?: ContainerServiceDeployment;
  nextDeployment?: ContainerServiceDeployment;
  isDisabled?: boolean;
  principalArn?: string;
  privateDomainName?: string;
  publicDomainNames?: Record<string, Array<string>>;
  url?: string;
  privateRegistryAccess?: PrivateRegistryAccess;
}
export interface ContainerServiceDeployment {
  version?: number;
  state?: ContainerServiceDeploymentState;
  containers?: Record<string, Container>;
  publicEndpoint?: ContainerServiceEndpoint;
  createdAt?: Date | string;
}
export type ContainerServiceDeploymentList = Array<ContainerServiceDeployment>;
export interface ContainerServiceDeploymentRequest {
  containers?: Record<string, Container>;
  publicEndpoint?: EndpointRequest;
}
export type ContainerServiceDeploymentState =
  | "ACTIVATING"
  | "ACTIVE"
  | "INACTIVE"
  | "FAILED";
export interface ContainerServiceECRImagePullerRole {
  isActive?: boolean;
  principalArn?: string;
}
export interface ContainerServiceECRImagePullerRoleRequest {
  isActive?: boolean;
}
export interface ContainerServiceEndpoint {
  containerName?: string;
  containerPort?: number;
  healthCheck?: ContainerServiceHealthCheckConfig;
}
export interface ContainerServiceHealthCheckConfig {
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  timeoutSeconds?: number;
  intervalSeconds?: number;
  path?: string;
  successCodes?: string;
}
export type ContainerServiceList = Array<ContainerService>;
export interface ContainerServiceLogEvent {
  createdAt?: Date | string;
  message?: string;
}
export type ContainerServiceLogEventList = Array<ContainerServiceLogEvent>;
export type ContainerServiceMetadataEntry = Record<string, string>;
export type ContainerServiceMetadataEntryList = Array<Record<string, string>>;
export type ContainerServiceMetricName = "CPUUtilization" | "MemoryUtilization";
export type ContainerServiceName = string;

export interface ContainerServicePower {
  powerId?: string;
  price?: number;
  cpuCount?: number;
  ramSizeInGb?: number;
  name?: string;
  isActive?: boolean;
}
export type ContainerServicePowerList = Array<ContainerServicePower>;
export type ContainerServicePowerName =
  | "nano"
  | "micro"
  | "small"
  | "medium"
  | "large"
  | "xlarge";
export type ContainerServiceProtocol = "HTTP" | "HTTPS" | "TCP" | "UDP";
export type ContainerServicePublicDomains = Record<string, Array<string>>;
export type ContainerServicePublicDomainsList = Array<string>;
export interface ContainerServiceRegistryLogin {
  username?: string;
  password?: string;
  expiresAt?: Date | string;
  registry?: string;
}
export type ContainerServiceScale = number;

export interface ContainerServicesListResult {
  containerServices?: Array<ContainerService>;
}
export type ContainerServiceState =
  | "PENDING"
  | "READY"
  | "RUNNING"
  | "UPDATING"
  | "DELETING"
  | "DISABLED"
  | "DEPLOYING";
export interface ContainerServiceStateDetail {
  code?: ContainerServiceStateDetailCode;
  message?: string;
}
export type ContainerServiceStateDetailCode =
  | "CREATING_SYSTEM_RESOURCES"
  | "CREATING_NETWORK_INFRASTRUCTURE"
  | "PROVISIONING_CERTIFICATE"
  | "PROVISIONING_SERVICE"
  | "CREATING_DEPLOYMENT"
  | "EVALUATING_HEALTH_CHECK"
  | "ACTIVATING_DEPLOYMENT"
  | "CERTIFICATE_LIMIT_EXCEEDED"
  | "UNKNOWN_ERROR";
export interface CookieObject {
  option?: ForwardValues;
  cookiesAllowList?: Array<string>;
}
export interface CopySnapshotRequest {
  sourceSnapshotName?: string;
  sourceResourceName?: string;
  restoreDate?: string;
  useLatestRestorableAutoSnapshot?: boolean;
  targetSnapshotName: string;
  sourceRegion: RegionName;
}
export interface CopySnapshotResult {
  operations?: Array<Operation>;
}
export interface CostEstimate {
  usageType?: string;
  resultsByTime?: Array<EstimateByTime>;
}
export type CostEstimates = Array<CostEstimate>;
export interface CreateBucketAccessKeyRequest {
  bucketName: string;
}
export interface CreateBucketAccessKeyResult {
  accessKey?: AccessKey;
  operations?: Array<Operation>;
}
export interface CreateBucketRequest {
  bucketName: string;
  bundleId: string;
  tags?: Array<Tag>;
  enableObjectVersioning?: boolean;
}
export interface CreateBucketResult {
  bucket?: Bucket;
  operations?: Array<Operation>;
}
export interface CreateCertificateRequest {
  certificateName: string;
  domainName: string;
  subjectAlternativeNames?: Array<string>;
  tags?: Array<Tag>;
}
export interface CreateCertificateResult {
  certificate?: CertificateSummary;
  operations?: Array<Operation>;
}
export interface CreateCloudFormationStackRequest {
  instances: Array<InstanceEntry>;
}
export interface CreateCloudFormationStackResult {
  operations?: Array<Operation>;
}
export interface CreateContactMethodRequest {
  protocol: ContactProtocol;
  contactEndpoint: string;
}
export interface CreateContactMethodResult {
  operations?: Array<Operation>;
}
export interface CreateContainerServiceDeploymentRequest {
  serviceName: string;
  containers?: Record<string, Container>;
  publicEndpoint?: EndpointRequest;
}
export interface CreateContainerServiceDeploymentResult {
  containerService?: ContainerService;
}
export interface CreateContainerServiceRegistryLoginRequest {}
export interface CreateContainerServiceRegistryLoginResult {
  registryLogin?: ContainerServiceRegistryLogin;
}
export interface CreateContainerServiceRequest {
  serviceName: string;
  power: ContainerServicePowerName;
  scale: number;
  tags?: Array<Tag>;
  publicDomainNames?: Record<string, Array<string>>;
  deployment?: ContainerServiceDeploymentRequest;
  privateRegistryAccess?: PrivateRegistryAccessRequest;
}
export interface CreateContainerServiceResult {
  containerService?: ContainerService;
}
export interface CreateDiskFromSnapshotRequest {
  diskName: string;
  diskSnapshotName?: string;
  availabilityZone: string;
  sizeInGb: number;
  tags?: Array<Tag>;
  addOns?: Array<AddOnRequest>;
  sourceDiskName?: string;
  restoreDate?: string;
  useLatestRestorableAutoSnapshot?: boolean;
}
export interface CreateDiskFromSnapshotResult {
  operations?: Array<Operation>;
}
export interface CreateDiskRequest {
  diskName: string;
  availabilityZone: string;
  sizeInGb: number;
  tags?: Array<Tag>;
  addOns?: Array<AddOnRequest>;
}
export interface CreateDiskResult {
  operations?: Array<Operation>;
}
export interface CreateDiskSnapshotRequest {
  diskName?: string;
  diskSnapshotName: string;
  instanceName?: string;
  tags?: Array<Tag>;
}
export interface CreateDiskSnapshotResult {
  operations?: Array<Operation>;
}
export interface CreateDistributionRequest {
  distributionName: string;
  origin: InputOrigin;
  defaultCacheBehavior: CacheBehavior;
  cacheBehaviorSettings?: CacheSettings;
  cacheBehaviors?: Array<CacheBehaviorPerPath>;
  bundleId: string;
  ipAddressType?: IpAddressType;
  tags?: Array<Tag>;
  certificateName?: string;
  viewerMinimumTlsProtocolVersion?: ViewerMinimumTlsProtocolVersionEnum;
}
export interface CreateDistributionResult {
  distribution?: LightsailDistribution;
  operation?: Operation;
}
export interface CreateDomainEntryRequest {
  domainName: string;
  domainEntry: DomainEntry;
}
export interface CreateDomainEntryResult {
  operation?: Operation;
}
export interface CreateDomainRequest {
  domainName: string;
  tags?: Array<Tag>;
}
export interface CreateDomainResult {
  operation?: Operation;
}
export interface CreateGUISessionAccessDetailsRequest {
  resourceName: string;
}
export interface CreateGUISessionAccessDetailsResult {
  resourceName?: string;
  status?: Status;
  percentageComplete?: number;
  failureReason?: string;
  sessions?: Array<Session>;
}
export interface CreateInstancesFromSnapshotRequest {
  instanceNames: Array<string>;
  attachedDiskMapping?: Record<string, Array<DiskMap>>;
  availabilityZone: string;
  instanceSnapshotName?: string;
  bundleId: string;
  userData?: string;
  keyPairName?: string;
  tags?: Array<Tag>;
  addOns?: Array<AddOnRequest>;
  ipAddressType?: IpAddressType;
  sourceInstanceName?: string;
  restoreDate?: string;
  useLatestRestorableAutoSnapshot?: boolean;
}
export interface CreateInstancesFromSnapshotResult {
  operations?: Array<Operation>;
}
export interface CreateInstanceSnapshotRequest {
  instanceSnapshotName: string;
  instanceName: string;
  tags?: Array<Tag>;
}
export interface CreateInstanceSnapshotResult {
  operations?: Array<Operation>;
}
export interface CreateInstancesRequest {
  instanceNames: Array<string>;
  availabilityZone: string;
  customImageName?: string;
  blueprintId: string;
  bundleId: string;
  userData?: string;
  keyPairName?: string;
  tags?: Array<Tag>;
  addOns?: Array<AddOnRequest>;
  ipAddressType?: IpAddressType;
}
export interface CreateInstancesResult {
  operations?: Array<Operation>;
}
export interface CreateKeyPairRequest {
  keyPairName: string;
  tags?: Array<Tag>;
}
export interface CreateKeyPairResult {
  keyPair?: KeyPair;
  publicKeyBase64?: string;
  privateKeyBase64?: string;
  operation?: Operation;
}
export interface CreateLoadBalancerRequest {
  loadBalancerName: string;
  instancePort: number;
  healthCheckPath?: string;
  certificateName?: string;
  certificateDomainName?: string;
  certificateAlternativeNames?: Array<string>;
  tags?: Array<Tag>;
  ipAddressType?: IpAddressType;
  tlsPolicyName?: string;
}
export interface CreateLoadBalancerResult {
  operations?: Array<Operation>;
}
export interface CreateLoadBalancerTlsCertificateRequest {
  loadBalancerName: string;
  certificateName: string;
  certificateDomainName: string;
  certificateAlternativeNames?: Array<string>;
  tags?: Array<Tag>;
}
export interface CreateLoadBalancerTlsCertificateResult {
  operations?: Array<Operation>;
}
export interface CreateRelationalDatabaseFromSnapshotRequest {
  relationalDatabaseName: string;
  availabilityZone?: string;
  publiclyAccessible?: boolean;
  relationalDatabaseSnapshotName?: string;
  relationalDatabaseBundleId?: string;
  sourceRelationalDatabaseName?: string;
  restoreTime?: Date | string;
  useLatestRestorableTime?: boolean;
  tags?: Array<Tag>;
}
export interface CreateRelationalDatabaseFromSnapshotResult {
  operations?: Array<Operation>;
}
export interface CreateRelationalDatabaseRequest {
  relationalDatabaseName: string;
  availabilityZone?: string;
  relationalDatabaseBlueprintId: string;
  relationalDatabaseBundleId: string;
  masterDatabaseName: string;
  masterUsername: string;
  masterUserPassword?: string;
  preferredBackupWindow?: string;
  preferredMaintenanceWindow?: string;
  publiclyAccessible?: boolean;
  tags?: Array<Tag>;
}
export interface CreateRelationalDatabaseResult {
  operations?: Array<Operation>;
}
export interface CreateRelationalDatabaseSnapshotRequest {
  relationalDatabaseName: string;
  relationalDatabaseSnapshotName: string;
  tags?: Array<Tag>;
}
export interface CreateRelationalDatabaseSnapshotResult {
  operations?: Array<Operation>;
}
export type Currency = "USD";
export interface DeleteAlarmRequest {
  alarmName: string;
}
export interface DeleteAlarmResult {
  operations?: Array<Operation>;
}
export interface DeleteAutoSnapshotRequest {
  resourceName: string;
  date: string;
}
export interface DeleteAutoSnapshotResult {
  operations?: Array<Operation>;
}
export interface DeleteBucketAccessKeyRequest {
  bucketName: string;
  accessKeyId: string;
}
export interface DeleteBucketAccessKeyResult {
  operations?: Array<Operation>;
}
export interface DeleteBucketRequest {
  bucketName: string;
  forceDelete?: boolean;
}
export interface DeleteBucketResult {
  operations?: Array<Operation>;
}
export interface DeleteCertificateRequest {
  certificateName: string;
}
export interface DeleteCertificateResult {
  operations?: Array<Operation>;
}
export interface DeleteContactMethodRequest {
  protocol: ContactProtocol;
}
export interface DeleteContactMethodResult {
  operations?: Array<Operation>;
}
export interface DeleteContainerImageRequest {
  serviceName: string;
  image: string;
}
export interface DeleteContainerImageResult {}
export interface DeleteContainerServiceRequest {
  serviceName: string;
}
export interface DeleteContainerServiceResult {}
export interface DeleteDiskRequest {
  diskName: string;
  forceDeleteAddOns?: boolean;
}
export interface DeleteDiskResult {
  operations?: Array<Operation>;
}
export interface DeleteDiskSnapshotRequest {
  diskSnapshotName: string;
}
export interface DeleteDiskSnapshotResult {
  operations?: Array<Operation>;
}
export interface DeleteDistributionRequest {
  distributionName?: string;
}
export interface DeleteDistributionResult {
  operation?: Operation;
}
export interface DeleteDomainEntryRequest {
  domainName: string;
  domainEntry: DomainEntry;
}
export interface DeleteDomainEntryResult {
  operation?: Operation;
}
export interface DeleteDomainRequest {
  domainName: string;
}
export interface DeleteDomainResult {
  operation?: Operation;
}
export interface DeleteInstanceRequest {
  instanceName: string;
  forceDeleteAddOns?: boolean;
}
export interface DeleteInstanceResult {
  operations?: Array<Operation>;
}
export interface DeleteInstanceSnapshotRequest {
  instanceSnapshotName: string;
}
export interface DeleteInstanceSnapshotResult {
  operations?: Array<Operation>;
}
export interface DeleteKeyPairRequest {
  keyPairName: string;
  expectedFingerprint?: string;
}
export interface DeleteKeyPairResult {
  operation?: Operation;
}
export interface DeleteKnownHostKeysRequest {
  instanceName: string;
}
export interface DeleteKnownHostKeysResult {
  operations?: Array<Operation>;
}
export interface DeleteLoadBalancerRequest {
  loadBalancerName: string;
}
export interface DeleteLoadBalancerResult {
  operations?: Array<Operation>;
}
export interface DeleteLoadBalancerTlsCertificateRequest {
  loadBalancerName: string;
  certificateName: string;
  force?: boolean;
}
export interface DeleteLoadBalancerTlsCertificateResult {
  operations?: Array<Operation>;
}
export interface DeleteRelationalDatabaseRequest {
  relationalDatabaseName: string;
  skipFinalSnapshot?: boolean;
  finalRelationalDatabaseSnapshotName?: string;
}
export interface DeleteRelationalDatabaseResult {
  operations?: Array<Operation>;
}
export interface DeleteRelationalDatabaseSnapshotRequest {
  relationalDatabaseSnapshotName: string;
}
export interface DeleteRelationalDatabaseSnapshotResult {
  operations?: Array<Operation>;
}
export interface DestinationInfo {
  id?: string;
  service?: string;
}
export interface DetachCertificateFromDistributionRequest {
  distributionName: string;
}
export interface DetachCertificateFromDistributionResult {
  operation?: Operation;
}
export interface DetachDiskRequest {
  diskName: string;
}
export interface DetachDiskResult {
  operations?: Array<Operation>;
}
export interface DetachInstancesFromLoadBalancerRequest {
  loadBalancerName: string;
  instanceNames: Array<string>;
}
export interface DetachInstancesFromLoadBalancerResult {
  operations?: Array<Operation>;
}
export interface DetachStaticIpRequest {
  staticIpName: string;
}
export interface DetachStaticIpResult {
  operations?: Array<Operation>;
}
export interface DisableAddOnRequest {
  addOnType: AddOnType;
  resourceName: string;
}
export interface DisableAddOnResult {
  operations?: Array<Operation>;
}
export interface Disk {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  addOns?: Array<AddOn>;
  sizeInGb?: number;
  isSystemDisk?: boolean;
  iops?: number;
  path?: string;
  state?: DiskState;
  attachedTo?: string;
  isAttached?: boolean;
  attachmentState?: string;
  gbInUse?: number;
  autoMountStatus?: AutoMountStatus;
}
export interface DiskInfo {
  name?: string;
  path?: string;
  sizeInGb?: number;
  isSystemDisk?: boolean;
}
export type DiskInfoList = Array<DiskInfo>;
export type DiskList = Array<Disk>;
export interface DiskMap {
  originalDiskPath?: string;
  newDiskName?: string;
}
export type DiskMapList = Array<DiskMap>;
export interface DiskSnapshot {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  sizeInGb?: number;
  state?: DiskSnapshotState;
  progress?: string;
  fromDiskName?: string;
  fromDiskArn?: string;
  fromInstanceName?: string;
  fromInstanceArn?: string;
  isFromAutoSnapshot?: boolean;
}
export interface DiskSnapshotInfo {
  sizeInGb?: number;
}
export type DiskSnapshotList = Array<DiskSnapshot>;
export type DiskSnapshotState = "Pending" | "Completed" | "Error" | "Unknown";
export type DiskState = "Pending" | "Error" | "Available" | "InUse" | "Unknown";
export interface DistributionBundle {
  bundleId?: string;
  name?: string;
  price?: number;
  transferPerMonthInGb?: number;
  isActive?: boolean;
}
export type DistributionBundleList = Array<DistributionBundle>;
export type DistributionList = Array<LightsailDistribution>;
export type DistributionMetricName =
  | "Requests"
  | "BytesDownloaded"
  | "BytesUploaded"
  | "TotalErrorRate"
  | "Http4xxErrorRate"
  | "Http5xxErrorRate";
export interface DnsRecordCreationState {
  code?: DnsRecordCreationStateCode;
  message?: string;
}
export type DnsRecordCreationStateCode = "Succeeded" | "Started" | "Failed";
export interface Domain {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  domainEntries?: Array<DomainEntry>;
  registeredDomainDelegationInfo?: RegisteredDomainDelegationInfo;
}
export interface DomainEntry {
  id?: string;
  name?: string;
  target?: string;
  isAlias?: boolean;
  type?: string;
  options?: Record<string, string>;
}
export type DomainEntryList = Array<DomainEntry>;
export type DomainEntryOptions = Record<string, string>;
export type DomainEntryOptionsKeys = string;

export type DomainEntryType = string;

export type DomainList = Array<Domain>;
export type DomainName = string;

export type DomainNameList = Array<string>;
export interface DomainValidationRecord {
  domainName?: string;
  resourceRecord?: ResourceRecord;
  dnsRecordCreationState?: DnsRecordCreationState;
  validationStatus?: CertificateDomainValidationStatus;
}
export type DomainValidationRecordList = Array<DomainValidationRecord>;
export type double = number;

export interface DownloadDefaultKeyPairRequest {}
export interface DownloadDefaultKeyPairResult {
  publicKeyBase64?: string;
  privateKeyBase64?: string;
  createdAt?: Date | string;
}
export type EligibleToRenew = string;

export type EmailAddress = string;

export interface EnableAddOnRequest {
  resourceName: string;
  addOnRequest: AddOnRequest;
}
export interface EnableAddOnResult {
  operations?: Array<Operation>;
}
export interface EndpointRequest {
  containerName: string;
  containerPort: number;
  healthCheck?: ContainerServiceHealthCheckConfig;
}
export type Environment = Record<string, string>;
export interface EstimateByTime {
  usageCost?: number;
  pricingUnit?: PricingUnit;
  unit?: number;
  currency?: Currency;
  timePeriod?: TimePeriod;
}
export type EstimatesByTime = Array<EstimateByTime>;
export interface ExportSnapshotRecord {
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  state?: RecordState;
  sourceInfo?: ExportSnapshotRecordSourceInfo;
  destinationInfo?: DestinationInfo;
}
export type ExportSnapshotRecordList = Array<ExportSnapshotRecord>;
export interface ExportSnapshotRecordSourceInfo {
  resourceType?: ExportSnapshotRecordSourceType;
  createdAt?: Date | string;
  name?: string;
  arn?: string;
  fromResourceName?: string;
  fromResourceArn?: string;
  instanceSnapshotInfo?: InstanceSnapshotInfo;
  diskSnapshotInfo?: DiskSnapshotInfo;
}
export type ExportSnapshotRecordSourceType =
  | "InstanceSnapshot"
  | "DiskSnapshot";
export interface ExportSnapshotRequest {
  sourceSnapshotName: string;
}
export interface ExportSnapshotResult {
  operations?: Array<Operation>;
}
export type float = number;

export type ForwardValues = "none" | "allowList" | "all";
export interface GetActiveNamesRequest {
  pageToken?: string;
}
export interface GetActiveNamesResult {
  activeNames?: Array<string>;
  nextPageToken?: string;
}
export interface GetAlarmsRequest {
  alarmName?: string;
  pageToken?: string;
  monitoredResourceName?: string;
}
export interface GetAlarmsResult {
  alarms?: Array<Alarm>;
  nextPageToken?: string;
}
export interface GetAutoSnapshotsRequest {
  resourceName: string;
}
export interface GetAutoSnapshotsResult {
  resourceName?: string;
  resourceType?: ResourceType;
  autoSnapshots?: Array<AutoSnapshotDetails>;
}
export interface GetBlueprintsRequest {
  includeInactive?: boolean;
  pageToken?: string;
  appCategory?: AppCategory;
}
export interface GetBlueprintsResult {
  blueprints?: Array<Blueprint>;
  nextPageToken?: string;
}
export interface GetBucketAccessKeysRequest {
  bucketName: string;
}
export interface GetBucketAccessKeysResult {
  accessKeys?: Array<AccessKey>;
}
export interface GetBucketBundlesRequest {
  includeInactive?: boolean;
}
export interface GetBucketBundlesResult {
  bundles?: Array<BucketBundle>;
}
export interface GetBucketMetricDataRequest {
  bucketName: string;
  metricName: BucketMetricName;
  startTime: Date | string;
  endTime: Date | string;
  period: number;
  statistics: Array<MetricStatistic>;
  unit: MetricUnit;
}
export interface GetBucketMetricDataResult {
  metricName?: BucketMetricName;
  metricData?: Array<MetricDatapoint>;
}
export interface GetBucketsRequest {
  bucketName?: string;
  pageToken?: string;
  includeConnectedResources?: boolean;
}
export interface GetBucketsResult {
  buckets?: Array<Bucket>;
  nextPageToken?: string;
  accountLevelBpaSync?: AccountLevelBpaSync;
}
export interface GetBundlesRequest {
  includeInactive?: boolean;
  pageToken?: string;
  appCategory?: AppCategory;
}
export interface GetBundlesResult {
  bundles?: Array<Bundle>;
  nextPageToken?: string;
}
export interface GetCertificatesRequest {
  certificateStatuses?: Array<CertificateStatus>;
  includeCertificateDetails?: boolean;
  certificateName?: string;
  pageToken?: string;
}
export interface GetCertificatesResult {
  certificates?: Array<CertificateSummary>;
  nextPageToken?: string;
}
export interface GetCloudFormationStackRecordsRequest {
  pageToken?: string;
}
export interface GetCloudFormationStackRecordsResult {
  cloudFormationStackRecords?: Array<CloudFormationStackRecord>;
  nextPageToken?: string;
}
export interface GetContactMethodsRequest {
  protocols?: Array<ContactProtocol>;
}
export interface GetContactMethodsResult {
  contactMethods?: Array<ContactMethod>;
}
export interface GetContainerAPIMetadataRequest {}
export interface GetContainerAPIMetadataResult {
  metadata?: Array<Record<string, string>>;
}
export interface GetContainerImagesRequest {
  serviceName: string;
}
export interface GetContainerImagesResult {
  containerImages?: Array<ContainerImage>;
}
export interface GetContainerLogRequest {
  serviceName: string;
  containerName: string;
  startTime?: Date | string;
  endTime?: Date | string;
  filterPattern?: string;
  pageToken?: string;
}
export interface GetContainerLogResult {
  logEvents?: Array<ContainerServiceLogEvent>;
  nextPageToken?: string;
}
export interface GetContainerServiceDeploymentsRequest {
  serviceName: string;
}
export interface GetContainerServiceDeploymentsResult {
  deployments?: Array<ContainerServiceDeployment>;
}
export interface GetContainerServiceMetricDataRequest {
  serviceName: string;
  metricName: ContainerServiceMetricName;
  startTime: Date | string;
  endTime: Date | string;
  period: number;
  statistics: Array<MetricStatistic>;
}
export interface GetContainerServiceMetricDataResult {
  metricName?: ContainerServiceMetricName;
  metricData?: Array<MetricDatapoint>;
}
export interface GetContainerServicePowersRequest {}
export interface GetContainerServicePowersResult {
  powers?: Array<ContainerServicePower>;
}
export interface GetContainerServicesRequest {
  serviceName?: string;
}
export interface GetCostEstimateRequest {
  resourceName: string;
  startTime: Date | string;
  endTime: Date | string;
}
export interface GetCostEstimateResult {
  resourcesBudgetEstimate?: Array<ResourceBudgetEstimate>;
}
export interface GetDiskRequest {
  diskName: string;
}
export interface GetDiskResult {
  disk?: Disk;
}
export interface GetDiskSnapshotRequest {
  diskSnapshotName: string;
}
export interface GetDiskSnapshotResult {
  diskSnapshot?: DiskSnapshot;
}
export interface GetDiskSnapshotsRequest {
  pageToken?: string;
}
export interface GetDiskSnapshotsResult {
  diskSnapshots?: Array<DiskSnapshot>;
  nextPageToken?: string;
}
export interface GetDisksRequest {
  pageToken?: string;
}
export interface GetDisksResult {
  disks?: Array<Disk>;
  nextPageToken?: string;
}
export interface GetDistributionBundlesRequest {}
export interface GetDistributionBundlesResult {
  bundles?: Array<DistributionBundle>;
}
export interface GetDistributionLatestCacheResetRequest {
  distributionName?: string;
}
export interface GetDistributionLatestCacheResetResult {
  status?: string;
  createTime?: Date | string;
}
export interface GetDistributionMetricDataRequest {
  distributionName: string;
  metricName: DistributionMetricName;
  startTime: Date | string;
  endTime: Date | string;
  period: number;
  unit: MetricUnit;
  statistics: Array<MetricStatistic>;
}
export interface GetDistributionMetricDataResult {
  metricName?: DistributionMetricName;
  metricData?: Array<MetricDatapoint>;
}
export interface GetDistributionsRequest {
  distributionName?: string;
  pageToken?: string;
}
export interface GetDistributionsResult {
  distributions?: Array<LightsailDistribution>;
  nextPageToken?: string;
}
export interface GetDomainRequest {
  domainName: string;
}
export interface GetDomainResult {
  domain?: Domain;
}
export interface GetDomainsRequest {
  pageToken?: string;
}
export interface GetDomainsResult {
  domains?: Array<Domain>;
  nextPageToken?: string;
}
export interface GetExportSnapshotRecordsRequest {
  pageToken?: string;
}
export interface GetExportSnapshotRecordsResult {
  exportSnapshotRecords?: Array<ExportSnapshotRecord>;
  nextPageToken?: string;
}
export interface GetInstanceAccessDetailsRequest {
  instanceName: string;
  protocol?: InstanceAccessProtocol;
}
export interface GetInstanceAccessDetailsResult {
  accessDetails?: InstanceAccessDetails;
}
export interface GetInstanceMetricDataRequest {
  instanceName: string;
  metricName: InstanceMetricName;
  period: number;
  startTime: Date | string;
  endTime: Date | string;
  unit: MetricUnit;
  statistics: Array<MetricStatistic>;
}
export interface GetInstanceMetricDataResult {
  metricName?: InstanceMetricName;
  metricData?: Array<MetricDatapoint>;
}
export interface GetInstancePortStatesRequest {
  instanceName: string;
}
export interface GetInstancePortStatesResult {
  portStates?: Array<InstancePortState>;
}
export interface GetInstanceRequest {
  instanceName: string;
}
export interface GetInstanceResult {
  instance?: Instance;
}
export interface GetInstanceSnapshotRequest {
  instanceSnapshotName: string;
}
export interface GetInstanceSnapshotResult {
  instanceSnapshot?: InstanceSnapshot;
}
export interface GetInstanceSnapshotsRequest {
  pageToken?: string;
}
export interface GetInstanceSnapshotsResult {
  instanceSnapshots?: Array<InstanceSnapshot>;
  nextPageToken?: string;
}
export interface GetInstancesRequest {
  pageToken?: string;
}
export interface GetInstancesResult {
  instances?: Array<Instance>;
  nextPageToken?: string;
}
export interface GetInstanceStateRequest {
  instanceName: string;
}
export interface GetInstanceStateResult {
  state?: InstanceState;
}
export interface GetKeyPairRequest {
  keyPairName: string;
}
export interface GetKeyPairResult {
  keyPair?: KeyPair;
}
export interface GetKeyPairsRequest {
  pageToken?: string;
  includeDefaultKeyPair?: boolean;
}
export interface GetKeyPairsResult {
  keyPairs?: Array<KeyPair>;
  nextPageToken?: string;
}
export interface GetLoadBalancerMetricDataRequest {
  loadBalancerName: string;
  metricName: LoadBalancerMetricName;
  period: number;
  startTime: Date | string;
  endTime: Date | string;
  unit: MetricUnit;
  statistics: Array<MetricStatistic>;
}
export interface GetLoadBalancerMetricDataResult {
  metricName?: LoadBalancerMetricName;
  metricData?: Array<MetricDatapoint>;
}
export interface GetLoadBalancerRequest {
  loadBalancerName: string;
}
export interface GetLoadBalancerResult {
  loadBalancer?: LoadBalancer;
}
export interface GetLoadBalancersRequest {
  pageToken?: string;
}
export interface GetLoadBalancersResult {
  loadBalancers?: Array<LoadBalancer>;
  nextPageToken?: string;
}
export interface GetLoadBalancerTlsCertificatesRequest {
  loadBalancerName: string;
}
export interface GetLoadBalancerTlsCertificatesResult {
  tlsCertificates?: Array<LoadBalancerTlsCertificate>;
}
export interface GetLoadBalancerTlsPoliciesRequest {
  pageToken?: string;
}
export interface GetLoadBalancerTlsPoliciesResult {
  tlsPolicies?: Array<LoadBalancerTlsPolicy>;
  nextPageToken?: string;
}
export interface GetOperationRequest {
  operationId: string;
}
export interface GetOperationResult {
  operation?: Operation;
}
export interface GetOperationsForResourceRequest {
  resourceName: string;
  pageToken?: string;
}
export interface GetOperationsForResourceResult {
  operations?: Array<Operation>;
  nextPageCount?: string;
  nextPageToken?: string;
}
export interface GetOperationsRequest {
  pageToken?: string;
}
export interface GetOperationsResult {
  operations?: Array<Operation>;
  nextPageToken?: string;
}
export interface GetRegionsRequest {
  includeAvailabilityZones?: boolean;
  includeRelationalDatabaseAvailabilityZones?: boolean;
}
export interface GetRegionsResult {
  regions?: Array<Region>;
}
export interface GetRelationalDatabaseBlueprintsRequest {
  pageToken?: string;
}
export interface GetRelationalDatabaseBlueprintsResult {
  blueprints?: Array<RelationalDatabaseBlueprint>;
  nextPageToken?: string;
}
export interface GetRelationalDatabaseBundlesRequest {
  pageToken?: string;
  includeInactive?: boolean;
}
export interface GetRelationalDatabaseBundlesResult {
  bundles?: Array<RelationalDatabaseBundle>;
  nextPageToken?: string;
}
export interface GetRelationalDatabaseEventsRequest {
  relationalDatabaseName: string;
  durationInMinutes?: number;
  pageToken?: string;
}
export interface GetRelationalDatabaseEventsResult {
  relationalDatabaseEvents?: Array<RelationalDatabaseEvent>;
  nextPageToken?: string;
}
export interface GetRelationalDatabaseLogEventsRequest {
  relationalDatabaseName: string;
  logStreamName: string;
  startTime?: Date | string;
  endTime?: Date | string;
  startFromHead?: boolean;
  pageToken?: string;
}
export interface GetRelationalDatabaseLogEventsResult {
  resourceLogEvents?: Array<LogEvent>;
  nextBackwardToken?: string;
  nextForwardToken?: string;
}
export interface GetRelationalDatabaseLogStreamsRequest {
  relationalDatabaseName: string;
}
export interface GetRelationalDatabaseLogStreamsResult {
  logStreams?: Array<string>;
}
export interface GetRelationalDatabaseMasterUserPasswordRequest {
  relationalDatabaseName: string;
  passwordVersion?: RelationalDatabasePasswordVersion;
}
export interface GetRelationalDatabaseMasterUserPasswordResult {
  masterUserPassword?: string;
  createdAt?: Date | string;
}
export interface GetRelationalDatabaseMetricDataRequest {
  relationalDatabaseName: string;
  metricName: RelationalDatabaseMetricName;
  period: number;
  startTime: Date | string;
  endTime: Date | string;
  unit: MetricUnit;
  statistics: Array<MetricStatistic>;
}
export interface GetRelationalDatabaseMetricDataResult {
  metricName?: RelationalDatabaseMetricName;
  metricData?: Array<MetricDatapoint>;
}
export interface GetRelationalDatabaseParametersRequest {
  relationalDatabaseName: string;
  pageToken?: string;
}
export interface GetRelationalDatabaseParametersResult {
  parameters?: Array<RelationalDatabaseParameter>;
  nextPageToken?: string;
}
export interface GetRelationalDatabaseRequest {
  relationalDatabaseName: string;
}
export interface GetRelationalDatabaseResult {
  relationalDatabase?: RelationalDatabase;
}
export interface GetRelationalDatabaseSnapshotRequest {
  relationalDatabaseSnapshotName: string;
}
export interface GetRelationalDatabaseSnapshotResult {
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
}
export interface GetRelationalDatabaseSnapshotsRequest {
  pageToken?: string;
}
export interface GetRelationalDatabaseSnapshotsResult {
  relationalDatabaseSnapshots?: Array<RelationalDatabaseSnapshot>;
  nextPageToken?: string;
}
export interface GetRelationalDatabasesRequest {
  pageToken?: string;
}
export interface GetRelationalDatabasesResult {
  relationalDatabases?: Array<RelationalDatabase>;
  nextPageToken?: string;
}
export interface GetSetupHistoryRequest {
  resourceName: string;
  pageToken?: string;
}
export interface GetSetupHistoryResult {
  setupHistory?: Array<SetupHistory>;
  nextPageToken?: string;
}
export interface GetStaticIpRequest {
  staticIpName: string;
}
export interface GetStaticIpResult {
  staticIp?: StaticIp;
}
export interface GetStaticIpsRequest {
  pageToken?: string;
}
export interface GetStaticIpsResult {
  staticIps?: Array<StaticIp>;
  nextPageToken?: string;
}
export type HeaderEnum =
  | "accept"
  | "acceptCharset"
  | "acceptDatetime"
  | "acceptEncoding"
  | "acceptLanguage"
  | "authorization"
  | "cloudFrontForwardedProto"
  | "cloudFrontIsDesktopViewer"
  | "cloudFrontIsMobileViewer"
  | "cloudFrontIsSmartTVViewer"
  | "cloudFrontIsTabletViewer"
  | "cloudFrontViewerCountry"
  | "host"
  | "origin"
  | "referer";
export type HeaderForwardList = Array<HeaderEnum>;
export interface HeaderObject {
  option?: ForwardValues;
  headersAllowList?: Array<HeaderEnum>;
}
export interface HostKeyAttributes {
  algorithm?: string;
  publicKey?: string;
  witnessedAt?: Date | string;
  fingerprintSHA1?: string;
  fingerprintSHA256?: string;
  notValidBefore?: Date | string;
  notValidAfter?: Date | string;
}
export type HostKeysList = Array<HostKeyAttributes>;
export type HttpEndpoint = "disabled" | "enabled";
export type HttpProtocolIpv6 = "disabled" | "enabled";
export type HttpTokens = "optional" | "required";
export type IAMAccessKeyId = string;

export interface ImportKeyPairRequest {
  keyPairName: string;
  publicKeyBase64: string;
}
export interface ImportKeyPairResult {
  operation?: Operation;
}
export type IncludeCertificateDetails = boolean;

export interface InputOrigin {
  name?: string;
  regionName?: RegionName;
  protocolPolicy?: OriginProtocolPolicyEnum;
  responseTimeout?: number;
}
export interface Instance {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  blueprintId?: string;
  blueprintName?: string;
  bundleId?: string;
  addOns?: Array<AddOn>;
  isStaticIp?: boolean;
  privateIpAddress?: string;
  publicIpAddress?: string;
  ipv6Addresses?: Array<string>;
  ipAddressType?: IpAddressType;
  hardware?: InstanceHardware;
  networking?: InstanceNetworking;
  state?: InstanceState;
  username?: string;
  sshKeyName?: string;
  metadataOptions?: InstanceMetadataOptions;
}
export interface InstanceAccessDetails {
  certKey?: string;
  expiresAt?: Date | string;
  ipAddress?: string;
  ipv6Addresses?: Array<string>;
  password?: string;
  passwordData?: PasswordData;
  privateKey?: string;
  protocol?: InstanceAccessProtocol;
  instanceName?: string;
  username?: string;
  hostKeys?: Array<HostKeyAttributes>;
}
export type InstanceAccessProtocol = "ssh" | "rdp";
export interface InstanceEntry {
  sourceName: string;
  instanceType: string;
  portInfoSource: PortInfoSourceType;
  userData?: string;
  availabilityZone: string;
}
export type InstanceEntryList = Array<InstanceEntry>;
export interface InstanceHardware {
  cpuCount?: number;
  disks?: Array<Disk>;
  ramSizeInGb?: number;
}
export type InstanceHealthReason =
  | "LbRegistrationInProgress"
  | "LbInitialHealthChecking"
  | "LbInternalError"
  | "InstanceResponseCodeMismatch"
  | "InstanceTimeout"
  | "InstanceFailedHealthChecks"
  | "InstanceNotRegistered"
  | "InstanceNotInUse"
  | "InstanceDeregistrationInProgress"
  | "InstanceInvalidState"
  | "InstanceIpUnusable";
export type InstanceHealthState =
  | "Initial"
  | "Healthy"
  | "Unhealthy"
  | "Unused"
  | "Draining"
  | "Unavailable";
export interface InstanceHealthSummary {
  instanceName?: string;
  instanceHealth?: InstanceHealthState;
  instanceHealthReason?: InstanceHealthReason;
}
export type InstanceHealthSummaryList = Array<InstanceHealthSummary>;
export type InstanceList = Array<Instance>;
export interface InstanceMetadataOptions {
  state?: InstanceMetadataState;
  httpTokens?: HttpTokens;
  httpEndpoint?: HttpEndpoint;
  httpPutResponseHopLimit?: number;
  httpProtocolIpv6?: HttpProtocolIpv6;
}
export type InstanceMetadataState = "pending" | "applied";
export type InstanceMetricName =
  | "CPUUtilization"
  | "NetworkIn"
  | "NetworkOut"
  | "StatusCheckFailed"
  | "StatusCheckFailed_Instance"
  | "StatusCheckFailed_System"
  | "BurstCapacityTime"
  | "BurstCapacityPercentage"
  | "MetadataNoToken";
export interface InstanceNetworking {
  monthlyTransfer?: MonthlyTransfer;
  ports?: Array<InstancePortInfo>;
}
export type InstancePlatform = "LinuxUnix" | "Windows";
export type InstancePlatformList = Array<InstancePlatform>;
export interface InstancePortInfo {
  fromPort?: number;
  toPort?: number;
  protocol?: NetworkProtocol;
  accessFrom?: string;
  accessType?: PortAccessType;
  commonName?: string;
  accessDirection?: AccessDirection;
  cidrs?: Array<string>;
  ipv6Cidrs?: Array<string>;
  cidrListAliases?: Array<string>;
}
export type InstancePortInfoList = Array<InstancePortInfo>;
export interface InstancePortState {
  fromPort?: number;
  toPort?: number;
  protocol?: NetworkProtocol;
  state?: PortState;
  cidrs?: Array<string>;
  ipv6Cidrs?: Array<string>;
  cidrListAliases?: Array<string>;
}
export type InstancePortStateList = Array<InstancePortState>;
export interface InstanceSnapshot {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  state?: InstanceSnapshotState;
  progress?: string;
  fromAttachedDisks?: Array<Disk>;
  fromInstanceName?: string;
  fromInstanceArn?: string;
  fromBlueprintId?: string;
  fromBundleId?: string;
  isFromAutoSnapshot?: boolean;
  sizeInGb?: number;
}
export interface InstanceSnapshotInfo {
  fromBundleId?: string;
  fromBlueprintId?: string;
  fromDiskInfo?: Array<DiskInfo>;
}
export type InstanceSnapshotList = Array<InstanceSnapshot>;
export type InstanceSnapshotState = "Pending" | "Error" | "Available";
export interface InstanceState {
  code?: number;
  name?: string;
}
export type integer = number;

export type InUseResourceCount = number;

export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly code?: string;
  readonly docs?: string;
  readonly message?: string;
  readonly tip?: string;
}> {}
export type IpAddress = string;

export type IpAddressType = "DUALSTACK" | "IPV4" | "IPV6";
export type Ipv6Address = string;

export type Ipv6AddressList = Array<string>;
export type IsoDate = Date | string;

export type IssuerCA = string;

export interface IsVpcPeeredRequest {}
export interface IsVpcPeeredResult {
  isPeered?: boolean;
}
export type KeyAlgorithm = string;

export interface KeyPair {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  fingerprint?: string;
}
export type KeyPairList = Array<KeyPair>;
export interface LightsailDistribution {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  alternativeDomainNames?: Array<string>;
  status?: string;
  isEnabled?: boolean;
  domainName?: string;
  bundleId?: string;
  certificateName?: string;
  origin?: Origin;
  originPublicDNS?: string;
  defaultCacheBehavior?: CacheBehavior;
  cacheBehaviorSettings?: CacheSettings;
  cacheBehaviors?: Array<CacheBehaviorPerPath>;
  ableToUpdateBundle?: boolean;
  ipAddressType?: IpAddressType;
  tags?: Array<Tag>;
  viewerMinimumTlsProtocolVersion?: string;
}
export interface LoadBalancer {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  dnsName?: string;
  state?: LoadBalancerState;
  protocol?: LoadBalancerProtocol;
  publicPorts?: Array<number>;
  healthCheckPath?: string;
  instancePort?: number;
  instanceHealthSummary?: Array<InstanceHealthSummary>;
  tlsCertificateSummaries?: Array<LoadBalancerTlsCertificateSummary>;
  configurationOptions?: Record<LoadBalancerAttributeName, string>;
  ipAddressType?: IpAddressType;
  httpsRedirectionEnabled?: boolean;
  tlsPolicyName?: string;
}
export type LoadBalancerAttributeName =
  | "HealthCheckPath"
  | "SessionStickinessEnabled"
  | "SessionStickiness_LB_CookieDurationSeconds"
  | "HttpsRedirectionEnabled"
  | "TlsPolicyName";
export type LoadBalancerConfigurationOptions = Record<
  LoadBalancerAttributeName,
  string
>;
export type LoadBalancerList = Array<LoadBalancer>;
export type LoadBalancerMetricName =
  | "ClientTLSNegotiationErrorCount"
  | "HealthyHostCount"
  | "UnhealthyHostCount"
  | "HTTPCode_LB_4XX_Count"
  | "HTTPCode_LB_5XX_Count"
  | "HTTPCode_Instance_2XX_Count"
  | "HTTPCode_Instance_3XX_Count"
  | "HTTPCode_Instance_4XX_Count"
  | "HTTPCode_Instance_5XX_Count"
  | "InstanceResponseTime"
  | "RejectedConnectionCount"
  | "RequestCount";
export type LoadBalancerProtocol = "HTTP_HTTPS" | "HTTP";
export type LoadBalancerState =
  | "Active"
  | "Provisioning"
  | "ActiveImpaired"
  | "Failed"
  | "Unknown";
export interface LoadBalancerTlsCertificate {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  loadBalancerName?: string;
  isAttached?: boolean;
  status?: LoadBalancerTlsCertificateStatus;
  domainName?: string;
  domainValidationRecords?: Array<LoadBalancerTlsCertificateDomainValidationRecord>;
  failureReason?: LoadBalancerTlsCertificateFailureReason;
  issuedAt?: Date | string;
  issuer?: string;
  keyAlgorithm?: string;
  notAfter?: Date | string;
  notBefore?: Date | string;
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
  revocationReason?: LoadBalancerTlsCertificateRevocationReason;
  revokedAt?: Date | string;
  serial?: string;
  signatureAlgorithm?: string;
  subject?: string;
  subjectAlternativeNames?: Array<string>;
}
export interface LoadBalancerTlsCertificateDnsRecordCreationState {
  code?: LoadBalancerTlsCertificateDnsRecordCreationStateCode;
  message?: string;
}
export type LoadBalancerTlsCertificateDnsRecordCreationStateCode =
  | "Succeeded"
  | "Started"
  | "Failed";
export type LoadBalancerTlsCertificateDomainStatus =
  | "PendingValidation"
  | "Failed"
  | "Success";
export interface LoadBalancerTlsCertificateDomainValidationOption {
  domainName?: string;
  validationStatus?: LoadBalancerTlsCertificateDomainStatus;
}
export type LoadBalancerTlsCertificateDomainValidationOptionList =
  Array<LoadBalancerTlsCertificateDomainValidationOption>;
export interface LoadBalancerTlsCertificateDomainValidationRecord {
  name?: string;
  type?: string;
  value?: string;
  validationStatus?: LoadBalancerTlsCertificateDomainStatus;
  domainName?: string;
  dnsRecordCreationState?: LoadBalancerTlsCertificateDnsRecordCreationState;
}
export type LoadBalancerTlsCertificateDomainValidationRecordList =
  Array<LoadBalancerTlsCertificateDomainValidationRecord>;
export type LoadBalancerTlsCertificateFailureReason =
  | "NoAvailableContacts"
  | "AdditionalVerificationRequired"
  | "DomainNotAllowed"
  | "InvalidPublicDomain"
  | "Other";
export type LoadBalancerTlsCertificateList = Array<LoadBalancerTlsCertificate>;
export type LoadBalancerTlsCertificateRenewalStatus =
  | "PendingAutoRenewal"
  | "PendingValidation"
  | "Success"
  | "Failed";
export interface LoadBalancerTlsCertificateRenewalSummary {
  renewalStatus?: LoadBalancerTlsCertificateRenewalStatus;
  domainValidationOptions?: Array<LoadBalancerTlsCertificateDomainValidationOption>;
}
export type LoadBalancerTlsCertificateRevocationReason =
  | "Unspecified"
  | "KeyCompromise"
  | "CaCompromise"
  | "AffiliationChanged"
  | "Superceded"
  | "CessationOfOperation"
  | "CertificateHold"
  | "RemoveFromCrl"
  | "PrivilegeWithdrawn"
  | "AACompromise";
export type LoadBalancerTlsCertificateStatus =
  | "PendingValidation"
  | "Issued"
  | "Inactive"
  | "Expired"
  | "ValidationTimedOut"
  | "Revoked"
  | "Failed"
  | "Unknown";
export interface LoadBalancerTlsCertificateSummary {
  name?: string;
  isAttached?: boolean;
}
export type LoadBalancerTlsCertificateSummaryList =
  Array<LoadBalancerTlsCertificateSummary>;
export interface LoadBalancerTlsPolicy {
  name?: string;
  isDefault?: boolean;
  description?: string;
  protocols?: Array<string>;
  ciphers?: Array<string>;
}
export type LoadBalancerTlsPolicyList = Array<LoadBalancerTlsPolicy>;
export interface LogEvent {
  createdAt?: Date | string;
  message?: string;
}
export type LogEventList = Array<LogEvent>;
export type long = number;

export interface MetricDatapoint {
  average?: number;
  maximum?: number;
  minimum?: number;
  sampleCount?: number;
  sum?: number;
  timestamp?: Date | string;
  unit?: MetricUnit;
}
export type MetricDatapointList = Array<MetricDatapoint>;
export type MetricName =
  | "CPUUtilization"
  | "NetworkIn"
  | "NetworkOut"
  | "StatusCheckFailed"
  | "StatusCheckFailed_Instance"
  | "StatusCheckFailed_System"
  | "ClientTLSNegotiationErrorCount"
  | "HealthyHostCount"
  | "UnhealthyHostCount"
  | "HTTPCode_LB_4XX_Count"
  | "HTTPCode_LB_5XX_Count"
  | "HTTPCode_Instance_2XX_Count"
  | "HTTPCode_Instance_3XX_Count"
  | "HTTPCode_Instance_4XX_Count"
  | "HTTPCode_Instance_5XX_Count"
  | "InstanceResponseTime"
  | "RejectedConnectionCount"
  | "RequestCount"
  | "DatabaseConnections"
  | "DiskQueueDepth"
  | "FreeStorageSpace"
  | "NetworkReceiveThroughput"
  | "NetworkTransmitThroughput"
  | "BurstCapacityTime"
  | "BurstCapacityPercentage";
export type MetricPeriod = number;

export type MetricStatistic =
  | "Minimum"
  | "Maximum"
  | "Sum"
  | "Average"
  | "SampleCount";
export type MetricStatisticList = Array<MetricStatistic>;
export type MetricUnit =
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Count"
  | "BytesSecond"
  | "KilobytesSecond"
  | "MegabytesSecond"
  | "GigabytesSecond"
  | "TerabytesSecond"
  | "BitsSecond"
  | "KilobitsSecond"
  | "MegabitsSecond"
  | "GigabitsSecond"
  | "TerabitsSecond"
  | "CountSecond"
  | "None";
export interface MonitoredResourceInfo {
  arn?: string;
  name?: string;
  resourceType?: ResourceType;
}
export interface MonthlyTransfer {
  gbPerMonthAllocated?: number;
}
export interface NameServersUpdateState {
  code?: NameServersUpdateStateCode;
  message?: string;
}
export type NameServersUpdateStateCode =
  | "Succeeded"
  | "Pending"
  | "Failed"
  | "Started";
export type NetworkProtocol = "TCP" | "ALL" | "UDP" | "ICMP" | "ICMPV6";
export type NonEmptyString = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly code?: string;
  readonly docs?: string;
  readonly message?: string;
  readonly tip?: string;
}> {}
export type NotificationTriggerList = Array<AlarmState>;
export interface OpenInstancePublicPortsRequest {
  portInfo: PortInfo;
  instanceName: string;
}
export interface OpenInstancePublicPortsResult {
  operation?: Operation;
}
export interface Operation {
  id?: string;
  resourceName?: string;
  resourceType?: ResourceType;
  createdAt?: Date | string;
  location?: ResourceLocation;
  isTerminal?: boolean;
  operationDetails?: string;
  operationType?: OperationType;
  status?: OperationStatus;
  statusChangedAt?: Date | string;
  errorCode?: string;
  errorDetails?: string;
}
export declare class OperationFailureException extends EffectData.TaggedError(
  "OperationFailureException",
)<{
  readonly code?: string;
  readonly docs?: string;
  readonly message?: string;
  readonly tip?: string;
}> {}
export type OperationList = Array<Operation>;
export type OperationStatus =
  | "NotStarted"
  | "Started"
  | "Failed"
  | "Completed"
  | "Succeeded";
export type OperationType =
  | "DeleteKnownHostKeys"
  | "DeleteInstance"
  | "CreateInstance"
  | "StopInstance"
  | "StartInstance"
  | "RebootInstance"
  | "OpenInstancePublicPorts"
  | "PutInstancePublicPorts"
  | "CloseInstancePublicPorts"
  | "AllocateStaticIp"
  | "ReleaseStaticIp"
  | "AttachStaticIp"
  | "DetachStaticIp"
  | "UpdateDomainEntry"
  | "DeleteDomainEntry"
  | "CreateDomain"
  | "DeleteDomain"
  | "CreateInstanceSnapshot"
  | "DeleteInstanceSnapshot"
  | "CreateInstancesFromSnapshot"
  | "CreateLoadBalancer"
  | "DeleteLoadBalancer"
  | "AttachInstancesToLoadBalancer"
  | "DetachInstancesFromLoadBalancer"
  | "UpdateLoadBalancerAttribute"
  | "CreateLoadBalancerTlsCertificate"
  | "DeleteLoadBalancerTlsCertificate"
  | "AttachLoadBalancerTlsCertificate"
  | "CreateDisk"
  | "DeleteDisk"
  | "AttachDisk"
  | "DetachDisk"
  | "CreateDiskSnapshot"
  | "DeleteDiskSnapshot"
  | "CreateDiskFromSnapshot"
  | "CreateRelationalDatabase"
  | "UpdateRelationalDatabase"
  | "DeleteRelationalDatabase"
  | "CreateRelationalDatabaseFromSnapshot"
  | "CreateRelationalDatabaseSnapshot"
  | "DeleteRelationalDatabaseSnapshot"
  | "UpdateRelationalDatabaseParameters"
  | "StartRelationalDatabase"
  | "RebootRelationalDatabase"
  | "StopRelationalDatabase"
  | "EnableAddOn"
  | "DisableAddOn"
  | "PutAlarm"
  | "GetAlarms"
  | "DeleteAlarm"
  | "TestAlarm"
  | "CreateContactMethod"
  | "GetContactMethods"
  | "SendContactMethodVerification"
  | "DeleteContactMethod"
  | "CreateDistribution"
  | "UpdateDistribution"
  | "DeleteDistribution"
  | "ResetDistributionCache"
  | "AttachCertificateToDistribution"
  | "DetachCertificateFromDistribution"
  | "UpdateDistributionBundle"
  | "SetIpAddressType"
  | "CreateCertificate"
  | "DeleteCertificate"
  | "CreateContainerService"
  | "UpdateContainerService"
  | "DeleteContainerService"
  | "CreateContainerServiceDeployment"
  | "CreateContainerServiceRegistryLogin"
  | "RegisterContainerImage"
  | "DeleteContainerImage"
  | "CreateBucket"
  | "DeleteBucket"
  | "CreateBucketAccessKey"
  | "DeleteBucketAccessKey"
  | "UpdateBucketBundle"
  | "UpdateBucket"
  | "SetResourceAccessForBucket"
  | "UpdateInstanceMetadataOptions"
  | "StartGUISession"
  | "StopGUISession"
  | "SetupInstanceHttps";
export interface Origin {
  name?: string;
  resourceType?: ResourceType;
  regionName?: RegionName;
  protocolPolicy?: OriginProtocolPolicyEnum;
  responseTimeout?: number;
}
export type OriginProtocolPolicyEnum = "HTTPOnly" | "HTTPSOnly";
export type PartnerIdList = Array<string>;
export interface PasswordData {
  ciphertext?: string;
  keyPairName?: string;
}
export interface PeerVpcRequest {}
export interface PeerVpcResult {
  operation?: Operation;
}
export interface PendingMaintenanceAction {
  action?: string;
  description?: string;
  currentApplyDate?: Date | string;
}
export type PendingMaintenanceActionList = Array<PendingMaintenanceAction>;
export interface PendingModifiedRelationalDatabaseValues {
  masterUserPassword?: string;
  engineVersion?: string;
  backupRetentionEnabled?: boolean;
}
export type Port = number;

export type PortAccessType = "Public" | "Private";
export interface PortInfo {
  fromPort?: number;
  toPort?: number;
  protocol?: NetworkProtocol;
  cidrs?: Array<string>;
  ipv6Cidrs?: Array<string>;
  cidrListAliases?: Array<string>;
}
export type PortInfoList = Array<PortInfo>;
export type PortInfoSourceType = "Default" | "Instance" | "None" | "Closed";
export type PortList = Array<number>;
export type PortMap = Record<string, ContainerServiceProtocol>;
export type PortState = "Open" | "Closed";
export type PricingUnit = "GB" | "Hrs" | "GBMo" | "Bundles" | "Queries";
export interface PrivateRegistryAccess {
  ecrImagePullerRole?: ContainerServiceECRImagePullerRole;
}
export interface PrivateRegistryAccessRequest {
  ecrImagePullerRole?: ContainerServiceECRImagePullerRoleRequest;
}
export interface PutAlarmRequest {
  alarmName: string;
  metricName: MetricName;
  monitoredResourceName: string;
  comparisonOperator: ComparisonOperator;
  threshold: number;
  evaluationPeriods: number;
  datapointsToAlarm?: number;
  treatMissingData?: TreatMissingData;
  contactProtocols?: Array<ContactProtocol>;
  notificationTriggers?: Array<AlarmState>;
  notificationEnabled?: boolean;
}
export interface PutAlarmResult {
  operations?: Array<Operation>;
}
export interface PutInstancePublicPortsRequest {
  portInfos: Array<PortInfo>;
  instanceName: string;
}
export interface PutInstancePublicPortsResult {
  operation?: Operation;
}
export interface QueryStringObject {
  option?: boolean;
  queryStringsAllowList?: Array<string>;
}
export interface R53HostedZoneDeletionState {
  code?: R53HostedZoneDeletionStateCode;
  message?: string;
}
export type R53HostedZoneDeletionStateCode =
  | "Succeeded"
  | "Pending"
  | "Failed"
  | "Started";
export interface RebootInstanceRequest {
  instanceName: string;
}
export interface RebootInstanceResult {
  operations?: Array<Operation>;
}
export interface RebootRelationalDatabaseRequest {
  relationalDatabaseName: string;
}
export interface RebootRelationalDatabaseResult {
  operations?: Array<Operation>;
}
export type RecordState = "Started" | "Succeeded" | "Failed";
export interface Region {
  continentCode?: string;
  description?: string;
  displayName?: string;
  name?: RegionName;
  availabilityZones?: Array<AvailabilityZone>;
  relationalDatabaseAvailabilityZones?: Array<AvailabilityZone>;
}
export type RegionList = Array<Region>;
export type RegionName =
  | "US_EAST_1"
  | "US_EAST_2"
  | "US_WEST_1"
  | "US_WEST_2"
  | "EU_WEST_1"
  | "EU_WEST_2"
  | "EU_WEST_3"
  | "EU_CENTRAL_1"
  | "CA_CENTRAL_1"
  | "AP_SOUTH_1"
  | "AP_SOUTHEAST_1"
  | "AP_SOUTHEAST_2"
  | "AP_NORTHEAST_1"
  | "AP_NORTHEAST_2"
  | "EU_NORTH_1";
export interface RegisterContainerImageRequest {
  serviceName: string;
  label: string;
  digest: string;
}
export interface RegisterContainerImageResult {
  containerImage?: ContainerImage;
}
export interface RegisteredDomainDelegationInfo {
  nameServersUpdateState?: NameServersUpdateState;
  r53HostedZoneDeletionState?: R53HostedZoneDeletionState;
}
export interface RelationalDatabase {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  relationalDatabaseBlueprintId?: string;
  relationalDatabaseBundleId?: string;
  masterDatabaseName?: string;
  hardware?: RelationalDatabaseHardware;
  state?: string;
  secondaryAvailabilityZone?: string;
  backupRetentionEnabled?: boolean;
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
  engine?: string;
  engineVersion?: string;
  latestRestorableTime?: Date | string;
  masterUsername?: string;
  parameterApplyStatus?: string;
  preferredBackupWindow?: string;
  preferredMaintenanceWindow?: string;
  publiclyAccessible?: boolean;
  masterEndpoint?: RelationalDatabaseEndpoint;
  pendingMaintenanceActions?: Array<PendingMaintenanceAction>;
  caCertificateIdentifier?: string;
}
export interface RelationalDatabaseBlueprint {
  blueprintId?: string;
  engine?: RelationalDatabaseEngine;
  engineVersion?: string;
  engineDescription?: string;
  engineVersionDescription?: string;
  isEngineDefault?: boolean;
}
export type RelationalDatabaseBlueprintList =
  Array<RelationalDatabaseBlueprint>;
export interface RelationalDatabaseBundle {
  bundleId?: string;
  name?: string;
  price?: number;
  ramSizeInGb?: number;
  diskSizeInGb?: number;
  transferPerMonthInGb?: number;
  cpuCount?: number;
  isEncrypted?: boolean;
  isActive?: boolean;
}
export type RelationalDatabaseBundleList = Array<RelationalDatabaseBundle>;
export interface RelationalDatabaseEndpoint {
  port?: number;
  address?: string;
}
export type RelationalDatabaseEngine = "MYSQL";
export interface RelationalDatabaseEvent {
  resource?: string;
  createdAt?: Date | string;
  message?: string;
  eventCategories?: Array<string>;
}
export type RelationalDatabaseEventList = Array<RelationalDatabaseEvent>;
export interface RelationalDatabaseHardware {
  cpuCount?: number;
  diskSizeInGb?: number;
  ramSizeInGb?: number;
}
export type RelationalDatabaseList = Array<RelationalDatabase>;
export type RelationalDatabaseMetricName =
  | "CPUUtilization"
  | "DatabaseConnections"
  | "DiskQueueDepth"
  | "FreeStorageSpace"
  | "NetworkReceiveThroughput"
  | "NetworkTransmitThroughput";
export interface RelationalDatabaseParameter {
  allowedValues?: string;
  applyMethod?: string;
  applyType?: string;
  dataType?: string;
  description?: string;
  isModifiable?: boolean;
  parameterName?: string;
  parameterValue?: string;
}
export type RelationalDatabaseParameterList =
  Array<RelationalDatabaseParameter>;
export type RelationalDatabasePasswordVersion =
  | "CURRENT"
  | "PREVIOUS"
  | "PENDING";
export interface RelationalDatabaseSnapshot {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  tags?: Array<Tag>;
  engine?: string;
  engineVersion?: string;
  sizeInGb?: number;
  state?: string;
  fromRelationalDatabaseName?: string;
  fromRelationalDatabaseArn?: string;
  fromRelationalDatabaseBundleId?: string;
  fromRelationalDatabaseBlueprintId?: string;
}
export type RelationalDatabaseSnapshotList = Array<RelationalDatabaseSnapshot>;
export interface ReleaseStaticIpRequest {
  staticIpName: string;
}
export interface ReleaseStaticIpResult {
  operations?: Array<Operation>;
}
export type RenewalStatus =
  | "PendingAutoRenewal"
  | "PendingValidation"
  | "Success"
  | "Failed";
export type RenewalStatusReason = string;

export interface RenewalSummary {
  domainValidationRecords?: Array<DomainValidationRecord>;
  renewalStatus?: RenewalStatus;
  renewalStatusReason?: string;
  updatedAt?: Date | string;
}
export type RequestFailureReason = string;

export interface ResetDistributionCacheRequest {
  distributionName?: string;
}
export interface ResetDistributionCacheResult {
  status?: string;
  createTime?: Date | string;
  operation?: Operation;
}
export type ResourceArn = string;

export type ResourceBucketAccess = "Allow" | "Deny";
export interface ResourceBudgetEstimate {
  resourceName?: string;
  resourceType?: ResourceType;
  costEstimates?: Array<CostEstimate>;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface ResourceLocation {
  availabilityZone?: string;
  regionName?: RegionName;
}
export type ResourceName = string;

export type ResourceNameList = Array<string>;
export interface ResourceReceivingAccess {
  name?: string;
  resourceType?: string;
}
export interface ResourceRecord {
  name?: string;
  type?: string;
  value?: string;
}
export type ResourcesBudgetEstimate = Array<ResourceBudgetEstimate>;
export type ResourceType =
  | "ContainerService"
  | "Instance"
  | "StaticIp"
  | "KeyPair"
  | "InstanceSnapshot"
  | "Domain"
  | "PeeredVpc"
  | "LoadBalancer"
  | "LoadBalancerTlsCertificate"
  | "Disk"
  | "DiskSnapshot"
  | "RelationalDatabase"
  | "RelationalDatabaseSnapshot"
  | "ExportSnapshotRecord"
  | "CloudFormationStackRecord"
  | "Alarm"
  | "ContactMethod"
  | "Distribution"
  | "Certificate"
  | "Bucket";
export type RevocationReason = string;

export interface SendContactMethodVerificationRequest {
  protocol: ContactMethodVerificationProtocol;
}
export interface SendContactMethodVerificationResult {
  operations?: Array<Operation>;
}
export type SensitiveNonEmptyString = string;

export type SensitiveString = string;

export type SerialNumber = string;

export declare class ServiceException extends EffectData.TaggedError(
  "ServiceException",
)<{
  readonly code?: string;
  readonly docs?: string;
  readonly message?: string;
  readonly tip?: string;
}> {}
export interface Session {
  name?: string;
  url?: string;
  isPrimary?: boolean;
}
export type Sessions = Array<Session>;
export interface SetIpAddressTypeRequest {
  resourceType: ResourceType;
  resourceName: string;
  ipAddressType: IpAddressType;
  acceptBundleUpdate?: boolean;
}
export interface SetIpAddressTypeResult {
  operations?: Array<Operation>;
}
export interface SetResourceAccessForBucketRequest {
  resourceName: string;
  bucketName: string;
  access: ResourceBucketAccess;
}
export interface SetResourceAccessForBucketResult {
  operations?: Array<Operation>;
}
export type SetupDomainName = string;

export type SetupDomainNameList = Array<string>;
export interface SetupExecutionDetails {
  command?: string;
  dateTime?: Date | string;
  name?: string;
  status?: SetupStatus;
  standardError?: string;
  standardOutput?: string;
  version?: string;
}
export type SetupExecutionDetailsList = Array<SetupExecutionDetails>;
export interface SetupHistory {
  operationId?: string;
  request?: SetupRequest;
  resource?: SetupHistoryResource;
  executionDetails?: Array<SetupExecutionDetails>;
  status?: SetupStatus;
}
export type setupHistoryList = Array<SetupHistory>;
export type SetupHistoryPageToken = string;

export interface SetupHistoryResource {
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
}
export interface SetupInstanceHttpsRequest {
  instanceName: string;
  emailAddress: string;
  domainNames: Array<string>;
  certificateProvider: CertificateProvider;
}
export interface SetupInstanceHttpsResult {
  operations?: Array<Operation>;
}
export interface SetupRequest {
  instanceName?: string;
  domainNames?: Array<string>;
  certificateProvider?: CertificateProvider;
}
export type SetupStatus = "Succeeded" | "Failed" | "InProgress";
export interface StartGUISessionRequest {
  resourceName: string;
}
export interface StartGUISessionResult {
  operations?: Array<Operation>;
}
export interface StartInstanceRequest {
  instanceName: string;
}
export interface StartInstanceResult {
  operations?: Array<Operation>;
}
export interface StartRelationalDatabaseRequest {
  relationalDatabaseName: string;
}
export interface StartRelationalDatabaseResult {
  operations?: Array<Operation>;
}
export interface StaticIp {
  name?: string;
  arn?: string;
  supportCode?: string;
  createdAt?: Date | string;
  location?: ResourceLocation;
  resourceType?: ResourceType;
  ipAddress?: string;
  attachedTo?: string;
  isAttached?: boolean;
}
export type StaticIpList = Array<StaticIp>;
export type Status =
  | "StartExpired"
  | "NotStarted"
  | "Started"
  | "Starting"
  | "Stopped"
  | "Stopping"
  | "SettingUpInstance"
  | "FailedInstanceCreation"
  | "FailedStartingGUISession"
  | "FailedStoppingGUISession";
export type StatusType = "Active" | "Inactive";
export interface StopGUISessionRequest {
  resourceName: string;
}
export interface StopGUISessionResult {
  operations?: Array<Operation>;
}
export interface StopInstanceOnIdleRequest {
  threshold?: string;
  duration?: string;
}
export interface StopInstanceRequest {
  instanceName: string;
  force?: boolean;
}
export interface StopInstanceResult {
  operations?: Array<Operation>;
}
export interface StopRelationalDatabaseRequest {
  relationalDatabaseName: string;
  relationalDatabaseSnapshotName?: string;
}
export interface StopRelationalDatabaseResult {
  operations?: Array<Operation>;
}
export type Lightsailstring = string;

export type StringList = Array<string>;
export type StringMax256 = string;

export type SubjectAlternativeNameList = Array<string>;
export interface Tag {
  key?: string;
  value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceName: string;
  resourceArn?: string;
  tags: Array<Tag>;
}
export interface TagResourceResult {
  operations?: Array<Operation>;
}
export type TagValue = string;

export interface TestAlarmRequest {
  alarmName: string;
  state: AlarmState;
}
export interface TestAlarmResult {
  operations?: Array<Operation>;
}
export type TimeOfDay = string;

export interface TimePeriod {
  start?: Date | string;
  end?: Date | string;
}
export type timestamp = Date | string;

export type TreatMissingData =
  | "Breaching"
  | "NotBreaching"
  | "Ignore"
  | "Missing";
export declare class UnauthenticatedException extends EffectData.TaggedError(
  "UnauthenticatedException",
)<{
  readonly code?: string;
  readonly docs?: string;
  readonly message?: string;
  readonly tip?: string;
}> {}
export interface UnpeerVpcRequest {}
export interface UnpeerVpcResult {
  operation?: Operation;
}
export interface UntagResourceRequest {
  resourceName: string;
  resourceArn?: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResult {
  operations?: Array<Operation>;
}
export interface UpdateBucketBundleRequest {
  bucketName: string;
  bundleId: string;
}
export interface UpdateBucketBundleResult {
  operations?: Array<Operation>;
}
export interface UpdateBucketRequest {
  bucketName: string;
  accessRules?: AccessRules;
  versioning?: string;
  readonlyAccessAccounts?: Array<string>;
  accessLogConfig?: BucketAccessLogConfig;
}
export interface UpdateBucketResult {
  bucket?: Bucket;
  operations?: Array<Operation>;
}
export interface UpdateContainerServiceRequest {
  serviceName: string;
  power?: ContainerServicePowerName;
  scale?: number;
  isDisabled?: boolean;
  publicDomainNames?: Record<string, Array<string>>;
  privateRegistryAccess?: PrivateRegistryAccessRequest;
}
export interface UpdateContainerServiceResult {
  containerService?: ContainerService;
}
export interface UpdateDistributionBundleRequest {
  distributionName?: string;
  bundleId?: string;
}
export interface UpdateDistributionBundleResult {
  operation?: Operation;
}
export interface UpdateDistributionRequest {
  distributionName: string;
  origin?: InputOrigin;
  defaultCacheBehavior?: CacheBehavior;
  cacheBehaviorSettings?: CacheSettings;
  cacheBehaviors?: Array<CacheBehaviorPerPath>;
  isEnabled?: boolean;
  viewerMinimumTlsProtocolVersion?: ViewerMinimumTlsProtocolVersionEnum;
  certificateName?: string;
  useDefaultCertificate?: boolean;
}
export interface UpdateDistributionResult {
  operation?: Operation;
}
export interface UpdateDomainEntryRequest {
  domainName: string;
  domainEntry: DomainEntry;
}
export interface UpdateDomainEntryResult {
  operations?: Array<Operation>;
}
export interface UpdateInstanceMetadataOptionsRequest {
  instanceName: string;
  httpTokens?: HttpTokens;
  httpEndpoint?: HttpEndpoint;
  httpPutResponseHopLimit?: number;
  httpProtocolIpv6?: HttpProtocolIpv6;
}
export interface UpdateInstanceMetadataOptionsResult {
  operation?: Operation;
}
export interface UpdateLoadBalancerAttributeRequest {
  loadBalancerName: string;
  attributeName: LoadBalancerAttributeName;
  attributeValue: string;
}
export interface UpdateLoadBalancerAttributeResult {
  operations?: Array<Operation>;
}
export interface UpdateRelationalDatabaseParametersRequest {
  relationalDatabaseName: string;
  parameters: Array<RelationalDatabaseParameter>;
}
export interface UpdateRelationalDatabaseParametersResult {
  operations?: Array<Operation>;
}
export interface UpdateRelationalDatabaseRequest {
  relationalDatabaseName: string;
  masterUserPassword?: string;
  rotateMasterUserPassword?: boolean;
  preferredBackupWindow?: string;
  preferredMaintenanceWindow?: string;
  enableBackupRetention?: boolean;
  disableBackupRetention?: boolean;
  publiclyAccessible?: boolean;
  applyImmediately?: boolean;
  caCertificateIdentifier?: string;
  relationalDatabaseBlueprintId?: string;
}
export interface UpdateRelationalDatabaseResult {
  operations?: Array<Operation>;
}
export type ViewerMinimumTlsProtocolVersionEnum =
  | "TLSv11_2016"
  | "TLSv12_2018"
  | "TLSv12_2019"
  | "TLSv12_2021";
export declare namespace AllocateStaticIp {
  export type Input = AllocateStaticIpRequest;
  export type Output = AllocateStaticIpResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace AttachCertificateToDistribution {
  export type Input = AttachCertificateToDistributionRequest;
  export type Output = AttachCertificateToDistributionResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace AttachDisk {
  export type Input = AttachDiskRequest;
  export type Output = AttachDiskResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace AttachInstancesToLoadBalancer {
  export type Input = AttachInstancesToLoadBalancerRequest;
  export type Output = AttachInstancesToLoadBalancerResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace AttachLoadBalancerTlsCertificate {
  export type Input = AttachLoadBalancerTlsCertificateRequest;
  export type Output = AttachLoadBalancerTlsCertificateResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace AttachStaticIp {
  export type Input = AttachStaticIpRequest;
  export type Output = AttachStaticIpResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CloseInstancePublicPorts {
  export type Input = CloseInstancePublicPortsRequest;
  export type Output = CloseInstancePublicPortsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CopySnapshot {
  export type Input = CopySnapshotRequest;
  export type Output = CopySnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateBucket {
  export type Input = CreateBucketRequest;
  export type Output = CreateBucketResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateBucketAccessKey {
  export type Input = CreateBucketAccessKeyRequest;
  export type Output = CreateBucketAccessKeyResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateCertificate {
  export type Input = CreateCertificateRequest;
  export type Output = CreateCertificateResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateCloudFormationStack {
  export type Input = CreateCloudFormationStackRequest;
  export type Output = CreateCloudFormationStackResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateContactMethod {
  export type Input = CreateContactMethodRequest;
  export type Output = CreateContactMethodResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateContainerService {
  export type Input = CreateContainerServiceRequest;
  export type Output = CreateContainerServiceResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateContainerServiceDeployment {
  export type Input = CreateContainerServiceDeploymentRequest;
  export type Output = CreateContainerServiceDeploymentResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateContainerServiceRegistryLogin {
  export type Input = CreateContainerServiceRegistryLoginRequest;
  export type Output = CreateContainerServiceRegistryLoginResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateDisk {
  export type Input = CreateDiskRequest;
  export type Output = CreateDiskResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateDiskFromSnapshot {
  export type Input = CreateDiskFromSnapshotRequest;
  export type Output = CreateDiskFromSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateDiskSnapshot {
  export type Input = CreateDiskSnapshotRequest;
  export type Output = CreateDiskSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateDistribution {
  export type Input = CreateDistributionRequest;
  export type Output = CreateDistributionResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = CreateDomainResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateDomainEntry {
  export type Input = CreateDomainEntryRequest;
  export type Output = CreateDomainEntryResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateGUISessionAccessDetails {
  export type Input = CreateGUISessionAccessDetailsRequest;
  export type Output = CreateGUISessionAccessDetailsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateInstances {
  export type Input = CreateInstancesRequest;
  export type Output = CreateInstancesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateInstancesFromSnapshot {
  export type Input = CreateInstancesFromSnapshotRequest;
  export type Output = CreateInstancesFromSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateInstanceSnapshot {
  export type Input = CreateInstanceSnapshotRequest;
  export type Output = CreateInstanceSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateKeyPair {
  export type Input = CreateKeyPairRequest;
  export type Output = CreateKeyPairResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateLoadBalancer {
  export type Input = CreateLoadBalancerRequest;
  export type Output = CreateLoadBalancerResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateLoadBalancerTlsCertificate {
  export type Input = CreateLoadBalancerTlsCertificateRequest;
  export type Output = CreateLoadBalancerTlsCertificateResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateRelationalDatabase {
  export type Input = CreateRelationalDatabaseRequest;
  export type Output = CreateRelationalDatabaseResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateRelationalDatabaseFromSnapshot {
  export type Input = CreateRelationalDatabaseFromSnapshotRequest;
  export type Output = CreateRelationalDatabaseFromSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace CreateRelationalDatabaseSnapshot {
  export type Input = CreateRelationalDatabaseSnapshotRequest;
  export type Output = CreateRelationalDatabaseSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteAlarm {
  export type Input = DeleteAlarmRequest;
  export type Output = DeleteAlarmResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteAutoSnapshot {
  export type Input = DeleteAutoSnapshotRequest;
  export type Output = DeleteAutoSnapshotResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteBucket {
  export type Input = DeleteBucketRequest;
  export type Output = DeleteBucketResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteBucketAccessKey {
  export type Input = DeleteBucketAccessKeyRequest;
  export type Output = DeleteBucketAccessKeyResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteCertificate {
  export type Input = DeleteCertificateRequest;
  export type Output = DeleteCertificateResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteContactMethod {
  export type Input = DeleteContactMethodRequest;
  export type Output = DeleteContactMethodResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteContainerImage {
  export type Input = DeleteContainerImageRequest;
  export type Output = DeleteContainerImageResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteContainerService {
  export type Input = DeleteContainerServiceRequest;
  export type Output = DeleteContainerServiceResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteDisk {
  export type Input = DeleteDiskRequest;
  export type Output = DeleteDiskResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteDiskSnapshot {
  export type Input = DeleteDiskSnapshotRequest;
  export type Output = DeleteDiskSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteDistribution {
  export type Input = DeleteDistributionRequest;
  export type Output = DeleteDistributionResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = DeleteDomainResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteDomainEntry {
  export type Input = DeleteDomainEntryRequest;
  export type Output = DeleteDomainEntryResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteInstance {
  export type Input = DeleteInstanceRequest;
  export type Output = DeleteInstanceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteInstanceSnapshot {
  export type Input = DeleteInstanceSnapshotRequest;
  export type Output = DeleteInstanceSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteKeyPair {
  export type Input = DeleteKeyPairRequest;
  export type Output = DeleteKeyPairResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteKnownHostKeys {
  export type Input = DeleteKnownHostKeysRequest;
  export type Output = DeleteKnownHostKeysResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteLoadBalancer {
  export type Input = DeleteLoadBalancerRequest;
  export type Output = DeleteLoadBalancerResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteLoadBalancerTlsCertificate {
  export type Input = DeleteLoadBalancerTlsCertificateRequest;
  export type Output = DeleteLoadBalancerTlsCertificateResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteRelationalDatabase {
  export type Input = DeleteRelationalDatabaseRequest;
  export type Output = DeleteRelationalDatabaseResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DeleteRelationalDatabaseSnapshot {
  export type Input = DeleteRelationalDatabaseSnapshotRequest;
  export type Output = DeleteRelationalDatabaseSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DetachCertificateFromDistribution {
  export type Input = DetachCertificateFromDistributionRequest;
  export type Output = DetachCertificateFromDistributionResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DetachDisk {
  export type Input = DetachDiskRequest;
  export type Output = DetachDiskResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DetachInstancesFromLoadBalancer {
  export type Input = DetachInstancesFromLoadBalancerRequest;
  export type Output = DetachInstancesFromLoadBalancerResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DetachStaticIp {
  export type Input = DetachStaticIpRequest;
  export type Output = DetachStaticIpResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DisableAddOn {
  export type Input = DisableAddOnRequest;
  export type Output = DisableAddOnResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace DownloadDefaultKeyPair {
  export type Input = DownloadDefaultKeyPairRequest;
  export type Output = DownloadDefaultKeyPairResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace EnableAddOn {
  export type Input = EnableAddOnRequest;
  export type Output = EnableAddOnResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace ExportSnapshot {
  export type Input = ExportSnapshotRequest;
  export type Output = ExportSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetActiveNames {
  export type Input = GetActiveNamesRequest;
  export type Output = GetActiveNamesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetAlarms {
  export type Input = GetAlarmsRequest;
  export type Output = GetAlarmsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetAutoSnapshots {
  export type Input = GetAutoSnapshotsRequest;
  export type Output = GetAutoSnapshotsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetBlueprints {
  export type Input = GetBlueprintsRequest;
  export type Output = GetBlueprintsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetBucketAccessKeys {
  export type Input = GetBucketAccessKeysRequest;
  export type Output = GetBucketAccessKeysResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetBucketBundles {
  export type Input = GetBucketBundlesRequest;
  export type Output = GetBucketBundlesResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetBucketMetricData {
  export type Input = GetBucketMetricDataRequest;
  export type Output = GetBucketMetricDataResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetBuckets {
  export type Input = GetBucketsRequest;
  export type Output = GetBucketsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetBundles {
  export type Input = GetBundlesRequest;
  export type Output = GetBundlesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetCertificates {
  export type Input = GetCertificatesRequest;
  export type Output = GetCertificatesResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetCloudFormationStackRecords {
  export type Input = GetCloudFormationStackRecordsRequest;
  export type Output = GetCloudFormationStackRecordsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContactMethods {
  export type Input = GetContactMethodsRequest;
  export type Output = GetContactMethodsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContainerAPIMetadata {
  export type Input = GetContainerAPIMetadataRequest;
  export type Output = GetContainerAPIMetadataResult;
  export type Error =
    | AccessDeniedException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContainerImages {
  export type Input = GetContainerImagesRequest;
  export type Output = GetContainerImagesResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContainerLog {
  export type Input = GetContainerLogRequest;
  export type Output = GetContainerLogResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContainerServiceDeployments {
  export type Input = GetContainerServiceDeploymentsRequest;
  export type Output = GetContainerServiceDeploymentsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContainerServiceMetricData {
  export type Input = GetContainerServiceMetricDataRequest;
  export type Output = GetContainerServiceMetricDataResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContainerServicePowers {
  export type Input = GetContainerServicePowersRequest;
  export type Output = GetContainerServicePowersResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetContainerServices {
  export type Input = GetContainerServicesRequest;
  export type Output = ContainerServicesListResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetCostEstimate {
  export type Input = GetCostEstimateRequest;
  export type Output = GetCostEstimateResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDisk {
  export type Input = GetDiskRequest;
  export type Output = GetDiskResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDisks {
  export type Input = GetDisksRequest;
  export type Output = GetDisksResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDiskSnapshot {
  export type Input = GetDiskSnapshotRequest;
  export type Output = GetDiskSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDiskSnapshots {
  export type Input = GetDiskSnapshotsRequest;
  export type Output = GetDiskSnapshotsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDistributionBundles {
  export type Input = GetDistributionBundlesRequest;
  export type Output = GetDistributionBundlesResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDistributionLatestCacheReset {
  export type Input = GetDistributionLatestCacheResetRequest;
  export type Output = GetDistributionLatestCacheResetResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDistributionMetricData {
  export type Input = GetDistributionMetricDataRequest;
  export type Output = GetDistributionMetricDataResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDistributions {
  export type Input = GetDistributionsRequest;
  export type Output = GetDistributionsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDomain {
  export type Input = GetDomainRequest;
  export type Output = GetDomainResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetDomains {
  export type Input = GetDomainsRequest;
  export type Output = GetDomainsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetExportSnapshotRecords {
  export type Input = GetExportSnapshotRecordsRequest;
  export type Output = GetExportSnapshotRecordsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstance {
  export type Input = GetInstanceRequest;
  export type Output = GetInstanceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstanceAccessDetails {
  export type Input = GetInstanceAccessDetailsRequest;
  export type Output = GetInstanceAccessDetailsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstanceMetricData {
  export type Input = GetInstanceMetricDataRequest;
  export type Output = GetInstanceMetricDataResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstancePortStates {
  export type Input = GetInstancePortStatesRequest;
  export type Output = GetInstancePortStatesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstances {
  export type Input = GetInstancesRequest;
  export type Output = GetInstancesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstanceSnapshot {
  export type Input = GetInstanceSnapshotRequest;
  export type Output = GetInstanceSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstanceSnapshots {
  export type Input = GetInstanceSnapshotsRequest;
  export type Output = GetInstanceSnapshotsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetInstanceState {
  export type Input = GetInstanceStateRequest;
  export type Output = GetInstanceStateResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetKeyPair {
  export type Input = GetKeyPairRequest;
  export type Output = GetKeyPairResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetKeyPairs {
  export type Input = GetKeyPairsRequest;
  export type Output = GetKeyPairsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetLoadBalancer {
  export type Input = GetLoadBalancerRequest;
  export type Output = GetLoadBalancerResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetLoadBalancerMetricData {
  export type Input = GetLoadBalancerMetricDataRequest;
  export type Output = GetLoadBalancerMetricDataResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetLoadBalancers {
  export type Input = GetLoadBalancersRequest;
  export type Output = GetLoadBalancersResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetLoadBalancerTlsCertificates {
  export type Input = GetLoadBalancerTlsCertificatesRequest;
  export type Output = GetLoadBalancerTlsCertificatesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetLoadBalancerTlsPolicies {
  export type Input = GetLoadBalancerTlsPoliciesRequest;
  export type Output = GetLoadBalancerTlsPoliciesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetOperation {
  export type Input = GetOperationRequest;
  export type Output = GetOperationResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetOperations {
  export type Input = GetOperationsRequest;
  export type Output = GetOperationsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetOperationsForResource {
  export type Input = GetOperationsForResourceRequest;
  export type Output = GetOperationsForResourceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRegions {
  export type Input = GetRegionsRequest;
  export type Output = GetRegionsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabase {
  export type Input = GetRelationalDatabaseRequest;
  export type Output = GetRelationalDatabaseResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseBlueprints {
  export type Input = GetRelationalDatabaseBlueprintsRequest;
  export type Output = GetRelationalDatabaseBlueprintsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseBundles {
  export type Input = GetRelationalDatabaseBundlesRequest;
  export type Output = GetRelationalDatabaseBundlesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseEvents {
  export type Input = GetRelationalDatabaseEventsRequest;
  export type Output = GetRelationalDatabaseEventsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseLogEvents {
  export type Input = GetRelationalDatabaseLogEventsRequest;
  export type Output = GetRelationalDatabaseLogEventsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseLogStreams {
  export type Input = GetRelationalDatabaseLogStreamsRequest;
  export type Output = GetRelationalDatabaseLogStreamsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseMasterUserPassword {
  export type Input = GetRelationalDatabaseMasterUserPasswordRequest;
  export type Output = GetRelationalDatabaseMasterUserPasswordResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseMetricData {
  export type Input = GetRelationalDatabaseMetricDataRequest;
  export type Output = GetRelationalDatabaseMetricDataResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseParameters {
  export type Input = GetRelationalDatabaseParametersRequest;
  export type Output = GetRelationalDatabaseParametersResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabases {
  export type Input = GetRelationalDatabasesRequest;
  export type Output = GetRelationalDatabasesResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseSnapshot {
  export type Input = GetRelationalDatabaseSnapshotRequest;
  export type Output = GetRelationalDatabaseSnapshotResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetRelationalDatabaseSnapshots {
  export type Input = GetRelationalDatabaseSnapshotsRequest;
  export type Output = GetRelationalDatabaseSnapshotsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetSetupHistory {
  export type Input = GetSetupHistoryRequest;
  export type Output = GetSetupHistoryResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetStaticIp {
  export type Input = GetStaticIpRequest;
  export type Output = GetStaticIpResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace GetStaticIps {
  export type Input = GetStaticIpsRequest;
  export type Output = GetStaticIpsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace ImportKeyPair {
  export type Input = ImportKeyPairRequest;
  export type Output = ImportKeyPairResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace IsVpcPeered {
  export type Input = IsVpcPeeredRequest;
  export type Output = IsVpcPeeredResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace OpenInstancePublicPorts {
  export type Input = OpenInstancePublicPortsRequest;
  export type Output = OpenInstancePublicPortsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace PeerVpc {
  export type Input = PeerVpcRequest;
  export type Output = PeerVpcResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace PutAlarm {
  export type Input = PutAlarmRequest;
  export type Output = PutAlarmResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace PutInstancePublicPorts {
  export type Input = PutInstancePublicPortsRequest;
  export type Output = PutInstancePublicPortsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace RebootInstance {
  export type Input = RebootInstanceRequest;
  export type Output = RebootInstanceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace RebootRelationalDatabase {
  export type Input = RebootRelationalDatabaseRequest;
  export type Output = RebootRelationalDatabaseResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace RegisterContainerImage {
  export type Input = RegisterContainerImageRequest;
  export type Output = RegisterContainerImageResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace ReleaseStaticIp {
  export type Input = ReleaseStaticIpRequest;
  export type Output = ReleaseStaticIpResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace ResetDistributionCache {
  export type Input = ResetDistributionCacheRequest;
  export type Output = ResetDistributionCacheResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace SendContactMethodVerification {
  export type Input = SendContactMethodVerificationRequest;
  export type Output = SendContactMethodVerificationResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace SetIpAddressType {
  export type Input = SetIpAddressTypeRequest;
  export type Output = SetIpAddressTypeResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace SetResourceAccessForBucket {
  export type Input = SetResourceAccessForBucketRequest;
  export type Output = SetResourceAccessForBucketResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace SetupInstanceHttps {
  export type Input = SetupInstanceHttpsRequest;
  export type Output = SetupInstanceHttpsResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace StartGUISession {
  export type Input = StartGUISessionRequest;
  export type Output = StartGUISessionResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace StartInstance {
  export type Input = StartInstanceRequest;
  export type Output = StartInstanceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace StartRelationalDatabase {
  export type Input = StartRelationalDatabaseRequest;
  export type Output = StartRelationalDatabaseResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace StopGUISession {
  export type Input = StopGUISessionRequest;
  export type Output = StopGUISessionResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace StopInstance {
  export type Input = StopInstanceRequest;
  export type Output = StopInstanceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace StopRelationalDatabase {
  export type Input = StopRelationalDatabaseRequest;
  export type Output = StopRelationalDatabaseResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace TestAlarm {
  export type Input = TestAlarmRequest;
  export type Output = TestAlarmResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UnpeerVpc {
  export type Input = UnpeerVpcRequest;
  export type Output = UnpeerVpcResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateBucket {
  export type Input = UpdateBucketRequest;
  export type Output = UpdateBucketResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateBucketBundle {
  export type Input = UpdateBucketBundleRequest;
  export type Output = UpdateBucketBundleResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateContainerService {
  export type Input = UpdateContainerServiceRequest;
  export type Output = UpdateContainerServiceResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateDistribution {
  export type Input = UpdateDistributionRequest;
  export type Output = UpdateDistributionResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateDistributionBundle {
  export type Input = UpdateDistributionBundleRequest;
  export type Output = UpdateDistributionBundleResult;
  export type Error =
    | AccessDeniedException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateDomainEntry {
  export type Input = UpdateDomainEntryRequest;
  export type Output = UpdateDomainEntryResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateInstanceMetadataOptions {
  export type Input = UpdateInstanceMetadataOptionsRequest;
  export type Output = UpdateInstanceMetadataOptionsResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateLoadBalancerAttribute {
  export type Input = UpdateLoadBalancerAttributeRequest;
  export type Output = UpdateLoadBalancerAttributeResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateRelationalDatabase {
  export type Input = UpdateRelationalDatabaseRequest;
  export type Output = UpdateRelationalDatabaseResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}

export declare namespace UpdateRelationalDatabaseParameters {
  export type Input = UpdateRelationalDatabaseParametersRequest;
  export type Output = UpdateRelationalDatabaseParametersResult;
  export type Error =
    | AccessDeniedException
    | AccountSetupInProgressException
    | InvalidInputException
    | NotFoundException
    | OperationFailureException
    | ServiceException
    | UnauthenticatedException
    | CommonAwsError;
}
