import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
    selector: 'app-course-list',   //isso futuramente vai virar uma tag. no começo usar algo que identifique o componente. Ex: "app"
    // template: '<h2> Course List </h2>', //template estático
    templateUrl: './course-list.component.html', //é recomendável criar uma página template independente. para isso, se chama com o templateUrl
})
export class CourseListComponent implements OnInit { 
    // importante já colocar a primeira letra maiúscula quando se trabalha com Angular

    courses: Course [] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-8796',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 4, 2019'
            }
        ]
    }

}