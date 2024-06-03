"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSentryDashboardOutput = exports.getSentryDashboard = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * ## Example Usage
 */
function getSentryDashboard(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sentry:index/getSentryDashboard:getSentryDashboard", {
        "internalId": args.internalId,
        "organization": args.organization,
    }, opts);
}
exports.getSentryDashboard = getSentryDashboard;
/**
 * ## Example Usage
 */
function getSentryDashboardOutput(args, opts) {
    return pulumi.output(args).apply((a) => getSentryDashboard(a, opts));
}
exports.getSentryDashboardOutput = getSentryDashboardOutput;
//# sourceMappingURL=getSentryDashboard.js.map