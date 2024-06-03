import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Sentry Metric Alert resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const slack = sentry.getSentryOrganizationIntegration({
 *     organization: sentry_project.main.organization,
 *     providerKey: "slack",
 *     name: "Slack Workspace",
 * });
 * const main = new sentry.SentryMetricAlert("main", {
 *     organization: sentry_project.main.organization,
 *     project: sentry_project.main.id,
 *     dataset: "events",
 *     query: "",
 *     aggregate: "count()",
 *     timeWindow: 60,
 *     thresholdType: 0,
 *     resolveThreshold: 0,
 *     triggers: [
 *         {
 *             actions: [{
 *                 type: "email",
 *                 targetType: "team",
 *                 targetIdentifier: sentry_team.main.team_id,
 *             }],
 *             alertThreshold: 300,
 *             label: "critical",
 *             thresholdType: 0,
 *         },
 *         {
 *             actions: [{
 *                 type: "slack",
 *                 targetType: "specific",
 *                 targetIdentifier: "#slack-channel",
 *                 inputChannelId: "C0XXXXXXXXX",
 *                 integrationId: slack.then(slack => slack.id),
 *             }],
 *             alertThreshold: 300,
 *             label: "critical",
 *             thresholdType: 0,
 *         },
 *         {
 *             alertThreshold: 100,
 *             label: "warning",
 *             thresholdType: 0,
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization, project slugs and rule id from the URL:
 *
 * https://sentry.io/organizations/[org-slug]/projects/[project-slug]/
 *
 * https://sentry.io/organizations/[org-slug]/alerts/rules/details/[rule-id]/
 *
 * or
 *
 * https://sentry.io/organizations/[org-slug]/alerts/metric-rules/[project-slug]/[rule-id]/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryMetricAlert:SentryMetricAlert default org-slug/project-slug/rule-id
 * ```
 */
export declare class SentryMetricAlert extends pulumi.CustomResource {
    /**
     * Get an existing SentryMetricAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryMetricAlertState, opts?: pulumi.CustomResourceOptions): SentryMetricAlert;
    /**
     * Returns true if the given object is an instance of SentryMetricAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryMetricAlert;
    /**
     * The aggregation criteria to apply
     */
    readonly aggregate: pulumi.Output<string>;
    /**
     * An optional int representing the time delta to use as the comparison period, in minutes. Required when using a percentage change threshold
     */
    readonly comparisonDelta: pulumi.Output<number | undefined>;
    /**
     * The Sentry Alert category
     */
    readonly dataset: pulumi.Output<string | undefined>;
    /**
     * Perform Alert rule in a specific environment
     */
    readonly environment: pulumi.Output<string>;
    /**
     * The events type of dataset.
     */
    readonly eventTypes: pulumi.Output<string[] | undefined>;
    /**
     * The internal ID for this metric alert.
     */
    readonly internalId: pulumi.Output<string>;
    /**
     * The metric alert name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The slug of the organization the metric alert belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * Specifies the owner id of this Alert rule
     */
    readonly owner: pulumi.Output<string>;
    /**
     * The slug of the project to create the metric alert for.
     */
    readonly project: pulumi.Output<string>;
    /**
     * The query filter to apply
     */
    readonly query: pulumi.Output<string>;
    /**
     * The value at which the Alert rule resolves
     */
    readonly resolveThreshold: pulumi.Output<number | undefined>;
    /**
     * The type of threshold
     */
    readonly thresholdType: pulumi.Output<number>;
    /**
     * The period to evaluate the Alert rule in minutes
     */
    readonly timeWindow: pulumi.Output<number>;
    readonly triggers: pulumi.Output<outputs.SentryMetricAlertTrigger[]>;
    /**
     * Create a SentryMetricAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryMetricAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryMetricAlert resources.
 */
export interface SentryMetricAlertState {
    /**
     * The aggregation criteria to apply
     */
    aggregate?: pulumi.Input<string>;
    /**
     * An optional int representing the time delta to use as the comparison period, in minutes. Required when using a percentage change threshold
     */
    comparisonDelta?: pulumi.Input<number>;
    /**
     * The Sentry Alert category
     */
    dataset?: pulumi.Input<string>;
    /**
     * Perform Alert rule in a specific environment
     */
    environment?: pulumi.Input<string>;
    /**
     * The events type of dataset.
     */
    eventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The internal ID for this metric alert.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The metric alert name.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the metric alert belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * Specifies the owner id of this Alert rule
     */
    owner?: pulumi.Input<string>;
    /**
     * The slug of the project to create the metric alert for.
     */
    project?: pulumi.Input<string>;
    /**
     * The query filter to apply
     */
    query?: pulumi.Input<string>;
    /**
     * The value at which the Alert rule resolves
     */
    resolveThreshold?: pulumi.Input<number>;
    /**
     * The type of threshold
     */
    thresholdType?: pulumi.Input<number>;
    /**
     * The period to evaluate the Alert rule in minutes
     */
    timeWindow?: pulumi.Input<number>;
    triggers?: pulumi.Input<pulumi.Input<inputs.SentryMetricAlertTrigger>[]>;
}
/**
 * The set of arguments for constructing a SentryMetricAlert resource.
 */
export interface SentryMetricAlertArgs {
    /**
     * The aggregation criteria to apply
     */
    aggregate: pulumi.Input<string>;
    /**
     * An optional int representing the time delta to use as the comparison period, in minutes. Required when using a percentage change threshold
     */
    comparisonDelta?: pulumi.Input<number>;
    /**
     * The Sentry Alert category
     */
    dataset?: pulumi.Input<string>;
    /**
     * Perform Alert rule in a specific environment
     */
    environment?: pulumi.Input<string>;
    /**
     * The events type of dataset.
     */
    eventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The metric alert name.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the metric alert belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * Specifies the owner id of this Alert rule
     */
    owner?: pulumi.Input<string>;
    /**
     * The slug of the project to create the metric alert for.
     */
    project: pulumi.Input<string>;
    /**
     * The query filter to apply
     */
    query: pulumi.Input<string>;
    /**
     * The value at which the Alert rule resolves
     */
    resolveThreshold?: pulumi.Input<number>;
    /**
     * The type of threshold
     */
    thresholdType: pulumi.Input<number>;
    /**
     * The period to evaluate the Alert rule in minutes
     */
    timeWindow: pulumi.Input<number>;
    triggers: pulumi.Input<pulumi.Input<inputs.SentryMetricAlertTrigger>[]>;
}
