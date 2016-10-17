import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.innerText);
  }
  render() {
    const { year, photos, fetching } = this.props;

    return <div className='ib page'>
      <p>
        <button className={classNames('btn', {'active': year == '2016'})} onClick={::this.onYearBtnClick}>2016</button>{' '}
        <button className={classNames('btn', {'active': year == '2015'})} onClick={::this.onYearBtnClick}>2015</button>{' '}
        <button className={classNames('btn', {'active': year == '2014'})} onClick={::this.onYearBtnClick}>2014</button>
      </p>
      <h3>{year} год</h3>
      {
        fetching ?
          <p>Загрузка</p>
          :
          <p>У тебя {photos.length ? photos.length : 'нет'} фото.</p>
      }
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
};