/**
 * Azure Help API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DiagnosticsCheckNameAvailabilityInput {
  scope: string;
  name?: string;
  type?: string;
}
export const DiagnosticsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{scope}/providers/Microsoft.Help/checkNameAvailability",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticsCheckNameAvailabilityInput>;

// Output Schema
export interface DiagnosticsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const DiagnosticsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiagnosticsCheckNameAvailabilityOutput>;

// The operation
/**
 * This API is used to check the uniqueness of a resource name used for a diagnostic check.
 *
 * @param scope - This is an extension resource provider and only resource level extension is supported at the moment.
 * @param api-version - Client Api Version.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const DiagnosticsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiagnosticsCheckNameAvailabilityInput,
    outputSchema: DiagnosticsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface DiagnosticsCreateInput {
  scope: string;
  diagnosticsResourceName: string;
  properties?: {
    globalParameters?: Record<string, string>;
    insights?: {
      solutionId?: string;
      additionalParameters?: Record<string, string>;
    }[];
    acceptedAt?: string;
    provisioningState?: "Succeeded" | "PartialComplete" | "Failed" | "Canceled";
    diagnostics?: {
      solutionId?: string;
      status?: "Failed" | "MissingInputs" | "Running" | "Succeeded" | "Timeout";
      insights?: {
        id?: string;
        title?: string;
        results?: string;
        importanceLevel?: "Critical" | "Warning" | "Information";
      }[];
      error?: {
        code?: string;
        type?: string;
        message?: string;
        details?: unknown[];
      };
    }[];
  };
}
export const DiagnosticsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    scope: Schema.String.pipe(T.PathParam()),
    diagnosticsResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        globalParameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        insights: Schema.optional(
          Schema.Array(
            Schema.Struct({
              solutionId: Schema.optional(Schema.String),
              additionalParameters: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        ),
        acceptedAt: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "PartialComplete",
            "Failed",
            "Canceled",
          ]),
        ),
        diagnostics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              solutionId: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals([
                  "Failed",
                  "MissingInputs",
                  "Running",
                  "Succeeded",
                  "Timeout",
                ]),
              ),
              insights: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    title: Schema.optional(Schema.String),
                    results: Schema.optional(Schema.String),
                    importanceLevel: Schema.optional(
                      Schema.Literals(["Critical", "Warning", "Information"]),
                    ),
                  }),
                ),
              ),
              error: Schema.optional(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  details: Schema.optional(Schema.Array(Schema.Unknown)),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/{scope}/providers/Microsoft.Help/diagnostics/{diagnosticsResourceName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<DiagnosticsCreateInput>;

// Output Schema
export interface DiagnosticsCreateOutput {
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
export const DiagnosticsCreateOutput =
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
  }) as unknown as Schema.Codec<DiagnosticsCreateOutput>;

// The operation
/**
 * Diagnostics tells you precisely the root cause of the issue and how to address it. You can get diagnostics once you discover and identify the relevant solution for your Azure issue.<br/><br/> You can create diagnostics using the ‘solutionId’  from Solution Discovery API response and ‘additionalParameters’ <br/><br/> <b>Note: </b>‘requiredParameterSets’ from Solutions Discovery API response must be passed via ‘additionalParameters’ as an input to Diagnostics API
 *
 * @param scope - This is an extension resource provider and only resource level extension is supported at the moment.
 * @param diagnosticsResourceName - Unique resource name for insight resources
 * @param api-version - Client Api Version.
 */
export const DiagnosticsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiagnosticsCreateInput,
  outputSchema: DiagnosticsCreateOutput,
}));
// Input Schema
export interface DiagnosticsGetInput {
  scope: string;
  diagnosticsResourceName: string;
}
export const DiagnosticsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  diagnosticsResourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Help/diagnostics/{diagnosticsResourceName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<DiagnosticsGetInput>;

// Output Schema
export interface DiagnosticsGetOutput {
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
export const DiagnosticsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DiagnosticsGetOutput>;

// The operation
/**
 * Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic.
 *
 * @param scope - This is an extension resource provider and only resource level extension is supported at the moment.
 * @param diagnosticsResourceName - Unique resource name for insight resources
 * @param api-version - Client Api Version.
 */
export const DiagnosticsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiagnosticsGetInput,
  outputSchema: DiagnosticsGetOutput,
}));
// Input Schema
export interface DiscoverySolutionListInput {
  scope: string;
  $filter?: string;
  $skiptoken?: string;
}
export const DiscoverySolutionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Help/discoverySolutions",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<DiscoverySolutionListInput>;

// Output Schema
export interface DiscoverySolutionListOutput {
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
export const DiscoverySolutionListOutput =
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
  }) as unknown as Schema.Codec<DiscoverySolutionListOutput>;

// The operation
/**
 * Solutions Discovery is the initial point of entry within Help API, which helps you identify the relevant solutions for your Azure issue.<br/><br/> You can discover solutions using resourceUri OR resourceUri + problemClassificationId.<br/><br/>We will do our best in returning relevant diagnostics for your Azure issue.<br/><br/> Get the problemClassificationId(s) using this [reference](https://learn.microsoft.com/rest/api/support/problem-classifications/list?tabs=HTTP).<br/><br/> <b>Note: </b> ‘requiredParameterSets’ from Solutions Discovery API response must be passed via ‘additionalParameters’ as an input to Diagnostics API.
 *
 * @param scope - This is an extension resource provider and only resource level extension is supported at the moment.
 * @param api-version - Client Api Version.
 * @param $filter - Can be used to filter solutionIds by 'ProblemClassificationId'. The filter supports only 'and' and 'eq' operators. Example: $filter=ProblemClassificationId eq '1ddda5b4-cf6c-4d4f-91ad-bc38ab0e811e' and ProblemClassificationId eq '0a9673c2-7af6-4e19-90d3-4ee2461076d9'.
 * @param $skiptoken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const DiscoverySolutionList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiscoverySolutionListInput,
    outputSchema: DiscoverySolutionListOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Help/operations",
    apiVersion: "2023-06-01",
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
 * Returns list of operations.
 *
 * @param api-version - Client Api Version.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
