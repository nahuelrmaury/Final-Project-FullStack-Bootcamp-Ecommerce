console.log('🆗: Módulo PageNosotros cargado.');

class PageNosotros {

    static async init() {
        let flag = 0;
        const buttons = document.querySelectorAll('.blocked');
        const resetButton = document.querySelector('#but');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {

                var b1, b2, b3, b4, b5, b6, b7, b8, b9;
                b1 = document.getElementById("b1").value;
                b2 = document.getElementById("b2").value;
                b3 = document.getElementById("b3").value;
                b4 = document.getElementById("b4").value;
                b5 = document.getElementById("b5").value;
                b6 = document.getElementById("b6").value;
                b7 = document.getElementById("b7").value;
                b8 = document.getElementById("b8").value;
                b9 = document.getElementById("b9").value;

                if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
                    b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
                    b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
                    b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                }

                else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
                    b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                }

                else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
                    b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                }

                else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
                    b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
                    b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
                    b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador X Ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
                    b2 == '0') && (b3 == '0' || b3 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
                    b4 == '0') && (b7 == '0' || b7 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
                    b8 == '0') && (b9 == '0' || b9 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                }

                else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
                    b6 == '0') && (b9 == '0' || b9 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                }

                else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
                    b5 == '0') && (b9 == '0' || b9 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                }

                else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
                    b5 == '0') && (b7 == '0' || b7 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
                    b5 == '0') && (b8 == '0' || b8 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
                    b5 == '0') && (b6 == '0' || b6 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Jugador 0 ganó!";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                }

                else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
                    || b2 == '0') && (b3 == 'X' || b3 == '0') &&
                    (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
                        b5 == '0') && (b6 == 'X' || b6 == '0') &&
                    (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
                        b8 == '0') && (b9 == 'X' || b9 == '0')) {
                    document.getElementById('print')
                        .innerHTML = "Empate!";
                }
            });

            resetButton.onclick = function () {
                b1.value = '';
                b2.value = '';
                b3.value = '';
                b4.value = '';
                b5.value = '';
                b6.value = '';
                b7.value = '';
                b8.value = '';
                b9.value = '';
                document.getElementById("b1").disabled = false;
                document.getElementById("b2").disabled = false;
                document.getElementById("b3").disabled = false;
                document.getElementById("b4").disabled = false;
                document.getElementById("b5").disabled = false;
                document.getElementById("b6").disabled = false;
                document.getElementById("b7").disabled = false;
                document.getElementById("b8").disabled = false;
                document.getElementById("b9").disabled = false;
                if (flag == 0) {
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador 0";
                }
                else {
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
                
            }
    
            flag = 0;
    
            b1.onclick = function () {
                if (flag == 1) {
                    b1.value = "X";
                    b1.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b1.value = "0";
                    b1.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador X";
                }
            }
    
            b2.onclick = function () {
                if (flag == 1) {
                    b2.value = "X";
                    b2.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b2.value = "0";
                    b2.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
    
            b3.onclick = function () {
                if (flag == 1) {
                    b3.value = "X";
                    b3.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b3.value = "0";
                    b3.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
    
            b4.onclick = function () {
                if (flag == 1) {
                    b4.value = "X";
                    b4.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b4.value = "0";
                    b4.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
    
            b5.onclick = function () {
                if (flag == 1) {
                    b5.value = "X";
                    b5.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b5.value = "0";
                    b5.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
    
            b6.onclick = function () {
                if (flag == 1) {
                    b6.value = "X";
                    b6.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b6.value = "0";
                    b6.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
    
            b7.onclick = function () {
                if (flag == 1) {
                    b7.value = "X";
                    b7.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b7.value = "0";
                    b7.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
    
            b8.onclick = function () {
                if (flag == 1) {
                    b8.value = "X";
                    b8.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b8.value = "0";
                    b8.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
    
            b9.onclick = function () {
                if (flag == 1) {
                    b9.value = "X";
                    b9.disabled = true;
                    flag = 0;
                    document.getElementById('print')
                            .innerHTML = "Turno del jugador 0";
                }
                else {
                    b9.value = "0";
                    b9.disabled = true;
                    flag = 1;
                    document.getElementById('print')
                        .innerHTML = "Turno del jugador X";
                }
            }
        }
        
    }
}

export default PageNosotros;