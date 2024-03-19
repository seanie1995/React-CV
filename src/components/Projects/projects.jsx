import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Projects/projects.css'
import Cupcake from "../Projects/projects-photos/cupcake.jpg"
import Earphones from "../Projects/projects-photos/earphones.jpg"
import Food from "../Projects/projects-photos/food.jpg"
import Piggybank from "../Projects/projects-photos/piggybank.jpg"
import spinner from "./projects-photos/loading.gif"




export default function Projects() {

    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = 'https://api.github.com/users/seanie1995/repos';

    const projectNames = ["ATM-Group-Project", "Bakery-Website", "SpelarDuInAPI", "MealsDB"];

    const repositoryImages = {
        "ATM-Group-Project": Piggybank,
        "Bakery-Website": Cupcake,
        "SpelarDuInAPI": Earphones,
        "MealsDB": Food
    };

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const filteredRepos = data
                    .filter(repo => projectNames.includes(repo.name))
                    .slice(0, 4)
                    .map(repo => ({
                        ...repo,
                        image: repositoryImages[repo.name] || null,
                    }));
                setRepos(filteredRepos);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);


            })
    }, [])

    return (
        <>
            <h1>Previous Projects</h1>
            <div className='card-container'>
                {isLoading ? (
                    <div className="spinner-container">
                        <img src={spinner} alt="Loading..." />
                    </div>
                ) : (
                    repos.map(repo => (
                        <Card key={repo.id} className='card' style={{
                            backgroundImage: `url(${repo.image})`,
                            backgroundSize: 'cover'
                        }}>
                            <Card.Body className="card-body">
                                <Card.Title>
                                    <h3>{repo.name}</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>{repo.description}</p>
                                </Card.Text>
                            </Card.Body>
                            <Button className="git-link">
                                <a href={repo.html_url}><h2>{repo.name} on GitHub</h2></a>
                            </Button>
                        </Card>
                    ))
                )}
            </div>
        </>
    )

}

