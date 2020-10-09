import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById'

export const HeroeScreen = ({ history }) => {
  const { heroeId } = useParams()
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId])
  if (!heroe) {
    return <Redirect to='/' />
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }
  return (
    <div className='row mt-5'>
      <div className='col-sm-12 col-md-4'>
        <img
          src={`https://francoderweb.github.io/heroes-app/assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-sm-12 col-md-8 animate__animated animate__fadeIn'>
        <h3 className='text-center'>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className='mt-3 text-center'>Characters</h5>
        <p className='text-center'>{characters}</p>

        <button className='btn btn-outline-info m-3' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
