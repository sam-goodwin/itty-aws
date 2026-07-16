/**
 * Azure Adhybridhealthservice API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AdDomainServiceMembersListInput {
  serviceName: string;
  $filter?: string;
  isGroupbySite: boolean;
  query?: string;
  nextPartitionKey: " ";
  nextRowKey: " ";
  takeCount?: number;
}
export const AdDomainServiceMembersListInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    isGroupbySite: Schema.Boolean,
    query: Schema.optional(Schema.String),
    nextPartitionKey: Schema.Literals([" "]),
    nextRowKey: Schema.Literals([" "]),
    takeCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/addomainservicemembers",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AdDomainServiceMembersListInput>;

// Output Schema
export interface AdDomainServiceMembersListOutput {
  nextLink?: string;
  value?: {
    domainName?: string;
    siteName?: string;
    addsRoles?: string[];
    gcReachable?: boolean;
    isAdvertising?: boolean;
    pdcReachable?: boolean;
    sysvolState?: boolean;
    dcTypes?: string[];
    serviceMemberId?: string;
    serviceId?: string;
    tenantId?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    dimensions?: { key?: string; value?: string }[];
    disabled?: boolean;
    disabledReason?: number;
    installedQfes?: {
      kbName?: string;
      link?: string;
      installedDate?: string;
    }[];
    lastDisabled?: string;
    lastReboot?: string;
    lastServerReportedMonitoringLevelChange?: string;
    lastUpdated?: string;
    machineId?: string;
    machineName?: string;
    monitoringConfigurationsComputed?: { key?: string; value?: string }[];
    monitoringConfigurationsCustomized?: { key?: string; value?: string }[];
    osName?: string;
    osVersion?: string;
    properties?: { key?: string; value?: string }[];
    recommendedQfes?: {
      kbName?: string;
      link?: string;
      installedDate?: string;
    }[];
    resolvedAlerts?: number;
    role?: string;
    serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
    status?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AdDomainServiceMembersListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          domainName: Schema.optional(Schema.String),
          siteName: Schema.optional(Schema.String),
          addsRoles: Schema.optional(Schema.Array(Schema.String)),
          gcReachable: Schema.optional(Schema.Boolean),
          isAdvertising: Schema.optional(Schema.Boolean),
          pdcReachable: Schema.optional(Schema.Boolean),
          sysvolState: Schema.optional(Schema.Boolean),
          dcTypes: Schema.optional(Schema.Array(Schema.String)),
          serviceMemberId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          activeAlerts: Schema.optional(Schema.Number),
          additionalInformation: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
          dimensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          disabled: Schema.optional(Schema.Boolean),
          disabledReason: Schema.optional(Schema.Number),
          installedQfes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                kbName: Schema.optional(Schema.String),
                link: Schema.optional(Schema.String),
                installedDate: Schema.optional(Schema.String),
              }),
            ),
          ),
          lastDisabled: Schema.optional(Schema.String),
          lastReboot: Schema.optional(Schema.String),
          lastServerReportedMonitoringLevelChange: Schema.optional(
            Schema.String,
          ),
          lastUpdated: Schema.optional(Schema.String),
          machineId: Schema.optional(Schema.String),
          machineName: Schema.optional(Schema.String),
          monitoringConfigurationsComputed: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          monitoringConfigurationsCustomized: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          osName: Schema.optional(Schema.String),
          osVersion: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          recommendedQfes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                kbName: Schema.optional(Schema.String),
                link: Schema.optional(Schema.String),
                installedDate: Schema.optional(Schema.String),
              }),
            ),
          ),
          resolvedAlerts: Schema.optional(Schema.Number),
          role: Schema.optional(Schema.String),
          serverReportedMonitoringLevel: Schema.optional(
            Schema.Literals(["Partial", "Full", "Off"]),
          ),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AdDomainServiceMembersListOutput>;

// The operation
/**
 * Gets the details of the servers, for a given Active Directory Domain Service, that are onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The server property filter to apply.
 * @param isGroupbySite - Indicates if the result should be grouped by site or not.
 * @param query - The custom query.
 * @param nextPartitionKey - The next partition key to query for.
 * @param nextRowKey - The next row key to query for.
 * @param takeCount - The take count , which specifies the number of elements that can be returned from a sequence.
 * @param api-version - The version of the API to be used with the client request.
 */
export const adDomainServiceMembersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AdDomainServiceMembersListInput,
  outputSchema: AdDomainServiceMembersListOutput,
}));
// Input Schema
export interface AddsServiceGetMetricsInput {
  serviceName: string;
  metricName: string;
  groupName: string;
  groupKey?: string;
  fromDate?: string;
  toDate?: string;
}
export const AddsServiceGetMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    groupKey: Schema.optional(Schema.String),
    fromDate: Schema.optional(Schema.String),
    toDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metrics/{metricName}/groups/{groupName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServiceGetMetricsInput>;

// Output Schema
export interface AddsServiceGetMetricsOutput {
  sets?: { setName?: string; values?: number[] }[];
  timeStamps?: string[];
}
export const AddsServiceGetMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    sets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          setName: Schema.optional(Schema.String),
          values: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
    ),
    timeStamps: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<AddsServiceGetMetricsOutput>;

// The operation
/**
 * Gets the server related metrics for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param groupKey - The group key
 * @param fromDate - The start date.
 * @param toDate - The end date.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServiceGetMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServiceGetMetricsInput,
  outputSchema: AddsServiceGetMetricsOutput,
}));
// Input Schema
export interface AddsServiceMembersDeleteInput {
  serviceName: string;
  serviceMemberId: string;
  confirm?: boolean;
}
export const AddsServiceMembersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    confirm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServiceMembersDeleteInput>;

// Output Schema
export type AddsServiceMembersDeleteOutput = void;
export const AddsServiceMembersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AddsServiceMembersDeleteOutput>;

// The operation
/**
 * Deletes a Active Directory Domain Controller server that has been onboarded to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param confirm - Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServiceMembersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServiceMembersDeleteInput,
  outputSchema: AddsServiceMembersDeleteOutput,
}));
// Input Schema
export interface AddsServiceMembersGetInput {
  serviceName: string;
  serviceMemberId: string;
}
export const AddsServiceMembersGetInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServiceMembersGetInput>;

// Output Schema
export interface AddsServiceMembersGetOutput {
  serviceMemberId?: string;
  serviceId?: string;
  tenantId?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  dimensions?: unknown;
  disabled?: boolean;
  disabledReason?: number;
  installedQfes?: unknown;
  lastDisabled?: string;
  lastReboot?: string;
  lastServerReportedMonitoringLevelChange?: string;
  lastUpdated?: string;
  machineId?: string;
  machineName?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  osName?: string;
  osVersion?: string;
  properties?: unknown;
  recommendedQfes?: unknown;
  resolvedAlerts?: number;
  role?: string;
  serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
  status?: string;
}
export const AddsServiceMembersGetOutput =
  /*@__PURE__*/ Schema.Struct({
    serviceMemberId: Schema.optional(Schema.String),
    serviceId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    activeAlerts: Schema.optional(Schema.Number),
    additionalInformation: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Unknown),
    disabled: Schema.optional(Schema.Boolean),
    disabledReason: Schema.optional(Schema.Number),
    installedQfes: Schema.optional(Schema.Unknown),
    lastDisabled: Schema.optional(Schema.String),
    lastReboot: Schema.optional(Schema.String),
    lastServerReportedMonitoringLevelChange: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    machineId: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
    monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    recommendedQfes: Schema.optional(Schema.Unknown),
    resolvedAlerts: Schema.optional(Schema.Number),
    role: Schema.optional(Schema.String),
    serverReportedMonitoringLevel: Schema.optional(
      Schema.Literals(["Partial", "Full", "Off"]),
    ),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServiceMembersGetOutput>;

// The operation
/**
 * Gets the details of a server, for a given Active Directory Domain Controller service, that are onboarded to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServiceMembersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServiceMembersGetInput,
  outputSchema: AddsServiceMembersGetOutput,
}));
// Input Schema
export interface AddsServiceMembersListInput {
  serviceName: string;
  $filter?: string;
}
export const AddsServiceMembersListInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/addsservicemembers",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServiceMembersListInput>;

// Output Schema
export interface AddsServiceMembersListOutput {
  nextLink?: string;
  value?: {
    domainName?: string;
    siteName?: string;
    addsRoles?: string[];
    gcReachable?: boolean;
    isAdvertising?: boolean;
    pdcReachable?: boolean;
    sysvolState?: boolean;
    dcTypes?: string[];
    serviceMemberId?: string;
    serviceId?: string;
    tenantId?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    dimensions?: { key?: string; value?: string }[];
    disabled?: boolean;
    disabledReason?: number;
    installedQfes?: {
      kbName?: string;
      link?: string;
      installedDate?: string;
    }[];
    lastDisabled?: string;
    lastReboot?: string;
    lastServerReportedMonitoringLevelChange?: string;
    lastUpdated?: string;
    machineId?: string;
    machineName?: string;
    monitoringConfigurationsComputed?: { key?: string; value?: string }[];
    monitoringConfigurationsCustomized?: { key?: string; value?: string }[];
    osName?: string;
    osVersion?: string;
    properties?: { key?: string; value?: string }[];
    recommendedQfes?: {
      kbName?: string;
      link?: string;
      installedDate?: string;
    }[];
    resolvedAlerts?: number;
    role?: string;
    serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
    status?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServiceMembersListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          domainName: Schema.optional(Schema.String),
          siteName: Schema.optional(Schema.String),
          addsRoles: Schema.optional(Schema.Array(Schema.String)),
          gcReachable: Schema.optional(Schema.Boolean),
          isAdvertising: Schema.optional(Schema.Boolean),
          pdcReachable: Schema.optional(Schema.Boolean),
          sysvolState: Schema.optional(Schema.Boolean),
          dcTypes: Schema.optional(Schema.Array(Schema.String)),
          serviceMemberId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          activeAlerts: Schema.optional(Schema.Number),
          additionalInformation: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
          dimensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          disabled: Schema.optional(Schema.Boolean),
          disabledReason: Schema.optional(Schema.Number),
          installedQfes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                kbName: Schema.optional(Schema.String),
                link: Schema.optional(Schema.String),
                installedDate: Schema.optional(Schema.String),
              }),
            ),
          ),
          lastDisabled: Schema.optional(Schema.String),
          lastReboot: Schema.optional(Schema.String),
          lastServerReportedMonitoringLevelChange: Schema.optional(
            Schema.String,
          ),
          lastUpdated: Schema.optional(Schema.String),
          machineId: Schema.optional(Schema.String),
          machineName: Schema.optional(Schema.String),
          monitoringConfigurationsComputed: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          monitoringConfigurationsCustomized: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          osName: Schema.optional(Schema.String),
          osVersion: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          recommendedQfes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                kbName: Schema.optional(Schema.String),
                link: Schema.optional(Schema.String),
                installedDate: Schema.optional(Schema.String),
              }),
            ),
          ),
          resolvedAlerts: Schema.optional(Schema.Number),
          role: Schema.optional(Schema.String),
          serverReportedMonitoringLevel: Schema.optional(
            Schema.Literals(["Partial", "Full", "Off"]),
          ),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServiceMembersListOutput>;

// The operation
/**
 * Gets the details of the Active Directory Domain servers, for a given Active Directory Domain Service, that are onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The server property filter to apply.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServiceMembersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServiceMembersListInput,
  outputSchema: AddsServiceMembersListOutput,
}));
// Input Schema
export interface AddsServiceMembersListCredentialsInput {
  serviceName: string;
  serviceMemberId: string;
  $filter?: string;
}
export const AddsServiceMembersListCredentialsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId}/credentials",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServiceMembersListCredentialsInput>;

// Output Schema
export interface AddsServiceMembersListCredentialsOutput {
  value?: { identifier?: string; type?: string; credentialData?: string[] }[];
}
export const AddsServiceMembersListCredentialsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          identifier: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          credentialData: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AddsServiceMembersListCredentialsOutput>;

// The operation
/**
 * Gets the credentials of the server which is needed by the agent to connect to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The property filter to apply.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServiceMembersListCredentials =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServiceMembersListCredentialsInput,
    outputSchema: AddsServiceMembersListCredentialsOutput,
  }));
// Input Schema
export interface AddsServicesAddInput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const AddsServicesAddInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.ADHybridHealthService/addsservices",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<AddsServicesAddInput>;

// Output Schema
export interface AddsServicesAddOutput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const AddsServicesAddOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AddsServicesAddOutput>;

// The operation
/**
 * Onboards a service for a given tenant in Azure Active Directory Connect Health.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesAdd = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServicesAddInput,
  outputSchema: AddsServicesAddOutput,
}));
// Input Schema
export interface AddsServicesDeleteInput {
  serviceName: string;
  confirm?: boolean;
}
export const AddsServicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    confirm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesDeleteInput>;

// Output Schema
export type AddsServicesDeleteOutput = void;
export const AddsServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AddsServicesDeleteOutput>;

// The operation
/**
 * Deletes an Active Directory Domain Service which is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service which needs to be deleted.
 * @param confirm - Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServicesDeleteInput,
  outputSchema: AddsServicesDeleteOutput,
}));
// Input Schema
export interface AddsServicesGetInput {
  serviceName: string;
}
export const AddsServicesGetInput = /*@__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<AddsServicesGetInput>;

// Output Schema
export interface AddsServicesGetOutput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const AddsServicesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AddsServicesGetOutput>;

// The operation
/**
 * Gets the details of an Active Directory Domain Service for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServicesGetInput,
  outputSchema: AddsServicesGetOutput,
}));
// Input Schema
export interface AddsServicesGetForestSummaryInput {
  serviceName: string;
}
export const AddsServicesGetForestSummaryInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/forestsummary",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesGetForestSummaryInput>;

// Output Schema
export interface AddsServicesGetForestSummaryOutput {
  forestName?: string;
  domainCount?: number;
  siteCount?: number;
  monitoredDcCount?: number;
  totalDcCount?: number;
  domains?: string[];
  sites?: string[];
}
export const AddsServicesGetForestSummaryOutput =
  /*@__PURE__*/ Schema.Struct({
    forestName: Schema.optional(Schema.String),
    domainCount: Schema.optional(Schema.Number),
    siteCount: Schema.optional(Schema.Number),
    monitoredDcCount: Schema.optional(Schema.Number),
    totalDcCount: Schema.optional(Schema.Number),
    domains: Schema.optional(Schema.Array(Schema.String)),
    sites: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<AddsServicesGetForestSummaryOutput>;

// The operation
/**
 * Gets the forest summary for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesGetForestSummary =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesGetForestSummaryInput,
    outputSchema: AddsServicesGetForestSummaryOutput,
  }));
// Input Schema
export interface AddsServicesGetMetricMetadataInput {
  serviceName: string;
  metricName: string;
}
export const AddsServicesGetMetricMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metricmetadata/{metricName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesGetMetricMetadataInput>;

// Output Schema
export interface AddsServicesGetMetricMetadataOutput {
  metricsProcessorClassName?: string;
  metricName?: string;
  groupings?: {
    key?: string;
    displayName?: string;
    invisibleForUi?: boolean;
  }[];
  displayName?: string;
  valueKind?: string;
  minValue?: number;
  maxValue?: number;
  kind?: string;
  isDefault?: boolean;
  isPerfCounter?: boolean;
  isDevOps?: boolean;
}
export const AddsServicesGetMetricMetadataOutput =
  /*@__PURE__*/ Schema.Struct({
    metricsProcessorClassName: Schema.optional(Schema.String),
    metricName: Schema.optional(Schema.String),
    groupings: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          invisibleForUi: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    displayName: Schema.optional(Schema.String),
    valueKind: Schema.optional(Schema.String),
    minValue: Schema.optional(Schema.Number),
    maxValue: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
    isPerfCounter: Schema.optional(Schema.Boolean),
    isDevOps: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<AddsServicesGetMetricMetadataOutput>;

// The operation
/**
 * Gets the service related metric information.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesGetMetricMetadata =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesGetMetricMetadataInput,
    outputSchema: AddsServicesGetMetricMetadataOutput,
  }));
// Input Schema
export interface AddsServicesGetMetricMetadataForGroupInput {
  serviceName: string;
  metricName: string;
  groupName: string;
  groupKey?: string;
  fromDate?: string;
  toDate?: string;
}
export const AddsServicesGetMetricMetadataForGroupInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    groupKey: Schema.optional(Schema.String),
    fromDate: Schema.optional(Schema.String),
    toDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metricmetadata/{metricName}/groups/{groupName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesGetMetricMetadataForGroupInput>;

// Output Schema
export interface AddsServicesGetMetricMetadataForGroupOutput {
  sets?: { setName?: string; values?: number[] }[];
  timeStamps?: string[];
}
export const AddsServicesGetMetricMetadataForGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    sets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          setName: Schema.optional(Schema.String),
          values: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
    ),
    timeStamps: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<AddsServicesGetMetricMetadataForGroupOutput>;

// The operation
/**
 * Gets the service related metrics for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param groupKey - The group key
 * @param fromDate - The start date.
 * @param toDate - The end date.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesGetMetricMetadataForGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesGetMetricMetadataForGroupInput,
    outputSchema: AddsServicesGetMetricMetadataForGroupOutput,
  }));
// Input Schema
export interface AddsServicesListInput {
  $filter?: string;
  serviceType?: string;
  skipCount?: number;
  takeCount?: number;
}
export const AddsServicesListInput = /*@__PURE__*/ Schema.Struct({
  $filter: Schema.optional(Schema.String),
  serviceType: Schema.optional(Schema.String),
  skipCount: Schema.optional(Schema.Number),
  takeCount: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/addsservices",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<AddsServicesListInput>;

// Output Schema
export interface AddsServicesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    customNotificationEmails?: string[];
    disabled?: boolean;
    displayName?: string;
    health?: string;
    lastDisabled?: string;
    lastUpdated?: string;
    monitoringConfigurationsComputed?: unknown;
    monitoringConfigurationsCustomized?: unknown;
    notificationEmailEnabled?: boolean;
    notificationEmailEnabledForGlobalAdmins?: boolean;
    notificationEmailsEnabledForGlobalAdmins?: boolean;
    notificationEmails?: string[];
    originalDisabledState?: boolean;
    resolvedAlerts?: number;
    serviceId?: string;
    serviceName?: string;
    signature?: string;
    simpleProperties?: unknown;
    tenantId?: string;
    type?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServicesListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        activeAlerts: Schema.optional(Schema.Number),
        additionalInformation: Schema.optional(Schema.String),
        createdDate: Schema.optional(Schema.String),
        customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
        disabled: Schema.optional(Schema.Boolean),
        displayName: Schema.optional(Schema.String),
        health: Schema.optional(Schema.String),
        lastDisabled: Schema.optional(Schema.String),
        lastUpdated: Schema.optional(Schema.String),
        monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
        monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
        notificationEmailEnabled: Schema.optional(Schema.Boolean),
        notificationEmailEnabledForGlobalAdmins: Schema.optional(
          Schema.Boolean,
        ),
        notificationEmailsEnabledForGlobalAdmins: Schema.optional(
          Schema.Boolean,
        ),
        notificationEmails: Schema.optional(Schema.Array(Schema.String)),
        originalDisabledState: Schema.optional(Schema.Boolean),
        resolvedAlerts: Schema.optional(Schema.Number),
        serviceId: Schema.optional(Schema.String),
        serviceName: Schema.optional(Schema.String),
        signature: Schema.optional(Schema.String),
        simpleProperties: Schema.optional(Schema.Unknown),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  totalCount: Schema.optional(Schema.Number),
  continuationToken: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AddsServicesListOutput>;

// The operation
/**
 * Gets the details of Active Directory Domain Service, for a tenant, that are onboarded to Azure Active Directory Connect Health.
 *
 * @param $filter - The service property filter to apply.
 * @param serviceType - The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
 * @param skipCount - The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
 * @param takeCount - The take count , which specifies the number of elements that can be returned from a sequence.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServicesListInput,
  outputSchema: AddsServicesListOutput,
}));
// Input Schema
export interface AddsServicesListMetricMetadataInput {
  serviceName: string;
  $filter?: string;
  perfCounter?: boolean;
}
export const AddsServicesListMetricMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    perfCounter: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metricmetadata",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesListMetricMetadataInput>;

// Output Schema
export interface AddsServicesListMetricMetadataOutput {
  nextLink?: string;
  value?: {
    metricsProcessorClassName?: string;
    metricName?: string;
    groupings?: {
      key?: string;
      displayName?: string;
      invisibleForUi?: boolean;
    }[];
    displayName?: string;
    valueKind?: string;
    minValue?: number;
    maxValue?: number;
    kind?: string;
    isDefault?: boolean;
    isPerfCounter?: boolean;
    isDevOps?: boolean;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServicesListMetricMetadataOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          metricsProcessorClassName: Schema.optional(Schema.String),
          metricName: Schema.optional(Schema.String),
          groupings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
                invisibleForUi: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          displayName: Schema.optional(Schema.String),
          valueKind: Schema.optional(Schema.String),
          minValue: Schema.optional(Schema.Number),
          maxValue: Schema.optional(Schema.Number),
          kind: Schema.optional(Schema.String),
          isDefault: Schema.optional(Schema.Boolean),
          isPerfCounter: Schema.optional(Schema.Boolean),
          isDevOps: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesListMetricMetadataOutput>;

// The operation
/**
 * Gets the service related metrics information.
 *
 * @param $filter - The metric metadata property filter to apply.
 * @param serviceName - The name of the service.
 * @param perfCounter - Indicates if only performance counter metrics are requested.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesListMetricMetadata =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesListMetricMetadataInput,
    outputSchema: AddsServicesListMetricMetadataOutput,
  }));
// Input Schema
export interface AddsServicesListMetricsAverageInput {
  serviceName: string;
  metricName: string;
  groupName: string;
}
export const AddsServicesListMetricsAverageInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metrics/{metricName}/groups/{groupName}/average",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesListMetricsAverageInput>;

// Output Schema
export interface AddsServicesListMetricsAverageOutput {
  nextLink?: string;
  value?: { key?: string; value?: string }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServicesListMetricsAverageOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesListMetricsAverageOutput>;

// The operation
/**
 * Gets the average of the metric values for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesListMetricsAverage =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesListMetricsAverageInput,
    outputSchema: AddsServicesListMetricsAverageOutput,
  }));
// Input Schema
export interface AddsServicesListMetricsSumInput {
  serviceName: string;
  metricName: string;
  groupName: string;
}
export const AddsServicesListMetricsSumInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/metrics/{metricName}/groups/{groupName}/sum",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesListMetricsSumInput>;

// Output Schema
export interface AddsServicesListMetricsSumOutput {
  nextLink?: string;
  value?: { key?: string; value?: string }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServicesListMetricsSumOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesListMetricsSumOutput>;

// The operation
/**
 * Gets the sum of the metric values for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesListMetricsSum = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServicesListMetricsSumInput,
  outputSchema: AddsServicesListMetricsSumOutput,
}));
// Input Schema
export interface AddsServicesListPremiumServicesInput {
  $filter?: string;
  serviceType?: string;
  skipCount?: number;
  takeCount?: number;
}
export const AddsServicesListPremiumServicesInput =
  /*@__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    serviceType: Schema.optional(Schema.String),
    skipCount: Schema.optional(Schema.Number),
    takeCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/premiumCheck",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesListPremiumServicesInput>;

// Output Schema
export interface AddsServicesListPremiumServicesOutput {
  nextLink?: string;
  value?: {
    id?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    customNotificationEmails?: string[];
    disabled?: boolean;
    displayName?: string;
    health?: string;
    lastDisabled?: string;
    lastUpdated?: string;
    monitoringConfigurationsComputed?: unknown;
    monitoringConfigurationsCustomized?: unknown;
    notificationEmailEnabled?: boolean;
    notificationEmailEnabledForGlobalAdmins?: boolean;
    notificationEmailsEnabledForGlobalAdmins?: boolean;
    notificationEmails?: string[];
    originalDisabledState?: boolean;
    resolvedAlerts?: number;
    serviceId?: string;
    serviceName?: string;
    signature?: string;
    simpleProperties?: unknown;
    tenantId?: string;
    type?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServicesListPremiumServicesOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          activeAlerts: Schema.optional(Schema.Number),
          additionalInformation: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
          customNotificationEmails: Schema.optional(
            Schema.Array(Schema.String),
          ),
          disabled: Schema.optional(Schema.Boolean),
          displayName: Schema.optional(Schema.String),
          health: Schema.optional(Schema.String),
          lastDisabled: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
          monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
          notificationEmailEnabled: Schema.optional(Schema.Boolean),
          notificationEmailEnabledForGlobalAdmins: Schema.optional(
            Schema.Boolean,
          ),
          notificationEmailsEnabledForGlobalAdmins: Schema.optional(
            Schema.Boolean,
          ),
          notificationEmails: Schema.optional(Schema.Array(Schema.String)),
          originalDisabledState: Schema.optional(Schema.Boolean),
          resolvedAlerts: Schema.optional(Schema.Number),
          serviceId: Schema.optional(Schema.String),
          serviceName: Schema.optional(Schema.String),
          signature: Schema.optional(Schema.String),
          simpleProperties: Schema.optional(Schema.Unknown),
          tenantId: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesListPremiumServicesOutput>;

// The operation
/**
 * Gets the details of Active Directory Domain Services for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.
 *
 * @param $filter - The service property filter to apply.
 * @param serviceType - The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
 * @param skipCount - The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
 * @param takeCount - The take count , which specifies the number of elements that can be returned from a sequence.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesListPremiumServices =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesListPremiumServicesInput,
    outputSchema: AddsServicesListPremiumServicesOutput,
  }));
// Input Schema
export interface AddsServicesListReplicationDetailsInput {
  serviceName: string;
  $filter?: string;
  withDetails?: boolean;
}
export const AddsServicesListReplicationDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    withDetails: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/replicationdetails",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesListReplicationDetailsInput>;

// Output Schema
export interface AddsServicesListReplicationDetailsOutput {
  value?: {
    targetServer?: string;
    site?: string;
    domain?: string;
    status?: number;
    lastAttemptedSync?: string;
    lastSuccessfulSync?: string;
    inboundNeighborCollection?: {
      sourceDomainController?: string;
      consecutiveFailureCount?: number;
      namingContext?: string;
      status?: number;
      lastAttemptedSync?: string;
      lastSuccessfulSync?: string;
      lastErrorCode?: number;
      lastErrorMessage?: string;
      errorTitle?: string;
      errorDescription?: string;
      fixLink?: string;
      fixDetails?: string;
      additionalInfo?: string;
    }[];
  }[];
  totalCount?: number;
  continuationToken?: string;
  nextLink?: string;
}
export const AddsServicesListReplicationDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          targetServer: Schema.optional(Schema.String),
          site: Schema.optional(Schema.String),
          domain: Schema.optional(Schema.String),
          status: Schema.optional(Schema.Number),
          lastAttemptedSync: Schema.optional(Schema.String),
          lastSuccessfulSync: Schema.optional(Schema.String),
          inboundNeighborCollection: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sourceDomainController: Schema.optional(Schema.String),
                consecutiveFailureCount: Schema.optional(Schema.Number),
                namingContext: Schema.optional(Schema.String),
                status: Schema.optional(Schema.Number),
                lastAttemptedSync: Schema.optional(Schema.String),
                lastSuccessfulSync: Schema.optional(Schema.String),
                lastErrorCode: Schema.optional(Schema.Number),
                lastErrorMessage: Schema.optional(Schema.String),
                errorTitle: Schema.optional(Schema.String),
                errorDescription: Schema.optional(Schema.String),
                fixLink: Schema.optional(Schema.String),
                fixDetails: Schema.optional(Schema.String),
                additionalInfo: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesListReplicationDetailsOutput>;

// The operation
/**
 * Gets complete domain controller list along with replication details for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The server property filter to apply.
 * @param withDetails - Indicates if InboundReplicationNeighbor details are required or not.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesListReplicationDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesListReplicationDetailsInput,
    outputSchema: AddsServicesListReplicationDetailsOutput,
  }));
// Input Schema
export interface AddsServicesListReplicationSummaryInput {
  serviceName: string;
  $filter?: string;
  isGroupbySite: boolean;
  query: string;
  nextPartitionKey: " ";
  nextRowKey: " ";
  takeCount?: number;
}
export const AddsServicesListReplicationSummaryInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    isGroupbySite: Schema.Boolean,
    query: Schema.String,
    nextPartitionKey: Schema.Literals([" "]),
    nextRowKey: Schema.Literals([" "]),
    takeCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/replicationsummary",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesListReplicationSummaryInput>;

// Output Schema
export interface AddsServicesListReplicationSummaryOutput {
  value?: {
    targetServer?: string;
    site?: string;
    domain?: string;
    status?: number;
    lastAttemptedSync?: string;
    lastSuccessfulSync?: string;
    inboundNeighborCollection?: {
      sourceDomainController?: string;
      consecutiveFailureCount?: number;
      namingContext?: string;
      status?: number;
      lastAttemptedSync?: string;
      lastSuccessfulSync?: string;
      lastErrorCode?: number;
      lastErrorMessage?: string;
      errorTitle?: string;
      errorDescription?: string;
      fixLink?: string;
      fixDetails?: string;
      additionalInfo?: string;
    }[];
  }[];
}
export const AddsServicesListReplicationSummaryOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          targetServer: Schema.optional(Schema.String),
          site: Schema.optional(Schema.String),
          domain: Schema.optional(Schema.String),
          status: Schema.optional(Schema.Number),
          lastAttemptedSync: Schema.optional(Schema.String),
          lastSuccessfulSync: Schema.optional(Schema.String),
          inboundNeighborCollection: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sourceDomainController: Schema.optional(Schema.String),
                consecutiveFailureCount: Schema.optional(Schema.Number),
                namingContext: Schema.optional(Schema.String),
                status: Schema.optional(Schema.Number),
                lastAttemptedSync: Schema.optional(Schema.String),
                lastSuccessfulSync: Schema.optional(Schema.String),
                lastErrorCode: Schema.optional(Schema.Number),
                lastErrorMessage: Schema.optional(Schema.String),
                errorTitle: Schema.optional(Schema.String),
                errorDescription: Schema.optional(Schema.String),
                fixLink: Schema.optional(Schema.String),
                fixDetails: Schema.optional(Schema.String),
                additionalInfo: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AddsServicesListReplicationSummaryOutput>;

// The operation
/**
 * Gets complete domain controller list along with replication details for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The server property filter to apply.
 * @param isGroupbySite - Indicates if the result should be grouped by site or not.
 * @param query - The custom query.
 * @param nextPartitionKey - The next partition key to query for.
 * @param nextRowKey - The next row key to query for.
 * @param takeCount - The take count , which specifies the number of elements that can be returned from a sequence.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesListReplicationSummary =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesListReplicationSummaryInput,
    outputSchema: AddsServicesListReplicationSummaryOutput,
  }));
// Input Schema
export interface AddsServicesListServerAlertsInput {
  serviceMemberId: string;
  serviceName: string;
  $filter?: string;
  state?: string;
  from?: string;
  to?: string;
}
export const AddsServicesListServerAlertsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers/{serviceMemberId}/alerts",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesListServerAlertsInput>;

// Output Schema
export interface AddsServicesListServerAlertsOutput {
  value?: {
    alertId?: string;
    level?: "Warning" | "Error" | "PreWarning";
    state?:
      | "Active"
      | "ResolvedByPositiveResult"
      | "ResolvedManually"
      | "ResolvedByTimer"
      | "ResolvedByStateChange";
    shortName?: string;
    displayName?: string;
    description?: string;
    remediation?: string;
    relatedLinks?: { title?: string; url?: string }[];
    scope?: string;
    additionalInformation?: {
      titleName?: string;
      titleValue?: string;
      properties?: unknown;
      hasProperties?: boolean;
    }[];
    createdDate?: string;
    resolvedDate?: string;
    lastUpdated?: string;
    monitorRoleType?: string;
    activeAlertProperties?: { key?: string; value?: string }[];
    resolvedAlertProperties?: { key?: string; value?: string }[];
    tenantId?: string;
    serviceId?: string;
    serviceMemberId?: string;
  }[];
  nextLink?: string;
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServicesListServerAlertsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          alertId: Schema.optional(Schema.String),
          level: Schema.optional(
            Schema.Literals(["Warning", "Error", "PreWarning"]),
          ),
          state: Schema.optional(
            Schema.Literals([
              "Active",
              "ResolvedByPositiveResult",
              "ResolvedManually",
              "ResolvedByTimer",
              "ResolvedByStateChange",
            ]),
          ),
          shortName: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          remediation: Schema.optional(Schema.String),
          relatedLinks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                title: Schema.optional(Schema.String),
                url: Schema.optional(Schema.String),
              }),
            ),
          ),
          scope: Schema.optional(Schema.String),
          additionalInformation: Schema.optional(
            Schema.Array(
              Schema.Struct({
                titleName: Schema.optional(Schema.String),
                titleValue: Schema.optional(Schema.String),
                properties: Schema.optional(Schema.Unknown),
                hasProperties: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          createdDate: Schema.optional(Schema.String),
          resolvedDate: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          monitorRoleType: Schema.optional(Schema.String),
          activeAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          resolvedAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          tenantId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          serviceMemberId: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesListServerAlertsOutput>;

// The operation
/**
 * Gets the details of an alert for a given Active Directory Domain Controller service and server combination.
 *
 * @param serviceMemberId - The server Id for which the alert details needs to be queried.
 * @param serviceName - The name of the service.
 * @param $filter - The alert property filter to apply.
 * @param state - The alert state to query for.
 * @param from - The start date to query for.
 * @param to - The end date till when to query for.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesListServerAlerts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesListServerAlertsInput,
    outputSchema: AddsServicesListServerAlertsOutput,
  }));
// Input Schema
export interface AddsServicesReplicationStatusGetInput {
  serviceName: string;
}
export const AddsServicesReplicationStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/replicationstatus",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesReplicationStatusGetInput>;

// Output Schema
export interface AddsServicesReplicationStatusGetOutput {
  forestName?: string;
  totalDcCount?: number;
  errorDcCount?: number;
}
export const AddsServicesReplicationStatusGetOutput =
  /*@__PURE__*/ Schema.Struct({
    forestName: Schema.optional(Schema.String),
    totalDcCount: Schema.optional(Schema.Number),
    errorDcCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<AddsServicesReplicationStatusGetOutput>;

// The operation
/**
 * Gets Replication status for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesReplicationStatusGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesReplicationStatusGetInput,
    outputSchema: AddsServicesReplicationStatusGetOutput,
  }));
// Input Schema
export interface AddsServicesServiceMembersAddInput {
  serviceName: string;
  serviceMemberId?: string;
  serviceId?: string;
  tenantId?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  dimensions?: unknown;
  disabled?: boolean;
  disabledReason?: number;
  installedQfes?: unknown;
  lastDisabled?: string;
  lastReboot?: string;
  lastServerReportedMonitoringLevelChange?: string;
  lastUpdated?: string;
  machineId?: string;
  machineName?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  osName?: string;
  osVersion?: string;
  properties?: unknown;
  recommendedQfes?: unknown;
  resolvedAlerts?: number;
  role?: string;
  serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
  status?: string;
}
export const AddsServicesServiceMembersAddInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.optional(Schema.String),
    serviceId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    activeAlerts: Schema.optional(Schema.Number),
    additionalInformation: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Unknown),
    disabled: Schema.optional(Schema.Boolean),
    disabledReason: Schema.optional(Schema.Number),
    installedQfes: Schema.optional(Schema.Unknown),
    lastDisabled: Schema.optional(Schema.String),
    lastReboot: Schema.optional(Schema.String),
    lastServerReportedMonitoringLevelChange: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    machineId: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
    monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    recommendedQfes: Schema.optional(Schema.Unknown),
    resolvedAlerts: Schema.optional(Schema.Number),
    role: Schema.optional(Schema.String),
    serverReportedMonitoringLevel: Schema.optional(
      Schema.Literals(["Partial", "Full", "Off"]),
    ),
    status: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesServiceMembersAddInput>;

// Output Schema
export interface AddsServicesServiceMembersAddOutput {
  serviceMemberId?: string;
  serviceId?: string;
  tenantId?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  dimensions?: unknown;
  disabled?: boolean;
  disabledReason?: number;
  installedQfes?: unknown;
  lastDisabled?: string;
  lastReboot?: string;
  lastServerReportedMonitoringLevelChange?: string;
  lastUpdated?: string;
  machineId?: string;
  machineName?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  osName?: string;
  osVersion?: string;
  properties?: unknown;
  recommendedQfes?: unknown;
  resolvedAlerts?: number;
  role?: string;
  serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
  status?: string;
}
export const AddsServicesServiceMembersAddOutput =
  /*@__PURE__*/ Schema.Struct({
    serviceMemberId: Schema.optional(Schema.String),
    serviceId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    activeAlerts: Schema.optional(Schema.Number),
    additionalInformation: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Unknown),
    disabled: Schema.optional(Schema.Boolean),
    disabledReason: Schema.optional(Schema.Number),
    installedQfes: Schema.optional(Schema.Unknown),
    lastDisabled: Schema.optional(Schema.String),
    lastReboot: Schema.optional(Schema.String),
    lastServerReportedMonitoringLevelChange: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    machineId: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
    monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    recommendedQfes: Schema.optional(Schema.Unknown),
    resolvedAlerts: Schema.optional(Schema.Number),
    role: Schema.optional(Schema.String),
    serverReportedMonitoringLevel: Schema.optional(
      Schema.Literals(["Partial", "Full", "Off"]),
    ),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesServiceMembersAddOutput>;

// The operation
/**
 * Onboards  a server, for a given Active Directory Domain Controller service, to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service under which the server is to be onboarded.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesServiceMembersAdd =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesServiceMembersAddInput,
    outputSchema: AddsServicesServiceMembersAddOutput,
  }));
// Input Schema
export interface AddsServicesServiceMembersListInput {
  serviceName: string;
  $filter?: string;
  dimensionType?: string;
  dimensionSignature?: string;
}
export const AddsServicesServiceMembersListInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    dimensionType: Schema.optional(Schema.String),
    dimensionSignature: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/servicemembers",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesServiceMembersListInput>;

// Output Schema
export interface AddsServicesServiceMembersListOutput {
  nextLink?: string;
  value?: {
    serviceMemberId?: string;
    serviceId?: string;
    tenantId?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    dimensions?: unknown;
    disabled?: boolean;
    disabledReason?: number;
    installedQfes?: unknown;
    lastDisabled?: string;
    lastReboot?: string;
    lastServerReportedMonitoringLevelChange?: string;
    lastUpdated?: string;
    machineId?: string;
    machineName?: string;
    monitoringConfigurationsComputed?: unknown;
    monitoringConfigurationsCustomized?: unknown;
    osName?: string;
    osVersion?: string;
    properties?: unknown;
    recommendedQfes?: unknown;
    resolvedAlerts?: number;
    role?: string;
    serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
    status?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const AddsServicesServiceMembersListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceMemberId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          activeAlerts: Schema.optional(Schema.Number),
          additionalInformation: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
          dimensions: Schema.optional(Schema.Unknown),
          disabled: Schema.optional(Schema.Boolean),
          disabledReason: Schema.optional(Schema.Number),
          installedQfes: Schema.optional(Schema.Unknown),
          lastDisabled: Schema.optional(Schema.String),
          lastReboot: Schema.optional(Schema.String),
          lastServerReportedMonitoringLevelChange: Schema.optional(
            Schema.String,
          ),
          lastUpdated: Schema.optional(Schema.String),
          machineId: Schema.optional(Schema.String),
          machineName: Schema.optional(Schema.String),
          monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
          monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
          osName: Schema.optional(Schema.String),
          osVersion: Schema.optional(Schema.String),
          properties: Schema.optional(Schema.Unknown),
          recommendedQfes: Schema.optional(Schema.Unknown),
          resolvedAlerts: Schema.optional(Schema.Number),
          role: Schema.optional(Schema.String),
          serverReportedMonitoringLevel: Schema.optional(
            Schema.Literals(["Partial", "Full", "Off"]),
          ),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesServiceMembersListOutput>;

// The operation
/**
 * Gets the details of the servers, for a given Active Directory Domain Controller service, that are onboarded to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The server property filter to apply.
 * @param dimensionType - The server specific dimension.
 * @param dimensionSignature - The value of the dimension.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesServiceMembersList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesServiceMembersListInput,
    outputSchema: AddsServicesServiceMembersListOutput,
  }));
// Input Schema
export interface AddsServicesUpdateInput {
  serviceName: string;
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const AddsServicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    activeAlerts: Schema.optional(Schema.Number),
    additionalInformation: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
    disabled: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    health: Schema.optional(Schema.String),
    lastDisabled: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
    monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
    notificationEmailEnabled: Schema.optional(Schema.Boolean),
    notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
    notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
    notificationEmails: Schema.optional(Schema.Array(Schema.String)),
    originalDisabledState: Schema.optional(Schema.Boolean),
    resolvedAlerts: Schema.optional(Schema.Number),
    serviceId: Schema.optional(Schema.String),
    signature: Schema.optional(Schema.String),
    simpleProperties: Schema.optional(Schema.Unknown),
    tenantId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesUpdateInput>;

// Output Schema
export interface AddsServicesUpdateOutput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const AddsServicesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    activeAlerts: Schema.optional(Schema.Number),
    additionalInformation: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
    disabled: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    health: Schema.optional(Schema.String),
    lastDisabled: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
    monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
    notificationEmailEnabled: Schema.optional(Schema.Boolean),
    notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
    notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
    notificationEmails: Schema.optional(Schema.Array(Schema.String)),
    originalDisabledState: Schema.optional(Schema.Boolean),
    resolvedAlerts: Schema.optional(Schema.Number),
    serviceId: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    signature: Schema.optional(Schema.String),
    simpleProperties: Schema.optional(Schema.Unknown),
    tenantId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AddsServicesUpdateOutput>;

// The operation
/**
 * Updates an Active Directory Domain Service properties of an onboarded service.
 *
 * @param serviceName - The name of the service which needs to be deleted.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddsServicesUpdateInput,
  outputSchema: AddsServicesUpdateOutput,
}));
// Input Schema
export interface AddsServicesUserPreferenceAddInput {
  serviceName: string;
  featureName: string;
  metricNames?: string[];
}
export const AddsServicesUserPreferenceAddInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
    metricNames: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/features/{featureName}/userpreference",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesUserPreferenceAddInput>;

// Output Schema
export type AddsServicesUserPreferenceAddOutput = void;
export const AddsServicesUserPreferenceAddOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AddsServicesUserPreferenceAddOutput>;

// The operation
/**
 * Adds the user preferences for a given feature.
 *
 * @param serviceName - The name of the service.
 * @param featureName - The name of the feature.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesUserPreferenceAdd =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesUserPreferenceAddInput,
    outputSchema: AddsServicesUserPreferenceAddOutput,
  }));
// Input Schema
export interface AddsServicesUserPreferenceDeleteInput {
  serviceName: string;
  featureName: string;
}
export const AddsServicesUserPreferenceDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/features/{featureName}/userpreference",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesUserPreferenceDeleteInput>;

// Output Schema
export type AddsServicesUserPreferenceDeleteOutput = void;
export const AddsServicesUserPreferenceDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AddsServicesUserPreferenceDeleteOutput>;

// The operation
/**
 * Deletes the user preferences for a given feature.
 *
 * @param serviceName - The name of the service.
 * @param featureName - The name of the feature.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesUserPreferenceDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesUserPreferenceDeleteInput,
    outputSchema: AddsServicesUserPreferenceDeleteOutput,
  }));
// Input Schema
export interface AddsServicesUserPreferenceGetInput {
  serviceName: string;
  featureName: string;
}
export const AddsServicesUserPreferenceGetInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/features/{featureName}/userpreference",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AddsServicesUserPreferenceGetInput>;

// Output Schema
export interface AddsServicesUserPreferenceGetOutput {
  metricNames?: string[];
}
export const AddsServicesUserPreferenceGetOutput =
  /*@__PURE__*/ Schema.Struct({
    metricNames: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<AddsServicesUserPreferenceGetOutput>;

// The operation
/**
 * Gets the user preferences for a given feature.
 *
 * @param serviceName - The name of the service.
 * @param featureName - The name of the feature.
 * @param api-version - The version of the API to be used with the client request.
 */
export const addsServicesUserPreferenceGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddsServicesUserPreferenceGetInput,
    outputSchema: AddsServicesUserPreferenceGetOutput,
  }));
// Input Schema
export interface AlertsListAddsAlertsInput {
  serviceName: string;
  $filter?: string;
  state?: string;
  from?: string;
  to?: string;
}
export const AlertsListAddsAlertsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/alerts",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<AlertsListAddsAlertsInput>;

// Output Schema
export interface AlertsListAddsAlertsOutput {
  value?: {
    alertId?: string;
    level?: "Warning" | "Error" | "PreWarning";
    state?:
      | "Active"
      | "ResolvedByPositiveResult"
      | "ResolvedManually"
      | "ResolvedByTimer"
      | "ResolvedByStateChange";
    shortName?: string;
    displayName?: string;
    description?: string;
    remediation?: string;
    relatedLinks?: { title?: string; url?: string }[];
    scope?: string;
    additionalInformation?: {
      titleName?: string;
      titleValue?: string;
      properties?: unknown;
      hasProperties?: boolean;
    }[];
    createdDate?: string;
    resolvedDate?: string;
    lastUpdated?: string;
    monitorRoleType?: string;
    activeAlertProperties?: { key?: string; value?: string }[];
    resolvedAlertProperties?: { key?: string; value?: string }[];
    tenantId?: string;
    serviceId?: string;
    serviceMemberId?: string;
  }[];
  nextLink?: string;
  totalCount?: number;
  continuationToken?: string;
}
export const AlertsListAddsAlertsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          alertId: Schema.optional(Schema.String),
          level: Schema.optional(
            Schema.Literals(["Warning", "Error", "PreWarning"]),
          ),
          state: Schema.optional(
            Schema.Literals([
              "Active",
              "ResolvedByPositiveResult",
              "ResolvedManually",
              "ResolvedByTimer",
              "ResolvedByStateChange",
            ]),
          ),
          shortName: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          remediation: Schema.optional(Schema.String),
          relatedLinks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                title: Schema.optional(Schema.String),
                url: Schema.optional(Schema.String),
              }),
            ),
          ),
          scope: Schema.optional(Schema.String),
          additionalInformation: Schema.optional(
            Schema.Array(
              Schema.Struct({
                titleName: Schema.optional(Schema.String),
                titleValue: Schema.optional(Schema.String),
                properties: Schema.optional(Schema.Unknown),
                hasProperties: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          createdDate: Schema.optional(Schema.String),
          resolvedDate: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          monitorRoleType: Schema.optional(Schema.String),
          activeAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          resolvedAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          tenantId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          serviceMemberId: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AlertsListAddsAlertsOutput>;

// The operation
/**
 * Gets the alerts for a given Active Directory Domain Service.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The alert property filter to apply.
 * @param state - The alert state to query for.
 * @param from - The start date to query for.
 * @param to - The end date till when to query for.
 * @param api-version - The version of the API to be used with the client request.
 */
export const alertsListAddsAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertsListAddsAlertsInput,
  outputSchema: AlertsListAddsAlertsOutput,
}));
// Input Schema
export interface ConfigurationAddInput {}
export const ConfigurationAddInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.ADHybridHealthService/configuration",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ConfigurationAddInput>;

// Output Schema
export interface ConfigurationAddOutput {
  tenantId?: string;
  aadLicense?: string;
  aadPremium?: boolean;
  agentAutoUpdate?: boolean;
  alertSuppressionTimeInMins?: number;
  consentedToMicrosoftDevOps?: boolean;
  countryLetterCode?: string;
  createdDate?: string;
  devOpsTtl?: string;
  disabled?: boolean;
  disabledReason?: number;
  globalAdminsEmail?: string[];
  initialDomain?: string;
  lastDisabled?: string;
  lastVerified?: string;
  onboardingAllowed?: boolean;
  onboarded?: boolean;
  pksCertificate?: unknown;
  privatePreviewTenant?: boolean;
  tenantInQuarantine?: boolean;
  tenantName?: string;
}
export const ConfigurationAddOutput = /*@__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  aadLicense: Schema.optional(Schema.String),
  aadPremium: Schema.optional(Schema.Boolean),
  agentAutoUpdate: Schema.optional(Schema.Boolean),
  alertSuppressionTimeInMins: Schema.optional(Schema.Number),
  consentedToMicrosoftDevOps: Schema.optional(Schema.Boolean),
  countryLetterCode: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  devOpsTtl: Schema.optional(Schema.String),
  disabled: Schema.optional(Schema.Boolean),
  disabledReason: Schema.optional(Schema.Number),
  globalAdminsEmail: Schema.optional(Schema.Array(Schema.String)),
  initialDomain: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastVerified: Schema.optional(Schema.String),
  onboardingAllowed: Schema.optional(Schema.Boolean),
  onboarded: Schema.optional(Schema.Boolean),
  pksCertificate: Schema.optional(Schema.Unknown),
  privatePreviewTenant: Schema.optional(Schema.Boolean),
  tenantInQuarantine: Schema.optional(Schema.Boolean),
  tenantName: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ConfigurationAddOutput>;

// The operation
/**
 * Onboards a tenant in Azure Active Directory Connect Health.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const configurationAdd = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationAddInput,
  outputSchema: ConfigurationAddOutput,
}));
// Input Schema
export interface ConfigurationGetInput {}
export const ConfigurationGetInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/configuration",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ConfigurationGetInput>;

// Output Schema
export interface ConfigurationGetOutput {
  tenantId?: string;
  aadLicense?: string;
  aadPremium?: boolean;
  agentAutoUpdate?: boolean;
  alertSuppressionTimeInMins?: number;
  consentedToMicrosoftDevOps?: boolean;
  countryLetterCode?: string;
  createdDate?: string;
  devOpsTtl?: string;
  disabled?: boolean;
  disabledReason?: number;
  globalAdminsEmail?: string[];
  initialDomain?: string;
  lastDisabled?: string;
  lastVerified?: string;
  onboardingAllowed?: boolean;
  onboarded?: boolean;
  pksCertificate?: unknown;
  privatePreviewTenant?: boolean;
  tenantInQuarantine?: boolean;
  tenantName?: string;
}
export const ConfigurationGetOutput = /*@__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  aadLicense: Schema.optional(Schema.String),
  aadPremium: Schema.optional(Schema.Boolean),
  agentAutoUpdate: Schema.optional(Schema.Boolean),
  alertSuppressionTimeInMins: Schema.optional(Schema.Number),
  consentedToMicrosoftDevOps: Schema.optional(Schema.Boolean),
  countryLetterCode: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  devOpsTtl: Schema.optional(Schema.String),
  disabled: Schema.optional(Schema.Boolean),
  disabledReason: Schema.optional(Schema.Number),
  globalAdminsEmail: Schema.optional(Schema.Array(Schema.String)),
  initialDomain: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastVerified: Schema.optional(Schema.String),
  onboardingAllowed: Schema.optional(Schema.Boolean),
  onboarded: Schema.optional(Schema.Boolean),
  pksCertificate: Schema.optional(Schema.Unknown),
  privatePreviewTenant: Schema.optional(Schema.Boolean),
  tenantInQuarantine: Schema.optional(Schema.Boolean),
  tenantName: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ConfigurationGetOutput>;

// The operation
/**
 * Gets the details of a tenant onboarded to Azure Active Directory Connect Health.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const configurationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationGetInput,
  outputSchema: ConfigurationGetOutput,
}));
// Input Schema
export interface ConfigurationListAddsConfigurationsInput {
  serviceName: string;
  grouping?: string;
}
export const ConfigurationListAddsConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    grouping: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/configuration",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationListAddsConfigurationsInput>;

// Output Schema
export interface ConfigurationListAddsConfigurationsOutput {
  nextLink?: string;
  value?: { key?: string; value?: string }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ConfigurationListAddsConfigurationsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationListAddsConfigurationsOutput>;

// The operation
/**
 * Gets the service configurations.
 *
 * @param serviceName - The name of the service.
 * @param grouping - The grouping for configurations.
 */
export const configurationListAddsConfigurations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationListAddsConfigurationsInput,
    outputSchema: ConfigurationListAddsConfigurationsOutput,
  }));
// Input Schema
export interface ConfigurationUpdateInput {
  tenantId?: string;
  aadLicense?: string;
  aadPremium?: boolean;
  agentAutoUpdate?: boolean;
  alertSuppressionTimeInMins?: number;
  consentedToMicrosoftDevOps?: boolean;
  countryLetterCode?: string;
  createdDate?: string;
  devOpsTtl?: string;
  disabled?: boolean;
  disabledReason?: number;
  globalAdminsEmail?: string[];
  initialDomain?: string;
  lastDisabled?: string;
  lastVerified?: string;
  onboardingAllowed?: boolean;
  onboarded?: boolean;
  pksCertificate?: unknown;
  privatePreviewTenant?: boolean;
  tenantInQuarantine?: boolean;
  tenantName?: string;
}
export const ConfigurationUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    aadLicense: Schema.optional(Schema.String),
    aadPremium: Schema.optional(Schema.Boolean),
    agentAutoUpdate: Schema.optional(Schema.Boolean),
    alertSuppressionTimeInMins: Schema.optional(Schema.Number),
    consentedToMicrosoftDevOps: Schema.optional(Schema.Boolean),
    countryLetterCode: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    devOpsTtl: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    disabledReason: Schema.optional(Schema.Number),
    globalAdminsEmail: Schema.optional(Schema.Array(Schema.String)),
    initialDomain: Schema.optional(Schema.String),
    lastDisabled: Schema.optional(Schema.String),
    lastVerified: Schema.optional(Schema.String),
    onboardingAllowed: Schema.optional(Schema.Boolean),
    onboarded: Schema.optional(Schema.Boolean),
    pksCertificate: Schema.optional(Schema.Unknown),
    privatePreviewTenant: Schema.optional(Schema.Boolean),
    tenantInQuarantine: Schema.optional(Schema.Boolean),
    tenantName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.ADHybridHealthService/configuration",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationUpdateInput>;

// Output Schema
export interface ConfigurationUpdateOutput {
  tenantId?: string;
  aadLicense?: string;
  aadPremium?: boolean;
  agentAutoUpdate?: boolean;
  alertSuppressionTimeInMins?: number;
  consentedToMicrosoftDevOps?: boolean;
  countryLetterCode?: string;
  createdDate?: string;
  devOpsTtl?: string;
  disabled?: boolean;
  disabledReason?: number;
  globalAdminsEmail?: string[];
  initialDomain?: string;
  lastDisabled?: string;
  lastVerified?: string;
  onboardingAllowed?: boolean;
  onboarded?: boolean;
  pksCertificate?: unknown;
  privatePreviewTenant?: boolean;
  tenantInQuarantine?: boolean;
  tenantName?: string;
}
export const ConfigurationUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    aadLicense: Schema.optional(Schema.String),
    aadPremium: Schema.optional(Schema.Boolean),
    agentAutoUpdate: Schema.optional(Schema.Boolean),
    alertSuppressionTimeInMins: Schema.optional(Schema.Number),
    consentedToMicrosoftDevOps: Schema.optional(Schema.Boolean),
    countryLetterCode: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    devOpsTtl: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    disabledReason: Schema.optional(Schema.Number),
    globalAdminsEmail: Schema.optional(Schema.Array(Schema.String)),
    initialDomain: Schema.optional(Schema.String),
    lastDisabled: Schema.optional(Schema.String),
    lastVerified: Schema.optional(Schema.String),
    onboardingAllowed: Schema.optional(Schema.Boolean),
    onboarded: Schema.optional(Schema.Boolean),
    pksCertificate: Schema.optional(Schema.Unknown),
    privatePreviewTenant: Schema.optional(Schema.Boolean),
    tenantInQuarantine: Schema.optional(Schema.Boolean),
    tenantName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationUpdateOutput>;

// The operation
/**
 * Updates tenant properties for tenants onboarded to Azure Active Directory Connect Health.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const configurationUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationUpdateInput,
  outputSchema: ConfigurationUpdateOutput,
}));
// Input Schema
export interface DimensionsListAddsDimensionsInput {
  serviceName: string;
  dimension: string;
}
export const DimensionsListAddsDimensionsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    dimension: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/dimensions/{dimension}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<DimensionsListAddsDimensionsInput>;

// Output Schema
export interface DimensionsListAddsDimensionsOutput {
  nextLink?: string;
  value?: {
    health?: "Healthy" | "Warning" | "Error" | "NotMonitored" | "Missing";
    simpleProperties?: unknown;
    activeAlerts?: number;
    additionalInformation?: string;
    lastUpdated?: string;
    displayName?: string;
    resolvedAlerts?: number;
    signature?: string;
    type?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const DimensionsListAddsDimensionsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          health: Schema.optional(
            Schema.Literals([
              "Healthy",
              "Warning",
              "Error",
              "NotMonitored",
              "Missing",
            ]),
          ),
          simpleProperties: Schema.optional(Schema.Unknown),
          activeAlerts: Schema.optional(Schema.Number),
          additionalInformation: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          resolvedAlerts: Schema.optional(Schema.Number),
          signature: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DimensionsListAddsDimensionsOutput>;

// The operation
/**
 * Gets the dimensions for a given dimension type in a server.
 *
 * @param serviceName - The name of the service.
 * @param dimension - The dimension type.
 * @param api-version - The version of the API to be used with the client request.
 */
export const dimensionsListAddsDimensions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DimensionsListAddsDimensionsInput,
    outputSchema: DimensionsListAddsDimensionsOutput,
  }));
// Input Schema
export interface ListIPAddressAggregatesByServiceInput {
  serviceName: string;
  skiptoken?: string;
}
export const ListIPAddressAggregatesByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/ipAddressAggregates",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ListIPAddressAggregatesByServiceInput>;

// Output Schema
export interface ListIPAddressAggregatesByServiceOutput {
  value?: {
    id?: string;
    tenantId?: string;
    serviceId?: string;
    ipAddress?: string;
    timestamp?: string;
    firstAuditTimestamp?: string;
    lastAuditTimestamp?: string;
    extranetLockoutErrorCount?: number;
    badPasswordErrorCount?: number;
    uniqueUsernamesAttemptedCount?: number;
    attemptCountThresholdIsExceeded?: boolean;
    timeSpan?: string;
    isWhitelistedIpAddress?: boolean;
    networkLocation?: string;
    attemptCountThresholdOnTrigger?: number;
    attemptThresholdTypeOnTrigger?: string;
    geographicLocation?: string;
  }[];
  nextLink?: string;
  totalCount?: number;
  continuationToken?: string;
}
export const ListIPAddressAggregatesByServiceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          ipAddress: Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          firstAuditTimestamp: Schema.optional(Schema.String),
          lastAuditTimestamp: Schema.optional(Schema.String),
          extranetLockoutErrorCount: Schema.optional(Schema.Number),
          badPasswordErrorCount: Schema.optional(Schema.Number),
          uniqueUsernamesAttemptedCount: Schema.optional(Schema.Number),
          attemptCountThresholdIsExceeded: Schema.optional(Schema.Boolean),
          timeSpan: Schema.optional(Schema.String),
          isWhitelistedIpAddress: Schema.optional(Schema.Boolean),
          networkLocation: Schema.optional(Schema.String),
          attemptCountThresholdOnTrigger: Schema.optional(Schema.Number),
          attemptThresholdTypeOnTrigger: Schema.optional(Schema.String),
          geographicLocation: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListIPAddressAggregatesByServiceOutput>;

// The operation
/**
 * Gets the IP address aggregates for a given service.
 *
 * @param serviceName - The name of the service.
 * @param skiptoken - A continuationtoken value returned in paginated result to load different pages.
 * @param api-version - The version of the API to be used with the client request.
 */
export const listIPAddressAggregatesByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListIPAddressAggregatesByServiceInput,
    outputSchema: ListIPAddressAggregatesByServiceOutput,
  }));
// Input Schema
export interface ListIPAddressAggregateSettingsInput {
  serviceName: string;
}
export const ListIPAddressAggregateSettingsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/ipAddressAggregateSettings",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ListIPAddressAggregateSettingsInput>;

// Output Schema
export interface ListIPAddressAggregateSettingsOutput {
  id?: string;
  badPasswordAndExtranetLockoutCombinedDailyThreshold?: number;
  badPasswordAndExtranetLockoutCombinedHourlyThreshold?: number;
  extranetLockoutDailyThreshold?: number;
  extranetLockoutHourlyThreshold?: number;
  emailNotificationEnabled?: boolean;
}
export const ListIPAddressAggregateSettingsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    badPasswordAndExtranetLockoutCombinedDailyThreshold: Schema.optional(
      Schema.Number,
    ),
    badPasswordAndExtranetLockoutCombinedHourlyThreshold: Schema.optional(
      Schema.Number,
    ),
    extranetLockoutDailyThreshold: Schema.optional(Schema.Number),
    extranetLockoutHourlyThreshold: Schema.optional(Schema.Number),
    emailNotificationEnabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ListIPAddressAggregateSettingsOutput>;

// The operation
/**
 * Gets the IP address aggregate settings.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const listIPAddressAggregateSettings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListIPAddressAggregateSettingsInput,
    outputSchema: ListIPAddressAggregateSettingsOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/operations",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value?: { name?: string; display?: unknown }[];
  totalCount?: number;
  continuationToken?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  totalCount: Schema.optional(Schema.Number),
  continuationToken: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists the available Azure Data Factory API operations.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const operationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ReportsGetDevOpsInput {}
export const ReportsGetDevOpsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/reports/DevOps/IsDevOps",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ReportsGetDevOpsInput>;

// Output Schema
export interface ReportsGetDevOpsOutput {
  value?: boolean;
}
export const ReportsGetDevOpsOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Boolean),
}) as unknown as Schema.Codec<ReportsGetDevOpsOutput>;

// The operation
/**
 * Checks if the user is enabled for Dev Ops access.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const reportsGetDevOps = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportsGetDevOpsInput,
  outputSchema: ReportsGetDevOpsOutput,
}));
// Input Schema
export interface ServiceGetMetricsInput {
  serviceName: string;
  metricName: string;
  groupName: string;
  groupKey?: string;
  fromDate?: string;
  toDate?: string;
}
export const ServiceGetMetricsInput = /*@__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
  metricName: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  groupKey: Schema.optional(Schema.String),
  fromDate: Schema.optional(Schema.String),
  toDate: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName}",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServiceGetMetricsInput>;

// Output Schema
export interface ServiceGetMetricsOutput {
  sets?: { setName?: string; values?: number[] }[];
  timeStamps?: string[];
}
export const ServiceGetMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    sets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          setName: Schema.optional(Schema.String),
          values: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
    ),
    timeStamps: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ServiceGetMetricsOutput>;

// The operation
/**
 * Gets the server related metrics for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param groupKey - The group key
 * @param fromDate - The start date.
 * @param toDate - The end date.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceGetMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceGetMetricsInput,
  outputSchema: ServiceGetMetricsOutput,
}));
// Input Schema
export interface ServiceMembersAddInput {
  serviceName: string;
  serviceMemberId?: string;
  serviceId?: string;
  tenantId?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  dimensions?: unknown;
  disabled?: boolean;
  disabledReason?: number;
  installedQfes?: unknown;
  lastDisabled?: string;
  lastReboot?: string;
  lastServerReportedMonitoringLevelChange?: string;
  lastUpdated?: string;
  machineId?: string;
  machineName?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  osName?: string;
  osVersion?: string;
  properties?: unknown;
  recommendedQfes?: unknown;
  resolvedAlerts?: number;
  role?: string;
  serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
  status?: string;
}
export const ServiceMembersAddInput = /*@__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
  serviceMemberId: Schema.optional(Schema.String),
  serviceId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  dimensions: Schema.optional(Schema.Unknown),
  disabled: Schema.optional(Schema.Boolean),
  disabledReason: Schema.optional(Schema.Number),
  installedQfes: Schema.optional(Schema.Unknown),
  lastDisabled: Schema.optional(Schema.String),
  lastReboot: Schema.optional(Schema.String),
  lastServerReportedMonitoringLevelChange: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  machineId: Schema.optional(Schema.String),
  machineName: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  osName: Schema.optional(Schema.String),
  osVersion: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.Unknown),
  recommendedQfes: Schema.optional(Schema.Unknown),
  resolvedAlerts: Schema.optional(Schema.Number),
  role: Schema.optional(Schema.String),
  serverReportedMonitoringLevel: Schema.optional(
    Schema.Literals(["Partial", "Full", "Off"]),
  ),
  status: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServiceMembersAddInput>;

// Output Schema
export interface ServiceMembersAddOutput {
  serviceMemberId?: string;
  serviceId?: string;
  tenantId?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  dimensions?: unknown;
  disabled?: boolean;
  disabledReason?: number;
  installedQfes?: unknown;
  lastDisabled?: string;
  lastReboot?: string;
  lastServerReportedMonitoringLevelChange?: string;
  lastUpdated?: string;
  machineId?: string;
  machineName?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  osName?: string;
  osVersion?: string;
  properties?: unknown;
  recommendedQfes?: unknown;
  resolvedAlerts?: number;
  role?: string;
  serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
  status?: string;
}
export const ServiceMembersAddOutput =
  /*@__PURE__*/ Schema.Struct({
    serviceMemberId: Schema.optional(Schema.String),
    serviceId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    activeAlerts: Schema.optional(Schema.Number),
    additionalInformation: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Unknown),
    disabled: Schema.optional(Schema.Boolean),
    disabledReason: Schema.optional(Schema.Number),
    installedQfes: Schema.optional(Schema.Unknown),
    lastDisabled: Schema.optional(Schema.String),
    lastReboot: Schema.optional(Schema.String),
    lastServerReportedMonitoringLevelChange: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    machineId: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
    monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    recommendedQfes: Schema.optional(Schema.Unknown),
    resolvedAlerts: Schema.optional(Schema.Number),
    role: Schema.optional(Schema.String),
    serverReportedMonitoringLevel: Schema.optional(
      Schema.Literals(["Partial", "Full", "Off"]),
    ),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceMembersAddOutput>;

// The operation
/**
 * Onboards  a server, for a given service, to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service under which the server is to be onboarded.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersAdd = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceMembersAddInput,
  outputSchema: ServiceMembersAddOutput,
}));
// Input Schema
export interface ServiceMembersDeleteInput {
  serviceName: string;
  serviceMemberId: string;
  confirm?: boolean;
}
export const ServiceMembersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    confirm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersDeleteInput>;

// Output Schema
export type ServiceMembersDeleteOutput = void;
export const ServiceMembersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceMembersDeleteOutput>;

// The operation
/**
 * Deletes a server that has been onboarded to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param confirm - Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceMembersDeleteInput,
  outputSchema: ServiceMembersDeleteOutput,
}));
// Input Schema
export interface ServiceMembersDeleteDataInput {
  serviceName: string;
  serviceMemberId: string;
}
export const ServiceMembersDeleteDataInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/data",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersDeleteDataInput>;

// Output Schema
export type ServiceMembersDeleteDataOutput = void;
export const ServiceMembersDeleteDataOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceMembersDeleteDataOutput>;

// The operation
/**
 * Deletes the data uploaded by the server to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersDeleteData = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceMembersDeleteDataInput,
  outputSchema: ServiceMembersDeleteDataOutput,
}));
// Input Schema
export interface ServiceMembersGetInput {
  serviceName: string;
  serviceMemberId: string;
}
export const ServiceMembersGetInput = /*@__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
  serviceMemberId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServiceMembersGetInput>;

// Output Schema
export interface ServiceMembersGetOutput {
  serviceMemberId?: string;
  serviceId?: string;
  tenantId?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  dimensions?: unknown;
  disabled?: boolean;
  disabledReason?: number;
  installedQfes?: unknown;
  lastDisabled?: string;
  lastReboot?: string;
  lastServerReportedMonitoringLevelChange?: string;
  lastUpdated?: string;
  machineId?: string;
  machineName?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  osName?: string;
  osVersion?: string;
  properties?: unknown;
  recommendedQfes?: unknown;
  resolvedAlerts?: number;
  role?: string;
  serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
  status?: string;
}
export const ServiceMembersGetOutput =
  /*@__PURE__*/ Schema.Struct({
    serviceMemberId: Schema.optional(Schema.String),
    serviceId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    activeAlerts: Schema.optional(Schema.Number),
    additionalInformation: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Unknown),
    disabled: Schema.optional(Schema.Boolean),
    disabledReason: Schema.optional(Schema.Number),
    installedQfes: Schema.optional(Schema.Unknown),
    lastDisabled: Schema.optional(Schema.String),
    lastReboot: Schema.optional(Schema.String),
    lastServerReportedMonitoringLevelChange: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    machineId: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
    monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    recommendedQfes: Schema.optional(Schema.Unknown),
    resolvedAlerts: Schema.optional(Schema.Number),
    role: Schema.optional(Schema.String),
    serverReportedMonitoringLevel: Schema.optional(
      Schema.Literals(["Partial", "Full", "Off"]),
    ),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceMembersGetOutput>;

// The operation
/**
 * Gets the details of a server, for a given service, that are onboarded to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceMembersGetInput,
  outputSchema: ServiceMembersGetOutput,
}));
// Input Schema
export interface ServiceMembersGetConnectorMetadataInput {
  serviceName: string;
  serviceMemberId: string;
  metricName: string;
}
export const ServiceMembersGetConnectorMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/metrics/{metricName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersGetConnectorMetadataInput>;

// Output Schema
export interface ServiceMembersGetConnectorMetadataOutput {
  connectors?: { connectorId?: string; connectorDisplayName?: string }[];
  runProfileNames?: string[];
}
export const ServiceMembersGetConnectorMetadataOutput =
  /*@__PURE__*/ Schema.Struct({
    connectors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          connectorId: Schema.optional(Schema.String),
          connectorDisplayName: Schema.optional(Schema.String),
        }),
      ),
    ),
    runProfileNames: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ServiceMembersGetConnectorMetadataOutput>;

// The operation
/**
 * Gets the list of connectors and run profile names.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The service member id.
 * @param metricName - The name of the metric.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersGetConnectorMetadata =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceMembersGetConnectorMetadataInput,
    outputSchema: ServiceMembersGetConnectorMetadataOutput,
  }));
// Input Schema
export interface ServiceMembersGetMetricsInput {
  serviceName: string;
  metricName: string;
  groupName: string;
  serviceMemberId: string;
  groupKey?: string;
  fromDate?: string;
  toDate?: string;
}
export const ServiceMembersGetMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    groupKey: Schema.optional(Schema.String),
    fromDate: Schema.optional(Schema.String),
    toDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/metrics/{metricName}/groups/{groupName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersGetMetricsInput>;

// Output Schema
export interface ServiceMembersGetMetricsOutput {
  sets?: { setName?: string; values?: number[] }[];
  timeStamps?: string[];
}
export const ServiceMembersGetMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    sets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          setName: Schema.optional(Schema.String),
          values: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
    ),
    timeStamps: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ServiceMembersGetMetricsOutput>;

// The operation
/**
 * Gets the server related metrics for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param serviceMemberId - The server id.
 * @param groupKey - The group key
 * @param fromDate - The start date.
 * @param toDate - The end date.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersGetMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceMembersGetMetricsInput,
  outputSchema: ServiceMembersGetMetricsOutput,
}));
// Input Schema
export interface ServiceMembersGetServiceConfigurationInput {
  serviceName: string;
  serviceMemberId: string;
}
export const ServiceMembersGetServiceConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/serviceconfiguration",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersGetServiceConfigurationInput>;

// Output Schema
export interface ServiceMembersGetServiceConfigurationOutput {
  version?: string;
  serviceType?: number;
  serviceAccount?: string;
  sqlServer?: string;
  sqlVersion?: string;
  sqlEdition?: string;
  sqlInstance?: string;
  sqlDatabaseName?: string;
  sqlDatabaseSize?: number;
}
export const ServiceMembersGetServiceConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    serviceType: Schema.optional(Schema.Number),
    serviceAccount: Schema.optional(Schema.String),
    sqlServer: Schema.optional(Schema.String),
    sqlVersion: Schema.optional(Schema.String),
    sqlEdition: Schema.optional(Schema.String),
    sqlInstance: Schema.optional(Schema.String),
    sqlDatabaseName: Schema.optional(Schema.String),
    sqlDatabaseSize: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<ServiceMembersGetServiceConfigurationOutput>;

// The operation
/**
 * Gets the service configuration.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersGetServiceConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceMembersGetServiceConfigurationInput,
    outputSchema: ServiceMembersGetServiceConfigurationOutput,
  }));
// Input Schema
export interface ServiceMembersListInput {
  serviceName: string;
  $filter?: string;
  dimensionType?: string;
  dimensionSignature?: string;
}
export const ServiceMembersListInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    dimensionType: Schema.optional(Schema.String),
    dimensionSignature: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersListInput>;

// Output Schema
export interface ServiceMembersListOutput {
  nextLink?: string;
  value?: {
    serviceMemberId?: string;
    serviceId?: string;
    tenantId?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    dimensions?: unknown;
    disabled?: boolean;
    disabledReason?: number;
    installedQfes?: unknown;
    lastDisabled?: string;
    lastReboot?: string;
    lastServerReportedMonitoringLevelChange?: string;
    lastUpdated?: string;
    machineId?: string;
    machineName?: string;
    monitoringConfigurationsComputed?: unknown;
    monitoringConfigurationsCustomized?: unknown;
    osName?: string;
    osVersion?: string;
    properties?: unknown;
    recommendedQfes?: unknown;
    resolvedAlerts?: number;
    role?: string;
    serverReportedMonitoringLevel?: "Partial" | "Full" | "Off";
    status?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServiceMembersListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceMemberId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          activeAlerts: Schema.optional(Schema.Number),
          additionalInformation: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
          dimensions: Schema.optional(Schema.Unknown),
          disabled: Schema.optional(Schema.Boolean),
          disabledReason: Schema.optional(Schema.Number),
          installedQfes: Schema.optional(Schema.Unknown),
          lastDisabled: Schema.optional(Schema.String),
          lastReboot: Schema.optional(Schema.String),
          lastServerReportedMonitoringLevelChange: Schema.optional(
            Schema.String,
          ),
          lastUpdated: Schema.optional(Schema.String),
          machineId: Schema.optional(Schema.String),
          machineName: Schema.optional(Schema.String),
          monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
          monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
          osName: Schema.optional(Schema.String),
          osVersion: Schema.optional(Schema.String),
          properties: Schema.optional(Schema.Unknown),
          recommendedQfes: Schema.optional(Schema.Unknown),
          resolvedAlerts: Schema.optional(Schema.Number),
          role: Schema.optional(Schema.String),
          serverReportedMonitoringLevel: Schema.optional(
            Schema.Literals(["Partial", "Full", "Off"]),
          ),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceMembersListOutput>;

// The operation
/**
 * Gets the details of the servers, for a given service, that are onboarded to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The server property filter to apply.
 * @param dimensionType - The server specific dimension.
 * @param dimensionSignature - The value of the dimension.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceMembersListInput,
  outputSchema: ServiceMembersListOutput,
}));
// Input Schema
export interface ServiceMembersListAlertsInput {
  serviceMemberId: string;
  serviceName: string;
  $filter?: string;
  state?: string;
  from?: string;
  to?: string;
}
export const ServiceMembersListAlertsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/alerts",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersListAlertsInput>;

// Output Schema
export interface ServiceMembersListAlertsOutput {
  value?: {
    alertId?: string;
    level?: "Warning" | "Error" | "PreWarning";
    state?:
      | "Active"
      | "ResolvedByPositiveResult"
      | "ResolvedManually"
      | "ResolvedByTimer"
      | "ResolvedByStateChange";
    shortName?: string;
    displayName?: string;
    description?: string;
    remediation?: string;
    relatedLinks?: { title?: string; url?: string }[];
    scope?: string;
    additionalInformation?: {
      titleName?: string;
      titleValue?: string;
      properties?: unknown;
      hasProperties?: boolean;
    }[];
    createdDate?: string;
    resolvedDate?: string;
    lastUpdated?: string;
    monitorRoleType?: string;
    activeAlertProperties?: { key?: string; value?: string }[];
    resolvedAlertProperties?: { key?: string; value?: string }[];
    tenantId?: string;
    serviceId?: string;
    serviceMemberId?: string;
  }[];
  nextLink?: string;
  totalCount?: number;
  continuationToken?: string;
}
export const ServiceMembersListAlertsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          alertId: Schema.optional(Schema.String),
          level: Schema.optional(
            Schema.Literals(["Warning", "Error", "PreWarning"]),
          ),
          state: Schema.optional(
            Schema.Literals([
              "Active",
              "ResolvedByPositiveResult",
              "ResolvedManually",
              "ResolvedByTimer",
              "ResolvedByStateChange",
            ]),
          ),
          shortName: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          remediation: Schema.optional(Schema.String),
          relatedLinks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                title: Schema.optional(Schema.String),
                url: Schema.optional(Schema.String),
              }),
            ),
          ),
          scope: Schema.optional(Schema.String),
          additionalInformation: Schema.optional(
            Schema.Array(
              Schema.Struct({
                titleName: Schema.optional(Schema.String),
                titleValue: Schema.optional(Schema.String),
                properties: Schema.optional(Schema.Unknown),
                hasProperties: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          createdDate: Schema.optional(Schema.String),
          resolvedDate: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          monitorRoleType: Schema.optional(Schema.String),
          activeAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          resolvedAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          tenantId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          serviceMemberId: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceMembersListAlertsOutput>;

// The operation
/**
 * Gets the details of an alert for a given service and server combination.
 *
 * @param serviceMemberId - The server Id for which the alert details needs to be queried.
 * @param serviceName - The name of the service.
 * @param $filter - The alert property filter to apply.
 * @param state - The alert state to query for.
 * @param from - The start date to query for.
 * @param to - The end date till when to query for.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersListAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceMembersListAlertsInput,
  outputSchema: ServiceMembersListAlertsOutput,
}));
// Input Schema
export interface ServiceMembersListConnectorsInput {
  serviceName: string;
  serviceMemberId: string;
}
export const ServiceMembersListConnectorsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/service/{serviceName}/servicemembers/{serviceMemberId}/connectors",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersListConnectorsInput>;

// Output Schema
export interface ServiceMembersListConnectorsOutput {
  value?: {
    connectorId?: string;
    id?: string;
    name?: string;
    version?: number;
    type?: string;
    description?: string;
    schemaXml?: string;
    passwordManagementSettings?: unknown;
    passwordHashSyncConfiguration?: unknown;
    timeCreated?: string;
    timeLastModified?: string;
    partitions?: {
      id?: string;
      dn?: string;
      enabled?: boolean;
      timeCreated?: string;
      timeLastModified?: string;
      partitionScope?: {
        isDefault?: boolean;
        objectClasses?: string[];
        containersIncluded?: string[];
        containersExcluded?: string[];
      };
      name?: string;
      isDomain?: boolean;
      type?: string;
    }[];
    runProfiles?: {
      id?: string;
      name?: string;
      runSteps?: {
        batchSize?: number;
        objectProcessLimit?: number;
        objectDeleteLimit?: number;
        pageSize?: number;
        partitionId?: string;
        operationType?: number;
        timeout?: number;
      }[];
    }[];
    classesIncluded?: string[];
    attributesIncluded?: string[];
  }[];
}
export const ServiceMembersListConnectorsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          connectorId: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          version: Schema.optional(Schema.Number),
          type: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          schemaXml: Schema.optional(Schema.String),
          passwordManagementSettings: Schema.optional(Schema.Unknown),
          passwordHashSyncConfiguration: Schema.optional(Schema.Unknown),
          timeCreated: Schema.optional(Schema.String),
          timeLastModified: Schema.optional(Schema.String),
          partitions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                dn: Schema.optional(Schema.String),
                enabled: Schema.optional(Schema.Boolean),
                timeCreated: Schema.optional(Schema.String),
                timeLastModified: Schema.optional(Schema.String),
                partitionScope: Schema.optional(
                  Schema.Struct({
                    isDefault: Schema.optional(Schema.Boolean),
                    objectClasses: Schema.optional(Schema.Array(Schema.String)),
                    containersIncluded: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    containersExcluded: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
                name: Schema.optional(Schema.String),
                isDomain: Schema.optional(Schema.Boolean),
                type: Schema.optional(Schema.String),
              }),
            ),
          ),
          runProfiles: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                runSteps: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      batchSize: Schema.optional(Schema.Number),
                      objectProcessLimit: Schema.optional(Schema.Number),
                      objectDeleteLimit: Schema.optional(Schema.Number),
                      pageSize: Schema.optional(Schema.Number),
                      partitionId: Schema.optional(Schema.String),
                      operationType: Schema.optional(Schema.Number),
                      timeout: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          ),
          classesIncluded: Schema.optional(Schema.Array(Schema.String)),
          attributesIncluded: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServiceMembersListConnectorsOutput>;

// The operation
/**
 * Gets the connector details for a service.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersListConnectors =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceMembersListConnectorsInput,
    outputSchema: ServiceMembersListConnectorsOutput,
  }));
// Input Schema
export interface ServiceMembersListCredentialsInput {
  serviceName: string;
  serviceMemberId: string;
  $filter?: string;
}
export const ServiceMembersListCredentialsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/credentials",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersListCredentialsInput>;

// Output Schema
export interface ServiceMembersListCredentialsOutput {
  value?: { identifier?: string; type?: string; credentialData?: string[] }[];
}
export const ServiceMembersListCredentialsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          identifier: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          credentialData: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServiceMembersListCredentialsOutput>;

// The operation
/**
 * Gets the credentials of the server which is needed by the agent to connect to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The property filter to apply.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersListCredentials =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceMembersListCredentialsInput,
    outputSchema: ServiceMembersListCredentialsOutput,
  }));
// Input Schema
export interface ServiceMembersListDataFreshnessInput {
  serviceName: string;
  serviceMemberId: string;
}
export const ServiceMembersListDataFreshnessInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/datafreshness",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersListDataFreshnessInput>;

// Output Schema
export interface ServiceMembersListDataFreshnessOutput {
  value?: { key?: string; value?: string }[];
}
export const ServiceMembersListDataFreshnessOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServiceMembersListDataFreshnessOutput>;

// The operation
/**
 * Gets the last time when the server uploaded data to Azure Active Directory Connect Health Service.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersListDataFreshness =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceMembersListDataFreshnessInput,
    outputSchema: ServiceMembersListDataFreshnessOutput,
  }));
// Input Schema
export interface ServiceMembersListExportStatusInput {
  serviceName: string;
  serviceMemberId: string;
}
export const ServiceMembersListExportStatusInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/exportstatus",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersListExportStatusInput>;

// Output Schema
export interface ServiceMembersListExportStatusOutput {
  nextLink?: string;
  value?: {
    serviceId?: string;
    serviceMemberId?: string;
    endTime?: string;
    runStepResultId?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServiceMembersListExportStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceId: Schema.optional(Schema.String),
          serviceMemberId: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          runStepResultId: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceMembersListExportStatusOutput>;

// The operation
/**
 * Gets the export status.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server Id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersListExportStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceMembersListExportStatusInput,
    outputSchema: ServiceMembersListExportStatusOutput,
  }));
// Input Schema
export interface ServiceMembersListGlobalConfigurationInput {
  serviceName: string;
  serviceMemberId: string;
}
export const ServiceMembersListGlobalConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceMemberId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/globalconfiguration",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServiceMembersListGlobalConfigurationInput>;

// Output Schema
export interface ServiceMembersListGlobalConfigurationOutput {
  value?: {
    version?: number;
    schemaXml?: string;
    passwordSyncEnabled?: boolean;
    numSavedPwdEvent?: number;
    featureSet?: { key?: string; value?: string }[];
  }[];
}
export const ServiceMembersListGlobalConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          version: Schema.optional(Schema.Number),
          schemaXml: Schema.optional(Schema.String),
          passwordSyncEnabled: Schema.optional(Schema.Boolean),
          numSavedPwdEvent: Schema.optional(Schema.Number),
          featureSet: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServiceMembersListGlobalConfigurationOutput>;

// The operation
/**
 * Gets the global configuration.
 *
 * @param serviceName - The name of the service.
 * @param serviceMemberId - The server id.
 * @param api-version - The version of the API to be used with the client request.
 */
export const serviceMembersListGlobalConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceMembersListGlobalConfigurationInput,
    outputSchema: ServiceMembersListGlobalConfigurationOutput,
  }));
// Input Schema
export interface ServicesAddInput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const ServicesAddInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.ADHybridHealthService/services",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServicesAddInput>;

// Output Schema
export interface ServicesAddOutput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const ServicesAddOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesAddOutput>;

// The operation
/**
 * Onboards a service for a given tenant in Azure Active Directory Connect Health.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesAdd = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesAddInput,
  outputSchema: ServicesAddOutput,
}));
// Input Schema
export interface ServicesAddAlertFeedbackInput {
  serviceName: string;
  level?: string;
  state?: string;
  shortName?: string;
  feedback?: string;
  comment?: string;
  consentedToShare?: boolean;
  serviceMemberId?: string;
  createdDate?: string;
}
export const ServicesAddAlertFeedbackInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    level: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    shortName: Schema.optional(Schema.String),
    feedback: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    consentedToShare: Schema.optional(Schema.Boolean),
    serviceMemberId: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/feedbacktype/alerts/feedback",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesAddAlertFeedbackInput>;

// Output Schema
export interface ServicesAddAlertFeedbackOutput {
  level?: string;
  state?: string;
  shortName?: string;
  feedback?: string;
  comment?: string;
  consentedToShare?: boolean;
  serviceMemberId?: string;
  createdDate?: string;
}
export const ServicesAddAlertFeedbackOutput =
  /*@__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    shortName: Schema.optional(Schema.String),
    feedback: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    consentedToShare: Schema.optional(Schema.Boolean),
    serviceMemberId: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesAddAlertFeedbackOutput>;

// The operation
/**
 * Adds an alert feedback submitted by customer.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesAddAlertFeedback = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesAddAlertFeedbackInput,
  outputSchema: ServicesAddAlertFeedbackOutput,
}));
// Input Schema
export interface ServicesDeleteInput {
  serviceName: string;
  confirm?: boolean;
}
export const ServicesDeleteInput = /*@__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
  confirm: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Deletes a service which is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service which needs to be deleted.
 * @param confirm - Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export interface ServicesGetInput {
  serviceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const ServicesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Gets the details of a service for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesGetFeatureAvailibilityInput {
  serviceName: string;
  featureName: string;
}
export const ServicesGetFeatureAvailibilityInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/checkServiceFeatureAvailibility/{featureName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesGetFeatureAvailibilityInput>;

// Output Schema
export interface ServicesGetFeatureAvailibilityOutput {
  value?: boolean;
}
export const ServicesGetFeatureAvailibilityOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ServicesGetFeatureAvailibilityOutput>;

// The operation
/**
 * Checks if the service has all the pre-requisites met to use a feature.
 *
 * @param serviceName - The name of the service.
 * @param featureName - The name of the feature.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesGetFeatureAvailibility =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesGetFeatureAvailibilityInput,
    outputSchema: ServicesGetFeatureAvailibilityOutput,
  }));
// Input Schema
export interface ServicesGetMetricMetadataInput {
  serviceName: string;
  metricName: string;
}
export const ServicesGetMetricMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata/{metricName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesGetMetricMetadataInput>;

// Output Schema
export interface ServicesGetMetricMetadataOutput {
  metricsProcessorClassName?: string;
  metricName?: string;
  groupings?: {
    key?: string;
    displayName?: string;
    invisibleForUi?: boolean;
  }[];
  displayName?: string;
  valueKind?: string;
  minValue?: number;
  maxValue?: number;
  kind?: string;
  isDefault?: boolean;
  isPerfCounter?: boolean;
  isDevOps?: boolean;
}
export const ServicesGetMetricMetadataOutput =
  /*@__PURE__*/ Schema.Struct({
    metricsProcessorClassName: Schema.optional(Schema.String),
    metricName: Schema.optional(Schema.String),
    groupings: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          invisibleForUi: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    displayName: Schema.optional(Schema.String),
    valueKind: Schema.optional(Schema.String),
    minValue: Schema.optional(Schema.Number),
    maxValue: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
    isPerfCounter: Schema.optional(Schema.Boolean),
    isDevOps: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ServicesGetMetricMetadataOutput>;

// The operation
/**
 * Gets the service related metrics information.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesGetMetricMetadata = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetMetricMetadataInput,
  outputSchema: ServicesGetMetricMetadataOutput,
}));
// Input Schema
export interface ServicesGetMetricMetadataForGroupInput {
  serviceName: string;
  metricName: string;
  groupName: string;
  groupKey?: string;
  fromDate?: string;
  toDate?: string;
}
export const ServicesGetMetricMetadataForGroupInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    groupKey: Schema.optional(Schema.String),
    fromDate: Schema.optional(Schema.String),
    toDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata/{metricName}/groups/{groupName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesGetMetricMetadataForGroupInput>;

// Output Schema
export interface ServicesGetMetricMetadataForGroupOutput {
  sets?: { setName?: string; values?: number[] }[];
  timeStamps?: string[];
}
export const ServicesGetMetricMetadataForGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    sets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          setName: Schema.optional(Schema.String),
          values: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
    ),
    timeStamps: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ServicesGetMetricMetadataForGroupOutput>;

// The operation
/**
 * Gets the service related metrics for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param groupKey - The group key
 * @param fromDate - The start date.
 * @param toDate - The end date.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesGetMetricMetadataForGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesGetMetricMetadataForGroupInput,
    outputSchema: ServicesGetMetricMetadataForGroupOutput,
  }));
// Input Schema
export interface ServicesGetTenantWhitelistingInput {
  serviceName: string;
  featureName: string;
}
export const ServicesGetTenantWhitelistingInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/TenantWhitelisting/{featureName}",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesGetTenantWhitelistingInput>;

// Output Schema
export interface ServicesGetTenantWhitelistingOutput {
  value?: boolean;
}
export const ServicesGetTenantWhitelistingOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ServicesGetTenantWhitelistingOutput>;

// The operation
/**
 * Checks if the tenant, to which a service is registered, is listed as allowed to use a feature.
 *
 * @param serviceName - The name of the service.
 * @param featureName - The name of the feature.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesGetTenantWhitelisting =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesGetTenantWhitelistingInput,
    outputSchema: ServicesGetTenantWhitelistingOutput,
  }));
// Input Schema
export interface ServicesListInput {
  $filter?: string;
  serviceType?: string;
  skipCount?: number;
  takeCount?: number;
}
export const ServicesListInput = /*@__PURE__*/ Schema.Struct({
  $filter: Schema.optional(Schema.String),
  serviceType: Schema.optional(Schema.String),
  skipCount: Schema.optional(Schema.Number),
  takeCount: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ADHybridHealthService/services",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServicesListInput>;

// Output Schema
export interface ServicesListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    customNotificationEmails?: string[];
    disabled?: boolean;
    displayName?: string;
    health?: string;
    lastDisabled?: string;
    lastUpdated?: string;
    monitoringConfigurationsComputed?: unknown;
    monitoringConfigurationsCustomized?: unknown;
    notificationEmailEnabled?: boolean;
    notificationEmailEnabledForGlobalAdmins?: boolean;
    notificationEmailsEnabledForGlobalAdmins?: boolean;
    notificationEmails?: string[];
    originalDisabledState?: boolean;
    resolvedAlerts?: number;
    serviceId?: string;
    serviceName?: string;
    signature?: string;
    simpleProperties?: unknown;
    tenantId?: string;
    type?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServicesListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        activeAlerts: Schema.optional(Schema.Number),
        additionalInformation: Schema.optional(Schema.String),
        createdDate: Schema.optional(Schema.String),
        customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
        disabled: Schema.optional(Schema.Boolean),
        displayName: Schema.optional(Schema.String),
        health: Schema.optional(Schema.String),
        lastDisabled: Schema.optional(Schema.String),
        lastUpdated: Schema.optional(Schema.String),
        monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
        monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
        notificationEmailEnabled: Schema.optional(Schema.Boolean),
        notificationEmailEnabledForGlobalAdmins: Schema.optional(
          Schema.Boolean,
        ),
        notificationEmailsEnabledForGlobalAdmins: Schema.optional(
          Schema.Boolean,
        ),
        notificationEmails: Schema.optional(Schema.Array(Schema.String)),
        originalDisabledState: Schema.optional(Schema.Boolean),
        resolvedAlerts: Schema.optional(Schema.Number),
        serviceId: Schema.optional(Schema.String),
        serviceName: Schema.optional(Schema.String),
        signature: Schema.optional(Schema.String),
        simpleProperties: Schema.optional(Schema.Unknown),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  totalCount: Schema.optional(Schema.Number),
  continuationToken: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesListOutput>;

// The operation
/**
 * Gets the details of services, for a tenant, that are onboarded to Azure Active Directory Connect Health.
 *
 * @param $filter - The service property filter to apply.
 * @param serviceType - The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
 * @param skipCount - The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
 * @param takeCount - The take count , which specifies the number of elements that can be returned from a sequence.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export interface ServicesListAlertFeedbackInput {
  serviceName: string;
  shortName: string;
}
export const ServicesListAlertFeedbackInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    shortName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/feedbacktype/alerts/{shortName}/alertfeedback",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListAlertFeedbackInput>;

// Output Schema
export interface ServicesListAlertFeedbackOutput {
  value?: {
    level?: string;
    state?: string;
    shortName?: string;
    feedback?: string;
    comment?: string;
    consentedToShare?: boolean;
    serviceMemberId?: string;
    createdDate?: string;
  }[];
}
export const ServicesListAlertFeedbackOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          level: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
          shortName: Schema.optional(Schema.String),
          feedback: Schema.optional(Schema.String),
          comment: Schema.optional(Schema.String),
          consentedToShare: Schema.optional(Schema.Boolean),
          serviceMemberId: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicesListAlertFeedbackOutput>;

// The operation
/**
 * Gets a list of all alert feedback for a given tenant and alert type.
 *
 * @param serviceName - The name of the service.
 * @param shortName - The name of the alert.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListAlertFeedback = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListAlertFeedbackInput,
  outputSchema: ServicesListAlertFeedbackOutput,
}));
// Input Schema
export interface ServicesListAlertsInput {
  serviceName: string;
  $filter?: string;
  state?: string;
  from?: string;
  to?: string;
}
export const ServicesListAlertsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/alerts",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListAlertsInput>;

// Output Schema
export interface ServicesListAlertsOutput {
  value?: {
    alertId?: string;
    level?: "Warning" | "Error" | "PreWarning";
    state?:
      | "Active"
      | "ResolvedByPositiveResult"
      | "ResolvedManually"
      | "ResolvedByTimer"
      | "ResolvedByStateChange";
    shortName?: string;
    displayName?: string;
    description?: string;
    remediation?: string;
    relatedLinks?: { title?: string; url?: string }[];
    scope?: string;
    additionalInformation?: {
      titleName?: string;
      titleValue?: string;
      properties?: unknown;
      hasProperties?: boolean;
    }[];
    createdDate?: string;
    resolvedDate?: string;
    lastUpdated?: string;
    monitorRoleType?: string;
    activeAlertProperties?: { key?: string; value?: string }[];
    resolvedAlertProperties?: { key?: string; value?: string }[];
    tenantId?: string;
    serviceId?: string;
    serviceMemberId?: string;
  }[];
  nextLink?: string;
  totalCount?: number;
  continuationToken?: string;
}
export const ServicesListAlertsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          alertId: Schema.optional(Schema.String),
          level: Schema.optional(
            Schema.Literals(["Warning", "Error", "PreWarning"]),
          ),
          state: Schema.optional(
            Schema.Literals([
              "Active",
              "ResolvedByPositiveResult",
              "ResolvedManually",
              "ResolvedByTimer",
              "ResolvedByStateChange",
            ]),
          ),
          shortName: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          remediation: Schema.optional(Schema.String),
          relatedLinks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                title: Schema.optional(Schema.String),
                url: Schema.optional(Schema.String),
              }),
            ),
          ),
          scope: Schema.optional(Schema.String),
          additionalInformation: Schema.optional(
            Schema.Array(
              Schema.Struct({
                titleName: Schema.optional(Schema.String),
                titleValue: Schema.optional(Schema.String),
                properties: Schema.optional(Schema.Unknown),
                hasProperties: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          createdDate: Schema.optional(Schema.String),
          resolvedDate: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          monitorRoleType: Schema.optional(Schema.String),
          activeAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          resolvedAlertProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          tenantId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          serviceMemberId: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListAlertsOutput>;

// The operation
/**
 * Gets the alerts for a given service.
 *
 * @param serviceName - The name of the service.
 * @param $filter - The alert property filter to apply.
 * @param state - The alert state to query for.
 * @param from - The start date to query for.
 * @param to - The end date till when to query for.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListAlertsInput,
  outputSchema: ServicesListAlertsOutput,
}));
// Input Schema
export interface ServicesListAllRiskyIpDownloadReportInput {
  serviceName: string;
}
export const ServicesListAllRiskyIpDownloadReportInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/riskyIp/blobUris",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListAllRiskyIpDownloadReportInput>;

// Output Schema
export interface ServicesListAllRiskyIpDownloadReportOutput {
  value?: {
    tenantId?: string;
    serviceId?: string;
    resultSasUri?: string;
    blobCreateDateTime?: string;
    jobCompletionTime?: string;
    status?: string;
  }[];
}
export const ServicesListAllRiskyIpDownloadReportOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          tenantId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          resultSasUri: Schema.optional(Schema.String),
          blobCreateDateTime: Schema.optional(Schema.String),
          jobCompletionTime: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicesListAllRiskyIpDownloadReportOutput>;

// The operation
/**
 * Gets all Risky IP report URIs for the last 7 days.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListAllRiskyIpDownloadReport =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesListAllRiskyIpDownloadReportInput,
    outputSchema: ServicesListAllRiskyIpDownloadReportOutput,
  }));
// Input Schema
export interface ServicesListCurrentRiskyIpDownloadReportInput {
  serviceName: string;
}
export const ServicesListCurrentRiskyIpDownloadReportInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/riskyIp/generateBlobUri",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListCurrentRiskyIpDownloadReportInput>;

// Output Schema
export interface ServicesListCurrentRiskyIpDownloadReportOutput {
  value?: {
    tenantId?: string;
    serviceId?: string;
    resultSasUri?: string;
    blobCreateDateTime?: string;
    jobCompletionTime?: string;
    status?: string;
  }[];
}
export const ServicesListCurrentRiskyIpDownloadReportOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          tenantId: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          resultSasUri: Schema.optional(Schema.String),
          blobCreateDateTime: Schema.optional(Schema.String),
          jobCompletionTime: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicesListCurrentRiskyIpDownloadReportOutput>;

// The operation
/**
 * Initiate the generation of a new Risky IP report. Returns the URI for the new one.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListCurrentRiskyIpDownloadReport =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesListCurrentRiskyIpDownloadReportInput,
    outputSchema: ServicesListCurrentRiskyIpDownloadReportOutput,
  }));
// Input Schema
export interface ServicesListExportErrorsInput {
  serviceName: string;
}
export const ServicesListExportErrorsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/exporterrors/counts",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListExportErrorsInput>;

// Output Schema
export interface ServicesListExportErrorsOutput {
  value?: { errorBucket?: string; count?: number; truncated?: boolean }[];
}
export const ServicesListExportErrorsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          errorBucket: Schema.optional(Schema.String),
          count: Schema.optional(Schema.Number),
          truncated: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicesListExportErrorsOutput>;

// The operation
/**
 * Gets the count of latest AAD export errors.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListExportErrors = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListExportErrorsInput,
  outputSchema: ServicesListExportErrorsOutput,
}));
// Input Schema
export interface ServicesListExportErrorsV2Input {
  serviceName: string;
  errorBucket: string;
}
export const ServicesListExportErrorsV2Input =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    errorBucket: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/exporterrors/listV2",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListExportErrorsV2Input>;

// Output Schema
export interface ServicesListExportErrorsV2Output {
  value?: {
    id?: string;
    incomingObjectDisplayName?: string;
    incomingObjectType?: string;
    userPrincipalName?: string;
    type?: string;
    attributeName?: string;
    attributeValue?: string;
    timeOccurred?: string;
    timeFirstOccurred?: string;
    csObjectId?: string;
    dn?: string;
    incomingObject?: {
      displayName?: string;
      distinguishedName?: string;
      lastDirSyncTime?: string;
      mail?: string;
      objectGuid?: string;
      objectType?: string;
      onpremisesUserPrincipalName?: string;
      proxyAddresses?: string;
      sourceAnchor?: string;
      sourceOfAuthority?: string;
      timeOccurred?: string;
      userPrincipalName?: string;
    };
    existingObject?: {
      displayName?: string;
      distinguishedName?: string;
      lastDirSyncTime?: string;
      mail?: string;
      objectGuid?: string;
      objectType?: string;
      onpremisesUserPrincipalName?: string;
      proxyAddresses?: string;
      sourceAnchor?: string;
      sourceOfAuthority?: string;
      timeOccurred?: string;
      userPrincipalName?: string;
    };
    modifiedOrRemovedAttributeValue?: string;
    runStepResultId?: string;
    samAccountName?: string;
    serverErrorDetail?: string;
    serviceId?: string;
    serviceMemberId?: string;
    mergedEntityId?: string;
    createdDate?: string;
    exportErrorStatus?: number;
  }[];
}
export const ServicesListExportErrorsV2Output =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          incomingObjectDisplayName: Schema.optional(Schema.String),
          incomingObjectType: Schema.optional(Schema.String),
          userPrincipalName: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          attributeName: Schema.optional(Schema.String),
          attributeValue: Schema.optional(Schema.String),
          timeOccurred: Schema.optional(Schema.String),
          timeFirstOccurred: Schema.optional(Schema.String),
          csObjectId: Schema.optional(Schema.String),
          dn: Schema.optional(Schema.String),
          incomingObject: Schema.optional(
            Schema.Struct({
              displayName: Schema.optional(Schema.String),
              distinguishedName: Schema.optional(Schema.String),
              lastDirSyncTime: Schema.optional(Schema.String),
              mail: Schema.optional(Schema.String),
              objectGuid: Schema.optional(Schema.String),
              objectType: Schema.optional(Schema.String),
              onpremisesUserPrincipalName: Schema.optional(Schema.String),
              proxyAddresses: Schema.optional(Schema.String),
              sourceAnchor: Schema.optional(Schema.String),
              sourceOfAuthority: Schema.optional(Schema.String),
              timeOccurred: Schema.optional(Schema.String),
              userPrincipalName: Schema.optional(Schema.String),
            }),
          ),
          existingObject: Schema.optional(
            Schema.Struct({
              displayName: Schema.optional(Schema.String),
              distinguishedName: Schema.optional(Schema.String),
              lastDirSyncTime: Schema.optional(Schema.String),
              mail: Schema.optional(Schema.String),
              objectGuid: Schema.optional(Schema.String),
              objectType: Schema.optional(Schema.String),
              onpremisesUserPrincipalName: Schema.optional(Schema.String),
              proxyAddresses: Schema.optional(Schema.String),
              sourceAnchor: Schema.optional(Schema.String),
              sourceOfAuthority: Schema.optional(Schema.String),
              timeOccurred: Schema.optional(Schema.String),
              userPrincipalName: Schema.optional(Schema.String),
            }),
          ),
          modifiedOrRemovedAttributeValue: Schema.optional(Schema.String),
          runStepResultId: Schema.optional(Schema.String),
          samAccountName: Schema.optional(Schema.String),
          serverErrorDetail: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          serviceMemberId: Schema.optional(Schema.String),
          mergedEntityId: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
          exportErrorStatus: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicesListExportErrorsV2Output>;

// The operation
/**
 * Gets the categorized export errors.
 *
 * @param serviceName - The name of the service.
 * @param errorBucket - The error category to query for.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListExportErrorsV2 = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListExportErrorsV2Input,
  outputSchema: ServicesListExportErrorsV2Output,
}));
// Input Schema
export interface ServicesListExportStatusInput {
  serviceName: string;
}
export const ServicesListExportStatusInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/exportstatus",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListExportStatusInput>;

// Output Schema
export interface ServicesListExportStatusOutput {
  nextLink?: string;
  value?: {
    serviceId?: string;
    serviceMemberId?: string;
    endTime?: string;
    runStepResultId?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServicesListExportStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceId: Schema.optional(Schema.String),
          serviceMemberId: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          runStepResultId: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListExportStatusOutput>;

// The operation
/**
 * Gets the export status.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListExportStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListExportStatusInput,
  outputSchema: ServicesListExportStatusOutput,
}));
// Input Schema
export interface ServicesListMetricMetadataInput {
  serviceName: string;
  $filter?: string;
  perfCounter?: boolean;
}
export const ServicesListMetricMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    perfCounter: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListMetricMetadataInput>;

// Output Schema
export interface ServicesListMetricMetadataOutput {
  nextLink?: string;
  value?: {
    metricsProcessorClassName?: string;
    metricName?: string;
    groupings?: {
      key?: string;
      displayName?: string;
      invisibleForUi?: boolean;
    }[];
    displayName?: string;
    valueKind?: string;
    minValue?: number;
    maxValue?: number;
    kind?: string;
    isDefault?: boolean;
    isPerfCounter?: boolean;
    isDevOps?: boolean;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServicesListMetricMetadataOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          metricsProcessorClassName: Schema.optional(Schema.String),
          metricName: Schema.optional(Schema.String),
          groupings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
                invisibleForUi: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          displayName: Schema.optional(Schema.String),
          valueKind: Schema.optional(Schema.String),
          minValue: Schema.optional(Schema.Number),
          maxValue: Schema.optional(Schema.Number),
          kind: Schema.optional(Schema.String),
          isDefault: Schema.optional(Schema.Boolean),
          isPerfCounter: Schema.optional(Schema.Boolean),
          isDevOps: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListMetricMetadataOutput>;

// The operation
/**
 * Gets the service related metrics information.
 *
 * @param $filter - The metric metadata property filter to apply.
 * @param serviceName - The name of the service.
 * @param perfCounter - Indicates if only performance counter metrics are requested.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListMetricMetadata = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListMetricMetadataInput,
  outputSchema: ServicesListMetricMetadataOutput,
}));
// Input Schema
export interface ServicesListMetricsAverageInput {
  serviceName: string;
  metricName: string;
  groupName: string;
}
export const ServicesListMetricsAverageInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName}/average",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListMetricsAverageInput>;

// Output Schema
export interface ServicesListMetricsAverageOutput {
  nextLink?: string;
  value?: { key?: string; value?: string }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServicesListMetricsAverageOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListMetricsAverageOutput>;

// The operation
/**
 * Gets the average of the metric values for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListMetricsAverage = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListMetricsAverageInput,
  outputSchema: ServicesListMetricsAverageOutput,
}));
// Input Schema
export interface ServicesListMetricsSumInput {
  serviceName: string;
  metricName: string;
  groupName: string;
}
export const ServicesListMetricsSumInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    metricName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName}/sum",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListMetricsSumInput>;

// Output Schema
export interface ServicesListMetricsSumOutput {
  nextLink?: string;
  value?: { key?: string; value?: string }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServicesListMetricsSumOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListMetricsSumOutput>;

// The operation
/**
 * Gets the sum of the metric values for a given metric and group combination.
 *
 * @param serviceName - The name of the service.
 * @param metricName - The metric name
 * @param groupName - The group name
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListMetricsSum = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListMetricsSumInput,
  outputSchema: ServicesListMetricsSumOutput,
}));
// Input Schema
export interface ServicesListMonitoringConfigurationsInput {
  serviceName: string;
}
export const ServicesListMonitoringConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/monitoringconfigurations",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListMonitoringConfigurationsInput>;

// Output Schema
export interface ServicesListMonitoringConfigurationsOutput {
  value?: { key?: string; value?: string }[];
}
export const ServicesListMonitoringConfigurationsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicesListMonitoringConfigurationsOutput>;

// The operation
/**
 * Gets the service level monitoring configurations.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListMonitoringConfigurations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesListMonitoringConfigurationsInput,
    outputSchema: ServicesListMonitoringConfigurationsOutput,
  }));
// Input Schema
export interface ServicesListPremiumInput {
  $filter?: string;
  serviceType?: string;
  skipCount?: number;
  takeCount?: number;
}
export const ServicesListPremiumInput =
  /*@__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    serviceType: Schema.optional(Schema.String),
    skipCount: Schema.optional(Schema.Number),
    takeCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/premiumCheck",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListPremiumInput>;

// Output Schema
export interface ServicesListPremiumOutput {
  nextLink?: string;
  value?: {
    id?: string;
    activeAlerts?: number;
    additionalInformation?: string;
    createdDate?: string;
    customNotificationEmails?: string[];
    disabled?: boolean;
    displayName?: string;
    health?: string;
    lastDisabled?: string;
    lastUpdated?: string;
    monitoringConfigurationsComputed?: unknown;
    monitoringConfigurationsCustomized?: unknown;
    notificationEmailEnabled?: boolean;
    notificationEmailEnabledForGlobalAdmins?: boolean;
    notificationEmailsEnabledForGlobalAdmins?: boolean;
    notificationEmails?: string[];
    originalDisabledState?: boolean;
    resolvedAlerts?: number;
    serviceId?: string;
    serviceName?: string;
    signature?: string;
    simpleProperties?: unknown;
    tenantId?: string;
    type?: string;
  }[];
  totalCount?: number;
  continuationToken?: string;
}
export const ServicesListPremiumOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          activeAlerts: Schema.optional(Schema.Number),
          additionalInformation: Schema.optional(Schema.String),
          createdDate: Schema.optional(Schema.String),
          customNotificationEmails: Schema.optional(
            Schema.Array(Schema.String),
          ),
          disabled: Schema.optional(Schema.Boolean),
          displayName: Schema.optional(Schema.String),
          health: Schema.optional(Schema.String),
          lastDisabled: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
          monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
          notificationEmailEnabled: Schema.optional(Schema.Boolean),
          notificationEmailEnabledForGlobalAdmins: Schema.optional(
            Schema.Boolean,
          ),
          notificationEmailsEnabledForGlobalAdmins: Schema.optional(
            Schema.Boolean,
          ),
          notificationEmails: Schema.optional(Schema.Array(Schema.String)),
          originalDisabledState: Schema.optional(Schema.Boolean),
          resolvedAlerts: Schema.optional(Schema.Number),
          serviceId: Schema.optional(Schema.String),
          serviceName: Schema.optional(Schema.String),
          signature: Schema.optional(Schema.String),
          simpleProperties: Schema.optional(Schema.Unknown),
          tenantId: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListPremiumOutput>;

// The operation
/**
 * Gets the details of services for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.
 *
 * @param $filter - The service property filter to apply.
 * @param serviceType - The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
 * @param skipCount - The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
 * @param takeCount - The take count , which specifies the number of elements that can be returned from a sequence.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListPremium = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListPremiumInput,
  outputSchema: ServicesListPremiumOutput,
}));
// Input Schema
export interface ServicesListUserBadPasswordReportInput {
  serviceName: string;
  dataSource?: string;
}
export const ServicesListUserBadPasswordReportInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    dataSource: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/badpassword/details/user",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesListUserBadPasswordReportInput>;

// Output Schema
export interface ServicesListUserBadPasswordReportOutput {
  value?: {
    userId?: string;
    ipAddress?: string;
    lastUpdated?: string;
    uniqueIpAddresses?: string;
    totalErrorAttempts?: number;
  }[];
}
export const ServicesListUserBadPasswordReportOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          userId: Schema.optional(Schema.String),
          ipAddress: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          uniqueIpAddresses: Schema.optional(Schema.String),
          totalErrorAttempts: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicesListUserBadPasswordReportOutput>;

// The operation
/**
 * Gets the bad password login attempt report for an user
 *
 * @param serviceName - The name of the service.
 * @param dataSource - The source of data, if its test data or customer data.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesListUserBadPasswordReport =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesListUserBadPasswordReportInput,
    outputSchema: ServicesListUserBadPasswordReportOutput,
  }));
// Input Schema
export interface ServicesUpdateInput {
  serviceName: string;
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const ServicesUpdateInput = /*@__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}",
    apiVersion: "2014-01-01",
  }),
) as unknown as Schema.Codec<ServicesUpdateInput>;

// Output Schema
export interface ServicesUpdateOutput {
  id?: string;
  activeAlerts?: number;
  additionalInformation?: string;
  createdDate?: string;
  customNotificationEmails?: string[];
  disabled?: boolean;
  displayName?: string;
  health?: string;
  lastDisabled?: string;
  lastUpdated?: string;
  monitoringConfigurationsComputed?: unknown;
  monitoringConfigurationsCustomized?: unknown;
  notificationEmailEnabled?: boolean;
  notificationEmailEnabledForGlobalAdmins?: boolean;
  notificationEmailsEnabledForGlobalAdmins?: boolean;
  notificationEmails?: string[];
  originalDisabledState?: boolean;
  resolvedAlerts?: number;
  serviceId?: string;
  serviceName?: string;
  signature?: string;
  simpleProperties?: unknown;
  tenantId?: string;
  type?: string;
}
export const ServicesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  activeAlerts: Schema.optional(Schema.Number),
  additionalInformation: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  customNotificationEmails: Schema.optional(Schema.Array(Schema.String)),
  disabled: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  health: Schema.optional(Schema.String),
  lastDisabled: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  monitoringConfigurationsComputed: Schema.optional(Schema.Unknown),
  monitoringConfigurationsCustomized: Schema.optional(Schema.Unknown),
  notificationEmailEnabled: Schema.optional(Schema.Boolean),
  notificationEmailEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmailsEnabledForGlobalAdmins: Schema.optional(Schema.Boolean),
  notificationEmails: Schema.optional(Schema.Array(Schema.String)),
  originalDisabledState: Schema.optional(Schema.Boolean),
  resolvedAlerts: Schema.optional(Schema.Number),
  serviceId: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  simpleProperties: Schema.optional(Schema.Unknown),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesUpdateOutput>;

// The operation
/**
 * Updates the service properties of an onboarded service.
 *
 * @param serviceName - The name of the service which needs to be deleted.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
// Input Schema
export interface ServicesUpdateMonitoringConfigurationInput {
  serviceName: string;
  key?: string;
  value?: string;
}
export const ServicesUpdateMonitoringConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/monitoringconfiguration",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<ServicesUpdateMonitoringConfigurationInput>;

// Output Schema
export type ServicesUpdateMonitoringConfigurationOutput = void;
export const ServicesUpdateMonitoringConfigurationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesUpdateMonitoringConfigurationOutput>;

// The operation
/**
 * Updates the service level monitoring configuration.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const servicesUpdateMonitoringConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesUpdateMonitoringConfigurationInput,
    outputSchema: ServicesUpdateMonitoringConfigurationOutput,
  }));
// Input Schema
export interface UpdateIPAddressAggregateSettingsInput {
  serviceName: string;
  id?: string;
  badPasswordAndExtranetLockoutCombinedDailyThreshold?: number;
  badPasswordAndExtranetLockoutCombinedHourlyThreshold?: number;
  extranetLockoutDailyThreshold?: number;
  extranetLockoutHourlyThreshold?: number;
  emailNotificationEnabled?: boolean;
}
export const UpdateIPAddressAggregateSettingsInput =
  /*@__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    badPasswordAndExtranetLockoutCombinedDailyThreshold: Schema.optional(
      Schema.Number,
    ),
    badPasswordAndExtranetLockoutCombinedHourlyThreshold: Schema.optional(
      Schema.Number,
    ),
    extranetLockoutDailyThreshold: Schema.optional(Schema.Number),
    extranetLockoutHourlyThreshold: Schema.optional(Schema.Number),
    emailNotificationEnabled: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/ipAddressAggregateSettings",
      apiVersion: "2014-01-01",
    }),
  ) as unknown as Schema.Codec<UpdateIPAddressAggregateSettingsInput>;

// Output Schema
export interface UpdateIPAddressAggregateSettingsOutput {
  id?: string;
  badPasswordAndExtranetLockoutCombinedDailyThreshold?: number;
  badPasswordAndExtranetLockoutCombinedHourlyThreshold?: number;
  extranetLockoutDailyThreshold?: number;
  extranetLockoutHourlyThreshold?: number;
  emailNotificationEnabled?: boolean;
}
export const UpdateIPAddressAggregateSettingsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    badPasswordAndExtranetLockoutCombinedDailyThreshold: Schema.optional(
      Schema.Number,
    ),
    badPasswordAndExtranetLockoutCombinedHourlyThreshold: Schema.optional(
      Schema.Number,
    ),
    extranetLockoutDailyThreshold: Schema.optional(Schema.Number),
    extranetLockoutHourlyThreshold: Schema.optional(Schema.Number),
    emailNotificationEnabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<UpdateIPAddressAggregateSettingsOutput>;

// The operation
/**
 * Updates the IP address aggregate settings alert thresholds.
 *
 * @param serviceName - The name of the service.
 * @param api-version - The version of the API to be used with the client request.
 */
export const updateIPAddressAggregateSettings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UpdateIPAddressAggregateSettingsInput,
    outputSchema: UpdateIPAddressAggregateSettingsOutput,
  }));
