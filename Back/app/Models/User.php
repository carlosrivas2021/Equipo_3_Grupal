<?php

namespace App\Models;

use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    protected $collection = 'users';

    protected $fillable = [
        '_id',
        'name',
        'email',
        'password',
        'bio',
        'interest',
        'type',
        'image'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    public function skills()
    {
        return $this->hasMany(Skill::class);
    }

    public function studies()
    {
        return $this->hasMany(Study::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }

}
