import React from 'react';
import './reset.css';
import './App.css';
import CSVReader from 'react-csv-reader'

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
    this.setState({data, filterData:data ,uploadedData:true});
  }

  showData = () => {
    if(!this.state.uploadedData){
      return <p>No se ha cargado ningún archivo.</p>
    }else {
      return<p>{this.state.data}</p>
    }
  }

  ascendenteParticipantes = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[1] > b[1] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});

    this.forceUpdate();
  }

  descendenteParticipantes = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[1] < b[1] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});
    this.forceUpdate();
  }

  ascendenteA = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[2] > b[2] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});

    this.forceUpdate();
  }

  descendenteA = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[2] < b[2] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});
    this.forceUpdate();
  }

  ascendenteB = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[3] > b[3] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});

    this.forceUpdate();
  }

  descendenteB = () => {
    var arreglo = this.state.filterData;
    arreglo = arreglo.sort( function(a, b) { 
      return a[3] < b[3] ? 1 : -1;
    });
    
    this.setState({filterData:arreglo});
    this.forceUpdate();
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
           this.state.filterData ? this.state.filterData .map( (item) => {
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

        <section className="Ui-botones">
          <article className="Botones">
            <h1>PARTICIPACIONES</h1>
            <button onClick={ () => this.descendenteParticipantes()}>ascendente</button>
            <button onClick={ () => this.ascendenteParticipantes()}>descendente</button>
          </article>

          <article className="Botones">
            <h1>DATOS A</h1>
            <button onClick={ () => this.descendenteA()}>ascendente</button>
            <button onClick={ () => this.ascendenteA()}>descendente</button>
          </article>

          <article className="Botones">
            <h1>DATOS B</h1>
            <button onClick={ () => this.descendenteB()}>ascendente</button>
            <button onClick={ () => this.ascendenteB()}>descendente</button>
          </article>
        </section>

        


        {//<button>Cargar archivo nuevamente</button> 
        }     
      </div>
      

    );
  }
}