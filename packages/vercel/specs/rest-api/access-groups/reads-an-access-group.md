---
title: reads-an-access-group
product: vercel
url: /docs/rest-api/access-groups/reads-an-access-group
canonical_url: "https://vercel.com/docs/rest-api/access-groups/reads-an-access-group"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about reads-an-access-group on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Reads an access group

```http
GET /v1/access-groups/{idOrName}
```

Allows to read an access group

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "accessGroupId",
    "createdAt",
    "isDsyncManaged",
    "membersCount",
    "name",
    "projectsCount",
    "teamId",
    "updatedAt"
  ],
  "properties": {
    "teamPermissions": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "AiGatewayApiKeyOwnedBySelf",
          "AiGatewayBudgetManager",
          "AiGatewayCredits",
          "AiGatewaySettings",
          "ConnectorManager",
          "CreateProject",
          "EnvVariableManager",
          "EnvironmentManager",
          "FullProductionDeployment",
          "IntegrationManager",
          "OrgAdmin",
          "OrgViewer",
          "UsageViewer",
          "V0Builder",
          "V0Chatter",
          "V0Viewer"
        ]
      }
    },
    "entitlements": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "v0"
        ]
      }
    },
    "isDsyncManaged": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "name": {
      "type": "string",
      "description": "The name of this access group."
    },
    "createdAt": {
      "type": "string",
      "description": "Timestamp in milliseconds when the access group was created."
    },
    "teamId": {
      "type": "string",
      "description": "ID of the team that this access group belongs to."
    },
    "updatedAt": {
      "type": "string",
      "description": "Timestamp in milliseconds when the access group was last updated."
    },
    "accessGroupId": {
      "type": "string",
      "description": "ID of the access group."
    },
    "membersCount": {
      "type": "number",
      "description": "Number of members in the access group."
    },
    "projectsCount": {
      "type": "number",
      "description": "Number of projects in the access group."
    },
    "teamRoles": {
      "type": "array",
      "description": "Roles that the team has in the access group.",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [access-groups endpoints](/docs/rest-api#access-groups)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
