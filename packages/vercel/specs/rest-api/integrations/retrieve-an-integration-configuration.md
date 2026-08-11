---
title: retrieve-an-integration-configuration
product: vercel
url: /docs/rest-api/integrations/retrieve-an-integration-configuration
canonical_url: "https://vercel.com/docs/rest-api/integrations/retrieve-an-integration-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-an-integration-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve an integration configuration

```http
GET /v1/integrations/configuration/{id}
```

Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the configuration to check |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The configuration with the provided id

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "createdAt",
        "id",
        "integrationId",
        "notification",
        "ownerId",
        "projectSelection",
        "scopes",
        "slug",
        "transferRequest",
        "type",
        "updatedAt",
        "userId"
      ],
      "properties": {
        "projectSelection": {
          "type": "string",
          "description": "A string representing the permission for projects. Possible values are `all` or `selected`.",
          "enum": [
            "all",
            "selected"
          ]
        },
        "notification": {
          "type": "object",
          "required": [
            "level",
            "title"
          ],
          "properties": {
            "level": {
              "type": "string",
              "enum": [
                "error",
                "info",
                "warn"
              ]
            },
            "title": {
              "type": "string"
            },
            "message": {
              "type": "string"
            },
            "href": {
              "type": "string"
            }
          }
        },
        "transferRequest": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "createdAt",
                "expiresAt",
                "kind",
                "requestId",
                "requester",
                "transferId"
              ]
            },
            {
              "type": "object",
              "required": [
                "createdAt",
                "expiresAt",
                "kind",
                "requestId",
                "requester",
                "transferId"
              ]
            }
          ]
        },
        "projects": {
          "type": "array",
          "description": "When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.",
          "items": {
            "type": "string"
          }
        },
        "status": {
          "type": "string",
          "description": "The configuration status. Optional. If not defined, assume 'ready'.",
          "enum": [
            "error",
            "onboarding",
            "pending",
            "ready",
            "resumed",
            "suspended",
            "uninstalled"
          ]
        },
        "type": {
          "type": "string",
          "enum": [
            "integration-configuration"
          ]
        },
        "id": {
          "type": "string",
          "description": "The unique identifier of the configuration"
        },
        "integrationId": {
          "type": "string",
          "description": "The unique identifier of the app the configuration was created for"
        },
        "userId": {
          "type": "string",
          "description": "The ID of the user that created the configuration."
        },
        "ownerId": {
          "type": "string",
          "description": "The user or team ID that owns the configuration"
        },
        "createdAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was created"
        },
        "updatedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was updated."
        },
        "deletedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was deleted.",
          "nullable": true
        },
        "canConfigureOpenTelemetry": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "completedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was installed successfully"
        },
        "externalId": {
          "type": "string",
          "description": "An external identifier defined by the integration vendor."
        },
        "source": {
          "type": "string",
          "description": "Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.",
          "enum": [
            "backoffice",
            "cli",
            "deploy-button",
            "external",
            "import-recommended-integrations",
            "marketplace",
            "oauth",
            "resource-claims",
            "v0"
          ]
        },
        "slug": {
          "type": "string",
          "description": "The slug of the integration the configuration is created for."
        },
        "teamId": {
          "type": "string",
          "description": "When the configuration was created for a team, this will show the ID of the team.",
          "nullable": true
        },
        "scopes": {
          "type": "array",
          "description": "The resources that are allowed to be accessed by the configuration.",
          "items": {
            "type": "string"
          }
        },
        "disabledAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team."
        },
        "deleteRequestedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.",
          "nullable": true
        },
        "customerDeleteRequestedAt": {
          "type": "number",
          "description": "Record when the customer initited deletion, independent of whether `deleteRequestedAt` gets set.",
          "nullable": true
        },
        "disabledReason": {
          "type": "string",
          "enum": [
            "account-plan-downgrade",
            "disabled-by-admin",
            "disabled-by-owner",
            "feature-not-available",
            "original-owner-left-the-team",
            "original-owner-role-downgraded"
          ]
        },
        "installationType": {
          "type": "string",
          "description": "Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'",
          "enum": [
            "external",
            "marketplace"
          ]
        }
      }
    },
    {
      "type": "object",
      "description": "The configuration with the provided id",
      "required": [
        "createdAt",
        "id",
        "integrationId",
        "ownerId",
        "scopes",
        "slug",
        "type",
        "updatedAt",
        "userId"
      ],
      "properties": {
        "completedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was installed successfully"
        },
        "createdAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was created"
        },
        "id": {
          "type": "string",
          "description": "The unique identifier of the configuration"
        },
        "integrationId": {
          "type": "string",
          "description": "The unique identifier of the app the configuration was created for"
        },
        "ownerId": {
          "type": "string",
          "description": "The user or team ID that owns the configuration"
        },
        "status": {
          "type": "string",
          "description": "The configuration status. Optional. If not defined, assume 'ready'.",
          "enum": [
            "error",
            "onboarding",
            "pending",
            "ready",
            "resumed",
            "suspended",
            "uninstalled"
          ]
        },
        "externalId": {
          "type": "string",
          "description": "An external identifier defined by the integration vendor."
        },
        "projects": {
          "type": "array",
          "description": "When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.",
          "items": {
            "type": "string"
          }
        },
        "source": {
          "type": "string",
          "description": "Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.",
          "enum": [
            "backoffice",
            "cli",
            "deploy-button",
            "external",
            "import-recommended-integrations",
            "marketplace",
            "oauth",
            "resource-claims",
            "v0"
          ]
        },
        "slug": {
          "type": "string",
          "description": "The slug of the integration the configuration is created for."
        },
        "teamId": {
          "type": "string",
          "description": "When the configuration was created for a team, this will show the ID of the team.",
          "nullable": true
        },
        "type": {
          "type": "string",
          "enum": [
            "integration-configuration"
          ]
        },
        "updatedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was updated."
        },
        "userId": {
          "type": "string",
          "description": "The ID of the user that created the configuration."
        },
        "scopes": {
          "type": "array",
          "description": "The resources that are allowed to be accessed by the configuration.",
          "items": {
            "type": "string"
          }
        },
        "disabledAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team."
        },
        "deletedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was deleted.",
          "nullable": true
        },
        "deleteRequestedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.",
          "nullable": true
        },
        "customerDeleteRequestedAt": {
          "type": "number",
          "description": "Record when the customer initited deletion, independent of whether `deleteRequestedAt` gets set.",
          "nullable": true
        },
        "disabledReason": {
          "type": "string",
          "enum": [
            "account-plan-downgrade",
            "disabled-by-admin",
            "disabled-by-owner",
            "feature-not-available",
            "original-owner-left-the-team",
            "original-owner-role-downgraded"
          ]
        },
        "installationType": {
          "type": "string",
          "description": "Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'",
          "enum": [
            "external",
            "marketplace"
          ]
        }
      }
    },
    {
      "type": "object",
      "description": "A configuration represents information about a single installation of an integration within an individual or team account",
      "properties": {
        "completedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was installed successfully"
        },
        "createdAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was created"
        },
        "id": {
          "type": "string",
          "description": "The unique identifier of the configuration"
        },
        "integrationId": {
          "type": "string",
          "description": "The unique identifier of the app the configuration was created for"
        },
        "ownerId": {
          "type": "string",
          "description": "The user or team ID that owns the configuration"
        },
        "status": {
          "type": "string",
          "description": "The configuration status. Optional. If not defined, assume 'ready'.",
          "enum": [
            "error",
            "onboarding",
            "pending",
            "ready",
            "resumed",
            "suspended",
            "uninstalled"
          ]
        },
        "externalId": {
          "type": "string",
          "description": "An external identifier defined by the integration vendor."
        },
        "projects": {
          "type": "array",
          "description": "When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.",
          "items": {
            "type": "string"
          }
        },
        "source": {
          "type": "string",
          "description": "Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.",
          "enum": [
            "backoffice",
            "cli",
            "deploy-button",
            "external",
            "import-recommended-integrations",
            "marketplace",
            "oauth",
            "resource-claims",
            "v0"
          ]
        },
        "slug": {
          "type": "string",
          "description": "The slug of the integration the configuration is created for."
        },
        "teamId": {
          "type": "string",
          "description": "When the configuration was created for a team, this will show the ID of the team.",
          "nullable": true
        },
        "type": {
          "type": "string",
          "enum": [
            "integration-configuration"
          ]
        },
        "updatedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was updated."
        },
        "userId": {
          "type": "string",
          "description": "The ID of the user that created the configuration."
        },
        "scopes": {
          "type": "array",
          "description": "The resources that are allowed to be accessed by the configuration.",
          "items": {
            "type": "string"
          }
        },
        "disabledAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team."
        },
        "deletedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration was deleted.",
          "nullable": true
        },
        "deleteRequestedAt": {
          "type": "number",
          "description": "A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.",
          "nullable": true
        },
        "customerDeleteRequestedAt": {
          "type": "number",
          "description": "Record when the customer initited deletion, independent of whether `deleteRequestedAt` gets set.",
          "nullable": true
        },
        "disabledReason": {
          "type": "string",
          "enum": [
            "account-plan-downgrade",
            "disabled-by-admin",
            "disabled-by-owner",
            "feature-not-available",
            "original-owner-left-the-team",
            "original-owner-role-downgraded"
          ]
        },
        "installationType": {
          "type": "string",
          "description": "Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'",
          "enum": [
            "external",
            "marketplace"
          ]
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: The configuration was not found

### 410: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
