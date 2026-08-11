---
title: invite-a-user
product: vercel
url: /docs/rest-api/teams/invite-a-user
canonical_url: "https://vercel.com/docs/rest-api/teams/invite-a-user"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about invite-a-user on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Invite a user

```http
POST /v2/teams/{teamId}/members
```

Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user to be invited must be specified by email.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "email"
    ],
    "properties": {
      "email": {
        "type": "string",
        "description": "The email address of the user to invite",
        "format": "email"
      },
      "role": {
        "type": "string",
        "description": "The role of the user to invite",
        "enum": [
          "OWNER",
          "MEMBER",
          "DEVELOPER",
          "SECURITY",
          "BILLING",
          "VIEWER",
          "VIEWER_FOR_PLUS",
          "CONTRIBUTOR"
        ],
        "default": "VIEWER"
      },
      "projects": {
        "type": "array",
        "items": {
          "type": "object",
          "required": [
            "role",
            "projectId"
          ]
        }
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "The member was successfully added to the team.",
  "required": [
    "email",
    "role",
    "uid",
    "username"
  ],
  "properties": {
    "uid": {
      "type": "string",
      "description": "The ID of the invited user"
    },
    "username": {
      "type": "string",
      "description": "The username of the invited user"
    },
    "email": {
      "type": "string",
      "description": "The email of the invited user."
    },
    "role": {
      "type": "string",
      "description": "The role used for the invitation",
      "enum": [
        "BILLING",
        "CONTRIBUTOR",
        "DEVELOPER",
        "MEMBER",
        "OWNER",
        "SECURITY",
        "VIEWER",
        "VIEWER_FOR_PLUS"
      ]
    },
    "teamRoles": {
      "type": "array",
      "description": "The team roles of the user",
      "items": {
        "type": "string",
        "description": "The team roles of the user",
        "enum": [
          "BILLING",
          "CONTRIBUTOR",
          "DEVELOPER",
          "MEMBER",
          "OWNER",
          "SECURITY",
          "VIEWER",
          "VIEWER_FOR_PLUS"
        ]
      }
    },
    "teamPermissions": {
      "type": "array",
      "description": "The team permissions of the user",
      "items": {
        "type": "string",
        "description": "The team permissions of the user",
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
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.
The authenticated user must be a team owner to perform the action

### 410: No description

### 503: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
