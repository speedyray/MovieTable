import React from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: getMovies()
        }
    }
     handleDelete = (movie)=>{
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        
        this.setState({movies: movies})
     }

    render(){
        return(<React.Fragment>
            <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button>
              </tr>
              
            

              ) )}
            </tbody>
          </table>
            </React.Fragment>)
    }

}










export default Movies