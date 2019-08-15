import React from 'react';
import './reset.css';
import './App.css';
import CSVReader from 'react-csv-reader'

var datos = [];

export default class App extends React.PureComponent{

  constructor(props){
    super(props);
    this.state={
      data: null,
      filterData:null,
      uploadedData: false,
    }
  }

  uploadData = ( data ) => {
    data.shift();
    datos = data;
    this.setState({data, filterData:data ,uploadedData:true});
    console.log(this.state.data);
  }

  showData = () => {
    if(!this.state.uploadedData){
      return <p>No se ha cargado ningún archivo.</p>
    }else {
      return<p>{this.state.data}</p>
    }
  }

  ascendente = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[1] > b[1] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});
    console.log(this.state.filterData);
  }

  descendente = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[1] < b[1] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});
    console.log(this.state.filterData);
  }

  render(){
    return (
      <div className="App">
        <CSVReader
          cssClass="react-csv-input"
          label="Por favor, adjunte el archivo CSV que quiere visualizar"
          onFileLoaded={this.uploadData}
        />

        <section className="Table">
          <article className="Table__title">
            <p className="Table__title__text">Correo</p>
            <p className="Table__title__text">Participaciones</p>
            <p className="Table__title__text">Datos A</p>
            <p className="Table__title__text">Datos B</p>
          </article>

          {
           this.state.filterData ? datos.map( (item) => {
                return(
                  <article className="Table__item" key={item} >
                    <p className="Table__item__text">{item[0]}</p>
                    <p className="Table__item__text">{item[1]}</p>
                    <p className="Table__item__text">{item[2]}</p>
                    <p className="Table__item__text">{item[3]}</p>
                  </article>
                )
              })
                :
                ''
            }
        </section>

        <article className="Botones">
          <button onClick={ () => this.ascendente()}>Filtrar participaciones de manera ascendente</button>
          <button onClick={ () => this.descendente()}>Filtrar participaciones de manera descendente</button>
        </article>


        {//<button>Cargar archivo nuevamente</button> 
        }     
      </div>
      

    );
  }
}