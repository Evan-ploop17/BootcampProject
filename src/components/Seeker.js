import React, { Component } from 'react';

class Seeker extends Component{

    seekerRef = React.createRef();
    
    handlerData = (e) =>{
        e.preventDefault()
        // Manera de obtener el valor del texto
        console.log("palabra "+this.seekerRef.current.value)
        const wordToSearch = this.seekerRef.current.value
        // Así podemos enviar un valor del child al parent
        this.props.getDataToSearch(wordToSearch)
    }

    render() {
        return (
            <form onSubmit={this.handlerData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.seekerRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="buscar..." />
                    </div>
                </div>
            </form>
        )
    }
}

export default Seeker;