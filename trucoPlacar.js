window.onload = function (e) {

    var spanVencedor = document.getElementById("txtVencedor");

    var span = document.getElementById("txtSpan1");
    
    var spanDiminuir1 = document.getElementById("diminuir1");
    var spanAumentar1 = document.getElementById("aumentar1");
    var txtDiminuir1 = document.getElementById("txtDiminuir1");
    var txtAumentar1 = document.getElementById("txtAumentar1");
    var dupla1 = document.getElementById("txtNome1");

    var span2 = document.getElementById("txtSpan2");
    var spanDiminuir2 = document.getElementById("diminuir2");
    var spanAumentar2 = document.getElementById("aumentar2");
    var txtDiminuir2 = document.getElementById("txtDiminuir2");
    var txtAumentar2 = document.getElementById("txtAumentar2");
    var dupla2 = document.getElementById("txtNome2");

    var botaoTrucar = document.getElementById("btnTrucar");
    var aumentarTrucar = document.getElementById("txtTrucar");

    spanVencedor.textContent = "";

    span.textContent = 0;
    span2.textContent = 0;

    spanDiminuir1.textContent = - 1;
    spanAumentar1.textContent = "+1";

    spanDiminuir2.textContent = - 1
    spanAumentar2.textContent = "+1";

    aumentarTrucar.textContent = "Trucar + 3";

    

    txtDiminuir1.onclick = function (e) {
        if (span.textContent > 0) {
            span.textContent = span.textContent - 1;
            

        }
        else {
            span.textContent = 0;
        }
    }

    txtAumentar1.onclick = function (e) {
        var equipe1 = dupla1.value;
        
        if (span.textContent >= 0 && span.textContent < 11) {
            span.textContent = Number(span.textContent) + 1;
            
        }
        else if (span.textContent == 11) {
            span.textContent = Number(span.textContent) + 1;
            spanVencedor.textContent += equipe1 + " vence"
        }
        else {
            span.textContent = 0;
            spanVencedor.textContent = "";
        }
    }

    txtDiminuir2.onclick = function (e) {
        if (span2.textContent > 0) {
            span2.textContent = span2.textContent - 1;
            
        }
        else {
            span2.textContent = 0;
        }
    }

    txtAumentar2.onclick = function (e) {
        var equipe2 = dupla2.value;
        if (span2.textContent >= 0 && span2.textContent < 11 ) {
            span2.textContent = Number(span2.textContent) + 1;
            
        }
        else if (span2.textContent == 11) {
            span2.textContent = Number(span2.textContent) + 1;
            spanVencedor.textContent += equipe2 + " vence";
        }
        else {
            span2.textContent = 0;
            spanVencedor.textContent = "";
        }
    }

    //var modoTruco = true;
    
        // Primeiro clique no bot�o
        botaoTrucar.onclick = function (e) {

            if (aumentarTrucar.textContent == "Trucar + 3") {
                spanAumentar1.textContent = "+3"
                spanAumentar2.textContent = "+3"
                aumentarTrucar.textContent = "Trucar + 6";
                


                txtAumentar1.onclick = function (e) {

                    var equipe1 = dupla1.value;
                    if (span.textContent >= 0 && span.textContent < 11) {
                        if (aumentarTrucar.textContent == "Trucar + 6") {
                            span.textContent = Number(span.textContent) + 3;
                            spanAumentar1.textContent = "+1";
                            spanAumentar2.textContent = "+1";
                            aumentarTrucar.textContent = "Trucar + 3";

                           

                            if (span.textContent >= 12) {
                                span.textContent = 12;
                                spanVencedor.textContent += equipe1 + " vence"
                            }

                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span.textContent = Number(span.textContent) + 1;

                        }

                    }
                    else if (span.textContent == 11) {
                        span.textContent = Number(span.textContent) + 1;
                        spanVencedor.textContent += equipe1 + " vence"

                    }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;

                        spanVencedor.textContent = "";
                    }


                }




                txtAumentar2.onclick = function (e) {
                    var equipe2 = dupla2.value;

                    if (span2.textContent >= 0 && span2.textContent < 11) {
                        if (aumentarTrucar.textContent == "Trucar + 6") {
                            span2.textContent = Number(span2.textContent) + 3;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";



                            if (span2.textContent >= 12) {
                                span2.textContent = 12;
                                spanVencedor.textContent += equipe2 + " vence"
                            }
                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span2.textContent = Number(span2.textContent) + 1;

                        }


                    }
                    else if (span2.textContent == 11) {
                        span2.textContent = Number(span2.textContent) + 1;
                        spanVencedor.textContent += equipe2 + " vence"

                    }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                       
                        spanVencedor.textContent = "";

                    }

                }

            }


            //segundo clique no bot�o
            else if (aumentarTrucar.textContent == "Trucar + 6") {
                spanAumentar1.textContent = "+" + 6
                spanAumentar2.textContent = "+" + 6

                aumentarTrucar.textContent = "Trucar + 9";

                txtAumentar1.onclick = function (e) {
                    var equipe1 = dupla1.value;
                    if (span.textContent >= 0 && span.textContent < 11) {
                        if (aumentarTrucar.textContent == "Trucar + 9") {
                            span.textContent = Number(span.textContent) + 6;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";

                            if (span.textContent >= 12) {
                                span.textContent = 12;
                                spanVencedor.textContent += equipe1 + " vence"
                            }

                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span.textContent = Number(span.textContent) + 1;

                        }

                    }
                    else if (span.textContent == 11) {
                        span.textContent = Number(span.textContent) + 1;
                        spanVencedor.textContent += equipe1 + " vence"

                    }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                        spanVencedor.textContent = "";
                    }
                }

                txtAumentar2.onclick = function (e) {

                    var equipe2 = dupla2.value;

                    if (span2.textContent >= 0 && span2.textContent < 11) {
                        if (aumentarTrucar.textContent == "Trucar + 9") {
                            span2.textContent = Number(span2.textContent) + 6;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";

                            if (span2.textContent >= 12) {
                                span2.textContent = 12;
                                spanVencedor.textContent += equipe2 + " vence"
                            }
                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span2.textContent = Number(span2.textContent) + 1;

                        }

                    }
                    else if (span2.textContent == 11) {
                        span2.textContent = Number(span2.textContent) + 1;
                        spanVencedor.textContent += equipe2 + " vence"
                    }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                        spanVencedor.textContent = "";
                    }

                }

            }


            //terceiro clique no bot�o
            else if (aumentarTrucar.textContent == "Trucar + 9") {
                spanAumentar1.textContent = "+" + 9
                spanAumentar2.textContent = "+" + 9

                aumentarTrucar.textContent = "Trucar + 12";

                txtAumentar1.onclick = function (e) {
                    var equipe1 = dupla1.value;
                    if (span.textContent >= 0 && span.textContent < 11) {
                        if (aumentarTrucar.textContent == "Trucar + 12") {
                            span.textContent = Number(span.textContent) + 9;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";

                            if (span.textContent >= 12) {
                                span.textContent = 12;
                                spanVencedor.textContent += equipe1 + " vence"
                            }
                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span.textContent = Number(span.textContent) + 1;

                        }
                    }
                    else if (span.textContent == 11) {
                        span.textContent = Number(span.textContent) + 1;
                        spanVencedor.textContent += equipe1 + " vence"
                    }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                        spanVencedor.textContent = "";
                    }
                }

                txtAumentar2.onclick = function (e) {

                    var equipe2 = dupla2.value;

                    if (span2.textContent >= 0 && span2.textContent < 11) {
                        if (aumentarTrucar.textContent == "Trucar + 12") {
                            span2.textContent = Number(span2.textContent) + 9;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";

                            if (span2.textContent >= 12) {
                                span2.textContent = 12;
                                spanVencedor.textContent += equipe2 + " vence"
                            }
                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span2.textContent = Number(span2.textContent) + 1;

                        }
                    }
                    else if (span2.textContent == 11) {
                        span2.textContent = Number(span2.textContent) + 1;
                        spanVencedor.textContent += equipe2 + " vence"
                    }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                        spanVencedor.textContent = "";
                    }

                }

            }


            // Quarto clique no bot�o
            else if (aumentarTrucar.textContent == "Trucar + 12") {
                spanAumentar1.textContent = "+" + 12
                spanAumentar2.textContent = "+" + 12

                aumentarTrucar.textContent = "1 Ponto";

                txtAumentar1.onclick = function (e) {
                    var equipe1 = dupla1.value;
                    if (span.textContent >= 0 && span.textContent < 11) {
                        if (aumentarTrucar.textContent == "1 Ponto") {
                            span.textContent = Number(span.textContent) + 12;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";
                            
                            if (span.textContent >= 12) {
                                span.textContent = 12;
                                spanVencedor.textContent += equipe1 + " vence"
                            }

                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span.textContent = Number(span.textContent) + 1;
                            aumentarTrucar.textContent = "Trucar + 3";
                            span.textContent = 0;
                            span2.textContent = 0;

                        }
                    }
                    //else if (span.textContent == 11) {
                    //span.textContent = Number(span.textContent) + 1;

                    // }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                        spanVencedor.textContent = "";
                    }
                }

                txtAumentar2.onclick = function (e) {

                    var equipe2 = dupla2.value;

                    if (span2.textContent >= 0 && span2.textContent < 11) {
                        if (aumentarTrucar.textContent == "1 Ponto") {
                            span2.textContent = Number(span2.textContent) + 12;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";
                            
                            if (span2.textContent >= 12) {
                                span2.textContent = 12;
                                spanVencedor.textContent += equipe2 + " vence"
                            }
                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span2.textContent = Number(span2.textContent) + 1;
                            aumentarTrucar.textContent = "Trucar + 3";
                            span.textContent = 0;
                            span2.textContent = 0;

                        }

                    }
                    //else if (span2.textContent == 12) {
                    //
                    //}
                    else {
                        span2.textContent = 0;
                        span2.textContent = 0;

                        spanVencedor.textContent = "";
                    }

                }

            }


            else if (aumentarTrucar.textContent == "1 Ponto") {
                spanAumentar1.textContent = "+" + 1
                spanAumentar2.textContent = "+" + 1

                aumentarTrucar.textContent = "Trucar + 3";

                txtAumentar1.onclick = function (e) {
                    var equipe1 = dupla1.value;
                    if (span.textContent >= 0 && span.textContent < 11) {
                        if (aumentarTrucar.textContent == "1 Ponto") {
                            span.textContent = Number(span.textContent) + 12;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";
                            spanVencedor.textContent += equipe1 + " vence"

                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span.textContent = Number(span.textContent) + 1;
                            aumentarTrucar.textContent = "Trucar + 3";
                            
                        }
                    }
                    else if (span.textContent == 11) {
                        span.textContent = Number(span.textContent) + 1;
                        spanVencedor.textContent += equipe1 + " vence"

                     }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                        spanVencedor.textContent = "";
                    }
                }

                txtAumentar2.onclick = function (e) {
                    var equipe2 = dupla1.value;
                    if (span2.textContent >= 0 && span2.textContent < 11) {
                        if (aumentarTrucar.textContent == "1 Ponto") {
                            span2.textContent = Number(span2.textContent) + 12;
                            spanAumentar1.textContent = "+" + 1;
                            spanAumentar2.textContent = "+" + 1;
                            aumentarTrucar.textContent = "Trucar + 3";
                            spanVencedor.textContent += equipe2 + " vence"

                        }
                        else if (aumentarTrucar.textContent == "Trucar + 3") {
                            span2.textContent = Number(span2.textContent) + 1;
                            aumentarTrucar.textContent = "Trucar + 3";

                        }
                    }
                    else if (span.textContent == 11) {
                      span.textContent = Number(span.textContent) + 1;
                      spanVencedor.textContent += equipe2 + " vence"
                     }
                    else {
                        span.textContent = 0;
                        span2.textContent = 0;
                        spanVencedor.textContent = "";
                    }
                }

            }

        }
        

   

}