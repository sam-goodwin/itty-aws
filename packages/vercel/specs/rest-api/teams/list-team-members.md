---
title: list-team-members
product: vercel
url: /docs/rest-api/teams/list-team-members
canonical_url: "https://vercel.com/docs/rest-api/teams/list-team-members"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-team-members on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List team members

```http
GET /v3/teams/{teamId}/members
```

Get a paginated list of team members for the provided team.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | number. min: 1 | No | Limit how many teams should be returned |
| `since` | number | No | Timestamp in milliseconds to only include members added since then. |
| `until` | number | No | Timestamp in milliseconds to only include members added until then. |
| `search` | string | No | Search team members by their name, username, and email. |
| `role` | string. enum: OWNER, MEMBER, DEVELOPER, SECURITY, BILLING, VIEWER, VIEWER_FOR_PLUS, CONTRIBUTOR | No | Only return members with the specified team role. |
| `excludeProject` | string | No | Exclude members who belong to the specified project. |
| `eligibleMembersForProjectId` | string | No | Include team members who are eligible to be members of the specified project. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "members",
    "pagination"
  ],
  "properties": {
    "members": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "confirmed",
          "createdAt",
          "email",
          "role",
          "uid",
          "username"
        ],
        "properties": {
          "avatar": {
            "type": "string",
            "description": "ID of the file for the Avatar of this member."
          },
          "confirmed": {
            "type": "boolean",
            "description": "Boolean that indicates if this member was confirmed by an owner.",
            "enum": [
              false,
              true
            ]
          },
          "email": {
            "type": "string",
            "description": "The email of this member."
          },
          "github": {
            "type": "object",
            "description": "Information about the GitHub account for this user."
          },
          "gitlab": {
            "type": "object",
            "description": "Information about the GitLab account of this user."
          },
          "bitbucket": {
            "type": "object",
            "description": "Information about the Bitbucket account of this user."
          },
          "role": {
            "type": "string",
            "description": "Role of this user in the team.",
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
          "uid": {
            "type": "string",
            "description": "The ID of this user."
          },
          "username": {
            "type": "string",
            "description": "The unique username of this user."
          },
          "name": {
            "type": "string",
            "description": "The name of this user."
          },
          "createdAt": {
            "type": "number",
            "description": "Timestamp in milliseconds when this member was added."
          },
          "accessRequestedAt": {
            "type": "number",
            "description": "Timestamp in milliseconds for when this team member was accepted by an owner."
          },
          "joinedFrom": {
            "type": "object",
            "description": "Map with information about the members origin if they joined by requesting access.",
            "required": [
              "origin"
            ]
          },
          "projects": {
            "type": "array",
            "description": "Array of project memberships"
          },
          "isEnterpriseManaged": {
            "type": "boolean",
            "description": "Indicates whether the user is managed by an enterprise.",
            "enum": [
              false,
              true
            ]
          }
        }
      }
    },
    "emailInviteCodes": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "isDSyncUser"
        ],
        "properties": {
          "accessGroups": {
            "type": "array"
          },
          "id": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "role": {
            "type": "string",
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
            "type": "array"
          },
          "teamPermissions": {
            "type": "array"
          },
          "isDSyncUser": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "createdAt": {
            "type": "number"
          },
          "expired": {
            "type": "boolean",
            "enum": [
              true
            ]
          },
          "projects": {
            "type": "object"
          },
          "entitlements": {
            "type": "array"
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "required": [
        "count",
        "hasNext",
        "next",
        "prev"
      ],
      "properties": {
        "hasNext": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "count": {
          "type": "number",
          "description": "Amount of items in the current page."
        },
        "next": {
          "type": "number",
          "description": "Timestamp that must be used to request the next page.",
          "nullable": true
        },
        "prev": {
          "type": "number",
          "description": "Timestamp that must be used to request the previous page.",
          "nullable": true
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
