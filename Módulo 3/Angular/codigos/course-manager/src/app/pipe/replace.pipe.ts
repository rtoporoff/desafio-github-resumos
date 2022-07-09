import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'replace' //ele espera receber algum atributo. aqui o nome dele será replace
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) { //sempre o primeiro parâmetro é o valor ao qual o pipe está inserido, ou seja, o primeiro parâmetro vai ser exatamente o valor da propriedade que a gente vai estar passando pro pipe
        return value.replace(char, valueToReplace);

    }

}