import express from 'express';

function Controller(route:string):Function {
    console.log("----Controller-----");
    
    const app = express();
    const port = 3000;

    return function (target:any) {
        return class extends target{
            public _route: string = route;
            private _express: Function = express;
            private _app: Object = app;
            private _port: number = port;
        }
    }
}

function Get():Function {
    console.log("----Get-----");
    return function (target:any,propertyKey:any,descriptor:any) {
        
        const original = descriptor.value;

        console.log('target');
        console.log(target);
        console.log('propertyKey');
        console.log(propertyKey);
        console.log('descriptor');
        console.log(descriptor);
        

        descriptor.value = function (...args:any[]) {

            const object = this;
            this['_app'].get(this['_route'],function(req:any,res:any){
                res.send(original.call(object,...args));
            })
            const port:string = this['_port'].toString(); 
            return this['_app'].listen(this['_port'], function(){
                console.log(`Example app listening on port ${port}`);
            });
        }
    }
}

export {Controller, Get}