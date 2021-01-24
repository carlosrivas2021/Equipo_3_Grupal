<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class BuyCourse extends Model
{
    protected $collection = 'courses_users';

    protected $fillable = [
        '_id',
        'course_id',
        'user_id',
        'status',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

}
