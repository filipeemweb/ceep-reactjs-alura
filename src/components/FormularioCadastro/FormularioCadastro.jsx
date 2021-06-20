import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this._titulo = "";
    this._texto = "";
    this._categoria = "Sem categoria";
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this._categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this._titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this._texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this._titulo, this._texto, this._categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_inputs">
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          rows={15}
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button
          type="submit"
          className="form-cadastro_input form-cadastro_submit"
        >
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
