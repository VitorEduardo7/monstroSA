function banco(){
    const bd = [
        {id:1,login:"john", senha:"1234" ,nome:"John", email:"john@gmail.com"},
        {id:2,login:"ringo", senha:"1234@" ,nome:"Ringo", email:"ringo@gmail.com"},
        {id:3,login:"paul", senha:"12345" ,nome:"Paul", email:"Paul@gmail.com"}
        ]
        let dados = JSON.stringify(bd)

        localStorage.setItem("banco", dados)

        console.log(dados)

}

