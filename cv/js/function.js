function crea_elem(frase, tag){
    let b = document.createTextNode(frase)
    let c = document.createElement(tag)
    c.setAttribute('id', frase)
    c.appendChild(b)
    return c
  }
  
  function mOver(obj) {
    data = obj.getAttribute('data-value')
    // let b = document.createTextNode(obj.getAttribute('data-value'))
    // let c = document.createElement('p')
    // c.setAttribute('id', obj.getAttribute('data-value'))
    // c.appendChild(b)
    title = obj.getAttribute('data-title')
    document.getElementById("brand").appendChild(crea_elem(title, 'p'));
    document.getElementById("brand").appendChild(crea_elem(data, 'h3'));
  }
  
  
  function mOut(obj) {
    document.getElementById(obj.getAttribute('data-title')).remove();
    document.getElementById(obj.getAttribute('data-value')).remove();
  }

  