
exports.handler = async (event) => {
   
    let {operator1, operator2, operation} = event;
    //let {operator1, operator2, operation} = event.body;
    let result;

    switch(operation)
    {
        case "add":
            result = operator1 + operator2;
            break;
         case 'sub':
            result = operator1 - operator2;
            break;
         case 'multiply':
            result = operator1 * operator2;
            break;
         case 'div':
            result = operator1 / operator2;
            break;
         
         default:
             result = null;
    }
     var response = {
         statusCode: 200,
         body: JSON.stringify(result),
     };
     return response;
 };
 