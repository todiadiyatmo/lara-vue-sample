<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link href="{{ asset('css/all-files.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="main" id="project">
            <div class="columns">
                <div class="column">
                    <div class="block">
                        <h1 class="title">Project</h1>
                        <message></message>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="block">
                        <project-form  ref="projectForm" v-bind:form="form"></project-form>
                    </div>
                </div>
                <div class="column is-three-fifths">
                  <div class="block">
                      <h2 class="subtitle">List Project</h2>
                  </div>         
                  <project-table v-bind:projects="projects">
                  </project-table>    
              </div>
            </div>

        </div>
        <script src="{{ asset('js/project.js') }}"></script>
    </body>

</html>
