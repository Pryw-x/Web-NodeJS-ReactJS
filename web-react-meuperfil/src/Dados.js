import React, { Component } from 'react';
import './Dados.css';
 
class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Meu Perfil'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Pedro',
      dados: 'Vivo',
      formacao: 'Atualmente cursando Ciência da Computação na UNIP',
      exp: 'Conhecimentos',
      projeto: 'Todos estão no GitHub em "Web-NodeJS-ReactJS"'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;
