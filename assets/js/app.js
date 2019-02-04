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
        $(".units-tabs").append(`
        <li class="nav-item">
            <a class="nav-link" href="unit${index}" data-toggle="tab">${unit.title}</a>
        </li>
`);
    });
});