import { Container, Row, Col } from "react-bootstrap"
import { useGetBlogidQuery } from "../../slices/blogsApiSlice"

const BlogMain = () => {

    const { data: blog, isLoading, isError, error } = useGetBlogidQuery()

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