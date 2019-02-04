const units = [
    {
        "title": "Año 1989",
        "forms": [
            {
                "title": "Eventos"
            }
        ],
        "itineraries": [
            {
                "title": "Resumen",
                "views": [
                    {
                        "unit": "Año 1989",
                        "form": "Eventos"
                    }
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
                    {
                        "unit": "CERN",
                        "form": "Logros"
                    }
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
                    {
                        "unit": "Tim Berners-Lee",
                        "form": "Datos"
                    }
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
                    },
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
        const itineraries_id = `itineraries${index}`;
        $(".units-tabs > .card-header > .nav-tabs-navigation > .nav-tabs-wrapper > .nav.nav-tabs").append(`<li class="nav-item"><a class="nav-link" href="#${unit_id}" data-toggle="tab">${unit.title}</a></li>`);

        const tab_content_id = `${itineraries_id}_content`;
        const unit_content = $(
            `<div class="tab-pane" id="${unit_id}">
                <div class="card card-nav-tabs card-plain">
                    <div class="card-header card-header-danger">
                        <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
                        <div class="nav-tabs-navigation">
                            <div class="nav-tabs-wrapper">
                                <ul class="nav nav-tabs" data-tabs="tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#${itineraries_id}"
                                           data-toggle="tab">Fichas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content text-center">
                            <div class="tab-pane active" id="${itineraries_id}">
                                g
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        );
        if (unit.itineraries) {
            unit.itineraries.forEach((itinerary, index) => {
                const itinerary_id = `${unit_id}_itinerary${index};`;
                $(unit_content).find(".nav.nav-tabs").append(`<li class="nav-item"><a class="nav-link" href="#${itinerary_id}" data-toggle="tab">${itinerary.title}</a></li>`);
                $(unit_content).find(".tab-content").append(`<div class="tab-pane" id="${itinerary_id}">${itinerary.title}</div>`);
            });
        }
        $(".units-tabs > .card-body > .tab-content").append(unit_content);
    });
});