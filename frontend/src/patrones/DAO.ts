interface Book{
    id: number;
    tittle;
    author: string;
}

const clase:Book  ={
    id:1,
    tittle: "hola",
    author: "hola",

}

class usuario{
    correo: "" ;
    contra: 0;
}



interface DAO{
    findAll?: () => void;
    create?: () => void;
    findOne?: () => void;
    update?: () => void;
    remove?: () => void;
}


class DaoData implements DAO{
    findAll(): void{

    }

    create(): void{

    }
    findOne():void{

    }
    update(): void{

    }
    remove(): void{
        
    }
}