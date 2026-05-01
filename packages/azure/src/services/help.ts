/**
 * Azure Help API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DiagnosticsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{scope}/providers/Microsoft.Help/checkNameAvailability",
    }),
  );
export type DiagnosticsCheckNameAvailabilityInput =
  typeof DiagnosticsCheckNameAvailabilityInput.Type;

// Output Schema
export const DiagnosticsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
export type DiagnosticsCheckNameAvailabilityOutput =
  typeof DiagnosticsCheckNameAvailabilityOutput.Type;

// The operation
/**
 * This API is used to check the uniqueness of a resource name used for a diagnostic check.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const DiagnosticsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiagnosticsCheckNameAvailabilityInput,
    outputSchema: DiagnosticsCheckNameAvailabilityOutput,
  }));
// Input Schema
export const DiagnosticsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "PUT",
    path: "/{scope}/providers/Microsoft.Help/diagnostics/{diagnosticsResourceName}",
  }),
);
export type DiagnosticsCreateInput = typeof DiagnosticsCreateInput.Type;

// Output Schema
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
  });
export type DiagnosticsCreateOutput = typeof DiagnosticsCreateOutput.Type;

// The operation
/**
 * Diagnostics tells you precisely the root cause of the issue and how to address it. You can get diagnostics once you discover and identify the relevant solution for your Azure issue.<br/><br/> You can create diagnostics using the ‘solutionId’  from Solution Discovery API response and ‘additionalParameters’ <br/><br/> <b>Note: </b>‘requiredParameterSets’ from Solutions Discovery API response must be passed via ‘additionalParameters’ as an input to Diagnostics API
 */
export const DiagnosticsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiagnosticsCreateInput,
  outputSchema: DiagnosticsCreateOutput,
}));
// Input Schema
export const DiagnosticsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Help/diagnostics/{diagnosticsResourceName}",
  }),
);
export type DiagnosticsGetInput = typeof DiagnosticsGetInput.Type;

// Output Schema
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
});
export type DiagnosticsGetOutput = typeof DiagnosticsGetOutput.Type;

// The operation
/**
 * Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic.
 */
export const DiagnosticsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiagnosticsGetInput,
  outputSchema: DiagnosticsGetOutput,
}));
// Input Schema
export const DiscoverySolutionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Help/discoverySolutions",
    }),
  );
export type DiscoverySolutionListInput = typeof DiscoverySolutionListInput.Type;

// Output Schema
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
  });
export type DiscoverySolutionListOutput =
  typeof DiscoverySolutionListOutput.Type;

// The operation
/**
 * Solutions Discovery is the initial point of entry within Help API, which helps you identify the relevant solutions for your Azure issue.<br/><br/> You can discover solutions using resourceUri OR resourceUri + problemClassificationId.<br/><br/>We will do our best in returning relevant diagnostics for your Azure issue.<br/><br/> Get the problemClassificationId(s) using this [reference](https://learn.microsoft.com/rest/api/support/problem-classifications/list?tabs=HTTP).<br/><br/> <b>Note: </b> ‘requiredParameterSets’ from Solutions Discovery API response must be passed via ‘additionalParameters’ as an input to Diagnostics API.
 */
export const DiscoverySolutionList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiscoverySolutionListInput,
    outputSchema: DiscoverySolutionListOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/providers/Microsoft.Help/operations" }));
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Returns list of operations.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
