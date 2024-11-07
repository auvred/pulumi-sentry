import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Project Inbound Data Filter resource. This resource is used to create and manage inbound data filters for a project. For more information on what filters are available, see the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const _default = new sentry.SentryProject("default", {
 *     organization: "my-organization",
 *     teams: [
 *         "my-first-team",
 *         "my-second-team",
 *     ],
 *     platform: "javascript",
 * });
 * // Create an inbound data filter for a project
 * const testSentryProjectInboundDataFilter = new sentry.SentryProjectInboundDataFilter("testSentryProjectInboundDataFilter", {
 *     organization: _default.organization,
 *     project: _default.id,
 *     filterId: "browser-extensions",
 *     active: true,
 * });
 * // Create an inbound data filter with subfilters. Only applicable to the
 * // `legacy-browser` filter.
 * const testIndex_sentryProjectInboundDataFilterSentryProjectInboundDataFilter = new sentry.SentryProjectInboundDataFilter("testIndex/sentryProjectInboundDataFilterSentryProjectInboundDataFilter", {
 *     organization: _default.organization,
 *     project: _default.id,
 *     filterId: "legacy-browser",
 *     subfilters: [
 *         "ie_pre_9",
 *         "ie9",
 *     ],
 * });
 * ```
 */
export declare class SentryProjectInboundDataFilter extends pulumi.CustomResource {
    /**
     * Get an existing SentryProjectInboundDataFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryProjectInboundDataFilterState, opts?: pulumi.CustomResourceOptions): SentryProjectInboundDataFilter;
    /**
     * Returns true if the given object is an instance of SentryProjectInboundDataFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryProjectInboundDataFilter;
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off.
     */
    readonly active: pulumi.Output<boolean | undefined>;
    /**
     * The type of filter toggle to update. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available filters.
     */
    readonly filterId: pulumi.Output<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The slug of the project to create the filter for.
     */
    readonly project: pulumi.Output<string>;
    /**
     * Specifies which legacy browser filters should be active. Anything excluded from the list will be disabled. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available subfilters.
     */
    readonly subfilters: pulumi.Output<string[] | undefined>;
    /**
     * Create a SentryProjectInboundDataFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryProjectInboundDataFilterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryProjectInboundDataFilter resources.
 */
export interface SentryProjectInboundDataFilterState {
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off.
     */
    active?: pulumi.Input<boolean>;
    /**
     * The type of filter toggle to update. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available filters.
     */
    filterId?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The slug of the project to create the filter for.
     */
    project?: pulumi.Input<string>;
    /**
     * Specifies which legacy browser filters should be active. Anything excluded from the list will be disabled. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available subfilters.
     */
    subfilters?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a SentryProjectInboundDataFilter resource.
 */
export interface SentryProjectInboundDataFilterArgs {
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off.
     */
    active?: pulumi.Input<boolean>;
    /**
     * The type of filter toggle to update. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available filters.
     */
    filterId: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slug of the project to create the filter for.
     */
    project: pulumi.Input<string>;
    /**
     * Specifies which legacy browser filters should be active. Anything excluded from the list will be disabled. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available subfilters.
     */
    subfilters?: pulumi.Input<pulumi.Input<string>[]>;
}
