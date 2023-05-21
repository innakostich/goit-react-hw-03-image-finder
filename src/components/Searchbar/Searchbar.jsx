

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import css from './Searchbar.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// class Searchbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: '',
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { searchQuery } = this.state;

//     if (searchQuery.trim() === '') {
//       alert('Please enter a search query');
//       return;
//     }

//     this.props.onSubmit(searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   handleChange = (e) => {
//     this.setState({ searchQuery: e.target.value });
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.button}>
//             <span className={css.buttonLabel}>Search</span>
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchQuery}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
