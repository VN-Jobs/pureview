@if (Session::has('contact_flash_message'))
    <div class="alert alert-success">{{ Session::get('contact_flash_message') }}</div>
@endif

{{ Form::open([
    'url' => route('frontend.home.contact'),
    'role'  => 'form',
    'autocomplete'=>'off',
    'class' => 'form contact-form',
]) }}
    <div class="grid grid-cols-2 gap-4">
        <div class="w-full">
            <div class="form-group">
                <label for="company" class="block uppercase tracking-wide font-bold mb-2">Company</label>
                <input type="text" id="company" name="company" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                @if ($errors->has('company'))
                    <small class="form-text text-danger">{{ $errors->first('company') }}</small>
                @endif
            </div>

            <div class="form-group">
                <label for="name" class="block uppercase tracking-wide font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                @if ($errors->has('name'))
                    <small class="form-text text-danger">{{ $errors->first('name') }}</small>
                @endif
            </div>
        </div>

        <div class="w-full">
            <div class="form-group">
                <label for="email" class="block uppercase tracking-wide font-bold mb-2">Email</label>
                <input type="text" id="email" name="email" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                @if ($errors->has('email'))
                    <small class="form-text text-danger">{{ $errors->first('email') }}</small>
                @endif
            </div>

            <div class="form-group">
                <label for="phone" class="block uppercase tracking-wide font-bold mb-2">Phone</label>
                <input type="text" id="phone" name="phone" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                @if ($errors->has('phone'))
                    <small class="form-text text-danger">{{ $errors->first('phone') }}</small>
                @endif
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="comment" class="block uppercase tracking-wide font-bold mb-2">Comments</label>
        <textarea id="comment" name="comment" cols="40" rows="10" class="bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4"></textarea>
        @if ($errors->has('comment'))
            <small class="form-text text-danger">{{ $errors->first('comment') }}</small>
        @endif
    </div>

    <div class="form-group">
        <button type="submit" class="py-2 px-6 mt-8 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded block sm:inline-block transition-colors duration-300">Instant Quote Now</button>
    </div>
{{ Form::close() }}
