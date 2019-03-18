To begin, we will explain the functioning of the REST API that we have developed:

- For each type of entity that owns the application, the 4 main functionalities have been implemented: request (GET), create an object and add it to the database (POST), modify an object (PUT) and delete an object (DELETE) .

- The result that we obtain from each request is the requested object, except when we are using images, for which the image is returned. The object is shown in Json format, and can show up to two depth levels with respect to dependencies that have some objects over others.

- The data is passed to these methods as parameters that call the function or as attachments in the body of the request (with the annotation @RequestBody ...)



Our objects are:
    - View
    - Unit
    - Itinerary
    - Image
    - Form
    - Image
    - User
    
### URLs
    
    All our URLs will start with: https://localhost

    Then all our URLs related to the REST API will have the following format: first, it will be / api and then it will be / (the entity to which you want to access).

## api
```javascript
{
    "_links": {
        "users": {
            "href": "https://localhost:8443/api/users{?page,size,sort}",
            "templated": true
        },
        "views": {
            "href": "https://localhost:8443/api/views{?page,size,sort}",
            "templated": true
        },
        "itineraries": {
            "href": "https://localhost:8443/api/itineraries{?page,size,sort}",
            "templated": true
        },
        "images": {
            "href": "https://localhost:8443/api/images{?page,size,sort}",
            "templated": true
        },
        "items": {
            "href": "https://localhost:8443/api/items{?page,size,sort}",
            "templated": true
        },
        "forms": {
            "href": "https://localhost:8443/api/forms{?page,size,sort}",
            "templated": true
        },
        "units": {
            "href": "https://localhost:8443/api/units{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile"
        }
    }
}
```
This URL shows diferent API REST.

```javascript
{
    "_embedded": {
        "views": [
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/144"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/144"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/144/forms"
                    }
                }
            },
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/148"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/148"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/148/forms"
                    }
                }
            },
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/152"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/152"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/152/forms"
                    }
                }
            },
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/168"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/168"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/168/forms"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://localhost:8443/api/views{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile/views"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 4,
        "totalPages": 1,
        "number": 0
    }
}
```
This URL shows a views lists. You can GET,POST or Delete forms.


```javascript
{
    "_embedded": {
        "images": []
    },
    "_links": {
        "self": {
            "href": "https://localhost:8443/api/images{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile/images"
        },
        "search": {
            "href": "https://localhost:8443/api/images/search"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 0,
        "totalPages": 0,
        "number": 0
    }
}
```
This URL shows an images uploaded. You can GET,POST or DELETE the images.


```javascript
{
    "_embedded": {
        "units": [
            {
                "title": "Javascript",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/units/153"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/units/153"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/units/153/forms"
                    },
                    "itineraries": {
                        "href": "https://localhost:8443/api/units/153/itineraries"
                    }
                }
            },
            {
                "title": "Tim Berners Lee",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/units/149"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/units/149"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/units/149/forms"
                    },
                    "itineraries": {
                        "href": "https://localhost:8443/api/units/149/itineraries"
                    }
                }
            },
            {
                "title": "CERN",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/units/145"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/units/145"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/units/145/forms"
                    },
                    "itineraries": {
                        "href": "https://localhost:8443/api/units/145/itineraries"
                    }
                }
            },
            {
                "title": "Anio 1990",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/units/141"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/units/141"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/units/141/forms"
                    },
                    "itineraries": {
                        "href": "https://localhost:8443/api/units/141/itineraries"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://localhost:8443/api/units{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile/units"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 4,
        "totalPages": 1,
        "number": 0
    }
}
```
This URL shows an units lists. For every unit you can GET, POST or DELETE itineraries or forms.



```javascript
{
    "_embedded": {
        "itineraries": [
            {
                "title": "Resumen",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/143"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/143"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/143/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/143/unit"
                    }
                }
            },
            {
                "title": "Introduccion",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/147"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/147"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/147/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/147/unit"
                    }
                }
            },
            {
                "title": "Bibliografia",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/151"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/151"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/151/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/151/unit"
                    }
                }
            },
            {
                "title": "Contexto",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/167"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/167"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/167/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/167/unit"
                    }
                }
            },
            {
                "title": "eppepepe",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/169"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/169"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/169/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/169/unit"
                    }
                }
            }
        ],
        "views": [
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/144"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/144"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/144/forms"
                    }
                }
            },
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/148"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/148"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/148/forms"
                    }
                }
            },
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/152"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/152"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/152/forms"
                    }
                }
            },
            {
                "isItinerary": false,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/views/168"
                    },
                    "view": {
                        "href": "https://localhost:8443/api/views/168"
                    },
                    "forms": {
                        "href": "https://localhost:8443/api/views/168/forms"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://localhost:8443/api/items{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile/items"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 9,
        "totalPages": 1,
        "number": 0
    }
}
```
This URL shows an items lists. You can GET itineraries or view of this item.


```javascript
{
    "_embedded": {
        "forms": [
            {
                "title": "Eventos",
                "description": "bra bra bra",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/142"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/142"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/142/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/142/images"
                    }
                }
            },
            {
                "title": "Logros",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/146"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/146"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/146/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/146/images"
                    }
                }
            },
            {
                "title": "Datos",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/150"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/150"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/150/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/150/images"
                    }
                }
            },
            {
                "title": "8",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/154"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/154"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/154/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/154/images"
                    }
                }
            },
            {
                "title": "15",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/155"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/155"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/155/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/155/images"
                    }
                }
            },
            {
                "title": "7",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/156"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/156"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/156/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/156/images"
                    }
                }
            },
            {
                "title": "10",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/157"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/157"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/157/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/157/images"
                    }
                }
            },
            {
                "title": "11",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/158"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/158"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/158/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/158/images"
                    }
                }
            },
            {
                "title": "Quién",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/159"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/159"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/159/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/159/images"
                    }
                }
            },
            {
                "title": "9",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/160"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/160"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/160/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/160/images"
                    }
                }
            },
            {
                "title": "Cuándo",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/161"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/161"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/161/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/161/images"
                    }
                }
            },
            {
                "title": "12",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/162"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/162"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/162/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/162/images"
                    }
                }
            },
            {
                "title": "13",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/163"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/163"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/163/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/163/images"
                    }
                }
            },
            {
                "title": "Dónde",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/164"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/164"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/164/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/164/images"
                    }
                }
            },
            {
                "title": "Por qué",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/165"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/165"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/165/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/165/images"
                    }
                }
            },
            {
                "title": "14",
                "description": "description",
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/forms/166"
                    },
                    "form": {
                        "href": "https://localhost:8443/api/forms/166"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/forms/166/unit"
                    },
                    "images": {
                        "href": "https://localhost:8443/api/forms/166/images"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://localhost:8443/api/forms{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile/forms"
        },
        "search": {
            "href": "https://localhost:8443/api/forms/search"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 16,
        "totalPages": 1,
        "number": 0
    }
}
```
This URL shows a forms lists.


```javascript
{
    "_embedded": {
        "itineraries": [
            {
                "title": "Resumen",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/143"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/143"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/143/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/143/unit"
                    }
                }
            },
            {
                "title": "Introduccion",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/147"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/147"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/147/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/147/unit"
                    }
                }
            },
            {
                "title": "Bibliografia",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/151"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/151"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/151/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/151/unit"
                    }
                }
            },
            {
                "title": "Contexto",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/167"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/167"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/167/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/167/unit"
                    }
                }
            },
            {
                "title": "eppepepe",
                "isItinerary": true,
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/itineraries/169"
                    },
                    "itinerary": {
                        "href": "https://localhost:8443/api/itineraries/169"
                    },
                    "items": {
                        "href": "https://localhost:8443/api/itineraries/169/items"
                    },
                    "unit": {
                        "href": "https://localhost:8443/api/itineraries/169/unit"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://localhost:8443/api/itineraries{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile/itineraries"
        },
        "search": {
            "href": "https://localhost:8443/api/itineraries/search"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 5,
        "totalPages": 1,
        "number": 0
    }
}
```
This URL shows an itineraries lists. FOR every itinerary you can GET, POST or DELETE subitineraries.


```javascript
{
    "_embedded": {
        "users": [
            {
                "password": "pass",
                "roles": [
                    "admin"
                ],
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/users/admin"
                    },
                    "user": {
                        "href": "https://localhost:8443/api/users/admin"
                    }
                }
            },
            {
                "password": "pass",
                "roles": [
                    "user"
                ],
                "_links": {
                    "self": {
                        "href": "https://localhost:8443/api/users/user"
                    },
                    "user": {
                        "href": "https://localhost:8443/api/users/user"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://localhost:8443/api/users{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "https://localhost:8443/api/profile/users"
        },
        "search": {
            "href": "https://localhost:8443/api/users/search"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 2,
        "totalPages": 1,
        "number": 0
    }
}
```
This URL can POST the user that you want to create.

###### EX:
- https://localhost/api/units/1367               One unit
- https://localhost/api/units/1367/forms         Form of this unit
- https://localhost/api/units/1367/itineraries   Itineraries of this unit

- https://localhost/api/views/136                One view
- https://localhost/api/views/1366/forms         Forms of this view


    All our URLs will start with: https://localhost .
    Then all our URLs related to the REST API will have the following format: first, it will be /api and then it will be / (the entity to which you want to access).
