/* Acá va tu código */
    window.onload = () => {

        // Aca crearemos nuestro DOM
        // Obtener mi div que contendrá mi codigo js en HTML
        const cipherData = document.getElementById("root");
        document.getElementById("bCipher").addEventListener("click",(evento)=>{
            evento.preventDefault();
                 
            let capLetter= document.getElementById("cipherText").value;
            let displace= parseInt(document.getElementById("offset").value);
            
        root.innerHTML = cipher.encode(displace,capLetter)
        });
        const cipherDecode = document.getElementById("root2");
        document.getElementById("dCipher").addEventListener("click",(evento)=>{
            evento.preventDefault();
            let capLetter= document.getElementById("cipherText").value;
            let displace= parseInt(document.getElementById("offset").value);
            
        root.innerHTML = cipher.decode(displace,capLetter)
        }); 
 
    } 
