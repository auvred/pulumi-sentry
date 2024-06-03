import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 */
export declare function getSentryDashboard(args: GetSentryDashboardArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryDashboardResult>;
/**
 * A collection of arguments for invoking getSentryDashboard.
 */
export interface GetSentryDashboardArgs {
    /**
     * The internal ID for this dashboard.
     */
    internalId: string;
    /**
     * The slug of the organization the dashboard belongs to.
     */
    organization: string;
}
/**
 * A collection of values returned by getSentryDashboard.
 */
export interface GetSentryDashboardResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The internal ID for this dashboard.
     */
    readonly internalId: string;
    /**
     * The slug of the organization the dashboard belongs to.
     */
    readonly organization: string;
    /**
     * Dashboard title.
     */
    readonly title: string;
    /**
     * Dashboard widgets.
     */
    readonly widgets: outputs.GetSentryDashboardWidget[];
}
/**
 * ## Example Usage
 */
export declare function getSentryDashboardOutput(args: GetSentryDashboardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryDashboardResult>;
/**
 * A collection of arguments for invoking getSentryDashboard.
 */
export interface GetSentryDashboardOutputArgs {
    /**
     * The internal ID for this dashboard.
     */
    internalId: pulumi.Input<string>;
    /**
     * The slug of the organization the dashboard belongs to.
     */
    organization: pulumi.Input<string>;
}