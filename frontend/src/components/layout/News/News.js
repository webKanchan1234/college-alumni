import React from 'react'
import "./news.css"
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"

const News = () => {
  const news = [
    {
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      title: "Title",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laborum cum accusantium esse velit fugiat harum ullam fugit eligendi facere voluptatem est, placeat eaque, repellendus exercitationem tenetur ducimus iure voluptate.",
      date: "01 Jan 22",
      comment: "No comment",
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      title: "Title",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laborum cum accusantium esse velit fugiat harum ullam fugit eligendi facere voluptatem est, placeat eaque, repellendus exercitationem tenetur ducimus iure voluptate.",
      date: "01 Jan 22",
      comment: "No comment",
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      title: "Title",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laborum cum accusantium esse velit fugiat harum ullam fugit eligendi facere voluptatem est, placeat eaque, repellendus exercitationem tenetur ducimus iure voluptate.",
      date: "01 Jan 22",
      comment: "No comment",
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      title: "Title",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laborum cum accusantium esse velit fugiat harum ullam fugit eligendi facere voluptatem est, placeat eaque, repellendus exercitationem tenetur ducimus iure voluptate.",
      date: "01 Jan 22",
      comment: "No comment",
    }, {
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      title: "Title",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laborum cum accusantium esse velit fugiat harum ullam fugit eligendi facere voluptatem est, placeat eaque, repellendus exercitationem tenetur ducimus iure voluptate.",
      date: "01 Jan 22",
      comment: "No comment",
    }
  ]
  return (
    <div className='news-container'>
      {
        news.map((data, idx) => {
          return (
            <Link to={`/news/${idx}`} id="link" key={idx}>
              <Card style={{ width: '18rem', margin: "0.5vmax" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.description.substring(0,100)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          )
        })
      }

    </div>
  )
}

export default News