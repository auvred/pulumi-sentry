import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ## Import
 *
 * import using the organization, project slugs and rule id from the URL:
 *
 * https://sentry.io/organizations/[org-slug]/alerts/rules/[project-slug]/[rule-id]/details/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryIssueAlert:SentryIssueAlert default org-slug/project-slug/rule-id
 * ```
 */
export declare class SentryIssueAlert extends pulumi.CustomResource {
    /**
     * Get an existing SentryIssueAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryIssueAlertState, opts?: pulumi.CustomResourceOptions): SentryIssueAlert;
    /**
     * Returns true if the given object is an instance of SentryIssueAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryIssueAlert;
    /**
     * Trigger actions when an event is captured by Sentry and `any` or `all` of the specified conditions happen.
     */
    readonly actionMatch: pulumi.Output<string>;
    /**
     * List of actions. In JSON string format.
     */
    readonly actions: pulumi.Output<string>;
    /**
     * List of conditions. In JSON string format.
     */
    readonly conditions: pulumi.Output<string>;
    /**
     * Perform issue alert in a specific environment.
     */
    readonly environment: pulumi.Output<string | undefined>;
    /**
     * A string determining which filters need to be true before any actions take place. Required when a value is provided for `filters`.
     */
    readonly filterMatch: pulumi.Output<string | undefined>;
    /**
     * A list of filters that determine if a rule fires after the necessary conditions have been met. In JSON string format.
     */
    readonly filters: pulumi.Output<string | undefined>;
    /**
     * Perform actions at most once every `X` minutes for this issue.
     */
    readonly frequency: pulumi.Output<number>;
    /**
     * The issue alert name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The ID of the team or user that owns the rule.
     */
    readonly owner: pulumi.Output<string | undefined>;
    /**
     * The slug of the project the resource belongs to.
     */
    readonly project: pulumi.Output<string>;
    /**
     * Create a SentryIssueAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryIssueAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryIssueAlert resources.
 */
export interface SentryIssueAlertState {
    /**
     * Trigger actions when an event is captured by Sentry and `any` or `all` of the specified conditions happen.
     */
    actionMatch?: pulumi.Input<string>;
    /**
     * List of actions. In JSON string format.
     */
    actions?: pulumi.Input<string>;
    /**
     * List of conditions. In JSON string format.
     */
    conditions?: pulumi.Input<string>;
    /**
     * Perform issue alert in a specific environment.
     */
    environment?: pulumi.Input<string>;
    /**
     * A string determining which filters need to be true before any actions take place. Required when a value is provided for `filters`.
     */
    filterMatch?: pulumi.Input<string>;
    /**
     * A list of filters that determine if a rule fires after the necessary conditions have been met. In JSON string format.
     */
    filters?: pulumi.Input<string>;
    /**
     * Perform actions at most once every `X` minutes for this issue.
     */
    frequency?: pulumi.Input<number>;
    /**
     * The issue alert name.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The ID of the team or user that owns the rule.
     */
    owner?: pulumi.Input<string>;
    /**
     * The slug of the project the resource belongs to.
     */
    project?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryIssueAlert resource.
 */
export interface SentryIssueAlertArgs {
    /**
     * Trigger actions when an event is captured by Sentry and `any` or `all` of the specified conditions happen.
     */
    actionMatch: pulumi.Input<string>;
    /**
     * List of actions. In JSON string format.
     */
    actions: pulumi.Input<string>;
    /**
     * List of conditions. In JSON string format.
     */
    conditions: pulumi.Input<string>;
    /**
     * Perform issue alert in a specific environment.
     */
    environment?: pulumi.Input<string>;
    /**
     * A string determining which filters need to be true before any actions take place. Required when a value is provided for `filters`.
     */
    filterMatch?: pulumi.Input<string>;
    /**
     * A list of filters that determine if a rule fires after the necessary conditions have been met. In JSON string format.
     */
    filters?: pulumi.Input<string>;
    /**
     * Perform actions at most once every `X` minutes for this issue.
     */
    frequency: pulumi.Input<number>;
    /**
     * The issue alert name.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The ID of the team or user that owns the rule.
     */
    owner?: pulumi.Input<string>;
    /**
     * The slug of the project the resource belongs to.
     */
    project: pulumi.Input<string>;
}
