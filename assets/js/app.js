const units = [
    {
        "title": "Año 1989",
        "forms": [
            {
                "title": "Eventos",
                "description": "bra bra bra"
            }
        ],
        "itineraries": [
            {
                "title": "Resumen",
                "views": [
                    [
                        {
                            "unit": "Año 1989",
                            "form": "Eventos"
                        }
                    ]
                ]
            }
        ]
    },
    {
        "title": "CERN",
        "forms": [
            {
                "title": "Logros"
            }
        ],
        "itineraries": [
            {
                "title": "Introduccion",
                "views": [
                    [
                        {
                            "unit": "CERN",
                            "form": "Logros"
                        }
                    ]
                ]
            }
        ]
    },
    {
        "title": "Tim Berners-Lee",
        "forms": [
            {
                "title": "Datos"
            }
        ],
        "itineraries": [
            {
                "title": "Biografia",
                "views": [
                    [
                        {
                            "unit": "Tim Berners-Lee",
                            "form": "Datos"
                        }
                    ]
                ]
            }
        ]
    },
    {
        "title": "JavaScript",
        "forms": [
            {
                "title": "¿Cuándo?",
                "description": "##bla bla bla"
            },
            {
                "title": "¿Dónde?",
                "description": "##bla bla bla"
            },
            {
                "title": "¿Quién?",
                "description": "##bla bla bla"
            },
            {
                "title": "¿Por qué?",
                "description": "##bla bla bla"
            }
        ],
        "itineraries": [
            {
                "title": "Contexto",
                "views": [
                    [
                        {
                            "unit": "JavaScript",
                            "form": "¿Cuándo?"
                        },
                        {
                            "unit": "JavaScript",
                            "form": "¿Dónde?"
                        },
                        {
                            "unit": "JavaScript",
                            "form": "¿Quién?"
                        }
                    ]
                ],
                "references": [
                    {
                        "unit": "Año 1989",
                        "form": "Resumen"
                    },
                    {
                        "unit": "CERN",
                        "form": "Introducción"
                    },
                    {
                        "unit": "Tim Berners-Lee",
                        "form": "Biografía"
                    }
                ]
            }
        ]
    }
];

$(document).ready(function () {
    units.forEach((unit, index) => {
        const unit_id = `unit${index}`;
        const forms_id = `${unit_id}_form`;
        $(".units-tabs > .card-header > .nav-tabs-navigation > .nav-tabs-wrapper > .nav.nav-tabs").append(`<li class="nav-item"><a class="nav-link" href="#${unit_id}" data-toggle="tab">${unit.title}</a></li>`);
        const unit_content = $(
            `<div class="tab-pane" id="${unit_id}">
                <div class="card card-nav-tabs card-plain">
                    <div class="card-header card-header-danger">
                        <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
                        <div class="nav-tabs-navigation">
                            <div class="nav-tabs-wrapper">
                                <ul class="nav nav-tabs" data-tabs="tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#${forms_id}"
                                           data-toggle="tab">Fichas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content text-center">
                            <div class="tab-pane active" id="${forms_id}"><div class="container"></div></div>
                        </div>
                    </div>
                </div>
            </div>`
        );
        if (unit.itineraries) {
            unit.itineraries.forEach((itinerary, index) => {
                const itinerary_id = `${unit_id}_itinerary${index}`;
                $(unit_content).find(".nav.nav-tabs").append(`<li class="nav-item"><a class="nav-link" href="#${itinerary_id}" data-toggle="tab">${itinerary.title}</a></li>`);
                const views_host_id = `${itinerary_id}_views_host`;
                const itinerary_view = $(
                    `<div class="tab-pane" id="${itinerary_id}">
    <div class="container">
        <div class="row">
            <div class="card">
                <div class="card-header card-header-text card-header-primary">
                    <div class="row">
                        <div class="col-2">
                            <div class="card-text">
                                <h4 class="card-title">Vista</h4>
                            </div>
                        </div>
                        <div class="col-1 ml-auto">
                            <button type="button"
                                    class="btn btn-fab  btn-fab-mini btn-round">
                                <i class="material-icons">delete</i></button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="container" id="${views_host_id}">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card">
                <div class="card-header card-header-text">
                    <h4 class="card-title">Itinerio</h4>
                </div>
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-1">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle"
                                        type="button" id="dropdownMenuButton3"
                                        data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    JavaScript
                                </button>
                                <div class="dropdown-menu"
                                     aria-labelledby="dropdownMenuButton3">
                                    <a class="dropdown-item" href="#">Tim Berners-Lee</a>
                                    <a class="dropdown-item" href="#">CERN</a>
                                    <a class="dropdown-item" href="#">Año 1989</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle"
                                        type="button" id="dropdownMenuButton4"
                                        data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    Contexto
                                </button>
                                <div class="dropdown-menu"
                                     aria-labelledby="dropdownMenuButton4">
                                    <a class="dropdown-item" href="#">Resumen</a>
                                    <a class="dropdown-item" href="#">Bibliografía</a>
                                    <a class="dropdown-item" href="#">Introducción</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-1 ml-auto">
                            <button type="button"
                                    class="btn btn-fab  btn-fab-mini btn-round">
                                <i class="material-icons">delete</i></button>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-2">
                            <div class="card">
                                hola
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="card">
                                JavaScript-Contexto-¿Dónde?
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="card">
                                JavaScript-Contexto-¿Quién?
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="card">
                                JavaScript-Contexto-¿Por qué?
                            </div>
                        </div>
                        <div class="col-1 ml-auto">
                            <button type="button"
                                    class="btn btn-fab  btn-fab-mini btn-round">
                                <i class="material-icons">chevron_right</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-1 ml-auto">
                <div class="radio">
                    <label><input type="radio" name="optradio" checked>Vista</label>
                </div>
            </div>
            <div class="col-1">
                <div class="radio">
                    <label><input type="radio" name="optradio">Itinerario</label>
                </div>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-fab  btn-fab-mini btn-round">
                    <i class="material-icons">add_circle</i></button>
            </div>
        </div>
    </div>
</div>`
                );
                if (itinerary.views) {
                    itinerary.views.forEach((view, index) => {
                        var view_node = $(
                            `<div class="row">
                                                        <div class="col-6">
                                                            <table class="table" >
                                                                <tbody>
                                                                <tr>
                                                                    <td class="text-center"><div class="dropdown">
                                                                        <button class="btn btn-secondary dropdown-toggle"
                                                                                type="button" id="dropdownMenuButton1"
                                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                                aria-expanded="false">
                                                                            Buscar..
                                                                        </button>
                                                                        <div class="dropdown-menu"
                                                                             aria-labelledby="dropdownMenuButton2">
                                                                            <a class="dropdown-item" href="#">Años 1989</a>
                                                                            <a class="dropdown-item" href="#">CERN</a>
                                                                            <a class="dropdown-item" href="#">Tim Berners-Lee</a>
                                                                            <a class="dropdown-item" href="#">JavaScript</a>
                                                                        </div>
                                                                    </div></td>
                                                                    <td class="text-center"><div class="dropdown">
                                                                        <button class="btn btn-secondary dropdown-toggle"
                                                                                type="button" id="dropdownMenuButton2"
                                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                                aria-expanded="false">
                                                                            Buscar..
                                                                        </button>
                                                                        <div class="dropdown-menu"
                                                                             aria-labelledby="dropdownMenuButton2">
                                                                            <a class="dropdown-item" href="#">Evento</a>
                                                                            <a class="dropdown-item" href="#">Logro</a>
                                                                            <a class="dropdown-item" href="#">Dato</a>
                                                                            <a class="dropdown-item" href="#">Cuándo</a>
                                                                            <a class="dropdown-item" href="#">Dónde</a>
                                                                            <a class="dropdown-item" href="#">Quién</a>
                                                                            <a class="dropdown-item" href="#">Por qué</a>
                                                                        </div>
                                                                    </div></td>
                                                                    <td class="td-actions text-right">
                                                                        <button type="button"
                                                                                class="btn btn-fab  btn-fab-mini btn-round">
                                                                            <i class="material-icons">add_circle</i></button>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="card">
                                                                <div class="card-header card-header-text">
                                                                    <h4 class="card-title">HTML</h4>
                                                                    <div class="card-body html-host"></div>
                                                            </div>
                                                        </div>
                                                    </div>`
                        );
                        view.forEach((form_ref, index) => {
                            $(view_node).find("table > tbody").prepend(
                                `<tr>
                                <td class="text-center">${form_ref.unit}</td>
                                <td class="text-center">${form_ref.form}</td>
                                <td class="td-actions text-right">
                                    <button type="button"
                                            class="btn btn-fab btn-fab-mini btn-round">
                                        <i class="material-icons">delete</i></button>
                                </td>
                             </tr>`
                            );
                            $(view_node).find(".html-host").append(`<div class="card"><div class="card-header"><h4 class="card-title">${form_ref.unit}-${form_ref.form}</h4></div></div></div></div>`);
                        });
                        $(itinerary_view).find(`#${views_host_id}`).append(view_node);
                    });
                }
                $(unit_content).find(".tab-content").append(itinerary_view);
            });
        }
        if (unit.forms) {
            unit.forms.forEach((form, index) => {
                const formCard = $(
                    `<div class="row">
                                        <div class="card">
                                            <div class="card-header card-header-text card-header-primary">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-2">
                                                            <div class="card-text">
                                                                <h4 class="card-title"></h4>
                                                            </div>
                                                        </div>
                                                        <div class="col-1 ml-auto">
                                                            <button type="button"
                                                                    class="btn btn-fab btn-fab-mini btn-round">
                                                                <i class="material-icons">delete</i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body"></div>
                                        </div>
                                    </div>`
                );
                $(formCard).find(".card-body").text(form.description || "");
                $(formCard).find(".card-title").text(form.title || "");
                $(unit_content).find(`#${forms_id} > .container`).append(formCard);
            });
        }
        $(".units-tabs > .card-body > .tab-content").append(unit_content);
    });

    $(".dropdown").each((idx, e) => {
        $(e).find(".dropdown-menu a").click(function () {
            $(e).find(".btn").text($(this).text());
            $(e).find(".btn").val($(this).text());
        });
    });
});