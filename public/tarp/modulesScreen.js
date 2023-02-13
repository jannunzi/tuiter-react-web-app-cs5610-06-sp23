const tarpElement = $('#tarp')
tarpElement.append(`
    <div class="container">
        <h1>Tarp !!!!!</h1>
        <div class="row">
            <div class="d-none d-md-block col-md-2">
                ${TarpNavigator()}
            </div>
            <div class="d-none d-md-block col-md-2">
                ${CourseNavigator('Modules')}
            </div>
            <div class="col-md-8">
                ${Modules()}
            </div>
        </div>
    </div>
`)