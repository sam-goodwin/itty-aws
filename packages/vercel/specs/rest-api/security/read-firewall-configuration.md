---
title: read-firewall-configuration
product: vercel
url: /docs/rest-api/security/read-firewall-configuration
canonical_url: "https://vercel.com/docs/rest-api/security/read-firewall-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about read-firewall-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Read Firewall Configuration

```http
GET /v1/security/firewall/config/{configVersion}
```

Retrieve the specified firewall configuration for a project. The deployed configVersion will be `active`

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `configVersion` | string | Yes | The deployed configVersion for the firewall configuration |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "changes",
    "firewallEnabled",
    "id",
    "ips",
    "ownerId",
    "projectKey",
    "rules",
    "updatedAt",
    "version"
  ],
  "properties": {
    "ownerId": {
      "type": "string"
    },
    "projectKey": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "version": {
      "type": "number"
    },
    "updatedAt": {
      "type": "string"
    },
    "firewallEnabled": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "crs": {
      "type": "object",
      "description": "Custom Ruleset",
      "required": [
        "gen",
        "java",
        "lfi",
        "ma",
        "php",
        "rce",
        "rfi",
        "sd",
        "sf",
        "sqli",
        "xss"
      ],
      "properties": {
        "sd": {
          "type": "object",
          "description": "Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "ma": {
          "type": "object",
          "description": "Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "lfi": {
          "type": "object",
          "description": "Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "rfi": {
          "type": "object",
          "description": "Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "rce": {
          "type": "object",
          "description": "Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "php": {
          "type": "object",
          "description": "PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "gen": {
          "type": "object",
          "description": "Generic Attack - Provide broad protection from various undefined or novel attack vectors.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "xss": {
          "type": "object",
          "description": "XSS Attack - Prevent injection of malicious scripts into trusted webpages.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "sqli": {
          "type": "object",
          "description": "SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "sf": {
          "type": "object",
          "description": "Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "java": {
          "type": "object",
          "description": "Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        }
      }
    },
    "rules": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "action",
              "active",
              "conditionGroup",
              "id",
              "name",
              "valid",
              "validationErrors"
            ]
          },
          {
            "type": "object",
            "required": [
              "action",
              "active",
              "conditionGroup",
              "id",
              "name",
              "valid",
              "validationErrors"
            ]
          }
        ]
      }
    },
    "ips": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "action",
          "hostname",
          "id",
          "ip"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "hostname": {
            "type": "string"
          },
          "ip": {
            "type": "string"
          },
          "notes": {
            "type": "string"
          },
          "action": {
            "type": "string",
            "enum": [
              "bypass",
              "challenge",
              "deny",
              "log"
            ]
          }
        }
      }
    },
    "rulesets": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "active",
              "conditionGroup",
              "id",
              "name"
            ]
          }
        },
        {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "required": [
              "action"
            ]
          }
        }
      ]
    },
    "changes": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "managedRules": {
      "type": "object",
      "properties": {
        "bot_protection": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "ai_bots": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "owasp": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "vercel_ruleset": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "traffic_sources": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        }
      }
    },
    "botIdEnabled": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "logHeaders": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "string",
          "enum": [
            "*"
          ]
        }
      ]
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

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
