import React from 'react'
import Navigation from '../components/Navigation'
import { Container, Row, Col , Card, ListGroup} from 'react-bootstrap'

export default function Projects() {
    return (
        <div>
            <Navigation/>
            <Container className="mt-5 mb-5">
                <Row className="mt-5">
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/iscroller.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>iScroller</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Python with OpenCV libraries</Card.Subtitle>
                                <Card.Text>
                                    An application to scroll screen using OpenCV to track eye motions.
                                    <br/>
                                    Thanks to my teammates who have always been my side in TAMU Hackathon 2020. We didn't get an award, but we were proud of us. (And we got a reference to a professor in Computer Vision!)
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link href="https://devpost.com/software/iscroller">Devpost</Card.Link>
                                    <Card.Link href="https://github.com/Yoshinese/iScroller">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/colorfind.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>ColorFind</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Python with Google Vision API</Card.Subtitle>
                                <Card.Text>
                                    A simple application using Google Vision API to help detect colors. Main purpose is to improve colorblind people life experiences.
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link  href="https://devpost.com/software/tamuhack2020">Devpost</Card.Link>
                                    <Card.Link  href="https://github.com/fool1280/TAMUHack2020">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/ijobs.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>iJobs</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">React JS, React Hooks, and React Router</Card.Subtitle>
                                <Card.Text>
                                    Cloning a job finding service in Vietnam.
                                    <br/>
                                    A simple page with required login.
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link href="https://henry-ijobs.netlify.app/">Demo</Card.Link>
                                    <Card.Link href="https://github.com/fool1280/iJobs">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/raincheck.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>No more lying raincheck.</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">React JS and OpenWeather API</Card.Subtitle>
                                <Card.Text>
                                    Have you ever asked to hangout and your friends answering with raincheck statements?
                                    <br/>
                                    Well, no more lying raincheck.
                                    <br/>
                                    Current location is from access point; other locations are where my friends are.
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link  href="https://rain-check-real-fast.netlify.app/">Demo</Card.Link>
                                    <Card.Link  href="https://github.com/fool1280/RainCheck">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/henrys-corner.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Henry's Corner</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">React JS, React Hooks, and TMDb API</Card.Subtitle>
                                <Card.Text>
                                    In my experiences, good movies save time and effort.
                                    <br/>
                                    I realized IMDb is too complicated for me, and I couldn't get used to it.
                                    <br/>
                                    So I made a cloning of it. You can search by different categories or just simply popular. Have a slider to get your customized ratings (6 is a good start!).
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link href="https://henrys-corner.netlify.app/">Demo</Card.Link>
                                    <Card.Link href="https://github.com/fool1280/movies-api">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/tictactoe.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Tic Tac Toe</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">React JS and React Hooks</Card.Subtitle>
                                <Card.Text>
                                    Tic Tac Toe React version (and more beautiful).
                                    <br/>
                                    You probably already know; however, you start as player X.
                                    <br/>
                                    Future Goals: adding computer player.
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link  href="https://henry-tictactoe.netlify.app/">Demo</Card.Link>
                                    <Card.Link  href="https://github.com/fool1280/tic-tac-toe">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/todolist.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>To Do List</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">HTML, CSS, and JavaScript</Card.Subtitle>
                                <Card.Text>
                                    As a college student, I always found myself drowning in deadlines.
                                    <br/>
                                    As a programmer, a to do list was a great beginner exercise to learn.
                                    <br/>
                                    So here it is. You can add task, sort it by priority, and (finally) delete it when you finish. 
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link href="https://todo-list-byhenry.netlify.app/">Demo</Card.Link>
                                    <Card.Link href="https://github.com/fool1280/To-do-List">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex" sm="6">
                        <Card className="flex-fill border border-dark" style={{ width: '100%' }}>
                            <Card.Img className="border-bottom border-dark" variant="top" src="/images/monster-catcher.png" ></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Monster Catcher</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">HTML, CSS, and JavaScript</Card.Subtitle>
                                <Card.Text>
                                    A simple game to take up your time.
                                    <br/>
                                    If you love cat hero and dinosaur, you'll love this game.
                                    <br/>
                                    Player can play, record score, and invite other peers to compete. Ranking is included.
                                </Card.Text>
                                <div className="mt-auto">
                                    <Card.Link  href="https://henry-monster-catcher.netlify.app/">Demo</Card.Link>
                                    <Card.Link  href="https://github.com/fool1280/Monster-Catcher">Github</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
