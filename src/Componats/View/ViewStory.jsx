import React, { useEffect, useState } from 'react'
import './ViewStory.css'
import { Button, Container, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PenFill, TrashFill } from 'react-bootstrap-icons'
import { DeleteStoryAsync, getStoryAsync, getStorysAsync } from '../services/action/Story.action'

function ViewStory() {

    const { storys, isLoading, isEdit } = useSelector(state => state.StoryReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleIsEdit = (id) => {
        dispatch(getStoryAsync(id));
    }

    const [isDelete, setIsDelete] = useState(false)

    const handleDelete = (id) => {

        dispatch(DeleteStoryAsync(id))
        setIsDelete(!isDelete)
    }

    useEffect(() =>{
        console.log("story view useeffect");
        dispatch(getStorysAsync());
    }, [])

    if(isEdit){
        navigate('/updateStory');
    } else {

        return (
            <>
                <Container>
                    {
                        isLoading ? <h1>Loading...!</h1> :
                            storys.map((s) => {
                                return (
                                    <>
                                        <Card className="mb-4" style={{ height: '500px', width: '100%', display: 'flex', padding: '30px' }}>
                                            <Row>
                                                <Col md={6}>
                                                    <Card.Img variant="top" src={s.imgUrl} className='rounded' />
                                                </Col>
                                                <Col md={6}>
                                                    <Card.Body className='scroll-div'>
                                                        <Card.Title>{s.title}</Card.Title>
                                                        <Card.Text>{s.designation}</Card.Text>
                                                    </Card.Body>
                                                    <div className='text-center d-flex justify-content-center'>
                                                        <Button className='text-dark btn btn-primary' onClick={() => handleIsEdit(s.id)}>
                                                            <PenFill />
                                                        </Button>
                                                        ||
                                                        <Button variant='danger'>
                                                            <TrashFill onClick={() => handleDelete(s.id)} />
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </>
                                )
                            })
                    }
    
                </Container>
    
            </>
        )
    }

}

export default ViewStory