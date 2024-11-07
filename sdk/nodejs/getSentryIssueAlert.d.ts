import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Issue Alert data source. See the [Sentry documentation](https://docs.sentry.io/api/alerts/retrieve-an-issue-alert-rule-for-a-project/) for more information.
 */
export declare function getSentryIssueAlert(args: GetSentryIssueAlertArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryIssueAlertResult>;
/**
 * A collection of arguments for invoking getSentryIssueAlert.
 */
export interface GetSentryIssueAlertArgs {
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: string;
    /**
     * The slug of the project the resource belongs to.
     */
    project: string;
}
/**
 * A collection of values returned by getSentryIssueAlert.
 */
export interface GetSentryIssueAlertResult {
    /**
     * Trigger actions when an event is captured by Sentry and `any` or `all` of the specified conditions happen.
     */
    readonly actionMatch: string;
    /**
     * List of actions. In JSON string format.
     */
    readonly actions: string;
    /**
     * List of conditions. In JSON string format.
     */
    readonly conditions: string;
    /**
     * Perform issue alert in a specific environment.
     */
    readonly environment: string;
    /**
     * A string determining which filters need to be true before any actions take place. Required when a value is provided for `filters`.
     */
    readonly filterMatch: string;
    /**
     * A list of filters that determine if a rule fires after the necessary conditions have been met. In JSON string format.
     */
    readonly filters: string;
    /**
     * Perform actions at most once every `X` minutes for this issue.
     */
    readonly frequency: number;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * The issue alert name.
     */
    readonly name: string;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: string;
    /**
     * The ID of the team or user that owns the rule.
     */
    readonly owner: string;
    /**
     * The slug of the project the resource belongs to.
     */
    readonly project: string;
}
/**
 * Sentry Issue Alert data source. See the [Sentry documentation](https://docs.sentry.io/api/alerts/retrieve-an-issue-alert-rule-for-a-project/) for more information.
 */
export declare function getSentryIssueAlertOutput(args: GetSentryIssueAlertOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryIssueAlertResult>;
/**
 * A collection of arguments for invoking getSentryIssueAlert.
 */
export interface GetSentryIssueAlertOutputArgs {
    /**
     * The ID of this resource.
     */
    id: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slug of the project the resource belongs to.
     */
    project: pulumi.Input<string>;
}
