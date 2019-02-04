const units = [
    {
        "title": "Año 1989",
        "forms": [
            {
                "title": "Eventos",
                "description": `
Nace el PP (20-I). 
Alianza Popular cambia de nombre en el congreso del partido. Ahora será Partido Popular. Manuel Fraga vuelve a la presidencia transitoriamente, en espera de que una nueva generación tome el relevo en la dirección.

Tregua de ETA (22-I). Anuncia una tregua de dos meses y la formación de un comité negociador en Argel.

Primer triunfo de Yeltsin (26-III). Obtine la victoria en las primeras elecciones democráticas en la URSS.

Matanza de Tiananmen (3-VI). 
El Ejército chino carga contra los estudiantes concentrados en la plaza de Tiananmen en Beijing. Se producen cientos de muertes.

Suspendidos los debates electorales en RTVE (7-VI). El motivo es la proximidad de las elecciones al Parlamento Europeo. El PSOE consigue la mayoría.

La fuga del &laqno;Dioni» (28-VII). 
El vigilante jurado Dionisio Fernández se fuga con un furgón de la empresa de seguridad Candi con 320 millones de pesetas. Es detenido en Brasil el 21 de septiembre.

Fin del monopolio televisivo (25-VIII). 
El Consejo de Ministros decide conceder tres canales privados de televisión a Tele 5, Antena 3 TV y Canal Plus.

Accidente nuclear en Valdellos 1 (19-X). 
La central nuclear, situada en Tarragona, sufre el accidente más grave jamás ocurrido en España.

Nace EL MUNDO (23-X). 
Sale a la calle el primer número del diario.

El PSOE obteniene su tercera mayoria (29-X). 
Renueva la mayoría absoluta con 176 escaños. José María Aznar, al frente del PP, mantiene los votos de su partido y se consolida al frente de la derecha española.

Cae el muro de berlin (9-XI). 
Adiós al último símbolo de la Guerra Fría.

Es asesinado Josu Muguruza (20-XI). 
El miembro de HB muere durante una cena en la que también resulta herido el diputado de la misma formación Iñaki Esnaola. El atentado se atribuye al hijo del comandante Ynestrillas, asesinado por ETA.

Camilo Jose Cela, Premio Nobel de Literatura (10-XII). &laqno;Por una prosa rica e intensa, que con refrenada compasión configura una visión provocadora del desamparado ser humano».

Invasion de panama (20-XII). El Gobierno de Estados Unidos invade Panamá en una operación militar denominada &laqno;causa justa».

Ceaucescu es ejecutado (25-XII). Se da muerte al dictador rumano y a su mujer, en cumplimiento de una condena dictada por un tribunal extraordinario que dictaminaba su pena de muerte.
`
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
                            <div class="tab-pane active" id="${forms_id}"></div>
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
        if (unit.forms) {
            unit.forms.forEach((form, index) => {
                const formCard = $(
                    `<div class="card">
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
                    </div>`
                );
                $(formCard).find(".card-body").text(form.description || "");
                $(formCard).find(".card-title").text(form.title || "");
                $(unit_content).find(`#${forms_id}`).append(formCard);
            });
        }
        $(".units-tabs > .card-body > .tab-content").append(unit_content);
    });
});