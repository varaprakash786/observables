import { Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Dataservice {

    classArr: any[] = [
        { id: 1,
        className: 'ClassVI',
        sections: [
            { section: 'A',
              stdName:'Raju',
            },
            {section: 'B'}]
        },
        { id: 2,
        className: 'ClassVII',
        sections: [
            {section: 'A'},
            {section: 'B'},
            {section: 'C'}]
        },
        { id: 1,
        className: 'ClassVIII',
        sections: [
            {section: 'A'},
            {section: 'B'}]
        }
    ];

    getStudentClass(){
        return this.classArr.map((s) => s.className)
    }

}