"use strict";

$(function(){
    const lerForm = function(serializacao){
        let parâmetros = new URLSearchParams(serializacao);
        let qtd = parseInt(parâmetros.get("qtd")) || "";
        let somatorio = parâmetros.getAll("soma");
        console.log(somatorio);
    
        $("#qtd").val(qtd);
        if(qtd === "")
            $("#qtd").focus();
        else if(somatorio.length > 0){
            let soma = somatorio.reduce((s,v)=>s+parseFloat(v.replace(",",".")||"0"),0);
            if(isNaN(soma)) soma = 0;
            $("#linha-soma .col").html(`<b>Soma:</b> ${soma.toFixed(2)}`);
        }
        else {
            $("#secao-soma").removeClass("d-none");
    
            let somatorio = $("#linha-somatorio");
            let entradas = Array(qtd).fill("").map((v,i)=>$(`<div class="col-sm-6">
                <input type="text" class="form-control" name="soma" ${i==0?"autofocus":""} value="" pattern="[0-9,.]+"> 
            </div>`)).forEach(v=>somatorio.append(v));
            
            
        }
    };

    lerForm(document.location.search);


    $("#btn-continuar, #btn-somar").click(function(ev){
        ev.preventDefault();
        lerForm($("form").serialize());
    });

    $("#btn-reseta").click(function(){
        $("#secao-soma").addClass("d-none");
        $("#linha-somatorio").html("");
        $("#qtd").val("").focus();

    });
    // if(qtd !== ""){

    // }

});
