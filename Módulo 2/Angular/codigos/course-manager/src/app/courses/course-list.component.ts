import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component ({
    // selector: 'app-course-list',   //isso futuramente vai virar uma tag. no começo usar algo que identifique o componente. Ex: "app"
    // template: '<h2> Course List </h2>', //template estático
    
    templateUrl: './course-list.component.html', //é recomendável criar uma página template independente. para isso, se chama com o templateUrl

})
export class CourseListComponent implements OnInit { 
    // importante já colocar a primeira letra maiúscula quando se trabalha com Angular


    filteredCourses: Course[] = [];

    _courses: Course [] = [];
    _filterBy: string;    //underline serve para avisar aos desenvolvedores que essa variável é pra ficar somente nesse componente

    constructor(private courseService: CourseService){ }

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll(); 
        this.filteredCourses = this._courses;       
    }

    //criação de eventos de input e de saída:
    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 )
    }

    get filter() {
        return this._filterBy;

    }

}