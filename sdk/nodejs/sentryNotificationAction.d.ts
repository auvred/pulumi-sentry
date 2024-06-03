import * as pulumi from "@pulumi/pulumi";
/**
 * Create a Spike Protection Notification Action. See the [Sentry Documentation](https://docs.sentry.io/api/alerts/create-a-spike-protection-notification-action/) for more information.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const defaultSentryProject = new sentry.SentryProject("defaultSentryProject", {
 *     organization: "my-organization",
 *     teams: [
 *         "my-first-team",
 *         "my-second-team",
 *     ],
 *     platform: "javascript",
 * });
 * // Create a notification action for the project
 * const defaultSentryNotificationAction = new sentry.SentryNotificationAction("defaultSentryNotificationAction", {
 *     organization: defaultSentryProject.organization,
 *     triggerType: "spike-protection",
 *     serviceType: "sentry_notification",
 *     targetIdentifier: "default",
 *     targetDisplay: "default",
 *     projects: [defaultSentryProject.id],
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import sentry:index/sentryNotificationAction:SentryNotificationAction default org-slug/action-id
 * ```
 */
export declare class SentryNotificationAction extends pulumi.CustomResource {
    /**
     * Get an existing SentryNotificationAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryNotificationActionState, opts?: pulumi.CustomResourceOptions): SentryNotificationAction;
    /**
     * Returns true if the given object is an instance of SentryNotificationAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryNotificationAction;
    /**
     * The ID of the integration that is used for sending the notification. Use the `sentry.getSentryOrganizationIntegration` data source to retrieve an integration. Required if `serviceType` is `slack`, `pagerduty` or `opsgenie`.
     */
    readonly integrationId: pulumi.Output<string | undefined>;
    /**
     * The slug of the organization the project belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The list of project slugs that the Notification Action is created for.
     */
    readonly projects: pulumi.Output<string[]>;
    /**
     * The service that is used for sending the notification.
     */
    readonly serviceType: pulumi.Output<string>;
    /**
     * The display name of the target that is used for sending the notification (e.g. Slack channel name). Required if `serviceType` is `slack` or `opsgenie`.
     */
    readonly targetDisplay: pulumi.Output<string | undefined>;
    /**
     * The identifier of the target that is used for sending the notification (e.g. Slack channel ID). Required if `serviceType` is `slack` or `opsgenie`.
     */
    readonly targetIdentifier: pulumi.Output<string | undefined>;
    /**
     * The type of trigger that will activate this action. Valid values are `spike-protection`.
     */
    readonly triggerType: pulumi.Output<string>;
    /**
     * Create a SentryNotificationAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryNotificationActionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryNotificationAction resources.
 */
export interface SentryNotificationActionState {
    /**
     * The ID of the integration that is used for sending the notification. Use the `sentry.getSentryOrganizationIntegration` data source to retrieve an integration. Required if `serviceType` is `slack`, `pagerduty` or `opsgenie`.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The list of project slugs that the Notification Action is created for.
     */
    projects?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The service that is used for sending the notification.
     */
    serviceType?: pulumi.Input<string>;
    /**
     * The display name of the target that is used for sending the notification (e.g. Slack channel name). Required if `serviceType` is `slack` or `opsgenie`.
     */
    targetDisplay?: pulumi.Input<string>;
    /**
     * The identifier of the target that is used for sending the notification (e.g. Slack channel ID). Required if `serviceType` is `slack` or `opsgenie`.
     */
    targetIdentifier?: pulumi.Input<string>;
    /**
     * The type of trigger that will activate this action. Valid values are `spike-protection`.
     */
    triggerType?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryNotificationAction resource.
 */
export interface SentryNotificationActionArgs {
    /**
     * The ID of the integration that is used for sending the notification. Use the `sentry.getSentryOrganizationIntegration` data source to retrieve an integration. Required if `serviceType` is `slack`, `pagerduty` or `opsgenie`.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The list of project slugs that the Notification Action is created for.
     */
    projects: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The service that is used for sending the notification.
     */
    serviceType: pulumi.Input<string>;
    /**
     * The display name of the target that is used for sending the notification (e.g. Slack channel name). Required if `serviceType` is `slack` or `opsgenie`.
     */
    targetDisplay?: pulumi.Input<string>;
    /**
     * The identifier of the target that is used for sending the notification (e.g. Slack channel ID). Required if `serviceType` is `slack` or `opsgenie`.
     */
    targetIdentifier?: pulumi.Input<string>;
    /**
     * The type of trigger that will activate this action. Valid values are `spike-protection`.
     */
    triggerType: pulumi.Input<string>;
}
