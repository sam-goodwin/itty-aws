/**
 * Azure Support API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ChatTranscriptsGetInput {
  subscriptionId: string;
  supportTicketName: string;
  chatTranscriptName: string;
}
export const ChatTranscriptsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
    chatTranscriptName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/chatTranscripts/{chatTranscriptName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ChatTranscriptsGetInput>;

// Output Schema
export interface ChatTranscriptsGetOutput {
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
export const ChatTranscriptsGetOutput =
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
  }) as unknown as Schema.Codec<ChatTranscriptsGetOutput>;

// The operation
/**
 * Returns chatTranscript details for a support ticket under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param chatTranscriptName - The name of the ChatTranscriptDetails
 */
export const ChatTranscriptsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChatTranscriptsGetInput,
  outputSchema: ChatTranscriptsGetOutput,
}));
// Input Schema
export interface ChatTranscriptsListInput {
  subscriptionId: string;
  supportTicketName: string;
}
export const ChatTranscriptsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/chatTranscripts",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ChatTranscriptsListInput>;

// Output Schema
export interface ChatTranscriptsListOutput {
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
export const ChatTranscriptsListOutput =
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
  }) as unknown as Schema.Codec<ChatTranscriptsListOutput>;

// The operation
/**
 * Lists all chat transcripts for a support ticket under subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const ChatTranscriptsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChatTranscriptsListInput,
  outputSchema: ChatTranscriptsListOutput,
}));
// Input Schema
export interface ChatTranscriptsNoSubscriptionGetInput {
  supportTicketName: string;
  chatTranscriptName: string;
}
export const ChatTranscriptsNoSubscriptionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
    chatTranscriptName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}/chatTranscripts/{chatTranscriptName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ChatTranscriptsNoSubscriptionGetInput>;

// Output Schema
export interface ChatTranscriptsNoSubscriptionGetOutput {
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
export const ChatTranscriptsNoSubscriptionGetOutput =
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
  }) as unknown as Schema.Codec<ChatTranscriptsNoSubscriptionGetOutput>;

// The operation
/**
 * Returns chatTranscript details for a no subscription support ticket.
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param chatTranscriptName - The name of the ChatTranscriptDetails
 */
export const ChatTranscriptsNoSubscriptionGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ChatTranscriptsNoSubscriptionGetInput,
    outputSchema: ChatTranscriptsNoSubscriptionGetOutput,
  }));
// Input Schema
export interface ChatTranscriptsNoSubscriptionListInput {
  supportTicketName: string;
}
export const ChatTranscriptsNoSubscriptionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}/chatTranscripts",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ChatTranscriptsNoSubscriptionListInput>;

// Output Schema
export interface ChatTranscriptsNoSubscriptionListOutput {
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
export const ChatTranscriptsNoSubscriptionListOutput =
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
  }) as unknown as Schema.Codec<ChatTranscriptsNoSubscriptionListOutput>;

// The operation
/**
 * Lists all chat transcripts for a support ticket
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const ChatTranscriptsNoSubscriptionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ChatTranscriptsNoSubscriptionListInput,
    outputSchema: ChatTranscriptsNoSubscriptionListOutput,
  }));
// Input Schema
export interface CommunicationsCheckNameAvailabilityInput {
  subscriptionId: string;
  supportTicketName: string;
  name: string;
  type: "Microsoft.Support/supportTickets" | "Microsoft.Support/communications";
}
export const CommunicationsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Support/supportTickets",
      "Microsoft.Support/communications",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/checkNameAvailability",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<CommunicationsCheckNameAvailabilityInput>;

// Output Schema
export interface CommunicationsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const CommunicationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CommunicationsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the availability of a resource name. This API should be used to check the uniqueness of the name for adding a new communication to the support ticket.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const CommunicationsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommunicationsCheckNameAvailabilityInput,
    outputSchema: CommunicationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface CommunicationsCreateInput {
  subscriptionId: string;
  supportTicketName: string;
  communicationName: string;
  properties: {
    communicationType?: "web" | "phone";
    communicationDirection?: "inbound" | "outbound";
    sender?: string;
    subject: string;
    body: string;
    createdDate?: string;
  };
}
export const CommunicationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
    communicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      communicationType: Schema.optional(Schema.Literals(["web", "phone"])),
      communicationDirection: Schema.optional(
        Schema.Literals(["inbound", "outbound"]),
      ),
      sender: Schema.optional(Schema.String),
      subject: Schema.String,
      body: Schema.String,
      createdDate: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<CommunicationsCreateInput>;

// Output Schema
export interface CommunicationsCreateOutput {
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
export const CommunicationsCreateOutput =
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
  }) as unknown as Schema.Codec<CommunicationsCreateOutput>;

// The operation
/**
 * Adds a new customer communication to an Azure support ticket.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param communicationName - The name of the CommunicationDetails
 */
export const CommunicationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommunicationsCreateInput,
    outputSchema: CommunicationsCreateOutput,
  }),
);
// Input Schema
export interface CommunicationsGetInput {
  subscriptionId: string;
  supportTicketName: string;
  communicationName: string;
}
export const CommunicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
    communicationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<CommunicationsGetInput>;

// Output Schema
export interface CommunicationsGetOutput {
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
export const CommunicationsGetOutput =
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
  }) as unknown as Schema.Codec<CommunicationsGetOutput>;

// The operation
/**
 * Returns communication details for a support ticket.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param communicationName - The name of the CommunicationDetails
 */
export const CommunicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommunicationsGetInput,
  outputSchema: CommunicationsGetOutput,
}));
// Input Schema
export interface CommunicationsListInput {
  subscriptionId: string;
  supportTicketName: string;
  $top?: number;
  $filter?: string;
}
export const CommunicationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<CommunicationsListInput>;

// Output Schema
export interface CommunicationsListOutput {
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
export const CommunicationsListOutput =
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
  }) as unknown as Schema.Codec<CommunicationsListOutput>;

// The operation
/**
 * Lists all communications (attachments not included) for a support ticket. <br/></br> You can also filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the $filter parameter. The only type of communication supported today is _Web_. Output will be a paged result with _nextLink_, using which you can retrieve the next set of Communication results. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param $top - The number of values to return in the collection. Default is 10 and max is 10.
 * @param $filter - The filter to apply on the operation. You can filter by communicationType and createdDate properties. CommunicationType supports Equals ('eq') operator and createdDate supports Greater Than ('gt') and Greater Than or Equals ('ge') operators. You may combine the CommunicationType and CreatedDate filters by Logical And ('and') operator.
 */
export const CommunicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommunicationsListInput,
  outputSchema: CommunicationsListOutput,
}));
// Input Schema
export interface CommunicationsNoSubscriptionCheckNameAvailabilityInput {
  supportTicketName: string;
  name: string;
  type: "Microsoft.Support/supportTickets" | "Microsoft.Support/communications";
}
export const CommunicationsNoSubscriptionCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Support/supportTickets",
      "Microsoft.Support/communications",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}/checkNameAvailability",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<CommunicationsNoSubscriptionCheckNameAvailabilityInput>;

// Output Schema
export interface CommunicationsNoSubscriptionCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const CommunicationsNoSubscriptionCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CommunicationsNoSubscriptionCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the availability of a resource name. This API should be used to check the uniqueness of the name for adding a new communication to the support ticket.
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const CommunicationsNoSubscriptionCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommunicationsNoSubscriptionCheckNameAvailabilityInput,
    outputSchema: CommunicationsNoSubscriptionCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface CommunicationsNoSubscriptionCreateInput {
  supportTicketName: string;
  communicationName: string;
  properties: {
    communicationType?: "web" | "phone";
    communicationDirection?: "inbound" | "outbound";
    sender?: string;
    subject: string;
    body: string;
    createdDate?: string;
  };
}
export const CommunicationsNoSubscriptionCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
    communicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      communicationType: Schema.optional(Schema.Literals(["web", "phone"])),
      communicationDirection: Schema.optional(
        Schema.Literals(["inbound", "outbound"]),
      ),
      sender: Schema.optional(Schema.String),
      subject: Schema.String,
      body: Schema.String,
      createdDate: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<CommunicationsNoSubscriptionCreateInput>;

// Output Schema
export interface CommunicationsNoSubscriptionCreateOutput {
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
export const CommunicationsNoSubscriptionCreateOutput =
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
  }) as unknown as Schema.Codec<CommunicationsNoSubscriptionCreateOutput>;

// The operation
/**
 * Adds a new customer communication to an Azure support ticket.
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param communicationName - The name of the CommunicationDetails
 */
export const CommunicationsNoSubscriptionCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommunicationsNoSubscriptionCreateInput,
    outputSchema: CommunicationsNoSubscriptionCreateOutput,
  }));
// Input Schema
export interface CommunicationsNoSubscriptionGetInput {
  supportTicketName: string;
  communicationName: string;
}
export const CommunicationsNoSubscriptionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
    communicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<CommunicationsNoSubscriptionGetInput>;

// Output Schema
export interface CommunicationsNoSubscriptionGetOutput {
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
export const CommunicationsNoSubscriptionGetOutput =
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
  }) as unknown as Schema.Codec<CommunicationsNoSubscriptionGetOutput>;

// The operation
/**
 * Returns communication details for a support ticket.
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param communicationName - The name of the CommunicationDetails
 */
export const CommunicationsNoSubscriptionGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommunicationsNoSubscriptionGetInput,
    outputSchema: CommunicationsNoSubscriptionGetOutput,
  }));
// Input Schema
export interface CommunicationsNoSubscriptionListInput {
  supportTicketName: string;
  $top?: number;
  $filter?: string;
}
export const CommunicationsNoSubscriptionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<CommunicationsNoSubscriptionListInput>;

// Output Schema
export interface CommunicationsNoSubscriptionListOutput {
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
export const CommunicationsNoSubscriptionListOutput =
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
  }) as unknown as Schema.Codec<CommunicationsNoSubscriptionListOutput>;

// The operation
/**
 * Lists all communications (attachments not included) for a support ticket. <br/></br> You can also filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the $filter parameter. The only type of communication supported today is _Web_. Output will be a paged result with _nextLink_, using which you can retrieve the next set of Communication results. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 * @param $top - The number of values to return in the collection. Default is 10 and max is 10.
 * @param $filter - The filter to apply on the operation. You can filter by communicationType and createdDate properties. CommunicationType supports Equals ('eq') operator and createdDate supports Greater Than ('gt') and Greater Than or Equals ('ge') operators. You may combine the CommunicationType and CreatedDate filters by Logical And ('and') operator.
 */
export const CommunicationsNoSubscriptionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommunicationsNoSubscriptionListInput,
    outputSchema: CommunicationsNoSubscriptionListOutput,
  }));
// Input Schema
export interface FilesCreateInput {
  subscriptionId: string;
  fileWorkspaceName: string;
  fileName: string;
  properties?: {
    createdOn?: string;
    chunkSize?: number;
    fileSize?: number;
    numberOfChunks?: number;
  };
}
export const FilesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      createdOn: Schema.optional(Schema.String),
      chunkSize: Schema.optional(Schema.Number),
      fileSize: Schema.optional(Schema.Number),
      numberOfChunks: Schema.optional(Schema.Number),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files/{fileName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FilesCreateInput>;

// Output Schema
export interface FilesCreateOutput {
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
export const FilesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FilesCreateOutput>;

// The operation
/**
 * Creates a new file under a workspace for the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 * @param fileName - The name of the FileDetails
 */
export const FilesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesCreateInput,
  outputSchema: FilesCreateOutput,
}));
// Input Schema
export interface FilesGetInput {
  subscriptionId: string;
  fileWorkspaceName: string;
  fileName: string;
}
export const FilesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files/{fileName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FilesGetInput>;

// Output Schema
export interface FilesGetOutput {
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
export const FilesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FilesGetOutput>;

// The operation
/**
 * Returns details of a specific file in a work space.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 * @param fileName - The name of the FileDetails
 */
export const FilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesGetInput,
  outputSchema: FilesGetOutput,
}));
// Input Schema
export interface FilesListInput {
  subscriptionId: string;
  fileWorkspaceName: string;
}
export const FilesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  fileWorkspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FilesListInput>;

// Output Schema
export interface FilesListOutput {
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
export const FilesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FilesListOutput>;

// The operation
/**
 * Lists all the Files information under a workspace for an Azure subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 */
export const FilesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesListInput,
  outputSchema: FilesListOutput,
}));
// Input Schema
export interface FilesNoSubscriptionCreateInput {
  fileWorkspaceName: string;
  fileName: string;
  properties?: {
    createdOn?: string;
    chunkSize?: number;
    fileSize?: number;
    numberOfChunks?: number;
  };
}
export const FilesNoSubscriptionCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
    fileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        createdOn: Schema.optional(Schema.String),
        chunkSize: Schema.optional(Schema.Number),
        fileSize: Schema.optional(Schema.Number),
        numberOfChunks: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files/{fileName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FilesNoSubscriptionCreateInput>;

// Output Schema
export interface FilesNoSubscriptionCreateOutput {
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
export const FilesNoSubscriptionCreateOutput =
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
  }) as unknown as Schema.Codec<FilesNoSubscriptionCreateOutput>;

// The operation
/**
 * Creates a new file under a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 * @param fileName - The name of the FileDetails
 */
export const FilesNoSubscriptionCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FilesNoSubscriptionCreateInput,
    outputSchema: FilesNoSubscriptionCreateOutput,
  }),
);
// Input Schema
export interface FilesNoSubscriptionGetInput {
  fileWorkspaceName: string;
  fileName: string;
}
export const FilesNoSubscriptionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
    fileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files/{fileName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FilesNoSubscriptionGetInput>;

// Output Schema
export interface FilesNoSubscriptionGetOutput {
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
export const FilesNoSubscriptionGetOutput =
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
  }) as unknown as Schema.Codec<FilesNoSubscriptionGetOutput>;

// The operation
/**
 * Returns details of a specific file in a work space.
 *
 * @param api-version - The API version to use for this operation.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 * @param fileName - The name of the FileDetails
 */
export const FilesNoSubscriptionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FilesNoSubscriptionGetInput,
    outputSchema: FilesNoSubscriptionGetOutput,
  }),
);
// Input Schema
export interface FilesNoSubscriptionListInput {
  fileWorkspaceName: string;
}
export const FilesNoSubscriptionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FilesNoSubscriptionListInput>;

// Output Schema
export interface FilesNoSubscriptionListOutput {
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
export const FilesNoSubscriptionListOutput =
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
  }) as unknown as Schema.Codec<FilesNoSubscriptionListOutput>;

// The operation
/**
 * Lists all the Files information under a workspace for an Azure subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 */
export const FilesNoSubscriptionList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FilesNoSubscriptionListInput,
    outputSchema: FilesNoSubscriptionListOutput,
  }),
);
// Input Schema
export interface FilesNoSubscriptionUploadInput {
  fileWorkspaceName: string;
  fileName: string;
  content?: string;
  chunkIndex?: number;
}
export const FilesNoSubscriptionUploadInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
    fileName: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.String),
    chunkIndex: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files/{fileName}/upload",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FilesNoSubscriptionUploadInput>;

// Output Schema
export type FilesNoSubscriptionUploadOutput = void;
export const FilesNoSubscriptionUploadOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FilesNoSubscriptionUploadOutput>;

// The operation
/**
 * This API allows you to upload content to a file
 *
 * @param api-version - The API version to use for this operation.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 * @param fileName - The name of the FileDetails
 */
export const FilesNoSubscriptionUpload = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FilesNoSubscriptionUploadInput,
    outputSchema: FilesNoSubscriptionUploadOutput,
  }),
);
// Input Schema
export interface FilesUploadInput {
  subscriptionId: string;
  fileWorkspaceName: string;
  fileName: string;
  content?: string;
  chunkIndex?: number;
}
export const FilesUploadInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
  content: Schema.optional(Schema.String),
  chunkIndex: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}/files/{fileName}/upload",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FilesUploadInput>;

// Output Schema
export type FilesUploadOutput = void;
export const FilesUploadOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FilesUploadOutput>;

// The operation
/**
 * This API allows you to upload content to a file
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 * @param fileName - The name of the FileDetails
 */
export const FilesUpload = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesUploadInput,
  outputSchema: FilesUploadOutput,
}));
// Input Schema
export interface FileWorkspacesCreateInput {
  subscriptionId: string;
  fileWorkspaceName: string;
}
export const FileWorkspacesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileWorkspacesCreateInput>;

// Output Schema
export interface FileWorkspacesCreateOutput {
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
export const FileWorkspacesCreateOutput =
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
  }) as unknown as Schema.Codec<FileWorkspacesCreateOutput>;

// The operation
/**
 * Creates a new file workspace for the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 */
export const FileWorkspacesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileWorkspacesCreateInput,
    outputSchema: FileWorkspacesCreateOutput,
  }),
);
// Input Schema
export interface FileWorkspacesGetInput {
  subscriptionId: string;
  fileWorkspaceName: string;
}
export const FileWorkspacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FileWorkspacesGetInput>;

// Output Schema
export interface FileWorkspacesGetOutput {
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
export const FileWorkspacesGetOutput =
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
  }) as unknown as Schema.Codec<FileWorkspacesGetOutput>;

// The operation
/**
 * Gets details for a specific file workspace in an Azure subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 */
export const FileWorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileWorkspacesGetInput,
  outputSchema: FileWorkspacesGetOutput,
}));
// Input Schema
export interface FileWorkspacesNoSubscriptionCreateInput {
  fileWorkspaceName: string;
}
export const FileWorkspacesNoSubscriptionCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileWorkspacesNoSubscriptionCreateInput>;

// Output Schema
export interface FileWorkspacesNoSubscriptionCreateOutput {
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
export const FileWorkspacesNoSubscriptionCreateOutput =
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
  }) as unknown as Schema.Codec<FileWorkspacesNoSubscriptionCreateOutput>;

// The operation
/**
 * Creates a new file workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 */
export const FileWorkspacesNoSubscriptionCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileWorkspacesNoSubscriptionCreateInput,
    outputSchema: FileWorkspacesNoSubscriptionCreateOutput,
  }));
// Input Schema
export interface FileWorkspacesNoSubscriptionGetInput {
  fileWorkspaceName: string;
}
export const FileWorkspacesNoSubscriptionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/fileWorkspaces/{fileWorkspaceName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileWorkspacesNoSubscriptionGetInput>;

// Output Schema
export interface FileWorkspacesNoSubscriptionGetOutput {
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
export const FileWorkspacesNoSubscriptionGetOutput =
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
  }) as unknown as Schema.Codec<FileWorkspacesNoSubscriptionGetOutput>;

// The operation
/**
 * Gets details for a specific file workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param fileWorkspaceName - The name of the FileWorkspaceDetails
 */
export const FileWorkspacesNoSubscriptionGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileWorkspacesNoSubscriptionGetInput,
    outputSchema: FileWorkspacesNoSubscriptionGetOutput,
  }));
// Input Schema
export interface LookUpResourceIdPostInput {
  identifier?: string;
  type?: "Microsoft.Support/supportTickets";
}
export const LookUpResourceIdPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["Microsoft.Support/supportTickets"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Support/lookUpResourceId",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<LookUpResourceIdPostInput>;

// Output Schema
export interface LookUpResourceIdPostOutput {
  resourceId?: string;
}
export const LookUpResourceIdPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LookUpResourceIdPostOutput>;

// The operation
/**
 * This operation fetches ARM resource id of support resource type.
 *
 * @param api-version - The API version to use for this operation.
 */
export const LookUpResourceIdPost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LookUpResourceIdPostInput,
    outputSchema: LookUpResourceIdPostOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Support/operations",
    apiVersion: "2026-06-01",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProblemClassificationsClassifyProblemsInput {
  subscriptionId: string;
  problemServiceName: string;
  issueSummary: string;
  resourceId?: string;
}
export const ProblemClassificationsClassifyProblemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    problemServiceName: Schema.String.pipe(T.PathParam()),
    issueSummary: Schema.String,
    resourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/services/{problemServiceName}/classifyProblems",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ProblemClassificationsClassifyProblemsInput>;

// Output Schema
export interface ProblemClassificationsClassifyProblemsOutput {
  problemClassificationResults?: {
    problemId?: string;
    title?: string;
    description?: string;
    serviceId?: string;
    problemClassificationId?: string;
    relatedService?: {
      serviceId?: string;
      displayName?: string;
      resourceTypes?: string[];
    };
  }[];
}
export const ProblemClassificationsClassifyProblemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    problemClassificationResults: Schema.optional(
      Schema.Array(
        Schema.Struct({
          problemId: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          problemClassificationId: Schema.optional(Schema.String),
          relatedService: Schema.optional(
            Schema.Struct({
              serviceId: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProblemClassificationsClassifyProblemsOutput>;

// The operation
/**
 * Classify the right problem classifications (categories) available for a specific Azure service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param problemServiceName - Name of the Azure service for which the problem classifications need to be retrieved.
 */
export const ProblemClassificationsClassifyProblems =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProblemClassificationsClassifyProblemsInput,
    outputSchema: ProblemClassificationsClassifyProblemsOutput,
  }));
// Input Schema
export interface ProblemClassificationsGetInput {
  serviceName: string;
  problemClassificationName: string;
}
export const ProblemClassificationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
    problemClassificationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/services/{serviceName}/problemClassifications/{problemClassificationName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ProblemClassificationsGetInput>;

// Output Schema
export interface ProblemClassificationsGetOutput {
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
export const ProblemClassificationsGetOutput =
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
  }) as unknown as Schema.Codec<ProblemClassificationsGetOutput>;

// The operation
/**
 * Get problem classification details for a specific Azure service.
 *
 * @param api-version - The API version to use for this operation.
 * @param serviceName - Name of the Azure service.
 * @param problemClassificationName - Name of problem classification.
 */
export const ProblemClassificationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProblemClassificationsGetInput,
    outputSchema: ProblemClassificationsGetOutput,
  }),
);
// Input Schema
export interface ProblemClassificationsListInput {
  serviceName: string;
}
export const ProblemClassificationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/services/{serviceName}/problemClassifications",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ProblemClassificationsListInput>;

// Output Schema
export interface ProblemClassificationsListOutput {
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
export const ProblemClassificationsListOutput =
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
  }) as unknown as Schema.Codec<ProblemClassificationsListOutput>;

// The operation
/**
 * Lists all the problem classifications (categories) available for a specific Azure service. Always use the service and problem classifications obtained programmatically. This practice ensures that you always have the most recent set of service and problem classification Ids.
 *
 * @param api-version - The API version to use for this operation.
 * @param serviceName - Name of the Azure service.
 */
export const ProblemClassificationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProblemClassificationsListInput,
    outputSchema: ProblemClassificationsListOutput,
  }),
);
// Input Schema
export interface ProblemClassificationsNoSubscriptionClassifyProblemsInput {
  problemServiceName: string;
  issueSummary: string;
  resourceId?: string;
}
export const ProblemClassificationsNoSubscriptionClassifyProblemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    problemServiceName: Schema.String.pipe(T.PathParam()),
    issueSummary: Schema.String,
    resourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Support/services/{problemServiceName}/classifyProblems",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ProblemClassificationsNoSubscriptionClassifyProblemsInput>;

// Output Schema
export interface ProblemClassificationsNoSubscriptionClassifyProblemsOutput {
  problemClassificationResults?: {
    problemId?: string;
    title?: string;
    description?: string;
    serviceId?: string;
    problemClassificationId?: string;
    relatedService?: {
      serviceId?: string;
      displayName?: string;
      resourceTypes?: string[];
    };
  }[];
}
export const ProblemClassificationsNoSubscriptionClassifyProblemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    problemClassificationResults: Schema.optional(
      Schema.Array(
        Schema.Struct({
          problemId: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          serviceId: Schema.optional(Schema.String),
          problemClassificationId: Schema.optional(Schema.String),
          relatedService: Schema.optional(
            Schema.Struct({
              serviceId: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProblemClassificationsNoSubscriptionClassifyProblemsOutput>;

// The operation
/**
 * Classify the right problem classifications (categories) available for a specific Azure service.
 *
 * @param api-version - The API version to use for this operation.
 * @param problemServiceName - Name of the Azure service for which the problem classifications need to be retrieved.
 */
export const ProblemClassificationsNoSubscriptionClassifyProblems =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProblemClassificationsNoSubscriptionClassifyProblemsInput,
    outputSchema: ProblemClassificationsNoSubscriptionClassifyProblemsOutput,
  }));
// Input Schema
export interface ServiceClassificationsClassifyServicesInput {
  subscriptionId: string;
  issueSummary?: string;
  resourceId?: string;
  additionalContext?: string;
}
export const ServiceClassificationsClassifyServicesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    issueSummary: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    additionalContext: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/classifyServices",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ServiceClassificationsClassifyServicesInput>;

// Output Schema
export interface ServiceClassificationsClassifyServicesOutput {
  serviceClassificationResults?: {
    serviceId?: string;
    displayName?: string;
    resourceTypes?: string[];
  }[];
}
export const ServiceClassificationsClassifyServicesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceClassificationResults: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          resourceTypes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServiceClassificationsClassifyServicesOutput>;

// The operation
/**
 * Classify the list of right Azure services.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ServiceClassificationsClassifyServices =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceClassificationsClassifyServicesInput,
    outputSchema: ServiceClassificationsClassifyServicesOutput,
  }));
// Input Schema
export interface ServiceClassificationsNoSubscriptionClassifyServicesInput {
  issueSummary?: string;
  resourceId?: string;
  additionalContext?: string;
}
export const ServiceClassificationsNoSubscriptionClassifyServicesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueSummary: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    additionalContext: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Support/classifyServices",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ServiceClassificationsNoSubscriptionClassifyServicesInput>;

// Output Schema
export interface ServiceClassificationsNoSubscriptionClassifyServicesOutput {
  serviceClassificationResults?: {
    serviceId?: string;
    displayName?: string;
    resourceTypes?: string[];
  }[];
}
export const ServiceClassificationsNoSubscriptionClassifyServicesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceClassificationResults: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          resourceTypes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServiceClassificationsNoSubscriptionClassifyServicesOutput>;

// The operation
/**
 * Classify the list of right Azure services.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ServiceClassificationsNoSubscriptionClassifyServices =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceClassificationsNoSubscriptionClassifyServicesInput,
    outputSchema: ServiceClassificationsNoSubscriptionClassifyServicesOutput,
  }));
// Input Schema
export interface ServicesGetInput {
  serviceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Support/services/{serviceName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
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
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Gets a specific Azure service for support ticket creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param serviceName - Name of the Azure service.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListInput {}
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Support/services",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<ServicesListInput>;

// Output Schema
export interface ServicesListOutput {
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
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesListOutput>;

// The operation
/**
 * Lists all the Azure services available for support ticket creation. For **Technical** issues, select the Service Id that maps to the Azure service/product as displayed in the **Services** drop-down list on the Azure portal's [New support request](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview) page. Always use the service and its corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export interface SupportTicketsCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "Microsoft.Support/supportTickets" | "Microsoft.Support/communications";
}
export const SupportTicketsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Support/supportTickets",
      "Microsoft.Support/communications",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/checkNameAvailability",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsCheckNameAvailabilityInput>;

// Output Schema
export interface SupportTicketsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const SupportTicketsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SupportTicketsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the availability of a resource name. This API should be used to check the uniqueness of the name for support ticket creation for the selected subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SupportTicketsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportTicketsCheckNameAvailabilityInput,
    outputSchema: SupportTicketsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface SupportTicketsCreateInput {
  subscriptionId: string;
  supportTicketName: string;
  properties: {
    supportTicketId?: string;
    description: string;
    problemClassificationId: string;
    problemClassificationDisplayName?: string;
    severity: "minimal" | "moderate" | "critical" | "highestcriticalimpact";
    enrollmentId?: string;
    require24X7Response?: boolean;
    advancedDiagnosticConsent: "Yes" | "No";
    problemScopingQuestions?: string;
    supportPlanId?: string;
    contactDetails: {
      firstName: string;
      lastName: string;
      preferredContactMethod: "email" | "phone";
      primaryEmailAddress: string;
      additionalEmailAddresses?: string[];
      phoneNumber?: string;
      preferredTimeZone: string;
      country: string;
      preferredSupportLanguage: string;
    };
    serviceLevelAgreement?: {
      startTime?: string;
      expirationTime?: string;
      slaMinutes?: number;
    };
    supportEngineer?: { emailAddress?: string };
    supportPlanType?: string;
    supportPlanDisplayName?: string;
    title: string;
    problemStartTime?: string;
    serviceId: string;
    serviceDisplayName?: string;
    status?: string;
    createdDate?: string;
    modifiedDate?: string;
    fileWorkspaceName?: string;
    isTemporaryTicket?: "Yes" | "No";
    technicalTicketDetails?: { resourceId?: string };
    quotaTicketDetails?: {
      quotaChangeRequestSubType?: string;
      quotaChangeRequestVersion?: string;
      quotaChangeRequests?: { region?: string; payload?: string }[];
    };
    secondaryConsent?: { userConsent?: "Yes" | "No"; type?: string }[];
    directConnectEscalation?: {
      azureEEStatus?:
        | "EscalationAvailable"
        | "EscalationInitiated"
        | "EscalationProcessed"
        | "EscalationUnsupported"
        | "EscalationUnavailable";
      allowedSeverities?: (
        | "minimal"
        | "moderate"
        | "critical"
        | "highestcriticalimpact"
      )[];
      reasonForEscalation?: string;
    };
    communityForumPost?: string;
    supportChannel?: "Chat" | "Web";
    chatConversationStatus?: "Active" | "Closed";
  };
}
export const SupportTicketsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      supportTicketId: Schema.optional(Schema.String),
      description: Schema.String,
      problemClassificationId: Schema.String,
      problemClassificationDisplayName: Schema.optional(Schema.String),
      severity: Schema.Literals([
        "minimal",
        "moderate",
        "critical",
        "highestcriticalimpact",
      ]),
      enrollmentId: Schema.optional(Schema.String),
      require24X7Response: Schema.optional(Schema.Boolean),
      advancedDiagnosticConsent: Schema.Literals(["Yes", "No"]),
      problemScopingQuestions: Schema.optional(Schema.String),
      supportPlanId: Schema.optional(Schema.String),
      contactDetails: Schema.Struct({
        firstName: Schema.String,
        lastName: Schema.String,
        preferredContactMethod: Schema.Literals(["email", "phone"]),
        primaryEmailAddress: Schema.String,
        additionalEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
        phoneNumber: Schema.optional(Schema.String),
        preferredTimeZone: Schema.String,
        country: Schema.String,
        preferredSupportLanguage: Schema.String,
      }),
      serviceLevelAgreement: Schema.optional(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          expirationTime: Schema.optional(Schema.String),
          slaMinutes: Schema.optional(Schema.Number),
        }),
      ),
      supportEngineer: Schema.optional(
        Schema.Struct({
          emailAddress: Schema.optional(Schema.String),
        }),
      ),
      supportPlanType: Schema.optional(Schema.String),
      supportPlanDisplayName: Schema.optional(Schema.String),
      title: Schema.String,
      problemStartTime: Schema.optional(Schema.String),
      serviceId: Schema.String,
      serviceDisplayName: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      createdDate: Schema.optional(Schema.String),
      modifiedDate: Schema.optional(Schema.String),
      fileWorkspaceName: Schema.optional(Schema.String),
      isTemporaryTicket: Schema.optional(Schema.Literals(["Yes", "No"])),
      technicalTicketDetails: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
        }),
      ),
      quotaTicketDetails: Schema.optional(
        Schema.Struct({
          quotaChangeRequestSubType: Schema.optional(Schema.String),
          quotaChangeRequestVersion: Schema.optional(Schema.String),
          quotaChangeRequests: Schema.optional(
            Schema.Array(
              Schema.Struct({
                region: Schema.optional(Schema.String),
                payload: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      secondaryConsent: Schema.optional(
        Schema.Array(
          Schema.Struct({
            userConsent: Schema.optional(Schema.Literals(["Yes", "No"])),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      directConnectEscalation: Schema.optional(
        Schema.Struct({
          azureEEStatus: Schema.optional(
            Schema.Literals([
              "EscalationAvailable",
              "EscalationInitiated",
              "EscalationProcessed",
              "EscalationUnsupported",
              "EscalationUnavailable",
            ]),
          ),
          allowedSeverities: Schema.optional(
            Schema.Array(
              Schema.Literals([
                "minimal",
                "moderate",
                "critical",
                "highestcriticalimpact",
              ]),
            ),
          ),
          reasonForEscalation: Schema.optional(Schema.String),
        }),
      ),
      communityForumPost: Schema.optional(Schema.String),
      supportChannel: Schema.optional(Schema.Literals(["Chat", "Web"])),
      chatConversationStatus: Schema.optional(
        Schema.Literals(["Active", "Closed"]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsCreateInput>;

// Output Schema
export interface SupportTicketsCreateOutput {
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
export const SupportTicketsCreateOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsCreateOutput>;

// The operation
/**
 * Creates a new support ticket for Subscription and Service limits (Quota), Technical, Billing, and Subscription Management issues for the specified subscription. Learn the [prerequisites](https://aka.ms/supportAPI) required to create a support ticket.<br/><br/>Always call the Services and ProblemClassifications API to get the most recent set of services and problem categories required for support ticket creation.<br/><br/>Adding attachments is not currently supported via the API. To add a file to an existing support ticket, visit the [Manage support ticket](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/managesupportrequest) page in the Azure portal, select the support ticket, and use the file upload control to add a new file.<br/><br/>Providing consent to share diagnostic information with Azure support is currently not supported via the API. The Azure support engineer working on your ticket will reach out to you for consent if your issue requires gathering diagnostic information from your Azure resources.<br/><br/>**Creating a support ticket for on-behalf-of**: Include _x-ms-authorization-auxiliary_ header to provide an auxiliary token as per [documentation](https://docs.microsoft.com/azure/azure-resource-manager/management/authenticate-multi-tenant). The primary token will be from the tenant for whom a support ticket is being raised against the subscription, i.e. Cloud solution provider (CSP) customer tenant. The auxiliary token will be from the Cloud solution provider (CSP) partner tenant.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const SupportTicketsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SupportTicketsCreateInput,
    outputSchema: SupportTicketsCreateOutput,
  }),
);
// Input Schema
export interface SupportTicketsGetInput {
  subscriptionId: string;
  supportTicketName: string;
}
export const SupportTicketsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<SupportTicketsGetInput>;

// Output Schema
export interface SupportTicketsGetOutput {
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
export const SupportTicketsGetOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsGetOutput>;

// The operation
/**
 * Get ticket details for an Azure subscription. Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const SupportTicketsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SupportTicketsGetInput,
  outputSchema: SupportTicketsGetOutput,
}));
// Input Schema
export interface SupportTicketsListInput {
  subscriptionId: string;
  $top?: number;
  $filter?: string;
}
export const SupportTicketsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsListInput>;

// Output Schema
export interface SupportTicketsListOutput {
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
export const SupportTicketsListOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsListOutput>;

// The operation
/**
 * Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The number of values to return in the collection. Default is 25 and max is 100.
 * @param $filter - The filter to apply on the operation. We support 'odata v4.0' filter semantics. [Learn more](https://docs.microsoft.com/odata/concepts/queryoptions-overview). _Status_, _ServiceId_, and _ProblemClassificationId_ filters can only be used with Equals ('eq') operator. For _CreatedDate_ filter, the supported operators are Greater Than ('gt') and Greater Than or Equals ('ge'). When using both filters, combine them using the logical 'AND'.
 */
export const SupportTicketsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SupportTicketsListInput,
  outputSchema: SupportTicketsListOutput,
}));
// Input Schema
export interface SupportTicketsNoSubscriptionCheckNameAvailabilityInput {
  name: string;
  type: "Microsoft.Support/supportTickets" | "Microsoft.Support/communications";
}
export const SupportTicketsNoSubscriptionCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Support/supportTickets",
      "Microsoft.Support/communications",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Support/checkNameAvailability",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsNoSubscriptionCheckNameAvailabilityInput>;

// Output Schema
export interface SupportTicketsNoSubscriptionCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const SupportTicketsNoSubscriptionCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SupportTicketsNoSubscriptionCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the availability of a resource name. This API should be used to check the uniqueness of the name for support ticket creation for the selected subscription.
 *
 * @param api-version - The API version to use for this operation.
 */
export const SupportTicketsNoSubscriptionCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportTicketsNoSubscriptionCheckNameAvailabilityInput,
    outputSchema: SupportTicketsNoSubscriptionCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface SupportTicketsNoSubscriptionCreateInput {
  supportTicketName: string;
  properties: {
    supportTicketId?: string;
    description: string;
    problemClassificationId: string;
    problemClassificationDisplayName?: string;
    severity: "minimal" | "moderate" | "critical" | "highestcriticalimpact";
    enrollmentId?: string;
    require24X7Response?: boolean;
    advancedDiagnosticConsent: "Yes" | "No";
    problemScopingQuestions?: string;
    supportPlanId?: string;
    contactDetails: {
      firstName: string;
      lastName: string;
      preferredContactMethod: "email" | "phone";
      primaryEmailAddress: string;
      additionalEmailAddresses?: string[];
      phoneNumber?: string;
      preferredTimeZone: string;
      country: string;
      preferredSupportLanguage: string;
    };
    serviceLevelAgreement?: {
      startTime?: string;
      expirationTime?: string;
      slaMinutes?: number;
    };
    supportEngineer?: { emailAddress?: string };
    supportPlanType?: string;
    supportPlanDisplayName?: string;
    title: string;
    problemStartTime?: string;
    serviceId: string;
    serviceDisplayName?: string;
    status?: string;
    createdDate?: string;
    modifiedDate?: string;
    fileWorkspaceName?: string;
    isTemporaryTicket?: "Yes" | "No";
    technicalTicketDetails?: { resourceId?: string };
    quotaTicketDetails?: {
      quotaChangeRequestSubType?: string;
      quotaChangeRequestVersion?: string;
      quotaChangeRequests?: { region?: string; payload?: string }[];
    };
    secondaryConsent?: { userConsent?: "Yes" | "No"; type?: string }[];
    directConnectEscalation?: {
      azureEEStatus?:
        | "EscalationAvailable"
        | "EscalationInitiated"
        | "EscalationProcessed"
        | "EscalationUnsupported"
        | "EscalationUnavailable";
      allowedSeverities?: (
        | "minimal"
        | "moderate"
        | "critical"
        | "highestcriticalimpact"
      )[];
      reasonForEscalation?: string;
    };
    communityForumPost?: string;
    supportChannel?: "Chat" | "Web";
    chatConversationStatus?: "Active" | "Closed";
  };
}
export const SupportTicketsNoSubscriptionCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      supportTicketId: Schema.optional(Schema.String),
      description: Schema.String,
      problemClassificationId: Schema.String,
      problemClassificationDisplayName: Schema.optional(Schema.String),
      severity: Schema.Literals([
        "minimal",
        "moderate",
        "critical",
        "highestcriticalimpact",
      ]),
      enrollmentId: Schema.optional(Schema.String),
      require24X7Response: Schema.optional(Schema.Boolean),
      advancedDiagnosticConsent: Schema.Literals(["Yes", "No"]),
      problemScopingQuestions: Schema.optional(Schema.String),
      supportPlanId: Schema.optional(Schema.String),
      contactDetails: Schema.Struct({
        firstName: Schema.String,
        lastName: Schema.String,
        preferredContactMethod: Schema.Literals(["email", "phone"]),
        primaryEmailAddress: Schema.String,
        additionalEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
        phoneNumber: Schema.optional(Schema.String),
        preferredTimeZone: Schema.String,
        country: Schema.String,
        preferredSupportLanguage: Schema.String,
      }),
      serviceLevelAgreement: Schema.optional(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          expirationTime: Schema.optional(Schema.String),
          slaMinutes: Schema.optional(Schema.Number),
        }),
      ),
      supportEngineer: Schema.optional(
        Schema.Struct({
          emailAddress: Schema.optional(Schema.String),
        }),
      ),
      supportPlanType: Schema.optional(Schema.String),
      supportPlanDisplayName: Schema.optional(Schema.String),
      title: Schema.String,
      problemStartTime: Schema.optional(Schema.String),
      serviceId: Schema.String,
      serviceDisplayName: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      createdDate: Schema.optional(Schema.String),
      modifiedDate: Schema.optional(Schema.String),
      fileWorkspaceName: Schema.optional(Schema.String),
      isTemporaryTicket: Schema.optional(Schema.Literals(["Yes", "No"])),
      technicalTicketDetails: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
        }),
      ),
      quotaTicketDetails: Schema.optional(
        Schema.Struct({
          quotaChangeRequestSubType: Schema.optional(Schema.String),
          quotaChangeRequestVersion: Schema.optional(Schema.String),
          quotaChangeRequests: Schema.optional(
            Schema.Array(
              Schema.Struct({
                region: Schema.optional(Schema.String),
                payload: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      secondaryConsent: Schema.optional(
        Schema.Array(
          Schema.Struct({
            userConsent: Schema.optional(Schema.Literals(["Yes", "No"])),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      directConnectEscalation: Schema.optional(
        Schema.Struct({
          azureEEStatus: Schema.optional(
            Schema.Literals([
              "EscalationAvailable",
              "EscalationInitiated",
              "EscalationProcessed",
              "EscalationUnsupported",
              "EscalationUnavailable",
            ]),
          ),
          allowedSeverities: Schema.optional(
            Schema.Array(
              Schema.Literals([
                "minimal",
                "moderate",
                "critical",
                "highestcriticalimpact",
              ]),
            ),
          ),
          reasonForEscalation: Schema.optional(Schema.String),
        }),
      ),
      communityForumPost: Schema.optional(Schema.String),
      supportChannel: Schema.optional(Schema.Literals(["Chat", "Web"])),
      chatConversationStatus: Schema.optional(
        Schema.Literals(["Active", "Closed"]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsNoSubscriptionCreateInput>;

// Output Schema
export interface SupportTicketsNoSubscriptionCreateOutput {
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
export const SupportTicketsNoSubscriptionCreateOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsNoSubscriptionCreateOutput>;

// The operation
/**
 * Creates a new support ticket for Billing, and Subscription Management issues. Learn the [prerequisites](https://aka.ms/supportAPI) required to create a support ticket.<br/><br/>Always call the Services and ProblemClassifications API to get the most recent set of services and problem categories required for support ticket creation.<br/><br/>Adding attachments is not currently supported via the API. To add a file to an existing support ticket, visit the [Manage support ticket](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/managesupportrequest) page in the Azure portal, select the support ticket, and use the file upload control to add a new file.<br/><br/>Providing consent to share diagnostic information with Azure support is currently not supported via the API. The Azure support engineer working on your ticket will reach out to you for consent if your issue requires gathering diagnostic information from your Azure resources.<br/><br/>
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const SupportTicketsNoSubscriptionCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportTicketsNoSubscriptionCreateInput,
    outputSchema: SupportTicketsNoSubscriptionCreateOutput,
  }));
// Input Schema
export interface SupportTicketsNoSubscriptionGetInput {
  supportTicketName: string;
}
export const SupportTicketsNoSubscriptionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsNoSubscriptionGetInput>;

// Output Schema
export interface SupportTicketsNoSubscriptionGetOutput {
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
export const SupportTicketsNoSubscriptionGetOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsNoSubscriptionGetOutput>;

// The operation
/**
 * Gets details for a specific support ticket. Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const SupportTicketsNoSubscriptionGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportTicketsNoSubscriptionGetInput,
    outputSchema: SupportTicketsNoSubscriptionGetOutput,
  }));
// Input Schema
export interface SupportTicketsNoSubscriptionListInput {
  $top?: number;
  $filter?: string;
}
export const SupportTicketsNoSubscriptionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Support/supportTickets",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsNoSubscriptionListInput>;

// Output Schema
export interface SupportTicketsNoSubscriptionListOutput {
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
export const SupportTicketsNoSubscriptionListOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsNoSubscriptionListOutput>;

// The operation
/**
 * Lists all the support tickets. <br/><br/>You can also filter the support tickets by <i>Status</i>, <i>CreatedDate</i>, , <i>ServiceId</i>, and <i>ProblemClassificationId</i> using the $filter parameter. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
 *
 * @param api-version - The API version to use for this operation.
 * @param $top - The number of values to return in the collection. Default is 25 and max is 100.
 * @param $filter - The filter to apply on the operation. We support 'odata v4.0' filter semantics. <a target='_blank' href='https://docs.microsoft.com/odata/concepts/queryoptions-overview'>Learn more</a> <br/><i>Status</i> , <i>ServiceId</i>, and <i>ProblemClassificationId</i> filters can only be used with 'eq' operator. For <i>CreatedDate</i> filter, the supported operators are 'gt' and 'ge'. When using both filters, combine them using the logical 'AND'.
 */
export const SupportTicketsNoSubscriptionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportTicketsNoSubscriptionListInput,
    outputSchema: SupportTicketsNoSubscriptionListOutput,
  }));
// Input Schema
export interface SupportTicketsNoSubscriptionUpdateInput {
  supportTicketName: string;
  severity?: "minimal" | "moderate" | "critical" | "highestcriticalimpact";
  status?: "open" | "closed";
  contactDetails?: {
    firstName?: string;
    lastName?: string;
    preferredContactMethod?: "email" | "phone";
    primaryEmailAddress?: string;
    additionalEmailAddresses?: string[];
    phoneNumber?: string;
    preferredTimeZone?: string;
    country?: string;
    preferredSupportLanguage?: string;
  };
  advancedDiagnosticConsent?: "Yes" | "No";
  secondaryConsent?: { userConsent?: "Yes" | "No"; type?: string }[];
  directConnectEscalation?: {
    azureEEStatus?:
      | "EscalationAvailable"
      | "EscalationInitiated"
      | "EscalationProcessed"
      | "EscalationUnsupported"
      | "EscalationUnavailable";
    allowedSeverities?: (
      | "minimal"
      | "moderate"
      | "critical"
      | "highestcriticalimpact"
    )[];
    reasonForEscalation?: string;
  };
}
export const SupportTicketsNoSubscriptionUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTicketName: Schema.String.pipe(T.PathParam()),
    severity: Schema.optional(
      Schema.Literals([
        "minimal",
        "moderate",
        "critical",
        "highestcriticalimpact",
      ]),
    ),
    status: Schema.optional(Schema.Literals(["open", "closed"])),
    contactDetails: Schema.optional(
      Schema.Struct({
        firstName: Schema.optional(Schema.String),
        lastName: Schema.optional(Schema.String),
        preferredContactMethod: Schema.optional(
          Schema.Literals(["email", "phone"]),
        ),
        primaryEmailAddress: Schema.optional(Schema.String),
        additionalEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
        phoneNumber: Schema.optional(Schema.String),
        preferredTimeZone: Schema.optional(Schema.String),
        country: Schema.optional(Schema.String),
        preferredSupportLanguage: Schema.optional(Schema.String),
      }),
    ),
    advancedDiagnosticConsent: Schema.optional(Schema.Literals(["Yes", "No"])),
    secondaryConsent: Schema.optional(
      Schema.Array(
        Schema.Struct({
          userConsent: Schema.optional(Schema.Literals(["Yes", "No"])),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    directConnectEscalation: Schema.optional(
      Schema.Struct({
        azureEEStatus: Schema.optional(
          Schema.Literals([
            "EscalationAvailable",
            "EscalationInitiated",
            "EscalationProcessed",
            "EscalationUnsupported",
            "EscalationUnavailable",
          ]),
        ),
        allowedSeverities: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "minimal",
              "moderate",
              "critical",
              "highestcriticalimpact",
            ]),
          ),
        ),
        reasonForEscalation: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Support/supportTickets/{supportTicketName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsNoSubscriptionUpdateInput>;

// Output Schema
export interface SupportTicketsNoSubscriptionUpdateOutput {
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
export const SupportTicketsNoSubscriptionUpdateOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsNoSubscriptionUpdateOutput>;

// The operation
/**
 * This API allows you to update the severity level, ticket status, and your contact information in the support ticket.<br/><br/>Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.
 *
 * @param api-version - The API version to use for this operation.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const SupportTicketsNoSubscriptionUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportTicketsNoSubscriptionUpdateInput,
    outputSchema: SupportTicketsNoSubscriptionUpdateOutput,
  }));
// Input Schema
export interface SupportTicketsUpdateInput {
  subscriptionId: string;
  supportTicketName: string;
  severity?: "minimal" | "moderate" | "critical" | "highestcriticalimpact";
  status?: "open" | "closed";
  contactDetails?: {
    firstName?: string;
    lastName?: string;
    preferredContactMethod?: "email" | "phone";
    primaryEmailAddress?: string;
    additionalEmailAddresses?: string[];
    phoneNumber?: string;
    preferredTimeZone?: string;
    country?: string;
    preferredSupportLanguage?: string;
  };
  advancedDiagnosticConsent?: "Yes" | "No";
  secondaryConsent?: { userConsent?: "Yes" | "No"; type?: string }[];
  directConnectEscalation?: {
    azureEEStatus?:
      | "EscalationAvailable"
      | "EscalationInitiated"
      | "EscalationProcessed"
      | "EscalationUnsupported"
      | "EscalationUnavailable";
    allowedSeverities?: (
      | "minimal"
      | "moderate"
      | "critical"
      | "highestcriticalimpact"
    )[];
    reasonForEscalation?: string;
  };
}
export const SupportTicketsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    supportTicketName: Schema.String.pipe(T.PathParam()),
    severity: Schema.optional(
      Schema.Literals([
        "minimal",
        "moderate",
        "critical",
        "highestcriticalimpact",
      ]),
    ),
    status: Schema.optional(Schema.Literals(["open", "closed"])),
    contactDetails: Schema.optional(
      Schema.Struct({
        firstName: Schema.optional(Schema.String),
        lastName: Schema.optional(Schema.String),
        preferredContactMethod: Schema.optional(
          Schema.Literals(["email", "phone"]),
        ),
        primaryEmailAddress: Schema.optional(Schema.String),
        additionalEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
        phoneNumber: Schema.optional(Schema.String),
        preferredTimeZone: Schema.optional(Schema.String),
        country: Schema.optional(Schema.String),
        preferredSupportLanguage: Schema.optional(Schema.String),
      }),
    ),
    advancedDiagnosticConsent: Schema.optional(Schema.Literals(["Yes", "No"])),
    secondaryConsent: Schema.optional(
      Schema.Array(
        Schema.Struct({
          userConsent: Schema.optional(Schema.Literals(["Yes", "No"])),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    directConnectEscalation: Schema.optional(
      Schema.Struct({
        azureEEStatus: Schema.optional(
          Schema.Literals([
            "EscalationAvailable",
            "EscalationInitiated",
            "EscalationProcessed",
            "EscalationUnsupported",
            "EscalationUnavailable",
          ]),
        ),
        allowedSeverities: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "minimal",
              "moderate",
              "critical",
              "highestcriticalimpact",
            ]),
          ),
        ),
        reasonForEscalation: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<SupportTicketsUpdateInput>;

// Output Schema
export interface SupportTicketsUpdateOutput {
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
export const SupportTicketsUpdateOutput =
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
  }) as unknown as Schema.Codec<SupportTicketsUpdateOutput>;

// The operation
/**
 * This API allows you to update the severity level, ticket status, advanced diagnostic consent and your contact information in the support ticket.<br/><br/>Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param supportTicketName - The name of the SupportTicketDetails
 */
export const SupportTicketsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SupportTicketsUpdateInput,
    outputSchema: SupportTicketsUpdateOutput,
  }),
);
