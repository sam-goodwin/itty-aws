import { UnknownResendError } from "../errors.js";
import { paginateResend } from "../pagination.js";
import { ResendProtocol } from "../protocol.js";
import { Retry } from "../retry.js";
import {
  C as String,
  D as optional,
  E as lazyFrom,
  O as suspend,
  S as Record,
  T as Unknown,
  b as NullOr,
  v as Array,
  w as Struct,
  x as Number,
  y as Boolean,
} from "./errors-DKUnwzoV.js";
import {
  _ as Query,
  c as make,
  g as Label,
  l as makePaginated,
  m as HttpBody,
  p as Http,
  r as SensitiveValue,
} from "./protocol-rest-CII8Ar_f.js";
import { t as __exportAll } from "./rolldown-runtime-w6R9maHv.js";
import "effect/Redacted";

//#region lib/chunks.js
const builders = /* @__PURE__ */ new WeakMap();
const at = (build, j) => {
  let builder = builders.get(build);
  if (!builder) builders.set(build, (builder = { build: (data) => build(data) }));
  return lazyFrom(builder, j);
};

//#endregion
//#region ../resend/lib/services/resend.js
var resend_exports = /* @__PURE__ */ __exportAll({
  cancelEmail: () => cancelEmail,
  createApiKey: () => createApiKey,
  createAutomation: () => createAutomation,
  createBroadcast: () => createBroadcast,
  createContact: () => createContact,
  createContactProperty: () => createContactProperty,
  createDomain: () => createDomain,
  createEmail: () => createEmail,
  createEmailBatch: () => createEmailBatch,
  createEvent: () => createEvent,
  createSegment: () => createSegment,
  createTemplate: () => createTemplate,
  createTopic: () => createTopic,
  createWebhook: () => createWebhook,
  deleteApiKey: () => deleteApiKey,
  deleteAutomation: () => deleteAutomation,
  deleteBroadcast: () => deleteBroadcast,
  deleteContact: () => deleteContact,
  deleteContactProperty: () => deleteContactProperty,
  deleteContactSegment: () => deleteContactSegment,
  deleteDomain: () => deleteDomain,
  deleteEvent: () => deleteEvent,
  deleteSegment: () => deleteSegment,
  deleteTemplate: () => deleteTemplate,
  deleteTopic: () => deleteTopic,
  deleteWebhook: () => deleteWebhook,
  duplicateTemplate: () => duplicateTemplate,
  getAutomation: () => getAutomation,
  getAutomationRun: () => getAutomationRun,
  getBroadcast: () => getBroadcast,
  getContact: () => getContact,
  getContactProperty: () => getContactProperty,
  getDomain: () => getDomain,
  getEmail: () => getEmail,
  getEmailAttachment: () => getEmailAttachment,
  getEmailReceiving: () => getEmailReceiving,
  getEmailReceivingAttachment: () => getEmailReceivingAttachment,
  getEvent: () => getEvent,
  getLog: () => getLog,
  getSegment: () => getSegment,
  getTemplate: () => getTemplate,
  getTopic: () => getTopic,
  getWebhook: () => getWebhook,
  listApiKeys: () => listApiKeys,
  listAutomationRuns: () => listAutomationRuns,
  listAutomations: () => listAutomations,
  listBroadcasts: () => listBroadcasts,
  listContactProperties: () => listContactProperties,
  listContactSegments: () => listContactSegments,
  listContactTopics: () => listContactTopics,
  listContacts: () => listContacts,
  listDomains: () => listDomains,
  listEmailAttachments: () => listEmailAttachments,
  listEmailReceiving: () => listEmailReceiving,
  listEmailReceivingAttachments: () => listEmailReceivingAttachments,
  listEmails: () => listEmails,
  listEvents: () => listEvents,
  listLogs: () => listLogs,
  listSegments: () => listSegments,
  listTemplates: () => listTemplates,
  listTopics: () => listTopics,
  listWebhooks: () => listWebhooks,
  publishTemplate: () => publishTemplate,
  sendBroadcast: () => sendBroadcast,
  sendEvent: () => sendEvent,
  stopAutomation: () => stopAutomation,
  updateAutomation: () => updateAutomation,
  updateBroadcast: () => updateBroadcast,
  updateContact: () => updateContact,
  updateContactProperty: () => updateContactProperty,
  updateContactSegment: () => updateContactSegment,
  updateContactTopics: () => updateContactTopics,
  updateDomain: () => updateDomain,
  updateEmail: () => updateEmail,
  updateEvent: () => updateEvent,
  updateTemplate: () => updateTemplate,
  updateTopic: () => updateTopic,
  updateWebhook: () => updateWebhook,
  verifyDomain: () => verifyDomain,
});
const __s = [];
const cancelEmail = /*@__PURE__*/ make(() => ({
  input: __S(0, __c0, 0),
  output: __S(3, __c0, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createApiKey = /*@__PURE__*/ make(() => ({
  input: __S(4, __c0, 4),
  output: __S(5, __c0, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createAutomation = /*@__PURE__*/ make(() => ({
  input: __S(10, __c1, 2),
  output: __S(11, __c1, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createBroadcast = /*@__PURE__*/ make(() => ({
  input: __S(12, __c1, 4),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createContact = /*@__PURE__*/ make(() => ({
  input: __S(17, __c2, 1),
  output: __S(18, __c2, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createContactProperty = /*@__PURE__*/ make(() => ({
  input: __S(19, __c2, 3),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createDomain = /*@__PURE__*/ make(() => ({
  input: __S(21, __c2, 5),
  output: __S(24, __c3, 0),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createEmail = /*@__PURE__*/ make(() => ({
  input: __S(31, __c3, 7),
  output: __S(32, __c4, 0),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createEmailBatch = /*@__PURE__*/ make(() => ({
  input: __S(37, __c4, 5),
  output: __S(40, __c5, 0),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createEvent = /*@__PURE__*/ make(() => ({
  input: __S(41, __c5, 1),
  output: __S(11, __c1, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createSegment = /*@__PURE__*/ make(() => ({
  input: __S(42, __c5, 2),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createTemplate = /*@__PURE__*/ make(() => ({
  input: __S(45, __c5, 5),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createTopic = /*@__PURE__*/ make(() => ({
  input: __S(46, __c5, 6),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const createWebhook = /*@__PURE__*/ make(() => ({
  input: __S(47, __c5, 7),
  output: __S(48, __c6, 0),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteApiKey = /*@__PURE__*/ make(() => ({
  input: __S(49, __c6, 1),
  output: __S(50, __c6, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteAutomation = /*@__PURE__*/ make(() => ({
  input: __S(51, __c6, 3),
  output: __S(50, __c6, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteBroadcast = /*@__PURE__*/ make(() => ({
  input: __S(52, __c6, 4),
  output: __S(53, __c6, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteContact = /*@__PURE__*/ make(() => ({
  input: __S(54, __c6, 6),
  output: __S(55, __c6, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteContactProperty = /*@__PURE__*/ make(() => ({
  input: __S(56, __c7, 0),
  output: __S(53, __c6, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteContactSegment = /*@__PURE__*/ make(() => ({
  input: __S(57, __c7, 1),
  output: __S(58, __c7, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteDomain = /*@__PURE__*/ make(() => ({
  input: __S(59, __c7, 3),
  output: __S(50, __c6, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteEvent = /*@__PURE__*/ make(() => ({
  input: __S(60, __c7, 4),
  output: __S(50, __c6, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteSegment = /*@__PURE__*/ make(() => ({
  input: __S(61, __c7, 5),
  output: __S(53, __c6, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteTemplate = /*@__PURE__*/ make(() => ({
  input: __S(62, __c7, 6),
  output: __S(55, __c6, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteTopic = /*@__PURE__*/ make(() => ({
  input: __S(63, __c7, 7),
  output: __S(53, __c6, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const deleteWebhook = /*@__PURE__*/ make(() => ({
  input: __S(64, __c8, 0),
  output: __S(50, __c6, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const duplicateTemplate = /*@__PURE__*/ make(() => ({
  input: __S(65, __c8, 1),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getAutomation = /*@__PURE__*/ make(() => ({
  input: __S(66, __c8, 2),
  output: __S(69, __c8, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getAutomationRun = /*@__PURE__*/ make(() => ({
  input: __S(70, __c8, 6),
  output: __S(73, __c9, 1),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getBroadcast = /*@__PURE__*/ make(() => ({
  input: __S(74, __c9, 2),
  output: __S(75, __c9, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getContact = /*@__PURE__*/ make(() => ({
  input: __S(76, __c9, 4),
  output: __S(77, __c9, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getContactProperty = /*@__PURE__*/ make(() => ({
  input: __S(78, __c9, 6),
  output: __S(79, __c9, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getDomain = /*@__PURE__*/ make(() => ({
  input: __S(80, __c10, 0),
  output: __S(81, __c10, 1),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getEmail = /*@__PURE__*/ make(() => ({
  input: __S(82, __c10, 2),
  output: __S(3, __c0, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getEmailAttachment = /*@__PURE__*/ make(() => ({
  input: __S(83, __c10, 3),
  output: __S(84, __c10, 4),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getEmailReceiving = /*@__PURE__*/ make(() => ({
  input: __S(85, __c10, 5),
  output: __S(88, __c11, 0),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getEmailReceivingAttachment = /*@__PURE__*/ make(() => ({
  input: __S(89, __c11, 1),
  output: __S(84, __c10, 4),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getEvent = /*@__PURE__*/ make(() => ({
  input: __S(90, __c11, 2),
  output: __S(91, __c11, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getLog = /*@__PURE__*/ make(() => ({
  input: __S(92, __c11, 4),
  output: __S(93, __c11, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getSegment = /*@__PURE__*/ make(() => ({
  input: __S(94, __c11, 6),
  output: __S(95, __c11, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getTemplate = /*@__PURE__*/ make(() => ({
  input: __S(96, __c12, 0),
  output: __S(99, __c12, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getTopic = /*@__PURE__*/ make(() => ({
  input: __S(100, __c12, 4),
  output: __S(101, __c12, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const getWebhook = /*@__PURE__*/ make(() => ({
  input: __S(102, __c12, 6),
  output: __S(103, __c12, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const listApiKeys = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(104, __c13, 0),
    output: __S(107, __c13, 3),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listAutomationRuns = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(108, __c13, 4),
    output: __S(111, __c13, 7),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listAutomations = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(112, __c14, 0),
    output: __S(115, __c14, 3),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listBroadcasts = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(116, __c14, 4),
    output: __S(119, __c14, 7),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listContactProperties = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(120, __c15, 0),
    output: __S(123, __c15, 3),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listContacts = /*@__PURE__*/ make(() => ({
  input: __S(124, __c15, 4),
  output: __S(127, __c15, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const listContactSegments = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(128, __c16, 0),
    output: __S(131, __c16, 3),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listContactTopics = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(132, __c16, 4),
    output: __S(135, __c16, 7),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listDomains = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(136, __c17, 0),
    output: __S(139, __c17, 3),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listEmailAttachments = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(140, __c17, 4),
    output: __S(143, __c17, 7),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listEmailReceiving = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(144, __c18, 0),
    output: __S(149, __c18, 5),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listEmailReceivingAttachments = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(150, __c18, 6),
    output: __S(143, __c17, 7),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listEmails = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(151, __c18, 7),
    output: __S(153, __c19, 1),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listEvents = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(154, __c19, 2),
    output: __S(157, __c19, 5),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listLogs = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(158, __c19, 6),
    output: __S(161, __c20, 1),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listSegments = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(162, __c20, 2),
    output: __S(165, __c20, 5),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listTemplates = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(166, __c20, 6),
    output: __S(169, __c21, 1),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listTopics = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(170, __c21, 2),
    output: __S(173, __c21, 5),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const listWebhooks = /*@__PURE__*/ makePaginated(
  () => ({
    input: __S(174, __c21, 6),
    output: __S(177, __c22, 1),
    errors: [UnknownResendError],
    protocol: ResendProtocol,
    retry: Retry,
    pagination: {
      mode: "cursor",
      inputToken: "after",
      items: "data",
      hasNextPage: "has_more",
      pageSize: "limit",
    },
  }),
  paginateResend,
);
const publishTemplate = /*@__PURE__*/ make(() => ({
  input: __S(178, __c22, 2),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const sendBroadcast = /*@__PURE__*/ make(() => ({
  input: __S(179, __c22, 3),
  output: __S(38, __c4, 6),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const sendEvent = /*@__PURE__*/ make(() => ({
  input: __S(180, __c22, 4),
  output: __S(181, __c22, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const stopAutomation = /*@__PURE__*/ make(() => ({
  input: __S(182, __c22, 6),
  output: __S(183, __c22, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateAutomation = /*@__PURE__*/ make(() => ({
  input: __S(184, __c23, 0),
  output: __S(11, __c1, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateBroadcast = /*@__PURE__*/ make(() => ({
  input: __S(185, __c23, 1),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateContact = /*@__PURE__*/ make(() => ({
  input: __S(186, __c23, 2),
  output: __S(18, __c2, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateContactProperty = /*@__PURE__*/ make(() => ({
  input: __S(187, __c23, 3),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateContactSegment = /*@__PURE__*/ make(() => ({
  input: __S(188, __c23, 4),
  output: __S(189, __c23, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateContactTopics = /*@__PURE__*/ make(() => ({
  input: __S(190, __c23, 6),
  output: __S(191, __c23, 7),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateDomain = /*@__PURE__*/ make(() => ({
  input: __S(192, __c24, 0),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateEmail = /*@__PURE__*/ make(() => ({
  input: __S(193, __c24, 1),
  output: __S(194, __c24, 2),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateEvent = /*@__PURE__*/ make(() => ({
  input: __S(195, __c24, 3),
  output: __S(11, __c1, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateTemplate = /*@__PURE__*/ make(() => ({
  input: __S(196, __c24, 4),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateTopic = /*@__PURE__*/ make(() => ({
  input: __S(197, __c24, 5),
  output: __S(13, __c1, 5),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const updateWebhook = /*@__PURE__*/ make(() => ({
  input: __S(198, __c24, 6),
  output: __S(11, __c1, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
const verifyDomain = /*@__PURE__*/ make(() => ({
  input: __S(199, __c24, 7),
  output: __S(11, __c1, 3),
  errors: [UnknownResendError],
  protocol: ResendProtocol,
  retry: Retry,
}));
function __c0(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({ email_id: String.pipe(Label()) }).pipe(
          Http({
            method: "POST",
            uri: "/emails/{email_id}/cancel",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CancelEmailRequest" });
    case 1:
      return Array(String);
    case 2:
      return Array(String);
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          to: optional(__S(1, __c0, 1)),
          from: optional(String),
          created_at: optional(String),
          subject: optional(String),
          html: optional(String),
          text: optional(String),
          bcc: optional(__S(1, __c0, 1)),
          cc: optional(__S(1, __c0, 1)),
          reply_to: optional(__S(2, __c0, 2)),
          last_event: optional(String),
        }),
      ).annotate({ identifier: "Email" });
    case 4:
      return suspend(() =>
        Struct({
          name: String,
          permission: optional(String),
          domain_id: optional(String),
        }).pipe(
          Http({
            method: "POST",
            uri: "/api-keys",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateApiKeyRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          token: optional(String),
        }),
      ).annotate({ identifier: "CreateApiKeyResponse" });
    case 6:
      return suspend(() =>
        Struct({
          key: String,
          type: String,
          config: Unknown,
        }),
      ).annotate({ identifier: "AutomationStep" });
    case 7:
      return Array(__S(6, __c0, 6));
  }
}
function __c1(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          from: String,
          to: String,
          type: optional(String),
        }),
      ).annotate({ identifier: "AutomationConnection" });
    case 1:
      return Array(__S(8, __c1, 0));
    case 2:
      return suspend(() =>
        Struct({
          name: String,
          status: optional(String),
          steps: __S(7, __c0, 7),
          connections: __S(9, __c1, 1),
        }).pipe(
          Http({
            method: "POST",
            uri: "/automations",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateAutomationRequest" });
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
        }),
      ).annotate({ identifier: "CreateAutomationResponse" });
    case 4:
      return suspend(() =>
        Struct({
          name: optional(String),
          segment_id: String,
          audience_id: optional(String),
          from: String,
          subject: String,
          reply_to: optional(__S(2, __c0, 2)),
          preview_text: optional(String),
          html: optional(String),
          text: optional(String),
          topic_id: optional(String),
          send: optional(Boolean),
          scheduled_at: optional(String),
        }).pipe(
          Http({
            method: "POST",
            uri: "/broadcasts",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateBroadcastRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          object: optional(String),
        }),
      ).annotate({ identifier: "CreateBroadcastResponseSuccess" });
    case 6:
      return Record(String, Unknown);
    case 7:
      return suspend(() =>
        Struct({
          id: optional(String),
          subscription: optional(String),
        }),
      ).annotate({ identifier: "CreateContactRequestTopicsItem" });
  }
}
function __c2(j) {
  switch (j) {
    case 0:
      return Array(__S(15, __c1, 7));
    case 1:
      return suspend(() =>
        Struct({
          email: String,
          first_name: optional(String),
          last_name: optional(String),
          unsubscribed: optional(Boolean),
          properties: optional(__S(14, __c1, 6)),
          segments: optional(__S(2, __c0, 2)),
          topics: optional(__S(16, __c2, 0)),
          audience_id: optional(String),
        }).pipe(
          Http({
            method: "POST",
            uri: "/contacts",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateContactRequest" });
    case 2:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
        }),
      ).annotate({ identifier: "CreateContactResponseSuccess" });
    case 3:
      return suspend(() =>
        Struct({
          key: String,
          type: String,
          fallback_value: optional(Unknown),
        }).pipe(
          Http({
            method: "POST",
            uri: "/contact-properties",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateContactPropertyRequest" });
    case 4:
      return suspend(() =>
        Struct({
          sending: optional(String),
          receiving: optional(String),
        }),
      ).annotate({ identifier: "DomainCapabilities" });
    case 5:
      return suspend(() =>
        Struct({
          name: String,
          region: optional(String),
          custom_return_path: optional(String),
          open_tracking: optional(Boolean),
          click_tracking: optional(Boolean),
          tls: optional(String),
          capabilities: optional(__S(20, __c2, 4)),
          tracking_subdomain: optional(String),
        }).pipe(
          Http({
            method: "POST",
            uri: "/domains",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateDomainRequest" });
    case 6:
      return suspend(() =>
        Struct({
          record: optional(String),
          name: optional(String),
          type: optional(String),
          ttl: optional(String),
          status: optional(String),
          value: optional(String),
          priority: optional(Number),
        }),
      ).annotate({ identifier: "DomainRecord" });
    case 7:
      return Array(__S(22, __c2, 6));
  }
}
function __c3(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          created_at: optional(String),
          status: optional(String),
          capabilities: optional(__S(20, __c2, 4)),
          records: optional(__S(23, __c2, 7)),
          region: optional(String),
          open_tracking: optional(Boolean),
          click_tracking: optional(Boolean),
          tracking_subdomain: optional(String),
        }),
      ).annotate({ identifier: "CreateDomainResponse" });
    case 1:
      return Record(String, Unknown);
    case 2:
      return suspend(() =>
        Struct({
          id: String,
          variables: optional(__S(25, __c3, 1)),
        }),
      ).annotate({ identifier: "CreateEmailRequestTemplate" });
    case 3:
      return suspend(() =>
        Struct({
          content: optional(String),
          filename: optional(String),
          path: optional(String),
          content_type: optional(String),
          content_id: optional(String),
        }),
      ).annotate({ identifier: "Attachment" });
    case 4:
      return Array(__S(27, __c3, 3));
    case 5:
      return suspend(() =>
        Struct({
          name: optional(String),
          value: optional(String),
        }),
      ).annotate({ identifier: "Tag" });
    case 6:
      return Array(__S(29, __c3, 5));
    case 7:
      return suspend(() =>
        Struct({
          from: String,
          to: Unknown,
          subject: String,
          bcc: optional(Unknown),
          cc: optional(Unknown),
          reply_to: optional(Unknown),
          html: optional(String),
          text: optional(String),
          template: optional(__S(26, __c3, 2)),
          headers: optional(Unknown),
          scheduled_at: optional(String),
          attachments: optional(__S(28, __c3, 4)),
          tags: optional(__S(30, __c3, 6)),
          topic_id: optional(String),
        }).pipe(
          Http({
            method: "POST",
            uri: "/emails",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateEmailRequest" });
  }
}
function __c4(j) {
  switch (j) {
    case 0:
      return suspend(() => Struct({ id: optional(String) })).annotate({
        identifier: "SendEmailResponse",
      });
    case 1:
      return Record(String, Unknown);
    case 2:
      return suspend(() =>
        Struct({
          id: String,
          variables: optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "SendEmailRequestTemplate" });
    case 3:
      return suspend(() =>
        Struct({
          from: String,
          to: Unknown,
          subject: String,
          bcc: optional(Unknown),
          cc: optional(Unknown),
          reply_to: optional(Unknown),
          html: optional(String),
          text: optional(String),
          template: optional(__S(34, __c4, 2)),
          headers: optional(Unknown),
          scheduled_at: optional(String),
          attachments: optional(__S(28, __c3, 4)),
          tags: optional(__S(30, __c3, 6)),
          topic_id: optional(String),
        }),
      ).annotate({ identifier: "SendEmailRequest" });
    case 4:
      return Array(__S(35, __c4, 3));
    case 5:
      return suspend(() =>
        Struct({ body: optional(__S(36, __c4, 4).pipe(HttpBody())) }).pipe(
          Http({
            method: "POST",
            uri: "/emails/batch",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateEmailBatchRequest" });
    case 6:
      return suspend(() => Struct({ id: optional(String) })).annotate({
        identifier: "CreateBatchEmailsResponseDataItem",
      });
    case 7:
      return Array(__S(38, __c4, 6));
  }
}
function __c5(j) {
  switch (j) {
    case 0:
      return suspend(() => Struct({ data: optional(__S(39, __c4, 7)) })).annotate({
        identifier: "CreateBatchEmailsResponse",
      });
    case 1:
      return suspend(() =>
        Struct({
          name: String,
          schema: optional(NullOr(Unknown)),
        }).pipe(
          Http({
            method: "POST",
            uri: "/events",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateEventRequest" });
    case 2:
      return suspend(() =>
        Struct({
          name: String,
          audience_id: optional(String),
          filter: optional(Unknown),
        }).pipe(
          Http({
            method: "POST",
            uri: "/segments",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateSegmentRequest" });
    case 3:
      return suspend(() =>
        Struct({
          key: String,
          type: String,
          fallback_value: optional(Unknown),
        }),
      ).annotate({ identifier: "TemplateVariableInput" });
    case 4:
      return Array(__S(43, __c5, 3));
    case 5:
      return suspend(() =>
        Struct({
          name: String,
          alias: optional(String),
          from: optional(String),
          subject: optional(String),
          reply_to: optional(__S(2, __c0, 2)),
          html: String,
          text: optional(String),
          variables: optional(__S(44, __c5, 4)),
        }).pipe(
          Http({
            method: "POST",
            uri: "/templates",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateTemplateRequest" });
    case 6:
      return suspend(() =>
        Struct({
          name: String,
          default_subscription: String,
          description: optional(String),
          visibility: optional(String),
        }).pipe(
          Http({
            method: "POST",
            uri: "/topics",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateTopicRequest" });
    case 7:
      return suspend(() =>
        Struct({
          endpoint: String,
          events: __S(2, __c0, 2),
        }).pipe(
          Http({
            method: "POST",
            uri: "/webhooks",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "CreateWebhookRequest" });
  }
}
function __c6(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          signing_secret: optional(String.pipe(SensitiveValue({}))),
        }),
      ).annotate({ identifier: "CreateWebhookResponse" });
    case 1:
      return suspend(() =>
        Struct({ api_key_id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/api-keys/{api_key_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteApiKeyRequest" });
    case 2:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          deleted: optional(Boolean),
        }),
      ).annotate({ identifier: "DeleteApiKeyResponse" });
    case 3:
      return suspend(() =>
        Struct({ automation_id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/automations/{automation_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteAutomationRequest" });
    case 4:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/broadcasts/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteBroadcastRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          object: optional(String),
          deleted: optional(Boolean),
        }),
      ).annotate({ identifier: "RemoveBroadcastResponseSuccess" });
    case 6:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/contacts/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteContactRequest" });
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          deleted: optional(Boolean),
        }),
      ).annotate({ identifier: "RemoveContactResponseSuccess" });
  }
}
function __c7(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/contact-properties/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteContactPropertyRequest" });
    case 1:
      return suspend(() =>
        Struct({
          contact_id: String.pipe(Label()),
          segment_id: String.pipe(Label()),
        }).pipe(
          Http({
            method: "DELETE",
            uri: "/contacts/{contact_id}/segments/{segment_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteContactSegmentRequest" });
    case 2:
      return suspend(() =>
        Struct({
          object: optional(String),
          contact_id: optional(String),
          segment_id: optional(String),
          deleted: optional(Boolean),
        }),
      ).annotate({ identifier: "RemoveContactFromSegmentResponseSuccess" });
    case 3:
      return suspend(() =>
        Struct({ domain_id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/domains/{domain_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteDomainRequest" });
    case 4:
      return suspend(() =>
        Struct({ identifier: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/events/{identifier}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteEventRequest" });
    case 5:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/segments/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteSegmentRequest" });
    case 6:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/templates/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteTemplateRequest" });
    case 7:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/topics/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteTopicRequest" });
  }
}
function __c8(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({ webhook_id: String.pipe(Label()) }).pipe(
          Http({
            method: "DELETE",
            uri: "/webhooks/{webhook_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DeleteWebhookRequest" });
    case 1:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "POST",
            uri: "/templates/{id}/duplicate",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "DuplicateTemplateRequest" });
    case 2:
      return suspend(() =>
        Struct({ automation_id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/automations/{automation_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetAutomationRequest" });
    case 3:
      return suspend(() =>
        Struct({
          key: optional(String),
          type: optional(String),
          config: optional(Unknown),
        }),
      ).annotate({ identifier: "AutomationStepResponse" });
    case 4:
      return Array(__S(67, __c8, 3));
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          name: optional(String),
          status: optional(String),
          created_at: optional(String),
          updated_at: optional(String),
          steps: optional(__S(68, __c8, 4)),
          connections: optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "Automation" });
    case 6:
      return suspend(() =>
        Struct({
          automation_id: String.pipe(Label()),
          run_id: String.pipe(Label()),
        }).pipe(
          Http({
            method: "GET",
            uri: "/automations/{automation_id}/runs/{run_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetAutomationRunRequest" });
    case 7:
      return suspend(() =>
        Struct({
          key: optional(String),
          type: optional(String),
          status: optional(String),
          started_at: optional(NullOr(String)),
          completed_at: optional(NullOr(String)),
          output: optional(NullOr(Unknown)),
          error: optional(NullOr(Unknown)),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "AutomationRunStep" });
  }
}
function __c9(j) {
  switch (j) {
    case 0:
      return Array(__S(71, __c8, 7));
    case 1:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          status: optional(String),
          started_at: optional(NullOr(String)),
          completed_at: optional(NullOr(String)),
          created_at: optional(String),
          steps: optional(__S(72, __c9, 0)),
        }),
      ).annotate({ identifier: "AutomationRun" });
    case 2:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/broadcasts/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetBroadcastRequest" });
    case 3:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          audience_id: optional(NullOr(String)),
          segment_id: optional(NullOr(String)),
          from: optional(String),
          subject: optional(String),
          reply_to: optional(__S(2, __c0, 2)),
          preview_text: optional(String),
          status: optional(String),
          created_at: optional(String),
          scheduled_at: optional(String),
          sent_at: optional(String),
          text: optional(NullOr(String)),
          html: optional(NullOr(String)),
          topic_id: optional(NullOr(String)),
        }),
      ).annotate({ identifier: "GetBroadcastResponseSuccess" });
    case 4:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/contacts/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetContactRequest" });
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          email: optional(String),
          first_name: optional(String),
          last_name: optional(String),
          created_at: optional(String),
          unsubscribed: optional(Boolean),
          properties: optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "GetContactResponseSuccess" });
    case 6:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/contact-properties/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetContactPropertyRequest" });
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          key: optional(String),
          type: optional(String),
          fallback_value: optional(Unknown),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "GetContactPropertyResponseSuccess" });
  }
}
function __c10(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({ domain_id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/domains/{domain_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetDomainRequest" });
    case 1:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          name: optional(String),
          status: optional(String),
          created_at: optional(String),
          region: optional(String),
          open_tracking: optional(Boolean),
          click_tracking: optional(Boolean),
          tracking_subdomain: optional(String),
          capabilities: optional(__S(20, __c2, 4)),
          records: optional(__S(23, __c2, 7)),
        }),
      ).annotate({ identifier: "Domain" });
    case 2:
      return suspend(() =>
        Struct({ email_id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/emails/{email_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetEmailRequest" });
    case 3:
      return suspend(() =>
        Struct({
          email_id: String.pipe(Label()),
          attachment_id: String.pipe(Label()),
        }).pipe(
          Http({
            method: "GET",
            uri: "/emails/{email_id}/attachments/{attachment_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetEmailAttachmentRequest" });
    case 4:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          filename: optional(String),
          content_type: optional(String),
          content_id: optional(String),
          content_disposition: optional(String),
          download_url: optional(String),
          expires_at: optional(String),
          size: optional(Number),
        }),
      ).annotate({ identifier: "RetrievedAttachment" });
    case 5:
      return suspend(() =>
        Struct({ email_id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/emails/receiving/{email_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetEmailReceivingRequest" });
    case 6:
      return suspend(() =>
        Struct({
          id: optional(String),
          filename: optional(String),
          content_type: optional(String),
          content_id: optional(String),
          content_disposition: optional(String),
          size: optional(Number),
        }),
      ).annotate({ identifier: "GetReceivedEmailResponseAttachmentsItem" });
    case 7:
      return Array(__S(86, __c10, 6));
  }
}
function __c11(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          to: optional(__S(2, __c0, 2)),
          from: optional(String),
          subject: optional(String),
          message_id: optional(String),
          bcc: optional(NullOr(__S(2, __c0, 2))),
          cc: optional(NullOr(__S(2, __c0, 2))),
          reply_to: optional(NullOr(__S(2, __c0, 2))),
          html: optional(NullOr(String)),
          text: optional(NullOr(String)),
          headers: optional(NullOr(Unknown)),
          created_at: optional(String),
          attachments: optional(__S(87, __c10, 7)),
        }),
      ).annotate({ identifier: "GetReceivedEmailResponse" });
    case 1:
      return suspend(() =>
        Struct({
          email_id: String.pipe(Label()),
          attachment_id: String.pipe(Label()),
        }).pipe(
          Http({
            method: "GET",
            uri: "/emails/receiving/{email_id}/attachments/{attachment_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetEmailReceivingAttachmentRequest" });
    case 2:
      return suspend(() =>
        Struct({ identifier: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/events/{identifier}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetEventRequest" });
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          name: optional(String),
          schema: optional(NullOr(Unknown)),
          created_at: optional(String),
          updated_at: optional(NullOr(String)),
        }),
      ).annotate({ identifier: "Event" });
    case 4:
      return suspend(() =>
        Struct({ log_id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/logs/{log_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetLogRequest" });
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          created_at: optional(String),
          endpoint: optional(String),
          method: optional(String),
          response_status: optional(Number),
          user_agent: optional(NullOr(String)),
          request_body: optional(NullOr(Unknown)),
          response_body: optional(NullOr(Unknown)),
        }),
      ).annotate({ identifier: "Log" });
    case 6:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/segments/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetSegmentRequest" });
    case 7:
      return suspend(() =>
        Struct({
          id: optional(String),
          object: optional(String),
          name: optional(String),
          audience_id: optional(String),
          filter: optional(Unknown),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "GetSegmentResponseSuccess" });
  }
}
function __c12(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/templates/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetTemplateRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: optional(String),
          key: String,
          type: String,
          fallback_value: optional(Unknown),
          created_at: optional(String),
          updated_at: optional(String),
        }),
      ).annotate({ identifier: "TemplateVariable" });
    case 2:
      return Array(__S(97, __c12, 1));
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          current_version_id: optional(String),
          name: optional(String),
          alias: optional(String),
          from: optional(String),
          subject: optional(String),
          reply_to: optional(NullOr(__S(2, __c0, 2))),
          html: optional(String),
          text: optional(String),
          variables: optional(__S(98, __c12, 2)),
          created_at: optional(String),
          updated_at: optional(String),
          status: optional(String),
          published_at: optional(NullOr(String)),
          has_unpublished_versions: optional(Boolean),
        }),
      ).annotate({ identifier: "Template" });
    case 4:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/topics/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetTopicRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          object: optional(String),
          name: optional(String),
          description: optional(String),
          default_subscription: optional(String),
          visibility: optional(String),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "GetTopicResponseSuccess" });
    case 6:
      return suspend(() =>
        Struct({ webhook_id: String.pipe(Label()) }).pipe(
          Http({
            method: "GET",
            uri: "/webhooks/{webhook_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "GetWebhookRequest" });
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          endpoint: optional(String),
          events: optional(NullOr(__S(2, __c0, 2))),
          status: optional(String),
          created_at: optional(String),
          signing_secret: optional(String.pipe(SensitiveValue({}))),
        }),
      ).annotate({ identifier: "GetWebhookResponse" });
  }
}
function __c13(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/api-keys",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListApiKeysRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          created_at: optional(String),
          last_used_at: optional(NullOr(String)),
        }),
      ).annotate({ identifier: "ApiKey" });
    case 2:
      return Array(__S(105, __c13, 1));
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(106, __c13, 2),
        }),
      ).annotate({ identifier: "ListApiKeysResponse" });
    case 4:
      return suspend(() =>
        Struct({
          automation_id: String.pipe(Label()),
          status: optional(String.pipe(Query())),
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/automations/{automation_id}/runs",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListAutomationRunsRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          status: optional(String),
          started_at: optional(NullOr(String)),
          completed_at: optional(NullOr(String)),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "AutomationRunListItem" });
    case 6:
      return Array(__S(109, __c13, 5));
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(110, __c13, 6),
        }),
      ).annotate({ identifier: "ListAutomationRunsResponse" });
  }
}
function __c14(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          status: optional(String.pipe(Query())),
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/automations",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListAutomationsRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          status: optional(String),
          created_at: optional(String),
          updated_at: optional(String),
        }),
      ).annotate({ identifier: "AutomationListItem" });
    case 2:
      return Array(__S(113, __c14, 1));
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(114, __c14, 2),
        }),
      ).annotate({ identifier: "ListAutomationsResponse" });
    case 4:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/broadcasts",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListBroadcastsRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          audience_id: optional(String),
          segment_id: optional(String),
          status: optional(String),
          created_at: optional(String),
          scheduled_at: optional(String),
          sent_at: optional(String),
          topic_id: optional(String),
        }),
      ).annotate({ identifier: "ListBroadcastsResponseSuccessDataItem" });
    case 6:
      return Array(__S(117, __c14, 5));
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(118, __c14, 6),
        }),
      ).annotate({ identifier: "ListBroadcastsResponseSuccess" });
  }
}
function __c15(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/contact-properties",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListContactPropertiesRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: optional(String),
          key: optional(String),
          type: optional(String),
          fallback_value: optional(Unknown),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "ListContactPropertiesResponseSuccessDataItem" });
    case 2:
      return Array(__S(121, __c15, 1));
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(122, __c15, 2),
        }),
      ).annotate({ identifier: "ListContactPropertiesResponseSuccess" });
    case 4:
      return suspend(() =>
        Struct({
          segment_id: optional(String.pipe(Query())),
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/contacts",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListContactsRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          email: optional(String),
          first_name: optional(String),
          last_name: optional(String),
          created_at: optional(String),
          unsubscribed: optional(Boolean),
        }),
      ).annotate({ identifier: "ListContactsResponseSuccessDataItem" });
    case 6:
      return Array(__S(125, __c15, 5));
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          data: optional(__S(126, __c15, 6)),
        }),
      ).annotate({ identifier: "ListContactsResponseSuccess" });
  }
}
function __c16(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          contact_id: String.pipe(Label()),
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/contacts/{contact_id}/segments",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListContactSegmentsRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "ListContactSegmentsResponseSuccessDataItem" });
    case 2:
      return Array(__S(129, __c16, 1));
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(130, __c16, 2),
        }),
      ).annotate({ identifier: "ListContactSegmentsResponseSuccess" });
    case 4:
      return suspend(() =>
        Struct({
          contact_id: String.pipe(Label()),
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/contacts/{contact_id}/topics",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListContactTopicsRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          description: optional(String),
          subscription: optional(String),
        }),
      ).annotate({ identifier: "GetContactTopicsResponseSuccessDataItem" });
    case 6:
      return Array(__S(133, __c16, 5));
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(134, __c16, 6),
        }),
      ).annotate({ identifier: "GetContactTopicsResponseSuccess" });
  }
}
function __c17(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/domains",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListDomainsRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          status: optional(String),
          created_at: optional(String),
          region: optional(String),
          capabilities: optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "ListDomainsItem" });
    case 2:
      return Array(__S(137, __c17, 1));
    case 3:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(138, __c17, 2),
        }),
      ).annotate({ identifier: "ListDomainsResponse" });
    case 4:
      return suspend(() =>
        Struct({
          email_id: String.pipe(Label()),
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/emails/{email_id}/attachments",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListEmailAttachmentsRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: optional(String),
          filename: optional(String),
          content_type: optional(String),
          content_id: optional(String),
          content_disposition: optional(String),
          download_url: optional(String),
          expires_at: optional(String),
          size: optional(Number),
        }),
      ).annotate({ identifier: "ListAttachmentsResponseDataItem" });
    case 6:
      return Array(__S(141, __c17, 5));
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(142, __c17, 6),
        }),
      ).annotate({ identifier: "ListAttachmentsResponse" });
  }
}
function __c18(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/emails/receiving",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListEmailReceivingRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: optional(String),
          filename: optional(String),
          content_type: optional(String),
          content_id: optional(String),
          content_disposition: optional(String),
          size: optional(Number),
        }),
      ).annotate({ identifier: "ListReceivedEmailsResponseDataItemAttachmentsItem" });
    case 2:
      return Array(__S(145, __c18, 1));
    case 3:
      return suspend(() =>
        Struct({
          id: optional(String),
          to: optional(__S(2, __c0, 2)),
          from: optional(String),
          subject: optional(NullOr(String)),
          message_id: optional(String),
          bcc: optional(NullOr(__S(2, __c0, 2))),
          cc: optional(NullOr(__S(2, __c0, 2))),
          reply_to: optional(NullOr(__S(2, __c0, 2))),
          created_at: optional(String),
          attachments: optional(__S(146, __c18, 2)),
        }),
      ).annotate({ identifier: "ListReceivedEmailsResponseDataItem" });
    case 4:
      return Array(__S(147, __c18, 3));
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(148, __c18, 4),
        }),
      ).annotate({ identifier: "ListReceivedEmailsResponse" });
    case 6:
      return suspend(() =>
        Struct({
          email_id: String.pipe(Label()),
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/emails/receiving/{email_id}/attachments",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListEmailReceivingAttachmentsRequest" });
    case 7:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/emails",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListEmailsRequest" });
  }
}
function __c19(j) {
  switch (j) {
    case 0:
      return Array(__S(3, __c0, 3));
    case 1:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(152, __c19, 0),
        }),
      ).annotate({ identifier: "ListEmailsResponse" });
    case 2:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/events",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListEventsRequest" });
    case 3:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          schema: optional(NullOr(Unknown)),
          created_at: optional(String),
          updated_at: optional(NullOr(String)),
        }),
      ).annotate({ identifier: "EventSummary" });
    case 4:
      return Array(__S(155, __c19, 3));
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(156, __c19, 4),
        }),
      ).annotate({ identifier: "ListEventsResponse" });
    case 6:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/logs",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListLogsRequest" });
    case 7:
      return suspend(() =>
        Struct({
          id: optional(String),
          created_at: optional(String),
          endpoint: optional(String),
          method: optional(String),
          response_status: optional(Number),
          user_agent: optional(NullOr(String)),
        }),
      ).annotate({ identifier: "LogSummary" });
  }
}
function __c20(j) {
  switch (j) {
    case 0:
      return Array(__S(159, __c19, 7));
    case 1:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(160, __c20, 0),
        }),
      ).annotate({ identifier: "ListLogsResponse" });
    case 2:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/segments",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListSegmentsRequest" });
    case 3:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          audience_id: optional(String),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "ListSegmentsResponseSuccessDataItem" });
    case 4:
      return Array(__S(163, __c20, 3));
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(164, __c20, 4),
        }),
      ).annotate({ identifier: "ListSegmentsResponseSuccess" });
    case 6:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/templates",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListTemplatesRequest" });
    case 7:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          status: optional(String),
          published_at: optional(NullOr(String)),
          created_at: optional(String),
          updated_at: optional(String),
          alias: optional(String),
        }),
      ).annotate({ identifier: "TemplateListItem" });
  }
}
function __c21(j) {
  switch (j) {
    case 0:
      return Array(__S(167, __c20, 7));
    case 1:
      return suspend(() =>
        Struct({
          object: optional(String),
          data: __S(168, __c21, 0),
          has_more: optional(Boolean),
        }),
      ).annotate({ identifier: "ListTemplatesResponseSuccess" });
    case 2:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/topics",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListTopicsRequest" });
    case 3:
      return suspend(() =>
        Struct({
          id: optional(String),
          name: optional(String),
          description: optional(String),
          default_subscription: optional(String),
          visibility: optional(String),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "ListTopicsResponseSuccessDataItem" });
    case 4:
      return Array(__S(171, __c21, 3));
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(172, __c21, 4),
        }),
      ).annotate({ identifier: "ListTopicsResponseSuccess" });
    case 6:
      return suspend(() =>
        Struct({
          limit: optional(Number.pipe(Query())),
          after: optional(String.pipe(Query())),
          before: optional(String.pipe(Query())),
        }).pipe(
          Http({
            method: "GET",
            uri: "/webhooks",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "ListWebhooksRequest" });
    case 7:
      return suspend(() =>
        Struct({
          id: optional(String),
          endpoint: optional(String),
          events: optional(NullOr(__S(2, __c0, 2))),
          status: optional(String),
          created_at: optional(String),
        }),
      ).annotate({ identifier: "ListWebhooksResponseDataItem" });
  }
}
function __c22(j) {
  switch (j) {
    case 0:
      return Array(__S(175, __c21, 7));
    case 1:
      return suspend(() =>
        Struct({
          object: optional(String),
          has_more: optional(Boolean),
          data: __S(176, __c22, 0),
        }),
      ).annotate({ identifier: "ListWebhooksResponse" });
    case 2:
      return suspend(() =>
        Struct({ id: String.pipe(Label()) }).pipe(
          Http({
            method: "POST",
            uri: "/templates/{id}/publish",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "PublishTemplateRequest" });
    case 3:
      return suspend(() =>
        Struct({
          id: String.pipe(Label()),
          scheduled_at: optional(String),
        }).pipe(
          Http({
            method: "POST",
            uri: "/broadcasts/{id}/send",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "SendBroadcastRequest" });
    case 4:
      return suspend(() =>
        Struct({
          event: String,
          contact_id: optional(String),
          email: optional(String),
          payload: optional(__S(14, __c1, 6)),
        }).pipe(
          Http({
            method: "POST",
            uri: "/events/send",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "SendEventRequest" });
    case 5:
      return suspend(() => Struct({})).annotate({ identifier: "SendEventResponse" });
    case 6:
      return suspend(() =>
        Struct({ automation_id: String.pipe(Label()) }).pipe(
          Http({
            method: "POST",
            uri: "/automations/{automation_id}/stop",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "StopAutomationRequest" });
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          id: optional(String),
          status: optional(String),
        }),
      ).annotate({ identifier: "StopAutomationResponse" });
  }
}
function __c23(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          automation_id: String.pipe(Label()),
          name: optional(String),
          status: optional(String),
          steps: optional(__S(7, __c0, 7)),
          connections: optional(__S(9, __c1, 1)),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/automations/{automation_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateAutomationRequest" });
    case 1:
      return suspend(() =>
        Struct({
          id: String.pipe(Label()),
          name: optional(String),
          audience_id: optional(String),
          segment_id: optional(String),
          from: optional(String),
          subject: optional(String),
          reply_to: optional(__S(2, __c0, 2)),
          preview_text: optional(String),
          html: optional(String),
          text: optional(String),
          topic_id: optional(String),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/broadcasts/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateBroadcastRequest" });
    case 2:
      return suspend(() =>
        Struct({
          id: String.pipe(Label()),
          email: optional(String),
          first_name: optional(String),
          last_name: optional(String),
          unsubscribed: optional(Boolean),
          properties: optional(__S(14, __c1, 6)),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/contacts/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateContactRequest" });
    case 3:
      return suspend(() =>
        Struct({
          id: String.pipe(Label()),
          fallback_value: optional(Unknown),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/contact-properties/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateContactPropertyRequest" });
    case 4:
      return suspend(() =>
        Struct({
          contact_id: String.pipe(Label()),
          segment_id: String.pipe(Label()),
        }).pipe(
          Http({
            method: "POST",
            uri: "/contacts/{contact_id}/segments/{segment_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateContactSegmentRequest" });
    case 5:
      return suspend(() =>
        Struct({
          object: optional(String),
          contact_id: optional(String),
          segment_id: optional(String),
        }),
      ).annotate({ identifier: "AddContactToSegmentResponseSuccess" });
    case 6:
      return suspend(() =>
        Struct({
          contact_id: String.pipe(Label()),
          topics: __S(16, __c2, 0),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/contacts/{contact_id}/topics",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateContactTopicsRequest" });
    case 7:
      return suspend(() =>
        Struct({
          object: optional(String),
          contact_id: optional(String),
          topics: optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "UpdateContactTopicsResponseSuccess" });
  }
}
function __c24(j) {
  switch (j) {
    case 0:
      return suspend(() =>
        Struct({
          domain_id: String.pipe(Label()),
          open_tracking: optional(Boolean),
          click_tracking: optional(Boolean),
          tls: optional(String),
          capabilities: optional(__S(20, __c2, 4)),
          tracking_subdomain: optional(String),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/domains/{domain_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateDomainRequest" });
    case 1:
      return suspend(() =>
        Struct({ email_id: String.pipe(Label()) }).pipe(
          Http({
            method: "PATCH",
            uri: "/emails/{email_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateEmailRequest" });
    case 2:
      return suspend(() => Struct({ scheduled_at: optional(String) })).annotate({
        identifier: "UpdateEmailOptions",
      });
    case 3:
      return suspend(() =>
        Struct({
          identifier: String.pipe(Label()),
          schema: NullOr(Unknown),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/events/{identifier}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateEventRequest" });
    case 4:
      return suspend(() =>
        Struct({
          id: String.pipe(Label()),
          name: optional(String),
          alias: optional(String),
          from: optional(String),
          subject: optional(String),
          reply_to: optional(__S(2, __c0, 2)),
          html: optional(String),
          text: optional(String),
          variables: optional(__S(44, __c5, 4)),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/templates/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateTemplateRequest" });
    case 5:
      return suspend(() =>
        Struct({
          id: String.pipe(Label()),
          name: optional(String),
          description: optional(String),
          visibility: optional(String),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/topics/{id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateTopicRequest" });
    case 6:
      return suspend(() =>
        Struct({
          webhook_id: String.pipe(Label()),
          endpoint: optional(String),
          events: optional(__S(2, __c0, 2)),
          status: optional(String),
        }).pipe(
          Http({
            method: "PATCH",
            uri: "/webhooks/{webhook_id}",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "UpdateWebhookRequest" });
    case 7:
      return suspend(() =>
        Struct({ domain_id: String.pipe(Label()) }).pipe(
          Http({
            method: "POST",
            uri: "/domains/{domain_id}/verify",
            code: 200,
          }),
        ),
      ).annotate({ identifier: "VerifyDomainRequest" });
  }
}
function __S(i, f, j) {
  return (__s[i] ??= at(f, j));
}

//#endregion
export {
  listEmailAttachments as $,
  getBroadcast as A,
  getSegment as B,
  deleteSegment as C,
  updateTemplate as Ct,
  duplicateTemplate as D,
  deleteWebhook as E,
  verifyDomain as Et,
  getEmailAttachment as F,
  listAutomationRuns as G,
  getTopic as H,
  getEmailReceiving as I,
  listContactProperties as J,
  listAutomations as K,
  getEmailReceivingAttachment as L,
  getContactProperty as M,
  getDomain as N,
  getAutomation as O,
  getEmail as P,
  listDomains as Q,
  getEvent as R,
  deleteEvent as S,
  updateEvent as St,
  deleteTopic as T,
  updateWebhook as Tt,
  getWebhook as U,
  getTemplate as V,
  listApiKeys as W,
  listContactTopics as X,
  listContactSegments as Y,
  listContacts as Z,
  deleteBroadcast as _,
  updateContactProperty as _t,
  createContact as a,
  listSegments as at,
  deleteContactSegment as b,
  updateDomain as bt,
  createEmail as c,
  listWebhooks as ct,
  createSegment as d,
  sendBroadcast as dt,
  listEmailReceiving as et,
  createTemplate as f,
  sendEvent as ft,
  deleteAutomation as g,
  updateContact as gt,
  deleteApiKey as h,
  updateBroadcast as ht,
  createBroadcast as i,
  listLogs as it,
  getContact as j,
  getAutomationRun as k,
  createEmailBatch as l,
  publishTemplate as lt,
  createWebhook as m,
  updateAutomation as mt,
  createApiKey as n,
  listEmails as nt,
  createContactProperty as o,
  listTemplates as ot,
  createTopic as p,
  stopAutomation as pt,
  listBroadcasts as q,
  createAutomation as r,
  listEvents as rt,
  createDomain as s,
  listTopics as st,
  cancelEmail as t,
  listEmailReceivingAttachments as tt,
  createEvent as u,
  resend_exports as ut,
  deleteContact as v,
  updateContactSegment as vt,
  deleteTemplate as w,
  updateTopic as wt,
  deleteDomain as x,
  updateEmail as xt,
  deleteContactProperty as y,
  updateContactTopics as yt,
  getLog as z,
};
