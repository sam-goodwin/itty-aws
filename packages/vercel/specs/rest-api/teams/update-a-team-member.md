---
title: update-a-team-member
product: vercel
url: /docs/rest-api/teams/update-a-team-member
canonical_url: "https://vercel.com/docs/rest-api/teams/update-a-team-member"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-a-team-member on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update a Team Member

```http
PATCH /v1/teams/{teamId}/members/{uid}
```

Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `uid` | string | Yes | The ID of the member. |
| `teamId` | string | Yes |  |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "confirmed": {
      "type": "boolean",
      "description": "Accept a user who requested access to the team.",
      "enum": [
        true
      ]
    },
    "role": {
      "type": "string",
      "description": "The role in the team of the member.",
      "default": "MEMBER"
    },
    "teamPermissions": {
      "type": "array",
      "description": "The team permissions to set for the member. Permissions must be compatible with the team roles assigned to the member.",
      "items": {
        "type": "string",
        "enum": [
          "ConnectorManager",
          "IntegrationManager",
          "CreateProject",
          "FullProductionDeployment",
          "UsageViewer",
          "EnvVariableManager",
          "EnvironmentManager",
          "OrgAdmin",
          "OrgViewer",
          "AiGatewaySettings",
          "AiGatewayCredits",
          "AiGatewayApiKeyOwnedBySelf",
          "AiGatewayBudgetManager",
          "V0Builder",
          "V0Chatter",
          "V0Viewer"
        ]
      }
    },
    "projects": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "role",
          "projectId"
        ],
        "properties": {
          "projectId": {
            "type": "string",
            "description": "The ID of the project.",
            "maxLength": 256
          },
          "role": {
            "type": "string",
            "description": "The project role of the member that will be added. \\\"null\\\" will remove this project level role.",
            "enum": [
              "ADMIN",
              "PROJECT_VIEWER",
              "PROJECT_DEVELOPER",
              null
            ],
            "nullable": true
          }
        }
      }
    },
    "joinedFrom": {
      "type": "object",
      "properties": {
        "ssoUserId": {
          "nullable": true
        }
      }
    }
  }
}
```

## Responses

### 200: Successfully updated the membership.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "ID of the team."
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.
Cannot disconnect SSO from a Team member that does not have a SSO connection.
Cannot confirm a member that is already confirmed.
Cannot confirm a member that did not request access.

### 401: The request is not authorized.
Team members can only be updated by an owner, or by the authenticated user if they are only disconnecting their SAML connection to the Team.

### 402: No description

### 403: You do not have permission to access this resource.

### 404: The provided user is not part of this team.
A user with the specified ID does not exist.

### 409: No description

### 410: No description

### 500: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
