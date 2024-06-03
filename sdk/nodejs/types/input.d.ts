import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export interface SentryDashboardWidget {
    displayType: pulumi.Input<string>;
    /**
     * The ID of this resource.
     */
    id?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    layout: pulumi.Input<inputs.SentryDashboardWidgetLayout>;
    limit?: pulumi.Input<number>;
    queries: pulumi.Input<pulumi.Input<inputs.SentryDashboardWidgetQuery>[]>;
    title: pulumi.Input<string>;
    widgetType?: pulumi.Input<string>;
}
export interface SentryDashboardWidgetLayout {
    h: pulumi.Input<number>;
    minH: pulumi.Input<number>;
    w: pulumi.Input<number>;
    x: pulumi.Input<number>;
    y: pulumi.Input<number>;
}
export interface SentryDashboardWidgetQuery {
    aggregates?: pulumi.Input<pulumi.Input<string>[]>;
    columns?: pulumi.Input<pulumi.Input<string>[]>;
    conditions?: pulumi.Input<string>;
    fieldAliases?: pulumi.Input<pulumi.Input<string>[]>;
    fields?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of this resource.
     */
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orderBy?: pulumi.Input<string>;
}
export interface SentryMetricAlertTrigger {
    actions?: pulumi.Input<pulumi.Input<inputs.SentryMetricAlertTriggerAction>[]>;
    alertThreshold: pulumi.Input<number>;
    /**
     * The ID of this resource.
     */
    id?: pulumi.Input<string>;
    label: pulumi.Input<string>;
    resolveThreshold?: pulumi.Input<number>;
    thresholdType: pulumi.Input<number>;
}
export interface SentryMetricAlertTriggerAction {
    /**
     * The ID of this resource.
     */
    id?: pulumi.Input<string>;
    /**
     * Slack channel ID to avoid rate-limiting, see [here](https://docs.sentry.io/product/integrations/notification-incidents/slack/#rate-limiting-error)
     */
    inputChannelId?: pulumi.Input<string>;
    integrationId?: pulumi.Input<number>;
    targetIdentifier?: pulumi.Input<string>;
    targetType: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
export interface SentryProjectSymbolSourceLayout {
    /**
     * The casing of the symbol source layout. The layout of the folder structure. The options are: `default` - Default (mixed case), `uppercase` - Uppercase, `lowercase` - Lowercase.
     */
    casing: pulumi.Input<string>;
    /**
     * The layout of the folder structure. The options are: `native` - Platform-Specific (SymStore / GDB / LLVM), `symstore` - Microsoft SymStore, `symstoreIndex2` - Microsoft SymStore (with index2.txt), `ssqp` - Microsoft SSQP, `unified` - Unified Symbol Server Layout, `debuginfod` - debuginfod.
     */
    type: pulumi.Input<string>;
}