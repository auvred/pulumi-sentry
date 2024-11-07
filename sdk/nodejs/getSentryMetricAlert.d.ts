import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 */
export declare function getSentryMetricAlert(args: GetSentryMetricAlertArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryMetricAlertResult>;
/**
 * A collection of arguments for invoking getSentryMetricAlert.
 */
export interface GetSentryMetricAlertArgs {
    /**
     * The internal ID for this metric alert.
     */
    internalId: string;
    /**
     * The slug of the organization the metric alert belongs to.
     */
    organization: string;
    /**
     * The slug of the project the metric alert belongs to.
     */
    project: string;
}
/**
 * A collection of values returned by getSentryMetricAlert.
 */
export interface GetSentryMetricAlertResult {
    readonly aggregate: string;
    readonly dataset: string;
    readonly environment: string;
    /**
     * The events type of dataset.
     */
    readonly eventTypes: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The internal ID for this metric alert.
     */
    readonly internalId: string;
    /**
     * The metric alert name.
     */
    readonly name: string;
    /**
     * The slug of the organization the metric alert belongs to.
     */
    readonly organization: string;
    readonly owner: string;
    /**
     * The slug of the project the metric alert belongs to.
     */
    readonly project: string;
    readonly query: string;
    readonly resolveThreshold: number;
    readonly thresholdType: number;
    readonly timeWindow: number;
    readonly triggers: outputs.GetSentryMetricAlertTrigger[];
}
/**
 * ## Example Usage
 */
export declare function getSentryMetricAlertOutput(args: GetSentryMetricAlertOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryMetricAlertResult>;
/**
 * A collection of arguments for invoking getSentryMetricAlert.
 */
export interface GetSentryMetricAlertOutputArgs {
    /**
     * The internal ID for this metric alert.
     */
    internalId: pulumi.Input<string>;
    /**
     * The slug of the organization the metric alert belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slug of the project the metric alert belongs to.
     */
    project: pulumi.Input<string>;
}
