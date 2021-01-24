<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Course extends Model
{
    protected $collection = 'courses';

    protected $dates = ['end_date', 'start_date'];

    protected $fillable = [
        '_id',
        'name',
        'description',
        'price',
    ];

    protected $hidden = [
        'user_ids',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

}
