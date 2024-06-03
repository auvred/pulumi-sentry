// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package sentry

import (
	"context"
	"reflect"

	"errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumiverse/pulumi-sentry/sdk/go/sentry/internal"
)

// Sentry Team Member resource.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//	"github.com/pulumiverse/pulumi-sentry/sdk/go/sentry"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			// Add a member to a team
//			defaultSentryOrganizationMember, err := sentry.NewSentryOrganizationMember(ctx, "defaultSentryOrganizationMember", &sentry.SentryOrganizationMemberArgs{
//				Organization: pulumi.String("my-organization"),
//				Email:        pulumi.String("test@example.com"),
//				Role:         pulumi.String("member"),
//			})
//			if err != nil {
//				return err
//			}
//			defaultSentryTeam, err := sentry.NewSentryTeam(ctx, "defaultSentryTeam", &sentry.SentryTeamArgs{
//				Organization: pulumi.String("my-organization"),
//				Slug:         pulumi.String("my-team"),
//			})
//			if err != nil {
//				return err
//			}
//			_, err = sentry.NewSentryTeamMember(ctx, "defaultSentryTeamMember", &sentry.SentryTeamMemberArgs{
//				Organization: pulumi.String("my-organization"),
//				Team:         defaultSentryTeam.ID(),
//				MemberId:     defaultSentryOrganizationMember.InternalId,
//			})
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
//
// ## Import
//
// import using the member ID and team slug from the URL:
//
// https://[org-slug].sentry.io/settings/teams/[team-slug]/members/
//
// https://[org-slug].sentry.io/settings/members/[member-id]/
//
// ```sh
// $ pulumi import sentry:index/sentryTeamMember:SentryTeamMember default org-slug/team-slug/member-id
// ```
type SentryTeamMember struct {
	pulumi.CustomResourceState

	// The effective role of the member in the team. This represents the highest role, determined by comparing the lower role assigned by the member's organizational role with the role assigned by the member's team role.
	EffectiveRole pulumi.StringOutput `pulumi:"effectiveRole"`
	// The ID of the member to add to the team.
	MemberId pulumi.StringOutput `pulumi:"memberId"`
	// The slug of the organization the team should be created for.
	Organization pulumi.StringOutput `pulumi:"organization"`
	// The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
	Role pulumi.StringPtrOutput `pulumi:"role"`
	// The slug of the team to add the member to.
	Team pulumi.StringOutput `pulumi:"team"`
}

// NewSentryTeamMember registers a new resource with the given unique name, arguments, and options.
func NewSentryTeamMember(ctx *pulumi.Context,
	name string, args *SentryTeamMemberArgs, opts ...pulumi.ResourceOption) (*SentryTeamMember, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.MemberId == nil {
		return nil, errors.New("invalid value for required argument 'MemberId'")
	}
	if args.Organization == nil {
		return nil, errors.New("invalid value for required argument 'Organization'")
	}
	if args.Team == nil {
		return nil, errors.New("invalid value for required argument 'Team'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource SentryTeamMember
	err := ctx.RegisterResource("sentry:index/sentryTeamMember:SentryTeamMember", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSentryTeamMember gets an existing SentryTeamMember resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSentryTeamMember(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SentryTeamMemberState, opts ...pulumi.ResourceOption) (*SentryTeamMember, error) {
	var resource SentryTeamMember
	err := ctx.ReadResource("sentry:index/sentryTeamMember:SentryTeamMember", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SentryTeamMember resources.
type sentryTeamMemberState struct {
	// The effective role of the member in the team. This represents the highest role, determined by comparing the lower role assigned by the member's organizational role with the role assigned by the member's team role.
	EffectiveRole *string `pulumi:"effectiveRole"`
	// The ID of the member to add to the team.
	MemberId *string `pulumi:"memberId"`
	// The slug of the organization the team should be created for.
	Organization *string `pulumi:"organization"`
	// The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
	Role *string `pulumi:"role"`
	// The slug of the team to add the member to.
	Team *string `pulumi:"team"`
}

type SentryTeamMemberState struct {
	// The effective role of the member in the team. This represents the highest role, determined by comparing the lower role assigned by the member's organizational role with the role assigned by the member's team role.
	EffectiveRole pulumi.StringPtrInput
	// The ID of the member to add to the team.
	MemberId pulumi.StringPtrInput
	// The slug of the organization the team should be created for.
	Organization pulumi.StringPtrInput
	// The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
	Role pulumi.StringPtrInput
	// The slug of the team to add the member to.
	Team pulumi.StringPtrInput
}

func (SentryTeamMemberState) ElementType() reflect.Type {
	return reflect.TypeOf((*sentryTeamMemberState)(nil)).Elem()
}

type sentryTeamMemberArgs struct {
	// The ID of the member to add to the team.
	MemberId string `pulumi:"memberId"`
	// The slug of the organization the team should be created for.
	Organization string `pulumi:"organization"`
	// The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
	Role *string `pulumi:"role"`
	// The slug of the team to add the member to.
	Team string `pulumi:"team"`
}

// The set of arguments for constructing a SentryTeamMember resource.
type SentryTeamMemberArgs struct {
	// The ID of the member to add to the team.
	MemberId pulumi.StringInput
	// The slug of the organization the team should be created for.
	Organization pulumi.StringInput
	// The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
	Role pulumi.StringPtrInput
	// The slug of the team to add the member to.
	Team pulumi.StringInput
}

func (SentryTeamMemberArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sentryTeamMemberArgs)(nil)).Elem()
}

type SentryTeamMemberInput interface {
	pulumi.Input

	ToSentryTeamMemberOutput() SentryTeamMemberOutput
	ToSentryTeamMemberOutputWithContext(ctx context.Context) SentryTeamMemberOutput
}

func (*SentryTeamMember) ElementType() reflect.Type {
	return reflect.TypeOf((**SentryTeamMember)(nil)).Elem()
}

func (i *SentryTeamMember) ToSentryTeamMemberOutput() SentryTeamMemberOutput {
	return i.ToSentryTeamMemberOutputWithContext(context.Background())
}

func (i *SentryTeamMember) ToSentryTeamMemberOutputWithContext(ctx context.Context) SentryTeamMemberOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SentryTeamMemberOutput)
}

// SentryTeamMemberArrayInput is an input type that accepts SentryTeamMemberArray and SentryTeamMemberArrayOutput values.
// You can construct a concrete instance of `SentryTeamMemberArrayInput` via:
//
//	SentryTeamMemberArray{ SentryTeamMemberArgs{...} }
type SentryTeamMemberArrayInput interface {
	pulumi.Input

	ToSentryTeamMemberArrayOutput() SentryTeamMemberArrayOutput
	ToSentryTeamMemberArrayOutputWithContext(context.Context) SentryTeamMemberArrayOutput
}

type SentryTeamMemberArray []SentryTeamMemberInput

func (SentryTeamMemberArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*SentryTeamMember)(nil)).Elem()
}

func (i SentryTeamMemberArray) ToSentryTeamMemberArrayOutput() SentryTeamMemberArrayOutput {
	return i.ToSentryTeamMemberArrayOutputWithContext(context.Background())
}

func (i SentryTeamMemberArray) ToSentryTeamMemberArrayOutputWithContext(ctx context.Context) SentryTeamMemberArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SentryTeamMemberArrayOutput)
}

// SentryTeamMemberMapInput is an input type that accepts SentryTeamMemberMap and SentryTeamMemberMapOutput values.
// You can construct a concrete instance of `SentryTeamMemberMapInput` via:
//
//	SentryTeamMemberMap{ "key": SentryTeamMemberArgs{...} }
type SentryTeamMemberMapInput interface {
	pulumi.Input

	ToSentryTeamMemberMapOutput() SentryTeamMemberMapOutput
	ToSentryTeamMemberMapOutputWithContext(context.Context) SentryTeamMemberMapOutput
}

type SentryTeamMemberMap map[string]SentryTeamMemberInput

func (SentryTeamMemberMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*SentryTeamMember)(nil)).Elem()
}

func (i SentryTeamMemberMap) ToSentryTeamMemberMapOutput() SentryTeamMemberMapOutput {
	return i.ToSentryTeamMemberMapOutputWithContext(context.Background())
}

func (i SentryTeamMemberMap) ToSentryTeamMemberMapOutputWithContext(ctx context.Context) SentryTeamMemberMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SentryTeamMemberMapOutput)
}

type SentryTeamMemberOutput struct{ *pulumi.OutputState }

func (SentryTeamMemberOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**SentryTeamMember)(nil)).Elem()
}

func (o SentryTeamMemberOutput) ToSentryTeamMemberOutput() SentryTeamMemberOutput {
	return o
}

func (o SentryTeamMemberOutput) ToSentryTeamMemberOutputWithContext(ctx context.Context) SentryTeamMemberOutput {
	return o
}

// The effective role of the member in the team. This represents the highest role, determined by comparing the lower role assigned by the member's organizational role with the role assigned by the member's team role.
func (o SentryTeamMemberOutput) EffectiveRole() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryTeamMember) pulumi.StringOutput { return v.EffectiveRole }).(pulumi.StringOutput)
}

// The ID of the member to add to the team.
func (o SentryTeamMemberOutput) MemberId() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryTeamMember) pulumi.StringOutput { return v.MemberId }).(pulumi.StringOutput)
}

// The slug of the organization the team should be created for.
func (o SentryTeamMemberOutput) Organization() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryTeamMember) pulumi.StringOutput { return v.Organization }).(pulumi.StringOutput)
}

// The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
func (o SentryTeamMemberOutput) Role() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SentryTeamMember) pulumi.StringPtrOutput { return v.Role }).(pulumi.StringPtrOutput)
}

// The slug of the team to add the member to.
func (o SentryTeamMemberOutput) Team() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryTeamMember) pulumi.StringOutput { return v.Team }).(pulumi.StringOutput)
}

type SentryTeamMemberArrayOutput struct{ *pulumi.OutputState }

func (SentryTeamMemberArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*SentryTeamMember)(nil)).Elem()
}

func (o SentryTeamMemberArrayOutput) ToSentryTeamMemberArrayOutput() SentryTeamMemberArrayOutput {
	return o
}

func (o SentryTeamMemberArrayOutput) ToSentryTeamMemberArrayOutputWithContext(ctx context.Context) SentryTeamMemberArrayOutput {
	return o
}

func (o SentryTeamMemberArrayOutput) Index(i pulumi.IntInput) SentryTeamMemberOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *SentryTeamMember {
		return vs[0].([]*SentryTeamMember)[vs[1].(int)]
	}).(SentryTeamMemberOutput)
}

type SentryTeamMemberMapOutput struct{ *pulumi.OutputState }

func (SentryTeamMemberMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*SentryTeamMember)(nil)).Elem()
}

func (o SentryTeamMemberMapOutput) ToSentryTeamMemberMapOutput() SentryTeamMemberMapOutput {
	return o
}

func (o SentryTeamMemberMapOutput) ToSentryTeamMemberMapOutputWithContext(ctx context.Context) SentryTeamMemberMapOutput {
	return o
}

func (o SentryTeamMemberMapOutput) MapIndex(k pulumi.StringInput) SentryTeamMemberOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *SentryTeamMember {
		return vs[0].(map[string]*SentryTeamMember)[vs[1].(string)]
	}).(SentryTeamMemberOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*SentryTeamMemberInput)(nil)).Elem(), &SentryTeamMember{})
	pulumi.RegisterInputType(reflect.TypeOf((*SentryTeamMemberArrayInput)(nil)).Elem(), SentryTeamMemberArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*SentryTeamMemberMapInput)(nil)).Elem(), SentryTeamMemberMap{})
	pulumi.RegisterOutputType(SentryTeamMemberOutput{})
	pulumi.RegisterOutputType(SentryTeamMemberArrayOutput{})
	pulumi.RegisterOutputType(SentryTeamMemberMapOutput{})
}