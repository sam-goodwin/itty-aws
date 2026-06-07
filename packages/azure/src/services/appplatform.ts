/**
 * Azure Appplatform API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ApiPortalCustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApiPortalCustomDomainsCreateOrUpdateInput =
  typeof ApiPortalCustomDomainsCreateOrUpdateInput.Type;

// Output Schema
export const ApiPortalCustomDomainsCreateOrUpdateOutput =
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
export type ApiPortalCustomDomainsCreateOrUpdateOutput =
  typeof ApiPortalCustomDomainsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the API portal custom domain.
 */
export const ApiPortalCustomDomainsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApiPortalCustomDomainsCreateOrUpdateInput,
    outputSchema: ApiPortalCustomDomainsCreateOrUpdateOutput,
  }));
// Input Schema
export const ApiPortalCustomDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApiPortalCustomDomainsDeleteInput =
  typeof ApiPortalCustomDomainsDeleteInput.Type;

// Output Schema
export const ApiPortalCustomDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApiPortalCustomDomainsDeleteOutput =
  typeof ApiPortalCustomDomainsDeleteOutput.Type;

// The operation
/**
 * Delete the API portal custom domain.
 */
export const ApiPortalCustomDomainsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApiPortalCustomDomainsDeleteInput,
    outputSchema: ApiPortalCustomDomainsDeleteOutput,
  }));
// Input Schema
export const ApiPortalCustomDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApiPortalCustomDomainsGetInput =
  typeof ApiPortalCustomDomainsGetInput.Type;

// Output Schema
export const ApiPortalCustomDomainsGetOutput =
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
export type ApiPortalCustomDomainsGetOutput =
  typeof ApiPortalCustomDomainsGetOutput.Type;

// The operation
/**
 * Get the API portal custom domain.
 */
export const ApiPortalCustomDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalCustomDomainsGetInput,
    outputSchema: ApiPortalCustomDomainsGetOutput,
  }),
);
// Input Schema
export const ApiPortalCustomDomainsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains",
      apiVersion: "2023-12-01",
    }),
  );
export type ApiPortalCustomDomainsListInput =
  typeof ApiPortalCustomDomainsListInput.Type;

// Output Schema
export const ApiPortalCustomDomainsListOutput =
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
export type ApiPortalCustomDomainsListOutput =
  typeof ApiPortalCustomDomainsListOutput.Type;

// The operation
/**
 * Handle requests to list all API portal custom domains.
 */
export const ApiPortalCustomDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalCustomDomainsListInput,
    outputSchema: ApiPortalCustomDomainsListOutput,
  }),
);
// Input Schema
export const ApiPortalsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        httpsOnly: Schema.optional(Schema.Boolean),
        gatewayIds: Schema.optional(Schema.Array(Schema.String)),
        sourceUrls: Schema.optional(Schema.Array(Schema.String)),
        ssoProperties: Schema.optional(
          Schema.Struct({
            scope: Schema.optional(Schema.Array(Schema.String)),
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
            issuerUri: Schema.optional(Schema.String),
          }),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        apiTryOutEnabledState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApiPortalsCreateOrUpdateInput =
  typeof ApiPortalsCreateOrUpdateInput.Type;

// Output Schema
export const ApiPortalsCreateOrUpdateOutput =
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
export type ApiPortalsCreateOrUpdateOutput =
  typeof ApiPortalsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the default API portal or update the existing API portal.
 */
export const ApiPortalsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalsCreateOrUpdateInput,
    outputSchema: ApiPortalsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ApiPortalsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}",
    apiVersion: "2023-12-01",
  }),
);
export type ApiPortalsDeleteInput = typeof ApiPortalsDeleteInput.Type;

// Output Schema
export const ApiPortalsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApiPortalsDeleteOutput = typeof ApiPortalsDeleteOutput.Type;

// The operation
/**
 * Delete the default API portal.
 */
export const ApiPortalsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApiPortalsDeleteInput,
  outputSchema: ApiPortalsDeleteOutput,
}));
// Input Schema
export const ApiPortalsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}",
    apiVersion: "2023-12-01",
  }),
);
export type ApiPortalsGetInput = typeof ApiPortalsGetInput.Type;

// Output Schema
export const ApiPortalsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ApiPortalsGetOutput = typeof ApiPortalsGetOutput.Type;

// The operation
/**
 * Get the API portal and its properties.
 */
export const ApiPortalsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApiPortalsGetInput,
  outputSchema: ApiPortalsGetOutput,
}));
// Input Schema
export const ApiPortalsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals",
    apiVersion: "2023-12-01",
  }),
);
export type ApiPortalsListInput = typeof ApiPortalsListInput.Type;

// Output Schema
export const ApiPortalsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ApiPortalsListOutput = typeof ApiPortalsListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a Service.
 */
export const ApiPortalsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApiPortalsListInput,
  outputSchema: ApiPortalsListOutput,
}));
// Input Schema
export const ApiPortalsValidateDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/validateDomain",
      apiVersion: "2023-12-01",
    }),
  );
export type ApiPortalsValidateDomainInput =
  typeof ApiPortalsValidateDomainInput.Type;

// Output Schema
export const ApiPortalsValidateDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  });
export type ApiPortalsValidateDomainOutput =
  typeof ApiPortalsValidateDomainOutput.Type;

// The operation
/**
 * Check the domains are valid as well as not in use.
 */
export const ApiPortalsValidateDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalsValidateDomainInput,
    outputSchema: ApiPortalsValidateDomainOutput,
  }),
);
// Input Schema
export const ApmsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        secrets: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApmsCreateOrUpdateInput = typeof ApmsCreateOrUpdateInput.Type;

// Output Schema
export const ApmsCreateOrUpdateOutput =
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
export type ApmsCreateOrUpdateOutput = typeof ApmsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update an APM.
 */
export const ApmsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsCreateOrUpdateInput,
  outputSchema: ApmsCreateOrUpdateOutput,
}));
// Input Schema
export const ApmsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}",
    apiVersion: "2023-12-01",
  }),
);
export type ApmsDeleteInput = typeof ApmsDeleteInput.Type;

// Output Schema
export const ApmsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApmsDeleteOutput = typeof ApmsDeleteOutput.Type;

// The operation
/**
 * Operation to delete an APM
 */
export const ApmsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsDeleteInput,
  outputSchema: ApmsDeleteOutput,
}));
// Input Schema
export const ApmsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}",
    apiVersion: "2023-12-01",
  }),
);
export type ApmsGetInput = typeof ApmsGetInput.Type;

// Output Schema
export const ApmsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ApmsGetOutput = typeof ApmsGetOutput.Type;

// The operation
/**
 * Get the APM by name.
 */
export const ApmsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsGetInput,
  outputSchema: ApmsGetOutput,
}));
// Input Schema
export const ApmsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms",
    apiVersion: "2023-12-01",
  }),
);
export type ApmsListInput = typeof ApmsListInput.Type;

// Output Schema
export const ApmsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ApmsListOutput = typeof ApmsListOutput.Type;

// The operation
/**
 * Get collection of APMs.
 */
export const ApmsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsListInput,
  outputSchema: ApmsListOutput,
}));
// Input Schema
export const ApmsListSecretKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}/listSecretKeys",
      apiVersion: "2023-12-01",
    }),
  );
export type ApmsListSecretKeysInput = typeof ApmsListSecretKeysInput.Type;

// Output Schema
export const ApmsListSecretKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.String)),
  });
export type ApmsListSecretKeysOutput = typeof ApmsListSecretKeysOutput.Type;

// The operation
/**
 * List keys of APM sensitive properties.
 */
export const ApmsListSecretKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsListSecretKeysInput,
  outputSchema: ApmsListSecretKeysOutput,
}));
// Input Schema
export const ApplicationAcceleratorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        components: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              resourceRequests: Schema.optional(
                Schema.Struct({
                  cpu: Schema.optional(Schema.String),
                  memory: Schema.optional(Schema.String),
                  instanceCount: Schema.optional(Schema.Number),
                }),
              ),
              instances: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    status: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationAcceleratorsCreateOrUpdateInput =
  typeof ApplicationAcceleratorsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationAcceleratorsCreateOrUpdateOutput =
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
export type ApplicationAcceleratorsCreateOrUpdateOutput =
  typeof ApplicationAcceleratorsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the application accelerator.
 */
export const ApplicationAcceleratorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationAcceleratorsCreateOrUpdateInput,
    outputSchema: ApplicationAcceleratorsCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationAcceleratorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationAcceleratorsDeleteInput =
  typeof ApplicationAcceleratorsDeleteInput.Type;

// Output Schema
export const ApplicationAcceleratorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationAcceleratorsDeleteOutput =
  typeof ApplicationAcceleratorsDeleteOutput.Type;

// The operation
/**
 * Delete the application accelerator.
 */
export const ApplicationAcceleratorsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationAcceleratorsDeleteInput,
    outputSchema: ApplicationAcceleratorsDeleteOutput,
  }));
// Input Schema
export const ApplicationAcceleratorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationAcceleratorsGetInput =
  typeof ApplicationAcceleratorsGetInput.Type;

// Output Schema
export const ApplicationAcceleratorsGetOutput =
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
export type ApplicationAcceleratorsGetOutput =
  typeof ApplicationAcceleratorsGetOutput.Type;

// The operation
/**
 * Get the application accelerator.
 */
export const ApplicationAcceleratorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationAcceleratorsGetInput,
    outputSchema: ApplicationAcceleratorsGetOutput,
  }),
);
// Input Schema
export const ApplicationAcceleratorsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationAcceleratorsListInput =
  typeof ApplicationAcceleratorsListInput.Type;

// Output Schema
export const ApplicationAcceleratorsListOutput =
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
export type ApplicationAcceleratorsListOutput =
  typeof ApplicationAcceleratorsListOutput.Type;

// The operation
/**
 * Handle requests to list all application accelerator.
 */
export const ApplicationAcceleratorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationAcceleratorsListInput,
    outputSchema: ApplicationAcceleratorsListOutput,
  }),
);
// Input Schema
export const ApplicationLiveViewsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        components: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Unknown),
              resourceRequests: Schema.optional(
                Schema.Struct({
                  cpu: Schema.optional(Schema.String),
                  memory: Schema.optional(Schema.String),
                  instanceCount: Schema.optional(Schema.Number),
                }),
              ),
              instances: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    status: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews/{applicationLiveViewName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationLiveViewsCreateOrUpdateInput =
  typeof ApplicationLiveViewsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationLiveViewsCreateOrUpdateOutput =
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
export type ApplicationLiveViewsCreateOrUpdateOutput =
  typeof ApplicationLiveViewsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the default Application Live View or update the existing Application Live View.
 */
export const ApplicationLiveViewsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationLiveViewsCreateOrUpdateInput,
    outputSchema: ApplicationLiveViewsCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationLiveViewsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews/{applicationLiveViewName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationLiveViewsDeleteInput =
  typeof ApplicationLiveViewsDeleteInput.Type;

// Output Schema
export const ApplicationLiveViewsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationLiveViewsDeleteOutput =
  typeof ApplicationLiveViewsDeleteOutput.Type;

// The operation
/**
 * Disable the default Application Live View.
 */
export const ApplicationLiveViewsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationLiveViewsDeleteInput,
    outputSchema: ApplicationLiveViewsDeleteOutput,
  }),
);
// Input Schema
export const ApplicationLiveViewsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews/{applicationLiveViewName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationLiveViewsGetInput =
  typeof ApplicationLiveViewsGetInput.Type;

// Output Schema
export const ApplicationLiveViewsGetOutput =
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
export type ApplicationLiveViewsGetOutput =
  typeof ApplicationLiveViewsGetOutput.Type;

// The operation
/**
 * Get the Application Live  and its properties.
 */
export const ApplicationLiveViewsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationLiveViewsGetInput,
    outputSchema: ApplicationLiveViewsGetOutput,
  }),
);
// Input Schema
export const ApplicationLiveViewsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews",
      apiVersion: "2023-12-01",
    }),
  );
export type ApplicationLiveViewsListInput =
  typeof ApplicationLiveViewsListInput.Type;

// Output Schema
export const ApplicationLiveViewsListOutput =
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
export type ApplicationLiveViewsListOutput =
  typeof ApplicationLiveViewsListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a Service.
 */
export const ApplicationLiveViewsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationLiveViewsListInput,
    outputSchema: ApplicationLiveViewsListOutput,
  }),
);
// Input Schema
export const AppsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        addonConfigs: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Creating",
            "Updating",
            "Deleting",
          ]),
        ),
        fqdn: Schema.optional(Schema.String),
        httpsOnly: Schema.optional(Schema.Boolean),
        temporaryDisk: Schema.optional(
          Schema.Struct({
            sizeInGB: Schema.optional(Schema.Number),
            mountPath: Schema.optional(Schema.String),
          }),
        ),
        persistentDisk: Schema.optional(
          Schema.Struct({
            sizeInGB: Schema.optional(Schema.Number),
            usedInGB: Schema.optional(Schema.Number),
            mountPath: Schema.optional(Schema.String),
          }),
        ),
        customPersistentDisks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              customPersistentDiskProperties: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals(["AzureFileVolume"]),
                  mountPath: Schema.String,
                  readOnly: Schema.optional(Schema.Boolean),
                  enableSubPath: Schema.optional(Schema.Boolean),
                  mountOptions: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
              storageId: Schema.String,
            }),
          ),
        ),
        enableEndToEndTLS: Schema.optional(Schema.Boolean),
        loadedCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
              loadTrustStore: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        vnetAddons: Schema.optional(
          Schema.Struct({
            publicEndpoint: Schema.optional(Schema.Boolean),
            publicEndpointUrl: Schema.optional(Schema.String),
          }),
        ),
        ingressSettings: Schema.optional(
          Schema.Struct({
            readTimeoutInSeconds: Schema.optional(Schema.Number),
            sendTimeoutInSeconds: Schema.optional(Schema.Number),
            sessionAffinity: Schema.optional(
              Schema.Literals(["Cookie", "None"]),
            ),
            sessionCookieMaxAge: Schema.optional(Schema.Number),
            backendProtocol: Schema.optional(
              Schema.Literals(["GRPC", "Default"]),
            ),
            clientAuth: Schema.optional(
              Schema.Struct({
                certificates: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
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
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
      apiVersion: "2023-12-01",
    }),
  );
export type AppsCreateOrUpdateInput = typeof AppsCreateOrUpdateInput.Type;

// Output Schema
export const AppsCreateOrUpdateOutput =
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
export type AppsCreateOrUpdateOutput = typeof AppsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new App or update an exiting App.
 */
export const AppsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsCreateOrUpdateInput,
  outputSchema: AppsCreateOrUpdateOutput,
}));
// Input Schema
export const AppsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
    apiVersion: "2023-12-01",
  }),
);
export type AppsDeleteInput = typeof AppsDeleteInput.Type;

// Output Schema
export const AppsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppsDeleteOutput = typeof AppsDeleteOutput.Type;

// The operation
/**
 * Operation to delete an App.
 */
export const AppsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsDeleteInput,
  outputSchema: AppsDeleteOutput,
}));
// Input Schema
export const AppsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  syncStatus: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
    apiVersion: "2023-12-01",
  }),
);
export type AppsGetInput = typeof AppsGetInput.Type;

// Output Schema
export const AppsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type AppsGetOutput = typeof AppsGetOutput.Type;

// The operation
/**
 * Get an App and its properties.
 *
 * @param syncStatus - Indicates whether sync status
 */
export const AppsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsGetInput,
  outputSchema: AppsGetOutput,
}));
// Input Schema
export const AppsGetResourceUploadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/getResourceUploadUrl",
      apiVersion: "2023-12-01",
    }),
  );
export type AppsGetResourceUploadUrlInput =
  typeof AppsGetResourceUploadUrlInput.Type;

// Output Schema
export const AppsGetResourceUploadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    uploadUrl: Schema.optional(Schema.String),
  });
export type AppsGetResourceUploadUrlOutput =
  typeof AppsGetResourceUploadUrlOutput.Type;

// The operation
/**
 * Get an resource upload URL for an App, which may be artifacts or source archive.
 */
export const AppsGetResourceUploadUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppsGetResourceUploadUrlInput,
    outputSchema: AppsGetResourceUploadUrlOutput,
  }),
);
// Input Schema
export const AppsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps",
    apiVersion: "2023-12-01",
  }),
);
export type AppsListInput = typeof AppsListInput.Type;

// Output Schema
export const AppsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type AppsListOutput = typeof AppsListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a Service.
 */
export const AppsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsListInput,
  outputSchema: AppsListOutput,
}));
// Input Schema
export const AppsSetActiveDeploymentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/setActiveDeployments",
      apiVersion: "2023-12-01",
    }),
  );
export type AppsSetActiveDeploymentsInput =
  typeof AppsSetActiveDeploymentsInput.Type;

// Output Schema
export const AppsSetActiveDeploymentsOutput =
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
export type AppsSetActiveDeploymentsOutput =
  typeof AppsSetActiveDeploymentsOutput.Type;

// The operation
/**
 * Set existing Deployment under the app as active
 */
export const AppsSetActiveDeployments = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppsSetActiveDeploymentsInput,
    outputSchema: AppsSetActiveDeploymentsOutput,
  }),
);
// Input Schema
export const AppsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      public: Schema.optional(Schema.Boolean),
      url: Schema.optional(Schema.String),
      addonConfigs: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Creating",
          "Updating",
          "Deleting",
        ]),
      ),
      fqdn: Schema.optional(Schema.String),
      httpsOnly: Schema.optional(Schema.Boolean),
      temporaryDisk: Schema.optional(
        Schema.Struct({
          sizeInGB: Schema.optional(Schema.Number),
          mountPath: Schema.optional(Schema.String),
        }),
      ),
      persistentDisk: Schema.optional(
        Schema.Struct({
          sizeInGB: Schema.optional(Schema.Number),
          usedInGB: Schema.optional(Schema.Number),
          mountPath: Schema.optional(Schema.String),
        }),
      ),
      customPersistentDisks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            customPersistentDiskProperties: Schema.optional(
              Schema.Struct({
                type: Schema.Literals(["AzureFileVolume"]),
                mountPath: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                enableSubPath: Schema.optional(Schema.Boolean),
                mountOptions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            storageId: Schema.String,
          }),
        ),
      ),
      enableEndToEndTLS: Schema.optional(Schema.Boolean),
      loadedCertificates: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.String,
            loadTrustStore: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      vnetAddons: Schema.optional(
        Schema.Struct({
          publicEndpoint: Schema.optional(Schema.Boolean),
          publicEndpointUrl: Schema.optional(Schema.String),
        }),
      ),
      ingressSettings: Schema.optional(
        Schema.Struct({
          readTimeoutInSeconds: Schema.optional(Schema.Number),
          sendTimeoutInSeconds: Schema.optional(Schema.Number),
          sessionAffinity: Schema.optional(Schema.Literals(["Cookie", "None"])),
          sessionCookieMaxAge: Schema.optional(Schema.Number),
          backendProtocol: Schema.optional(
            Schema.Literals(["GRPC", "Default"]),
          ),
          clientAuth: Schema.optional(
            Schema.Struct({
              certificates: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        }),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
      ),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
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
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
    apiVersion: "2023-12-01",
  }),
);
export type AppsUpdateInput = typeof AppsUpdateInput.Type;

// Output Schema
export const AppsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type AppsUpdateOutput = typeof AppsUpdateOutput.Type;

// The operation
/**
 * Operation to update an exiting App.
 */
export const AppsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsUpdateInput,
  outputSchema: AppsUpdateOutput,
}));
// Input Schema
export const AppsValidateDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/validateDomain",
      apiVersion: "2023-12-01",
    }),
  );
export type AppsValidateDomainInput = typeof AppsValidateDomainInput.Type;

// Output Schema
export const AppsValidateDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  });
export type AppsValidateDomainOutput = typeof AppsValidateDomainOutput.Type;

// The operation
/**
 * Check the resource name is valid as well as not in use.
 */
export const AppsValidateDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsValidateDomainInput,
  outputSchema: AppsValidateDomainOutput,
}));
// Input Schema
export const BindingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        resourceName: Schema.optional(Schema.String),
        resourceType: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        bindingParameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        generatedProperties: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BindingsCreateOrUpdateInput =
  typeof BindingsCreateOrUpdateInput.Type;

// Output Schema
export const BindingsCreateOrUpdateOutput =
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
export type BindingsCreateOrUpdateOutput =
  typeof BindingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Binding or update an exiting Binding.
 */
export const BindingsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BindingsCreateOrUpdateInput,
    outputSchema: BindingsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const BindingsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
    apiVersion: "2023-12-01",
  }),
);
export type BindingsDeleteInput = typeof BindingsDeleteInput.Type;

// Output Schema
export const BindingsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BindingsDeleteOutput = typeof BindingsDeleteOutput.Type;

// The operation
/**
 * Operation to delete a Binding.
 */
export const BindingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsDeleteInput,
  outputSchema: BindingsDeleteOutput,
}));
// Input Schema
export const BindingsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
    apiVersion: "2023-12-01",
  }),
);
export type BindingsGetInput = typeof BindingsGetInput.Type;

// Output Schema
export const BindingsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BindingsGetOutput = typeof BindingsGetOutput.Type;

// The operation
/**
 * Get a Binding and its properties.
 */
export const BindingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsGetInput,
  outputSchema: BindingsGetOutput,
}));
// Input Schema
export const BindingsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings",
    apiVersion: "2023-12-01",
  }),
);
export type BindingsListInput = typeof BindingsListInput.Type;

// Output Schema
export const BindingsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BindingsListOutput = typeof BindingsListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in an App.
 */
export const BindingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsListInput,
  outputSchema: BindingsListOutput,
}));
// Input Schema
export const BindingsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      resourceName: Schema.optional(Schema.String),
      resourceType: Schema.optional(Schema.String),
      resourceId: Schema.optional(Schema.String),
      key: Schema.optional(Schema.String),
      bindingParameters: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      generatedProperties: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      updatedAt: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
    apiVersion: "2023-12-01",
  }),
);
export type BindingsUpdateInput = typeof BindingsUpdateInput.Type;

// Output Schema
export const BindingsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BindingsUpdateOutput = typeof BindingsUpdateOutput.Type;

// The operation
/**
 * Operation to update an exiting Binding.
 */
export const BindingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsUpdateInput,
  outputSchema: BindingsUpdateOutput,
}));
// Input Schema
export const BuildpackBindingCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        bindingType: Schema.optional(
          Schema.Literals([
            "ApplicationInsights",
            "ApacheSkyWalking",
            "AppDynamics",
            "Dynatrace",
            "NewRelic",
            "ElasticAPM",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        launchProperties: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            secrets: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildpackBindingCreateOrUpdateInput =
  typeof BuildpackBindingCreateOrUpdateInput.Type;

// Output Schema
export const BuildpackBindingCreateOrUpdateOutput =
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
export type BuildpackBindingCreateOrUpdateOutput =
  typeof BuildpackBindingCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a buildpack binding.
 */
export const BuildpackBindingCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildpackBindingCreateOrUpdateInput,
    outputSchema: BuildpackBindingCreateOrUpdateOutput,
  }));
// Input Schema
export const BuildpackBindingDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildpackBindingDeleteInput =
  typeof BuildpackBindingDeleteInput.Type;

// Output Schema
export const BuildpackBindingDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BuildpackBindingDeleteOutput =
  typeof BuildpackBindingDeleteOutput.Type;

// The operation
/**
 * Operation to delete a Buildpack Binding
 */
export const BuildpackBindingDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildpackBindingDeleteInput,
    outputSchema: BuildpackBindingDeleteOutput,
  }),
);
// Input Schema
export const BuildpackBindingGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildpackBindingGetInput = typeof BuildpackBindingGetInput.Type;

// Output Schema
export const BuildpackBindingGetOutput =
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
export type BuildpackBindingGetOutput = typeof BuildpackBindingGetOutput.Type;

// The operation
/**
 * Get a buildpack binding by name.
 */
export const BuildpackBindingGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BuildpackBindingGetInput,
  outputSchema: BuildpackBindingGetOutput,
}));
// Input Schema
export const BuildpackBindingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildpackBindingListInput = typeof BuildpackBindingListInput.Type;

// Output Schema
export const BuildpackBindingListOutput =
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
export type BuildpackBindingListOutput = typeof BuildpackBindingListOutput.Type;

// The operation
/**
 * Handles requests to list all buildpack bindings in a builder.
 */
export const BuildpackBindingList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildpackBindingListInput,
    outputSchema: BuildpackBindingListOutput,
  }),
);
// Input Schema
export const BuildpackBindingListForClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildpackBindings",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildpackBindingListForClusterInput =
  typeof BuildpackBindingListForClusterInput.Type;

// Output Schema
export const BuildpackBindingListForClusterOutput =
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
export type BuildpackBindingListForClusterOutput =
  typeof BuildpackBindingListForClusterOutput.Type;

// The operation
/**
 * Get collection of buildpack bindings under all builders.
 */
export const BuildpackBindingListForCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildpackBindingListForClusterInput,
    outputSchema: BuildpackBindingListForClusterOutput,
  }));
// Input Schema
export const BuildServiceAgentPoolGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/agentPools/{agentPoolName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceAgentPoolGetInput =
  typeof BuildServiceAgentPoolGetInput.Type;

// Output Schema
export const BuildServiceAgentPoolGetOutput =
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
export type BuildServiceAgentPoolGetOutput =
  typeof BuildServiceAgentPoolGetOutput.Type;

// The operation
/**
 * Get build service agent pool.
 */
export const BuildServiceAgentPoolGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceAgentPoolGetInput,
    outputSchema: BuildServiceAgentPoolGetOutput,
  }),
);
// Input Schema
export const BuildServiceAgentPoolListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/agentPools",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceAgentPoolListInput =
  typeof BuildServiceAgentPoolListInput.Type;

// Output Schema
export const BuildServiceAgentPoolListOutput =
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
export type BuildServiceAgentPoolListOutput =
  typeof BuildServiceAgentPoolListOutput.Type;

// The operation
/**
 * List build service agent pool.
 */
export const BuildServiceAgentPoolList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceAgentPoolListInput,
    outputSchema: BuildServiceAgentPoolListOutput,
  }),
);
// Input Schema
export const BuildServiceAgentPoolUpdatePutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        poolSize: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/agentPools/{agentPoolName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceAgentPoolUpdatePutInput =
  typeof BuildServiceAgentPoolUpdatePutInput.Type;

// Output Schema
export const BuildServiceAgentPoolUpdatePutOutput =
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
export type BuildServiceAgentPoolUpdatePutOutput =
  typeof BuildServiceAgentPoolUpdatePutOutput.Type;

// The operation
/**
 * Create or update build service agent pool.
 */
export const BuildServiceAgentPoolUpdatePut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceAgentPoolUpdatePutInput,
    outputSchema: BuildServiceAgentPoolUpdatePutOutput,
  }));
// Input Schema
export const BuildServiceBuilderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        stack: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
        buildpackGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              buildpacks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceBuilderCreateOrUpdateInput =
  typeof BuildServiceBuilderCreateOrUpdateInput.Type;

// Output Schema
export const BuildServiceBuilderCreateOrUpdateOutput =
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
export type BuildServiceBuilderCreateOrUpdateOutput =
  typeof BuildServiceBuilderCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a KPack builder.
 */
export const BuildServiceBuilderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceBuilderCreateOrUpdateInput,
    outputSchema: BuildServiceBuilderCreateOrUpdateOutput,
  }));
// Input Schema
export const BuildServiceBuilderDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceBuilderDeleteInput =
  typeof BuildServiceBuilderDeleteInput.Type;

// Output Schema
export const BuildServiceBuilderDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BuildServiceBuilderDeleteOutput =
  typeof BuildServiceBuilderDeleteOutput.Type;

// The operation
/**
 * Delete a KPack builder.
 */
export const BuildServiceBuilderDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceBuilderDeleteInput,
    outputSchema: BuildServiceBuilderDeleteOutput,
  }),
);
// Input Schema
export const BuildServiceBuilderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceBuilderGetInput =
  typeof BuildServiceBuilderGetInput.Type;

// Output Schema
export const BuildServiceBuilderGetOutput =
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
export type BuildServiceBuilderGetOutput =
  typeof BuildServiceBuilderGetOutput.Type;

// The operation
/**
 * Get a KPack builder.
 */
export const BuildServiceBuilderGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceBuilderGetInput,
    outputSchema: BuildServiceBuilderGetOutput,
  }),
);
// Input Schema
export const BuildServiceBuilderListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceBuilderListInput =
  typeof BuildServiceBuilderListInput.Type;

// Output Schema
export const BuildServiceBuilderListOutput =
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
export type BuildServiceBuilderListOutput =
  typeof BuildServiceBuilderListOutput.Type;

// The operation
/**
 * List KPack builders result.
 */
export const BuildServiceBuilderList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceBuilderListInput,
    outputSchema: BuildServiceBuilderListOutput,
  }),
);
// Input Schema
export const BuildServiceBuilderListDeploymentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/listUsingDeployments",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceBuilderListDeploymentsInput =
  typeof BuildServiceBuilderListDeploymentsInput.Type;

// Output Schema
export const BuildServiceBuilderListDeploymentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(Schema.String)),
  });
export type BuildServiceBuilderListDeploymentsOutput =
  typeof BuildServiceBuilderListDeploymentsOutput.Type;

// The operation
/**
 * List deployments that are using the builder.
 */
export const BuildServiceBuilderListDeployments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceBuilderListDeploymentsInput,
    outputSchema: BuildServiceBuilderListDeploymentsOutput,
  }));
// Input Schema
export const BuildServiceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        containerRegistry: Schema.optional(Schema.String),
        kPackVersion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceCreateOrUpdateInput =
  typeof BuildServiceCreateOrUpdateInput.Type;

// Output Schema
export const BuildServiceCreateOrUpdateOutput =
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
export type BuildServiceCreateOrUpdateOutput =
  typeof BuildServiceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a build service resource.
 */
export const BuildServiceCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceCreateOrUpdateInput,
    outputSchema: BuildServiceCreateOrUpdateOutput,
  }),
);
// Input Schema
export const BuildServiceCreateOrUpdateBuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        relativePath: Schema.optional(Schema.String),
        builder: Schema.optional(Schema.String),
        agentPool: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        apms: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
            }),
          ),
        ),
        certificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
            }),
          ),
        ),
        triggeredBuildResult: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            provisioningState: Schema.optional(
              Schema.Literals([
                "Queuing",
                "Building",
                "Succeeded",
                "Failed",
                "Deleting",
                "Canceled",
              ]),
            ),
            image: Schema.optional(Schema.String),
            lastTransitionTime: Schema.optional(Schema.String),
            lastTransitionReason: Schema.optional(Schema.String),
            lastTransitionStatus: Schema.optional(Schema.String),
          }),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceCreateOrUpdateBuildInput =
  typeof BuildServiceCreateOrUpdateBuildInput.Type;

// Output Schema
export const BuildServiceCreateOrUpdateBuildOutput =
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
export type BuildServiceCreateOrUpdateBuildOutput =
  typeof BuildServiceCreateOrUpdateBuildOutput.Type;

// The operation
/**
 * Create or update a KPack build.
 */
export const BuildServiceCreateOrUpdateBuild =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceCreateOrUpdateBuildInput,
    outputSchema: BuildServiceCreateOrUpdateBuildOutput,
  }));
// Input Schema
export const BuildServiceDeleteBuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceDeleteBuildInput =
  typeof BuildServiceDeleteBuildInput.Type;

// Output Schema
export const BuildServiceDeleteBuildOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BuildServiceDeleteBuildOutput =
  typeof BuildServiceDeleteBuildOutput.Type;

// The operation
/**
 * delete a KPack build.
 */
export const BuildServiceDeleteBuild = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceDeleteBuildInput,
    outputSchema: BuildServiceDeleteBuildOutput,
  }),
);
// Input Schema
export const BuildServiceGetBuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceGetBuildInput = typeof BuildServiceGetBuildInput.Type;

// Output Schema
export const BuildServiceGetBuildOutput =
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
export type BuildServiceGetBuildOutput = typeof BuildServiceGetBuildOutput.Type;

// The operation
/**
 * Get a KPack build.
 */
export const BuildServiceGetBuild = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceGetBuildInput,
    outputSchema: BuildServiceGetBuildOutput,
  }),
);
// Input Schema
export const BuildServiceGetBuildResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}/results/{buildResultName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceGetBuildResultInput =
  typeof BuildServiceGetBuildResultInput.Type;

// Output Schema
export const BuildServiceGetBuildResultOutput =
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
export type BuildServiceGetBuildResultOutput =
  typeof BuildServiceGetBuildResultOutput.Type;

// The operation
/**
 * Get a KPack build result.
 */
export const BuildServiceGetBuildResult = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceGetBuildResultInput,
    outputSchema: BuildServiceGetBuildResultOutput,
  }),
);
// Input Schema
export const BuildServiceGetBuildResultLogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}/results/{buildResultName}/getLogFileUrl",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceGetBuildResultLogInput =
  typeof BuildServiceGetBuildResultLogInput.Type;

// Output Schema
export const BuildServiceGetBuildResultLogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blobUrl: Schema.optional(Schema.String),
  });
export type BuildServiceGetBuildResultLogOutput =
  typeof BuildServiceGetBuildResultLogOutput.Type;

// The operation
/**
 * Get a KPack build result log download URL.
 */
export const BuildServiceGetBuildResultLog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetBuildResultLogInput,
    outputSchema: BuildServiceGetBuildResultLogOutput,
  }));
// Input Schema
export const BuildServiceGetBuildServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceGetBuildServiceInput =
  typeof BuildServiceGetBuildServiceInput.Type;

// Output Schema
export const BuildServiceGetBuildServiceOutput =
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
export type BuildServiceGetBuildServiceOutput =
  typeof BuildServiceGetBuildServiceOutput.Type;

// The operation
/**
 * Get a build service resource.
 */
export const BuildServiceGetBuildService = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceGetBuildServiceInput,
    outputSchema: BuildServiceGetBuildServiceOutput,
  }),
);
// Input Schema
export const BuildServiceGetResourceUploadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/getResourceUploadUrl",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceGetResourceUploadUrlInput =
  typeof BuildServiceGetResourceUploadUrlInput.Type;

// Output Schema
export const BuildServiceGetResourceUploadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    uploadUrl: Schema.optional(Schema.String),
  });
export type BuildServiceGetResourceUploadUrlOutput =
  typeof BuildServiceGetResourceUploadUrlOutput.Type;

// The operation
/**
 * Get an resource upload URL for build service, which may be artifacts or source archive.
 */
export const BuildServiceGetResourceUploadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetResourceUploadUrlInput,
    outputSchema: BuildServiceGetResourceUploadUrlOutput,
  }));
// Input Schema
export const BuildServiceGetSupportedBuildpackInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedBuildpacks/{buildpackName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceGetSupportedBuildpackInput =
  typeof BuildServiceGetSupportedBuildpackInput.Type;

// Output Schema
export const BuildServiceGetSupportedBuildpackOutput =
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
export type BuildServiceGetSupportedBuildpackOutput =
  typeof BuildServiceGetSupportedBuildpackOutput.Type;

// The operation
/**
 * Get the supported buildpack resource.
 */
export const BuildServiceGetSupportedBuildpack =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetSupportedBuildpackInput,
    outputSchema: BuildServiceGetSupportedBuildpackOutput,
  }));
// Input Schema
export const BuildServiceGetSupportedStackInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedStacks/{stackName}",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceGetSupportedStackInput =
  typeof BuildServiceGetSupportedStackInput.Type;

// Output Schema
export const BuildServiceGetSupportedStackOutput =
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
export type BuildServiceGetSupportedStackOutput =
  typeof BuildServiceGetSupportedStackOutput.Type;

// The operation
/**
 * Get the supported stack resource.
 */
export const BuildServiceGetSupportedStack =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetSupportedStackInput,
    outputSchema: BuildServiceGetSupportedStackOutput,
  }));
// Input Schema
export const BuildServiceListBuildResultsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}/results",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceListBuildResultsInput =
  typeof BuildServiceListBuildResultsInput.Type;

// Output Schema
export const BuildServiceListBuildResultsOutput =
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
export type BuildServiceListBuildResultsOutput =
  typeof BuildServiceListBuildResultsOutput.Type;

// The operation
/**
 * List KPack build results.
 */
export const BuildServiceListBuildResults =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListBuildResultsInput,
    outputSchema: BuildServiceListBuildResultsOutput,
  }));
// Input Schema
export const BuildServiceListBuildsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceListBuildsInput =
  typeof BuildServiceListBuildsInput.Type;

// Output Schema
export const BuildServiceListBuildsOutput =
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
export type BuildServiceListBuildsOutput =
  typeof BuildServiceListBuildsOutput.Type;

// The operation
/**
 * List KPack builds.
 */
export const BuildServiceListBuilds = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceListBuildsInput,
    outputSchema: BuildServiceListBuildsOutput,
  }),
);
// Input Schema
export const BuildServiceListBuildServicesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceListBuildServicesInput =
  typeof BuildServiceListBuildServicesInput.Type;

// Output Schema
export const BuildServiceListBuildServicesOutput =
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
export type BuildServiceListBuildServicesOutput =
  typeof BuildServiceListBuildServicesOutput.Type;

// The operation
/**
 * List build services resource.
 */
export const BuildServiceListBuildServices =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListBuildServicesInput,
    outputSchema: BuildServiceListBuildServicesOutput,
  }));
// Input Schema
export const BuildServiceListSupportedBuildpacksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedBuildpacks",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceListSupportedBuildpacksInput =
  typeof BuildServiceListSupportedBuildpacksInput.Type;

// Output Schema
export const BuildServiceListSupportedBuildpacksOutput =
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
export type BuildServiceListSupportedBuildpacksOutput =
  typeof BuildServiceListSupportedBuildpacksOutput.Type;

// The operation
/**
 * Get all supported buildpacks.
 */
export const BuildServiceListSupportedBuildpacks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListSupportedBuildpacksInput,
    outputSchema: BuildServiceListSupportedBuildpacksOutput,
  }));
// Input Schema
export const BuildServiceListSupportedStacksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedStacks",
      apiVersion: "2023-12-01",
    }),
  );
export type BuildServiceListSupportedStacksInput =
  typeof BuildServiceListSupportedStacksInput.Type;

// Output Schema
export const BuildServiceListSupportedStacksOutput =
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
export type BuildServiceListSupportedStacksOutput =
  typeof BuildServiceListSupportedStacksOutput.Type;

// The operation
/**
 * Get all supported stacks.
 */
export const BuildServiceListSupportedStacks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListSupportedStacksInput,
    outputSchema: BuildServiceListSupportedStacksOutput,
  }));
// Input Schema
export const CertificatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        thumbprint: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        issuedDate: Schema.optional(Schema.String),
        expirationDate: Schema.optional(Schema.String),
        activateDate: Schema.optional(Schema.String),
        subjectName: Schema.optional(Schema.String),
        dnsNames: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CertificatesCreateOrUpdateInput =
  typeof CertificatesCreateOrUpdateInput.Type;

// Output Schema
export const CertificatesCreateOrUpdateOutput =
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
export type CertificatesCreateOrUpdateOutput =
  typeof CertificatesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update certificate resource.
 */
export const CertificatesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificatesCreateOrUpdateInput,
    outputSchema: CertificatesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const CertificatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CertificatesDeleteInput = typeof CertificatesDeleteInput.Type;

// Output Schema
export const CertificatesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CertificatesDeleteOutput = typeof CertificatesDeleteOutput.Type;

// The operation
/**
 * Delete the certificate resource.
 */
export const CertificatesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesDeleteInput,
  outputSchema: CertificatesDeleteOutput,
}));
// Input Schema
export const CertificatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
    apiVersion: "2023-12-01",
  }),
);
export type CertificatesGetInput = typeof CertificatesGetInput.Type;

// Output Schema
export const CertificatesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CertificatesGetOutput = typeof CertificatesGetOutput.Type;

// The operation
/**
 * Get the certificate resource.
 */
export const CertificatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesGetInput,
  outputSchema: CertificatesGetOutput,
}));
// Input Schema
export const CertificatesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates",
    apiVersion: "2023-12-01",
  }),
);
export type CertificatesListInput = typeof CertificatesListInput.Type;

// Output Schema
export const CertificatesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type CertificatesListOutput = typeof CertificatesListOutput.Type;

// The operation
/**
 * List all the certificates of one user.
 */
export const CertificatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesListInput,
  outputSchema: CertificatesListOutput,
}));
// Input Schema
export const ConfigServersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/default",
    apiVersion: "2023-12-01",
  }),
);
export type ConfigServersGetInput = typeof ConfigServersGetInput.Type;

// Output Schema
export const ConfigServersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type ConfigServersGetOutput = typeof ConfigServersGetOutput.Type;

// The operation
/**
 * Get the config server and its properties.
 */
export const ConfigServersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigServersGetInput,
  outputSchema: ConfigServersGetOutput,
}));
// Input Schema
export const ConfigServersUpdatePatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotAvailable",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        configServer: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      pattern: Schema.optional(Schema.Array(Schema.String)),
                      uri: Schema.String,
                      label: Schema.optional(Schema.String),
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                uri: Schema.String,
                label: Schema.optional(Schema.String),
                searchPaths: Schema.optional(Schema.Array(Schema.String)),
                username: Schema.optional(Schema.String),
                password: Schema.optional(SensitiveString),
                hostKey: Schema.optional(Schema.String),
                hostKeyAlgorithm: Schema.optional(Schema.String),
                privateKey: Schema.optional(SensitiveString),
                strictHostKeyChecking: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/default",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigServersUpdatePatchInput =
  typeof ConfigServersUpdatePatchInput.Type;

// Output Schema
export const ConfigServersUpdatePatchOutput =
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
export type ConfigServersUpdatePatchOutput =
  typeof ConfigServersUpdatePatchOutput.Type;

// The operation
/**
 * Update the config server.
 */
export const ConfigServersUpdatePatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigServersUpdatePatchInput,
    outputSchema: ConfigServersUpdatePatchOutput,
  }),
);
// Input Schema
export const ConfigServersUpdatePutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotAvailable",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        configServer: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      pattern: Schema.optional(Schema.Array(Schema.String)),
                      uri: Schema.String,
                      label: Schema.optional(Schema.String),
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                uri: Schema.String,
                label: Schema.optional(Schema.String),
                searchPaths: Schema.optional(Schema.Array(Schema.String)),
                username: Schema.optional(Schema.String),
                password: Schema.optional(SensitiveString),
                hostKey: Schema.optional(Schema.String),
                hostKeyAlgorithm: Schema.optional(Schema.String),
                privateKey: Schema.optional(SensitiveString),
                strictHostKeyChecking: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/default",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigServersUpdatePutInput =
  typeof ConfigServersUpdatePutInput.Type;

// Output Schema
export const ConfigServersUpdatePutOutput =
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
export type ConfigServersUpdatePutOutput =
  typeof ConfigServersUpdatePutOutput.Type;

// The operation
/**
 * Update the config server.
 */
export const ConfigServersUpdatePut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigServersUpdatePutInput,
    outputSchema: ConfigServersUpdatePutOutput,
  }),
);
// Input Schema
export const ConfigServersValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitProperty: Schema.optional(
      Schema.Struct({
        repositories: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              pattern: Schema.optional(Schema.Array(Schema.String)),
              uri: Schema.String,
              label: Schema.optional(Schema.String),
              searchPaths: Schema.optional(Schema.Array(Schema.String)),
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              hostKey: Schema.optional(Schema.String),
              hostKeyAlgorithm: Schema.optional(Schema.String),
              privateKey: Schema.optional(SensitiveString),
              strictHostKeyChecking: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        uri: Schema.String,
        label: Schema.optional(Schema.String),
        searchPaths: Schema.optional(Schema.Array(Schema.String)),
        username: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
        hostKey: Schema.optional(Schema.String),
        hostKeyAlgorithm: Schema.optional(Schema.String),
        privateKey: Schema.optional(SensitiveString),
        strictHostKeyChecking: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/validate",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigServersValidateInput = typeof ConfigServersValidateInput.Type;

// Output Schema
export const ConfigServersValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    details: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          uri: Schema.optional(Schema.String),
          messages: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  });
export type ConfigServersValidateOutput =
  typeof ConfigServersValidateOutput.Type;

// The operation
/**
 * Check if the config server settings are valid.
 */
export const ConfigServersValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigServersValidateInput,
    outputSchema: ConfigServersValidateOutput,
  }),
);
// Input Schema
export const ConfigurationServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        generation: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
            instanceCount: Schema.optional(Schema.Number),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        settings: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      patterns: Schema.Array(Schema.String),
                      uri: Schema.String,
                      label: Schema.String,
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                      gitImplementation: Schema.optional(
                        Schema.Literals(["go-git", "libgit2"]),
                      ),
                      caCertResourceId: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigurationServicesCreateOrUpdateInput =
  typeof ConfigurationServicesCreateOrUpdateInput.Type;

// Output Schema
export const ConfigurationServicesCreateOrUpdateOutput =
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
export type ConfigurationServicesCreateOrUpdateOutput =
  typeof ConfigurationServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the default Application Configuration Service or update the existing Application Configuration Service.
 */
export const ConfigurationServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationServicesCreateOrUpdateInput,
    outputSchema: ConfigurationServicesCreateOrUpdateOutput,
  }));
// Input Schema
export const ConfigurationServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigurationServicesDeleteInput =
  typeof ConfigurationServicesDeleteInput.Type;

// Output Schema
export const ConfigurationServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConfigurationServicesDeleteOutput =
  typeof ConfigurationServicesDeleteOutput.Type;

// The operation
/**
 * Disable the default Application Configuration Service.
 */
export const ConfigurationServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationServicesDeleteInput,
    outputSchema: ConfigurationServicesDeleteOutput,
  }),
);
// Input Schema
export const ConfigurationServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigurationServicesGetInput =
  typeof ConfigurationServicesGetInput.Type;

// Output Schema
export const ConfigurationServicesGetOutput =
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
export type ConfigurationServicesGetOutput =
  typeof ConfigurationServicesGetOutput.Type;

// The operation
/**
 * Get the Application Configuration Service and its properties.
 */
export const ConfigurationServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationServicesGetInput,
    outputSchema: ConfigurationServicesGetOutput,
  }),
);
// Input Schema
export const ConfigurationServicesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigurationServicesListInput =
  typeof ConfigurationServicesListInput.Type;

// Output Schema
export const ConfigurationServicesListOutput =
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
export type ConfigurationServicesListOutput =
  typeof ConfigurationServicesListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a Service.
 */
export const ConfigurationServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationServicesListInput,
    outputSchema: ConfigurationServicesListOutput,
  }),
);
// Input Schema
export const ConfigurationServicesValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitProperty: Schema.optional(
      Schema.Struct({
        repositories: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              patterns: Schema.Array(Schema.String),
              uri: Schema.String,
              label: Schema.String,
              searchPaths: Schema.optional(Schema.Array(Schema.String)),
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              hostKey: Schema.optional(Schema.String),
              hostKeyAlgorithm: Schema.optional(Schema.String),
              privateKey: Schema.optional(SensitiveString),
              strictHostKeyChecking: Schema.optional(Schema.Boolean),
              gitImplementation: Schema.optional(
                Schema.Literals(["go-git", "libgit2"]),
              ),
              caCertResourceId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}/validate",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigurationServicesValidateInput =
  typeof ConfigurationServicesValidateInput.Type;

// Output Schema
export const ConfigurationServicesValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitPropertyValidationResult: Schema.optional(
      Schema.Struct({
        isValid: Schema.optional(Schema.Boolean),
        gitReposValidationResult: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              messages: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  });
export type ConfigurationServicesValidateOutput =
  typeof ConfigurationServicesValidateOutput.Type;

// The operation
/**
 * Check if the Application Configuration Service settings are valid.
 */
export const ConfigurationServicesValidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationServicesValidateInput,
    outputSchema: ConfigurationServicesValidateOutput,
  }));
// Input Schema
export const ConfigurationServicesValidateResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        generation: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
            instanceCount: Schema.optional(Schema.Number),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        settings: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      patterns: Schema.Array(Schema.String),
                      uri: Schema.String,
                      label: Schema.String,
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                      gitImplementation: Schema.optional(
                        Schema.Literals(["go-git", "libgit2"]),
                      ),
                      caCertResourceId: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}/validateResource",
      apiVersion: "2023-12-01",
    }),
  );
export type ConfigurationServicesValidateResourceInput =
  typeof ConfigurationServicesValidateResourceInput.Type;

// Output Schema
export const ConfigurationServicesValidateResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitPropertyValidationResult: Schema.optional(
      Schema.Struct({
        isValid: Schema.optional(Schema.Boolean),
        gitReposValidationResult: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              messages: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  });
export type ConfigurationServicesValidateResourceOutput =
  typeof ConfigurationServicesValidateResourceOutput.Type;

// The operation
/**
 * Check if the Application Configuration Service resource is valid.
 */
export const ConfigurationServicesValidateResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationServicesValidateResourceInput,
    outputSchema: ConfigurationServicesValidateResourceOutput,
  }));
// Input Schema
export const ContainerRegistriesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        credentials: Schema.Struct({
          type: Schema.String,
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ContainerRegistriesCreateOrUpdateInput =
  typeof ContainerRegistriesCreateOrUpdateInput.Type;

// Output Schema
export const ContainerRegistriesCreateOrUpdateOutput =
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
export type ContainerRegistriesCreateOrUpdateOutput =
  typeof ContainerRegistriesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update container registry resource.
 */
export const ContainerRegistriesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerRegistriesCreateOrUpdateInput,
    outputSchema: ContainerRegistriesCreateOrUpdateOutput,
  }));
// Input Schema
export const ContainerRegistriesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ContainerRegistriesDeleteInput =
  typeof ContainerRegistriesDeleteInput.Type;

// Output Schema
export const ContainerRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainerRegistriesDeleteOutput =
  typeof ContainerRegistriesDeleteOutput.Type;

// The operation
/**
 * Delete a container registry resource.
 */
export const ContainerRegistriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesDeleteInput,
    outputSchema: ContainerRegistriesDeleteOutput,
  }),
);
// Input Schema
export const ContainerRegistriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ContainerRegistriesGetInput =
  typeof ContainerRegistriesGetInput.Type;

// Output Schema
export const ContainerRegistriesGetOutput =
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
export type ContainerRegistriesGetOutput =
  typeof ContainerRegistriesGetOutput.Type;

// The operation
/**
 * Get the container registries resource.
 */
export const ContainerRegistriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesGetInput,
    outputSchema: ContainerRegistriesGetOutput,
  }),
);
// Input Schema
export const ContainerRegistriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries",
      apiVersion: "2023-12-01",
    }),
  );
export type ContainerRegistriesListInput =
  typeof ContainerRegistriesListInput.Type;

// Output Schema
export const ContainerRegistriesListOutput =
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
export type ContainerRegistriesListOutput =
  typeof ContainerRegistriesListOutput.Type;

// The operation
/**
 * List container registries resource.
 */
export const ContainerRegistriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesListInput,
    outputSchema: ContainerRegistriesListOutput,
  }),
);
// Input Schema
export const ContainerRegistriesValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    credentials: Schema.Struct({
      type: Schema.String,
    }),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Creating",
        "Updating",
        "Succeeded",
        "Failed",
        "Deleting",
        "Canceled",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}/validate",
      apiVersion: "2023-12-01",
    }),
  );
export type ContainerRegistriesValidateInput =
  typeof ContainerRegistriesValidateInput.Type;

// Output Schema
export const ContainerRegistriesValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  });
export type ContainerRegistriesValidateOutput =
  typeof ContainerRegistriesValidateOutput.Type;

// The operation
/**
 * Check if the container registry properties are valid.
 */
export const ContainerRegistriesValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesValidateInput,
    outputSchema: ContainerRegistriesValidateOutput,
  }),
);
// Input Schema
export const CustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
        appName: Schema.optional(Schema.String),
        certName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomDomainsCreateOrUpdateInput =
  typeof CustomDomainsCreateOrUpdateInput.Type;

// Output Schema
export const CustomDomainsCreateOrUpdateOutput =
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
export type CustomDomainsCreateOrUpdateOutput =
  typeof CustomDomainsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update custom domain of one lifecycle application.
 */
export const CustomDomainsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomDomainsCreateOrUpdateInput,
    outputSchema: CustomDomainsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const CustomDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomDomainsDeleteInput = typeof CustomDomainsDeleteInput.Type;

// Output Schema
export const CustomDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomDomainsDeleteOutput = typeof CustomDomainsDeleteOutput.Type;

// The operation
/**
 * Delete the custom domain of one lifecycle application.
 */
export const CustomDomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsDeleteInput,
  outputSchema: CustomDomainsDeleteOutput,
}));
// Input Schema
export const CustomDomainsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
    apiVersion: "2023-12-01",
  }),
);
export type CustomDomainsGetInput = typeof CustomDomainsGetInput.Type;

// Output Schema
export const CustomDomainsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type CustomDomainsGetOutput = typeof CustomDomainsGetOutput.Type;

// The operation
/**
 * Get the custom domain of one lifecycle application.
 */
export const CustomDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsGetInput,
  outputSchema: CustomDomainsGetOutput,
}));
// Input Schema
export const CustomDomainsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains",
    apiVersion: "2023-12-01",
  }),
);
export type CustomDomainsListInput = typeof CustomDomainsListInput.Type;

// Output Schema
export const CustomDomainsListOutput =
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
export type CustomDomainsListOutput = typeof CustomDomainsListOutput.Type;

// The operation
/**
 * List the custom domains of one lifecycle application.
 */
export const CustomDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsListInput,
  outputSchema: CustomDomainsListOutput,
}));
// Input Schema
export const CustomDomainsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
        appName: Schema.optional(Schema.String),
        certName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomDomainsUpdateInput = typeof CustomDomainsUpdateInput.Type;

// Output Schema
export const CustomDomainsUpdateOutput =
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
export type CustomDomainsUpdateOutput = typeof CustomDomainsUpdateOutput.Type;

// The operation
/**
 * Update custom domain of one lifecycle application.
 */
export const CustomDomainsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsUpdateInput,
  outputSchema: CustomDomainsUpdateOutput,
}));
// Input Schema
export const CustomizedAcceleratorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        acceleratorType: Schema.optional(
          Schema.Literals(["Accelerator", "Fragment"]),
        ),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        iconUrl: Schema.optional(Schema.String),
        acceleratorTags: Schema.optional(Schema.Array(Schema.String)),
        imports: Schema.optional(Schema.Array(Schema.String)),
        gitRepository: Schema.Struct({
          url: Schema.String,
          intervalInSeconds: Schema.optional(Schema.Number),
          branch: Schema.optional(Schema.String),
          commit: Schema.optional(Schema.String),
          gitTag: Schema.optional(Schema.String),
          authSetting: Schema.Struct({
            authType: Schema.String,
          }),
          subPath: Schema.optional(Schema.String),
        }),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomizedAcceleratorsCreateOrUpdateInput =
  typeof CustomizedAcceleratorsCreateOrUpdateInput.Type;

// Output Schema
export const CustomizedAcceleratorsCreateOrUpdateOutput =
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
export type CustomizedAcceleratorsCreateOrUpdateOutput =
  typeof CustomizedAcceleratorsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the customized accelerator.
 */
export const CustomizedAcceleratorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizedAcceleratorsCreateOrUpdateInput,
    outputSchema: CustomizedAcceleratorsCreateOrUpdateOutput,
  }));
// Input Schema
export const CustomizedAcceleratorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomizedAcceleratorsDeleteInput =
  typeof CustomizedAcceleratorsDeleteInput.Type;

// Output Schema
export const CustomizedAcceleratorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomizedAcceleratorsDeleteOutput =
  typeof CustomizedAcceleratorsDeleteOutput.Type;

// The operation
/**
 * Delete the customized accelerator.
 */
export const CustomizedAcceleratorsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizedAcceleratorsDeleteInput,
    outputSchema: CustomizedAcceleratorsDeleteOutput,
  }));
// Input Schema
export const CustomizedAcceleratorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomizedAcceleratorsGetInput =
  typeof CustomizedAcceleratorsGetInput.Type;

// Output Schema
export const CustomizedAcceleratorsGetOutput =
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
export type CustomizedAcceleratorsGetOutput =
  typeof CustomizedAcceleratorsGetOutput.Type;

// The operation
/**
 * Get the customized accelerator.
 */
export const CustomizedAcceleratorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomizedAcceleratorsGetInput,
    outputSchema: CustomizedAcceleratorsGetOutput,
  }),
);
// Input Schema
export const CustomizedAcceleratorsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomizedAcceleratorsListInput =
  typeof CustomizedAcceleratorsListInput.Type;

// Output Schema
export const CustomizedAcceleratorsListOutput =
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
export type CustomizedAcceleratorsListOutput =
  typeof CustomizedAcceleratorsListOutput.Type;

// The operation
/**
 * Handle requests to list all customized accelerators.
 */
export const CustomizedAcceleratorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomizedAcceleratorsListInput,
    outputSchema: CustomizedAcceleratorsListOutput,
  }),
);
// Input Schema
export const CustomizedAcceleratorsValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals([
        "Creating",
        "Updating",
        "Succeeded",
        "Failed",
        "Deleting",
        "Canceled",
      ]),
    ),
    acceleratorType: Schema.optional(
      Schema.Literals(["Accelerator", "Fragment"]),
    ),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    iconUrl: Schema.optional(Schema.String),
    acceleratorTags: Schema.optional(Schema.Array(Schema.String)),
    imports: Schema.optional(Schema.Array(Schema.String)),
    gitRepository: Schema.Struct({
      url: Schema.String,
      intervalInSeconds: Schema.optional(Schema.Number),
      branch: Schema.optional(Schema.String),
      commit: Schema.optional(Schema.String),
      gitTag: Schema.optional(Schema.String),
      authSetting: Schema.Struct({
        authType: Schema.String,
      }),
      subPath: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}/validate",
      apiVersion: "2023-12-01",
    }),
  );
export type CustomizedAcceleratorsValidateInput =
  typeof CustomizedAcceleratorsValidateInput.Type;

// Output Schema
export const CustomizedAcceleratorsValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.Literals(["Valid", "Invalid"])),
    errorMessage: Schema.optional(Schema.String),
  });
export type CustomizedAcceleratorsValidateOutput =
  typeof CustomizedAcceleratorsValidateOutput.Type;

// The operation
/**
 * Check the customized accelerator are valid.
 */
export const CustomizedAcceleratorsValidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizedAcceleratorsValidateInput,
    outputSchema: CustomizedAcceleratorsValidateOutput,
  }));
// Input Schema
export const DeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Struct({
            type: Schema.String,
            version: Schema.optional(Schema.String),
          }),
        ),
        deploymentSettings: Schema.optional(
          Schema.Struct({
            resourceRequests: Schema.optional(
              Schema.Struct({
                cpu: Schema.optional(Schema.String),
                memory: Schema.optional(Schema.String),
              }),
            ),
            environmentVariables: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            apms: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  resourceId: Schema.String,
                }),
              ),
            ),
            addonConfigs: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            livenessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            readinessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            startupProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            containerProbeSettings: Schema.optional(
              Schema.Struct({
                disableProbe: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Creating", "Updating", "Succeeded", "Failed"]),
        ),
        status: Schema.optional(Schema.Literals(["Stopped", "Running"])),
        active: Schema.optional(Schema.Boolean),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              discoveryStatus: Schema.optional(Schema.String),
              startTime: Schema.optional(Schema.String),
              zone: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsCreateOrUpdateInput =
  typeof DeploymentsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type DeploymentsCreateOrUpdateOutput =
  typeof DeploymentsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Deployment or update an exiting Deployment.
 */
export const DeploymentsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsCreateOrUpdateInput,
    outputSchema: DeploymentsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DeploymentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
    apiVersion: "2023-12-01",
  }),
);
export type DeploymentsDeleteInput = typeof DeploymentsDeleteInput.Type;

// Output Schema
export const DeploymentsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsDeleteOutput = typeof DeploymentsDeleteOutput.Type;

// The operation
/**
 * Operation to delete a Deployment.
 */
export const DeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsDeleteInput,
  outputSchema: DeploymentsDeleteOutput,
}));
// Input Schema
export const DeploymentsDisableRemoteDebuggingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/disableRemoteDebugging",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsDisableRemoteDebuggingInput =
  typeof DeploymentsDisableRemoteDebuggingInput.Type;

// Output Schema
export const DeploymentsDisableRemoteDebuggingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
  });
export type DeploymentsDisableRemoteDebuggingOutput =
  typeof DeploymentsDisableRemoteDebuggingOutput.Type;

// The operation
/**
 * Disable remote debugging.
 */
export const DeploymentsDisableRemoteDebugging =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsDisableRemoteDebuggingInput,
    outputSchema: DeploymentsDisableRemoteDebuggingOutput,
  }));
// Input Schema
export const DeploymentsEnableRemoteDebuggingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/enableRemoteDebugging",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsEnableRemoteDebuggingInput =
  typeof DeploymentsEnableRemoteDebuggingInput.Type;

// Output Schema
export const DeploymentsEnableRemoteDebuggingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
  });
export type DeploymentsEnableRemoteDebuggingOutput =
  typeof DeploymentsEnableRemoteDebuggingOutput.Type;

// The operation
/**
 * Enable remote debugging.
 */
export const DeploymentsEnableRemoteDebugging =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsEnableRemoteDebuggingInput,
    outputSchema: DeploymentsEnableRemoteDebuggingOutput,
  }));
// Input Schema
export const DeploymentsGenerateHeapDumpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appInstance: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/generateHeapDump",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsGenerateHeapDumpInput =
  typeof DeploymentsGenerateHeapDumpInput.Type;

// Output Schema
export const DeploymentsGenerateHeapDumpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsGenerateHeapDumpOutput =
  typeof DeploymentsGenerateHeapDumpOutput.Type;

// The operation
/**
 * Generate Heap Dump
 */
export const DeploymentsGenerateHeapDump = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsGenerateHeapDumpInput,
    outputSchema: DeploymentsGenerateHeapDumpOutput,
  }),
);
// Input Schema
export const DeploymentsGenerateThreadDumpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appInstance: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/generateThreadDump",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsGenerateThreadDumpInput =
  typeof DeploymentsGenerateThreadDumpInput.Type;

// Output Schema
export const DeploymentsGenerateThreadDumpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsGenerateThreadDumpOutput =
  typeof DeploymentsGenerateThreadDumpOutput.Type;

// The operation
/**
 * Generate Thread Dump
 */
export const DeploymentsGenerateThreadDump =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsGenerateThreadDumpInput,
    outputSchema: DeploymentsGenerateThreadDumpOutput,
  }));
// Input Schema
export const DeploymentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
    apiVersion: "2023-12-01",
  }),
);
export type DeploymentsGetInput = typeof DeploymentsGetInput.Type;

// Output Schema
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
});
export type DeploymentsGetOutput = typeof DeploymentsGetOutput.Type;

// The operation
/**
 * Get a Deployment and its properties.
 */
export const DeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsGetInput,
  outputSchema: DeploymentsGetOutput,
}));
// Input Schema
export const DeploymentsGetLogFileUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getLogFileUrl",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsGetLogFileUrlInput =
  typeof DeploymentsGetLogFileUrlInput.Type;

// Output Schema
export const DeploymentsGetLogFileUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export type DeploymentsGetLogFileUrlOutput =
  typeof DeploymentsGetLogFileUrlOutput.Type;

// The operation
/**
 * Get deployment log file URL
 */
export const DeploymentsGetLogFileUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsGetLogFileUrlInput,
    outputSchema: DeploymentsGetLogFileUrlOutput,
  }),
);
// Input Schema
export const DeploymentsGetRemoteDebuggingConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getRemoteDebuggingConfig",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsGetRemoteDebuggingConfigInput =
  typeof DeploymentsGetRemoteDebuggingConfigInput.Type;

// Output Schema
export const DeploymentsGetRemoteDebuggingConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
  });
export type DeploymentsGetRemoteDebuggingConfigOutput =
  typeof DeploymentsGetRemoteDebuggingConfigOutput.Type;

// The operation
/**
 * Get remote debugging config.
 */
export const DeploymentsGetRemoteDebuggingConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsGetRemoteDebuggingConfigInput,
    outputSchema: DeploymentsGetRemoteDebuggingConfigOutput,
  }));
// Input Schema
export const DeploymentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments",
    apiVersion: "2023-12-01",
  }),
);
export type DeploymentsListInput = typeof DeploymentsListInput.Type;

// Output Schema
export const DeploymentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type DeploymentsListOutput = typeof DeploymentsListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in an App.
 *
 * @param version - Version of the deployments to be listed
 */
export const DeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListInput,
  outputSchema: DeploymentsListOutput,
}));
// Input Schema
export const DeploymentsListForClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/deployments",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsListForClusterInput =
  typeof DeploymentsListForClusterInput.Type;

// Output Schema
export const DeploymentsListForClusterOutput =
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
export type DeploymentsListForClusterOutput =
  typeof DeploymentsListForClusterOutput.Type;

// The operation
/**
 * List deployments for a certain service
 *
 * @param version - Version of the deployments to be listed
 * @param $expand - The expand expression to apply on the operation.
 */
export const DeploymentsListForCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsListForClusterInput,
    outputSchema: DeploymentsListForClusterOutput,
  }),
);
// Input Schema
export const DeploymentsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/restart",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsRestartInput = typeof DeploymentsRestartInput.Type;

// Output Schema
export const DeploymentsRestartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsRestartOutput = typeof DeploymentsRestartOutput.Type;

// The operation
/**
 * Restart the deployment.
 */
export const DeploymentsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsRestartInput,
  outputSchema: DeploymentsRestartOutput,
}));
// Input Schema
export const DeploymentsStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/start",
    apiVersion: "2023-12-01",
  }),
);
export type DeploymentsStartInput = typeof DeploymentsStartInput.Type;

// Output Schema
export const DeploymentsStartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsStartOutput = typeof DeploymentsStartOutput.Type;

// The operation
/**
 * Start the deployment.
 */
export const DeploymentsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsStartInput,
  outputSchema: DeploymentsStartOutput,
}));
// Input Schema
export const DeploymentsStartJFRInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appInstance: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/startJFR",
      apiVersion: "2023-12-01",
    }),
  );
export type DeploymentsStartJFRInput = typeof DeploymentsStartJFRInput.Type;

// Output Schema
export const DeploymentsStartJFROutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsStartJFROutput = typeof DeploymentsStartJFROutput.Type;

// The operation
/**
 * Start JFR
 */
export const DeploymentsStartJFR = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsStartJFRInput,
  outputSchema: DeploymentsStartJFROutput,
}));
// Input Schema
export const DeploymentsStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/stop",
    apiVersion: "2023-12-01",
  }),
);
export type DeploymentsStopInput = typeof DeploymentsStopInput.Type;

// Output Schema
export const DeploymentsStopOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsStopOutput = typeof DeploymentsStopOutput.Type;

// The operation
/**
 * Stop the deployment.
 */
export const DeploymentsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsStopInput,
  outputSchema: DeploymentsStopOutput,
}));
// Input Schema
export const DeploymentsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Struct({
            type: Schema.String,
            version: Schema.optional(Schema.String),
          }),
        ),
        deploymentSettings: Schema.optional(
          Schema.Struct({
            resourceRequests: Schema.optional(
              Schema.Struct({
                cpu: Schema.optional(Schema.String),
                memory: Schema.optional(Schema.String),
              }),
            ),
            environmentVariables: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            apms: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  resourceId: Schema.String,
                }),
              ),
            ),
            addonConfigs: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            livenessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            readinessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            startupProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            containerProbeSettings: Schema.optional(
              Schema.Struct({
                disableProbe: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Creating", "Updating", "Succeeded", "Failed"]),
        ),
        status: Schema.optional(Schema.Literals(["Stopped", "Running"])),
        active: Schema.optional(Schema.Boolean),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              discoveryStatus: Schema.optional(Schema.String),
              startTime: Schema.optional(Schema.String),
              zone: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
    apiVersion: "2023-12-01",
  }),
);
export type DeploymentsUpdateInput = typeof DeploymentsUpdateInput.Type;

// Output Schema
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
  });
export type DeploymentsUpdateOutput = typeof DeploymentsUpdateOutput.Type;

// The operation
/**
 * Operation to update an exiting Deployment.
 */
export const DeploymentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsUpdateInput,
  outputSchema: DeploymentsUpdateOutput,
}));
// Input Schema
export const DevToolPortalsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        components: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              resourceRequests: Schema.optional(
                Schema.Struct({
                  cpu: Schema.optional(Schema.String),
                  memory: Schema.optional(Schema.String),
                  instanceCount: Schema.optional(Schema.Number),
                }),
              ),
              instances: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    status: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        ssoProperties: Schema.optional(
          Schema.Struct({
            scopes: Schema.optional(Schema.Array(Schema.String)),
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
            metadataUrl: Schema.optional(Schema.String),
          }),
        ),
        features: Schema.optional(
          Schema.Struct({
            applicationAccelerator: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                route: Schema.optional(Schema.String),
              }),
            ),
            applicationLiveView: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                route: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/DevToolPortals/{devToolPortalName}",
      apiVersion: "2023-12-01",
    }),
  );
export type DevToolPortalsCreateOrUpdateInput =
  typeof DevToolPortalsCreateOrUpdateInput.Type;

// Output Schema
export const DevToolPortalsCreateOrUpdateOutput =
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
export type DevToolPortalsCreateOrUpdateOutput =
  typeof DevToolPortalsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the default Dev Tool Portal or update the existing Dev Tool Portal.
 */
export const DevToolPortalsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevToolPortalsCreateOrUpdateInput,
    outputSchema: DevToolPortalsCreateOrUpdateOutput,
  }));
// Input Schema
export const DevToolPortalsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/DevToolPortals/{devToolPortalName}",
      apiVersion: "2023-12-01",
    }),
  );
export type DevToolPortalsDeleteInput = typeof DevToolPortalsDeleteInput.Type;

// Output Schema
export const DevToolPortalsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DevToolPortalsDeleteOutput = typeof DevToolPortalsDeleteOutput.Type;

// The operation
/**
 * Disable the default Dev Tool Portal.
 */
export const DevToolPortalsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevToolPortalsDeleteInput,
    outputSchema: DevToolPortalsDeleteOutput,
  }),
);
// Input Schema
export const DevToolPortalsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/DevToolPortals/{devToolPortalName}",
    apiVersion: "2023-12-01",
  }),
);
export type DevToolPortalsGetInput = typeof DevToolPortalsGetInput.Type;

// Output Schema
export const DevToolPortalsGetOutput =
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
export type DevToolPortalsGetOutput = typeof DevToolPortalsGetOutput.Type;

// The operation
/**
 * Get the Application Live  and its properties.
 */
export const DevToolPortalsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevToolPortalsGetInput,
  outputSchema: DevToolPortalsGetOutput,
}));
// Input Schema
export const DevToolPortalsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/devToolPortals",
      apiVersion: "2023-12-01",
    }),
  );
export type DevToolPortalsListInput = typeof DevToolPortalsListInput.Type;

// Output Schema
export const DevToolPortalsListOutput =
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
export type DevToolPortalsListOutput = typeof DevToolPortalsListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a Service.
 */
export const DevToolPortalsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevToolPortalsListInput,
  outputSchema: DevToolPortalsListOutput,
}));
// Input Schema
export const GatewayCustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayCustomDomainsCreateOrUpdateInput =
  typeof GatewayCustomDomainsCreateOrUpdateInput.Type;

// Output Schema
export const GatewayCustomDomainsCreateOrUpdateOutput =
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
export type GatewayCustomDomainsCreateOrUpdateOutput =
  typeof GatewayCustomDomainsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the Spring Cloud Gateway custom domain.
 */
export const GatewayCustomDomainsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GatewayCustomDomainsCreateOrUpdateInput,
    outputSchema: GatewayCustomDomainsCreateOrUpdateOutput,
  }));
// Input Schema
export const GatewayCustomDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayCustomDomainsDeleteInput =
  typeof GatewayCustomDomainsDeleteInput.Type;

// Output Schema
export const GatewayCustomDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GatewayCustomDomainsDeleteOutput =
  typeof GatewayCustomDomainsDeleteOutput.Type;

// The operation
/**
 * Delete the Spring Cloud Gateway custom domain.
 */
export const GatewayCustomDomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayCustomDomainsDeleteInput,
    outputSchema: GatewayCustomDomainsDeleteOutput,
  }),
);
// Input Schema
export const GatewayCustomDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayCustomDomainsGetInput =
  typeof GatewayCustomDomainsGetInput.Type;

// Output Schema
export const GatewayCustomDomainsGetOutput =
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
export type GatewayCustomDomainsGetOutput =
  typeof GatewayCustomDomainsGetOutput.Type;

// The operation
/**
 * Get the Spring Cloud Gateway custom domain.
 */
export const GatewayCustomDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayCustomDomainsGetInput,
    outputSchema: GatewayCustomDomainsGetOutput,
  }),
);
// Input Schema
export const GatewayCustomDomainsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayCustomDomainsListInput =
  typeof GatewayCustomDomainsListInput.Type;

// Output Schema
export const GatewayCustomDomainsListOutput =
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
export type GatewayCustomDomainsListOutput =
  typeof GatewayCustomDomainsListOutput.Type;

// The operation
/**
 * Handle requests to list all Spring Cloud Gateway custom domains.
 */
export const GatewayCustomDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayCustomDomainsListInput,
    outputSchema: GatewayCustomDomainsListOutput,
  }),
);
// Input Schema
export const GatewayRouteConfigsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        appResourceId: Schema.optional(Schema.String),
        openApi: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
          }),
        ),
        protocol: Schema.optional(Schema.Literals(["HTTP", "HTTPS"])),
        routes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              title: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              uri: Schema.optional(Schema.String),
              ssoEnabled: Schema.optional(Schema.Boolean),
              tokenRelay: Schema.optional(Schema.Boolean),
              predicates: Schema.optional(Schema.Array(Schema.String)),
              filters: Schema.optional(Schema.Array(Schema.String)),
              order: Schema.optional(Schema.Number),
              tags: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        ssoEnabled: Schema.optional(Schema.Boolean),
        predicates: Schema.optional(Schema.Array(Schema.String)),
        filters: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayRouteConfigsCreateOrUpdateInput =
  typeof GatewayRouteConfigsCreateOrUpdateInput.Type;

// Output Schema
export const GatewayRouteConfigsCreateOrUpdateOutput =
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
export type GatewayRouteConfigsCreateOrUpdateOutput =
  typeof GatewayRouteConfigsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the default Spring Cloud Gateway route configs or update the existing Spring Cloud Gateway route configs.
 */
export const GatewayRouteConfigsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GatewayRouteConfigsCreateOrUpdateInput,
    outputSchema: GatewayRouteConfigsCreateOrUpdateOutput,
  }));
// Input Schema
export const GatewayRouteConfigsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayRouteConfigsDeleteInput =
  typeof GatewayRouteConfigsDeleteInput.Type;

// Output Schema
export const GatewayRouteConfigsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GatewayRouteConfigsDeleteOutput =
  typeof GatewayRouteConfigsDeleteOutput.Type;

// The operation
/**
 * Delete the Spring Cloud Gateway route config.
 */
export const GatewayRouteConfigsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayRouteConfigsDeleteInput,
    outputSchema: GatewayRouteConfigsDeleteOutput,
  }),
);
// Input Schema
export const GatewayRouteConfigsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayRouteConfigsGetInput =
  typeof GatewayRouteConfigsGetInput.Type;

// Output Schema
export const GatewayRouteConfigsGetOutput =
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
export type GatewayRouteConfigsGetOutput =
  typeof GatewayRouteConfigsGetOutput.Type;

// The operation
/**
 * Get the Spring Cloud Gateway route configs.
 */
export const GatewayRouteConfigsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayRouteConfigsGetInput,
    outputSchema: GatewayRouteConfigsGetOutput,
  }),
);
// Input Schema
export const GatewayRouteConfigsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewayRouteConfigsListInput =
  typeof GatewayRouteConfigsListInput.Type;

// Output Schema
export const GatewayRouteConfigsListOutput =
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
export type GatewayRouteConfigsListOutput =
  typeof GatewayRouteConfigsListOutput.Type;

// The operation
/**
 * Handle requests to list all Spring Cloud Gateway route configs.
 */
export const GatewayRouteConfigsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayRouteConfigsListInput,
    outputSchema: GatewayRouteConfigsListOutput,
  }),
);
// Input Schema
export const GatewaysCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        httpsOnly: Schema.optional(Schema.Boolean),
        ssoProperties: Schema.optional(
          Schema.Struct({
            scope: Schema.optional(Schema.Array(Schema.String)),
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
            issuerUri: Schema.optional(Schema.String),
          }),
        ),
        apiMetadataProperties: Schema.optional(
          Schema.Struct({
            title: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            documentation: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            serverUrl: Schema.optional(Schema.String),
          }),
        ),
        corsProperties: Schema.optional(
          Schema.Struct({
            allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
            allowedOriginPatterns: Schema.optional(Schema.Array(Schema.String)),
            allowedMethods: Schema.optional(Schema.Array(Schema.String)),
            allowedHeaders: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
            exposedHeaders: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        clientAuth: Schema.optional(
          Schema.Struct({
            certificates: Schema.optional(Schema.Array(Schema.String)),
            certificateVerification: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        apms: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
            }),
          ),
        ),
        environmentVariables: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            secrets: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        operatorProperties: Schema.optional(
          Schema.Struct({
            resourceRequests: Schema.optional(
              Schema.Struct({
                cpu: Schema.optional(Schema.String),
                memory: Schema.optional(Schema.String),
                instanceCount: Schema.optional(Schema.Number),
              }),
            ),
            instances: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  status: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewaysCreateOrUpdateInput =
  typeof GatewaysCreateOrUpdateInput.Type;

// Output Schema
export const GatewaysCreateOrUpdateOutput =
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
export type GatewaysCreateOrUpdateOutput =
  typeof GatewaysCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the default Spring Cloud Gateway or update the existing Spring Cloud Gateway.
 */
export const GatewaysCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysCreateOrUpdateInput,
    outputSchema: GatewaysCreateOrUpdateOutput,
  }),
);
// Input Schema
export const GatewaysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
    apiVersion: "2023-12-01",
  }),
);
export type GatewaysDeleteInput = typeof GatewaysDeleteInput.Type;

// Output Schema
export const GatewaysDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GatewaysDeleteOutput = typeof GatewaysDeleteOutput.Type;

// The operation
/**
 * Disable the default Spring Cloud Gateway.
 */
export const GatewaysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysDeleteInput,
  outputSchema: GatewaysDeleteOutput,
}));
// Input Schema
export const GatewaysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
    apiVersion: "2023-12-01",
  }),
);
export type GatewaysGetInput = typeof GatewaysGetInput.Type;

// Output Schema
export const GatewaysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GatewaysGetOutput = typeof GatewaysGetOutput.Type;

// The operation
/**
 * Get the Spring Cloud Gateway and its properties.
 */
export const GatewaysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysGetInput,
  outputSchema: GatewaysGetOutput,
}));
// Input Schema
export const GatewaysListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways",
    apiVersion: "2023-12-01",
  }),
);
export type GatewaysListInput = typeof GatewaysListInput.Type;

// Output Schema
export const GatewaysListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GatewaysListOutput = typeof GatewaysListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a Service.
 */
export const GatewaysList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysListInput,
  outputSchema: GatewaysListOutput,
}));
// Input Schema
export const GatewaysListEnvSecretsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/listEnvSecrets",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewaysListEnvSecretsInput =
  typeof GatewaysListEnvSecretsInput.Type;

// Output Schema
export const GatewaysListEnvSecretsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.String);
export type GatewaysListEnvSecretsOutput =
  typeof GatewaysListEnvSecretsOutput.Type;

// The operation
/**
 * List sensitive environment variables of Spring Cloud Gateway.
 */
export const GatewaysListEnvSecrets = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysListEnvSecretsInput,
    outputSchema: GatewaysListEnvSecretsOutput,
  }),
);
// Input Schema
export const GatewaysRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/restart",
    apiVersion: "2023-12-01",
  }),
);
export type GatewaysRestartInput = typeof GatewaysRestartInput.Type;

// Output Schema
export const GatewaysRestartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GatewaysRestartOutput = typeof GatewaysRestartOutput.Type;

// The operation
/**
 * Restart the Spring Cloud Gateway.
 */
export const GatewaysRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysRestartInput,
  outputSchema: GatewaysRestartOutput,
}));
// Input Schema
export const GatewaysValidateDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/validateDomain",
      apiVersion: "2023-12-01",
    }),
  );
export type GatewaysValidateDomainInput =
  typeof GatewaysValidateDomainInput.Type;

// Output Schema
export const GatewaysValidateDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  });
export type GatewaysValidateDomainOutput =
  typeof GatewaysValidateDomainOutput.Type;

// The operation
/**
 * Check the domains are valid as well as not in use.
 */
export const GatewaysValidateDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysValidateDomainInput,
    outputSchema: GatewaysValidateDomainOutput,
  }),
);
// Input Schema
export const MonitoringSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
      apiVersion: "2023-12-01",
    }),
  );
export type MonitoringSettingsGetInput = typeof MonitoringSettingsGetInput.Type;

// Output Schema
export const MonitoringSettingsGetOutput =
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
export type MonitoringSettingsGetOutput =
  typeof MonitoringSettingsGetOutput.Type;

// The operation
/**
 * Get the Monitoring Setting and its properties.
 */
export const MonitoringSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitoringSettingsGetInput,
    outputSchema: MonitoringSettingsGetOutput,
  }),
);
// Input Schema
export const MonitoringSettingsUpdatePatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["NotAvailable", "Failed", "Succeeded", "Updating"]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        traceEnabled: Schema.optional(Schema.Boolean),
        appInsightsInstrumentationKey: Schema.optional(Schema.String),
        appInsightsSamplingRate: Schema.optional(Schema.Number),
        appInsightsAgentVersions: Schema.optional(
          Schema.Struct({
            java: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
      apiVersion: "2023-12-01",
    }),
  );
export type MonitoringSettingsUpdatePatchInput =
  typeof MonitoringSettingsUpdatePatchInput.Type;

// Output Schema
export const MonitoringSettingsUpdatePatchOutput =
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
export type MonitoringSettingsUpdatePatchOutput =
  typeof MonitoringSettingsUpdatePatchOutput.Type;

// The operation
/**
 * Update the Monitoring Setting.
 */
export const MonitoringSettingsUpdatePatch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MonitoringSettingsUpdatePatchInput,
    outputSchema: MonitoringSettingsUpdatePatchOutput,
  }));
// Input Schema
export const MonitoringSettingsUpdatePutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["NotAvailable", "Failed", "Succeeded", "Updating"]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        traceEnabled: Schema.optional(Schema.Boolean),
        appInsightsInstrumentationKey: Schema.optional(Schema.String),
        appInsightsSamplingRate: Schema.optional(Schema.Number),
        appInsightsAgentVersions: Schema.optional(
          Schema.Struct({
            java: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
      apiVersion: "2023-12-01",
    }),
  );
export type MonitoringSettingsUpdatePutInput =
  typeof MonitoringSettingsUpdatePutInput.Type;

// Output Schema
export const MonitoringSettingsUpdatePutOutput =
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
export type MonitoringSettingsUpdatePutOutput =
  typeof MonitoringSettingsUpdatePutOutput.Type;

// The operation
/**
 * Update the Monitoring Setting.
 */
export const MonitoringSettingsUpdatePut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitoringSettingsUpdatePutInput,
    outputSchema: MonitoringSettingsUpdatePutOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppPlatform/operations",
    apiVersion: "2023-12-01",
  }),
);
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
        actionType: Schema.optional(Schema.Literals(["Internal"])),
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      category: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      supportedAggregationTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      supportedTimeGrainTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                            toBeExportedForShoebox: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                      ),
                      sourceMdmNamespace: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all of the available REST API operations of the Microsoft.AppPlatform provider.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PredefinedAcceleratorsDisableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}/disable",
      apiVersion: "2023-12-01",
    }),
  );
export type PredefinedAcceleratorsDisableInput =
  typeof PredefinedAcceleratorsDisableInput.Type;

// Output Schema
export const PredefinedAcceleratorsDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PredefinedAcceleratorsDisableOutput =
  typeof PredefinedAcceleratorsDisableOutput.Type;

// The operation
/**
 * Disable predefined accelerator.
 */
export const PredefinedAcceleratorsDisable =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PredefinedAcceleratorsDisableInput,
    outputSchema: PredefinedAcceleratorsDisableOutput,
  }));
// Input Schema
export const PredefinedAcceleratorsEnableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}/enable",
      apiVersion: "2023-12-01",
    }),
  );
export type PredefinedAcceleratorsEnableInput =
  typeof PredefinedAcceleratorsEnableInput.Type;

// Output Schema
export const PredefinedAcceleratorsEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PredefinedAcceleratorsEnableOutput =
  typeof PredefinedAcceleratorsEnableOutput.Type;

// The operation
/**
 * Enable predefined accelerator.
 */
export const PredefinedAcceleratorsEnable =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PredefinedAcceleratorsEnableInput,
    outputSchema: PredefinedAcceleratorsEnableOutput,
  }));
// Input Schema
export const PredefinedAcceleratorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  );
export type PredefinedAcceleratorsGetInput =
  typeof PredefinedAcceleratorsGetInput.Type;

// Output Schema
export const PredefinedAcceleratorsGetOutput =
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
export type PredefinedAcceleratorsGetOutput =
  typeof PredefinedAcceleratorsGetOutput.Type;

// The operation
/**
 * Get the predefined accelerator.
 */
export const PredefinedAcceleratorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredefinedAcceleratorsGetInput,
    outputSchema: PredefinedAcceleratorsGetOutput,
  }),
);
// Input Schema
export const PredefinedAcceleratorsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators",
      apiVersion: "2023-12-01",
    }),
  );
export type PredefinedAcceleratorsListInput =
  typeof PredefinedAcceleratorsListInput.Type;

// Output Schema
export const PredefinedAcceleratorsListOutput =
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
export type PredefinedAcceleratorsListOutput =
  typeof PredefinedAcceleratorsListOutput.Type;

// The operation
/**
 * Handle requests to list all predefined accelerators.
 */
export const PredefinedAcceleratorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredefinedAcceleratorsListInput,
    outputSchema: PredefinedAcceleratorsListOutput,
  }),
);
// Input Schema
export const RuntimeVersionsListRuntimeVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppPlatform/runtimeVersions",
      apiVersion: "2023-12-01",
    }),
  );
export type RuntimeVersionsListRuntimeVersionsInput =
  typeof RuntimeVersionsListRuntimeVersionsInput.Type;

// Output Schema
export const RuntimeVersionsListRuntimeVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          value: Schema.optional(
            Schema.Literals(["Java_8", "Java_11", "Java_17", "NetCore_31"]),
          ),
          platform: Schema.optional(Schema.Literals(["Java", ".NET Core"])),
          version: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type RuntimeVersionsListRuntimeVersionsOutput =
  typeof RuntimeVersionsListRuntimeVersionsOutput.Type;

// The operation
/**
 * Lists all of the available runtime versions supported by Microsoft.AppPlatform provider.
 */
export const RuntimeVersionsListRuntimeVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RuntimeVersionsListRuntimeVersionsInput,
    outputSchema: RuntimeVersionsListRuntimeVersionsOutput,
  }));
// Input Schema
export const ServiceRegistriesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ServiceRegistriesCreateOrUpdateInput =
  typeof ServiceRegistriesCreateOrUpdateInput.Type;

// Output Schema
export const ServiceRegistriesCreateOrUpdateOutput =
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
export type ServiceRegistriesCreateOrUpdateOutput =
  typeof ServiceRegistriesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the default Service Registry or update the existing Service Registry.
 */
export const ServiceRegistriesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceRegistriesCreateOrUpdateInput,
    outputSchema: ServiceRegistriesCreateOrUpdateOutput,
  }));
// Input Schema
export const ServiceRegistriesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ServiceRegistriesDeleteInput =
  typeof ServiceRegistriesDeleteInput.Type;

// Output Schema
export const ServiceRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceRegistriesDeleteOutput =
  typeof ServiceRegistriesDeleteOutput.Type;

// The operation
/**
 * Disable the default Service Registry.
 */
export const ServiceRegistriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRegistriesDeleteInput,
    outputSchema: ServiceRegistriesDeleteOutput,
  }),
);
// Input Schema
export const ServiceRegistriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ServiceRegistriesGetInput = typeof ServiceRegistriesGetInput.Type;

// Output Schema
export const ServiceRegistriesGetOutput =
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
export type ServiceRegistriesGetOutput = typeof ServiceRegistriesGetOutput.Type;

// The operation
/**
 * Get the Service Registry and its properties.
 */
export const ServiceRegistriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRegistriesGetInput,
    outputSchema: ServiceRegistriesGetOutput,
  }),
);
// Input Schema
export const ServiceRegistriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries",
      apiVersion: "2023-12-01",
    }),
  );
export type ServiceRegistriesListInput = typeof ServiceRegistriesListInput.Type;

// Output Schema
export const ServiceRegistriesListOutput =
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
export type ServiceRegistriesListOutput =
  typeof ServiceRegistriesListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a Service.
 */
export const ServiceRegistriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRegistriesListInput,
    outputSchema: ServiceRegistriesListOutput,
  }),
);
// Input Schema
export const ServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/locations/{location}/checkNameAvailability",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesCheckNameAvailabilityInput =
  typeof ServicesCheckNameAvailabilityInput.Type;

// Output Schema
export const ServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
export type ServicesCheckNameAvailabilityOutput =
  typeof ServicesCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Checks that the resource name is valid and is not already in use.
 *
 * @param location - the region
 */
export const ServicesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesCheckNameAvailabilityInput,
    outputSchema: ServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Starting",
            "Stopping",
            "Deleting",
            "Deleted",
            "Succeeded",
            "Failed",
            "Moving",
            "Moved",
            "MoveFailed",
          ]),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            serviceRuntimeSubnetId: Schema.optional(Schema.String),
            appSubnetId: Schema.optional(Schema.String),
            serviceCidr: Schema.optional(Schema.String),
            serviceRuntimeNetworkResourceGroup: Schema.optional(Schema.String),
            appNetworkResourceGroup: Schema.optional(Schema.String),
            outboundIPs: Schema.optional(
              Schema.Struct({
                publicIPs: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            requiredTraffics: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  protocol: Schema.optional(Schema.String),
                  port: Schema.optional(Schema.Number),
                  ips: Schema.optional(Schema.Array(Schema.String)),
                  fqdns: Schema.optional(Schema.Array(Schema.String)),
                  direction: Schema.optional(
                    Schema.Literals(["Inbound", "Outbound"]),
                  ),
                }),
              ),
            ),
            ingressConfig: Schema.optional(
              Schema.Struct({
                readTimeoutInSeconds: Schema.optional(Schema.Number),
              }),
            ),
            outboundType: Schema.optional(Schema.String),
          }),
        ),
        vnetAddons: Schema.optional(
          Schema.Struct({
            logStreamPublicEndpoint: Schema.optional(Schema.Boolean),
            dataPlanePublicEndpoint: Schema.optional(Schema.Boolean),
          }),
        ),
        version: Schema.optional(Schema.Number),
        serviceId: Schema.optional(Schema.String),
        powerState: Schema.optional(Schema.Literals(["Running", "Stopped"])),
        zoneRedundant: Schema.optional(Schema.Boolean),
        fqdn: Schema.optional(Schema.String),
        marketplaceResource: Schema.optional(
          Schema.Struct({
            plan: Schema.optional(Schema.String),
            publisher: Schema.optional(Schema.String),
            product: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesCreateOrUpdateInput =
  typeof ServicesCreateOrUpdateInput.Type;

// Output Schema
export const ServicesCreateOrUpdateOutput =
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
export type ServicesCreateOrUpdateOutput =
  typeof ServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Service or update an exiting Service.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
    apiVersion: "2023-12-01",
  }),
);
export type ServicesDeleteInput = typeof ServicesDeleteInput.Type;

// Output Schema
export const ServicesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesDeleteOutput = typeof ServicesDeleteOutput.Type;

// The operation
/**
 * Operation to delete a Service.
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export const ServicesDisableApmGloballyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/disableApmGlobally",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesDisableApmGloballyInput =
  typeof ServicesDisableApmGloballyInput.Type;

// Output Schema
export const ServicesDisableApmGloballyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesDisableApmGloballyOutput =
  typeof ServicesDisableApmGloballyOutput.Type;

// The operation
/**
 * Disable an APM globally.
 */
export const ServicesDisableApmGlobally = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesDisableApmGloballyInput,
    outputSchema: ServicesDisableApmGloballyOutput,
  }),
);
// Input Schema
export const ServicesDisableTestEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/disableTestEndpoint",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesDisableTestEndpointInput =
  typeof ServicesDisableTestEndpointInput.Type;

// Output Schema
export const ServicesDisableTestEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesDisableTestEndpointOutput =
  typeof ServicesDisableTestEndpointOutput.Type;

// The operation
/**
 * Disable test endpoint functionality for a Service.
 */
export const ServicesDisableTestEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesDisableTestEndpointInput,
    outputSchema: ServicesDisableTestEndpointOutput,
  }),
);
// Input Schema
export const ServicesEnableApmGloballyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/enableApmGlobally",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesEnableApmGloballyInput =
  typeof ServicesEnableApmGloballyInput.Type;

// Output Schema
export const ServicesEnableApmGloballyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesEnableApmGloballyOutput =
  typeof ServicesEnableApmGloballyOutput.Type;

// The operation
/**
 * Enable an APM globally.
 */
export const ServicesEnableApmGlobally = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesEnableApmGloballyInput,
    outputSchema: ServicesEnableApmGloballyOutput,
  }),
);
// Input Schema
export const ServicesEnableTestEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/enableTestEndpoint",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesEnableTestEndpointInput =
  typeof ServicesEnableTestEndpointInput.Type;

// Output Schema
export const ServicesEnableTestEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryTestEndpoint: Schema.optional(Schema.String),
    secondaryTestEndpoint: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  });
export type ServicesEnableTestEndpointOutput =
  typeof ServicesEnableTestEndpointOutput.Type;

// The operation
/**
 * Enable test endpoint functionality for a Service.
 */
export const ServicesEnableTestEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesEnableTestEndpointInput,
    outputSchema: ServicesEnableTestEndpointOutput,
  }),
);
// Input Schema
export const ServicesFlushVnetDnsSettingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/flushVirtualNetworkDnsSettings",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesFlushVnetDnsSettingInput =
  typeof ServicesFlushVnetDnsSettingInput.Type;

// Output Schema
export const ServicesFlushVnetDnsSettingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesFlushVnetDnsSettingOutput =
  typeof ServicesFlushVnetDnsSettingOutput.Type;

// The operation
/**
 * Flush Virtual Network DNS settings for a VNET injected Service.
 */
export const ServicesFlushVnetDnsSetting = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesFlushVnetDnsSettingInput,
    outputSchema: ServicesFlushVnetDnsSettingOutput,
  }),
);
// Input Schema
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
    apiVersion: "2023-12-01",
  }),
);
export type ServicesGetInput = typeof ServicesGetInput.Type;

// Output Schema
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ServicesGetOutput = typeof ServicesGetOutput.Type;

// The operation
/**
 * Get a Service and its properties.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring",
    apiVersion: "2023-12-01",
  }),
);
export type ServicesListInput = typeof ServicesListInput.Type;

// Output Schema
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ServicesListOutput = typeof ServicesListOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a resource group.
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export const ServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/Spring",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesListBySubscriptionInput =
  typeof ServicesListBySubscriptionInput.Type;

// Output Schema
export const ServicesListBySubscriptionOutput =
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
export type ServicesListBySubscriptionOutput =
  typeof ServicesListBySubscriptionOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a subscription.
 */
export const ServicesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListBySubscriptionInput,
    outputSchema: ServicesListBySubscriptionOutput,
  }),
);
// Input Schema
export const ServicesListGloballyEnabledApmsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/listGloballyEnabledApms",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesListGloballyEnabledApmsInput =
  typeof ServicesListGloballyEnabledApmsInput.Type;

// Output Schema
export const ServicesListGloballyEnabledApmsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.String)),
  });
export type ServicesListGloballyEnabledApmsOutput =
  typeof ServicesListGloballyEnabledApmsOutput.Type;

// The operation
/**
 * List globally enabled APMs for a Service.
 */
export const ServicesListGloballyEnabledApms =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesListGloballyEnabledApmsInput,
    outputSchema: ServicesListGloballyEnabledApmsOutput,
  }));
// Input Schema
export const ServicesListSupportedApmTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/supportedApmTypes",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesListSupportedApmTypesInput =
  typeof ServicesListSupportedApmTypesInput.Type;

// Output Schema
export const ServicesListSupportedApmTypesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ServicesListSupportedApmTypesOutput =
  typeof ServicesListSupportedApmTypesOutput.Type;

// The operation
/**
 * List supported APM types for a Service.
 */
export const ServicesListSupportedApmTypes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesListSupportedApmTypesInput,
    outputSchema: ServicesListSupportedApmTypesOutput,
  }));
// Input Schema
export const ServicesListSupportedServerVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/supportedServerVersions",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesListSupportedServerVersionsInput =
  typeof ServicesListSupportedServerVersionsInput.Type;

// Output Schema
export const ServicesListSupportedServerVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          value: Schema.optional(Schema.String),
          server: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ServicesListSupportedServerVersionsOutput =
  typeof ServicesListSupportedServerVersionsOutput.Type;

// The operation
/**
 * Lists all of the available server versions supported by Microsoft.AppPlatform provider.
 */
export const ServicesListSupportedServerVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesListSupportedServerVersionsInput,
    outputSchema: ServicesListSupportedServerVersionsOutput,
  }));
// Input Schema
export const ServicesListTestKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/listTestKeys",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesListTestKeysInput = typeof ServicesListTestKeysInput.Type;

// Output Schema
export const ServicesListTestKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryTestEndpoint: Schema.optional(Schema.String),
    secondaryTestEndpoint: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  });
export type ServicesListTestKeysOutput = typeof ServicesListTestKeysOutput.Type;

// The operation
/**
 * List test keys for a Service.
 */
export const ServicesListTestKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListTestKeysInput,
    outputSchema: ServicesListTestKeysOutput,
  }),
);
// Input Schema
export const ServicesRegenerateTestKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyType: Schema.Literals(["Primary", "Secondary"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/regenerateTestKey",
      apiVersion: "2023-12-01",
    }),
  );
export type ServicesRegenerateTestKeyInput =
  typeof ServicesRegenerateTestKeyInput.Type;

// Output Schema
export const ServicesRegenerateTestKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryTestEndpoint: Schema.optional(Schema.String),
    secondaryTestEndpoint: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  });
export type ServicesRegenerateTestKeyOutput =
  typeof ServicesRegenerateTestKeyOutput.Type;

// The operation
/**
 * Regenerate a test key for a Service.
 */
export const ServicesRegenerateTestKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesRegenerateTestKeyInput,
    outputSchema: ServicesRegenerateTestKeyOutput,
  }),
);
// Input Schema
export const ServicesStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/start",
    apiVersion: "2023-12-01",
  }),
);
export type ServicesStartInput = typeof ServicesStartInput.Type;

// Output Schema
export const ServicesStartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesStartOutput = typeof ServicesStartOutput.Type;

// The operation
/**
 * Start a Service.
 */
export const ServicesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesStartInput,
  outputSchema: ServicesStartOutput,
}));
// Input Schema
export const ServicesStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/stop",
    apiVersion: "2023-12-01",
  }),
);
export type ServicesStopInput = typeof ServicesStopInput.Type;

// Output Schema
export const ServicesStopOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesStopOutput = typeof ServicesStopOutput.Type;

// The operation
/**
 * Stop a Service.
 */
export const ServicesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesStopInput,
  outputSchema: ServicesStopOutput,
}));
// Input Schema
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Updating",
          "Starting",
          "Stopping",
          "Deleting",
          "Deleted",
          "Succeeded",
          "Failed",
          "Moving",
          "Moved",
          "MoveFailed",
        ]),
      ),
      networkProfile: Schema.optional(
        Schema.Struct({
          serviceRuntimeSubnetId: Schema.optional(Schema.String),
          appSubnetId: Schema.optional(Schema.String),
          serviceCidr: Schema.optional(Schema.String),
          serviceRuntimeNetworkResourceGroup: Schema.optional(Schema.String),
          appNetworkResourceGroup: Schema.optional(Schema.String),
          outboundIPs: Schema.optional(
            Schema.Struct({
              publicIPs: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          requiredTraffics: Schema.optional(
            Schema.Array(
              Schema.Struct({
                protocol: Schema.optional(Schema.String),
                port: Schema.optional(Schema.Number),
                ips: Schema.optional(Schema.Array(Schema.String)),
                fqdns: Schema.optional(Schema.Array(Schema.String)),
                direction: Schema.optional(
                  Schema.Literals(["Inbound", "Outbound"]),
                ),
              }),
            ),
          ),
          ingressConfig: Schema.optional(
            Schema.Struct({
              readTimeoutInSeconds: Schema.optional(Schema.Number),
            }),
          ),
          outboundType: Schema.optional(Schema.String),
        }),
      ),
      vnetAddons: Schema.optional(
        Schema.Struct({
          logStreamPublicEndpoint: Schema.optional(Schema.Boolean),
          dataPlanePublicEndpoint: Schema.optional(Schema.Boolean),
        }),
      ),
      version: Schema.optional(Schema.Number),
      serviceId: Schema.optional(Schema.String),
      powerState: Schema.optional(Schema.Literals(["Running", "Stopped"])),
      zoneRedundant: Schema.optional(Schema.Boolean),
      fqdn: Schema.optional(Schema.String),
      marketplaceResource: Schema.optional(
        Schema.Struct({
          plan: Schema.optional(Schema.String),
          publisher: Schema.optional(Schema.String),
          product: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
    apiVersion: "2023-12-01",
  }),
);
export type ServicesUpdateInput = typeof ServicesUpdateInput.Type;

// Output Schema
export const ServicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ServicesUpdateOutput = typeof ServicesUpdateOutput.Type;

// The operation
/**
 * Operation to update an exiting Service.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
// Input Schema
export const SkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/skus",
    apiVersion: "2023-12-01",
  }),
);
export type SkusListInput = typeof SkusListInput.Type;

// Output Schema
export const SkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(
          Schema.Struct({
            minimum: Schema.Number,
            maximum: Schema.optional(Schema.Number),
            default: Schema.optional(Schema.Number),
            scaleType: Schema.optional(
              Schema.Literals(["None", "Manual", "Automatic"]),
            ),
          }),
        ),
        locations: Schema.optional(Schema.Array(Schema.String)),
        locationInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              location: Schema.optional(Schema.String),
              zones: Schema.optional(Schema.Array(Schema.String)),
              zoneDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.Array(Schema.String)),
                    capabilities: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        ),
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
  ),
  nextLink: Schema.optional(Schema.String),
});
export type SkusListOutput = typeof SkusListOutput.Type;

// The operation
/**
 * Lists all of the available skus of the Microsoft.AppPlatform provider.
 */
export const SkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export const StoragesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        storageType: Schema.Literals(["StorageAccount"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages/{storageName}",
      apiVersion: "2023-12-01",
    }),
  );
export type StoragesCreateOrUpdateInput =
  typeof StoragesCreateOrUpdateInput.Type;

// Output Schema
export const StoragesCreateOrUpdateOutput =
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
export type StoragesCreateOrUpdateOutput =
  typeof StoragesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update storage resource.
 */
export const StoragesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StoragesCreateOrUpdateInput,
    outputSchema: StoragesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const StoragesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages/{storageName}",
    apiVersion: "2023-12-01",
  }),
);
export type StoragesDeleteInput = typeof StoragesDeleteInput.Type;

// Output Schema
export const StoragesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StoragesDeleteOutput = typeof StoragesDeleteOutput.Type;

// The operation
/**
 * Delete the storage resource.
 */
export const StoragesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StoragesDeleteInput,
  outputSchema: StoragesDeleteOutput,
}));
// Input Schema
export const StoragesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages/{storageName}",
    apiVersion: "2023-12-01",
  }),
);
export type StoragesGetInput = typeof StoragesGetInput.Type;

// Output Schema
export const StoragesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type StoragesGetOutput = typeof StoragesGetOutput.Type;

// The operation
/**
 * Get the storage resource.
 */
export const StoragesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StoragesGetInput,
  outputSchema: StoragesGetOutput,
}));
// Input Schema
export const StoragesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages",
    apiVersion: "2023-12-01",
  }),
);
export type StoragesListInput = typeof StoragesListInput.Type;

// Output Schema
export const StoragesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type StoragesListOutput = typeof StoragesListOutput.Type;

// The operation
/**
 * List all the storages of one Azure Spring Apps resource.
 */
export const StoragesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StoragesListInput,
  outputSchema: StoragesListOutput,
}));
