/**
 * Azure Cloudshell API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteConsoleInput {
  consoleName: string;
}
export const DeleteConsoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  consoleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.Portal/consoles/{consoleName}",
    apiVersion: "2018-10-01",
  }),
) as unknown as Schema.Codec<DeleteConsoleInput>;

// Output Schema
export type DeleteConsoleOutput = void;
export const DeleteConsoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteConsoleOutput>;

// The operation
/**
 * Delete console
 *
 * Deletes the console
 *
 * @param api-version - Client API version
 * @param consoleName - The name of the console
 */
export const DeleteConsole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteConsoleInput,
  outputSchema: DeleteConsoleOutput,
}));
// Input Schema
export interface DeleteConsoleWithLocationInput {
  consoleName: string;
  location: string;
}
export const DeleteConsoleWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Portal/locations/{location}/consoles/{consoleName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<DeleteConsoleWithLocationInput>;

// Output Schema
export type DeleteConsoleWithLocationOutput = void;
export const DeleteConsoleWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteConsoleWithLocationOutput>;

// The operation
/**
 * Delete console
 *
 * Deletes the console
 *
 * @param api-version - Client API version
 * @param consoleName - The name of the console
 * @param location - The provider location
 */
export const deleteConsoleWithLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteConsoleWithLocationInput,
    outputSchema: DeleteConsoleWithLocationOutput,
  }),
);
// Input Schema
export interface DeleteUserSettingsInput {
  userSettingsName: string;
}
export const DeleteUserSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userSettingsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Portal/userSettings/{userSettingsName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<DeleteUserSettingsInput>;

// Output Schema
export type DeleteUserSettingsOutput = void;
export const DeleteUserSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteUserSettingsOutput>;

// The operation
/**
 * delete user settings.
 *
 * Delete cloud shell settings for current signed in user
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 */
export const DeleteUserSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteUserSettingsInput,
  outputSchema: DeleteUserSettingsOutput,
}));
// Input Schema
export interface DeleteUserSettingsWithLocationInput {
  userSettingsName: string;
  location: string;
}
export const DeleteUserSettingsWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userSettingsName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Portal/locations/{location}/userSettings/{userSettingsName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<DeleteUserSettingsWithLocationInput>;

// Output Schema
export type DeleteUserSettingsWithLocationOutput = void;
export const DeleteUserSettingsWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteUserSettingsWithLocationOutput>;

// The operation
/**
 * delete user settings.
 *
 * Delete cloud shell settings for current signed in user
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 * @param location - The provider location
 */
export const deleteUserSettingsWithLocation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteUserSettingsWithLocationInput,
    outputSchema: DeleteUserSettingsWithLocationOutput,
  }));
// Input Schema
export interface GetConsoleInput {
  consoleName: string;
}
export const GetConsoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  consoleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Portal/consoles/{consoleName}",
    apiVersion: "2018-10-01",
  }),
) as unknown as Schema.Codec<GetConsoleInput>;

// Output Schema
export type GetConsoleOutput = unknown;
export const GetConsoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetConsoleOutput>;

// The operation
/**
 * Get console
 *
 * Gets the console for the user.
 *
 * @param api-version - Client API version
 * @param consoleName - The name of the console
 */
export const GetConsole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetConsoleInput,
  outputSchema: GetConsoleOutput,
}));
// Input Schema
export interface GetConsoleWithLocationInput {
  consoleName: string;
  location: string;
}
export const GetConsoleWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Portal/locations/{location}/consoles/{consoleName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<GetConsoleWithLocationInput>;

// Output Schema
export type GetConsoleWithLocationOutput = unknown;
export const GetConsoleWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetConsoleWithLocationOutput>;

// The operation
/**
 * Get console
 *
 * Gets the console for the user.
 *
 * @param api-version - Client API version
 * @param consoleName - The name of the console
 * @param location - The provider location
 */
export const getConsoleWithLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetConsoleWithLocationInput,
    outputSchema: GetConsoleWithLocationOutput,
  }),
);
// Input Schema
export interface GetUserSettingsInput {
  userSettingsName: string;
}
export const GetUserSettingsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userSettingsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Portal/userSettings/{userSettingsName}",
    apiVersion: "2018-10-01",
  }),
) as unknown as Schema.Codec<GetUserSettingsInput>;

// Output Schema
export type GetUserSettingsOutput = unknown;
export const GetUserSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetUserSettingsOutput>;

// The operation
/**
 * Get user settings.
 *
 * Get current user settings for current signed in user. This operation returns settings for the user's cloud shell preferences including preferred location, storage profile, shell type, font and size settings.
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 */
export const GetUserSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserSettingsInput,
  outputSchema: GetUserSettingsOutput,
}));
// Input Schema
export interface GetUserSettingsWithLocationInput {
  userSettingsName: string;
  location: string;
}
export const GetUserSettingsWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userSettingsName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Portal/locations/{location}/userSettings/{userSettingsName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<GetUserSettingsWithLocationInput>;

// Output Schema
export type GetUserSettingsWithLocationOutput = unknown;
export const GetUserSettingsWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetUserSettingsWithLocationOutput>;

// The operation
/**
 * Get user settings.
 *
 * Get current user settings for current signed in user. This operation returns settings for the user's cloud shell preferences including preferred location, storage profile, shell type, font and size settings.
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 * @param location - The provider location
 */
export const getUserSettingsWithLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetUserSettingsWithLocationInput,
    outputSchema: GetUserSettingsWithLocationOutput,
  }),
);
// Input Schema
export interface KeepAliveInput {
  consoleName: string;
}
export const KeepAliveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  consoleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Portal/consoles/{consoleName}/keepAlive",
    apiVersion: "2018-10-01",
  }),
) as unknown as Schema.Codec<KeepAliveInput>;

// Output Schema
export type KeepAliveOutput = void;
export const KeepAliveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<KeepAliveOutput>;

// The operation
/**
 * Keep alive
 *
 * Keep console alive
 *
 * @param consoleName - The name of the console
 */
export const KeepAlive = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeepAliveInput,
  outputSchema: KeepAliveOutput,
}));
// Input Schema
export interface KeepAliveWithLocationInput {
  consoleName: string;
  location: string;
}
export const KeepAliveWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Portal/locations/{location}/consoles/{consoleName}/keepAlive",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<KeepAliveWithLocationInput>;

// Output Schema
export type KeepAliveWithLocationOutput = void;
export const KeepAliveWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<KeepAliveWithLocationOutput>;

// The operation
/**
 * Keep alive
 *
 * Keep console alive
 *
 * @param consoleName - The name of the console
 * @param location - The provider location
 */
export const keepAliveWithLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KeepAliveWithLocationInput,
    outputSchema: KeepAliveWithLocationOutput,
  }),
);
// Input Schema
export interface PatchUserSettingsInput {
  userSettingsName: string;
  properties?: {
    preferredOsType: "Windows" | "Linux";
    preferredLocation: string;
    storageProfile: {
      storageAccountResourceId?: string;
      fileShareName?: string;
      diskSizeInGB?: number;
    };
    terminalSettings: {
      fontSize?: "NotSpecified" | "Small" | "Medium" | "Large";
      fontStyle?: "NotSpecified" | "Monospace" | "Courier";
    };
    preferredShellType: "bash" | "pwsh" | "powershell";
  };
}
export const PatchUserSettingsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    userSettingsName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        preferredOsType: Schema.Literals(["Windows", "Linux"]),
        preferredLocation: Schema.String,
        storageProfile: Schema.Struct({
          storageAccountResourceId: Schema.optional(Schema.String),
          fileShareName: Schema.optional(Schema.String),
          diskSizeInGB: Schema.optional(Schema.Number),
        }),
        terminalSettings: Schema.Struct({
          fontSize: Schema.optional(
            Schema.Literals(["NotSpecified", "Small", "Medium", "Large"]),
          ),
          fontStyle: Schema.optional(
            Schema.Literals(["NotSpecified", "Monospace", "Courier"]),
          ),
        }),
        preferredShellType: Schema.Literals(["bash", "pwsh", "powershell"]),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.Portal/userSettings/{userSettingsName}",
    apiVersion: "2018-10-01",
  }),
) as unknown as Schema.Codec<PatchUserSettingsInput>;

// Output Schema
export type PatchUserSettingsOutput = unknown;
export const PatchUserSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PatchUserSettingsOutput>;

// The operation
/**
 * patch user settings.
 *
 * Patch cloud shell settings for current signed in user
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 */
export const PatchUserSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PatchUserSettingsInput,
  outputSchema: PatchUserSettingsOutput,
}));
// Input Schema
export interface PatchUserSettingsWithLocationInput {
  userSettingsName: string;
  location: string;
  properties?: {
    preferredOsType: "Windows" | "Linux";
    preferredLocation: string;
    storageProfile: {
      storageAccountResourceId?: string;
      fileShareName?: string;
      diskSizeInGB?: number;
    };
    terminalSettings: {
      fontSize?: "NotSpecified" | "Small" | "Medium" | "Large";
      fontStyle?: "NotSpecified" | "Monospace" | "Courier";
    };
    preferredShellType: "bash" | "pwsh" | "powershell";
  };
}
export const PatchUserSettingsWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userSettingsName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        preferredOsType: Schema.Literals(["Windows", "Linux"]),
        preferredLocation: Schema.String,
        storageProfile: Schema.Struct({
          storageAccountResourceId: Schema.optional(Schema.String),
          fileShareName: Schema.optional(Schema.String),
          diskSizeInGB: Schema.optional(Schema.Number),
        }),
        terminalSettings: Schema.Struct({
          fontSize: Schema.optional(
            Schema.Literals(["NotSpecified", "Small", "Medium", "Large"]),
          ),
          fontStyle: Schema.optional(
            Schema.Literals(["NotSpecified", "Monospace", "Courier"]),
          ),
        }),
        preferredShellType: Schema.Literals(["bash", "pwsh", "powershell"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Portal/locations/{location}/userSettings/{userSettingsName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<PatchUserSettingsWithLocationInput>;

// Output Schema
export type PatchUserSettingsWithLocationOutput = unknown;
export const PatchUserSettingsWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PatchUserSettingsWithLocationOutput>;

// The operation
/**
 * patch user settings.
 *
 * Patch cloud shell settings for current signed in user
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 * @param location - The provider location
 */
export const patchUserSettingsWithLocation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchUserSettingsWithLocationInput,
    outputSchema: PatchUserSettingsWithLocationOutput,
  }));
// Input Schema
export interface PutConsoleInput {
  consoleName: string;
  properties: {
    osType: "Linux" | "Windows";
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Pending"
      | "Updating"
      | "Creating"
      | "Repairing"
      | "Failed"
      | "Canceled"
      | "Succeeded";
    uri?: string;
  };
}
export const PutConsoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  consoleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    osType: Schema.Literals(["Linux", "Windows"]),
    provisioningState: Schema.optional(
      Schema.Literals([
        "NotSpecified",
        "Accepted",
        "Pending",
        "Updating",
        "Creating",
        "Repairing",
        "Failed",
        "Canceled",
        "Succeeded",
      ]),
    ),
    uri: Schema.optional(Schema.String),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/providers/Microsoft.Portal/consoles/{consoleName}",
    apiVersion: "2018-10-01",
  }),
) as unknown as Schema.Codec<PutConsoleInput>;

// Output Schema
export type PutConsoleOutput = unknown;
export const PutConsoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PutConsoleOutput>;

// The operation
/**
 * Put console
 *
 * Puts a request for a console
 *
 * @param api-version - Client API version
 * @param consoleName - The name of the console
 */
export const PutConsole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PutConsoleInput,
  outputSchema: PutConsoleOutput,
}));
// Input Schema
export interface PutConsoleWithLocationInput {
  consoleName: string;
  location: string;
}
export const PutConsoleWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Portal/locations/{location}/consoles/{consoleName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<PutConsoleWithLocationInput>;

// Output Schema
export type PutConsoleWithLocationOutput = unknown;
export const PutConsoleWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PutConsoleWithLocationOutput>;

// The operation
/**
 * Put console
 *
 * Puts a request for a console
 *
 * @param api-version - Client API version
 * @param consoleName - The name of the console
 * @param location - The provider location
 */
export const putConsoleWithLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PutConsoleWithLocationInput,
    outputSchema: PutConsoleWithLocationOutput,
  }),
);
// Input Schema
export interface PutUserSettingsInput {
  userSettingsName: string;
  properties: {
    preferredOsType: "Windows" | "Linux";
    preferredLocation: string;
    storageProfile: {
      storageAccountResourceId?: string;
      fileShareName?: string;
      diskSizeInGB?: number;
    };
    terminalSettings: {
      fontSize?: "NotSpecified" | "Small" | "Medium" | "Large";
      fontStyle?: "NotSpecified" | "Monospace" | "Courier";
    };
    preferredShellType: "bash" | "pwsh" | "powershell";
  };
}
export const PutUserSettingsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userSettingsName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    preferredOsType: Schema.Literals(["Windows", "Linux"]),
    preferredLocation: Schema.String,
    storageProfile: Schema.Struct({
      storageAccountResourceId: Schema.optional(Schema.String),
      fileShareName: Schema.optional(Schema.String),
      diskSizeInGB: Schema.optional(Schema.Number),
    }),
    terminalSettings: Schema.Struct({
      fontSize: Schema.optional(
        Schema.Literals(["NotSpecified", "Small", "Medium", "Large"]),
      ),
      fontStyle: Schema.optional(
        Schema.Literals(["NotSpecified", "Monospace", "Courier"]),
      ),
    }),
    preferredShellType: Schema.Literals(["bash", "pwsh", "powershell"]),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/providers/Microsoft.Portal/userSettings/{userSettingsName}",
    apiVersion: "2018-10-01",
  }),
) as unknown as Schema.Codec<PutUserSettingsInput>;

// Output Schema
export type PutUserSettingsOutput = unknown;
export const PutUserSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PutUserSettingsOutput>;

// The operation
/**
 * put user settings.
 *
 * Create or update cloud shell settings for current signed in user
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 */
export const PutUserSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PutUserSettingsInput,
  outputSchema: PutUserSettingsOutput,
}));
// Input Schema
export interface PutUserSettingsWithLocationInput {
  userSettingsName: string;
  location: string;
  properties: {
    preferredOsType: "Windows" | "Linux";
    preferredLocation: string;
    storageProfile: {
      storageAccountResourceId?: string;
      fileShareName?: string;
      diskSizeInGB?: number;
    };
    terminalSettings: {
      fontSize?: "NotSpecified" | "Small" | "Medium" | "Large";
      fontStyle?: "NotSpecified" | "Monospace" | "Courier";
    };
    preferredShellType: "bash" | "pwsh" | "powershell";
  };
}
export const PutUserSettingsWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userSettingsName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      preferredOsType: Schema.Literals(["Windows", "Linux"]),
      preferredLocation: Schema.String,
      storageProfile: Schema.Struct({
        storageAccountResourceId: Schema.optional(Schema.String),
        fileShareName: Schema.optional(Schema.String),
        diskSizeInGB: Schema.optional(Schema.Number),
      }),
      terminalSettings: Schema.Struct({
        fontSize: Schema.optional(
          Schema.Literals(["NotSpecified", "Small", "Medium", "Large"]),
        ),
        fontStyle: Schema.optional(
          Schema.Literals(["NotSpecified", "Monospace", "Courier"]),
        ),
      }),
      preferredShellType: Schema.Literals(["bash", "pwsh", "powershell"]),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Portal/locations/{location}/userSettings/{userSettingsName}",
      apiVersion: "2018-10-01",
    }),
  ) as unknown as Schema.Codec<PutUserSettingsWithLocationInput>;

// Output Schema
export type PutUserSettingsWithLocationOutput = unknown;
export const PutUserSettingsWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PutUserSettingsWithLocationOutput>;

// The operation
/**
 * put user settings.
 *
 * Create or update cloud shell settings for current signed in user
 *
 * @param api-version - Client API version
 * @param userSettingsName - The name of the user settings
 * @param location - The provider location
 */
export const putUserSettingsWithLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PutUserSettingsWithLocationInput,
    outputSchema: PutUserSettingsWithLocationOutput,
  }),
);
