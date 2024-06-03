import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Organization Integration data source. See the [Sentry documentation](https://docs.sentry.io/api/integrations/list-an-organizations-available-integrations/) for more information.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const github = sentry.getSentryOrganizationIntegration({
 *     name: "my-github-organization",
 *     organization: "my-organization",
 *     providerKey: "github",
 * });
 * const slack = sentry.getSentryOrganizationIntegration({
 *     name: "Slack Workspace",
 *     organization: "my-organization",
 *     providerKey: "slack",
 * });
 * ```
 */
export declare function getSentryOrganizationIntegration(args: GetSentryOrganizationIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryOrganizationIntegrationResult>;
/**
 * A collection of arguments for invoking getSentryOrganizationIntegration.
 */
export interface GetSentryOrganizationIntegrationArgs {
    /**
     * The name of the integration.
     */
    name: string;
    /**
     * The slug of the organization.
     */
    organization: string;
    /**
     * Specific integration provider to filter by such as `slack`. See [the list of supported providers](https://docs.sentry.io/product/integrations/).
     */
    providerKey: string;
}
/**
 * A collection of values returned by getSentryOrganizationIntegration.
 */
export interface GetSentryOrganizationIntegrationResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * The internal ID for this organization integration. **Deprecated** Use `id` instead.
     *
     * @deprecated This field is deprecated and will be removed in a future version. Use `id` instead.
     */
    readonly internalId: string;
    /**
     * The name of the integration.
     */
    readonly name: string;
    /**
     * The slug of the organization.
     */
    readonly organization: string;
    /**
     * Specific integration provider to filter by such as `slack`. See [the list of supported providers](https://docs.sentry.io/product/integrations/).
     */
    readonly providerKey: string;
}
/**
 * Sentry Organization Integration data source. See the [Sentry documentation](https://docs.sentry.io/api/integrations/list-an-organizations-available-integrations/) for more information.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const github = sentry.getSentryOrganizationIntegration({
 *     name: "my-github-organization",
 *     organization: "my-organization",
 *     providerKey: "github",
 * });
 * const slack = sentry.getSentryOrganizationIntegration({
 *     name: "Slack Workspace",
 *     organization: "my-organization",
 *     providerKey: "slack",
 * });
 * ```
 */
export declare function getSentryOrganizationIntegrationOutput(args: GetSentryOrganizationIntegrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryOrganizationIntegrationResult>;
/**
 * A collection of arguments for invoking getSentryOrganizationIntegration.
 */
export interface GetSentryOrganizationIntegrationOutputArgs {
    /**
     * The name of the integration.
     */
    name: pulumi.Input<string>;
    /**
     * The slug of the organization.
     */
    organization: pulumi.Input<string>;
    /**
     * Specific integration provider to filter by such as `slack`. See [the list of supported providers](https://docs.sentry.io/product/integrations/).
     */
    providerKey: pulumi.Input<string>;
}