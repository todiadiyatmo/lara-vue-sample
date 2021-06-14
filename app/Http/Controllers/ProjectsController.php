<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{

    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            "description" => 'required'
        ]); 

        $project = Project::forceCreate([
            'name' => request('name'),
            'description' => request('description')
        ]); 

        return ['message' => 'Project berhasil dibuat', 'project' => $project];
    }

    public function update($projectId)
    {
        $this->validate(request(), [
            'name' => 'required',
            "description" => 'required'
        ]); 

        $project = Project::find($projectId);
        $project->name = request('name');
        $project->description = request('description');
        $project->save();

        return ['message' => 'Project berhasil diupdate'];
    }

    public function destroy($projectId)
    {

        Project::find($projectId)->delete();

        return ['message' => 'Project berhasil dihapus'];
    }

    public function index(Request $request) {

        $projects = Project::all();

        if($request->wantsJson()){
            return $projects->toArray();
        }

        return view('projects.index');
    }

    public function index2(Request $request) {
        return view('projects.index-v2');
    }
}
