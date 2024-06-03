import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Sentry Dashboard resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const main = new sentry.SentryDashboard("main", {
 *     organization: data.sentry_organization.main.id,
 *     title: "Test dashboard",
 *     widgets: [
 *         {
 *             title: "Number of Errors",
 *             displayType: "big_number",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: ["count()"],
 *                 aggregates: ["count()"],
 *                 conditions: "!event.type:transaction",
 *                 orderBy: "count()",
 *             }],
 *             layout: {
 *                 x: 0,
 *                 y: 0,
 *                 w: 1,
 *                 h: 1,
 *                 minH: 1,
 *             },
 *         },
 *         {
 *             title: "Number of Issues",
 *             displayType: "big_number",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: ["count_unique(issue)"],
 *                 aggregates: ["count_unique(issue)"],
 *                 conditions: "!event.type:transaction",
 *                 orderBy: "count_unique(issue)",
 *             }],
 *             layout: {
 *                 x: 1,
 *                 y: 0,
 *                 w: 1,
 *                 h: 1,
 *                 minH: 1,
 *             },
 *         },
 *         {
 *             title: "Events",
 *             displayType: "line",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 name: "Events",
 *                 fields: ["count()"],
 *                 aggregates: ["count()"],
 *                 conditions: "!event.type:transaction",
 *                 orderBy: "count()",
 *             }],
 *             layout: {
 *                 x: 2,
 *                 y: 0,
 *                 w: 4,
 *                 h: 2,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Affected Users",
 *             displayType: "line",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [
 *                 {
 *                     name: "Known Users",
 *                     fields: ["count_unique(user)"],
 *                     aggregates: ["count_unique(user)"],
 *                     conditions: "has:user.email !event.type:transaction",
 *                     orderBy: "count_unique(user)",
 *                 },
 *                 {
 *                     name: "Anonymous Users",
 *                     fields: ["count_unique(user)"],
 *                     aggregates: ["count_unique(user)"],
 *                     conditions: "!has:user.email !event.type:transaction",
 *                     orderBy: "count_unique(user)",
 *                 },
 *             ],
 *             layout: {
 *                 x: 1,
 *                 y: 2,
 *                 w: 1,
 *                 h: 2,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Handled vs. Unhandled",
 *             displayType: "line",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [
 *                 {
 *                     name: "Handled",
 *                     fields: ["count()"],
 *                     aggregates: ["count()"],
 *                     conditions: "error.handled:true",
 *                     orderBy: "count()",
 *                 },
 *                 {
 *                     name: "Unhandled",
 *                     fields: ["count()"],
 *                     aggregates: ["count()"],
 *                     conditions: "error.handled:false",
 *                     orderBy: "count()",
 *                 },
 *             ],
 *             layout: {
 *                 x: 0,
 *                 y: 2,
 *                 w: 1,
 *                 h: 2,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Errors by Country",
 *             displayType: "table",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: [
 *                     "geo.country_code",
 *                     "geo.region",
 *                     "count()",
 *                 ],
 *                 aggregates: ["count()"],
 *                 conditions: "!event.type:transaction has:geo.country_code",
 *                 orderBy: "count()",
 *             }],
 *             layout: {
 *                 x: 4,
 *                 y: 6,
 *                 w: 2,
 *                 h: 4,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "High Throughput Transactions",
 *             displayType: "table",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: [
 *                     "count()",
 *                     "transaction",
 *                 ],
 *                 aggregates: ["count()"],
 *                 columns: ["transaction"],
 *                 conditions: "!event.type:error",
 *                 orderBy: "-count()",
 *             }],
 *             layout: {
 *                 x: 0,
 *                 y: 6,
 *                 w: 2,
 *                 h: 4,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Errors by Browser",
 *             displayType: "table",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: [
 *                     "browser.name",
 *                     "count()",
 *                 ],
 *                 aggregates: ["count()"],
 *                 columns: ["browser.name"],
 *                 conditions: "!event.type:transaction has:browser.name",
 *                 orderBy: "-count()",
 *             }],
 *             layout: {
 *                 x: 5,
 *                 y: 2,
 *                 w: 1,
 *                 h: 4,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Overall User Misery",
 *             displayType: "big_number",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: ["user_misery(300)"],
 *                 aggregates: ["user_misery(300)"],
 *             }],
 *             layout: {
 *                 x: 0,
 *                 y: 1,
 *                 w: 1,
 *                 h: 1,
 *                 minH: 1,
 *             },
 *         },
 *         {
 *             title: "Overall Apdex",
 *             displayType: "big_number",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: ["apdex(300)"],
 *                 aggregates: ["apdex(300)"],
 *             }],
 *             layout: {
 *                 x: 1,
 *                 y: 1,
 *                 w: 1,
 *                 h: 1,
 *                 minH: 1,
 *             },
 *         },
 *         {
 *             title: "High Throughput Transactions",
 *             displayType: "top_n",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: [
 *                     "transaction",
 *                     "count()",
 *                 ],
 *                 aggregates: ["count()"],
 *                 columns: ["transaction"],
 *                 conditions: "!event.type:error",
 *                 orderBy: "-count()",
 *             }],
 *             layout: {
 *                 x: 0,
 *                 y: 4,
 *                 w: 2,
 *                 h: 2,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Issues Assigned to Me or My Teams",
 *             displayType: "table",
 *             interval: "5m",
 *             widgetType: "issue",
 *             queries: [{
 *                 fields: [
 *                     "assignee",
 *                     "issue",
 *                     "title",
 *                 ],
 *                 columns: [
 *                     "assignee",
 *                     "issue",
 *                     "title",
 *                 ],
 *                 conditions: "assigned_or_suggested:me is:unresolved",
 *                 orderBy: "priority",
 *             }],
 *             layout: {
 *                 x: 2,
 *                 y: 2,
 *                 w: 2,
 *                 h: 4,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Transactions Ordered by Misery",
 *             displayType: "table",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: [
 *                     "transaction",
 *                     "user_misery(300)",
 *                 ],
 *                 aggregates: ["user_misery(300)"],
 *                 columns: ["transaction"],
 *                 orderBy: "-user_misery(300)",
 *             }],
 *             layout: {
 *                 x: 2,
 *                 y: 6,
 *                 w: 2,
 *                 h: 4,
 *                 minH: 2,
 *             },
 *         },
 *         {
 *             title: "Errors by Browser Over Time",
 *             displayType: "top_n",
 *             interval: "5m",
 *             widgetType: "discover",
 *             queries: [{
 *                 fields: [
 *                     "browser.name",
 *                     "count()",
 *                 ],
 *                 aggregates: ["count()"],
 *                 columns: ["browser.name"],
 *                 conditions: "event.type:error has:browser.name",
 *                 orderBy: "-count()",
 *             }],
 *             layout: {
 *                 x: 4,
 *                 y: 2,
 *                 w: 1,
 *                 h: 4,
 *                 minH: 2,
 *             },
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the dashboard id from the URL:
 *
 * https://sentry.io/dashboard/[dashboard-id]
 *
 * ```sh
 * $ pulumi import sentry:index/sentryDashboard:SentryDashboard default org-slug/dashboard-id
 * ```
 */
export declare class SentryDashboard extends pulumi.CustomResource {
    /**
     * Get an existing SentryDashboard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryDashboardState, opts?: pulumi.CustomResourceOptions): SentryDashboard;
    /**
     * Returns true if the given object is an instance of SentryDashboard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryDashboard;
    /**
     * The internal ID for this dashboard.
     */
    readonly internalId: pulumi.Output<string>;
    /**
     * The slug of the organization the dashboard belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * Dashboard title.
     */
    readonly title: pulumi.Output<string>;
    /**
     * Dashboard widgets.
     */
    readonly widgets: pulumi.Output<outputs.SentryDashboardWidget[] | undefined>;
    /**
     * Create a SentryDashboard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryDashboardArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryDashboard resources.
 */
export interface SentryDashboardState {
    /**
     * The internal ID for this dashboard.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The slug of the organization the dashboard belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * Dashboard title.
     */
    title?: pulumi.Input<string>;
    /**
     * Dashboard widgets.
     */
    widgets?: pulumi.Input<pulumi.Input<inputs.SentryDashboardWidget>[]>;
}
/**
 * The set of arguments for constructing a SentryDashboard resource.
 */
export interface SentryDashboardArgs {
    /**
     * The slug of the organization the dashboard belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * Dashboard title.
     */
    title: pulumi.Input<string>;
    /**
     * Dashboard widgets.
     */
    widgets?: pulumi.Input<pulumi.Input<inputs.SentryDashboardWidget>[]>;
}