---
title: request-access-to-a-team
product: vercel
url: /docs/rest-api/teams/request-access-to-a-team
canonical_url: "https://vercel.com/docs/rest-api/teams/request-access-to-a-team"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about request-access-to-a-team on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Request access to a team

```http
POST /v1/teams/{teamId}/request
```

Request access to a team as a member. An owner has to approve the request. Only 100 users can request access to a team at the same time.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes |  |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "joinedFrom"
  ],
  "properties": {
    "joinedFrom": {
      "type": "object",
      "required": [
        "origin"
      ],
      "properties": {
        "origin": {
          "type": "string",
          "description": "The origin of the request.",
          "enum": [
            "import",
            "teams",
            "github",
            "gitlab",
            "bitbucket",
            "feedback",
            "organization-teams"
          ]
        },
        "commitId": {
          "type": "string",
          "description": "The commit sha if the origin is a git provider."
        },
        "repoId": {
          "type": "string",
          "description": "The ID of the repository for the given Git provider."
        },
        "repoPath": {
          "type": "string",
          "description": "The path to the repository for the given Git provider."
        },
        "gitUserId": {
          "description": "The ID of the Git account of the user who requests access.",
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
          "type": "string",
          "description": "The login name for the Git account of the user who requests access."
        }
      }
    }
  }
}
```

## Responses

### 200: Successfuly requested access to the team.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "bitbucket",
    "github",
    "gitlab",
    "teamName",
    "teamSlug"
  ],
  "properties": {
    "teamSlug": {
      "type": "string"
    },
    "teamName": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "joinedFrom": {
      "type": "object",
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
      "type": "number"
    },
    "github": {
      "type": "object",
      "nullable": true,
      "properties": {
        "login": {
          "type": "string"
        }
      }
    },
    "gitlab": {
      "type": "object",
      "nullable": true,
      "properties": {
        "login": {
          "type": "string"
        }
      }
    },
    "bitbucket": {
      "type": "object",
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

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: No description

### 403: You do not have permission to access this resource.

### 404: The team was not found.

### 410: No description

### 429: No description

### 503: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
