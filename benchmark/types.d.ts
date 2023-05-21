import { OutputLogEvent } from "@aws-sdk/client-cloudwatch-logs";

export type CloudWatchLog = OutputLogEvent[];

export interface BenchmarkConfig {
  stackName: string;
  functionInstances: number;
  functionRuns: number;
  gitBranch: string;
  output: {
    dirPath: string;
    jsonFilePath: string;
  };
  setupFunction: {
    entryPath: string;
  };
  benchmarkFunctions: Record<string, FunctionParameters>;
  chartsTemplates: {
    coldStarts: Record<string, { title: string }>;
    warmStarts: Record<string, { title: string }>;
  };
}

export interface FunctionParameters {
  entryPath: string;
  runtimeName?: "NODEJS_16_X" | "NODEJS_18_X";
  useItty?: boolean;
  useBundle?: boolean;
  chart: {
    order: number;
    backgroundColor: string;
    borderColor: string;
  };
}

export interface ApiCall {
  functionName: string;
  apiCallLatency: number;
  httpRequestLatency?: number;
}

export interface LambdaReport {
  initDuration: number;
  executionDuration: number;
  maxMemory: number;
}

export type LambdaExecutionLog = Record<string, LambdaExecution>;

export type LambdaExecution = LambdaReport & ApiCall;

export interface ChartsDatasets {
  coldStarts: Record<string, Datasets>;
  warmStarts: Record<string, Datasets>;
}

type Datasets = Record<string, Series>;

interface Series {
  data: number[];
  mean: number;
  standardDeviation: number;
}
