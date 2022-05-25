importPackage(java.io);
importPackage(java.lang);

let reader= new BufferedReader(new InputStreamReader(System['in']));

function taller(){
    let firstLine= reader.readLine();
    var numLine= parseInt(firstLine);
    
    for(let i=0; i < numLine; i++){
        let line= reader.readLine();
        if(line){
            let numbers= line.split(" ");
            let A= parseInt(numbers[0]);
            let B= parseInt(numbers[1]);
            if(A>B){
                print('A');
            }else{
                print('B');
            }
        }
        
    }
}

taller();