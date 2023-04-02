//DESAFIO Nº1
//ECMAScript y ECMAScript avanzando

class ProductManager{
    constructor(){
        //arreglo productos vacio
        this.products =[];
    } 
    //MÉTODO
    addProduct(title, description, price, thumbnail, code, stock){
        //condicional, todos los campos deben tener datos
        if(!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("Los campos son obligatorios")
        } 
        //Se define una variable que entrega verdadero /falso si el codigo del producto nuevo ya esta incorporado en el arreglo products
        const codeExists = this.products.some((product)=>product.code ===code);
        //Si la variable codeExists es verdadero se notifica que ya esta registrado el código
        if(codeExists){
            return console.log("El código del producto ya se encuentra registrado")
        } 
        //creación de variable ID
        let newId;
        //si el arreglo productos es es vacio
        if(!this.products.length){
            newId=1;
        //en caso contrario, sumar 1 al ID del ùltimo objeto del arreglo
        } else{
            newId= this.product[this.product.length-1].id +1;
            }
            //Se define una nueva constante incorporando el ID
                const newProduct ={
                    id:newId,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                this.products.push(newProduct);
                console.log("nuevo producto agregado", newProduct);
    }
}

const manager1= new ProductManager();
console.log("manager1:", manager1);