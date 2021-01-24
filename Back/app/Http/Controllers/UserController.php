<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function data(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'type' => 'required',
            ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);

        }
        $type = $request->type;

        $user = new UserCrudController();
        return $user->$type($request);
    }

    public function experience(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'type' => 'required',
            ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);

        }
        $type = $request->type;

        $experience = new ExperienceController();
        return $experience->$type($request);
    }

    public function study(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'type' => 'required',
            ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);

        }
        $type = $request->type;

        $study = new StudyController();
        return $study->$type($request);
    }

    public function course(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'type' => 'required',
            ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);

        }
        $type = $request->type;

        $course = new CourseController();
        return $course->$type($request);
    }



}
