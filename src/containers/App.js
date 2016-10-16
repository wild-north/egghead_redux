import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { user, page } = this.props;


    return <div>
      <p>Привет, {user.name}!</p>
      <p>У тебя {page.photos.length} фотографий за {page.year} год.</p>
    </div>
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);