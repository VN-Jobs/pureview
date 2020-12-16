<?php

namespace App\Http\Requests\Backend;

use App\Http\Requests\Request;

class ConfigRequest extends Request
{
    public function rules()
    {
        return [
            'name.*' => 'required',
            'logo.*' => 'nullable|bail|file|mimes:jpeg,jpg,gif,bmp,png|max:1200',
            'email.*' => 'email',
            'map.*' => 'url',
            'facebook.*' => 'nullable|url',
            'youtube.*' => 'nullable|url',
            'linkedin.*' => 'nullable|url',
            'twitter.*' => 'nullable|url',
            'instagram.*' => 'nullable|url',
            'about.banner' => 'nullable|bail|file|mimes:jpeg,jpg,gif,bmp,png|max:1200',
            'blog.banner' => 'nullable|bail|file|mimes:jpeg,jpg,gif,bmp,png|max:1200',
            'contact.banner' => 'nullable|bail|file|mimes:jpeg,jpg,gif,bmp,png|max:1200',
            'contact.banner_1' => 'nullable|bail|file|mimes:jpeg,jpg,gif,bmp,png|max:1200',
            'contact.banner_2' => 'nullable|bail|file|mimes:jpeg,jpg,gif,bmp,png|max:1200',
        ];
    }

    public function attributes()
    {
        return [
            'name.*' => __('repositories.label.title'),
            'logo.*' => __('repositories.label.logo'),
            'email.*' => __('repositories.label.email'),
            'map.*' => __('repositories.label.map'),
            'facebook.*' => __('repositories.label.facebook'),
            'youtube.*' => __('repositories.label.youtube'),
            'linkedin.*' => __('repositories.label.linkedin'),
            'twitter.*' => __('repositories.label.twitter'),
            'instagram.*' => __('repositories.label.instagram'),
            'about.banner' => __('repositories.label.about_banner'),
            'blog.banner' => __('repositories.label.blog_banner'),
            'contact.banner' => __('repositories.label.contact_banner'),
            'contact.banner_1' => __('repositories.label.contact_banner_1'),
            'contact.banner_2' => __('repositories.label.contact_banner_2'),
        ];
    }
}
