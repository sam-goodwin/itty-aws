// ==========================================================================
// Oracle Database@Google Cloud API (oracledatabase v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "oracledatabase",
  version: "v1",
  rootUrl: "https://oracledatabase.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface MinorVersion {
  /** Identifier. The name of the MinorVersion resource with the format: projects/{project}/locations/{region}/giVersions/{gi_version}/minorVersions/{minor_version} */
  name?: string;
  /** Optional. The ID of the Grid Image. */
  gridImageId?: string;
  /** Optional. The valid Oracle grid infrastructure software version. */
  version?: string;
}

export const MinorVersion: Schema.Codec<MinorVersion> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    gridImageId: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "MinorVersion" });

export interface ListMinorVersionsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of MinorVersions. */
  minorVersions?: ReadonlyArray<MinorVersion>;
}

export const ListMinorVersionsResponse: Schema.Codec<ListMinorVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    minorVersions: Schema.optional(Schema.Array(MinorVersion)),
  }).annotate({ identifier: "ListMinorVersionsResponse" });

export interface GoldengateAzureDataLakeStorageConnectionProperties {
  /** Optional. Azure client ID of the application. This property is required when 'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'. */
  clientId?: string;
  /** Optional. Sets the Azure storage account name. */
  account?: string;
  /** Optional. Credential that uses a shared access signature (SAS) to authenticate to an Azure Service. */
  sasTokenSecret?: string;
  /** Optional. Azure storage account key. This property is required when 'authentication_type' is set to 'SHARED_KEY'. */
  accountKeySecret?: string;
  /** Optional. Azure client secret (aka application password) for authentication. */
  clientSecret?: string;
  /** Optional. The technology type of AzureDataLakeStorageConnection. */
  technologyType?: string;
  /** Optional. Azure Storage service endpoint. e.g: https://test.blob.core.windows.net */
  endpoint?: string;
  /** Optional. Authentication mechanism to access Azure Data Lake Storage. */
  authenticationType?:
    | "AUTHENTICATION_TYPE_UNSPECIFIED"
    | "SHARED_KEY"
    | "SHARED_ACCESS_SIGNATURE"
    | "AZURE_ACTIVE_DIRECTORY"
    | (string & {});
  /** Optional. The endpoint used for authentication with Microsoft Entra ID (formerly Azure Active Directory). Default value: https://login.microsoftonline.com */
  azureAuthorityHost?: string;
  /** Optional. Azure tenant ID of the application. This property is required when 'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'. */
  azureTenantId?: string;
}

export const GoldengateAzureDataLakeStorageConnectionProperties: Schema.Codec<GoldengateAzureDataLakeStorageConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    account: Schema.optional(Schema.String),
    sasTokenSecret: Schema.optional(Schema.String),
    accountKeySecret: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    authenticationType: Schema.optional(Schema.String),
    azureAuthorityHost: Schema.optional(Schema.String),
    azureTenantId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoldengateAzureDataLakeStorageConnectionProperties",
  });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoldengateOciObjectStorageConnectionProperties {
  /** Optional. The OCID of the OCI user who will access the Object Storage. The user must have write access to the bucket they want to connect to. */
  userId?: string;
  /** Optional. The content of the private key file (PEM file) corresponding to the API key of the fingerprint. */
  privateKeyFile?: string;
  /** Optional. The fingerprint of the API Key of the user specified by the userId. */
  publicKeyFingerprint?: string;
  /** Optional. Specifies that the user intends to authenticate to the instance using a resource principal. */
  useResourcePrincipal?: boolean;
  /** Optional. The technology type of OciObjectStorageConnection. */
  technologyType?: string;
  /** Optional. The OCID of the related OCI tenancy. */
  tenancyId?: string;
  /** Optional. The passphrase of the private key. */
  privateKeyPassphraseSecret?: string;
  /** Optional. The name of the region of OCI Object Storage. e.g.: us-ashburn-1 If the region is not provided, backend will default to the default region. */
  region?: string;
}

export const GoldengateOciObjectStorageConnectionProperties: Schema.Codec<GoldengateOciObjectStorageConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.String),
    privateKeyFile: Schema.optional(Schema.String),
    publicKeyFingerprint: Schema.optional(Schema.String),
    useResourcePrincipal: Schema.optional(Schema.Boolean),
    technologyType: Schema.optional(Schema.String),
    tenancyId: Schema.optional(Schema.String),
    privateKeyPassphraseSecret: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateOciObjectStorageConnectionProperties" });

export interface ExadbVmClusterStorageDetails {
  /** Required. The storage allocation for the exadbvmcluster per node, in gigabytes (GB). This field is used to calculate the total storage allocation for the exadbvmcluster. */
  sizeInGbsPerNode?: number;
}

export const ExadbVmClusterStorageDetails: Schema.Codec<ExadbVmClusterStorageDetails> =
  /*@__PURE__*/ Schema.Struct({
    sizeInGbsPerNode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExadbVmClusterStorageDetails" });

export interface DataCollectionOptionsCommon {
  /** Optional. Indicates whether to enable incident logs and trace collection. */
  isIncidentLogsEnabled?: boolean;
  /** Optional. Indicates whether to enable health monitoring. */
  isHealthMonitoringEnabled?: boolean;
  /** Optional. Indicates whether to enable data collection for diagnostics. */
  isDiagnosticsEventsEnabled?: boolean;
}

export const DataCollectionOptionsCommon: Schema.Codec<DataCollectionOptionsCommon> =
  /*@__PURE__*/ Schema.Struct({
    isIncidentLogsEnabled: Schema.optional(Schema.Boolean),
    isHealthMonitoringEnabled: Schema.optional(Schema.Boolean),
    isDiagnosticsEventsEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataCollectionOptionsCommon" });

export interface TimeZone {
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
}

export const TimeZone: Schema.Codec<TimeZone> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface ExadbVmClusterProperties {
  /** Optional. Immutable. The cluster name for Exascale vm cluster. The cluster name must begin with an alphabetic character and may contain hyphens(-) but can not contain underscores(_). It should be not more than 11 characters and is not case sensitive. OCI Cluster name. */
  clusterName?: string;
  /** Required. Immutable. Grid Infrastructure Version. */
  gridImageId?: string;
  /** Optional. Immutable. The license type of the ExadbVmCluster. */
  licenseModel?:
    | "LICENSE_MODEL_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Required. Immutable. Total storage details for the ExadbVmCluster. */
  vmFileSystemStorage?: ExadbVmClusterStorageDetails;
  /** Optional. Immutable. The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. */
  additionalEcpuCountPerNode?: number;
  /** Output only. Memory per VM (GB) (Read-only): Shows the amount of memory allocated to each VM. Memory is calculated based on 2.75 GB per Total ECPUs. */
  memorySizeGb?: number;
  /** Optional. Immutable. Indicates user preference for data collection options. */
  dataCollectionOptions?: DataCollectionOptionsCommon;
  /** Required. Immutable. The shape attribute of the VM cluster. The type of Exascale storage used for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle Database 23ai and later */
  shapeAttribute?:
    | "SHAPE_ATTRIBUTE_UNSPECIFIED"
    | "SMART_STORAGE"
    | "BLOCK_STORAGE"
    | (string & {});
  /** Required. The number of nodes/VMs in the ExadbVmCluster. */
  nodeCount?: number;
  /** Output only. The Oracle Grid Infrastructure (GI) software version. */
  giVersion?: string;
  /** Required. Immutable. The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. */
  enabledEcpuCountPerNode?: number;
  /** Output only. The hostname of the ExadbVmCluster. */
  hostname?: string;
  /** Optional. Immutable. SCAN listener port - TCP */
  scanListenerPortTcp?: number;
  /** Required. Immutable. The SSH public keys for the ExadbVmCluster. */
  sshPublicKeys?: ReadonlyArray<string>;
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUri?: string;
  /** Optional. Immutable. The time zone of the ExadbVmCluster. */
  timeZone?: TimeZone;
  /** Required. Immutable. The name of ExascaleDbStorageVault associated with the ExadbVmCluster. It can refer to an existing ExascaleDbStorageVault. Or a new one can be created during the ExadbVmCluster creation (requires storage_vault_properties to be set). Format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault} */
  exascaleDbStorageVault?: string;
  /** Required. Immutable. Prefix for VM cluster host names. */
  hostnamePrefix?: string;
  /** Output only. State of the cluster. */
  lifecycleState?:
    | "EXADB_VM_CLUSTER_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MAINTENANCE_IN_PROGRESS"
    | (string & {});
}

export const ExadbVmClusterProperties: Schema.Codec<ExadbVmClusterProperties> =
  /*@__PURE__*/ Schema.Struct({
    clusterName: Schema.optional(Schema.String),
    gridImageId: Schema.optional(Schema.String),
    licenseModel: Schema.optional(Schema.String),
    vmFileSystemStorage: Schema.optional(ExadbVmClusterStorageDetails),
    additionalEcpuCountPerNode: Schema.optional(Schema.Number),
    memorySizeGb: Schema.optional(Schema.Number),
    dataCollectionOptions: Schema.optional(DataCollectionOptionsCommon),
    shapeAttribute: Schema.optional(Schema.String),
    nodeCount: Schema.optional(Schema.Number),
    giVersion: Schema.optional(Schema.String),
    enabledEcpuCountPerNode: Schema.optional(Schema.Number),
    hostname: Schema.optional(Schema.String),
    scanListenerPortTcp: Schema.optional(Schema.Number),
    sshPublicKeys: Schema.optional(Schema.Array(Schema.String)),
    ociUri: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
    exascaleDbStorageVault: Schema.optional(Schema.String),
    hostnamePrefix: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExadbVmClusterProperties" });

export interface ExadbVmCluster {
  /** Required. Immutable. The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  backupOdbSubnet?: string;
  /** Output only. Immutable. The GCP Oracle zone where Oracle ExadbVmCluster is hosted. Example: us-east4-b-r2. During creation, the system will pick the zone assigned to the ExascaleDbStorageVault. */
  gcpOracleZone?: string;
  /** Output only. The ID of the subscription entitlement associated with the ExadbVmCluster. */
  entitlementId?: string;
  /** Required. The properties of the ExadbVmCluster. */
  properties?: ExadbVmClusterProperties;
  /** Optional. Immutable. The name of the OdbNetwork associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet. */
  odbNetwork?: string;
  /** Optional. The labels or tags associated with the ExadbVmCluster. */
  labels?: Record<string, string>;
  /** Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project}/locations/{region}/exadbVmClusters/{exadb_vm_cluster} */
  name?: string;
  /** Required. Immutable. The display name for the ExadbVmCluster. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters. */
  displayName?: string;
  /** Required. Immutable. The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Output only. The date and time that the ExadbVmCluster was created. */
  createTime?: string;
}

export const ExadbVmCluster: Schema.Codec<ExadbVmCluster> =
  /*@__PURE__*/ Schema.Struct({
    backupOdbSubnet: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    properties: Schema.optional(ExadbVmClusterProperties),
    odbNetwork: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    odbSubnet: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExadbVmCluster" });

export interface ListExadbVmClustersResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The list of ExadbVmClusters. */
  exadbVmClusters?: ReadonlyArray<ExadbVmCluster>;
}

export const ListExadbVmClustersResponse: Schema.Codec<ListExadbVmClustersResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    exadbVmClusters: Schema.optional(Schema.Array(ExadbVmCluster)),
  }).annotate({ identifier: "ListExadbVmClustersResponse" });

export interface GoldengateSnowflakeConnectionProperties {
  /** Optional. The content of private key file in PEM format. */
  privateKeyFile?: string;
  /** Optional. The technology type of SnowflakeConnection. */
  technologyType?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect to Snowflake platform. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect to Snowflake. */
  username?: string;
  /** Optional. Input only. The password Oracle Goldengate uses to connect to Snowflake platform in plain text. */
  password?: string;
  /** Optional. JDBC connection URL. e.g.: 'jdbc:snowflake://.snowflakecomputing.com/?warehouse=&db=' */
  connectionUrl?: string;
  /** Optional. Password if the private key file is encrypted. */
  privateKeyPassphraseSecret?: string;
  /** Optional. Used authentication mechanism to access Snowflake. */
  authenticationType?:
    | "AUTHENTICATION_TYPE_UNSPECIFIED"
    | "BASIC"
    | "KEY_PAIR"
    | (string & {});
}

export const GoldengateSnowflakeConnectionProperties: Schema.Codec<GoldengateSnowflakeConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    privateKeyFile: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    connectionUrl: Schema.optional(Schema.String),
    privateKeyPassphraseSecret: Schema.optional(Schema.String),
    authenticationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateSnowflakeConnectionProperties" });

export interface GoldengateDeploymentVersionProperties {
  /** Optional. Whether the Goldengate Deployment Version resource is a security fix. */
  securityFix?: boolean;
  /** Output only. The support end time of the Goldengate Deployment Version resource. */
  supportEndTime?: string;
  /** Output only. The deployment type of the Goldengate Deployment Version resource. */
  deploymentType?:
    | "DEPLOYMENT_TYPE_UNSPECIFIED"
    | "OGG"
    | "DATABASE_ORACLE"
    | "BIGDATA"
    | "DATABASE_MICROSOFT_SQLSERVER"
    | "DATABASE_MYSQL"
    | "DATABASE_POSTGRESQL"
    | "DATABASE_DB2ZOS"
    | "DATABASE_DB2I"
    | "GGSA"
    | "DATA_TRANSFORMS"
    | (string & {});
  /** Output only. The release type of the Goldengate Deployment Version resource. */
  releaseType?:
    | "DEPLOYMENT_RELEASE_TYPE_UNSPECIFIED"
    | "MAJOR"
    | "BUNDLE"
    | "MINOR"
    | (string & {});
  /** Output only. The OGG version of the Goldengate Deployment Version resource. */
  oggVersion?: string;
  /** Output only. The release time of the Goldengate Deployment Version resource. */
  releaseTime?: string;
}

export const GoldengateDeploymentVersionProperties: Schema.Codec<GoldengateDeploymentVersionProperties> =
  /*@__PURE__*/ Schema.Struct({
    securityFix: Schema.optional(Schema.Boolean),
    supportEndTime: Schema.optional(Schema.String),
    deploymentType: Schema.optional(Schema.String),
    releaseType: Schema.optional(Schema.String),
    oggVersion: Schema.optional(Schema.String),
    releaseTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateDeploymentVersionProperties" });

export interface GoldengateDeploymentVersion {
  /** Identifier. The name of the Goldengate Deployment Version resource with the format: projects/{project}/locations/{location}/goldengateDeploymentVersions/{goldengate_deployment_version} */
  name?: string;
  /** Output only. The deployment version ocid of the Goldengate Deployment Version resource. */
  ocid?: string;
  /** Output only. The technology type of the Goldengate Deployment Version resource. */
  properties?: GoldengateDeploymentVersionProperties;
}

export const GoldengateDeploymentVersion: Schema.Codec<GoldengateDeploymentVersion> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    properties: Schema.optional(GoldengateDeploymentVersionProperties),
  }).annotate({ identifier: "GoldengateDeploymentVersion" });

export interface ListGoldengateDeploymentVersionsResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of GoldengateDeploymentVersion */
  goldengateDeploymentVersions?: ReadonlyArray<GoldengateDeploymentVersion>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListGoldengateDeploymentVersionsResponse: Schema.Codec<ListGoldengateDeploymentVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    goldengateDeploymentVersions: Schema.optional(
      Schema.Array(GoldengateDeploymentVersion),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGoldengateDeploymentVersionsResponse" });

export interface GoldengateDeploymentLock {
  /** Output only. The message. */
  message?: string;
  /** Output only. The type of lock. */
  type?: "LOCK_TYPE_UNSPECIFIED" | "FULL" | "DELETE" | (string & {});
  /** Output only. The time created. */
  createTime?: string;
  /** Output only. The compartment id. */
  compartmentId?: string;
  /** Output only. The related resource id. */
  relatedResourceId?: string;
}

export const GoldengateDeploymentLock: Schema.Codec<GoldengateDeploymentLock> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    compartmentId: Schema.optional(Schema.String),
    relatedResourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateDeploymentLock" });

export interface StopGoldengateDeploymentRequest {}

export const StopGoldengateDeploymentRequest: Schema.Codec<StopGoldengateDeploymentRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopGoldengateDeploymentRequest",
  });

export interface DbVersionProperties {
  /** Output only. A valid Oracle Database version. */
  version?: string;
  /** Output only. True if this version of the Oracle Database software is supported for Upgrade. */
  isUpgradeSupported?: boolean;
  /** Output only. True if this version of the Oracle Database software supports pluggable databases. */
  supportsPdb?: boolean;
  /** Output only. True if this version of the Oracle Database software is the preview version. */
  isPreviewDbVersion?: boolean;
  /** Output only. True if this version of the Oracle Database software is the latest version for a release. */
  isLatestForMajorVersion?: boolean;
}

export const DbVersionProperties: Schema.Codec<DbVersionProperties> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    isUpgradeSupported: Schema.optional(Schema.Boolean),
    supportsPdb: Schema.optional(Schema.Boolean),
    isPreviewDbVersion: Schema.optional(Schema.Boolean),
    isLatestForMajorVersion: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DbVersionProperties" });

export interface DbVersion {
  /** Output only. The name of the DbVersion resource in the following format: projects/{project}/locations/{region}/dbVersions/{db_version} */
  name?: string;
  /** Output only. The properties of the DbVersion. */
  properties?: DbVersionProperties;
}

export const DbVersion: Schema.Codec<DbVersion> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(DbVersionProperties),
  }).annotate({ identifier: "DbVersion" });

export interface ListDbVersionsResponse {
  /** The list of DbVersions. */
  dbVersions?: ReadonlyArray<DbVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDbVersionsResponse: Schema.Codec<ListDbVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    dbVersions: Schema.optional(Schema.Array(DbVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbVersionsResponse" });

export interface GoldengateMongodbConnectionProperties {
  /** Optional. The technology type of MongodbConnection. */
  technologyType?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the Client Certificate key file password in Secret Manager. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  tlsCertificateKeyFilePasswordSecretVersion?: string;
  /** Optional. Database Certificate - The base64 encoded content of a .pem file, containing the server public key (for 1 and 2-way SSL). */
  tlsCaFile?: string;
  /** Optional. MongoDB connection string. e.g.: 'mongodb://mongodb0.example.com:27017/recordsrecords' */
  connectionString?: string;
  /** Optional. Input only. The password Oracle Goldengate uses to connect the Mongodb connection in plain text. */
  password?: string;
  /** Optional. Input only. The Client Certificate key file password in plain text. */
  tlsCertificateKeyFilePassword?: string;
  /** Optional. Security Type for MongoDB. */
  securityProtocol?:
    | "MONGODB_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | "MTLS"
    | (string & {});
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect the Mongodb connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect to the database. */
  username?: string;
  /** Optional. Client Certificate - The base64 encoded content of a .pem file, containing the client public key (for 2-way SSL). */
  tlsCertificateKeyFile?: string;
  /** Optional. The OCID of the Oracle Autonomous Json Database. */
  databaseId?: string;
}

export const GoldengateMongodbConnectionProperties: Schema.Codec<GoldengateMongodbConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    tlsCertificateKeyFilePasswordSecretVersion: Schema.optional(Schema.String),
    tlsCaFile: Schema.optional(Schema.String),
    connectionString: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    tlsCertificateKeyFilePassword: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    tlsCertificateKeyFile: Schema.optional(Schema.String),
    databaseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateMongodbConnectionProperties" });

export interface GoldengateDeploymentType {
  /** Output only. The deployment type of the Goldengate Deployment Type resource. */
  deploymentType?:
    | "DEPLOYMENT_TYPE_UNSPECIFIED"
    | "OGG"
    | "DATABASE_ORACLE"
    | "BIGDATA"
    | "DATABASE_MICROSOFT_SQLSERVER"
    | "DATABASE_MYSQL"
    | "DATABASE_POSTGRESQL"
    | "DATABASE_DB2ZOS"
    | "DATABASE_DB2I"
    | "GGSA"
    | "DATA_TRANSFORMS"
    | (string & {});
  /** Output only. The default username of the Goldengate Deployment Type resource. */
  defaultUsername?: string;
  /** Output only. The target technologies of the Goldengate Deployment Type resource. */
  targetTechnologies?: ReadonlyArray<string>;
  /** Output only. The source technologies of the Goldengate Deployment Type resource. */
  sourceTechnologies?: ReadonlyArray<string>;
  /** Output only. The supported capabilities of the Goldengate Deployment Type resource. */
  supportedCapabilities?: ReadonlyArray<string>;
  /** Output only. The supported technologies URL of the Goldengate Deployment Type resource. */
  supportedTechnologiesUrl?: string;
  /** Identifier. The name of the Goldengate Deployment Type resource with the format: projects/{project}/locations/{region}/goldengateDeploymentTypes/{goldengate_deployment_type} */
  name?: string;
  /** Output only. The display name of the Goldengate Deployment Type resource. */
  displayName?: string;
  /** Output only. The connection types of the Goldengate Deployment Type resource. */
  connectionTypes?: ReadonlyArray<string>;
  /** Output only. The Ogg version of the Goldengate Deployment Type resource. */
  oggVersion?: string;
  /** Output only. The category of the Goldengate Deployment Type resource. */
  category?:
    | "DEPLOYMENT_CATEGORY_UNSPECIFIED"
    | "DATA_REPLICATION_CATEGORY"
    | "DATA_TRANSFORMS_CATEGORY"
    | (string & {});
}

export const GoldengateDeploymentType: Schema.Codec<GoldengateDeploymentType> =
  /*@__PURE__*/ Schema.Struct({
    deploymentType: Schema.optional(Schema.String),
    defaultUsername: Schema.optional(Schema.String),
    targetTechnologies: Schema.optional(Schema.Array(Schema.String)),
    sourceTechnologies: Schema.optional(Schema.Array(Schema.String)),
    supportedCapabilities: Schema.optional(Schema.Array(Schema.String)),
    supportedTechnologiesUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    connectionTypes: Schema.optional(Schema.Array(Schema.String)),
    oggVersion: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateDeploymentType" });

export interface ListGoldengateDeploymentTypesResponse {
  /** The list of GoldengateDeploymentType */
  goldengateDeploymentTypes?: ReadonlyArray<GoldengateDeploymentType>;
  /** Unordered list. The resource names of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListGoldengateDeploymentTypesResponse: Schema.Codec<ListGoldengateDeploymentTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    goldengateDeploymentTypes: Schema.optional(
      Schema.Array(GoldengateDeploymentType),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGoldengateDeploymentTypesResponse" });

export interface GoldengateDatabricksConnectionProperties {
  /** Optional. External storage credential name to access files on object storage such as ADLS Gen2, S3 or Cloud Storage. */
  storageCredential?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password used to connect to Databricks. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. Input only. The password used to connect to Databricks in plain text. */
  password?: string;
  /** Optional. Connection URL. e.g.: 'jdbc:databricks://adb-33934.4.azuredatabricks.net:443/default;transportMode=http;ssl=1;httpPath=sql/protocolv1/o/3393########44/0##3-7-hlrb' */
  connectionUrl?: string;
  /** Optional. OAuth client secret, only applicable for authentication_type == OAUTH_M2M */
  clientSecret?: string;
  /** Optional. Authentication type for Databricks. */
  authenticationType?:
    | "DATABRICKS_AUTHENTICATION_TYPE_UNSPECIFIED"
    | "PERSONAL_ACCESS_TOKEN"
    | "OAUTH_M2M"
    | (string & {});
  /** Optional. OAuth client id, only applicable for authentication_type == OAUTH_M2M */
  clientId?: string;
  /** Optional. The technology type of DatabricksConnection. */
  technologyType?: string;
}

export const GoldengateDatabricksConnectionProperties: Schema.Codec<GoldengateDatabricksConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    storageCredential: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    connectionUrl: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    authenticationType: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateDatabricksConnectionProperties" });

export interface GoldengateGoogleCloudStorageConnectionProperties {
  /** Optional. The technology type. */
  technologyType?: string;
  /** Optional. The base64 encoded content of the service account key file containing the credentials required to use Google Cloud Storage. */
  serviceAccountKeyFile?: string;
}

export const GoldengateGoogleCloudStorageConnectionProperties: Schema.Codec<GoldengateGoogleCloudStorageConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    serviceAccountKeyFile: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoldengateGoogleCloudStorageConnectionProperties",
  });

export interface TestConnectionAssignmentError {
  /** The text describing the root cause of the reported issue. */
  issue?: string;
  /** A short error code that defines the error, meant for programmatic parsing. */
  code?: string;
  /** A human-readable error message. */
  message?: string;
  /** The text describing the action required to fix the issue. */
  action?: string;
}

export const TestConnectionAssignmentError: Schema.Codec<TestConnectionAssignmentError> =
  /*@__PURE__*/ Schema.Struct({
    issue: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "TestConnectionAssignmentError" });

export interface DbServerProperties {
  /** Optional. Memory allocated in GBs. */
  memorySizeGb?: number;
  /** Optional. Maximum OCPU count per database. */
  maxOcpuCount?: number;
  /** Optional. Vm count per database. */
  vmCount?: number;
  /** Output only. OCID of database server. */
  ocid?: string;
  /** Output only. OCID of database nodes associated with the database server. */
  dbNodeIds?: ReadonlyArray<string>;
  /** Optional. Maximum memory allocated in GBs. */
  maxMemorySizeGb?: number;
  /** Optional. Local storage per VM. */
  dbNodeStorageSizeGb?: number;
  /** Optional. OCPU count per database. */
  ocpuCount?: number;
  /** Optional. Maximum local storage per VM. */
  maxDbNodeStorageSizeGb?: number;
  /** Output only. State of the database server. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "AVAILABLE"
    | "UNAVAILABLE"
    | "DELETING"
    | "DELETED"
    | (string & {});
}

export const DbServerProperties: Schema.Codec<DbServerProperties> =
  /*@__PURE__*/ Schema.Struct({
    memorySizeGb: Schema.optional(Schema.Number),
    maxOcpuCount: Schema.optional(Schema.Number),
    vmCount: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
    dbNodeIds: Schema.optional(Schema.Array(Schema.String)),
    maxMemorySizeGb: Schema.optional(Schema.Number),
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
    ocpuCount: Schema.optional(Schema.Number),
    maxDbNodeStorageSizeGb: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbServerProperties" });

export interface DbServer {
  /** Identifier. The name of the database server resource with the format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}/dbServers/{db_server} */
  name?: string;
  /** Optional. User friendly name for this resource. */
  displayName?: string;
  /** Optional. Various properties of the database server. */
  properties?: DbServerProperties;
}

export const DbServer: Schema.Codec<DbServer> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    properties: Schema.optional(DbServerProperties),
  }).annotate({ identifier: "DbServer" });

export interface ListDbServersResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of database servers. */
  dbServers?: ReadonlyArray<DbServer>;
}

export const ListDbServersResponse: Schema.Codec<ListDbServersResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    dbServers: Schema.optional(Schema.Array(DbServer)),
  }).annotate({ identifier: "ListDbServersResponse" });

export interface DatabaseManagementConfig {
  /** Output only. The status of the Database Management service. */
  managementState?:
    | "MANAGEMENT_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "DISABLED"
    | "UPDATING"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | "FAILED_UPDATING"
    | (string & {});
  /** Output only. The Database Management type. */
  managementType?:
    | "MANAGEMENT_TYPE_UNSPECIFIED"
    | "BASIC"
    | "ADVANCED"
    | (string & {});
}

export const DatabaseManagementConfig: Schema.Codec<DatabaseManagementConfig> =
  /*@__PURE__*/ Schema.Struct({
    managementState: Schema.optional(Schema.String),
    managementType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseManagementConfig" });

export interface BackupDestinationDetails {
  /** Optional. The type of the database backup destination. */
  type?:
    | "BACKUP_DESTINATION_TYPE_UNSPECIFIED"
    | "NFS"
    | "RECOVERY_APPLIANCE"
    | "OBJECT_STORE"
    | "LOCAL"
    | "DBRS"
    | (string & {});
}

export const BackupDestinationDetails: Schema.Codec<BackupDestinationDetails> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDestinationDetails" });

export interface DbBackupConfig {
  /** Optional. The day of the week on which the full backup should be performed on the database. If no value is provided, it will default to Sunday. */
  autoFullBackupDay?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Optional. The window in which the incremental backup should be performed on the database. If no value is provided, the default is anytime except the auto full backup day. */
  autoIncrementalBackupWindow?:
    | "BACKUP_WINDOW_UNSPECIFIED"
    | "SLOT_ONE"
    | "SLOT_TWO"
    | "SLOT_THREE"
    | "SLOT_FOUR"
    | "SLOT_FIVE"
    | "SLOT_SIX"
    | "SLOT_SEVEN"
    | "SLOT_EIGHT"
    | "SLOT_NINE"
    | "SLOT_TEN"
    | "SLOT_ELEVEN"
    | "SLOT_TWELVE"
    | (string & {});
  /** Optional. This defines when the backups will be deleted after Database termination. */
  backupDeletionPolicy?:
    | "BACKUP_DELETION_POLICY_UNSPECIFIED"
    | "DELETE_IMMEDIATELY"
    | "DELETE_AFTER_RETENTION_PERIOD"
    | (string & {});
  /** Optional. The window in which the full backup should be performed on the database. If no value is provided, the default is anytime. */
  autoFullBackupWindow?:
    | "BACKUP_WINDOW_UNSPECIFIED"
    | "SLOT_ONE"
    | "SLOT_TWO"
    | "SLOT_THREE"
    | "SLOT_FOUR"
    | "SLOT_FIVE"
    | "SLOT_SIX"
    | "SLOT_SEVEN"
    | "SLOT_EIGHT"
    | "SLOT_NINE"
    | "SLOT_TEN"
    | "SLOT_ELEVEN"
    | "SLOT_TWELVE"
    | (string & {});
  /** Optional. If set to true, enables automatic backups on the database. */
  autoBackupEnabled?: boolean;
  /** Optional. Details of the database backup destinations. */
  backupDestinationDetails?: ReadonlyArray<BackupDestinationDetails>;
  /** Optional. The number of days an automatic backup is retained before being automatically deleted. This value determines the earliest point in time to which a database can be restored. Min: 1, Max: 60. */
  retentionPeriodDays?: number;
}

export const DbBackupConfig: Schema.Codec<DbBackupConfig> =
  /*@__PURE__*/ Schema.Struct({
    autoFullBackupDay: Schema.optional(Schema.String),
    autoIncrementalBackupWindow: Schema.optional(Schema.String),
    backupDeletionPolicy: Schema.optional(Schema.String),
    autoFullBackupWindow: Schema.optional(Schema.String),
    autoBackupEnabled: Schema.optional(Schema.Boolean),
    backupDestinationDetails: Schema.optional(
      Schema.Array(BackupDestinationDetails),
    ),
    retentionPeriodDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DbBackupConfig" });

export interface DatabaseProperties {
  /** Required. The Oracle Database version. */
  dbVersion?: string;
  /** Output only. The Database Management config. */
  databaseManagementConfig?: DatabaseManagementConfig;
  /** Output only. State of the Database. */
  state?:
    | "DATABASE_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "BACKUP_IN_PROGRESS"
    | "UPGRADING"
    | "CONVERTING"
    | "TERMINATING"
    | "TERMINATED"
    | "RESTORE_FAILED"
    | "FAILED"
    | (string & {});
  /** Optional. Backup options for the Database. */
  dbBackupConfig?: DbBackupConfig;
}

export const DatabaseProperties: Schema.Codec<DatabaseProperties> =
  /*@__PURE__*/ Schema.Struct({
    dbVersion: Schema.optional(Schema.String),
    databaseManagementConfig: Schema.optional(DatabaseManagementConfig),
    state: Schema.optional(Schema.String),
    dbBackupConfig: Schema.optional(DbBackupConfig),
  }).annotate({ identifier: "DatabaseProperties" });

export interface Database {
  /** Optional. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPassword?: string;
  /** Optional. The TDE wallet password for the database. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated. */
  tdeWalletPassword?: string;
  /** Output only. The date and time that the Database was created. */
  createTime?: string;
  /** Output only. The Status of Operations Insights for this Database. */
  opsInsightsStatus?:
    | "OPERATIONS_INSIGHTS_STATUS_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
  /** Optional. The DB_UNIQUE_NAME of the Oracle Database being backed up. */
  dbUniqueName?: string;
  /** Identifier. The name of the Database resource in the following format: projects/{project}/locations/{region}/databases/{database} */
  name?: string;
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
  /** Optional. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPasswordSecretVersion?: string;
  /** Optional. The ID of the pluggable database associated with the Database. The ID must be unique within the project and location. */
  pluggableDatabaseId?: string;
  /** Optional. The name of the DbHome resource associated with the Database. */
  dbHomeName?: string;
  /** Optional. The resource name of a secret version in Secret Manager which contains the TDE wallet password for the database. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated. */
  tdeWalletPasswordSecretVersion?: string;
  /** Optional. The national character set for the database. The default is AL16UTF16. */
  ncharacterSet?: string;
  /** Optional. The pluggable database associated with the Database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. */
  pluggableDatabaseName?: string;
  /** Optional. The properties of the Database. */
  properties?: DatabaseProperties;
  /** Optional. The database ID of the Database. */
  databaseId?: string;
  /** Optional. The character set for the database. The default is AL32UTF8. */
  characterSet?: string;
  /** Optional. The database name. The name must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted. */
  dbName?: string;
  /** Output only. The GCP Oracle zone where the Database is created. */
  gcpOracleZone?: string;
}

export const Database: Schema.Codec<Database> =
  /*@__PURE__*/ Schema.Struct({
    adminPassword: Schema.optional(Schema.String),
    tdeWalletPassword: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    opsInsightsStatus: Schema.optional(Schema.String),
    dbUniqueName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
    adminPasswordSecretVersion: Schema.optional(Schema.String),
    pluggableDatabaseId: Schema.optional(Schema.String),
    dbHomeName: Schema.optional(Schema.String),
    tdeWalletPasswordSecretVersion: Schema.optional(Schema.String),
    ncharacterSet: Schema.optional(Schema.String),
    pluggableDatabaseName: Schema.optional(Schema.String),
    properties: Schema.optional(DatabaseProperties),
    databaseId: Schema.optional(Schema.String),
    characterSet: Schema.optional(Schema.String),
    dbName: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface DbHome {
  /** Optional. Whether unified auditing is enabled for the Database Home. */
  isUnifiedAuditingEnabled?: boolean;
  /** Required. The Database resource. */
  database?: Database;
  /** Optional. The display name for the Database Home. The name does not have to be unique within your project. */
  displayName?: string;
  /** Required. A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation. */
  dbVersion?: string;
}

export const DbHome: Schema.Codec<DbHome> =
  /*@__PURE__*/ Schema.Struct({
    isUnifiedAuditingEnabled: Schema.optional(Schema.Boolean),
    database: Schema.optional(Database),
    displayName: Schema.optional(Schema.String),
    dbVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbHome" });

export interface DbSystemOptions {
  /** Optional. The storage option used in DB system. */
  storageManagement?:
    | "STORAGE_MANAGEMENT_UNSPECIFIED"
    | "ASM"
    | "LVM"
    | (string & {});
}

export const DbSystemOptions: Schema.Codec<DbSystemOptions> =
  /*@__PURE__*/ Schema.Struct({
    storageManagement: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbSystemOptions" });

export interface DataCollectionOptionsDbSystem {
  /** Optional. Indicates whether to enable incident logs and trace collection. */
  isIncidentLogsEnabled?: boolean;
  /** Optional. Indicates whether to enable data collection for diagnostics. */
  isDiagnosticsEventsEnabled?: boolean;
}

export const DataCollectionOptionsDbSystem: Schema.Codec<DataCollectionOptionsDbSystem> =
  /*@__PURE__*/ Schema.Struct({
    isIncidentLogsEnabled: Schema.optional(Schema.Boolean),
    isDiagnosticsEventsEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataCollectionOptionsDbSystem" });

export interface DbSystemProperties {
  /** Output only. The hostname of the DbSystem. */
  hostname?: string;
  /** Required. Shape of DB System. */
  shape?: string;
  /** Required. SSH public keys to be stored with the DbSystem. */
  sshPublicKeys?: ReadonlyArray<string>;
  /** Optional. The data storage size in GB that is currently available to DbSystems. */
  dataStorageSizeGb?: number;
  /** Optional. Prefix for DB System host names. */
  hostnamePrefix?: string;
  /** Required. The initial data storage size in GB. */
  initialDataStorageSizeGb?: number;
  /** Optional. Time zone of the DbSystem. */
  timeZone?: TimeZone;
  /** Optional. Details for creating a Database Home. */
  dbHome?: DbHome;
  /** Output only. State of the DbSystem. */
  lifecycleState?:
    | "DB_SYSTEM_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MIGRATED"
    | "MAINTENANCE_IN_PROGRESS"
    | "NEEDS_ATTENTION"
    | "UPGRADING"
    | (string & {});
  /** Output only. OCID of the DbSystem. */
  ocid?: string;
  /** Optional. The private IP address of the DbSystem. */
  privateIp?: string;
  /** Required. The number of CPU cores to enable for the DbSystem. */
  computeCount?: number;
  /** Required. The license model of the DbSystem. */
  licenseModel?:
    | "LICENSE_MODEL_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Optional. The options for the DbSystem. */
  dbSystemOptions?: DbSystemOptions;
  /** Optional. The reco/redo storage size in GB. */
  recoStorageSizeGb?: number;
  /** Optional. The host domain name of the DbSystem. */
  domain?: string;
  /** Optional. The memory size in GB. */
  memorySizeGb?: number;
  /** Optional. Data collection options for diagnostics. */
  dataCollectionOptions?: DataCollectionOptionsDbSystem;
  /** Required. The database edition of the DbSystem. */
  databaseEdition?:
    | "DB_SYSTEM_DATABASE_EDITION_UNSPECIFIED"
    | "STANDARD_EDITION"
    | "ENTERPRISE_EDITION"
    | "ENTERPRISE_EDITION_HIGH_PERFORMANCE"
    | (string & {});
  /** Optional. The number of nodes in the DbSystem. */
  nodeCount?: number;
  /** Optional. The compute model of the DbSystem. */
  computeModel?: "COMPUTE_MODEL_UNSPECIFIED" | "ECPU" | "OCPU" | (string & {});
}

export const DbSystemProperties: Schema.Codec<DbSystemProperties> =
  /*@__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    shape: Schema.optional(Schema.String),
    sshPublicKeys: Schema.optional(Schema.Array(Schema.String)),
    dataStorageSizeGb: Schema.optional(Schema.Number),
    hostnamePrefix: Schema.optional(Schema.String),
    initialDataStorageSizeGb: Schema.optional(Schema.Number),
    timeZone: Schema.optional(TimeZone),
    dbHome: Schema.optional(DbHome),
    lifecycleState: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    privateIp: Schema.optional(Schema.String),
    computeCount: Schema.optional(Schema.Number),
    licenseModel: Schema.optional(Schema.String),
    dbSystemOptions: Schema.optional(DbSystemOptions),
    recoStorageSizeGb: Schema.optional(Schema.Number),
    domain: Schema.optional(Schema.String),
    memorySizeGb: Schema.optional(Schema.Number),
    dataCollectionOptions: Schema.optional(DataCollectionOptionsDbSystem),
    databaseEdition: Schema.optional(Schema.String),
    nodeCount: Schema.optional(Schema.Number),
    computeModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbSystemProperties" });

export interface GoldengateConnectionAssignmentProperties {
  /** Required. The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection} */
  goldengateConnection?: string;
  /** Required. The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment} */
  goldengateDeployment?: string;
  /** Output only. The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the connection assignment being referenced. */
  ocid?: string;
  /** Output only. Credential store alias. */
  alias?: string;
  /** Output only. The lifecycle state of the connection assignment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "FAILED"
    | "UPDATING"
    | "DELETING"
    | (string & {});
}

export const GoldengateConnectionAssignmentProperties: Schema.Codec<GoldengateConnectionAssignmentProperties> =
  /*@__PURE__*/ Schema.Struct({
    goldengateConnection: Schema.optional(Schema.String),
    goldengateDeployment: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateConnectionAssignmentProperties" });

export interface GoldengateConnectionAssignment {
  /** Identifier. The name of the GoldengateConnectionAssignment resource in the following format: projects/{project}/locations/{region}/goldengateConnectionAssignments/{goldengate_connection_assignment} */
  name?: string;
  /** Optional. The display name for the GoldengateConnectionAssignment. */
  displayName?: string;
  /** Optional. The labels or tags associated with the GoldengateConnectionAssignment. */
  labels?: Record<string, string>;
  /** Required. The properties of the GoldengateConnectionAssignment. */
  properties?: GoldengateConnectionAssignmentProperties;
  /** Output only. The time when the connection assignment was created. */
  createTime?: string;
  /** Output only. The OCID of the entitlement linked to this resource. */
  entitlementId?: string;
}

export const GoldengateConnectionAssignment: Schema.Codec<GoldengateConnectionAssignment> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(GoldengateConnectionAssignmentProperties),
    createTime: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateConnectionAssignment" });

export interface GoldengateMaintenanceWindow {
  /** Required. Start hour for maintenance period. Hour is in UTC. */
  startHour?: number;
  /** Required. Days of the week. */
  day?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
}

export const GoldengateMaintenanceWindow: Schema.Codec<GoldengateMaintenanceWindow> =
  /*@__PURE__*/ Schema.Struct({
    startHour: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateMaintenanceWindow" });

export interface GoldengateMaintenanceConfig {
  /** Optional. Defines auto upgrade period for bundle releases. Manually configured period cannot be longer than service defined period for bundle releases. This period must be shorter or equal to major release upgrade period. Not passing this field during create will equate to using the service default. */
  bundleReleaseUpgradePeriodDays?: number;
  /** Optional. Defines auto upgrade period for major releases. Manually configured period cannot be longer than service defined period for major releases. Not passing this field during create will equate to using the service default. */
  majorReleaseUpgradePeriodDays?: number;
  /** Optional. Defines auto upgrade period for releases with security fix. Manually configured period cannot be longer than service defined period for security releases. Not passing this field during create will equate to using the service default. */
  securityPatchUpgradePeriodDays?: number;
  /** Optional. By default auto upgrade for interim releases are not enabled. If auto-upgrade is enabled for interim release, you have to specify interim_release_upgrade_period_days too. */
  isInterimReleaseAutoUpgradeEnabled?: boolean;
  /** Optional. Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period. */
  interimReleaseUpgradePeriodDays?: number;
}

export const GoldengateMaintenanceConfig: Schema.Codec<GoldengateMaintenanceConfig> =
  /*@__PURE__*/ Schema.Struct({
    bundleReleaseUpgradePeriodDays: Schema.optional(Schema.Number),
    majorReleaseUpgradePeriodDays: Schema.optional(Schema.Number),
    securityPatchUpgradePeriodDays: Schema.optional(Schema.Number),
    isInterimReleaseAutoUpgradeEnabled: Schema.optional(Schema.Boolean),
    interimReleaseUpgradePeriodDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoldengateMaintenanceConfig" });

export interface DeploymentDiagnosticData {
  /** Output only. The diagnostic state. */
  diagnosticState?:
    | "DIAGNOSTIC_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. The namespace name. */
  namespace?: string;
  /** Output only. The time diagnostic start. */
  diagnosticStartTime?: string;
  /** Output only. The time diagnostic end. */
  diagnosticEndTime?: string;
  /** Output only. The bucket name. */
  bucket?: string;
  /** Output only. The object name. */
  object?: string;
}

export const DeploymentDiagnosticData: Schema.Codec<DeploymentDiagnosticData> =
  /*@__PURE__*/ Schema.Struct({
    diagnosticState: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    diagnosticStartTime: Schema.optional(Schema.String),
    diagnosticEndTime: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeploymentDiagnosticData" });

export interface GoldengateGroupToRolesMapping {
  /** Output only. The operator group id. */
  operatorGroupId?: string;
  /** Output only. The security group id. */
  securityGroupId?: string;
  /** Output only. The administrator group id. */
  administratorGroupId?: string;
  /** Output only. The user group id. */
  userGroupId?: string;
}

export const GoldengateGroupToRolesMapping: Schema.Codec<GoldengateGroupToRolesMapping> =
  /*@__PURE__*/ Schema.Struct({
    operatorGroupId: Schema.optional(Schema.String),
    securityGroupId: Schema.optional(Schema.String),
    administratorGroupId: Schema.optional(Schema.String),
    userGroupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateGroupToRolesMapping" });

export interface GoldengateOggDeployment {
  /** Output only. The credential store of the GoldengateDeployment. */
  credentialStore?:
    | "CREDENTIAL_STORE_UNSPECIFIED"
    | "GOLDENGATE"
    | "IAM"
    | (string & {});
  /** Output only. The certificate of the GoldengateDeployment. */
  certificate?: string;
  /** Optional. Input only. The Goldengate deployment console password secret version. */
  adminPasswordSecretVersion?: string;
  /** Optional. The Goldengate deployment console password in plain text. */
  adminPassword?: string;
  /** Output only. The identity domain id of the GoldengateDeployment. */
  identityDomainId?: string;
  /** Output only. The password secret id of the GoldengateDeployment. */
  passwordSecretId?: string;
  /** Optional. Version of OGG */
  oggVersion?: string;
  /** Required. The Goldengate deployment console username. */
  adminUsername?: string;
  /** Required. The name given to the Goldengate service deployment. The name must be 1 to 32 characters long, must contain only alphanumeric characters and must start with a letter. */
  deployment?: string;
  /** Output only. The group to roles mapping of the GoldengateDeployment. */
  groupRolesMapping?: GoldengateGroupToRolesMapping;
}

export const GoldengateOggDeployment: Schema.Codec<GoldengateOggDeployment> =
  /*@__PURE__*/ Schema.Struct({
    credentialStore: Schema.optional(Schema.String),
    certificate: Schema.optional(Schema.String),
    adminPasswordSecretVersion: Schema.optional(Schema.String),
    adminPassword: Schema.optional(Schema.String),
    identityDomainId: Schema.optional(Schema.String),
    passwordSecretId: Schema.optional(Schema.String),
    oggVersion: Schema.optional(Schema.String),
    adminUsername: Schema.optional(Schema.String),
    deployment: Schema.optional(Schema.String),
    groupRolesMapping: Schema.optional(GoldengateGroupToRolesMapping),
  }).annotate({ identifier: "GoldengateOggDeployment" });

export interface GoldengatePlacement {
  /** Output only. The availability domain. */
  availabilityDomain?: string;
  /** Output only. The fault domain. */
  faultDomain?: string;
}

export const GoldengatePlacement: Schema.Codec<GoldengatePlacement> =
  /*@__PURE__*/ Schema.Struct({
    availabilityDomain: Schema.optional(Schema.String),
    faultDomain: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengatePlacement" });

export interface IngressIp {
  /** Output only. The ingress IP. */
  ingressIpAddress?: string;
}

export const IngressIp: Schema.Codec<IngressIp> =
  /*@__PURE__*/ Schema.Struct({
    ingressIpAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngressIp" });

export interface GoldengateBackupSchedule {
  /** Output only. If metadata only. */
  metadataOnly?: boolean;
  /** Output only. The frequency backup scheduled. */
  frequencyBackupScheduled?:
    | "FREQUENCY_BACKUP_SCHEDULED_UNSPECIFIED"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | (string & {});
  /** Output only. The timestamp of when the backup was scheduled. */
  backupScheduledTime?: string;
  /** Output only. The bucket name. */
  bucket?: string;
  /** Output only. The compartment id. */
  compartmentId?: string;
  /** Output only. The namespace name. */
  namespace?: string;
}

export const GoldengateBackupSchedule: Schema.Codec<GoldengateBackupSchedule> =
  /*@__PURE__*/ Schema.Struct({
    metadataOnly: Schema.optional(Schema.Boolean),
    frequencyBackupScheduled: Schema.optional(Schema.String),
    backupScheduledTime: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    compartmentId: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateBackupSchedule" });

export interface GoldengateDeploymentProperties {
  /** Optional. The maintenance window of the GoldengateDeployment. */
  maintenanceWindow?: GoldengateMaintenanceWindow;
  /** Output only. The time upgrade required of the GoldengateDeployment. */
  upgradeRequiredTime?: string;
  /** Optional. The maintenance configuration of the GoldengateDeployment. */
  maintenanceConfig?: GoldengateMaintenanceConfig;
  /** Output only. The deployment diagnostic data of the GoldengateDeployment. */
  deploymentDiagnosticData?: DeploymentDiagnosticData;
  /** Output only. Whether the GoldengateDeployment is healthy. */
  healthy?: boolean;
  /** Output only. The deployment url of the GoldengateDeployment. */
  deploymentUrl?: string;
  /** Output only. The lifecycle details of the GoldengateDeployment. */
  lifecycleDetails?: string;
  /** Output only. The category of the GoldengateDeployment. */
  category?:
    | "GOLDENGATE_DEPLOYMENT_CATEGORY_UNSPECIFIED"
    | "DATA_REPLICATION"
    | "DATA_TRANSFORMS"
    | (string & {});
  /** Output only. The deployment role of the GoldengateDeployment. */
  deploymentRole?:
    | "GOLDENGATE_DEPLOYMENT_ROLE_TYPE_UNSPECIFIED"
    | "PRIMARY"
    | "STANDBY"
    | (string & {});
  /** Output only. The load balancer subnet id of the GoldengateDeployment. */
  loadBalancerSubnetId?: string;
  /** Output only. The public ip address of the GoldengateDeployment. */
  publicIpAddress?: string;
  /** Required. The ogg data of the GoldengateDeployment. */
  oggData?: GoldengateOggDeployment;
  /** Output only. The storage utilization in bytes of the GoldengateDeployment. */
  storageUtilizationBytes?: string;
  /** Output only. The next maintenance action type of the GoldengateDeployment. */
  nextMaintenanceActionType?:
    | "NEXT_MAINTENANCE_ACTION_TYPE_UNSPECIFIED"
    | "UPGRADE"
    | (string & {});
  /** Output only. The locks of the GoldengateDeployment. */
  locks?: ReadonlyArray<GoldengateDeploymentLock>;
  /** Optional. The description of the GoldengateDeployment. */
  description?: string;
  /** Output only. The placements of the GoldengateDeployment. */
  placements?: ReadonlyArray<GoldengatePlacement>;
  /** Output only. The time of next maintenance of the GoldengateDeployment. */
  nextMaintenanceTime?: string;
  /** Optional. The Minimum number of OCPUs to be made available for this Deployment. */
  cpuCoreCount?: number;
  /** Required. A valid Goldengate Deployment type. For a list of supported types, use the `ListGoldengateDeploymentTypes` operation. */
  deploymentType?: string;
  /** Output only. The lifecycle sub-state of the GoldengateDeployment. */
  lifecycleSubState?:
    | "GOLDENGATE_DEPLOYMENT_LIFECYCLE_SUB_STATE_UNSPECIFIED"
    | "RECOVERING"
    | "STARTING"
    | "STOPPING"
    | "MOVING"
    | "UPGRADING"
    | "RESTORING"
    | "BACKING_UP"
    | "ROLLING_BACK"
    | (string & {});
  /** Output only. The nsg ids of the GoldengateDeployment. */
  nsgIds?: ReadonlyArray<string>;
  /** Output only. OCID of the GoldengateDeployment. */
  ocid?: string;
  /** Output only. The load balancer id of the GoldengateDeployment. */
  loadBalancerId?: string;
  /** Output only. The private ip address of the GoldengateDeployment. */
  privateIpAddress?: string;
  /** Output only. Whether the GoldengateDeployment is of the latest version. */
  isLatestVersion?: boolean;
  /** Output only. The time last backup scheduled of the GoldengateDeployment. */
  lastBackupScheduleTime?: string;
  /** Output only. State of the GoldengateDeployment. */
  lifecycleState?:
    | "GOLDENGATE_DEPLOYMENT_LIFECYCLE_STATE_UNSPECIFIED"
    | "CREATING"
    | "UPDATING"
    | "ACTIVE"
    | "INACTIVE"
    | "DELETING"
    | "DELETED"
    | "FAILED"
    | "NEEDS_ATTENTION"
    | "IN_PROGRESS"
    | "CANCELLING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "WAITING"
    | (string & {});
  /** Output only. Whether storage utilization limit is exceeded of the GoldengateDeployment. */
  isStorageUtilizationLimitExceeded?: boolean;
  /** Output only. The time the GoldengateDeployment was updated. */
  updateTime?: string;
  /** Output only. The time ogg version supported until of the GoldengateDeployment. */
  oggVersionSupportEndTime?: string;
  /** Optional. The Oracle license model that applies to a Deployment. */
  licenseModel?:
    | "LICENSE_MODEL_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Optional. The environment type of the GoldengateDeployment. */
  environmentType?: string;
  /** Output only. The next maintenance description of the GoldengateDeployment. */
  nextMaintenanceDescription?: string;
  /** Output only. The time when the role of the GoldengateDeployment was changed. */
  roleChangeTime?: string;
  /** Output only. The Fully Qualified Domain Name of the GoldengateDeployment. */
  fqdn?: string;
  /** Output only. Whether the GoldengateDeployment is public. */
  isPublic?: boolean;
  /** Output only. The time next backup scheduled of the GoldengateDeployment. */
  nextBackupScheduleTime?: string;
  /** Optional. Indicates if auto scaling is enabled for the Deployment's CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Output only. The ingress ips of the GoldengateDeployment. */
  ingressIps?: ReadonlyArray<IngressIp>;
  /** Output only. The backup schedule of the GoldengateDeployment. */
  backupSchedule?: GoldengateBackupSchedule;
  /** Output only. The deployment backup id of the GoldengateDeployment. */
  deploymentBackupId?: string;
}

export const GoldengateDeploymentProperties: Schema.Codec<GoldengateDeploymentProperties> =
  /*@__PURE__*/ Schema.Struct({
    maintenanceWindow: Schema.optional(GoldengateMaintenanceWindow),
    upgradeRequiredTime: Schema.optional(Schema.String),
    maintenanceConfig: Schema.optional(GoldengateMaintenanceConfig),
    deploymentDiagnosticData: Schema.optional(DeploymentDiagnosticData),
    healthy: Schema.optional(Schema.Boolean),
    deploymentUrl: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    deploymentRole: Schema.optional(Schema.String),
    loadBalancerSubnetId: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    oggData: Schema.optional(GoldengateOggDeployment),
    storageUtilizationBytes: Schema.optional(Schema.String),
    nextMaintenanceActionType: Schema.optional(Schema.String),
    locks: Schema.optional(Schema.Array(GoldengateDeploymentLock)),
    description: Schema.optional(Schema.String),
    placements: Schema.optional(Schema.Array(GoldengatePlacement)),
    nextMaintenanceTime: Schema.optional(Schema.String),
    cpuCoreCount: Schema.optional(Schema.Number),
    deploymentType: Schema.optional(Schema.String),
    lifecycleSubState: Schema.optional(Schema.String),
    nsgIds: Schema.optional(Schema.Array(Schema.String)),
    ocid: Schema.optional(Schema.String),
    loadBalancerId: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    isLatestVersion: Schema.optional(Schema.Boolean),
    lastBackupScheduleTime: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    isStorageUtilizationLimitExceeded: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    oggVersionSupportEndTime: Schema.optional(Schema.String),
    licenseModel: Schema.optional(Schema.String),
    environmentType: Schema.optional(Schema.String),
    nextMaintenanceDescription: Schema.optional(Schema.String),
    roleChangeTime: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
    isPublic: Schema.optional(Schema.Boolean),
    nextBackupScheduleTime: Schema.optional(Schema.String),
    isAutoScalingEnabled: Schema.optional(Schema.Boolean),
    ingressIps: Schema.optional(Schema.Array(IngressIp)),
    backupSchedule: Schema.optional(GoldengateBackupSchedule),
    deploymentBackupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateDeploymentProperties" });

export interface ListDatabasesResponse {
  /** The list of Databases. */
  databases?: ReadonlyArray<Database>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDatabasesResponse: Schema.Codec<ListDatabasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    databases: Schema.optional(Schema.Array(Database)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDatabasesResponse" });

export interface GoldengateMicrosoftFabricConnectionProperties {
  /** Optional. The technology type of MicrosoftFabricConnection. */
  technologyType?: string;
  /** Optional. Azure client ID of the application. */
  clientId?: string;
  /** Optional. Client secret associated with the client id. */
  clientSecret?: string;
  /** Optional. Azure tenant ID of the application. */
  tenantId?: string;
  /** Optional. Optional Microsoft Fabric service endpoint. Default value: https://onelake.dfs.fabric.microsoft.com */
  endpoint?: string;
}

export const GoldengateMicrosoftFabricConnectionProperties: Schema.Codec<GoldengateMicrosoftFabricConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateMicrosoftFabricConnectionProperties" });

export interface StorageSizeDetails {
  /** Output only. The data storage size, in gigabytes, that is applicable for virtual machine DBSystem. */
  dataStorageSizeInGbs?: number;
  /** Output only. The RECO/REDO storage size, in gigabytes, that is applicable for virtual machine DBSystem. */
  recoStorageSizeInGbs?: number;
}

export const StorageSizeDetails: Schema.Codec<StorageSizeDetails> =
  /*@__PURE__*/ Schema.Struct({
    dataStorageSizeInGbs: Schema.optional(Schema.Number),
    recoStorageSizeInGbs: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StorageSizeDetails" });

export interface GoldengateHdfsConnectionProperties {
  /** Optional. The technology type of HdfsConnection. */
  technologyType?: string;
  /** Optional. The content of the Hadoop Distributed File System configuration file (core-site.xml). */
  coreSiteXml?: string;
}

export const GoldengateHdfsConnectionProperties: Schema.Codec<GoldengateHdfsConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    coreSiteXml: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateHdfsConnectionProperties" });

export interface ExascaleConfig {
  /** Output only. Available storage size for Exascale in GBs. */
  availableStorageSizeGb?: number;
  /** Output only. Total storage size needed for Exascale in GBs. */
  totalStorageSizeGb?: number;
}

export const ExascaleConfig: Schema.Codec<ExascaleConfig> =
  /*@__PURE__*/ Schema.Struct({
    availableStorageSizeGb: Schema.optional(Schema.Number),
    totalStorageSizeGb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExascaleConfig" });

export interface GoogleCloudStorageIcebergStorage {
  /** Required. The bucket of Google Cloud Storage. */
  bucket?: string;
  /** Required. The project ID of Google Cloud Storage. */
  projectId?: string;
  /** Optional. The base64 encoded content of the service account key file of Google Cloud Storage. */
  serviceAccountKeyFile?: string;
}

export const GoogleCloudStorageIcebergStorage: Schema.Codec<GoogleCloudStorageIcebergStorage> =
  /*@__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    serviceAccountKeyFile: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudStorageIcebergStorage" });

export interface GoldengateKafkaSchemaRegistryConnectionProperties {
  /** Optional. Used authentication mechanism to access Schema Registry. */
  authenticationType?:
    | "AUTHENTICATION_TYPE_UNSPECIFIED"
    | "NONE"
    | "BASIC"
    | "MUTUAL"
    | (string & {});
  /** Optional. The base64 encoded content of the KeyStore file. */
  keyStoreFile?: string;
  /** Optional. The base64 encoded content of the TrustStore file. */
  trustStoreFile?: string;
  /** Optional. The username to access Schema Registry using basic authentication. This value is injected into 'schema.registry.basic.auth.user.info=user:password' configuration property. */
  username?: string;
  /** Optional. The technology type of KafkaSchemaRegistryConnection. */
  technologyType?: string;
  /** Optional. Input only. The TrustStore password in plain text. */
  trustStorePassword?: string;
  /** Optional. Input only. The password to access Schema Registry in plain text. */
  password?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password for the cert inside the KeyStore. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  sslKeyPasswordSecretVersion?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password to access Schema Registry using basic authentication. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  keyStorePasswordSecretVersion?: string;
  /** Optional. Input only. The password for the cert inside the KeyStore in plain text. */
  sslKeyPassword?: string;
  /** Optional. Kafka Schema Registry URL. e.g.: 'https://server1.us.oracle.com:8081' */
  url?: string;
  /** Optional. Input only. The KeyStore password in plain text. */
  keyStorePassword?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  trustStorePasswordSecretVersion?: string;
}

export const GoldengateKafkaSchemaRegistryConnectionProperties: Schema.Codec<GoldengateKafkaSchemaRegistryConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    authenticationType: Schema.optional(Schema.String),
    keyStoreFile: Schema.optional(Schema.String),
    trustStoreFile: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    trustStorePassword: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    sslKeyPasswordSecretVersion: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    keyStorePasswordSecretVersion: Schema.optional(Schema.String),
    sslKeyPassword: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    keyStorePassword: Schema.optional(Schema.String),
    trustStorePasswordSecretVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoldengateKafkaSchemaRegistryConnectionProperties",
  });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface GoldengateGoogleBigQueryConnectionProperties {
  /** Optional. The technology type. */
  technologyType?: string;
  /** Optional. The base64 encoded content of the service account key file containing the credentials required to use Google BigQuery. */
  serviceAccountKeyFile?: string;
}

export const GoldengateGoogleBigQueryConnectionProperties: Schema.Codec<GoldengateGoogleBigQueryConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    serviceAccountKeyFile: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateGoogleBigQueryConnectionProperties" });

export interface AutonomousDatabaseConnectionUrls {
  /** Output only. The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database. */
  machineLearningNotebookUri?: string;
  /** Output only. The URL of Machine Learning user management the Autonomous Database. */
  machineLearningUserManagementUri?: string;
  /** Output only. The URL of the MongoDB API for the Autonomous Database. */
  mongoDbUri?: string;
  /** Output only. The URL of the Graph Studio for the Autonomous Database. */
  graphStudioUri?: string;
  /** Output only. Oracle Application Express (APEX) URL. */
  apexUri?: string;
  /** Output only. The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database. */
  ordsUri?: string;
  /** Output only. The URL of the Oracle SQL Developer Web for the Autonomous Database. */
  sqlDevWebUri?: string;
  /** Output only. The URL of the Database Transforms for the Autonomous Database. */
  databaseTransformsUri?: string;
}

export const AutonomousDatabaseConnectionUrls: Schema.Codec<AutonomousDatabaseConnectionUrls> =
  /*@__PURE__*/ Schema.Struct({
    machineLearningNotebookUri: Schema.optional(Schema.String),
    machineLearningUserManagementUri: Schema.optional(Schema.String),
    mongoDbUri: Schema.optional(Schema.String),
    graphStudioUri: Schema.optional(Schema.String),
    apexUri: Schema.optional(Schema.String),
    ordsUri: Schema.optional(Schema.String),
    sqlDevWebUri: Schema.optional(Schema.String),
    databaseTransformsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseConnectionUrls" });

export interface CustomerContact {
  /** Required. The email address used by Oracle to send notifications regarding databases and infrastructure. */
  email?: string;
}

export const CustomerContact: Schema.Codec<CustomerContact> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerContact" });

export interface NameValuePair {
  /** Required. The name of the property entry. */
  key?: string;
  /** Required. The value of the property entry. */
  value?: string;
}

export const NameValuePair: Schema.Codec<NameValuePair> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "NameValuePair" });

export interface GoldengateDb2ConnectionProperties {
  /** Optional. An array of name-value pair attribute entries. Used as additional parameters in connection string. */
  additionalAttributes?: ReadonlyArray<NameValuePair>;
  /** Optional. The name or address of a host. */
  host?: string;
  /** Optional. The file which contains the self-signed server certificate / Certificate Authority (CA) certificate. */
  sslServerCertificateFile?: string;
  /** Optional. The technology type of Db2Connection. */
  technologyType?: string;
  /** Optional. The keystash file which contains the encrypted password to the key database file. Not supported for IBM Db2 for i. */
  sslClientKeystashFile?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Db2 connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect to the DB2 database. */
  username?: string;
  /** Optional. The name of the database. */
  database?: string;
  /** Optional. The port of an endpoint usually specified for a connection. */
  port?: number;
  /** Optional. Input only. The password Oracle Goldengate uses for Db2 connection in plain text. */
  password?: string;
  /** Optional. Security protocol for the DB2 database. */
  securityProtocol?:
    | "DB2_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | (string & {});
  /** Optional. The keystore file created at the client containing the server certificate / CA root certificate. Not supported for IBM Db2 for i. */
  sslClientKeystoredbFile?: string;
}

export const GoldengateDb2ConnectionProperties: Schema.Codec<GoldengateDb2ConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    additionalAttributes: Schema.optional(Schema.Array(NameValuePair)),
    host: Schema.optional(Schema.String),
    sslServerCertificateFile: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    sslClientKeystashFile: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    sslClientKeystoredbFile: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateDb2ConnectionProperties" });

export interface EncryptionKey {
  /** Optional. The KMS key used to encrypt the Autonomous Database. This field is required if the provider is GOOGLE_MANAGED. The name of the KMS key resource in the following format: `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
  kmsKey?: string;
  /** Optional. The provider of the encryption key. */
  provider?:
    | "PROVIDER_UNSPECIFIED"
    | "GOOGLE_MANAGED"
    | "ORACLE_MANAGED"
    | (string & {});
}

export const EncryptionKey: Schema.Codec<EncryptionKey> =
  /*@__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionKey" });

export interface EncryptionKeyHistoryEntry {
  /** Output only. The encryption key used to encrypt the Autonomous Database. */
  encryptionKey?: EncryptionKey;
  /** Output only. The date and time when the encryption key was activated on the Autonomous Database.. */
  activationTime?: string;
}

export const EncryptionKeyHistoryEntry: Schema.Codec<EncryptionKeyHistoryEntry> =
  /*@__PURE__*/ Schema.Struct({
    encryptionKey: Schema.optional(EncryptionKey),
    activationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionKeyHistoryEntry" });

export interface AutonomousDatabaseApex {
  /** Output only. The Oracle REST Data Services (ORDS) version. */
  ordsVersion?: string;
  /** Output only. The Oracle APEX Application Development version. */
  apexVersion?: string;
}

export const AutonomousDatabaseApex: Schema.Codec<AutonomousDatabaseApex> =
  /*@__PURE__*/ Schema.Struct({
    ordsVersion: Schema.optional(Schema.String),
    apexVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseApex" });

export interface AllConnectionStrings {
  /** Output only. The database service provides the least level of resources to each SQL statement. */
  low?: string;
  /** Output only. The database service provides the highest level of resources to each SQL statement. */
  high?: string;
  /** Output only. The database service provides a lower level of resources to each SQL statement. */
  medium?: string;
}

export const AllConnectionStrings: Schema.Codec<AllConnectionStrings> =
  /*@__PURE__*/ Schema.Struct({
    low: Schema.optional(Schema.String),
    high: Schema.optional(Schema.String),
    medium: Schema.optional(Schema.String),
  }).annotate({ identifier: "AllConnectionStrings" });

export interface DatabaseConnectionStringProfile {
  /** Output only. The host name format being currently used in connection string. */
  hostFormat?: "HOST_FORMAT_UNSPECIFIED" | "FQDN" | "IP" | (string & {});
  /** Output only. The syntax of the connection string. */
  syntaxFormat?:
    | "SYNTAX_FORMAT_UNSPECIFIED"
    | "LONG"
    | "EZCONNECT"
    | "EZCONNECTPLUS"
    | (string & {});
  /** Output only. This field indicates the TLS authentication type of the connection. */
  tlsAuthentication?:
    | "TLS_AUTHENTICATION_UNSPECIFIED"
    | "SERVER"
    | "MUTUAL"
    | (string & {});
  /** Output only. This field indicates if the connection string is regional and is only applicable for cross-region Data Guard. */
  isRegional?: boolean;
  /** Output only. The current consumer group being used by the connection. */
  consumerGroup?:
    | "CONSUMER_GROUP_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "TP"
    | "TPURGENT"
    | (string & {});
  /** Output only. The display name for the database connection. */
  displayName?: string;
  /** Output only. The protocol being used by the connection. */
  protocol?: "PROTOCOL_UNSPECIFIED" | "TCP" | "TCPS" | (string & {});
  /** Output only. The value of the connection string. */
  value?: string;
  /** Output only. The current session mode of the connection. */
  sessionMode?:
    | "SESSION_MODE_UNSPECIFIED"
    | "DIRECT"
    | "INDIRECT"
    | (string & {});
}

export const DatabaseConnectionStringProfile: Schema.Codec<DatabaseConnectionStringProfile> =
  /*@__PURE__*/ Schema.Struct({
    hostFormat: Schema.optional(Schema.String),
    syntaxFormat: Schema.optional(Schema.String),
    tlsAuthentication: Schema.optional(Schema.String),
    isRegional: Schema.optional(Schema.Boolean),
    consumerGroup: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    sessionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseConnectionStringProfile" });

export interface AutonomousDatabaseConnectionStrings {
  /** Output only. The database service provides the least level of resources to each SQL statement. */
  low?: string;
  /** Output only. Returns all connection strings that can be used to connect to the Autonomous Database. */
  allConnectionStrings?: AllConnectionStrings;
  /** Output only. The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  dedicated?: string;
  /** Output only. The database service provides the highest level of resources to each SQL statement. */
  high?: string;
  /** Output only. The database service provides a lower level of resources to each SQL statement. */
  medium?: string;
  /** Output only. A list of connection string profiles to allow clients to group, filter, and select values based on the structured metadata. */
  profiles?: ReadonlyArray<DatabaseConnectionStringProfile>;
}

export const AutonomousDatabaseConnectionStrings: Schema.Codec<AutonomousDatabaseConnectionStrings> =
  /*@__PURE__*/ Schema.Struct({
    low: Schema.optional(Schema.String),
    allConnectionStrings: Schema.optional(AllConnectionStrings),
    dedicated: Schema.optional(Schema.String),
    high: Schema.optional(Schema.String),
    medium: Schema.optional(Schema.String),
    profiles: Schema.optional(Schema.Array(DatabaseConnectionStringProfile)),
  }).annotate({ identifier: "AutonomousDatabaseConnectionStrings" });

export interface TimeOfDay {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
}

export const TimeOfDay: Schema.Codec<TimeOfDay> =
  /*@__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface ScheduledOperationDetails {
  /** Output only. Auto stop time. */
  stopTime?: TimeOfDay;
  /** Output only. Day of week. */
  dayOfWeek?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Output only. Auto start time. */
  startTime?: TimeOfDay;
}

export const ScheduledOperationDetails: Schema.Codec<ScheduledOperationDetails> =
  /*@__PURE__*/ Schema.Struct({
    stopTime: Schema.optional(TimeOfDay),
    dayOfWeek: Schema.optional(Schema.String),
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "ScheduledOperationDetails" });

export interface AutonomousDatabaseStandbySummary {
  /** Output only. The additional details about the current lifecycle state of the Autonomous Database. */
  lifecycleDetails?: string;
  /** Output only. The current lifecycle state of the Autonomous Database. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "STOPPING"
    | "STOPPED"
    | "STARTING"
    | "TERMINATING"
    | "TERMINATED"
    | "UNAVAILABLE"
    | "RESTORE_IN_PROGRESS"
    | "RESTORE_FAILED"
    | "BACKUP_IN_PROGRESS"
    | "SCALE_IN_PROGRESS"
    | "AVAILABLE_NEEDS_ATTENTION"
    | "UPDATING"
    | "MAINTENANCE_IN_PROGRESS"
    | "RESTARTING"
    | "RECREATING"
    | "ROLE_CHANGE_IN_PROGRESS"
    | "UPGRADING"
    | "INACCESSIBLE"
    | "STANDBY"
    | (string & {});
  /** Output only. The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database. */
  dataGuardRoleChangedTime?: string;
  /** Output only. The amount of time, in seconds, that the data of the standby database lags in comparison to the data of the primary database. */
  lagTimeDuration?: string;
  /** Output only. The date and time the Disaster Recovery role was switched for the standby Autonomous Database. */
  disasterRecoveryRoleChangedTime?: string;
}

export const AutonomousDatabaseStandbySummary: Schema.Codec<AutonomousDatabaseStandbySummary> =
  /*@__PURE__*/ Schema.Struct({
    lifecycleDetails: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    dataGuardRoleChangedTime: Schema.optional(Schema.String),
    lagTimeDuration: Schema.optional(Schema.String),
    disasterRecoveryRoleChangedTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseStandbySummary" });

export interface AutonomousDatabaseProperties {
  /** Output only. The history of the encryption keys used to encrypt the Autonomous Database. */
  encryptionKeyHistoryEntries?: ReadonlyArray<EncryptionKeyHistoryEntry>;
  /** Optional. Immutable. The private endpoint label for the Autonomous Database. */
  privateEndpointLabel?: string;
  /** Optional. Immutable. The ID of the Oracle Cloud Infrastructure vault secret. */
  secretId?: string;
  /** Output only. Deprecated: Please use `local_adg_auto_failover_max_data_loss_limit_duration` instead. This field indicates the maximum data loss limit for an Autonomous Database, in seconds. */
  localAdgAutoFailoverMaxDataLossLimit?: number;
  /** Output only. The long term backup schedule of the Autonomous Database. */
  nextLongTermBackupTime?: string;
  /** Output only. The date and time when maintenance will begin. */
  maintenanceBeginTime?: string;
  /** Output only. The current state of the Data Safe registration for the Autonomous Database. */
  dataSafeState?:
    | "DATA_SAFE_STATE_UNSPECIFIED"
    | "REGISTERING"
    | "REGISTERED"
    | "DEREGISTERING"
    | "NOT_REGISTERED"
    | "FAILED"
    | (string & {});
  /** Output only. The current state of database management for the Autonomous Database. */
  databaseManagementState?:
    | "DATABASE_MANAGEMENT_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
  /** Output only. The list of available regions that can be used to create a clone for the Autonomous Database. */
  supportedCloneRegions?: ReadonlyArray<string>;
  /** Optional. Immutable. The size of the data stored in the database, in terabytes. */
  dataStorageSizeTb?: number;
  /** Optional. This field indicates the maximum data loss limit for an Autonomous Database, in seconds. */
  localAdgAutoFailoverMaxDataLossLimitDuration?: number;
  /** Optional. The encryption key used to encrypt the Autonomous Database. Updating this field will add a new entry in the `encryption_key_history_entries` field with the former version. */
  encryptionKey?: EncryptionKey;
  /** Output only. This field indicates the state of Operations Insights for the Autonomous Database. */
  operationsInsightsState?:
    | "OPERATIONS_INSIGHTS_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
  /** Required. Immutable. The license type used for the Autonomous Database. */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Output only. The private endpoint for the Autonomous Database. */
  privateEndpoint?: string;
  /** Output only. The details for the Oracle APEX Application Development. */
  apexDetails?: AutonomousDatabaseApex;
  /** Output only. The storage space used by automatic backups of Autonomous Database, in gigabytes. */
  totalAutoBackupStorageSizeGbs?: number;
  /** Optional. Immutable. This field indicates if auto scaling is enabled for the Autonomous Database CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Output only. This field indicates the status of Data Guard and Access control for the Autonomous Database. The field's value is null if Data Guard is disabled or Access Control is disabled. The field's value is TRUE if both Data Guard and Access Control are enabled, and the Autonomous Database is using primary IP access control list (ACL) for standby. The field's value is FALSE if both Data Guard and Access Control are enabled, and the Autonomous Database is using a different IP access control list (ACL) for standby compared to primary. */
  arePrimaryAllowlistedIpsUsed?: boolean;
  /** Optional. Immutable. This field specifies if the Autonomous Database requires mTLS connections. */
  mtlsConnectionRequired?: boolean;
  /** Output only. The current lifecycle state of the Autonomous Database. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "STOPPING"
    | "STOPPED"
    | "STARTING"
    | "TERMINATING"
    | "TERMINATED"
    | "UNAVAILABLE"
    | "RESTORE_IN_PROGRESS"
    | "RESTORE_FAILED"
    | "BACKUP_IN_PROGRESS"
    | "SCALE_IN_PROGRESS"
    | "AVAILABLE_NEEDS_ATTENTION"
    | "UPDATING"
    | "MAINTENANCE_IN_PROGRESS"
    | "RESTARTING"
    | "RECREATING"
    | "ROLE_CHANGE_IN_PROGRESS"
    | "UPGRADING"
    | "INACCESSIBLE"
    | "STANDBY"
    | (string & {});
  /** Optional. Immutable. The list of customer contacts. */
  customerContacts?: ReadonlyArray<CustomerContact>;
  /** Output only. The connection strings used to connect to an Autonomous Database. */
  connectionStrings?: AutonomousDatabaseConnectionStrings;
  /** Optional. Immutable. The list of allowlisted IP addresses for the Autonomous Database. */
  allowlistedIps?: ReadonlyArray<string>;
  /** Output only. The Oracle Cloud Infrastructure link for the Autonomous Database. */
  ociUrl?: string;
  /** Output only. The memory assigned to in-memory tables in an Autonomous Database. */
  memoryTableGbs?: number;
  /** Output only. The amount of storage currently allocated for the database tables and billed for, rounded up in terabytes. */
  allocatedStorageSizeTb?: number;
  /** Optional. Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable to cross-region Data Guard or dedicated Exadata infrastructure. */
  localDataGuardEnabled?: boolean;
  /** Optional. Immutable. The Oracle Database version for the Autonomous Database. */
  dbVersion?: string;
  /** Output only. This field indicates the number of seconds of data loss during a Data Guard failover. */
  failedDataRecoveryDuration?: string;
  /** Output only. Deprecated: Please use `local_data_guard_enabled` instead. This field indicates whether the Autonomous Database has local (in-region) Data Guard enabled. */
  isLocalDataGuardEnabled?: boolean;
  /** Output only. The date and time the Autonomous Data Guard role was changed for the standby Autonomous Database. */
  dataGuardRoleChangedTime?: string;
  /** Output only. The SQL Web Developer URL for the Autonomous Database. */
  sqlWebDeveloperUrl?: string;
  /** Output only. This field indicates the current mode of the Autonomous Database. */
  openMode?:
    | "OPEN_MODE_UNSPECIFIED"
    | "READ_ONLY"
    | "READ_WRITE"
    | (string & {});
  /** Output only. The refresh State of the clone. */
  refreshableState?:
    | "REFRESHABLE_STATE_UNSPECIFIED"
    | "REFRESHING"
    | "NOT_REFRESHING"
    | (string & {});
  /** Optional. Immutable. The number of compute servers for the Autonomous Database. */
  computeCount?: number;
  /** Output only. The permission level of the Autonomous Database. */
  permissionLevel?:
    | "PERMISSION_LEVEL_UNSPECIFIED"
    | "RESTRICTED"
    | "UNRESTRICTED"
    | (string & {});
  /** Output only. OCID of the Autonomous Database. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle */
  ocid?: string;
  /** Required. Immutable. The workload type of the Autonomous Database. */
  dbWorkload?:
    | "DB_WORKLOAD_UNSPECIFIED"
    | "OLTP"
    | "DW"
    | "AJD"
    | "APEX"
    | (string & {});
  /** Optional. Immutable. The retention period for the Autonomous Database. This field is specified in days, can range from 1 day to 60 days, and has a default value of 60 days. */
  backupRetentionPeriodDays?: number;
  /** Output only. The list and details of the scheduled operations of the Autonomous Database. */
  scheduledOperationDetails?: ReadonlyArray<ScheduledOperationDetails>;
  /** Output only. The Autonomous Container Database OCID. */
  autonomousContainerDatabaseId?: string;
  /** Output only. The details of the Autonomous Data Guard standby database. */
  localStandbyDb?: AutonomousDatabaseStandbySummary;
  /** Optional. Immutable. The size of the data stored in the database, in gigabytes. */
  dataStorageSizeGb?: number;
  /** Output only. The amount of memory enabled per ECPU, in gigabytes. */
  memoryPerOracleComputeUnitGbs?: number;
  /** Optional. Immutable. The number of CPU cores to be made available to the database. */
  cpuCoreCount?: number;
  /** Output only. The Data Guard role of the Autonomous Database. */
  role?:
    | "ROLE_UNSPECIFIED"
    | "PRIMARY"
    | "STANDBY"
    | "DISABLED_STANDBY"
    | "BACKUP_COPY"
    | "SNAPSHOT_STANDBY"
    | (string & {});
  /** Output only. The Oracle Connection URLs for an Autonomous Database. */
  connectionUrls?: AutonomousDatabaseConnectionUrls;
  /** Output only. The date and time the Disaster Recovery role was changed for the standby Autonomous Database. */
  disasterRecoveryRoleChangedTime?: string;
  /** Output only. The date and time when maintenance will end. */
  maintenanceEndTime?: string;
  /** Output only. The list of available Oracle Database upgrade versions for an Autonomous Database. */
  availableUpgradeVersions?: ReadonlyArray<string>;
  /** Optional. Immutable. The national character set for the Autonomous Database. The default is AL16UTF16. */
  nCharacterSet?: string;
  /** Optional. Immutable. The ID of the Oracle Cloud Infrastructure vault. */
  vaultId?: string;
  /** Output only. The details of the current lifestyle state of the Autonomous Database. */
  lifecycleDetails?: string;
  /** Optional. Immutable. The private endpoint IP address for the Autonomous Database. */
  privateEndpointIp?: string;
  /** Output only. This field indicates the local disaster recovery (DR) type of an Autonomous Database. */
  localDisasterRecoveryType?:
    | "LOCAL_DISASTER_RECOVERY_TYPE_UNSPECIFIED"
    | "ADG"
    | "BACKUP_BASED"
    | "NOT_AVAILABLE"
    | (string & {});
  /** Output only. The refresh mode of the cloned Autonomous Database. */
  refreshableMode?:
    | "REFRESHABLE_MODE_UNSPECIFIED"
    | "AUTOMATIC"
    | "MANUAL"
    | (string & {});
  /** Output only. The storage space used by Autonomous Database, in gigabytes. */
  usedDataStorageSizeTbs?: number;
  /** Optional. Immutable. The edition of the Autonomous Databases. */
  dbEdition?:
    | "DATABASE_EDITION_UNSPECIFIED"
    | "STANDARD_EDITION"
    | "ENTERPRISE_EDITION"
    | (string & {});
  /** Output only. An Oracle-managed Google Cloud service account on which customers can grant roles to access resources in the customer project. */
  serviceAgentEmail?: string;
  /** Output only. The amount of storage currently being used for user and system data, in terabytes. */
  actualUsedDataStorageSizeTb?: number;
  /** Optional. Immutable. The character set for the Autonomous Database. The default is AL32UTF8. */
  characterSet?: string;
  /** Optional. Immutable. The maintenance schedule of the Autonomous Database. */
  maintenanceScheduleType?:
    | "MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED"
    | "EARLY"
    | "REGULAR"
    | (string & {});
  /** Output only. The list of OCIDs of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. */
  peerDbIds?: ReadonlyArray<string>;
  /** Optional. Immutable. This field indicates if auto scaling is enabled for the Autonomous Database storage. */
  isStorageAutoScalingEnabled?: boolean;
}

export const AutonomousDatabaseProperties: Schema.Codec<AutonomousDatabaseProperties> =
  /*@__PURE__*/ Schema.Struct({
    encryptionKeyHistoryEntries: Schema.optional(
      Schema.Array(EncryptionKeyHistoryEntry),
    ),
    privateEndpointLabel: Schema.optional(Schema.String),
    secretId: Schema.optional(Schema.String),
    localAdgAutoFailoverMaxDataLossLimit: Schema.optional(Schema.Number),
    nextLongTermBackupTime: Schema.optional(Schema.String),
    maintenanceBeginTime: Schema.optional(Schema.String),
    dataSafeState: Schema.optional(Schema.String),
    databaseManagementState: Schema.optional(Schema.String),
    supportedCloneRegions: Schema.optional(Schema.Array(Schema.String)),
    dataStorageSizeTb: Schema.optional(Schema.Number),
    localAdgAutoFailoverMaxDataLossLimitDuration: Schema.optional(
      Schema.Number,
    ),
    encryptionKey: Schema.optional(EncryptionKey),
    operationsInsightsState: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
    privateEndpoint: Schema.optional(Schema.String),
    apexDetails: Schema.optional(AutonomousDatabaseApex),
    totalAutoBackupStorageSizeGbs: Schema.optional(Schema.Number),
    isAutoScalingEnabled: Schema.optional(Schema.Boolean),
    arePrimaryAllowlistedIpsUsed: Schema.optional(Schema.Boolean),
    mtlsConnectionRequired: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    customerContacts: Schema.optional(Schema.Array(CustomerContact)),
    connectionStrings: Schema.optional(AutonomousDatabaseConnectionStrings),
    allowlistedIps: Schema.optional(Schema.Array(Schema.String)),
    ociUrl: Schema.optional(Schema.String),
    memoryTableGbs: Schema.optional(Schema.Number),
    allocatedStorageSizeTb: Schema.optional(Schema.Number),
    localDataGuardEnabled: Schema.optional(Schema.Boolean),
    dbVersion: Schema.optional(Schema.String),
    failedDataRecoveryDuration: Schema.optional(Schema.String),
    isLocalDataGuardEnabled: Schema.optional(Schema.Boolean),
    dataGuardRoleChangedTime: Schema.optional(Schema.String),
    sqlWebDeveloperUrl: Schema.optional(Schema.String),
    openMode: Schema.optional(Schema.String),
    refreshableState: Schema.optional(Schema.String),
    computeCount: Schema.optional(Schema.Number),
    permissionLevel: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    dbWorkload: Schema.optional(Schema.String),
    backupRetentionPeriodDays: Schema.optional(Schema.Number),
    scheduledOperationDetails: Schema.optional(
      Schema.Array(ScheduledOperationDetails),
    ),
    autonomousContainerDatabaseId: Schema.optional(Schema.String),
    localStandbyDb: Schema.optional(AutonomousDatabaseStandbySummary),
    dataStorageSizeGb: Schema.optional(Schema.Number),
    memoryPerOracleComputeUnitGbs: Schema.optional(Schema.Number),
    cpuCoreCount: Schema.optional(Schema.Number),
    role: Schema.optional(Schema.String),
    connectionUrls: Schema.optional(AutonomousDatabaseConnectionUrls),
    disasterRecoveryRoleChangedTime: Schema.optional(Schema.String),
    maintenanceEndTime: Schema.optional(Schema.String),
    availableUpgradeVersions: Schema.optional(Schema.Array(Schema.String)),
    nCharacterSet: Schema.optional(Schema.String),
    vaultId: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
    privateEndpointIp: Schema.optional(Schema.String),
    localDisasterRecoveryType: Schema.optional(Schema.String),
    refreshableMode: Schema.optional(Schema.String),
    usedDataStorageSizeTbs: Schema.optional(Schema.Number),
    dbEdition: Schema.optional(Schema.String),
    serviceAgentEmail: Schema.optional(Schema.String),
    actualUsedDataStorageSizeTb: Schema.optional(Schema.Number),
    characterSet: Schema.optional(Schema.String),
    maintenanceScheduleType: Schema.optional(Schema.String),
    peerDbIds: Schema.optional(Schema.Array(Schema.String)),
    isStorageAutoScalingEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AutonomousDatabaseProperties" });

export interface GoldengateOracleConnectionProperties {
  /** Optional. Input only. The password Oracle Goldengate uses in plain text. */
  password?: string;
  /** Optional. Connect descriptor or Easy Connect Naming method used to connect to a database. */
  connectionString?: string;
  /** Optional. The wallet contents Oracle Goldengate uses to make connections to a database. This attribute is expected to be base64 encoded. */
  walletFile?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect. */
  username?: string;
  /** Optional. The technology type. */
  technologyType?: string;
  /** Optional. Autonomous AI Database instance id of database in Oracle Database @ Google Cloud. If gcp_oracle_database_id is provided, connection_string must be empty. Format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database} */
  gcpOracleDatabaseId?: string;
  /** Optional. Authentication mode. */
  authenticationMode?:
    | "ORACLE_AUTHENTICATION_MODE_UNSPECIFIED"
    | "TLS"
    | "MTLS"
    | (string & {});
  /** Optional. The mode of the database connection session to be established by the data client. */
  sessionMode?:
    | "SESSION_MODE_UNSPECIFIED"
    | "DIRECT"
    | "REDIRECT"
    | (string & {});
}

export const GoldengateOracleConnectionProperties: Schema.Codec<GoldengateOracleConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    password: Schema.optional(Schema.String),
    connectionString: Schema.optional(Schema.String),
    walletFile: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    gcpOracleDatabaseId: Schema.optional(Schema.String),
    authenticationMode: Schema.optional(Schema.String),
    sessionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateOracleConnectionProperties" });

export interface GoldengateDeployment {
  /** Optional. The GCP Oracle zone where Oracle GoldengateDeployment is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Output only. The ID of the subscription entitlement associated with the GoldengateDeployment */
  entitlementId?: string;
  /** Required. The properties of the GoldengateDeployment. */
  properties?: GoldengateDeploymentProperties;
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
  /** Optional. The name of the OdbNetwork associated with the GoldengateDeployment. */
  odbNetwork?: string;
  /** Optional. The labels or tags associated with the GoldengateDeployment. */
  labels?: Record<string, string>;
  /** Identifier. The name of the GoldengateDeployment resource in the following format: projects/{project}/locations/{region}/goldengateDeployments/{goldengate_deployment} */
  name?: string;
  /** Required. The display name for the GoldengateDeployment. */
  displayName?: string;
  /** Required. The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. */
  odbSubnet?: string;
  /** Output only. The date and time that the GoldengateDeployment was created. */
  createTime?: string;
}

export const GoldengateDeployment: Schema.Codec<GoldengateDeployment> =
  /*@__PURE__*/ Schema.Struct({
    gcpOracleZone: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    properties: Schema.optional(GoldengateDeploymentProperties),
    ociUrl: Schema.optional(Schema.String),
    odbNetwork: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    odbSubnet: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateDeployment" });

export interface ListGoldengateDeploymentsResponse {
  /** The list of GoldengateDeployments. */
  goldengateDeployments?: ReadonlyArray<GoldengateDeployment>;
  /** Optional. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListGoldengateDeploymentsResponse: Schema.Codec<ListGoldengateDeploymentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    goldengateDeployments: Schema.optional(Schema.Array(GoldengateDeployment)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGoldengateDeploymentsResponse" });

export interface SwitchoverAutonomousDatabaseRequest {
  /** Optional. The peer database name to switch over to. Required for cross-region standby, and must be omitted for in-region Data Guard. */
  peerAutonomousDatabase?: string;
}

export const SwitchoverAutonomousDatabaseRequest: Schema.Codec<SwitchoverAutonomousDatabaseRequest> =
  /*@__PURE__*/ Schema.Struct({
    peerAutonomousDatabase: Schema.optional(Schema.String),
  }).annotate({ identifier: "SwitchoverAutonomousDatabaseRequest" });

export interface PluggableDatabaseNodeLevelDetails {
  /** Required. The mode that the pluggable database is in to open it. */
  openMode?:
    | "PLUGGABLE_DATABASE_OPEN_MODE_UNSPECIFIED"
    | "READ_ONLY"
    | "READ_WRITE"
    | "MOUNTED"
    | "MIGRATE"
    | (string & {});
  /** Required. The Node name of the Database home. */
  nodeName?: string;
  /** Required. The OCID of the Pluggable Database. */
  pluggableDatabaseId?: string;
}

export const PluggableDatabaseNodeLevelDetails: Schema.Codec<PluggableDatabaseNodeLevelDetails> =
  /*@__PURE__*/ Schema.Struct({
    openMode: Schema.optional(Schema.String),
    nodeName: Schema.optional(Schema.String),
    pluggableDatabaseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PluggableDatabaseNodeLevelDetails" });

export interface PluggableDatabaseConnectionStrings {
  /** Optional. All connection strings to use to connect to the pluggable database. */
  allConnectionStrings?: Record<string, string>;
  /** Optional. The default connection string to use to connect to the pluggable database using IP. */
  pdbIpDefault?: string;
  /** Optional. The default connection string to use to connect to the pluggable database. */
  pdbDefault?: string;
}

export const PluggableDatabaseConnectionStrings: Schema.Codec<PluggableDatabaseConnectionStrings> =
  /*@__PURE__*/ Schema.Struct({
    allConnectionStrings: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    pdbIpDefault: Schema.optional(Schema.String),
    pdbDefault: Schema.optional(Schema.String),
  }).annotate({ identifier: "PluggableDatabaseConnectionStrings" });

export interface DefinedTagValue {
  /** The tags within the namespace. */
  tags?: Record<string, string>;
}

export const DefinedTagValue: Schema.Codec<DefinedTagValue> =
  /*@__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "DefinedTagValue" });

export interface PluggableDatabaseProperties {
  /** Output only. The configuration of the Database Management service. */
  databaseManagementConfig?: DatabaseManagementConfig;
  /** Optional. Pluggable Database Node Level Details */
  pdbNodeLevelDetails?: ReadonlyArray<PluggableDatabaseNodeLevelDetails>;
  /** Output only. The status of Operations Insights for this Database. */
  operationsInsightsState?:
    | "OPERATIONS_INSIGHTS_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
  /** Optional. The restricted mode of the pluggable database. If a pluggable database is opened in restricted mode, the user needs both create a session and have restricted session privileges to connect to it. */
  isRestricted?: boolean;
  /** Required. The database name. */
  pdbName?: string;
  /** Optional. The Connection strings used to connect to the Oracle Database. */
  connectionStrings?: PluggableDatabaseConnectionStrings;
  /** Optional. Defined tags for this resource. Each key is predefined and scoped to a namespace. */
  definedTags?: Record<string, DefinedTagValue>;
  /** Required. The OCID of the compartment. */
  compartmentId?: string;
  /** Optional. Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. */
  freeformTags?: Record<string, string>;
  /** Required. The OCID of the CDB. */
  containerDatabaseOcid?: string;
  /** Output only. The current state of the pluggable database. */
  lifecycleState?:
    | "PLUGGABLE_DATABASE_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "TERMINATING"
    | "TERMINATED"
    | "UPDATING"
    | "FAILED"
    | "RELOCATING"
    | "RELOCATED"
    | "REFRESHING"
    | "RESTORE_IN_PROGRESS"
    | "RESTORE_FAILED"
    | "BACKUP_IN_PROGRESS"
    | "DISABLED"
    | (string & {});
  /** Output only. The OCID of the pluggable database. */
  ocid?: string;
  /** Output only. Additional information about the current lifecycle state. */
  lifecycleDetails?: string;
}

export const PluggableDatabaseProperties: Schema.Codec<PluggableDatabaseProperties> =
  /*@__PURE__*/ Schema.Struct({
    databaseManagementConfig: Schema.optional(DatabaseManagementConfig),
    pdbNodeLevelDetails: Schema.optional(
      Schema.Array(PluggableDatabaseNodeLevelDetails),
    ),
    operationsInsightsState: Schema.optional(Schema.String),
    isRestricted: Schema.optional(Schema.Boolean),
    pdbName: Schema.optional(Schema.String),
    connectionStrings: Schema.optional(PluggableDatabaseConnectionStrings),
    definedTags: Schema.optional(Schema.Record(Schema.String, DefinedTagValue)),
    compartmentId: Schema.optional(Schema.String),
    freeformTags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    containerDatabaseOcid: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
  }).annotate({ identifier: "PluggableDatabaseProperties" });

export interface IdentityConnector {
  /** Output only. The connection state of the identity connector. */
  connectionState?:
    | "CONNECTION_STATE_UNSPECIFIED"
    | "CONNECTED"
    | "PARTIALLY_CONNECTED"
    | "DISCONNECTED"
    | "UNKNOWN"
    | (string & {});
  /** Output only. A google managed service account on which customers can grant roles to access resources in the customer project. Example: `p176944527254-55-75119d87fd8f@gcp-sa-oci.iam.gserviceaccount.com` */
  serviceAgentEmail?: string;
}

export const IdentityConnector: Schema.Codec<IdentityConnector> =
  /*@__PURE__*/ Schema.Struct({
    connectionState: Schema.optional(Schema.String),
    serviceAgentEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityConnector" });

export interface DataCollectionOptions {
  /** Optional. Indicates whether incident logs and trace collection are enabled for the VM cluster */
  incidentLogsEnabled?: boolean;
  /** Optional. Indicates whether diagnostic collection is enabled for the VM cluster */
  diagnosticsEventsEnabled?: boolean;
  /** Optional. Indicates whether health monitoring is enabled for the VM cluster */
  healthMonitoringEnabled?: boolean;
}

export const DataCollectionOptions: Schema.Codec<DataCollectionOptions> =
  /*@__PURE__*/ Schema.Struct({
    incidentLogsEnabled: Schema.optional(Schema.Boolean),
    diagnosticsEventsEnabled: Schema.optional(Schema.Boolean),
    healthMonitoringEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataCollectionOptions" });

export interface CloudVmClusterProperties {
  /** Optional. Number of database servers. */
  nodeCount?: number;
  /** Optional. Grid Infrastructure Version. */
  giVersion?: string;
  /** Output only. The compute model of the VM Cluster. */
  computeModel?:
    | "COMPUTE_MODEL_UNSPECIFIED"
    | "COMPUTE_MODEL_ECPU"
    | "COMPUTE_MODEL_OCPU"
    | (string & {});
  /** Optional. Use local backup. */
  localBackupEnabled?: boolean;
  /** Required. License type of VM Cluster. */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Optional. Memory allocated in GBs. */
  memorySizeGb?: number;
  /** Optional. Use exadata sparse snapshots. */
  sparseDiskgroupEnabled?: boolean;
  /** Output only. The storage management type of the VM Cluster. */
  storageManagementType?:
    | "STORAGE_MANAGEMENT_TYPE_UNSPECIFIED"
    | "ASM"
    | "EXASCALE"
    | (string & {});
  /** Output only. DNS listener IP. */
  dnsListenerIp?: string;
  /** Optional. SCAN listener port - TLS */
  scanListenerPortTcpSsl?: number;
  /** Optional. Operating system version of the image. */
  systemVersion?: string;
  /** Optional. Data collection options for diagnostics. */
  diagnosticsDataCollectionOptions?: DataCollectionOptions;
  /** Output only. State of the cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MAINTENANCE_IN_PROGRESS"
    | (string & {});
  /** Output only. Parent DNS domain where SCAN DNS and hosts names are qualified. ex: ocispdelegated.ocisp10jvnet.oraclevcn.com */
  domain?: string;
  /** Optional. OCI Cluster name. */
  clusterName?: string;
  /** Output only. Oracle Cloud Infrastructure ID of VM Cluster. */
  ocid?: string;
  /** Optional. The type of redundancy. */
  diskRedundancy?:
    | "DISK_REDUNDANCY_UNSPECIFIED"
    | "HIGH"
    | "NORMAL"
    | (string & {});
  /** Optional. Time zone of VM Cluster to set. Defaults to UTC if not specified. */
  timeZone?: TimeZone;
  /** Optional. OCPU count per VM. Minimum is 0.1. */
  ocpuCount?: number;
  /** Output only. OCID of scan DNS record. */
  scanDnsRecordId?: string;
  /** Output only. The storage allocation for the disk group, in gigabytes (GB). */
  storageSizeGb?: number;
  /** Optional. The data disk group size to be allocated in TBs. */
  dataStorageSizeTb?: number;
  /** Required. Number of enabled CPU cores. */
  cpuCoreCount?: number;
  /** Output only. Shape of VM Cluster. */
  shape?: string;
  /** Optional. SCAN listener port - TCP */
  scanListenerPortTcp?: number;
  /** Output only. host name without domain. format: "-" with some suffix. ex: sp2-yi0xq where "sp2" is the hostname_prefix. */
  hostname?: string;
  /** Output only. SCAN DNS name. ex: sp2-yi0xq-scan.ocispdelegated.ocisp10jvnet.oraclevcn.com */
  scanDns?: string;
  /** Optional. OCID of database servers. */
  dbServerOcids?: ReadonlyArray<string>;
  /** Optional. Prefix for VM cluster host names. */
  hostnamePrefix?: string;
  /** Output only. Compartment ID of cluster. */
  compartmentId?: string;
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUrl?: string;
  /** Output only. OCIDs of scan IPs. */
  scanIpIds?: ReadonlyArray<string>;
  /** Optional. SSH public keys to be stored with cluster. */
  sshPublicKeys?: ReadonlyArray<string>;
  /** Optional. Local storage per VM. */
  dbNodeStorageSizeGb?: number;
}

export const CloudVmClusterProperties: Schema.Codec<CloudVmClusterProperties> =
  /*@__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.Number),
    giVersion: Schema.optional(Schema.String),
    computeModel: Schema.optional(Schema.String),
    localBackupEnabled: Schema.optional(Schema.Boolean),
    licenseType: Schema.optional(Schema.String),
    memorySizeGb: Schema.optional(Schema.Number),
    sparseDiskgroupEnabled: Schema.optional(Schema.Boolean),
    storageManagementType: Schema.optional(Schema.String),
    dnsListenerIp: Schema.optional(Schema.String),
    scanListenerPortTcpSsl: Schema.optional(Schema.Number),
    systemVersion: Schema.optional(Schema.String),
    diagnosticsDataCollectionOptions: Schema.optional(DataCollectionOptions),
    state: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    diskRedundancy: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
    ocpuCount: Schema.optional(Schema.Number),
    scanDnsRecordId: Schema.optional(Schema.String),
    storageSizeGb: Schema.optional(Schema.Number),
    dataStorageSizeTb: Schema.optional(Schema.Number),
    cpuCoreCount: Schema.optional(Schema.Number),
    shape: Schema.optional(Schema.String),
    scanListenerPortTcp: Schema.optional(Schema.Number),
    hostname: Schema.optional(Schema.String),
    scanDns: Schema.optional(Schema.String),
    dbServerOcids: Schema.optional(Schema.Array(Schema.String)),
    hostnamePrefix: Schema.optional(Schema.String),
    compartmentId: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
    scanIpIds: Schema.optional(Schema.Array(Schema.String)),
    sshPublicKeys: Schema.optional(Schema.Array(Schema.String)),
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudVmClusterProperties" });

export interface CloudVmCluster {
  /** Optional. The name of the VPC network. Format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Identifier. The name of the VM Cluster resource with the format: projects/{project}/locations/{region}/cloudVmClusters/{cloud_vm_cluster} */
  name?: string;
  /** Optional. Labels or tags associated with the VM Cluster. */
  labels?: Record<string, string>;
  /** Optional. CIDR range of the backup subnet. */
  backupSubnetCidr?: string;
  /** Output only. The identity connector details which will allow OCI to securely access the resources in the customer project. */
  identityConnector?: IdentityConnector;
  /** Optional. The name of ExascaleDbStorageVault associated with the VM Cluster. Format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault} */
  exascaleDbStorageVault?: string;
  /** Output only. The date and time that the VM cluster was created. */
  createTime?: string;
  /** Output only. The GCP Oracle zone where Oracle CloudVmCluster is hosted. This will be the same as the gcp_oracle_zone of the CloudExadataInfrastructure. Example: us-east4-b-r2. */
  gcpOracleZone?: string;
  /** Optional. The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  backupOdbSubnet?: string;
  /** Required. The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure} */
  exadataInfrastructure?: string;
  /** Optional. Various properties of the VM Cluster. */
  properties?: CloudVmClusterProperties;
  /** Optional. User friendly name for this resource. */
  displayName?: string;
  /** Optional. Network settings. CIDR to use for cluster IP allocation. */
  cidr?: string;
  /** Optional. The name of the OdbNetwork associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the odb_subnet and backup_odb_subnet. */
  odbNetwork?: string;
  /** Optional. The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
}

export const CloudVmCluster: Schema.Codec<CloudVmCluster> =
  /*@__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    backupSubnetCidr: Schema.optional(Schema.String),
    identityConnector: Schema.optional(IdentityConnector),
    exascaleDbStorageVault: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    backupOdbSubnet: Schema.optional(Schema.String),
    exadataInfrastructure: Schema.optional(Schema.String),
    properties: Schema.optional(CloudVmClusterProperties),
    displayName: Schema.optional(Schema.String),
    cidr: Schema.optional(Schema.String),
    odbNetwork: Schema.optional(Schema.String),
    odbSubnet: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudVmCluster" });

export interface DbNodeProperties {
  /** Memory allocated in GBs. */
  memorySizeGb?: number;
  /** Output only. OCID of database node. */
  ocid?: string;
  /** Output only. The date and time that the database node was created. */
  createTime?: string;
  /** Optional. DNS */
  hostname?: string;
  /** Optional. Local storage per database node. */
  dbNodeStorageSizeGb?: number;
  /** Optional. Database server OCID. */
  dbServerOcid?: string;
  /** Optional. OCPU count per database node. */
  ocpuCount?: number;
  /** Output only. State of the database node. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "STOPPING"
    | "STOPPED"
    | "STARTING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | (string & {});
  /** Total CPU core count of the database node. */
  totalCpuCoreCount?: number;
}

export const DbNodeProperties: Schema.Codec<DbNodeProperties> =
  /*@__PURE__*/ Schema.Struct({
    memorySizeGb: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
    dbServerOcid: Schema.optional(Schema.String),
    ocpuCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    totalCpuCoreCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DbNodeProperties" });

export interface DatabaseCharacterSet {
  /** Output only. The character set type for the Database. */
  characterSetType?:
    | "CHARACTER_SET_TYPE_UNSPECIFIED"
    | "DATABASE"
    | "NATIONAL"
    | (string & {});
  /** Output only. The character set name for the Database which is the ID in the resource name. */
  characterSet?: string;
  /** Identifier. The name of the Database Character Set resource in the following format: projects/{project}/locations/{region}/databaseCharacterSets/{database_character_set} */
  name?: string;
}

export const DatabaseCharacterSet: Schema.Codec<DatabaseCharacterSet> =
  /*@__PURE__*/ Schema.Struct({
    characterSetType: Schema.optional(Schema.String),
    characterSet: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseCharacterSet" });

export interface GoldengateOracleAIDataPlatformConnectionProperties {
  /** Optional. The name of the region. e.g.: us-ashburn-1 */
  region?: string;
  /** Optional. The technology type of OracleAiDataPlatformConnection. */
  technologyType?: string;
  /** Optional. The fingerprint of the API Key of the user specified by the user_id. */
  publicKeyFingerprint?: string;
  /** Optional. Specifies that the user intends to authenticate to the instance using a resource principal. */
  useResourcePrincipal?: boolean;
  /** Optional. Connection URL. It must start with 'jdbc:spark://' */
  connectionUrl?: string;
  /** Optional. The passphrase of the private key. */
  privateKeyPassphraseSecret?: string;
  /** Optional. The OCID of the related OCI tenancy. */
  tenancyId?: string;
  /** Optional. The OCID of the OCI user who will access. */
  userId?: string;
  /** Optional. The content of the private key file (PEM file) corresponding to the API key of the fingerprint. */
  privateKeyFile?: string;
}

export const GoldengateOracleAIDataPlatformConnectionProperties: Schema.Codec<GoldengateOracleAIDataPlatformConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    publicKeyFingerprint: Schema.optional(Schema.String),
    useResourcePrincipal: Schema.optional(Schema.Boolean),
    connectionUrl: Schema.optional(Schema.String),
    privateKeyPassphraseSecret: Schema.optional(Schema.String),
    tenancyId: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    privateKeyFile: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoldengateOracleAIDataPlatformConnectionProperties",
  });

export interface GiVersion {
  /** Identifier. The name of the Oracle Grid Infrastructure (GI) version resource with the format: projects/{project}/locations/{region}/giVersions/{gi_versions} */
  name?: string;
  /** Optional. version */
  version?: string;
}

export const GiVersion: Schema.Codec<GiVersion> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GiVersion" });

export interface AutonomousDbVersion {
  /** Identifier. The name of the Autonomous Database Version resource with the format: projects/{project}/locations/{region}/autonomousDbVersions/{autonomous_db_version} */
  name?: string;
  /** Output only. The Autonomous Database workload type. */
  dbWorkload?:
    | "DB_WORKLOAD_UNSPECIFIED"
    | "OLTP"
    | "DW"
    | "AJD"
    | "APEX"
    | (string & {});
  /** Output only. An Oracle Database version for Autonomous Database. */
  version?: string;
  /** Output only. A URL that points to a detailed description of the Autonomous Database version. */
  workloadUri?: string;
}

export const AutonomousDbVersion: Schema.Codec<AutonomousDbVersion> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dbWorkload: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    workloadUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDbVersion" });

export interface ListAutonomousDbVersionsResponse {
  /** The list of Autonomous Database versions. */
  autonomousDbVersions?: ReadonlyArray<AutonomousDbVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAutonomousDbVersionsResponse: Schema.Codec<ListAutonomousDbVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    autonomousDbVersions: Schema.optional(Schema.Array(AutonomousDbVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutonomousDbVersionsResponse" });

export interface DbNode {
  /** Identifier. The name of the database node resource in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}/dbNodes/{db_node} */
  name?: string;
  /** Optional. Various properties of the database node. */
  properties?: DbNodeProperties;
}

export const DbNode: Schema.Codec<DbNode> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(DbNodeProperties),
  }).annotate({ identifier: "DbNode" });

export interface ListDbNodesResponse {
  /** A token identifying a page of results the node should return. */
  nextPageToken?: string;
  /** The list of DB Nodes */
  dbNodes?: ReadonlyArray<DbNode>;
}

export const ListDbNodesResponse: Schema.Codec<ListDbNodesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    dbNodes: Schema.optional(Schema.Array(DbNode)),
  }).annotate({ identifier: "ListDbNodesResponse" });

export interface GoldengateGenericConnectionProperties {
  /** Optional. The technology type. */
  technologyType?: string;
  /** Optional. The host of the GenericConnection. */
  host?: string;
}

export const GoldengateGenericConnectionProperties: Schema.Codec<GoldengateGenericConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateGenericConnectionProperties" });

export interface GoldengateAzureSynapseAnalyticsConnectionProperties {
  /** Optional. Input only. The password Oracle Goldengate uses for Azure Synapse Analytics connection in plain text. */
  password?: string;
  /** Optional. JDBC connection string. e.g.: 'jdbc:sqlserver://.sql.azuresynapse.net:1433;database=;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.sql.azuresynapse.net;loginTimeout=300;' */
  connectionString?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Azure Synapse Analytics connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect the associated system of the given technology. */
  username?: string;
  /** Optional. The technology type of AzureSynapseAnalyticsConnection. */
  technologyType?: string;
}

export const GoldengateAzureSynapseAnalyticsConnectionProperties: Schema.Codec<GoldengateAzureSynapseAnalyticsConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    password: Schema.optional(Schema.String),
    connectionString: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoldengateAzureSynapseAnalyticsConnectionProperties",
  });

export interface KafkaBootstrapServer {
  /** Required. The name or address of a host. */
  host?: string;
  /** Optional. The port of an endpoint usually specified for a connection. */
  port?: number;
  /** Optional. The private IP address of the connection's endpoint in the customer's VCN, typically a database endpoint or a big data endpoint (e.g. Kafka bootstrap server). In case the privateIp is provided, the subnetId must also be provided. In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible. In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection. */
  privateIpAddress?: string;
}

export const KafkaBootstrapServer: Schema.Codec<KafkaBootstrapServer> =
  /*@__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    privateIpAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "KafkaBootstrapServer" });

export interface GoldengateKafkaConnectionProperties {
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password for Kafka basic/SASL auth. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. Input only. The password for Kafka basic/SASL auth in plain text. */
  password?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password for the cert inside of the KeyStore. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  sslKeyPasswordSecretVersion?: string;
  /** Optional. Input only. The password for the cert inside of the KeyStore in plain text. */
  sslKeyPassword?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  keyStorePasswordSecretVersion?: string;
  /** Optional. Kafka bootstrap. Equivalent of bootstrap.servers configuration property in Kafka: list of KafkaBootstrapServer objects specified by host/port. Used for establishing the initial connection to the Kafka cluster. Example: "server1.example.com:9092,server2.example.com:9092" */
  bootstrapServers?: ReadonlyArray<KafkaBootstrapServer>;
  /** Optional. The OCID of the stream pool being referenced. */
  streamPoolId?: string;
  /** Optional. The base64 encoded content of the producer.properties file. */
  producerPropertiesFile?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  trustStorePasswordSecretVersion?: string;
  /** Optional. Input only. The KeyStore password in plain text. */
  keyStorePassword?: string;
  /** Optional. The base64 encoded content of the TrustStore file. */
  trustStoreFile?: string;
  /** Optional. The base64 encoded content of the consumer.properties file. */
  consumerPropertiesFile?: string;
  /** Optional. The username Oracle Goldengate uses to connect the associated system of the given technology. */
  username?: string;
  /** Optional. Security Type for Kafka. */
  securityProtocol?:
    | "KAFKA_SECURITY_PROTOCOL_UNSPECIFIED"
    | "SSL"
    | "SASL_SSL"
    | "PLAINTEXT"
    | "SASL_PLAINTEXT"
    | (string & {});
  /** Optional. The base64 encoded content of the KeyStore file. */
  keyStoreFile?: string;
  /** Optional. The OCID of the Kafka cluster being referenced from OCI Streaming with Apache Kafka. */
  clusterId?: string;
  /** Optional. Specifies that the user intends to authenticate to the instance using a resource principal. Applicable only for OCI Streaming connections. */
  useResourcePrincipal?: boolean;
  /** Optional. The technology type of KafkaConnection. */
  technologyType?: string;
  /** Optional. Input only. The TrustStore password in plain text. */
  trustStorePassword?: string;
}

export const GoldengateKafkaConnectionProperties: Schema.Codec<GoldengateKafkaConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    passwordSecretVersion: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    sslKeyPasswordSecretVersion: Schema.optional(Schema.String),
    sslKeyPassword: Schema.optional(Schema.String),
    keyStorePasswordSecretVersion: Schema.optional(Schema.String),
    bootstrapServers: Schema.optional(Schema.Array(KafkaBootstrapServer)),
    streamPoolId: Schema.optional(Schema.String),
    producerPropertiesFile: Schema.optional(Schema.String),
    trustStorePasswordSecretVersion: Schema.optional(Schema.String),
    keyStorePassword: Schema.optional(Schema.String),
    trustStoreFile: Schema.optional(Schema.String),
    consumerPropertiesFile: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    keyStoreFile: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    useResourcePrincipal: Schema.optional(Schema.Boolean),
    technologyType: Schema.optional(Schema.String),
    trustStorePassword: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateKafkaConnectionProperties" });

export interface GoldengateElasticsearchConnectionProperties {
  /** Optional. Comma separated list of Elasticsearch server addresses, specified as host:port entries, where :port is optional. If port is not specified, it defaults to 9200. Example: "server1.example.com:4000,server2.example.com:4000" */
  servers?: string;
  /** Optional. The technology type of ElasticsearchConnection. */
  technologyType?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Elastic Search connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect the associated system of the given technology. */
  username?: string;
  /** Optional. Authentication type for Elasticsearch. */
  authenticationType?:
    | "ELASTICSEARCH_AUTHENTICATION_TYPE_UNSPECIFIED"
    | "NONE"
    | "BASIC"
    | (string & {});
  /** Optional. Fingerprint required by TLS security protocol. Eg.: '6152b2dfbff200f973c5074a5b91d06ab3b472c07c09a1ea57bb7fd406cdce9c' */
  fingerprint?: string;
  /** Optional. Input only. The password Oracle Goldengate uses for Elastic Search connection in plain text. */
  password?: string;
  /** Optional. Security protocol for Elasticsearch. */
  securityProtocol?:
    | "ELASTICSEARCH_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | (string & {});
}

export const GoldengateElasticsearchConnectionProperties: Schema.Codec<GoldengateElasticsearchConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    servers: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    authenticationType: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateElasticsearchConnectionProperties" });

export interface RestIcebergCatalog {
  /** Required. The REST uri. */
  uri?: string;
  /** Optional. The base64 encoded content of the configuration file containing additional properties for the REST catalog. */
  properties?: string;
}

export const RestIcebergCatalog: Schema.Codec<RestIcebergCatalog> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestIcebergCatalog" });

export interface GlueIcebergCatalog {
  /** Required. The catalog ID of Glue. */
  glueId?: string;
}

export const GlueIcebergCatalog: Schema.Codec<GlueIcebergCatalog> =
  /*@__PURE__*/ Schema.Struct({
    glueId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GlueIcebergCatalog" });

export interface NessieIcebergCatalog {
  /** Required. The Nessie uri. */
  uri?: string;
  /** Required. The Nessie branch. */
  branch?: string;
}

export const NessieIcebergCatalog: Schema.Codec<NessieIcebergCatalog> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    branch: Schema.optional(Schema.String),
  }).annotate({ identifier: "NessieIcebergCatalog" });

export interface PolarisIcebergCatalog {
  /** Required. The catalog name within Polaris. */
  polarisCatalog?: string;
  /** Optional. The Polaris client secret. */
  clientSecret?: string;
  /** Required. The Polaris uri. */
  uri?: string;
  /** Required. The Polaris principal role. */
  principalRole?: string;
  /** Required. The Polaris client ID. */
  clientId?: string;
}

export const PolarisIcebergCatalog: Schema.Codec<PolarisIcebergCatalog> =
  /*@__PURE__*/ Schema.Struct({
    polarisCatalog: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    principalRole: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolarisIcebergCatalog" });

export interface IcebergCatalog {
  /** The REST Iceberg catalog. */
  restIcebergCatalog?: RestIcebergCatalog;
  /** Required. The type of Iceberg catalog. */
  catalogType?:
    | "CATALOG_TYPE_UNSPECIFIED"
    | "GLUE"
    | "HADOOP"
    | "NESSIE"
    | "POLARIS"
    | "REST"
    | (string & {});
  /** The Glue Iceberg catalog. */
  glueIcebergCatalog?: GlueIcebergCatalog;
  /** The Nessie Iceberg catalog. */
  nessieIcebergCatalog?: NessieIcebergCatalog;
  /** The Polaris Iceberg catalog. */
  polarisIcebergCatalog?: PolarisIcebergCatalog;
}

export const IcebergCatalog: Schema.Codec<IcebergCatalog> =
  /*@__PURE__*/ Schema.Struct({
    restIcebergCatalog: Schema.optional(RestIcebergCatalog),
    catalogType: Schema.optional(Schema.String),
    glueIcebergCatalog: Schema.optional(GlueIcebergCatalog),
    nessieIcebergCatalog: Schema.optional(NessieIcebergCatalog),
    polarisIcebergCatalog: Schema.optional(PolarisIcebergCatalog),
  }).annotate({ identifier: "IcebergCatalog" });

export interface AzureDataLakeStorageIcebergStorage {
  /** Required. The account of Azure Data Lake Storage. */
  azureAccount?: string;
  /** Required. The container of Azure Data Lake Storage. */
  container?: string;
  /** Optional. The account key of Azure Data Lake Storage. */
  accountKeySecret?: string;
  /** Optional. The endpoint of Azure Data Lake Storage. */
  endpoint?: string;
}

export const AzureDataLakeStorageIcebergStorage: Schema.Codec<AzureDataLakeStorageIcebergStorage> =
  /*@__PURE__*/ Schema.Struct({
    azureAccount: Schema.optional(Schema.String),
    container: Schema.optional(Schema.String),
    accountKeySecret: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureDataLakeStorageIcebergStorage" });

export interface AmazonS3IcebergStorage {
  /** Required. The scheme type of Amazon S3. */
  schemeType?: "SCHEME_TYPE_UNSPECIFIED" | "S3" | "S3A" | (string & {});
  /** Optional. The secret access key of Amazon S3. */
  secretAccessKeySecret?: string;
  /** Required. The region of Amazon S3. */
  region?: string;
  /** Required. The bucket of Amazon S3. */
  bucket?: string;
  /** Optional. The endpoint of Amazon S3. */
  endpoint?: string;
  /** Required. The access key ID of Amazon S3. */
  accessKeyId?: string;
}

export const AmazonS3IcebergStorage: Schema.Codec<AmazonS3IcebergStorage> =
  /*@__PURE__*/ Schema.Struct({
    schemeType: Schema.optional(Schema.String),
    secretAccessKeySecret: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    accessKeyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AmazonS3IcebergStorage" });

export interface IcebergStorage {
  /** The Google Cloud Storage Iceberg storage. */
  googleCloudStorageIcebergStorage?: GoogleCloudStorageIcebergStorage;
  /** The Azure Data Lake Storage Iceberg storage. */
  azureDataLakeStorageIcebergStorage?: AzureDataLakeStorageIcebergStorage;
  /** Required. The type of Iceberg storage. */
  storageType?:
    | "STORAGE_TYPE_UNSPECIFIED"
    | "AMAZON_S3"
    | "GOOGLE_CLOUD_STORAGE"
    | "AZURE_DATA_LAKE_STORAGE"
    | (string & {});
  /** The Amazon S3 Iceberg storage. */
  amazonS3IcebergStorage?: AmazonS3IcebergStorage;
}

export const IcebergStorage: Schema.Codec<IcebergStorage> =
  /*@__PURE__*/ Schema.Struct({
    googleCloudStorageIcebergStorage: Schema.optional(
      GoogleCloudStorageIcebergStorage,
    ),
    azureDataLakeStorageIcebergStorage: Schema.optional(
      AzureDataLakeStorageIcebergStorage,
    ),
    storageType: Schema.optional(Schema.String),
    amazonS3IcebergStorage: Schema.optional(AmazonS3IcebergStorage),
  }).annotate({ identifier: "IcebergStorage" });

export interface GoldengateIcebergConnectionProperties {
  /** Required. The technology type of Iceberg connection. */
  technologyType?: string;
  /** Required. The Iceberg catalog. */
  catalog?: IcebergCatalog;
  /** Required. The Iceberg storage. */
  storage?: IcebergStorage;
}

export const GoldengateIcebergConnectionProperties: Schema.Codec<GoldengateIcebergConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    catalog: Schema.optional(IcebergCatalog),
    storage: Schema.optional(IcebergStorage),
  }).annotate({ identifier: "GoldengateIcebergConnectionProperties" });

export interface GoldengateOracleNosqlConnectionProperties {
  /** Optional. The technology type of OracleNosqlConnection. */
  technologyType?: string;
  /** Optional. The OCID of the OCI user who will access the Oracle NoSQL database. */
  userId?: string;
  /** Optional. The content of the private key file (PEM file) corresponding to the API key of the fingerprint. */
  privateKeyFile?: string;
  /** Optional. The fingerprint of the API Key of the user specified by the userId. */
  publicKeyFingerprint?: string;
  /** Optional. Specifies that the user intends to authenticate to the instance using a resource principal. */
  useResourcePrincipal?: boolean;
  /** Optional. The OCID of the OCI tenancy. */
  tenancyId?: string;
  /** Optional. The name of the region. e.g.: us-ashburn-1 */
  region?: string;
  /** Optional. The passphrase of the private key. */
  privateKeyPassphraseSecret?: string;
}

export const GoldengateOracleNosqlConnectionProperties: Schema.Codec<GoldengateOracleNosqlConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    privateKeyFile: Schema.optional(Schema.String),
    publicKeyFingerprint: Schema.optional(Schema.String),
    useResourcePrincipal: Schema.optional(Schema.Boolean),
    tenancyId: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    privateKeyPassphraseSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateOracleNosqlConnectionProperties" });

export interface GoldengateGoldengateConnectionProperties {
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password used to connect to the Oracle Goldengate. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username credential. */
  username?: string;
  /** Optional. Input only. The password used to connect to the Oracle Goldengate in plain text. */
  password?: string;
  /** Optional. The name of the GoldengateDeployment associated with the GoldengateConnection. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment} */
  goldengateDeploymentId?: string;
  /** Optional. The port of the GoldengateConnection. */
  port?: number;
  /** Optional. The technology type. */
  technologyType?: string;
  /** Optional. The host of the GoldengateConnection. */
  host?: string;
}

export const GoldengateGoldengateConnectionProperties: Schema.Codec<GoldengateGoldengateConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    goldengateDeploymentId: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    technologyType: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateGoldengateConnectionProperties" });

export interface GoldengateAmazonRedshiftConnectionProperties {
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Amazon Redshift connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect the associated system of the given technology. */
  username?: string;
  /** Optional. Input only. The password Oracle Goldengate uses for Amazon Redshift connection in plain text. */
  password?: string;
  /** Optional. Connection URL. e.g.: 'jdbc:redshift://aws-redshift-instance.aaaaaaaaaaaa.us-east-2.redshift.amazonaws.com:5439/mydb' */
  connectionUrl?: string;
  /** Optional. The technology type of AmazonRedshiftConnection. */
  technologyType?: string;
}

export const GoldengateAmazonRedshiftConnectionProperties: Schema.Codec<GoldengateAmazonRedshiftConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    connectionUrl: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateAmazonRedshiftConnectionProperties" });

export interface GoldengateGooglePubsubConnectionProperties {
  /** Optional. The technology type of GooglePubsubConnection. */
  technologyType?: string;
  /** Optional. The base64 encoded content of the service account key file containing the credentials required to use Google Pub/Sub. */
  serviceAccountKeyFile?: string;
}

export const GoldengateGooglePubsubConnectionProperties: Schema.Codec<GoldengateGooglePubsubConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    serviceAccountKeyFile: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateGooglePubsubConnectionProperties" });

export interface GoldengateMicrosoftSqlserverConnectionProperties {
  /** Optional. The technology type of MicrosoftSqlserverConnection. */
  technologyType?: string;
  /** Optional. Input only. The password Oracle Goldengate uses for Microsoft SQL Server connection in plain text. */
  password?: string;
  /** Optional. Security Type for Microsoft SQL Server. */
  securityProtocol?:
    | "MICROSOFT_SQLSERVER_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | (string & {});
  /** Optional. The port of an endpoint usually specified for a connection. */
  port?: number;
  /** Optional. The name of the database. */
  database?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Microsoft SQL Server connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The username Oracle Goldengate uses to connect to the Microsoft SQL Server. */
  username?: string;
  /** Optional. If set to true, the driver validates the certificate that is sent by the database server. */
  serverCertificateValidationRequired?: boolean;
  /** Optional. The name or address of a host. */
  host?: string;
  /** Optional. An array of name-value pair attribute entries. Used as additional parameters in connection string. */
  additionalAttributes?: ReadonlyArray<NameValuePair>;
  /** Optional. Database Certificate - The base64 encoded content of a .pem or .crt file containing the server public key (for 1-way SSL). */
  sslCaFile?: string;
}

export const GoldengateMicrosoftSqlserverConnectionProperties: Schema.Codec<GoldengateMicrosoftSqlserverConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    technologyType: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    database: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    serverCertificateValidationRequired: Schema.optional(Schema.Boolean),
    host: Schema.optional(Schema.String),
    additionalAttributes: Schema.optional(Schema.Array(NameValuePair)),
    sslCaFile: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoldengateMicrosoftSqlserverConnectionProperties",
  });

export interface GoldengateJavaMessageServiceConnectionProperties {
  /** Optional. Input only. The KeyStore password in plain text. */
  keyStorePassword?: string;
  /** Optional. If set to true, Java Naming and Directory Interface (JNDI) properties should be provided. */
  useJndi?: boolean;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  trustStorePasswordSecretVersion?: string;
  /** Optional. The password associated to the principal. */
  jndiSecurityCredentialsSecret?: string;
  /** Optional. Input only. The password Oracle Goldengate uses to connect the Java Message Service in plain text. */
  password?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password for the cert inside of the KeyStore. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  sslKeyPasswordSecretVersion?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect the associated Java Message Service. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  keyStorePasswordSecretVersion?: string;
  /** Optional. Input only. The password for the cert inside of the KeyStore in plain text. */
  sslKeyPassword?: string;
  /** Optional. The Java class implementing javax.jms.ConnectionFactory interface supplied by the JMS provider. */
  connectionFactory?: string;
  /** Optional. Input only. The TrustStore password in plain text. */
  trustStorePassword?: string;
  /** Optional. The Connection Factory can be looked up using this name. e.g.: 'ConnectionFactory' */
  jndiConnectionFactory?: string;
  /** Optional. Connection URL of the Java Message Service, specifying the protocol, host, and port. e.g.: 'mq://myjms.host.domain:7676' */
  connectionUrl?: string;
  /** Optional. The implementation of javax.naming.spi.InitialContextFactory interface used to obtain initial naming context. */
  jndiInitialContextFactory?: string;
  /** Optional. Authentication type for Java Message Service. */
  authenticationType?:
    | "JMS_AUTHENTICATION_TYPE_UNSPECIFIED"
    | "NONE"
    | "BASIC"
    | (string & {});
  /** Optional. The base64 encoded content of the KeyStore file. */
  keyStoreFile?: string;
  /** Optional. Specifies the identity of the principal (user) to be authenticated. */
  jndiSecurityPrincipal?: string;
  /** Optional. Security protocol for Java Message Service. */
  securityProtocol?:
    | "JMS_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | "MTLS"
    | (string & {});
  /** Optional. The username Oracle Goldengate uses to connect to the Java Message Service. */
  username?: string;
  /** Optional. The base64 encoded content of the TrustStore file. */
  trustStoreFile?: string;
  /** Optional. The technology type of JavaMessageServiceConnection. */
  technologyType?: string;
  /** Optional. The URL that Java Message Service will use to contact the JNDI provider. e.g.: 'tcp://myjms.host.domain:61616?jms.prefetchPolicy.all=1000' */
  jndiProviderUrl?: string;
}

export const GoldengateJavaMessageServiceConnectionProperties: Schema.Codec<GoldengateJavaMessageServiceConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    keyStorePassword: Schema.optional(Schema.String),
    useJndi: Schema.optional(Schema.Boolean),
    trustStorePasswordSecretVersion: Schema.optional(Schema.String),
    jndiSecurityCredentialsSecret: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    sslKeyPasswordSecretVersion: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    keyStorePasswordSecretVersion: Schema.optional(Schema.String),
    sslKeyPassword: Schema.optional(Schema.String),
    connectionFactory: Schema.optional(Schema.String),
    trustStorePassword: Schema.optional(Schema.String),
    jndiConnectionFactory: Schema.optional(Schema.String),
    connectionUrl: Schema.optional(Schema.String),
    jndiInitialContextFactory: Schema.optional(Schema.String),
    authenticationType: Schema.optional(Schema.String),
    keyStoreFile: Schema.optional(Schema.String),
    jndiSecurityPrincipal: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    trustStoreFile: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    jndiProviderUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoldengateJavaMessageServiceConnectionProperties",
  });

export interface GoldengateRedisConnectionProperties {
  /** Optional. Input only. The password Oracle Goldengate uses for Redis connection in plain text. */
  password?: string;
  /** Optional. The OCID of the Redis cluster. */
  redisClusterId?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Redis connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  keyStorePasswordSecretVersion?: string;
  /** Optional. Comma separated list of Redis server addresses, specified as host:port entries, where :port is optional. If port is not specified, it defaults to 6379. Example: "server1.example.com:6379,server2.example.com:6379" */
  servers?: string;
  /** Optional. Input only. The KeyStore password in plain text. */
  keyStorePassword?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  trustStorePasswordSecretVersion?: string;
  /** Optional. Authentication type for Redis. */
  authenticationType?:
    | "REDIS_AUTHENTICATION_TYPE_UNSPECIFIED"
    | "NONE"
    | "BASIC"
    | (string & {});
  /** Optional. The base64 encoded content of the KeyStore file. */
  keyStoreFile?: string;
  /** Optional. Security protocol for Redis. */
  securityProtocol?:
    | "REDIS_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | "MTLS"
    | (string & {});
  /** Optional. The username Oracle Goldengate uses to connect the associated system of the given technology. */
  username?: string;
  /** Optional. The base64 encoded content of the TrustStore file. */
  trustStoreFile?: string;
  /** Optional. The technology type of RedisConnection. */
  technologyType?: string;
  /** Optional. Input only. The TrustStore password in plain text. */
  trustStorePassword?: string;
}

export const GoldengateRedisConnectionProperties: Schema.Codec<GoldengateRedisConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    password: Schema.optional(Schema.String),
    redisClusterId: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    keyStorePasswordSecretVersion: Schema.optional(Schema.String),
    servers: Schema.optional(Schema.String),
    keyStorePassword: Schema.optional(Schema.String),
    trustStorePasswordSecretVersion: Schema.optional(Schema.String),
    authenticationType: Schema.optional(Schema.String),
    keyStoreFile: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    trustStoreFile: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    trustStorePassword: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateRedisConnectionProperties" });

export interface GoldengateAmazonS3ConnectionProperties {
  /** Optional. The name of the AWS region where the bucket is created. */
  region?: string;
  /** Optional. The Amazon Endpoint for S3. */
  endpoint?: string;
  /** Optional. Access key ID to access the Amazon S3 bucket. */
  accessKeyId?: string;
  /** Optional. The technology type of AmazonS3Connection. */
  technologyType?: string;
  /** Optional. Secret access key to access the Amazon S3 bucket. */
  secretAccessKeySecret?: string;
}

export const GoldengateAmazonS3ConnectionProperties: Schema.Codec<GoldengateAmazonS3ConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    accessKeyId: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    secretAccessKeySecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateAmazonS3ConnectionProperties" });

export interface GoldengateMysqlConnectionProperties {
  /** Optional. The name or address of a host. */
  host?: string;
  /** Optional. An array of name-value pair attribute entries. Used as additional parameters in connection string. */
  additionalAttributes?: ReadonlyArray<NameValuePair>;
  /** Optional. Database Certificate - The base64 encoded content of a .pem or .crt file containing the server public key (for 1 and 2-way SSL). */
  sslCaFile?: string;
  /** Optional. Client Key - The base64 encoded content of a .pem or .crt file containing the client private key (for 2-way SSL). */
  sslKeyFile?: string;
  /** Optional. The base64 encoded list of certificates revoked by the trusted certificate authorities (Trusted CA). */
  sslCrlFile?: string;
  /** Optional. The OCID of the database system being referenced. */
  dbSystemId?: string;
  /** Optional. The port of an endpoint usually specified for a connection. */
  port?: number;
  /** Optional. Input only. The password Oracle Goldengate uses to connect to MySQL in plain text. */
  password?: string;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect to MySQL. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. Client Certificate - The base64 encoded content of a .pem or .crt file containing the client public key (for 2-way SSL). */
  sslCertFile?: string;
  /** Optional. The technology type of MysqlConnection. */
  technologyType?: string;
  /** Optional. SSL modes for MySQL. */
  sslMode?:
    | "SSL_MODE_UNSPECIFIED"
    | "DISABLED"
    | "PREFERRED"
    | "REQUIRED"
    | "VERIFY_CA"
    | "VERIFY_IDENTITY"
    | (string & {});
  /** Optional. Security Type for MySQL. */
  securityProtocol?:
    | "MYSQL_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | "MTLS"
    | (string & {});
  /** Optional. The username Oracle Goldengate uses to connect the associated system of the given technology. */
  username?: string;
  /** Optional. The name of the database. */
  database?: string;
}

export const GoldengateMysqlConnectionProperties: Schema.Codec<GoldengateMysqlConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    additionalAttributes: Schema.optional(Schema.Array(NameValuePair)),
    sslCaFile: Schema.optional(Schema.String),
    sslKeyFile: Schema.optional(Schema.String),
    sslCrlFile: Schema.optional(Schema.String),
    dbSystemId: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
    sslCertFile: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    sslMode: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateMysqlConnectionProperties" });

export interface GoldengatePostgresqlConnectionProperties {
  /** Optional. The name or address of a host. */
  host?: string;
  /** Optional. An array of name-value pair attribute entries. Used as additional parameters in connection string. */
  additionalAttributes?: ReadonlyArray<NameValuePair>;
  /** Optional. The base64 encoded certificate of the trusted certificate authorities (Trusted CA) for PostgreSQL. */
  sslCaFile?: string;
  /** Optional. The base64 encoded private key of the PostgreSQL server. */
  sslKeyFile?: string;
  /** Optional. The base64 encoded list of certificates revoked by the trusted certificate authorities (Trusted CA). */
  sslCrlFile?: string;
  /** Optional. The OCID of the database system being referenced. */
  dbSystemId?: string;
  /** Optional. Input only. The password Oracle Goldengate uses for PostgreSQL connection in plain text. */
  password?: string;
  /** Optional. The port of an endpoint usually specified for a connection. */
  port?: number;
  /** Optional. Input only. The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for PostgreSQL connection. Format: projects/{project}/secrets/{secret}/versions/{version}. */
  passwordSecretVersion?: string;
  /** Optional. The base64 encoded certificate of the PostgreSQL server. */
  sslCertFile?: string;
  /** Optional. The technology type of PostgresqlConnection. */
  technologyType?: string;
  /** Optional. SSL modes for PostgreSQL. */
  sslMode?:
    | "POSTGRESQL_SSL_MODE_UNSPECIFIED"
    | "PREFER"
    | "REQUIRE"
    | "VERIFY_CA"
    | "VERIFY_FULL"
    | (string & {});
  /** Optional. Security protocol for PostgreSQL. */
  securityProtocol?:
    | "POSTGRESQL_SECURITY_PROTOCOL_UNSPECIFIED"
    | "PLAIN"
    | "TLS"
    | "MTLS"
    | (string & {});
  /** Optional. The name of the database. */
  database?: string;
  /** Optional. The username Oracle Goldengate uses to connect the associated system of the given technology. */
  username?: string;
}

export const GoldengatePostgresqlConnectionProperties: Schema.Codec<GoldengatePostgresqlConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    additionalAttributes: Schema.optional(Schema.Array(NameValuePair)),
    sslCaFile: Schema.optional(Schema.String),
    sslKeyFile: Schema.optional(Schema.String),
    sslCrlFile: Schema.optional(Schema.String),
    dbSystemId: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    passwordSecretVersion: Schema.optional(Schema.String),
    sslCertFile: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
    sslMode: Schema.optional(Schema.String),
    securityProtocol: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengatePostgresqlConnectionProperties" });

export interface GoldengateAmazonKinesisConnectionProperties {
  /** Optional. Access key ID to access the Amazon Kinesis. */
  accessKeyId?: string;
  /** Optional. The endpoint URL of the Amazon Kinesis service. e.g.: 'https://kinesis.us-east-1.amazonaws.com' If not provided, Goldengate will default to 'https://kinesis..amazonaws.com'. */
  endpoint?: string;
  /** Optional. The name of the AWS region. If not provided, Goldengate will default to 'us-west-1'. */
  awsRegion?: string;
  /** Optional. Secret access key to access the Amazon Kinesis. */
  secretAccessKeySecret?: string;
  /** Optional. The technology type of AmazonKinesisConnection. */
  technologyType?: string;
}

export const GoldengateAmazonKinesisConnectionProperties: Schema.Codec<GoldengateAmazonKinesisConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    accessKeyId: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    awsRegion: Schema.optional(Schema.String),
    secretAccessKeySecret: Schema.optional(Schema.String),
    technologyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateAmazonKinesisConnectionProperties" });

export interface GoldengateConnectionProperties {
  /** Properties for a Generic Connection. */
  genericConnectionProperties?: GoldengateGenericConnectionProperties;
  /** Properties for an Azure Synapse Analytics connection. */
  azureSynapseAnalyticsConnectionProperties?: GoldengateAzureSynapseAnalyticsConnectionProperties;
  /** Properties for a Kafka Connection. */
  kafkaConnectionProperties?: GoldengateKafkaConnectionProperties;
  /** Output only. Describes the object's current state in detail. For example, it can be used to provide actionable information for a resource in a Failed state. */
  lifecycleDetails?: string;
  /** Properties for an Elasticsearch connection. */
  elasticsearchConnectionProperties?: GoldengateElasticsearchConnectionProperties;
  /** Properties for an Iceberg connection. */
  icebergConnectionProperties?: GoldengateIcebergConnectionProperties;
  /** Properties for an Oracle Database Connection. */
  oracleConnectionProperties?: GoldengateOracleConnectionProperties;
  /** Properties for a MongoDB connection. */
  mongodbConnectionProperties?: GoldengateMongodbConnectionProperties;
  /** Properties for a Snowflake connection. */
  snowflakeConnectionProperties?: GoldengateSnowflakeConnectionProperties;
  /** Properties for a Google Cloud Storage Connection. */
  googleCloudStorageConnectionProperties?: GoldengateGoogleCloudStorageConnectionProperties;
  /** Properties for a Google BigQuery Connection. */
  googleBigQueryConnectionProperties?: GoldengateGoogleBigQueryConnectionProperties;
  /** Properties for an Oracle NoSQL connection. */
  oracleNosqlConnectionProperties?: GoldengateOracleNosqlConnectionProperties;
  /** Optional. Metadata about this specific object. */
  description?: string;
  /** Properties for a Goldengate Connection. */
  goldengateConnectionProperties?: GoldengateGoldengateConnectionProperties;
  /** Properties for an Amazon Redshift connection. */
  amazonRedshiftConnectionProperties?: GoldengateAmazonRedshiftConnectionProperties;
  /** Required. An object's Display Name. */
  displayName?: string;
  /** Output only. The Ingress IPs of the GoldengateConnection. */
  ingressIpAddresses?: ReadonlyArray<string>;
  /** Properties for a Databricks connection. */
  databricksConnectionProperties?: GoldengateDatabricksConnectionProperties;
  /** Properties for an HDFS connection. */
  hdfsConnectionProperties?: GoldengateHdfsConnectionProperties;
  /** Properties for a Google Pub/Sub connection. */
  googlePubsubConnectionProperties?: GoldengateGooglePubsubConnectionProperties;
  /** Required. The connection type. */
  connectionType?:
    | "GOLDENGATE_CONNECTION_TYPE_UNSPECIFIED"
    | "GOLDENGATE"
    | "KAFKA"
    | "KAFKA_SCHEMA_REGISTRY"
    | "MYSQL"
    | "JAVA_MESSAGE_SERVICE"
    | "MICROSOFT_SQLSERVER"
    | "OCI_OBJECT_STORAGE"
    | "ORACLE"
    | "AZURE_DATA_LAKE_STORAGE"
    | "POSTGRESQL"
    | "AZURE_SYNAPSE_ANALYTICS"
    | "SNOWFLAKE"
    | "AMAZON_S3"
    | "HDFS"
    | "ORACLE_AI_DATA_PLATFORM"
    | "ORACLE_NOSQL"
    | "MONGODB"
    | "AMAZON_KINESIS"
    | "AMAZON_REDSHIFT"
    | "DB2"
    | "REDIS"
    | "ELASTICSEARCH"
    | "GENERIC"
    | "GOOGLE_CLOUD_STORAGE"
    | "GOOGLE_BIGQUERY"
    | "DATABRICKS"
    | "GOOGLE_PUBSUB"
    | "MICROSOFT_FABRIC"
    | "ICEBERG"
    | (string & {});
  /** Output only. The lifecycle state of the connection. */
  lifecycleState?:
    | "GOLDENGATE_CONNECTION_LIFECYCLE_STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "DELETED"
    | "FAILED"
    | (string & {});
  /** Output only. The [OCID] of the connection being referenced. */
  ocid?: string;
  /** Properties for a Microsoft SQL Server connection. */
  microsoftSqlserverConnectionProperties?: GoldengateMicrosoftSqlserverConnectionProperties;
  /** Properties for a Java Message Service connection. */
  javaMessageServiceConnectionProperties?: GoldengateJavaMessageServiceConnectionProperties;
  /** Properties for an OCI Object Storage Connection. */
  ociObjectStorageConnectionProperties?: GoldengateOciObjectStorageConnectionProperties;
  /** Properties for a DB2 connection. */
  db2ConnectionProperties?: GoldengateDb2ConnectionProperties;
  /** Properties for an Oracle AI Data Platform connection. */
  oracleAiDataPlatformConnectionProperties?: GoldengateOracleAIDataPlatformConnectionProperties;
  /** Output only. The time the resource was last updated. */
  updateTime?: string;
  /** Properties for an Azure Data Lake Storage Connection. */
  azureDataLakeStorageConnectionProperties?: GoldengateAzureDataLakeStorageConnectionProperties;
  /** Properties for a Kafka Schema Registry Connection. */
  kafkaSchemaRegistryConnectionProperties?: GoldengateKafkaSchemaRegistryConnectionProperties;
  /** Properties for a Redis connection. */
  redisConnectionProperties?: GoldengateRedisConnectionProperties;
  /** Optional. The routing method for the GoldengateConnection. */
  routingMethod?:
    | "GOLDENGATE_CONNECTION_ROUTING_METHOD_UNSPECIFIED"
    | "SHARED_DEPLOYMENT_ENDPOINT"
    | "DEDICATED_ENDPOINT"
    | (string & {});
  /** Properties for an Amazon S3 connection. */
  amazonS3ConnectionProperties?: GoldengateAmazonS3ConnectionProperties;
  /** Properties for a Microsoft Fabric connection. */
  microsoftFabricConnectionProperties?: GoldengateMicrosoftFabricConnectionProperties;
  /** Properties for a Mysql Connection. */
  mysqlConnectionProperties?: GoldengateMysqlConnectionProperties;
  /** Properties for a PostgreSQL connection. */
  postgresqlConnectionProperties?: GoldengatePostgresqlConnectionProperties;
  /** Properties for an Amazon Kinesis connection. */
  amazonKinesisConnectionProperties?: GoldengateAmazonKinesisConnectionProperties;
}

export const GoldengateConnectionProperties: Schema.Codec<GoldengateConnectionProperties> =
  /*@__PURE__*/ Schema.Struct({
    genericConnectionProperties: Schema.optional(
      GoldengateGenericConnectionProperties,
    ),
    azureSynapseAnalyticsConnectionProperties: Schema.optional(
      GoldengateAzureSynapseAnalyticsConnectionProperties,
    ),
    kafkaConnectionProperties: Schema.optional(
      GoldengateKafkaConnectionProperties,
    ),
    lifecycleDetails: Schema.optional(Schema.String),
    elasticsearchConnectionProperties: Schema.optional(
      GoldengateElasticsearchConnectionProperties,
    ),
    icebergConnectionProperties: Schema.optional(
      GoldengateIcebergConnectionProperties,
    ),
    oracleConnectionProperties: Schema.optional(
      GoldengateOracleConnectionProperties,
    ),
    mongodbConnectionProperties: Schema.optional(
      GoldengateMongodbConnectionProperties,
    ),
    snowflakeConnectionProperties: Schema.optional(
      GoldengateSnowflakeConnectionProperties,
    ),
    googleCloudStorageConnectionProperties: Schema.optional(
      GoldengateGoogleCloudStorageConnectionProperties,
    ),
    googleBigQueryConnectionProperties: Schema.optional(
      GoldengateGoogleBigQueryConnectionProperties,
    ),
    oracleNosqlConnectionProperties: Schema.optional(
      GoldengateOracleNosqlConnectionProperties,
    ),
    description: Schema.optional(Schema.String),
    goldengateConnectionProperties: Schema.optional(
      GoldengateGoldengateConnectionProperties,
    ),
    amazonRedshiftConnectionProperties: Schema.optional(
      GoldengateAmazonRedshiftConnectionProperties,
    ),
    displayName: Schema.optional(Schema.String),
    ingressIpAddresses: Schema.optional(Schema.Array(Schema.String)),
    databricksConnectionProperties: Schema.optional(
      GoldengateDatabricksConnectionProperties,
    ),
    hdfsConnectionProperties: Schema.optional(
      GoldengateHdfsConnectionProperties,
    ),
    googlePubsubConnectionProperties: Schema.optional(
      GoldengateGooglePubsubConnectionProperties,
    ),
    connectionType: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    microsoftSqlserverConnectionProperties: Schema.optional(
      GoldengateMicrosoftSqlserverConnectionProperties,
    ),
    javaMessageServiceConnectionProperties: Schema.optional(
      GoldengateJavaMessageServiceConnectionProperties,
    ),
    ociObjectStorageConnectionProperties: Schema.optional(
      GoldengateOciObjectStorageConnectionProperties,
    ),
    db2ConnectionProperties: Schema.optional(GoldengateDb2ConnectionProperties),
    oracleAiDataPlatformConnectionProperties: Schema.optional(
      GoldengateOracleAIDataPlatformConnectionProperties,
    ),
    updateTime: Schema.optional(Schema.String),
    azureDataLakeStorageConnectionProperties: Schema.optional(
      GoldengateAzureDataLakeStorageConnectionProperties,
    ),
    kafkaSchemaRegistryConnectionProperties: Schema.optional(
      GoldengateKafkaSchemaRegistryConnectionProperties,
    ),
    redisConnectionProperties: Schema.optional(
      GoldengateRedisConnectionProperties,
    ),
    routingMethod: Schema.optional(Schema.String),
    amazonS3ConnectionProperties: Schema.optional(
      GoldengateAmazonS3ConnectionProperties,
    ),
    microsoftFabricConnectionProperties: Schema.optional(
      GoldengateMicrosoftFabricConnectionProperties,
    ),
    mysqlConnectionProperties: Schema.optional(
      GoldengateMysqlConnectionProperties,
    ),
    postgresqlConnectionProperties: Schema.optional(
      GoldengatePostgresqlConnectionProperties,
    ),
    amazonKinesisConnectionProperties: Schema.optional(
      GoldengateAmazonKinesisConnectionProperties,
    ),
  }).annotate({ identifier: "GoldengateConnectionProperties" });

export interface GoldengateConnection {
  /** Optional. The GCP Oracle zone where Oracle GoldengateConnection is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Output only. The ID of the subscription entitlement associated with the GoldengateConnection. */
  entitlementId?: string;
  /** Required. The properties of the GoldengateConnection. */
  properties?: GoldengateConnectionProperties;
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
  /** Optional. The name of the OdbNetwork associated with the GoldengateConnection. The format is projects/{project}/locations/{location}/odbNetworks/{odb_network}. It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet. */
  odbNetwork?: string;
  /** Optional. The labels or tags associated with the GoldengateConnection. */
  labels?: Record<string, string>;
  /** Identifier. The name of the GoldengateConnection resource in the following format: projects/{project}/locations/{region}/goldengateConnections/{goldengate_connection} */
  name?: string;
  /** Optional. The name of the OdbSubnet associated with the GoldengateConnection for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Output only. The date and time that the GoldengateConnection was created. */
  createTime?: string;
}

export const GoldengateConnection: Schema.Codec<GoldengateConnection> =
  /*@__PURE__*/ Schema.Struct({
    gcpOracleZone: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    properties: Schema.optional(GoldengateConnectionProperties),
    ociUrl: Schema.optional(Schema.String),
    odbNetwork: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    odbSubnet: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoldengateConnection" });

export interface ListGoldengateConnectionsResponse {
  /** The list of GoldengateConnections. */
  goldengateConnections?: ReadonlyArray<GoldengateConnection>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Optional. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGoldengateConnectionsResponse: Schema.Codec<ListGoldengateConnectionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    goldengateConnections: Schema.optional(Schema.Array(GoldengateConnection)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGoldengateConnectionsResponse" });

export interface RemoveVirtualMachineExadbVmClusterRequest {
  /** Required. The list of host names of db nodes to be removed from the ExadbVmCluster. */
  hostnames?: ReadonlyArray<string>;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RemoveVirtualMachineExadbVmClusterRequest: Schema.Codec<RemoveVirtualMachineExadbVmClusterRequest> =
  /*@__PURE__*/ Schema.Struct({
    hostnames: Schema.optional(Schema.Array(Schema.String)),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveVirtualMachineExadbVmClusterRequest" });

export interface ListGiVersionsResponse {
  /** The list of Oracle Grid Infrastructure (GI) versions. */
  giVersions?: ReadonlyArray<GiVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListGiVersionsResponse: Schema.Codec<ListGiVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    giVersions: Schema.optional(Schema.Array(GiVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGiVersionsResponse" });

export interface StartGoldengateDeploymentRequest {}

export const StartGoldengateDeploymentRequest: Schema.Codec<StartGoldengateDeploymentRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartGoldengateDeploymentRequest",
  });

export interface OdbSubnet {
  /** Optional. Labels or tags associated with the resource. */
  labels?: Record<string, string>;
  /** Identifier. The name of the OdbSubnet resource in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  name?: string;
  /** Required. The CIDR range of the subnet. */
  cidrRange?: string;
  /** Output only. The date and time that the OdbNetwork was created. */
  createTime?: string;
  /** Required. Purpose of the subnet. */
  purpose?:
    | "PURPOSE_UNSPECIFIED"
    | "CLIENT_SUBNET"
    | "BACKUP_SUBNET"
    | (string & {});
  /** Output only. State of the ODB Subnet. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "TERMINATING"
    | "FAILED"
    | (string & {});
}

export const OdbSubnet: Schema.Codec<OdbSubnet> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    cidrRange: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    purpose: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "OdbSubnet" });

export interface ListDatabaseCharacterSetsResponse {
  /** The list of DatabaseCharacterSets. */
  databaseCharacterSets?: ReadonlyArray<DatabaseCharacterSet>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDatabaseCharacterSetsResponse: Schema.Codec<ListDatabaseCharacterSetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    databaseCharacterSets: Schema.optional(Schema.Array(DatabaseCharacterSet)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDatabaseCharacterSetsResponse" });

export interface CloudAccountDetails {
  /** Output only. OCI account home region. */
  cloudAccountHomeRegion?: string;
  /** Output only. URL to create a new account and link. */
  accountCreationUri?: string;
  /** Output only. OCI account name. */
  cloudAccount?: string;
  /** Output only. URL to link an existing account. */
  linkExistingAccountUri?: string;
}

export const CloudAccountDetails: Schema.Codec<CloudAccountDetails> =
  /*@__PURE__*/ Schema.Struct({
    cloudAccountHomeRegion: Schema.optional(Schema.String),
    accountCreationUri: Schema.optional(Schema.String),
    cloudAccount: Schema.optional(Schema.String),
    linkExistingAccountUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudAccountDetails" });

export interface DbSystemShape {
  /** Optional. Maximum number of database servers. */
  maxNodeCount?: number;
  /** Optional. Minimum number of storage servers. */
  minStorageCount?: number;
  /** Optional. Number of cores per node. */
  availableCoreCountPerNode?: number;
  /** Optional. Minimum number of database servers. */
  minNodeCount?: number;
  /** Identifier. The name of the Database System Shape resource with the format: projects/{project}/locations/{region}/dbSystemShapes/{db_system_shape} */
  name?: string;
  /** Optional. shape */
  shape?: string;
  /** Optional. Memory per database server node in gigabytes. */
  availableMemoryPerNodeGb?: number;
  /** Optional. Maximum number of storage servers. */
  maxStorageCount?: number;
  /** Optional. Minimum node storage per database server in gigabytes. */
  minDbNodeStoragePerNodeGb?: number;
  /** Optional. Storage per storage server in terabytes. */
  availableDataStorageTb?: number;
  /** Optional. Minimum memory per node in gigabytes. */
  minMemoryPerNodeGb?: number;
  /** Optional. Minimum core count per node. */
  minCoreCountPerNode?: number;
}

export const DbSystemShape: Schema.Codec<DbSystemShape> =
  /*@__PURE__*/ Schema.Struct({
    maxNodeCount: Schema.optional(Schema.Number),
    minStorageCount: Schema.optional(Schema.Number),
    availableCoreCountPerNode: Schema.optional(Schema.Number),
    minNodeCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    shape: Schema.optional(Schema.String),
    availableMemoryPerNodeGb: Schema.optional(Schema.Number),
    maxStorageCount: Schema.optional(Schema.Number),
    minDbNodeStoragePerNodeGb: Schema.optional(Schema.Number),
    availableDataStorageTb: Schema.optional(Schema.Number),
    minMemoryPerNodeGb: Schema.optional(Schema.Number),
    minCoreCountPerNode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DbSystemShape" });

export interface AutonomousDatabaseBackupProperties {
  /** Optional. The wallet name for Oracle Key Vault. */
  keyStoreWallet?: string;
  /** Output only. The quantity of data in the database, in terabytes. */
  databaseSizeTb?: number;
  /** Output only. A valid Oracle Database version for Autonomous Database. */
  dbVersion?: string;
  /** Output only. The date and time the backup started. */
  startTime?: string;
  /** Output only. The type of the backup. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "INCREMENTAL"
    | "FULL"
    | "LONG_TERM"
    | (string & {});
  /** Optional. The OCID of the key store of Oracle Vault. */
  keyStoreId?: string;
  /** Output only. The backup size in terabytes. */
  sizeTb?: number;
  /** Optional. The OCID of the vault. */
  vaultId?: string;
  /** Output only. The OCID of the compartment. */
  compartmentId?: string;
  /** Optional. The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous Database Serverless does not use key versions, hence is not applicable for Autonomous Database Serverless instances. */
  kmsKeyVersionId?: string;
  /** Output only. Timestamp until when the backup will be available. */
  availableTillTime?: string;
  /** Optional. The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations. */
  kmsKeyId?: string;
  /** Output only. Additional information about the current lifecycle state. */
  lifecycleDetails?: string;
  /** Output only. The lifecycle state of the backup. */
  lifecycleState?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "DELETED"
    | "FAILED"
    | "UPDATING"
    | (string & {});
  /** Output only. OCID of the Autonomous Database backup. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle */
  ocid?: string;
  /** Output only. Indicates if the backup can be used to restore the Autonomous Database. */
  isRestorable?: boolean;
  /** Output only. Indicates if the backup is automatic or user initiated. */
  isAutomaticBackup?: boolean;
  /** Optional. Retention period in days for the backup. */
  retentionPeriodDays?: number;
  /** Output only. Indicates if the backup is long term backup. */
  isLongTermBackup?: boolean;
  /** Output only. The date and time the backup completed. */
  endTime?: string;
}

export const AutonomousDatabaseBackupProperties: Schema.Codec<AutonomousDatabaseBackupProperties> =
  /*@__PURE__*/ Schema.Struct({
    keyStoreWallet: Schema.optional(Schema.String),
    databaseSizeTb: Schema.optional(Schema.Number),
    dbVersion: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    keyStoreId: Schema.optional(Schema.String),
    sizeTb: Schema.optional(Schema.Number),
    vaultId: Schema.optional(Schema.String),
    compartmentId: Schema.optional(Schema.String),
    kmsKeyVersionId: Schema.optional(Schema.String),
    availableTillTime: Schema.optional(Schema.String),
    kmsKeyId: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    isRestorable: Schema.optional(Schema.Boolean),
    isAutomaticBackup: Schema.optional(Schema.Boolean),
    retentionPeriodDays: Schema.optional(Schema.Number),
    isLongTermBackup: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseBackupProperties" });

export interface AutonomousDatabaseBackup {
  /** Required. The name of the Autonomous Database resource for which the backup is being created. Format: projects/{project}/locations/{region}/autonomousDatabases/{autonomous_database} */
  autonomousDatabase?: string;
  /** Optional. Various properties of the backup. */
  properties?: AutonomousDatabaseBackupProperties;
  /** Identifier. The name of the Autonomous Database Backup resource with the format: projects/{project}/locations/{region}/autonomousDatabaseBackups/{autonomous_database_backup} */
  name?: string;
  /** Optional. User friendly name for the Backup. The name does not have to be unique. */
  displayName?: string;
  /** Optional. labels or tags associated with the resource. */
  labels?: Record<string, string>;
}

export const AutonomousDatabaseBackup: Schema.Codec<AutonomousDatabaseBackup> =
  /*@__PURE__*/ Schema.Struct({
    autonomousDatabase: Schema.optional(Schema.String),
    properties: Schema.optional(AutonomousDatabaseBackupProperties),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AutonomousDatabaseBackup" });

export interface ListAutonomousDatabaseBackupsResponse {
  /** The list of Autonomous Database Backups. */
  autonomousDatabaseBackups?: ReadonlyArray<AutonomousDatabaseBackup>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAutonomousDatabaseBackupsResponse: Schema.Codec<ListAutonomousDatabaseBackupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    autonomousDatabaseBackups: Schema.optional(
      Schema.Array(AutonomousDatabaseBackup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutonomousDatabaseBackupsResponse" });

export interface DbSystemInitialStorageSizeProperties {
  /** Output only. List of storage disk details. */
  storageSizeDetails?: ReadonlyArray<StorageSizeDetails>;
  /** Output only. List of storage disk details available for launches from backup. */
  launchFromBackupStorageSizeDetails?: ReadonlyArray<StorageSizeDetails>;
  /** Output only. The storage option used in DB system. */
  storageManagement?:
    | "STORAGE_MANAGEMENT_UNSPECIFIED"
    | "ASM"
    | "LVM"
    | (string & {});
  /** Output only. VM shape platform type */
  shapeType?: "SHAPE_TYPE_UNSPECIFIED" | "STANDARD_X86" | (string & {});
}

export const DbSystemInitialStorageSizeProperties: Schema.Codec<DbSystemInitialStorageSizeProperties> =
  /*@__PURE__*/ Schema.Struct({
    storageSizeDetails: Schema.optional(Schema.Array(StorageSizeDetails)),
    launchFromBackupStorageSizeDetails: Schema.optional(
      Schema.Array(StorageSizeDetails),
    ),
    storageManagement: Schema.optional(Schema.String),
    shapeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbSystemInitialStorageSizeProperties" });

export interface DbSystemInitialStorageSize {
  /** Output only. The name of the resource. */
  name?: string;
  /** Output only. The properties of the DbSystem initial storage size summary. */
  properties?: DbSystemInitialStorageSizeProperties;
}

export const DbSystemInitialStorageSize: Schema.Codec<DbSystemInitialStorageSize> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(DbSystemInitialStorageSizeProperties),
  }).annotate({ identifier: "DbSystemInitialStorageSize" });

export interface ListDbSystemInitialStorageSizesResponse {
  /** The list of DbSystemInitialStorageSizes. */
  dbSystemInitialStorageSizes?: ReadonlyArray<DbSystemInitialStorageSize>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDbSystemInitialStorageSizesResponse: Schema.Codec<ListDbSystemInitialStorageSizesResponse> =
  /*@__PURE__*/ Schema.Struct({
    dbSystemInitialStorageSizes: Schema.optional(
      Schema.Array(DbSystemInitialStorageSize),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbSystemInitialStorageSizesResponse" });

export interface ExascaleDbStorageDetails {
  /** Output only. The available storage capacity for the ExascaleDbStorageVault, in gigabytes (GB). */
  availableSizeGbs?: number;
  /** Required. The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). */
  totalSizeGbs?: number;
}

export const ExascaleDbStorageDetails: Schema.Codec<ExascaleDbStorageDetails> =
  /*@__PURE__*/ Schema.Struct({
    availableSizeGbs: Schema.optional(Schema.Number),
    totalSizeGbs: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExascaleDbStorageDetails" });

export interface ExascaleDbStorageVaultProperties {
  /** Output only. The number of VM clusters associated with the ExascaleDbStorageVault. */
  vmClusterCount?: number;
  /** Output only. The state of the ExascaleDbStorageVault. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | (string & {});
  /** Optional. The size of additional flash cache in percentage of high capacity database storage. */
  additionalFlashCachePercent?: number;
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUri?: string;
  /** Output only. The shape attributes available for the VM clusters to be attached to the ExascaleDbStorageVault. */
  availableShapeAttributes?: ReadonlyArray<
    | "SHAPE_ATTRIBUTE_UNSPECIFIED"
    | "SMART_STORAGE"
    | "BLOCK_STORAGE"
    | (string & {})
  >;
  /** Output only. The time zone of the ExascaleDbStorageVault. */
  timeZone?: TimeZone;
  /** Required. The storage details of the ExascaleDbStorageVault. */
  exascaleDbStorageDetails?: ExascaleDbStorageDetails;
  /** Output only. The shape attributes of the VM clusters attached to the ExascaleDbStorageVault. */
  attachedShapeAttributes?: ReadonlyArray<
    | "SHAPE_ATTRIBUTE_UNSPECIFIED"
    | "SMART_STORAGE"
    | "BLOCK_STORAGE"
    | (string & {})
  >;
  /** Output only. The list of VM cluster OCIDs associated with the ExascaleDbStorageVault. */
  vmClusterIds?: ReadonlyArray<string>;
  /** Output only. The OCID for the ExascaleDbStorageVault. */
  ocid?: string;
  /** Optional. The description of the ExascaleDbStorageVault. */
  description?: string;
}

export const ExascaleDbStorageVaultProperties: Schema.Codec<ExascaleDbStorageVaultProperties> =
  /*@__PURE__*/ Schema.Struct({
    vmClusterCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    additionalFlashCachePercent: Schema.optional(Schema.Number),
    ociUri: Schema.optional(Schema.String),
    availableShapeAttributes: Schema.optional(Schema.Array(Schema.String)),
    timeZone: Schema.optional(TimeZone),
    exascaleDbStorageDetails: Schema.optional(ExascaleDbStorageDetails),
    attachedShapeAttributes: Schema.optional(Schema.Array(Schema.String)),
    vmClusterIds: Schema.optional(Schema.Array(Schema.String)),
    ocid: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExascaleDbStorageVaultProperties" });

export interface ExascaleDbStorageVault {
  /** Optional. The labels or tags associated with the ExascaleDbStorageVault. */
  labels?: Record<string, string>;
  /** Identifier. The resource name of the ExascaleDbStorageVault. Format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault} */
  name?: string;
  /** Required. The display name for the ExascaleDbStorageVault. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters. */
  displayName?: string;
  /** Optional. The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Optional. The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure} */
  exadataInfrastructure?: string;
  /** Required. The properties of the ExascaleDbStorageVault. */
  properties?: ExascaleDbStorageVaultProperties;
  /** Output only. The date and time when the ExascaleDbStorageVault was created. */
  createTime?: string;
  /** Output only. The ID of the subscription entitlement associated with the ExascaleDbStorageVault. */
  entitlementId?: string;
}

export const ExascaleDbStorageVault: Schema.Codec<ExascaleDbStorageVault> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    exadataInfrastructure: Schema.optional(Schema.String),
    properties: Schema.optional(ExascaleDbStorageVaultProperties),
    createTime: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExascaleDbStorageVault" });

export interface SourceConfig {
  /** Optional. The name of the primary Autonomous Database that is used to create a Peer Autonomous Database from a source. */
  autonomousDatabase?: string;
  /** Optional. This field specifies if the replication of automatic backups is enabled when creating a Data Guard. */
  automaticBackupsReplicationEnabled?: boolean;
}

export const SourceConfig: Schema.Codec<SourceConfig> =
  /*@__PURE__*/ Schema.Struct({
    autonomousDatabase: Schema.optional(Schema.String),
    automaticBackupsReplicationEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SourceConfig" });

export interface RestoreAutonomousDatabaseRequest {
  /** Required. The time and date to restore the database to. */
  restoreTime?: string;
}

export const RestoreAutonomousDatabaseRequest: Schema.Codec<RestoreAutonomousDatabaseRequest> =
  /*@__PURE__*/ Schema.Struct({
    restoreTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestoreAutonomousDatabaseRequest" });

export interface ListOdbSubnetsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The list of ODB Subnets. */
  odbSubnets?: ReadonlyArray<OdbSubnet>;
}

export const ListOdbSubnetsResponse: Schema.Codec<ListOdbSubnetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    odbSubnets: Schema.optional(Schema.Array(OdbSubnet)),
  }).annotate({ identifier: "ListOdbSubnetsResponse" });

export interface MaintenanceWindow {
  /** Optional. The maintenance window scheduling preference. */
  preference?:
    | "MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED"
    | "CUSTOM_PREFERENCE"
    | "NO_PREFERENCE"
    | (string & {});
  /** Optional. The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are: 0 - represents time slot 0:00 - 3:59 UTC 4 - represents time slot 4:00 - 7:59 UTC 8 - represents time slot 8:00 - 11:59 UTC 12 - represents time slot 12:00 - 15:59 UTC 16 - represents time slot 16:00 - 19:59 UTC 20 - represents time slot 20:00 - 23:59 UTC */
  hoursOfDay?: ReadonlyArray<number>;
  /** Optional. Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive). */
  customActionTimeoutMins?: number;
  /** Optional. Months during the year when maintenance should be performed. */
  months?: ReadonlyArray<
    | "MONTH_UNSPECIFIED"
    | "JANUARY"
    | "FEBRUARY"
    | "MARCH"
    | "APRIL"
    | "MAY"
    | "JUNE"
    | "JULY"
    | "AUGUST"
    | "SEPTEMBER"
    | "OCTOBER"
    | "NOVEMBER"
    | "DECEMBER"
    | (string & {})
  >;
  /** Optional. Cloud CloudExadataInfrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING. */
  patchingMode?:
    | "PATCHING_MODE_UNSPECIFIED"
    | "ROLLING"
    | "NON_ROLLING"
    | (string & {});
  /** Optional. Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4. */
  leadTimeWeek?: number;
  /** Optional. Days during the week when maintenance should be performed. */
  daysOfWeek?: ReadonlyArray<
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {})
  >;
  /** Optional. If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. */
  isCustomActionTimeoutEnabled?: boolean;
  /** Optional. Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week. */
  weeksOfMonth?: ReadonlyArray<number>;
}

export const MaintenanceWindow: Schema.Codec<MaintenanceWindow> =
  /*@__PURE__*/ Schema.Struct({
    preference: Schema.optional(Schema.String),
    hoursOfDay: Schema.optional(Schema.Array(Schema.Number)),
    customActionTimeoutMins: Schema.optional(Schema.Number),
    months: Schema.optional(Schema.Array(Schema.String)),
    patchingMode: Schema.optional(Schema.String),
    leadTimeWeek: Schema.optional(Schema.Number),
    daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
    isCustomActionTimeoutEnabled: Schema.optional(Schema.Boolean),
    weeksOfMonth: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "MaintenanceWindow" });

export interface AutonomousDatabase {
  /** Optional. The properties of the Autonomous Database. */
  properties?: AutonomousDatabaseProperties;
  /** Output only. The peer Autonomous Database names of the given Autonomous Database. */
  peerAutonomousDatabases?: ReadonlyArray<string>;
  /** Optional. Immutable. The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters. */
  database?: string;
  /** Optional. Immutable. The name of the OdbSubnet associated with the Autonomous Database. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Optional. Immutable. The name of the OdbNetwork associated with the Autonomous Database. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet. */
  odbNetwork?: string;
  /** Optional. Immutable. The display name for the Autonomous Database. The name does not have to be unique within your project. */
  displayName?: string;
  /** Optional. Immutable. The subnet CIDR range for the Autonomous Database. */
  cidr?: string;
  /** Output only. The ID of the subscription entitlement associated with the Autonomous Database. */
  entitlementId?: string;
  /** Output only. List of supported GCP region to clone the Autonomous Database for disaster recovery. Format: `project/{project}/locations/{location}`. */
  disasterRecoverySupportedLocations?: ReadonlyArray<string>;
  /** Optional. Immutable. The name of the VPC network used by the Autonomous Database in the following format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Output only. The date and time that the Autonomous Database was created. */
  createTime?: string;
  /** Optional. Immutable. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPassword?: string;
  /** Optional. Immutable. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPasswordSecretVersion?: string;
  /** Optional. The labels or tags associated with the Autonomous Database. */
  labels?: Record<string, string>;
  /** Identifier. The name of the Autonomous Database resource in the following format: projects/{project}/locations/{region}/autonomousDatabases/{autonomous_database} */
  name?: string;
  /** Optional. Immutable. The source Autonomous Database configuration for the standby Autonomous Database. The source Autonomous Database is configured while creating the Peer Autonomous Database and can't be updated after creation. */
  sourceConfig?: SourceConfig;
}

export const AutonomousDatabase: Schema.Codec<AutonomousDatabase> =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(AutonomousDatabaseProperties),
    peerAutonomousDatabases: Schema.optional(Schema.Array(Schema.String)),
    database: Schema.optional(Schema.String),
    odbSubnet: Schema.optional(Schema.String),
    odbNetwork: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    cidr: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    disasterRecoverySupportedLocations: Schema.optional(
      Schema.Array(Schema.String),
    ),
    network: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    adminPassword: Schema.optional(Schema.String),
    adminPasswordSecretVersion: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    sourceConfig: Schema.optional(SourceConfig),
  }).annotate({ identifier: "AutonomousDatabase" });

export interface PluggableDatabase {
  /** Identifier. The name of the PluggableDatabase resource in the following format: projects/{project}/locations/{region}/pluggableDatabases/{pluggable_database} */
  name?: string;
  /** Optional. The properties of the PluggableDatabase. */
  properties?: PluggableDatabaseProperties;
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
  /** Output only. The date and time that the PluggableDatabase was created. */
  createTime?: string;
}

export const PluggableDatabase: Schema.Codec<PluggableDatabase> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(PluggableDatabaseProperties),
    ociUrl: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PluggableDatabase" });

export interface ListPluggableDatabasesResponse {
  /** The list of PluggableDatabases. */
  pluggableDatabases?: ReadonlyArray<PluggableDatabase>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListPluggableDatabasesResponse: Schema.Codec<ListPluggableDatabasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    pluggableDatabases: Schema.optional(Schema.Array(PluggableDatabase)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPluggableDatabasesResponse" });

export interface GenerateAutonomousDatabaseWalletResponse {
  /** Output only. The base64 encoded wallet files. */
  archiveContent?: string;
}

export const GenerateAutonomousDatabaseWalletResponse: Schema.Codec<GenerateAutonomousDatabaseWalletResponse> =
  /*@__PURE__*/ Schema.Struct({
    archiveContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAutonomousDatabaseWalletResponse" });

export interface LocationMetadata {
  /** Output only. Google Cloud Platform Oracle zones in a location. */
  gcpOracleZones?: ReadonlyArray<string>;
}

export const LocationMetadata: Schema.Codec<LocationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    gcpOracleZones: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LocationMetadata" });

export interface Entitlement {
  /** Details of the OCI Cloud Account. */
  cloudAccountDetails?: CloudAccountDetails;
  /** Output only. Google Cloud Marketplace order ID (aka entitlement ID) */
  entitlementId?: string;
  /** Output only. Entitlement State. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACCOUNT_NOT_LINKED"
    | "ACCOUNT_NOT_ACTIVE"
    | "ACTIVE"
    | "ACCOUNT_SUSPENDED"
    | "NOT_APPROVED_IN_PRIVATE_MARKETPLACE"
    | (string & {});
  /** Identifier. The name of the Entitlement resource with the format: projects/{project}/locations/{region}/entitlements/{entitlement} */
  name?: string;
}

export const Entitlement: Schema.Codec<Entitlement> =
  /*@__PURE__*/ Schema.Struct({
    cloudAccountDetails: Schema.optional(CloudAccountDetails),
    entitlementId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entitlement" });

export interface ListEntitlementsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of Entitlements */
  entitlements?: ReadonlyArray<Entitlement>;
}

export const ListEntitlementsResponse: Schema.Codec<ListEntitlementsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    entitlements: Schema.optional(Schema.Array(Entitlement)),
  }).annotate({ identifier: "ListEntitlementsResponse" });

export interface CloudExadataInfrastructureProperties {
  /** Output only. The local node storage allocated in GBs. */
  dbNodeStorageSizeGb?: number;
  /** Output only. The time when the next maintenance run will occur. */
  nextMaintenanceRunTime?: string;
  /** Output only. The total number of CPU cores available. */
  maxCpuCount?: number;
  /** Output only. The total local node storage available in GBs. */
  maxDbNodeStorageSizeGb?: number;
  /** Optional. Maintenance window for repair. */
  maintenanceWindow?: MaintenanceWindow;
  /** Output only. The software version of the database servers (dom0) in the Exadata Infrastructure. */
  dbServerVersion?: string;
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUrl?: string;
  /** Output only. The OCID of the next maintenance run. */
  nextMaintenanceRunId?: string;
  /** Output only. The requested number of additional storage servers activated for the Exadata Infrastructure. */
  activatedStorageCount?: number;
  /** Optional. The number of compute servers for the Exadata Infrastructure. */
  computeCount?: number;
  /** Output only. The monthly software version of the database servers (dom0) in the Exadata Infrastructure. Example: 20.1.15 */
  monthlyDbServerVersion?: string;
  /** Output only. The requested number of additional storage servers for the Exadata Infrastructure. */
  additionalStorageCount?: number;
  /** Output only. The software version of the storage servers (cells) in the Exadata Infrastructure. */
  storageServerVersion?: string;
  /** Output only. The Exascale configuration for the Exadata Infrastructure. */
  exascaleConfig?: ExascaleConfig;
  /** Optional. The number of Cloud Exadata storage servers for the Exadata Infrastructure. */
  storageCount?: number;
  /** Required. The shape of the Exadata Infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance. */
  shape?: string;
  /** Output only. The total available DATA disk group size. */
  maxDataStorageTb?: number;
  /** Output only. The available storage can be allocated to the Exadata Infrastructure resource, in gigabytes (GB). */
  availableStorageSizeGb?: number;
  /** Output only. The total memory available in GBs. */
  maxMemoryGb?: number;
  /** Output only. Size, in terabytes, of the DATA disk group. */
  dataStorageSizeTb?: number;
  /** Optional. The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). */
  totalStorageSizeGb?: number;
  /** Output only. OCID of created infra. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle */
  ocid?: string;
  /** Output only. The current lifecycle state of the Exadata Infrastructure. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MAINTENANCE_IN_PROGRESS"
    | (string & {});
  /** Output only. The database server type of the Exadata Infrastructure. */
  databaseServerType?: string;
  /** Optional. The list of customer contacts. */
  customerContacts?: ReadonlyArray<CustomerContact>;
  /** Output only. The storage server type of the Exadata Infrastructure. */
  storageServerType?: string;
  /** Output only. The memory allocated in GBs. */
  memorySizeGb?: number;
  /** Output only. The monthly software version of the storage servers (cells) in the Exadata Infrastructure. Example: 20.1.15 */
  monthlyStorageServerVersion?: string;
  /** Output only. The time when the next security maintenance run will occur. */
  nextSecurityMaintenanceRunTime?: string;
  /** Output only. The number of enabled CPU cores. */
  cpuCount?: number;
  /** Output only. The compute model of the Exadata Infrastructure. */
  computeModel?:
    | "COMPUTE_MODEL_UNSPECIFIED"
    | "COMPUTE_MODEL_ECPU"
    | "COMPUTE_MODEL_OCPU"
    | (string & {});
}

export const CloudExadataInfrastructureProperties: Schema.Codec<CloudExadataInfrastructureProperties> =
  /*@__PURE__*/ Schema.Struct({
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
    nextMaintenanceRunTime: Schema.optional(Schema.String),
    maxCpuCount: Schema.optional(Schema.Number),
    maxDbNodeStorageSizeGb: Schema.optional(Schema.Number),
    maintenanceWindow: Schema.optional(MaintenanceWindow),
    dbServerVersion: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
    nextMaintenanceRunId: Schema.optional(Schema.String),
    activatedStorageCount: Schema.optional(Schema.Number),
    computeCount: Schema.optional(Schema.Number),
    monthlyDbServerVersion: Schema.optional(Schema.String),
    additionalStorageCount: Schema.optional(Schema.Number),
    storageServerVersion: Schema.optional(Schema.String),
    exascaleConfig: Schema.optional(ExascaleConfig),
    storageCount: Schema.optional(Schema.Number),
    shape: Schema.optional(Schema.String),
    maxDataStorageTb: Schema.optional(Schema.Number),
    availableStorageSizeGb: Schema.optional(Schema.Number),
    maxMemoryGb: Schema.optional(Schema.Number),
    dataStorageSizeTb: Schema.optional(Schema.Number),
    totalStorageSizeGb: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    databaseServerType: Schema.optional(Schema.String),
    customerContacts: Schema.optional(Schema.Array(CustomerContact)),
    storageServerType: Schema.optional(Schema.String),
    memorySizeGb: Schema.optional(Schema.Number),
    monthlyStorageServerVersion: Schema.optional(Schema.String),
    nextSecurityMaintenanceRunTime: Schema.optional(Schema.String),
    cpuCount: Schema.optional(Schema.Number),
    computeModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudExadataInfrastructureProperties" });

export interface CloudExadataInfrastructure {
  /** Output only. Entitlement ID of the private offer against which this infrastructure resource is provisioned. */
  entitlementId?: string;
  /** Output only. The date and time that the Exadata Infrastructure was created. */
  createTime?: string;
  /** Optional. Various properties of the infra. */
  properties?: CloudExadataInfrastructureProperties;
  /** Optional. Labels or tags associated with the resource. */
  labels?: Record<string, string>;
  /** Identifier. The name of the Exadata Infrastructure resource with the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_exadata_infrastructure} */
  name?: string;
  /** Optional. User friendly name for this resource. */
  displayName?: string;
  /** Optional. The GCP Oracle zone where Oracle Exadata Infrastructure is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
}

export const CloudExadataInfrastructure: Schema.Codec<CloudExadataInfrastructure> =
  /*@__PURE__*/ Schema.Struct({
    entitlementId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    properties: Schema.optional(CloudExadataInfrastructureProperties),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudExadataInfrastructure" });

export interface GenerateAutonomousDatabaseWalletRequest {
  /** Optional. True when requesting regional connection strings in PDB connect info, applicable to cross-region Data Guard only. */
  isRegional?: boolean;
  /** Optional. The type of wallet generation for the Autonomous Database. The default value is SINGLE. */
  type?: "GENERATE_TYPE_UNSPECIFIED" | "ALL" | "SINGLE" | (string & {});
  /** Required. The password used to encrypt the keys inside the wallet. The password must be a minimum of 8 characters. */
  password?: string;
}

export const GenerateAutonomousDatabaseWalletRequest: Schema.Codec<GenerateAutonomousDatabaseWalletRequest> =
  /*@__PURE__*/ Schema.Struct({
    isRegional: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAutonomousDatabaseWalletRequest" });

export interface ListCloudExadataInfrastructuresResponse {
  /** The list of Exadata Infrastructures. */
  cloudExadataInfrastructures?: ReadonlyArray<CloudExadataInfrastructure>;
  /** A token for fetching next page of response. */
  nextPageToken?: string;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCloudExadataInfrastructuresResponse: Schema.Codec<ListCloudExadataInfrastructuresResponse> =
  /*@__PURE__*/ Schema.Struct({
    cloudExadataInfrastructures: Schema.optional(
      Schema.Array(CloudExadataInfrastructure),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCloudExadataInfrastructuresResponse" });

export interface TestGoldengateConnectionAssignmentRequest {
  /** Optional. The type of the test of the assigned connection. The only type actually supported is DEFAULT. */
  type?: "TEST_TYPE_UNSPECIFIED" | "DEFAULT" | (string & {});
}

export const TestGoldengateConnectionAssignmentRequest: Schema.Codec<TestGoldengateConnectionAssignmentRequest> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "TestGoldengateConnectionAssignmentRequest" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The status of the operation. */
  statusMessage?: string;
  /** Output only. An estimated percentage of the operation that has been completed at a given moment of time, between 0 and 100. */
  percentComplete?: number;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    statusMessage: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OperationMetadata" });

export interface GoldengateDeploymentEnvironment {
  /** Output only. The default CPU core count of the Goldengate Deployment Environment resource. */
  defaultCpuCoreCount?: number;
  /** Output only. The network bandwidth per CPU core in Gbps of the Goldengate Deployment Environment resource. */
  networkBandwidthGbpsPerCpuCore?: number;
  /** Output only. The environment type of the Goldengate Deployment Environment resource. */
  environmentType?:
    | "DEPLOYMENT_ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "DEVELOPMENT_OR_TESTING"
    | (string & {});
  /** Output only. Whether auto scaling is enabled by default for the Goldengate Deployment Environment resource. */
  autoScalingEnabled?: boolean;
  /** Output only. The min CPU core count of the Goldengate Deployment Environment resource. */
  minCpuCoreCount?: number;
  /** Output only. The category of the Goldengate Deployment Environment resource. */
  category?:
    | "DEPLOYMENT_CATEGORY_UNSPECIFIED"
    | "DATA_REPLICATION_CATEGORY"
    | "DATA_TRANSFORMS_CATEGORY"
    | (string & {});
  /** Output only. The storage usage limit per CPU core in GBs of the Goldengate Deployment Environment resource. */
  storageUsageLimitGbPerCpuCore?: number;
  /** Output only. The memory per CPU core in GBs of the Goldengate Deployment Environment resource. */
  memoryGbPerCpuCore?: number;
  /** Identifier. The name of the Goldengate Deployment Environment resource with the format: projects/{project}/locations/{location}/goldengateDeploymentEnvironments/{goldengate_deployment_environment} */
  name?: string;
  /** The display name of the Goldengate Deployment Environment resource. */
  displayName?: string;
  /** Output only. The max CPU core count of the Goldengate Deployment Environment resource. */
  maxCpuCoreCount?: number;
}

export const GoldengateDeploymentEnvironment: Schema.Codec<GoldengateDeploymentEnvironment> =
  /*@__PURE__*/ Schema.Struct({
    defaultCpuCoreCount: Schema.optional(Schema.Number),
    networkBandwidthGbpsPerCpuCore: Schema.optional(Schema.Number),
    environmentType: Schema.optional(Schema.String),
    autoScalingEnabled: Schema.optional(Schema.Boolean),
    minCpuCoreCount: Schema.optional(Schema.Number),
    category: Schema.optional(Schema.String),
    storageUsageLimitGbPerCpuCore: Schema.optional(Schema.Number),
    memoryGbPerCpuCore: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    maxCpuCoreCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoldengateDeploymentEnvironment" });

export interface GoldengateConnectionType {
  /** Identifier. The name of the Goldengate Connection Type resource with the format: projects/{project}/locations/{region}/goldengateConnectionTypes/{goldengate_connection_type} */
  name?: string;
  /** Output only. The connection type of the Goldengate Connection Type resource. */
  connectionType?:
    | "CONNECTION_TYPE_UNSPECIFIED"
    | "GOLDENGATE"
    | "KAFKA"
    | "KAFKA_SCHEMA_REGISTRY"
    | "MYSQL"
    | "JAVA_MESSAGE_SERVICE"
    | "MICROSOFT_SQLSERVER"
    | "OCI_OBJECT_STORAGE"
    | "ORACLE"
    | "AZURE_DATA_LAKE_STORAGE"
    | "POSTGRESQL"
    | "AZURE_SYNAPSE_ANALYTICS"
    | "SNOWFLAKE"
    | "AMAZON_S3"
    | "HDFS"
    | "ORACLE_AI_DATA_PLATFORM"
    | "ORACLE_NOSQL"
    | "MONGODB"
    | "AMAZON_KINESIS"
    | "AMAZON_REDSHIFT"
    | "DB2"
    | "REDIS"
    | "ELASTICSEARCH"
    | "GENERIC"
    | "GOOGLE_CLOUD_STORAGE"
    | "GOOGLE_BIGQUERY"
    | "DATABRICKS"
    | "GOOGLE_PUBSUB"
    | "MICROSOFT_FABRIC"
    | "ICEBERG"
    | (string & {});
  /** Output only. The technology type of the Goldengate Connection Type resource. */
  technologyTypes?: ReadonlyArray<string>;
}

export const GoldengateConnectionType: Schema.Codec<GoldengateConnectionType> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    connectionType: Schema.optional(Schema.String),
    technologyTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoldengateConnectionType" });

export interface ListGoldengateConnectionTypesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of GoldengateConnectionType */
  goldengateConnectionTypes?: ReadonlyArray<GoldengateConnectionType>;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGoldengateConnectionTypesResponse: Schema.Codec<ListGoldengateConnectionTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    goldengateConnectionTypes: Schema.optional(
      Schema.Array(GoldengateConnectionType),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGoldengateConnectionTypesResponse" });

export interface AutonomousDatabaseCharacterSet {
  /** Identifier. The name of the Autonomous Database Character Set resource in the following format: projects/{project}/locations/{region}/autonomousDatabaseCharacterSets/{autonomous_database_character_set} */
  name?: string;
  /** Output only. The character set name for the Autonomous Database which is the ID in the resource name. */
  characterSet?: string;
  /** Output only. The character set type for the Autonomous Database. */
  characterSetType?:
    | "CHARACTER_SET_TYPE_UNSPECIFIED"
    | "DATABASE"
    | "NATIONAL"
    | (string & {});
}

export const AutonomousDatabaseCharacterSet: Schema.Codec<AutonomousDatabaseCharacterSet> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    characterSet: Schema.optional(Schema.String),
    characterSetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseCharacterSet" });

export interface ListAutonomousDatabaseCharacterSetsResponse {
  /** The list of Autonomous Database Character Sets. */
  autonomousDatabaseCharacterSets?: ReadonlyArray<AutonomousDatabaseCharacterSet>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAutonomousDatabaseCharacterSetsResponse: Schema.Codec<ListAutonomousDatabaseCharacterSetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    autonomousDatabaseCharacterSets: Schema.optional(
      Schema.Array(AutonomousDatabaseCharacterSet),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutonomousDatabaseCharacterSetsResponse" });

export interface OdbNetwork {
  /** Required. The name of the VPC network in the following format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Identifier. The name of the OdbNetwork resource in the following format: projects/{project}/locations/{region}/odbNetworks/{odb_network} */
  name?: string;
  /** Optional. The GCP Oracle zone where OdbNetwork is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Optional. Labels or tags associated with the resource. */
  labels?: Record<string, string>;
  /** Output only. State of the ODB Network. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "TERMINATING"
    | "FAILED"
    | (string & {});
  /** Output only. The date and time that the OdbNetwork was created. */
  createTime?: string;
  /** Output only. The ID of the subscription entitlement associated with the OdbNetwork. */
  entitlementId?: string;
}

export const OdbNetwork: Schema.Codec<OdbNetwork> =
  /*@__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OdbNetwork" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface DbSystem {
  /** Optional. The name of the OdbNetwork associated with the DbSystem. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet. */
  odbNetwork?: string;
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
  /** Identifier. The name of the DbSystem resource in the following format: projects/{project}/locations/{region}/dbSystems/{db_system} */
  name?: string;
  /** Required. The display name for the System db. The name does not have to be unique within your project. */
  displayName?: string;
  /** Optional. The labels or tags associated with the DbSystem. */
  labels?: Record<string, string>;
  /** Required. The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Output only. The date and time that the DbSystem was created. */
  createTime?: string;
  /** Optional. The GCP Oracle zone where Oracle DbSystem is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Output only. The ID of the subscription entitlement associated with the DbSystem */
  entitlementId?: string;
  /** Optional. The properties of the DbSystem. */
  properties?: DbSystemProperties;
}

export const DbSystem: Schema.Codec<DbSystem> =
  /*@__PURE__*/ Schema.Struct({
    odbNetwork: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    odbSubnet: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    properties: Schema.optional(DbSystemProperties),
  }).annotate({ identifier: "DbSystem" });

export interface ListOdbNetworksResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of ODB Networks. */
  odbNetworks?: ReadonlyArray<OdbNetwork>;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOdbNetworksResponse: Schema.Codec<ListOdbNetworksResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    odbNetworks: Schema.optional(Schema.Array(OdbNetwork)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOdbNetworksResponse" });

export interface ListCloudVmClustersResponse {
  /** The list of VM Clusters. */
  cloudVmClusters?: ReadonlyArray<CloudVmCluster>;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** A token to fetch the next page of results. */
  nextPageToken?: string;
}

export const ListCloudVmClustersResponse: Schema.Codec<ListCloudVmClustersResponse> =
  /*@__PURE__*/ Schema.Struct({
    cloudVmClusters: Schema.optional(Schema.Array(CloudVmCluster)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCloudVmClustersResponse" });

export interface StartAutonomousDatabaseRequest {}

export const StartAutonomousDatabaseRequest: Schema.Codec<StartAutonomousDatabaseRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartAutonomousDatabaseRequest",
  });

export interface ConfigureExascaleCloudExadataInfrastructureRequest {
  /** Required. The total storage to be allocated to Exascale in GBs. */
  totalStorageSizeGb?: number;
  /** Optional. An optional ID to identify the request. */
  requestId?: string;
}

export const ConfigureExascaleCloudExadataInfrastructureRequest: Schema.Codec<ConfigureExascaleCloudExadataInfrastructureRequest> =
  /*@__PURE__*/ Schema.Struct({
    totalStorageSizeGb: Schema.optional(Schema.Number),
    requestId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ConfigureExascaleCloudExadataInfrastructureRequest",
  });

export interface StopAutonomousDatabaseRequest {}

export const StopAutonomousDatabaseRequest: Schema.Codec<StopAutonomousDatabaseRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopAutonomousDatabaseRequest",
  });

export interface FailoverAutonomousDatabaseRequest {
  /** Optional. The peer database name to fail over to. Required for cross-region standby, and must be omitted for in-region Data Guard. */
  peerAutonomousDatabase?: string;
}

export const FailoverAutonomousDatabaseRequest: Schema.Codec<FailoverAutonomousDatabaseRequest> =
  /*@__PURE__*/ Schema.Struct({
    peerAutonomousDatabase: Schema.optional(Schema.String),
  }).annotate({ identifier: "FailoverAutonomousDatabaseRequest" });

export interface ListDbSystemsResponse {
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of DbSystems. */
  dbSystems?: ReadonlyArray<DbSystem>;
}

export const ListDbSystemsResponse: Schema.Codec<ListDbSystemsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    dbSystems: Schema.optional(Schema.Array(DbSystem)),
  }).annotate({ identifier: "ListDbSystemsResponse" });

export interface TestGoldengateConnectionAssignmentResponse {
  /** List of test connection assignment error objects. */
  errors?: ReadonlyArray<TestConnectionAssignmentError>;
  /** Type of the result i.e. Success, Failure or Timeout. */
  resultType?:
    | "RESULT_TYPE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "TIMED_OUT"
    | (string & {});
  /** Error details if test connection failed. */
  error?: TestConnectionAssignmentError;
}

export const TestGoldengateConnectionAssignmentResponse: Schema.Codec<TestGoldengateConnectionAssignmentResponse> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(TestConnectionAssignmentError)),
    resultType: Schema.optional(Schema.String),
    error: Schema.optional(TestConnectionAssignmentError),
  }).annotate({ identifier: "TestGoldengateConnectionAssignmentResponse" });

export interface ListAutonomousDatabasesResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The list of Autonomous Databases. */
  autonomousDatabases?: ReadonlyArray<AutonomousDatabase>;
}

export const ListAutonomousDatabasesResponse: Schema.Codec<ListAutonomousDatabasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    autonomousDatabases: Schema.optional(Schema.Array(AutonomousDatabase)),
  }).annotate({ identifier: "ListAutonomousDatabasesResponse" });

export interface ListExascaleDbStorageVaultsResponse {
  /** The ExascaleDbStorageVaults. */
  exascaleDbStorageVaults?: ReadonlyArray<ExascaleDbStorageVault>;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. If present, the next page token can be provided to a subsequent ListExascaleDbStorageVaults call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListExascaleDbStorageVaultsResponse: Schema.Codec<ListExascaleDbStorageVaultsResponse> =
  /*@__PURE__*/ Schema.Struct({
    exascaleDbStorageVaults: Schema.optional(
      Schema.Array(ExascaleDbStorageVault),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExascaleDbStorageVaultsResponse" });

export interface ListDbSystemShapesResponse {
  /** The list of Database System shapes. */
  dbSystemShapes?: ReadonlyArray<DbSystemShape>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDbSystemShapesResponse: Schema.Codec<ListDbSystemShapesResponse> =
  /*@__PURE__*/ Schema.Struct({
    dbSystemShapes: Schema.optional(Schema.Array(DbSystemShape)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbSystemShapesResponse" });

export interface ListGoldengateDeploymentEnvironmentsResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of GoldengateDeploymentEnvironment */
  goldengateDeploymentEnvironments?: ReadonlyArray<GoldengateDeploymentEnvironment>;
}

export const ListGoldengateDeploymentEnvironmentsResponse: Schema.Codec<ListGoldengateDeploymentEnvironmentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    goldengateDeploymentEnvironments: Schema.optional(
      Schema.Array(GoldengateDeploymentEnvironment),
    ),
  }).annotate({ identifier: "ListGoldengateDeploymentEnvironmentsResponse" });

export interface RestartAutonomousDatabaseRequest {}

export const RestartAutonomousDatabaseRequest: Schema.Codec<RestartAutonomousDatabaseRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestartAutonomousDatabaseRequest",
  });

export interface ListGoldengateConnectionAssignmentsResponse {
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The list of GoldengateConnectionAssignments. */
  goldengateConnectionAssignments?: ReadonlyArray<GoldengateConnectionAssignment>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListGoldengateConnectionAssignmentsResponse: Schema.Codec<ListGoldengateConnectionAssignmentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    goldengateConnectionAssignments: Schema.optional(
      Schema.Array(GoldengateConnectionAssignment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGoldengateConnectionAssignmentsResponse" });

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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGoldengateConnectionTypesRequest {
  /** Required. Parent value for ListGoldengateConnectionTypesRequest Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. An expression for filtering the results of the request. The connection_type field must be specified in the format: `connection_type="ORACLE"`. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsGoldengateConnectionTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/goldengateConnectionTypes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGoldengateConnectionTypesRequest>;

export type ListProjectsLocationsGoldengateConnectionTypesResponse =
  ListGoldengateConnectionTypesResponse;
export const ListProjectsLocationsGoldengateConnectionTypesResponse =
  /*@__PURE__*/ ListGoldengateConnectionTypesResponse;

export type ListProjectsLocationsGoldengateConnectionTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GoldengateConnectionTypes in a given project and location. */
export const listProjectsLocationsGoldengateConnectionTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsGoldengateConnectionTypesRequest,
  ListProjectsLocationsGoldengateConnectionTypesResponse,
  ListProjectsLocationsGoldengateConnectionTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoldengateConnectionTypesRequest,
  output: ListProjectsLocationsGoldengateConnectionTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ExascaleDbStorageVaults will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for ordering the results of the request. Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/exascaleDbStorageVaults" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsExascaleDbStorageVaultsRequest>;

export type ListProjectsLocationsExascaleDbStorageVaultsResponse =
  ListExascaleDbStorageVaultsResponse;
export const ListProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ ListExascaleDbStorageVaultsResponse;

export type ListProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the ExascaleDB Storage Vaults for the given project and location. */
export const listProjectsLocationsExascaleDbStorageVaults: API.PaginatedOperationMethod<
  ListProjectsLocationsExascaleDbStorageVaultsRequest,
  ListProjectsLocationsExascaleDbStorageVaultsResponse,
  ListProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExascaleDbStorageVaultsRequest,
  output: ListProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Required. The name of the ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}. */
  name: string;
}

export const GetProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsExascaleDbStorageVaultsRequest>;

export type GetProjectsLocationsExascaleDbStorageVaultsResponse =
  ExascaleDbStorageVault;
export const GetProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ ExascaleDbStorageVault;

export type GetProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ExascaleDB Storage Vault. */
export const getProjectsLocationsExascaleDbStorageVaults: API.OperationMethod<
  GetProjectsLocationsExascaleDbStorageVaultsRequest,
  GetProjectsLocationsExascaleDbStorageVaultsResponse,
  GetProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsExascaleDbStorageVaultsRequest,
  output: GetProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Required. The value for parent of the ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the ExascaleDbStorageVault to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  exascaleDbStorageVaultId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ExascaleDbStorageVault;
}

export const CreateProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    exascaleDbStorageVaultId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("exascaleDbStorageVaultId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ExascaleDbStorageVault).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/exascaleDbStorageVaults",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsExascaleDbStorageVaultsRequest>;

export type CreateProjectsLocationsExascaleDbStorageVaultsResponse = Operation;
export const CreateProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ExascaleDB Storage Vault resource. */
export const createProjectsLocationsExascaleDbStorageVaults: API.OperationMethod<
  CreateProjectsLocationsExascaleDbStorageVaultsRequest,
  CreateProjectsLocationsExascaleDbStorageVaultsResponse,
  CreateProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsExascaleDbStorageVaultsRequest,
  output: CreateProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Required. The name of the ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsExascaleDbStorageVaultsRequest>;

export type DeleteProjectsLocationsExascaleDbStorageVaultsResponse = Operation;
export const DeleteProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ExascaleDB Storage Vault. */
export const deleteProjectsLocationsExascaleDbStorageVaults: API.OperationMethod<
  DeleteProjectsLocationsExascaleDbStorageVaultsRequest,
  DeleteProjectsLocationsExascaleDbStorageVaultsResponse,
  DeleteProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsExascaleDbStorageVaultsRequest,
  output: DeleteProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAutonomousDbVersionsRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. */
  parent: string;
}

export const ListProjectsLocationsAutonomousDbVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autonomousDbVersions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAutonomousDbVersionsRequest>;

export type ListProjectsLocationsAutonomousDbVersionsResponse =
  ListAutonomousDbVersionsResponse;
export const ListProjectsLocationsAutonomousDbVersionsResponse =
  /*@__PURE__*/ ListAutonomousDbVersionsResponse;

export type ListProjectsLocationsAutonomousDbVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the available Autonomous Database versions for a project and location. */
export const listProjectsLocationsAutonomousDbVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDbVersionsRequest,
  ListProjectsLocationsAutonomousDbVersionsResponse,
  ListProjectsLocationsAutonomousDbVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDbVersionsRequest,
  output: ListProjectsLocationsAutonomousDbVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDbSystemShapesRequest {
  /** Required. The parent value for Database System Shapes in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Only the gcp_oracle_zone_id field is supported in this format: `gcp_oracle_zone_id="{gcp_oracle_zone_id}"`. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 database system shapes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsDbSystemShapesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbSystemShapes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDbSystemShapesRequest>;

export type ListProjectsLocationsDbSystemShapesResponse =
  ListDbSystemShapesResponse;
export const ListProjectsLocationsDbSystemShapesResponse =
  /*@__PURE__*/ ListDbSystemShapesResponse;

export type ListProjectsLocationsDbSystemShapesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database system shapes available for the project and location. */
export const listProjectsLocationsDbSystemShapes: API.PaginatedOperationMethod<
  ListProjectsLocationsDbSystemShapesRequest,
  ListProjectsLocationsDbSystemShapesResponse,
  ListProjectsLocationsDbSystemShapesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbSystemShapesRequest,
  output: ListProjectsLocationsDbSystemShapesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsPluggableDatabasesRequest {
  /** Required. The parent, which owns this collection of PluggableDatabases. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. An expression for filtering the results of the request. List for pluggable databases is supported only with a valid container database (full resource name) filter in this format: `database="projects/{project}/locations/{location}/databases/{database}"` */
  filter?: string;
  /** Optional. The maximum number of PluggableDatabases to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListPluggableDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPluggableDatabases` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsPluggableDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/pluggableDatabases" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsPluggableDatabasesRequest>;

export type ListProjectsLocationsPluggableDatabasesResponse =
  ListPluggableDatabasesResponse;
export const ListProjectsLocationsPluggableDatabasesResponse =
  /*@__PURE__*/ ListPluggableDatabasesResponse;

export type ListProjectsLocationsPluggableDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the PluggableDatabases for the given project, location and Container Database. */
export const listProjectsLocationsPluggableDatabases: API.PaginatedOperationMethod<
  ListProjectsLocationsPluggableDatabasesRequest,
  ListProjectsLocationsPluggableDatabasesResponse,
  ListProjectsLocationsPluggableDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPluggableDatabasesRequest,
  output: ListProjectsLocationsPluggableDatabasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsPluggableDatabasesRequest {
  /** Required. The name of the PluggableDatabase resource in the following format: projects/{project}/locations/{region}/pluggableDatabases/{pluggable_database} */
  name: string;
}

export const GetProjectsLocationsPluggableDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsPluggableDatabasesRequest>;

export type GetProjectsLocationsPluggableDatabasesResponse = PluggableDatabase;
export const GetProjectsLocationsPluggableDatabasesResponse =
  /*@__PURE__*/ PluggableDatabase;

export type GetProjectsLocationsPluggableDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single PluggableDatabase. */
export const getProjectsLocationsPluggableDatabases: API.OperationMethod<
  GetProjectsLocationsPluggableDatabasesRequest,
  GetProjectsLocationsPluggableDatabasesResponse,
  GetProjectsLocationsPluggableDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPluggableDatabasesRequest,
  output: GetProjectsLocationsPluggableDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGoldengateDeploymentEnvironmentsRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 deployment environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of GoldengateDeploymentEnvironments. Format: projects/{project}/locations/{location} */
  parent: string;
}

export const ListProjectsLocationsGoldengateDeploymentEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/goldengateDeploymentEnvironments",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGoldengateDeploymentEnvironmentsRequest>;

export type ListProjectsLocationsGoldengateDeploymentEnvironmentsResponse =
  ListGoldengateDeploymentEnvironmentsResponse;
export const ListProjectsLocationsGoldengateDeploymentEnvironmentsResponse =
  /*@__PURE__*/ ListGoldengateDeploymentEnvironmentsResponse;

export type ListProjectsLocationsGoldengateDeploymentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GoldengateDeploymentEnvironments in a given project and location. */
export const listProjectsLocationsGoldengateDeploymentEnvironments: API.PaginatedOperationMethod<
  ListProjectsLocationsGoldengateDeploymentEnvironmentsRequest,
  ListProjectsLocationsGoldengateDeploymentEnvironmentsResponse,
  ListProjectsLocationsGoldengateDeploymentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoldengateDeploymentEnvironmentsRequest,
  output: ListProjectsLocationsGoldengateDeploymentEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Exadata infrastructures will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
}

export const ListProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/cloudExadataInfrastructures" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsCloudExadataInfrastructuresRequest>;

export type ListProjectsLocationsCloudExadataInfrastructuresResponse =
  ListCloudExadataInfrastructuresResponse;
export const ListProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ ListCloudExadataInfrastructuresResponse;

export type ListProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Exadata Infrastructures in a given project and location. */
export const listProjectsLocationsCloudExadataInfrastructures: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudExadataInfrastructuresRequest,
  ListProjectsLocationsCloudExadataInfrastructuresResponse,
  ListProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudExadataInfrastructuresRequest,
  output: ListProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Optional. If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted. */
  force?: boolean;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}. */
  name: string;
}

export const DeleteProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsCloudExadataInfrastructuresRequest>;

export type DeleteProjectsLocationsCloudExadataInfrastructuresResponse =
  Operation;
export const DeleteProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Exadata Infrastructure. */
export const deleteProjectsLocationsCloudExadataInfrastructures: API.OperationMethod<
  DeleteProjectsLocationsCloudExadataInfrastructuresRequest,
  DeleteProjectsLocationsCloudExadataInfrastructuresResponse,
  DeleteProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCloudExadataInfrastructuresRequest,
  output: DeleteProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}. */
  name: string;
  /** Request body */
  body?: ConfigureExascaleCloudExadataInfrastructureRequest;
}

export const ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      ConfigureExascaleCloudExadataInfrastructureRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:configureExascale",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresRequest>;

export type ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresResponse =
  Operation;
export const ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ Operation;

export type ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

/** Configures Exascale for a single Exadata Infrastructure. */
export const configureExascaleProjectsLocationsCloudExadataInfrastructures: API.OperationMethod<
  ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresRequest,
  ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresResponse,
  ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresRequest,
  output: ConfigureExascaleProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}. */
  name: string;
}

export const GetProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsCloudExadataInfrastructuresRequest>;

export type GetProjectsLocationsCloudExadataInfrastructuresResponse =
  CloudExadataInfrastructure;
export const GetProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ CloudExadataInfrastructure;

export type GetProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Exadata Infrastructure. */
export const getProjectsLocationsCloudExadataInfrastructures: API.OperationMethod<
  GetProjectsLocationsCloudExadataInfrastructuresRequest,
  GetProjectsLocationsCloudExadataInfrastructuresResponse,
  GetProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCloudExadataInfrastructuresRequest,
  output: GetProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the Exadata Infrastructure to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  cloudExadataInfrastructureId?: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: CloudExadataInfrastructure;
}

export const CreateProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    cloudExadataInfrastructureId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("cloudExadataInfrastructureId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(CloudExadataInfrastructure).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/cloudExadataInfrastructures",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsCloudExadataInfrastructuresRequest>;

export type CreateProjectsLocationsCloudExadataInfrastructuresResponse =
  Operation;
export const CreateProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Exadata Infrastructure in a given project and location. */
export const createProjectsLocationsCloudExadataInfrastructures: API.OperationMethod<
  CreateProjectsLocationsCloudExadataInfrastructuresRequest,
  CreateProjectsLocationsCloudExadataInfrastructuresResponse,
  CreateProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCloudExadataInfrastructuresRequest,
  output: CreateProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest {
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 db servers will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The parent value for database server in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloudExadataInfrastructure}. */
  parent: string;
}

export const ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbServers" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest>;

export type ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse =
  ListDbServersResponse;
export const ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse =
  /*@__PURE__*/ ListDbServersResponse;

export type ListProjectsLocationsCloudExadataInfrastructuresDbServersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database servers of an Exadata Infrastructure instance. */
export const listProjectsLocationsCloudExadataInfrastructuresDbServers: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest,
  ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse,
  ListProjectsLocationsCloudExadataInfrastructuresDbServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest,
  output: ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDbSystemInitialStorageSizesRequest {
  /** Required. The parent value for the DbSystemInitialStorageSize resource with the format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbSystemInitialStorageSizes will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
}

export const ListProjectsLocationsDbSystemInitialStorageSizesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbSystemInitialStorageSizes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDbSystemInitialStorageSizesRequest>;

export type ListProjectsLocationsDbSystemInitialStorageSizesResponse =
  ListDbSystemInitialStorageSizesResponse;
export const ListProjectsLocationsDbSystemInitialStorageSizesResponse =
  /*@__PURE__*/ ListDbSystemInitialStorageSizesResponse;

export type ListProjectsLocationsDbSystemInitialStorageSizesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the DbSystemInitialStorageSizes for the given project and location. */
export const listProjectsLocationsDbSystemInitialStorageSizes: API.PaginatedOperationMethod<
  ListProjectsLocationsDbSystemInitialStorageSizesRequest,
  ListProjectsLocationsDbSystemInitialStorageSizesResponse,
  ListProjectsLocationsDbSystemInitialStorageSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbSystemInitialStorageSizesRequest,
  output: ListProjectsLocationsDbSystemInitialStorageSizesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Character Sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType}"`. Accepted values include `DATABASE` and `NATIONAL`. */
  filter?: string;
}

export const ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/autonomousDatabaseCharacterSets",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest>;

export type ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse =
  ListAutonomousDatabaseCharacterSetsResponse;
export const ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse =
  /*@__PURE__*/ ListAutonomousDatabaseCharacterSetsResponse;

export type ListProjectsLocationsAutonomousDatabaseCharacterSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Autonomous Database Character Sets in a given project and location. */
export const listProjectsLocationsAutonomousDatabaseCharacterSets: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest,
  ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse,
  ListProjectsLocationsAutonomousDatabaseCharacterSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest,
  output: ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOdbNetworksRequest {
  /** Required. The name of the OdbNetwork in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  name: string;
}

export const GetProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOdbNetworksRequest>;

export type GetProjectsLocationsOdbNetworksResponse = OdbNetwork;
export const GetProjectsLocationsOdbNetworksResponse = /*@__PURE__*/ OdbNetwork;

export type GetProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ODB Network. */
export const getProjectsLocationsOdbNetworks: API.OperationMethod<
  GetProjectsLocationsOdbNetworksRequest,
  GetProjectsLocationsOdbNetworksResponse,
  GetProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOdbNetworksRequest,
  output: GetProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsOdbNetworksRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent value for the OdbNetwork in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the OdbNetwork to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  odbNetworkId?: string;
  /** Request body */
  body?: OdbNetwork;
}

export const CreateProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    odbNetworkId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("odbNetworkId"),
    ),
    body: Schema.optional(OdbNetwork).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/odbNetworks", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsOdbNetworksRequest>;

export type CreateProjectsLocationsOdbNetworksResponse = Operation;
export const CreateProjectsLocationsOdbNetworksResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ODB Network in a given project and location. */
export const createProjectsLocationsOdbNetworks: API.OperationMethod<
  CreateProjectsLocationsOdbNetworksRequest,
  CreateProjectsLocationsOdbNetworksResponse,
  CreateProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsOdbNetworksRequest,
  output: CreateProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOdbNetworksRequest {
  /** Required. The name of the resource in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOdbNetworksRequest>;

export type DeleteProjectsLocationsOdbNetworksResponse = Operation;
export const DeleteProjectsLocationsOdbNetworksResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ODB Network. */
export const deleteProjectsLocationsOdbNetworks: API.OperationMethod<
  DeleteProjectsLocationsOdbNetworksRequest,
  DeleteProjectsLocationsOdbNetworksResponse,
  DeleteProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOdbNetworksRequest,
  output: DeleteProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOdbNetworksRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for the ODB Network in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
}

export const ListProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/odbNetworks" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOdbNetworksRequest>;

export type ListProjectsLocationsOdbNetworksResponse = ListOdbNetworksResponse;
export const ListProjectsLocationsOdbNetworksResponse =
  /*@__PURE__*/ ListOdbNetworksResponse;

export type ListProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the ODB Networks in a given project and location. */
export const listProjectsLocationsOdbNetworks: API.PaginatedOperationMethod<
  ListProjectsLocationsOdbNetworksRequest,
  ListProjectsLocationsOdbNetworksResponse,
  ListProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOdbNetworksRequest,
  output: ListProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Required. The name of the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. */
  name: string;
}

export const GetProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type GetProjectsLocationsOdbNetworksOdbSubnetsResponse = OdbSubnet;
export const GetProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ OdbSubnet;

export type GetProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ODB Subnet. */
export const getProjectsLocationsOdbNetworksOdbSubnets: API.OperationMethod<
  GetProjectsLocationsOdbNetworksOdbSubnetsRequest,
  GetProjectsLocationsOdbNetworksOdbSubnetsResponse,
  GetProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: GetProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Required. The ID of the OdbSubnet to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  odbSubnetId?: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  parent: string;
  /** Request body */
  body?: OdbSubnet;
}

export const CreateProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ Schema.Struct({
    odbSubnetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("odbSubnetId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(OdbSubnet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/odbSubnets", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type CreateProjectsLocationsOdbNetworksOdbSubnetsResponse = Operation;
export const CreateProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ODB Subnet in a given ODB Network. */
export const createProjectsLocationsOdbNetworksOdbSubnets: API.OperationMethod<
  CreateProjectsLocationsOdbNetworksOdbSubnetsRequest,
  CreateProjectsLocationsOdbNetworksOdbSubnetsResponse,
  CreateProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: CreateProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Required. The name of the resource in the following format: projects/{project}/locations/{region}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse = Operation;
export const DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ODB Subnet. */
export const deleteProjectsLocationsOdbNetworksOdbSubnets: API.OperationMethod<
  DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest,
  DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse,
  DeleteProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  parent: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/odbSubnets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type ListProjectsLocationsOdbNetworksOdbSubnetsResponse =
  ListOdbSubnetsResponse;
export const ListProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ ListOdbSubnetsResponse;

export type ListProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the ODB Subnets in a given ODB Network. */
export const listProjectsLocationsOdbNetworksOdbSubnets: API.PaginatedOperationMethod<
  ListProjectsLocationsOdbNetworksOdbSubnetsRequest,
  ListProjectsLocationsOdbNetworksOdbSubnetsResponse,
  ListProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: ListProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDatabaseCharacterSetsRequest {
  /** Required. The parent value for DatabaseCharacterSets in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType}"`. Accepted values include `DATABASE` and `NATIONAL`. */
  filter?: string;
  /** Optional. The maximum number of DatabaseCharacterSets to return. The service may return fewer than this value. If unspecified, at most 50 DatabaseCharacterSets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListDatabaseCharacterSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabaseCharacterSets` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsDatabaseCharacterSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/databaseCharacterSets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDatabaseCharacterSetsRequest>;

export type ListProjectsLocationsDatabaseCharacterSetsResponse =
  ListDatabaseCharacterSetsResponse;
export const ListProjectsLocationsDatabaseCharacterSetsResponse =
  /*@__PURE__*/ ListDatabaseCharacterSetsResponse;

export type ListProjectsLocationsDatabaseCharacterSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List DatabaseCharacterSets for the given project and location. */
export const listProjectsLocationsDatabaseCharacterSets: API.PaginatedOperationMethod<
  ListProjectsLocationsDatabaseCharacterSetsRequest,
  ListProjectsLocationsDatabaseCharacterSetsResponse,
  ListProjectsLocationsDatabaseCharacterSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDatabaseCharacterSetsRequest,
  output: ListProjectsLocationsDatabaseCharacterSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsExadbVmClustersRequest {
  /** Required. The name of the ExadbVmCluster in the following format: projects/{project}/locations/{location}/exadbVmClusters/{exadb_vm_cluster}. */
  name: string;
}

export const GetProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsExadbVmClustersRequest>;

export type GetProjectsLocationsExadbVmClustersResponse = ExadbVmCluster;
export const GetProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ ExadbVmCluster;

export type GetProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Exadb (Exascale) VM Cluster. */
export const getProjectsLocationsExadbVmClusters: API.OperationMethod<
  GetProjectsLocationsExadbVmClustersRequest,
  GetProjectsLocationsExadbVmClustersResponse,
  GetProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsExadbVmClustersRequest,
  output: GetProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsExadbVmClustersRequest {
  /** Required. The ID of the ExadbVmCluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  exadbVmClusterId?: string;
  /** Required. The value for parent of the ExadbVmCluster in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ExadbVmCluster;
}

export const CreateProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    exadbVmClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("exadbVmClusterId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ExadbVmCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/exadbVmClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsExadbVmClustersRequest>;

export type CreateProjectsLocationsExadbVmClustersResponse = Operation;
export const CreateProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Exadb (Exascale) VM Cluster resource. */
export const createProjectsLocationsExadbVmClusters: API.OperationMethod<
  CreateProjectsLocationsExadbVmClustersRequest,
  CreateProjectsLocationsExadbVmClustersResponse,
  CreateProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsExadbVmClustersRequest,
  output: CreateProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsExadbVmClustersRequest {
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Required. The parent value for ExadbVmClusters in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ExadbVmClusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/exadbVmClusters" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsExadbVmClustersRequest>;

export type ListProjectsLocationsExadbVmClustersResponse =
  ListExadbVmClustersResponse;
export const ListProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ ListExadbVmClustersResponse;

export type ListProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the Exadb (Exascale) VM Clusters for the given project and location. */
export const listProjectsLocationsExadbVmClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsExadbVmClustersRequest,
  ListProjectsLocationsExadbVmClustersResponse,
  ListProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExadbVmClustersRequest,
  output: ListProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest {
  /** Required. The name of the ExadbVmCluster in the following format: projects/{project}/locations/{location}/exadbVmClusters/{exadb_vm_cluster}. */
  name: string;
  /** Request body */
  body?: RemoveVirtualMachineExadbVmClusterRequest;
}

export const RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RemoveVirtualMachineExadbVmClusterRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:removeVirtualMachine",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest>;

export type RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse =
  Operation;
export const RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ Operation;

export type RemoveVirtualMachineProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes virtual machines from an existing exadb vm cluster. */
export const removeVirtualMachineProjectsLocationsExadbVmClusters: API.OperationMethod<
  RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest,
  RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse,
  RemoveVirtualMachineProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest,
  output: RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsExadbVmClustersRequest {
  /** Required. The name of the ExadbVmCluster in the following format: projects/{project}/locations/{location}/exadbVmClusters/{exadb_vm_cluster}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsExadbVmClustersRequest>;

export type DeleteProjectsLocationsExadbVmClustersResponse = Operation;
export const DeleteProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Exadb (Exascale) VM Cluster. */
export const deleteProjectsLocationsExadbVmClusters: API.OperationMethod<
  DeleteProjectsLocationsExadbVmClustersRequest,
  DeleteProjectsLocationsExadbVmClustersResponse,
  DeleteProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsExadbVmClustersRequest,
  output: DeleteProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsExadbVmClustersRequest {
  /** Optional. A mask specifying which fields in th VM Cluster should be updated. A field specified in the mask is overwritten. If a mask isn't provided then all the fields in the VM Cluster are overwritten. */
  updateMask?: string;
  /** Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project}/locations/{region}/exadbVmClusters/{exadb_vm_cluster} */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ExadbVmCluster;
}

export const PatchProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ExadbVmCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsExadbVmClustersRequest>;

export type PatchProjectsLocationsExadbVmClustersResponse = Operation;
export const PatchProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single Exadb (Exascale) VM Cluster. To add virtual machines to existing exadb vm cluster, only pass the node count. */
export const patchProjectsLocationsExadbVmClusters: API.OperationMethod<
  PatchProjectsLocationsExadbVmClustersRequest,
  PatchProjectsLocationsExadbVmClustersResponse,
  PatchProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsExadbVmClustersRequest,
  output: PatchProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsExadbVmClustersDbNodesRequest {
  /** Required. The parent value for database node in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloudVmCluster}. . */
  parent: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the node should return. */
  pageToken?: string;
}

export const ListProjectsLocationsExadbVmClustersDbNodesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbNodes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsExadbVmClustersDbNodesRequest>;

export type ListProjectsLocationsExadbVmClustersDbNodesResponse =
  ListDbNodesResponse;
export const ListProjectsLocationsExadbVmClustersDbNodesResponse =
  /*@__PURE__*/ ListDbNodesResponse;

export type ListProjectsLocationsExadbVmClustersDbNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database nodes of a VM Cluster. */
export const listProjectsLocationsExadbVmClustersDbNodes: API.PaginatedOperationMethod<
  ListProjectsLocationsExadbVmClustersDbNodesRequest,
  ListProjectsLocationsExadbVmClustersDbNodesResponse,
  ListProjectsLocationsExadbVmClustersDbNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExadbVmClustersDbNodesRequest,
  output: ListProjectsLocationsExadbVmClustersDbNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsDbSystemsRequest {
  /** Required. The name of the DbSystem in the following format: projects/{project}/locations/{location}/dbSystems/{db_system}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsDbSystemsRequest>;

export type DeleteProjectsLocationsDbSystemsResponse = Operation;
export const DeleteProjectsLocationsDbSystemsResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single DbSystem. */
export const deleteProjectsLocationsDbSystems: API.OperationMethod<
  DeleteProjectsLocationsDbSystemsRequest,
  DeleteProjectsLocationsDbSystemsResponse,
  DeleteProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDbSystemsRequest,
  output: DeleteProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDbSystemsRequest {
  /** Required. The name of the DbSystem in the following format: projects/{project}/locations/{location}/dbSystems/{db_system}. */
  name: string;
}

export const GetProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsDbSystemsRequest>;

export type GetProjectsLocationsDbSystemsResponse = DbSystem;
export const GetProjectsLocationsDbSystemsResponse = /*@__PURE__*/ DbSystem;

export type GetProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single DbSystem. */
export const getProjectsLocationsDbSystems: API.OperationMethod<
  GetProjectsLocationsDbSystemsRequest,
  GetProjectsLocationsDbSystemsResponse,
  GetProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDbSystemsRequest,
  output: GetProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsDbSystemsRequest {
  /** Required. The ID of the DbSystem to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  dbSystemId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The value for parent of the DbSystem in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Request body */
  body?: DbSystem;
}

export const CreateProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ Schema.Struct({
    dbSystemId: Schema.optional(Schema.String).pipe(T.HttpQuery("dbSystemId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DbSystem).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/dbSystems", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsDbSystemsRequest>;

export type CreateProjectsLocationsDbSystemsResponse = Operation;
export const CreateProjectsLocationsDbSystemsResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new DbSystem in a given project and location. */
export const createProjectsLocationsDbSystems: API.OperationMethod<
  CreateProjectsLocationsDbSystemsRequest,
  CreateProjectsLocationsDbSystemsResponse,
  CreateProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDbSystemsRequest,
  output: CreateProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDbSystemsRequest {
  /** Required. The parent value for DbSystems in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 DbSystems will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbSystems" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDbSystemsRequest>;

export type ListProjectsLocationsDbSystemsResponse = ListDbSystemsResponse;
export const ListProjectsLocationsDbSystemsResponse =
  /*@__PURE__*/ ListDbSystemsResponse;

export type ListProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the DbSystems for the given project and location. */
export const listProjectsLocationsDbSystems: API.PaginatedOperationMethod<
  ListProjectsLocationsDbSystemsRequest,
  ListProjectsLocationsDbSystemsResponse,
  ListProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbSystemsRequest,
  output: ListProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAutonomousDatabaseBackupsRequest {
  /** Required. The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Only the **autonomous_database_id** field is supported in the following format: `autonomous_database_id="{autonomous_database_id}"`. The accepted values must be a valid Autonomous Database ID, limited to the naming restrictions of the ID: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). The ID must start with a letter, end with a letter or a number, and be a maximum of 63 characters. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Backups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsAutonomousDatabaseBackupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autonomousDatabaseBackups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAutonomousDatabaseBackupsRequest>;

export type ListProjectsLocationsAutonomousDatabaseBackupsResponse =
  ListAutonomousDatabaseBackupsResponse;
export const ListProjectsLocationsAutonomousDatabaseBackupsResponse =
  /*@__PURE__*/ ListAutonomousDatabaseBackupsResponse;

export type ListProjectsLocationsAutonomousDatabaseBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the long-term and automatic backups of an Autonomous Database. */
export const listProjectsLocationsAutonomousDatabaseBackups: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDatabaseBackupsRequest,
  ListProjectsLocationsAutonomousDatabaseBackupsResponse,
  ListProjectsLocationsAutonomousDatabaseBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDatabaseBackupsRequest,
  output: ListProjectsLocationsAutonomousDatabaseBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDatabasesRequest {
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 Databases will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
  /** Required. The parent resource name in the following format: projects/{project}/locations/{region} */
  parent: string;
  /** Optional. An expression for filtering the results of the request. list for container databases is supported only with a valid dbSystem (full resource name) filter in this format: `dbSystem="projects/{project}/locations/{location}/dbSystems/{dbSystemId}"` */
  filter?: string;
}

export const ListProjectsLocationsDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/databases" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDatabasesRequest>;

export type ListProjectsLocationsDatabasesResponse = ListDatabasesResponse;
export const ListProjectsLocationsDatabasesResponse =
  /*@__PURE__*/ ListDatabasesResponse;

export type ListProjectsLocationsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the Databases for the given project, location and DbSystem. */
export const listProjectsLocationsDatabases: API.PaginatedOperationMethod<
  ListProjectsLocationsDatabasesRequest,
  ListProjectsLocationsDatabasesResponse,
  ListProjectsLocationsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDatabasesRequest,
  output: ListProjectsLocationsDatabasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDatabasesRequest {
  /** Required. The name of the Database resource in the following format: projects/{project}/locations/{region}/databases/{database} */
  name: string;
}

export const GetProjectsLocationsDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsDatabasesRequest>;

export type GetProjectsLocationsDatabasesResponse = Database;
export const GetProjectsLocationsDatabasesResponse = /*@__PURE__*/ Database;

export type GetProjectsLocationsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Database. */
export const getProjectsLocationsDatabases: API.OperationMethod<
  GetProjectsLocationsDatabasesRequest,
  GetProjectsLocationsDatabasesResponse,
  GetProjectsLocationsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDatabasesRequest,
  output: GetProjectsLocationsDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsGoldengateConnectionAssignmentsRequest {
  /** Required. The name of the GoldengateConnectionAssignment to retrieve. Format: projects/{project}/locations/{location}/goldengateConnectionAssignments/{goldengate_connection_assignment} */
  name: string;
}

export const GetProjectsLocationsGoldengateConnectionAssignmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGoldengateConnectionAssignmentsRequest>;

export type GetProjectsLocationsGoldengateConnectionAssignmentsResponse =
  GoldengateConnectionAssignment;
export const GetProjectsLocationsGoldengateConnectionAssignmentsResponse =
  /*@__PURE__*/ GoldengateConnectionAssignment;

export type GetProjectsLocationsGoldengateConnectionAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GoldengateConnectionAssignment. */
export const getProjectsLocationsGoldengateConnectionAssignments: API.OperationMethod<
  GetProjectsLocationsGoldengateConnectionAssignmentsRequest,
  GetProjectsLocationsGoldengateConnectionAssignmentsResponse,
  GetProjectsLocationsGoldengateConnectionAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGoldengateConnectionAssignmentsRequest,
  output: GetProjectsLocationsGoldengateConnectionAssignmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGoldengateConnectionAssignmentsRequest {
  /** Required. The ID of the GoldengateConnectionAssignment to create. */
  goldengateConnectionAssignmentId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource where this GoldengateConnectionAssignment will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: GoldengateConnectionAssignment;
}

export const CreateProjectsLocationsGoldengateConnectionAssignmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    goldengateConnectionAssignmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("goldengateConnectionAssignmentId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoldengateConnectionAssignment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/goldengateConnectionAssignments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsGoldengateConnectionAssignmentsRequest>;

export type CreateProjectsLocationsGoldengateConnectionAssignmentsResponse =
  Operation;
export const CreateProjectsLocationsGoldengateConnectionAssignmentsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsGoldengateConnectionAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GoldengateConnectionAssignment in a given project and location. */
export const createProjectsLocationsGoldengateConnectionAssignments: API.OperationMethod<
  CreateProjectsLocationsGoldengateConnectionAssignmentsRequest,
  CreateProjectsLocationsGoldengateConnectionAssignmentsResponse,
  CreateProjectsLocationsGoldengateConnectionAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGoldengateConnectionAssignmentsRequest,
  output: CreateProjectsLocationsGoldengateConnectionAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGoldengateConnectionAssignmentsRequest {
  /** Required. The name of the GoldengateConnectionAssignment to delete. Format: projects/{project}/locations/{location}/goldengateConnectionAssignments/{goldengate_connection_assignment} */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGoldengateConnectionAssignmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGoldengateConnectionAssignmentsRequest>;

export type DeleteProjectsLocationsGoldengateConnectionAssignmentsResponse =
  Operation;
export const DeleteProjectsLocationsGoldengateConnectionAssignmentsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsGoldengateConnectionAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GoldengateConnectionAssignment. */
export const deleteProjectsLocationsGoldengateConnectionAssignments: API.OperationMethod<
  DeleteProjectsLocationsGoldengateConnectionAssignmentsRequest,
  DeleteProjectsLocationsGoldengateConnectionAssignmentsResponse,
  DeleteProjectsLocationsGoldengateConnectionAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGoldengateConnectionAssignmentsRequest,
  output: DeleteProjectsLocationsGoldengateConnectionAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGoldengateConnectionAssignmentsRequest {
  /** Optional. A page token, received from a previous `ListGoldengateConnectionAssignments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoldengateConnectionAssignments` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A filter expression that filters GoldengateConnectionAssignments listed in the response. */
  filter?: string;
  /** Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "DESC" after a field name for descending. */
  orderBy?: string;
  /** Optional. The maximum number of GoldengateConnectionAssignments to return. The service may return fewer than this value. If unspecified, at most 50 GoldengateConnectionAssignments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for the GoldengateConnectionAssignments. Format: projects/{project}/locations/{location} */
  parent: string;
}

export const ListProjectsLocationsGoldengateConnectionAssignmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/goldengateConnectionAssignments",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGoldengateConnectionAssignmentsRequest>;

export type ListProjectsLocationsGoldengateConnectionAssignmentsResponse =
  ListGoldengateConnectionAssignmentsResponse;
export const ListProjectsLocationsGoldengateConnectionAssignmentsResponse =
  /*@__PURE__*/ ListGoldengateConnectionAssignmentsResponse;

export type ListProjectsLocationsGoldengateConnectionAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GoldengateConnectionAssignments in a given project and location. */
export const listProjectsLocationsGoldengateConnectionAssignments: API.PaginatedOperationMethod<
  ListProjectsLocationsGoldengateConnectionAssignmentsRequest,
  ListProjectsLocationsGoldengateConnectionAssignmentsResponse,
  ListProjectsLocationsGoldengateConnectionAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoldengateConnectionAssignmentsRequest,
  output: ListProjectsLocationsGoldengateConnectionAssignmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestProjectsLocationsGoldengateConnectionAssignmentsRequest {
  /** Required. Name of the connection assignment for which to test connection. projects/{project}/locations/{region}/goldengateConnectionAssignments/{goldengate_connection_assignment} */
  name: string;
  /** Request body */
  body?: TestGoldengateConnectionAssignmentRequest;
}

export const TestProjectsLocationsGoldengateConnectionAssignmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TestGoldengateConnectionAssignmentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:test", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<TestProjectsLocationsGoldengateConnectionAssignmentsRequest>;

export type TestProjectsLocationsGoldengateConnectionAssignmentsResponse =
  TestGoldengateConnectionAssignmentResponse;
export const TestProjectsLocationsGoldengateConnectionAssignmentsResponse =
  /*@__PURE__*/ TestGoldengateConnectionAssignmentResponse;

export type TestProjectsLocationsGoldengateConnectionAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Tests a single GoldengateConnectionAssignment. */
export const testProjectsLocationsGoldengateConnectionAssignments: API.OperationMethod<
  TestProjectsLocationsGoldengateConnectionAssignmentsRequest,
  TestProjectsLocationsGoldengateConnectionAssignmentsResponse,
  TestProjectsLocationsGoldengateConnectionAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestProjectsLocationsGoldengateConnectionAssignmentsRequest,
  output: TestProjectsLocationsGoldengateConnectionAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateWalletProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: GenerateAutonomousDatabaseWalletRequest;
}

export const GenerateWalletProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateAutonomousDatabaseWalletRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:generateWallet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateWalletProjectsLocationsAutonomousDatabasesRequest>;

export type GenerateWalletProjectsLocationsAutonomousDatabasesResponse =
  GenerateAutonomousDatabaseWalletResponse;
export const GenerateWalletProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ GenerateAutonomousDatabaseWalletResponse;

export type GenerateWalletProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a wallet for an Autonomous Database. */
export const generateWalletProjectsLocationsAutonomousDatabases: API.OperationMethod<
  GenerateWalletProjectsLocationsAutonomousDatabasesRequest,
  GenerateWalletProjectsLocationsAutonomousDatabasesResponse,
  GenerateWalletProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateWalletProjectsLocationsAutonomousDatabasesRequest,
  output: GenerateWalletProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAutonomousDatabasesRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The name of the Autonomous Database resource in the following format: projects/{project}/locations/{region}/autonomousDatabases/{autonomous_database} */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Exadata resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: AutonomousDatabase;
}

export const PatchProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(AutonomousDatabase).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAutonomousDatabasesRequest>;

export type PatchProjectsLocationsAutonomousDatabasesResponse = Operation;
export const PatchProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Autonomous Database. */
export const patchProjectsLocationsAutonomousDatabases: API.OperationMethod<
  PatchProjectsLocationsAutonomousDatabasesRequest,
  PatchProjectsLocationsAutonomousDatabasesResponse,
  PatchProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAutonomousDatabasesRequest,
  output: PatchProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: StartAutonomousDatabaseRequest;
}

export const StartProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StartProjectsLocationsAutonomousDatabasesRequest>;

export type StartProjectsLocationsAutonomousDatabasesResponse = Operation;
export const StartProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type StartProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts an Autonomous Database. */
export const startProjectsLocationsAutonomousDatabases: API.OperationMethod<
  StartProjectsLocationsAutonomousDatabasesRequest,
  StartProjectsLocationsAutonomousDatabasesResponse,
  StartProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsAutonomousDatabasesRequest,
  output: StartProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: StopAutonomousDatabaseRequest;
}

export const StopProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StopProjectsLocationsAutonomousDatabasesRequest>;

export type StopProjectsLocationsAutonomousDatabasesResponse = Operation;
export const StopProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type StopProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops an Autonomous Database. */
export const stopProjectsLocationsAutonomousDatabases: API.OperationMethod<
  StopProjectsLocationsAutonomousDatabasesRequest,
  StopProjectsLocationsAutonomousDatabasesResponse,
  StopProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsAutonomousDatabasesRequest,
  output: StopProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
}

export const GetProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAutonomousDatabasesRequest>;

export type GetProjectsLocationsAutonomousDatabasesResponse =
  AutonomousDatabase;
export const GetProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ AutonomousDatabase;

export type GetProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a single Autonomous Database. */
export const getProjectsLocationsAutonomousDatabases: API.OperationMethod<
  GetProjectsLocationsAutonomousDatabasesRequest,
  GetProjectsLocationsAutonomousDatabasesResponse,
  GetProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAutonomousDatabasesRequest,
  output: GetProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAutonomousDatabasesRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the parent in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the Autonomous Database to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  autonomousDatabaseId?: string;
  /** Request body */
  body?: AutonomousDatabase;
}

export const CreateProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    autonomousDatabaseId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("autonomousDatabaseId"),
    ),
    body: Schema.optional(AutonomousDatabase).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/autonomousDatabases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAutonomousDatabasesRequest>;

export type CreateProjectsLocationsAutonomousDatabasesResponse = Operation;
export const CreateProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Autonomous Database in a given project and location. */
export const createProjectsLocationsAutonomousDatabases: API.OperationMethod<
  CreateProjectsLocationsAutonomousDatabasesRequest,
  CreateProjectsLocationsAutonomousDatabasesResponse,
  CreateProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAutonomousDatabasesRequest,
  output: CreateProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the resource in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAutonomousDatabasesRequest>;

export type DeleteProjectsLocationsAutonomousDatabasesResponse = Operation;
export const DeleteProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Autonomous Database. */
export const deleteProjectsLocationsAutonomousDatabases: API.OperationMethod<
  DeleteProjectsLocationsAutonomousDatabasesRequest,
  DeleteProjectsLocationsAutonomousDatabasesResponse,
  DeleteProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAutonomousDatabasesRequest,
  output: DeleteProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestartProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: RestartAutonomousDatabaseRequest;
}

export const RestartProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestartAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restart", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RestartProjectsLocationsAutonomousDatabasesRequest>;

export type RestartProjectsLocationsAutonomousDatabasesResponse = Operation;
export const RestartProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type RestartProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restarts an Autonomous Database. */
export const restartProjectsLocationsAutonomousDatabases: API.OperationMethod<
  RestartProjectsLocationsAutonomousDatabasesRequest,
  RestartProjectsLocationsAutonomousDatabasesResponse,
  RestartProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestartProjectsLocationsAutonomousDatabasesRequest,
  output: RestartProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAutonomousDatabasesRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
}

export const ListProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autonomousDatabases" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAutonomousDatabasesRequest>;

export type ListProjectsLocationsAutonomousDatabasesResponse =
  ListAutonomousDatabasesResponse;
export const ListProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ ListAutonomousDatabasesResponse;

export type ListProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Autonomous Databases in a given project and location. */
export const listProjectsLocationsAutonomousDatabases: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDatabasesRequest,
  ListProjectsLocationsAutonomousDatabasesResponse,
  ListProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDatabasesRequest,
  output: ListProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SwitchoverProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: SwitchoverAutonomousDatabaseRequest;
}

export const SwitchoverProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SwitchoverAutonomousDatabaseRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:switchover", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SwitchoverProjectsLocationsAutonomousDatabasesRequest>;

export type SwitchoverProjectsLocationsAutonomousDatabasesResponse = Operation;
export const SwitchoverProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type SwitchoverProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a switchover of specified autonomous database to the associated peer database. */
export const switchoverProjectsLocationsAutonomousDatabases: API.OperationMethod<
  SwitchoverProjectsLocationsAutonomousDatabasesRequest,
  SwitchoverProjectsLocationsAutonomousDatabasesResponse,
  SwitchoverProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SwitchoverProjectsLocationsAutonomousDatabasesRequest,
  output: SwitchoverProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: RestoreAutonomousDatabaseRequest;
}

export const RestoreProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RestoreProjectsLocationsAutonomousDatabasesRequest>;

export type RestoreProjectsLocationsAutonomousDatabasesResponse = Operation;
export const RestoreProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type RestoreProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a single Autonomous Database. */
export const restoreProjectsLocationsAutonomousDatabases: API.OperationMethod<
  RestoreProjectsLocationsAutonomousDatabasesRequest,
  RestoreProjectsLocationsAutonomousDatabasesResponse,
  RestoreProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAutonomousDatabasesRequest,
  output: RestoreProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FailoverProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: FailoverAutonomousDatabaseRequest;
}

export const FailoverProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(FailoverAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:failover", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<FailoverProjectsLocationsAutonomousDatabasesRequest>;

export type FailoverProjectsLocationsAutonomousDatabasesResponse = Operation;
export const FailoverProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ Operation;

export type FailoverProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a failover to target autonomous database from the associated primary database. */
export const failoverProjectsLocationsAutonomousDatabases: API.OperationMethod<
  FailoverProjectsLocationsAutonomousDatabasesRequest,
  FailoverProjectsLocationsAutonomousDatabasesResponse,
  FailoverProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FailoverProjectsLocationsAutonomousDatabasesRequest,
  output: FailoverProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsGoldengateDeploymentsRequest {
  /** Required. The name of the Goldengate Deployment in the following format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. */
  name: string;
  /** Request body */
  body?: StopGoldengateDeploymentRequest;
}

export const StopProjectsLocationsGoldengateDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopGoldengateDeploymentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StopProjectsLocationsGoldengateDeploymentsRequest>;

export type StopProjectsLocationsGoldengateDeploymentsResponse = Operation;
export const StopProjectsLocationsGoldengateDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type StopProjectsLocationsGoldengateDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops a single GoldengateDeployment. */
export const stopProjectsLocationsGoldengateDeployments: API.OperationMethod<
  StopProjectsLocationsGoldengateDeploymentsRequest,
  StopProjectsLocationsGoldengateDeploymentsResponse,
  StopProjectsLocationsGoldengateDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsGoldengateDeploymentsRequest,
  output: StopProjectsLocationsGoldengateDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGoldengateDeploymentsRequest {
  /** Optional. A page token, received from a previous ListGoldengateDeployments call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 GoldengateDeployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for GoldengateDeployments in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
}

export const ListProjectsLocationsGoldengateDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/goldengateDeployments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGoldengateDeploymentsRequest>;

export type ListProjectsLocationsGoldengateDeploymentsResponse =
  ListGoldengateDeploymentsResponse;
export const ListProjectsLocationsGoldengateDeploymentsResponse =
  /*@__PURE__*/ ListGoldengateDeploymentsResponse;

export type ListProjectsLocationsGoldengateDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the GoldengateDeployments for the given project and location. */
export const listProjectsLocationsGoldengateDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsGoldengateDeploymentsRequest,
  ListProjectsLocationsGoldengateDeploymentsResponse,
  ListProjectsLocationsGoldengateDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoldengateDeploymentsRequest,
  output: ListProjectsLocationsGoldengateDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface StartProjectsLocationsGoldengateDeploymentsRequest {
  /** Required. The name of the Goldengate Deployment in the following format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. */
  name: string;
  /** Request body */
  body?: StartGoldengateDeploymentRequest;
}

export const StartProjectsLocationsGoldengateDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartGoldengateDeploymentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StartProjectsLocationsGoldengateDeploymentsRequest>;

export type StartProjectsLocationsGoldengateDeploymentsResponse = Operation;
export const StartProjectsLocationsGoldengateDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type StartProjectsLocationsGoldengateDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a single GoldengateDeployment. */
export const startProjectsLocationsGoldengateDeployments: API.OperationMethod<
  StartProjectsLocationsGoldengateDeploymentsRequest,
  StartProjectsLocationsGoldengateDeploymentsResponse,
  StartProjectsLocationsGoldengateDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsGoldengateDeploymentsRequest,
  output: StartProjectsLocationsGoldengateDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGoldengateDeploymentsRequest {
  /** Required. The name of the GoldengateDeployment in the following format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGoldengateDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGoldengateDeploymentsRequest>;

export type DeleteProjectsLocationsGoldengateDeploymentsResponse = Operation;
export const DeleteProjectsLocationsGoldengateDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsGoldengateDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GoldengateDeployment. */
export const deleteProjectsLocationsGoldengateDeployments: API.OperationMethod<
  DeleteProjectsLocationsGoldengateDeploymentsRequest,
  DeleteProjectsLocationsGoldengateDeploymentsResponse,
  DeleteProjectsLocationsGoldengateDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGoldengateDeploymentsRequest,
  output: DeleteProjectsLocationsGoldengateDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGoldengateDeploymentsRequest {
  /** Required. The name of the GoldengateDeployment in the following format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. */
  name: string;
}

export const GetProjectsLocationsGoldengateDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGoldengateDeploymentsRequest>;

export type GetProjectsLocationsGoldengateDeploymentsResponse =
  GoldengateDeployment;
export const GetProjectsLocationsGoldengateDeploymentsResponse =
  /*@__PURE__*/ GoldengateDeployment;

export type GetProjectsLocationsGoldengateDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GoldengateDeployment. */
export const getProjectsLocationsGoldengateDeployments: API.OperationMethod<
  GetProjectsLocationsGoldengateDeploymentsRequest,
  GetProjectsLocationsGoldengateDeploymentsResponse,
  GetProjectsLocationsGoldengateDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGoldengateDeploymentsRequest,
  output: GetProjectsLocationsGoldengateDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGoldengateDeploymentsRequest {
  /** Required. The ID of the GoldengateDeployment to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  goldengateDeploymentId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The value for parent of the GoldengateDeployment in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Request body */
  body?: GoldengateDeployment;
}

export const CreateProjectsLocationsGoldengateDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    goldengateDeploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("goldengateDeploymentId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoldengateDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/goldengateDeployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsGoldengateDeploymentsRequest>;

export type CreateProjectsLocationsGoldengateDeploymentsResponse = Operation;
export const CreateProjectsLocationsGoldengateDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsGoldengateDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GoldengateDeployment in a given project and location. */
export const createProjectsLocationsGoldengateDeployments: API.OperationMethod<
  CreateProjectsLocationsGoldengateDeploymentsRequest,
  CreateProjectsLocationsGoldengateDeploymentsResponse,
  CreateProjectsLocationsGoldengateDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGoldengateDeploymentsRequest,
  output: CreateProjectsLocationsGoldengateDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGoldengateDeploymentTypesRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. Either the deployment_type and ogg_version fields must be specified in the format: `deployment_type="DATABASE_ORACLE"` or `ogg_version="version"`. Allowed values for deployment_type are: `DATABASE_ORACLE`, `BIGDATA`, `DATABASE_MICROSOFT_SQLSERVER`, `DATABASE_MYSQL`, `DATABASE_POSTGRESQL`, `DATABASE_DB2ZOS`, `DATABASE_DB2I`, `GGSA`, `DATA_TRANSFORMS`. */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The parent resource. Format: projects/{project}/locations/{location} */
  parent: string;
}

export const ListProjectsLocationsGoldengateDeploymentTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/goldengateDeploymentTypes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGoldengateDeploymentTypesRequest>;

export type ListProjectsLocationsGoldengateDeploymentTypesResponse =
  ListGoldengateDeploymentTypesResponse;
export const ListProjectsLocationsGoldengateDeploymentTypesResponse =
  /*@__PURE__*/ ListGoldengateDeploymentTypesResponse;

export type ListProjectsLocationsGoldengateDeploymentTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GoldenGateDeploymentTypes in a given project and location. */
export const listProjectsLocationsGoldengateDeploymentTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsGoldengateDeploymentTypesRequest,
  ListProjectsLocationsGoldengateDeploymentTypesResponse,
  ListProjectsLocationsGoldengateDeploymentTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoldengateDeploymentTypesRequest,
  output: ListProjectsLocationsGoldengateDeploymentTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsGoldengateDeploymentVersionsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for ListGoldengateDeploymentVersionsRequest Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Either the deployment_id and deployment_type fields must be specified in the format: `deployment_id="id"` or `deployment_type="DATABASE_ORACLE"`. */
  filter?: string;
}

export const ListProjectsLocationsGoldengateDeploymentVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/goldengateDeploymentVersions",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGoldengateDeploymentVersionsRequest>;

export type ListProjectsLocationsGoldengateDeploymentVersionsResponse =
  ListGoldengateDeploymentVersionsResponse;
export const ListProjectsLocationsGoldengateDeploymentVersionsResponse =
  /*@__PURE__*/ ListGoldengateDeploymentVersionsResponse;

export type ListProjectsLocationsGoldengateDeploymentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GoldengateDeploymentVersions in a given project and location. */
export const listProjectsLocationsGoldengateDeploymentVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsGoldengateDeploymentVersionsRequest,
  ListProjectsLocationsGoldengateDeploymentVersionsResponse,
  ListProjectsLocationsGoldengateDeploymentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoldengateDeploymentVersionsRequest,
  output: ListProjectsLocationsGoldengateDeploymentVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsEntitlementsRequest {
  /** Required. The parent value for the entitlement in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 entitlements will be returned. The maximum value is 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsEntitlementsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entitlements" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsEntitlementsRequest>;

export type ListProjectsLocationsEntitlementsResponse =
  ListEntitlementsResponse;
export const ListProjectsLocationsEntitlementsResponse =
  /*@__PURE__*/ ListEntitlementsResponse;

export type ListProjectsLocationsEntitlementsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the entitlements in a given project. */
export const listProjectsLocationsEntitlements: API.PaginatedOperationMethod<
  ListProjectsLocationsEntitlementsRequest,
  ListProjectsLocationsEntitlementsResponse,
  ListProjectsLocationsEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEntitlementsRequest,
  output: ListProjectsLocationsEntitlementsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGoldengateConnectionsRequest {
  /** Required. The name of the GoldengateConnection in the following format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGoldengateConnectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGoldengateConnectionsRequest>;

export type DeleteProjectsLocationsGoldengateConnectionsResponse = Operation;
export const DeleteProjectsLocationsGoldengateConnectionsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsGoldengateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GoldengateConnection. */
export const deleteProjectsLocationsGoldengateConnections: API.OperationMethod<
  DeleteProjectsLocationsGoldengateConnectionsRequest,
  DeleteProjectsLocationsGoldengateConnectionsResponse,
  DeleteProjectsLocationsGoldengateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGoldengateConnectionsRequest,
  output: DeleteProjectsLocationsGoldengateConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGoldengateConnectionsRequest {
  /** Required. The name of the GoldengateConnection in the following format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}. */
  name: string;
}

export const GetProjectsLocationsGoldengateConnectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGoldengateConnectionsRequest>;

export type GetProjectsLocationsGoldengateConnectionsResponse =
  GoldengateConnection;
export const GetProjectsLocationsGoldengateConnectionsResponse =
  /*@__PURE__*/ GoldengateConnection;

export type GetProjectsLocationsGoldengateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GoldengateConnection. */
export const getProjectsLocationsGoldengateConnections: API.OperationMethod<
  GetProjectsLocationsGoldengateConnectionsRequest,
  GetProjectsLocationsGoldengateConnectionsResponse,
  GetProjectsLocationsGoldengateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGoldengateConnectionsRequest,
  output: GetProjectsLocationsGoldengateConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGoldengateConnectionsRequest {
  /** Required. The ID of the GoldengateConnection to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  goldengateConnectionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The value for parent of the GoldengateConnection in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Request body */
  body?: GoldengateConnection;
}

export const CreateProjectsLocationsGoldengateConnectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    goldengateConnectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("goldengateConnectionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoldengateConnection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/goldengateConnections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsGoldengateConnectionsRequest>;

export type CreateProjectsLocationsGoldengateConnectionsResponse = Operation;
export const CreateProjectsLocationsGoldengateConnectionsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsGoldengateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GoldengateConnection in a given project and location. */
export const createProjectsLocationsGoldengateConnections: API.OperationMethod<
  CreateProjectsLocationsGoldengateConnectionsRequest,
  CreateProjectsLocationsGoldengateConnectionsResponse,
  CreateProjectsLocationsGoldengateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGoldengateConnectionsRequest,
  output: CreateProjectsLocationsGoldengateConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGoldengateConnectionsRequest {
  /** Optional. A page token, received from a previous ListGoldengateConnections call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 GoldengateConnections will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for GoldengateConnections in the following format: projects/{project}/locations/{location}. */
  parent: string;
}

export const ListProjectsLocationsGoldengateConnectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/goldengateConnections" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGoldengateConnectionsRequest>;

export type ListProjectsLocationsGoldengateConnectionsResponse =
  ListGoldengateConnectionsResponse;
export const ListProjectsLocationsGoldengateConnectionsResponse =
  /*@__PURE__*/ ListGoldengateConnectionsResponse;

export type ListProjectsLocationsGoldengateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the GoldengateConnections for the given project and location. */
export const listProjectsLocationsGoldengateConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsGoldengateConnectionsRequest,
  ListProjectsLocationsGoldengateConnectionsResponse,
  ListProjectsLocationsGoldengateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoldengateConnectionsRequest,
  output: ListProjectsLocationsGoldengateConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsGiVersionsRequest {
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 Oracle Grid Infrastructure (GI) versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The parent value for Grid Infrastructure Version in the following format: Format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Only the shape, gcp_oracle_zone and gi_version fields are supported in this format: `shape="{shape}"`. */
  filter?: string;
}

export const ListProjectsLocationsGiVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/giVersions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGiVersionsRequest>;

export type ListProjectsLocationsGiVersionsResponse = ListGiVersionsResponse;
export const ListProjectsLocationsGiVersionsResponse =
  /*@__PURE__*/ ListGiVersionsResponse;

export type ListProjectsLocationsGiVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the valid Oracle Grid Infrastructure (GI) versions for the given project and location. */
export const listProjectsLocationsGiVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsGiVersionsRequest,
  ListProjectsLocationsGiVersionsResponse,
  ListProjectsLocationsGiVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGiVersionsRequest,
  output: ListProjectsLocationsGiVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsGiVersionsMinorVersionsRequest {
  /** Required. The parent value for the MinorVersion resource with the format: projects/{project}/locations/{location}/giVersions/{gi_version} */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Only shapeFamily and gcp_oracle_zone_id are supported in this format: `shape_family="{shapeFamily}" AND gcp_oracle_zone_id="{gcp_oracle_zone_id}"`. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 System Versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
}

export const ListProjectsLocationsGiVersionsMinorVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/minorVersions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGiVersionsMinorVersionsRequest>;

export type ListProjectsLocationsGiVersionsMinorVersionsResponse =
  ListMinorVersionsResponse;
export const ListProjectsLocationsGiVersionsMinorVersionsResponse =
  /*@__PURE__*/ ListMinorVersionsResponse;

export type ListProjectsLocationsGiVersionsMinorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the valid minor versions for the given project, location, gi version and shape family. */
export const listProjectsLocationsGiVersionsMinorVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsGiVersionsMinorVersionsRequest,
  ListProjectsLocationsGiVersionsMinorVersionsResponse,
  ListProjectsLocationsGiVersionsMinorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGiVersionsMinorVersionsRequest,
  output: ListProjectsLocationsGiVersionsMinorVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDbVersionsRequest {
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbVersions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
  /** Required. The parent value for the DbVersion resource with the format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. Filter expression that matches a subset of the DbVersions to show. The supported filter for dbSystem creation is `db_system_shape = {db_system_shape} AND storage_management = {storage_management}`. If no filter is provided, all DbVersions will be returned. */
  filter?: string;
}

export const ListProjectsLocationsDbVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbVersions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDbVersionsRequest>;

export type ListProjectsLocationsDbVersionsResponse = ListDbVersionsResponse;
export const ListProjectsLocationsDbVersionsResponse =
  /*@__PURE__*/ ListDbVersionsResponse;

export type ListProjectsLocationsDbVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List DbVersions for the given project and location. */
export const listProjectsLocationsDbVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsDbVersionsRequest,
  ListProjectsLocationsDbVersionsResponse,
  ListProjectsLocationsDbVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbVersionsRequest,
  output: ListProjectsLocationsDbVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsCloudVmClustersRequest {
  /** Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000. */
  pageSize?: number;
  /** Optional. A token identifying the page of results the server returns. */
  pageToken?: string;
  /** Required. The name of the parent in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
}

export const ListProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/cloudVmClusters" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsCloudVmClustersRequest>;

export type ListProjectsLocationsCloudVmClustersResponse =
  ListCloudVmClustersResponse;
export const ListProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ ListCloudVmClustersResponse;

export type ListProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the VM Clusters in a given project and location. */
export const listProjectsLocationsCloudVmClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudVmClustersRequest,
  ListProjectsLocationsCloudVmClustersResponse,
  ListProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudVmClustersRequest,
  output: ListProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsCloudVmClustersRequest {
  /** Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsCloudVmClustersRequest>;

export type DeleteProjectsLocationsCloudVmClustersResponse = Operation;
export const DeleteProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single VM Cluster. */
export const deleteProjectsLocationsCloudVmClusters: API.OperationMethod<
  DeleteProjectsLocationsCloudVmClustersRequest,
  DeleteProjectsLocationsCloudVmClustersResponse,
  DeleteProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCloudVmClustersRequest,
  output: DeleteProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsCloudVmClustersRequest {
  /** Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}. */
  name: string;
}

export const GetProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsCloudVmClustersRequest>;

export type GetProjectsLocationsCloudVmClustersResponse = CloudVmCluster;
export const GetProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ CloudVmCluster;

export type GetProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single VM Cluster. */
export const getProjectsLocationsCloudVmClusters: API.OperationMethod<
  GetProjectsLocationsCloudVmClustersRequest,
  GetProjectsLocationsCloudVmClustersResponse,
  GetProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCloudVmClustersRequest,
  output: GetProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsCloudVmClustersRequest {
  /** Required. The name of the parent in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the VM Cluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  cloudVmClusterId?: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: CloudVmCluster;
}

export const CreateProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    cloudVmClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("cloudVmClusterId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(CloudVmCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/cloudVmClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsCloudVmClustersRequest>;

export type CreateProjectsLocationsCloudVmClustersResponse = Operation;
export const CreateProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new VM Cluster in a given project and location. */
export const createProjectsLocationsCloudVmClusters: API.OperationMethod<
  CreateProjectsLocationsCloudVmClustersRequest,
  CreateProjectsLocationsCloudVmClustersResponse,
  CreateProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCloudVmClustersRequest,
  output: CreateProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCloudVmClustersDbNodesRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the node should return. */
  pageToken?: string;
  /** Required. The parent value for database node in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloudVmCluster}. . */
  parent: string;
}

export const ListProjectsLocationsCloudVmClustersDbNodesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbNodes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsCloudVmClustersDbNodesRequest>;

export type ListProjectsLocationsCloudVmClustersDbNodesResponse =
  ListDbNodesResponse;
export const ListProjectsLocationsCloudVmClustersDbNodesResponse =
  /*@__PURE__*/ ListDbNodesResponse;

export type ListProjectsLocationsCloudVmClustersDbNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database nodes of a VM Cluster. */
export const listProjectsLocationsCloudVmClustersDbNodes: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudVmClustersDbNodesRequest,
  ListProjectsLocationsCloudVmClustersDbNodesResponse,
  ListProjectsLocationsCloudVmClustersDbNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudVmClustersDbNodesRequest,
  output: ListProjectsLocationsCloudVmClustersDbNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
