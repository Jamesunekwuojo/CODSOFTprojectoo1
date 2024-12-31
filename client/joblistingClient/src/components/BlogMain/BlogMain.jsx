import { Container, Row, Col } from "react-bootstrap"
import { useGetBlogidQuery } from "../../slices/blogsApiSlice"
import { useParams } from "react-router-dom"

const BlogMain = () => {

    const {id} = useParams()

    const { data: blog, isLoading, isError, error } = useGetBlogidQuery(id)

 

    if (isLoading) {
        return (
            <Container>
                <Row>
                    <p>Loading.....</p>
                </Row>
            </Container>
        )
    }

    if (isError) {
        return (
            <Container>
                <Row>
                {error?.data?.message || "Blog not found!"}
                </Row>
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                <Col>
                <h1>{blog.  articleTitle}</h1>
                <p>{blog.    articleDescript}</p>
                </Col>
            </Row>
        </Container>

    )

}

export  default BlogMain