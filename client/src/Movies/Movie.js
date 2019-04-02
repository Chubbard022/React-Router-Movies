// import React, { Component } from 'react';
// import axios from 'axios';
// import MovieCard from './MovieCard';


// export default class Movie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movie: null
//     };
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     this.fetchMovie(id);
//   }

//   fetchMovie = id => {
//     console.log(axios)
//     axios
//       .get(`http://localhost:5000/api/movies/${id}`)
//       .then(response => {
//         this.setState(() => ({ movie: response.data }));
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   render() {
//     if (!this.state.movie) {
//       return <div>Loading movie information...</div>;
//     }
//     {this.state.movies.map(movie => (
//         <MovieCard key={movie.id} movie={movie} />
//     ))}
//   }
// }
