---
title: get-access-request-status
product: vercel
url: /docs/rest-api/teams/get-access-request-status
canonical_url: "https://vercel.com/docs/rest-api/teams/get-access-request-status"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-access-request-status on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get access request status

```http
GET /v1/teams/{teamId}/request/{userId}
```

Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `userId` | string | Yes |  |
| `teamId` | string | Yes |  |


## Responses

### 200: Successfully

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "accessRequestedAt",
    "bitbucket",
    "confirmed",
    "github",
    "gitlab",
    "joinedFrom",
    "teamName",
    "teamSlug"
  ],
  "properties": {
    "teamSlug": {
      "type": "string",
      "description": "The slug of the team."
    },
    "teamName": {
      "type": "string",
      "description": "The name of the team."
    },
    "confirmed": {
      "type": "boolean",
      "description": "Current status of the membership. Will be `true` if confirmed, if pending it'll be `false`.",
      "enum": [
        false,
        true
      ]
    },
    "joinedFrom": {
      "type": "object",
      "description": "A map that describes the origin from where the user joined.",
      "required": [
        "origin"
      ],
      "properties": {
        "origin": {
          "type": "string",
          "enum": [
            "account-update",
            "bitbucket",
            "dsync",
            "feedback",
            "github",
            "gitlab",
            "import",
            "link",
            "mail",
            "nsnb-auto-approve",
            "nsnb-hobby-upgrade",
            "nsnb-invite",
            "nsnb-redeploy",
            "nsnb-redeploy-attribution-card",
            "nsnb-request-access",
            "nsnb-viewer-upgrade",
            "organization-teams",
            "saml",
            "teams"
          ]
        },
        "commitId": {
          "type": "string"
        },
        "repoId": {
          "type": "string"
        },
        "repoPath": {
          "type": "string"
        },
        "gitUserId": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            }
          ]
        },
        "gitUserLogin": {
          "type": "string"
        },
        "ssoUserId": {
          "type": "string"
        },
        "ssoConnectedAt": {
          "type": "number"
        },
        "idpUserId": {
          "type": "string"
        },
        "dsyncUserId": {
          "type": "string"
        },
        "dsyncConnectedAt": {
          "type": "number"
        }
      }
    },
    "accessRequestedAt": {
      "type": "number",
      "description": "Timestamp in milliseconds when the user requested access to the team."
    },
    "github": {
      "type": "object",
      "description": "Map of the connected GitHub account.",
      "nullable": true,
      "properties": {
        "login": {
          "type": "string"
        }
      }
    },
    "gitlab": {
      "type": "object",
      "description": "Map of the connected GitLab account.",
      "nullable": true,
      "properties": {
        "login": {
          "type": "string"
        }
      }
    },
    "bitbucket": {
      "type": "object",
      "description": "Map of the connected Bitbucket account.",
      "nullable": true,
      "properties": {
        "login": {
          "type": "string"
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.
User is already a confirmed member of the team and did not request access. Only visible when the authenticated user does have access to the team.

### 401: No description

### 403: You do not have permission to access this resource.

### 404: The provided user doesn't have a membership.
Team was not found.

### 410: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
