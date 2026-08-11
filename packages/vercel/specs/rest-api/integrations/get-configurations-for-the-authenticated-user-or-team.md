---
title: get-configurations-for-the-authenticated-user-or-team
product: vercel
url: /docs/rest-api/integrations/get-configurations-for-the-authenticated-user-or-team
canonical_url: "https://vercel.com/docs/rest-api/integrations/get-configurations-for-the-authenticated-user-or-team"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-configurations-for-the-authenticated-user-or-team on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get configurations for the authenticated user or team

```http
GET /v1/integrations/configurations
```

Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `view` | string. enum: account, project | Yes |  |
| `installationType` | string. enum: marketplace, external, provisioning | No |  |
| `integrationIdOrSlug` | string | No | ID of the integration |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The list of configurations for the authenticated user

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "array",
      "description": "The list of configurations for the authenticated user",
      "items": {
        "type": "object",
        "description": "The list of configurations for the authenticated user",
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
            "description": "When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access."
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
            "description": "The resources that are allowed to be accessed by the configuration."
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
    },
    {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "id",
          "integration",
          "integrationId",
          "ownerId",
          "scopes",
          "slug",
          "type",
          "updatedAt",
          "userId"
        ],
        "properties": {
          "integration": {
            "type": "object",
            "required": [
              "icon",
              "isLegacy",
              "name"
            ]
          },
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
            "description": "When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access."
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
            "description": "The resources that are allowed to be accessed by the configuration."
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
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
