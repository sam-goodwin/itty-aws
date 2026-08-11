---
title: get-the-user
product: vercel
url: /docs/rest-api/user/get-the-user
canonical_url: "https://vercel.com/docs/rest-api/user/get-the-user"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-the-user on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get the User

```http
GET /v2/user
```

Retrieves information related to the currently authenticated User.

## Authentication

**bearerToken**: HTTP bearer

## Responses

### 200: Successful response.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Successful response.",
  "required": [
    "user"
  ],
  "properties": {
    "user": {
      "oneOf": [
        {
          "type": "object",
          "description": "Data for the currently authenticated User.",
          "required": [
            "avatar",
            "billing",
            "createdAt",
            "defaultTeamId",
            "email",
            "hasTrialAvailable",
            "id",
            "name",
            "resourceConfig",
            "softBlock",
            "stagingPrefix",
            "username"
          ],
          "properties": {
            "createdAt": {
              "type": "number",
              "description": "UNIX timestamp (in milliseconds) when the User account was created."
            },
            "softBlock": {
              "type": "object",
              "description": "When the User account has been \"soft blocked\", this property will contain the date when the restriction was enacted, and the identifier for why.",
              "nullable": true,
              "required": [
                "blockedAt",
                "reason"
              ]
            },
            "billing": {
              "type": "object",
              "description": "An object containing billing infomation associated with the User account.",
              "nullable": true
            },
            "resourceConfig": {
              "type": "object",
              "description": "An object containing infomation related to the amount of platform resources may be allocated to the User account."
            },
            "stagingPrefix": {
              "type": "string",
              "description": "Prefix that will be used in the URL of \"Preview\" deployments created by the User account."
            },
            "activeDashboardViews": {
              "type": "array",
              "description": "set of dashboard view preferences (cards or list) per scopeId"
            },
            "importFlowGitNamespace": {
              "nullable": true
            },
            "importFlowGitNamespaceId": {
              "nullable": true
            },
            "importFlowGitProvider": {
              "type": "string",
              "enum": [
                "bitbucket",
                "cursor-origin",
                "github",
                "github-custom-host",
                "github-limited",
                "gitlab",
                "vercel",
                null
              ],
              "nullable": true
            },
            "preferredScopesAndGitNamespaces": {
              "type": "array"
            },
            "dismissedToasts": {
              "type": "array",
              "description": "A record of when, under a certain scopeId, a toast was dismissed"
            },
            "favoriteProjectsAndSpaces": {
              "type": "array",
              "description": "A list of projects and spaces across teams that a user has marked as a favorite."
            },
            "hasTrialAvailable": {
              "type": "boolean",
              "description": "Whether the user has a trial available for a paid plan subscription.",
              "enum": [
                false,
                true
              ]
            },
            "remoteCaching": {
              "type": "object",
              "description": "remote caching settings"
            },
            "dataCache": {
              "type": "object",
              "description": "data cache settings"
            },
            "featureBlocks": {
              "type": "object",
              "description": "Feature blocks for the user"
            },
            "isAccountUpdateRequired": {
              "type": "boolean",
              "description": "When `true`, the user must complete the EMU Update Account flow before they can use the dashboard.",
              "enum": [
                false,
                true
              ]
            },
            "accountUpdateContext": {
              "type": "object",
              "description": "Context for the Update Account screen. Present only when `isAccountUpdateRequired` is true. `managedTeams` is empty for orphan mode (user matches an EMU domain but is not on the team).",
              "required": [
                "managedTeams",
                "verifiedEmuDomains"
              ]
            },
            "id": {
              "type": "string",
              "description": "The User's unique identifier."
            },
            "email": {
              "type": "string",
              "description": "Email address associated with the User account."
            },
            "name": {
              "type": "string",
              "description": "Name associated with the User account, or `null` if none has been provided.",
              "nullable": true
            },
            "username": {
              "type": "string",
              "description": "Unique username associated with the User account."
            },
            "avatar": {
              "type": "string",
              "description": "SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.",
              "nullable": true
            },
            "defaultTeamId": {
              "type": "string",
              "description": "The user's default team.",
              "nullable": true
            },
            "isEnterpriseManaged": {
              "type": "boolean",
              "description": "Indicates whether the user is managed by an enterprise.",
              "enum": [
                false,
                true
              ]
            },
            "shouldShowEnterpriseManagedWelcome": {
              "type": "boolean",
              "description": "Whether the Enterprise Managed User joined the current team through the Update Account flow and should see its welcome experience.",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        {
          "type": "object",
          "description": "A limited form of data for the currently authenticated User, due to the authentication token missing privileges to read the full User data.",
          "required": [
            "avatar",
            "defaultTeamId",
            "email",
            "id",
            "limited",
            "name",
            "username"
          ],
          "properties": {
            "limited": {
              "type": "boolean",
              "description": "Property indicating that this User data contains only limited information, due to the authentication token missing privileges to read the full User data. Re-login with email, GitHub, GitLab or Bitbucket in order to upgrade the authentication token with the necessary privileges.",
              "enum": [
                true
              ]
            },
            "id": {
              "type": "string",
              "description": "The User's unique identifier."
            },
            "email": {
              "type": "string",
              "description": "Email address associated with the User account."
            },
            "name": {
              "type": "string",
              "description": "Name associated with the User account, or `null` if none has been provided.",
              "nullable": true
            },
            "username": {
              "type": "string",
              "description": "Unique username associated with the User account."
            },
            "avatar": {
              "type": "string",
              "description": "SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.",
              "nullable": true
            },
            "defaultTeamId": {
              "type": "string",
              "description": "The user's default team.",
              "nullable": true
            },
            "isEnterpriseManaged": {
              "type": "boolean",
              "description": "Indicates whether the user is managed by an enterprise.",
              "enum": [
                false,
                true
              ]
            },
            "shouldShowEnterpriseManagedWelcome": {
              "type": "boolean",
              "description": "Whether the Enterprise Managed User joined the current team through the Update Account flow and should see its welcome experience.",
              "enum": [
                false,
                true
              ]
            }
          }
        }
      ]
    }
  }
}
```

### 302: No description

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 409: No description

### 410: No description

---

## Related

- [user endpoints](/docs/rest-api#user)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
