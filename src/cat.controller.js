import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
    
    

@Get()
findAll(){
    return ' This returns a cat string';
    console.log("Returning a cat string");
    
}

}
