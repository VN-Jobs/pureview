@push('prescripts')
{{ Html::script(mix('/assets/js/backend/jquery-ui.min.js')) }}
{{ Html::script(mix('/assets/js/backend/summernote.min.js')) }}
{{ Html::script(mix('/assets/js/backend/grideditor.min.js')) }}
{{ Html::script(mix('/assets/js/backend/modules/post.js')) }}
    <script>
        $(function () {
            window.post.form();
        });
    </script>
@endpush

@push('prestyles')
{{ Html::style('assets/css/backend/post.css') }}
@endpush

@include('backend._partials.components.errors')
<div class="row">
    <div class="col-sm-8">
        <div class="form-group">
            <div class="row">
                <div class="col-md-8">
                    {{ Form::label('name', __('repositories.label.title'), ['class'=>'control-label']) }}<span class="require">*</span>
                    {{ Form::text('name', null, ['class' => 'form-control', 'placeholder' => __('repositories.label.title')]) }}
                </div>
                <div class="col-sm-4">
                    <label></label>
                    <div class="checkbox">
                        <label>
                            {{ Form::checkbox('locked', true, old('locked'), ['data-toggle'=>'toggle', 'data-size' => 'small']) }} <b>{{ __('repositories.label.locked') }}</b>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group">
            {{ Form::label('description', __('repositories.label.description'), ['class' => 'control-label']) }}
            <div class="grid-editor"></div>
            {{ Form::textarea('description', null, ['class' => 'form-control textarea-summernote']) }}
        </div>
    </div>
    <div class="col-sm-4">
        @include('backend._partials.includes.seo')
        {{ Form::label('name', __('repositories.label.image') . __('repositories.image_size.blog'), ['class' => 'control-label']) }}<span class="require">*</span>
        @component('backend._partials.components.uploadfile', ['imgFields' => (isset($item) && $item->image_src) ? $item->image_src : null])
        @slot('uploadFields')
            {{ Form::file('image', ['id' => 'image']) }}
        @endslot
        @endcomponent
    </div>
</div>

<div class="form-group">
    <div class="text-right col-sm-4 col-sm-offset-4">
        <button type="submit" class="btn btn-success btn-sm"><i class="ion-checkmark-circled"></i> {{ isset($item) ? __('repositories.title.edit') : __('repositories.title.create') }}</button>
        <a href="javascript:window.history.back()" class="btn btn-primary btn-sm" ><i class="ion-arrow-left-a"></i> {{ __('repositories.title.back') }}</a>
    </div>
</div>
