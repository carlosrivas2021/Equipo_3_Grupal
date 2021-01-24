<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Interfaces\FeatureInterface;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserCrudController extends Controller implements FeatureInterface
{

    public function __construct()
    {
        $this->middleware('jwt.verify');
        $this->middleware('admin', ['only' => ['create', 'delete', 'get']]);
    }

    public function create(Request $request)
    {
        if ($this->permission(auth('api')->user(), 'user')) {
            return response()->json(['status' => 'Not authorized']);
        }

        $validator = Validator::make($request->all(),
            [
                'name'       => 'required',
                'role'       => 'required',
                'email'      => 'required|email|unique:users',
                'password'   => 'required',
                'c_password' => 'required|same:password',
            ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => $validator->errors(),
            ], 401);

        }

        $user           = new User();
        $user->name     = $request->name;
        $user->email    = $request->email;
        $user->password = bcrypt($request->password);
        $user->role     = $request->role;
        $user->save();

        return response()->json([
            'success' => true,
            'data'    => $user,
            'error'   => [],
        ], 201);

    }

    public function update(Request $request)
    {
        if (auth('api')->user()->role === 'admin') {
            $validator = Validator::make($request->all(),
                [
                    '_id' => 'required',
                ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'data'    => '',
                    'error'   => $validator->errors(),
                ], 401);
            }

            $id = $request->_id;
        } else {
            $id = auth('api')->user()->_id;
        }

        try {
            $user           = User::findOrFail($id);
            $user->name     = $request->name ? $request->name : $user->name;
            $user->email    = $request->email ? $request->email : $user->email;
            $user->bio      = $request->bio ? $request->bio : $user->bio;
            $user->interest = $request->interest ? $request->interest : $user->interest;
            $user->password = $request->password ? bcrypt($request->password) : $user->password;
            if (auth('api')->user()->role === 'admin') {
                $user->role = $request->role ? $request->role : $user->role;
            }
            $user->save();
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $user,
            'error'   => [],
        ], 200);
    }

    function list() {

        try {
            $user = User::all();
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $user,
            'error'   => [],
        ], 200);

    }

    public function delete(Request $request)
    {
        if ($this->permission(auth('api')->user(), 'user')) {
            return response()->json(['status' => 'Not authorized']);
        }

        try {
            $user = User::findOrFail($request->_id)->delete();
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $user,
            'error'   => [],
        ], 200);

    }

    public function get(Request $request)
    {
        try {
            $user = User::with(['experiences','studies','skills'])->findOrFail($request->_id);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data'    => '',
                'error'   => [$e->getMessage()],
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data'    => $user,
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
