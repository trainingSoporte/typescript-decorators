import { GreetingController } from "./classes/greeting.controller";

console.log('----Main----');

const saludito = new GreetingController();

// console.log(saludito);

saludito.message();


// import {gen} from './generics/demo';

// // function str(params:string) {
// //     return params;
// // }


// interface Data{
//     nombre:string;
//     edad?:number;
// }


// const valor = gen<Data>({nombre:'Adrian'});

// console.log(valor);
