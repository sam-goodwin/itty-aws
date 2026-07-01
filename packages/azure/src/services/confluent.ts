/**
 * Azure Confluent API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AccessCreateRoleBindingInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  principal?: string;
  role_name?: string;
  crn_pattern?: string;
}
export const AccessCreateRoleBindingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    principal: Schema.optional(Schema.String),
    role_name: Schema.optional(Schema.String),
    crn_pattern: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/createRoleBinding",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessCreateRoleBindingInput>;

// Output Schema
export interface AccessCreateRoleBindingOutput {
  kind?: string;
  id?: string;
  metadata?: {
    self?: string;
    resource_name?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
  };
  principal?: string;
  role_name?: string;
  crn_pattern?: string;
}
export const AccessCreateRoleBindingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        self: Schema.optional(Schema.String),
        resource_name: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        deleted_at: Schema.optional(Schema.String),
      }),
    ),
    principal: Schema.optional(Schema.String),
    role_name: Schema.optional(Schema.String),
    crn_pattern: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessCreateRoleBindingOutput>;

// The operation
/**
 * Organization role bindings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessCreateRoleBinding = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessCreateRoleBindingInput,
    outputSchema: AccessCreateRoleBindingOutput,
  }),
);
// Input Schema
export interface AccessDeleteRoleBindingInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  roleBindingId: string;
}
export const AccessDeleteRoleBindingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    roleBindingId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/deleteRoleBinding/{roleBindingId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessDeleteRoleBindingInput>;

// Output Schema
export type AccessDeleteRoleBindingOutput = void;
export const AccessDeleteRoleBindingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccessDeleteRoleBindingOutput>;

// The operation
/**
 * Organization role bindings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param roleBindingId - Confluent Role binding id
 */
export const AccessDeleteRoleBinding = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessDeleteRoleBindingInput,
    outputSchema: AccessDeleteRoleBindingOutput,
  }),
);
// Input Schema
export interface AccessInviteUserInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  organizationId?: string;
  email?: string;
  upn?: string;
  invitedUserDetails?: { invitedEmail?: string; auth_type?: string };
}
export const AccessInviteUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  organizationId: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  upn: Schema.optional(Schema.String),
  invitedUserDetails: Schema.optional(
    Schema.Struct({
      invitedEmail: Schema.optional(Schema.String),
      auth_type: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/createInvitation",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<AccessInviteUserInput>;

// Output Schema
export interface AccessInviteUserOutput {
  kind?: string;
  id?: string;
  metadata?: {
    self?: string;
    resource_name?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
  };
  email?: string;
  auth_type?: string;
  status?: string;
  accepted_at?: string;
  expires_at?: string;
}
export const AccessInviteUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        self: Schema.optional(Schema.String),
        resource_name: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        deleted_at: Schema.optional(Schema.String),
      }),
    ),
    email: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    accepted_at: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<AccessInviteUserOutput>;

// The operation
/**
 * Invite user to the organization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessInviteUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessInviteUserInput,
  outputSchema: AccessInviteUserOutput,
}));
// Input Schema
export interface AccessListClustersInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const AccessListClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/listClusters",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessListClustersInput>;

// Output Schema
export interface AccessListClustersOutput {
  kind?: string;
  metadata?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
    total_size?: number;
  };
  data?: {
    kind?: string;
    id?: string;
    metadata?: {
      self?: string;
      resource_name?: string;
      created_at?: string;
      updated_at?: string;
      deleted_at?: string;
    };
    display_name?: string;
    spec?: {
      display_name?: string;
      availability?: string;
      cloud?: string;
      zone?: string;
      region?: string;
      kafka_bootstrap_endpoint?: string;
      http_endpoint?: string;
      api_endpoint?: string;
      config?: { kind?: string };
      environment?: {
        id?: string;
        environment?: string;
        related?: string;
        resource_name?: string;
      };
      network?: {
        id?: string;
        environment?: string;
        related?: string;
        resource_name?: string;
      };
      byok?: { id?: string; related?: string; resource_name?: string };
    };
    status?: { phase?: string; cku?: number };
  }[];
}
export const AccessListClustersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        first: Schema.optional(Schema.String),
        last: Schema.optional(Schema.String),
        prev: Schema.optional(Schema.String),
        next: Schema.optional(Schema.String),
        total_size: Schema.optional(Schema.Number),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.Struct({
              self: Schema.optional(Schema.String),
              resource_name: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
              deleted_at: Schema.optional(Schema.String),
            }),
          ),
          display_name: Schema.optional(Schema.String),
          spec: Schema.optional(
            Schema.Struct({
              display_name: Schema.optional(Schema.String),
              availability: Schema.optional(Schema.String),
              cloud: Schema.optional(Schema.String),
              zone: Schema.optional(Schema.String),
              region: Schema.optional(Schema.String),
              kafka_bootstrap_endpoint: Schema.optional(Schema.String),
              http_endpoint: Schema.optional(Schema.String),
              api_endpoint: Schema.optional(Schema.String),
              config: Schema.optional(
                Schema.Struct({
                  kind: Schema.optional(Schema.String),
                }),
              ),
              environment: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  environment: Schema.optional(Schema.String),
                  related: Schema.optional(Schema.String),
                  resource_name: Schema.optional(Schema.String),
                }),
              ),
              network: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  environment: Schema.optional(Schema.String),
                  related: Schema.optional(Schema.String),
                  resource_name: Schema.optional(Schema.String),
                }),
              ),
              byok: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  related: Schema.optional(Schema.String),
                  resource_name: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          status: Schema.optional(
            Schema.Struct({
              phase: Schema.optional(Schema.String),
              cku: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccessListClustersOutput>;

// The operation
/**
 * Cluster details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessListClusters = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessListClustersInput,
  outputSchema: AccessListClustersOutput,
}));
// Input Schema
export interface AccessListEnvironmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const AccessListEnvironmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/listEnvironments",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessListEnvironmentsInput>;

// Output Schema
export interface AccessListEnvironmentsOutput {
  kind?: string;
  metadata?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
    total_size?: number;
  };
  data?: {
    kind?: string;
    id?: string;
    metadata?: {
      self?: string;
      resource_name?: string;
      created_at?: string;
      updated_at?: string;
      deleted_at?: string;
    };
    display_name?: string;
  }[];
}
export const AccessListEnvironmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        first: Schema.optional(Schema.String),
        last: Schema.optional(Schema.String),
        prev: Schema.optional(Schema.String),
        next: Schema.optional(Schema.String),
        total_size: Schema.optional(Schema.Number),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.Struct({
              self: Schema.optional(Schema.String),
              resource_name: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
              deleted_at: Schema.optional(Schema.String),
            }),
          ),
          display_name: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccessListEnvironmentsOutput>;

// The operation
/**
 * Environment list of an organization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessListEnvironments = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessListEnvironmentsInput,
    outputSchema: AccessListEnvironmentsOutput,
  }),
);
// Input Schema
export interface AccessListInvitationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const AccessListInvitationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/listInvitations",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessListInvitationsInput>;

// Output Schema
export interface AccessListInvitationsOutput {
  kind?: string;
  metadata?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
    total_size?: number;
  };
  data?: {
    kind?: string;
    id?: string;
    metadata?: {
      self?: string;
      resource_name?: string;
      created_at?: string;
      updated_at?: string;
      deleted_at?: string;
    };
    email?: string;
    auth_type?: string;
    status?: string;
    accepted_at?: string;
    expires_at?: string;
  }[];
}
export const AccessListInvitationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        first: Schema.optional(Schema.String),
        last: Schema.optional(Schema.String),
        prev: Schema.optional(Schema.String),
        next: Schema.optional(Schema.String),
        total_size: Schema.optional(Schema.Number),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.Struct({
              self: Schema.optional(Schema.String),
              resource_name: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
              deleted_at: Schema.optional(Schema.String),
            }),
          ),
          email: Schema.optional(Schema.String),
          auth_type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          accepted_at: Schema.optional(Schema.String),
          expires_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccessListInvitationsOutput>;

// The operation
/**
 * Organization accounts invitation details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessListInvitations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessListInvitationsInput,
    outputSchema: AccessListInvitationsOutput,
  }),
);
// Input Schema
export interface AccessListRoleBindingNameListInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const AccessListRoleBindingNameListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/listRoleBindingNameList",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessListRoleBindingNameListInput>;

// Output Schema
export interface AccessListRoleBindingNameListOutput {
  kind?: string;
  metadata?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
    total_size?: number;
  };
  data?: string[];
}
export const AccessListRoleBindingNameListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        first: Schema.optional(Schema.String),
        last: Schema.optional(Schema.String),
        prev: Schema.optional(Schema.String),
        next: Schema.optional(Schema.String),
        total_size: Schema.optional(Schema.Number),
      }),
    ),
    data: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<AccessListRoleBindingNameListOutput>;

// The operation
/**
 * Organization role bindings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessListRoleBindingNameList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessListRoleBindingNameListInput,
    outputSchema: AccessListRoleBindingNameListOutput,
  }));
// Input Schema
export interface AccessListRoleBindingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const AccessListRoleBindingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/listRoleBindings",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessListRoleBindingsInput>;

// Output Schema
export interface AccessListRoleBindingsOutput {
  kind?: string;
  metadata?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
    total_size?: number;
  };
  data?: {
    kind?: string;
    id?: string;
    metadata?: {
      self?: string;
      resource_name?: string;
      created_at?: string;
      updated_at?: string;
      deleted_at?: string;
    };
    principal?: string;
    role_name?: string;
    crn_pattern?: string;
  }[];
}
export const AccessListRoleBindingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        first: Schema.optional(Schema.String),
        last: Schema.optional(Schema.String),
        prev: Schema.optional(Schema.String),
        next: Schema.optional(Schema.String),
        total_size: Schema.optional(Schema.Number),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.Struct({
              self: Schema.optional(Schema.String),
              resource_name: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
              deleted_at: Schema.optional(Schema.String),
            }),
          ),
          principal: Schema.optional(Schema.String),
          role_name: Schema.optional(Schema.String),
          crn_pattern: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccessListRoleBindingsOutput>;

// The operation
/**
 * Organization role bindings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessListRoleBindings = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessListRoleBindingsInput,
    outputSchema: AccessListRoleBindingsOutput,
  }),
);
// Input Schema
export interface AccessListServiceAccountsInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const AccessListServiceAccountsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/listServiceAccounts",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<AccessListServiceAccountsInput>;

// Output Schema
export interface AccessListServiceAccountsOutput {
  kind?: string;
  metadata?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
    total_size?: number;
  };
  data?: {
    kind?: string;
    id?: string;
    metadata?: {
      self?: string;
      resource_name?: string;
      created_at?: string;
      updated_at?: string;
      deleted_at?: string;
    };
    display_name?: string;
    description?: string;
  }[];
}
export const AccessListServiceAccountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        first: Schema.optional(Schema.String),
        last: Schema.optional(Schema.String),
        prev: Schema.optional(Schema.String),
        next: Schema.optional(Schema.String),
        total_size: Schema.optional(Schema.Number),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.Struct({
              self: Schema.optional(Schema.String),
              resource_name: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
              deleted_at: Schema.optional(Schema.String),
            }),
          ),
          display_name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccessListServiceAccountsOutput>;

// The operation
/**
 * Organization service accounts details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessListServiceAccounts = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessListServiceAccountsInput,
    outputSchema: AccessListServiceAccountsOutput,
  }),
);
// Input Schema
export interface AccessListUsersInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const AccessListUsersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/access/default/listUsers",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<AccessListUsersInput>;

// Output Schema
export interface AccessListUsersOutput {
  kind?: string;
  metadata?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
    total_size?: number;
  };
  data?: {
    kind?: string;
    id?: string;
    metadata?: {
      self?: string;
      resource_name?: string;
      created_at?: string;
      updated_at?: string;
      deleted_at?: string;
    };
    email?: string;
    full_name?: string;
    auth_type?: string;
  }[];
}
export const AccessListUsersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(
    Schema.Struct({
      first: Schema.optional(Schema.String),
      last: Schema.optional(Schema.String),
      prev: Schema.optional(Schema.String),
      next: Schema.optional(Schema.String),
      total_size: Schema.optional(Schema.Number),
    }),
  ),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        kind: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Struct({
            self: Schema.optional(Schema.String),
            resource_name: Schema.optional(Schema.String),
            created_at: Schema.optional(Schema.String),
            updated_at: Schema.optional(Schema.String),
            deleted_at: Schema.optional(Schema.String),
          }),
        ),
        email: Schema.optional(Schema.String),
        full_name: Schema.optional(Schema.String),
        auth_type: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<AccessListUsersOutput>;

// The operation
/**
 * Organization users details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const AccessListUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessListUsersInput,
  outputSchema: AccessListUsersOutput,
}));
// Input Schema
export interface ClusterCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  kind?: string;
  properties?: {
    metadata?: {
      self?: string;
      resourceName?: string;
      createdTimestamp?: string;
      updatedTimestamp?: string;
      deletedTimestamp?: string;
    };
    spec?: {
      name?: string;
      availability?: string;
      cloud?: string;
      zone?: string;
      package?: "ESSENTIALS" | "ADVANCED";
      region?: string;
      kafkaBootstrapEndpoint?: string;
      httpEndpoint?: string;
      apiEndpoint?: string;
      config?: { kind?: string };
      environment?: {
        id?: string;
        environment?: string;
        related?: string;
        resourceName?: string;
      };
      network?: {
        id?: string;
        environment?: string;
        related?: string;
        resourceName?: string;
      };
      byok?: { id?: string; related?: string; resourceName?: string };
    };
    status?: { phase?: string; cku?: number };
  };
}
export const ClusterCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    clusterId: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(
          Schema.Struct({
            self: Schema.optional(Schema.String),
            resourceName: Schema.optional(Schema.String),
            createdTimestamp: Schema.optional(Schema.String),
            updatedTimestamp: Schema.optional(Schema.String),
            deletedTimestamp: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            availability: Schema.optional(Schema.String),
            cloud: Schema.optional(Schema.String),
            zone: Schema.optional(Schema.String),
            package: Schema.optional(
              Schema.Literals(["ESSENTIALS", "ADVANCED"]),
            ),
            region: Schema.optional(Schema.String),
            kafkaBootstrapEndpoint: Schema.optional(Schema.String),
            httpEndpoint: Schema.optional(Schema.String),
            apiEndpoint: Schema.optional(Schema.String),
            config: Schema.optional(
              Schema.Struct({
                kind: Schema.optional(Schema.String),
              }),
            ),
            environment: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                environment: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
              }),
            ),
            network: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                environment: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
              }),
            ),
            byok: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            phase: Schema.optional(Schema.String),
            cku: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterCreateOrUpdateInput>;

// Output Schema
export interface ClusterCreateOrUpdateOutput {
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
export const ClusterCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ClusterCreateOrUpdateOutput>;

// The operation
/**
 * Create confluent clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 */
export const ClusterCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClusterCreateOrUpdateInput,
    outputSchema: ClusterCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ClusterDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
}
export const ClusterDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<ClusterDeleteInput>;

// Output Schema
export type ClusterDeleteOutput = void;
export const ClusterDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClusterDeleteOutput>;

// The operation
/**
 * Delete confluent cluster by id
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 */
export const ClusterDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClusterDeleteInput,
  outputSchema: ClusterDeleteOutput,
}));
// Input Schema
export interface ConnectorCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  connectorName: string;
  properties: {
    connectorBasicInfo?: {
      connectorType?: "SINK" | "SOURCE";
      connectorClass?: "AZUREBLOBSOURCE" | "AZUREBLOBSINK";
      connectorName?: string;
      connectorId?: string;
      connectorState?: "PROVISIONING" | "RUNNING" | "PAUSED" | "FAILED";
    };
    connectorServiceTypeInfo?: {
      connectorServiceType:
        | "AzureBlobStorageSinkConnector"
        | "AzureBlobStorageSourceConnector"
        | "AzureCosmosDBSinkConnector"
        | "AzureCosmosDBSourceConnector"
        | "AzureSynapseAnalyticsSinkConnector";
    };
    partnerConnectorInfo?: {
      partnerConnectorType:
        | "KafkaAzureBlobStorageSource"
        | "KafkaAzureBlobStorageSink"
        | "KafkaAzureCosmosDBSource"
        | "KafkaAzureCosmosDBSink"
        | "KafkaAzureSynapseAnalyticsSink";
    };
  };
}
export const ConnectorCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    clusterId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      connectorBasicInfo: Schema.optional(
        Schema.Struct({
          connectorType: Schema.optional(Schema.Literals(["SINK", "SOURCE"])),
          connectorClass: Schema.optional(
            Schema.Literals(["AZUREBLOBSOURCE", "AZUREBLOBSINK"]),
          ),
          connectorName: Schema.optional(Schema.String),
          connectorId: Schema.optional(Schema.String),
          connectorState: Schema.optional(
            Schema.Literals(["PROVISIONING", "RUNNING", "PAUSED", "FAILED"]),
          ),
        }),
      ),
      connectorServiceTypeInfo: Schema.optional(
        Schema.Struct({
          connectorServiceType: Schema.Literals([
            "AzureBlobStorageSinkConnector",
            "AzureBlobStorageSourceConnector",
            "AzureCosmosDBSinkConnector",
            "AzureCosmosDBSourceConnector",
            "AzureSynapseAnalyticsSinkConnector",
          ]),
        }),
      ),
      partnerConnectorInfo: Schema.optional(
        Schema.Struct({
          partnerConnectorType: Schema.Literals([
            "KafkaAzureBlobStorageSource",
            "KafkaAzureBlobStorageSink",
            "KafkaAzureCosmosDBSource",
            "KafkaAzureCosmosDBSink",
            "KafkaAzureSynapseAnalyticsSink",
          ]),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/connectors/{connectorName}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<ConnectorCreateOrUpdateInput>;

// Output Schema
export interface ConnectorCreateOrUpdateOutput {
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
export const ConnectorCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectorCreateOrUpdateOutput>;

// The operation
/**
 * Create confluent connector by Name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param connectorName - Confluent connector name
 */
export const ConnectorCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorCreateOrUpdateInput,
    outputSchema: ConnectorCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ConnectorDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  connectorName: string;
}
export const ConnectorDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/connectors/{connectorName}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<ConnectorDeleteInput>;

// Output Schema
export type ConnectorDeleteOutput = void;
export const ConnectorDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectorDeleteOutput>;

// The operation
/**
 * Delete confluent connector by name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param connectorName - Confluent connector name
 */
export const ConnectorDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorDeleteInput,
  outputSchema: ConnectorDeleteOutput,
}));
// Input Schema
export interface ConnectorGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  connectorName: string;
}
export const ConnectorGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/connectors/{connectorName}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<ConnectorGetInput>;

// Output Schema
export interface ConnectorGetOutput {
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
export const ConnectorGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConnectorGetOutput>;

// The operation
/**
 * Get confluent connector by Name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param connectorName - Confluent connector name
 */
export const ConnectorGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorGetInput,
  outputSchema: ConnectorGetOutput,
}));
// Input Schema
export interface ConnectorListInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  pageSize?: number;
  pageToken?: string;
}
export const ConnectorListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  pageToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/connectors",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<ConnectorListInput>;

// Output Schema
export interface ConnectorListOutput {
  value: {
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
export const ConnectorListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ConnectorListOutput>;

// The operation
/**
 * Lists all the connectors in a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param pageSize - Pagination size
 * @param pageToken - An opaque pagination token to fetch the next set of records
 */
export const ConnectorList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorListInput,
  outputSchema: ConnectorListOutput,
}));
// Input Schema
export interface EnvironmentCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  kind?: string;
  properties?: {
    streamGovernanceConfig?: { package?: "ESSENTIALS" | "ADVANCED" };
    metadata?: {
      self?: string;
      resourceName?: string;
      createdTimestamp?: string;
      updatedTimestamp?: string;
      deletedTimestamp?: string;
    };
  };
}
export const EnvironmentCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        streamGovernanceConfig: Schema.optional(
          Schema.Struct({
            package: Schema.optional(
              Schema.Literals(["ESSENTIALS", "ADVANCED"]),
            ),
          }),
        ),
        metadata: Schema.optional(
          Schema.Struct({
            self: Schema.optional(Schema.String),
            resourceName: Schema.optional(Schema.String),
            createdTimestamp: Schema.optional(Schema.String),
            updatedTimestamp: Schema.optional(Schema.String),
            deletedTimestamp: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentCreateOrUpdateInput>;

// Output Schema
export interface EnvironmentCreateOrUpdateOutput {
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
export const EnvironmentCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EnvironmentCreateOrUpdateOutput>;

// The operation
/**
 * Create confluent environment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 */
export const EnvironmentCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EnvironmentCreateOrUpdateInput,
    outputSchema: EnvironmentCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface EnvironmentDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
}
export const EnvironmentDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<EnvironmentDeleteInput>;

// Output Schema
export type EnvironmentDeleteOutput = void;
export const EnvironmentDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentDeleteOutput>;

// The operation
/**
 * Delete confluent environment by id
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 */
export const EnvironmentDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentDeleteInput,
  outputSchema: EnvironmentDeleteOutput,
}));
// Input Schema
export interface MarketplaceAgreementsCreateInput {
  subscriptionId: string;
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
  properties?: {
    publisher?: string;
    product?: string;
    plan?: string;
    licenseTextLink?: string;
    privacyPolicyLink?: string;
    retrieveDatetime?: string;
    signature?: string;
    accepted?: boolean;
  };
}
export const MarketplaceAgreementsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        licenseTextLink: Schema.optional(Schema.String),
        privacyPolicyLink: Schema.optional(Schema.String),
        retrieveDatetime: Schema.optional(Schema.String),
        signature: Schema.optional(Schema.String),
        accepted: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Confluent/agreements/default",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsCreateInput>;

// Output Schema
export interface MarketplaceAgreementsCreateOutput {
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
  properties?: {
    publisher?: string;
    product?: string;
    plan?: string;
    licenseTextLink?: string;
    privacyPolicyLink?: string;
    retrieveDatetime?: string;
    signature?: string;
    accepted?: boolean;
  };
}
export const MarketplaceAgreementsCreateOutput =
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
    properties: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        licenseTextLink: Schema.optional(Schema.String),
        privacyPolicyLink: Schema.optional(Schema.String),
        retrieveDatetime: Schema.optional(Schema.String),
        signature: Schema.optional(Schema.String),
        accepted: Schema.optional(Schema.Boolean),
      }),
    ),
  }) as unknown as Schema.Codec<MarketplaceAgreementsCreateOutput>;

// The operation
/**
 * Create Confluent Marketplace agreement in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const MarketplaceAgreementsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceAgreementsCreateInput,
    outputSchema: MarketplaceAgreementsCreateOutput,
  }),
);
// Input Schema
export interface MarketplaceAgreementsListInput {
  subscriptionId: string;
}
export const MarketplaceAgreementsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Confluent/agreements",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsListInput>;

// Output Schema
export interface MarketplaceAgreementsListOutput {
  value: {
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
    properties?: {
      publisher?: string;
      product?: string;
      plan?: string;
      licenseTextLink?: string;
      privacyPolicyLink?: string;
      retrieveDatetime?: string;
      signature?: string;
      accepted?: boolean;
    };
  }[];
  nextLink?: string;
}
export const MarketplaceAgreementsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
        properties: Schema.optional(
          Schema.Struct({
            publisher: Schema.optional(Schema.String),
            product: Schema.optional(Schema.String),
            plan: Schema.optional(Schema.String),
            licenseTextLink: Schema.optional(Schema.String),
            privacyPolicyLink: Schema.optional(Schema.String),
            retrieveDatetime: Schema.optional(Schema.String),
            signature: Schema.optional(Schema.String),
            accepted: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceAgreementsListOutput>;

// The operation
/**
 * List Confluent marketplace agreements in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const MarketplaceAgreementsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceAgreementsListInput,
    outputSchema: MarketplaceAgreementsListOutput,
  }),
);
// Input Schema
export interface OrganizationCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  properties: {
    createdTime?: string;
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    organizationId?: string;
    ssoUrl?: string;
    offerDetail: {
      publisherId: string;
      id: string;
      planId: string;
      planName: string;
      termUnit: string;
      termId?: string;
      privateOfferId?: string;
      privateOfferIds?: string[];
      status?:
        | "Started"
        | "PendingFulfillmentStart"
        | "InProgress"
        | "Subscribed"
        | "Suspended"
        | "Reinstated"
        | "Succeeded"
        | "Failed"
        | "Unsubscribed"
        | "Updating";
    };
    userDetail: {
      firstName?: string;
      lastName?: string;
      emailAddress: string;
      userPrincipalName?: string;
      aadEmail?: string;
    };
    linkOrganization?: { token: string };
  };
  tags?: Record<string, string>;
  location: string;
}
export const OrganizationCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Deleted",
          "NotSpecified",
        ]),
      ),
      organizationId: Schema.optional(Schema.String),
      ssoUrl: Schema.optional(Schema.String),
      offerDetail: Schema.Struct({
        publisherId: Schema.String,
        id: Schema.String,
        planId: Schema.String,
        planName: Schema.String,
        termUnit: Schema.String,
        termId: Schema.optional(Schema.String),
        privateOfferId: Schema.optional(Schema.String),
        privateOfferIds: Schema.optional(Schema.Array(Schema.String)),
        status: Schema.optional(
          Schema.Literals([
            "Started",
            "PendingFulfillmentStart",
            "InProgress",
            "Subscribed",
            "Suspended",
            "Reinstated",
            "Succeeded",
            "Failed",
            "Unsubscribed",
            "Updating",
          ]),
        ),
      }),
      userDetail: Schema.Struct({
        firstName: Schema.optional(Schema.String),
        lastName: Schema.optional(Schema.String),
        emailAddress: Schema.String,
        userPrincipalName: Schema.optional(Schema.String),
        aadEmail: Schema.optional(Schema.String),
      }),
      linkOrganization: Schema.optional(
        Schema.Struct({
          token: Schema.String,
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationCreateInput>;

// Output Schema
export interface OrganizationCreateOutput {
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
export const OrganizationCreateOutput =
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
  }) as unknown as Schema.Codec<OrganizationCreateOutput>;

// The operation
/**
 * Create Organization resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const OrganizationCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrganizationCreateInput,
  outputSchema: OrganizationCreateOutput,
}));
// Input Schema
export interface OrganizationCreateAPIKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  name?: string;
  description?: string;
}
export const OrganizationCreateAPIKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    clusterId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/createAPIKey",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationCreateAPIKeyInput>;

// Output Schema
export interface OrganizationCreateAPIKeyOutput {
  kind?: string;
  id?: string;
  properties?: {
    metadata?: {
      self?: string;
      resourceName?: string;
      createdTimestamp?: string;
      updatedTimestamp?: string;
      deletedTimestamp?: string;
    };
    spec?: {
      description?: string;
      name?: string;
      secret?: Redacted.Redacted<string>;
      resource?: {
        id?: string;
        environment?: string;
        related?: string;
        resourceName?: string;
        kind?: string;
      };
      owner?: {
        id?: string;
        related?: string;
        resourceName?: string;
        kind?: string;
      };
    };
  };
}
export const OrganizationCreateAPIKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(
          Schema.Struct({
            self: Schema.optional(Schema.String),
            resourceName: Schema.optional(Schema.String),
            createdTimestamp: Schema.optional(Schema.String),
            updatedTimestamp: Schema.optional(Schema.String),
            deletedTimestamp: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            secret: Schema.optional(SensitiveOutputString),
            resource: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                environment: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
              }),
            ),
            owner: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<OrganizationCreateAPIKeyOutput>;

// The operation
/**
 * Creates API key for a schema registry Cluster ID or Kafka Cluster ID under a environment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 */
export const OrganizationCreateAPIKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrganizationCreateAPIKeyInput,
    outputSchema: OrganizationCreateAPIKeyOutput,
  }),
);
// Input Schema
export interface OrganizationDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
}
export const OrganizationDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationDeleteInput>;

// Output Schema
export type OrganizationDeleteOutput = void;
export const OrganizationDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrganizationDeleteOutput>;

// The operation
/**
 * Delete Organization resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const OrganizationDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrganizationDeleteInput,
  outputSchema: OrganizationDeleteOutput,
}));
// Input Schema
export interface OrganizationDeleteClusterAPIKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  apiKeyId: string;
}
export const OrganizationDeleteClusterAPIKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    apiKeyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/apiKeys/{apiKeyId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationDeleteClusterAPIKeyInput>;

// Output Schema
export type OrganizationDeleteClusterAPIKeyOutput = void;
export const OrganizationDeleteClusterAPIKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrganizationDeleteClusterAPIKeyOutput>;

// The operation
/**
 * Deletes API key of a kafka or schema registry cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param apiKeyId - Confluent API Key id
 */
export const OrganizationDeleteClusterAPIKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationDeleteClusterAPIKeyInput,
    outputSchema: OrganizationDeleteClusterAPIKeyOutput,
  }));
// Input Schema
export interface OrganizationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
}
export const OrganizationGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<OrganizationGetInput>;

// Output Schema
export interface OrganizationGetOutput {
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
export const OrganizationGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OrganizationGetOutput>;

// The operation
/**
 * Get the properties of a specific Organization resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const OrganizationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrganizationGetInput,
  outputSchema: OrganizationGetOutput,
}));
// Input Schema
export interface OrganizationGetClusterAPIKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  apiKeyId: string;
}
export const OrganizationGetClusterAPIKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    apiKeyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/apiKeys/{apiKeyId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationGetClusterAPIKeyInput>;

// Output Schema
export interface OrganizationGetClusterAPIKeyOutput {
  kind?: string;
  id?: string;
  properties?: {
    metadata?: {
      self?: string;
      resourceName?: string;
      createdTimestamp?: string;
      updatedTimestamp?: string;
      deletedTimestamp?: string;
    };
    spec?: {
      description?: string;
      name?: string;
      secret?: Redacted.Redacted<string>;
      resource?: {
        id?: string;
        environment?: string;
        related?: string;
        resourceName?: string;
        kind?: string;
      };
      owner?: {
        id?: string;
        related?: string;
        resourceName?: string;
        kind?: string;
      };
    };
  };
}
export const OrganizationGetClusterAPIKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(
          Schema.Struct({
            self: Schema.optional(Schema.String),
            resourceName: Schema.optional(Schema.String),
            createdTimestamp: Schema.optional(Schema.String),
            updatedTimestamp: Schema.optional(Schema.String),
            deletedTimestamp: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            secret: Schema.optional(SensitiveOutputString),
            resource: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                environment: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
              }),
            ),
            owner: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<OrganizationGetClusterAPIKeyOutput>;

// The operation
/**
 * Get API key details of a kafka or schema registry cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param apiKeyId - Confluent API Key id
 */
export const OrganizationGetClusterAPIKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationGetClusterAPIKeyInput,
    outputSchema: OrganizationGetClusterAPIKeyOutput,
  }));
// Input Schema
export interface OrganizationGetClusterByIdInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
}
export const OrganizationGetClusterByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    clusterId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationGetClusterByIdInput>;

// Output Schema
export interface OrganizationGetClusterByIdOutput {
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
export const OrganizationGetClusterByIdOutput =
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
  }) as unknown as Schema.Codec<OrganizationGetClusterByIdOutput>;

// The operation
/**
 * Get cluster by Id
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 */
export const OrganizationGetClusterById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrganizationGetClusterByIdInput,
    outputSchema: OrganizationGetClusterByIdOutput,
  }),
);
// Input Schema
export interface OrganizationGetEnvironmentByIdInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
}
export const OrganizationGetEnvironmentByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationGetEnvironmentByIdInput>;

// Output Schema
export interface OrganizationGetEnvironmentByIdOutput {
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
export const OrganizationGetEnvironmentByIdOutput =
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
  }) as unknown as Schema.Codec<OrganizationGetEnvironmentByIdOutput>;

// The operation
/**
 * Get Environment details by environment Id
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 */
export const OrganizationGetEnvironmentById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationGetEnvironmentByIdInput,
    outputSchema: OrganizationGetEnvironmentByIdOutput,
  }));
// Input Schema
export interface OrganizationGetSchemaRegistryClusterByIdInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
}
export const OrganizationGetSchemaRegistryClusterByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    clusterId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/schemaRegistryClusters/{clusterId}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationGetSchemaRegistryClusterByIdInput>;

// Output Schema
export interface OrganizationGetSchemaRegistryClusterByIdOutput {
  kind?: string;
  id?: string;
  properties?: {
    metadata?: {
      self?: string;
      resourceName?: string;
      createdTimestamp?: string;
      updatedTimestamp?: string;
      deletedTimestamp?: string;
    };
    spec?: {
      name?: string;
      httpEndpoint?: string;
      package?: string;
      region?: { id?: string; related?: string; resourceName?: string };
      environment?: { id?: string; related?: string; resourceName?: string };
      cloud?: string;
    };
    status?: { phase?: string };
  };
}
export const OrganizationGetSchemaRegistryClusterByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(
          Schema.Struct({
            self: Schema.optional(Schema.String),
            resourceName: Schema.optional(Schema.String),
            createdTimestamp: Schema.optional(Schema.String),
            updatedTimestamp: Schema.optional(Schema.String),
            deletedTimestamp: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            httpEndpoint: Schema.optional(Schema.String),
            package: Schema.optional(Schema.String),
            region: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
              }),
            ),
            environment: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                related: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
              }),
            ),
            cloud: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            phase: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<OrganizationGetSchemaRegistryClusterByIdOutput>;

// The operation
/**
 * Get schema registry cluster by Id
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent connector name
 */
export const OrganizationGetSchemaRegistryClusterById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationGetSchemaRegistryClusterByIdInput,
    outputSchema: OrganizationGetSchemaRegistryClusterByIdOutput,
  }));
// Input Schema
export interface OrganizationListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const OrganizationListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationListByResourceGroupInput>;

// Output Schema
export interface OrganizationListByResourceGroupOutput {
  value: {
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
export const OrganizationListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrganizationListByResourceGroupOutput>;

// The operation
/**
 * List all Organizations under the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const OrganizationListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationListByResourceGroupInput,
    outputSchema: OrganizationListByResourceGroupOutput,
  }));
// Input Schema
export interface OrganizationListBySubscriptionInput {
  subscriptionId: string;
}
export const OrganizationListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Confluent/organizations",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationListBySubscriptionInput>;

// Output Schema
export interface OrganizationListBySubscriptionOutput {
  value: {
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
export const OrganizationListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrganizationListBySubscriptionOutput>;

// The operation
/**
 * List all organizations under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OrganizationListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationListBySubscriptionInput,
    outputSchema: OrganizationListBySubscriptionOutput,
  }));
// Input Schema
export interface OrganizationListClustersInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  pageSize?: number;
  pageToken?: string;
}
export const OrganizationListClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationListClustersInput>;

// Output Schema
export interface OrganizationListClustersOutput {
  value: {
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
export const OrganizationListClustersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrganizationListClustersOutput>;

// The operation
/**
 * Lists of all the clusters in a environment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param pageSize - Pagination size
 * @param pageToken - An opaque pagination token to fetch the next set of records
 */
export const OrganizationListClusters = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrganizationListClustersInput,
    outputSchema: OrganizationListClustersOutput,
  }),
);
// Input Schema
export interface OrganizationListEnvironmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  pageSize?: number;
  pageToken?: string;
}
export const OrganizationListEnvironmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationListEnvironmentsInput>;

// Output Schema
export interface OrganizationListEnvironmentsOutput {
  value: {
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
export const OrganizationListEnvironmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrganizationListEnvironmentsOutput>;

// The operation
/**
 * Lists of all the environments in a organization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param pageSize - Pagination size
 * @param pageToken - An opaque pagination token to fetch the next set of records
 */
export const OrganizationListEnvironments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationListEnvironmentsInput,
    outputSchema: OrganizationListEnvironmentsOutput,
  }));
// Input Schema
export interface OrganizationListRegionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  searchFilters?: Record<string, string>;
}
export const OrganizationListRegionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    searchFilters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/listRegions",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationListRegionsInput>;

// Output Schema
export interface OrganizationListRegionsOutput {
  data?: {
    kind?: string;
    id?: string;
    properties?: {
      metadata?: {
        self?: string;
        resourceName?: string;
        createdTimestamp?: string;
        updatedTimestamp?: string;
        deletedTimestamp?: string;
      };
      spec?: {
        name?: string;
        cloud?: string;
        regionName?: string;
        packages?: string[];
      };
    };
  }[];
}
export const OrganizationListRegionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              metadata: Schema.optional(
                Schema.Struct({
                  self: Schema.optional(Schema.String),
                  resourceName: Schema.optional(Schema.String),
                  createdTimestamp: Schema.optional(Schema.String),
                  updatedTimestamp: Schema.optional(Schema.String),
                  deletedTimestamp: Schema.optional(Schema.String),
                }),
              ),
              spec: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  cloud: Schema.optional(Schema.String),
                  regionName: Schema.optional(Schema.String),
                  packages: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<OrganizationListRegionsOutput>;

// The operation
/**
 * cloud provider regions available for creating Schema Registry clusters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const OrganizationListRegions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrganizationListRegionsInput,
    outputSchema: OrganizationListRegionsOutput,
  }),
);
// Input Schema
export interface OrganizationListSchemaRegistryClustersInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  pageSize?: number;
  pageToken?: string;
}
export const OrganizationListSchemaRegistryClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    environmentId: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/schemaRegistryClusters",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationListSchemaRegistryClustersInput>;

// Output Schema
export interface OrganizationListSchemaRegistryClustersOutput {
  value: {
    kind?: string;
    id?: string;
    properties?: {
      metadata?: {
        self?: string;
        resourceName?: string;
        createdTimestamp?: string;
        updatedTimestamp?: string;
        deletedTimestamp?: string;
      };
      spec?: {
        name?: string;
        httpEndpoint?: string;
        package?: string;
        region?: { id?: string; related?: string; resourceName?: string };
        environment?: { id?: string; related?: string; resourceName?: string };
        cloud?: string;
      };
      status?: { phase?: string };
    };
  }[];
  nextLink?: string;
}
export const OrganizationListSchemaRegistryClustersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        kind: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            metadata: Schema.optional(
              Schema.Struct({
                self: Schema.optional(Schema.String),
                resourceName: Schema.optional(Schema.String),
                createdTimestamp: Schema.optional(Schema.String),
                updatedTimestamp: Schema.optional(Schema.String),
                deletedTimestamp: Schema.optional(Schema.String),
              }),
            ),
            spec: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                httpEndpoint: Schema.optional(Schema.String),
                package: Schema.optional(Schema.String),
                region: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    related: Schema.optional(Schema.String),
                    resourceName: Schema.optional(Schema.String),
                  }),
                ),
                environment: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    related: Schema.optional(Schema.String),
                    resourceName: Schema.optional(Schema.String),
                  }),
                ),
                cloud: Schema.optional(Schema.String),
              }),
            ),
            status: Schema.optional(
              Schema.Struct({
                phase: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrganizationListSchemaRegistryClustersOutput>;

// The operation
/**
 * Get schema registry clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param pageSize - Pagination size
 * @param pageToken - An opaque pagination token to fetch the next set of records
 */
export const OrganizationListSchemaRegistryClusters =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationListSchemaRegistryClustersInput,
    outputSchema: OrganizationListSchemaRegistryClustersOutput,
  }));
// Input Schema
export interface OrganizationOperationsListInput {}
export const OrganizationOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Confluent/operations",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationOperationsListInput>;

// Output Schema
export interface OrganizationOperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    isDataAction?: boolean;
  }[];
  nextLink?: string;
}
export const OrganizationOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        isDataAction: Schema.optional(Schema.Boolean),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrganizationOperationsListOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OrganizationOperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrganizationOperationsListInput,
    outputSchema: OrganizationOperationsListOutput,
  }),
);
// Input Schema
export interface OrganizationUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  tags?: Record<string, string>;
}
export const OrganizationUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<OrganizationUpdateInput>;

// Output Schema
export interface OrganizationUpdateOutput {
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
export const OrganizationUpdateOutput =
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
  }) as unknown as Schema.Codec<OrganizationUpdateOutput>;

// The operation
/**
 * Update Organization resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const OrganizationUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrganizationUpdateInput,
  outputSchema: OrganizationUpdateOutput,
}));
// Input Schema
export interface TopicsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  topicName: string;
  properties?: {
    kind?: string;
    topicId?: string;
    metadata?: { self?: string; resourceName?: string };
    partitions?: { related?: string };
    configs?: { related?: string };
    inputConfigs?: { name?: string; value?: string }[];
    partitionsReassignments?: { related?: string };
    partitionsCount?: string;
    replicationFactor?: string;
  };
}
export const TopicsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      kind: Schema.optional(Schema.String),
      topicId: Schema.optional(Schema.String),
      metadata: Schema.optional(
        Schema.Struct({
          self: Schema.optional(Schema.String),
          resourceName: Schema.optional(Schema.String),
        }),
      ),
      partitions: Schema.optional(
        Schema.Struct({
          related: Schema.optional(Schema.String),
        }),
      ),
      configs: Schema.optional(
        Schema.Struct({
          related: Schema.optional(Schema.String),
        }),
      ),
      inputConfigs: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
      partitionsReassignments: Schema.optional(
        Schema.Struct({
          related: Schema.optional(Schema.String),
        }),
      ),
      partitionsCount: Schema.optional(Schema.String),
      replicationFactor: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/topics/{topicName}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<TopicsCreateInput>;

// Output Schema
export interface TopicsCreateOutput {
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
export const TopicsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TopicsCreateOutput>;

// The operation
/**
 * Create confluent topics by Name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param topicName - Confluent kafka or schema registry topic name
 */
export const TopicsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsCreateInput,
  outputSchema: TopicsCreateOutput,
}));
// Input Schema
export interface TopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  topicName: string;
}
export const TopicsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/topics/{topicName}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<TopicsDeleteInput>;

// Output Schema
export type TopicsDeleteOutput = void;
export const TopicsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TopicsDeleteOutput>;

// The operation
/**
 * Delete confluent topic by name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param topicName - Confluent kafka or schema registry topic name
 */
export const TopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsDeleteInput,
  outputSchema: TopicsDeleteOutput,
}));
// Input Schema
export interface TopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  topicName: string;
}
export const TopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/topics/{topicName}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<TopicsGetInput>;

// Output Schema
export interface TopicsGetOutput {
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
export const TopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TopicsGetOutput>;

// The operation
/**
 * Get confluent topic by Name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param topicName - Confluent kafka or schema registry topic name
 */
export const TopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsGetInput,
  outputSchema: TopicsGetOutput,
}));
// Input Schema
export interface TopicsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  environmentId: string;
  clusterId: string;
  pageSize?: number;
  pageToken?: string;
}
export const TopicsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  organizationName: Schema.String.pipe(T.PathParam()),
  environmentId: Schema.String.pipe(T.PathParam()),
  clusterId: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  pageToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/topics",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<TopicsListInput>;

// Output Schema
export interface TopicsListOutput {
  value: {
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
export const TopicsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TopicsListOutput>;

// The operation
/**
 * Lists of all the topics in a clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 * @param environmentId - Confluent environment id
 * @param clusterId - Confluent kafka or schema registry cluster id
 * @param pageSize - Pagination size
 * @param pageToken - An opaque pagination token to fetch the next set of records
 */
export const TopicsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsListInput,
  outputSchema: TopicsListOutput,
}));
// Input Schema
export interface ValidationsValidateOrganizationInput {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  properties: {
    createdTime?: string;
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    organizationId?: string;
    ssoUrl?: string;
    offerDetail: {
      publisherId: string;
      id: string;
      planId: string;
      planName: string;
      termUnit: string;
      termId?: string;
      privateOfferId?: string;
      privateOfferIds?: string[];
      status?:
        | "Started"
        | "PendingFulfillmentStart"
        | "InProgress"
        | "Subscribed"
        | "Suspended"
        | "Reinstated"
        | "Succeeded"
        | "Failed"
        | "Unsubscribed"
        | "Updating";
    };
    userDetail: {
      firstName?: string;
      lastName?: string;
      emailAddress: string;
      userPrincipalName?: string;
      aadEmail?: string;
    };
    linkOrganization?: { token: string };
  };
  tags?: Record<string, string>;
  location: string;
}
export const ValidationsValidateOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Deleted",
          "NotSpecified",
        ]),
      ),
      organizationId: Schema.optional(Schema.String),
      ssoUrl: Schema.optional(Schema.String),
      offerDetail: Schema.Struct({
        publisherId: Schema.String,
        id: Schema.String,
        planId: Schema.String,
        planName: Schema.String,
        termUnit: Schema.String,
        termId: Schema.optional(Schema.String),
        privateOfferId: Schema.optional(Schema.String),
        privateOfferIds: Schema.optional(Schema.Array(Schema.String)),
        status: Schema.optional(
          Schema.Literals([
            "Started",
            "PendingFulfillmentStart",
            "InProgress",
            "Subscribed",
            "Suspended",
            "Reinstated",
            "Succeeded",
            "Failed",
            "Unsubscribed",
            "Updating",
          ]),
        ),
      }),
      userDetail: Schema.Struct({
        firstName: Schema.optional(Schema.String),
        lastName: Schema.optional(Schema.String),
        emailAddress: Schema.String,
        userPrincipalName: Schema.optional(Schema.String),
        aadEmail: Schema.optional(Schema.String),
      }),
      linkOrganization: Schema.optional(
        Schema.Struct({
          token: Schema.String,
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/validations/{organizationName}/orgvalidate",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<ValidationsValidateOrganizationInput>;

// Output Schema
export interface ValidationsValidateOrganizationOutput {
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
export const ValidationsValidateOrganizationOutput =
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
  }) as unknown as Schema.Codec<ValidationsValidateOrganizationOutput>;

// The operation
/**
 * Organization Validate proxy resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const ValidationsValidateOrganization =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ValidationsValidateOrganizationInput,
    outputSchema: ValidationsValidateOrganizationOutput,
  }));
// Input Schema
export interface ValidationsValidateOrganizationV2Input {
  subscriptionId: string;
  resourceGroupName: string;
  organizationName: string;
  properties: {
    createdTime?: string;
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    organizationId?: string;
    ssoUrl?: string;
    offerDetail: {
      publisherId: string;
      id: string;
      planId: string;
      planName: string;
      termUnit: string;
      termId?: string;
      privateOfferId?: string;
      privateOfferIds?: string[];
      status?:
        | "Started"
        | "PendingFulfillmentStart"
        | "InProgress"
        | "Subscribed"
        | "Suspended"
        | "Reinstated"
        | "Succeeded"
        | "Failed"
        | "Unsubscribed"
        | "Updating";
    };
    userDetail: {
      firstName?: string;
      lastName?: string;
      emailAddress: string;
      userPrincipalName?: string;
      aadEmail?: string;
    };
    linkOrganization?: { token: string };
  };
  tags?: Record<string, string>;
  location: string;
}
export const ValidationsValidateOrganizationV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    organizationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Deleted",
          "NotSpecified",
        ]),
      ),
      organizationId: Schema.optional(Schema.String),
      ssoUrl: Schema.optional(Schema.String),
      offerDetail: Schema.Struct({
        publisherId: Schema.String,
        id: Schema.String,
        planId: Schema.String,
        planName: Schema.String,
        termUnit: Schema.String,
        termId: Schema.optional(Schema.String),
        privateOfferId: Schema.optional(Schema.String),
        privateOfferIds: Schema.optional(Schema.Array(Schema.String)),
        status: Schema.optional(
          Schema.Literals([
            "Started",
            "PendingFulfillmentStart",
            "InProgress",
            "Subscribed",
            "Suspended",
            "Reinstated",
            "Succeeded",
            "Failed",
            "Unsubscribed",
            "Updating",
          ]),
        ),
      }),
      userDetail: Schema.Struct({
        firstName: Schema.optional(Schema.String),
        lastName: Schema.optional(Schema.String),
        emailAddress: Schema.String,
        userPrincipalName: Schema.optional(Schema.String),
        aadEmail: Schema.optional(Schema.String),
      }),
      linkOrganization: Schema.optional(
        Schema.Struct({
          token: Schema.String,
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/validations/{organizationName}/orgvalidateV2",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<ValidationsValidateOrganizationV2Input>;

// Output Schema
export interface ValidationsValidateOrganizationV2Output {
  info?: Record<string, string>;
}
export const ValidationsValidateOrganizationV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    info: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ValidationsValidateOrganizationV2Output>;

// The operation
/**
 * Organization Validate proxy resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param organizationName - Organization resource name
 */
export const ValidationsValidateOrganizationV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ValidationsValidateOrganizationV2Input,
    outputSchema: ValidationsValidateOrganizationV2Output,
  }));
