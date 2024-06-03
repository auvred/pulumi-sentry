import * as pulumi from "@pulumi/pulumi";
/**
 * Manage a PagerDuty service integration.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const pagerduty = sentry.getSentryOrganizationIntegration({
 *     organization: "my-organization",
 *     providerKey: "pagerduty",
 *     name: "my-pagerduty-organization",
 * });
 * // Associate a PagerDuty service and integration key with a Sentry PagerDuty integration
 * const test = new sentry.SentryIntegrationPagerDuty("test", {
 *     organization: "my-organization",
 *     integrationId: pagerduty.then(pagerduty => pagerduty.id),
 *     service: "my-pagerduty-service",
 *     integrationKey: "my-pagerduty-integration-key",
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization slug from the URL:
 *
 * https://sentry.io/api/0/organizations/[org-slug]/integrations/
 *
 * [integration-id] is the top-level `id` of the PagerDuty organization integration
 *
 * [service-id] is the `id` of the service_table record to import under the configData property
 *
 * ```sh
 * $ pulumi import sentry:index/sentryIntegrationPagerDuty:SentryIntegrationPagerDuty default org-slug/integration-id/service-id
 * ```
 */
export declare class SentryIntegrationPagerDuty extends pulumi.CustomResource {
    /**
     * Get an existing SentryIntegrationPagerDuty resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryIntegrationPagerDutyState, opts?: pulumi.CustomResourceOptions): SentryIntegrationPagerDuty;
    /**
     * Returns true if the given object is an instance of SentryIntegrationPagerDuty.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryIntegrationPagerDuty;
    /**
     * The ID of the PagerDuty integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/pagerduty/<integration-id>/` or use the `sentry.getSentryOrganizationIntegration` data source.
     */
    readonly integrationId: pulumi.Output<string>;
    /**
     * The integration key of the PagerDuty service.
     */
    readonly integrationKey: pulumi.Output<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The name of the PagerDuty service.
     */
    readonly service: pulumi.Output<string>;
    /**
     * Create a SentryIntegrationPagerDuty resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryIntegrationPagerDutyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryIntegrationPagerDuty resources.
 */
export interface SentryIntegrationPagerDutyState {
    /**
     * The ID of the PagerDuty integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/pagerduty/<integration-id>/` or use the `sentry.getSentryOrganizationIntegration` data source.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The integration key of the PagerDuty service.
     */
    integrationKey?: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The name of the PagerDuty service.
     */
    service?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryIntegrationPagerDuty resource.
 */
export interface SentryIntegrationPagerDutyArgs {
    /**
     * The ID of the PagerDuty integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/pagerduty/<integration-id>/` or use the `sentry.getSentryOrganizationIntegration` data source.
     */
    integrationId: pulumi.Input<string>;
    /**
     * The integration key of the PagerDuty service.
     */
    integrationKey: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The name of the PagerDuty service.
     */
    service: pulumi.Input<string>;
}
