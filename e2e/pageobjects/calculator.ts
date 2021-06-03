export class Calculator{

   addition(num1: number, num2: number): number{
    try{
        return(num1 + num2);
    }catch (err){
        console.log(err);
    }

   }

   multiplication(num1: number, num2: number): number{
       try{
        return num1 * num2;
       }catch (err){
           console.log(err);
       }

   }

   subtration(num1: number, num2: number): number{
    try{
        return num2 - num1;
    }catch (err){
        console.log(err);
    }

   }

   division(num1: number, num2: number): number{
    try{
        return num1 / num2;
    }catch (err){
        console.log(err);
    }

   }

}