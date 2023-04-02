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
            newId= this.products[this.products.length-1].id +1;
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

    //Entrega los productos en el arreglo
    getProducts(){
        return this.products;
    }
    //Encontrar producto según ID
    getProductById(id){
        //Se genera una nueva variable la cual define si el ID se encuentra creado en el arreglo productos
        const productFound =this.products.find((product)=>product.id === id)
        //En caso de no se encontrado la variable tiene como resultado undefined y retorna el mensaje "producto no encontrado"
        if(!productFound){
          return console.log(`producto no encontrado con el id ${id}`)
        }
        //En caso de ser encontrado retorna el producto
        console.log("productFound: ",productFound);
    }
}

//
const manager1= new ProductManager();
console.log("manager1:", manager1);

//Ejemplo agregar productos, se omite el id porque se genera automáticamente
//Propducto agregado 1
manager1.addProduct("chaqueta","chaqueta casual", 20000, "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw001e95cd/images/imagenes-productos/800/MKXV/MKXV884FLW-001.png?sw=513&sh=654&sm=fit","100",10);
//Propducto agregado 2
manager1.addProduct("polera","polera manga corta", 10000, "https://media.vogue.co.uk/photos/63ce5c6cc69b9c28ec2f0317/master/w_1280%2Cc_limit/tshirt2301_cos2.png","101",10);



console.log("productos manager1: ", manager1.getProducts());

manager1.getProductById(10); //no encontrado
manager1.getProductById(1); //encontrado