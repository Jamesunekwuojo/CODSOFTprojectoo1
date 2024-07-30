// BlogCard.js

import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaClock } from 'react-icons/fa';
// import Blogform from "./Blogform"

const BlogCard = ({ imageSrc, date, readTime, title, author, articleLink }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Text className="text-muted mb-1">
          <span>{date}</span> <FaClock className="ml-2" /> {readTime} min read
        </Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>by {author}</Card.Text>
        <Button variant="link" href={articleLink} className="p-0">
          Read More →
        </Button>
      </Card.Body>
    </Card>
  );
};

BlogCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
};

export default BlogCard;
