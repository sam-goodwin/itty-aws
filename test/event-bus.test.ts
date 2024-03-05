import { expect, test } from "vitest";
import { AWS } from "../src/index.js";
import { endpoint, EventBusName } from "./constants.js";
import { fail } from "assert";

const client = new AWS.EventBridge({
  endpoint,
});

test("should PutEvents", async () => {
  let response;
  let attempts = 0;
  while (true) {
    response = await putEvents();
    if (response.FailedEntryCount) {
      attempts += 1;
      if (attempts > 10) {
        fail("failed to put events");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } else {
      break;
    }
  }

  function putEvents() {
    return client.putEvents({
      Entries: [
        {
          EventBusName,
          DetailType: "itty-event",
          Detail: JSON.stringify({
            key: "value",
          }),
          Source: "itty",
        },
      ],
    });
  }
});
