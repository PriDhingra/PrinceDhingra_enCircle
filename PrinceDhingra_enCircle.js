class enCircle {

    //Calculate expression
    calculate = (expression) => {
        while(expression.includes(')')) {

            // Start with the first expression to close (First index of '))
            const rightIndex = expression.indexOf(')');
            const leftIndex = expression.substring(0, rightIndex).lastIndexOf('(');

            //Storing the result of single expression
            const result = this.evaluateSingle(expression.substring(leftIndex + 1, rightIndex));

            //If final function is evaluated
            if(leftIndex === 0) 
                return result;
            else 
                //Updating expression after each nested function is solved
                expression = expression.substring(0, leftIndex) + result + expression.substring(rightIndex + 1, expression.length);
            
        }

        return +expression;
    }

    //Evaluate Single Expression
    evaluateSingle = (expression) => {
        //Split expression based on ' '
        const pieces = expression.split(' ');

        let answer = 0;
        //Handling add case
        if(pieces[0] === 'add') {
            //Handling arbitary no of arguments
            for(let index = 1;index < pieces.length;index++)
                answer += (+pieces[index]);
        }
        //Handling multiplication case
        else if(pieces[0] === 'multiply') {
            answer = 1;
            //Handling arbitary no of arguments
            for(let index = 1;index < pieces.length;index++)
                answer *= (+pieces[index]);
        } else
            answer = +expression;

        return answer;
    }
}

const assignment = new enCircle();
console.log(assignment.calculate(process.argv[2]));