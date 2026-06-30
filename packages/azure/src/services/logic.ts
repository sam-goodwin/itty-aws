/**
 * Azure Logic API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface IntegrationAccountAgreementsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  agreementName: string;
  properties: {
    createdTime?: string;
    changedTime?: string;
    metadata?: {};
    agreementType: "NotSpecified" | "AS2" | "X12" | "Edifact";
    hostPartner: string;
    guestPartner: string;
    hostIdentity: { qualifier: string; value: string };
    guestIdentity: { qualifier: string; value: string };
    content: {
      aS2?: {
        receiveAgreement: {
          senderBusinessIdentity: { qualifier: string; value: string };
          receiverBusinessIdentity: { qualifier: string; value: string };
          protocolSettings: {
            messageConnectionSettings: {
              ignoreCertificateNameMismatch: boolean;
              supportHttpStatusCodeContinue: boolean;
              keepHttpConnectionAlive: boolean;
              unfoldHttpHeaders: boolean;
            };
            acknowledgementConnectionSettings: {
              ignoreCertificateNameMismatch: boolean;
              supportHttpStatusCodeContinue: boolean;
              keepHttpConnectionAlive: boolean;
              unfoldHttpHeaders: boolean;
            };
            mdnSettings: {
              needMDN: boolean;
              signMDN: boolean;
              sendMDNAsynchronously: boolean;
              receiptDeliveryUrl?: string;
              dispositionNotificationTo?: string;
              signOutboundMDNIfOptional: boolean;
              mdnText?: string;
              sendInboundMDNToMessageBox: boolean;
              micHashingAlgorithm:
                | "NotSpecified"
                | "None"
                | "MD5"
                | "SHA1"
                | "SHA2256"
                | "SHA2384"
                | "SHA2512";
            };
            securitySettings: {
              overrideGroupSigningCertificate: boolean;
              signingCertificateName?: string;
              encryptionCertificateName?: string;
              enableNRRForInboundEncodedMessages: boolean;
              enableNRRForInboundDecodedMessages: boolean;
              enableNRRForOutboundMDN: boolean;
              enableNRRForOutboundEncodedMessages: boolean;
              enableNRRForOutboundDecodedMessages: boolean;
              enableNRRForInboundMDN: boolean;
              sha2AlgorithmFormat?: string;
            };
            validationSettings: {
              overrideMessageProperties: boolean;
              encryptMessage: boolean;
              signMessage: boolean;
              compressMessage: boolean;
              checkDuplicateMessage: boolean;
              interchangeDuplicatesValidityDays: number;
              checkCertificateRevocationListOnSend: boolean;
              checkCertificateRevocationListOnReceive: boolean;
              encryptionAlgorithm:
                | "NotSpecified"
                | "None"
                | "DES3"
                | "RC2"
                | "AES128"
                | "AES192"
                | "AES256";
              signingAlgorithm?:
                | "NotSpecified"
                | "Default"
                | "SHA1"
                | "SHA2256"
                | "SHA2384"
                | "SHA2512";
            };
            envelopeSettings: {
              messageContentType: string;
              transmitFileNameInMimeHeader: boolean;
              fileNameTemplate: string;
              suspendMessageOnFileNameGenerationError: boolean;
              autogenerateFileName: boolean;
            };
            errorSettings: {
              suspendDuplicateMessage: boolean;
              resendIfMDNNotReceived: boolean;
            };
          };
        };
        sendAgreement: {
          senderBusinessIdentity: { qualifier: string; value: string };
          receiverBusinessIdentity: { qualifier: string; value: string };
          protocolSettings: {
            messageConnectionSettings: {
              ignoreCertificateNameMismatch: boolean;
              supportHttpStatusCodeContinue: boolean;
              keepHttpConnectionAlive: boolean;
              unfoldHttpHeaders: boolean;
            };
            acknowledgementConnectionSettings: {
              ignoreCertificateNameMismatch: boolean;
              supportHttpStatusCodeContinue: boolean;
              keepHttpConnectionAlive: boolean;
              unfoldHttpHeaders: boolean;
            };
            mdnSettings: {
              needMDN: boolean;
              signMDN: boolean;
              sendMDNAsynchronously: boolean;
              receiptDeliveryUrl?: string;
              dispositionNotificationTo?: string;
              signOutboundMDNIfOptional: boolean;
              mdnText?: string;
              sendInboundMDNToMessageBox: boolean;
              micHashingAlgorithm:
                | "NotSpecified"
                | "None"
                | "MD5"
                | "SHA1"
                | "SHA2256"
                | "SHA2384"
                | "SHA2512";
            };
            securitySettings: {
              overrideGroupSigningCertificate: boolean;
              signingCertificateName?: string;
              encryptionCertificateName?: string;
              enableNRRForInboundEncodedMessages: boolean;
              enableNRRForInboundDecodedMessages: boolean;
              enableNRRForOutboundMDN: boolean;
              enableNRRForOutboundEncodedMessages: boolean;
              enableNRRForOutboundDecodedMessages: boolean;
              enableNRRForInboundMDN: boolean;
              sha2AlgorithmFormat?: string;
            };
            validationSettings: {
              overrideMessageProperties: boolean;
              encryptMessage: boolean;
              signMessage: boolean;
              compressMessage: boolean;
              checkDuplicateMessage: boolean;
              interchangeDuplicatesValidityDays: number;
              checkCertificateRevocationListOnSend: boolean;
              checkCertificateRevocationListOnReceive: boolean;
              encryptionAlgorithm:
                | "NotSpecified"
                | "None"
                | "DES3"
                | "RC2"
                | "AES128"
                | "AES192"
                | "AES256";
              signingAlgorithm?:
                | "NotSpecified"
                | "Default"
                | "SHA1"
                | "SHA2256"
                | "SHA2384"
                | "SHA2512";
            };
            envelopeSettings: {
              messageContentType: string;
              transmitFileNameInMimeHeader: boolean;
              fileNameTemplate: string;
              suspendMessageOnFileNameGenerationError: boolean;
              autogenerateFileName: boolean;
            };
            errorSettings: {
              suspendDuplicateMessage: boolean;
              resendIfMDNNotReceived: boolean;
            };
          };
        };
      };
      x12?: {
        receiveAgreement: {
          senderBusinessIdentity: { qualifier: string; value: string };
          receiverBusinessIdentity: { qualifier: string; value: string };
          protocolSettings: {
            validationSettings: {
              validateCharacterSet: boolean;
              checkDuplicateInterchangeControlNumber: boolean;
              interchangeControlNumberValidityDays: number;
              checkDuplicateGroupControlNumber: boolean;
              checkDuplicateTransactionSetControlNumber: boolean;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
            };
            framingSettings: {
              dataElementSeparator: number;
              componentSeparator: number;
              replaceSeparatorsInPayload: boolean;
              replaceCharacter: number;
              segmentTerminator: number;
              characterSet: "NotSpecified" | "Basic" | "Extended" | "UTF8";
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
            };
            envelopeSettings: {
              controlStandardsId: number;
              useControlStandardsIdAsRepetitionCharacter: boolean;
              senderApplicationId: string;
              receiverApplicationId: string;
              controlVersionNumber: string;
              interchangeControlNumberLowerBound: number;
              interchangeControlNumberUpperBound: number;
              rolloverInterchangeControlNumber: boolean;
              enableDefaultGroupHeaders: boolean;
              functionalGroupId?: string;
              groupControlNumberLowerBound: number;
              groupControlNumberUpperBound: number;
              rolloverGroupControlNumber: boolean;
              groupHeaderAgencyCode: string;
              groupHeaderVersion: string;
              transactionSetControlNumberLowerBound: number;
              transactionSetControlNumberUpperBound: number;
              rolloverTransactionSetControlNumber: boolean;
              transactionSetControlNumberPrefix?: string;
              transactionSetControlNumberSuffix?: string;
              overwriteExistingTransactionSetControlNumber: boolean;
              groupHeaderDateFormat: "NotSpecified" | "CCYYMMDD" | "YYMMDD";
              groupHeaderTimeFormat:
                | "NotSpecified"
                | "HHMM"
                | "HHMMSS"
                | "HHMMSSdd"
                | "HHMMSSd";
              usageIndicator:
                | "NotSpecified"
                | "Test"
                | "Information"
                | "Production";
            };
            acknowledgementSettings: {
              needTechnicalAcknowledgement: boolean;
              batchTechnicalAcknowledgements: boolean;
              needFunctionalAcknowledgement: boolean;
              functionalAcknowledgementVersion?: string;
              batchFunctionalAcknowledgements: boolean;
              needImplementationAcknowledgement: boolean;
              implementationAcknowledgementVersion?: string;
              batchImplementationAcknowledgements: boolean;
              needLoopForValidMessages: boolean;
              sendSynchronousAcknowledgement: boolean;
              acknowledgementControlNumberPrefix?: string;
              acknowledgementControlNumberSuffix?: string;
              acknowledgementControlNumberLowerBound: number;
              acknowledgementControlNumberUpperBound: number;
              rolloverAcknowledgementControlNumber: boolean;
            };
            messageFilter: {
              messageFilterType: "NotSpecified" | "Include" | "Exclude";
            };
            securitySettings: {
              authorizationQualifier: string;
              authorizationValue?: string;
              securityQualifier: string;
              passwordValue?: string | Redacted.Redacted<string>;
            };
            processingSettings: {
              maskSecurityInfo: boolean;
              convertImpliedDecimal: boolean;
              preserveInterchange: boolean;
              suspendInterchangeOnError: boolean;
              createEmptyXmlTagsForTrailingSeparators: boolean;
              useDotAsDecimalSeparator: boolean;
            };
            envelopeOverrides?: {
              targetNamespace: string;
              protocolVersion: string;
              messageId: string;
              responsibleAgencyCode: string;
              headerVersion: string;
              senderApplicationId: string;
              receiverApplicationId: string;
              functionalIdentifierCode?: string;
              dateFormat: "NotSpecified" | "CCYYMMDD" | "YYMMDD";
              timeFormat:
                | "NotSpecified"
                | "HHMM"
                | "HHMMSS"
                | "HHMMSSdd"
                | "HHMMSSd";
            }[];
            validationOverrides?: {
              messageId: string;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              validateCharacterSet: boolean;
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
            }[];
            messageFilterList?: { messageId: string }[];
            schemaReferences: {
              messageId: string;
              senderApplicationId?: string;
              schemaVersion: string;
              schemaName: string;
            }[];
            x12DelimiterOverrides?: {
              protocolVersion?: string;
              messageId?: string;
              dataElementSeparator: number;
              componentSeparator: number;
              segmentTerminator: number;
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
              replaceCharacter: number;
              replaceSeparatorsInPayload: boolean;
              targetNamespace?: string;
            }[];
          };
        };
        sendAgreement: {
          senderBusinessIdentity: { qualifier: string; value: string };
          receiverBusinessIdentity: { qualifier: string; value: string };
          protocolSettings: {
            validationSettings: {
              validateCharacterSet: boolean;
              checkDuplicateInterchangeControlNumber: boolean;
              interchangeControlNumberValidityDays: number;
              checkDuplicateGroupControlNumber: boolean;
              checkDuplicateTransactionSetControlNumber: boolean;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
            };
            framingSettings: {
              dataElementSeparator: number;
              componentSeparator: number;
              replaceSeparatorsInPayload: boolean;
              replaceCharacter: number;
              segmentTerminator: number;
              characterSet: "NotSpecified" | "Basic" | "Extended" | "UTF8";
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
            };
            envelopeSettings: {
              controlStandardsId: number;
              useControlStandardsIdAsRepetitionCharacter: boolean;
              senderApplicationId: string;
              receiverApplicationId: string;
              controlVersionNumber: string;
              interchangeControlNumberLowerBound: number;
              interchangeControlNumberUpperBound: number;
              rolloverInterchangeControlNumber: boolean;
              enableDefaultGroupHeaders: boolean;
              functionalGroupId?: string;
              groupControlNumberLowerBound: number;
              groupControlNumberUpperBound: number;
              rolloverGroupControlNumber: boolean;
              groupHeaderAgencyCode: string;
              groupHeaderVersion: string;
              transactionSetControlNumberLowerBound: number;
              transactionSetControlNumberUpperBound: number;
              rolloverTransactionSetControlNumber: boolean;
              transactionSetControlNumberPrefix?: string;
              transactionSetControlNumberSuffix?: string;
              overwriteExistingTransactionSetControlNumber: boolean;
              groupHeaderDateFormat: "NotSpecified" | "CCYYMMDD" | "YYMMDD";
              groupHeaderTimeFormat:
                | "NotSpecified"
                | "HHMM"
                | "HHMMSS"
                | "HHMMSSdd"
                | "HHMMSSd";
              usageIndicator:
                | "NotSpecified"
                | "Test"
                | "Information"
                | "Production";
            };
            acknowledgementSettings: {
              needTechnicalAcknowledgement: boolean;
              batchTechnicalAcknowledgements: boolean;
              needFunctionalAcknowledgement: boolean;
              functionalAcknowledgementVersion?: string;
              batchFunctionalAcknowledgements: boolean;
              needImplementationAcknowledgement: boolean;
              implementationAcknowledgementVersion?: string;
              batchImplementationAcknowledgements: boolean;
              needLoopForValidMessages: boolean;
              sendSynchronousAcknowledgement: boolean;
              acknowledgementControlNumberPrefix?: string;
              acknowledgementControlNumberSuffix?: string;
              acknowledgementControlNumberLowerBound: number;
              acknowledgementControlNumberUpperBound: number;
              rolloverAcknowledgementControlNumber: boolean;
            };
            messageFilter: {
              messageFilterType: "NotSpecified" | "Include" | "Exclude";
            };
            securitySettings: {
              authorizationQualifier: string;
              authorizationValue?: string;
              securityQualifier: string;
              passwordValue?: string | Redacted.Redacted<string>;
            };
            processingSettings: {
              maskSecurityInfo: boolean;
              convertImpliedDecimal: boolean;
              preserveInterchange: boolean;
              suspendInterchangeOnError: boolean;
              createEmptyXmlTagsForTrailingSeparators: boolean;
              useDotAsDecimalSeparator: boolean;
            };
            envelopeOverrides?: {
              targetNamespace: string;
              protocolVersion: string;
              messageId: string;
              responsibleAgencyCode: string;
              headerVersion: string;
              senderApplicationId: string;
              receiverApplicationId: string;
              functionalIdentifierCode?: string;
              dateFormat: "NotSpecified" | "CCYYMMDD" | "YYMMDD";
              timeFormat:
                | "NotSpecified"
                | "HHMM"
                | "HHMMSS"
                | "HHMMSSdd"
                | "HHMMSSd";
            }[];
            validationOverrides?: {
              messageId: string;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              validateCharacterSet: boolean;
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
            }[];
            messageFilterList?: { messageId: string }[];
            schemaReferences: {
              messageId: string;
              senderApplicationId?: string;
              schemaVersion: string;
              schemaName: string;
            }[];
            x12DelimiterOverrides?: {
              protocolVersion?: string;
              messageId?: string;
              dataElementSeparator: number;
              componentSeparator: number;
              segmentTerminator: number;
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
              replaceCharacter: number;
              replaceSeparatorsInPayload: boolean;
              targetNamespace?: string;
            }[];
          };
        };
      };
      edifact?: {
        receiveAgreement: {
          senderBusinessIdentity: { qualifier: string; value: string };
          receiverBusinessIdentity: { qualifier: string; value: string };
          protocolSettings: {
            validationSettings: {
              validateCharacterSet: boolean;
              checkDuplicateInterchangeControlNumber: boolean;
              interchangeControlNumberValidityDays: number;
              checkDuplicateGroupControlNumber: boolean;
              checkDuplicateTransactionSetControlNumber: boolean;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
            };
            framingSettings: {
              serviceCodeListDirectoryVersion?: string;
              characterEncoding?: string;
              protocolVersion: number;
              dataElementSeparator: number;
              componentSeparator: number;
              segmentTerminator: number;
              releaseIndicator: number;
              repetitionSeparator: number;
              characterSet:
                | "NotSpecified"
                | "UNOB"
                | "UNOA"
                | "UNOC"
                | "UNOD"
                | "UNOE"
                | "UNOF"
                | "UNOG"
                | "UNOH"
                | "UNOI"
                | "UNOJ"
                | "UNOK"
                | "UNOX"
                | "UNOY"
                | "KECA";
              decimalPointIndicator: "NotSpecified" | "Comma" | "Decimal";
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
            };
            envelopeSettings: {
              groupAssociationAssignedCode?: string;
              communicationAgreementId?: string;
              applyDelimiterStringAdvice: boolean;
              createGroupingSegments: boolean;
              enableDefaultGroupHeaders: boolean;
              recipientReferencePasswordValue?:
                | string
                | Redacted.Redacted<string>;
              recipientReferencePasswordQualifier?:
                | string
                | Redacted.Redacted<string>;
              applicationReferenceId?: string;
              processingPriorityCode?: string;
              interchangeControlNumberLowerBound: number;
              interchangeControlNumberUpperBound: number;
              rolloverInterchangeControlNumber: boolean;
              interchangeControlNumberPrefix?: string;
              interchangeControlNumberSuffix?: string;
              senderReverseRoutingAddress?: string;
              receiverReverseRoutingAddress?: string;
              functionalGroupId?: string;
              groupControllingAgencyCode?: string;
              groupMessageVersion?: string;
              groupMessageRelease?: string;
              groupControlNumberLowerBound: number;
              groupControlNumberUpperBound: number;
              rolloverGroupControlNumber: boolean;
              groupControlNumberPrefix?: string;
              groupControlNumberSuffix?: string;
              groupApplicationReceiverQualifier?: string;
              groupApplicationReceiverId?: string;
              groupApplicationSenderQualifier?: string;
              groupApplicationSenderId?: string;
              groupApplicationPassword?: string | Redacted.Redacted<string>;
              overwriteExistingTransactionSetControlNumber: boolean;
              transactionSetControlNumberPrefix?: string;
              transactionSetControlNumberSuffix?: string;
              transactionSetControlNumberLowerBound: number;
              transactionSetControlNumberUpperBound: number;
              rolloverTransactionSetControlNumber: boolean;
              isTestInterchange: boolean;
              senderInternalIdentification?: string;
              senderInternalSubIdentification?: string;
              receiverInternalIdentification?: string;
              receiverInternalSubIdentification?: string;
            };
            acknowledgementSettings: {
              needTechnicalAcknowledgement: boolean;
              batchTechnicalAcknowledgements: boolean;
              needFunctionalAcknowledgement: boolean;
              batchFunctionalAcknowledgements: boolean;
              needLoopForValidMessages: boolean;
              sendSynchronousAcknowledgement: boolean;
              acknowledgementControlNumberPrefix?: string;
              acknowledgementControlNumberSuffix?: string;
              acknowledgementControlNumberLowerBound: number;
              acknowledgementControlNumberUpperBound: number;
              rolloverAcknowledgementControlNumber: boolean;
            };
            messageFilter: {
              messageFilterType: "NotSpecified" | "Include" | "Exclude";
            };
            processingSettings: {
              maskSecurityInfo: boolean;
              preserveInterchange: boolean;
              suspendInterchangeOnError: boolean;
              createEmptyXmlTagsForTrailingSeparators: boolean;
              useDotAsDecimalSeparator: boolean;
            };
            envelopeOverrides?: {
              messageId?: string;
              messageVersion?: string;
              messageRelease?: string;
              messageAssociationAssignedCode?: string;
              targetNamespace?: string;
              functionalGroupId?: string;
              senderApplicationQualifier?: string;
              senderApplicationId?: string;
              receiverApplicationQualifier?: string;
              receiverApplicationId?: string;
              controllingAgencyCode?: string;
              groupHeaderMessageVersion?: string;
              groupHeaderMessageRelease?: string;
              associationAssignedCode?: string;
              applicationPassword?: string | Redacted.Redacted<string>;
            }[];
            messageFilterList?: { messageId: string }[];
            schemaReferences: {
              messageId: string;
              messageVersion: string;
              messageRelease: string;
              senderApplicationId?: string;
              senderApplicationQualifier?: string;
              associationAssignedCode?: string;
              schemaName: string;
            }[];
            validationOverrides?: {
              messageId: string;
              enforceCharacterSet: boolean;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
            }[];
            edifactDelimiterOverrides?: {
              messageId?: string;
              messageVersion?: string;
              messageRelease?: string;
              dataElementSeparator: number;
              componentSeparator: number;
              segmentTerminator: number;
              repetitionSeparator: number;
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
              decimalPointIndicator: "NotSpecified" | "Comma" | "Decimal";
              releaseIndicator: number;
              messageAssociationAssignedCode?: string;
              targetNamespace?: string;
            }[];
          };
        };
        sendAgreement: {
          senderBusinessIdentity: { qualifier: string; value: string };
          receiverBusinessIdentity: { qualifier: string; value: string };
          protocolSettings: {
            validationSettings: {
              validateCharacterSet: boolean;
              checkDuplicateInterchangeControlNumber: boolean;
              interchangeControlNumberValidityDays: number;
              checkDuplicateGroupControlNumber: boolean;
              checkDuplicateTransactionSetControlNumber: boolean;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
            };
            framingSettings: {
              serviceCodeListDirectoryVersion?: string;
              characterEncoding?: string;
              protocolVersion: number;
              dataElementSeparator: number;
              componentSeparator: number;
              segmentTerminator: number;
              releaseIndicator: number;
              repetitionSeparator: number;
              characterSet:
                | "NotSpecified"
                | "UNOB"
                | "UNOA"
                | "UNOC"
                | "UNOD"
                | "UNOE"
                | "UNOF"
                | "UNOG"
                | "UNOH"
                | "UNOI"
                | "UNOJ"
                | "UNOK"
                | "UNOX"
                | "UNOY"
                | "KECA";
              decimalPointIndicator: "NotSpecified" | "Comma" | "Decimal";
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
            };
            envelopeSettings: {
              groupAssociationAssignedCode?: string;
              communicationAgreementId?: string;
              applyDelimiterStringAdvice: boolean;
              createGroupingSegments: boolean;
              enableDefaultGroupHeaders: boolean;
              recipientReferencePasswordValue?:
                | string
                | Redacted.Redacted<string>;
              recipientReferencePasswordQualifier?:
                | string
                | Redacted.Redacted<string>;
              applicationReferenceId?: string;
              processingPriorityCode?: string;
              interchangeControlNumberLowerBound: number;
              interchangeControlNumberUpperBound: number;
              rolloverInterchangeControlNumber: boolean;
              interchangeControlNumberPrefix?: string;
              interchangeControlNumberSuffix?: string;
              senderReverseRoutingAddress?: string;
              receiverReverseRoutingAddress?: string;
              functionalGroupId?: string;
              groupControllingAgencyCode?: string;
              groupMessageVersion?: string;
              groupMessageRelease?: string;
              groupControlNumberLowerBound: number;
              groupControlNumberUpperBound: number;
              rolloverGroupControlNumber: boolean;
              groupControlNumberPrefix?: string;
              groupControlNumberSuffix?: string;
              groupApplicationReceiverQualifier?: string;
              groupApplicationReceiverId?: string;
              groupApplicationSenderQualifier?: string;
              groupApplicationSenderId?: string;
              groupApplicationPassword?: string | Redacted.Redacted<string>;
              overwriteExistingTransactionSetControlNumber: boolean;
              transactionSetControlNumberPrefix?: string;
              transactionSetControlNumberSuffix?: string;
              transactionSetControlNumberLowerBound: number;
              transactionSetControlNumberUpperBound: number;
              rolloverTransactionSetControlNumber: boolean;
              isTestInterchange: boolean;
              senderInternalIdentification?: string;
              senderInternalSubIdentification?: string;
              receiverInternalIdentification?: string;
              receiverInternalSubIdentification?: string;
            };
            acknowledgementSettings: {
              needTechnicalAcknowledgement: boolean;
              batchTechnicalAcknowledgements: boolean;
              needFunctionalAcknowledgement: boolean;
              batchFunctionalAcknowledgements: boolean;
              needLoopForValidMessages: boolean;
              sendSynchronousAcknowledgement: boolean;
              acknowledgementControlNumberPrefix?: string;
              acknowledgementControlNumberSuffix?: string;
              acknowledgementControlNumberLowerBound: number;
              acknowledgementControlNumberUpperBound: number;
              rolloverAcknowledgementControlNumber: boolean;
            };
            messageFilter: {
              messageFilterType: "NotSpecified" | "Include" | "Exclude";
            };
            processingSettings: {
              maskSecurityInfo: boolean;
              preserveInterchange: boolean;
              suspendInterchangeOnError: boolean;
              createEmptyXmlTagsForTrailingSeparators: boolean;
              useDotAsDecimalSeparator: boolean;
            };
            envelopeOverrides?: {
              messageId?: string;
              messageVersion?: string;
              messageRelease?: string;
              messageAssociationAssignedCode?: string;
              targetNamespace?: string;
              functionalGroupId?: string;
              senderApplicationQualifier?: string;
              senderApplicationId?: string;
              receiverApplicationQualifier?: string;
              receiverApplicationId?: string;
              controllingAgencyCode?: string;
              groupHeaderMessageVersion?: string;
              groupHeaderMessageRelease?: string;
              associationAssignedCode?: string;
              applicationPassword?: string | Redacted.Redacted<string>;
            }[];
            messageFilterList?: { messageId: string }[];
            schemaReferences: {
              messageId: string;
              messageVersion: string;
              messageRelease: string;
              senderApplicationId?: string;
              senderApplicationQualifier?: string;
              associationAssignedCode?: string;
              schemaName: string;
            }[];
            validationOverrides?: {
              messageId: string;
              enforceCharacterSet: boolean;
              validateEDITypes: boolean;
              validateXSDTypes: boolean;
              allowLeadingAndTrailingSpacesAndZeroes: boolean;
              trailingSeparatorPolicy:
                | "NotSpecified"
                | "NotAllowed"
                | "Optional"
                | "Mandatory";
              trimLeadingAndTrailingSpacesAndZeroes: boolean;
            }[];
            edifactDelimiterOverrides?: {
              messageId?: string;
              messageVersion?: string;
              messageRelease?: string;
              dataElementSeparator: number;
              componentSeparator: number;
              segmentTerminator: number;
              repetitionSeparator: number;
              segmentTerminatorSuffix:
                | "NotSpecified"
                | "None"
                | "CR"
                | "LF"
                | "CRLF";
              decimalPointIndicator: "NotSpecified" | "Comma" | "Decimal";
              releaseIndicator: number;
              messageAssociationAssignedCode?: string;
              targetNamespace?: string;
            }[];
          };
        };
      };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountAgreementsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    agreementName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Struct({})),
      agreementType: Schema.Literals(["NotSpecified", "AS2", "X12", "Edifact"]),
      hostPartner: Schema.String,
      guestPartner: Schema.String,
      hostIdentity: Schema.Struct({
        qualifier: Schema.String,
        value: Schema.String,
      }),
      guestIdentity: Schema.Struct({
        qualifier: Schema.String,
        value: Schema.String,
      }),
      content: Schema.Struct({
        aS2: Schema.optional(
          Schema.Struct({
            receiveAgreement: Schema.Struct({
              senderBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              receiverBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              protocolSettings: Schema.Struct({
                messageConnectionSettings: Schema.Struct({
                  ignoreCertificateNameMismatch: Schema.Boolean,
                  supportHttpStatusCodeContinue: Schema.Boolean,
                  keepHttpConnectionAlive: Schema.Boolean,
                  unfoldHttpHeaders: Schema.Boolean,
                }),
                acknowledgementConnectionSettings: Schema.Struct({
                  ignoreCertificateNameMismatch: Schema.Boolean,
                  supportHttpStatusCodeContinue: Schema.Boolean,
                  keepHttpConnectionAlive: Schema.Boolean,
                  unfoldHttpHeaders: Schema.Boolean,
                }),
                mdnSettings: Schema.Struct({
                  needMDN: Schema.Boolean,
                  signMDN: Schema.Boolean,
                  sendMDNAsynchronously: Schema.Boolean,
                  receiptDeliveryUrl: Schema.optional(Schema.String),
                  dispositionNotificationTo: Schema.optional(Schema.String),
                  signOutboundMDNIfOptional: Schema.Boolean,
                  mdnText: Schema.optional(Schema.String),
                  sendInboundMDNToMessageBox: Schema.Boolean,
                  micHashingAlgorithm: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "MD5",
                    "SHA1",
                    "SHA2256",
                    "SHA2384",
                    "SHA2512",
                  ]),
                }),
                securitySettings: Schema.Struct({
                  overrideGroupSigningCertificate: Schema.Boolean,
                  signingCertificateName: Schema.optional(Schema.String),
                  encryptionCertificateName: Schema.optional(Schema.String),
                  enableNRRForInboundEncodedMessages: Schema.Boolean,
                  enableNRRForInboundDecodedMessages: Schema.Boolean,
                  enableNRRForOutboundMDN: Schema.Boolean,
                  enableNRRForOutboundEncodedMessages: Schema.Boolean,
                  enableNRRForOutboundDecodedMessages: Schema.Boolean,
                  enableNRRForInboundMDN: Schema.Boolean,
                  sha2AlgorithmFormat: Schema.optional(Schema.String),
                }),
                validationSettings: Schema.Struct({
                  overrideMessageProperties: Schema.Boolean,
                  encryptMessage: Schema.Boolean,
                  signMessage: Schema.Boolean,
                  compressMessage: Schema.Boolean,
                  checkDuplicateMessage: Schema.Boolean,
                  interchangeDuplicatesValidityDays: Schema.Number,
                  checkCertificateRevocationListOnSend: Schema.Boolean,
                  checkCertificateRevocationListOnReceive: Schema.Boolean,
                  encryptionAlgorithm: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "DES3",
                    "RC2",
                    "AES128",
                    "AES192",
                    "AES256",
                  ]),
                  signingAlgorithm: Schema.optional(
                    Schema.Literals([
                      "NotSpecified",
                      "Default",
                      "SHA1",
                      "SHA2256",
                      "SHA2384",
                      "SHA2512",
                    ]),
                  ),
                }),
                envelopeSettings: Schema.Struct({
                  messageContentType: Schema.String,
                  transmitFileNameInMimeHeader: Schema.Boolean,
                  fileNameTemplate: Schema.String,
                  suspendMessageOnFileNameGenerationError: Schema.Boolean,
                  autogenerateFileName: Schema.Boolean,
                }),
                errorSettings: Schema.Struct({
                  suspendDuplicateMessage: Schema.Boolean,
                  resendIfMDNNotReceived: Schema.Boolean,
                }),
              }),
            }),
            sendAgreement: Schema.Struct({
              senderBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              receiverBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              protocolSettings: Schema.Struct({
                messageConnectionSettings: Schema.Struct({
                  ignoreCertificateNameMismatch: Schema.Boolean,
                  supportHttpStatusCodeContinue: Schema.Boolean,
                  keepHttpConnectionAlive: Schema.Boolean,
                  unfoldHttpHeaders: Schema.Boolean,
                }),
                acknowledgementConnectionSettings: Schema.Struct({
                  ignoreCertificateNameMismatch: Schema.Boolean,
                  supportHttpStatusCodeContinue: Schema.Boolean,
                  keepHttpConnectionAlive: Schema.Boolean,
                  unfoldHttpHeaders: Schema.Boolean,
                }),
                mdnSettings: Schema.Struct({
                  needMDN: Schema.Boolean,
                  signMDN: Schema.Boolean,
                  sendMDNAsynchronously: Schema.Boolean,
                  receiptDeliveryUrl: Schema.optional(Schema.String),
                  dispositionNotificationTo: Schema.optional(Schema.String),
                  signOutboundMDNIfOptional: Schema.Boolean,
                  mdnText: Schema.optional(Schema.String),
                  sendInboundMDNToMessageBox: Schema.Boolean,
                  micHashingAlgorithm: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "MD5",
                    "SHA1",
                    "SHA2256",
                    "SHA2384",
                    "SHA2512",
                  ]),
                }),
                securitySettings: Schema.Struct({
                  overrideGroupSigningCertificate: Schema.Boolean,
                  signingCertificateName: Schema.optional(Schema.String),
                  encryptionCertificateName: Schema.optional(Schema.String),
                  enableNRRForInboundEncodedMessages: Schema.Boolean,
                  enableNRRForInboundDecodedMessages: Schema.Boolean,
                  enableNRRForOutboundMDN: Schema.Boolean,
                  enableNRRForOutboundEncodedMessages: Schema.Boolean,
                  enableNRRForOutboundDecodedMessages: Schema.Boolean,
                  enableNRRForInboundMDN: Schema.Boolean,
                  sha2AlgorithmFormat: Schema.optional(Schema.String),
                }),
                validationSettings: Schema.Struct({
                  overrideMessageProperties: Schema.Boolean,
                  encryptMessage: Schema.Boolean,
                  signMessage: Schema.Boolean,
                  compressMessage: Schema.Boolean,
                  checkDuplicateMessage: Schema.Boolean,
                  interchangeDuplicatesValidityDays: Schema.Number,
                  checkCertificateRevocationListOnSend: Schema.Boolean,
                  checkCertificateRevocationListOnReceive: Schema.Boolean,
                  encryptionAlgorithm: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "DES3",
                    "RC2",
                    "AES128",
                    "AES192",
                    "AES256",
                  ]),
                  signingAlgorithm: Schema.optional(
                    Schema.Literals([
                      "NotSpecified",
                      "Default",
                      "SHA1",
                      "SHA2256",
                      "SHA2384",
                      "SHA2512",
                    ]),
                  ),
                }),
                envelopeSettings: Schema.Struct({
                  messageContentType: Schema.String,
                  transmitFileNameInMimeHeader: Schema.Boolean,
                  fileNameTemplate: Schema.String,
                  suspendMessageOnFileNameGenerationError: Schema.Boolean,
                  autogenerateFileName: Schema.Boolean,
                }),
                errorSettings: Schema.Struct({
                  suspendDuplicateMessage: Schema.Boolean,
                  resendIfMDNNotReceived: Schema.Boolean,
                }),
              }),
            }),
          }),
        ),
        x12: Schema.optional(
          Schema.Struct({
            receiveAgreement: Schema.Struct({
              senderBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              receiverBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              protocolSettings: Schema.Struct({
                validationSettings: Schema.Struct({
                  validateCharacterSet: Schema.Boolean,
                  checkDuplicateInterchangeControlNumber: Schema.Boolean,
                  interchangeControlNumberValidityDays: Schema.Number,
                  checkDuplicateGroupControlNumber: Schema.Boolean,
                  checkDuplicateTransactionSetControlNumber: Schema.Boolean,
                  validateEDITypes: Schema.Boolean,
                  validateXSDTypes: Schema.Boolean,
                  allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trailingSeparatorPolicy: Schema.Literals([
                    "NotSpecified",
                    "NotAllowed",
                    "Optional",
                    "Mandatory",
                  ]),
                }),
                framingSettings: Schema.Struct({
                  dataElementSeparator: Schema.Number,
                  componentSeparator: Schema.Number,
                  replaceSeparatorsInPayload: Schema.Boolean,
                  replaceCharacter: Schema.Number,
                  segmentTerminator: Schema.Number,
                  characterSet: Schema.Literals([
                    "NotSpecified",
                    "Basic",
                    "Extended",
                    "UTF8",
                  ]),
                  segmentTerminatorSuffix: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "CR",
                    "LF",
                    "CRLF",
                  ]),
                }),
                envelopeSettings: Schema.Struct({
                  controlStandardsId: Schema.Number,
                  useControlStandardsIdAsRepetitionCharacter: Schema.Boolean,
                  senderApplicationId: Schema.String,
                  receiverApplicationId: Schema.String,
                  controlVersionNumber: Schema.String,
                  interchangeControlNumberLowerBound: Schema.Number,
                  interchangeControlNumberUpperBound: Schema.Number,
                  rolloverInterchangeControlNumber: Schema.Boolean,
                  enableDefaultGroupHeaders: Schema.Boolean,
                  functionalGroupId: Schema.optional(Schema.String),
                  groupControlNumberLowerBound: Schema.Number,
                  groupControlNumberUpperBound: Schema.Number,
                  rolloverGroupControlNumber: Schema.Boolean,
                  groupHeaderAgencyCode: Schema.String,
                  groupHeaderVersion: Schema.String,
                  transactionSetControlNumberLowerBound: Schema.Number,
                  transactionSetControlNumberUpperBound: Schema.Number,
                  rolloverTransactionSetControlNumber: Schema.Boolean,
                  transactionSetControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  transactionSetControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  overwriteExistingTransactionSetControlNumber: Schema.Boolean,
                  groupHeaderDateFormat: Schema.Literals([
                    "NotSpecified",
                    "CCYYMMDD",
                    "YYMMDD",
                  ]),
                  groupHeaderTimeFormat: Schema.Literals([
                    "NotSpecified",
                    "HHMM",
                    "HHMMSS",
                    "HHMMSSdd",
                    "HHMMSSd",
                  ]),
                  usageIndicator: Schema.Literals([
                    "NotSpecified",
                    "Test",
                    "Information",
                    "Production",
                  ]),
                }),
                acknowledgementSettings: Schema.Struct({
                  needTechnicalAcknowledgement: Schema.Boolean,
                  batchTechnicalAcknowledgements: Schema.Boolean,
                  needFunctionalAcknowledgement: Schema.Boolean,
                  functionalAcknowledgementVersion: Schema.optional(
                    Schema.String,
                  ),
                  batchFunctionalAcknowledgements: Schema.Boolean,
                  needImplementationAcknowledgement: Schema.Boolean,
                  implementationAcknowledgementVersion: Schema.optional(
                    Schema.String,
                  ),
                  batchImplementationAcknowledgements: Schema.Boolean,
                  needLoopForValidMessages: Schema.Boolean,
                  sendSynchronousAcknowledgement: Schema.Boolean,
                  acknowledgementControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberLowerBound: Schema.Number,
                  acknowledgementControlNumberUpperBound: Schema.Number,
                  rolloverAcknowledgementControlNumber: Schema.Boolean,
                }),
                messageFilter: Schema.Struct({
                  messageFilterType: Schema.Literals([
                    "NotSpecified",
                    "Include",
                    "Exclude",
                  ]),
                }),
                securitySettings: Schema.Struct({
                  authorizationQualifier: Schema.String,
                  authorizationValue: Schema.optional(Schema.String),
                  securityQualifier: Schema.String,
                  passwordValue: Schema.optional(SensitiveString),
                }),
                processingSettings: Schema.Struct({
                  maskSecurityInfo: Schema.Boolean,
                  convertImpliedDecimal: Schema.Boolean,
                  preserveInterchange: Schema.Boolean,
                  suspendInterchangeOnError: Schema.Boolean,
                  createEmptyXmlTagsForTrailingSeparators: Schema.Boolean,
                  useDotAsDecimalSeparator: Schema.Boolean,
                }),
                envelopeOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      targetNamespace: Schema.String,
                      protocolVersion: Schema.String,
                      messageId: Schema.String,
                      responsibleAgencyCode: Schema.String,
                      headerVersion: Schema.String,
                      senderApplicationId: Schema.String,
                      receiverApplicationId: Schema.String,
                      functionalIdentifierCode: Schema.optional(Schema.String),
                      dateFormat: Schema.Literals([
                        "NotSpecified",
                        "CCYYMMDD",
                        "YYMMDD",
                      ]),
                      timeFormat: Schema.Literals([
                        "NotSpecified",
                        "HHMM",
                        "HHMMSS",
                        "HHMMSSdd",
                        "HHMMSSd",
                      ]),
                    }),
                  ),
                ),
                validationOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                      validateEDITypes: Schema.Boolean,
                      validateXSDTypes: Schema.Boolean,
                      allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                      validateCharacterSet: Schema.Boolean,
                      trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                      trailingSeparatorPolicy: Schema.Literals([
                        "NotSpecified",
                        "NotAllowed",
                        "Optional",
                        "Mandatory",
                      ]),
                    }),
                  ),
                ),
                messageFilterList: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                    }),
                  ),
                ),
                schemaReferences: Schema.Array(
                  Schema.Struct({
                    messageId: Schema.String,
                    senderApplicationId: Schema.optional(Schema.String),
                    schemaVersion: Schema.String,
                    schemaName: Schema.String,
                  }),
                ),
                x12DelimiterOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      protocolVersion: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      dataElementSeparator: Schema.Number,
                      componentSeparator: Schema.Number,
                      segmentTerminator: Schema.Number,
                      segmentTerminatorSuffix: Schema.Literals([
                        "NotSpecified",
                        "None",
                        "CR",
                        "LF",
                        "CRLF",
                      ]),
                      replaceCharacter: Schema.Number,
                      replaceSeparatorsInPayload: Schema.Boolean,
                      targetNamespace: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            }),
            sendAgreement: Schema.Struct({
              senderBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              receiverBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              protocolSettings: Schema.Struct({
                validationSettings: Schema.Struct({
                  validateCharacterSet: Schema.Boolean,
                  checkDuplicateInterchangeControlNumber: Schema.Boolean,
                  interchangeControlNumberValidityDays: Schema.Number,
                  checkDuplicateGroupControlNumber: Schema.Boolean,
                  checkDuplicateTransactionSetControlNumber: Schema.Boolean,
                  validateEDITypes: Schema.Boolean,
                  validateXSDTypes: Schema.Boolean,
                  allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trailingSeparatorPolicy: Schema.Literals([
                    "NotSpecified",
                    "NotAllowed",
                    "Optional",
                    "Mandatory",
                  ]),
                }),
                framingSettings: Schema.Struct({
                  dataElementSeparator: Schema.Number,
                  componentSeparator: Schema.Number,
                  replaceSeparatorsInPayload: Schema.Boolean,
                  replaceCharacter: Schema.Number,
                  segmentTerminator: Schema.Number,
                  characterSet: Schema.Literals([
                    "NotSpecified",
                    "Basic",
                    "Extended",
                    "UTF8",
                  ]),
                  segmentTerminatorSuffix: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "CR",
                    "LF",
                    "CRLF",
                  ]),
                }),
                envelopeSettings: Schema.Struct({
                  controlStandardsId: Schema.Number,
                  useControlStandardsIdAsRepetitionCharacter: Schema.Boolean,
                  senderApplicationId: Schema.String,
                  receiverApplicationId: Schema.String,
                  controlVersionNumber: Schema.String,
                  interchangeControlNumberLowerBound: Schema.Number,
                  interchangeControlNumberUpperBound: Schema.Number,
                  rolloverInterchangeControlNumber: Schema.Boolean,
                  enableDefaultGroupHeaders: Schema.Boolean,
                  functionalGroupId: Schema.optional(Schema.String),
                  groupControlNumberLowerBound: Schema.Number,
                  groupControlNumberUpperBound: Schema.Number,
                  rolloverGroupControlNumber: Schema.Boolean,
                  groupHeaderAgencyCode: Schema.String,
                  groupHeaderVersion: Schema.String,
                  transactionSetControlNumberLowerBound: Schema.Number,
                  transactionSetControlNumberUpperBound: Schema.Number,
                  rolloverTransactionSetControlNumber: Schema.Boolean,
                  transactionSetControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  transactionSetControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  overwriteExistingTransactionSetControlNumber: Schema.Boolean,
                  groupHeaderDateFormat: Schema.Literals([
                    "NotSpecified",
                    "CCYYMMDD",
                    "YYMMDD",
                  ]),
                  groupHeaderTimeFormat: Schema.Literals([
                    "NotSpecified",
                    "HHMM",
                    "HHMMSS",
                    "HHMMSSdd",
                    "HHMMSSd",
                  ]),
                  usageIndicator: Schema.Literals([
                    "NotSpecified",
                    "Test",
                    "Information",
                    "Production",
                  ]),
                }),
                acknowledgementSettings: Schema.Struct({
                  needTechnicalAcknowledgement: Schema.Boolean,
                  batchTechnicalAcknowledgements: Schema.Boolean,
                  needFunctionalAcknowledgement: Schema.Boolean,
                  functionalAcknowledgementVersion: Schema.optional(
                    Schema.String,
                  ),
                  batchFunctionalAcknowledgements: Schema.Boolean,
                  needImplementationAcknowledgement: Schema.Boolean,
                  implementationAcknowledgementVersion: Schema.optional(
                    Schema.String,
                  ),
                  batchImplementationAcknowledgements: Schema.Boolean,
                  needLoopForValidMessages: Schema.Boolean,
                  sendSynchronousAcknowledgement: Schema.Boolean,
                  acknowledgementControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberLowerBound: Schema.Number,
                  acknowledgementControlNumberUpperBound: Schema.Number,
                  rolloverAcknowledgementControlNumber: Schema.Boolean,
                }),
                messageFilter: Schema.Struct({
                  messageFilterType: Schema.Literals([
                    "NotSpecified",
                    "Include",
                    "Exclude",
                  ]),
                }),
                securitySettings: Schema.Struct({
                  authorizationQualifier: Schema.String,
                  authorizationValue: Schema.optional(Schema.String),
                  securityQualifier: Schema.String,
                  passwordValue: Schema.optional(SensitiveString),
                }),
                processingSettings: Schema.Struct({
                  maskSecurityInfo: Schema.Boolean,
                  convertImpliedDecimal: Schema.Boolean,
                  preserveInterchange: Schema.Boolean,
                  suspendInterchangeOnError: Schema.Boolean,
                  createEmptyXmlTagsForTrailingSeparators: Schema.Boolean,
                  useDotAsDecimalSeparator: Schema.Boolean,
                }),
                envelopeOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      targetNamespace: Schema.String,
                      protocolVersion: Schema.String,
                      messageId: Schema.String,
                      responsibleAgencyCode: Schema.String,
                      headerVersion: Schema.String,
                      senderApplicationId: Schema.String,
                      receiverApplicationId: Schema.String,
                      functionalIdentifierCode: Schema.optional(Schema.String),
                      dateFormat: Schema.Literals([
                        "NotSpecified",
                        "CCYYMMDD",
                        "YYMMDD",
                      ]),
                      timeFormat: Schema.Literals([
                        "NotSpecified",
                        "HHMM",
                        "HHMMSS",
                        "HHMMSSdd",
                        "HHMMSSd",
                      ]),
                    }),
                  ),
                ),
                validationOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                      validateEDITypes: Schema.Boolean,
                      validateXSDTypes: Schema.Boolean,
                      allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                      validateCharacterSet: Schema.Boolean,
                      trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                      trailingSeparatorPolicy: Schema.Literals([
                        "NotSpecified",
                        "NotAllowed",
                        "Optional",
                        "Mandatory",
                      ]),
                    }),
                  ),
                ),
                messageFilterList: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                    }),
                  ),
                ),
                schemaReferences: Schema.Array(
                  Schema.Struct({
                    messageId: Schema.String,
                    senderApplicationId: Schema.optional(Schema.String),
                    schemaVersion: Schema.String,
                    schemaName: Schema.String,
                  }),
                ),
                x12DelimiterOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      protocolVersion: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      dataElementSeparator: Schema.Number,
                      componentSeparator: Schema.Number,
                      segmentTerminator: Schema.Number,
                      segmentTerminatorSuffix: Schema.Literals([
                        "NotSpecified",
                        "None",
                        "CR",
                        "LF",
                        "CRLF",
                      ]),
                      replaceCharacter: Schema.Number,
                      replaceSeparatorsInPayload: Schema.Boolean,
                      targetNamespace: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            }),
          }),
        ),
        edifact: Schema.optional(
          Schema.Struct({
            receiveAgreement: Schema.Struct({
              senderBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              receiverBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              protocolSettings: Schema.Struct({
                validationSettings: Schema.Struct({
                  validateCharacterSet: Schema.Boolean,
                  checkDuplicateInterchangeControlNumber: Schema.Boolean,
                  interchangeControlNumberValidityDays: Schema.Number,
                  checkDuplicateGroupControlNumber: Schema.Boolean,
                  checkDuplicateTransactionSetControlNumber: Schema.Boolean,
                  validateEDITypes: Schema.Boolean,
                  validateXSDTypes: Schema.Boolean,
                  allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trailingSeparatorPolicy: Schema.Literals([
                    "NotSpecified",
                    "NotAllowed",
                    "Optional",
                    "Mandatory",
                  ]),
                }),
                framingSettings: Schema.Struct({
                  serviceCodeListDirectoryVersion: Schema.optional(
                    Schema.String,
                  ),
                  characterEncoding: Schema.optional(Schema.String),
                  protocolVersion: Schema.Number,
                  dataElementSeparator: Schema.Number,
                  componentSeparator: Schema.Number,
                  segmentTerminator: Schema.Number,
                  releaseIndicator: Schema.Number,
                  repetitionSeparator: Schema.Number,
                  characterSet: Schema.Literals([
                    "NotSpecified",
                    "UNOB",
                    "UNOA",
                    "UNOC",
                    "UNOD",
                    "UNOE",
                    "UNOF",
                    "UNOG",
                    "UNOH",
                    "UNOI",
                    "UNOJ",
                    "UNOK",
                    "UNOX",
                    "UNOY",
                    "KECA",
                  ]),
                  decimalPointIndicator: Schema.Literals([
                    "NotSpecified",
                    "Comma",
                    "Decimal",
                  ]),
                  segmentTerminatorSuffix: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "CR",
                    "LF",
                    "CRLF",
                  ]),
                }),
                envelopeSettings: Schema.Struct({
                  groupAssociationAssignedCode: Schema.optional(Schema.String),
                  communicationAgreementId: Schema.optional(Schema.String),
                  applyDelimiterStringAdvice: Schema.Boolean,
                  createGroupingSegments: Schema.Boolean,
                  enableDefaultGroupHeaders: Schema.Boolean,
                  recipientReferencePasswordValue:
                    Schema.optional(SensitiveString),
                  recipientReferencePasswordQualifier:
                    Schema.optional(SensitiveString),
                  applicationReferenceId: Schema.optional(Schema.String),
                  processingPriorityCode: Schema.optional(Schema.String),
                  interchangeControlNumberLowerBound: Schema.Number,
                  interchangeControlNumberUpperBound: Schema.Number,
                  rolloverInterchangeControlNumber: Schema.Boolean,
                  interchangeControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  interchangeControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  senderReverseRoutingAddress: Schema.optional(Schema.String),
                  receiverReverseRoutingAddress: Schema.optional(Schema.String),
                  functionalGroupId: Schema.optional(Schema.String),
                  groupControllingAgencyCode: Schema.optional(Schema.String),
                  groupMessageVersion: Schema.optional(Schema.String),
                  groupMessageRelease: Schema.optional(Schema.String),
                  groupControlNumberLowerBound: Schema.Number,
                  groupControlNumberUpperBound: Schema.Number,
                  rolloverGroupControlNumber: Schema.Boolean,
                  groupControlNumberPrefix: Schema.optional(Schema.String),
                  groupControlNumberSuffix: Schema.optional(Schema.String),
                  groupApplicationReceiverQualifier: Schema.optional(
                    Schema.String,
                  ),
                  groupApplicationReceiverId: Schema.optional(Schema.String),
                  groupApplicationSenderQualifier: Schema.optional(
                    Schema.String,
                  ),
                  groupApplicationSenderId: Schema.optional(Schema.String),
                  groupApplicationPassword: Schema.optional(SensitiveString),
                  overwriteExistingTransactionSetControlNumber: Schema.Boolean,
                  transactionSetControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  transactionSetControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  transactionSetControlNumberLowerBound: Schema.Number,
                  transactionSetControlNumberUpperBound: Schema.Number,
                  rolloverTransactionSetControlNumber: Schema.Boolean,
                  isTestInterchange: Schema.Boolean,
                  senderInternalIdentification: Schema.optional(Schema.String),
                  senderInternalSubIdentification: Schema.optional(
                    Schema.String,
                  ),
                  receiverInternalIdentification: Schema.optional(
                    Schema.String,
                  ),
                  receiverInternalSubIdentification: Schema.optional(
                    Schema.String,
                  ),
                }),
                acknowledgementSettings: Schema.Struct({
                  needTechnicalAcknowledgement: Schema.Boolean,
                  batchTechnicalAcknowledgements: Schema.Boolean,
                  needFunctionalAcknowledgement: Schema.Boolean,
                  batchFunctionalAcknowledgements: Schema.Boolean,
                  needLoopForValidMessages: Schema.Boolean,
                  sendSynchronousAcknowledgement: Schema.Boolean,
                  acknowledgementControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberLowerBound: Schema.Number,
                  acknowledgementControlNumberUpperBound: Schema.Number,
                  rolloverAcknowledgementControlNumber: Schema.Boolean,
                }),
                messageFilter: Schema.Struct({
                  messageFilterType: Schema.Literals([
                    "NotSpecified",
                    "Include",
                    "Exclude",
                  ]),
                }),
                processingSettings: Schema.Struct({
                  maskSecurityInfo: Schema.Boolean,
                  preserveInterchange: Schema.Boolean,
                  suspendInterchangeOnError: Schema.Boolean,
                  createEmptyXmlTagsForTrailingSeparators: Schema.Boolean,
                  useDotAsDecimalSeparator: Schema.Boolean,
                }),
                envelopeOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.optional(Schema.String),
                      messageVersion: Schema.optional(Schema.String),
                      messageRelease: Schema.optional(Schema.String),
                      messageAssociationAssignedCode: Schema.optional(
                        Schema.String,
                      ),
                      targetNamespace: Schema.optional(Schema.String),
                      functionalGroupId: Schema.optional(Schema.String),
                      senderApplicationQualifier: Schema.optional(
                        Schema.String,
                      ),
                      senderApplicationId: Schema.optional(Schema.String),
                      receiverApplicationQualifier: Schema.optional(
                        Schema.String,
                      ),
                      receiverApplicationId: Schema.optional(Schema.String),
                      controllingAgencyCode: Schema.optional(Schema.String),
                      groupHeaderMessageVersion: Schema.optional(Schema.String),
                      groupHeaderMessageRelease: Schema.optional(Schema.String),
                      associationAssignedCode: Schema.optional(Schema.String),
                      applicationPassword: Schema.optional(SensitiveString),
                    }),
                  ),
                ),
                messageFilterList: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                    }),
                  ),
                ),
                schemaReferences: Schema.Array(
                  Schema.Struct({
                    messageId: Schema.String,
                    messageVersion: Schema.String,
                    messageRelease: Schema.String,
                    senderApplicationId: Schema.optional(Schema.String),
                    senderApplicationQualifier: Schema.optional(Schema.String),
                    associationAssignedCode: Schema.optional(Schema.String),
                    schemaName: Schema.String,
                  }),
                ),
                validationOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                      enforceCharacterSet: Schema.Boolean,
                      validateEDITypes: Schema.Boolean,
                      validateXSDTypes: Schema.Boolean,
                      allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                      trailingSeparatorPolicy: Schema.Literals([
                        "NotSpecified",
                        "NotAllowed",
                        "Optional",
                        "Mandatory",
                      ]),
                      trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                    }),
                  ),
                ),
                edifactDelimiterOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.optional(Schema.String),
                      messageVersion: Schema.optional(Schema.String),
                      messageRelease: Schema.optional(Schema.String),
                      dataElementSeparator: Schema.Number,
                      componentSeparator: Schema.Number,
                      segmentTerminator: Schema.Number,
                      repetitionSeparator: Schema.Number,
                      segmentTerminatorSuffix: Schema.Literals([
                        "NotSpecified",
                        "None",
                        "CR",
                        "LF",
                        "CRLF",
                      ]),
                      decimalPointIndicator: Schema.Literals([
                        "NotSpecified",
                        "Comma",
                        "Decimal",
                      ]),
                      releaseIndicator: Schema.Number,
                      messageAssociationAssignedCode: Schema.optional(
                        Schema.String,
                      ),
                      targetNamespace: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            }),
            sendAgreement: Schema.Struct({
              senderBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              receiverBusinessIdentity: Schema.Struct({
                qualifier: Schema.String,
                value: Schema.String,
              }),
              protocolSettings: Schema.Struct({
                validationSettings: Schema.Struct({
                  validateCharacterSet: Schema.Boolean,
                  checkDuplicateInterchangeControlNumber: Schema.Boolean,
                  interchangeControlNumberValidityDays: Schema.Number,
                  checkDuplicateGroupControlNumber: Schema.Boolean,
                  checkDuplicateTransactionSetControlNumber: Schema.Boolean,
                  validateEDITypes: Schema.Boolean,
                  validateXSDTypes: Schema.Boolean,
                  allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                  trailingSeparatorPolicy: Schema.Literals([
                    "NotSpecified",
                    "NotAllowed",
                    "Optional",
                    "Mandatory",
                  ]),
                }),
                framingSettings: Schema.Struct({
                  serviceCodeListDirectoryVersion: Schema.optional(
                    Schema.String,
                  ),
                  characterEncoding: Schema.optional(Schema.String),
                  protocolVersion: Schema.Number,
                  dataElementSeparator: Schema.Number,
                  componentSeparator: Schema.Number,
                  segmentTerminator: Schema.Number,
                  releaseIndicator: Schema.Number,
                  repetitionSeparator: Schema.Number,
                  characterSet: Schema.Literals([
                    "NotSpecified",
                    "UNOB",
                    "UNOA",
                    "UNOC",
                    "UNOD",
                    "UNOE",
                    "UNOF",
                    "UNOG",
                    "UNOH",
                    "UNOI",
                    "UNOJ",
                    "UNOK",
                    "UNOX",
                    "UNOY",
                    "KECA",
                  ]),
                  decimalPointIndicator: Schema.Literals([
                    "NotSpecified",
                    "Comma",
                    "Decimal",
                  ]),
                  segmentTerminatorSuffix: Schema.Literals([
                    "NotSpecified",
                    "None",
                    "CR",
                    "LF",
                    "CRLF",
                  ]),
                }),
                envelopeSettings: Schema.Struct({
                  groupAssociationAssignedCode: Schema.optional(Schema.String),
                  communicationAgreementId: Schema.optional(Schema.String),
                  applyDelimiterStringAdvice: Schema.Boolean,
                  createGroupingSegments: Schema.Boolean,
                  enableDefaultGroupHeaders: Schema.Boolean,
                  recipientReferencePasswordValue:
                    Schema.optional(SensitiveString),
                  recipientReferencePasswordQualifier:
                    Schema.optional(SensitiveString),
                  applicationReferenceId: Schema.optional(Schema.String),
                  processingPriorityCode: Schema.optional(Schema.String),
                  interchangeControlNumberLowerBound: Schema.Number,
                  interchangeControlNumberUpperBound: Schema.Number,
                  rolloverInterchangeControlNumber: Schema.Boolean,
                  interchangeControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  interchangeControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  senderReverseRoutingAddress: Schema.optional(Schema.String),
                  receiverReverseRoutingAddress: Schema.optional(Schema.String),
                  functionalGroupId: Schema.optional(Schema.String),
                  groupControllingAgencyCode: Schema.optional(Schema.String),
                  groupMessageVersion: Schema.optional(Schema.String),
                  groupMessageRelease: Schema.optional(Schema.String),
                  groupControlNumberLowerBound: Schema.Number,
                  groupControlNumberUpperBound: Schema.Number,
                  rolloverGroupControlNumber: Schema.Boolean,
                  groupControlNumberPrefix: Schema.optional(Schema.String),
                  groupControlNumberSuffix: Schema.optional(Schema.String),
                  groupApplicationReceiverQualifier: Schema.optional(
                    Schema.String,
                  ),
                  groupApplicationReceiverId: Schema.optional(Schema.String),
                  groupApplicationSenderQualifier: Schema.optional(
                    Schema.String,
                  ),
                  groupApplicationSenderId: Schema.optional(Schema.String),
                  groupApplicationPassword: Schema.optional(SensitiveString),
                  overwriteExistingTransactionSetControlNumber: Schema.Boolean,
                  transactionSetControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  transactionSetControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  transactionSetControlNumberLowerBound: Schema.Number,
                  transactionSetControlNumberUpperBound: Schema.Number,
                  rolloverTransactionSetControlNumber: Schema.Boolean,
                  isTestInterchange: Schema.Boolean,
                  senderInternalIdentification: Schema.optional(Schema.String),
                  senderInternalSubIdentification: Schema.optional(
                    Schema.String,
                  ),
                  receiverInternalIdentification: Schema.optional(
                    Schema.String,
                  ),
                  receiverInternalSubIdentification: Schema.optional(
                    Schema.String,
                  ),
                }),
                acknowledgementSettings: Schema.Struct({
                  needTechnicalAcknowledgement: Schema.Boolean,
                  batchTechnicalAcknowledgements: Schema.Boolean,
                  needFunctionalAcknowledgement: Schema.Boolean,
                  batchFunctionalAcknowledgements: Schema.Boolean,
                  needLoopForValidMessages: Schema.Boolean,
                  sendSynchronousAcknowledgement: Schema.Boolean,
                  acknowledgementControlNumberPrefix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberSuffix: Schema.optional(
                    Schema.String,
                  ),
                  acknowledgementControlNumberLowerBound: Schema.Number,
                  acknowledgementControlNumberUpperBound: Schema.Number,
                  rolloverAcknowledgementControlNumber: Schema.Boolean,
                }),
                messageFilter: Schema.Struct({
                  messageFilterType: Schema.Literals([
                    "NotSpecified",
                    "Include",
                    "Exclude",
                  ]),
                }),
                processingSettings: Schema.Struct({
                  maskSecurityInfo: Schema.Boolean,
                  preserveInterchange: Schema.Boolean,
                  suspendInterchangeOnError: Schema.Boolean,
                  createEmptyXmlTagsForTrailingSeparators: Schema.Boolean,
                  useDotAsDecimalSeparator: Schema.Boolean,
                }),
                envelopeOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.optional(Schema.String),
                      messageVersion: Schema.optional(Schema.String),
                      messageRelease: Schema.optional(Schema.String),
                      messageAssociationAssignedCode: Schema.optional(
                        Schema.String,
                      ),
                      targetNamespace: Schema.optional(Schema.String),
                      functionalGroupId: Schema.optional(Schema.String),
                      senderApplicationQualifier: Schema.optional(
                        Schema.String,
                      ),
                      senderApplicationId: Schema.optional(Schema.String),
                      receiverApplicationQualifier: Schema.optional(
                        Schema.String,
                      ),
                      receiverApplicationId: Schema.optional(Schema.String),
                      controllingAgencyCode: Schema.optional(Schema.String),
                      groupHeaderMessageVersion: Schema.optional(Schema.String),
                      groupHeaderMessageRelease: Schema.optional(Schema.String),
                      associationAssignedCode: Schema.optional(Schema.String),
                      applicationPassword: Schema.optional(SensitiveString),
                    }),
                  ),
                ),
                messageFilterList: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                    }),
                  ),
                ),
                schemaReferences: Schema.Array(
                  Schema.Struct({
                    messageId: Schema.String,
                    messageVersion: Schema.String,
                    messageRelease: Schema.String,
                    senderApplicationId: Schema.optional(Schema.String),
                    senderApplicationQualifier: Schema.optional(Schema.String),
                    associationAssignedCode: Schema.optional(Schema.String),
                    schemaName: Schema.String,
                  }),
                ),
                validationOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.String,
                      enforceCharacterSet: Schema.Boolean,
                      validateEDITypes: Schema.Boolean,
                      validateXSDTypes: Schema.Boolean,
                      allowLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                      trailingSeparatorPolicy: Schema.Literals([
                        "NotSpecified",
                        "NotAllowed",
                        "Optional",
                        "Mandatory",
                      ]),
                      trimLeadingAndTrailingSpacesAndZeroes: Schema.Boolean,
                    }),
                  ),
                ),
                edifactDelimiterOverrides: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      messageId: Schema.optional(Schema.String),
                      messageVersion: Schema.optional(Schema.String),
                      messageRelease: Schema.optional(Schema.String),
                      dataElementSeparator: Schema.Number,
                      componentSeparator: Schema.Number,
                      segmentTerminator: Schema.Number,
                      repetitionSeparator: Schema.Number,
                      segmentTerminatorSuffix: Schema.Literals([
                        "NotSpecified",
                        "None",
                        "CR",
                        "LF",
                        "CRLF",
                      ]),
                      decimalPointIndicator: Schema.Literals([
                        "NotSpecified",
                        "Comma",
                        "Decimal",
                      ]),
                      releaseIndicator: Schema.Number,
                      messageAssociationAssignedCode: Schema.optional(
                        Schema.String,
                      ),
                      targetNamespace: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            }),
          }),
        ),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAgreementsCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountAgreementsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountAgreementsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountAgreementsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration account agreement.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param agreementName - The integration account agreement name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAgreementsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAgreementsCreateOrUpdateInput,
    outputSchema: IntegrationAccountAgreementsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountAgreementsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  agreementName: string;
}
export const IntegrationAccountAgreementsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    agreementName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAgreementsDeleteInput>;

// Output Schema
export type IntegrationAccountAgreementsDeleteOutput = void;
export const IntegrationAccountAgreementsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountAgreementsDeleteOutput>;

// The operation
/**
 * Deletes an integration account agreement.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param agreementName - The integration account agreement name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAgreementsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAgreementsDeleteInput,
    outputSchema: IntegrationAccountAgreementsDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountAgreementsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  agreementName: string;
}
export const IntegrationAccountAgreementsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    agreementName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAgreementsGetInput>;

// Output Schema
export interface IntegrationAccountAgreementsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountAgreementsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountAgreementsGetOutput>;

// The operation
/**
 * Gets an integration account agreement.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param agreementName - The integration account agreement name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAgreementsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAgreementsGetInput,
    outputSchema: IntegrationAccountAgreementsGetOutput,
  }));
// Input Schema
export interface IntegrationAccountAgreementsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  $top?: number;
  $filter?: string;
}
export const IntegrationAccountAgreementsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAgreementsListInput>;

// Output Schema
export interface IntegrationAccountAgreementsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountAgreementsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountAgreementsListOutput>;

// The operation
/**
 * Gets a list of integration account agreements.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: AgreementType.
 */
export const IntegrationAccountAgreementsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAgreementsListInput,
    outputSchema: IntegrationAccountAgreementsListOutput,
  }));
// Input Schema
export interface IntegrationAccountAgreementsListContentCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  agreementName: string;
  notAfter?: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const IntegrationAccountAgreementsListContentCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    agreementName: Schema.String.pipe(T.PathParam()),
    notAfter: Schema.optional(Schema.String),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}/listContentCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAgreementsListContentCallbackUrlInput>;

// Output Schema
export interface IntegrationAccountAgreementsListContentCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const IntegrationAccountAgreementsListContentCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IntegrationAccountAgreementsListContentCallbackUrlOutput>;

// The operation
/**
 * Get the content callback url.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param agreementName - The integration account agreement name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAgreementsListContentCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAgreementsListContentCallbackUrlInput,
    outputSchema: IntegrationAccountAgreementsListContentCallbackUrlOutput,
  }));
// Input Schema
export interface IntegrationAccountAssembliesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  assemblyArtifactName: string;
  properties: {
    createdTime?: string;
    changedTime?: string;
    metadata?: unknown;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountAssembliesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    assemblyArtifactName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Unknown),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAssembliesCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountAssembliesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountAssembliesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountAssembliesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an assembly for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param assemblyArtifactName - The assembly artifact name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAssembliesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAssembliesCreateOrUpdateInput,
    outputSchema: IntegrationAccountAssembliesCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountAssembliesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  assemblyArtifactName: string;
}
export const IntegrationAccountAssembliesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    assemblyArtifactName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAssembliesDeleteInput>;

// Output Schema
export type IntegrationAccountAssembliesDeleteOutput = void;
export const IntegrationAccountAssembliesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountAssembliesDeleteOutput>;

// The operation
/**
 * Delete an assembly for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param assemblyArtifactName - The assembly artifact name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAssembliesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAssembliesDeleteInput,
    outputSchema: IntegrationAccountAssembliesDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountAssembliesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  assemblyArtifactName: string;
}
export const IntegrationAccountAssembliesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    assemblyArtifactName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAssembliesGetInput>;

// Output Schema
export interface IntegrationAccountAssembliesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountAssembliesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountAssembliesGetOutput>;

// The operation
/**
 * Get an assembly for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param assemblyArtifactName - The assembly artifact name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAssembliesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAssembliesGetInput,
    outputSchema: IntegrationAccountAssembliesGetOutput,
  }));
// Input Schema
export interface IntegrationAccountAssembliesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
}
export const IntegrationAccountAssembliesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAssembliesListInput>;

// Output Schema
export interface IntegrationAccountAssembliesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
}
export const IntegrationAccountAssembliesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IntegrationAccountAssembliesListOutput>;

// The operation
/**
 * List the assemblies for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAssembliesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAssembliesListInput,
    outputSchema: IntegrationAccountAssembliesListOutput,
  }));
// Input Schema
export interface IntegrationAccountAssembliesListContentCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  assemblyArtifactName: string;
}
export const IntegrationAccountAssembliesListContentCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    assemblyArtifactName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}/listContentCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountAssembliesListContentCallbackUrlInput>;

// Output Schema
export interface IntegrationAccountAssembliesListContentCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const IntegrationAccountAssembliesListContentCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IntegrationAccountAssembliesListContentCallbackUrlOutput>;

// The operation
/**
 * Get the content callback url for an integration account assembly.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param assemblyArtifactName - The assembly artifact name.
 * @param api-version - The API version.
 */
export const IntegrationAccountAssembliesListContentCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountAssembliesListContentCallbackUrlInput,
    outputSchema: IntegrationAccountAssembliesListContentCallbackUrlOutput,
  }));
// Input Schema
export interface IntegrationAccountBatchConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  batchConfigurationName: string;
  properties: {
    createdTime?: string;
    changedTime?: string;
    metadata?: unknown;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountBatchConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    batchConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Unknown),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountBatchConfigurationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountBatchConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a batch configuration for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param batchConfigurationName - The batch configuration name.
 * @param api-version - The API version.
 */
export const IntegrationAccountBatchConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountBatchConfigurationsCreateOrUpdateInput,
    outputSchema: IntegrationAccountBatchConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountBatchConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  batchConfigurationName: string;
}
export const IntegrationAccountBatchConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    batchConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsDeleteInput>;

// Output Schema
export type IntegrationAccountBatchConfigurationsDeleteOutput = void;
export const IntegrationAccountBatchConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsDeleteOutput>;

// The operation
/**
 * Delete a batch configuration for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param batchConfigurationName - The batch configuration name.
 * @param api-version - The API version.
 */
export const IntegrationAccountBatchConfigurationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountBatchConfigurationsDeleteInput,
    outputSchema: IntegrationAccountBatchConfigurationsDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountBatchConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  batchConfigurationName: string;
}
export const IntegrationAccountBatchConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    batchConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsGetInput>;

// Output Schema
export interface IntegrationAccountBatchConfigurationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountBatchConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsGetOutput>;

// The operation
/**
 * Get a batch configuration for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param batchConfigurationName - The batch configuration name.
 * @param api-version - The API version.
 */
export const IntegrationAccountBatchConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountBatchConfigurationsGetInput,
    outputSchema: IntegrationAccountBatchConfigurationsGetOutput,
  }));
// Input Schema
export interface IntegrationAccountBatchConfigurationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
}
export const IntegrationAccountBatchConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsListInput>;

// Output Schema
export interface IntegrationAccountBatchConfigurationsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
}
export const IntegrationAccountBatchConfigurationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IntegrationAccountBatchConfigurationsListOutput>;

// The operation
/**
 * List the batch configurations for an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountBatchConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountBatchConfigurationsListInput,
    outputSchema: IntegrationAccountBatchConfigurationsListOutput,
  }));
// Input Schema
export interface IntegrationAccountCertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  certificateName: string;
  properties: {
    createdTime?: string;
    changedTime?: string;
    metadata?: {};
    key?: {
      keyVault: { id?: string; name?: string; type?: string };
      keyName: string;
      keyVersion?: string;
    };
    publicCertificate?: string;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountCertificatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Struct({})),
      key: Schema.optional(
        Schema.Struct({
          keyVault: Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
          keyName: Schema.String,
          keyVersion: Schema.optional(Schema.String),
        }),
      ),
      publicCertificate: Schema.optional(Schema.String),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountCertificatesCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountCertificatesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountCertificatesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountCertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration account certificate.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param certificateName - The integration account certificate name.
 * @param api-version - The API version.
 */
export const IntegrationAccountCertificatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountCertificatesCreateOrUpdateInput,
    outputSchema: IntegrationAccountCertificatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountCertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  certificateName: string;
}
export const IntegrationAccountCertificatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountCertificatesDeleteInput>;

// Output Schema
export type IntegrationAccountCertificatesDeleteOutput = void;
export const IntegrationAccountCertificatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountCertificatesDeleteOutput>;

// The operation
/**
 * Deletes an integration account certificate.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param certificateName - The integration account certificate name.
 * @param api-version - The API version.
 */
export const IntegrationAccountCertificatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountCertificatesDeleteInput,
    outputSchema: IntegrationAccountCertificatesDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountCertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  certificateName: string;
}
export const IntegrationAccountCertificatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountCertificatesGetInput>;

// Output Schema
export interface IntegrationAccountCertificatesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountCertificatesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountCertificatesGetOutput>;

// The operation
/**
 * Gets an integration account certificate.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param certificateName - The integration account certificate name.
 * @param api-version - The API version.
 */
export const IntegrationAccountCertificatesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountCertificatesGetInput,
    outputSchema: IntegrationAccountCertificatesGetOutput,
  }));
// Input Schema
export interface IntegrationAccountCertificatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  $top?: number;
}
export const IntegrationAccountCertificatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountCertificatesListInput>;

// Output Schema
export interface IntegrationAccountCertificatesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountCertificatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountCertificatesListOutput>;

// The operation
/**
 * Gets a list of integration account certificates.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 */
export const IntegrationAccountCertificatesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountCertificatesListInput,
    outputSchema: IntegrationAccountCertificatesListOutput,
  }));
// Input Schema
export interface IntegrationAccountMapsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  mapName: string;
  properties: {
    mapType: "NotSpecified" | "Xslt" | "Xslt20" | "Xslt30" | "Liquid";
    parametersSchema?: { ref?: string };
    createdTime?: string;
    changedTime?: string;
    content?: string;
    contentType?: string;
    contentLink?: {
      uri?: string;
      contentVersion?: string;
      contentSize?: number;
      contentHash?: { algorithm?: string; value?: string };
      metadata?: {};
    };
    metadata?: {};
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountMapsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    mapName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      mapType: Schema.Literals([
        "NotSpecified",
        "Xslt",
        "Xslt20",
        "Xslt30",
        "Liquid",
      ]),
      parametersSchema: Schema.optional(
        Schema.Struct({
          ref: Schema.optional(Schema.String),
        }),
      ),
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      content: Schema.optional(Schema.String),
      contentType: Schema.optional(Schema.String),
      contentLink: Schema.optional(
        Schema.Struct({
          uri: Schema.optional(Schema.String),
          contentVersion: Schema.optional(Schema.String),
          contentSize: Schema.optional(Schema.Number),
          contentHash: Schema.optional(
            Schema.Struct({
              algorithm: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
          metadata: Schema.optional(Schema.Struct({})),
        }),
      ),
      metadata: Schema.optional(Schema.Struct({})),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountMapsCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountMapsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountMapsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountMapsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration account map. If the map is larger than 4 MB, you need to store the map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink' property value.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param mapName - The integration account map name.
 * @param api-version - The API version.
 */
export const IntegrationAccountMapsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountMapsCreateOrUpdateInput,
    outputSchema: IntegrationAccountMapsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountMapsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  mapName: string;
}
export const IntegrationAccountMapsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    mapName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountMapsDeleteInput>;

// Output Schema
export type IntegrationAccountMapsDeleteOutput = void;
export const IntegrationAccountMapsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountMapsDeleteOutput>;

// The operation
/**
 * Deletes an integration account map.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param mapName - The integration account map name.
 * @param api-version - The API version.
 */
export const IntegrationAccountMapsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountMapsDeleteInput,
    outputSchema: IntegrationAccountMapsDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountMapsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  mapName: string;
}
export const IntegrationAccountMapsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    mapName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountMapsGetInput>;

// Output Schema
export interface IntegrationAccountMapsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountMapsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountMapsGetOutput>;

// The operation
/**
 * Gets an integration account map.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param mapName - The integration account map name.
 * @param api-version - The API version.
 */
export const IntegrationAccountMapsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationAccountMapsGetInput,
    outputSchema: IntegrationAccountMapsGetOutput,
  }),
);
// Input Schema
export interface IntegrationAccountMapsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  $top?: number;
  $filter?: string;
}
export const IntegrationAccountMapsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountMapsListInput>;

// Output Schema
export interface IntegrationAccountMapsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountMapsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountMapsListOutput>;

// The operation
/**
 * Gets a list of integration account maps.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: MapType.
 */
export const IntegrationAccountMapsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationAccountMapsListInput,
    outputSchema: IntegrationAccountMapsListOutput,
  }),
);
// Input Schema
export interface IntegrationAccountMapsListContentCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  mapName: string;
  notAfter?: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const IntegrationAccountMapsListContentCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    mapName: Schema.String.pipe(T.PathParam()),
    notAfter: Schema.optional(Schema.String),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}/listContentCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountMapsListContentCallbackUrlInput>;

// Output Schema
export interface IntegrationAccountMapsListContentCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const IntegrationAccountMapsListContentCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IntegrationAccountMapsListContentCallbackUrlOutput>;

// The operation
/**
 * Get the content callback url.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param mapName - The integration account map name.
 * @param api-version - The API version.
 */
export const IntegrationAccountMapsListContentCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountMapsListContentCallbackUrlInput,
    outputSchema: IntegrationAccountMapsListContentCallbackUrlOutput,
  }));
// Input Schema
export interface IntegrationAccountPartnersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  partnerName: string;
  properties: {
    partnerType: "NotSpecified" | "B2B";
    createdTime?: string;
    changedTime?: string;
    metadata?: {};
    content: {
      b2b?: { businessIdentities?: { qualifier: string; value: string }[] };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountPartnersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    partnerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      partnerType: Schema.Literals(["NotSpecified", "B2B"]),
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Struct({})),
      content: Schema.Struct({
        b2b: Schema.optional(
          Schema.Struct({
            businessIdentities: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  qualifier: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
          }),
        ),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountPartnersCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountPartnersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountPartnersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountPartnersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration account partner.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param partnerName - The integration account partner name.
 * @param api-version - The API version.
 */
export const IntegrationAccountPartnersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountPartnersCreateOrUpdateInput,
    outputSchema: IntegrationAccountPartnersCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountPartnersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  partnerName: string;
}
export const IntegrationAccountPartnersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    partnerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountPartnersDeleteInput>;

// Output Schema
export type IntegrationAccountPartnersDeleteOutput = void;
export const IntegrationAccountPartnersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountPartnersDeleteOutput>;

// The operation
/**
 * Deletes an integration account partner.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param partnerName - The integration account partner name.
 * @param api-version - The API version.
 */
export const IntegrationAccountPartnersDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountPartnersDeleteInput,
    outputSchema: IntegrationAccountPartnersDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountPartnersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  partnerName: string;
}
export const IntegrationAccountPartnersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    partnerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountPartnersGetInput>;

// Output Schema
export interface IntegrationAccountPartnersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountPartnersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountPartnersGetOutput>;

// The operation
/**
 * Gets an integration account partner.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param partnerName - The integration account partner name.
 * @param api-version - The API version.
 */
export const IntegrationAccountPartnersGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountPartnersGetInput,
    outputSchema: IntegrationAccountPartnersGetOutput,
  }));
// Input Schema
export interface IntegrationAccountPartnersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  $top?: number;
  $filter?: string;
}
export const IntegrationAccountPartnersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountPartnersListInput>;

// Output Schema
export interface IntegrationAccountPartnersListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountPartnersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountPartnersListOutput>;

// The operation
/**
 * Gets a list of integration account partners.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: PartnerType.
 */
export const IntegrationAccountPartnersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountPartnersListInput,
    outputSchema: IntegrationAccountPartnersListOutput,
  }));
// Input Schema
export interface IntegrationAccountPartnersListContentCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  partnerName: string;
  notAfter?: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const IntegrationAccountPartnersListContentCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    partnerName: Schema.String.pipe(T.PathParam()),
    notAfter: Schema.optional(Schema.String),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}/listContentCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountPartnersListContentCallbackUrlInput>;

// Output Schema
export interface IntegrationAccountPartnersListContentCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const IntegrationAccountPartnersListContentCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IntegrationAccountPartnersListContentCallbackUrlOutput>;

// The operation
/**
 * Get the content callback url.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param partnerName - The integration account partner name.
 * @param api-version - The API version.
 */
export const IntegrationAccountPartnersListContentCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountPartnersListContentCallbackUrlInput,
    outputSchema: IntegrationAccountPartnersListContentCallbackUrlOutput,
  }));
// Input Schema
export interface IntegrationAccountSchemasCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  schemaName: string;
  properties: {
    schemaType: "NotSpecified" | "Xml";
    targetNamespace?: string;
    documentName?: string;
    fileName?: string;
    createdTime?: string;
    changedTime?: string;
    metadata?: {};
    content?: string;
    contentType?: string;
    contentLink?: {
      uri?: string;
      contentVersion?: string;
      contentSize?: number;
      contentHash?: { algorithm?: string; value?: string };
      metadata?: {};
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountSchemasCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      schemaType: Schema.Literals(["NotSpecified", "Xml"]),
      targetNamespace: Schema.optional(Schema.String),
      documentName: Schema.optional(Schema.String),
      fileName: Schema.optional(Schema.String),
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Struct({})),
      content: Schema.optional(Schema.String),
      contentType: Schema.optional(Schema.String),
      contentLink: Schema.optional(
        Schema.Struct({
          uri: Schema.optional(Schema.String),
          contentVersion: Schema.optional(Schema.String),
          contentSize: Schema.optional(Schema.Number),
          contentHash: Schema.optional(
            Schema.Struct({
              algorithm: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
          metadata: Schema.optional(Schema.Struct({})),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSchemasCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountSchemasCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountSchemasCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountSchemasCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration account schema.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param schemaName - The integration account schema name.
 * @param api-version - The API version.
 */
export const IntegrationAccountSchemasCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSchemasCreateOrUpdateInput,
    outputSchema: IntegrationAccountSchemasCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountSchemasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  schemaName: string;
}
export const IntegrationAccountSchemasDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSchemasDeleteInput>;

// Output Schema
export type IntegrationAccountSchemasDeleteOutput = void;
export const IntegrationAccountSchemasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountSchemasDeleteOutput>;

// The operation
/**
 * Deletes an integration account schema.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param schemaName - The integration account schema name.
 * @param api-version - The API version.
 */
export const IntegrationAccountSchemasDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSchemasDeleteInput,
    outputSchema: IntegrationAccountSchemasDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountSchemasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  schemaName: string;
}
export const IntegrationAccountSchemasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSchemasGetInput>;

// Output Schema
export interface IntegrationAccountSchemasGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountSchemasGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountSchemasGetOutput>;

// The operation
/**
 * Gets an integration account schema.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param schemaName - The integration account schema name.
 * @param api-version - The API version.
 */
export const IntegrationAccountSchemasGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSchemasGetInput,
    outputSchema: IntegrationAccountSchemasGetOutput,
  }));
// Input Schema
export interface IntegrationAccountSchemasListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  $top?: number;
  $filter?: string;
}
export const IntegrationAccountSchemasListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSchemasListInput>;

// Output Schema
export interface IntegrationAccountSchemasListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountSchemasListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountSchemasListOutput>;

// The operation
/**
 * Gets a list of integration account schemas.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: SchemaType.
 */
export const IntegrationAccountSchemasList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSchemasListInput,
    outputSchema: IntegrationAccountSchemasListOutput,
  }));
// Input Schema
export interface IntegrationAccountSchemasListContentCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  schemaName: string;
  notAfter?: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const IntegrationAccountSchemasListContentCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    notAfter: Schema.optional(Schema.String),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}/listContentCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSchemasListContentCallbackUrlInput>;

// Output Schema
export interface IntegrationAccountSchemasListContentCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const IntegrationAccountSchemasListContentCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IntegrationAccountSchemasListContentCallbackUrlOutput>;

// The operation
/**
 * Get the content callback url.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param schemaName - The integration account schema name.
 * @param api-version - The API version.
 */
export const IntegrationAccountSchemasListContentCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSchemasListContentCallbackUrlInput,
    outputSchema: IntegrationAccountSchemasListContentCallbackUrlOutput,
  }));
// Input Schema
export interface IntegrationAccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  properties?: {
    integrationServiceEnvironment?: {
      id?: string;
      name?: string;
      type?: string;
    };
    state?:
      | "NotSpecified"
      | "Completed"
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Suspended";
  };
  sku?: { name: "NotSpecified" | "Free" | "Basic" | "Standard" };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        integrationServiceEnvironment: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        state: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Completed",
            "Enabled",
            "Disabled",
            "Deleted",
            "Suspended",
          ]),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["NotSpecified", "Free", "Basic", "Standard"]),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountsCreateOrUpdateInput,
    outputSchema: IntegrationAccountsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
}
export const IntegrationAccountsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsDeleteInput>;

// Output Schema
export type IntegrationAccountsDeleteOutput = void;
export const IntegrationAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountsDeleteOutput>;

// The operation
/**
 * Deletes an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationAccountsDeleteInput,
    outputSchema: IntegrationAccountsDeleteOutput,
  }),
);
// Input Schema
export interface IntegrationAccountSessionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  sessionName: string;
  properties: { createdTime?: string; changedTime?: string; content?: {} };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountSessionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    sessionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdTime: Schema.optional(Schema.String),
      changedTime: Schema.optional(Schema.String),
      content: Schema.optional(Schema.Struct({})),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSessionsCreateOrUpdateInput>;

// Output Schema
export interface IntegrationAccountSessionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountSessionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountSessionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration account session.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param sessionName - The integration account session name.
 * @param api-version - The API version.
 */
export const IntegrationAccountSessionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSessionsCreateOrUpdateInput,
    outputSchema: IntegrationAccountSessionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationAccountSessionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  sessionName: string;
}
export const IntegrationAccountSessionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    sessionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSessionsDeleteInput>;

// Output Schema
export type IntegrationAccountSessionsDeleteOutput = void;
export const IntegrationAccountSessionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountSessionsDeleteOutput>;

// The operation
/**
 * Deletes an integration account session.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param sessionName - The integration account session name.
 * @param api-version - The API version.
 */
export const IntegrationAccountSessionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSessionsDeleteInput,
    outputSchema: IntegrationAccountSessionsDeleteOutput,
  }));
// Input Schema
export interface IntegrationAccountSessionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  sessionName: string;
}
export const IntegrationAccountSessionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    sessionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSessionsGetInput>;

// Output Schema
export interface IntegrationAccountSessionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountSessionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountSessionsGetOutput>;

// The operation
/**
 * Gets an integration account session.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param sessionName - The integration account session name.
 * @param api-version - The API version.
 */
export const IntegrationAccountSessionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSessionsGetInput,
    outputSchema: IntegrationAccountSessionsGetOutput,
  }));
// Input Schema
export interface IntegrationAccountSessionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  $top?: number;
  $filter?: string;
}
export const IntegrationAccountSessionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountSessionsListInput>;

// Output Schema
export interface IntegrationAccountSessionsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountSessionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountSessionsListOutput>;

// The operation
/**
 * Gets a list of integration account sessions.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: ChangedTime.
 */
export const IntegrationAccountSessionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountSessionsListInput,
    outputSchema: IntegrationAccountSessionsListOutput,
  }));
// Input Schema
export interface IntegrationAccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
}
export const IntegrationAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsGetInput>;

// Output Schema
export interface IntegrationAccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountsGetOutput>;

// The operation
/**
 * Gets an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationAccountsGetInput,
    outputSchema: IntegrationAccountsGetOutput,
  }),
);
// Input Schema
export interface IntegrationAccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const IntegrationAccountsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsListByResourceGroupInput>;

// Output Schema
export interface IntegrationAccountsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountsListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of integration accounts by resource group.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 */
export const IntegrationAccountsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountsListByResourceGroupInput,
    outputSchema: IntegrationAccountsListByResourceGroupOutput,
  }));
// Input Schema
export interface IntegrationAccountsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const IntegrationAccountsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Logic/integrationAccounts",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsListBySubscriptionInput>;

// Output Schema
export interface IntegrationAccountsListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationAccountsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountsListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of integration accounts by subscription.
 *
 * @param subscriptionId - The subscription id.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 */
export const IntegrationAccountsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountsListBySubscriptionInput,
    outputSchema: IntegrationAccountsListBySubscriptionOutput,
  }));
// Input Schema
export interface IntegrationAccountsListCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  notAfter?: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const IntegrationAccountsListCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    notAfter: Schema.optional(Schema.String),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsListCallbackUrlInput>;

// Output Schema
export interface IntegrationAccountsListCallbackUrlOutput {
  value?: string;
}
export const IntegrationAccountsListCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountsListCallbackUrlOutput>;

// The operation
/**
 * Gets the integration account callback URL.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsListCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountsListCallbackUrlInput,
    outputSchema: IntegrationAccountsListCallbackUrlOutput,
  }));
// Input Schema
export interface IntegrationAccountsListKeyVaultKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  keyVault: { id?: string; name?: string; type?: string };
  skipToken?: string;
}
export const IntegrationAccountsListKeyVaultKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    keyVault: Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
    skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listKeyVaultKeys",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsListKeyVaultKeysInput>;

// Output Schema
export interface IntegrationAccountsListKeyVaultKeysOutput {
  value?: {
    kid?: string;
    attributes?: { enabled?: boolean; created?: number; updated?: number };
  }[];
  skipToken?: string;
}
export const IntegrationAccountsListKeyVaultKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kid: Schema.optional(Schema.String),
          attributes: Schema.optional(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
              created: Schema.optional(Schema.Number),
              updated: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
    skipToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationAccountsListKeyVaultKeysOutput>;

// The operation
/**
 * Gets the integration account's Key Vault keys.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsListKeyVaultKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountsListKeyVaultKeysInput,
    outputSchema: IntegrationAccountsListKeyVaultKeysOutput,
  }));
// Input Schema
export interface IntegrationAccountsLogTrackingEventsInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  sourceType: string;
  trackEventsOptions?: "None" | "DisableSourceInfoEnrich";
  events: {
    eventLevel:
      | "LogAlways"
      | "Critical"
      | "Error"
      | "Warning"
      | "Informational"
      | "Verbose";
    eventTime: string;
    recordType:
      | "NotSpecified"
      | "Custom"
      | "AS2Message"
      | "AS2MDN"
      | "X12Interchange"
      | "X12FunctionalGroup"
      | "X12TransactionSet"
      | "X12InterchangeAcknowledgment"
      | "X12FunctionalGroupAcknowledgment"
      | "X12TransactionSetAcknowledgment"
      | "EdifactInterchange"
      | "EdifactFunctionalGroup"
      | "EdifactTransactionSet"
      | "EdifactInterchangeAcknowledgment"
      | "EdifactFunctionalGroupAcknowledgment"
      | "EdifactTransactionSetAcknowledgment";
    record?: {};
    error?: { message?: string; code?: string };
  }[];
}
export const IntegrationAccountsLogTrackingEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    sourceType: Schema.String,
    trackEventsOptions: Schema.optional(
      Schema.Literals(["None", "DisableSourceInfoEnrich"]),
    ),
    events: Schema.Array(
      Schema.Struct({
        eventLevel: Schema.Literals([
          "LogAlways",
          "Critical",
          "Error",
          "Warning",
          "Informational",
          "Verbose",
        ]),
        eventTime: Schema.String,
        recordType: Schema.Literals([
          "NotSpecified",
          "Custom",
          "AS2Message",
          "AS2MDN",
          "X12Interchange",
          "X12FunctionalGroup",
          "X12TransactionSet",
          "X12InterchangeAcknowledgment",
          "X12FunctionalGroupAcknowledgment",
          "X12TransactionSetAcknowledgment",
          "EdifactInterchange",
          "EdifactFunctionalGroup",
          "EdifactTransactionSet",
          "EdifactInterchangeAcknowledgment",
          "EdifactFunctionalGroupAcknowledgment",
          "EdifactTransactionSetAcknowledgment",
        ]),
        record: Schema.optional(Schema.Struct({})),
        error: Schema.optional(
          Schema.Struct({
            message: Schema.optional(Schema.String),
            code: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/logTrackingEvents",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsLogTrackingEventsInput>;

// Output Schema
export type IntegrationAccountsLogTrackingEventsOutput = void;
export const IntegrationAccountsLogTrackingEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationAccountsLogTrackingEventsOutput>;

// The operation
/**
 * Logs the integration account's tracking events.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsLogTrackingEvents =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountsLogTrackingEventsInput,
    outputSchema: IntegrationAccountsLogTrackingEventsOutput,
  }));
// Input Schema
export interface IntegrationAccountsRegenerateAccessKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const IntegrationAccountsRegenerateAccessKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/regenerateAccessKey",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsRegenerateAccessKeyInput>;

// Output Schema
export interface IntegrationAccountsRegenerateAccessKeyOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountsRegenerateAccessKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountsRegenerateAccessKeyOutput>;

// The operation
/**
 * Regenerates the integration account access key.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsRegenerateAccessKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationAccountsRegenerateAccessKeyInput,
    outputSchema: IntegrationAccountsRegenerateAccessKeyOutput,
  }));
// Input Schema
export interface IntegrationAccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  integrationAccountName: string;
  properties?: {
    integrationServiceEnvironment?: {
      id?: string;
      name?: string;
      type?: string;
    };
    state?:
      | "NotSpecified"
      | "Completed"
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Suspended";
  };
  sku?: { name: "NotSpecified" | "Free" | "Basic" | "Standard" };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    integrationAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        integrationServiceEnvironment: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        state: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Completed",
            "Enabled",
            "Disabled",
            "Deleted",
            "Suspended",
          ]),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["NotSpecified", "Free", "Basic", "Standard"]),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationAccountsUpdateInput>;

// Output Schema
export interface IntegrationAccountsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationAccountsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationAccountsUpdateOutput>;

// The operation
/**
 * Updates an integration account.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param integrationAccountName - The integration account name.
 * @param api-version - The API version.
 */
export const IntegrationAccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationAccountsUpdateInput,
    outputSchema: IntegrationAccountsUpdateOutput,
  }),
);
// Input Schema
export interface IntegrationServiceEnvironmentManagedApiOperationsListInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
  apiName: string;
}
export const IntegrationServiceEnvironmentManagedApiOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
    apiName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}/apiOperations",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApiOperationsListInput>;

// Output Schema
export interface IntegrationServiceEnvironmentManagedApiOperationsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationServiceEnvironmentManagedApiOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApiOperationsListOutput>;

// The operation
/**
 * Gets the managed Api operations.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param apiName - The api name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentManagedApiOperationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentManagedApiOperationsListInput,
    outputSchema: IntegrationServiceEnvironmentManagedApiOperationsListOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentManagedApisDeleteInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
  apiName: string;
}
export const IntegrationServiceEnvironmentManagedApisDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
    apiName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisDeleteInput>;

// Output Schema
export type IntegrationServiceEnvironmentManagedApisDeleteOutput = void;
export const IntegrationServiceEnvironmentManagedApisDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisDeleteOutput>;

// The operation
/**
 * Deletes the integration service environment managed Api.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param apiName - The api name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentManagedApisDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentManagedApisDeleteInput,
    outputSchema: IntegrationServiceEnvironmentManagedApisDeleteOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentManagedApisGetInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
  apiName: string;
}
export const IntegrationServiceEnvironmentManagedApisGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
    apiName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisGetInput>;

// Output Schema
export interface IntegrationServiceEnvironmentManagedApisGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentManagedApisGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisGetOutput>;

// The operation
/**
 * Gets the integration service environment managed Api.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group name.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param apiName - The api name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentManagedApisGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentManagedApisGetInput,
    outputSchema: IntegrationServiceEnvironmentManagedApisGetOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentManagedApisListInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
}
export const IntegrationServiceEnvironmentManagedApisListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisListInput>;

// Output Schema
export interface IntegrationServiceEnvironmentManagedApisListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationServiceEnvironmentManagedApisListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisListOutput>;

// The operation
/**
 * Gets the integration service environment managed Apis.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentManagedApisList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentManagedApisListInput,
    outputSchema: IntegrationServiceEnvironmentManagedApisListOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentManagedApisPutInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
  apiName: string;
  properties?: {
    name?: string;
    connectionParameters?: Record<string, {}>;
    metadata?: {
      source?: string;
      brandColor?: string;
      hideKey?: string;
      tags?: Record<string, string>;
      ApiType?: "NotSpecified" | "Rest" | "Soap";
      wsdlService?: {
        qualifiedName?: string;
        EndpointQualifiedNames?: string[];
      };
      wsdlImportMethod?: "NotSpecified" | "SoapToRest" | "SoapPassThrough";
      connectionType?: string;
      provisioningState?:
        | "NotSpecified"
        | "Accepted"
        | "Running"
        | "Ready"
        | "Creating"
        | "Created"
        | "Deleting"
        | "Deleted"
        | "Canceled"
        | "Failed"
        | "Succeeded"
        | "Moving"
        | "Updating"
        | "Registering"
        | "Registered"
        | "Unregistering"
        | "Unregistered"
        | "Completed"
        | "Renewing"
        | "Pending"
        | "Waiting"
        | "InProgress";
      deploymentParameters?: {
        packageContentLink?: {
          type?: string;
          isRequired?: boolean;
          displayName?: string;
          description?: string;
          visibility?: "NotSpecified" | "Default" | "Internal";
        };
        redisCacheConnectionString?: {
          type?: string;
          isRequired?: boolean;
          displayName?: string;
          description?: string;
          visibility?: "NotSpecified" | "Default" | "Internal";
        };
      };
    };
    runtimeUrls?: string[];
    generalInformation?: {
      iconUrl?: string;
      displayName?: string;
      description?: string;
      termsOfUseUrl?: string;
      releaseTag?: string;
      tier?: "NotSpecified" | "Enterprise" | "Standard" | "Premium";
    };
    capabilities?: string[];
    backendService?: { serviceUrl?: string };
    policies?: { content?: string; contentLink?: string };
    apiDefinitionUrl?: string;
    apiDefinitions?: {
      originalSwaggerUrl?: string;
      modifiedSwaggerUrl?: string;
    };
    integrationServiceEnvironment?: {
      id?: string;
      name?: string;
      type?: string;
    };
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Moving"
      | "Updating"
      | "Registering"
      | "Registered"
      | "Unregistering"
      | "Unregistered"
      | "Completed"
      | "Renewing"
      | "Pending"
      | "Waiting"
      | "InProgress";
    category?: "NotSpecified" | "Enterprise" | "Standard" | "Premium";
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentManagedApisPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
    apiName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        connectionParameters: Schema.optional(
          Schema.Record(Schema.String, Schema.Struct({})),
        ),
        metadata: Schema.optional(
          Schema.Struct({
            source: Schema.optional(Schema.String),
            brandColor: Schema.optional(Schema.String),
            hideKey: Schema.optional(Schema.String),
            tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
            ApiType: Schema.optional(
              Schema.Literals(["NotSpecified", "Rest", "Soap"]),
            ),
            wsdlService: Schema.optional(
              Schema.Struct({
                qualifiedName: Schema.optional(Schema.String),
                EndpointQualifiedNames: Schema.optional(
                  Schema.Array(Schema.String),
                ),
              }),
            ),
            wsdlImportMethod: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "SoapToRest",
                "SoapPassThrough",
              ]),
            ),
            connectionType: Schema.optional(Schema.String),
            provisioningState: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "Accepted",
                "Running",
                "Ready",
                "Creating",
                "Created",
                "Deleting",
                "Deleted",
                "Canceled",
                "Failed",
                "Succeeded",
                "Moving",
                "Updating",
                "Registering",
                "Registered",
                "Unregistering",
                "Unregistered",
                "Completed",
                "Renewing",
                "Pending",
                "Waiting",
                "InProgress",
              ]),
            ),
            deploymentParameters: Schema.optional(
              Schema.Struct({
                packageContentLink: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    isRequired: Schema.optional(Schema.Boolean),
                    displayName: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    visibility: Schema.optional(
                      Schema.Literals(["NotSpecified", "Default", "Internal"]),
                    ),
                  }),
                ),
                redisCacheConnectionString: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    isRequired: Schema.optional(Schema.Boolean),
                    displayName: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    visibility: Schema.optional(
                      Schema.Literals(["NotSpecified", "Default", "Internal"]),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        runtimeUrls: Schema.optional(Schema.Array(Schema.String)),
        generalInformation: Schema.optional(
          Schema.Struct({
            iconUrl: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            termsOfUseUrl: Schema.optional(Schema.String),
            releaseTag: Schema.optional(Schema.String),
            tier: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "Enterprise",
                "Standard",
                "Premium",
              ]),
            ),
          }),
        ),
        capabilities: Schema.optional(Schema.Array(Schema.String)),
        backendService: Schema.optional(
          Schema.Struct({
            serviceUrl: Schema.optional(Schema.String),
          }),
        ),
        policies: Schema.optional(
          Schema.Struct({
            content: Schema.optional(Schema.String),
            contentLink: Schema.optional(Schema.String),
          }),
        ),
        apiDefinitionUrl: Schema.optional(Schema.String),
        apiDefinitions: Schema.optional(
          Schema.Struct({
            originalSwaggerUrl: Schema.optional(Schema.String),
            modifiedSwaggerUrl: Schema.optional(Schema.String),
          }),
        ),
        integrationServiceEnvironment: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Moving",
            "Updating",
            "Registering",
            "Registered",
            "Unregistering",
            "Unregistered",
            "Completed",
            "Renewing",
            "Pending",
            "Waiting",
            "InProgress",
          ]),
        ),
        category: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Enterprise",
            "Standard",
            "Premium",
          ]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisPutInput>;

// Output Schema
export interface IntegrationServiceEnvironmentManagedApisPutOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentManagedApisPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentManagedApisPutOutput>;

// The operation
/**
 * Puts the integration service environment managed Api.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group name.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param apiName - The api name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentManagedApisPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentManagedApisPutInput,
    outputSchema: IntegrationServiceEnvironmentManagedApisPutOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentNetworkHealthGetInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
}
export const IntegrationServiceEnvironmentNetworkHealthGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/health/network",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentNetworkHealthGetInput>;

// Output Schema
export type IntegrationServiceEnvironmentNetworkHealthGetOutput = Record<
  string,
  {
    outboundNetworkDependencies?: {
      category?:
        | "NotSpecified"
        | "AzureStorage"
        | "AzureManagement"
        | "AzureActiveDirectory"
        | "SSLCertificateVerification"
        | "DiagnosticLogsAndMetrics"
        | "IntegrationServiceEnvironmentConnectors"
        | "RedisCache"
        | "AccessEndpoints"
        | "RecoveryService"
        | "SQL"
        | "RegionalService";
      displayName?: string;
      endpoints?: {
        accessibility?:
          | "NotSpecified"
          | "Unknown"
          | "Available"
          | "NotAvailable";
        domainName?: string;
        ports?: string[];
      }[];
    }[];
    outboundNetworkHealth?: {
      error?: {
        code:
          | "NotSpecified"
          | "IntegrationServiceEnvironmentNotFound"
          | "InternalServerError"
          | "InvalidOperationId";
        message: string;
        details?: unknown[];
        innerError?: {};
      };
      state?: "NotSpecified" | "Healthy" | "Unhealthy" | "Unknown";
    };
    networkDependencyHealthState:
      | "NotSpecified"
      | "Unknown"
      | "Available"
      | "NotAvailable";
  }
>;
export const IntegrationServiceEnvironmentNetworkHealthGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Struct({
      outboundNetworkDependencies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            category: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "AzureStorage",
                "AzureManagement",
                "AzureActiveDirectory",
                "SSLCertificateVerification",
                "DiagnosticLogsAndMetrics",
                "IntegrationServiceEnvironmentConnectors",
                "RedisCache",
                "AccessEndpoints",
                "RecoveryService",
                "SQL",
                "RegionalService",
              ]),
            ),
            displayName: Schema.optional(Schema.String),
            endpoints: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  accessibility: Schema.optional(
                    Schema.Literals([
                      "NotSpecified",
                      "Unknown",
                      "Available",
                      "NotAvailable",
                    ]),
                  ),
                  domainName: Schema.optional(Schema.String),
                  ports: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          }),
        ),
      ),
      outboundNetworkHealth: Schema.optional(
        Schema.Struct({
          error: Schema.optional(
            Schema.Struct({
              code: Schema.Literals([
                "NotSpecified",
                "IntegrationServiceEnvironmentNotFound",
                "InternalServerError",
                "InvalidOperationId",
              ]),
              message: Schema.String,
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              innerError: Schema.optional(Schema.Struct({})),
            }),
          ),
          state: Schema.optional(
            Schema.Literals([
              "NotSpecified",
              "Healthy",
              "Unhealthy",
              "Unknown",
            ]),
          ),
        }),
      ),
      networkDependencyHealthState: Schema.Literals([
        "NotSpecified",
        "Unknown",
        "Available",
        "NotAvailable",
      ]),
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentNetworkHealthGetOutput>;

// The operation
/**
 * Gets the integration service environment network health.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentNetworkHealthGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentNetworkHealthGetInput,
    outputSchema: IntegrationServiceEnvironmentNetworkHealthGetOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Moving"
      | "Updating"
      | "Registering"
      | "Registered"
      | "Unregistering"
      | "Unregistered"
      | "Completed"
      | "Renewing"
      | "Pending"
      | "Waiting"
      | "InProgress";
    state?:
      | "NotSpecified"
      | "Completed"
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Suspended";
    integrationServiceEnvironmentId?: string;
    endpointsConfiguration?: {
      workflow?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
      connector?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
    };
    networkConfiguration?: {
      virtualNetworkAddressSpace?: string;
      accessEndpoint?: { type?: "NotSpecified" | "External" | "Internal" };
      subnets?: { id?: string; name?: string; type?: string }[];
    };
    encryptionConfiguration?: {
      encryptionKeyReference?: {
        keyVault?: { id?: string; name?: string; type?: string };
        keyName?: string;
        keyVersion?: string;
      };
    };
  };
  sku?: { name?: "NotSpecified" | "Premium" | "Developer"; capacity?: number };
  identity?: {
    type: "SystemAssigned" | "UserAssigned" | "None";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Moving",
            "Updating",
            "Registering",
            "Registered",
            "Unregistering",
            "Unregistered",
            "Completed",
            "Renewing",
            "Pending",
            "Waiting",
            "InProgress",
          ]),
        ),
        state: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Completed",
            "Enabled",
            "Disabled",
            "Deleted",
            "Suspended",
          ]),
        ),
        integrationServiceEnvironmentId: Schema.optional(Schema.String),
        endpointsConfiguration: Schema.optional(
          Schema.Struct({
            workflow: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            connector: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        networkConfiguration: Schema.optional(
          Schema.Struct({
            virtualNetworkAddressSpace: Schema.optional(Schema.String),
            accessEndpoint: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["NotSpecified", "External", "Internal"]),
                ),
              }),
            ),
            subnets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        encryptionConfiguration: Schema.optional(
          Schema.Struct({
            encryptionKeyReference: Schema.optional(
              Schema.Struct({
                keyVault: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                  }),
                ),
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(
          Schema.Literals(["NotSpecified", "Premium", "Developer"]),
        ),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentsCreateOrUpdateInput>;

// Output Schema
export interface IntegrationServiceEnvironmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration service environment.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentsCreateOrUpdateInput,
    outputSchema: IntegrationServiceEnvironmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentsDeleteInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
}
export const IntegrationServiceEnvironmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentsDeleteInput>;

// Output Schema
export type IntegrationServiceEnvironmentsDeleteOutput = void;
export const IntegrationServiceEnvironmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationServiceEnvironmentsDeleteOutput>;

// The operation
/**
 * Deletes an integration service environment.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentsDeleteInput,
    outputSchema: IntegrationServiceEnvironmentsDeleteOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentsGetInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
}
export const IntegrationServiceEnvironmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentsGetInput>;

// Output Schema
export interface IntegrationServiceEnvironmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentsGetOutput>;

// The operation
/**
 * Gets an integration service environment.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentsGetInput,
    outputSchema: IntegrationServiceEnvironmentsGetOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentSkusListInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
}
export const IntegrationServiceEnvironmentSkusListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/skus",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentSkusListInput>;

// Output Schema
export interface IntegrationServiceEnvironmentSkusListOutput {
  value?: {
    resourceType?: string;
    sku?: { name?: "NotSpecified" | "Premium" | "Developer"; tier?: string };
    capacity?: {
      minimum?: number;
      maximum?: number;
      default?: number;
      scaleType?: "Manual" | "Automatic" | "None";
    };
  }[];
  nextLink?: string;
}
export const IntegrationServiceEnvironmentSkusListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.optional(
                Schema.Literals(["NotSpecified", "Premium", "Developer"]),
              ),
              tier: Schema.optional(Schema.String),
            }),
          ),
          capacity: Schema.optional(
            Schema.Struct({
              minimum: Schema.optional(Schema.Number),
              maximum: Schema.optional(Schema.Number),
              default: Schema.optional(Schema.Number),
              scaleType: Schema.optional(
                Schema.Literals(["Manual", "Automatic", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentSkusListOutput>;

// The operation
/**
 * Gets a list of integration service environment Skus.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentSkusList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentSkusListInput,
    outputSchema: IntegrationServiceEnvironmentSkusListOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroup: string;
  $top?: number;
}
export const IntegrationServiceEnvironmentsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentsListByResourceGroupInput>;

// Output Schema
export interface IntegrationServiceEnvironmentsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationServiceEnvironmentsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentsListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of integration service environments by resource group.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 */
export const IntegrationServiceEnvironmentsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentsListByResourceGroupInput,
    outputSchema: IntegrationServiceEnvironmentsListByResourceGroupOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const IntegrationServiceEnvironmentsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Logic/integrationServiceEnvironments",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentsListBySubscriptionInput>;

// Output Schema
export interface IntegrationServiceEnvironmentsListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IntegrationServiceEnvironmentsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentsListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of integration service environments by subscription.
 *
 * @param subscriptionId - The subscription id.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 */
export const IntegrationServiceEnvironmentsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentsListBySubscriptionInput,
    outputSchema: IntegrationServiceEnvironmentsListBySubscriptionOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentsRestartInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
}
export const IntegrationServiceEnvironmentsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/restart",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentsRestartInput>;

// Output Schema
export type IntegrationServiceEnvironmentsRestartOutput = void;
export const IntegrationServiceEnvironmentsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationServiceEnvironmentsRestartOutput>;

// The operation
/**
 * Restarts an integration service environment.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentsRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentsRestartInput,
    outputSchema: IntegrationServiceEnvironmentsRestartOutput,
  }));
// Input Schema
export interface IntegrationServiceEnvironmentsUpdateInput {
  subscriptionId: string;
  resourceGroup: string;
  integrationServiceEnvironmentName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Moving"
      | "Updating"
      | "Registering"
      | "Registered"
      | "Unregistering"
      | "Unregistered"
      | "Completed"
      | "Renewing"
      | "Pending"
      | "Waiting"
      | "InProgress";
    state?:
      | "NotSpecified"
      | "Completed"
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Suspended";
    integrationServiceEnvironmentId?: string;
    endpointsConfiguration?: {
      workflow?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
      connector?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
    };
    networkConfiguration?: {
      virtualNetworkAddressSpace?: string;
      accessEndpoint?: { type?: "NotSpecified" | "External" | "Internal" };
      subnets?: { id?: string; name?: string; type?: string }[];
    };
    encryptionConfiguration?: {
      encryptionKeyReference?: {
        keyVault?: { id?: string; name?: string; type?: string };
        keyName?: string;
        keyVersion?: string;
      };
    };
  };
  sku?: { name?: "NotSpecified" | "Premium" | "Developer"; capacity?: number };
  identity?: {
    type: "SystemAssigned" | "UserAssigned" | "None";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    integrationServiceEnvironmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Moving",
            "Updating",
            "Registering",
            "Registered",
            "Unregistering",
            "Unregistered",
            "Completed",
            "Renewing",
            "Pending",
            "Waiting",
            "InProgress",
          ]),
        ),
        state: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Completed",
            "Enabled",
            "Disabled",
            "Deleted",
            "Suspended",
          ]),
        ),
        integrationServiceEnvironmentId: Schema.optional(Schema.String),
        endpointsConfiguration: Schema.optional(
          Schema.Struct({
            workflow: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            connector: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        networkConfiguration: Schema.optional(
          Schema.Struct({
            virtualNetworkAddressSpace: Schema.optional(Schema.String),
            accessEndpoint: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["NotSpecified", "External", "Internal"]),
                ),
              }),
            ),
            subnets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        encryptionConfiguration: Schema.optional(
          Schema.Struct({
            encryptionKeyReference: Schema.optional(
              Schema.Struct({
                keyVault: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                  }),
                ),
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(
          Schema.Literals(["NotSpecified", "Premium", "Developer"]),
        ),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<IntegrationServiceEnvironmentsUpdateInput>;

// Output Schema
export interface IntegrationServiceEnvironmentsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const IntegrationServiceEnvironmentsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IntegrationServiceEnvironmentsUpdateOutput>;

// The operation
/**
 * Updates an integration service environment.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroup - The resource group.
 * @param integrationServiceEnvironmentName - The integration service environment name.
 * @param api-version - The API version.
 */
export const IntegrationServiceEnvironmentsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationServiceEnvironmentsUpdateInput,
    outputSchema: IntegrationServiceEnvironmentsUpdateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Logic/operations",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    origin?: string;
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    properties?: {};
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        origin: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        properties: Schema.optional(Schema.Struct({})),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Logic REST API operations.
 *
 * @param api-version - The API version.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface WorkflowRunActionRepetitionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
  repetitionName: string;
}
export const WorkflowRunActionRepetitionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
    repetitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionRepetitionsGetInput>;

// Output Schema
export interface WorkflowRunActionRepetitionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowRunActionRepetitionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<WorkflowRunActionRepetitionsGetOutput>;

// The operation
/**
 * Get a workflow run action repetition.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param repetitionName - The workflow repetition.
 * @param api-version - The API version.
 */
export const WorkflowRunActionRepetitionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionRepetitionsGetInput,
    outputSchema: WorkflowRunActionRepetitionsGetOutput,
  }));
// Input Schema
export interface WorkflowRunActionRepetitionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
}
export const WorkflowRunActionRepetitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionRepetitionsListInput>;

// Output Schema
export interface WorkflowRunActionRepetitionsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
}
export const WorkflowRunActionRepetitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkflowRunActionRepetitionsListOutput>;

// The operation
/**
 * Get all of a workflow run action repetitions.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param api-version - The API version.
 */
export const WorkflowRunActionRepetitionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionRepetitionsListInput,
    outputSchema: WorkflowRunActionRepetitionsListOutput,
  }));
// Input Schema
export interface WorkflowRunActionRepetitionsListExpressionTracesInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
  repetitionName: string;
}
export const WorkflowRunActionRepetitionsListExpressionTracesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
    repetitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/listExpressionTraces",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionRepetitionsListExpressionTracesInput>;

// Output Schema
export interface WorkflowRunActionRepetitionsListExpressionTracesOutput {
  inputs?: {
    text?: string;
    value?: unknown;
    subexpressions?: unknown[];
    error?: { code: string };
  }[];
}
export const WorkflowRunActionRepetitionsListExpressionTracesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          text: Schema.optional(Schema.String),
          value: Schema.optional(Schema.Unknown),
          subexpressions: Schema.optional(Schema.Array(Schema.Unknown)),
          error: Schema.optional(
            Schema.Struct({
              code: Schema.String,
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkflowRunActionRepetitionsListExpressionTracesOutput>;

// The operation
/**
 * Lists a workflow run expression trace.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param repetitionName - The workflow repetition.
 * @param api-version - The API version.
 */
export const WorkflowRunActionRepetitionsListExpressionTraces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionRepetitionsListExpressionTracesInput,
    outputSchema: WorkflowRunActionRepetitionsListExpressionTracesOutput,
  }));
// Input Schema
export interface WorkflowRunActionRepetitionsRequestHistoriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
  repetitionName: string;
  requestHistoryName: string;
}
export const WorkflowRunActionRepetitionsRequestHistoriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
    repetitionName: Schema.String.pipe(T.PathParam()),
    requestHistoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/requestHistories/{requestHistoryName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionRepetitionsRequestHistoriesGetInput>;

// Output Schema
export interface WorkflowRunActionRepetitionsRequestHistoriesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowRunActionRepetitionsRequestHistoriesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<WorkflowRunActionRepetitionsRequestHistoriesGetOutput>;

// The operation
/**
 * Gets a workflow run repetition request history.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param repetitionName - The workflow repetition.
 * @param requestHistoryName - The request history name.
 * @param api-version - The API version.
 */
export const WorkflowRunActionRepetitionsRequestHistoriesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionRepetitionsRequestHistoriesGetInput,
    outputSchema: WorkflowRunActionRepetitionsRequestHistoriesGetOutput,
  }));
// Input Schema
export interface WorkflowRunActionRepetitionsRequestHistoriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
  repetitionName: string;
}
export const WorkflowRunActionRepetitionsRequestHistoriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
    repetitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/requestHistories",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionRepetitionsRequestHistoriesListInput>;

// Output Schema
export interface WorkflowRunActionRepetitionsRequestHistoriesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const WorkflowRunActionRepetitionsRequestHistoriesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowRunActionRepetitionsRequestHistoriesListOutput>;

// The operation
/**
 * List a workflow run repetition request history.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param repetitionName - The workflow repetition.
 * @param api-version - The API version.
 */
export const WorkflowRunActionRepetitionsRequestHistoriesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionRepetitionsRequestHistoriesListInput,
    outputSchema: WorkflowRunActionRepetitionsRequestHistoriesListOutput,
  }));
// Input Schema
export interface WorkflowRunActionRequestHistoriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
  requestHistoryName: string;
}
export const WorkflowRunActionRequestHistoriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
    requestHistoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/requestHistories/{requestHistoryName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionRequestHistoriesGetInput>;

// Output Schema
export interface WorkflowRunActionRequestHistoriesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowRunActionRequestHistoriesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<WorkflowRunActionRequestHistoriesGetOutput>;

// The operation
/**
 * Gets a workflow run request history.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param requestHistoryName - The request history name.
 * @param api-version - The API version.
 */
export const WorkflowRunActionRequestHistoriesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionRequestHistoriesGetInput,
    outputSchema: WorkflowRunActionRequestHistoriesGetOutput,
  }));
// Input Schema
export interface WorkflowRunActionRequestHistoriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
}
export const WorkflowRunActionRequestHistoriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/requestHistories",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionRequestHistoriesListInput>;

// Output Schema
export interface WorkflowRunActionRequestHistoriesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const WorkflowRunActionRequestHistoriesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowRunActionRequestHistoriesListOutput>;

// The operation
/**
 * List a workflow run request history.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param api-version - The API version.
 */
export const WorkflowRunActionRequestHistoriesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionRequestHistoriesListInput,
    outputSchema: WorkflowRunActionRequestHistoriesListOutput,
  }));
// Input Schema
export interface WorkflowRunActionScopeRepetitionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
  repetitionName: string;
}
export const WorkflowRunActionScopeRepetitionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
    repetitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions/{repetitionName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionScopeRepetitionsGetInput>;

// Output Schema
export interface WorkflowRunActionScopeRepetitionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowRunActionScopeRepetitionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<WorkflowRunActionScopeRepetitionsGetOutput>;

// The operation
/**
 * Get a workflow run action scoped repetition.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param repetitionName - The workflow repetition.
 * @param api-version - The API version.
 */
export const WorkflowRunActionScopeRepetitionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionScopeRepetitionsGetInput,
    outputSchema: WorkflowRunActionScopeRepetitionsGetOutput,
  }));
// Input Schema
export interface WorkflowRunActionScopeRepetitionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
}
export const WorkflowRunActionScopeRepetitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionScopeRepetitionsListInput>;

// Output Schema
export interface WorkflowRunActionScopeRepetitionsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
}
export const WorkflowRunActionScopeRepetitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkflowRunActionScopeRepetitionsListOutput>;

// The operation
/**
 * List the workflow run action scoped repetitions.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param api-version - The API version.
 */
export const WorkflowRunActionScopeRepetitionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionScopeRepetitionsListInput,
    outputSchema: WorkflowRunActionScopeRepetitionsListOutput,
  }));
// Input Schema
export interface WorkflowRunActionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
}
export const WorkflowRunActionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionsGetInput>;

// Output Schema
export interface WorkflowRunActionsGetOutput {
  id?: string;
}
export const WorkflowRunActionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowRunActionsGetOutput>;

// The operation
/**
 * Gets a workflow run action.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param api-version - The API version.
 */
export const WorkflowRunActionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowRunActionsGetInput,
    outputSchema: WorkflowRunActionsGetOutput,
  }),
);
// Input Schema
export interface WorkflowRunActionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  $top?: number;
  $filter?: string;
}
export const WorkflowRunActionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionsListInput>;

// Output Schema
export interface WorkflowRunActionsListOutput {
  value?: { id?: string }[];
  nextLink?: string;
}
export const WorkflowRunActionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowRunActionsListOutput>;

// The operation
/**
 * Gets a list of workflow run actions.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: Status.
 */
export const WorkflowRunActionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowRunActionsListInput,
    outputSchema: WorkflowRunActionsListOutput,
  }),
);
// Input Schema
export interface WorkflowRunActionsListExpressionTracesInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  actionName: string;
}
export const WorkflowRunActionsListExpressionTracesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    actionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/listExpressionTraces",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunActionsListExpressionTracesInput>;

// Output Schema
export interface WorkflowRunActionsListExpressionTracesOutput {
  inputs?: {
    text?: string;
    value?: unknown;
    subexpressions?: unknown[];
    error?: { code: string };
  }[];
}
export const WorkflowRunActionsListExpressionTracesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          text: Schema.optional(Schema.String),
          value: Schema.optional(Schema.Unknown),
          subexpressions: Schema.optional(Schema.Array(Schema.Unknown)),
          error: Schema.optional(
            Schema.Struct({
              code: Schema.String,
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkflowRunActionsListExpressionTracesOutput>;

// The operation
/**
 * Lists a workflow run expression trace.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param actionName - The workflow action name.
 * @param api-version - The API version.
 */
export const WorkflowRunActionsListExpressionTraces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowRunActionsListExpressionTracesInput,
    outputSchema: WorkflowRunActionsListExpressionTracesOutput,
  }));
// Input Schema
export interface WorkflowRunOperationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
  operationId: string;
}
export const WorkflowRunOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/operations/{operationId}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunOperationsGetInput>;

// Output Schema
export interface WorkflowRunOperationsGetOutput {
  id?: string;
}
export const WorkflowRunOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowRunOperationsGetOutput>;

// The operation
/**
 * Gets an operation for a run.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param operationId - The workflow operation id.
 * @param api-version - The API version.
 */
export const WorkflowRunOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowRunOperationsGetInput,
    outputSchema: WorkflowRunOperationsGetOutput,
  }),
);
// Input Schema
export interface WorkflowRunsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
}
export const WorkflowRunsCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    runName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/cancel",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowRunsCancelInput>;

// Output Schema
export type WorkflowRunsCancelOutput = void;
export const WorkflowRunsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowRunsCancelOutput>;

// The operation
/**
 * Cancels a workflow run.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param api-version - The API version.
 */
export const WorkflowRunsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowRunsCancelInput,
  outputSchema: WorkflowRunsCancelOutput,
}));
// Input Schema
export interface WorkflowRunsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  runName: string;
}
export const WorkflowRunsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
  runName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowRunsGetInput>;

// Output Schema
export interface WorkflowRunsGetOutput {
  id?: string;
}
export const WorkflowRunsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<WorkflowRunsGetOutput>;

// The operation
/**
 * Gets a workflow run.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param runName - The workflow run name.
 * @param api-version - The API version.
 */
export const WorkflowRunsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowRunsGetInput,
  outputSchema: WorkflowRunsGetOutput,
}));
// Input Schema
export interface WorkflowRunsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  $top?: number;
  $filter?: string;
}
export const WorkflowRunsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowRunsListInput>;

// Output Schema
export interface WorkflowRunsListOutput {
  value?: { id?: string }[];
  nextLink?: string;
}
export const WorkflowRunsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<WorkflowRunsListOutput>;

// The operation
/**
 * Gets a list of workflow runs.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.
 */
export const WorkflowRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowRunsListInput,
  outputSchema: WorkflowRunsListOutput,
}));
// Input Schema
export interface WorkflowsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Moving"
      | "Updating"
      | "Registering"
      | "Registered"
      | "Unregistering"
      | "Unregistered"
      | "Completed"
      | "Renewing"
      | "Pending"
      | "Waiting"
      | "InProgress";
    createdTime?: string;
    changedTime?: string;
    state?:
      | "NotSpecified"
      | "Completed"
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Suspended";
    version?: string;
    accessEndpoint?: string;
    endpointsConfiguration?: {
      workflow?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
      connector?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
    };
    accessControl?: {
      triggers?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      contents?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      actions?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      workflowManagement?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
    };
    sku?: {
      name:
        | "NotSpecified"
        | "Free"
        | "Shared"
        | "Basic"
        | "Standard"
        | "Premium";
      plan?: { id?: string; name?: string; type?: string };
    };
    integrationAccount?: { id?: string; name?: string; type?: string };
    integrationServiceEnvironment?: {
      id?: string;
      name?: string;
      type?: string;
    };
    definition?: {};
    parameters?: Record<
      string,
      {
        type?:
          | "NotSpecified"
          | "String"
          | "SecureString"
          | "Int"
          | "Float"
          | "Bool"
          | "Array"
          | "Object"
          | "SecureObject";
        value?: {};
        metadata?: {};
        description?: string;
      }
    >;
  };
  identity?: {
    type: "SystemAssigned" | "UserAssigned" | "None";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Moving",
            "Updating",
            "Registering",
            "Registered",
            "Unregistering",
            "Unregistered",
            "Completed",
            "Renewing",
            "Pending",
            "Waiting",
            "InProgress",
          ]),
        ),
        createdTime: Schema.optional(Schema.String),
        changedTime: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Completed",
            "Enabled",
            "Disabled",
            "Deleted",
            "Suspended",
          ]),
        ),
        version: Schema.optional(Schema.String),
        accessEndpoint: Schema.optional(Schema.String),
        endpointsConfiguration: Schema.optional(
          Schema.Struct({
            workflow: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            connector: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        accessControl: Schema.optional(
          Schema.Struct({
            triggers: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            contents: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            actions: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            workflowManagement: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "Free",
              "Shared",
              "Basic",
              "Standard",
              "Premium",
            ]),
            plan: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        integrationAccount: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        integrationServiceEnvironment: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        definition: Schema.optional(Schema.Struct({})),
        parameters: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "String",
                  "SecureString",
                  "Int",
                  "Float",
                  "Bool",
                  "Array",
                  "Object",
                  "SecureObject",
                ]),
              ),
              value: Schema.optional(Schema.Struct({})),
              metadata: Schema.optional(Schema.Struct({})),
              description: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsCreateOrUpdateInput>;

// Output Schema
export interface WorkflowsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<WorkflowsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowsCreateOrUpdateInput,
    outputSchema: WorkflowsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface WorkflowsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowsDeleteInput>;

// Output Schema
export type WorkflowsDeleteOutput = void;
export const WorkflowsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsDeleteOutput>;

// The operation
/**
 * Deletes a workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsDeleteInput,
  outputSchema: WorkflowsDeleteOutput,
}));
// Input Schema
export interface WorkflowsDisableInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowsDisableInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/disable",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowsDisableInput>;

// Output Schema
export type WorkflowsDisableOutput = void;
export const WorkflowsDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsDisableOutput>;

// The operation
/**
 * Disables a workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsDisable = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsDisableInput,
  outputSchema: WorkflowsDisableOutput,
}));
// Input Schema
export interface WorkflowsEnableInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowsEnableInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/enable",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowsEnableInput>;

// Output Schema
export type WorkflowsEnableOutput = void;
export const WorkflowsEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsEnableOutput>;

// The operation
/**
 * Enables a workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsEnable = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsEnableInput,
  outputSchema: WorkflowsEnableOutput,
}));
// Input Schema
export interface WorkflowsGenerateUpgradedDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  targetSchemaVersion?: string;
}
export const WorkflowsGenerateUpgradedDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    targetSchemaVersion: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/generateUpgradedDefinition",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsGenerateUpgradedDefinitionInput>;

// Output Schema
export interface WorkflowsGenerateUpgradedDefinitionOutput {}
export const WorkflowsGenerateUpgradedDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<WorkflowsGenerateUpgradedDefinitionOutput>;

// The operation
/**
 * Generates the upgraded definition for a workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsGenerateUpgradedDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowsGenerateUpgradedDefinitionInput,
    outputSchema: WorkflowsGenerateUpgradedDefinitionOutput,
  }));
// Input Schema
export interface WorkflowsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowsGetInput>;

// Output Schema
export interface WorkflowsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<WorkflowsGetOutput>;

// The operation
/**
 * Gets a workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsGetInput,
  outputSchema: WorkflowsGetOutput,
}));
// Input Schema
export interface WorkflowsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $filter?: string;
}
export const WorkflowsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsListByResourceGroupInput>;

// Output Schema
export interface WorkflowsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const WorkflowsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowsListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of workflows by resource group.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.
 */
export const WorkflowsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowsListByResourceGroupInput,
    outputSchema: WorkflowsListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkflowsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $filter?: string;
}
export const WorkflowsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Logic/workflows",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsListBySubscriptionInput>;

// Output Schema
export interface WorkflowsListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const WorkflowsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowsListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of workflows by subscription.
 *
 * @param subscriptionId - The subscription id.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.
 */
export const WorkflowsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowsListBySubscriptionInput,
    outputSchema: WorkflowsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface WorkflowsListCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  notAfter?: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const WorkflowsListCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    notAfter: Schema.optional(Schema.String),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/listCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsListCallbackUrlInput>;

// Output Schema
export interface WorkflowsListCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const WorkflowsListCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkflowsListCallbackUrlOutput>;

// The operation
/**
 * Get the workflow callback Url.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsListCallbackUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowsListCallbackUrlInput,
    outputSchema: WorkflowsListCallbackUrlOutput,
  }),
);
// Input Schema
export interface WorkflowsListSwaggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowsListSwaggerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/listSwagger",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsListSwaggerInput>;

// Output Schema
export interface WorkflowsListSwaggerOutput {}
export const WorkflowsListSwaggerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<WorkflowsListSwaggerOutput>;

// The operation
/**
 * Gets an OpenAPI definition for the workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsListSwagger = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowsListSwaggerInput,
    outputSchema: WorkflowsListSwaggerOutput,
  }),
);
// Input Schema
export interface WorkflowsMoveInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  name?: string;
  id?: string;
  type?: string;
}
export const WorkflowsMoveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/move",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowsMoveInput>;

// Output Schema
export type WorkflowsMoveOutput = void;
export const WorkflowsMoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsMoveOutput>;

// The operation
/**
 * Moves an existing workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsMove = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsMoveInput,
  outputSchema: WorkflowsMoveOutput,
}));
// Input Schema
export interface WorkflowsRegenerateAccessKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const WorkflowsRegenerateAccessKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/regenerateAccessKey",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsRegenerateAccessKeyInput>;

// Output Schema
export type WorkflowsRegenerateAccessKeyOutput = void;
export const WorkflowsRegenerateAccessKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsRegenerateAccessKeyOutput>;

// The operation
/**
 * Regenerates the callback URL access key for request triggers.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsRegenerateAccessKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowsRegenerateAccessKeyInput,
    outputSchema: WorkflowsRegenerateAccessKeyOutput,
  }));
// Input Schema
export interface WorkflowsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}",
    apiVersion: "2019-05-01",
  }),
) as unknown as Schema.Codec<WorkflowsUpdateInput>;

// Output Schema
export interface WorkflowsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<WorkflowsUpdateOutput>;

// The operation
/**
 * Updates a workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsUpdateInput,
  outputSchema: WorkflowsUpdateOutput,
}));
// Input Schema
export interface WorkflowsValidateByLocationInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  workflowName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Moving"
      | "Updating"
      | "Registering"
      | "Registered"
      | "Unregistering"
      | "Unregistered"
      | "Completed"
      | "Renewing"
      | "Pending"
      | "Waiting"
      | "InProgress";
    createdTime?: string;
    changedTime?: string;
    state?:
      | "NotSpecified"
      | "Completed"
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Suspended";
    version?: string;
    accessEndpoint?: string;
    endpointsConfiguration?: {
      workflow?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
      connector?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
    };
    accessControl?: {
      triggers?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      contents?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      actions?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      workflowManagement?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
    };
    sku?: {
      name:
        | "NotSpecified"
        | "Free"
        | "Shared"
        | "Basic"
        | "Standard"
        | "Premium";
      plan?: { id?: string; name?: string; type?: string };
    };
    integrationAccount?: { id?: string; name?: string; type?: string };
    integrationServiceEnvironment?: {
      id?: string;
      name?: string;
      type?: string;
    };
    definition?: {};
    parameters?: Record<
      string,
      {
        type?:
          | "NotSpecified"
          | "String"
          | "SecureString"
          | "Int"
          | "Float"
          | "Bool"
          | "Array"
          | "Object"
          | "SecureObject";
        value?: {};
        metadata?: {};
        description?: string;
      }
    >;
  };
  identity?: {
    type: "SystemAssigned" | "UserAssigned" | "None";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  id?: string;
  name?: string;
  type?: string;
  tags?: Record<string, string>;
}
export const WorkflowsValidateByLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Moving",
            "Updating",
            "Registering",
            "Registered",
            "Unregistering",
            "Unregistered",
            "Completed",
            "Renewing",
            "Pending",
            "Waiting",
            "InProgress",
          ]),
        ),
        createdTime: Schema.optional(Schema.String),
        changedTime: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Completed",
            "Enabled",
            "Disabled",
            "Deleted",
            "Suspended",
          ]),
        ),
        version: Schema.optional(Schema.String),
        accessEndpoint: Schema.optional(Schema.String),
        endpointsConfiguration: Schema.optional(
          Schema.Struct({
            workflow: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            connector: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        accessControl: Schema.optional(
          Schema.Struct({
            triggers: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            contents: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            actions: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            workflowManagement: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "Free",
              "Shared",
              "Basic",
              "Standard",
              "Premium",
            ]),
            plan: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        integrationAccount: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        integrationServiceEnvironment: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        definition: Schema.optional(Schema.Struct({})),
        parameters: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "String",
                  "SecureString",
                  "Int",
                  "Float",
                  "Bool",
                  "Array",
                  "Object",
                  "SecureObject",
                ]),
              ),
              value: Schema.optional(Schema.Struct({})),
              metadata: Schema.optional(Schema.Struct({})),
              description: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/locations/{location}/workflows/{workflowName}/validate",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsValidateByLocationInput>;

// Output Schema
export type WorkflowsValidateByLocationOutput = void;
export const WorkflowsValidateByLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsValidateByLocationOutput>;

// The operation
/**
 * Validates the workflow definition.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param location - The workflow location.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsValidateByLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowsValidateByLocationInput,
    outputSchema: WorkflowsValidateByLocationOutput,
  }),
);
// Input Schema
export interface WorkflowsValidateByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Moving"
      | "Updating"
      | "Registering"
      | "Registered"
      | "Unregistering"
      | "Unregistered"
      | "Completed"
      | "Renewing"
      | "Pending"
      | "Waiting"
      | "InProgress";
    createdTime?: string;
    changedTime?: string;
    state?:
      | "NotSpecified"
      | "Completed"
      | "Enabled"
      | "Disabled"
      | "Deleted"
      | "Suspended";
    version?: string;
    accessEndpoint?: string;
    endpointsConfiguration?: {
      workflow?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
      connector?: {
        outgoingIpAddresses?: { address?: string }[];
        accessEndpointIpAddresses?: { address?: string }[];
      };
    };
    accessControl?: {
      triggers?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      contents?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      actions?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
      workflowManagement?: {
        allowedCallerIpAddresses?: { addressRange?: string }[];
        openAuthenticationPolicies?: {
          policies?: Record<
            string,
            { type?: "AAD"; claims?: { name?: string; value?: string }[] }
          >;
        };
      };
    };
    sku?: {
      name:
        | "NotSpecified"
        | "Free"
        | "Shared"
        | "Basic"
        | "Standard"
        | "Premium";
      plan?: { id?: string; name?: string; type?: string };
    };
    integrationAccount?: { id?: string; name?: string; type?: string };
    integrationServiceEnvironment?: {
      id?: string;
      name?: string;
      type?: string;
    };
    definition?: {};
    parameters?: Record<
      string,
      {
        type?:
          | "NotSpecified"
          | "String"
          | "SecureString"
          | "Int"
          | "Float"
          | "Bool"
          | "Array"
          | "Object"
          | "SecureObject";
        value?: {};
        metadata?: {};
        description?: string;
      }
    >;
  };
  identity?: {
    type: "SystemAssigned" | "UserAssigned" | "None";
    tenantId?: string;
    principalId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowsValidateByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Moving",
            "Updating",
            "Registering",
            "Registered",
            "Unregistering",
            "Unregistered",
            "Completed",
            "Renewing",
            "Pending",
            "Waiting",
            "InProgress",
          ]),
        ),
        createdTime: Schema.optional(Schema.String),
        changedTime: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Completed",
            "Enabled",
            "Disabled",
            "Deleted",
            "Suspended",
          ]),
        ),
        version: Schema.optional(Schema.String),
        accessEndpoint: Schema.optional(Schema.String),
        endpointsConfiguration: Schema.optional(
          Schema.Struct({
            workflow: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            connector: Schema.optional(
              Schema.Struct({
                outgoingIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                accessEndpointIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        accessControl: Schema.optional(
          Schema.Struct({
            triggers: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            contents: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            actions: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            workflowManagement: Schema.optional(
              Schema.Struct({
                allowedCallerIpAddresses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      addressRange: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                openAuthenticationPolicies: Schema.optional(
                  Schema.Struct({
                    policies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          type: Schema.optional(Schema.Literals(["AAD"])),
                          claims: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "Free",
              "Shared",
              "Basic",
              "Standard",
              "Premium",
            ]),
            plan: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        integrationAccount: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        integrationServiceEnvironment: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        definition: Schema.optional(Schema.Struct({})),
        parameters: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "String",
                  "SecureString",
                  "Int",
                  "Float",
                  "Bool",
                  "Array",
                  "Object",
                  "SecureObject",
                ]),
              ),
              value: Schema.optional(Schema.Struct({})),
              metadata: Schema.optional(Schema.Struct({})),
              description: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/validate",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsValidateByResourceGroupInput>;

// Output Schema
export type WorkflowsValidateByResourceGroupOutput = void;
export const WorkflowsValidateByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsValidateByResourceGroupOutput>;

// The operation
/**
 * Validates the workflow.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 */
export const WorkflowsValidateByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowsValidateByResourceGroupInput,
    outputSchema: WorkflowsValidateByResourceGroupOutput,
  }));
// Input Schema
export interface WorkflowTriggerHistoriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
  historyName: string;
}
export const WorkflowTriggerHistoriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    historyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories/{historyName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggerHistoriesGetInput>;

// Output Schema
export interface WorkflowTriggerHistoriesGetOutput {
  id?: string;
}
export const WorkflowTriggerHistoriesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowTriggerHistoriesGetOutput>;

// The operation
/**
 * Gets a workflow trigger history.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param historyName - The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
 * @param api-version - The API version.
 */
export const WorkflowTriggerHistoriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowTriggerHistoriesGetInput,
    outputSchema: WorkflowTriggerHistoriesGetOutput,
  }),
);
// Input Schema
export interface WorkflowTriggerHistoriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
  $top?: number;
  $filter?: string;
}
export const WorkflowTriggerHistoriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggerHistoriesListInput>;

// Output Schema
export interface WorkflowTriggerHistoriesListOutput {
  value?: { id?: string }[];
  nextLink?: string;
}
export const WorkflowTriggerHistoriesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowTriggerHistoriesListOutput>;

// The operation
/**
 * Gets a list of workflow trigger histories.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.
 */
export const WorkflowTriggerHistoriesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowTriggerHistoriesListInput,
    outputSchema: WorkflowTriggerHistoriesListOutput,
  }));
// Input Schema
export interface WorkflowTriggerHistoriesResubmitInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
  historyName: string;
}
export const WorkflowTriggerHistoriesResubmitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    historyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories/{historyName}/resubmit",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggerHistoriesResubmitInput>;

// Output Schema
export type WorkflowTriggerHistoriesResubmitOutput = void;
export const WorkflowTriggerHistoriesResubmitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowTriggerHistoriesResubmitOutput>;

// The operation
/**
 * Resubmits a workflow run based on the trigger history.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param historyName - The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
 * @param api-version - The API version.
 */
export const WorkflowTriggerHistoriesResubmit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowTriggerHistoriesResubmitInput,
    outputSchema: WorkflowTriggerHistoriesResubmitOutput,
  }));
// Input Schema
export interface WorkflowTriggersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
}
export const WorkflowTriggersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggersGetInput>;

// Output Schema
export interface WorkflowTriggersGetOutput {
  id?: string;
}
export const WorkflowTriggersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowTriggersGetOutput>;

// The operation
/**
 * Gets a workflow trigger.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 */
export const WorkflowTriggersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowTriggersGetInput,
  outputSchema: WorkflowTriggersGetOutput,
}));
// Input Schema
export interface WorkflowTriggersGetSchemaJsonInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
}
export const WorkflowTriggersGetSchemaJsonInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/schemas/json",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggersGetSchemaJsonInput>;

// Output Schema
export interface WorkflowTriggersGetSchemaJsonOutput {
  title?: string;
  content?: string;
}
export const WorkflowTriggersGetSchemaJsonOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowTriggersGetSchemaJsonOutput>;

// The operation
/**
 * Get the trigger schema as JSON.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 */
export const WorkflowTriggersGetSchemaJson =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowTriggersGetSchemaJsonInput,
    outputSchema: WorkflowTriggersGetSchemaJsonOutput,
  }));
// Input Schema
export interface WorkflowTriggersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  $top?: number;
  $filter?: string;
}
export const WorkflowTriggersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggersListInput>;

// Output Schema
export interface WorkflowTriggersListOutput {
  value?: { id?: string }[];
  nextLink?: string;
}
export const WorkflowTriggersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowTriggersListOutput>;

// The operation
/**
 * Gets a list of workflow triggers.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 * @param $filter - The filter to apply on the operation.
 */
export const WorkflowTriggersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowTriggersListInput,
    outputSchema: WorkflowTriggersListOutput,
  }),
);
// Input Schema
export interface WorkflowTriggersListCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
}
export const WorkflowTriggersListCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/listCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggersListCallbackUrlInput>;

// Output Schema
export interface WorkflowTriggersListCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const WorkflowTriggersListCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkflowTriggersListCallbackUrlOutput>;

// The operation
/**
 * Get the callback URL for a workflow trigger.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 */
export const WorkflowTriggersListCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowTriggersListCallbackUrlInput,
    outputSchema: WorkflowTriggersListCallbackUrlOutput,
  }));
// Input Schema
export interface WorkflowTriggersResetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
}
export const WorkflowTriggersResetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/reset",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggersResetInput>;

// Output Schema
export type WorkflowTriggersResetOutput = void;
export const WorkflowTriggersResetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowTriggersResetOutput>;

// The operation
/**
 * Resets a workflow trigger.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 */
export const WorkflowTriggersReset = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowTriggersResetInput,
    outputSchema: WorkflowTriggersResetOutput,
  }),
);
// Input Schema
export interface WorkflowTriggersRunInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
}
export const WorkflowTriggersRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/run",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggersRunInput>;

// Output Schema
export type WorkflowTriggersRunOutput = void;
export const WorkflowTriggersRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowTriggersRunOutput>;

// The operation
/**
 * Runs a workflow trigger.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 */
export const WorkflowTriggersRun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowTriggersRunInput,
  outputSchema: WorkflowTriggersRunOutput,
}));
// Input Schema
export interface WorkflowTriggersSetStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  triggerName: string;
  source: { id?: string; name?: string; type?: string };
}
export const WorkflowTriggersSetStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    source: Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/setState",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowTriggersSetStateInput>;

// Output Schema
export type WorkflowTriggersSetStateOutput = void;
export const WorkflowTriggersSetStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowTriggersSetStateOutput>;

// The operation
/**
 * Sets the state of a workflow trigger.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 */
export const WorkflowTriggersSetState = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowTriggersSetStateInput,
    outputSchema: WorkflowTriggersSetStateOutput,
  }),
);
// Input Schema
export interface WorkflowVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  versionId: string;
}
export const WorkflowVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions/{versionId}",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionsGetInput>;

// Output Schema
export interface WorkflowVersionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const WorkflowVersionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<WorkflowVersionsGetOutput>;

// The operation
/**
 * Gets a workflow version.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param versionId - The workflow versionId.
 * @param api-version - The API version.
 */
export const WorkflowVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowVersionsGetInput,
  outputSchema: WorkflowVersionsGetOutput,
}));
// Input Schema
export interface WorkflowVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  $top?: number;
}
export const WorkflowVersionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionsListInput>;

// Output Schema
export interface WorkflowVersionsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const WorkflowVersionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowVersionsListOutput>;

// The operation
/**
 * Gets a list of workflow versions.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param api-version - The API version.
 * @param $top - The number of items to be included in the result.
 */
export const WorkflowVersionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowVersionsListInput,
    outputSchema: WorkflowVersionsListOutput,
  }),
);
// Input Schema
export interface WorkflowVersionTriggersListCallbackUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  versionId: string;
  triggerName: string;
  notAfter?: string;
  keyType?: "NotSpecified" | "Primary" | "Secondary";
}
export const WorkflowVersionTriggersListCallbackUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionId: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    notAfter: Schema.optional(Schema.String),
    keyType: Schema.optional(
      Schema.Literals(["NotSpecified", "Primary", "Secondary"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions/{versionId}/triggers/{triggerName}/listCallbackUrl",
      apiVersion: "2019-05-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionTriggersListCallbackUrlInput>;

// Output Schema
export interface WorkflowVersionTriggersListCallbackUrlOutput {
  value?: string;
  method?: string;
  basePath?: string;
  relativePath?: string;
  relativePathParameters?: string[];
  queries?: {
    "api-version"?: string;
    sp?: string;
    sv?: string;
    sig?: string;
    se?: string;
  };
}
export const WorkflowVersionTriggersListCallbackUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    basePath: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    relativePathParameters: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(
      Schema.Struct({
        "api-version": Schema.optional(Schema.String),
        sp: Schema.optional(Schema.String),
        sv: Schema.optional(Schema.String),
        sig: Schema.optional(Schema.String),
        se: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkflowVersionTriggersListCallbackUrlOutput>;

// The operation
/**
 * Get the callback url for a trigger of a workflow version.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param workflowName - The workflow name.
 * @param versionId - The workflow versionId.
 * @param triggerName - The workflow trigger name.
 * @param api-version - The API version.
 */
export const WorkflowVersionTriggersListCallbackUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowVersionTriggersListCallbackUrlInput,
    outputSchema: WorkflowVersionTriggersListCallbackUrlOutput,
  }));
