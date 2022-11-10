# Person Api

## persons.json
```json
[
    {"firstname":"Matt","lastname":"River","age":30},
    {"firstname":"Ilya","lastname":"Ponomarenko","age":10},
    {"firstname":"Mark","lastname":"River","age":50}
]
```
## Datalayer for persons
## function **search(key,value)**
function returns an array of person objects. Search criterion is passed to the function as parameters.

- seacrh() returns an array of all persons
- search (key,value) returns an array of all matching persons

## Server usage
## search all persons
http://localhos:3000/persons

## search by firstname
http://localhos:3000/persons/firstname?value=Matt
## search by lastname
http://localhos:3000/persons/firstname?value=Matt
## search by age
http://localhos:3000/persons/firstname?value=Matt

## SPA (single page application)