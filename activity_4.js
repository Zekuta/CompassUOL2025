    let userHand = (prompt("Ingresa una mano (Piedra, papel, o tijera): "));
    let cpuHand = getCpuHand();

    Duel(userHand, cpuHand);

    function getCpuHand() {
        let min = 1;
        let max = 3;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;

        switch(random){
            case 1:
                return 'Piedra';
            case 2:
                return 'Papel';
            case 3:
                return 'Tijera';
        }
    }
    function Duel(userHand, cpuHand){
        switch(userHand){
            case 'Piedra':
                if(cpuHand == 'Piedra'){
                    console.log("Empate!");
                } else if(cpuHand == 'Papel'){
                    console.log("CPU Wins!");
                } else {
                    console.log("YOU Win!");
                }
            break;
            case 'Papel':
                if(cpuHand == 'Piedra'){
                    console.log("YOU Win!");
                } else if(cpuHand == 'Papel'){
                    console.log("Empate!");
                } else {
                    console.log("CPU Wins!");
                }
            break;
            case 'Tijera':
                if(cpuHand == 'Piedra'){
                    console.log("CPU Wins!");
                } else if(cpuHand == 'Papel'){
                    console.log("YOU Win!");
                } else {
                    console.log("Empate!");
                }
            break;
        }
    }