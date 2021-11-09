var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});


function resposta(){
    var numeroatomico = parseInt(document.getElementById('numeroatomico').value);
    var elementData= 
    console.log(elementData)
    var div = document.getElementById('resposta')
  

    div.innerHTML =
      `Simbolo = ${elementsinfo[(numeroatomico - 1)]["simbolo"]}<br>Elemento: ${elementsinfo[(numeroatomico - 1)]["nome"]}<br>Densidade : ${elementsinfo[(numeroatomico - 1)]["densidade"]}<br>Massa Atomica  ${elementsinfo[(numeroatomico - 1)]["matomica"]}<br>Distribuicao Eletronica  ${elementsinfo[(numeroatomico - 1)]["eletronicconfig"]}<br>Ponto de fusao ${elementsinfo[(numeroatomico - 1)]["fusao"]}<br>Ponto de ebulicao ${elementsinfo[(numeroatomico - 1)]["ebulicao"]}<br>Coeficiente de Energia Molar :${elementsinfo[(numeroatomico - 1)]["energiamolarcoef"]}<br>Coeficiente de Eletronegatividade  :${elementsinfo[(numeroatomico - 1)]["eletronegatividade"]}<br>Aparencia  :${elementsinfo[(numeroatomico - 1)]["aparencia"]}<br>Coloracao  :${elementsinfo[(numeroatomico - 1)]["color"]}<br>Estado em temp Ambiente  :${elementsinfo[(numeroatomico - 1)]["phase"]}<br>Descoberto Por  :${elementsinfo[(numeroatomico - 1)]["descobertopor"]}<br>Familia  :${elementsinfo[(numeroatomico - 1)]["familia"]}<br>Posicao Eixo X   :${elementsinfo[(numeroatomico - 1)]["posX"]}<br>Posicao Eixo Y   :${elementsinfo[(numeroatomico - 1)]["PosY"]}<br><hr>`;
    

}
