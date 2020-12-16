<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Contracts\Repositories\PostRepository;
use App\Contracts\Repositories\CategoryRepository;
use App\Contracts\Repositories\SlideRepository;
use App\Http\Requests\Frontend\ContactRequest;
use App\Jobs\Contact\UserStoreJob;

class HomeController extends FrontendController
{
    protected $repoSlide;
    protected $repoCategory;
    protected $repoPost;

    public function __construct(
        SlideRepository $slide,
        CategoryRepository $category,
        PostRepository $post
    ) {
        parent::__construct();
        $this->repoSlide = $slide;
        $this->repoCategory = $category;
        $this->repoPost = $post;
    }

    public function index(Request $request)
    {
        $this->view = 'home.index';
        $this->compacts['heading'] = __('repositories.frontend.home');
        $this->compacts['slides'] = $this->repoSlide
            ->getDataByCategory(
                config('common.slide.limit'),
                0,
                ['title', 'description', 'image_src']
            );
        $this->compacts['categories'] = $this->repoCategory
            ->getRandom(
                config('common.category.limit'),
                ['id', 'name', 'slug', 'image_src', 'description']
            );
        $this->compacts['posts'] = $this->repoPost->scopeDatatables()->limit(config('common.blog.limit'))->latest()->get();

        return $this->viewRender();
    }

    public function storeContact(ContactRequest $request)
    {
        $data = $request->all();
        try {
            $message = __("repositories.frontend.contact_form.successfully");
            $this->dispatchNow(new UserStoreJob($data));
        } catch (\Exception $e) {
            $message = __("repositories.frontend.contact_form.unsuccessfully");
        }

        return redirect(url()->previous())->with('contact_flash_message', $message);
    }
}
