import { Observable } from "rxjs";

export function functionObs(){
    console.log('fun call');
    return '1'
}

export const constObs = new Observable((observer) => {
    console.log('observer call')
    observer.next('1')
    observer.next('2')
    setTimeout(() => {
        console.log('After 3 sec')
        observer.next('3')
    },3000)
})

