import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h4 className="card-nota_categoria">{this.props.categoria}</h4>
          <div className="card-nota_identificador">
            <h3 className="card-nota_titulo">{this.props.titulo}</h3>
            <DeleteSVG
              className="card-nota_deletar"
              onClick={this.apagar.bind(this)}
            />
          </div>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
