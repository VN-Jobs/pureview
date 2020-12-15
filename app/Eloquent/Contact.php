<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'company',
        'phone',
        'message',
        'is_home',
        'is_team',
        'avatar',
    ];

    public function scopeByKeywords($query, $keywords)
    {
        return $query->where('first_name', 'LIKE', "{$keywords}%")
            ->orWhere('last_name', 'LIKE', "{$keywords}%")
            ->orWhere('email', 'LIKE', "{$keywords}%")
            ->orWhere('company', 'LIKE', "{$keywords}%")
            ->orWhere('phone', 'LIKE', "{$keywords}%")
            ->orWhere('message', 'LIKE', "%{$keywords}%");
    }
}
