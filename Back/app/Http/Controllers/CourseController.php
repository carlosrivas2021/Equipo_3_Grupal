<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Interfaces\FeatureInterface;
use App\Models\BuyCourse;
use App\Models\Course;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller implements FeatureInterface
{
    private $responseNotAthorized = 'Not authorized';

    public function create(Request $request)
    {
        $response = [
            'success' => true,
            'data'    => '',
            'error'   => [],
        ];
        $codeResponse = 201;

        if ($this->permission(auth('api')->user(), 'user')) {
            return response()->json(['status' => $this->responseNotAthorized]);
        }

        $validator = Validator::make($request->all(),
            [
                'name'        => 'required',
                'description' => 'required',
                'price'       => 'required',
            ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);
        }

        try {
            $course              = new Course();
            $course->name        = $request->name;
            $course->description = $request->description;
            $course->start_date  = $request->start_date;
            $course->end_date    = $request->end_date;
            $course->price       = $request->price;
            $course->save();
            $response['data'] = $course;
        } catch (Exception $e) {
            $codeResponse        = 503;
            $response['success'] = false;
            $response['error']   = [$e->getMessage()];

        }

        return response()->json($response, $codeResponse);
    }

    public function update(Request $request)
    {
        $response = [
            'success' => true,
            'data'    => '',
            'error'   => [],
        ];
        $codeResponse = 200;

        if ($this->permission(auth('api')->user(), 'user')) {
            return response()->json(['status' => $this->responseNotAthorized]);
        }

        $validator = Validator::make($request->all(),
            [
                'name'        => 'required',
                'description' => 'required',
                'start_date'  => 'required',
                'end_date'    => 'required',
                'price'       => 'required',
            ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);
        }

        try {
            $course              = Course::findOrFail($request->_id);
            $course->name        = $request->name;
            $course->description = $request->description;
            $course->start_date  = $request->start_date;
            $course->end_date    = $request->end_date;
            $course->price       = $request->price;
            $course->save();
            $response['data'] = $course;
        } catch (Exception $e) {
            $codeResponse        = 503;
            $response['success'] = false;
            $response['error']   = [$e->getMessage()];
        }

        return response()->json($response, $codeResponse);
    }

    function list() {

        try {
            $course = Course::all();
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $course,
            'error'   => [],
        ], 200);
    }

    public function delete(Request $request)
    {
        if ($this->permission(auth('api')->user(), 'user')) {
            return response()->json(['status' => $this->responseNotAthorized]);
        }
        try {
            $course = Course::findOrFail($request->_id)->delete();
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $course,
            'error'   => [],
        ], 200);
    }

    public function get(Request $request)
    {

        try {
            $course = Course::findOrFail($request->_id);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $course,
            'error'   => [],
        ], 200);
    }

    public function buy(Request $request)
    {
        $response = [
            'success' => true,
            'data'    => '',
            'error'   => ['You had this course'],
        ];
        $codeResponse = 201;

        if ($this->permission(auth('api')->user(), 'admin')) {
            return response()->json(['status' => $this->responseNotAthorized]);
        }

        $validator = Validator::make($request->all(),
            [
                'course_id' => 'required|exists:courses,_id',
            ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);
        }

        try {
            $buyed = BuyCourse::where('user_id', auth('api')->user()->_id)->where('course_id', $request->course_id)->get();
            if ($buyed->count() == 0) {
                $user   = auth('api')->user();
                $user->courses()->attach($request->course_id);
                $buycourse            = new BuyCourse();
                $buycourse->user_id   = $user->_id;
                $buycourse->course_id = $request->course_id;
                $buycourse->status    = 'learning';
                $buycourse->save();
                $codeResponse      = 200;
                $response['date']  = false;
                $response['error'] = [];
            }

        } catch (Exception $e) {
            $codeResponse        = 503;
            $response['success'] = false;
            $response['error']   = [$e->getMessage()];
        }

        return response()->json($response, $codeResponse);
    }

    public function my()
    {
        try {
            $course = auth('api')->user()->courses()->get();
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $course,
            'error'   => [],
        ], 200);
    }

    private function permission($user, $role)
    {
        if ($user->role === $role) {
            return true;
        }
        return false;
    }
}
