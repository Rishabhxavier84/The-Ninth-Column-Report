import React from 'react'
import './NewsItem.css'
import bgImg from '../../assets/bg.jpg'

const NewsItem = ({title, imgSrc, description, url}) => {
    return (
        <div className='newsContainer d-inline-block  my-3 mx-3'>
            <div className="card bg-light text-dark px-2 py-2" style={{width: "20rem"}}>
                <img src={imgSrc ? imgSrc : bgImg} className="card-img-top" alt={title} style={{height: "200px", width: "100%"}} />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.slice(0,50) : ""}...</h5>
                    <p className="card-text">{description ? description.slice(0,90) : title}...</p>
                    <a href={url} target='_blank' className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
