## v1.0.0-rc.1

### &nbsp;&nbsp;&nbsp;🚀 Features

- Refactor to use single Smithy pipeline and re-write all SDKs &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/390 [<samp>(c7395)</samp>](https://github.com/alchemy-run/distilled/commit/c73953df0)
- Point worker export condition at src .ts &nbsp;-&nbsp; by **sam** [<samp>(338c5)</samp>](https://github.com/alchemy-run/distilled/commit/338c5fab5)
- **aws**:
  - Generate simpledb from a manual spec &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/401 [<samp>(d5500)</samp>](https://github.com/alchemy-run/distilled/commit/d55002ca3)
  - Make Region optional, defaulting to the authenticated one &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/409 [<samp>(26b99)</samp>](https://github.com/alchemy-run/distilled/commit/26b9901a0)
- **cloudflare**:
  - Restore the two missing edge-preview routes + catch the class of gap that hid them &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/400 [<samp>(21f57)</samp>](https://github.com/alchemy-run/distilled/commit/21f57e5c6)
  - Workerd export condition resolves from src &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/418 [<samp>(0c91c)</samp>](https://github.com/alchemy-run/distilled/commit/0c91c17fd)
  - **workers**:
    - Stream binding kind on script-upload metadata &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/397 [<samp>(8d4ce)</samp>](https://github.com/alchemy-run/distilled/commit/8d4ced3f8)
    - Streaming_tail_consumers on script-upload metadata &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/398 [<samp>(d9c54)</samp>](https://github.com/alchemy-run/distilled/commit/d9c542cbc)
- **codegen**:
  - Let any model give an error a category &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/413 [<samp>(2a544)</samp>](https://github.com/alchemy-run/distilled/commit/2a54440c0)

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **aws**:
  - Make `message` the canonical field on every error class &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/407 [<samp>(6ae24)</samp>](https://github.com/alchemy-run/distilled/commit/6ae24a0f1)
  - **scheduler**: Type ExecutionRoleNotAssumable on create/updateSchedule &nbsp;-&nbsp; by **sam** and **Claude Fable 5** [<samp>(f396b)</samp>](https://github.com/alchemy-run/distilled/commit/f396b012b)
- **cloudflare**:
  - Correct getCrawl's response schema &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/410 [<samp>(5d24b)</samp>](https://github.com/alchemy-run/distilled/commit/5d24b25ca)
  - **turnstile**: Tag a bare 404 as WidgetNotFound &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/402 [<samp>(d3a40)</samp>](https://github.com/alchemy-run/distilled/commit/d3a4017ff)
  - **workers**: Type WorkerHasNoVersions on getScript &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/414 [<samp>(1c7e3)</samp>](https://github.com/alchemy-run/distilled/commit/1c7e3d293)
- **codegen**:
  - PURE-mark generated error classes so they tree-shake &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/403 [<samp>(7822b)</samp>](https://github.com/alchemy-run/distilled/commit/7822b37f8)
  - Give `.items()` a real element type &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/404 [<samp>(c5e3b)</samp>](https://github.com/alchemy-run/distilled/commit/c5e3b2b48)
  - Stop a filtered generate from truncating the barrel &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/411 [<samp>(a9dc4)</samp>](https://github.com/alchemy-run/distilled/commit/a9dc4fbfd)
- **core**:
  - Keep `.pages`/`.items` on a yielded paginated operation &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/405 [<samp>(dc4a1)</samp>](https://github.com/alchemy-run/distilled/commit/dc4a159ed)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.30.3...HEAD)

---

