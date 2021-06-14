<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="{{ asset('css/all-files.css') }}" rel="stylesheet">

    </head>
    <body>
        <div class="container" style="margin-top:20px" id="root">
            <div class="columns is-multiline">
                <div class="column">
                    <section class="hero is-info welcome is-small">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title">
                                    Hello !!.
                                </h1>
                                <h2 class="subtitle">
                                    Welcome to Vue & Laravel Vue Sample Code
                                </h2>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="columns is-multiline is-mobile">
                <div v-for="(sample,idx) in samples" :key="idx" class="column is-3">
                    <card inline-template class="card" 
                        v-bind:content="sample" 
                    >
                        <div
                            @mouseover="isHovering = true" 
                            @mouseleave="isHovering = false"
                        >
                            <a v-bind:href="href">
                                <div class='card-header'>
                                <div class="card-header-title"
                                  :class="isHovering ? 'has-text-white-bis has-background-primary' : 'has-text-primary has-background-primary-light'"
                                  v-text="title"
                                  >                            
                                </div>
                              </div>
                              <div class="card-content">
                                <p class='has-text-dark'
                                  v-text="description"
                                >
                                </p>
                              </div>
                            </a>
                        </div>

                    </card>
                </div>
            </div>
        </div>
        <script src="{{ asset('js/index.js') }}"></script>
    </body>

</html>
