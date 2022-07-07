// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package sentry

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type SentryDefaultKey struct {
	pulumi.CustomResourceState

	DsnCsp    pulumi.StringOutput `pulumi:"dsnCsp"`
	DsnPublic pulumi.StringOutput `pulumi:"dsnPublic"`
	DsnSecret pulumi.StringOutput `pulumi:"dsnSecret"`
	IsActive  pulumi.BoolOutput   `pulumi:"isActive"`
	// The name of the key
	Name pulumi.StringOutput `pulumi:"name"`
	// The slug of the organization the key should be created for
	Organization pulumi.StringOutput `pulumi:"organization"`
	// The slug of the project the key should be created for
	Project         pulumi.StringOutput `pulumi:"project"`
	ProjectId       pulumi.IntOutput    `pulumi:"projectId"`
	Public          pulumi.StringOutput `pulumi:"public"`
	RateLimitCount  pulumi.IntOutput    `pulumi:"rateLimitCount"`
	RateLimitWindow pulumi.IntOutput    `pulumi:"rateLimitWindow"`
	Secret          pulumi.StringOutput `pulumi:"secret"`
}

// NewSentryDefaultKey registers a new resource with the given unique name, arguments, and options.
func NewSentryDefaultKey(ctx *pulumi.Context,
	name string, args *SentryDefaultKeyArgs, opts ...pulumi.ResourceOption) (*SentryDefaultKey, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Organization == nil {
		return nil, errors.New("invalid value for required argument 'Organization'")
	}
	if args.Project == nil {
		return nil, errors.New("invalid value for required argument 'Project'")
	}
	secrets := pulumi.AdditionalSecretOutputs([]string{
		"dsnSecret",
		"secret",
	})
	opts = append(opts, secrets)
	opts = pkgResourceDefaultOpts(opts)
	var resource SentryDefaultKey
	err := ctx.RegisterResource("sentry:index/sentryDefaultKey:SentryDefaultKey", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSentryDefaultKey gets an existing SentryDefaultKey resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSentryDefaultKey(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SentryDefaultKeyState, opts ...pulumi.ResourceOption) (*SentryDefaultKey, error) {
	var resource SentryDefaultKey
	err := ctx.ReadResource("sentry:index/sentryDefaultKey:SentryDefaultKey", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SentryDefaultKey resources.
type sentryDefaultKeyState struct {
	DsnCsp    *string `pulumi:"dsnCsp"`
	DsnPublic *string `pulumi:"dsnPublic"`
	DsnSecret *string `pulumi:"dsnSecret"`
	IsActive  *bool   `pulumi:"isActive"`
	// The name of the key
	Name *string `pulumi:"name"`
	// The slug of the organization the key should be created for
	Organization *string `pulumi:"organization"`
	// The slug of the project the key should be created for
	Project         *string `pulumi:"project"`
	ProjectId       *int    `pulumi:"projectId"`
	Public          *string `pulumi:"public"`
	RateLimitCount  *int    `pulumi:"rateLimitCount"`
	RateLimitWindow *int    `pulumi:"rateLimitWindow"`
	Secret          *string `pulumi:"secret"`
}

type SentryDefaultKeyState struct {
	DsnCsp    pulumi.StringPtrInput
	DsnPublic pulumi.StringPtrInput
	DsnSecret pulumi.StringPtrInput
	IsActive  pulumi.BoolPtrInput
	// The name of the key
	Name pulumi.StringPtrInput
	// The slug of the organization the key should be created for
	Organization pulumi.StringPtrInput
	// The slug of the project the key should be created for
	Project         pulumi.StringPtrInput
	ProjectId       pulumi.IntPtrInput
	Public          pulumi.StringPtrInput
	RateLimitCount  pulumi.IntPtrInput
	RateLimitWindow pulumi.IntPtrInput
	Secret          pulumi.StringPtrInput
}

func (SentryDefaultKeyState) ElementType() reflect.Type {
	return reflect.TypeOf((*sentryDefaultKeyState)(nil)).Elem()
}

type sentryDefaultKeyArgs struct {
	// The name of the key
	Name *string `pulumi:"name"`
	// The slug of the organization the key should be created for
	Organization string `pulumi:"organization"`
	// The slug of the project the key should be created for
	Project         string `pulumi:"project"`
	RateLimitCount  *int   `pulumi:"rateLimitCount"`
	RateLimitWindow *int   `pulumi:"rateLimitWindow"`
}

// The set of arguments for constructing a SentryDefaultKey resource.
type SentryDefaultKeyArgs struct {
	// The name of the key
	Name pulumi.StringPtrInput
	// The slug of the organization the key should be created for
	Organization pulumi.StringInput
	// The slug of the project the key should be created for
	Project         pulumi.StringInput
	RateLimitCount  pulumi.IntPtrInput
	RateLimitWindow pulumi.IntPtrInput
}

func (SentryDefaultKeyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sentryDefaultKeyArgs)(nil)).Elem()
}

type SentryDefaultKeyInput interface {
	pulumi.Input

	ToSentryDefaultKeyOutput() SentryDefaultKeyOutput
	ToSentryDefaultKeyOutputWithContext(ctx context.Context) SentryDefaultKeyOutput
}

func (*SentryDefaultKey) ElementType() reflect.Type {
	return reflect.TypeOf((**SentryDefaultKey)(nil)).Elem()
}

func (i *SentryDefaultKey) ToSentryDefaultKeyOutput() SentryDefaultKeyOutput {
	return i.ToSentryDefaultKeyOutputWithContext(context.Background())
}

func (i *SentryDefaultKey) ToSentryDefaultKeyOutputWithContext(ctx context.Context) SentryDefaultKeyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SentryDefaultKeyOutput)
}

// SentryDefaultKeyArrayInput is an input type that accepts SentryDefaultKeyArray and SentryDefaultKeyArrayOutput values.
// You can construct a concrete instance of `SentryDefaultKeyArrayInput` via:
//
//          SentryDefaultKeyArray{ SentryDefaultKeyArgs{...} }
type SentryDefaultKeyArrayInput interface {
	pulumi.Input

	ToSentryDefaultKeyArrayOutput() SentryDefaultKeyArrayOutput
	ToSentryDefaultKeyArrayOutputWithContext(context.Context) SentryDefaultKeyArrayOutput
}

type SentryDefaultKeyArray []SentryDefaultKeyInput

func (SentryDefaultKeyArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*SentryDefaultKey)(nil)).Elem()
}

func (i SentryDefaultKeyArray) ToSentryDefaultKeyArrayOutput() SentryDefaultKeyArrayOutput {
	return i.ToSentryDefaultKeyArrayOutputWithContext(context.Background())
}

func (i SentryDefaultKeyArray) ToSentryDefaultKeyArrayOutputWithContext(ctx context.Context) SentryDefaultKeyArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SentryDefaultKeyArrayOutput)
}

// SentryDefaultKeyMapInput is an input type that accepts SentryDefaultKeyMap and SentryDefaultKeyMapOutput values.
// You can construct a concrete instance of `SentryDefaultKeyMapInput` via:
//
//          SentryDefaultKeyMap{ "key": SentryDefaultKeyArgs{...} }
type SentryDefaultKeyMapInput interface {
	pulumi.Input

	ToSentryDefaultKeyMapOutput() SentryDefaultKeyMapOutput
	ToSentryDefaultKeyMapOutputWithContext(context.Context) SentryDefaultKeyMapOutput
}

type SentryDefaultKeyMap map[string]SentryDefaultKeyInput

func (SentryDefaultKeyMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*SentryDefaultKey)(nil)).Elem()
}

func (i SentryDefaultKeyMap) ToSentryDefaultKeyMapOutput() SentryDefaultKeyMapOutput {
	return i.ToSentryDefaultKeyMapOutputWithContext(context.Background())
}

func (i SentryDefaultKeyMap) ToSentryDefaultKeyMapOutputWithContext(ctx context.Context) SentryDefaultKeyMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SentryDefaultKeyMapOutput)
}

type SentryDefaultKeyOutput struct{ *pulumi.OutputState }

func (SentryDefaultKeyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**SentryDefaultKey)(nil)).Elem()
}

func (o SentryDefaultKeyOutput) ToSentryDefaultKeyOutput() SentryDefaultKeyOutput {
	return o
}

func (o SentryDefaultKeyOutput) ToSentryDefaultKeyOutputWithContext(ctx context.Context) SentryDefaultKeyOutput {
	return o
}

func (o SentryDefaultKeyOutput) DsnCsp() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.DsnCsp }).(pulumi.StringOutput)
}

func (o SentryDefaultKeyOutput) DsnPublic() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.DsnPublic }).(pulumi.StringOutput)
}

func (o SentryDefaultKeyOutput) DsnSecret() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.DsnSecret }).(pulumi.StringOutput)
}

func (o SentryDefaultKeyOutput) IsActive() pulumi.BoolOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.BoolOutput { return v.IsActive }).(pulumi.BoolOutput)
}

// The name of the key
func (o SentryDefaultKeyOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// The slug of the organization the key should be created for
func (o SentryDefaultKeyOutput) Organization() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.Organization }).(pulumi.StringOutput)
}

// The slug of the project the key should be created for
func (o SentryDefaultKeyOutput) Project() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.Project }).(pulumi.StringOutput)
}

func (o SentryDefaultKeyOutput) ProjectId() pulumi.IntOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.IntOutput { return v.ProjectId }).(pulumi.IntOutput)
}

func (o SentryDefaultKeyOutput) Public() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.Public }).(pulumi.StringOutput)
}

func (o SentryDefaultKeyOutput) RateLimitCount() pulumi.IntOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.IntOutput { return v.RateLimitCount }).(pulumi.IntOutput)
}

func (o SentryDefaultKeyOutput) RateLimitWindow() pulumi.IntOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.IntOutput { return v.RateLimitWindow }).(pulumi.IntOutput)
}

func (o SentryDefaultKeyOutput) Secret() pulumi.StringOutput {
	return o.ApplyT(func(v *SentryDefaultKey) pulumi.StringOutput { return v.Secret }).(pulumi.StringOutput)
}

type SentryDefaultKeyArrayOutput struct{ *pulumi.OutputState }

func (SentryDefaultKeyArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*SentryDefaultKey)(nil)).Elem()
}

func (o SentryDefaultKeyArrayOutput) ToSentryDefaultKeyArrayOutput() SentryDefaultKeyArrayOutput {
	return o
}

func (o SentryDefaultKeyArrayOutput) ToSentryDefaultKeyArrayOutputWithContext(ctx context.Context) SentryDefaultKeyArrayOutput {
	return o
}

func (o SentryDefaultKeyArrayOutput) Index(i pulumi.IntInput) SentryDefaultKeyOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *SentryDefaultKey {
		return vs[0].([]*SentryDefaultKey)[vs[1].(int)]
	}).(SentryDefaultKeyOutput)
}

type SentryDefaultKeyMapOutput struct{ *pulumi.OutputState }

func (SentryDefaultKeyMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*SentryDefaultKey)(nil)).Elem()
}

func (o SentryDefaultKeyMapOutput) ToSentryDefaultKeyMapOutput() SentryDefaultKeyMapOutput {
	return o
}

func (o SentryDefaultKeyMapOutput) ToSentryDefaultKeyMapOutputWithContext(ctx context.Context) SentryDefaultKeyMapOutput {
	return o
}

func (o SentryDefaultKeyMapOutput) MapIndex(k pulumi.StringInput) SentryDefaultKeyOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *SentryDefaultKey {
		return vs[0].(map[string]*SentryDefaultKey)[vs[1].(string)]
	}).(SentryDefaultKeyOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*SentryDefaultKeyInput)(nil)).Elem(), &SentryDefaultKey{})
	pulumi.RegisterInputType(reflect.TypeOf((*SentryDefaultKeyArrayInput)(nil)).Elem(), SentryDefaultKeyArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*SentryDefaultKeyMapInput)(nil)).Elem(), SentryDefaultKeyMap{})
	pulumi.RegisterOutputType(SentryDefaultKeyOutput{})
	pulumi.RegisterOutputType(SentryDefaultKeyArrayOutput{})
	pulumi.RegisterOutputType(SentryDefaultKeyMapOutput{})
}
