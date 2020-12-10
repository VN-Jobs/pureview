@extends('layouts.frontend')

@section('title', __('Contact us'))

@section('content')
    <!-- Section: Home Request -->
    <section class="section__request">
        <div class="request__form text-white py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="w-full pr-0 lg:pr-4 pb-10 lg:pb-0">
                        <div class="w-full pr-4">
                            <h3 class="font-semibold uppercase text-white text-2xl mb-10">Contact with us</h3>
                            <div class="text-white mb-2">
                                <p><em>Work 24/7. PureView is specialized in working with professional visualizations for the real estate.</em></p>
                            </div>
                        </div>
                        <div id="google__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7451.396882486806!2d105.82756!3d20.964622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x119c468bdd8542e9!2zSEgyIExpbmggxJDDoG0!5e0!3m2!1sen!2sus!4v1607489976588!5m2!1sen!2sus" width="600" height="405" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div class="w-full">
                        <form action="" method="POST">
                            @csrf

                            <div class="grid grid-cols-2 gap-4">
                                <div class="w-full">
                                    <div class="form-group">
                                        <label for="company" class="block uppercase tracking-wide font-bold mb-2">Company</label>
                                        <input type="text" id="company" name="company" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>

                                    <div class="form-group">
                                        <label for="name" class="block uppercase tracking-wide font-bold mb-2">Name</label>
                                        <input type="text" id="name" name="name" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>
                                </div>

                                <div class="w-full">
                                    <div class="form-group">
                                        <label for="email" class="block uppercase tracking-wide font-bold mb-2">Email</label>
                                        <input type="text" id="email" name="email" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>

                                    <div class="form-group">
                                        <label for="phone" class="block uppercase tracking-wide font-bold mb-2">Phone</label>
                                        <input type="text" id="phone" name="phone" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="comment" class="block uppercase tracking-wide font-bold mb-2">Comments</label>
                                <textarea id="comment" name="comment" cols="40" rows="10" class="bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4"></textarea>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="py-2 px-6 mt-8 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded block sm:inline-block transition-colors duration-300">Instant Quote Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
