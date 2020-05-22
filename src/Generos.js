import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Generos = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
      axios
          .get('/api/genres')
          .then(res => {
              setdata(res.data.data)
          })
  }, [])

  const renderizalinha = record => {
      return (
        <tr key={record.id}>
          <th scope='row'>{record.id}</th>
          <td>{record.name}</td>
          <td><button>+</button></td>
        </tr>
      )
  }

  if(data.length === 0){
    return (
      <div className='container'>
        <h1>Gêneros</h1>
        <div className='alert alert-warning' role='alert'>
          Você não possui gêneros criados.
        </div>
      </div>
    )
  }

  return (
      <div className='container'>
          <h1>Gêneros</h1>
          <table className='table table-dark'>
              <thead>
                <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nome</th>
                </tr>
              </thead>
              <tbody>
                {data.map(renderizalinha)}
              </tbody>
          </table>
      </div>
  )
}

export default Generos