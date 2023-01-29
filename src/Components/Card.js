import React from 'react'
import "./Card.scss"

const Card = (props) => {
  return (
    <div className='baseCard'>

      {/*conditionally render banner css based on value of props.category*/}
      <h2 className={`banner ${props.category==='Natural' ? 'banner--natural' : (props.category==='Historical' ? 'banner--historical' : 'banner--monument')}`}>
        {props.category}
      </h2>

      <img src={props.img} alt={props.title} />

      {/*add default title if none provided*/}
      <h1 className='title'>{props.title || 'National Park'}</h1>

      <p className='body'>{props.body}</p>

      {/*if no link URL, do not show link but show rest of card and link matches conditionally rendered css based on props.category */}
      <a className={`link ${props.link==='' ? 'link--none' : (props.category==='Natural' ? 'link--natural' : (props.category==='Historical' ? 'link--historical' : 'link--monument'))}`} 
      href={props.link}>
        {props.linkText}
      </a>

    </div>
  )
}

export default Card
