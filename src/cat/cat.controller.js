import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
    
    

@Get()
findAll(){
    console.log("Returning a cat string");
    return ' This returns a cat string';
   
    
}


@Get('/breed')
getBreed(){
    console.log("Breed Controller Working");
    return 'This is meow breed'
    
    
}

}
