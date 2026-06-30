/**
 * Azure Cognitiveservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccountCapabilityHostsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  capabilityHostName: string;
  properties: {
    description?: string | null;
    tags?: Record<string, string> | null;
  };
}
export const AccountCapabilityHostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      tags: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountCapabilityHostsCreateOrUpdateInput>;

// Output Schema
export interface AccountCapabilityHostsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountCapabilityHostsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountCapabilityHostsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountCapabilityHostsCreateOrUpdateInput,
    outputSchema: AccountCapabilityHostsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AccountCapabilityHostsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  capabilityHostName: string;
}
export const AccountCapabilityHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountCapabilityHostsDeleteInput>;

// Output Schema
export type AccountCapabilityHostsDeleteOutput = void;
export const AccountCapabilityHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountCapabilityHostsDeleteOutput>;

// The operation
/**
 * Delete account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountCapabilityHostsDeleteInput,
    outputSchema: AccountCapabilityHostsDeleteOutput,
  }));
// Input Schema
export interface AccountCapabilityHostsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  capabilityHostName: string;
}
export const AccountCapabilityHostsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountCapabilityHostsGetInput>;

// Output Schema
export interface AccountCapabilityHostsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountCapabilityHostsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountCapabilityHostsGetOutput>;

// The operation
/**
 * Get account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountCapabilityHostsGetInput,
    outputSchema: AccountCapabilityHostsGetOutput,
  }),
);
// Input Schema
export interface AccountCapabilityHostsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountCapabilityHostsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountCapabilityHostsListInput>;

// Output Schema
export interface AccountCapabilityHostsListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const AccountCapabilityHostsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountCapabilityHostsListOutput>;

// The operation
/**
 * List capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountCapabilityHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountCapabilityHostsListInput,
    outputSchema: AccountCapabilityHostsListOutput,
  }),
);
// Input Schema
export interface AccountConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectionName: string;
  properties: {
    authType:
      | "PAT"
      | "ManagedIdentity"
      | "UsernamePassword"
      | "None"
      | "SAS"
      | "AccountKey"
      | "ServicePrincipal"
      | "AccessKey"
      | "ApiKey"
      | "CustomKeys"
      | "OAuth2"
      | "AAD"
      | "DelegatedSAS"
      | "ProjectManagedIdentity"
      | "AccountManagedIdentity"
      | "UserEntraToken"
      | "AgentUserImpersonation"
      | "AgenticIdentityToken"
      | "AgenticUser";
    category?:
      | "PythonFeed"
      | "ContainerRegistry"
      | "Git"
      | "S3"
      | "Snowflake"
      | "AzureKeyVault"
      | "AzureSqlDb"
      | "AzureSynapseAnalytics"
      | "AzureMySqlDb"
      | "AzurePostgresDb"
      | "ADLSGen2"
      | "AzureContainerAppEnvironment"
      | "Redis"
      | "ApiKey"
      | "AzureOpenAI"
      | "AIServices"
      | "CognitiveSearch"
      | "CognitiveService"
      | "CustomKeys"
      | "AzureBlob"
      | "AzureStorageAccount"
      | "AzureOneLake"
      | "CosmosDb"
      | "CosmosDbMongoDbApi"
      | "AzureDataExplorer"
      | "AzureMariaDb"
      | "AzureDatabricksDeltaLake"
      | "AzureSqlMi"
      | "AzureTableStorage"
      | "AmazonRdsForOracle"
      | "AmazonRdsForSqlServer"
      | "AmazonRedshift"
      | "Db2"
      | "Drill"
      | "GoogleBigQuery"
      | "Greenplum"
      | "Hbase"
      | "Hive"
      | "Impala"
      | "Informix"
      | "MariaDb"
      | "MicrosoftAccess"
      | "MySql"
      | "Netezza"
      | "Oracle"
      | "Phoenix"
      | "PostgreSql"
      | "Presto"
      | "SapOpenHub"
      | "SapBw"
      | "SapHana"
      | "SapTable"
      | "Spark"
      | "SqlServer"
      | "Sybase"
      | "Teradata"
      | "Vertica"
      | "Pinecone"
      | "Databricks"
      | "Cassandra"
      | "Couchbase"
      | "MongoDbV2"
      | "MongoDbAtlas"
      | "AmazonS3Compatible"
      | "FileServer"
      | "FtpServer"
      | "GoogleCloudStorage"
      | "Hdfs"
      | "OracleCloudStorage"
      | "Sftp"
      | "GenericHttp"
      | "ODataRest"
      | "Odbc"
      | "GenericRest"
      | "RemoteTool"
      | "AmazonMws"
      | "Concur"
      | "Dynamics"
      | "DynamicsAx"
      | "DynamicsCrm"
      | "GoogleAdWords"
      | "Hubspot"
      | "Jira"
      | "Magento"
      | "Marketo"
      | "Office365"
      | "Eloqua"
      | "Responsys"
      | "OracleServiceCloud"
      | "PayPal"
      | "QuickBooks"
      | "Salesforce"
      | "SalesforceServiceCloud"
      | "SalesforceMarketingCloud"
      | "SapCloudForCustomer"
      | "SapEcc"
      | "ServiceNow"
      | "SharePointOnlineList"
      | "Shopify"
      | "Square"
      | "WebTable"
      | "Xero"
      | "Zoho"
      | "GenericContainerRegistry"
      | "Elasticsearch"
      | "AppInsights"
      | "AppConfig"
      | "OpenAI"
      | "Serp"
      | "BingLLMSearch"
      | "Serverless"
      | "ManagedOnlineEndpoint"
      | "ApiManagement"
      | "ModelGateway"
      | "GroundingWithBingSearch"
      | "GroundingWithCustomSearch"
      | "Sharepoint"
      | "MicrosoftFabric"
      | "PowerPlatformEnvironment"
      | "RemoteA2A";
    createdByWorkspaceArmId?: string;
    error?: string;
    expiryTime?: string;
    group?:
      | "Azure"
      | "AzureAI"
      | "Database"
      | "NoSQL"
      | "File"
      | "GenericProtocol"
      | "ServicesAndApps";
    isSharedToAll?: boolean;
    metadata?: Record<string, string>;
    peRequirement?: "Required" | "NotRequired" | "NotApplicable";
    peStatus?: "Inactive" | "Active" | "NotApplicable";
    sharedUserList?: string[];
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
  };
}
export const AccountConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      authType: Schema.Literals([
        "PAT",
        "ManagedIdentity",
        "UsernamePassword",
        "None",
        "SAS",
        "AccountKey",
        "ServicePrincipal",
        "AccessKey",
        "ApiKey",
        "CustomKeys",
        "OAuth2",
        "AAD",
        "DelegatedSAS",
        "ProjectManagedIdentity",
        "AccountManagedIdentity",
        "UserEntraToken",
        "AgentUserImpersonation",
        "AgenticIdentityToken",
        "AgenticUser",
      ]),
      category: Schema.optional(
        Schema.Literals([
          "PythonFeed",
          "ContainerRegistry",
          "Git",
          "S3",
          "Snowflake",
          "AzureKeyVault",
          "AzureSqlDb",
          "AzureSynapseAnalytics",
          "AzureMySqlDb",
          "AzurePostgresDb",
          "ADLSGen2",
          "AzureContainerAppEnvironment",
          "Redis",
          "ApiKey",
          "AzureOpenAI",
          "AIServices",
          "CognitiveSearch",
          "CognitiveService",
          "CustomKeys",
          "AzureBlob",
          "AzureStorageAccount",
          "AzureOneLake",
          "CosmosDb",
          "CosmosDbMongoDbApi",
          "AzureDataExplorer",
          "AzureMariaDb",
          "AzureDatabricksDeltaLake",
          "AzureSqlMi",
          "AzureTableStorage",
          "AmazonRdsForOracle",
          "AmazonRdsForSqlServer",
          "AmazonRedshift",
          "Db2",
          "Drill",
          "GoogleBigQuery",
          "Greenplum",
          "Hbase",
          "Hive",
          "Impala",
          "Informix",
          "MariaDb",
          "MicrosoftAccess",
          "MySql",
          "Netezza",
          "Oracle",
          "Phoenix",
          "PostgreSql",
          "Presto",
          "SapOpenHub",
          "SapBw",
          "SapHana",
          "SapTable",
          "Spark",
          "SqlServer",
          "Sybase",
          "Teradata",
          "Vertica",
          "Pinecone",
          "Databricks",
          "Cassandra",
          "Couchbase",
          "MongoDbV2",
          "MongoDbAtlas",
          "AmazonS3Compatible",
          "FileServer",
          "FtpServer",
          "GoogleCloudStorage",
          "Hdfs",
          "OracleCloudStorage",
          "Sftp",
          "GenericHttp",
          "ODataRest",
          "Odbc",
          "GenericRest",
          "RemoteTool",
          "AmazonMws",
          "Concur",
          "Dynamics",
          "DynamicsAx",
          "DynamicsCrm",
          "GoogleAdWords",
          "Hubspot",
          "Jira",
          "Magento",
          "Marketo",
          "Office365",
          "Eloqua",
          "Responsys",
          "OracleServiceCloud",
          "PayPal",
          "QuickBooks",
          "Salesforce",
          "SalesforceServiceCloud",
          "SalesforceMarketingCloud",
          "SapCloudForCustomer",
          "SapEcc",
          "ServiceNow",
          "SharePointOnlineList",
          "Shopify",
          "Square",
          "WebTable",
          "Xero",
          "Zoho",
          "GenericContainerRegistry",
          "Elasticsearch",
          "AppInsights",
          "AppConfig",
          "OpenAI",
          "Serp",
          "BingLLMSearch",
          "Serverless",
          "ManagedOnlineEndpoint",
          "ApiManagement",
          "ModelGateway",
          "GroundingWithBingSearch",
          "GroundingWithCustomSearch",
          "Sharepoint",
          "MicrosoftFabric",
          "PowerPlatformEnvironment",
          "RemoteA2A",
        ]),
      ),
      createdByWorkspaceArmId: Schema.optional(Schema.String),
      error: Schema.optional(Schema.String),
      expiryTime: Schema.optional(Schema.String),
      group: Schema.optional(
        Schema.Literals([
          "Azure",
          "AzureAI",
          "Database",
          "NoSQL",
          "File",
          "GenericProtocol",
          "ServicesAndApps",
        ]),
      ),
      isSharedToAll: Schema.optional(Schema.Boolean),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      peRequirement: Schema.optional(
        Schema.Literals(["Required", "NotRequired", "NotApplicable"]),
      ),
      peStatus: Schema.optional(
        Schema.Literals(["Inactive", "Active", "NotApplicable"]),
      ),
      sharedUserList: Schema.optional(Schema.Array(Schema.String)),
      target: Schema.optional(Schema.String),
      useWorkspaceManagedIdentity: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountConnectionsCreateInput>;

// Output Schema
export interface AccountConnectionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountConnectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountConnectionsCreateOutput>;

// The operation
/**
 * Create or update Cognitive Services account connection under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsCreateInput,
    outputSchema: AccountConnectionsCreateOutput,
  }),
);
// Input Schema
export interface AccountConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectionName: string;
}
export const AccountConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountConnectionsDeleteInput>;

// Output Schema
export type AccountConnectionsDeleteOutput = void;
export const AccountConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountConnectionsDeleteOutput>;

// The operation
/**
 * Delete Cognitive Services account connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsDeleteInput,
    outputSchema: AccountConnectionsDeleteOutput,
  }),
);
// Input Schema
export interface AccountConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectionName: string;
}
export const AccountConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountConnectionsGetInput>;

// Output Schema
export interface AccountConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountConnectionsGetOutput>;

// The operation
/**
 * Lists Cognitive Services account connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsGetInput,
    outputSchema: AccountConnectionsGetOutput,
  }),
);
// Input Schema
export interface AccountConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  target?: string;
  category?: string;
  includeAll?: boolean;
}
export const AccountConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    target: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    includeAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountConnectionsListInput>;

// Output Schema
export interface AccountConnectionsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const AccountConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountConnectionsListOutput>;

// The operation
/**
 * Lists all the available  Cognitive Services account connections under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param target - Target of the connection.
 * @param category - Category of the connection.
 * @param includeAll - query parameter that indicates if get connection call should return both connections and datastores
 */
export const AccountConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsListInput,
    outputSchema: AccountConnectionsListOutput,
  }),
);
// Input Schema
export interface AccountConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectionName: string;
  properties?: {
    authType:
      | "PAT"
      | "ManagedIdentity"
      | "UsernamePassword"
      | "None"
      | "SAS"
      | "AccountKey"
      | "ServicePrincipal"
      | "AccessKey"
      | "ApiKey"
      | "CustomKeys"
      | "OAuth2"
      | "AAD"
      | "DelegatedSAS"
      | "ProjectManagedIdentity"
      | "AccountManagedIdentity"
      | "UserEntraToken"
      | "AgentUserImpersonation"
      | "AgenticIdentityToken"
      | "AgenticUser";
    category?:
      | "PythonFeed"
      | "ContainerRegistry"
      | "Git"
      | "S3"
      | "Snowflake"
      | "AzureKeyVault"
      | "AzureSqlDb"
      | "AzureSynapseAnalytics"
      | "AzureMySqlDb"
      | "AzurePostgresDb"
      | "ADLSGen2"
      | "AzureContainerAppEnvironment"
      | "Redis"
      | "ApiKey"
      | "AzureOpenAI"
      | "AIServices"
      | "CognitiveSearch"
      | "CognitiveService"
      | "CustomKeys"
      | "AzureBlob"
      | "AzureStorageAccount"
      | "AzureOneLake"
      | "CosmosDb"
      | "CosmosDbMongoDbApi"
      | "AzureDataExplorer"
      | "AzureMariaDb"
      | "AzureDatabricksDeltaLake"
      | "AzureSqlMi"
      | "AzureTableStorage"
      | "AmazonRdsForOracle"
      | "AmazonRdsForSqlServer"
      | "AmazonRedshift"
      | "Db2"
      | "Drill"
      | "GoogleBigQuery"
      | "Greenplum"
      | "Hbase"
      | "Hive"
      | "Impala"
      | "Informix"
      | "MariaDb"
      | "MicrosoftAccess"
      | "MySql"
      | "Netezza"
      | "Oracle"
      | "Phoenix"
      | "PostgreSql"
      | "Presto"
      | "SapOpenHub"
      | "SapBw"
      | "SapHana"
      | "SapTable"
      | "Spark"
      | "SqlServer"
      | "Sybase"
      | "Teradata"
      | "Vertica"
      | "Pinecone"
      | "Databricks"
      | "Cassandra"
      | "Couchbase"
      | "MongoDbV2"
      | "MongoDbAtlas"
      | "AmazonS3Compatible"
      | "FileServer"
      | "FtpServer"
      | "GoogleCloudStorage"
      | "Hdfs"
      | "OracleCloudStorage"
      | "Sftp"
      | "GenericHttp"
      | "ODataRest"
      | "Odbc"
      | "GenericRest"
      | "RemoteTool"
      | "AmazonMws"
      | "Concur"
      | "Dynamics"
      | "DynamicsAx"
      | "DynamicsCrm"
      | "GoogleAdWords"
      | "Hubspot"
      | "Jira"
      | "Magento"
      | "Marketo"
      | "Office365"
      | "Eloqua"
      | "Responsys"
      | "OracleServiceCloud"
      | "PayPal"
      | "QuickBooks"
      | "Salesforce"
      | "SalesforceServiceCloud"
      | "SalesforceMarketingCloud"
      | "SapCloudForCustomer"
      | "SapEcc"
      | "ServiceNow"
      | "SharePointOnlineList"
      | "Shopify"
      | "Square"
      | "WebTable"
      | "Xero"
      | "Zoho"
      | "GenericContainerRegistry"
      | "Elasticsearch"
      | "AppInsights"
      | "AppConfig"
      | "OpenAI"
      | "Serp"
      | "BingLLMSearch"
      | "Serverless"
      | "ManagedOnlineEndpoint"
      | "ApiManagement"
      | "ModelGateway"
      | "GroundingWithBingSearch"
      | "GroundingWithCustomSearch"
      | "Sharepoint"
      | "MicrosoftFabric"
      | "PowerPlatformEnvironment"
      | "RemoteA2A";
    createdByWorkspaceArmId?: string;
    error?: string;
    expiryTime?: string;
    group?:
      | "Azure"
      | "AzureAI"
      | "Database"
      | "NoSQL"
      | "File"
      | "GenericProtocol"
      | "ServicesAndApps";
    isSharedToAll?: boolean;
    metadata?: Record<string, string>;
    peRequirement?: "Required" | "NotRequired" | "NotApplicable";
    peStatus?: "Inactive" | "Active" | "NotApplicable";
    sharedUserList?: string[];
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
  };
}
export const AccountConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        authType: Schema.Literals([
          "PAT",
          "ManagedIdentity",
          "UsernamePassword",
          "None",
          "SAS",
          "AccountKey",
          "ServicePrincipal",
          "AccessKey",
          "ApiKey",
          "CustomKeys",
          "OAuth2",
          "AAD",
          "DelegatedSAS",
          "ProjectManagedIdentity",
          "AccountManagedIdentity",
          "UserEntraToken",
          "AgentUserImpersonation",
          "AgenticIdentityToken",
          "AgenticUser",
        ]),
        category: Schema.optional(
          Schema.Literals([
            "PythonFeed",
            "ContainerRegistry",
            "Git",
            "S3",
            "Snowflake",
            "AzureKeyVault",
            "AzureSqlDb",
            "AzureSynapseAnalytics",
            "AzureMySqlDb",
            "AzurePostgresDb",
            "ADLSGen2",
            "AzureContainerAppEnvironment",
            "Redis",
            "ApiKey",
            "AzureOpenAI",
            "AIServices",
            "CognitiveSearch",
            "CognitiveService",
            "CustomKeys",
            "AzureBlob",
            "AzureStorageAccount",
            "AzureOneLake",
            "CosmosDb",
            "CosmosDbMongoDbApi",
            "AzureDataExplorer",
            "AzureMariaDb",
            "AzureDatabricksDeltaLake",
            "AzureSqlMi",
            "AzureTableStorage",
            "AmazonRdsForOracle",
            "AmazonRdsForSqlServer",
            "AmazonRedshift",
            "Db2",
            "Drill",
            "GoogleBigQuery",
            "Greenplum",
            "Hbase",
            "Hive",
            "Impala",
            "Informix",
            "MariaDb",
            "MicrosoftAccess",
            "MySql",
            "Netezza",
            "Oracle",
            "Phoenix",
            "PostgreSql",
            "Presto",
            "SapOpenHub",
            "SapBw",
            "SapHana",
            "SapTable",
            "Spark",
            "SqlServer",
            "Sybase",
            "Teradata",
            "Vertica",
            "Pinecone",
            "Databricks",
            "Cassandra",
            "Couchbase",
            "MongoDbV2",
            "MongoDbAtlas",
            "AmazonS3Compatible",
            "FileServer",
            "FtpServer",
            "GoogleCloudStorage",
            "Hdfs",
            "OracleCloudStorage",
            "Sftp",
            "GenericHttp",
            "ODataRest",
            "Odbc",
            "GenericRest",
            "RemoteTool",
            "AmazonMws",
            "Concur",
            "Dynamics",
            "DynamicsAx",
            "DynamicsCrm",
            "GoogleAdWords",
            "Hubspot",
            "Jira",
            "Magento",
            "Marketo",
            "Office365",
            "Eloqua",
            "Responsys",
            "OracleServiceCloud",
            "PayPal",
            "QuickBooks",
            "Salesforce",
            "SalesforceServiceCloud",
            "SalesforceMarketingCloud",
            "SapCloudForCustomer",
            "SapEcc",
            "ServiceNow",
            "SharePointOnlineList",
            "Shopify",
            "Square",
            "WebTable",
            "Xero",
            "Zoho",
            "GenericContainerRegistry",
            "Elasticsearch",
            "AppInsights",
            "AppConfig",
            "OpenAI",
            "Serp",
            "BingLLMSearch",
            "Serverless",
            "ManagedOnlineEndpoint",
            "ApiManagement",
            "ModelGateway",
            "GroundingWithBingSearch",
            "GroundingWithCustomSearch",
            "Sharepoint",
            "MicrosoftFabric",
            "PowerPlatformEnvironment",
            "RemoteA2A",
          ]),
        ),
        createdByWorkspaceArmId: Schema.optional(Schema.String),
        error: Schema.optional(Schema.String),
        expiryTime: Schema.optional(Schema.String),
        group: Schema.optional(
          Schema.Literals([
            "Azure",
            "AzureAI",
            "Database",
            "NoSQL",
            "File",
            "GenericProtocol",
            "ServicesAndApps",
          ]),
        ),
        isSharedToAll: Schema.optional(Schema.Boolean),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        peRequirement: Schema.optional(
          Schema.Literals(["Required", "NotRequired", "NotApplicable"]),
        ),
        peStatus: Schema.optional(
          Schema.Literals(["Inactive", "Active", "NotApplicable"]),
        ),
        sharedUserList: Schema.optional(Schema.Array(Schema.String)),
        target: Schema.optional(Schema.String),
        useWorkspaceManagedIdentity: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountConnectionsUpdateInput>;

// Output Schema
export interface AccountConnectionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountConnectionsUpdateOutput>;

// The operation
/**
 * Update Cognitive Services account connection under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsUpdateInput,
    outputSchema: AccountConnectionsUpdateOutput,
  }),
);
// Input Schema
export interface AccountsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded"
      | "Canceled"
      | "ResolvingDNS";
    endpoint?: string;
    internalId?: string;
    capabilities?: { name?: string; value?: string }[];
    isMigrated?: boolean;
    migrationToken?: string;
    skuChangeInfo?: {
      countOfDowngrades?: number;
      countOfUpgradesAfterDowngrades?: number;
      lastChangeDate?: string;
    };
    customSubDomainName?: string;
    networkAcls?: {
      defaultAction?: "Allow" | "Deny";
      bypass?: "None" | "AzureServices";
      ipRules?: { value: string }[];
      virtualNetworkRules?: {
        id: string;
        state?: string;
        ignoreMissingVnetServiceEndpoint?: boolean;
      }[];
    };
    encryption?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVersion?: string;
        keyVaultUri?: string;
        identityClientId?: string;
      };
      keySource?: "Microsoft.CognitiveServices" | "Microsoft.KeyVault";
    };
    userOwnedStorage?: { resourceId?: string; identityClientId?: string }[];
    amlWorkspace?: { resourceId?: string; identityClientId?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
      systemData?: {
        createdBy?: string;
        createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        createdAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        lastModifiedAt?: string;
      };
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
    apiProperties?: {
      qnaRuntimeEndpoint?: string;
      qnaAzureSearchEndpointKey?: string;
      qnaAzureSearchEndpointId?: string;
      statisticsEnabled?: boolean;
      eventHubConnectionString?: string;
      storageAccountConnectionString?: string;
      aadClientId?: string;
      aadTenantId?: string;
      superUser?: string;
      websiteName?: string;
    };
    dateCreated?: string;
    callRateLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
    dynamicThrottlingEnabled?: boolean;
    storedCompletionsDisabled?: boolean;
    quotaLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
    restrictOutboundNetworkAccess?: boolean;
    allowedFqdnList?: string[];
    disableLocalAuth?: boolean;
    endpoints?: Record<string, string>;
    restore?: boolean;
    deletionDate?: string;
    scheduledPurgeDate?: string;
    locations?: {
      routingMethod?: "Priority" | "Weighted" | "Performance";
      regions?: { name?: string; value?: number; customsubdomain?: string }[];
    };
    commitmentPlanAssociations?: {
      commitmentPlanId?: string;
      commitmentPlanLocation?: string;
    }[];
    abusePenalty?: {
      action?: "Throttle" | "Block";
      rateLimitPercentage?: number;
      expiration?: string;
    };
    raiMonitorConfig?: {
      adxStorageResourceId?: string;
      identityClientId?: string;
    };
    networkInjections?: {
      scenario?: "none" | "agent";
      subnetArmId?: string;
      useMicrosoftManagedNetwork?: boolean;
    }[];
    allowProjectManagement?: boolean;
    defaultProject?: string;
    associatedProjects?: string[];
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
    size?: string;
    family?: string;
    capacity?: number;
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const AccountsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Deleting",
          "Moving",
          "Failed",
          "Succeeded",
          "Canceled",
          "ResolvingDNS",
        ]),
      ),
      endpoint: Schema.optional(Schema.String),
      internalId: Schema.optional(Schema.String),
      capabilities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
      isMigrated: Schema.optional(Schema.Boolean),
      migrationToken: Schema.optional(Schema.String),
      skuChangeInfo: Schema.optional(
        Schema.Struct({
          countOfDowngrades: Schema.optional(Schema.Number),
          countOfUpgradesAfterDowngrades: Schema.optional(Schema.Number),
          lastChangeDate: Schema.optional(Schema.String),
        }),
      ),
      customSubDomainName: Schema.optional(Schema.String),
      networkAcls: Schema.optional(
        Schema.Struct({
          defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
          bypass: Schema.optional(Schema.Literals(["None", "AzureServices"])),
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                value: Schema.String,
              }),
            ),
          ),
          virtualNetworkRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                state: Schema.optional(Schema.String),
                ignoreMissingVnetServiceEndpoint: Schema.optional(
                  Schema.Boolean,
                ),
              }),
            ),
          ),
        }),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          keyVaultProperties: Schema.optional(
            Schema.Struct({
              keyName: Schema.optional(Schema.String),
              keyVersion: Schema.optional(Schema.String),
              keyVaultUri: Schema.optional(Schema.String),
              identityClientId: Schema.optional(Schema.String),
            }),
          ),
          keySource: Schema.optional(
            Schema.Literals([
              "Microsoft.CognitiveServices",
              "Microsoft.KeyVault",
            ]),
          ),
        }),
      ),
      userOwnedStorage: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            identityClientId: Schema.optional(Schema.String),
          }),
        ),
      ),
      amlWorkspace: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          identityClientId: Schema.optional(Schema.String),
        }),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            systemData: Schema.optional(
              Schema.Struct({
                createdBy: Schema.optional(Schema.String),
                createdByType: Schema.optional(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
                createdAt: Schema.optional(Schema.String),
                lastModifiedBy: Schema.optional(Schema.String),
                lastModifiedByType: Schema.optional(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
                lastModifiedAt: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      apiProperties: Schema.optional(
        Schema.Struct({
          qnaRuntimeEndpoint: Schema.optional(Schema.String),
          qnaAzureSearchEndpointKey: Schema.optional(Schema.String),
          qnaAzureSearchEndpointId: Schema.optional(Schema.String),
          statisticsEnabled: Schema.optional(Schema.Boolean),
          eventHubConnectionString: Schema.optional(Schema.String),
          storageAccountConnectionString: Schema.optional(Schema.String),
          aadClientId: Schema.optional(Schema.String),
          aadTenantId: Schema.optional(Schema.String),
          superUser: Schema.optional(Schema.String),
          websiteName: Schema.optional(Schema.String),
        }),
      ),
      dateCreated: Schema.optional(Schema.String),
      callRateLimit: Schema.optional(
        Schema.Struct({
          count: Schema.optional(Schema.Number),
          renewalPeriod: Schema.optional(Schema.Number),
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                renewalPeriod: Schema.optional(Schema.Number),
                count: Schema.optional(Schema.Number),
                minCount: Schema.optional(Schema.Number),
                dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                matchPatterns: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      path: Schema.optional(Schema.String),
                      method: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
      dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
      storedCompletionsDisabled: Schema.optional(Schema.Boolean),
      quotaLimit: Schema.optional(
        Schema.Struct({
          count: Schema.optional(Schema.Number),
          renewalPeriod: Schema.optional(Schema.Number),
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                renewalPeriod: Schema.optional(Schema.Number),
                count: Schema.optional(Schema.Number),
                minCount: Schema.optional(Schema.Number),
                dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                matchPatterns: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      path: Schema.optional(Schema.String),
                      method: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
      restrictOutboundNetworkAccess: Schema.optional(Schema.Boolean),
      allowedFqdnList: Schema.optional(Schema.Array(Schema.String)),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      endpoints: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      restore: Schema.optional(Schema.Boolean),
      deletionDate: Schema.optional(Schema.String),
      scheduledPurgeDate: Schema.optional(Schema.String),
      locations: Schema.optional(
        Schema.Struct({
          routingMethod: Schema.optional(
            Schema.Literals(["Priority", "Weighted", "Performance"]),
          ),
          regions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.Number),
                customsubdomain: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      commitmentPlanAssociations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            commitmentPlanId: Schema.optional(Schema.String),
            commitmentPlanLocation: Schema.optional(Schema.String),
          }),
        ),
      ),
      abusePenalty: Schema.optional(
        Schema.Struct({
          action: Schema.optional(Schema.Literals(["Throttle", "Block"])),
          rateLimitPercentage: Schema.optional(Schema.Number),
          expiration: Schema.optional(Schema.String),
        }),
      ),
      raiMonitorConfig: Schema.optional(
        Schema.Struct({
          adxStorageResourceId: Schema.optional(Schema.String),
          identityClientId: Schema.optional(Schema.String),
        }),
      ),
      networkInjections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            scenario: Schema.optional(Schema.Literals(["none", "agent"])),
            subnetArmId: Schema.optional(Schema.String),
            useMicrosoftManagedNetwork: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      allowProjectManagement: Schema.optional(Schema.Boolean),
      defaultProject: Schema.optional(Schema.String),
      associatedProjects: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium", "Enterprise"]),
      ),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
        ]),
      ),
      tenantId: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<AccountsCreateInput>;

// Output Schema
export interface AccountsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<AccountsCreateOutput>;

// The operation
/**
 * Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
// Input Schema
export interface AccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Deletes a Cognitive Services account from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export interface AccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<AccountsGetInput>;

// Output Schema
export interface AccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Returns a Cognitive Services account specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsListInput {
  subscriptionId: string;
}
export const AccountsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/accounts",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<AccountsListInput>;

// Output Schema
export interface AccountsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const AccountsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<AccountsListOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListInput,
  outputSchema: AccountsListOutput,
}));
// Input Schema
export interface AccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListByResourceGroupInput,
    outputSchema: AccountsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface AccountsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/listKeys",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<AccountsListKeysInput>;

// Output Schema
export interface AccountsListKeysOutput {
  key1?: string;
  key2?: string;
}
export const AccountsListKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<AccountsListKeysOutput>;

// The operation
/**
 * Lists the account keys for the specified Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListKeysInput,
  outputSchema: AccountsListKeysOutput,
}));
// Input Schema
export interface AccountsListModelsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsListModelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/models",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountsListModelsInput>;

// Output Schema
export interface AccountsListModelsOutput {
  nextLink?: string;
  value?: {
    publisher?: string;
    format?: string;
    name?: string;
    version?: string;
    source?: string;
    sourceAccount?: string;
    callRateLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
  }[];
}
export const AccountsListModelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          publisher: Schema.optional(Schema.String),
          format: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          source: Schema.optional(Schema.String),
          sourceAccount: Schema.optional(Schema.String),
          callRateLimit: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
              renewalPeriod: Schema.optional(Schema.Number),
              rules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    key: Schema.optional(Schema.String),
                    renewalPeriod: Schema.optional(Schema.Number),
                    count: Schema.optional(Schema.Number),
                    minCount: Schema.optional(Schema.Number),
                    dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                    matchPatterns: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          path: Schema.optional(Schema.String),
                          method: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountsListModelsOutput>;

// The operation
/**
 * List available Models for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListModels = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListModelsInput,
  outputSchema: AccountsListModelsOutput,
}));
// Input Schema
export interface AccountsListSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsListSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/skus",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<AccountsListSkusInput>;

// Output Schema
export interface AccountsListSkusOutput {
  value?: {
    resourceType?: string;
    sku?: {
      name: string;
      tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
      size?: string;
      family?: string;
      capacity?: number;
    };
  }[];
}
export const AccountsListSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals([
                  "Free",
                  "Basic",
                  "Standard",
                  "Premium",
                  "Enterprise",
                ]),
              ),
              size: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
  },
) as unknown as Schema.Codec<AccountsListSkusOutput>;

// The operation
/**
 * List available SKUs for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListSkusInput,
  outputSchema: AccountsListSkusOutput,
}));
// Input Schema
export interface AccountsListUsagesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $filter?: string;
}
export const AccountsListUsagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/usages",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountsListUsagesInput>;

// Output Schema
export interface AccountsListUsagesOutput {
  nextLink?: string;
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    quotaPeriod?: string;
    limit?: number;
    currentValue?: number;
    nextResetTime?: string;
    status?: "Included" | "Blocked" | "InOverage" | "Unknown";
  }[];
}
export const AccountsListUsagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          quotaPeriod: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          currentValue: Schema.optional(Schema.Number),
          nextResetTime: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals(["Included", "Blocked", "InOverage", "Unknown"]),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountsListUsagesOutput>;

// The operation
/**
 * Get usages for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const AccountsListUsages = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListUsagesInput,
  outputSchema: AccountsListUsagesOutput,
}));
// Input Schema
export interface AccountsRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyName: "Key1" | "Key2";
}
export const AccountsRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.Literals(["Key1", "Key2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/regenerateKey",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AccountsRegenerateKeyInput>;

// Output Schema
export interface AccountsRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const AccountsRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsRegenerateKeyOutput>;

// The operation
/**
 * Regenerates the specified account key for the specified Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsRegenerateKeyInput,
    outputSchema: AccountsRegenerateKeyOutput,
  }),
);
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded"
      | "Canceled"
      | "ResolvingDNS";
    endpoint?: string;
    internalId?: string;
    capabilities?: { name?: string; value?: string }[];
    isMigrated?: boolean;
    migrationToken?: string;
    skuChangeInfo?: {
      countOfDowngrades?: number;
      countOfUpgradesAfterDowngrades?: number;
      lastChangeDate?: string;
    };
    customSubDomainName?: string;
    networkAcls?: {
      defaultAction?: "Allow" | "Deny";
      bypass?: "None" | "AzureServices";
      ipRules?: { value: string }[];
      virtualNetworkRules?: {
        id: string;
        state?: string;
        ignoreMissingVnetServiceEndpoint?: boolean;
      }[];
    };
    encryption?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVersion?: string;
        keyVaultUri?: string;
        identityClientId?: string;
      };
      keySource?: "Microsoft.CognitiveServices" | "Microsoft.KeyVault";
    };
    userOwnedStorage?: { resourceId?: string; identityClientId?: string }[];
    amlWorkspace?: { resourceId?: string; identityClientId?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
      systemData?: {
        createdBy?: string;
        createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        createdAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        lastModifiedAt?: string;
      };
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
    apiProperties?: {
      qnaRuntimeEndpoint?: string;
      qnaAzureSearchEndpointKey?: string;
      qnaAzureSearchEndpointId?: string;
      statisticsEnabled?: boolean;
      eventHubConnectionString?: string;
      storageAccountConnectionString?: string;
      aadClientId?: string;
      aadTenantId?: string;
      superUser?: string;
      websiteName?: string;
    };
    dateCreated?: string;
    callRateLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
    dynamicThrottlingEnabled?: boolean;
    storedCompletionsDisabled?: boolean;
    quotaLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
    restrictOutboundNetworkAccess?: boolean;
    allowedFqdnList?: string[];
    disableLocalAuth?: boolean;
    endpoints?: Record<string, string>;
    restore?: boolean;
    deletionDate?: string;
    scheduledPurgeDate?: string;
    locations?: {
      routingMethod?: "Priority" | "Weighted" | "Performance";
      regions?: { name?: string; value?: number; customsubdomain?: string }[];
    };
    commitmentPlanAssociations?: {
      commitmentPlanId?: string;
      commitmentPlanLocation?: string;
    }[];
    abusePenalty?: {
      action?: "Throttle" | "Block";
      rateLimitPercentage?: number;
      expiration?: string;
    };
    raiMonitorConfig?: {
      adxStorageResourceId?: string;
      identityClientId?: string;
    };
    networkInjections?: {
      scenario?: "none" | "agent";
      subnetArmId?: string;
      useMicrosoftManagedNetwork?: boolean;
    }[];
    allowProjectManagement?: boolean;
    defaultProject?: string;
    associatedProjects?: string[];
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
    size?: string;
    family?: string;
    capacity?: number;
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const AccountsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Deleting",
          "Moving",
          "Failed",
          "Succeeded",
          "Canceled",
          "ResolvingDNS",
        ]),
      ),
      endpoint: Schema.optional(Schema.String),
      internalId: Schema.optional(Schema.String),
      capabilities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
      isMigrated: Schema.optional(Schema.Boolean),
      migrationToken: Schema.optional(Schema.String),
      skuChangeInfo: Schema.optional(
        Schema.Struct({
          countOfDowngrades: Schema.optional(Schema.Number),
          countOfUpgradesAfterDowngrades: Schema.optional(Schema.Number),
          lastChangeDate: Schema.optional(Schema.String),
        }),
      ),
      customSubDomainName: Schema.optional(Schema.String),
      networkAcls: Schema.optional(
        Schema.Struct({
          defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
          bypass: Schema.optional(Schema.Literals(["None", "AzureServices"])),
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                value: Schema.String,
              }),
            ),
          ),
          virtualNetworkRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                state: Schema.optional(Schema.String),
                ignoreMissingVnetServiceEndpoint: Schema.optional(
                  Schema.Boolean,
                ),
              }),
            ),
          ),
        }),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          keyVaultProperties: Schema.optional(
            Schema.Struct({
              keyName: Schema.optional(Schema.String),
              keyVersion: Schema.optional(Schema.String),
              keyVaultUri: Schema.optional(Schema.String),
              identityClientId: Schema.optional(Schema.String),
            }),
          ),
          keySource: Schema.optional(
            Schema.Literals([
              "Microsoft.CognitiveServices",
              "Microsoft.KeyVault",
            ]),
          ),
        }),
      ),
      userOwnedStorage: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            identityClientId: Schema.optional(Schema.String),
          }),
        ),
      ),
      amlWorkspace: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          identityClientId: Schema.optional(Schema.String),
        }),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            systemData: Schema.optional(
              Schema.Struct({
                createdBy: Schema.optional(Schema.String),
                createdByType: Schema.optional(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
                createdAt: Schema.optional(Schema.String),
                lastModifiedBy: Schema.optional(Schema.String),
                lastModifiedByType: Schema.optional(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
                lastModifiedAt: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      apiProperties: Schema.optional(
        Schema.Struct({
          qnaRuntimeEndpoint: Schema.optional(Schema.String),
          qnaAzureSearchEndpointKey: Schema.optional(Schema.String),
          qnaAzureSearchEndpointId: Schema.optional(Schema.String),
          statisticsEnabled: Schema.optional(Schema.Boolean),
          eventHubConnectionString: Schema.optional(Schema.String),
          storageAccountConnectionString: Schema.optional(Schema.String),
          aadClientId: Schema.optional(Schema.String),
          aadTenantId: Schema.optional(Schema.String),
          superUser: Schema.optional(Schema.String),
          websiteName: Schema.optional(Schema.String),
        }),
      ),
      dateCreated: Schema.optional(Schema.String),
      callRateLimit: Schema.optional(
        Schema.Struct({
          count: Schema.optional(Schema.Number),
          renewalPeriod: Schema.optional(Schema.Number),
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                renewalPeriod: Schema.optional(Schema.Number),
                count: Schema.optional(Schema.Number),
                minCount: Schema.optional(Schema.Number),
                dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                matchPatterns: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      path: Schema.optional(Schema.String),
                      method: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
      dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
      storedCompletionsDisabled: Schema.optional(Schema.Boolean),
      quotaLimit: Schema.optional(
        Schema.Struct({
          count: Schema.optional(Schema.Number),
          renewalPeriod: Schema.optional(Schema.Number),
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                renewalPeriod: Schema.optional(Schema.Number),
                count: Schema.optional(Schema.Number),
                minCount: Schema.optional(Schema.Number),
                dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                matchPatterns: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      path: Schema.optional(Schema.String),
                      method: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
      restrictOutboundNetworkAccess: Schema.optional(Schema.Boolean),
      allowedFqdnList: Schema.optional(Schema.Array(Schema.String)),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      endpoints: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      restore: Schema.optional(Schema.Boolean),
      deletionDate: Schema.optional(Schema.String),
      scheduledPurgeDate: Schema.optional(Schema.String),
      locations: Schema.optional(
        Schema.Struct({
          routingMethod: Schema.optional(
            Schema.Literals(["Priority", "Weighted", "Performance"]),
          ),
          regions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.Number),
                customsubdomain: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      commitmentPlanAssociations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            commitmentPlanId: Schema.optional(Schema.String),
            commitmentPlanLocation: Schema.optional(Schema.String),
          }),
        ),
      ),
      abusePenalty: Schema.optional(
        Schema.Struct({
          action: Schema.optional(Schema.Literals(["Throttle", "Block"])),
          rateLimitPercentage: Schema.optional(Schema.Number),
          expiration: Schema.optional(Schema.String),
        }),
      ),
      raiMonitorConfig: Schema.optional(
        Schema.Struct({
          adxStorageResourceId: Schema.optional(Schema.String),
          identityClientId: Schema.optional(Schema.String),
        }),
      ),
      networkInjections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            scenario: Schema.optional(Schema.Literals(["none", "agent"])),
            subnetArmId: Schema.optional(Schema.String),
            useMicrosoftManagedNetwork: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      allowProjectManagement: Schema.optional(Schema.Boolean),
      defaultProject: Schema.optional(Schema.String),
      associatedProjects: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium", "Enterprise"]),
      ),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
        ]),
      ),
      tenantId: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<AccountsUpdateInput>;

// Output Schema
export interface AccountsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccountsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Updates a Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface AgentApplicationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  name: string;
  properties: {
    description?: string | null;
    tags?: Record<string, string> | null;
  };
}
export const AgentApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      tags: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsCreateOrUpdateInput>;

// Output Schema
export interface AgentApplicationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AgentApplicationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AgentApplicationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent Application (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsCreateOrUpdateInput,
    outputSchema: AgentApplicationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AgentApplicationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  name: string;
}
export const AgentApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsDeleteInput>;

// Output Schema
export type AgentApplicationsDeleteOutput = void;
export const AgentApplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsDeleteOutput>;

// The operation
/**
 * Delete Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsDeleteInput,
    outputSchema: AgentApplicationsDeleteOutput,
  }),
);
// Input Schema
export interface AgentApplicationsDisableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  name: string;
}
export const AgentApplicationsDisableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/disable",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsDisableInput>;

// Output Schema
export type AgentApplicationsDisableOutput = void;
export const AgentApplicationsDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsDisableOutput>;

// The operation
/**
 * Disables an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsDisable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsDisableInput,
    outputSchema: AgentApplicationsDisableOutput,
  }),
);
// Input Schema
export interface AgentApplicationsEnableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  name: string;
}
export const AgentApplicationsEnableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/enable",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsEnableInput>;

// Output Schema
export type AgentApplicationsEnableOutput = void;
export const AgentApplicationsEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsEnableOutput>;

// The operation
/**
 * Enables an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsEnable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsEnableInput,
    outputSchema: AgentApplicationsEnableOutput,
  }),
);
// Input Schema
export interface AgentApplicationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  name: string;
}
export const AgentApplicationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsGetInput>;

// Output Schema
export interface AgentApplicationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AgentApplicationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AgentApplicationsGetOutput>;

// The operation
/**
 * Gets an Agent Application by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsGetInput,
    outputSchema: AgentApplicationsGetOutput,
  }),
);
// Input Schema
export interface AgentApplicationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  count?: number;
  $skip?: number;
  $skipToken?: string;
  names?: string;
  searchText?: string;
  orderBy?: string;
  orderByAsc?: boolean;
}
export const AgentApplicationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    count: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    names: Schema.optional(Schema.String),
    searchText: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    orderByAsc: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsListInput>;

// Output Schema
export interface AgentApplicationsListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const AgentApplicationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AgentApplicationsListOutput>;

// The operation
/**
 * Lists Agent Applications in the project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param count - Number of agent applications to be retrieved in a page of results.
 * @param $skip - Number of agent applications to skip.
 * @param $skipToken - Continuation token for pagination.
 * @param names - Names of agent applications to retrieve.
 * @param searchText - Search text for filtering agent applications.
 * @param orderBy - Field to order by.
 * @param orderByAsc - Whether to order in ascending order.
 */
export const AgentApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsListInput,
    outputSchema: AgentApplicationsListOutput,
  }),
);
// Input Schema
export interface AgentApplicationsListAgentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  name: string;
}
export const AgentApplicationsListAgentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/listAgents",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsListAgentsInput>;

// Output Schema
export interface AgentApplicationsListAgentsOutput {
  nextLink?: string | null;
  value?:
    | {
        id?: string;
        name?: string;
        type?: string;
        systemData?: {
          createdBy?: string;
          createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
          createdAt?: string;
          lastModifiedBy?: string;
          lastModifiedByType?:
            | "User"
            | "Application"
            | "ManagedIdentity"
            | "Key";
          lastModifiedAt?: string;
        };
      }[]
    | null;
}
export const AgentApplicationsListAgentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            systemData: Schema.optional(
              Schema.Struct({
                createdBy: Schema.optional(Schema.String),
                createdByType: Schema.optional(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
                createdAt: Schema.optional(Schema.String),
                lastModifiedBy: Schema.optional(Schema.String),
                lastModifiedByType: Schema.optional(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
                lastModifiedAt: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
    ),
  }) as unknown as Schema.Codec<AgentApplicationsListAgentsOutput>;

// The operation
/**
 * Lists agents for an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsListAgents = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsListAgentsInput,
    outputSchema: AgentApplicationsListAgentsOutput,
  }),
);
// Input Schema
export interface AgentDeploymentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  appName: string;
  deploymentName: string;
  properties: {
    description?: string | null;
    tags?: Record<string, string> | null;
  };
}
export const AgentDeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      tags: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentDeploymentsCreateOrUpdateInput>;

// Output Schema
export interface AgentDeploymentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AgentDeploymentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AgentDeploymentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent Deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentDeploymentsCreateOrUpdateInput,
    outputSchema: AgentDeploymentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AgentDeploymentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  appName: string;
  deploymentName: string;
}
export const AgentDeploymentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentDeploymentsDeleteInput>;

// Output Schema
export type AgentDeploymentsDeleteOutput = void;
export const AgentDeploymentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentDeploymentsDeleteOutput>;

// The operation
/**
 * Delete Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsDeleteInput,
    outputSchema: AgentDeploymentsDeleteOutput,
  }),
);
// Input Schema
export interface AgentDeploymentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  appName: string;
  deploymentName: string;
}
export const AgentDeploymentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentDeploymentsGetInput>;

// Output Schema
export interface AgentDeploymentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AgentDeploymentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AgentDeploymentsGetOutput>;

// The operation
/**
 * Gets an Agent Deployment by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentDeploymentsGetInput,
  outputSchema: AgentDeploymentsGetOutput,
}));
// Input Schema
export interface AgentDeploymentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  appName: string;
  count?: number;
  $skipToken?: string;
  names?: string;
  orderBy?: string;
  orderByAsc?: boolean;
}
export const AgentDeploymentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    count: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    names: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    orderByAsc: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentDeploymentsListInput>;

// Output Schema
export interface AgentDeploymentsListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const AgentDeploymentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AgentDeploymentsListOutput>;

// The operation
/**
 * Lists Agent Deployments in the application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param count - Number of agent deployments to be retrieved in a page of results.
 * @param $skipToken - Continuation token for pagination.
 * @param names - Names of agent deployments to retrieve.
 * @param orderBy - Field to order by.
 * @param orderByAsc - Whether to order in ascending order.
 */
export const AgentDeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsListInput,
    outputSchema: AgentDeploymentsListOutput,
  }),
);
// Input Schema
export interface AgentDeploymentsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  appName: string;
  deploymentName: string;
}
export const AgentDeploymentsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}/start",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentDeploymentsStartInput>;

// Output Schema
export type AgentDeploymentsStartOutput = void;
export const AgentDeploymentsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentDeploymentsStartOutput>;

// The operation
/**
 * Starts an Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsStartInput,
    outputSchema: AgentDeploymentsStartOutput,
  }),
);
// Input Schema
export interface AgentDeploymentsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  appName: string;
  deploymentName: string;
}
export const AgentDeploymentsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}/stop",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<AgentDeploymentsStopInput>;

// Output Schema
export type AgentDeploymentsStopOutput = void;
export const AgentDeploymentsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentDeploymentsStopOutput>;

// The operation
/**
 * Stops an Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsStopInput,
    outputSchema: AgentDeploymentsStopOutput,
  }),
);
// Input Schema
export interface CalculateModelCapacityInput {
  subscriptionId: string;
  model?: {
    publisher?: string;
    format?: string;
    name?: string;
    version?: string;
    source?: string;
    sourceAccount?: string;
    callRateLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
  };
  skuName?: string;
  workloads?: {
    requestPerMinute?: number;
    requestParameters?: {
      avgPromptTokens?: number;
      avgGeneratedTokens?: number;
    };
  }[];
}
export const CalculateModelCapacityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    model: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        format: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        sourceAccount: Schema.optional(Schema.String),
        callRateLimit: Schema.optional(
          Schema.Struct({
            count: Schema.optional(Schema.Number),
            renewalPeriod: Schema.optional(Schema.Number),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  renewalPeriod: Schema.optional(Schema.Number),
                  count: Schema.optional(Schema.Number),
                  minCount: Schema.optional(Schema.Number),
                  dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                  matchPatterns: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        method: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    skuName: Schema.optional(Schema.String),
    workloads: Schema.optional(
      Schema.Array(
        Schema.Struct({
          requestPerMinute: Schema.optional(Schema.Number),
          requestParameters: Schema.optional(
            Schema.Struct({
              avgPromptTokens: Schema.optional(Schema.Number),
              avgGeneratedTokens: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/calculateModelCapacity",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CalculateModelCapacityInput>;

// Output Schema
export interface CalculateModelCapacityOutput {
  model?: {
    publisher?: string;
    format?: string;
    name?: string;
    version?: string;
    source?: string;
    sourceAccount?: string;
    callRateLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
  };
  skuName?: string;
  estimatedCapacity?: { value?: number; deployableValue?: number };
}
export const CalculateModelCapacityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        format: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        sourceAccount: Schema.optional(Schema.String),
        callRateLimit: Schema.optional(
          Schema.Struct({
            count: Schema.optional(Schema.Number),
            renewalPeriod: Schema.optional(Schema.Number),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  renewalPeriod: Schema.optional(Schema.Number),
                  count: Schema.optional(Schema.Number),
                  minCount: Schema.optional(Schema.Number),
                  dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                  matchPatterns: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        method: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    skuName: Schema.optional(Schema.String),
    estimatedCapacity: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.Number),
        deployableValue: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<CalculateModelCapacityOutput>;

// The operation
/**
 * Model capacity calculator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const calculateModelCapacity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CalculateModelCapacityInput,
    outputSchema: CalculateModelCapacityOutput,
  }),
);
// Input Schema
export interface CheckDomainAvailabilityInput {
  subscriptionId: string;
  subdomainName: string;
  type: string;
  kind?: string;
}
export const CheckDomainAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    subdomainName: Schema.String,
    type: Schema.String,
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/checkDomainAvailability",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CheckDomainAvailabilityInput>;

// Output Schema
export interface CheckDomainAvailabilityOutput {
  isSubdomainAvailable?: boolean;
  reason?: string;
  subdomainName?: string;
  type?: string;
  kind?: string;
}
export const CheckDomainAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isSubdomainAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    subdomainName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckDomainAvailabilityOutput>;

// The operation
/**
 * Check whether a domain is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CheckDomainAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckDomainAvailabilityInput,
    outputSchema: CheckDomainAvailabilityOutput,
  }),
);
// Input Schema
export interface CheckSkuAvailabilityInput {
  subscriptionId: string;
  location: string;
  skus: string[];
  kind: string;
  type: string;
}
export const CheckSkuAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    skus: Schema.Array(Schema.String),
    kind: Schema.String,
    type: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/checkSkuAvailability",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CheckSkuAvailabilityInput>;

// Output Schema
export interface CheckSkuAvailabilityOutput {
  value?: {
    kind?: string;
    type?: string;
    skuName?: string;
    skuAvailable?: boolean;
    reason?: string;
    message?: string;
  }[];
}
export const CheckSkuAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          skuName: Schema.optional(Schema.String),
          skuAvailable: Schema.optional(Schema.Boolean),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CheckSkuAvailabilityOutput>;

// The operation
/**
 * Check available SKUs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const CheckSkuAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckSkuAvailabilityInput,
    outputSchema: CheckSkuAvailabilityOutput,
  }),
);
// Input Schema
export interface CommitmentPlansCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  commitmentPlanName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    commitmentPlanGuid?: string;
    hostingModel?:
      | "Web"
      | "ConnectedContainer"
      | "DisconnectedContainer"
      | "ProvisionedWeb";
    planType?: string;
    current?: {
      tier?: string;
      count?: number;
      quota?: { quantity?: number; unit?: string };
      startDate?: string;
      endDate?: string;
    };
    autoRenew?: boolean;
    next?: {
      tier?: string;
      count?: number;
      quota?: { quantity?: number; unit?: string };
      startDate?: string;
      endDate?: string;
    };
    last?: {
      tier?: string;
      count?: number;
      quota?: { quantity?: number; unit?: string };
      startDate?: string;
      endDate?: string;
    };
    provisioningIssues?: string[];
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
    size?: string;
    family?: string;
    capacity?: number;
  };
}
export const CommitmentPlansCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Deleting",
            "Moving",
            "Failed",
            "Succeeded",
            "Canceled",
          ]),
        ),
        commitmentPlanGuid: Schema.optional(Schema.String),
        hostingModel: Schema.optional(
          Schema.Literals([
            "Web",
            "ConnectedContainer",
            "DisconnectedContainer",
            "ProvisionedWeb",
          ]),
        ),
        planType: Schema.optional(Schema.String),
        current: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            quota: Schema.optional(
              Schema.Struct({
                quantity: Schema.optional(Schema.Number),
                unit: Schema.optional(Schema.String),
              }),
            ),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
        autoRenew: Schema.optional(Schema.Boolean),
        next: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            quota: Schema.optional(
              Schema.Struct({
                quantity: Schema.optional(Schema.Number),
                unit: Schema.optional(Schema.String),
              }),
            ),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
        last: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            quota: Schema.optional(
              Schema.Struct({
                quantity: Schema.optional(Schema.Number),
                unit: Schema.optional(Schema.String),
              }),
            ),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
        provisioningIssues: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals([
            "Free",
            "Basic",
            "Standard",
            "Premium",
            "Enterprise",
          ]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansCreateOrUpdateInput>;

// Output Schema
export interface CommitmentPlansCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const CommitmentPlansCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdateInput,
    outputSchema: CommitmentPlansCreateOrUpdateOutput,
  }));
// Input Schema
export interface CommitmentPlansCreateOrUpdateAssociationInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
  commitmentPlanAssociationName: string;
  properties?: { accountId?: string };
  etag?: string;
  tags?: Record<string, string>;
}
export const CommitmentPlansCreateOrUpdateAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        accountId: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansCreateOrUpdateAssociationInput>;

// Output Schema
export interface CommitmentPlansCreateOrUpdateAssociationOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const CommitmentPlansCreateOrUpdateAssociationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansCreateOrUpdateAssociationOutput>;

// The operation
/**
 * Create or update the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdateAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdateAssociationInput,
    outputSchema: CommitmentPlansCreateOrUpdateAssociationOutput,
  }));
// Input Schema
export interface CommitmentPlansCreateOrUpdatePlanInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    commitmentPlanGuid?: string;
    hostingModel?:
      | "Web"
      | "ConnectedContainer"
      | "DisconnectedContainer"
      | "ProvisionedWeb";
    planType?: string;
    current?: {
      tier?: string;
      count?: number;
      quota?: { quantity?: number; unit?: string };
      startDate?: string;
      endDate?: string;
    };
    autoRenew?: boolean;
    next?: {
      tier?: string;
      count?: number;
      quota?: { quantity?: number; unit?: string };
      startDate?: string;
      endDate?: string;
    };
    last?: {
      tier?: string;
      count?: number;
      quota?: { quantity?: number; unit?: string };
      startDate?: string;
      endDate?: string;
    };
    provisioningIssues?: string[];
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
    size?: string;
    family?: string;
    capacity?: number;
  };
}
export const CommitmentPlansCreateOrUpdatePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Deleting",
            "Moving",
            "Failed",
            "Succeeded",
            "Canceled",
          ]),
        ),
        commitmentPlanGuid: Schema.optional(Schema.String),
        hostingModel: Schema.optional(
          Schema.Literals([
            "Web",
            "ConnectedContainer",
            "DisconnectedContainer",
            "ProvisionedWeb",
          ]),
        ),
        planType: Schema.optional(Schema.String),
        current: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            quota: Schema.optional(
              Schema.Struct({
                quantity: Schema.optional(Schema.Number),
                unit: Schema.optional(Schema.String),
              }),
            ),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
        autoRenew: Schema.optional(Schema.Boolean),
        next: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            quota: Schema.optional(
              Schema.Struct({
                quantity: Schema.optional(Schema.Number),
                unit: Schema.optional(Schema.String),
              }),
            ),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
        last: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            quota: Schema.optional(
              Schema.Struct({
                quantity: Schema.optional(Schema.Number),
                unit: Schema.optional(Schema.String),
              }),
            ),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
        provisioningIssues: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals([
            "Free",
            "Basic",
            "Standard",
            "Premium",
            "Enterprise",
          ]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansCreateOrUpdatePlanInput>;

// Output Schema
export interface CommitmentPlansCreateOrUpdatePlanOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const CommitmentPlansCreateOrUpdatePlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansCreateOrUpdatePlanOutput>;

// The operation
/**
 * Create Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdatePlan =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdatePlanInput,
    outputSchema: CommitmentPlansCreateOrUpdatePlanOutput,
  }));
// Input Schema
export interface CommitmentPlansDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  commitmentPlanName: string;
}
export const CommitmentPlansDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansDeleteInput>;

// Output Schema
export type CommitmentPlansDeleteOutput = void;
export const CommitmentPlansDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CommitmentPlansDeleteOutput>;

// The operation
/**
 * Deletes the specified commitmentPlan associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansDeleteInput,
    outputSchema: CommitmentPlansDeleteOutput,
  }),
);
// Input Schema
export interface CommitmentPlansDeleteAssociationInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
  commitmentPlanAssociationName: string;
}
export const CommitmentPlansDeleteAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansDeleteAssociationInput>;

// Output Schema
export type CommitmentPlansDeleteAssociationOutput = void;
export const CommitmentPlansDeleteAssociationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CommitmentPlansDeleteAssociationOutput>;

// The operation
/**
 * Deletes the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansDeleteAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansDeleteAssociationInput,
    outputSchema: CommitmentPlansDeleteAssociationOutput,
  }));
// Input Schema
export interface CommitmentPlansDeletePlanInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
}
export const CommitmentPlansDeletePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansDeletePlanInput>;

// Output Schema
export type CommitmentPlansDeletePlanOutput = void;
export const CommitmentPlansDeletePlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CommitmentPlansDeletePlanOutput>;

// The operation
/**
 * Deletes a Cognitive Services commitment plan from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansDeletePlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansDeletePlanInput,
    outputSchema: CommitmentPlansDeletePlanOutput,
  }),
);
// Input Schema
export interface CommitmentPlansGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  commitmentPlanName: string;
}
export const CommitmentPlansGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansGetInput>;

// Output Schema
export interface CommitmentPlansGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const CommitmentPlansGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansGetOutput>;

// The operation
/**
 * Gets the specified commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentPlansGetInput,
  outputSchema: CommitmentPlansGetOutput,
}));
// Input Schema
export interface CommitmentPlansGetAssociationInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
  commitmentPlanAssociationName: string;
}
export const CommitmentPlansGetAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansGetAssociationInput>;

// Output Schema
export interface CommitmentPlansGetAssociationOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const CommitmentPlansGetAssociationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansGetAssociationOutput>;

// The operation
/**
 * Gets the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansGetAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansGetAssociationInput,
    outputSchema: CommitmentPlansGetAssociationOutput,
  }));
// Input Schema
export interface CommitmentPlansGetPlanInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
}
export const CommitmentPlansGetPlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansGetPlanInput>;

// Output Schema
export interface CommitmentPlansGetPlanOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const CommitmentPlansGetPlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansGetPlanOutput>;

// The operation
/**
 * Returns a Cognitive Services commitment plan specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansGetPlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansGetPlanInput,
    outputSchema: CommitmentPlansGetPlanOutput,
  }),
);
// Input Schema
export interface CommitmentPlansListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CommitmentPlansListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansListInput>;

// Output Schema
export interface CommitmentPlansListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const CommitmentPlansListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansListOutput>;

// The operation
/**
 * Gets the commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const CommitmentPlansList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentPlansListInput,
  outputSchema: CommitmentPlansListOutput,
}));
// Input Schema
export interface CommitmentPlansListAssociationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
}
export const CommitmentPlansListAssociationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansListAssociationsInput>;

// Output Schema
export interface CommitmentPlansListAssociationsOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const CommitmentPlansListAssociationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansListAssociationsOutput>;

// The operation
/**
 * Gets the associations of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansListAssociations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListAssociationsInput,
    outputSchema: CommitmentPlansListAssociationsOutput,
  }));
// Input Schema
export interface CommitmentPlansListPlansByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CommitmentPlansListPlansByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansListPlansByResourceGroupInput>;

// Output Schema
export interface CommitmentPlansListPlansByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const CommitmentPlansListPlansByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansListPlansByResourceGroupOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CommitmentPlansListPlansByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListPlansByResourceGroupInput,
    outputSchema: CommitmentPlansListPlansByResourceGroupOutput,
  }));
// Input Schema
export interface CommitmentPlansListPlansBySubscriptionInput {
  subscriptionId: string;
}
export const CommitmentPlansListPlansBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/commitmentPlans",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansListPlansBySubscriptionInput>;

// Output Schema
export interface CommitmentPlansListPlansBySubscriptionOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const CommitmentPlansListPlansBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansListPlansBySubscriptionOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CommitmentPlansListPlansBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListPlansBySubscriptionInput,
    outputSchema: CommitmentPlansListPlansBySubscriptionOutput,
  }));
// Input Schema
export interface CommitmentPlansUpdatePlanInput {
  subscriptionId: string;
  resourceGroupName: string;
  commitmentPlanName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const CommitmentPlansUpdatePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals([
            "Free",
            "Basic",
            "Standard",
            "Premium",
            "Enterprise",
          ]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentPlansUpdatePlanInput>;

// Output Schema
export interface CommitmentPlansUpdatePlanOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const CommitmentPlansUpdatePlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CommitmentPlansUpdatePlanOutput>;

// The operation
/**
 * Create Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansUpdatePlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansUpdatePlanInput,
    outputSchema: CommitmentPlansUpdatePlanOutput,
  }),
);
// Input Schema
export interface CommitmentTiersListInput {
  subscriptionId: string;
  location: string;
}
export const CommitmentTiersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/commitmentTiers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CommitmentTiersListInput>;

// Output Schema
export interface CommitmentTiersListOutput {
  nextLink?: string;
  value?: {
    kind?: string;
    skuName?: string;
    hostingModel?:
      | "Web"
      | "ConnectedContainer"
      | "DisconnectedContainer"
      | "ProvisionedWeb";
    planType?: string;
    tier?: string;
    maxCount?: number;
    quota?: { quantity?: number; unit?: string };
    cost?: { commitmentMeterId?: string; overageMeterId?: string };
  }[];
}
export const CommitmentTiersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          skuName: Schema.optional(Schema.String),
          hostingModel: Schema.optional(
            Schema.Literals([
              "Web",
              "ConnectedContainer",
              "DisconnectedContainer",
              "ProvisionedWeb",
            ]),
          ),
          planType: Schema.optional(Schema.String),
          tier: Schema.optional(Schema.String),
          maxCount: Schema.optional(Schema.Number),
          quota: Schema.optional(
            Schema.Struct({
              quantity: Schema.optional(Schema.Number),
              unit: Schema.optional(Schema.String),
            }),
          ),
          cost: Schema.optional(
            Schema.Struct({
              commitmentMeterId: Schema.optional(Schema.String),
              overageMeterId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CommitmentTiersListOutput>;

// The operation
/**
 * List Commitment Tiers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const CommitmentTiersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentTiersListInput,
  outputSchema: CommitmentTiersListOutput,
}));
// Input Schema
export interface DefenderForAISettingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  defenderForAISettingName: string;
  properties?: { state?: "Disabled" | "Enabled" };
  etag?: string;
  tags?: Record<string, string>;
}
export const DefenderForAISettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DefenderForAISettingsCreateOrUpdateInput>;

// Output Schema
export interface DefenderForAISettingsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DefenderForAISettingsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DefenderForAISettingsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or Updates the specified Defender for AI setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DefenderForAISettingsCreateOrUpdateInput,
    outputSchema: DefenderForAISettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DefenderForAISettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  defenderForAISettingName: string;
}
export const DefenderForAISettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DefenderForAISettingsGetInput>;

// Output Schema
export interface DefenderForAISettingsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DefenderForAISettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DefenderForAISettingsGetOutput>;

// The operation
/**
 * Gets the specified Defender for AI setting by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsGetInput,
    outputSchema: DefenderForAISettingsGetOutput,
  }),
);
// Input Schema
export interface DefenderForAISettingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DefenderForAISettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DefenderForAISettingsListInput>;

// Output Schema
export interface DefenderForAISettingsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const DefenderForAISettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DefenderForAISettingsListOutput>;

// The operation
/**
 * Lists the Defender for AI settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DefenderForAISettingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsListInput,
    outputSchema: DefenderForAISettingsListOutput,
  }),
);
// Input Schema
export interface DefenderForAISettingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  defenderForAISettingName: string;
  properties?: { state?: "Disabled" | "Enabled" };
  etag?: string;
  tags?: Record<string, string>;
}
export const DefenderForAISettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DefenderForAISettingsUpdateInput>;

// Output Schema
export interface DefenderForAISettingsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DefenderForAISettingsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DefenderForAISettingsUpdateOutput>;

// The operation
/**
 * Updates the specified Defender for AI setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsUpdateInput,
    outputSchema: DefenderForAISettingsUpdateOutput,
  }),
);
// Input Schema
export interface DeletedAccountsGetInput {
  subscriptionId: string;
  location: string;
  resourceGroupName: string;
  accountName: string;
}
export const DeletedAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/resourceGroups/{resourceGroupName}/deletedAccounts/{accountName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeletedAccountsGetInput>;

// Output Schema
export interface DeletedAccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeletedAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DeletedAccountsGetOutput>;

// The operation
/**
 * Returns a Cognitive Services account specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeletedAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsGetInput,
  outputSchema: DeletedAccountsGetOutput,
}));
// Input Schema
export interface DeletedAccountsListInput {
  subscriptionId: string;
}
export const DeletedAccountsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/deletedAccounts",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeletedAccountsListInput>;

// Output Schema
export interface DeletedAccountsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const DeletedAccountsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DeletedAccountsListOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DeletedAccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsListInput,
  outputSchema: DeletedAccountsListOutput,
}));
// Input Schema
export interface DeletedAccountsPurgeInput {
  subscriptionId: string;
  location: string;
  resourceGroupName: string;
  accountName: string;
}
export const DeletedAccountsPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/resourceGroups/{resourceGroupName}/deletedAccounts/{accountName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeletedAccountsPurgeInput>;

// Output Schema
export type DeletedAccountsPurgeOutput = void;
export const DeletedAccountsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeletedAccountsPurgeOutput>;

// The operation
/**
 * Deletes a Cognitive Services account from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeletedAccountsPurge = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeletedAccountsPurgeInput,
    outputSchema: DeletedAccountsPurgeOutput,
  }),
);
// Input Schema
export interface DeploymentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  deploymentName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded"
      | "Disabled"
      | "Canceled";
    model?: {
      publisher?: string;
      format?: string;
      name?: string;
      version?: string;
      source?: string;
      sourceAccount?: string;
      callRateLimit?: {
        count?: number;
        renewalPeriod?: number;
        rules?: {
          key?: string;
          renewalPeriod?: number;
          count?: number;
          minCount?: number;
          dynamicThrottlingEnabled?: boolean;
          matchPatterns?: { path?: string; method?: string }[];
        }[];
      };
    };
    scaleSettings?: {
      scaleType?: "Standard" | "Manual";
      capacity?: number;
      activeCapacity?: number;
    };
    capabilities?: Record<string, string>;
    raiPolicyName?: string;
    callRateLimit?: {
      count?: number;
      renewalPeriod?: number;
      rules?: {
        key?: string;
        renewalPeriod?: number;
        count?: number;
        minCount?: number;
        dynamicThrottlingEnabled?: boolean;
        matchPatterns?: { path?: string; method?: string }[];
      }[];
    };
    rateLimits?: {
      key?: string;
      renewalPeriod?: number;
      count?: number;
      minCount?: number;
      dynamicThrottlingEnabled?: boolean;
      matchPatterns?: { path?: string; method?: string }[];
    }[];
    versionUpgradeOption?:
      | "OnceNewDefaultVersionAvailable"
      | "OnceCurrentVersionExpired"
      | "NoAutoUpgrade";
    dynamicThrottlingEnabled?: boolean;
    currentCapacity?: number;
    capacitySettings?: { designatedCapacity?: number; priority?: number };
    parentDeploymentName?: string;
    spilloverDeploymentName?: string;
    serviceTier?: "Default" | "Priority";
    deploymentState?: "Running" | "Paused";
    routing?: {
      mode?: "cost" | "balanced" | "quality";
      models?: {
        publisher?: string;
        format?: string;
        name?: string;
        version?: string;
        source?: string;
        sourceAccount?: string;
        callRateLimit?: {
          count?: number;
          renewalPeriod?: number;
          rules?: {
            key?: string;
            renewalPeriod?: number;
            count?: number;
            minCount?: number;
            dynamicThrottlingEnabled?: boolean;
            matchPatterns?: { path?: string; method?: string }[];
          }[];
        };
      }[];
    };
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
    size?: string;
    family?: string;
    capacity?: number;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const DeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Deleting",
            "Moving",
            "Failed",
            "Succeeded",
            "Disabled",
            "Canceled",
          ]),
        ),
        model: Schema.optional(
          Schema.Struct({
            publisher: Schema.optional(Schema.String),
            format: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            source: Schema.optional(Schema.String),
            sourceAccount: Schema.optional(Schema.String),
            callRateLimit: Schema.optional(
              Schema.Struct({
                count: Schema.optional(Schema.Number),
                renewalPeriod: Schema.optional(Schema.Number),
                rules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      renewalPeriod: Schema.optional(Schema.Number),
                      count: Schema.optional(Schema.Number),
                      minCount: Schema.optional(Schema.Number),
                      dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                      matchPatterns: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            path: Schema.optional(Schema.String),
                            method: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        scaleSettings: Schema.optional(
          Schema.Struct({
            scaleType: Schema.optional(Schema.Literals(["Standard", "Manual"])),
            capacity: Schema.optional(Schema.Number),
            activeCapacity: Schema.optional(Schema.Number),
          }),
        ),
        capabilities: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        raiPolicyName: Schema.optional(Schema.String),
        callRateLimit: Schema.optional(
          Schema.Struct({
            count: Schema.optional(Schema.Number),
            renewalPeriod: Schema.optional(Schema.Number),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  renewalPeriod: Schema.optional(Schema.Number),
                  count: Schema.optional(Schema.Number),
                  minCount: Schema.optional(Schema.Number),
                  dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                  matchPatterns: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        method: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
        rateLimits: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(Schema.String),
              renewalPeriod: Schema.optional(Schema.Number),
              count: Schema.optional(Schema.Number),
              minCount: Schema.optional(Schema.Number),
              dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
              matchPatterns: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    path: Schema.optional(Schema.String),
                    method: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        versionUpgradeOption: Schema.optional(
          Schema.Literals([
            "OnceNewDefaultVersionAvailable",
            "OnceCurrentVersionExpired",
            "NoAutoUpgrade",
          ]),
        ),
        dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
        currentCapacity: Schema.optional(Schema.Number),
        capacitySettings: Schema.optional(
          Schema.Struct({
            designatedCapacity: Schema.optional(Schema.Number),
            priority: Schema.optional(Schema.Number),
          }),
        ),
        parentDeploymentName: Schema.optional(Schema.String),
        spilloverDeploymentName: Schema.optional(Schema.String),
        serviceTier: Schema.optional(Schema.Literals(["Default", "Priority"])),
        deploymentState: Schema.optional(
          Schema.Literals(["Running", "Paused"]),
        ),
        routing: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(
              Schema.Literals(["cost", "balanced", "quality"]),
            ),
            models: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  publisher: Schema.optional(Schema.String),
                  format: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  version: Schema.optional(Schema.String),
                  source: Schema.optional(Schema.String),
                  sourceAccount: Schema.optional(Schema.String),
                  callRateLimit: Schema.optional(
                    Schema.Struct({
                      count: Schema.optional(Schema.Number),
                      renewalPeriod: Schema.optional(Schema.Number),
                      rules: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            key: Schema.optional(Schema.String),
                            renewalPeriod: Schema.optional(Schema.Number),
                            count: Schema.optional(Schema.Number),
                            minCount: Schema.optional(Schema.Number),
                            dynamicThrottlingEnabled: Schema.optional(
                              Schema.Boolean,
                            ),
                            matchPatterns: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  path: Schema.optional(Schema.String),
                                  method: Schema.optional(Schema.String),
                                }),
                              ),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals([
            "Free",
            "Basic",
            "Standard",
            "Premium",
            "Enterprise",
          ]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsCreateOrUpdateInput>;

// Output Schema
export interface DeploymentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeploymentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DeploymentsCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsCreateOrUpdateInput,
    outputSchema: DeploymentsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DeploymentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  deploymentName: string;
}
export const DeploymentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<DeploymentsDeleteInput>;

// Output Schema
export type DeploymentsDeleteOutput = void;
export const DeploymentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsDeleteOutput>;

// The operation
/**
 * Deletes the specified deployment associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsDeleteInput,
  outputSchema: DeploymentsDeleteOutput,
}));
// Input Schema
export interface DeploymentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  deploymentName: string;
}
export const DeploymentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<DeploymentsGetInput>;

// Output Schema
export interface DeploymentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeploymentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DeploymentsGetOutput>;

// The operation
/**
 * Gets the specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsGetInput,
  outputSchema: DeploymentsGetOutput,
}));
// Input Schema
export interface DeploymentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DeploymentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<DeploymentsListInput>;

// Output Schema
export interface DeploymentsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const DeploymentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<DeploymentsListOutput>;

// The operation
/**
 * Gets the deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListInput,
  outputSchema: DeploymentsListOutput,
}));
// Input Schema
export interface DeploymentsListSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  deploymentName: string;
}
export const DeploymentsListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/skus",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsListSkusInput>;

// Output Schema
export interface DeploymentsListSkusOutput {
  nextLink?: string;
  value?: {
    resourceType?: string;
    sku?: {
      name: string;
      tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
      size?: string;
      family?: string;
      capacity?: number;
    };
    capacity?: {
      minimum?: number;
      maximum?: number;
      step?: number;
      default?: number;
      allowedValues?: number[];
    };
  }[];
}
export const DeploymentsListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals([
                  "Free",
                  "Basic",
                  "Standard",
                  "Premium",
                  "Enterprise",
                ]),
              ),
              size: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
          capacity: Schema.optional(
            Schema.Struct({
              minimum: Schema.optional(Schema.Number),
              maximum: Schema.optional(Schema.Number),
              step: Schema.optional(Schema.Number),
              default: Schema.optional(Schema.Number),
              allowedValues: Schema.optional(Schema.Array(Schema.Number)),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DeploymentsListSkusOutput>;

// The operation
/**
 * Lists the specified deployments skus associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListSkusInput,
  outputSchema: DeploymentsListSkusOutput,
}));
// Input Schema
export interface DeploymentsPauseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  deploymentName: string;
}
export const DeploymentsPauseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/pause",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<DeploymentsPauseInput>;

// Output Schema
export interface DeploymentsPauseOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeploymentsPauseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  },
) as unknown as Schema.Codec<DeploymentsPauseOutput>;

// The operation
/**
 * Pause a deployment
 *
 * Pauses inferencing on a deployment by setting the deploymentState to 'Paused' (see #/definitions/DeploymentProperties/properties/deploymentState). Only Standard, DataZoneStandard, and GlobalStandard SKUs support this operation. Inference requests to the paused deployment endpoint will receive HTTP 423 (Locked). This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsPause = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsPauseInput,
  outputSchema: DeploymentsPauseOutput,
}));
// Input Schema
export interface DeploymentsResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  deploymentName: string;
}
export const DeploymentsResumeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/resume",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<DeploymentsResumeInput>;

// Output Schema
export interface DeploymentsResumeOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeploymentsResumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DeploymentsResumeOutput>;

// The operation
/**
 * Resume a deployment
 *
 * Resumes inferencing on a previously paused deployment by setting the deploymentState to 'Running' (see #/definitions/DeploymentProperties/properties/deploymentState). This operation is idempotent and can be safely called on already running deployments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsResume = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsResumeInput,
  outputSchema: DeploymentsResumeOutput,
}));
// Input Schema
export interface DeploymentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  deploymentName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium" | "Enterprise";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const DeploymentsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals([
            "Free",
            "Basic",
            "Standard",
            "Premium",
            "Enterprise",
          ]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<DeploymentsUpdateInput>;

// Output Schema
export interface DeploymentsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeploymentsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DeploymentsUpdateOutput>;

// The operation
/**
 * Update specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsUpdateInput,
  outputSchema: DeploymentsUpdateOutput,
}));
// Input Schema
export interface EncryptionScopesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  encryptionScopeName: string;
  properties?: {
    keyVaultProperties?: {
      keyName?: string;
      keyVersion?: string;
      keyVaultUri?: string;
      identityClientId?: string;
    };
    keySource?: "Microsoft.CognitiveServices" | "Microsoft.KeyVault";
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const EncryptionScopesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        keyVaultProperties: Schema.optional(
          Schema.Struct({
            keyName: Schema.optional(Schema.String),
            keyVersion: Schema.optional(Schema.String),
            keyVaultUri: Schema.optional(Schema.String),
            identityClientId: Schema.optional(Schema.String),
          }),
        ),
        keySource: Schema.optional(
          Schema.Literals([
            "Microsoft.CognitiveServices",
            "Microsoft.KeyVault",
          ]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesCreateOrUpdateInput>;

// Output Schema
export interface EncryptionScopesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EncryptionScopesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<EncryptionScopesCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified encryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EncryptionScopesCreateOrUpdateInput,
    outputSchema: EncryptionScopesCreateOrUpdateOutput,
  }));
// Input Schema
export interface EncryptionScopesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  encryptionScopeName: string;
}
export const EncryptionScopesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesDeleteInput>;

// Output Schema
export type EncryptionScopesDeleteOutput = void;
export const EncryptionScopesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EncryptionScopesDeleteOutput>;

// The operation
/**
 * Deletes the specified encryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesDeleteInput,
    outputSchema: EncryptionScopesDeleteOutput,
  }),
);
// Input Schema
export interface EncryptionScopesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  encryptionScopeName: string;
}
export const EncryptionScopesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesGetInput>;

// Output Schema
export interface EncryptionScopesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EncryptionScopesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<EncryptionScopesGetOutput>;

// The operation
/**
 * Gets the specified EncryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesGetInput,
  outputSchema: EncryptionScopesGetOutput,
}));
// Input Schema
export interface EncryptionScopesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const EncryptionScopesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesListInput>;

// Output Schema
export interface EncryptionScopesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const EncryptionScopesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<EncryptionScopesListOutput>;

// The operation
/**
 * Gets the content filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const EncryptionScopesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesListInput,
    outputSchema: EncryptionScopesListOutput,
  }),
);
// Input Schema
export interface LocationBasedModelCapacitiesListInput {
  subscriptionId: string;
  location: string;
  modelFormat: string;
  modelName: string;
  modelVersion: string;
}
export const LocationBasedModelCapacitiesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    modelFormat: Schema.String,
    modelName: Schema.String,
    modelVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/modelCapacities",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<LocationBasedModelCapacitiesListInput>;

// Output Schema
export interface LocationBasedModelCapacitiesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const LocationBasedModelCapacitiesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LocationBasedModelCapacitiesListOutput>;

// The operation
/**
 * List Location Based ModelCapacities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param modelFormat - The format of the Model
 * @param modelName - The name of the Model
 * @param modelVersion - The version of the Model
 */
export const LocationBasedModelCapacitiesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationBasedModelCapacitiesListInput,
    outputSchema: LocationBasedModelCapacitiesListOutput,
  }));
// Input Schema
export interface ManagedNetworkProvisionsProvisionManagedNetworkInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
}
export const ManagedNetworkProvisionsProvisionManagedNetworkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/provision",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkProvisionsProvisionManagedNetworkInput>;

// Output Schema
export interface ManagedNetworkProvisionsProvisionManagedNetworkOutput {
  status?: "Inactive" | "Active";
}
export const ManagedNetworkProvisionsProvisionManagedNetworkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.Literals(["Inactive", "Active"])),
  }) as unknown as Schema.Codec<ManagedNetworkProvisionsProvisionManagedNetworkOutput>;

// The operation
/**
 * Provisions the managed network of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkProvisionsProvisionManagedNetwork =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkProvisionsProvisionManagedNetworkInput,
    outputSchema: ManagedNetworkProvisionsProvisionManagedNetworkOutput,
  }));
// Input Schema
export interface ManagedNetworkSettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
}
export const ManagedNetworkSettingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsDeleteInput>;

// Output Schema
export type ManagedNetworkSettingsDeleteOutput = void;
export const ManagedNetworkSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedNetworkSettingsDeleteOutput>;

// The operation
/**
 * Delete API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkSettingsDeleteInput,
    outputSchema: ManagedNetworkSettingsDeleteOutput,
  }));
// Input Schema
export interface ManagedNetworkSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
}
export const ManagedNetworkSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsGetInput>;

// Output Schema
export interface ManagedNetworkSettingsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ManagedNetworkSettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ManagedNetworkSettingsGetOutput>;

// The operation
/**
 * Get API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsGetInput,
    outputSchema: ManagedNetworkSettingsGetOutput,
  }),
);
// Input Schema
export interface ManagedNetworkSettingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ManagedNetworkSettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsListInput>;

// Output Schema
export interface ManagedNetworkSettingsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ManagedNetworkSettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ManagedNetworkSettingsListOutput>;

// The operation
/**
 * List API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const ManagedNetworkSettingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsListInput,
    outputSchema: ManagedNetworkSettingsListOutput,
  }),
);
// Input Schema
export interface ManagedNetworkSettingsPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
  properties?: {
    managedNetwork?: {
      isolationMode?:
        | "Disabled"
        | "AllowInternetOutbound"
        | "AllowOnlyApprovedOutbound";
      networkId?: string;
      outboundRules?: Record<
        string,
        {
          category?: "Required" | "Recommended" | "UserDefined" | "Dependency";
          status?:
            | "Inactive"
            | "Active"
            | "Provisioning"
            | "Deleting"
            | "Failed";
          type: "FQDN" | "PrivateEndpoint" | "ServiceTag";
          errorInformation?: string;
          parentRuleNames?: string[];
        }
      > | null;
      status?: { status?: "Inactive" | "Active" };
      firewallSku?: "Standard" | "Basic";
      managedNetworkKind?: "V1" | "V2";
      firewallPublicIpAddress?: string | null;
      provisioningState?:
        | "Deferred"
        | "Updating"
        | "Succeeded"
        | "Failed"
        | "Deleting"
        | "Deleted";
    };
    provisioningState?:
      | "Deferred"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Deleted";
  };
}
export const ManagedNetworkSettingsPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managedNetwork: Schema.optional(
          Schema.Struct({
            isolationMode: Schema.optional(
              Schema.Literals([
                "Disabled",
                "AllowInternetOutbound",
                "AllowOnlyApprovedOutbound",
              ]),
            ),
            networkId: Schema.optional(Schema.String),
            outboundRules: Schema.optional(
              Schema.NullOr(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    category: Schema.optional(
                      Schema.Literals([
                        "Required",
                        "Recommended",
                        "UserDefined",
                        "Dependency",
                      ]),
                    ),
                    status: Schema.optional(
                      Schema.Literals([
                        "Inactive",
                        "Active",
                        "Provisioning",
                        "Deleting",
                        "Failed",
                      ]),
                    ),
                    type: Schema.Literals([
                      "FQDN",
                      "PrivateEndpoint",
                      "ServiceTag",
                    ]),
                    errorInformation: Schema.optional(Schema.String),
                    parentRuleNames: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              ),
            ),
            status: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals(["Inactive", "Active"]),
                ),
              }),
            ),
            firewallSku: Schema.optional(
              Schema.Literals(["Standard", "Basic"]),
            ),
            managedNetworkKind: Schema.optional(Schema.Literals(["V1", "V2"])),
            firewallPublicIpAddress: Schema.optional(
              Schema.NullOr(Schema.String),
            ),
            provisioningState: Schema.optional(
              Schema.Literals([
                "Deferred",
                "Updating",
                "Succeeded",
                "Failed",
                "Deleting",
                "Deleted",
              ]),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deferred",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Deleted",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsPatchInput>;

// Output Schema
export interface ManagedNetworkSettingsPatchOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ManagedNetworkSettingsPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ManagedNetworkSettingsPatchOutput>;

// The operation
/**
 * Patch API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsPatchInput,
    outputSchema: ManagedNetworkSettingsPatchOutput,
  }),
);
// Input Schema
export interface ManagedNetworkSettingsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
  properties?: {
    managedNetwork?: {
      isolationMode?:
        | "Disabled"
        | "AllowInternetOutbound"
        | "AllowOnlyApprovedOutbound";
      networkId?: string;
      outboundRules?: Record<
        string,
        {
          category?: "Required" | "Recommended" | "UserDefined" | "Dependency";
          status?:
            | "Inactive"
            | "Active"
            | "Provisioning"
            | "Deleting"
            | "Failed";
          type: "FQDN" | "PrivateEndpoint" | "ServiceTag";
          errorInformation?: string;
          parentRuleNames?: string[];
        }
      > | null;
      status?: { status?: "Inactive" | "Active" };
      firewallSku?: "Standard" | "Basic";
      managedNetworkKind?: "V1" | "V2";
      firewallPublicIpAddress?: string | null;
      provisioningState?:
        | "Deferred"
        | "Updating"
        | "Succeeded"
        | "Failed"
        | "Deleting"
        | "Deleted";
    };
    provisioningState?:
      | "Deferred"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Deleted";
  };
}
export const ManagedNetworkSettingsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managedNetwork: Schema.optional(
          Schema.Struct({
            isolationMode: Schema.optional(
              Schema.Literals([
                "Disabled",
                "AllowInternetOutbound",
                "AllowOnlyApprovedOutbound",
              ]),
            ),
            networkId: Schema.optional(Schema.String),
            outboundRules: Schema.optional(
              Schema.NullOr(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    category: Schema.optional(
                      Schema.Literals([
                        "Required",
                        "Recommended",
                        "UserDefined",
                        "Dependency",
                      ]),
                    ),
                    status: Schema.optional(
                      Schema.Literals([
                        "Inactive",
                        "Active",
                        "Provisioning",
                        "Deleting",
                        "Failed",
                      ]),
                    ),
                    type: Schema.Literals([
                      "FQDN",
                      "PrivateEndpoint",
                      "ServiceTag",
                    ]),
                    errorInformation: Schema.optional(Schema.String),
                    parentRuleNames: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              ),
            ),
            status: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals(["Inactive", "Active"]),
                ),
              }),
            ),
            firewallSku: Schema.optional(
              Schema.Literals(["Standard", "Basic"]),
            ),
            managedNetworkKind: Schema.optional(Schema.Literals(["V1", "V2"])),
            firewallPublicIpAddress: Schema.optional(
              Schema.NullOr(Schema.String),
            ),
            provisioningState: Schema.optional(
              Schema.Literals([
                "Deferred",
                "Updating",
                "Succeeded",
                "Failed",
                "Deleting",
                "Deleted",
              ]),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deferred",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Deleted",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsPutInput>;

// Output Schema
export interface ManagedNetworkSettingsPutOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ManagedNetworkSettingsPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ManagedNetworkSettingsPutOutput>;

// The operation
/**
 * PUT API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsPut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsPutInput,
    outputSchema: ManagedNetworkSettingsPutOutput,
  }),
);
// Input Schema
export interface ModelCapacitiesListInput {
  subscriptionId: string;
  modelFormat: string;
  modelName: string;
  modelVersion: string;
}
export const ModelCapacitiesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    modelFormat: Schema.String,
    modelName: Schema.String,
    modelVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/modelCapacities",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ModelCapacitiesListInput>;

// Output Schema
export interface ModelCapacitiesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ModelCapacitiesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ModelCapacitiesListOutput>;

// The operation
/**
 * List ModelCapacities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param modelFormat - The format of the Model
 * @param modelName - The name of the Model
 * @param modelVersion - The version of the Model
 */
export const ModelCapacitiesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelCapacitiesListInput,
  outputSchema: ModelCapacitiesListOutput,
}));
// Input Schema
export interface ModelsListInput {
  subscriptionId: string;
  location: string;
}
export const ModelsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/models",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ModelsListInput>;

// Output Schema
export interface ModelsListOutput {
  nextLink?: string;
  value?: {
    model?: {
      publisher?: string;
      format?: string;
      name?: string;
      version?: string;
      source?: string;
      sourceAccount?: string;
      callRateLimit?: {
        count?: number;
        renewalPeriod?: number;
        rules?: {
          key?: string;
          renewalPeriod?: number;
          count?: number;
          minCount?: number;
          dynamicThrottlingEnabled?: boolean;
          matchPatterns?: { path?: string; method?: string }[];
        }[];
      };
    };
    kind?: string;
    skuName?: string;
    description?: string;
  }[];
}
export const ModelsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        model: Schema.optional(
          Schema.Struct({
            publisher: Schema.optional(Schema.String),
            format: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            source: Schema.optional(Schema.String),
            sourceAccount: Schema.optional(Schema.String),
            callRateLimit: Schema.optional(
              Schema.Struct({
                count: Schema.optional(Schema.Number),
                renewalPeriod: Schema.optional(Schema.Number),
                rules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      renewalPeriod: Schema.optional(Schema.Number),
                      count: Schema.optional(Schema.Number),
                      minCount: Schema.optional(Schema.Number),
                      dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                      matchPatterns: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            path: Schema.optional(Schema.String),
                            method: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        kind: Schema.optional(Schema.String),
        skuName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ModelsListOutput>;

// The operation
/**
 * List Models.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const ModelsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelsListInput,
  outputSchema: ModelsListOutput,
}));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  nspConfigurationName: string;
}
export const NetworkSecurityPerimeterConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    nspConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations/{nspConfigurationName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const NetworkSecurityPerimeterConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetOutput>;

// The operation
/**
 * Gets the specified NSP configurations for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param nspConfigurationName - The name of the NSP Configuration.
 */
export const NetworkSecurityPerimeterConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsGetInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsGetOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const NetworkSecurityPerimeterConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const NetworkSecurityPerimeterConfigurationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListOutput>;

// The operation
/**
 * Gets a list of NSP configurations for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const NetworkSecurityPerimeterConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsListInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsListOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsReconcileInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  nspConfigurationName: string;
}
export const NetworkSecurityPerimeterConfigurationsReconcileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    nspConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations/{nspConfigurationName}/reconcile",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsReconcileOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const NetworkSecurityPerimeterConfigurationsReconcileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileOutput>;

// The operation
/**
 * Reconcile the NSP configuration for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param nspConfigurationName - The name of the NSP Configuration.
 */
export const NetworkSecurityPerimeterConfigurationsReconcile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsReconcileInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsReconcileOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.CognitiveServices/operations",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all the available Cognitive Services account operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OutboundRuleCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
  ruleName: string;
  properties: {
    category?: "Required" | "Recommended" | "UserDefined" | "Dependency";
    status?: "Inactive" | "Active" | "Provisioning" | "Deleting" | "Failed";
    type: "FQDN" | "PrivateEndpoint" | "ServiceTag";
    errorInformation?: string;
    parentRuleNames?: string[];
  };
}
export const OutboundRuleCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      category: Schema.optional(
        Schema.Literals([
          "Required",
          "Recommended",
          "UserDefined",
          "Dependency",
        ]),
      ),
      status: Schema.optional(
        Schema.Literals([
          "Inactive",
          "Active",
          "Provisioning",
          "Deleting",
          "Failed",
        ]),
      ),
      type: Schema.Literals(["FQDN", "PrivateEndpoint", "ServiceTag"]),
      errorInformation: Schema.optional(Schema.String),
      parentRuleNames: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<OutboundRuleCreateOrUpdateInput>;

// Output Schema
export interface OutboundRuleCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const OutboundRuleCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<OutboundRuleCreateOrUpdateOutput>;

// The operation
/**
 * The PUT API for creating or updating a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OutboundRuleCreateOrUpdateInput,
    outputSchema: OutboundRuleCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface OutboundRuleDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
  ruleName: string;
}
export const OutboundRuleDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<OutboundRuleDeleteInput>;

// Output Schema
export type OutboundRuleDeleteOutput = void;
export const OutboundRuleDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OutboundRuleDeleteOutput>;

// The operation
/**
 * The DELETE API for deleting a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleDeleteInput,
  outputSchema: OutboundRuleDeleteOutput,
}));
// Input Schema
export interface OutboundRuleGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
  ruleName: string;
}
export const OutboundRuleGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  managedNetworkName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<OutboundRuleGetInput>;

// Output Schema
export interface OutboundRuleGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const OutboundRuleGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<OutboundRuleGetOutput>;

// The operation
/**
 * The GET API for retrieving a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleGetInput,
  outputSchema: OutboundRuleGetOutput,
}));
// Input Schema
export interface OutboundRuleListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
}
export const OutboundRuleListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  managedNetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<OutboundRuleListInput>;

// Output Schema
export interface OutboundRuleListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const OutboundRuleListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  },
) as unknown as Schema.Codec<OutboundRuleListOutput>;

// The operation
/**
 * The GET API for retrieving the list of outbound rules of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const OutboundRuleList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleListInput,
  outputSchema: OutboundRuleListOutput,
}));
// Input Schema
export interface OutboundRulesPostInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managedNetworkName: string;
  properties?: {
    isolationMode?:
      | "Disabled"
      | "AllowInternetOutbound"
      | "AllowOnlyApprovedOutbound";
    networkId?: string;
    outboundRules?: Record<
      string,
      {
        category?: "Required" | "Recommended" | "UserDefined" | "Dependency";
        status?: "Inactive" | "Active" | "Provisioning" | "Deleting" | "Failed";
        type: "FQDN" | "PrivateEndpoint" | "ServiceTag";
        errorInformation?: string;
        parentRuleNames?: string[];
      }
    > | null;
    status?: { status?: "Inactive" | "Active" };
    firewallSku?: "Standard" | "Basic";
    managedNetworkKind?: "V1" | "V2";
    firewallPublicIpAddress?: string | null;
    provisioningState?:
      | "Deferred"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Deleted";
  };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const OutboundRulesPostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        isolationMode: Schema.optional(
          Schema.Literals([
            "Disabled",
            "AllowInternetOutbound",
            "AllowOnlyApprovedOutbound",
          ]),
        ),
        networkId: Schema.optional(Schema.String),
        outboundRules: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                category: Schema.optional(
                  Schema.Literals([
                    "Required",
                    "Recommended",
                    "UserDefined",
                    "Dependency",
                  ]),
                ),
                status: Schema.optional(
                  Schema.Literals([
                    "Inactive",
                    "Active",
                    "Provisioning",
                    "Deleting",
                    "Failed",
                  ]),
                ),
                type: Schema.Literals([
                  "FQDN",
                  "PrivateEndpoint",
                  "ServiceTag",
                ]),
                errorInformation: Schema.optional(Schema.String),
                parentRuleNames: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
        ),
        status: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.Literals(["Inactive", "Active"])),
          }),
        ),
        firewallSku: Schema.optional(Schema.Literals(["Standard", "Basic"])),
        managedNetworkKind: Schema.optional(Schema.Literals(["V1", "V2"])),
        firewallPublicIpAddress: Schema.optional(Schema.NullOr(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deferred",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Deleted",
          ]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/batchOutboundRules",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<OutboundRulesPostInput>;

// Output Schema
export interface OutboundRulesPostOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const OutboundRulesPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<OutboundRulesPostOutput>;

// The operation
/**
 * The POST API for updating the outbound rules of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const OutboundRulesPost = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRulesPostInput,
  outputSchema: OutboundRulesPostOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
    groupIds?: string[];
  };
  etag?: string;
  location?: string;
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    etag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Gets the private endpoint connections associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateLinkResources",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export interface ProjectCapabilityHostsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  capabilityHostName: string;
  properties: {
    aiServicesConnections?: string[] | null;
    vectorStoreConnections?: string[] | null;
    storageConnections?: string[] | null;
    threadStorageConnections?: string[] | null;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Updating"
      | "Deleting";
  };
}
export const ProjectCapabilityHostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      aiServicesConnections: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.String)),
      ),
      vectorStoreConnections: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.String)),
      ),
      storageConnections: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.String)),
      ),
      threadStorageConnections: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.String)),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Updating",
          "Deleting",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectCapabilityHostsCreateOrUpdateInput>;

// Output Schema
export interface ProjectCapabilityHostsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectCapabilityHostsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProjectCapabilityHostsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCapabilityHostsCreateOrUpdateInput,
    outputSchema: ProjectCapabilityHostsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProjectCapabilityHostsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  capabilityHostName: string;
}
export const ProjectCapabilityHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectCapabilityHostsDeleteInput>;

// Output Schema
export type ProjectCapabilityHostsDeleteOutput = void;
export const ProjectCapabilityHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectCapabilityHostsDeleteOutput>;

// The operation
/**
 * Delete project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCapabilityHostsDeleteInput,
    outputSchema: ProjectCapabilityHostsDeleteOutput,
  }));
// Input Schema
export interface ProjectCapabilityHostsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  capabilityHostName: string;
}
export const ProjectCapabilityHostsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectCapabilityHostsGetInput>;

// Output Schema
export interface ProjectCapabilityHostsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectCapabilityHostsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProjectCapabilityHostsGetOutput>;

// The operation
/**
 * Get project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCapabilityHostsGetInput,
    outputSchema: ProjectCapabilityHostsGetOutput,
  }),
);
// Input Schema
export interface ProjectCapabilityHostsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
}
export const ProjectCapabilityHostsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectCapabilityHostsListInput>;

// Output Schema
export interface ProjectCapabilityHostsListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ProjectCapabilityHostsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProjectCapabilityHostsListOutput>;

// The operation
/**
 * List capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectCapabilityHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCapabilityHostsListInput,
    outputSchema: ProjectCapabilityHostsListOutput,
  }),
);
// Input Schema
export interface ProjectConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  connectionName: string;
  properties: {
    authType:
      | "PAT"
      | "ManagedIdentity"
      | "UsernamePassword"
      | "None"
      | "SAS"
      | "AccountKey"
      | "ServicePrincipal"
      | "AccessKey"
      | "ApiKey"
      | "CustomKeys"
      | "OAuth2"
      | "AAD"
      | "DelegatedSAS"
      | "ProjectManagedIdentity"
      | "AccountManagedIdentity"
      | "UserEntraToken"
      | "AgentUserImpersonation"
      | "AgenticIdentityToken"
      | "AgenticUser";
    category?:
      | "PythonFeed"
      | "ContainerRegistry"
      | "Git"
      | "S3"
      | "Snowflake"
      | "AzureKeyVault"
      | "AzureSqlDb"
      | "AzureSynapseAnalytics"
      | "AzureMySqlDb"
      | "AzurePostgresDb"
      | "ADLSGen2"
      | "AzureContainerAppEnvironment"
      | "Redis"
      | "ApiKey"
      | "AzureOpenAI"
      | "AIServices"
      | "CognitiveSearch"
      | "CognitiveService"
      | "CustomKeys"
      | "AzureBlob"
      | "AzureStorageAccount"
      | "AzureOneLake"
      | "CosmosDb"
      | "CosmosDbMongoDbApi"
      | "AzureDataExplorer"
      | "AzureMariaDb"
      | "AzureDatabricksDeltaLake"
      | "AzureSqlMi"
      | "AzureTableStorage"
      | "AmazonRdsForOracle"
      | "AmazonRdsForSqlServer"
      | "AmazonRedshift"
      | "Db2"
      | "Drill"
      | "GoogleBigQuery"
      | "Greenplum"
      | "Hbase"
      | "Hive"
      | "Impala"
      | "Informix"
      | "MariaDb"
      | "MicrosoftAccess"
      | "MySql"
      | "Netezza"
      | "Oracle"
      | "Phoenix"
      | "PostgreSql"
      | "Presto"
      | "SapOpenHub"
      | "SapBw"
      | "SapHana"
      | "SapTable"
      | "Spark"
      | "SqlServer"
      | "Sybase"
      | "Teradata"
      | "Vertica"
      | "Pinecone"
      | "Databricks"
      | "Cassandra"
      | "Couchbase"
      | "MongoDbV2"
      | "MongoDbAtlas"
      | "AmazonS3Compatible"
      | "FileServer"
      | "FtpServer"
      | "GoogleCloudStorage"
      | "Hdfs"
      | "OracleCloudStorage"
      | "Sftp"
      | "GenericHttp"
      | "ODataRest"
      | "Odbc"
      | "GenericRest"
      | "RemoteTool"
      | "AmazonMws"
      | "Concur"
      | "Dynamics"
      | "DynamicsAx"
      | "DynamicsCrm"
      | "GoogleAdWords"
      | "Hubspot"
      | "Jira"
      | "Magento"
      | "Marketo"
      | "Office365"
      | "Eloqua"
      | "Responsys"
      | "OracleServiceCloud"
      | "PayPal"
      | "QuickBooks"
      | "Salesforce"
      | "SalesforceServiceCloud"
      | "SalesforceMarketingCloud"
      | "SapCloudForCustomer"
      | "SapEcc"
      | "ServiceNow"
      | "SharePointOnlineList"
      | "Shopify"
      | "Square"
      | "WebTable"
      | "Xero"
      | "Zoho"
      | "GenericContainerRegistry"
      | "Elasticsearch"
      | "AppInsights"
      | "AppConfig"
      | "OpenAI"
      | "Serp"
      | "BingLLMSearch"
      | "Serverless"
      | "ManagedOnlineEndpoint"
      | "ApiManagement"
      | "ModelGateway"
      | "GroundingWithBingSearch"
      | "GroundingWithCustomSearch"
      | "Sharepoint"
      | "MicrosoftFabric"
      | "PowerPlatformEnvironment"
      | "RemoteA2A";
    createdByWorkspaceArmId?: string;
    error?: string;
    expiryTime?: string;
    group?:
      | "Azure"
      | "AzureAI"
      | "Database"
      | "NoSQL"
      | "File"
      | "GenericProtocol"
      | "ServicesAndApps";
    isSharedToAll?: boolean;
    metadata?: Record<string, string>;
    peRequirement?: "Required" | "NotRequired" | "NotApplicable";
    peStatus?: "Inactive" | "Active" | "NotApplicable";
    sharedUserList?: string[];
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
  };
}
export const ProjectConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      authType: Schema.Literals([
        "PAT",
        "ManagedIdentity",
        "UsernamePassword",
        "None",
        "SAS",
        "AccountKey",
        "ServicePrincipal",
        "AccessKey",
        "ApiKey",
        "CustomKeys",
        "OAuth2",
        "AAD",
        "DelegatedSAS",
        "ProjectManagedIdentity",
        "AccountManagedIdentity",
        "UserEntraToken",
        "AgentUserImpersonation",
        "AgenticIdentityToken",
        "AgenticUser",
      ]),
      category: Schema.optional(
        Schema.Literals([
          "PythonFeed",
          "ContainerRegistry",
          "Git",
          "S3",
          "Snowflake",
          "AzureKeyVault",
          "AzureSqlDb",
          "AzureSynapseAnalytics",
          "AzureMySqlDb",
          "AzurePostgresDb",
          "ADLSGen2",
          "AzureContainerAppEnvironment",
          "Redis",
          "ApiKey",
          "AzureOpenAI",
          "AIServices",
          "CognitiveSearch",
          "CognitiveService",
          "CustomKeys",
          "AzureBlob",
          "AzureStorageAccount",
          "AzureOneLake",
          "CosmosDb",
          "CosmosDbMongoDbApi",
          "AzureDataExplorer",
          "AzureMariaDb",
          "AzureDatabricksDeltaLake",
          "AzureSqlMi",
          "AzureTableStorage",
          "AmazonRdsForOracle",
          "AmazonRdsForSqlServer",
          "AmazonRedshift",
          "Db2",
          "Drill",
          "GoogleBigQuery",
          "Greenplum",
          "Hbase",
          "Hive",
          "Impala",
          "Informix",
          "MariaDb",
          "MicrosoftAccess",
          "MySql",
          "Netezza",
          "Oracle",
          "Phoenix",
          "PostgreSql",
          "Presto",
          "SapOpenHub",
          "SapBw",
          "SapHana",
          "SapTable",
          "Spark",
          "SqlServer",
          "Sybase",
          "Teradata",
          "Vertica",
          "Pinecone",
          "Databricks",
          "Cassandra",
          "Couchbase",
          "MongoDbV2",
          "MongoDbAtlas",
          "AmazonS3Compatible",
          "FileServer",
          "FtpServer",
          "GoogleCloudStorage",
          "Hdfs",
          "OracleCloudStorage",
          "Sftp",
          "GenericHttp",
          "ODataRest",
          "Odbc",
          "GenericRest",
          "RemoteTool",
          "AmazonMws",
          "Concur",
          "Dynamics",
          "DynamicsAx",
          "DynamicsCrm",
          "GoogleAdWords",
          "Hubspot",
          "Jira",
          "Magento",
          "Marketo",
          "Office365",
          "Eloqua",
          "Responsys",
          "OracleServiceCloud",
          "PayPal",
          "QuickBooks",
          "Salesforce",
          "SalesforceServiceCloud",
          "SalesforceMarketingCloud",
          "SapCloudForCustomer",
          "SapEcc",
          "ServiceNow",
          "SharePointOnlineList",
          "Shopify",
          "Square",
          "WebTable",
          "Xero",
          "Zoho",
          "GenericContainerRegistry",
          "Elasticsearch",
          "AppInsights",
          "AppConfig",
          "OpenAI",
          "Serp",
          "BingLLMSearch",
          "Serverless",
          "ManagedOnlineEndpoint",
          "ApiManagement",
          "ModelGateway",
          "GroundingWithBingSearch",
          "GroundingWithCustomSearch",
          "Sharepoint",
          "MicrosoftFabric",
          "PowerPlatformEnvironment",
          "RemoteA2A",
        ]),
      ),
      createdByWorkspaceArmId: Schema.optional(Schema.String),
      error: Schema.optional(Schema.String),
      expiryTime: Schema.optional(Schema.String),
      group: Schema.optional(
        Schema.Literals([
          "Azure",
          "AzureAI",
          "Database",
          "NoSQL",
          "File",
          "GenericProtocol",
          "ServicesAndApps",
        ]),
      ),
      isSharedToAll: Schema.optional(Schema.Boolean),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      peRequirement: Schema.optional(
        Schema.Literals(["Required", "NotRequired", "NotApplicable"]),
      ),
      peStatus: Schema.optional(
        Schema.Literals(["Inactive", "Active", "NotApplicable"]),
      ),
      sharedUserList: Schema.optional(Schema.Array(Schema.String)),
      target: Schema.optional(Schema.String),
      useWorkspaceManagedIdentity: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectConnectionsCreateInput>;

// Output Schema
export interface ProjectConnectionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectConnectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProjectConnectionsCreateOutput>;

// The operation
/**
 * Create or update Cognitive Services project connection under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsCreateInput,
    outputSchema: ProjectConnectionsCreateOutput,
  }),
);
// Input Schema
export interface ProjectConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  connectionName: string;
}
export const ProjectConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectConnectionsDeleteInput>;

// Output Schema
export type ProjectConnectionsDeleteOutput = void;
export const ProjectConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectConnectionsDeleteOutput>;

// The operation
/**
 * Delete Cognitive Services project connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsDeleteInput,
    outputSchema: ProjectConnectionsDeleteOutput,
  }),
);
// Input Schema
export interface ProjectConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  connectionName: string;
}
export const ProjectConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectConnectionsGetInput>;

// Output Schema
export interface ProjectConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProjectConnectionsGetOutput>;

// The operation
/**
 * Lists Cognitive Services project connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsGetInput,
    outputSchema: ProjectConnectionsGetOutput,
  }),
);
// Input Schema
export interface ProjectConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  target?: string;
  category?: string;
  includeAll?: boolean;
}
export const ProjectConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    target: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    includeAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectConnectionsListInput>;

// Output Schema
export interface ProjectConnectionsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ProjectConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProjectConnectionsListOutput>;

// The operation
/**
 * Lists all the available Cognitive Services project connections under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param target - Target of the connection.
 * @param category - Category of the connection.
 * @param includeAll - query parameter that indicates if get connection call should return both connections and datastores
 */
export const ProjectConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsListInput,
    outputSchema: ProjectConnectionsListOutput,
  }),
);
// Input Schema
export interface ProjectConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  connectionName: string;
  properties?: {
    authType:
      | "PAT"
      | "ManagedIdentity"
      | "UsernamePassword"
      | "None"
      | "SAS"
      | "AccountKey"
      | "ServicePrincipal"
      | "AccessKey"
      | "ApiKey"
      | "CustomKeys"
      | "OAuth2"
      | "AAD"
      | "DelegatedSAS"
      | "ProjectManagedIdentity"
      | "AccountManagedIdentity"
      | "UserEntraToken"
      | "AgentUserImpersonation"
      | "AgenticIdentityToken"
      | "AgenticUser";
    category?:
      | "PythonFeed"
      | "ContainerRegistry"
      | "Git"
      | "S3"
      | "Snowflake"
      | "AzureKeyVault"
      | "AzureSqlDb"
      | "AzureSynapseAnalytics"
      | "AzureMySqlDb"
      | "AzurePostgresDb"
      | "ADLSGen2"
      | "AzureContainerAppEnvironment"
      | "Redis"
      | "ApiKey"
      | "AzureOpenAI"
      | "AIServices"
      | "CognitiveSearch"
      | "CognitiveService"
      | "CustomKeys"
      | "AzureBlob"
      | "AzureStorageAccount"
      | "AzureOneLake"
      | "CosmosDb"
      | "CosmosDbMongoDbApi"
      | "AzureDataExplorer"
      | "AzureMariaDb"
      | "AzureDatabricksDeltaLake"
      | "AzureSqlMi"
      | "AzureTableStorage"
      | "AmazonRdsForOracle"
      | "AmazonRdsForSqlServer"
      | "AmazonRedshift"
      | "Db2"
      | "Drill"
      | "GoogleBigQuery"
      | "Greenplum"
      | "Hbase"
      | "Hive"
      | "Impala"
      | "Informix"
      | "MariaDb"
      | "MicrosoftAccess"
      | "MySql"
      | "Netezza"
      | "Oracle"
      | "Phoenix"
      | "PostgreSql"
      | "Presto"
      | "SapOpenHub"
      | "SapBw"
      | "SapHana"
      | "SapTable"
      | "Spark"
      | "SqlServer"
      | "Sybase"
      | "Teradata"
      | "Vertica"
      | "Pinecone"
      | "Databricks"
      | "Cassandra"
      | "Couchbase"
      | "MongoDbV2"
      | "MongoDbAtlas"
      | "AmazonS3Compatible"
      | "FileServer"
      | "FtpServer"
      | "GoogleCloudStorage"
      | "Hdfs"
      | "OracleCloudStorage"
      | "Sftp"
      | "GenericHttp"
      | "ODataRest"
      | "Odbc"
      | "GenericRest"
      | "RemoteTool"
      | "AmazonMws"
      | "Concur"
      | "Dynamics"
      | "DynamicsAx"
      | "DynamicsCrm"
      | "GoogleAdWords"
      | "Hubspot"
      | "Jira"
      | "Magento"
      | "Marketo"
      | "Office365"
      | "Eloqua"
      | "Responsys"
      | "OracleServiceCloud"
      | "PayPal"
      | "QuickBooks"
      | "Salesforce"
      | "SalesforceServiceCloud"
      | "SalesforceMarketingCloud"
      | "SapCloudForCustomer"
      | "SapEcc"
      | "ServiceNow"
      | "SharePointOnlineList"
      | "Shopify"
      | "Square"
      | "WebTable"
      | "Xero"
      | "Zoho"
      | "GenericContainerRegistry"
      | "Elasticsearch"
      | "AppInsights"
      | "AppConfig"
      | "OpenAI"
      | "Serp"
      | "BingLLMSearch"
      | "Serverless"
      | "ManagedOnlineEndpoint"
      | "ApiManagement"
      | "ModelGateway"
      | "GroundingWithBingSearch"
      | "GroundingWithCustomSearch"
      | "Sharepoint"
      | "MicrosoftFabric"
      | "PowerPlatformEnvironment"
      | "RemoteA2A";
    createdByWorkspaceArmId?: string;
    error?: string;
    expiryTime?: string;
    group?:
      | "Azure"
      | "AzureAI"
      | "Database"
      | "NoSQL"
      | "File"
      | "GenericProtocol"
      | "ServicesAndApps";
    isSharedToAll?: boolean;
    metadata?: Record<string, string>;
    peRequirement?: "Required" | "NotRequired" | "NotApplicable";
    peStatus?: "Inactive" | "Active" | "NotApplicable";
    sharedUserList?: string[];
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
  };
}
export const ProjectConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        authType: Schema.Literals([
          "PAT",
          "ManagedIdentity",
          "UsernamePassword",
          "None",
          "SAS",
          "AccountKey",
          "ServicePrincipal",
          "AccessKey",
          "ApiKey",
          "CustomKeys",
          "OAuth2",
          "AAD",
          "DelegatedSAS",
          "ProjectManagedIdentity",
          "AccountManagedIdentity",
          "UserEntraToken",
          "AgentUserImpersonation",
          "AgenticIdentityToken",
          "AgenticUser",
        ]),
        category: Schema.optional(
          Schema.Literals([
            "PythonFeed",
            "ContainerRegistry",
            "Git",
            "S3",
            "Snowflake",
            "AzureKeyVault",
            "AzureSqlDb",
            "AzureSynapseAnalytics",
            "AzureMySqlDb",
            "AzurePostgresDb",
            "ADLSGen2",
            "AzureContainerAppEnvironment",
            "Redis",
            "ApiKey",
            "AzureOpenAI",
            "AIServices",
            "CognitiveSearch",
            "CognitiveService",
            "CustomKeys",
            "AzureBlob",
            "AzureStorageAccount",
            "AzureOneLake",
            "CosmosDb",
            "CosmosDbMongoDbApi",
            "AzureDataExplorer",
            "AzureMariaDb",
            "AzureDatabricksDeltaLake",
            "AzureSqlMi",
            "AzureTableStorage",
            "AmazonRdsForOracle",
            "AmazonRdsForSqlServer",
            "AmazonRedshift",
            "Db2",
            "Drill",
            "GoogleBigQuery",
            "Greenplum",
            "Hbase",
            "Hive",
            "Impala",
            "Informix",
            "MariaDb",
            "MicrosoftAccess",
            "MySql",
            "Netezza",
            "Oracle",
            "Phoenix",
            "PostgreSql",
            "Presto",
            "SapOpenHub",
            "SapBw",
            "SapHana",
            "SapTable",
            "Spark",
            "SqlServer",
            "Sybase",
            "Teradata",
            "Vertica",
            "Pinecone",
            "Databricks",
            "Cassandra",
            "Couchbase",
            "MongoDbV2",
            "MongoDbAtlas",
            "AmazonS3Compatible",
            "FileServer",
            "FtpServer",
            "GoogleCloudStorage",
            "Hdfs",
            "OracleCloudStorage",
            "Sftp",
            "GenericHttp",
            "ODataRest",
            "Odbc",
            "GenericRest",
            "RemoteTool",
            "AmazonMws",
            "Concur",
            "Dynamics",
            "DynamicsAx",
            "DynamicsCrm",
            "GoogleAdWords",
            "Hubspot",
            "Jira",
            "Magento",
            "Marketo",
            "Office365",
            "Eloqua",
            "Responsys",
            "OracleServiceCloud",
            "PayPal",
            "QuickBooks",
            "Salesforce",
            "SalesforceServiceCloud",
            "SalesforceMarketingCloud",
            "SapCloudForCustomer",
            "SapEcc",
            "ServiceNow",
            "SharePointOnlineList",
            "Shopify",
            "Square",
            "WebTable",
            "Xero",
            "Zoho",
            "GenericContainerRegistry",
            "Elasticsearch",
            "AppInsights",
            "AppConfig",
            "OpenAI",
            "Serp",
            "BingLLMSearch",
            "Serverless",
            "ManagedOnlineEndpoint",
            "ApiManagement",
            "ModelGateway",
            "GroundingWithBingSearch",
            "GroundingWithCustomSearch",
            "Sharepoint",
            "MicrosoftFabric",
            "PowerPlatformEnvironment",
            "RemoteA2A",
          ]),
        ),
        createdByWorkspaceArmId: Schema.optional(Schema.String),
        error: Schema.optional(Schema.String),
        expiryTime: Schema.optional(Schema.String),
        group: Schema.optional(
          Schema.Literals([
            "Azure",
            "AzureAI",
            "Database",
            "NoSQL",
            "File",
            "GenericProtocol",
            "ServicesAndApps",
          ]),
        ),
        isSharedToAll: Schema.optional(Schema.Boolean),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        peRequirement: Schema.optional(
          Schema.Literals(["Required", "NotRequired", "NotApplicable"]),
        ),
        peStatus: Schema.optional(
          Schema.Literals(["Inactive", "Active", "NotApplicable"]),
        ),
        sharedUserList: Schema.optional(Schema.Array(Schema.String)),
        target: Schema.optional(Schema.String),
        useWorkspaceManagedIdentity: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProjectConnectionsUpdateInput>;

// Output Schema
export interface ProjectConnectionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProjectConnectionsUpdateOutput>;

// The operation
/**
 * Update Cognitive Services project connection under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsUpdateInput,
    outputSchema: ProjectConnectionsUpdateOutput,
  }),
);
// Input Schema
export interface ProjectsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded"
      | "Canceled"
      | "ResolvingDNS";
    displayName?: string;
    description?: string;
    endpoints?: Record<string, string>;
    isDefault?: boolean;
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const ProjectsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Deleting",
          "Moving",
          "Failed",
          "Succeeded",
          "Canceled",
          "ResolvingDNS",
        ]),
      ),
      displayName: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      endpoints: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      isDefault: Schema.optional(Schema.Boolean),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
        ]),
      ),
      tenantId: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProjectsCreateInput>;

// Output Schema
export interface ProjectsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ProjectsCreateOutput>;

// The operation
/**
 * Create Cognitive Services Account's Project. Project is a sub-resource of an account which give AI developer it's individual container to work on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsCreateInput,
  outputSchema: ProjectsCreateOutput,
}));
// Input Schema
export interface ProjectsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
}
export const ProjectsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProjectsDeleteInput>;

// Output Schema
export type ProjectsDeleteOutput = void;
export const ProjectsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectsDeleteOutput>;

// The operation
/**
 * Deletes a Cognitive Services project from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsDeleteInput,
  outputSchema: ProjectsDeleteOutput,
}));
// Input Schema
export interface ProjectsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
}
export const ProjectsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProjectsGetInput>;

// Output Schema
export interface ProjectsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ProjectsGetOutput>;

// The operation
/**
 * Returns a Cognitive Services project specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsGetInput,
  outputSchema: ProjectsGetOutput,
}));
// Input Schema
export interface ProjectsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ProjectsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProjectsListInput>;

// Output Schema
export interface ProjectsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ProjectsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ProjectsListOutput>;

// The operation
/**
 * Returns all the projects in a Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const ProjectsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListInput,
  outputSchema: ProjectsListOutput,
}));
// Input Schema
export interface ProjectsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  projectName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded"
      | "Canceled"
      | "ResolvingDNS";
    displayName?: string;
    description?: string;
    endpoints?: Record<string, string>;
    isDefault?: boolean;
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const ProjectsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Deleting",
          "Moving",
          "Failed",
          "Succeeded",
          "Canceled",
          "ResolvingDNS",
        ]),
      ),
      displayName: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      endpoints: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      isDefault: Schema.optional(Schema.Boolean),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
        ]),
      ),
      tenantId: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProjectsUpdateInput>;

// Output Schema
export interface ProjectsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProjectsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ProjectsUpdateOutput>;

// The operation
/**
 * Updates a Cognitive Services Project
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsUpdateInput,
  outputSchema: ProjectsUpdateOutput,
}));
// Input Schema
export interface QuotaTiersCreateOrUpdateInput {
  subscriptionId: string;
  default: string;
  properties?: {
    currentTierName?: string;
    tierUpgradePolicy?: "OnceUpgradeIsAvailable" | "NoAutoUpgrade";
    assignmentDate?: string;
    tierUpgradeEligibilityInfo?: {
      nextTierName?: string | null;
      upgradeAvailabilityStatus?: "Available" | "NotAvailable";
      upgradeApplicableDate?: string | null;
      upgradeUnavailabilityReason?: string | null;
    };
  };
}
export const QuotaTiersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    default: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        currentTierName: Schema.optional(Schema.String),
        tierUpgradePolicy: Schema.optional(
          Schema.Literals(["OnceUpgradeIsAvailable", "NoAutoUpgrade"]),
        ),
        assignmentDate: Schema.optional(Schema.String),
        tierUpgradeEligibilityInfo: Schema.optional(
          Schema.Struct({
            nextTierName: Schema.optional(Schema.NullOr(Schema.String)),
            upgradeAvailabilityStatus: Schema.optional(
              Schema.Literals(["Available", "NotAvailable"]),
            ),
            upgradeApplicableDate: Schema.optional(
              Schema.NullOr(Schema.String),
            ),
            upgradeUnavailabilityReason: Schema.optional(
              Schema.NullOr(Schema.String),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<QuotaTiersCreateOrUpdateInput>;

// Output Schema
export interface QuotaTiersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const QuotaTiersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<QuotaTiersCreateOrUpdateOutput>;

// The operation
/**
 * Updates the Quota Tier resource for a subscription.
 *
 * Update the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: QuotaTiersCreateOrUpdateInput,
    outputSchema: QuotaTiersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface QuotaTiersGetInput {
  subscriptionId: string;
  default: string;
}
export const QuotaTiersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<QuotaTiersGetInput>;

// Output Schema
export interface QuotaTiersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const QuotaTiersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<QuotaTiersGetOutput>;

// The operation
/**
 * Gets the Quota Tier for a subscription
 *
 * Gets the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaTiersGetInput,
  outputSchema: QuotaTiersGetOutput,
}));
// Input Schema
export interface QuotaTiersListBySubscriptionInput {
  subscriptionId: string;
}
export const QuotaTiersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<QuotaTiersListBySubscriptionInput>;

// Output Schema
export interface QuotaTiersListBySubscriptionOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const QuotaTiersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<QuotaTiersListBySubscriptionOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const QuotaTiersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QuotaTiersListBySubscriptionInput,
    outputSchema: QuotaTiersListBySubscriptionOutput,
  }));
// Input Schema
export interface QuotaTiersUpdateInput {
  subscriptionId: string;
  default: string;
  properties?: {
    currentTierName?: string;
    tierUpgradePolicy?: "OnceUpgradeIsAvailable" | "NoAutoUpgrade";
    assignmentDate?: string;
    tierUpgradeEligibilityInfo?: {
      nextTierName?: string | null;
      upgradeAvailabilityStatus?: "Available" | "NotAvailable";
      upgradeApplicableDate?: string | null;
      upgradeUnavailabilityReason?: string | null;
    };
  };
}
export const QuotaTiersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      currentTierName: Schema.optional(Schema.String),
      tierUpgradePolicy: Schema.optional(
        Schema.Literals(["OnceUpgradeIsAvailable", "NoAutoUpgrade"]),
      ),
      assignmentDate: Schema.optional(Schema.String),
      tierUpgradeEligibilityInfo: Schema.optional(
        Schema.Struct({
          nextTierName: Schema.optional(Schema.NullOr(Schema.String)),
          upgradeAvailabilityStatus: Schema.optional(
            Schema.Literals(["Available", "NotAvailable"]),
          ),
          upgradeApplicableDate: Schema.optional(Schema.NullOr(Schema.String)),
          upgradeUnavailabilityReason: Schema.optional(
            Schema.NullOr(Schema.String),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<QuotaTiersUpdateInput>;

// Output Schema
export interface QuotaTiersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const QuotaTiersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  },
) as unknown as Schema.Codec<QuotaTiersUpdateOutput>;

// The operation
/**
 * Updates the Quota Tier resource for a subscription. The only properties that can be updated are  "tierUpgradePolicy"
 *
 * Update the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaTiersUpdateInput,
  outputSchema: QuotaTiersUpdateOutput,
}));
// Input Schema
export interface RaiBlocklistItemsBatchAddInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
}
export const RaiBlocklistItemsBatchAddInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/addRaiBlocklistItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistItemsBatchAddInput>;

// Output Schema
export interface RaiBlocklistItemsBatchAddOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiBlocklistItemsBatchAddOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiBlocklistItemsBatchAddOutput>;

// The operation
/**
 * Batch operation to add blocklist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsBatchAdd = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsBatchAddInput,
    outputSchema: RaiBlocklistItemsBatchAddOutput,
  }),
);
// Input Schema
export interface RaiBlocklistItemsBatchDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
}
export const RaiBlocklistItemsBatchDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/deleteRaiBlocklistItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistItemsBatchDeleteInput>;

// Output Schema
export type RaiBlocklistItemsBatchDeleteOutput = void;
export const RaiBlocklistItemsBatchDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RaiBlocklistItemsBatchDeleteOutput>;

// The operation
/**
 * Batch operation to delete blocklist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsBatchDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiBlocklistItemsBatchDeleteInput,
    outputSchema: RaiBlocklistItemsBatchDeleteOutput,
  }));
// Input Schema
export interface RaiBlocklistItemsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
  raiBlocklistItemName: string;
  properties?: { pattern?: string; isRegex?: boolean };
  etag?: string;
  tags?: Record<string, string>;
}
export const RaiBlocklistItemsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        pattern: Schema.optional(Schema.String),
        isRegex: Schema.optional(Schema.Boolean),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistItemsCreateOrUpdateInput>;

// Output Schema
export interface RaiBlocklistItemsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiBlocklistItemsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiBlocklistItemsCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified blocklist item associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiBlocklistItemsCreateOrUpdateInput,
    outputSchema: RaiBlocklistItemsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RaiBlocklistItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
  raiBlocklistItemName: string;
}
export const RaiBlocklistItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistItemsDeleteInput>;

// Output Schema
export type RaiBlocklistItemsDeleteOutput = void;
export const RaiBlocklistItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RaiBlocklistItemsDeleteOutput>;

// The operation
/**
 * Deletes the specified blocklist Item associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsDeleteInput,
    outputSchema: RaiBlocklistItemsDeleteOutput,
  }),
);
// Input Schema
export interface RaiBlocklistItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
  raiBlocklistItemName: string;
}
export const RaiBlocklistItemsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistItemsGetInput>;

// Output Schema
export interface RaiBlocklistItemsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiBlocklistItemsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiBlocklistItemsGetOutput>;

// The operation
/**
 * Gets the specified custom blocklist Item associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsGetInput,
    outputSchema: RaiBlocklistItemsGetOutput,
  }),
);
// Input Schema
export interface RaiBlocklistItemsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
}
export const RaiBlocklistItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistItemsListInput>;

// Output Schema
export interface RaiBlocklistItemsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const RaiBlocklistItemsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RaiBlocklistItemsListOutput>;

// The operation
/**
 * Gets the blocklist items associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsListInput,
    outputSchema: RaiBlocklistItemsListOutput,
  }),
);
// Input Schema
export interface RaiBlocklistsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
  properties?: { description?: string };
  etag?: string;
  tags?: Record<string, string>;
}
export const RaiBlocklistsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistsCreateOrUpdateInput>;

// Output Schema
export interface RaiBlocklistsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiBlocklistsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiBlocklistsCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistsCreateOrUpdateInput,
    outputSchema: RaiBlocklistsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RaiBlocklistsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
}
export const RaiBlocklistsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiBlocklistsDeleteInput>;

// Output Schema
export type RaiBlocklistsDeleteOutput = void;
export const RaiBlocklistsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RaiBlocklistsDeleteOutput>;

// The operation
/**
 * Deletes the specified custom blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsDeleteInput,
  outputSchema: RaiBlocklistsDeleteOutput,
}));
// Input Schema
export interface RaiBlocklistsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiBlocklistName: string;
}
export const RaiBlocklistsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiBlocklistName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiBlocklistsGetInput>;

// Output Schema
export interface RaiBlocklistsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiBlocklistsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  },
) as unknown as Schema.Codec<RaiBlocklistsGetOutput>;

// The operation
/**
 * Gets the specified custom blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsGetInput,
  outputSchema: RaiBlocklistsGetOutput,
}));
// Input Schema
export interface RaiBlocklistsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const RaiBlocklistsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiBlocklistsListInput>;

// Output Schema
export interface RaiBlocklistsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const RaiBlocklistsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RaiBlocklistsListOutput>;

// The operation
/**
 * Gets the custom blocklists associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiBlocklistsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsListInput,
  outputSchema: RaiBlocklistsListOutput,
}));
// Input Schema
export interface RaiContentFiltersGetInput {
  subscriptionId: string;
  location: string;
  filterName: string;
}
export const RaiContentFiltersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    filterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/raiContentFilters/{filterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiContentFiltersGetInput>;

// Output Schema
export interface RaiContentFiltersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiContentFiltersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiContentFiltersGetOutput>;

// The operation
/**
 * Get Content Filters by Name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param filterName - The name of the RAI Content Filter.
 */
export const RaiContentFiltersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiContentFiltersGetInput,
    outputSchema: RaiContentFiltersGetOutput,
  }),
);
// Input Schema
export interface RaiContentFiltersListInput {
  subscriptionId: string;
  location: string;
}
export const RaiContentFiltersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/raiContentFilters",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiContentFiltersListInput>;

// Output Schema
export interface RaiContentFiltersListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const RaiContentFiltersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RaiContentFiltersListOutput>;

// The operation
/**
 * List Content Filters types.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const RaiContentFiltersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiContentFiltersListInput,
    outputSchema: RaiContentFiltersListOutput,
  }),
);
// Input Schema
export interface RaiExternalSafetyProviderCreateOrUpdateInput {
  subscriptionId: string;
  safetyProviderName: string;
  properties?: {
    providerId?: string;
    providerName?: string;
    mode?: string;
    url?: string;
    secretName?: string;
    managedIdentity?: string;
    keyVaultUri?: string;
    createdAt?: string;
    lastModifiedAt?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const RaiExternalSafetyProviderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerId: Schema.optional(Schema.String),
        providerName: Schema.optional(Schema.String),
        mode: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        secretName: Schema.optional(Schema.String),
        managedIdentity: Schema.optional(Schema.String),
        keyVaultUri: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiExternalSafetyProviderCreateOrUpdateInput>;

// Output Schema
export interface RaiExternalSafetyProviderCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiExternalSafetyProviderCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiExternalSafetyProviderCreateOrUpdateOutput>;

// The operation
/**
 * Create the rai safety provider associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderCreateOrUpdateInput,
    outputSchema: RaiExternalSafetyProviderCreateOrUpdateOutput,
  }));
// Input Schema
export interface RaiExternalSafetyProviderDeleteInput {
  subscriptionId: string;
  safetyProviderName: string;
}
export const RaiExternalSafetyProviderDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiExternalSafetyProviderDeleteInput>;

// Output Schema
export type RaiExternalSafetyProviderDeleteOutput = void;
export const RaiExternalSafetyProviderDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RaiExternalSafetyProviderDeleteOutput>;

// The operation
/**
 * Deletes the specified custom topic associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderDeleteInput,
    outputSchema: RaiExternalSafetyProviderDeleteOutput,
  }));
// Input Schema
export interface RaiExternalSafetyProviderGetInput {
  subscriptionId: string;
  safetyProviderName: string;
}
export const RaiExternalSafetyProviderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiExternalSafetyProviderGetInput>;

// Output Schema
export interface RaiExternalSafetyProviderGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiExternalSafetyProviderGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiExternalSafetyProviderGetOutput>;

// The operation
/**
 * Gets the specified external safety provider associated with the Subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderGetInput,
    outputSchema: RaiExternalSafetyProviderGetOutput,
  }));
// Input Schema
export interface RaiExternalSafetyProvidersListInput {
  subscriptionId: string;
}
export const RaiExternalSafetyProvidersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiExternalSafetyProvidersListInput>;

// Output Schema
export interface RaiExternalSafetyProvidersListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const RaiExternalSafetyProvidersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RaiExternalSafetyProvidersListOutput>;

// The operation
/**
 * Gets the safety providers associated with the subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RaiExternalSafetyProvidersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProvidersListInput,
    outputSchema: RaiExternalSafetyProvidersListOutput,
  }));
// Input Schema
export interface RaiPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiPolicyName: string;
  properties?: {
    type?: "UserManaged" | "SystemManaged";
    mode?: "Default" | "Deferred" | "Blocking" | "Asynchronous_filter";
    basePolicyName?: string;
    contentFilters?: {
      name?: string;
      enabled?: boolean;
      severityThreshold?: "Low" | "Medium" | "High";
      blocking?: boolean;
      source?:
        | "Prompt"
        | "Completion"
        | "PreToolCall"
        | "PostToolCall"
        | "PreRun"
        | "PostRun";
      action?: "None" | "BLOCKING" | "ANNOTATING" | "HITL" | "RETRY";
    }[];
    customBlocklists?: { blocklistName?: string; blocking?: boolean }[];
    safetyProviders?: { safetyProviderName?: string; blocking?: boolean }[];
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const RaiPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["UserManaged", "SystemManaged"]),
        ),
        mode: Schema.optional(
          Schema.Literals([
            "Default",
            "Deferred",
            "Blocking",
            "Asynchronous_filter",
          ]),
        ),
        basePolicyName: Schema.optional(Schema.String),
        contentFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              enabled: Schema.optional(Schema.Boolean),
              severityThreshold: Schema.optional(
                Schema.Literals(["Low", "Medium", "High"]),
              ),
              blocking: Schema.optional(Schema.Boolean),
              source: Schema.optional(
                Schema.Literals([
                  "Prompt",
                  "Completion",
                  "PreToolCall",
                  "PostToolCall",
                  "PreRun",
                  "PostRun",
                ]),
              ),
              action: Schema.optional(
                Schema.Literals([
                  "None",
                  "BLOCKING",
                  "ANNOTATING",
                  "HITL",
                  "RETRY",
                ]),
              ),
            }),
          ),
        ),
        customBlocklists: Schema.optional(
          Schema.Array(
            Schema.Struct({
              blocklistName: Schema.optional(Schema.String),
              blocking: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        safetyProviders: Schema.optional(
          Schema.Array(
            Schema.Struct({
              safetyProviderName: Schema.optional(Schema.String),
              blocking: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiPoliciesCreateOrUpdateInput>;

// Output Schema
export interface RaiPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiPoliciesCreateOrUpdateInput,
    outputSchema: RaiPoliciesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RaiPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiPolicyName: string;
}
export const RaiPoliciesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiPoliciesDeleteInput>;

// Output Schema
export type RaiPoliciesDeleteOutput = void;
export const RaiPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RaiPoliciesDeleteOutput>;

// The operation
/**
 * Deletes the specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesDeleteInput,
  outputSchema: RaiPoliciesDeleteOutput,
}));
// Input Schema
export interface RaiPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiPolicyName: string;
}
export const RaiPoliciesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiPolicyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiPoliciesGetInput>;

// Output Schema
export interface RaiPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiPoliciesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RaiPoliciesGetOutput>;

// The operation
/**
 * Gets the specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesGetInput,
  outputSchema: RaiPoliciesGetOutput,
}));
// Input Schema
export interface RaiPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const RaiPoliciesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiPoliciesListInput>;

// Output Schema
export interface RaiPoliciesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const RaiPoliciesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<RaiPoliciesListOutput>;

// The operation
/**
 * Gets the content filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesListInput,
  outputSchema: RaiPoliciesListOutput,
}));
// Input Schema
export interface RaiToolLabelsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiToolConnectionName: string;
  properties?: {
    toolConnectionName: string;
    accountScope?: { labelValues?: Record<string, string> };
    projectScopes?: { project: string; labelValues: Record<string, string> }[];
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const RaiToolLabelsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiToolConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        toolConnectionName: Schema.String,
        accountScope: Schema.optional(
          Schema.Struct({
            labelValues: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        projectScopes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              project: Schema.String,
              labelValues: Schema.Record(Schema.String, Schema.String),
            }),
          ),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiToolLabelsCreateOrUpdateInput>;

// Output Schema
export interface RaiToolLabelsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiToolLabelsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiToolLabelsCreateOrUpdateOutput>;

// The operation
/**
 * Creates the RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiToolLabelsCreateOrUpdateInput,
    outputSchema: RaiToolLabelsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RaiToolLabelsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiToolConnectionName: string;
}
export const RaiToolLabelsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiToolConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiToolLabelsDeleteInput>;

// Output Schema
export type RaiToolLabelsDeleteOutput = void;
export const RaiToolLabelsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RaiToolLabelsDeleteOutput>;

// The operation
/**
 * Deletes the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsDeleteInput,
  outputSchema: RaiToolLabelsDeleteOutput,
}));
// Input Schema
export interface RaiToolLabelsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiToolConnectionName: string;
}
export const RaiToolLabelsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiToolConnectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiToolLabelsGetInput>;

// Output Schema
export interface RaiToolLabelsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiToolLabelsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  },
) as unknown as Schema.Codec<RaiToolLabelsGetOutput>;

// The operation
/**
 * Gets the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsGetInput,
  outputSchema: RaiToolLabelsGetOutput,
}));
// Input Schema
export interface RaiToolLabelsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const RaiToolLabelsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiToolLabelsListInput>;

// Output Schema
export interface RaiToolLabelsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const RaiToolLabelsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RaiToolLabelsListOutput>;

// The operation
/**
 * Lists all RAI Tool Labels associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiToolLabelsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsListInput,
  outputSchema: RaiToolLabelsListOutput,
}));
// Input Schema
export interface RaiTopicsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiTopicName: string;
  properties?: {
    topicId?: string;
    topicName?: string;
    description?: string;
    sampleBlobUrl?: string;
    status?: string;
    failedReason?: string;
    createdAt?: string;
    lastModifiedAt?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const RaiTopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiTopicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        topicId: Schema.optional(Schema.String),
        topicName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        sampleBlobUrl: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        failedReason: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RaiTopicsCreateOrUpdateInput>;

// Output Schema
export interface RaiTopicsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiTopicsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RaiTopicsCreateOrUpdateOutput>;

// The operation
/**
 * Create the rai topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiTopicsCreateOrUpdateInput,
    outputSchema: RaiTopicsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RaiTopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiTopicName: string;
}
export const RaiTopicsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiTopicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiTopicsDeleteInput>;

// Output Schema
export type RaiTopicsDeleteOutput = void;
export const RaiTopicsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RaiTopicsDeleteOutput>;

// The operation
/**
 * Deletes the specified custom topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsDeleteInput,
  outputSchema: RaiTopicsDeleteOutput,
}));
// Input Schema
export interface RaiTopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  raiTopicName: string;
}
export const RaiTopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiTopicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiTopicsGetInput>;

// Output Schema
export interface RaiTopicsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RaiTopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RaiTopicsGetOutput>;

// The operation
/**
 * Gets the specified custom topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsGetInput,
  outputSchema: RaiTopicsGetOutput,
}));
// Input Schema
export interface RaiTopicsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const RaiTopicsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RaiTopicsListInput>;

// Output Schema
export interface RaiTopicsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const RaiTopicsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<RaiTopicsListOutput>;

// The operation
/**
 * Gets the custom topics associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiTopicsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsListInput,
  outputSchema: RaiTopicsListOutput,
}));
// Input Schema
export interface ResourceSkusListInput {
  subscriptionId: string;
}
export const ResourceSkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/skus",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ResourceSkusListInput>;

// Output Schema
export interface ResourceSkusListOutput {
  value: {
    resourceType?: string;
    name?: string;
    tier?: string;
    kind?: string;
    locations?: string[];
    restrictions?: {
      type?: "Location" | "Zone";
      values?: string[];
      restrictionInfo?: { locations?: string[]; zones?: string[] };
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const ResourceSkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        locations: Schema.optional(Schema.Array(Schema.String)),
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["Location", "Zone"])),
              values: Schema.optional(Schema.Array(Schema.String)),
              restrictionInfo: Schema.optional(
                Schema.Struct({
                  locations: Schema.optional(Schema.Array(Schema.String)),
                  zones: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<ResourceSkusListOutput>;

// The operation
/**
 * Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ResourceSkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourceSkusListInput,
  outputSchema: ResourceSkusListOutput,
}));
// Input Schema
export interface SubscriptionRaiPolicyCreateOrUpdateInput {
  subscriptionId: string;
  raiPolicyName: string;
  properties?: {
    type?: "UserManaged" | "SystemManaged";
    mode?: "Default" | "Deferred" | "Blocking" | "Asynchronous_filter";
    basePolicyName?: string;
    contentFilters?: {
      name?: string;
      enabled?: boolean;
      severityThreshold?: "Low" | "Medium" | "High";
      blocking?: boolean;
      source?:
        | "Prompt"
        | "Completion"
        | "PreToolCall"
        | "PostToolCall"
        | "PreRun"
        | "PostRun";
      action?: "None" | "BLOCKING" | "ANNOTATING" | "HITL" | "RETRY";
    }[];
    customBlocklists?: { blocklistName?: string; blocking?: boolean }[];
    safetyProviders?: { safetyProviderName?: string; blocking?: boolean }[];
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const SubscriptionRaiPolicyCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["UserManaged", "SystemManaged"]),
        ),
        mode: Schema.optional(
          Schema.Literals([
            "Default",
            "Deferred",
            "Blocking",
            "Asynchronous_filter",
          ]),
        ),
        basePolicyName: Schema.optional(Schema.String),
        contentFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              enabled: Schema.optional(Schema.Boolean),
              severityThreshold: Schema.optional(
                Schema.Literals(["Low", "Medium", "High"]),
              ),
              blocking: Schema.optional(Schema.Boolean),
              source: Schema.optional(
                Schema.Literals([
                  "Prompt",
                  "Completion",
                  "PreToolCall",
                  "PostToolCall",
                  "PreRun",
                  "PostRun",
                ]),
              ),
              action: Schema.optional(
                Schema.Literals([
                  "None",
                  "BLOCKING",
                  "ANNOTATING",
                  "HITL",
                  "RETRY",
                ]),
              ),
            }),
          ),
        ),
        customBlocklists: Schema.optional(
          Schema.Array(
            Schema.Struct({
              blocklistName: Schema.optional(Schema.String),
              blocking: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        safetyProviders: Schema.optional(
          Schema.Array(
            Schema.Struct({
              safetyProviderName: Schema.optional(Schema.String),
              blocking: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionRaiPolicyCreateOrUpdateInput>;

// Output Schema
export interface SubscriptionRaiPolicyCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SubscriptionRaiPolicyCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SubscriptionRaiPolicyCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified Content Filters associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionRaiPolicyCreateOrUpdateInput,
    outputSchema: SubscriptionRaiPolicyCreateOrUpdateOutput,
  }));
// Input Schema
export interface SubscriptionRaiPolicyDeleteInput {
  subscriptionId: string;
  raiPolicyName: string;
}
export const SubscriptionRaiPolicyDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionRaiPolicyDeleteInput>;

// Output Schema
export type SubscriptionRaiPolicyDeleteOutput = void;
export const SubscriptionRaiPolicyDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SubscriptionRaiPolicyDeleteOutput>;

// The operation
/**
 * Deletes the specified Content Filters associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionRaiPolicyDeleteInput,
    outputSchema: SubscriptionRaiPolicyDeleteOutput,
  }),
);
// Input Schema
export interface SubscriptionRaiPolicyGetInput {
  subscriptionId: string;
  raiPolicyName: string;
}
export const SubscriptionRaiPolicyGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionRaiPolicyGetInput>;

// Output Schema
export interface SubscriptionRaiPolicyGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SubscriptionRaiPolicyGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SubscriptionRaiPolicyGetOutput>;

// The operation
/**
 * Gets the specified Content Filters associated with the Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionRaiPolicyGetInput,
    outputSchema: SubscriptionRaiPolicyGetOutput,
  }),
);
// Input Schema
export interface TestRaiExternalSafetyProviderCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  safetyProviderName: string;
  properties?: {
    providerId?: string;
    providerName?: string;
    mode?: string;
    url?: string;
    secretName?: string;
    managedIdentity?: string;
    keyVaultUri?: string;
    createdAt?: string;
    lastModifiedAt?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const TestRaiExternalSafetyProviderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerId: Schema.optional(Schema.String),
        providerName: Schema.optional(Schema.String),
        mode: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        secretName: Schema.optional(Schema.String),
        managedIdentity: Schema.optional(Schema.String),
        keyVaultUri: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/testRaiExternalSafetyProvider/{safetyProviderName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<TestRaiExternalSafetyProviderCreateOrUpdateInput>;

// Output Schema
export interface TestRaiExternalSafetyProviderCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const TestRaiExternalSafetyProviderCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<TestRaiExternalSafetyProviderCreateOrUpdateOutput>;

// The operation
/**
 * Test the rai safety provider associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const TestRaiExternalSafetyProviderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TestRaiExternalSafetyProviderCreateOrUpdateInput,
    outputSchema: TestRaiExternalSafetyProviderCreateOrUpdateOutput,
  }));
// Input Schema
export interface UsagesListInput {
  subscriptionId: string;
  location: string;
  $filter?: string;
}
export const UsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/usages",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
  nextLink?: string;
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    quotaPeriod?: string;
    limit?: number;
    currentValue?: number;
    nextResetTime?: string;
    status?: "Included" | "Blocked" | "InOverage" | "Unknown";
  }[];
}
export const UsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        unit: Schema.optional(
          Schema.Literals([
            "Count",
            "Bytes",
            "Seconds",
            "Percent",
            "CountPerSecond",
            "BytesPerSecond",
            "Milliseconds",
          ]),
        ),
        name: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.String),
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
        quotaPeriod: Schema.optional(Schema.String),
        limit: Schema.optional(Schema.Number),
        currentValue: Schema.optional(Schema.Number),
        nextResetTime: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["Included", "Blocked", "InOverage", "Unknown"]),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * Get usages for the requested subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const UsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
