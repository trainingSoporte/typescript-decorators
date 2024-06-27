import { Controller, Get} from "../decorators/controller";


@Controller('/saludo')
class GreetingController{

    @Get()
    message():string {
        return 'Hola Mundo';
    }
        
}

export {GreetingController}